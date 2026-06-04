---

title: "SAFe : quand l'agilité à l'échelle devient une bureaucratie"
subtitle: "Scaled Agile Framework est la réponse la plus utilisée à la question 'comment faire de l'Agile avec 500 développeurs'. C'est aussi la plus critiquée par les praticiens qui l'ont appliqué. Les deux réalités coexistent."
description: "SAFe (Scaled Agile Framework) est adopté par des milliers d'entreprises dans le monde. Ses promoteurs vantent sa structure et sa prévisibilité. Ses détracteurs y voient une bureaucratie Agile qui produit les inconvénients des deux modèles sans les avantages d'aucun."
categories: ["Gestion de Projet", "Work Culture"]
excerpt: "Votre organisation a implémenté SAFe. Vous avez maintenant des ARTs, des PI Plannings, des System Demos et des Inspect & Adapt workshops. Votre organisation est également plus lente, plus réunionnée et plus frustrante pour les ingénieurs qu'avant. Ce n'est pas un bug de votre implémentation SAFe. C'est souvent une caractéristique."
date: 2026-06-11 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-11-safe-bureaucratie-agilite-featured.svg

---

SAFe est le framework le plus adopté pour l'Agile à l'échelle. Selon les études annuelles de VersionOne (maintenant Digital.ai), il représente régulièrement 30 à 40 % des entreprises qui pratiquent l'Agile à grande échelle. C'est un fait.

SAFe est aussi régulièrement classé comme le framework le moins apprécié par les praticiens dans les mêmes études. Les développeurs, les Scrum Masters et les Agile coaches qui l'ont appliqué le décrivent souvent avec des termes comme « lourd », « bureaucratique » et « contraire à l'esprit Agile ». C'est aussi un fait.

Ces deux faits coexistent parce que SAFe résout un problème réel (la coordination à grande échelle) avec une approche qui crée ses propres problèmes (la complexité structurelle et la centralisation).

## Ce que SAFe cherche à résoudre

Les grandes organisations ont un problème légitime : comment coordonner le travail de centaines de développeurs sur un même produit ou une même plateforme ?

Les équipes individuelles peuvent pratiquer Scrum ou Kanban avec succès à leur niveau. Mais quand dix ou vingt équipes travaillent sur des composants interdépendants, les dépendances entre équipes créent des problèmes de coordination que les méthodes agiles à l'échelle d'une équipe ne résolvent pas.

Une feature qui nécessite des contributions de trois équipes différentes peut se retrouver bloquée parce que chaque équipe a ses propres priorités, ses propres sprints, et ses propres définitions de « terminé ». Sans coordination explicite au niveau inter-équipes, les composants se développent de manière non synchronisée.

SAFe adresse ce problème avec une structure de coordination à plusieurs niveaux : l'Agile Release Train (ART) regroupe plusieurs équipes, le Program Increment (PI) définit une cadence commune, le PI Planning synchronise les équipes sur leurs objectifs et leurs dépendances.

La logique est solide. L'implémentation est complexe.

## La structure SAFe et ses coûts

Pour décrire SAFe, il faut accepter de rentrer dans sa terminologie.

Un **Agile Release Train** est un groupe de 50 à 125 personnes (en gros 5 à 12 équipes Scrum) qui travaillent ensemble sur un même périmètre de valeur. Un ART a ses propres rituels, sa propre cadence, ses propres rôles spécifiques (Release Train Engineer, Product Management au niveau ART).

Un **Program Increment** est une période de planification de 8 à 12 semaines, dont la première semaine est consacrée au **PI Planning** : deux jours de réunion intensive où toutes les équipes de l'ART planifient ensemble leurs prochains sprints, identifient leurs dépendances, et s'engagent sur des objectifs collectifs.

Au niveau au-dessus, plusieurs ARTs peuvent être regroupés dans un **Large Solution Train** ou dans un **Portfolio**, avec des instances de gouvernance supplémentaires.

Le coût organisationnel de cette structure est substantiel.

**Les rituels se multiplient.** Chaque équipe maintient ses rituels Scrum. En plus, il y a les rituels de l'ART : le PI Planning bisannuel de deux jours, les System Demos toutes les deux semaines, l'Inspect & Adapt en fin de PI. Pour une équipe de dix personnes, le temps rituel peut représenter 15 à 20 % de la capacité disponible.

**Les rôles prolifèrent.** Release Train Engineer, Product Manager (ART level), Solution Architect, Business Owners, System Team. Chaque rôle a des responsabilités définies et nécessite des personnes formées. Les grandes entreprises se retrouvent avec des équipes entières dédiées à l'animation du framework SAFe.

