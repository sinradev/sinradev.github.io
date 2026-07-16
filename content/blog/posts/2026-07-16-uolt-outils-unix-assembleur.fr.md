---

title: "Réécrire les outils Unix en assembleur : la démarche derrière UOLT"
subtitle: "Pourquoi reconstruire cat, ls et sort à la main en assembleur x86_64, comment on garde ça propre, et ce que cette discipline nous apprend sur l'efficacité logicielle"
description: "UOLT (Ultra Optimised Lightweight Toolset) réécrit les utilitaires Unix en assembleur pur : zéro dépendance, syscalls directs, pas de tas mémoire, des binaires statiques sous le kilo-octet. La démarche, le pourquoi, le comment, et le lancement de la collection extras avec uolt-table."
categories: ["Ingénierie"]
excerpt: "Un cat moderne pèse plusieurs dizaines de kilo-octets et tire derrière lui la libc entière. Est-ce que ça doit être le cas ? UOLT répond non : chaque outil est réécrit à la main en assembleur x86_64, sans libc, sans tas mémoire, en syscalls directs. La suite complète tient dans ce qu'un seul binaire coreutils occupe. Voici la démarche."
date: 2026-07-16 09:00:00 +0200
featured_image: /assets/images/blog/2026-07-16-uolt-outils-unix-assembleur-featured.png

---

Ouvrez un terminal et tapez `which cat`. Puis `ls -l` sur le binaire trouvé. Sur une machine Linux typique, `cat` pèse entre 35 et 40 kilo-octets. Ce n'est pas énorme à l'échelle d'un disque moderne. Mais posez-vous la question : de quoi un programme qui copie des octets de l'entrée vers la sortie a-t-il réellement besoin ?

La réponse honnête est : de trois appels système. `read`, `write`, et de quoi savoir quand s'arrêter. Le reste - les dizaines de kilo-octets - c'est la libc, le runtime C, la gestion d'options GNU, les couches d'abstraction empilées au fil des décennies. Utile, souvent. Nécessaire, rarement.

**UOLT** (Ultra Optimised Lightweight Toolset) part de cette observation et la pousse jusqu'au bout : et si on réécrivait les outils Unix fondamentaux entièrement à la main, en assembleur x86_64, sans libc, sans tas mémoire, en parlant directement au noyau ? Le résultat n'est pas une curiosité de laboratoire. C'est une suite de 34 outils POSIX qui fonctionnent, testés au bit près contre les implémentations de référence, et dont l'ensemble tient dans la taille d'un seul binaire coreutils.

Voici la démarche, le raisonnement, et ce qu'on en retire.

## Le pourquoi : trois convictions

### La taille est une fonctionnalité, pas un détail

Sur Linux, la suite UOLT complète - 34 outils - pèse environ **44 kilo-octets** en binaires statiques. Les mêmes outils en version stock du système : **2,13 mégaoctets**. Un facteur d'environ **49**.

L'outil le plus petit, `true`, pèse **384 octets**, dont 21 octets de code machine réel. Le reste, ce sont les en-têtes ELF incompressibles. Un `cat` fait moins de 5 Ko. Un `ls` moins de 12 Ko. La moyenne par outil sous Linux tourne autour de **1,3 Ko**.

Cette compacité n'est pas gratuite ni décorative. Un binaire minuscule démarre plus vite, tient entièrement en cache, ne charge aucune bibliothèque dynamique, et ne présente aucune surface d'attaque venant de dépendances externes. Dans un conteneur, sur un système embarqué, dans une image de récupération, cette différence compte.

### Zéro dépendance, vraiment zéro

Sur Linux, chaque binaire UOLT est **entièrement statique**. Il ne charge aucune libc, aucun runtime, aucun `.so`. Il tourne avec le noyau et rien d'autre. Vous pouvez le copier sur un système nu, sans aucune bibliothèque installée, et il fonctionne.

Cette autonomie change la nature de l'outil. Il n'y a pas de version de glibc à faire correspondre, pas de dépendance à mettre à jour pour une CVE, pas de comportement qui change selon l'environnement. Le binaire est un artefact clos, prévisible, reproductible.

### La lisibilité comme exigence, même en assembleur

L'assembleur a mauvaise réputation : illisible, cryptique, réservé aux initiés. UOLT prend le contre-pied. Le code est écrit en syntaxe Intel, avec des constantes nommées plutôt que des nombres magiques (`mov rax, SYS_WRITE`, jamais `mov rax, 1`), et chaque optimisation est commentée : pourquoi ce registre, pourquoi cette boucle, pourquoi ce choix. Le projet est autant pédagogique que fonctionnel. Une astuce non expliquée est considérée comme un défaut.

