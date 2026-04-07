---

title: "La tech va devoir ralentir : ressources épuisées, applications obèses, et le retour du bas niveau"
categories: ["Technologie Avenir"]
featured_image: /assets/images/blog/2026-03-23-tech-slowdown-resources-featured.png
---

On nous a vendu l'idée que la technologie est infinie. Des serveurs partout. Des applications plus grosses, plus riches, plus rapides. De l'IA pour tout. Du cloud illimité. Ajoutez de la RAM, ajoutez des cœurs, ajoutez des datacenters.

Sauf que les ressources qui font tourner tout ça, elles, ne sont pas infinies.

Et ce que personne ne veut dire clairement dans l'industrie tech, c'est que nous allons devoir ralentir. Pas parce que nous le voulons. Parce que nous n'aurons pas le choix.

## Le mythe de la croissance infinie

La tech s'est construite sur un postulat implicite : la puissance de calcul double tous les 18 mois (loi de Moore), les coûts baissent, les capacités augmentent. On peut donc se permettre d'écrire du code de plus en plus lourd, de plus en plus abstrait, de plus en plus gourmand. Pourquoi optimiser si le hardware va de toute façon rattraper le logiciel ?

Ce postulat a produit une génération entière de développeurs qui n'ont jamais eu à se soucier des ressources. On lance un conteneur Docker. On ajoute un microservice. On fait tourner Electron pour une simple application de notes. On déploie du JavaScript sur un serveur Node.js qui consomme 512 Mo de RAM pour servir trois utilisateurs.

C'est ce qu'on pourrait appeler l'obésité logicielle : des applications de plus en plus lentes sur du hardware de plus en plus puissant, parce que personne n'a jamais eu à rendre de comptes sur la consommation.

Mais les fondations physiques de tout ça commencent à craquer.

## Les ressources qui s'épuisent

### Le pétrole et l'énergie

Les datacenters consomment aujourd'hui entre 1 et 2% de l'électricité mondiale. Et ce chiffre explose. Un seul datacenter hyperscale peut consommer autant qu'une ville de 50 000 habitants. La majorité de cette électricité vient encore de sources fossiles, directement ou indirectement.

L'entraînement d'un grand modèle de langage comme GPT-4 consomme l'équivalent de plusieurs centaines de vols transatlantiques en émissions CO2. Une seule requête à ChatGPT consomme environ 10 fois plus d'énergie qu'une recherche Google classique. Multipliez par des milliards de requêtes par jour.

L'IA générative, telle qu'elle est déployée aujourd'hui, est énergétiquement insoutenable à l'échelle.

### Les terres rares

Lithium, cobalt, néodyme, indium, gallium, germanium... Ces matériaux sont au coeur de tout appareil électronique moderne : processeurs, batteries, écrans, capteurs. Leur extraction est concentrée dans quelques pays (Congo, Chine, Chili, Australie), soumise à des tensions géopolitiques croissantes, et produit des dégâts environnementaux massifs.

La demande pour ces matériaux va tripler d'ici 2050 selon les projections de l'Agence Internationale de l'Énergie, principalement portée par la transition énergétique et... la tech.

Les semi-conducteurs sont déjà au centre de guerres commerciales entre les États-Unis et la Chine. Taïwan fabrique plus de 90% des puces les plus avancées du monde. La fragilité de cette chaîne d'approvisionnement n'est plus théorique.

### L'eau

Refroidir un datacenter demande des quantités d'eau considérables. Certains grands datacenters consomment plusieurs millions de litres d'eau par jour. Dans des régions déjà en stress hydrique, cela crée des conflits directs avec les populations locales.

Microsoft, Google et Amazon construisent des datacenters dans des zones arides, aggravant la compétition pour une ressource déjà rare.

### La fabrication électronique

Produire un smartphone neuf génère 70 kg d'équivalent CO2. Produire un serveur, plusieurs tonnes. Le cycle de renouvellement du hardware s'est dramatiquement accéléré, alimenté par des applications toujours plus gourmandes qui rendent les appareils «obsolètes» au bout de trois ans.

