---
title: "Intégration VCS"
description: "Liez vos dépôts GitHub, GitLab ou Bitbucket à SINRA pour faire avancer automatiquement le statut de développement des issues et capabilities à partir des évènements git : PR ouverte, review approuvée, merge, push."
date: 2026-08-16
weight: 100
---

## Vue d'ensemble

L'intégration VCS connecte les dépôts de code de votre organisation à SINRA. Quand un évènement significatif survient côté dépôt (ouverture de PR, review approuvée, merge, push), le statut de développement de l'issue concernée avance automatiquement, sans mise à jour manuelle. Les capabilities, dont l'avancement est dérivé de leurs issues, reflètent alors mécaniquement l'état réel du développement.

**GitHub, GitLab et Bitbucket** sont tous supportés (cloud uniquement - gitlab.com et bitbucket.org, pas d'instance auto-hébergée), via un job de CI qui notifie SINRA (pas de webhook/App). Le sens de synchronisation est unidirectionnel : **git → SINRA**. SINRA n'écrit jamais côté hébergeur (aucune création de branche ou de PR à distance). La logique de routage et de transition de statut est entièrement agnostique de l'hébergeur : les trois providers se comportent de façon identique une fois le dépôt lié.

## Principe de routage : le numéro dans le nom de branche

Le lien entre un évènement git et une entité SINRA repose sur le **nom de la branche** portée par l'évènement (branche source d'une PR, branche d'un push).

**Format de branche** : `<type>/<numéro>-<slug>` (ex : `feature/123-fix-login`). Le **numéro** est la référence stable de l'entité. Le type (`feature`, `bugfix`, `hotfix`, `chore`) et le slug peuvent changer librement sans jamais casser le lien : aucun enregistrement de lien n'est créé en base, le numéro **est** le lien.

Deux façons de travailler coexistent :

- **Flow task** : une branche dédiée = une **issue** précise. Merger cette branche = ce task terminé.
- **Flow feature** : une branche = une feature entière = une **capability** (celle que spec-kit associe déjà à la capability, ex : `024-vcs-integration`). Merger cette branche = toutes les issues de développement de la capability avancent.

Le routage applique une **précédence stricte** :

1. Le nom de branche porte un **numéro** correspondant à une issue ou une capability de l'organisation → cette entité est la cible.
2. Sinon, le nom de branche correspond exactement au `git_branch` d'une **capability** (flow feature spec-kit) → cette capability est la cible.
3. Sinon → aucun rattachement, l'évènement est ignoré et tracé (pas d'erreur).

## Lier un dépôt

Un administrateur d'organisation lie un dépôt depuis une **platform** :

1. Menu **Autres → Platforms** → éditer la platform → section **Dépôts liés** → **Nouveau dépôt**.
2. Choisir un provider (**GitHub**, **GitLab** ou **Bitbucket**), connecter le compte correspondant depuis le panneau **Connexions** pour choisir le dépôt et sa branche dans une liste (ou les saisir manuellement).
3. Le dépôt apparaît **connecté**.

Chaque provider se connecte indépendamment - une organisation peut lier des dépôts des trois à la fois, et chaque connexion peut être révoquée individuellement sans affecter les autres. Un dépôt appartient à une seule platform ; une platform peut lier plusieurs dépôts, de n'importe quel mélange de providers. Les évènements d'un dépôt ne peuvent affecter que des issues/capabilities de **la même platform** : un évènement ciblant une entité hors de cette platform est ignoré sans erreur.

L'état de connexion d'un dépôt est visible à tout moment : **Connecté**, **Déconnecté** ou **Révoqué** (autorisation retirée côté hébergeur). Un dépôt non connecté n'applique plus aucun changement de statut tant qu'il n'est pas re-lié.

**Spécificité Bitbucket** : Bitbucket Cloud n'expose aucune API pour lister tous les workspaces d'un utilisateur, donc lier un dépôt Bitbucket nécessite de saisir le nom du workspace (ex : `acme-corp`) une fois le compte connecté - la liste des dépôts de ce workspace se charge alors automatiquement.

