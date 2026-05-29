---
title: "Getting Started"
description: "Set up your Sinra organization in under 30 minutes. This guide walks through organization creation, team setup, and your first release from scratch."
date: 2024-01-01
weight: 10
---

## Before You Start

You will need:
- A Sinra account (sign up at [app.sinra.dev](https://app.sinra.dev/users/sign_up))
- Names and emails of team members to invite
- A rough sense of what you are building (one release name is enough)

## Step 1: Create Your Organization

When you first sign in, Sinra prompts you to create an organization. This is your isolated workspace. All data, teams, and projects belong to this organization.

Set:
- **Organization name**: your company or project name
- **Language**: English, French, or Spanish (sets the default for all members)

## Step 2: Create Teams

Go to **Teams** and create at least one team. Teams group the people who work together on the project.

For each team member:
1. Click **Invite member**
2. Enter their email
3. Set their role (Developer, Reporter, Manager, Admin)
4. Set their **availability rate** (0-100%)

The availability rate is important. A developer at 100% is full-time on this project. A developer at 50% works half-time. This feeds every capacity calculation in Sinra, so set it accurately from the start.

## Step 3: Create a Project

Go to **Projects** and create your first project. A project groups capabilities that share a strategic purpose.

You can create one project to start and add more later as your product grows.

## Step 4: Create Capabilities

Inside your project, create capabilities for the features you plan to build. Keep them concrete: "User authentication", "Dashboard", "CSV export" rather than "Improve the product experience."

Each capability should be something you can look at in 3 months and say definitively: shipped or not shipped.

## Step 5: Create a Release

Go to **Releases** and create your first release. Set:
- **Name**: v1.0, 2024.Q1, or whatever fits your versioning
- **Target date**: when you plan to ship
- **Target capacity**: days of work you are committing (you can update this later)

## Step 6: Assign Capabilities to the Release

Go to the **Backlog** view. Drag the capabilities you created into your release. Watch the capacity indicator as you add more. If it turns red, you have more scope than capacity.

Make hard calls here, not during the last sprint.

## Step 7: Create Your First Cycle

Go to **Cycles** and create a cycle with a start date and end date. Sinra automatically calculates the cycle capacity from business days and team availability.

A cycle is typically 1 to 4 weeks. Start with 2 weeks if you are not sure.

## Step 8: Assign Issues to the Cycle

Open the issue list. Filter by your release. Assign issues to your cycle by editing the **Cycle** field on each issue.

Watch the cycle workload view to ensure no single developer is over-allocated.

## You Are Ready

With a team, a release, a backlog of capabilities, and issues planned into a cycle, Sinra is running. The home view shows your current cycle with progress indicators.

From here:
- Track daily progress in the cycle view
- Log time on issues
- Add QA test cases on capabilities as features complete
- Close the release when it ships and review the retrospective
