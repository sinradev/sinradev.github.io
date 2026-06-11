---
title: "Spec Pipeline"
description: "Le Spec Pipeline est un tableau Kanban dédié aux workflows PO/PM. Il visualise toutes les issues de rédaction de specs, groupées par capability et organisées en colonnes selon leur statut de rédaction. Glissez les cartes entre colonnes pour mettre à jour le statut instantanément."
date: 2026-06-11
weight: 25
---

## Vue d'ensemble

Le Spec Pipeline offre aux product owners et chefs de projet une vue dédiée pour suivre l'avancement de la rédaction des specs sur toutes les capabilities. Au lieu de naviguer issue par issue, le pipeline donne une vision globale : quelles capabilities ont des specs en cours, bloquées en review ou prêtes.

Accédez-y depuis la sidebar dans le menu déroulant **Capabilities**.

## Colonnes

Chaque colonne correspond à un statut de rédaction configuré pour votre organisation. Les statuts sont ordonnés de gauche à droite en suivant le flux de rédaction :

| Colonne | Signification |
|---------|--------------|
| **À rédiger** | Specs pas encore démarrées |
| **En cours** | Specs en cours de rédaction |
| **En review** | Specs en attente de validation |
| **Validé** | Specs validées |

Les noms des colonnes correspondent aux statuts de rédaction configurés dans votre organisation. Seules les issues ayant un statut de rédaction défini apparaissent dans le pipeline.

## Regroupement des cartes

Dans chaque colonne, les cartes sont regroupées par capability. Chaque groupe affiche le nom de la capability en en-tête, suivi des issues qui lui appartiennent.

Les issues sans capability liée apparaissent dans un groupe **"Sans capability"** en bas de chaque colonne.

Cliquer sur une carte redirige vers la page de détail de l'issue existante.

## Filtres

Filtrez le pipeline par **release** et par **projet** pour vous concentrer sur ce qui compte maintenant :

- Sélectionnez une release pour voir uniquement les issues liées à cette release ou souhaitée
- Sélectionnez un projet pour affiner encore
- Combinez les deux filtres, ils s'appliquent cumulativement
- Utilisez **Réinitialiser** pour effacer tous les filtres actifs

Les filtres sont conservés pendant la durée de votre session.

## Glisser-déposer

Déplacez une carte d'une colonne à une autre pour mettre à jour son statut de rédaction instantanément. La modification est enregistrée immédiatement sans rechargement complet de la page.

- Seuls les déplacements inter-colonnes sont supportés (pas de réordonnancement intra-colonne)
- Le drag-and-drop respecte vos droits d'accès existants sur les issues
- Si vous n'avez pas la permission de modifier une issue, la carte n'est pas déplaçable

## Accès

Le Spec Pipeline est accessible à tous les membres de votre organisation. Les mêmes règles d'accès que l'index Capabilities s'appliquent.

## États vides

| Situation | Affichage |
|-----------|-----------|
| Aucun filtre ne correspond | Message "Aucune spec correspondante" |
| Aucun statut de rédaction configuré | Invitation à configurer les statuts dans Paramètres |
