---
title: "Vues des Issues"
description: "Sinra offre deux façons de visualiser vos issues : une liste en tableau pour le scan détaillé et un tableau kanban pour le workflow basé sur les statuts. Basculez entre les deux instantanément sans perdre vos filtres."
date: 2024-01-01
weight: 30
---

## Vue Liste (Tableau)

La vue par défaut affiche les issues dans un tableau paginé avec des colonnes triables :

| Colonne | Description |
|---------|-------------|
| Priorité | Indicateur codé par couleur (Basse, Moyenne, Haute) |
| Titre | Nom de l'issue, cliquable pour ouvrir |
| Assigné | Avatar avec info-bulle du nom |
| Release | Version ciblée par cette issue |
| Cycle | Assignation au cycle actuel |
| Statut | Badge du statut de développement |
| Labels | Tous les labels appliqués |
| Plateforme | Backend, Frontend, etc. |
| Estimé | Estimation de temps en jours |
| Passé | Temps enregistré en jours |

Cliquez sur n'importe quel en-tête de colonne pour trier. Cliquez à nouveau pour inverser. L'état du tri persiste dans la session.

La liste est idéale pour :
- Scanner un grand backlog avec des filtres appliqués
- Comparer les estimations entre les issues
- Sélectionner des issues en masse pour des mises à jour par lot

## Vue Kanban (Tableau)

Le tableau regroupe les issues par statut de développement en colonnes. Chaque carte affiche :
- Titre
- Indicateur de priorité
- Labels
- Avatar de l'assigné

Faites glisser les cartes entre les colonnes pour mettre à jour le statut de développement directement sur le tableau.

Le tableau est idéal pour :
- Les stand-ups quotidiens ("qu'est-ce qui est en cours ?")
- Visualiser le flux à travers le pipeline de statuts
- Mises à jour de statut rapides sans ouvrir les issues

## Basculer entre les Vues

Un bouton de bascule en haut à droite de la liste d'issues permet de passer entre Liste et Kanban. Vos filtres actifs, votre tri et votre recherche s'appliquent aux deux vues. Changer de vue ne réinitialise pas vos filtres.

## Opérations en Masse (Vue Liste)

Dans la vue liste, cochez la case sur n'importe quelle issue pour la sélectionner. Sélectionnez plusieurs issues pour activer les actions en masse :

| Action | Description |
|--------|-------------|
| Définir le statut | Mettre à jour le statut de développement pour toutes les sélectionnées |
| Assigner | Réassigner toutes les sélectionnées à un utilisateur ou une équipe |
| Définir la release | Déplacer les issues sélectionnées vers une autre release |
| Définir le cycle | Réassigner les sélectionnées à un autre cycle |
| Ajouter un label | Ajouter un label à toutes les issues sélectionnées |
| Définir la plateforme | Mettre à jour la plateforme pour toutes les sélectionnées |

Les opérations en masse sont irréversibles en une seule action, donc confirmez avant de les appliquer à de grandes sélections.
