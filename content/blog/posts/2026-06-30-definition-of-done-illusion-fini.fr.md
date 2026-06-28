---

title: "Definition of Done : l'illusion du « c'est fini »"
subtitle: "« C'est fini » est probablement l'expression la plus utilisée et la moins fiable dans le développement logiciel. Entre le code mergé et la fonctionnalité vraiment livrée à l'utilisateur, il y a un gouffre que beaucoup d'équipes ne mesurent pas."
description: "Le mot « fini » cache une ambiguïté coûteuse : code mergé, déployé en staging, en prod, testé, documenté, monitoré. Sans définition explicite du « terminé », les équipes accumulent des fonctionnalités à moitié livrées qui bloquent, ralentissent et créent de la dette invisible."
categories: ["Gestion de Projet", "Qualité"]
excerpt: "Le ticket passe en « Done ». Tout le monde passe à la suite. Trois semaines plus tard, on découvre que la fonctionnalité n'a jamais été déployée en production, que les tests d'intégration n'ont pas été mis à jour, et que personne n'a de monitoring en place. Elle était finie, vraiment ?"
date: 2026-06-30 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-30-definition-of-done-illusion-fini-featured.png

---

Il y a un moment précis où le travail devient invisible. Ce n'est pas quand il commence, ni quand il se termine. C'est dans l'écart entre les deux - dans tout ce qui reste « presque fini » sans jamais être vraiment livré.

Dans beaucoup d'équipes, « fini » signifie des choses différentes selon la personne à qui on pose la question. Pour le développeur, c'est souvent « le code est mergé ». Pour le lead, c'est « les tests passent ». Pour le manager, c'est « le ticket est fermé ». Pour l'utilisateur, c'est « la fonctionnalité fonctionne en production ».

Ces définitions ne sont pas incompatibles. Elles sont juste incomplètes. Et cette incompatibilité silencieuse coûte cher.

## Pourquoi « fini » est le mot le plus ambigu du développement

Prenons un exemple concret. Une équipe travaille sur une fonctionnalité d'export CSV. Le développeur finit l'implémentation un jeudi. Il ouvre une pull request, elle est revue et mergée le vendredi. Le ticket passe en « Done ».

Que s'est-il passé entre le merge et ce que l'utilisateur peut utiliser ?

La fonctionnalité n'est pas encore déployée en staging pour validation. Les tests end-to-end n'ont pas été mis à jour pour couvrir le nouveau comportement. Il n'y a pas d'alerte monitoring si l'export échoue silencieusement en production. La documentation utilisateur n'a pas été mise à jour. Et le déploiement en production attend le prochain cycle.

Le ticket est « Done ». La fonctionnalité n'est pas livrée.

Ce glissement est normal. Il n'est pas le signe d'une mauvaise équipe. Il est le signe d'une définition implicite et partagée de ce que signifie « terminé » - une définition qui s'arrête trop tôt.

## Les états intermédiaires coûtent cher

Le vrai problème des fonctionnalités « presque finies » n'est pas cosmétique. Il est structurel.

**Elles bloquent d'autres fonctionnalités.** Une fonctionnalité mergée mais pas déployée peut créer des conflits, bloquer des branches parallèles, rendre des tests difficiles à interpréter. Plus une fonctionnalité reste dans cet état intermédiaire, plus elle crée de friction pour ce qui vient après.

**Elles génèrent une dette de finition invisible.** Les tests non mis à jour, la documentation manquante, le monitoring absent : tout cela s'accumule. Chaque semaine qui passe rend la finition plus difficile parce que le contexte s'oublie et les priorités changent.

**Elles faussent la lecture de l'avancement.** Si vingt tickets sont en « Done » mais que dix d'entre eux ne sont pas en production, la progression réelle de la livraison est bien inférieure à ce que le board montre. Les décisions prises sur la base de cet état sont des décisions prises sur de fausses informations.

**Elles créent une dette de confiance.** Quand les parties prenantes demandent « est-ce que c'est disponible ? » et que la réponse est « c'est fait mais pas encore déployé », la confiance dans les estimations et les engagements s'érode.

## Ce que contient une vraie Definition of Done

Une Definition of Done (DoD) est l'accord explicite d'une équipe sur ce que signifie « terminé » pour n'importe quelle unité de travail - un issue, une capability, une fonctionnalité.

Elle n'est pas universelle. Chaque équipe doit définir la sienne en fonction de son contexte, de ses pratiques et de ce qu'elle livre. Mais une DoD solide couvre généralement ces niveaux :

**Code terminé :**
- Le code est écrit et les tests unitaires correspondants passent
- La pull request est ouverte et revue par au moins un autre développeur
- Les commentaires de review sont adressés et la PR est mergée

**Qualité validée :**
- Les tests d'intégration sont mis à jour pour couvrir le nouveau comportement
- Les tests de régression passent
- Un test manuel de la fonctionnalité a été effectué dans l'environnement de staging

**Déployé :**
- La fonctionnalité est déployée en staging et validée
- La fonctionnalité est déployée en production
- Un rollback est possible si nécessaire

