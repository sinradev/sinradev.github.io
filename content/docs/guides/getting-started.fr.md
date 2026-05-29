---
title: "Démarrage"
description: "Configurez votre organisation Sinra en moins de 30 minutes. Ce guide vous accompagne dans la création de l'organisation, la configuration de l'équipe et votre première release de zéro."
date: 2024-01-01
weight: 10
---

## Avant de Commencer

Vous aurez besoin de :
- Un compte Sinra (inscrivez-vous sur [app.sinra.dev](https://app.sinra.dev/users/sign_up))
- Les noms et emails des membres de l'équipe à inviter
- Une idée approximative de ce que vous construisez (un nom de release suffit)

## Étape 1 : Créer Votre Organisation

Lors de votre première connexion, Sinra vous invite à créer une organisation. C'est votre espace de travail isolé. Toutes les données, équipes et projets appartiennent à cette organisation.

Définissez :
- **Nom de l'organisation** : le nom de votre entreprise ou projet
- **Langue** : Français, Anglais ou Espagnol (définit le défaut pour tous les membres)

## Étape 2 : Créer des Équipes

Allez dans **Équipes** et créez au moins une équipe. Les équipes regroupent les personnes qui travaillent ensemble sur le projet.

Pour chaque membre de l'équipe :
1. Cliquez sur **Inviter un membre**
2. Entrez son email
3. Définissez son rôle (Développeur, Reporter, Manager, Admin)
4. Définissez son **taux de disponibilité** (0-100%)

Le taux de disponibilité est important. Un développeur à 100% est à temps plein sur ce projet. Un développeur à 50% travaille à mi-temps. Cela alimente tous les calculs de capacité dans Sinra, donc définissez-le avec précision dès le départ.

## Étape 3 : Créer un Projet

Allez dans **Projets** et créez votre premier projet. Un projet regroupe des capabilities qui partagent un objectif stratégique.

Vous pouvez créer un projet pour commencer et en ajouter d'autres plus tard à mesure que votre produit se développe.

## Étape 4 : Créer des Capabilities

Dans votre projet, créez des capabilities pour les fonctionnalités que vous prévoyez de construire. Gardez-les concrètes : "Authentification utilisateur", "Tableau de bord", "Export CSV" plutôt que "Améliorer l'expérience produit."

Chaque capability devrait être quelque chose que vous pouvez regarder dans 3 mois et dire définitivement : livré ou non livré.

## Étape 5 : Créer une Release

Allez dans **Releases** et créez votre première release. Définissez :
- **Nom** : v1.0, 2024.Q1, ou ce qui convient à votre versionnage
- **Date cible** : quand vous prévoyez de livrer
- **Capacité cible** : jours de travail que vous engagez (vous pouvez mettre à jour cela plus tard)

## Étape 6 : Assigner des Capabilities à la Release

Allez dans la vue **Backlog**. Faites glisser les capabilities que vous avez créées dans votre release. Regardez l'indicateur de capacité au fur et à mesure que vous en ajoutez. S'il devient rouge, vous avez plus de périmètre que de capacité.

Prenez les décisions difficiles maintenant, pas pendant le dernier sprint.

## Étape 7 : Créer Votre Premier Cycle

Allez dans **Cycles** et créez un cycle avec une date de début et une date de fin. Sinra calcule automatiquement la capacité du cycle à partir des jours ouvrés et de la disponibilité de l'équipe.

Un cycle dure typiquement 1 à 4 semaines. Commencez par 2 semaines si vous n'êtes pas sûr.

## Étape 8 : Assigner des Issues au Cycle

Ouvrez la liste d'issues. Filtrez par votre release. Assignez des issues à votre cycle en modifiant le champ **Cycle** sur chaque issue.

Regardez la vue de charge de travail du cycle pour vous assurer qu'aucun développeur n'est surchargé.

## Vous Êtes Prêt

Avec une équipe, une release, un backlog de capabilities et des issues planifiées dans un cycle, Sinra fonctionne. La vue d'accueil affiche votre cycle en cours avec des indicateurs de progression.

À partir de là :
- Suivez la progression quotidienne dans la vue du cycle
- Enregistrez le temps sur les issues
- Ajoutez des cas de test QA sur les capabilities au fur et à mesure que les fonctionnalités se complètent
- Fermez la release quand elle est livrée et examinez la rétrospective
