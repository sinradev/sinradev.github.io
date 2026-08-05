# Feature Specification: Refonte de l'onboarding nouvel utilisateur

**Feature Branch**: `010-onboarding-flow`
**Created**: 2026-07-20
**Status**: Draft
**Input**: User description: "Refonte du flow d'onboarding nouvel utilisateur Sinra suite à un audit UX : premier login doit rediriger vers la création guidée d'une première Release plutôt que vers /cycles/new, remplacer le mur de texte du Getting Started Guide par un flow interactif en 3 étapes (Release > Issues > Cycle) avec données pré-remplies modifiables, persister l'état guide vu/complété par utilisateur, ajouter un CTA direct 'Créer ma première Release' sur le Dashboard vide."

## Contexte de l'audit

Test manuel effectué sur une organisation neuve (localhost:3000) avec un utilisateur fraîchement créé, aucune donnée existante. Constats :

1. Le premier login redirige automatiquement vers `/cycles/new`, un formulaire vide (Nom, Date de début, Date de fin, Projet). Le champ Projet est vide car aucune Release/Capability n'existe encore. Ceci contredit le workflow documenté par Sinra lui-même : Release → Cycle → Issue.
2. Un modal "Getting Started Guide" s'affiche : 15 sections de documentation à faire défiler (Overview, Workflow at a glance, SINRA replaces multiple tools, glossaire produit vivant, QA intégrée, retrospectives, capacity planning, Key concepts, 5 étapes Release/Cycle/Issue). Aucune interaction guidée, aucun exemple pré-rempli, aucun bouton d'action contextuel dans le contenu.
3. Le modal réapparaît identique à chaque navigation de page (testé sur `/cycles/new` puis `/dashboard`) : aucun état de dismissal persistant par utilisateur.
4. Le Dashboard vide affiche 5 blocs à l'état vide ("No active cycle", "No estimates available", "No unread mentions", "No planned release", "No recent activity") sans aucun call-to-action pour créer la première Release.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Premier login guidé vers la création d'une Release (Priority: P1)

Un nouvel utilisateur qui se connecte pour la première fois dans une organisation vide est dirigé vers un flow de création de sa première Release, pas vers un formulaire de Cycle isolé et incohérent avec le workflow réel.

**Why this priority**: C'est le point d'entrée numéro un du produit. Un utilisateur qui atterrit sur un formulaire vide sans contexte (Cycle sans Release ni Project) abandonne ou crée des données incohérentes qu'il devra défaire plus tard. C'est la première impression du produit pour tout signup.

**Independent Test**: Créer une organisation neuve avec un utilisateur neuf, se connecter, vérifier que la première page atteinte propose de créer une Release (pas `/cycles/new`).

**Acceptance Scenarios**:

