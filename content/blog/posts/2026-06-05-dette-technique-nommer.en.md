---

title: "Technical Debt: Name the Debts Rather Than \"Paying Them Off\""
subtitle: "Every tech team talks about paying off technical debt. Few teams know exactly which debts they're talking about. That imprecision is the first obstacle to serious management."
description: "Technical debt is often treated as an undifferentiated mass to reduce. Managing it seriously requires naming it precisely: which debt, created when, for what reason, with what current impact."
categories: ["Development Productivity", "Project Management"]
excerpt: "\"We need a technical debt sprint.\" This phrase is spoken in hundreds of teams every quarter. What happens next: two weeks of refactoring without clear direction, whose value is impossible to communicate to management, and which doesn't fundamentally change the most painful problems."
date: 2026-06-05 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-05-dette-technique-nommer-featured.svg

---

Technical debt is a financial metaphor. Ward Cunningham introduced it to explain that certain quick but imperfect implementation choices create a future obligation: either you fix them later, or you pay interest in the form of slowdowns and growing complexity.

The metaphor is useful. It suffers from one problem: like many good metaphors, it has become a catch-all category that designates very different things at once, making precise usage nearly impossible.

When a developer says "there's technical debt," what exactly do they mean? The code is old? It's poorly structured? It's hard to understand? It's fragile under change? It uses outdated dependencies? It has no tests? It has tests but they're poor? It works but no one really knows how?

All of these realities are grouped under the same term. And because they're grouped, they're managed the same way: with "payoff" sprints that treat everything at once and tackle nothing specific.

## The Different Forms of Debt

Distinguishing types of debt is the first step toward useful management.

**Deliberate debt.** A consciously made choice: "We'll implement this the hard way now to ship on time, and generalize it when we need to." This is true debt in the financial sense: a loan with intention to repay. It should be documented at the time it's taken on.

**Accidental debt.** Code written in good faith at a time when constraints weren't clear, or best practices weren't yet known to the team. Not deliberate, but not negligence either. It's discovered by working on the codebase.

**Context debt.** Code that was perfectly correct at the time, but became problematic because the context changed: the architecture evolved, performance requirements changed, new regulations impose constraints that didn't exist before. This isn't bad code - it's good code that no longer matches the current reality.

**Obsolescence debt.** Dependencies that no longer receive security updates, languages or frameworks whose ecosystem is shrinking, patterns that are no longer maintainable with available tools. This debt has a security risk component distinct from the others.

**Comprehension debt.** Functional code that nobody fully understands. Maybe it was written by someone who's no longer on the team, or in an unusual style, or with implicit assumptions documented nowhere. Maintaining this code is dangerous not because it's bad but because no one knows what they're touching.

These five types of debt have different impacts, different origins, and different solutions. Treating them the same way is inefficient.

## The Debt Register

The most directly useful practice for managing technical debt is also the most rarely applied: keeping a register.

A debt register is simply a list of known debts with, for each one, minimal information: a precise description, the current impact on productivity or reliability, the reason it exists, and an estimate of the effort to resolve it.

The effort of creating this register immediately reveals two things.

First: debts that everyone "knows" exist but that no one has ever written down. Verbalization forces precision. "There's debt in the authentication module" becomes "The authentication module uses stateful session management that makes horizontal scaling impossible. Origin: early decision due to time constraints. Impact: inability to add instances without prior work. Estimated effort: 2 weeks."

Second: disagreements about what is and isn't debt. Debt is often in the eye of the beholder. What's "messy" to one developer may be "pragmatic" to another. The register forces consensus on what is recognized as a problem.

## Communicating Debt to Management

One of the recurring difficulties in managing technical debt is communication with non-technical stakeholders.

Management hears "technical debt" as "a vague problem developers want to fix" and has no basis for assessing whether it's urgent or cosmetic. Faced with a features backlog clearly tied to user needs, technical debt loses systematically.

A well-maintained debt register changes this dynamic. It makes it possible to translate debt into business impact terms:

"The reports module takes 45 seconds to generate because the queries aren't optimized. Every week, the support team receives 15 tickets from users frustrated by this delay. Resolving this problem takes 5 days and eliminates these support tickets."

This framing is communicable. It has a measurable impact, a cost of inaction, and a cost of resolution. It allows management to make an informed decision, rather than blindly trusting developers who say it's important.

## Intentional Debt as a Delivery Tool

There's a common defensive position in technical debt discussions: developers want perfect code, management wants to ship fast, and debt is always management's fault.

This position is too simple.

Intentional debt is sometimes the right choice. Shipping an imperfect implementation to validate a user need before investing in a robust version is a sensible business decision. Bypassing a performance problem to meet a critical deadline can be justified if the debt is documented and planned for resolution.

What distinguishes good intentional debt from bad accidental debt: documentation at the time of creation and explicit intention to resolve.

Good intentional debt looks like this: "We're hardcoding the payment service configuration because we need to ship before end of month. Debt ticket created: generalize payment service configuration. Prioritized for the next cycle."

Bad accidental debt looks like this: "We shipped fast. The code works. We'll deal with it later." No ticket, no documentation, no explicit intent. "Later" never comes.

## The Debt Sprint Trap

The sprint entirely dedicated to technical debt is a common and often ineffective practice.

It's common because it's visible. "This sprint, we're doing debt" is a simple communication. It reassures developers who see their maintenance work recognized.

It's often ineffective for several reasons.

Feature urgency reclaims its place in the next sprint. If debt isn't reduced continuously, the gains from a dedicated sprint are quickly eroded by the choices of the sprint after.

Without a precise register, the debt sprint lacks direction. Developers tackle what personally bothers them, not necessarily what has the most impact. The module one developer finds "dirty" but that causes no operational problems gets attention. The real bottleneck that no one wanted to touch remains untouched.

The alternative that works better in most teams: allocate a constant percentage of team time to debt in every cycle (often between 15% and 25%), selecting items from the debt register based on their impact.

It's not as spectacular as a dedicated sprint. It's more effective over time.

## What Debt Reveals About Past Decisions

A well-maintained debt register has an unexpected property: it becomes a history of the team's decisions.

Each debt documented with its origin tells something about the context in which it was created. Deadline pressures. Assumptions about growth that didn't pan out. Technologies that seemed promising and weren't. The priorities of the time.

This history is valuable for two reasons. It prevents repeating the same mistakes without having learned from the first time. And it helps new team members understand why the code is the way it is, rather than spending time "fixing" decisions that made sense in their context.

---

Technical debt isn't a problem to be solved once and for all. It's a permanent reality of software development, to be managed continuously and with clear vision.

That clarity starts with precisely naming what you owe. A debt you can describe, measure, and explain is a debt you can manage. An undifferentiated mass of "legacy code" is not.
