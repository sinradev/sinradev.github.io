---
title: "Sync Events"
description: "Sync events are Sinra's structured team synchronization moments: planning meetings, retrospectives, phase gate reviews, and post-mortems. Each has a precise role in the project lifecycle."
date: 2024-01-01
weight: 50
---

## What Is a Sync Event?

A **sync event** is a formal moment where the team synchronizes around a collective decision, a learning, or a validation. These are deliberate stops in the workflow, distinct from issues (work to execute) and pages (reference documentation).

Sinra recognizes four types of sync events, each positioned at a specific point in the project lifecycle:

| Type | When | Orientation |
|------|------|-------------|
| **Planning Meeting** | Before a cycle or release | Forward: what are we doing next? |
| **Retrospective** | After a release | Backward: what did we learn? |
| **Phase Gate Review** | Between V-Model phases | Validation: can we move forward? |
| **Post-mortem** | After an incident | Analysis: what happened and why? |

## Why Separate Syncs from Issues?

An issue tracks work to produce. A sync event tracks a collective decision or learning. The distinction is structural:

- Issues have assignees. Syncs have participants.
- Issues produce deliverables. Syncs produce decisions and records.
- Issues live in the backlog. Syncs live in team history.

Mixing the two creates a backlog that serves as both a to-do list and a meeting archive, making both harder to read.

## A Release Lifecycle, Told Through Syncs

```
Release created
    ↓
Planning Meeting  →  Define scope for the cycle / release
    ↓
[Work: Issues, Cycles, Testing]
    ↓
Phase Gate Review  →  Go / No-Go on the V-Model phase
    ↓
[Further iterations if needed]
    ↓
Release shipped
    ↓
Retrospective  →  Learnings for the next release
    ↓
[If an incident occurred]
    ↓
Post-mortem  →  Blameless incident analysis
```

Syncs mark transitions between major milestones. They do not replace work: they frame it.

## Planning Meetings

The planning meeting is the forward-looking sync. It happens before a cycle or release to decide what goes in.

In Sinra, a planning meeting can be linked to a cycle, a release, or a capability. It captures the agenda, decisions made, and participants. The history of planning meetings becomes a searchable record of team intent, independent from the work backlog.

## Retrospectives

The retrospective is the backward-looking sync. It happens after a shipped release, never after a cycle alone.

This is intentional: what you learn about a delivery concerns what was shipped, not the time period worked. Sinra automatically creates the retrospective when a release closes. The team records what went well, what did not, and improvements to try next time.

## Phase Gate Reviews

The phase gate review is the V-Model validation sync. It occurs at phase transitions: end of design, end of implementation, end of testing.

Its role is formal: decide whether the team can move to the next phase (go), must stop (no-go), or can proceed with conditions. Sinra records the verdict, evaluated criteria, and participants, creating an audit trail for regulated environments.

## Post-mortems

The post-mortem is triggered by an incident, not by the calendar. It follows a blameless structure: event timeline, systemic factors, measured impact (MTTR included), remediation actions.

Its goal is to build institutional memory of incidents, not to identify who is at fault. Post-mortems remain accessible long after the incident to document remediation decisions and prevent regressions.

## What Sinra Does Not Do

Sinra does not provide a daily standup tracker. This is a deliberate choice: dailies are an Agile mechanic that fits poorly with most V-Model + Agile hybrid teams. A useful sync is a moment of decision or learning, not a daily status report.

Syncs in Sinra exist where they create lasting documentary value: before, after, or at key milestones of a release.
