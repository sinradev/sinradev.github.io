---

title: "Water-Scrum-Fall: The Reality of Organizations Wanting to be Agile"
subtitle: "Waterfall for framing and deployment, Scrum for development: the dominant hybrid model in enterprise"
description: "Water-Scrum-Fall is the hybrid model describing reality for many organizations: Waterfall processes for framing and governance, Scrum for development, cascade for deployments and production rollout."
categories: ["Methodology"]
date: 2026-05-06 09:00:00 +0100
excerpt: "Most large enterprises thinking they do Scrum actually do Water-Scrum-Fall: Waterfall for decisions and deployments, Scrum for development in the middle. Understanding this model means understanding how to reconcile agility and governance."
featured_image: /assets/images/blog/2026-04-16-water-scrum-fall-featured.png
---

## What is Water-Scrum-Fall?

**Water-Scrum-Fall** is a term coined by Forrester Research in 2011 to describe an omnipresent pattern in large organizations: they adopted Scrum for development, but retained Waterfall processes for framing upstream and deployments downstream.

The model looks like this:

**Phase 1 (Water): Waterfall framing and planning**
Before teams develop anything, there are months of framing: annual budget definition, committee validation, requirements documentation, vendor selection, contract writing. This process can take 3-6 months.

**Phase 2 (Scrum): Iterative development**
Development teams work in 2-4 week sprints. They deliver iteratively, adapt to feedback, optimize backlog. Everything seems agile... until the end.

**Phase 3 (Fall): Sequential deployment**
Production deployment remains sequential and risky: maintenance windows, weekly CAB (Change Advisory Board), formal acceptance testing, multiple validations. A deployment can take 4-8 weeks more after development is "done".

## Why Water-Scrum-Fall is Omnipresent

This model is not the result of bad intent. It reflects real constraints:

**Budget constraints**: organizations plan and allocate budgets annually. No budget decided mid-year = mandatory Waterfall planning.

**Contractual constraints**: vendor contracts, RFPs, legal commitments require prior scope definition.

**Regulatory constraints**: in regulated sectors (finance, health, government), production deployments require formal validations that cannot be compressed.

**Organizational constraints**: IT governance processes (CAB, architecture committee, security committee) operate weekly or monthly, not in Scrum rhythm.

## The Problems of Water-Scrum-Fall

Understanding the model also means understanding its dysfunctions:

**Value remains blocked**: even if development completes, the feature is not in users' hands during the "Fall" phase. Weeks pass without delivered value.

**Feedback arrives too late**: users cannot give feedback on what is in production. Teams develop "in a vacuum" during intermediate phases.

**Sprints are illusions**: if all major decisions happen in framing phase and deployments are sequential, sprints are really internal mini-Waterfalls.

**Scope debt accumulates**: changes identified during development often must wait for the next annual planning cycle.

## Transforming Water-Scrum-Fall

For organizations wanting to move beyond Water-Scrum-Fall, the most impactful changes are:

**Continuous budgeting**: move from project-based budget to product team budget. Teams have permanent budget and decide priorities themselves.

**Continuous Delivery**: automate deployment pipeline so production releases are frequent, small and reversible. Risk of each deployment decreases.

**Streamlined CAB**: replace weekly CAB with automated controls and lightweight approval process for standard changes.

**Rolling roadmap**: replace rigid annual planning with 3-6 month rolling roadmap revised quarterly.

## Water-Scrum-Fall and Sinra

Sinra adapts naturally to Water-Scrum-Fall. **Releases** allow planning deliverables aligned with governance cycles. **Cycles** represent development sprints. **Capabilities** trace commitments made during framing.

**Statuses** allow distinguishing items in active development from those waiting for validation or deployment, making the Water-Scrum-Fall "tail" visible.

The "Water" framing phase naturally produces a capability list to develop over the year. That is exactly what a Sinra **project** represents: a set of capabilities in Gantt view capturing the long-term vision from framing, without freezing execution details that cycles manage agily afterward.

## Conclusion

Water-Scrum-Fall is neither shameful nor inevitable. It is the realistic transition model most large organizations traverse on their way to true agility. Recognizing it explicitly is the first step to improving it. Teams knowing what model they operate in can identify real constraints and work to gradually reduce them.
