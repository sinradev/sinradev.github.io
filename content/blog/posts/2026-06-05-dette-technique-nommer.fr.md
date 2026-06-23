---

title: "Dette technique : nommer les dettes plutôt que les « rembourser »"
subtitle: "Chaque équipe tech parle de rembourser sa dette technique. Peu d'équipes savent exactement de quelles dettes elles parlent. Cette imprécision est le premier obstacle à une gestion sérieuse."
description: "La dette technique est souvent traitée comme une masse indistincte à réduire. La gérer sérieusement demande de la nommer précisément : quelle dette, créée quand, pour quelle raison, avec quel impact actuel."
categories: ["Développement Productivité", "Gestion de Projet"]
excerpt: "« On a besoin d'un sprint de dette technique. » Cette phrase est prononcée dans des centaines d'équipes chaque trimestre. Ce qui se passe ensuite : deux semaines de refactorisation sans direction claire, dont la valeur est impossible à communiquer au management, et qui ne change pas fondamentalement les problèmes les plus douloureux."
date: 2026-06-05 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-05-dette-technique-nommer-featured.png

---

La dette technique est une métaphore financière. Ward Cunningham l'a introduite pour expliquer que certains choix d'implémentation rapides mais imparfaits créent une obligation future : soit on les corrige plus tard, soit on paie des intérêts sous forme de ralentissement et de complexité croissante.

La métaphore est utile. Elle souffre d'un problème : comme beaucoup de bonnes métaphores, elle est devenue une catégorie fourre-tout qui désigne à la fois des choses très différentes, ce qui rend son usage précis presque impossible.

Quand un développeur dit « il y a de la dette technique », que signifie-t-il exactement ? Le code est ancien ? Il est mal structuré ? Il est difficile à comprendre ? Il est fragile aux changements ? Il utilise des dépendances obsolètes ? Il n'a pas de tests ? Il a des tests mais ils sont mauvais ? Il fonctionne mais personne ne sait vraiment comment ?

Toutes ces réalités sont regroupées sous le même terme. Et parce qu'elles sont regroupées, elles sont gérées de la même façon : avec des sprints de « remboursement » qui traitent tout en même temps et ne s'attaquent à rien de précis.

## Les différentes formes de dette

Distinguer les types de dette est la première étape d'une gestion utile.

**La dette délibérée.** Choix fait consciemment : « On implémente ça en dur maintenant pour livrer à temps, on généralisera quand on en aura besoin. » C'est de la vraie dette au sens financier : un emprunt avec intention de remboursement. Elle devrait être documentée au moment où elle est contractée.

**La dette accidentelle.** Code écrit de bonne foi à un moment où les contraintes n'étaient pas claires, ou les meilleures pratiques pas encore connues de l'équipe. Pas délibérée, mais pas non plus de la négligence. Elle se découvre en travaillant sur la codebase.

**La dette de contexte.** Code parfaitement correct à l'époque, devenu problématique parce que le contexte a changé : l'architecture a évolué, les exigences de performance ont changé, une nouvelle réglementation impose des contraintes qui n'existaient pas. Ce n'est pas du mauvais code - c'est du bon code qui ne correspond plus à la réalité actuelle.

**La dette d'obsolescence.** Dépendances qui ne reçoivent plus de mises à jour de sécurité, langages ou frameworks dont l'écosystème se réduit, patterns qui ne sont plus maintenables avec les outils disponibles. Cette dette a une composante de risque de sécurité distincte des autres.

**La dette de compréhension.** Code fonctionnel mais que personne ne comprend vraiment en entier. Peut-être qu'il a été écrit par quelqu'un qui n'est plus dans l'équipe, ou dans un style inhabituel, ou avec des hypothèses implicites qui ne sont documentées nulle part. La maintenance de ce code est dangereuse non pas parce qu'il est mauvais mais parce qu'on ne sait pas ce qu'on touche.

Ces cinq types de dette ont des impacts différents, des origines différentes et des solutions différentes. Les traiter de la même façon est inefficace.

## Le registre de dette

La pratique la plus directement utile pour gérer la dette technique est aussi la plus rarement appliquée : tenir un registre.

Un registre de dette est simplement une liste des dettes connues avec, pour chacune, des informations minimales : une description précise, l'impact actuel sur la productivité ou la fiabilité, la raison pour laquelle elle existe, et une estimation de l'effort pour la résoudre.

L'effort de création de ce registre révèle immédiatement deux choses.

Premièrement : les dettes que tout le monde « sait » existent mais que personne n'a jamais écrites. La verbalisation force la précision. « Il y a de la dette dans le module d'authentification » devient « Le module d'authentification utilise une gestion de session stateful qui rend horizontal scaling impossible. Origine : décision de départ par manque de temps. Impact : impossibilité d'ajouter des instances sans travail préalable. Effort estimé : 2 semaines. »

