---
title: "Revues de Jalon (Phase Gate Reviews)"
description: "Sinra implémente les jalons de la méthode V sous forme de revues structurées avec critères d'évaluation explicites et verdicts formels. Contrôlez la qualité à chaque étape de votre processus de développement."
date: 2024-01-01
weight: 60
---

## Qu'est-ce qu'une Revue de Jalon ?

Les Revues de Jalon sont des points de contrôle formels qui déterminent si un projet, une release ou un cycle est prêt à avancer. Inspirées de la méthodologie V-model, elles remplacent les approbations informelles par des décisions structurées, documentées et traçables.

Une Revue de Jalon répond à une seule question : **sommes-nous prêts à continuer ?**

## Créer une Revue

1. Accédez à `/phase_gate_reviews`
2. Créez une revue avec un nom et liez-la à une release, un cycle ou un projet
3. Ajoutez des participants (tech lead, PO, QA lead, ops)
4. Ajoutez des critères d'évaluation
5. Évaluez chaque critère
6. Enregistrez le verdict

## Critères d'Évaluation

Les critères sont les conditions spécifiques qui doivent être remplies pour avancer. Exemples :

- Tous les bugs critiques résolus
- Couverture de tests supérieure à 80%
- Documentation API complète
- Scan de sécurité passé
- Démo stakeholders effectuée

Chaque critère peut être évalué comme **passed** (validé), **failed** (échoué) ou **n/a** (non applicable).

## Système de Verdict

| Verdict | Statut résultant | Quand l'utiliser |
|---------|-----------------|-----------------|
| **go** | approved | Tous les critères critiques validés |
| **no-go** | rejected | Un ou plusieurs critères bloquants non remplis |
| **go conditionnel** | conditionally_approved | Problèmes mineurs notés, on avance avec des réserves documentées |

Le statut se met à jour automatiquement lors de l'enregistrement du verdict. Une revue est terminale une fois qu'elle atteint approved, rejected ou conditionally_approved — elle ne peut pas être rouverte.

## Participants

Les participants sont les parties prenantes dont le feu vert est nécessaire pour ce jalon. Ajouter des participants crée une piste d'audit de qui a examiné et approuvé une transition de phase. C'est particulièrement important dans les secteurs réglementés où une preuve de revue formelle est requise.

## Revue de Jalon vs Rétrospective

| | Revue de Jalon | Rétrospective |
|--|--|--|
| **Moment** | Avant de passer à la phase suivante | Après la livraison de la release |
| **Objectif** | Jalon conditionnel — peut bloquer la progression | Réflexive — ne bloque jamais |
| **Résultat** | Verdict go/no-go | Feedbacks et améliorations |
| **Direction** | Orientée futur | Orientée passé |

## Usage Hybride V-Model + Agile

Dans une méthodologie hybride, les Revues de Jalon jalonnent les grandes phases V-model (requirements terminés, design approuvé, intégration prête, UAT validé) pendant que les cycles Agile s'exécutent au sein de chaque phase. Une séquence typique :

1. Phase requirements terminée → Revue de Jalon (toutes les specs approuvées ?)
2. Phase design terminée → Revue de Jalon (architecture revue ?)
3. Cycle livré en staging → Revue de Jalon (déploiement prêt ?)
4. UAT complet → Revue de Jalon (go pour la production ?)

Chaque jalon crée un point de décision documenté et auditable sans bloquer la cadence Agile au sein des phases.