## Le comment : une discipline, pas juste du code

Écrire de l'assembleur qui marche est une chose. Maintenir une suite cohérente de dizaines d'outils sur deux systèmes d'exploitation en est une autre. La différence tient dans la discipline.

### Des syscalls directs, une abstraction fine

Chaque outil parle au noyau directement : `open`, `read`, `write`, `close`, `stat`, `getdents`, `mmap`. Aucune couche intermédiaire. Mais un outil ne contient jamais un numéro de syscall en dur. Ces numéros diffèrent entre Linux et macOS, et ils vivent dans une couche par système d'exploitation (`sys/linux/`, `sys/macos/`). Le code de l'outil appelle des points d'entrée symboliques comme `sys_write`. Cette frontière unique est ce qui rend le portage possible sans réécrire la logique métier.

C'est d'ailleurs là que se cachent les surprises. Sur macOS x86_64, certains syscalls que Linux expose directement lèvent un `SIGSYS` et tuent le processus - Apple filtre. La couche par OS absorbe ces divergences : là où Linux utilise le syscall `getcwd`, macOS passe par `open(".")` puis `fcntl(F_GETPATH)`. L'outil, lui, ne voit qu'un `sys_getcwd` uniforme.

### Pas de tas mémoire

La règle est stricte : pas de `malloc`, pas de tas, pas d'allocation cachée. La mémoire vient de la pile, des registres, ou de tampons statiques. Quand un outil doit tenir une quantité non bornée de données en mémoire - comme `sort` qui doit tout charger pour trier - il utilise une région `mmap` explicite, dont l'échec est vérifié, qui grandit de façon contrôlée. C'est une réservation possédée par l'outil, avec un chemin d'erreur en cas de manque de mémoire, pas un tas déguisé. La distinction n'est pas cosmétique : elle garantit qu'un outil ne peut jamais échouer silencieusement en tronquant ses données.

### POSIX, pas GNU

UOLT vise le comportement POSIX, pas la richesse d'options de GNU. Une option n'est implémentée que si POSIX la spécifie pour cet outil. Pas de drapeaux GNU exotiques, pas de double build « standard » et « étendu », pas de mode runtime qui doublerait la surface de test.

Ce choix a un effet de bord élégant : les options POSIX sont précisément celles sur lesquelles les implémentations GNU (Linux) et BSD (macOS) s'accordent. Cela rend chaque outil **testable au bit près** contre l'outil du système sur les deux plateformes, sans cas particulier. Quand un comportement nécessite de distinguer BSD de GNU, c'est le signal qu'on dérive hors de POSIX.

### Une constitution qui gouverne

Ce qui empêche un projet comme celui-ci de partir dans tous les sens, c'est un document de gouvernance versionné - une constitution de onze principes : assembleur uniquement, syscalls directs, zéro dépendance, pas de tas, abstraction fine des syscalls, taille minimale ciblée, optimisation toujours mesurée jamais devinée, POSIX-pas-GNU, code lisible, documentation pédagogique, testé et benchmarké. Chaque changement passe ces gardes-fous. Chaque amendement est justifié et versionné sémantiquement.

## La preuve par les tests

Du code assembleur écrit à la main n'a aucun filet de sécurité : pas de compilateur pour rattraper une erreur de type, pas de garbage collector pour masquer une fuite. Toute la robustesse repose sur les tests. Chaque outil en porte cinq couches :

- **Tests unitaires** et de conformité POSIX.
- **Tests différentiels** : pour la même entrée, la sortie standard, la sortie d'erreur et le code de retour doivent correspondre au bit près à l'implémentation de référence (GNU sur Linux, BSD sur macOS).
- **Fuzzing** : entrées aléatoires et malformées, l'outil ne doit jamais planter ni diverger de la référence.
- **Vérification par trace syscall** : `strace` sur Linux, `dtruss` sur macOS, pour prouver qu'aucun syscall caché ni aucune allocation de tas ne se produit.
- **Benchmark** intégré via `hyperfine`, contre GNU, BSD, BusyBox et Toybox.

