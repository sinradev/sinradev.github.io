---
title: "Releases"
description: "A release in Sinra is a scope commitment, not just a deployment event. Learn how releases define what you deliver, connect to cycles and capabilities, and communicate progress to your whole organization."
date: 2024-01-01
weight: 40
---

## What is a Release?

A release represents a version of your product. It answers: "what are we delivering, and when?"

In Sinra, a release is defined by its scope: the set of capabilities it includes. This is decided deliberately at planning time, not assembled retroactively from whatever was finished before the deploy.

## Release vs Cycle

These two concepts are often confused. They are independent:

| | Release | Cycle |
|-|---------|-------|
| What it is | A delivery scope | A work period |
| Answers | What are we shipping? | When are we working on it? |
| Duration | Variable, tied to features | Fixed, typically 1-4 weeks |
| Contains | Capabilities and issues | Issues from any release |

A single cycle can contain issues from multiple releases. This enables teams to work on a maintenance fix for v1.2 at the same time as new features for v2.0, within the same cycle.

## Defining a Release

When you create a release, you set:
- **Name and version number**: your versioning scheme (semantic or calendar-based)
- **Target delivery date**: when you plan to ship
- **Target capacity**: days of work budgeted for this release

Then, using the Backlog view, you assign capabilities to the release. Each capability brings its issues along. This is where scope decisions happen.

## Capacity Planning

Sinra calculates whether your release is achievable based on:
- Total estimated issue time for all issues in the release
- Team capacity available across the cycles that will deliver those issues

If the release is over capacity, Sinra surfaces it before you commit. This is the fundamental shift Sinra makes: confronting ambition against reality at planning time, not at delivery time.

## Release States

| State | Meaning |
|-------|---------|
| **Upcoming** | Planned, not started |
| **Active** | Currently being worked on |
| **Delivered** | Shipped |

When a release is delivered, Sinra automatically creates its retrospective.

## Communicating a Release

A release scope defined in capabilities translates directly to stakeholder communication:

> "v2.4 ships in July. It includes: email notifications, CSV export, and role management."

This is something your sales team, your users, and your support team can understand without opening the backlog.

## Retrospectives

Each release generates a retrospective automatically when it closes. The team fills in four categories:
- **Good**: what worked well
- **Bad**: what did not work
- **Improvements**: process changes to try next time
- **General**: anything else

Retrospectives are tied to releases, not cycles, because what you learn is about what you delivered, not about how long you worked.