## Copier le nom de branche

Depuis une issue ou une capability, un bouton **Copier la branche** propose un nom canonique prêt à l'emploi : `feature/123-slug`. Choisissez le type de branche (`feature`, `bugfix`, `hotfix`, `chore`) ; un défaut est suggéré selon le type d'issue (task → `feature`, bug → `bugfix`).

Le **numéro** (`123`) reste identique même si le titre de l'issue change plus tard et que vous régénérez le nom : c'est lui qui porte le lien, jamais le titre ou le slug.

## Évènements reconnus et mapping des statuts

Un administrateur d'organisation configure, depuis le menu **Autres → Mapping évènements → statuts** de la sidebar, quel statut de développement correspond à chaque évènement git. Des valeurs par défaut sont pré-remplies à la première visite :

| Évènement | Déclencheur | Statut par défaut |
|---|---|---|
| **PR ouverte** (`pr_opened`) | PR ouverte, ou passage de brouillon à prête | En cours |
| **Review approuvée** (`review_approved`) | Review soumise avec verdict « approuvée » | À merger |
| **PR mergée** (`merged`) | PR mergée dans la branche par défaut du dépôt | Terminé |
| **Push** (`pushed`) | Push sur une branche liée | En cours |

Laisser un statut vide **désactive** l'évènement correspondant : il n'aura alors aucun effet, quel que soit ce qui se passe côté dépôt.

## Effet selon la cible

**Cible issue** : son statut de développement avance directement.

**Cible capability** (flow feature) : l'effet **cascade vers les issues de développement** (`task`/`bug`) de la capability appartenant à la platform du dépôt. Les issues de type **spécification** et **plan** ne sont jamais touchées par la cascade. SINRA n'écrit **jamais** de statut directement sur une capability : son avancement reste calculé à partir de ses issues.

Le `git_branch` porté par les issues (métadonnée héritée du workflow spec-kit, partagée avec la capability) n'est **jamais** utilisé comme clé de routage direct pour une issue - sinon une même branche de feature ferait avancer la capability **et** chacune de ses issues séparément (fan-out). Le numéro, distinct par entité, l'évite par construction.

## Subtilités à connaître

- **Forward-only** : un évènement ne fait jamais reculer une entité déjà plus avancée. L'ordre suivi est `todo → in_progress → done` (groupe de statut), puis la position au sein du groupe. Un push après un merge n'annule jamais le statut « terminé ».
- **No-op silencieux** : issue déjà au statut cible, PR fermée sans merge, PR repassée en brouillon, PR réouverte - aucun de ces cas ne déclenche de changement ni d'erreur.
- **Merge = terminé, seulement vers la branche par défaut** : merger une PR vers une branche d'intégration ou une autre branche que la branche par défaut/protégée du dépôt n'applique jamais le statut « terminé ».
- **Idempotence** : chaque livraison porte un identifiant unique. Une même livraison reçue plusieurs fois (retry CI, redélivrance) ne produit qu'un seul effet.
- **Aucune correspondance = ignoré, pas une erreur** : une branche sans numéro d'entité existant ni `git_branch` de capability correspondant est ignorée silencieusement et tracée pour diagnostic.
- **Cloisonnement par platform** : un évènement ne peut affecter que des entités de la platform du dépôt émetteur, jamais une autre platform de la même organisation.
- **Entités antérieures à la fonctionnalité** : les issues et capabilities créées avant l'activation de l'intégration VCS n'ont pas de numéro et restent **non routables** (pas de backfill rétroactif). Seules les entités créées après en disposent.
- **Provenance visible** : quand un changement de statut provient d'un évènement git, l'issue affiche un badge « Changé par git » précisant l'évènement à l'origine, pour le distinguer d'une mise à jour manuelle.
- **`pull_request`** : le champ pointe vers la **dernière** PR connue de l'entité (renommé depuis `github_pr`). L'historique complet des évènements (branches, PR vues, actions appliquées) vit dans le journal des évènements VCS, pas dans ce champ.

## Configurer la CI