**Observable :**
- Des métriques ou des logs permettent de vérifier que la fonctionnalité fonctionne comme attendu en production
- Une alerte existe si la fonctionnalité échoue silencieusement

**Documenté :**
- La documentation utilisateur est mise à jour si la fonctionnalité est visible pour l'utilisateur
- La documentation technique est mise à jour si le comportement de l'API ou du système change

Cela peut sembler beaucoup. C'est précisément l'objectif : rendre visible tout ce qui était invisible dans un simple « c'est mergé ».

## La tentation de l'assouplissement

Quand une équipe établit une DoD, la pression pour l'assouplir commence presque immédiatement.

« On n'a pas le temps de mettre à jour les docs pour cette fonctionnalité. » « Le monitoring, on le mettra en place plus tard. » « Les tests end-to-end on les fera dans la prochaine itération. »

Ces compromis ponctuels deviennent des habitudes. L'habitude devient la nouvelle norme implicite. Et la DoD initiale, soigneusement définie, devient un document qu'on consulte rarement et qu'on suit moins encore.

Le problème n'est pas d'assouplir la DoD dans des cas exceptionnels. C'est de le faire sans le reconnaître explicitement.

Quand une équipe décide de livrer quelque chose qui ne satisfait pas complètement sa DoD, elle devrait le faire consciemment : créer explicitement les issues correspondants pour la dette de finition, les intégrer dans le prochain cycle, et communiquer clairement sur ce qui est livré et ce qui ne l'est pas encore.

La différence entre une exception gérée et une habitude qui s'installe, c'est la traçabilité et la conscience.

## DoD à différents niveaux

La Definition of Done ne s'applique pas seulement aux issues individuels. Elle peut et devrait s'appliquer à différents niveaux du travail.

**Au niveau de l'issue :** les critères listés ci-dessus. L'unité de travail est terminée quand toutes les cases sont cochées.

**Au niveau de la capability :** une capability est terminée quand tous les issues qui la composent satisfont leur DoD individuelle, et quand la capability dans son ensemble a été validée end-to-end dans l'environnement de production.

**Au niveau de la release :** une release est terminée quand toutes les capabilities prévues satisfont leur DoD, quand les notes de release sont publiées, et quand les parties prenantes ont été informées de ce qui est disponible.

Cette cascade de définitions permet à chaque niveau d'avoir une vision claire et honnête de l'avancement réel.

## Le lien entre DoD et cycles de travail

La Definition of Done a une relation directe avec la façon dont une équipe structure ses cycles de travail.

Une équipe qui travaille en cycles courts - deux semaines ou moins - a un impératif naturel de DoD stricte. Si chaque cycle doit produire quelque chose de livrable, il est impossible de finir un cycle avec des fonctionnalités à moitié terminées. La pression du cycle force la complétion.

Une équipe qui travaille sur des horizons plus longs peut accumuler davantage de travail en cours avant de le finaliser. Ce n'est pas nécessairement mauvais, mais cela demande une discipline plus grande pour éviter que le « presque fini » ne s'accumule.

Dans Sinra, les issues ont des statuts explicites qui reflètent leur progression réelle - pas seulement « en cours » et « terminé », mais les étapes intermédiaires qui correspondent à la réalité du travail. Les releases définissent ce qui est effectivement livré dans une version. Les capabilities permettent de suivre si une fonctionnalité de haut niveau est réellement complète ou si elle attend encore des parties.

Cette clarté des statuts à chaque niveau est la DoD mise en pratique : un accord sur ce que signifie chaque état, visible par toute l'équipe.

## Comment établir une DoD dans une équipe

La DoD ne doit pas être imposée de l'extérieur. Elle doit être construite par l'équipe qui va la suivre, parce que c'est l'équipe qui connaît le mieux ce que « terminé » doit signifier dans son contexte.

Un atelier simple suffit. L'équipe liste tout ce qui doit être vrai pour qu'une fonctionnalité soit considérée comme vraiment livrée. Les items sont débattus, consolidés, priorisés. Le résultat est un document court - une liste de critères - qui devient la référence partagée.

La DoD doit être revue régulièrement. Ce qui constitue « terminé » évolue avec les pratiques de l'équipe, avec les outils, avec les exigences du produit. Une DoD écrite il y a six mois peut ne plus refléter la réalité d'aujourd'hui.

---

Le mot « fini » mérite d'être précis. Pas par bureaucratie, mais parce que la précision sur ce qu'est « terminé » est une condition de la confiance : confiance de l'équipe en sa progression réelle, confiance des parties prenantes dans les livraisons, confiance dans les décisions prises sur la base de l'état du travail.

Un ticket en « Done » qui n'est pas en production n'est pas terminé. Un export CSV qui fonctionne en staging mais n'a pas de monitoring en production n'est pas terminé. Une fonctionnalité sans documentation mise à jour n'est pas terminée.

Définir ce que « fini » signifie, explicitement et collectivement, est l'un des investissements les plus rentables qu'une équipe puisse faire.
