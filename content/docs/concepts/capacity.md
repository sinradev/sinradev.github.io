---
title: "Capacity Management"
description: "Sinra's capacity system makes the fundamental project equation visible: what you want to deliver vs. what your team can actually do. Learn how availability rates, cycle capacity, and workload calculations work."
date: 2024-01-01
weight: 50
---

## The Core Idea

Most project management tools let you add issues without limit. You end up with a backlog that is larger than any team could ever deliver, and planning becomes guesswork.

Sinra does the opposite. Every piece of work has a time estimate. Every team member has an availability rate. Every cycle has a calculated capacity. The system makes the gap between ambition and reality visible before you commit.

## Availability Rates

Each team member has a `target_capacity` between 1% and 100%.

- 100%: full-time on the project
- 50%: half-time (part-time, split across projects, etc.)
- 80%: accounts for meetings, code reviews, and overhead

These rates are set in team configuration and reflect reality, not aspiration.

## Cycle Capacity Calculation

When a cycle is created with start and end dates, Sinra calculates its capacity automatically:

```
Cycle capacity = Σ (member_days × availability_rate)
                 for all team members
                 across business days in the cycle
```

A 10-day cycle with:
- Alice at 100%: 10 days
- Bob at 50%: 5 days
- Carol at 80%: 8 days

Gives a total cycle capacity of 23 days.

This number is fixed. You cannot plan more work into a cycle than its capacity allows without seeing the overload.

## Workload Tracking

Within a cycle, Sinra tracks workload per member:
- **Estimated**: total issue estimates assigned to this member
- **Spent**: actual time logged
- **Remaining**: estimated minus spent

The cycle workload view shows all members at once, making it immediately visible if one developer is overloaded while another has capacity.

## Release Capacity

At the release level, capacity planning works across cycles:
- Total estimated time for all issues in the release
- Spread across the cycles where those issues are planned
- Compared against total available team capacity in those cycles

This surfaces over-commitment at the release level, not just the cycle level. You can see, before starting work, whether the release scope is realistic.

## Why This Matters

The capacity system is what separates planning from wishful thinking.

Without it, you discover the problem at the end of the sprint when half the tickets are still open. With it, you see the problem during planning and can make a real decision: cut scope, add capacity, or extend the timeline. The choice is explicit rather than discovered under pressure.