**La rigidité augmente.** La cadence des PI Planning, fixée à intervalles réguliers (toutes les 10 à 12 semaines en général), crée des fenêtres de planification rigides. Si une priorité urgente émerge entre deux PI Plannings, l'intégrer dans le plan nécessite une exception formelle (un « IP Sprint » ou une « Innovation Iteration »).

## Ce que les ingénieurs ressentent dans SAFe

La critique la plus récurrente des ingénieurs qui travaillent dans des organisations SAFe est le sentiment d'être dans une bureaucratie Agile : tous les inconvénients de la bureaucratie (complexité, réunions, overhead de coordination) sans les avantages de l'agilité (flexibilité, feedback rapide, autonomie).

**Le PI Planning est souvent vécu comme oppressant.** Deux jours de réunion intensive avec 100 personnes, pour planifier en détail les dix prochaines semaines, sur la base d'informations qui changeront inévitablement. La plupart des plans faits en PI Planning sont partiellement obsolètes à la fin du premier sprint.

**Les dépendances entre équipes sont visibles mais pas résolues.** Le PI Planning révèle les dépendances. Mais les résoudre nécessite de modifier les plans d'équipes qui ont leurs propres priorités et leurs propres contraintes. Dans la pratique, beaucoup de dépendances sont marquées comme « accepted risk » et créent des retards qui n'ont pas été anticipés.

**Les métriques SAFe sont facilement gamifiées.** Les Program Predictability Measures, les PI Objectives, les Business Value scores - autant de métriques que les équipes apprennent rapidement à optimiser pour elles-mêmes plutôt que pour la valeur réelle. Un objectif de PI bien formulé mais peu ambitieux est mieux pour les métriques qu'un objectif ambitieux qui échoue partiellement.

## Les cas où SAFe apporte une valeur réelle

Malgré ses défauts, SAFe n'est pas universellement inutile.

**Les très grandes organisations avec de fortes contraintes réglementaires.** Dans les secteurs où la traçabilité, la gouvernance et la conformité sont des exigences légales, SAFe fournit une structure qui peut satisfaire ces exigences tout en maintenant une forme de pratique agile. C'est imparfait, mais c'est souvent la seule option réaliste.

**Les organisations en transition depuis le Waterfall.** SAFe est souvent critiqué comme un Waterfall déguisé en Agile. Ce reproche est partiellement fondé et partiellement injuste : pour des organisations qui viennent du Waterfall, SAFe peut représenter une étape de transition vers des pratiques plus légères. Le PI Planning bi-annuel est moins rigide que le plan annuel du Waterfall.

**Les contextes avec des dépendances matérielles fortes.** Dans le développement de systèmes embarqués ou de matériel physique, les cycles de développement sont intrinsèquement plus longs et les dépendances plus rigides. SAFe avec sa cadence de 10 à 12 semaines est plus adapté à ce contexte qu'un Scrum à deux semaines.

## Les alternatives qui fonctionnent mieux pour la plupart des équipes

Si l'objectif est de coordonner plusieurs équipes Agile sans les coûts de SAFe, d'autres approches ont montré de meilleurs résultats dans les organisations de taille moyenne.

**Spotify model (avec précautions).** Le modèle Spotify avec ses Tribes, Squads, Chapters et Guilds est souvent cité comme alternative à SAFe. Attention : Spotify lui-même a abandonné son « modèle » tel qu'il avait été décrit dans les articles de 2012-2013. Le coller comme template organisationnel sans comprendre son évolution est une erreur courante.

**Team Topologies.** Le framework Team Topologies de Matthew Skelton et Manuel Pais offre une approche de l'organisation des équipes basée sur les flux de valeur et les types d'interaction (collaboration, facilitation, X-as-a-service). Il est moins prescriptif que SAFe et plus adaptatif aux contextes spécifiques.

**L'approche produit autonome.** Plutôt que de coordonner des équipes sur des composants techniques, structurer les équipes autour de périmètres de produit autonomes qui peuvent livrer de la valeur indépendamment, en minimisant les dépendances inter-équipes. Cette approche résout le problème de coordination à sa racine en réduisant la coordination nécessaire.

---

SAFe est l'entreprise de conseil en transformation Agile la plus efficace jamais créée. Il a trouvé le marché parfait : des grandes entreprises qui veulent « faire de l'Agile » avec leur structure hiérarchique existante, leurs processus de gouvernance actuels, et leurs équipes telles qu'elles sont.

La promesse implicite de SAFe est séduisante : l'agilité sans la transformation organisationnelle profonde. Cette promesse est ce qui explique son adoption massive. Et c'est aussi la raison pour laquelle il déçoit si souvent ceux qui l'appliquent.