C'est un cercle vicieux parfait : le logiciel grossit, le hardware doit suivre, on consomme plus de ressources, on produit plus de déchets électroniques.

## L'IA aggrave tout, massivement

L'intelligence artificielle générative est la plus grande accélération de consommation de ressources que l'industrie tech ait jamais connue.

Goldman Sachs estimait en 2024 que les datacenters d'IA pourraient représenter jusqu'à 8% de la consommation électrique américaine d'ici 2030. Des projections d'autres analystes vont encore plus loin.

Et le pire : la majorité de ces ressources sont utilisées pour des tâches dont on n'a pas besoin. Des résumés automatiques d'emails. Des images générées pour illustrer des présentations. Des chatbots qui répondent à des questions auxquelles une recherche Google aurait suffi.

Nous brûlons des ressources rares et finies pour de la commodité marginale.

## Les applications obèses : un problème structurel

Regardons les chiffres. Un navigateur web moderne comme Chrome peut facilement utiliser 2 Go de RAM sur un ordinateur de bureau. Une application Electron comme Slack ou VSCode embarque un moteur Chromium complet juste pour afficher du texte et des images.

Une application mobile «simple» pèse souvent 200 à 500 Mo. Des applications de messagerie consomment en permanence du CPU et de la batterie en arrière-plan. Des sites web qui auraient dû peser 200 ko en servent 10 Mo de JavaScript pour afficher un article.

La tendance est claire : à chaque génération de framework, à chaque nouvelle couche d'abstraction, les applications deviennent plus lentes et plus lourdes, même si les fonctionnalités réelles n'ont pas changé.

Ce n'est pas un problème de mauvaise volonté des développeurs. C'est un problème structurel : les outils modernes optimisent pour la vitesse de développement, pas pour l'efficacité à l'exécution. Et personne ne paie le coût réel des ressources consommées.

## Le retour inévitable du bas niveau

Face à ces contraintes, quelque chose est en train de changer dans l'industrie. Progressivement, puis rapidement.

Les langages bas niveau reviennent en force. Pas par nostalgie. Par nécessité.

### Rust

Rust est le langage qui incarne le mieux ce retour. Conçu pour être aussi performant que C, mais sans les pièges de gestion mémoire qui ont causé des décennies de bugs et de failles de sécurité. Rust ne dispose pas de garbage collector : il gère la mémoire à la compilation, ce qui le rend extrêmement efficace à l'exécution.

Microsoft, Google, Amazon et le noyau Linux l'ont adopté. La NSA recommande officiellement de migrer vers des langages «memory-safe» comme Rust. Android réécrit des composants critiques en Rust. Les raisons : sécurité, performance, consommation de ressources.

Un serveur web écrit en Rust peut servir des milliers de fois plus de requêtes par seconde qu'un équivalent Node.js, avec une fraction de la consommation mémoire.

### Zig

Zig est plus récent, plus radical. Conçu par Andrew Kelley comme un successeur spirituel de C, mais avec une philosophie claire : aucune magie cachée, un contrôle total sur ce que fait réellement le compilateur, une consommation de ressources parfaitement prévisible.

Zig commence à attirer l'attention pour les systèmes embarqués, les applications critiques et tout contexte où chaque octet et chaque cycle CPU compte. Bun, le nouveau runtime JavaScript ultra-rapide, est écrit en Zig.

### Go, C, C++

Go n'est pas nouveau, mais son modèle de concurrence efficace et sa gestion mémoire sobre en font un choix de plus en plus populaire pour les services backend qui doivent fonctionner avec peu de ressources. C et C++ restent incontournables dans les systèmes embarqués, les équipements réseau, les systèmes temps réel.

### WebAssembly

WebAssembly (WASM) est une autre tendance de fond : exécuter du code compilé depuis des langages bas niveau directement dans le navigateur ou côté serveur, avec des performances proches du natif et une empreinte mémoire bien moindre que JavaScript.

