# Tasks: Refonte de l'onboarding nouvel utilisateur

**Input**: Design documents from `/specs/010-onboarding-flow/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/onboarding-api.md, quickstart.md

**Tests**: Non demandés explicitement dans la spec. Aucune tâche de test automatisé générée ; `quickstart.md` sert de checklist de validation manuelle par user story (référencée dans chaque phase).

**Avertissement de périmètre** (repris de plan.md) : ces tâches ciblent le dépôt applicatif de `app.sinra.dev`, distinct de ce dépôt `sinra-website`. Les chemins de fichiers ci-dessous sont indicatifs (cf. structure proposée dans plan.md) et doivent être adaptés par l'équipe qui possède ce dépôt à son arborescence réelle et à sa stack confirmée (cf. research.md, unknowns restants).

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Peut s'exécuter en parallèle (fichiers différents, pas de dépendance sur une tâche non terminée)
- **[Story]**: User story concernée (US1, US2, US3, US4)

## Path Conventions

Web app (frontend + backend), chemins indicatifs issus de plan.md :
- Backend : `app/backend/src/`
- Frontend : `app/frontend/src/`

---

## Phase 1: Setup

**Purpose**: Préparer le terrain avant tout travail sur les user stories

- [ ] T001 Confirmer avec l'équipe applicative la stack réelle (langage, framework front/back, ORM) et mettre à jour `specs/010-onboarding-flow/plan.md` Technical Context (résout les NEEDS CLARIFICATION)
- [ ] T002 Créer la branche de travail dans le dépôt applicatif correspondant à `010-onboarding-flow` (le dépôt `sinra-website` ne contient que la spec)
- [ ] T003 [P] Vérifier l'existence d'un système de feature flags dans l'app ; si présent, créer un flag `onboarding_v2_flow` pour déploiement progressif (recommandation research.md)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Infrastructure commune requise avant toute user story

**⚠️ CRITICAL**: Aucune user story ne démarre avant la fin de cette phase

- [ ] T004 Créer le modèle `OnboardingState` en base (migration) dans `app/backend/src/models/onboarding_state.*` avec les champs définis dans `data-model.md` (user_id, organization_id, status, current_step, created_release_id, created_cycle_id, started_at, completed_at, guide_reopened_count) et la contrainte d'unicité (user_id, organization_id)
- [ ] T005 Implémenter `OnboardingService` dans `app/backend/src/services/onboarding_service.*` portant la règle de déclenchement (data-model.md: `organization.releases.count == 0` ET `status == not_started`) et la règle d'affichage du CTA
- [ ] T006 Implémenter l'endpoint `GET /onboarding/state` dans `app/backend/src/api/onboarding_routes.*` (contracts/onboarding-api.md), retournant `organization_has_releases`
- [ ] T007 [P] Créer le service frontend `onboarding-state.*` dans `app/frontend/src/services/` qui appelle `GET /onboarding/state` et expose l'état au reste de l'app

**Checkpoint**: Le modèle et l'état d'onboarding sont lisibles depuis le frontend ; les user stories peuvent démarrer

---

## Phase 3: User Story 1 - Premier login guidé vers la création d'une Release (Priority: P1) 🎯 MVP

**Goal**: Un utilisateur qui se connecte à une organisation sans Release est dirigé vers le flow de création de Release, plus jamais vers `/cycles/new`.

**Independent Test**: Créer une organisation neuve + utilisateur neuf, se connecter, vérifier que la première page atteinte n'est pas `/cycles/new` mais l'étape 1 du flow (cf. quickstart.md Scénario 1, étapes 1-3, et Scénario 4).

### Implementation for User Story 1

- [ ] T008 [US1] Implémenter l'endpoint `POST /onboarding/start` dans `app/backend/src/api/onboarding_routes.*` (transition `not_started` -> `in_progress`, `current_step` = `release`)
- [ ] T009 [US1] Modifier la logique de routing post-login (fichier de routing existant de l'app, ex. `app/frontend/src/router/*` ou middleware backend équivalent) pour appliquer la règle de déclenchement de data-model.md au lieu de la redirection actuelle inconditionnelle vers `/cycles/new`
- [ ] T010 [US1] Créer l'écran/route de l'étape 1 (formulaire Release) dans `app/frontend/src/pages/onboarding/step-1-release.*`, appelant `POST /onboarding/start` puis affichant le formulaire pré-rempli
- [ ] T011 [US1] Vérifier que l'accès direct à `/cycles/new` reste fonctionnel sans passer par le flow dès lors qu'une Release existe déjà dans l'organisation (edge case, cf. quickstart.md Scénario 6) ; ajuster la route `/cycles/new` si nécessaire pour ne plus dépendre d'un contexte de flow
- [ ] T012 [US1] Gérer le cas utilisateur invité dans une organisation déjà active (edge case) : vérifier que `OnboardingService` évalue bien l'organisation et non l'ancienneté du compte utilisateur (cf. quickstart.md Scénario 4)

**Checkpoint**: User Story 1 fonctionnelle et testable indépendamment (le flow peut s'arrêter à l'étape 1 sans implémenter US2/US3/US4, l'utilisateur atterrit correctement sans jamais voir `/cycles/new` en premier)

---

## Phase 4: User Story 2 - Flow interactif en 3 étapes (Priority: P1)

**Goal**: Remplacer le mur de texte du Getting Started Guide par un flow actionnable Release → Issues → Cycle avec données pré-remplies.

**Independent Test**: Sur une organisation neuve, suivre les 3 étapes sans quitter les écrans, vérifier qu'une Release, au moins une Issue et un Cycle existent réellement en base à la fin (cf. quickstart.md Scénario 1 complet).

### Implementation for User Story 2

- [ ] T013 [P] [US2] Implémenter l'endpoint `POST /onboarding/steps/release` dans `app/backend/src/api/onboarding_routes.*` (contracts/onboarding-api.md : crée la Release, avance `current_step` à `issues`, 409 si étape déjà dépassée)
- [ ] T014 [P] [US2] Implémenter l'endpoint `POST /onboarding/steps/issues` dans `app/backend/src/api/onboarding_routes.*` (crée 2-3 Issues rattachées à `created_release_id`, avance `current_step` à `cycle`, 409 si pas d'étape release complétée)
- [ ] T015 [P] [US2] Implémenter l'endpoint `POST /onboarding/steps/cycle` dans `app/backend/src/api/onboarding_routes.*` (crée le Cycle, marque `status` = `completed`, `completed_at`)
- [ ] T016 [US2] Compléter l'écran étape 1 (`step-1-release.*`, créé en T010) : soumission vers `POST /onboarding/steps/release`, valeurs par défaut pré-remplies (nom "Ma première release", dates), navigation vers étape 2
- [ ] T017 [US2] Créer l'écran étape 2 dans `app/frontend/src/pages/onboarding/step-2-issues.*` : 2-3 issues pré-remplies éditables/supprimables illustrant le vocabulaire Sinra (ex. "Exemple : Ajouter l'export CSV des rapports"), soumission vers `POST /onboarding/steps/issues`
- [ ] T018 [US2] Créer l'écran étape 3 dans `app/frontend/src/pages/onboarding/step-3-cycle.*` : formulaire Cycle pré-rempli (dates par défaut, ex. aujourd'hui + 2 semaines, cohérent avec `/cycles/new` existant), soumission vers `POST /onboarding/steps/cycle`
- [ ] T019 [US2] Implémenter la redirection finale vers le Dashboard après complétion de l'étape 3, en s'assurant que le Dashboard reflète immédiatement la Release/Cycle/Issues créés (pas de cache stale)
- [ ] T020 [US2] Implémenter le bouton "Passer" / skip visible à chaque étape, appelant `POST /onboarding/skip` (cf. contracts/onboarding-api.md), redirigeant vers le Dashboard sans bloquer l'utilisateur (FR-004)
- [ ] T021 [US2] Gérer l'edge case d'abandon en cours de flow : vérifier que la Release créée à l'étape 1 reste visible et normale dans la liste des Releases si l'utilisateur quitte avant l'étape 3 (cf. quickstart.md Scénario 5), sans double-création au retour

**Checkpoint**: User Story 2 fonctionnelle et testable indépendamment ; combinée à US1, un nouvel utilisateur peut aller de la connexion à un Cycle créé en suivant uniquement le flow

---

## Phase 5: User Story 3 - Persistance de l'état du guide par utilisateur (Priority: P2)

**Goal**: Le guide/flow ne se réaffiche plus automatiquement à chaque navigation une fois fermé ou terminé ; reste consultable manuellement.

**Independent Test**: Fermer/compléter le guide, naviguer sur 3 pages différentes, vérifier qu'il ne réapparaît pas automatiquement ; vérifier qu'un point d'accès manuel le rouvre (cf. quickstart.md Scénario 3).

### Implementation for User Story 3

- [ ] T022 [US3] Implémenter l'endpoint `POST /onboarding/guide/reopen` dans `app/backend/src/api/onboarding_routes.*` (incrémente `guide_reopened_count`, retourne le contenu informatif existant du guide)
- [ ] T023 [US3] Remplacer la logique d'affichage actuelle du modal "Getting Started Guide" (qui se réaffiche à chaque page) par une vérification de `OnboardingState.status` via le service frontend créé en T007 : n'afficher automatiquement que si `status == not_started` ou `in_progress`, jamais si `completed`/`skipped`
- [ ] T024 [US3] Créer le composant `onboarding-guide-modal.*` dans `app/frontend/src/components/` réutilisant le contenu informatif existant (Overview, Workflow at a glance, glossaire, etc.), déclenchable manuellement
- [ ] T025 [US3] Ajouter un point d'accès explicite au guide (menu ou aide existant de l'app) qui appelle `POST /onboarding/guide/reopen` et affiche `onboarding-guide-modal.*` sans modifier `status`/`current_step`

**Checkpoint**: User Story 3 fonctionnelle et testable indépendamment ; le défaut de réaffichage constaté à l'audit est corrigé même si US1/US2 ne sont pas encore livrées

---

## Phase 6: User Story 4 - CTA direct sur le Dashboard vide (Priority: P2)

**Goal**: Le Dashboard d'une organisation sans Release affiche un CTA "Créer ma première Release" comme filet de sécurité indépendant du flow.

**Independent Test**: Sur une organisation sans Release, visiter le Dashboard, vérifier la présence et le fonctionnement du CTA sans dépendre du flow d'onboarding (cf. quickstart.md Scénario 2, étapes 3-5).

### Implementation for User Story 4

- [ ] T026 [US4] Ajouter le CTA "Créer ma première Release" dans `app/frontend/src/pages/dashboard/*`, conditionné à `organization_has_releases == false` (via le service créé en T007), en complément des blocs existants ("No active cycle", "No planned release", etc.)
- [ ] T027 [US4] Lier le clic du CTA à l'ouverture du flow d'onboarding à l'étape 1 (réutilise T010/T013), y compris pour un utilisateur ayant déjà `skip` le flow (le CTA reste indépendant de `OnboardingState.status`, cf. data-model.md)
- [ ] T028 [US4] Vérifier la disparition automatique du CTA dès qu'une Release existe (re-fetch ou invalidation du state frontend après création d'une Release, y compris hors flow d'onboarding, ex. création manuelle de Release)

**Checkpoint**: User Story 4 fonctionnelle et testable indépendamment ; sert de filet de sécurité même si un utilisateur a fermé/skip US2-US3

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Consolidation après implémentation de toutes les user stories

- [ ] T029 [P] Exécuter manuellement les 6 scénarios de `quickstart.md` de bout en bout sur un environnement de test
- [ ] T030 [P] Vérifier la mesure de SC-001 (flow complet en moins de 5 minutes) et SC-002 (pas de réaffichage du guide plus d'une fois par session) via un test utilisateur informel ou instrumentation analytics existante
- [ ] T031 Vérifier SC-003 : requête base de données confirmant qu'aucun Cycle n'existe sans Release associée parmi les organisations créées après déploiement
- [ ] T032 Vérifier SC-004 : le CTA Dashboard est bien affiché à 100% pour les organisations sans Release en échantillonnant quelques comptes de test
- [ ] T033 [P] Documenter le nouveau flow dans la documentation produit/aide existante de l'app (au-delà du guide réouvrable en T024-T025)
- [ ] T034 Si feature flag créé en T003, planifier le rollout progressif puis son retrait une fois la feature stabilisée

---

## Dependencies & Execution Order

- **Phase 1 (Setup)** : aucune dépendance, à faire en premier
- **Phase 2 (Foundational)** : dépend de Phase 1 ; bloque toutes les user stories
- **Phase 3 (US1)** : dépend de Phase 2 uniquement. Peut être livrée seule comme MVP partiel (redirection correcte, même sans les 3 écrans complets si T010 reste minimal)
- **Phase 4 (US2)** : dépend de Phase 2 et de T010 (US1) pour l'écran étape 1 déjà créé ; T013-T015 (endpoints) sont parallélisables entre eux [P]
- **Phase 5 (US3)** : dépend de Phase 2 uniquement (utilise le service T007) ; indépendante de US1/US2, peut être développée en parallèle
- **Phase 6 (US4)** : dépend de Phase 2 uniquement (utilise le service T007) ; réutilise T010/T013 de US1/US2 pour le lien du CTA mais peut être stubée en attendant
- **Phase 7 (Polish)** : dépend de toutes les user stories livrées

```text
Phase 1 → Phase 2 → ┬─ Phase 3 (US1) ──┐
                     │                  ├─→ Phase 4 (US2, dépend de T010)
                     ├─ Phase 5 (US3)  │
                     └─ Phase 6 (US4)  │
                                        └─→ Phase 7 (Polish)
```

## Parallel Execution Examples

- Après Phase 2, T007 (frontend) peut démarrer en parallèle de T008-T009 (backend/routing) si les contrats d'API sont stabilisés (Phase 1 output `contracts/onboarding-api.md` déjà figé).
- En Phase 4, T013, T014, T015 (les 3 endpoints d'étapes) sont indépendants entre eux et parallélisables [P], à condition que le modèle Phase 2 soit terminé.
- Phase 5 (US3) et Phase 6 (US4) peuvent être développées en parallèle par deux personnes différentes une fois Phase 2 terminée, sans attendre Phase 3/4.

## Implementation Strategy

**MVP scope recommandé** : Phase 1 + Phase 2 + Phase 3 (US1) seules. Cela corrige déjà le problème le plus grave constaté à l'audit (redirection incohérente vers `/cycles/new`) même si l'écran de l'étape 1 reste basique et que les étapes 2-3 (US2) ne sont pas encore prêtes : un formulaire de Release simple suffit pour arrêter l'incohérence Cycle-sans-Release.

**Livraison incrémentale recommandée** :
1. US1 seule → corrige le bug de routing critique (T001-T012)
2. US2 → complète le flow en 3 étapes (T013-T021)
3. US3 et US4 en parallèle → corrigent les frictions secondaires (réaffichage du guide, absence de CTA)
4. Polish → validation globale et mesure des success criteria

## Format Validation

Les 34 tâches suivent toutes le format `- [ ] T0XX [P?] [USx?] Description avec chemin de fichier`. Setup (T001-T003) et Foundational (T004-T007) sans label Story, conformément aux règles. Polish (T029-T034) sans label Story. Toutes les tâches de Phase 3 à 6 portent leur label US correspondant.
