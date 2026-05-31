---
title: "Planning Meetings"
description: "Sinra centralizes planning meetings alongside the issues and releases they plan. Create structured meetings with agenda, participants, and outcomes — all linked to the cycle or release they govern."
date: 2024-01-01
weight: 55
---

## What are Planning Meetings?

Planning Meetings in Sinra are first-class records for structured team synchronization. They are distinct from issues (tasks to execute) and pages (documentation): a planning meeting is a collective decision-making moment that produces outcomes feeding your issues and releases.

## Creating a Meeting

1. Navigate to `/planning_meetings`
2. Create a new meeting with a name and optional rich-text body (agenda, decisions)
3. Set the status: **draft** while preparing, **scheduled** once confirmed, **done** after it completes
4. Link it to a release, cycle, or capability (optional but recommended)
5. Add participants from your team

## Status Lifecycle

| Status | When to use |
|--------|------------|
| **draft** | Meeting is being prepared, agenda not final |
| **scheduled** | Date is set, participants confirmed |
| **done** | Meeting completed, minutes recorded in body |

## Linking to Your Work

Linking a meeting to a cycle, release, or capability creates traceability between the decision-making moment and the work it governs:

| Link | Use case |
|------|---------|
| **Cycle** | Sprint planning — deciding what goes into this cycle |
| **Release** | Kick-off meeting or scope review for a version |
| **Capability** | Backlog refinement for a specific feature |

## Participants

Add team members as participants to record who was present. This is separate from @mentions in the body: participants are the attendees of record, mentions are contextual references.

## Why Not Just Use Issues?

An issue tracks work to be done. A planning meeting tracks a decision that was made. The distinction matters because:

- Decisions have participants, not assignees
- Decisions produce outcomes, not deliverables
- Historical decisions should be browsable independently of the task backlog

## Planning Meetings vs Retrospectives

Retrospectives look backward (what did we learn from this release?). Planning Meetings look forward (what will we commit to next?). Sinra keeps them separate because they serve different purposes in your team's cadence.
