# Contracts: Onboarding API (Phase 1)

Contrats fonctionnels exprimés en REST générique. À adapter au style d'API réel de `app.sinra.dev` (REST/GraphQL/RPC) par l'équipe applicative. Chaque requête est authentifiée dans le contexte de l'utilisateur et de l'organisation courante (mécanisme existant, non redéfini ici).

## GET /onboarding/state

Récupère l'état d'onboarding de l'utilisateur courant pour l'organisation courante.

**Response 200**:
```json
{
  "status": "not_started | in_progress | skipped | completed",
  "current_step": "release | issues | cycle | null",
  "created_release_id": "string | null",
  "created_cycle_id": "string | null",
  "organization_has_releases": true
}
```

`organization_has_releases` permet au frontend d'appliquer la règle de déclenchement (data-model.md) sans requête supplémentaire.

## POST /onboarding/start

Démarre le flow (transition `not_started` -> `in_progress`, `current_step` = `release`). Crée l'`OnboardingState` s'il n'existe pas.

**Response 200**: même forme que GET /onboarding/state.

## POST /onboarding/steps/release

Crée la Release de l'étape 1 et fait avancer `current_step` à `issues`.

**Request**:
```json
{ "name": "string", "start_date": "date", "end_date": "date" }
```

**Response 200**:
```json
{ "release_id": "string", "onboarding_state": { "...": "cf GET /onboarding/state" } }
```

**Erreurs** : 409 si `current_step` n'est pas `release` (empêche de recréer une deuxième Release via ce endpoint si l'étape est déjà passée).

## POST /onboarding/steps/issues

Crée 1 à N Issues (2-3 attendues côté UI, non forcé côté contrat) rattachées à `created_release_id`, fait avancer `current_step` à `cycle`.

**Request**:
```json
{ "issues": [{ "title": "string" }, { "title": "string" }] }
```

**Response 200**:
```json
{ "issue_ids": ["string"], "onboarding_state": { "...": "cf GET /onboarding/state" } }
```

**Erreurs** : 409 si `current_step` n'est pas `issues`, ou si `created_release_id` est absent (l'étape 1 n'a pas été complétée).

## POST /onboarding/steps/cycle

Crée le Cycle rattaché à `created_release_id` et aux Issues créées, marque `status` = `completed`, `completed_at` = maintenant.

**Request**:
```json
{ "name": "string", "start_date": "date", "end_date": "date" }
```

**Response 200**:
```json
{ "cycle_id": "string", "onboarding_state": { "...": "cf GET /onboarding/state, status=completed" } }
```

## POST /onboarding/skip

Marque `status` = `skipped`, `completed_at` = maintenant, quel que soit `current_step` au moment de l'appel (FR-004). N'annule aucune donnée déjà créée (FR-010).

**Response 200**: même forme que GET /onboarding/state.

## POST /onboarding/guide/reopen

Incrémente `guide_reopened_count`, retourne le contenu informatif du guide (FR-006). N'a aucun effet sur `status`/`current_step`.

**Response 200**:
```json
{ "guide_content": "..." }
```

## Notes de contrat transverses

- Tous les endpoints `POST /onboarding/steps/*` sont idempotents du point de vue de la relance : un rappel avec le même `current_step` déjà dépassé retourne 409 plutôt que de dupliquer les entités (protège contre double-soumission réseau).
- Aucun endpoint ne permet de repasser `status` de `completed`/`skipped` à un état antérieur : cohérent avec FR-005 (interdiction de redéclenchement automatique). Une remise à zéro éventuelle (support client, tests) sort du périmètre de ce contrat utilisateur final.