SINRA ne reçoit pas directement les webhooks : c'est un job de CI dans le dépôt qui notifie SINRA, quel que soit le provider. Le payload posté vers `POST /api/v1/vcs/events` est le même pour les trois providers - seuls `provider` et la façon de calculer chaque champ depuis les variables de votre CI changent. Adaptez la logique de détection d'évènement ci-dessous à vos déclencheurs/variables CI exacts ; les champs attendus par SINRA ne changent jamais.

### GitHub Actions

Ajoutez `.github/workflows/sinra-vcs.yml` :

```yaml
name: SINRA VCS sync
on:
  pull_request:
    types: [opened, ready_for_review, closed]
  pull_request_review:
    types: [submitted]
  push:

jobs:
  notify-sinra:
    runs-on: ubuntu-latest
    steps:
      - name: Compute event_type
        id: ev
        run: |
          case "${{ github.event_name }}" in
            push) echo "type=pushed" >> "$GITHUB_OUTPUT" ;;
            pull_request_review) echo "type=review_approved" >> "$GITHUB_OUTPUT" ;;
            pull_request)
              case "${{ github.event.action }}" in
                opened|ready_for_review) echo "type=pr_opened" >> "$GITHUB_OUTPUT" ;;
                closed)
                  if [ "${{ github.event.pull_request.merged }}" = "true" ]; then
                    echo "type=merged" >> "$GITHUB_OUTPUT"
                  fi ;;
              esac ;;
          esac

      - name: Notify SINRA
        if: steps.ev.outputs.type != ''
        env:
          SINRA_TOKEN: ${{ secrets.SINRA_API_TOKEN }}
          SINRA_URL: ${{ vars.SINRA_URL }}
        run: |
          SRC_BRANCH="${{ github.head_ref || github.ref_name }}"
          curl -sS -X POST "$SINRA_URL/api/v1/vcs/events" \
            -H "Authorization: Bearer $SINRA_TOKEN" \
            -H "Content-Type: application/json" \
            -d @- <<JSON
          {
            "event": {
              "provider": "github",
              "repository_external_id": "${{ github.repository }}",
              "event_type": "${{ steps.ev.outputs.type }}",
              "source_branch": "$SRC_BRANCH",
              "target_branch": "${{ github.event.pull_request.base.ref }}",
              "pull_request_url": "${{ github.event.pull_request.html_url }}",
              "review_state": "${{ github.event.review.state }}",
              "delivery_id": "${{ github.run_id }}-${{ github.run_attempt }}-${{ github.event_name }}"
            }
          }
          JSON
```

