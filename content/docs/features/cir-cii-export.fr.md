---
title: "Export CIR/CII et Pointage"
description: "Constituez un extrait justificatif pour le Crédit d'Impôt Recherche (CIR) ou Innovation (CII), ou un relevé simple d'heures travaillées, directement depuis vos issues suivies au quotidien, sans ressaisie manuelle."
date: 2026-08-04
weight: 95
---

## Vue d'ensemble

L'export CIR/CII et pointage réutilise le mécanisme d'export existant (issues → CSV/JSON) pour produire deux types de rapports sans développement spécifique : un extrait justificatif pour le Crédit d'Impôt Recherche ou le Crédit d'Impôt Innovation, et un relevé simple d'heures travaillées par personne et par projet.

Aucune configuration technique n'est requise : le mécanisme s'appuie sur les **labels**, les **capabilities** et le temps passé déjà suivis sur vos issues.

## Constituer un Extrait CIR/CII

1. Créez un label dédié à vos travaux de recherche, par exemple « R&D » ou « Recherche » (**Configuration → Labels**). Le nom du label est libre : c'est vous qui décidez de ce qui relève de la R&D dans votre organisation.
2. Appliquez ce label aux issues concernées, au fur et à mesure de leur avancement.
3. Sur la liste des issues, filtrez sur ce label et sur la période souhaitée (**Filtres avancés**).
4. Ouvrez l'écran d'export et cochez « Réutiliser les filtres actuels ».
5. Sélectionnez les champs pertinents : **Projet**, **Description**, **Heures passées**, **Labels**, **Date de début du projet**, **Date de fin du projet**.
6. Exportez en CSV ou JSON. Le fichier contient une ligne par issue, avec le détail nécessaire au dossier justificatif.

## Produire un Relevé de Pointage

Pour un suivi d'heures simple, sans filtrer par label : cochez **Assigné**, **Projet** et **Heures passées**, puis exportez. Le fichier obtenu donne, pour chaque issue, la personne assignée, le projet et le temps passé — à agréger par personne ou par projet selon le besoin.

## Champs Disponibles

| Champ | Description |
|-------|-------------|
| **Heures passées** (`time_spent`) | Temps cumulé enregistré sur l'issue |
| **Labels** | Labels appliqués à l'issue, dont votre label R&D le cas échéant |
| **Date de début du projet** | Date de début de la capability associée à l'issue |
| **Date de fin du projet** | Date de fin de la capability associée à l'issue |
| **Projet, Description, Assigné, etc.** | Champs standards déjà disponibles sur tout export d'issues |

## Points d'Attention

Les heures exportées sont **cumulées par issue**, pas consignées comme un journal quotidien de présence : ce n'est pas un système de pointage horodaté au sens strict, mais un relevé d'activité basé sur le temps déjà suivi dans l'outil. L'export ne calcule ni montants en euros, ni taux horaire, ni qualification chercheur/technicien : ces éléments restent à ajouter en dehors de Sinra, propres à votre dossier fiscal.

## Cas d'Usage

- **Dossier justificatif CIR/CII** : extrait annuel des issues R&D avec heures et description technique.
- **Facturation au temps passé** : export filtré par projet plutôt que par label R&D, pour une prestation client.
- **Reporting d'activité** : relevé mensuel par personne ou par projet pour un suivi interne.
- **Audit ou conformité** : isolation des issues portant un label spécifique suivi dans la durée.
