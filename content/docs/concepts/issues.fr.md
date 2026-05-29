---
title: "Issues"
description: "Les issues sont l'unité fondamentale de travail dans Sinra. Chaque tâche, bug et spécification est une issue. Découvrez comment elles fonctionnent, quels champs elles portent, et comment le workflow à double statut suit séparément l'écriture et le développement."
date: 2024-01-01
weight: 20
---

## Qu'est-ce qu'une Issue ?

Une issue représente un élément de travail concret : un bug à corriger, une fonctionnalité à construire, une spécification à rédiger. Chaque livrable dans Sinra se trace jusqu'à une issue.

Contrairement aux formats traditionnels de "user story" avec une structure rigide, les issues Sinra utilisent des noms directs et descriptifs. "Export CSV des rapports" est plus utile que "En tant qu'utilisateur, je veux exporter des rapports afin de pouvoir analyser les données."

## Types d'Issues

| Type | Quand l'utiliser |
|------|-----------------|
| **Bug** | Un défaut à corriger |
| **Spécification** | Un document de spec qui passe par le workflow d'écriture |
| **Fonctionnalité** | Une nouvelle capability à construire |
| **Tâche** | Toute autre unité de travail |

## Champs Principaux

- **Nom** : titre concis et descriptif
- **Corps** : texte riche avec images et `@mentions`
- **Priorité** : Basse, Moyenne, Haute
- **Temps estimé** : en jours, alimente les calculs de capacité
- **Labels** : étiquettes personnalisées par organisation
- **Plateforme** : Backend, Frontend, Mobile, etc.

## Assignation

Les issues peuvent être assignées à un utilisateur spécifique ou à une équipe entière. Quand une issue est assignée à une équipe, n'importe quel membre de l'équipe peut la prendre en charge.

## Workflow à Double Statut

Chaque issue porte deux statuts indépendants :

| Type de statut | Objectif |
|---------------|----------|
| **Statut d'écriture** | Suit la progression de la spec/planification |
| **Statut de développement** | Suit la progression de l'implémentation |

Cela signifie qu'une spécification peut être "En revue" pour l'écriture pendant que le développeur n'a pas encore commencé. Les deux axes progressent indépendamment, donnant à l'équipe une visibilité précise sur où le travail en est réellement.

## Lier des Issues

Les issues se connectent vers le haut à :
- **Release** : quelle version cette issue cible
- **Cycle** : quelle période de travail cette issue est planifiée dans
- **Capability** : à quel epic de fonctionnalité cette issue contribue

Une issue appartient à une release et un cycle, mais ces deux axes sont indépendants. Un cycle peut contenir des issues de plusieurs releases, ce qui permet le travail en parallèle sur plusieurs versions.

## Suivi du Temps

Enregistrez le temps passé directement sur une issue. Sinra compare le temps passé à l'estimation, faisant remonter les dépassements avant qu'ils ne deviennent des surprises. Ces chiffres alimentent le calcul de la charge de travail du cycle.

## Commentaires et Mentions

Chaque issue a une section de commentaires avec fils de discussion, texte riche et `@mentions`. Mentionner un utilisateur déclenche une notification par email avec le contexte complet. La discussion reste attachée au travail, pas perdue dans Slack.
