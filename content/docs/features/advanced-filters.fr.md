---
title: "Filtres Avancés"
description: "Le système de filtres de Sinra supporte plus de 40 champs filtrables avec des groupes de règles ET/OU. Les filtres persistent dans votre session, vous ne perdez jamais votre vue. Apprenez à construire des requêtes précises sur votre backlog d'issues."
date: 2024-01-01
weight: 10
---

## Vue d'ensemble

La liste d'issues supporte le filtrage dynamique avec des groupes de règles ET/OU. Au lieu d'un ensemble fixe de menus déroulants, vous construisez des règles de filtre qui combinent n'importe lequel des 40+ champs en utilisant 8 opérateurs.

L'état des filtres persiste dans votre session : fermez l'onglet, revenez, et vos filtres sont toujours actifs.

## Construire un Filtre

Chaque règle de filtre a trois parties :
1. **Champ** : sur quoi filtrer (assigné, statut, release, label, priorité, temps estimé, etc.)
2. **Opérateur** : comment comparer (égal, différent, contient, supérieur à, inférieur à, est vide, n'est pas vide)
3. **Valeur** : contre quoi comparer

## Groupes de Règles ET / OU

Les règles se combinent en groupes. Dans un groupe, les règles utilisent la logique ET. Plusieurs groupes utilisent la logique OU.

**Exemple :** issues qui sont (En Cours ET assignées à Alice) OU (Bug ET priorité Haute)

Groupe 1 :
- Statut = En Cours
- Assigné = Alice

Groupe 2 :
- Type = Bug
- Priorité = Haute

Cela retourne les issues correspondant entièrement à l'un ou l'autre groupe.

## Champs Filtrables (sélection)

| Catégorie | Champs |
|-----------|--------|
| Assignation | Assigné, Équipe |
| Statut | Statut de développement, Statut d'écriture |
| Périmètre | Release, Cycle, Capability, Projet |
| Classification | Type, Priorité, Label, Plateforme |
| Temps | Temps estimé, Temps passé, Créé le, Mis à jour le |
| Contenu | Titre (contient) |

## Opérateurs

| Opérateur | Description |
|-----------|-------------|
| `égal` | Correspondance exacte |
| `différent` | Exclut la correspondance exacte |
| `contient` | Correspondance de sous-chaîne (champs texte) |
| `supérieur à` | Comparaison numérique |
| `inférieur à` | Comparaison numérique |
| `est vide` | Le champ n'a pas de valeur |
| `n'est pas vide` | Le champ a une valeur |
| `dans` | Correspond à n'importe quel élément d'une liste |

## Persistance de Session

Sinra stocke vos filtres actifs dans la session, pas dans un paramètre d'URL ou une vue sauvegardée. Cela signifie :
- Vos filtres survivent à la navigation dans l'application
- Chaque session de navigateur commence fraîche
- Les filtres sont par utilisateur, pas partagés

Si vous voulez partager une vue filtrée spécifique avec un coéquipier, utilisez l'URL (qui reflète les filtres actuels) ou décrivez directement les règles de filtre.

## Tri

La liste d'issues supporte le tri par n'importe quelle colonne. L'ordre de tri persiste également dans la session avec les filtres. Combinaisons de tri courantes :
- Priorité décroissante + Temps estimé décroissant (les plus importants et critiques en premier)
- Mis à jour le décroissant (le plus récemment modifié en premier)
- Assigné + Statut (effet de vue groupée)
