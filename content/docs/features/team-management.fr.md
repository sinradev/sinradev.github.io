---
title: "Gestion des Équipes"
description: "Configurez vos équipes, rôles et taux de disponibilité dans Sinra. La précision de ces données conditionne la fiabilité de tous les calculs de capacité."
date: 2024-01-01
weight: 80
---

## Structure des Équipes

Un utilisateur appartient à exactement une équipe par organisation. Cette contrainte est intentionnelle : elle évite le double comptage de la capacité quand un développeur serait théoriquement dans deux équipes.

Les équipes regroupent les personnes qui travaillent ensemble sur les mêmes issues et cycles.

## Créer une Équipe

1. Allez dans **Équipes**
2. Cliquez sur **Nouvelle Équipe**
3. Donnez un nom à l'équipe (Backend, Frontend, QA, Product, etc.)
4. Invitez des membres par email

Chaque équipe reçoit un avatar auto-généré à partir de son nom.

## Rôles

| Rôle | Permissions |
|------|-------------|
| **Développeur** | Créer et modifier des issues, enregistrer du temps |
| **Reporter** | Créer des issues, créer des testings, commenter |
| **Manager** | Tout ce qui précède, plus gérer releases et cycles |
| **Admin** | Accès complet : facturation, paramètres, configuration |

Assignez le rôle minimum nécessaire. Un reporter qui ne code pas n'a pas besoin du rôle Développeur.

## Types de Développeurs

Les développeurs ont un sous-type qui affecte le regroupement dans les vues de charge :
- **Backend**
- **Frontend**
- **Fullstack**

La vue de charge de travail d'un cycle ventile automatiquement par type, pour voir si la charge est équilibrée entre frontend et backend.

## Taux de Disponibilité

Le `taux de disponibilité` (0-100%) est la configuration la plus importante. Tous les calculs de capacité en dépendent.

| Situation | Taux recommandé |
|-----------|----------------|
| Temps plein, projet unique | 80-100% |
| Mi-temps ou multi-projets | 40-60% |
| Contributeur ponctuel | 20-30% |

Ne soyez pas optimiste. Un développeur réellement disponible à 80% configuré à 100% rendra chaque cycle optimiste sur papier et déficitaire en pratique.

## Modifier un Taux en Cours de Projet

Si un membre change de disponibilité (nouveau projet parallèle, congé, retour), mettez à jour son taux. Sinra recalcule immédiatement la capacité des cycles futurs. Les cycles passés conservent leurs données historiques.

## Invitations

Les membres reçoivent une invitation par email. Ils doivent accepter et créer leur compte avant d'être assignables sur des issues et cycles.

## Limites de Sièges

Le nombre de membres dépend de votre plan. Les sièges disponibles sont visibles dans les paramètres de l'équipe.
