---
title: "Spec Pipeline"
description: "The Spec Pipeline is a Kanban board dedicated to PO/PM workflows. It visualizes all spec-writing issues grouped by capability and organized into columns based on their writing status. Drag cards between columns to update status instantly."
date: 2026-06-11
weight: 25
---

## Overview

The Spec Pipeline gives product owners and project managers a dedicated view to track the progress of spec writing across all capabilities. Instead of navigating issue by issue, the pipeline surfaces the full picture: which capabilities have specs in progress, blocked in review, or ready to go.

Access it from the sidebar under the **Capabilities** dropdown.

## Columns

Each column corresponds to a writing status configured for your organization. Statuses are ordered from left to right following the writing workflow:

| Column | Meaning |
|--------|---------|
| **To write** | Specs not yet started |
| **In progress** | Specs currently being written |
| **In review** | Specs awaiting validation |
| **Done** | Validated specs |

Column names match your organization's configured writing statuses. Only issues that have a writing status assigned appear in the pipeline.

## Card Grouping

Within each column, cards are grouped by capability. Each group shows the capability name as a header, followed by the issues belonging to that capability.

Issues without a linked capability appear in a **"No capability"** group at the bottom of each column.

Clicking a card navigates to the existing issue detail page.

## Filters

Filter the pipeline by **release** and **project** to focus on what matters now:

- Select a release to see only issues linked to that release or wishlist release
- Select a project to narrow down further
- Combine both filters - they apply cumulatively
- Use **Reset** to clear all active filters

Filters persist for the duration of your session.

## Drag and Drop

Move a card from one column to another to update its writing status instantly. The change is saved immediately without a full page reload.

- Only cross-column moves are supported (no reordering within a column)
- Drag and drop respects your existing issue permissions
- If you do not have permission to edit an issue, the card is not draggable

## Access

The Spec Pipeline is accessible to all members of your organization. The same access rules as the Capabilities index apply.

## Empty States

| Situation | What you see |
|-----------|-------------|
| No filters match | "No matching specs" message |
| No writing statuses configured | Invitation to configure statuses in Settings |
