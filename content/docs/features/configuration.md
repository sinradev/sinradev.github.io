---
title: "Configuration"
description: "Customize Sinra for your organization: workflow statuses, labels, categories, and platforms. Everything configures without code from the settings panel."
date: 2024-01-01
weight: 90
---

## Overview

Sinra adapts to your process, not the other way around. The Configuration section lets admins define elements shared across the entire organization: workflows, tags, and contexts.

## Statuses

Statuses define the stages of your workflows. Sinra distinguishes two independent status types:

- **Writing statuses**: specification progress (e.g. Draft, In Review, Approved)
- **Development statuses**: implementation progress (e.g. To Do, In Progress, In Testing, Done)

For each status you can set:
- **Name** and **emoji** for visual identification
- **Completion percentage** for progress calculation
- **Order** via drag-and-drop

Create as many statuses as your process requires. A status set to 100% is treated as terminal.

## Labels

Labels are colored tags applied to issues, capabilities, and projects. They serve as free-form categorization: work type, functional priority, business domain, etc.

For each label:
- Name and color
- Scope: issues only, capabilities, or both

Labels are filterable in the issue list using `equals`, `in`, and `is empty` operators.

## Categories

Categories let you group issues by functional or technical domain. Unlike labels, they are designed for more formal structuring.

Examples: Authentication, Payments, Notifications, Infrastructure.

## Platforms

Platforms indicate the technical context of an issue:

- Website
- Mobile (iOS / Android)
- Backend
- Frontend
- Infrastructure

Each issue can be tagged with a platform. This allows filtering and visualizing load by technical context, useful for full-stack or multi-product teams.

## Best Practices

**Statuses**: keep it simple. 4 to 6 development statuses cover most workflows. Too many statuses creates friction.

**Labels**: avoid duplicating platforms or categories. Use labels for what does not fit into the other axes.

**Categories and platforms**: define them once at project kickoff. Changing categories mid-project means re-tagging existing issues.
