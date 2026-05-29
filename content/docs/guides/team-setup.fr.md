---
title: "Configuration des Équipes"
description: "Configurez les équipes, rôles et taux de disponibilité avec précision. Le système de capacité de Sinra n'est performant que si les données de l'équipe sont fiables."
date: 2024-01-01
weight: 20
---

## Les Équipes dans Sinra

Une équipe est un groupe d'utilisateurs qui travaillent ensemble. Les utilisateurs appartiennent exactement à une équipe par organisation. Cette contrainte garde les calculs de charge de travail propres : il n'y a pas de double comptage de la capacité quand un développeur apparaît dans deux équipes.

## Créer une Équipe

1. Allez dans **Équipes**
2. Cliquez sur **Nouvelle Équipe**
3. Donnez un nom à l'équipe (Backend, Frontend, QA, etc.)
4. Ajoutez des membres

Chaque équipe reçoit un avatar auto-généré basé sur son nom.

## Rôles

Quatre rôles sont disponibles par organisation :

| Rôle | Permissions |
|------|-------------|
| **Développeur** | Créer et mettre à jour des issues, enregistrer le temps |
| **Reporter** | Créer des issues, créer des testings, commenter |
| **Manager** | Tout ce qui précède, plus gérer les releases et cycles |
| **Admin** | Accès complet à l'organisation incluant la facturation et les paramètres |

Assignez le rôle le plus bas qui donne à chaque membre ce dont il a besoin. Les reporters qui n'écrivent pas de code ne devraient pas avoir l'accès Développeur.

## Types de Développeurs

Les développeurs ont un sous-type qui affecte le groupement de la charge de travail :
- **Backend**
- **Frontend**
- **Fullstack**

Les vues de charge de travail des cycles regroupent par type de développeur, vous pouvez donc voir la charge backend vs frontend séparément.

## Taux de Disponibilité

C'est la configuration la plus importante dans Sinra. Tous les calculs de capacité en dépendent.

Définissez le `target_capacity` de chaque membre pour refléter sa disponibilité réelle pour ce projet :

| Situation | Taux |
|-----------|------|
| Temps plein, pas d'autres projets | 80-100% |
| Temps partiel ou projets multiples | 40-60% |
| Contributeur occasionnel | 20-30% |

Ne définissez pas les taux de façon optimiste. Si quelqu'un est vraiment à 80% mais que vous le définissez à 100%, chaque cycle semblera sous-capacité jusqu'à ce que vous voyiez des dépassements à la livraison.

## Mettre à Jour les Taux en Cours de Projet

Si un membre de l'équipe change sa disponibilité (démarrage d'un nouveau projet parallèle, congé, retour de congé), mettez à jour son taux dans les paramètres de l'équipe. Sinra recalcule immédiatement la capacité future des cycles. Les cycles passés conservent leurs données historiques.

## Limites de Sièges

Le nombre de membres que vous pouvez ajouter dépend de votre plan d'abonnement. Sinra affiche les sièges disponibles restants dans les paramètres de l'équipe. Contactez le support si vous avez besoin d'augmenter votre nombre de sièges.

## Inviter des Membres

Les membres reçoivent une invitation par email quand ils sont ajoutés à une équipe. Ils doivent accepter l'invitation et créer leur compte avant d'apparaître comme utilisateurs assignables dans les issues et cycles.
