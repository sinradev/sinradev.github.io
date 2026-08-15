---
title: "VCS Integration"
description: "Link your GitHub repositories to SINRA to automatically advance the development status of issues and capabilities from git events: PR opened, review approved, merged, pushed."
date: 2026-08-14
weight: 100
---

## Overview

VCS integration connects your organization's code repositories to SINRA. When a significant event happens on the repository side (PR opened, review approved, merge, push), the development status of the affected issue advances automatically, without any manual update. Capabilities, whose progress is derived from their issues, mechanically reflect the real state of development.

In V1, only **GitHub** is supported, through a CI job that notifies SINRA (no webhook/GitHub App). Synchronization is one-directional: **git → SINRA**. SINRA never writes back to the hosting provider (no remote branch or PR creation).

## Routing principle: the number in the branch name

The link between a git event and a SINRA entity is based on the **branch name** carried by the event (a PR's source branch, or a push's branch).

**Branch format**: `<type>/<number>-<slug>` (e.g. `feature/123-fix-login`). The **number** is the entity's stable reference. The type (`feature`, `bugfix`, `hotfix`, `chore`) and the slug can change freely without ever breaking the link: no link record is stored in the database, the number **is** the link.

Two ways of working coexist:

- **Task flow**: a dedicated branch = one specific **issue**. Merging this branch = that task is done.
- **Feature flow**: a branch = an entire feature = one **capability** (the one spec-kit already associates with the capability, e.g. `024-vcs-integration`). Merging this branch advances all of the capability's development issues.

Routing applies **strict precedence**:

1. The branch name carries a **number** matching an issue or capability of the organization → that entity is the target.
2. Otherwise, the branch name exactly matches a **capability**'s `git_branch` (spec-kit feature flow) → that capability is the target.
3. Otherwise → no target, the event is ignored and logged (no error).

## Linking a repository

An organization admin links a repository from a **platform**:

1. **Others → Platforms** menu → edit the platform → **Linked repositories** section → **New repository**.
2. Connect your GitHub account to pick the repository and its branch from a list (or enter them manually).
3. The repository shows up as **connected**.

A repository belongs to exactly one platform; a platform can link several repositories. Events from a repository can only affect issues/capabilities of **the same platform**: an event targeting an entity outside this platform is ignored without error.

A repository's connection state is always visible: **Connected**, **Disconnected**, or **Revoked** (authorization removed on the host side). A non-connected repository stops applying any status change until it is re-linked.

## Copying the branch name

From an issue or a capability, a **Copy branch** button provides a ready-to-use canonical name: `feature/123-slug`. Pick a branch type (`feature`, `bugfix`, `hotfix`, `chore`); a default is suggested based on the issue type (task → `feature`, bug → `bugfix`).

The **number** (`123`) stays the same even if the issue's title changes later and you regenerate the name: it carries the link, never the title or the slug.

## Recognized events and status mapping

An organization admin configures, from the sidebar's **Others → Event → status mapping** menu, which development status corresponds to each git event. Default values are pre-filled on first visit:

| Event | Trigger | Default status |
|---|---|---|
| **PR opened** (`pr_opened`) | PR opened, or moved from draft to ready | In progress |
| **Review approved** (`review_approved`) | Review submitted with an "approved" verdict | Ready to merge |
| **PR merged** (`merged`) | PR merged into the repository's default branch | Done |
| **Push** (`pushed`) | Push on a linked branch | In progress |

Leaving a status empty **disables** the corresponding event: it then has no effect, whatever happens on the repository side.

## Effect depending on the target

**Issue target**: its development status advances directly.

**Capability target** (feature flow): the effect **cascades to the capability's development issues** (`task`/`bug`) belonging to the repository's platform. **Specification** and **plan** issues are never touched by the cascade. SINRA **never** writes a status directly on a capability: its progress stays computed from its issues.

The `git_branch` carried by issues (a metadata field inherited from the spec-kit workflow, shared with the capability) is **never** used as a direct routing key for an issue - otherwise the same feature branch would advance the capability **and** each of its issues separately (fan-out). The number, distinct per entity, prevents this by construction.

## Subtleties to know

- **Forward-only**: an event never moves an entity backward if it is already further along. The order followed is `todo → in_progress → done` (status group), then position within the group. A push received after a merge never undoes a "done" status.
- **Silent no-ops**: issue already at the target status, PR closed without merging, PR converted back to draft, PR reopened - none of these trigger a change or an error.
- **Merge = done, only toward the default branch**: merging a PR into an integration branch or any branch other than the repository's default/protected branch never applies the "done" status.
- **Idempotence**: every delivery carries a unique identifier. The same delivery received multiple times (CI retry, redelivery) produces only one effect.
- **No match = ignored, not an error**: a branch with no matching entity number and no matching capability `git_branch` is silently ignored and logged for diagnosis.
- **Platform isolation**: an event can only affect entities of the emitting repository's platform, never another platform in the same organization.
- **Entities predating the feature**: issues and capabilities created before VCS integration was enabled have no number and remain **unroutable** (no retroactive backfill). Only entities created afterward have one.
- **Visible provenance**: when a status change comes from a git event, the issue shows a "Changed by git" badge naming the triggering event, to distinguish it from a manual update.
- **`pull_request`**: this field points to the entity's **latest** known PR (renamed from `github_pr`). The full history of events (branches, PRs seen, actions applied) lives in the VCS event log, not in this field.

## Setting up GitHub CI

SINRA does not receive GitHub webhooks directly in V1: a CI job in the repository notifies SINRA instead. Add `.github/workflows/sinra-vcs.yml`:

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

Add `SINRA_API_TOKEN` (an organization token, created from the profile menu → **API Tokens**) to the repository's **Secrets**, and `SINRA_URL` to its **Variables**.

## Getting started in 10 minutes

1. [Link the repository to a platform](#linking-a-repository) (**connected** state).
2. [Create an organization token](#setting-up-github-ci).
3. [Check or adjust the event → status mapping](#recognized-events-and-status-mapping) (the defaults already work).
4. Add the [CI workflow](#setting-up-github-ci) above to the repository.
5. Create a `feature/<number>-test` branch from an issue, open a PR → the issue moves to **in progress**.
6. Merge the PR into the default branch → the issue moves to **done**, the parent capability reflects the derived progress.

## Access

Linking/unlinking a repository and configuring the event → status mapping are reserved to **organization admins**. The canonical branch name is visible to any member with access to the issue or capability.

## Out of scope (V1)

- SINRA → host writes (remote branch/PR creation, automatic comments): planned for V2.
- **Monorepo**: a repository stays linked to a single platform; no path-based routing to multiple platforms.
- **Webhook**/GitHub App delivery: V1 relies solely on the CI → API source; the core system is designed to accommodate this later without rework.
- **GitLab / Bitbucket**: the routing and status transition mechanism is host-agnostic; adding a new host is limited to providing a new normalization source.
- Automatic git actor → SINRA user mapping (auto-assignment): planned for V2.
