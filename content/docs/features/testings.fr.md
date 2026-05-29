---
title: "Testings (QA)"
description: "Sinra intègre les cas de test QA directement dans le cycle de développement. Créez des cas de test sur les capabilities, exécutez-les pendant le cycle, et suivez l'acceptation sans quitter la plateforme."
date: 2024-01-01
weight: 40
---

## Que sont les Testings ?

Les testings sont des cas de test QA attachés aux capabilities. Au lieu de maintenir un outil séparé comme TestRail, votre équipe QA crée et exécute des cas de test directement dans Sinra, liés à la fonctionnalité qu'ils valident.

## Créer un Cas de Test

N'importe quel utilisateur avec accès Reporter ou supérieur peut créer un testing sur une capability :
1. Ouvrir la capability
2. Cliquer sur "Ajouter un Testing"
3. Définir le nom du test, la description et le résultat attendu
4. Assigner à un utilisateur QA

## Exécuter des Tests Pendant un Cycle

La vue `/testings/current` affiche tous les cas de test en cours pour la release active. Le QA exécute chaque test et le marque :

| Résultat | Signification |
|----------|--------------|
| **Accepté** | Test réussi, la fonctionnalité est validée |
| **Rejeté** | Test échoué, l'issue liée doit être rouverte ou un bug créé |

Les tests rejetés remontent immédiatement dans la vue capability, donnant aux développeurs et aux responsables produit un statut QA en temps réel.

## Traçabilité

Les testings connectent la capability à la validation :

```
Capability → Testing → Accepté / Rejeté
```

Quand une release est livrée, vous pouvez revoir quelles capabilities avaient tous les tests acceptés vs lesquelles avaient des rejets qui ont été ignorés ou reportés. Cette piste d'audit est préservée dans la rétrospective de la release.

## Pourquoi un QA Intégré est Important

Passer entre un outil de tickets et un outil QA séparé crée des problèmes de synchronisation : les bugs trouvés dans TestRail doivent être créés manuellement dans Jira. Sinra élimine ce transfert. Un cas de test rejeté est directement lié à la capability et au cycle où la correction appartient.
