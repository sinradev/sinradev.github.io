---

title: "Comment Savoir si une Release Est Prête à Sortir : la Checklist"
subtitle: "« Je crois que c'est bon » n'est pas un critère de release. Voici les questions concrètes à poser avant de décider qu'une version peut sortir."
description: "Savoir si une release est prête à sortir ne devrait pas dépendre d'une impression collective. Checklist concrète : capabilities livrées, testings validés, dépendances résolues, avant de décider qu'une version peut partir en production."
categories: ["Gestion de Projet", "Qualité"]
excerpt: "La question « on peut releaser ? » reçoit trop souvent une réponse basée sur une impression générale plutôt que sur des critères vérifiables. Voici comment transformer cette impression en checklist."
date: 2026-07-27 09:00:00 +0200
featured_image: /assets/images/blog/2026-07-27-release-prete-checklist-featured.png

---

La réunion de fin de cycle arrive, et la question tombe : « on peut releaser ? ». Trop souvent, la réponse repose sur une impression collective plutôt que sur des critères vérifiables. Cette ambiguïté est une source directe de régressions découvertes en production.

## Le problème de l'impression collective

Quand personne n'a de liste explicite de ce qui doit être vrai pour qu'une release parte, chaque personne dans la réunion évalue selon son propre référentiel. Le développeur pense à son code. Le PM pense au périmètre fonctionnel. La QA pense aux tests qu'elle a eu le temps de faire, pas ceux qu'elle voulait faire. Ces trois évaluations partielles se combinent en un « ça devrait aller » qui n'engage personne clairement.

## Une checklist en quatre catégories

**Les capabilities prévues sont-elles réellement livrées ?** Pas « en cours de finalisation », pas « à 90 % » : livrées, avec leur critère de complétion défini à l'avance rempli. Une capability sans critère de complétion clair ne peut pas être évaluée ici, ce qui est en soi un signal d'alerte sur la définition du travail en amont.

**Les testings associés sont-ils validés ?** Chaque capability critique devrait avoir des tests associés, exécutés, avec un résultat consigné. « Ça a l'air de marcher » n'est pas une validation de testing.

**Les dépendances entre capabilities sont-elles résolues ?** Une capability qui dépend d'une autre non encore livrée ne peut pas être considérée comme prête, même si son propre travail est terminé.

**Y a-t-il des issues bloquantes encore ouvertes ?** Un bug critique ouvert sur une fonctionnalité incluse dans la release doit stopper la release, indépendamment de tout le reste qui va bien.

## Pourquoi le format checklist change le comportement

Une checklist explicite change la dynamique de la réunion de release. La question n'est plus « est-ce que globalement ça va » mais « est-ce que chaque point précis est vrai ou faux ». Ce changement de format réduit la place laissée à l'optimisme collectif, qui est la source la plus fréquente de releases prématurées.

Dans Sinra, cette logique est portée nativement par la structure de la **release** : elle regroupe des **capabilities** avec un état binaire (livrée ou non) et des **testings** associés avec un résultat consigné. La question « peut-on releaser » se lit directement dans l'état de ces éléments, plutôt que de dépendre d'une reconstruction manuelle en réunion.

## Le vrai objectif : rendre le doute visible avant la release

Une checklist de release ne garantit jamais l'absence de bug. Son objectif est différent : rendre visible, avant la sortie, tout ce qui reste incertain. Une capability sans testing associé, une dépendance non vérifiée, un critère de complétion flou : ce sont des signaux qu'une réunion basée sur l'impression collective laisse facilement passer, et qu'une checklist explicite fait remonter systématiquement.
