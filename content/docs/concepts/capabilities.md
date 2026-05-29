---
title: "Capabilities"
description: "Capabilities are Sinra's equivalent of epics, but with a key difference: a capability has a clear completion state. Learn how capabilities connect releases, issues, and QA into a traceable delivery unit."
date: 2024-01-01
weight: 30
---

## What is a Capability?

A capability is a concrete product feature: something your product will be able to do once it is delivered. It lives at the level of abstraction that product managers, developers, and stakeholders can all understand.

"CSV export for reports" is a capability. It is either shipped or it is not. There is no ambiguous "partially done" state.

## Capabilities vs Epics

The key difference is completeness criteria:

| | Epic | Capability |
|-|------|-----------|
| Defined by | User stories grouped together | A concrete product feature |
| Done when | All child tickets are closed | The feature works as defined |
| State | Often stays open indefinitely | Binary: delivered or not |
| Communicable to stakeholders | Rarely | Yes, directly |

An epic can stay open for months as new tickets are added. A capability has a scope decision at the start: when this feature is shipped, the capability closes.

## Capabilities in Planning

Capabilities are the unit of planning at the release level. When you define a release, you assign capabilities to it. This answers "what will version 2.4 include?" at the feature level, not at the ticket level.

This makes release planning communicable:

> "Version 2.4 includes: CSV export, email notifications, and role management."

That sentence works in a team standup, a stakeholder meeting, and a product changelog.

## Linking Capabilities

Each capability connects to:
- **Project**: the high-level initiative it belongs to
- **Release**: which version will ship this feature
- **Issues**: the individual tasks that implement it
- **Testings**: QA test cases that validate it

This chain gives full traceability from strategic goal (project) down to individual tasks (issues) and validation (testings).

## Capability Body

The capability body uses a rich editor. Teams typically write:
- User-facing description of the feature
- Acceptance criteria
- Technical notes and constraints
- Links to design assets

Because capabilities are shared between product and engineering, this body becomes the living spec for the feature.

## Progress Tracking

A capability's progress is visible through:
- Issue count (open vs closed)
- Time estimated vs spent
- Testing acceptance status

This gives a fast, honest read on whether the capability is truly close to done or just has most tickets closed.
