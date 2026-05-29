---
title: "Issues"
description: "Issues are the fundamental unit of work in Sinra. Every task, bug, and specification is an issue. Learn how they work, what fields they carry, and how the dual-status workflow tracks writing and development separately."
date: 2024-01-01
weight: 20
---

## What is an Issue?

An issue represents a concrete piece of work: a bug to fix, a feature to build, a specification to write. Every deliverable in Sinra traces back to an issue.

Unlike traditional "user story" formats with rigid structure, Sinra issues use direct, descriptive names. "CSV export for reports" is more useful than "As a user, I want to export reports so that I can analyze data."

## Issue Types

| Type | When to use |
|------|-------------|
| **Bug** | A defect to fix |
| **Specification** | A spec document that goes through the writing workflow |
| **Feature** | A new capability to build |
| **Task** | Any other unit of work |

## Core Fields

- **Name**: concise, descriptive title
- **Body**: rich text with images and `@mentions`
- **Priority**: Low, Medium, High
- **Estimated time**: in days, feeds capacity calculations
- **Labels**: custom tags per organization
- **Platform**: Backend, Frontend, Mobile, etc.

## Assignment

Issues can be assigned to a specific user or to an entire team. When assigned to a team, any team member can pick it up.

## Dual Status Workflow

Each issue carries two independent statuses:

| Status type | Purpose |
|-------------|---------|
| **Writing status** | Tracks spec/planning progress |
| **Development status** | Tracks implementation progress |

This means a specification can be "In Review" for writing while the developer has not started yet. Both axes progress independently, giving the team accurate visibility into where work actually stands.

## Linking Issues

Issues connect upward to:
- **Release**: which version this issue belongs to
- **Cycle**: which work period this issue is planned in
- **Capability**: which feature epic this issue contributes to

An issue belongs to one release and one cycle, but these two axes are independent. A cycle can contain issues from multiple releases, which enables parallel work across versions.

## Time Tracking

Log time spent directly on an issue. Sinra compares spent time against the estimate, surfacing overruns before they become surprises. These numbers feed the cycle workload calculation.

## Comments and Mentions

Each issue has a threaded comment section with rich text and `@mentions`. Mentioning a user triggers an email notification with full context. Discussion stays attached to the work, not lost in Slack.
