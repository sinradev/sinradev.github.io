---
title: "Import Issues"
description: "Import issues into Sinra from a CSV file exported from any tool, with auto-mapping presets for Jira, Asana, Azure DevOps, and Linear, or directly from GitHub via OAuth."
date: 2026-09-16
weight: 36
---

## Two Import Paths

Sinra offers two ways to bring existing work into an organization: a **CSV file import** for any tool that can export one, and a **GitHub Issues** import for repositories connected via OAuth.

## CSV File Import

Import issues from a CSV file exported from any tool.

- Supports comma, semicolon, and tab delimiters
- Auto-mapping presets for **Jira**, **Asana**, **Azure DevOps**, and **Linear**: column headers from these tools are recognized automatically, so you don't have to map fields by hand
- Other tools work too: map columns manually if no preset matches
- Up to 5,000 rows per import

Start an import from **Import from CSV** in the Issues section.

## GitHub Issues

Import open or closed issues directly from a connected GitHub repository.

- Connect with OAuth, no personal access token required
- Filter by label, milestone, or state before importing
- Automatic duplicate detection avoids re-importing issues already present in Sinra

Start an import from **Connect GitHub** in the Issues section.

## Relationship to VCS Integration

This import is a one-time bulk transfer of existing issues. It is separate from [VCS integration](/docs/features/vcs-integration/), which continuously syncs development status from git events (PR opened, merged, etc.) after issues already exist in Sinra.