Deuxièmement : les désaccords sur ce qui est de la dette et ce qui ne l'est pas. La dette est souvent dans l'œil du beholder. Ce qui est « sale » pour un développeur peut être « pragmatique » pour un autre. Le registre oblige à un consensus sur ce qui est reconnu comme problème.

## Communiquer la dette au management

Une des difficultés récurrentes dans la gestion de la dette technique est la communication avec les parties prenantes non techniques.

Le management entend « dette technique » comme « problème vague que les développeurs veulent corriger » et n'a aucune base pour évaluer si c'est urgent ou cosmétique. Face à un backlog de fonctionnalités clairement liées à des besoins utilisateurs, la dette technique perd systématiquement.

Un registre de dette bien tenu change cette dynamique. Il permet de traduire la dette en termes d'impact business :

« Le module de rapports prend 45 secondes à générer parce que les requêtes ne sont pas optimisées. Chaque semaine, l'équipe support reçoit 15 tickets d'utilisateurs frustrés par ce délai. Résoudre ce problème prend 5 jours et élimine ces tickets de support. »

Cette formulation est communicable. Elle a un impact mesurable, un coût d'inaction et un coût de résolution. Elle permet au management de prendre une décision éclairée, pas de faire confiance aveuglément aux développeurs qui disent que c'est important.

## La dette intentionnelle comme outil de livraison

Il y a une position défensive fréquente dans les discussions sur la dette technique : les développeurs veulent un code parfait, le management veut livrer vite, et la dette est toujours la faute du management.

Cette position est trop simple.

La dette intentionnelle est parfois le bon choix. Livrer une implémentation imparfaite pour valider un besoin utilisateur avant d'investir dans une version robuste est une décision commerciale sensée. Contourner un problème de performance pour tenir une deadline critique peut être justifié si la dette est documentée et planifiée pour résolution.

Ce qui distingue une bonne dette intentionnelle d'une mauvaise dette accidentelle : la documentation au moment de la création et l'intention de résolution.

Une bonne dette intentionnelle ressemble à ceci : « On hardcode la configuration du service de paiement parce qu'on a besoin de livrer avant la fin du mois. Ticket de dette créé : généraliser la configuration du service de paiement. Priorisé pour le cycle suivant. »

Une mauvaise dette accidentelle ressemble à ceci : « On a livré vite. Le code fonctionne. On verra plus tard. » Il n'y a pas de ticket, pas de documentation, pas d'intention explicite. « Plus tard » ne vient jamais.

## Le piège du sprint de dette

Le sprint entièrement dédié à la dette technique est une pratique courante et souvent inefficace.

Il est courant parce qu'il est visible. « Ce sprint, on fait de la dette » est une communication simple. Il rassure les développeurs qui voient leur travail de maintenance valorisé.

Il est souvent inefficace pour plusieurs raisons.

L'urgence des fonctionnalités reprend ses droits au sprint suivant. Si la dette n'est pas réduite de manière continue, les gains du sprint dédié sont rapidement érodés par les choix du sprint d'après.

Sans registre précis, le sprint de dette manque de direction. Les développeurs s'attaquent à ce qui les dérange personnellement, pas nécessairement à ce qui a le plus d'impact. Le module qu'un développeur trouve « dirty » mais qui ne cause aucun problème opérationnel reçoit de l'attention. Le vrai goulot d'étranglement que personne n'a voulu toucher reste intact.

L'alternative qui fonctionne mieux dans la plupart des équipes : allouer un pourcentage constant du temps de l'équipe à la dette dans chaque cycle (souvent entre 15 % et 25 %), en sélectionnant les items depuis le registre de dette selon leur impact.

Ce n'est pas aussi spectaculaire qu'un sprint dédié. C'est plus efficace sur la durée.

## Ce que la dette révèle sur les décisions passées

Un registre de dette bien tenu a une propriété inattendue : il devient un historique des décisions de l'équipe.

Chaque dette documentée avec sa raison d'origine dit quelque chose sur le contexte dans lequel elle a été créée. Les pressions de délai. Les hypothèses sur la croissance qui ne se sont pas réalisées. Les technologies qui semblaient prometteuses et ne l'ont pas été. Les priorités de l'époque.

Cet historique est précieux pour deux raisons. Il évite de répéter les mêmes erreurs sans avoir appris de la première fois. Et il aide les nouveaux membres de l'équipe à comprendre pourquoi le code est ce qu'il est, plutôt que de passer du temps à corriger des décisions qui avaient du sens dans leur contexte.

---

La dette technique n'est pas un problème à résoudre une fois pour toutes. C'est une réalité permanente du développement logiciel, à gérer de façon continue et éclairée.

L'éclairage commence par nommer précisément ce qu'on doit. Une dette qu'on peut décrire, mesurer et expliquer est une dette qu'on peut gérer. Une masse indistincte de « code legacy » ne l'est pas.
