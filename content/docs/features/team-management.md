---
title: "Team Management"
description: "Configure teams, roles, and availability rates in Sinra. The accuracy of this data drives the reliability of all capacity calculations."
date: 2024-01-01
weight: 80
---

## Team Structure

A user belongs to exactly one team per organization. This constraint is intentional: it prevents double-counting of capacity when a developer would theoretically be in two teams.

Teams group people who work together on the same issues and cycles.

## Creating a Team

1. Go to **Teams**
2. Click **New Team**
3. Give the team a name (Backend, Frontend, QA, Product, etc.)
4. Invite members by email

Each team gets an auto-generated avatar based on its name.

## Roles

| Role | Permissions |
|------|-------------|
| **Developer** | Create and update issues, log time |
| **Reporter** | Create issues, create testings, comment |
| **Manager** | Everything above, plus manage releases and cycles |
| **Admin** | Full access: billing, settings, configuration |

Assign the minimum role needed. A reporter who does not write code does not need the Developer role.

## Developer Types

Developers have a sub-type that affects grouping in workload views:
- **Backend**
- **Frontend**
- **Fullstack**

The cycle workload view automatically breaks down by type, so you can see whether load is balanced between frontend and backend.

## Availability Rates

The `availability rate` (0-100%) is the most important configuration. All capacity calculations depend on it.

| Situation | Recommended rate |
|-----------|-----------------|
| Full-time, single project | 80-100% |
| Part-time or multi-project | 40-60% |
| Occasional contributor | 20-30% |

Do not be optimistic. A developer genuinely available at 80% configured at 100% will make every cycle look achievable on paper and deficient in practice.

## Updating a Rate Mid-Project

If a member's availability changes (new parallel project, leave, return from leave), update their rate. Sinra immediately recalculates future cycle capacity. Past cycles retain their historical data.

## Invitations

Members receive an email invitation. They must accept and create their account before they appear as assignable users on issues and cycles.

## Seat Limits

The number of members depends on your plan. Available seats are shown in team settings.
