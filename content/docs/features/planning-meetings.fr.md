---
title: "Réunions de Planning"
description: "Sinra centralise les réunions de planning aux côtés des issues et releases qu'elles planifient. Créez des réunions structurées avec ordre du jour, participants et décisions — le tout lié au cycle ou à la release concernée."
date: 2024-01-01
weight: 55
---

## Qu'est-ce qu'une Réunion de Planning ?

Les Réunions de Planning dans Sinra sont des enregistrements formels pour la synchronisation structurée de l'équipe. Elles sont distinctes des issues (tâches à exécuter) et des pages (documentation) : une réunion de planning est un moment de décision collective qui produit des résultats alimentant vos issues et releases.

## Créer une Réunion

1. Accédez à `/planning_meetings`
2. Créez une nouvelle réunion avec un nom et un corps optionnel en texte riche (ordre du jour, décisions)
3. Définissez le statut : **draft** lors de la préparation, **scheduled** une fois confirmé, **done** après tenue
4. Liez-la à une release, un cycle ou une capability (optionnel mais recommandé)
5. Ajoutez des participants de votre équipe

## Cycle de Vie des Statuts

| Statut | Quand l'utiliser |
|--------|-----------------|
| **draft** | La réunion est en préparation, l'ordre du jour n'est pas finalisé |
| **scheduled** | La date est fixée, les participants confirmés |
| **done** | La réunion s'est tenue, le compte-rendu est enregistré dans le corps |

## Lien avec Votre Travail

Lier une réunion à un cycle, une release ou une capability crée une traçabilité entre le moment de décision et le travail qu'il régit :

| Lien | Cas d'usage |
|------|------------|
| **Cycle** | Planification de sprint — décider ce qui entre dans ce cycle |
| **Release** | Réunion de kick-off ou revue de périmètre d'une version |
| **Capability** | Refinement de backlog pour une fonctionnalité spécifique |

## Participants

Ajoutez des membres de l'équipe comme participants pour enregistrer qui était présent. C'est distinct des @mentions dans le corps : les participants sont les participants officiels, les mentions sont des références contextuelles.

## Pourquoi Pas Simplement Des Issues ?

Une issue suit le travail à faire. Une réunion de planning suit une décision qui a été prise. La distinction est importante parce que :

- Les décisions ont des participants, pas des assignés
- Les décisions produisent des résultats, pas des livrables
- Les décisions historiques doivent être consultables indépendamment du backlog de tâches

## Réunions de Planning vs Rétrospectives

Les rétrospectives regardent en arrière (qu'avons-nous appris de cette release ?). Les réunions de planning regardent en avant (sur quoi allons-nous nous engager ?). Sinra les garde séparées parce qu'elles servent des objectifs différents dans la cadence de votre équipe.
