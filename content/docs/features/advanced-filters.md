---
title: "Advanced Filters"
description: "Sinra's filter system supports 40+ filterable fields with AND/OR rule groups. Filters persist in your session so you never lose your view. Learn how to build precise queries across your issue backlog."
date: 2024-01-01
weight: 10
---

## Overview

The issue list supports dynamic filtering with AND/OR rule groups. Instead of a fixed set of dropdowns, you build filter rules that combine any of 40+ fields using 8 operators.

Filter state persists in your session: close the tab, come back, and your filters are still active.

## Building a Filter

Each filter rule has three parts:
1. **Field**: what to filter on (assignee, status, release, label, priority, estimated time, etc.)
2. **Operator**: how to compare (equals, not equals, contains, greater than, less than, is empty, is not empty)
3. **Value**: what to match against

## AND / OR Rule Groups

Rules combine into groups. Within a group, rules use AND logic. Multiple groups use OR logic.

**Example:** issues that are (In Progress AND assigned to Alice) OR (Bug AND High priority)

Group 1:
- Status = In Progress
- Assignee = Alice

Group 2:
- Type = Bug
- Priority = High

This returns issues matching either group entirely.

## Filterable Fields (selection)

| Category | Fields |
|----------|--------|
| Assignment | Assignee, Team |
| Status | Development status, Writing status |
| Scope | Release, Cycle, Capability, Project |
| Classification | Type, Priority, Label, Platform |
| Time | Estimated time, Spent time, Created at, Updated at |
| Content | Title (contains) |

## Operators

| Operator | Description |
|----------|-------------|
| `equals` | Exact match |
| `not equals` | Excludes exact match |
| `contains` | Substring match (text fields) |
| `greater than` | Numeric comparison |
| `less than` | Numeric comparison |
| `is empty` | Field has no value |
| `is not empty` | Field has any value |
| `in` | Matches any of a list |

## Session Persistence

Sinra stores your active filters in the session, not in a URL parameter or a saved view. This means:
- Your filters survive page navigation within the app
- Each browser session starts fresh
- Filters are per-user, not shared

If you want to share a specific filtered view with a teammate, use the URL (which reflects current filters) or describe the filter rules directly.

## Sorting

The issue list supports sorting by any column. Sort order also persists in the session alongside filters. Common sort combinations:
- Priority descending + Estimated time descending (biggest, most critical first)
- Updated at descending (most recently changed first)
- Assignee + Status (grouped view effect)
