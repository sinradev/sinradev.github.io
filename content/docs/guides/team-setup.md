---
title: "Team Setup"
description: "Configure teams, roles, and availability rates accurately. Sinra's capacity system is only as good as the team data it runs on."
date: 2024-01-01
weight: 20
---

## Teams in Sinra

A team is a group of users who work together. Users belong to exactly one team per organization. This constraint keeps workload calculations clean: there is no double-counting of capacity when a developer appears in two teams.

## Creating a Team

1. Go to **Teams**
2. Click **New Team**
3. Give the team a name (Backend, Frontend, QA, etc.)
4. Add members

Each team gets an auto-generated avatar based on its name.

## Roles

Four roles are available per organization:

| Role | Capabilities |
|------|-------------|
| **Developer** | Create and update issues, log time |
| **Reporter** | Create issues, create testings, comment |
| **Manager** | Everything above, plus manage releases and cycles |
| **Admin** | Full organization access including billing and settings |

Assign the lowest role that gives each member what they need. Reporters who do not write code should not have Developer access.

## Developer Types

Developers have a sub-type that affects workload grouping:
- **Backend**
- **Frontend**
- **Fullstack**

Cycle workload views group by developer type, so you can see backend vs frontend load separately.

## Availability Rates

This is the most important configuration in Sinra. Every capacity calculation depends on it.

Set each member's `target_capacity` to reflect their actual availability for this project:

| Situation | Rate |
|-----------|------|
| Full-time, no other projects | 80-100% |
| Part-time or split projects | 40-60% |
| Occasional contributor | 20-30% |

Do not set rates optimistically. If someone is genuinely at 80% but you set them at 100%, every cycle will appear under capacity until you see overruns at delivery.

## Updating Rates Mid-Project

If a team member changes their availability (starting a new parallel project, going on leave, returning from leave), update their rate in team settings. Sinra recalculates future cycle capacity immediately. Past cycles keep their historical data.

## Seat Limits

The number of members you can add depends on your subscription plan. Sinra shows remaining available seats in the team settings. Contact support if you need to increase your seat count.

## Inviting Members

Members receive an email invitation when added to a team. They must accept the invitation and create their account before they appear as assignable users in issues and cycles.
