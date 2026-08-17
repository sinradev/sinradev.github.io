---

title: "VCS Integration: Issue Status Follows the Code, Not the Other Way Around"
subtitle: "PR opened, review approved, merged: these events already tell the real story of the work's progress. Sinra's VCS integration turns them into status changes, with no manual update."
description: "Sinra's VCS integration connects GitHub, GitLab and Bitbucket to your issues and capabilities: the branch name carries the link, a CI job notifies Sinra, and development status advances automatically as git events happen."
categories: ["Tools", "Project Management"]
excerpt: "A team that codes already knows, at every PR opened and every merge, where the work stands. The problem isn't the information, it's that it stays on the repository side while the project management tool waits for a manual update."
date: 2026-08-17 09:00:00 +0200
featured_image: /assets/images/blog/2026-08-17-integration-vcs-github-gitlab-bitbucket-featured.png

---

An issue moves to "in progress" when someone opens a PR. It moves to "ready to merge" when a review approves it. It moves to "done" when that PR is merged. These three facts already exist, in full, on the git repository side. Yet in most teams, someone still has to open the project management tool and manually drag the card from one column to the next - a gesture redundant with what the repository already knows, forgotten every other day at the end of a sprint.

## The gap between the code and the board

This gap isn't a team discipline problem, it's a duplicated source-of-truth problem. The developer who just merged their PR is focused on the next PR, not on updating a board. The result: the status shown in the project management tool silently lies for hours, sometimes days, until someone notices and fixes it by hand. A board that doesn't reflect the real state of the code is no longer a steering tool, it's one more source of uncertainty.

## What VCS integration does

Sinra's VCS integration starts from a simple principle: an issue's development status should never be entered by hand when it can be inferred from a git event. **GitHub, GitLab and Bitbucket** are supported in strictly identical fashion - once a repository is linked, all three providers behave the same way, no feature is reserved for any one of them. A CI job, added to the repository, notifies Sinra on every relevant event: PR opened, review approved, merged, pushed. Sinra never reads the repository directly and never writes to it either - the flow is one-directional, **git → Sinra**, which rules out any risk of a surprising automated action on the hosting side.

## The branch name as the only link

No mapping table to maintain, no link to create manually between a branch and an issue: the **number** carried by the branch name is the key. A branch named `feature/123-fix-login` unambiguously targets issue or capability number 123, regardless of the branch type (`feature`, `bugfix`, `hotfix`, `chore`) or the slug attached to it - both can change freely without ever breaking the link. From an issue, a **Copy branch name** button directly proposes this canonical name, so a developer never has to invent it.

Two ways of working coexist naturally. A branch dedicated to a single task advances one **issue**; a whole-feature branch, the one spec-kit already associates with a **capability**, cascades to advance every development issue of that capability once merged. Sinra never writes a status directly on a capability - its progress remains, as everywhere else in the tool, computed from its issues.

## The event-to-status mapping stays in your hands

No behavior is hardcoded on the tool's side. An organization administrator configures, event by event, which status to apply: PR opened can trigger "in progress", review approved "ready to merge", merged "done". Sensible defaults are pre-filled on first visit, but nothing prevents disabling an event by clearing its associated status - it then has no effect at all, whatever happens on the repository side. The mapping adapts to the team's workflow, not the other way around.

## Safeguards designed never to surprise

A mechanism that automatically changes statuses has to earn trust before it earns efficiency. Several rules take care of that:

- **Forward-only**: an event never pushes an entity backward once it's further along. A push after a merge never reopens a "done" issue.
- **Silent no-op**: a PR closed without merging, reverted to draft, or already at the target status triggers neither a change nor an error.
- **Merge means done, only toward the default branch**: merging into an intermediate integration branch never applies the final status.
- **Idempotence**: every delivery carries a unique identifier, a CI retry never produces a duplicate effect.
- **Platform isolation**: an event can only affect entities belonging to the same platform as the emitting repository.
- **Visible provenance**: a git-originated status change shows a dedicated badge on the issue, distinguishing it from a manual update.

No match found is never treated as an error: the event is simply ignored and logged for diagnostics, never blocking a CI run.

## Getting started

Linking a repository happens from a **platform**: pick the provider, connect the matching account, select the repository from a list. Each provider connects independently - an organization can link GitHub, GitLab and Bitbucket repositories in parallel, and revoke one without affecting the others. What's left is creating an organization token and adding the matching CI job (a GitHub Actions workflow, a GitLab CI/CD job, or a Bitbucket Pipelines step - the payload posted to Sinra is strictly identical across all three). A team following these steps sees its first issue change status automatically in under ten minutes.

## The takeaway

An issue's development status doesn't need to be maintained by hand when the git repository already knows exactly how it evolved, event by event. By turning PRs, reviews and merges into automatic status changes - never writing back to the hosting provider, never imposing a fixed mapping - Sinra's VCS integration closes the gap between what the code says and what the board shows.