## Ce n'est pas un retour en arrière : c'est une évolution

On entend souvent l'objection : «revenir au bas niveau, c'est sacrifier la productivité des développeurs.»

C'est une vision à court terme.

Rust aujourd'hui n'est pas C des années 70. Les outils modernes, les gestionnaires de paquets (Cargo pour Rust), les environnements de développement, les communautés actives rendent ces langages bien plus accessibles qu'ils ne l'étaient. La courbe d'apprentissage est réelle, mais le gain est structurel.

De plus, tous les niveaux de la stack n'ont pas besoin d'être réécrits en bas niveau. L'enjeu est d'identifier les couches critiques : les services qui tournent en permanence, les applications mobiles qui vident les batteries, les algorithmes qui s'exécutent des millions de fois par jour. C'est là que l'efficacité du bas niveau change tout.

L'industrie automobile a traversé exactement cette transition. Pendant des décennies, la puissance prime sur l'efficacité. Puis les contraintes de ressources (pétrole, réglementations, coût) ont forcé une révolution : moteurs à injection directe, hybridation, électrification. Les voitures modernes sont bien plus complexes techniquement que celles des années 70, mais elles consomment deux à trois fois moins de carburant.

La tech va traverser la même transition. Des outils plus complexes à concevoir, mais qui consomment infiniment moins.

## Les signaux sont déjà là

Ce n'est pas de la prospective lointaine. Les signaux sont déjà visibles :

**Les coûts du cloud explosent.** De nombreuses startups qui ont tout misé sur AWS ou GCP découvrent des factures mensuelles de plusieurs centaines de milliers d'euros. Le mouvement «cloud repatriation» se développe : des entreprises rapatrient leurs workloads sur du hardware propre pour reprendre le contrôle des coûts.

**Les régulateurs bougent.** L'Union Européenne pousse des directives sur la consommation énergétique des datacenters. La taxonomie verte européenne commence à classer les investissements tech selon leur impact environnemental. Les entreprises vont devoir rendre des comptes sur leurs émissions numériques.

**Les fondeurs plafonnent.** La loi de Moore est officiellement morte selon la plupart des experts. Les gains de performance ne viennent plus automatiquement : ils doivent être gagnés dans le logiciel, pas attendus du hardware.

**Les appareils durent plus longtemps.** La pression réglementaire (droit à la réparation, obsolescence programmée) et économique pousse les utilisateurs à garder leurs appareils plus longtemps. Des applications trop gourmandes qui ralentissent les appareils vieux de trois ans deviennent un problème de marché, pas juste un problème éthique.

## Ce que ça change pour les développeurs

Cette transition va remodeler les compétences valorisées dans l'industrie tech.

Savoir écrire du code fonctionnel dans un framework à la mode restera utile. Mais savoir mesurer la consommation réelle d'une application, identifier les goulots d'étranglement, choisir le bon niveau d'abstraction pour le bon problème, et maîtriser au moins un langage bas niveau : ce sont ces compétences qui vont devenir différenciantes.

Les développeurs qui ont appris uniquement dans des environnements hautement abstraits (React, Rails, Django, Node.js) vont devoir élargir leur palette. Pas pour abandonner ces outils. Pour savoir quand les utiliser et quand ne pas les utiliser.

La prochaine décennie appartient aux développeurs qui comprennent ce qui se passe réellement sous les couches d'abstraction.

## Conclusion

La tech ne va pas s'arrêter. Mais elle va devoir mûrir.

Mûrir, c'est accepter que la croissance infinie est une fiction. Que les ressources ont un coût réel. Que l'efficacité n'est pas une contrainte old-school, c'est une vertu d'ingénierie.

Les langages bas niveau comme Rust et Zig ne sont pas un retour en arrière nostalgique. Ils sont la réponse rationnelle d'une industrie qui commence à mesurer les conséquences de ses excès.

Le logiciel obèse a eu sa décennie. La décennie du logiciel sobre commence maintenant.
