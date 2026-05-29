---
title: "Projects"
description: "Projects group capabilities that share a strategic purpose. They are the highest planning level in Sinra, above releases and cycles."
date: 2024-01-01
weight: 5
---

## What is a Project?

A project is a strategic container that groups related capabilities. It represents an initiative, a product, or a long-term development direction.

Examples of projects:
- "Mobile app v2"
- "Billing engine overhaul"
- "Third-party integrations"

## Hierarchy in Sinra

```
Project
  └── Capabilities (concrete features)
        └── Issues (implementation tasks)
```

A project can contain capabilities assigned to different releases. It provides a cross-cutting view of an initiative's progress, independent of sprint planning.

## Creating a Project

1. Go to **Projects**
2. Click **New Project**
3. Set the name and description
4. Add existing capabilities or create new ones from the project

## Project View

The project detail view shows:
- All linked capabilities with their status
- Number of open issues per capability
- Target release for each capability

This gives an immediate read on the progress of an entire initiative without having to browse individual releases or cycles.

## Projects vs Releases

These two concepts are complementary, not interchangeable:

| | Project | Release |
|-|---------|---------|
| Answers | What are we working on? | When are we delivering? |
| Duration | Long-term, open-ended | Time-bounded |
| Contains | Capabilities | Capabilities + Issues |
| Axis | Strategic | Operational |

A single project can contribute to multiple successive releases. A release can include capabilities from several different projects.

## Best Practices

Create one project per initiative or major functional domain. Avoid projects that are too broad ("The entire product") or too granular ("Sprint 12"). A good project fits in one sentence: what it aims for, not how it does it.
