---

title: "Le grand théâtre des entretiens techniques : pourquoi on recrute dans le vide"
subtitle: "Tests à la maison qui durent un weekend, live coding sous surveillance, questions de Google pour un poste de CRUD developer. Le recrutement tech est cassé. Et tout le monde le sait."
description: "Les entretiens techniques sont devenus une épreuve déconnectée de la réalité du travail. Tests irréalistes, live coding sous pression, questions hors contexte. Voici pourquoi deux entretiens suffisent, et pourquoi la période d'essai est faite pour le reste."
categories: ["Work Culture", "Développement Productivité"]
excerpt: "Combien d'heures de votre vie avez-vous passé à implémenter un algorithme de tri à bulles pour un poste où vous allez passer vos journées à faire des appels REST et à déboguer des requêtes SQL ? Le recrutement tech s'est transformé en obstacle course qui ne mesure rien d'utile."
date: 2026-05-26 00:00:00 +0100
featured_image: /assets/images/blog/2026-05-26-entretiens-tech-irrealistes-featured.png

---

Quelque part dans une salle de réunion, un candidat est en train de coder un arbre binaire sur un tableau blanc. Il sue. Deux recruteurs le regardent en silence, stylo levé. Le poste : maintenir un back-office e-commerce en PHP/Symfony. Il n'y aura jamais le moindre arbre binaire dans ce projet.

Cette scène se répète des milliers de fois par semaine. Et tout le monde, côté candidat comme côté recruteur, sait pertinemment qu'elle est absurde.

Le recrutement technique est cassé. Pas légèrement dysfonctionnel : structurellement cassé. Et la façon dont on le répare en ce moment consiste principalement à rajouter des étapes.

## Le test technique à la maison : « 3 heures, max »

La description dit trois heures. Le projet demandé, lui, n'a pas lu la description.

« Créez une API REST complète avec authentification JWT, tests unitaires, documentation OpenAPI, gestion des erreurs, Dockerfile, et si vous avez le temps, une interface front. »

Trois heures. Bien sûr.

Ce qui se passe réellement : le candidat y consacre un weekend entier. Le vendredi soir à cadrer le projet. Le samedi à coder proprement parce qu'il sait qu'on va juger la qualité. Le dimanche à nettoyer, documenter, préparer le README.

Et s'il ne le fait pas, s'il livre vraiment trois heures de travail honnête, il sera comparé aux candidats qui ont sacrifié leur weekend. Il sera jugé « peu impliqué ». Il sera éliminé.

Le test maison, dans sa forme actuelle, ne mesure pas les compétences techniques. Il mesure la disponibilité à offrir son temps personnel sans contrepartie. C'est un test de précarité, pas d'ingénierie.

Certaines entreprises vont plus loin : elles récupèrent ainsi des prototypes fonctionnels sans jamais embaucher personne. C'est rare, mais ça arrive. Et le doute suffit à rendre l'exercice toxique.

## Le live coding : coder comme si votre vie en dépendait

Le live coding est né d'une bonne intention : voir quelqu'un résoudre un problème en temps réel, observer sa façon de penser, son rapport à l'incertitude, sa capacité à communiquer pendant l'effort.

Ce que ça donne en pratique : un candidat seul face à un éditeur partagé, deux ou trois personnes qui lisent son code en direct, un chronomètre mental qui tourne, et un problème algorithmique sorti du manuel de préparation aux entretiens Google.

Le genre de problème que 99 % des développeurs en poste ne résoudraient pas de tête, en vingt minutes, sous pression, sans documentation.

« Implémentez un LRU cache. »
« Trouvez le plus court chemin dans un graphe pondéré. »
« Inversion d'une liste chaînée. »

Pour un poste de développeur full-stack sur une application SaaS B2B.

Ce qui est mesuré : la capacité à performer sous stress artificiel, dans un contexte artificiel, sur des problèmes artificiels.

Ce qui n'est pas mesuré : comment la personne lit une codebase inconnue, comment elle pose des questions pertinentes, comment elle arbitre entre rapidité et qualité, comment elle gère une dette technique héritée, comment elle communique avec des non-techniques.

Autrement dit : tout ce qui détermine si quelqu'un sera bon dans le poste.

## Les cinq entretiens en série : le marathon de l'épuisement

C'est devenu la norme dans les entreprises tech qui se croient rigoureuses : cinq, six, parfois sept entretiens pour un seul poste.

Premier entretien : screening RH, 30 minutes, pour vérifier que vous parlez français et que vous avez bien postulé.

Deuxième entretien : entretien technique introductif avec un lead dev, pour vérifier que vous savez ce qu'est une variable.

Troisième entretien : test technique à domicile, une semaine de délai, trois heures annoncées, un weekend réel.

