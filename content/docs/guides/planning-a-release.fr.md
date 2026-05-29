---
title: "Planifier une Release"
description: "Un guide pas à pas pour planifier une release Sinra : définir le périmètre, vérifier la capacité, décomposer les capabilities en issues et répartir le travail sur plusieurs cycles."
date: 2024-01-01
weight: 30
---

## La Séquence de Planification

La planification des releases dans Sinra suit une séquence descendante :

1. Définir le périmètre de la release (capabilities)
2. Vérifier la capacité par rapport au périmètre
3. Décomposer les capabilities en issues
4. Assigner les issues aux cycles

Chaque étape produit des informations qui éclairent la suivante. Ne sautez pas directement à la création d'issues sans avoir d'abord décidé ce que contient la release.

## Étape 1 : Définir la Release

Créez une release avec une date cible et une estimation de capacité cible. L'estimation de capacité n'a pas besoin d'être précise encore, un chiffre approximatif suffit pour vérifier votre périmètre.

Exemple : "v2.0, cible fin T2, 60 jours de travail budgétés."

## Étape 2 : Assigner des Capabilities dans le Backlog

Ouvrez la vue Backlog. Faites glisser des capabilities dans la release. Ajoutez les capabilities qui selon vous devraient être dans cette version.

Au fur et à mesure que vous ajoutez des capabilities, regardez l'indicateur de capacité. Si vous êtes déjà à 120% avant d'avoir ajouté les capabilities les plus importantes, la conversation sur le périmètre doit avoir lieu maintenant, pas à la semaine 5.

## Étape 3 : Prioriser et Couper

Avec une vue réaliste de la capacité, décidez ce qui reste et ce qui passe à la prochaine release. Posez-vous ces questions pour chaque capability :
- Est-ce un impératif pour cette version ?
- Qu'est-ce qui se casse si cela est livré une release plus tard ?
- Quelles capabilities dépendent les unes des autres ?

Réduire le périmètre lors de la planification est une décision. Réduire le périmètre à la fin d'une release parce que vous avez manqué de temps est un échec. Le backlog rend les deux visibles, mais seules les réductions en phase de planification sont contrôlées.

## Étape 4 : Créer des Issues sur Chaque Capability

Ouvrez chaque capability et créez les issues qui l'implémentent. Pour chaque issue :
- Rédigez un nom clair et direct
- Définissez un temps estimé en jours
- Assignez à un développeur ou une équipe
- Définissez la plateforme (Backend, Frontend, etc.)

Gardez les estimations honnêtes. Une estimation de 0,5 jour pour quelque chose qui prend systématiquement 2 jours est du bruit, pas de la planification.

## Étape 5 : Créer des Cycles pour le Calendrier de la Release

Créez des cycles qui s'étendent sur la période de la release. Si la release court d'avril à juin, créez deux ou trois cycles dans cette fenêtre.

La capacité de chaque cycle est calculée automatiquement à partir de la disponibilité de l'équipe et des jours ouvrés.

## Étape 6 : Assigner des Issues aux Cycles

Distribuez les issues sur les cycles. Chargez chaque cycle à environ 70-80% de sa capacité. Laissez de la marge pour le travail non planifié : bugs, problèmes d'intégration, itérations de revue.

Utilisez la vue de charge de travail du cycle pour vérifier la charge par développeur. Si un développeur est à 130% et un autre à 40%, redistribuez avant le démarrage du cycle.

## Suivi Pendant la Release

Une fois la release lancée :
- Vérifiez la progression du cycle quotidiennement (date, statut, indicateurs de temps)
- Enregistrez le temps sur les issues au fur et à mesure que le travail se termine
- Déplacez les issues entre cycles si quelque chose glisse
- Gardez les indicateurs de capacité au vert : si un cycle atteint 100%+ avec du travail restant à faire, escaladez immédiatement

## Clore la Release

Quand toutes les capabilities sont livrées et testées, marquez la release comme livrée. Sinra crée la rétrospective automatiquement. Remplissez-la pendant que la release est fraîche.
