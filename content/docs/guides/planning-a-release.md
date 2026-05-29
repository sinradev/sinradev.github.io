---
title: "Planning a Release"
description: "A step-by-step guide to planning a Sinra release: defining scope, checking capacity, breaking capabilities into issues, and distributing work across cycles."
date: 2024-01-01
weight: 30
---

## The Planning Sequence

Release planning in Sinra follows a top-down sequence:

1. Define the release scope (capabilities)
2. Check capacity against scope
3. Break capabilities into issues
4. Assign issues to cycles

Each step produces information that informs the next. Do not skip directly to creating issues without first deciding what the release contains.

## Step 1: Define the Release

Create a release with a target date and a target capacity estimate. The capacity estimate does not need to be precise yet, a rough number is enough to check your scope.

Example: "v2.0, target end of Q2, 60 days of work budgeted."

## Step 2: Assign Capabilities in the Backlog

Open the Backlog view. Drag capabilities into the release. Add the capabilities that you believe should be in this version.

As you add capabilities, watch the capacity indicator. If you are already at 120% before adding the capabilities you care most about, the scope conversation needs to happen now, not in week 5.

## Step 3: Prioritize and Cut

With a realistic capacity view, decide what stays in and what moves to the next release. Ask for each capability:
- Is this a must-have for this version?
- What breaks if this ships one release later?
- Which capabilities depend on each other?

Cutting scope in planning is a decision. Cutting scope at the end of a release because you ran out of time is a failure. The backlog makes both visible, but only planning-time cuts are controlled.

## Step 4: Create Issues on Each Capability

Open each capability and create the issues that implement it. For each issue:
- Write a clear, direct name
- Set an estimated time in days
- Assign to a developer or team
- Set the platform (Backend, Frontend, etc.)

Keep estimates honest. A 0.5-day estimate for something that consistently takes 2 days is noise, not planning.

## Step 5: Create Cycles for the Release Timeline

Create cycles that span the release period. If the release runs from April to June, create two or three cycles within that window.

Each cycle's capacity is calculated automatically from team availability and business days.

## Step 6: Assign Issues to Cycles

Distribute issues across cycles. Load each cycle to roughly 70-80% of its capacity. Leave headroom for unplanned work: bugs, integration issues, review iterations.

Use the cycle workload view to check per-developer load. If one developer is at 130% and another is at 40%, redistribute before the cycle starts.

## Tracking During the Release

Once the release is running:
- Check cycle progress daily (date, status, time indicators)
- Log time on issues as work completes
- Move issues between cycles if something slips
- Keep capacity indicators green: if a cycle hits 100%+ with work still to do, escalate immediately

## Closing the Release

When all capabilities are delivered and tested, mark the release as delivered. Sinra creates the retrospective automatically. Fill it in while the release is fresh.
