# Phase 1 Data Model: Refonte de l'onboarding nouvel utilisateur

## Entités

### OnboardingState (nouvelle entité)

Représente l'avancement d'un utilisateur dans le flow d'onboarding, pour une organisation donnée.

| Champ | Type | Description | Règles |
|---|---|---|---|
| `id` | identifiant | Clé primaire | - |
| `user_id` | référence User | Utilisateur concerné | Requis |
| `organization_id` | référence Organization | Organisation concernée | Requis |
| `status` | enum | `not_started`, `in_progress`, `skipped`, `completed` | Requis, défaut `not_started` |
| `current_step` | enum nullable | `release`, `issues`, `cycle`, `null` si non démarré ou terminé | Nullable |
| `created_release_id` | référence Release nullable | Release créée pendant le flow (même si abandonné après) | Nullable, FR-010 |
| `created_cycle_id` | référence Cycle nullable | Cycle créé pendant le flow, si atteint | Nullable |
| `started_at` | datetime nullable | Horodatage de démarrage du flow | Nullable |
| `completed_at` | datetime nullable | Horodatage de complétion ou skip | Nullable |
| `guide_reopened_count` | entier | Nombre de fois où l'utilisateur a rouvert volontairement le guide (FR-006) | Défaut 0 |

**Contrainte d'unicité** : un couple (`user_id`, `organization_id`) a au plus un `OnboardingState`.

**Transitions d'état** :

```text
not_started -> in_progress   (l'utilisateur démarre l'étape 1)
in_progress -> in_progress   (passage d'étape à étape, current_step change)
in_progress -> completed     (étape 3 terminée, Cycle créé)
in_progress -> skipped       (skip à n'importe quelle étape, FR-004)
not_started -> skipped       (skip depuis le CTA Dashboard sans jamais démarrer)
completed | skipped -> in_progress  (INTERDIT : le flow ne se redéclenche pas automatiquement une fois quitté, FR-005 ; seule une réouverture manuelle via FR-006 peut re-présenter le contenu informatif, sans changer ce statut)
```

### Release, Issue, Cycle (entités existantes, non modifiées)

Ce plan ne modifie pas leur modèle de données. Le flow d'onboarding les utilise comme n'importe quel autre point de création dans l'application :

- **Release** : créée à l'étape 1, avec un nom pré-rempli (ex: "Ma première release") et des dates par défaut.
- **Issue** : 2 à 3 créées à l'étape 2, rattachées à la Release de l'étape 1, avec des titres d'exemple éditables.
- **Cycle** : créé à l'étape 3, rattaché à la Release de l'étape 1, contenant les Issues de l'étape 2, avec dates par défaut (ex: aujourd'hui + 2 semaines, cohérent avec le comportement déjà observé sur `/cycles/new`).

## Règle de déclenchement du flow (dérivée de FR-001, FR-009)

```text
SI organization.releases.count == 0
   ET (onboarding_state introuvable OU onboarding_state.status == "not_started")
ALORS rediriger vers le flow d'onboarding (étape 1)
SINON rediriger vers le Dashboard standard
```

Cette règle s'évalue à chaque login et remplace la redirection actuelle et inconditionnelle vers `/cycles/new`.

## Règle d'affichage du CTA Dashboard (dérivée de FR-007, FR-008)

```text
SI organization.releases.count == 0
ALORS afficher le CTA "Créer ma première Release" sur le Dashboard
SINON masquer le CTA
```

Indépendante de `OnboardingState` : le CTA reste affiché même si l'utilisateur a `skip` le flow, tant qu'aucune Release n'existe réellement (filet de sécurité, User Story 4).
