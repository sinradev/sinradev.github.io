# Implementation Plan: Refonte de l'onboarding nouvel utilisateur

**Branch**: `010-onboarding-flow` | **Date**: 2026-07-20 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/010-onboarding-flow/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Remplacer la redirection actuelle du premier login vers `/cycles/new` (formulaire vide, incohérent avec le workflow Release > Cycle > Issue) par un flow guidé en 3 étapes qui crée réellement une Release, des Issues d'exemple et un Cycle. Remplacer le modal texte "Getting Started Guide" (15 sections, non interactif, se réaffichant à chaque navigation) par ce même flow interactif, avec un état de dismissal persistant par utilisateur. Ajouter un CTA "Créer ma première Release" sur le Dashboard vide comme filet de sécurité indépendant du flow.

**Avertissement de périmètre** : ce dépôt (`sinra-website`) est le site marketing Hugo/DaisyUI de Sinra. L'application concernée par cette feature (`app.sinra.dev`, testée en local sur `localhost:3000`) est un dépôt distinct, non présent ici. Ce plan produit donc les artefacts de conception (spec, data model, contrats d'API/événements, quickstart) à transmettre à l'équipe qui possède le dépôt de l'application. Aucune implémentation de code applicatif ne sera faite dans ce dépôt.

## Technical Context

**Language/Version**: NEEDS CLARIFICATION - stack réelle de `app.sinra.dev` non accessible depuis ce dépôt (probable SPA + API séparée vu la séparation de sous-domaine avec le site Hugo)
**Primary Dependencies**: NEEDS CLARIFICATION - framework frontend et backend de l'app non documentés dans ce dépôt
**Storage**: NEEDS CLARIFICATION - base de données de l'app non documentée dans ce dépôt (nécessaire pour stocker l'état "Onboarding State" par utilisateur)
**Testing**: NEEDS CLARIFICATION - aucun framework de test de l'app référencé ici
**Target Platform**: Web (navigateur), application déjà accessible sur `app.sinra.dev` et `localhost:3000`
**Project Type**: web (frontend + backend applicatifs, séparés du site marketing Hugo de ce dépôt)
**Performance Goals**: Flow d'onboarding complet (3 étapes) exécutable en moins de 5 minutes (SC-001) ; pas d'exigence de perf serveur spécifique au-delà des standards existants de l'app
**Constraints**: Ne doit pas casser le usage direct de `/cycles/new` pour les organisations qui ont déjà des Releases (edge case documenté) ; doit fonctionner en multi-utilisateur concurrent sur la même organisation sans double-déclenchement du flow
**Scale/Scope**: 3 nouveaux écrans/étapes, 1 nouvelle entité d'état (Onboarding State), modification du routing post-login et du Dashboard vide

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

La constitution disponible dans ce dépôt (`.specify/memory/constitution.md`) régit exclusivement le site marketing Hugo + DaisyUI (`sinra-website`) : règles de theming DaisyUI Dim, i18n Hugo, absence de framework JS, Lighthouse CI. Cette feature porte sur l'application produit (`app.sinra.dev`), un système distinct non couvert par cette constitution.

**Verdict** : GATE non applicable tel quel. Aucune règle de la constitution du site marketing n'est violée puisque aucun changement n'est fait dans ce dépôt en dehors des artefacts de planification (`specs/010-onboarding-flow/`). Ce plan sert de spécification à transmettre à l'équipe applicative, qui devra l'évaluer contre ses propres standards internes (non documentés ici).

**Action de suivi recommandée** : si l'application dispose de sa propre constitution/guide de contribution, la research doit la référencer ; à défaut, le Complexity Tracking ci-dessous documente cette limite comme hypothèse assumée plutôt que violation.

## Project Structure

### Documentation (this feature)

```text
specs/010-onboarding-flow/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md         # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
# Cette feature ne modifie AUCUN fichier du dépôt sinra-website en dehors de specs/010-onboarding-flow/.
# La structure ci-dessous est indicative pour le dépôt applicatif séparé (app.sinra.dev),
# à adapter par l'équipe qui possède ce dépôt selon sa stack réelle.

app/ (dépôt distinct, non présent ici)
├── frontend/
│   src/
│   ├── pages/
│   │   ├── onboarding/           # nouveau : flow en 3 étapes
│   │   │   ├── step-1-release.*
│   │   │   ├── step-2-issues.*
│   │   │   └── step-3-cycle.*
│   │   └── dashboard/            # existant : ajout du CTA "Créer ma première Release"
│   ├── components/
│   │   └── onboarding-guide-modal.*   # remplace l'actuel mur de texte
│   └── services/
│       └── onboarding-state.*         # lecture/écriture de l'état de dismissal
└── backend/
    src/
    ├── models/
    │   └── onboarding_state.*         # nouvelle entité (voir data-model.md)
    ├── services/
    │   └── onboarding_service.*       # logique "org a des Releases ?" + transitions d'état
    └── api/
        └── onboarding_routes.*        # endpoints listés dans contracts/
```

**Structure Decision**: Le dépôt `sinra-website` (celui-ci) ne reçoit que les artefacts de spécification sous `specs/010-onboarding-flow/`. L'implémentation réelle (frontend + backend de l'app) se fait dans le dépôt de l'application produit, non présent ici. La structure applicative ci-dessus est une proposition de découpage (Option 2 : Web application, frontend + backend) que l'équipe app devra faire correspondre à son arborescence réelle.

## Complexity Tracking

> Fill ONLY if Constitution Check has violations that must be justified

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Plan produit sans accès au dépôt applicatif réel | La demande porte sur `app.sinra.dev`, dépôt distinct de `sinra-website` où tourne ce planning | Attendre l'accès au dépôt applicatif avant de planifier aurait bloqué la restitution de l'audit UX déjà réalisé ; ce plan reste utilisable comme spécification transmissible telle quelle |
