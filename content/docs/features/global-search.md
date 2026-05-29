---
title: "Global Search"
description: "Sinra's global search finds issues, capabilities, projects, and releases simultaneously. Trigger it with Shift+F from anywhere in the app. Results are grouped by type with recently-viewed items as fallback."
date: 2024-01-01
weight: 20
---

## Triggering Search

| Method | Shortcut |
|--------|----------|
| Modal search | `Shift + F` |
| Inline search | `/` (focuses the search field) |

Both open the same search experience. The modal appears over any page without losing your current context.

## What Gets Searched

Global search queries five entity types simultaneously:

| Type | Searched fields |
|------|----------------|
| **Issues** | Title, body content |
| **Capabilities** | Name, body content |
| **Projects** | Name, description |
| **Releases** | Name, version number |
| **Pages** | Name, body content |

Results are grouped by type, so you can scan each category independently.

## Recently Viewed

When you open search with an empty query, Sinra shows your recently viewed items instead of a blank state. This makes global search useful as a navigation tool, not just a search tool.

Start typing to replace recently viewed with live search results.

## Result Navigation

Navigate results with keyboard:
- `↑` / `↓`: move between results
- `Enter`: open selected result
- `Escape`: close search without navigating

## Scope

Search results are scoped to your current organization. You will never see results from another organization even if you are a member of multiple organizations.

Results are also filtered by your authorization level. Issues in projects you do not have access to will not appear.