Quatrième entretien : revue de code du test, en live, avec deux développeurs qui cherchent des pièges dans votre implémentation.

Cinquième entretien : entretien culture fit avec le manager, pour vérifier que vous êtes « aligned with our values ».

Sixième entretien (bonus dans les startups ambitieuses) : présentation à l'équipe, vingt minutes de démo de votre test, questions en rafale.

Total : entre 15 et 25 heures investies par le candidat. Pour apprendre, souvent, qu'ils « ont décidé de pourvoir le poste en interne ».

Ce processus élimine les candidats en poste qui n'ont pas le luxe de sacrifier leurs soirées et leurs weekends pendant un mois. Il favorise structurellement ceux qui ont du temps libre, donc ceux qui sont soit très juniors, soit entre deux emplois. Ce n'est pas un filtre de compétence. C'est un filtre social.

## Les questions de Google pour le poste de l'open space

Il y a un moment particulièrement absurde dans certains entretiens techniques : le décalage entre l'entreprise qui recrute et les questions qu'elle pose.

Une startup de vingt personnes qui vend un outil de facturation en ligne pour les PME qui demande : « Expliquez comment fonctionne la consensus dans un système distribué. »

Une agence web qui fait des sites WordPress qui demande : « Quelle est la complexité temporelle de votre algorithme de recherche ? »

Un éditeur logiciel dont le produit principal tourne sur un serveur mutualisé qui demande : « Comment optimiseriez-vous les performances d'une base de données à l'échelle de milliards d'entrées ? »

Ces questions viennent de banques de questions copiées depuis des guides de préparation aux entretiens FAANG. Elles ont été conçues pour recruter des ingénieurs qui vont concevoir des systèmes distribués à l'échelle mondiale.

Elles n'ont rien à voir avec le poste proposé. Elles ne permettent pas de prédire la performance dans ce poste. Elles éliminent des candidats parfaitement compétents qui n'ont pas passé leurs soirées à mémoriser des algorithmes qu'ils n'utiliseront jamais.

## Le problème métier interne déguisé en test d'entretien

Il y a une variante du live coding particulièrement perverse, moins souvent nommée mais très répandue : l'entreprise soumet au candidat un vrai problème qu'elle rencontre en production.

Pas un exercice générique. Pas un kata algorithmique. Leur problème. Celui sur lequel leurs équipes ont travaillé pendant des semaines. Celui pour lequel ils ont déjà une solution, affinée, discutée en architecture review, validée par le contexte métier et l'historique technique du produit.

Et ils demandent au candidat de le résoudre en live, en trente minutes, sans aucun contexte.

Le déséquilibre est total. D'un côté : une équipe qui connaît le domaine, la stack, les contraintes de performance, les décisions passées, les raisons pour lesquelles certaines approches ont déjà été écartées. De l'autre : quelqu'un qui vient de lire la description du poste il y a dix jours et qui essaie de déchiffrer un énoncé ambigu sous le regard de trois personnes qui savent déjà la réponse.

Ce n'est pas un test de compétence. C'est un test d'omniscience.

Le pire, c'est la façon dont les résultats sont interprétés. Si le candidat propose une solution différente de celle de l'équipe, il est « pas assez pragmatique » ou « il ne comprend pas les contraintes réelles ». Si sa solution ressemble à la leur, c'est « bien, mais il aurait pu aller plus loin ». La grille d'évaluation est invisible parce qu'elle est en réalité une comparaison à une réponse qu'on n'a pas le droit de connaître.

Certains recruteurs appellent ça « tester la capacité à résoudre des problèmes complexes ». Ce qu'ils testent en réalité, c'est la capacité à deviner leur contexte interne sans y avoir jamais été exposé. C'est une compétence qui n'existe pas. Et qui ne prédit rien de la performance future dans le poste.

## Le questionnaire de personnalité en ligne : 90 questions sur vos valeurs

Avant même d'avoir parlé à un humain, certains processus commencent par un test de personnalité en ligne.

90 questions. Parfois 120. Du type : « Sur une échelle de 1 à 5, dans quelle mesure êtes-vous d'accord avec l'affirmation : "Je préfère travailler seul plutôt qu'en équipe" ? »

Ces tests ont une validité prédictive faible, documentée depuis des décennies par la littérature en psychologie du travail. Ils sont faciles à biaiser consciemment ou inconsciemment. Ils éliminent des profils atypiques qui pourraient être exactement ce dont l'équipe a besoin.

Et surtout : ils donnent une impression de rigueur scientifique sans en avoir les propriétés. C'est du théâtre de sérieux.

## Ce qui prédit vraiment la performance

Les études sur la validité prédictive des méthodes de sélection sont claires depuis longtemps. Les meilleures prédictions de performance au travail viennent de :