1. **Given** un utilisateur vient de créer son compte et son organisation ne contient aucune Release, **When** il se connecte pour la première fois, **Then** il est dirigé vers un flow de création de Release, pas vers `/cycles/new`.
2. **Given** un utilisateur a déjà au moins une Release dans son organisation, **When** il se connecte, **Then** il est dirigé vers le Dashboard standard (pas de flow d'onboarding forcé).

---

### User Story 2 - Flow interactif en 3 étapes remplaçant le mur de texte (Priority: P1)

Le "Getting Started Guide" textuel de 15 sections est remplacé par un flow interactif en 3 étapes actionnables : créer une Release, ajouter 2-3 issues, créer un premier Cycle — avec des valeurs pré-remplies que l'utilisateur peut modifier ou valider tel quel.

**Why this priority**: Un mur de texte à lire avant de pouvoir agir contredit la promesse produit ("pas de configuration marathon", vocabulaire concret). Un flow actionnable convertit la compréhension en résultat concret (première Release livrable) dans les 5 premières minutes.

**Independent Test**: Sur une organisation neuve, suivre le flow en 3 étapes sans quitter les écrans proposés et vérifier qu'à la fin, une Release, au moins une Issue et un Cycle existent réellement dans l'organisation.

**Acceptance Scenarios**:

1. **Given** un utilisateur démarre le flow d'onboarding, **When** il arrive à l'étape 1, **Then** un formulaire de création de Release s'affiche avec un nom et des dates pré-remplis, modifiables.
2. **Given** la Release de l'étape 1 est créée, **When** l'utilisateur passe à l'étape 2, **Then** il peut ajouter 2 à 3 issues d'exemple pré-remplies (modifiables ou supprimables) rattachées à cette Release.
3. **Given** les issues de l'étape 2 sont validées, **When** l'utilisateur passe à l'étape 3, **Then** un formulaire de création de Cycle s'affiche, pré-rempli avec des dates par défaut et associé à la Release créée à l'étape 1.
4. **Given** l'utilisateur termine l'étape 3, **When** le flow se termine, **Then** il est redirigé vers le Dashboard qui reflète les données créées (Release, Cycle, Issues visibles).
5. **Given** l'utilisateur est à une étape du flow, **When** il choisit de passer l'étape ou tout le flow, **Then** il est redirigé vers le Dashboard vide standard sans blocage.

---

### User Story 3 - Persistance de l'état du guide par utilisateur (Priority: P2)

L'état "guide vu" ou "guide complété" est mémorisé par utilisateur pour que le guide ne se réaffiche pas à chaque changement de page.

**Why this priority**: Correction d'un bug/friction direct constaté en test : le modal réapparaît sur chaque page visitée, obligeant à le refermer plusieurs fois. Moins critique que P1 (le flow lui-même) mais nécessaire pour que le nouveau flow ne reproduise pas le même défaut.

**Independent Test**: Fermer ou compléter le guide, naviguer vers au moins 3 pages différentes de l'application, vérifier que le guide ne se réaffiche pas automatiquement.

**Acceptance Scenarios**:

1. **Given** un utilisateur ferme le guide sans le terminer, **When** il navigue vers une autre page, **Then** le guide ne se réaffiche pas automatiquement sur cette page.
2. **Given** un utilisateur a fermé le guide, **When** il veut le consulter à nouveau volontairement, **Then** un point d'accès explicite (menu, aide) lui permet de le rouvrir manuellement.
3. **Given** un utilisateur termine complètement le flow en 3 étapes, **When** il se reconnecte plus tard, **Then** le flow d'onboarding ne se redéclenche pas.

---

### User Story 4 - CTA direct sur le Dashboard vide (Priority: P2)

Le Dashboard d'une organisation neuve affiche un call-to-action explicite "Créer ma première Release" au lieu de 5 blocs vides sans action proposée.

**Why this priority**: Filet de sécurité pour les utilisateurs qui quittent ou skip le flow guidé (User Story 2) : le Dashboard reste le point de retour le plus visité et doit toujours proposer une action claire tant qu'aucune donnée n'existe.

**Independent Test**: Sur une organisation sans Release, visiter le Dashboard et vérifier qu'un CTA "Créer ma première Release" est visible et fonctionnel, sans dépendre du flow d'onboarding.

**Acceptance Scenarios**:

1. **Given** une organisation ne contient aucune Release, **When** l'utilisateur consulte le Dashboard, **Then** un CTA "Créer ma première Release" est affiché en évidence, en plus ou à la place des blocs à l'état vide.
2. **Given** l'utilisateur clique sur ce CTA, **When** l'action est déclenchée, **Then** il est dirigé vers le flow de création de Release (idéalement le même flow que User Story 2).
3. **Given** une organisation contient déjà au moins une Release, **When** l'utilisateur consulte le Dashboard, **Then** ce CTA disparaît et le Dashboard affiche les données réelles.

### Edge Cases

- Un utilisateur invité dans une organisation qui a déjà des Releases existantes ne doit pas voir le flow d'onboarding "premier login vide" : le flow ne se déclenche que si l'organisation est réellement vide de Releases, pas seulement si l'utilisateur est nouveau.
- Un utilisateur qui abandonne le flow en 3 étapes au milieu (ex: après avoir créé la Release mais avant le Cycle) doit retrouver un état cohérent : la Release créée reste visible et modifiable normalement, pas orpheline ou dans un état intermédiaire cassé.
- Deux utilisateurs de la même organisation se connectant en parallèle pendant que l'un complète le flow : le second ne doit pas revoir le flow d'onboarding si l'organisation a entre-temps une Release créée par le premier.
- Un utilisateur qui a déjà des Releases mais navigue directement vers `/cycles/new` (lien direct ou ancien favori) doit toujours pouvoir créer un Cycle sans passer par le flow d'onboarding, dès lors qu'un Project/Release existe.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Le système DOIT rediriger un utilisateur vers un flow de création de Release lors de son premier accès à une organisation qui ne contient aucune Release, au lieu de le rediriger vers `/cycles/new`.
- **FR-002**: Le système DOIT proposer un flow en 3 étapes séquentielles : (1) création d'une Release, (2) ajout de 2 à 3 issues, (3) création d'un Cycle rattaché à la Release créée.
- **FR-003**: Chaque étape du flow DOIT afficher des valeurs par défaut pré-remplies (nom de Release, dates de Cycle, exemples d'issues) que l'utilisateur peut modifier ou accepter telles quelles.
- **FR-004**: Le système DOIT permettre à l'utilisateur de passer (skip) une étape ou l'ensemble du flow à tout moment, sans le bloquer dans son usage du produit.
- **FR-005**: Le système DOIT mémoriser, par utilisateur, si le flow d'onboarding a été vu, skip ou complété, et ne plus le redéclencher automatiquement une fois cet état enregistré.
- **FR-006**: Le système DOIT permettre à un utilisateur de rouvrir volontairement le contenu du "Getting Started Guide" depuis un point d'accès explicite (menu ou aide), même après l'avoir fermé ou terminé.
- **FR-007**: Le Dashboard DOIT afficher un CTA "Créer ma première Release" tant qu'aucune Release n'existe dans l'organisation.
- **FR-008**: Le CTA du Dashboard DOIT disparaître automatiquement dès qu'au moins une Release existe dans l'organisation.
- **FR-009**: Le flow d'onboarding ne DOIT se déclencher que si l'organisation elle-même est vide de Releases (pas uniquement si l'utilisateur connecté est nouveau), pour éviter de le représenter à un utilisateur invité dans une organisation déjà active.
- **FR-010**: Le système DOIT conserver toute donnée créée pendant un flow abandonné en cours de route (ex: Release créée sans Cycle) dans un état normal, cohérent et visible ailleurs dans le produit (pas d'état orphelin ou caché).

### Key Entities

- **Onboarding State**: état par utilisateur (et éventuellement par organisation) indiquant si le guide/flow a été vu, en cours, skip ou complété. Sert à décider si le flow doit se redéclencher.
- **Release**: entité existante du produit, point d'entrée de l'étape 1 du flow.
- **Issue**: entité existante, créée en exemple à l'étape 2, rattachée à la Release.
- **Cycle**: entité existante, créée à l'étape 3, rattachée à la Release et contenant les issues créées.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Un nouvel utilisateur sur une organisation vide atteint une Release, au moins une Issue et un Cycle créés en moins de 5 minutes depuis sa première connexion, sans quitter le flow guidé.
- **SC-002**: Le modal/flow d'onboarding ne se réaffiche pas plus d'une fois par session tant que l'utilisateur ne l'a pas explicitement rouvert.
- **SC-003**: 0% des nouvelles organisations n'ont un Cycle créé sans Release associée suite à l'usage du flow par défaut (contre le comportement actuel qui le permet via `/cycles/new`).
- **SC-004**: Le Dashboard vide propose une action explicite dans 100% des cas où l'organisation ne contient aucune Release.
