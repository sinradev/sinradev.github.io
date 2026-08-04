---
title: "CIR/CII and Timesheet Export"
description: "Build a supporting extract for the French R&D Tax Credit (CIR) or Innovation Tax Credit (CII), or a simple worked-hours report, directly from the issues you already track day to day, with no manual re-entry."
date: 2026-08-04
weight: 95
---

## Overview

The CIR/CII and timesheet export reuses the existing export mechanism (issues → CSV/JSON) to produce two report types without any custom development: a supporting extract for the French R&D Tax Credit or Innovation Tax Credit, and a simple worked-hours report by person and by project.

No technical setup is required: the mechanism relies on **labels**, **capabilities**, and time spent already tracked on your issues.

## Building a CIR/CII Extract

1. Create a label dedicated to your research work, for example "R&D" or "Research" (**Configuration → Labels**). The label name is entirely up to you: you decide what counts as R&D for your organization.
2. Apply this label to the relevant issues as they progress.
3. On the issues list, filter by this label and by the period you need (**Advanced Filters**).
4. Open the export screen and check "Reuse current list filters".
5. Select the relevant fields: **Project**, **Description**, **Hours worked**, **Labels**, **Project start date**, **Project end date**.
6. Export as CSV or JSON. The file contains one row per issue, with the detail needed for the supporting file.

## Producing a Timesheet Report

For a simple hours report, without filtering by label: check **Assignee**, **Project**, and **Hours worked**, then export. The resulting file gives, for each issue, the assigned person, the project, and the time spent — to aggregate by person or by project as needed.

## Available Fields

| Field | Description |
|-------|-------------|
| **Hours worked** (`time_spent`) | Cumulative time logged on the issue |
| **Labels** | Labels applied to the issue, including your R&D label if used |
| **Project start date** | Start date of the capability linked to the issue |
| **Project end date** | End date of the capability linked to the issue |
| **Project, Description, Assignee, etc.** | Standard fields already available on any issue export |

## Points to Note

Exported hours are **cumulative per issue**, not logged as a daily attendance journal: this is not a clock-in/clock-out timesheet system, but an activity report based on time already tracked in the tool. The export does not compute amounts in euros, hourly rates, or researcher/technician qualification: these remain to be added outside Sinra, specific to your tax filing.

## Use Cases

- **CIR/CII supporting file**: annual extract of R&D issues with hours and technical description.
- **Time-based billing**: export filtered by project rather than by an R&D label, for client work.
- **Activity reporting**: monthly report by person or by project for internal tracking.
- **Audit or compliance**: isolating issues carrying a specific label tracked over time.