**L'entretien structuré** : mêmes questions pour tous les candidats, grille d'évaluation définie à l'avance, notation indépendante. Pas d'improvisation, pas de « feeling ».

**Les tests de travail réel** : donner un vrai problème du quotidien du poste, dans des conditions proches du réel. Pas un projet de weekend. Pas un algorithme abstrait. Un bug à corriger dans une codebase existante, une feature à concevoir pour un système décrit, une décision d'architecture à justifier sur un cas concret.

**La période d'essai** : c'est le test le plus valide qui existe. La personne travaille réellement, dans le vrai contexte, avec les vrais collègues, sur les vrais problèmes. Aucun entretien ne peut simuler ça.

Ce qui prédit mal : les questions d'algorithmes sous pression, les tests de personnalité, les entretiens non structurés basés sur le feeling, les marathons d'entretiens qui épuisent les candidats avant même leur premier jour.

## La proposition : deux entretiens, une période d'essai

Le recrutement n'a pas besoin de dix étapes. Il en a besoin de deux.

**Entretien 1 : le technique**

Un entretien structuré d'une heure à une heure trente. Un problème concret du quotidien du poste, pas un exercice académique. Le candidat peut poser des questions, utiliser de la documentation, travailler comme il travaillerait vraiment. L'objectif : voir comment il pense, comment il communique, comment il gère l'incertitude. Pas s'il a mémorisé quicksort.

Si un test à domicile est vraiment nécessaire, il doit être court, payé (oui, payé), et représentatif du travail réel. Deux heures maximum, indemnisé, sur un sujet qui correspond au poste.

**Entretien 2 : le RH / culture**

Un entretien structuré d'une heure avec le manager et potentiellement un futur collègue. Objectif : vérifier l'alignement sur les conditions de travail, les attentes mutuelles, la façon de collaborer, les contraintes de chacun. Pas de questions pièges. Pas de « Quelle est votre plus grande faiblesse ? ». Des vraies questions sur de vraies situations.

**La période d'essai fait le reste**

C'est exactement pour ça qu'elle existe. Trois mois pour observer comment quelqu'un travaille vraiment. Comment il s'intègre. Comment il gère les imprévus. Comment il évolue avec les feedbacks. C'est le test le plus riche, le plus contextuel, le plus honnête qui soit.

Aucun entretien, aussi sophistiqué soit-il, ne remplacera jamais trois mois de travail réel. Arrêtons de prétendre le contraire en empilant des étapes inutiles avant.

## Pourquoi ça ne change pas

Si le problème est connu, documenté, et que les solutions existent, pourquoi les pratiques restent-elles aussi mauvaises ?

Plusieurs raisons.

D'abord, **l'aversion à l'erreur asymétrique** : recruter quelqu'un qui n'est pas à la hauteur est visible, traçable, et coûteux socialement pour le recruteur. Rejeter un bon candidat est invisible. Personne ne sait ce qu'on rate. Ce biais pousse à accumuler des étapes pour se couvrir, pas pour mieux choisir.

Ensuite, **le mimétisme** : les entreprises copient les pratiques des entreprises qu'elles admirent. Les startups copient les GAFAM. Les agences copient les startups. Les questions d'algorithmes de Google se retrouvent dans des entretiens pour des postes de développeur municipal. Personne ne s'est demandé si c'était adapté. C'est ce qui se fait.

Enfin, **le déséquilibre de pouvoir** : dans un marché du travail tendu, les candidats subissent sans se plaindre. Refuser de faire un test de quarante heures, c'est se désqualifier. Exprimer son inconfort face au live coding, c'est montrer qu'on « manque de confiance en soi ». Le feedback négatif ne remonte pas.

## Ce que ça dit de la culture

La façon dont une entreprise recrute dit quelque chose sur la façon dont elle traite ses employés.

Une entreprise qui demande un weekend de travail non payé avant même de vous avoir fait une offre vous dit quelque chose sur la valeur qu'elle accorde à votre temps.

Une entreprise qui vous fait passer six entretiens vous dit quelque chose sur son rapport à la confiance et à l'efficacité décisionnelle.

Une entreprise qui pose des questions hors contexte vous dit quelque chose sur sa capacité à distinguer l'essentiel de l'accessoire.

Ce n'est pas systématique. Certaines équipes recrutent bien malgré des processus imparfaits. Mais le processus de recrutement est un signal. Il vaut la peine d'être lu.

---

Le recrutement technique n'est pas difficile par nature. Il l'est devenu parce qu'on a empilé des pratiques héritées, copiées, et jamais questionnées. Deux entretiens bien construits valent mieux que six entretiens mal posés. Et une période d'essai honnête reste le meilleur instrument de sélection qui existe.

Le reste, c'est du théâtre.
