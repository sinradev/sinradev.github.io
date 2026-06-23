---

title: "#NoEstimates : bonne idée ou luxe de GAFAM ?"
subtitle: "Le mouvement #NoEstimates propose d'arrêter d'estimer le travail de développement. Les arguments sont solides. Les conditions dans lesquelles ça fonctionne sont spécifiques. Ce n'est pas une recette universelle."
description: "Le mouvement #NoEstimates conteste la valeur des estimations dans le développement logiciel. Ses arguments pointent vers de vrais problèmes. Mais supprimer les estimations sans les remplacer par quelque chose d'utile crée d'autres problèmes pour d'autres parties prenantes."
categories: ["Gestion de Projet", "Work Culture"]
excerpt: "L'estimation est souvent une fiction partagée : les développeurs donnent des chiffres qu'ils savent imprécis, le management les prend comme des engagements, et quand les estimations sont dépassées, tout le monde est surpris d'être surpris. #NoEstimates dit : arrêtons la fiction. La question est : par quoi on la remplace ?"
date: 2026-06-10 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-10-no-estimates-featured.png

---

Voici une scène familière. L'équipe est en réunion de planification. Le Product Owner présente une nouvelle feature. Un développeur demande des clarifications. Une discussion s'engage. Quinze minutes plus tard, quelqu'un dit : « Bon, on estime ça à combien ? » Planning poker. Fibonacci. Discussions sur si c'est 5 ou 8 points. Consensus à contrecœur : 8 points. La réunion continue.

Trois semaines plus tard, la feature est toujours en cours. Elle a pris vingt points. Personne n'est surpris.

C'est le contexte dans lequel le mouvement #NoEstimates a émergé. Des praticiens agiles qui ont observé que les estimations consomment du temps, créent de la pression artificielle, sont systématiquement inexactes, et n'apportent pas vraiment la valeur qu'elles sont censées apporter.

## Les arguments valides du mouvement #NoEstimates

Le mouvement #NoEstimates, popularisé notamment par Woody Zuill et Vasco Duarte, s'appuie sur plusieurs observations fondées.

**Le coût de l'estimation est réel.** Estimer prend du temps. Les planning poker, les refinement meetings, les discussions sur la granularité des tickets - c'est du temps qui n'est pas du temps de développement. Pour une équipe qui fait du développement continu, ce coût peut représenter plusieurs heures par semaine.

**La précision des estimations est faible.** La recherche en génie logiciel depuis des décennies montre que les estimations de développement sont systématiquement optimistes, parfois d'un facteur deux ou trois. L'estimation individuelle est mauvaise. L'estimation collective (planning poker) est légèrement meilleure mais reste fondamentalement imprécise pour les items complexes.

**Les estimations créent des engagements parasites.** Quand un développeur estime un ticket à 3 points et qu'il en prend 7, il y a une tension. Pas une tension productive (le travail a pris plus de temps parce qu'il était plus complexe que prévu, c'est une information), mais une tension sociale (la personne a « raté » son estimation). Cette tension pousse les équipes à sous-estimer volontairement les items difficiles, ou à découper les items pour qu'ils rentrent dans des cases confortables.

**Le management par les estimations crée de mauvaises dynamiques.** Quand les estimations sont utilisées pour mesurer la productivité des développeurs ou pour « tenir les délais », les comportements changent : les estimations sont gonflées pour créer du confort, les stories sont découpées pour maximiser le nombre de points fermés, et la velocity devient un jeu plutôt qu'une mesure.

## Ce que #NoEstimates propose à la place

#NoEstimates ne dit pas « ne planifiez pas ». Il dit « utilisez des indicateurs différents pour la planification ».

Le principal outil proposé : le throughput, le nombre d'items terminés par période. Plutôt que d'estimer la taille de chaque item et de sommer les estimations pour planifier, on mesure le taux historique de livraison et on prédit les livraisons futures sur cette base.

L'argument : si l'équipe livre en moyenne 12 items par sprint depuis trois mois, on peut prédire qu'elle livrera environ 12 items dans le prochain sprint, indépendamment de la taille estimée de ces items. Si les items sont de taille relativement homogène (ce que certaines pratiques de découpage rendent possible), cette prédiction est au moins aussi précise que la somme des estimations.

Ce raisonnement est fondamentalement statistique. Il fonctionne quand les conditions sont remplies : un historique suffisamment long pour que le throughput soit stable, des items de taille raisonnablement homogène, et une confiance dans la régularité future du rythme.