Et il y a un plancher de performance : chaque outil doit être au moins aussi rapide que celui qu'il remplace. Sur Linux, où le coût propre de l'outil est observable, `true` et `false` sont environ 1,8 fois plus rapides que coreutils, `echo` environ 2 fois. La règle n'est pas « petit à tout prix » : c'est « petit ET au moins aussi rapide, mesuré à chaque fois ».

## Le nouveau chapitre : la collection extras

Le cœur d'UOLT est volontairement strict : que du POSIX, rien de plus. Mais certains outils sont réellement utiles sans être POSIX du tout - il n'existe même pas d'utilitaire standard pour eux. Plutôt que de polluer le cœur ou de forcer la constitution, ces outils vivent dans une collection séparée : **extras**.

Les extras réutilisent exactement la même infrastructure assembleur - la couche syscall, la bibliothèque interne partagée, le script de lien statique - et obéissent à tous les principes du projet, **sauf** la contrainte POSIX. Chacun reste de l'assembleur x86_64 écrit à la main, en syscalls directs, sans dépendance, sans tas, avec une cible de taille et une batterie de tests complète.

Le premier membre de cette collection est **`uolt-table`**.

### uolt-table : vos pipes en tableaux

L'idée est simple. Beaucoup de commandes Unix produisent des colonnes séparées par des espaces, difficiles à lire quand les largeurs varient. `uolt-table` lit l'entrée standard et la rend sous forme de tableau dessiné avec les caractères de filet Unicode :

```console
$ printf 'nom taille date\nfoo 1024 juil16\nbar 42 juil15\n' | uolt-table
┌─────┬────────┬────────┐
│ nom │ taille │ date   │
│ foo │ 1024   │ juil16 │
│ bar │ 42     │ juil15 │
└─────┴────────┴────────┘
```

Les champs sont découpés sur les suites d'espaces, et les largeurs de colonnes sont calculées en **points de code UTF-8** - donc le texte accentué reste aligné, un « café » de quatre octets comptant bien pour quatre colonnes d'affichage. L'entrée est chargée dans une région `mmap` qui grandit à la demande : n'importe quelle taille d'entrée est rendue sans troncature silencieuse.

Avec l'option `-H`, la première ligne devient un en-tête, séparé du corps par un filet :

```console
$ printf 'nom taille\nfoo 1024\nbar 42\n' | uolt-table -H
┌─────┬────────┐
│ nom │ taille │
├─────┼────────┤
│ foo │ 1024   │
│ bar │ 42     │
└─────┴────────┘
```

Le tout dans un binaire statique de **1952 octets** sur Linux. Pour comparaison, l'outil standard le plus proche, `column`, tire la libc et pèse plusieurs dizaines de kilo-octets.

## Ce que cette démarche nous apprend

On pourrait voir UOLT comme un exercice de style, une prouesse technique sans portée pratique. Ce serait passer à côté de l'essentiel.

Pendant des années, le logiciel a grossi sans que personne ne s'en soucie vraiment. La puissance des machines augmentait plus vite que la négligence, et l'inefficacité restait invisible. Ce n'est plus le cas. Sur les serveurs facturés à la seconde de compute, dans les conteneurs déployés par millions, sur les appareils embarqués contraints en énergie, chaque kilo-octet et chaque milliseconde redeviennent visibles.

Le vrai enseignement d'UOLT n'est pas « réécrivez tout en assembleur ». Presque personne ne devrait faire ça. L'enseignement, c'est la **discipline** : savoir de quoi un programme a réellement besoin, mesurer avant d'affirmer, refuser la complexité qui ne se justifie pas, traiter la taille et la performance comme des fonctionnalités de premier plan plutôt que comme des variables d'ajustement.

C'est une posture qui dépasse largement l'assembleur. Une équipe qui connaît le coût réel de chaque dépendance qu'elle ajoute, qui mesure au lieu de deviner, qui documente le pourquoi de ses choix, produit du logiciel plus solide - quel que soit le langage. UOLT en est la démonstration extrême, poussée jusqu'au bit près.

---

UOLT est open source sous licence MIT, écrit en clair-obscur d'assembleur commenté pour être lu autant qu'exécuté. Les outils sont réécrits à partir des spécifications POSIX, pas dérivés de coreutils - du code propre, à but pédagogique autant que pratique.

La prochaine fois que vous ajouterez une dépendance de plusieurs mégaoctets pour une fonction que trois appels système suffiraient à couvrir, repensez-y. Le logiciel n'a pas besoin d'être lourd pour être bon. Le plus souvent, c'est même l'inverse.
