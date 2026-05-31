---
title: "Postmortems"
description: "Sinra provides a structured blameless postmortem workflow. Analyze incidents systematically, identify systemic causes, assign remediation actions, and build an institutional memory of what went wrong and how you fixed it."
date: 2024-01-01
weight: 65
---

## What are Postmortems?

A postmortem in Sinra is a structured incident analysis record. It captures what happened, why it happened, and what will prevent it from happening again. It is explicitly **blameless**: the goal is to identify systemic failures, not individual mistakes.

## Creating a Postmortem

1. Navigate to `/postmortems`
2. Create a record with a title and occurrence date
3. Set severity based on impact
4. Fill in the key dates: detected_at, resolved_at
5. Write the timeline, contributing factors, and impact sections
6. Add remediation actions with owners

## Severity Levels

| Severity | Usage |
|----------|-------|
| **low** | Minor disruption, limited user impact |
| **medium** | Noticeable degradation, workaround available |
| **high** | Significant outage or data issue, no workaround |
| **critical** | Complete service outage or data loss |

## Structure of a Postmortem

**Timeline** (rich text): chronological reconstruction of what happened. Good timelines describe what each responder did and why — with empathy for the information they had at the time.

**Contributing Factors** (rich text): systemic conditions that made the error possible or amplified its impact. Not who did what, but what made the system fragile.

**Impact** (rich text): scope of the incident — users affected, revenue lost, SLA breached, data at risk.

**Actions**: specific remediation tasks with an assigned owner. Each action should address a contributing factor, not a symptom.

## Status Lifecycle

| Status | Meaning |
|--------|---------|
| **draft** | Being written, not yet shared |
| **in_review** | Shared for review with the team |
| **published** | Finalized, shared with the organization |

## MTTR (Mean Time To Recovery)

Sinra automatically calculates MTTR from `occurred_at` to `resolved_at`. This metric appears on each postmortem and can be compared across incidents to track your organization's recovery capability over time.

If `resolved_at` is not set, the postmortem is flagged as **ongoing**.

## Linking to Context

Link a postmortem to a release, cycle, or project to connect it to the work context where the incident occurred. This makes it searchable from the release view and creates traceability between delivery and incident.

## Participants

Add the responders and reviewers as participants. This documents the team that responded and creates a list of people who should be notified when the postmortem is published.

## Blameless vs Traditional Incident Reviews

Traditional incident reviews ask: who made the mistake? Blameless postmortems ask: what allowed this mistake to have this impact?

The distinction is not cosmetic. When individuals fear blame, they hide near-misses, underreport incidents, and work around fragile systems silently. When organizations treat incidents as systemic learning opportunities, engineers report problems early, postmortems are read by other teams, and systemic improvements get prioritized.

Sinra's postmortem structure is designed to surface systemic causes: the contributing factors section explicitly focuses on conditions, not actors.
