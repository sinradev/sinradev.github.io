# Quickstart: Refonte de l'onboarding nouvel utilisateur

Ce document décrit comment valider manuellement la feature une fois implémentée dans le dépôt applicatif (`app.sinra.dev`).

## Pré-requis

- Un environnement app accessible (local ou staging) avec la possibilité de créer une organisation neuve et un utilisateur neuf.
- Accès pour inspecter/nettoyer la base de données de test (vérifier `OnboardingState`, `Release`, `Issue`, `Cycle`).

## Scénario 1 : premier login sur organisation vide (User Story 1 + 2)

1. Créer une nouvelle organisation et un nouvel utilisateur (aucune Release existante).
2. Se connecter avec ce nouvel utilisateur.
3. **Vérifier** : l'utilisateur atterrit sur l'étape 1 du flow d'onboarding (création de Release), pas sur `/cycles/new`.
4. Valider l'étape 1 avec les valeurs pré-remplies (ou les modifier). **Vérifier** : une Release existe en base, `current_step` = `issues`.
5. Valider l'étape 2 avec 2-3 issues pré-remplies. **Vérifier** : les Issues existent, rattachées à la Release, `current_step` = `cycle`.
6. Valider l'étape 3. **Vérifier** : un Cycle existe, rattaché à la Release et aux Issues, `status` = `completed`.
7. **Vérifier** : redirection finale vers le Dashboard, qui affiche la Release/Cycle/Issues créés (plus de blocs "No X").

**Critère de succès** : scénario complet en moins de 5 minutes (SC-001).

## Scénario 2 : skip du flow (FR-004, User Story 4)

1. Nouvelle organisation, nouvel utilisateur, se connecter.
2. Sur l'étape 1 (ou toute étape suivante), cliquer sur "Passer" / "Skip".
3. **Vérifier** : redirection vers le Dashboard, `OnboardingState.status` = `skipped`.
4. **Vérifier** : le CTA "Créer ma première Release" est visible sur le Dashboard (aucune Release créée).
5. Cliquer sur ce CTA. **Vérifier** : redirige vers le flow (ou directement le formulaire de Release, selon l'implémentation retenue).

## Scénario 3 : persistance du dismissal (User Story 3)

1. Nouvel utilisateur, fermer le guide/flow sans le terminer.
2. Naviguer vers au moins 3 pages différentes (Dashboard, Issues, Releases).
3. **Vérifier** : le guide ne se réaffiche automatiquement sur aucune de ces pages.
4. Chercher le point d'accès manuel au guide (menu/aide). **Vérifier** : le contenu informatif reste consultable à la demande.

## Scénario 4 : organisation déjà active, nouvel utilisateur invité (Edge case)

1. Organisation existante avec au moins une Release.
2. Inviter un nouvel utilisateur, le connecter pour la première fois.
3. **Vérifier** : cet utilisateur n'est PAS redirigé vers le flow d'onboarding, il atterrit directement sur le Dashboard standard avec les données existantes.

## Scénario 5 : abandon en cours de flow (Edge case, FR-010)

1. Nouvel utilisateur, compléter l'étape 1 (Release créée), puis quitter/fermer l'onglet sans continuer.
2. Revenir sur l'application (nouvelle session ou même session).
3. **Vérifier** : la Release créée à l'étape 1 est visible et utilisable normalement ailleurs dans l'app (liste des Releases), pas dans un état caché ou cassé.
4. **Vérifier** : le comportement de reprise (relance à l'étape 2, ou retour Dashboard avec CTA, selon décision produit finale) est cohérent et ne recrée pas une deuxième Release en double.

## Scénario 6 : accès direct à `/cycles/new` avec Release existante (Edge case)

1. Organisation avec au moins une Release déjà existante.
2. Naviguer directement vers `/cycles/new` (lien direct).
3. **Vérifier** : le formulaire de création de Cycle fonctionne normalement, sans passer par le flow d'onboarding (ce chemin reste légitime une fois qu'une Release existe).