Ajoutez `SINRA_API_TOKEN` (jeton d'organisation, créé depuis le menu du profil → **API Tokens**) dans les **Secrets** du dépôt, et `SINRA_URL` dans ses **Variables**.

### GitLab CI/CD

Ajoutez un job à `.gitlab-ci.yml` :

```yaml
notify-sinra:
  stage: .post
  rules:
    - if: '$CI_PIPELINE_SOURCE == "merge_request_event" || $CI_PIPELINE_SOURCE == "push"'
  script:
    - |
      if [ "$CI_PIPELINE_SOURCE" = "push" ]; then
        EVENT_TYPE="pushed"
      elif [ "$CI_MERGE_REQUEST_EVENT_TYPE" = "merged" ] || [ "$CI_MERGE_REQUEST_MERGE_STATUS" = "merged" ]; then
        EVENT_TYPE="merged"
      else
        EVENT_TYPE="pr_opened"
      fi
      curl -sS -X POST "$SINRA_URL/api/v1/vcs/events" \
        -H "Authorization: Bearer $SINRA_API_TOKEN" \
        -H "Content-Type: application/json" \
        -d "{
          \"event\": {
            \"provider\": \"gitlab\",
            \"repository_external_id\": \"$CI_PROJECT_PATH\",
            \"event_type\": \"$EVENT_TYPE\",
            \"source_branch\": \"${CI_MERGE_REQUEST_SOURCE_BRANCH_NAME:-$CI_COMMIT_REF_NAME}\",
            \"target_branch\": \"$CI_MERGE_REQUEST_TARGET_BRANCH_NAME\",
            \"pull_request_url\": \"$CI_MERGE_REQUEST_PROJECT_URL/-/merge_requests/$CI_MERGE_REQUEST_IID\",
            \"delivery_id\": \"$CI_PIPELINE_ID-$CI_JOB_ID\"
          }
        }"
```

Ajoutez `SINRA_API_TOKEN` et `SINRA_URL` en variables CI/CD masquées dans **Settings → CI/CD → Variables**. La détection de la review approuvée nécessite un job séparé déclenché sur le webhook d'approbation de la merge request, ou une vérification planifiée via l'[API des approbations de merge request](https://docs.gitlab.com/ee/api/merge_request_approvals.html).

### Bitbucket Pipelines

Ajoutez une étape à `bitbucket-pipelines.yml` :

```yaml
pipelines:
  default:
    - step:
        name: Notify SINRA
        script:
          - |
            if [ -n "$BITBUCKET_PR_ID" ]; then
              EVENT_TYPE="pr_opened"
            else
              EVENT_TYPE="pushed"
            fi
            curl -sS -X POST "$SINRA_URL/api/v1/vcs/events" \
              -H "Authorization: Bearer $SINRA_API_TOKEN" \
              -H "Content-Type: application/json" \
              -d "{
                \"event\": {
                  \"provider\": \"bitbucket\",
                  \"repository_external_id\": \"$BITBUCKET_REPO_FULL_NAME\",
                  \"event_type\": \"$EVENT_TYPE\",
                  \"source_branch\": \"$BITBUCKET_BRANCH\",
                  \"target_branch\": \"$BITBUCKET_PR_DESTINATION_BRANCH\",
                  \"delivery_id\": \"$BITBUCKET_BUILD_NUMBER-$BITBUCKET_PIPELINE_UUID\"
                }
              }"
```

Ajoutez `SINRA_API_TOKEN` et `SINRA_URL` en variables de dépôt dans **Repository settings → Pipelines → Repository variables** (cochez le jeton en *Secured*). Détecter précisément les états mergé/approuvé nécessite l'[API Pull Requests de Bitbucket](https://developer.atlassian.com/cloud/bitbucket/rest/api-group-pullrequests/), Pipelines seul n'exposant pas d'évènement de merge distinct d'un push vers la branche par défaut.

## Mettre en route en 10 minutes

1. [Lier le dépôt à une platform](#lier-un-dépôt) (état **connecté**).
2. [Créer un jeton d'organisation](#configurer-la-ci).
3. [Vérifier ou ajuster le mapping évènement → statut](#évènements-reconnus-et-mapping-des-statuts) (les défauts fonctionnent déjà).
4. Ajouter le [workflow CI](#configurer-la-ci) correspondant à votre provider dans le dépôt.
5. Créer une branche `feature/<numéro>-test` depuis une issue, ouvrir une PR → l'issue passe **en cours**.
6. Merger la PR dans la branche par défaut → l'issue passe **terminé**, la capability parente reflète l'avancement dérivé.

## Accès

Lier/délier un dépôt et configurer le mapping évènement → statut sont réservés aux **administrateurs de l'organisation**. Le nom de branche canonique est visible par tous les membres ayant accès à l'issue ou à la capability.

## Hors périmètre (V1)

- Écriture SINRA → hébergeur (création de branche/PR, commentaires automatiques) : prévu en V2.
- **Monorepo** : un dépôt reste rattaché à une seule platform ; pas de routage par chemin vers plusieurs platforms.
- Réception par **webhook**/App : la V1 s'appuie uniquement sur la source CI → API ; le cœur du système est conçu pour l'accueillir sans refonte.
- **GitLab/Bitbucket auto-hébergés** : seules les offres cloud (gitlab.com, bitbucket.org) sont supportées ; une instance auto-hébergée nécessiterait une URL d'instance configurable, non exposée actuellement.
- Mapping automatique acteur git → utilisateur SINRA (auto-assignation) : prévu en V2.
