---
title: "Backlog"
description: "The Backlog view is where you assign capabilities to releases. Drag and drop capabilities into a release scope, and Sinra warns you when a release exceeds its capacity."
date: 2024-01-01
weight: 60
---

## What the Backlog Does

The backlog is the planning surface where scope decisions happen. You see all unassigned capabilities on one side and your planned releases on the other. Drag a capability into a release to include it in that version's scope.

This is where you answer: "what goes in this release vs the next one?"

## Drag and Drop

Capabilities are draggable cards in the backlog. Drop a capability onto a release to assign it. The release immediately recalculates its capacity load.

To remove a capability from a release, drag it back to the unassigned pool or to a different release.

## Capacity Warnings

Each release card shows its current capacity utilization. When the total estimated time of assigned capabilities exceeds the release's target capacity, Sinra shows a capacity warning.

This is the moment to make a real decision:
- Remove a capability from this release and push it to the next
- Increase the release capacity (add more cycles or extend the timeline)
- Accept the overload and plan overtime

The warning does not block you. It makes the trade-off visible so the decision is explicit.

## Unassigned Capabilities

Capabilities not assigned to any release appear in the unassigned pool. These are planned features that have not yet been scheduled. Keeping the unassigned pool tidy makes planning reviews faster.

## Relationship to Cycles

Assigning a capability to a release scopes the work (what). Assigning its issues to cycles schedules the work (when). These two decisions are separate and can happen in any order.
