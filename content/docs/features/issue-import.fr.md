---
title: "Importer des issues"
description: "Importez des issues dans Sinra depuis un fichier CSV exporté depuis n'importe quel outil, avec des presets de mapping automatique pour Jira, Asana, Azure DevOps et Linear, ou directement depuis GitHub via OAuth."
date: 2026-09-16
weight: 36
---

## Deux chemins d'import

Sinra propose deux façons d'importer du travail existant dans une organisation : un **import de fichier CSV** pour tout outil capable d'en exporter un, et un **import GitHub Issues** pour les dépôts connectés via OAuth.

## Import de fichier CSV

Importez des issues depuis un fichier CSV exporté depuis n'importe quel outil.

- Prend en charge les délimiteurs virgule, point-virgule et tabulation
- Presets de mapping automatique pour **Jira**, **Asana**, **Azure DevOps** et **Linear** : les en-têtes de colonnes de ces outils sont reconnus automatiquement, pas besoin de mapper les champs à la main
- Les autres outils fonctionnent aussi : mappez les colonnes manuellement si aucun preset ne correspond
- Jusqu'à 5 000 lignes par import

Lancez un import depuis **Import from CSV** dans la section Issues.

## GitHub Issues

Importez les issues ouvertes ou fermées directement depuis un dépôt GitHub connecté.

- Connexion par OAuth, aucun token personnel requis
- Filtrez par label, milestone ou statut avant l'import
- Détection automatique des doublons pour éviter de réimporter des issues déjà présentes dans Sinra

Lancez un import depuis **Connect GitHub** dans la section Issues.

## Différence avec l'intégration VCS

Cet import est un transfert ponctuel d'issues existantes. Il est distinct de l'[intégration VCS](/fr/docs/features/vcs-integration/), qui synchronise en continu le statut de développement à partir des événements git (PR ouverte, mergée, etc.) une fois les issues déjà créées dans Sinra.