## Les conditions qui rendent #NoEstimates viable

#NoEstimates fonctionne bien dans des contextes spécifiques que ses promoteurs ne mettent pas toujours en avant assez clairement.

**Un produit en développement continu sans contrainte de date externe forte.** Si une équipe développe un produit SaaS avec un flux de livraison continue et sans engagements contractuels sur des fonctionnalités spécifiques à des dates précises, le throughput est un bon outil de planification. Les parties prenantes peuvent voir le rythme de livraison et en déduire quand quelque chose sera livré.

**Des items de granularité contrôlée.** Pour que le throughput soit une mesure significative, il faut que les items soient de taille similaire. Si certains items prennent une heure et d'autres prennent trois semaines, compter le nombre d'items terminés ne dit rien d'utile. #NoEstimates suppose souvent implicitement une discipline de découpage des items que les équipes qui font beaucoup d'estimation n'ont pas nécessairement.

**Une relation de confiance avec les parties prenantes.** Si les parties prenantes (management, clients, investisseurs) ont besoin de prédictions précises sur des fonctionnalités spécifiques à des dates précises, le throughput seul ne suffit pas à satisfaire ce besoin. Soit les parties prenantes font confiance à l'équipe pour livrer ce qui a le plus de valeur au rythme qu'elle maintient, soit il faut un autre mécanisme de prédiction.

**Une équipe stable.** Le throughput historique n'est prédictif que si l'équipe est stable. Les arrivées et les départs, les changements de stack, les périodes de forte dette technique - tous ces facteurs font varier le throughput de manière que l'historique passé ne prédit pas.

## Quand les estimations ont encore de la valeur

Il y a des contextes où les estimations apportent une valeur réelle que le throughput ne remplace pas.

**Les projets à forfait ou à périmètre fixe.** Si vous vous engagez à livrer un ensemble défini de fonctionnalités pour une date et un budget fixes, vous avez besoin d'une estimation a priori. Le throughput historique d'une autre équipe ou d'un autre projet ne vous dit pas combien ce projet spécifique va coûter.

**La priorisation des investissements.** Quand une équipe doit décider entre deux fonctionnalités candidates, une estimation de l'effort relatif (même imprécise) combinée à une estimation de la valeur apporte une information utile. « Cette feature vaut deux fois plus mais prend dix fois plus de temps » est une information de priorisation que le seul throughput ne produit pas.

**La détection des anomalies.** Si un ticket prend beaucoup plus de temps que prévu, c'est une information. Peut-être qu'il était mal compris, peut-être qu'il y a un problème technique sous-jacent, peut-être que la complexité a été sous-estimée structurellement. L'estimation comme point de référence permet de détecter ces anomalies.

**La communication externe.** « Cette fonctionnalité sera prête dans environ trois semaines » est une communication utile pour les clients ou les équipes en aval. Le produire depuis le throughput nécessite une conversion que tout le monde dans l'organisation ne fait pas naturellement.

## Le vrai problème que #NoEstimates identifie

La valeur durable du mouvement #NoEstimates est moins dans la suppression des estimations que dans le diagnostic qu'il pose sur l'utilisation des estimations dans les organisations.

Quand les estimations servent à évaluer la productivité des développeurs : c'est une mauvaise utilisation des estimations, et #NoEstimates a raison de la critiquer.

Quand les estimations créent des engagements qui ignorent l'incertitude : c'est une mauvaise utilisation des estimations, et #NoEstimates a raison de la critiquer.

Quand les estimations consomment plus d'énergie qu'elles n'apportent de valeur : c'est une mauvaise utilisation des estimations, et #NoEstimates a raison de la critiquer.

Mais ce diagnostic n'implique pas que supprimer les estimations soit la seule réponse possible. Améliorer la façon dont les estimations sont utilisées - les traiter comme des prédictions probabilistes avec des fourchettes d'incertitude, ne pas les utiliser pour évaluer les individus, les réviser quand l'information disponible change - adresse le même problème.

---

#NoEstimates est une réponse radicale à un vrai problème. Comme toutes les réponses radicales, elle fonctionne parfaitement dans certains contextes et mal dans d'autres.

Le vrai progrès n'est pas dans le choix entre « estimer » et « ne pas estimer ». Il est dans l'honnêteté sur ce que les estimations peuvent et ne peuvent pas faire, et dans l'adaptation de leur usage au contexte réel.
