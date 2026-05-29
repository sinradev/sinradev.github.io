---
title: "Projets"
description: "Les projets regroupent les capabilities qui partagent un objectif stratégique. Ils constituent le niveau de planification le plus haut dans Sinra, au-dessus des releases et des cycles."
date: 2024-01-01
weight: 5
---

## Qu'est-ce qu'un Projet ?

Un projet est un conteneur stratégique qui regroupe des capabilities liées entre elles. Il représente une initiative, un produit, ou un axe de développement à long terme.

Exemples de projets :
- "Application mobile v2"
- "Refonte du moteur de facturation"
- "Intégrations tierces"

## Hiérarchie dans Sinra

```
Projet
  └── Capabilities (fonctionnalités concrètes)
        └── Issues (tâches d'implémentation)
```

Un projet peut contenir des capabilities assignées à des releases différentes. Il offre une vue transversale sur l'avancement d'une initiative, indépendamment du planning des sprints.

## Créer un Projet

1. Allez dans **Projets**
2. Cliquez sur **Nouveau Projet**
3. Définissez le nom et la description
4. Ajoutez des capabilities existantes ou créez-en depuis le projet

## Vue Projet

La vue détail d'un projet affiche :
- Toutes les capabilities liées avec leur statut
- Le nombre d'issues ouvertes par capability
- La release cible de chaque capability

Cela donne une lecture immédiate de l'état d'avancement d'une initiative entière, sans avoir à parcourir les releases ou cycles individuellement.

## Projets vs Releases

Ces deux concepts sont complémentaires, pas interchangeables :

| | Projet | Release |
|-|--------|---------|
| Répond à | Sur quoi travaillons-nous ? | Quand livrons-nous ? |
| Durée | Long terme, ouvert | Délimitée dans le temps |
| Contient | Capabilities | Capabilities + Issues |
| Axe | Stratégique | Opérationnel |

Un même projet peut contribuer à plusieurs releases successives. Une release peut inclure des capabilities de plusieurs projets différents.

## Bonnes Pratiques

Créez un projet par initiative ou domaine fonctionnel majeur. Évitez les projets trop larges ("Tout le produit") ou trop granulaires ("Sprint 12"). Un bon projet tient en une phrase : ce qu'il vise, pas comment il le fait.
