---
title: "Configuration"
description: "Personnalisez Sinra pour votre organisation : statuts de workflow, labels, catégories et plateformes. Tout se configure sans code depuis les paramètres."
date: 2024-01-01
weight: 90
---

## Vue d'ensemble

Sinra s'adapte à votre processus, pas l'inverse. La section Configuration permet aux admins de définir les éléments partagés par toute l'organisation : workflows, étiquettes, et contextes.

## Statuts

Les statuts définissent les étapes de vos workflows. Sinra distingue deux types de statuts indépendants :

- **Statuts d'écriture** : progression de la spécification (ex. : Brouillon, En revue, Validé)
- **Statuts de développement** : progression de l'implémentation (ex. : À faire, En cours, En test, Terminé)

Pour chaque statut vous pouvez définir :
- **Nom** et **emoji** pour l'identifier visuellement
- **Pourcentage de complétion** pour le calcul de progression
- **Ordre** par glisser-déposer

Créez autant de statuts que votre processus le requiert. Un statut marqué à 100% est considéré comme terminal.

## Labels

Les labels sont des étiquettes colorées appliquées aux issues, capabilities et projets. Ils servent à catégoriser librement : type de travail, priorité fonctionnelle, domaine métier, etc.

Pour chaque label :
- Nom et couleur
- Portée : issues uniquement, capabilities, ou les deux

Les labels sont filtrables dans la liste d'issues avec les opérateurs `égal`, `dans` et `est vide`.

## Catégories

Les catégories permettent de regrouper des issues par domaine fonctionnel ou technique. Différentes des labels, elles sont conçues pour une structuration plus formelle.

Exemples : Authentification, Paiement, Notifications, Infrastructure.

## Plateformes

Les plateformes indiquent le contexte technique d'une issue :

- Website
- Mobile (iOS / Android)
- Backend
- Frontend
- Infrastructure

Chaque issue peut être taguée avec une plateforme. Cela permet de filtrer et de visualiser la charge par contexte technologique, utile pour les équipes full-stack ou multi-produits.

## Bonnes Pratiques

**Statuts** : restez simples. 4 à 6 statuts de développement couvrent la majorité des workflows. Trop de statuts crée de la friction.

**Labels** : évitez la duplication avec les plateformes ou catégories. Utilisez les labels pour ce qui ne rentre pas dans les autres axes.

**Catégories et plateformes** : définissez-les une fois au démarrage du projet. Changer les catégories en cours de route oblige à re-tagger les issues existantes.
