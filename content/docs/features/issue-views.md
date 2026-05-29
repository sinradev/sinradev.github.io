---
title: "Issue Views"
description: "Sinra offers two ways to view your issues: a table list for detailed scanning and a kanban board for status-based workflow. Switch between them instantly without losing filters."
date: 2024-01-01
weight: 30
---

## List View (Table)

The default view shows issues in a paginated table with sortable columns:

| Column | Description |
|--------|-------------|
| Priority | Color-coded indicator (Low, Medium, High) |
| Title | Issue name, clickable to open |
| Assignee | Avatar with name tooltip |
| Release | Version this issue targets |
| Cycle | Current cycle assignment |
| Status | Development status badge |
| Labels | All applied labels |
| Platform | Backend, Frontend, etc. |
| Estimated | Time estimate in days |
| Spent | Time logged in days |

Click any column header to sort. Click again to reverse. Sort state persists in session.

The list is best for:
- Scanning a large backlog with filters applied
- Comparing estimates across issues
- Bulk-selecting issues for batch updates

## Kanban View (Board)

The board groups issues by development status in columns. Each card shows:
- Title
- Priority indicator
- Labels
- Assignee avatar

Drag cards between columns to update development status directly on the board.

The board is best for:
- Daily standups ("what is in progress?")
- Visualizing flow across the status pipeline
- Quick status updates without opening issues

## Switching Views

A toggle in the top-right of the issue list switches between List and Kanban. Your active filters, sort, and search apply to both views. Switching views does not reset your filters.

## Bulk Operations (List View)

In list view, check the box on any issue to select it. Select multiple issues to enable bulk actions:

| Action | Description |
|--------|-------------|
| Set status | Update development status for all selected |
| Assign | Reassign all selected to a user or team |
| Set release | Move selected issues to a different release |
| Set cycle | Reassign selected to a different cycle |
| Add label | Add a label to all selected issues |
| Set platform | Update platform for all selected |

Bulk operations are irreversible in a single action, so confirm before applying to large selections.
