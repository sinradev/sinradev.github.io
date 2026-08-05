# Phase 0 Research: Refonte de l'onboarding nouvel utilisateur

## Contexte de la recherche

Ce dépôt (`sinra-website`) n'a pas accès au code source de `app.sinra.dev`. Les points "NEEDS CLARIFICATION" du plan concernent la stack technique réelle de l'application, inconnue depuis ce dépôt. Cette recherche documente les hypothèses raisonnables prises pour permettre la conception (Phase 1), à valider par l'équipe propriétaire du dépôt applicatif avant implémentation.

## Décisions

### 1. Stack technique de l'application

- **Decision**: Traiter l'app comme une SPA frontend consommant une API backend avec base de données relationnelle, sans imposer de framework précis dans les artefacts de conception.
- **Rationale**: `app.sinra.dev` est un sous-domaine distinct de `sinra.dev` (site Hugo statique), et l'interface observée (dashboard dynamique, drag-and-drop de statuts, formulaires réactifs, modal contextuel) indique une application côté client avec état serveur persistant, typique d'un stack SPA + API REST/GraphQL.
- **Alternatives considered**: Deviner un framework précis (React, Vue, Rails) sans confirmation aurait produit des contrats et une structure de code potentiellement inutilisables tels quels par l'équipe applicative. Rester agnostique permet au plan de rester valide quel que soit le framework réel.

### 2. Persistance de l'état "Onboarding State"

- **Decision**: Modéliser l'état comme une entité serveur persistée par (user_id, organization_id), pas uniquement côté client (ex: localStorage).
- **Rationale**: L'edge case "deux utilisateurs de la même organisation en parallèle" (voir spec.md) et le besoin de ne pas re-déclencher le flow après reconnexion sur un autre appareil imposent une source de vérité serveur. Un stockage uniquement client (cookie/localStorage) ne survivrait pas à un changement de navigateur/appareil et ne permettrait pas de vérifier l'état réel de l'organisation (a-t-elle une Release ?) sans appel serveur de toute façon.
- **Alternatives considered**: Flag purement client (localStorage) - rejeté car non robuste au multi-appareil et non centralisable pour du reporting produit (mesurer le taux de complétion du flow, cf. SC-001/SC-002).

### 3. Déclenchement du flow : basé sur l'organisation, pas sur l'utilisateur

- **Decision**: La condition de déclenchement du flow d'onboarding est "l'organisation ne contient aucune Release", combinée à "cet utilisateur n'a pas encore vu/skip/complété le flow", pas uniquement "cet utilisateur est nouveau".
- **Rationale**: Directement dérivé de FR-009 et de l'edge case "utilisateur invité dans une organisation déjà active". Un utilisateur invité tardivement dans une organisation mature ne doit pas être forcé dans un flow de création de Release qui n'a plus de sens pour lui.
- **Alternatives considered**: Déclencher uniquement sur "compte utilisateur créé il y a moins de X minutes" - rejeté car ne gère pas le cas d'invitation dans une organisation existante, et re-déclencherait potentiellement le flow pour un utilisateur qui rejoint une organisation déjà pleine de données.

### 4. Remplacement du modal texte par le flow interactif : coexistence transitoire

- **Decision**: Le contenu informatif actuel du "Getting Started Guide" (glossaire, philosophie, concepts) n'est pas supprimé mais déplacé derrière un point d'accès explicite (FR-006), pendant que le flow actionnable en 3 étapes devient le mécanisme principal de première prise en main.
- **Rationale**: Le contenu pédagogique a de la valeur pour un utilisateur qui veut comprendre le "pourquoi" (capacité, dual workflow, etc.), mais ne doit plus être un préalable bloquant à l'action. Séparer "faire" (flow guidé) de "comprendre en profondeur" (guide consultable à la demande) résout la contradiction observée sans perdre le contenu existant.
- **Alternatives considered**: Suppression pure du contenu du guide - rejeté, perte de valeur pédagogique réelle pour les utilisateurs qui la recherchent activement (ex: recherche du mot "capacity planning" dans une aide).

### 5. Pré-remplissage des données d'exemple (étapes 2 et 3)

- **Decision**: Les issues d'exemple pré-remplies à l'étape 2 doivent être génériques et directement supprimables/éditables (pas de contenu figé imposé), avec un texte qui illustre le vocabulaire Sinra (ex: "Exemple : Ajouter l'export CSV des rapports").
- **Rationale**: Cohérent avec le ton "vocabulaire concret" mis en avant sur le site marketing (issues, capabilities, releases, cycles) et avec le constat d'audit que les nouveaux utilisateurs doivent comprendre ce vocabulaire par l'exemple plutôt que par la définition abstraite.
- **Alternatives considered**: Champs vides à l'étape 2 (aucun pré-remplissage) - rejeté, cela recrée la "page blanche" identifiée comme problème (cf. comparaison avec Monday.com dans le contenu blog existant, même symptôme que l'onboarding actuel).

## Unknowns restants pour l'équipe applicative

- Confirmer le framework frontend/backend réel avant de traduire `data-model.md` et `contracts/` en code.
- Confirmer le mécanisme d'authentification/session existant pour rattacher l'Onboarding State au bon (user_id, organization_id).
- Confirmer si un système de feature flags existe déjà dans l'app pour déployer ce nouveau flow progressivement (recommandé vu le changement de comportement au premier login, à fort impact si bug).
