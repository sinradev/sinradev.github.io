---

title: "Definition of Done: the illusion of \"it's finished\""
subtitle: "\"It's done\" is probably the most used and least reliable phrase in software development. Between merged code and a feature truly delivered to users, there is a gap that many teams never measure."
description: "The word \"done\" hides a costly ambiguity: merged code, deployed to staging, in production, tested, documented, monitored. Without an explicit definition of \"finished\", teams accumulate half-delivered features that block, slow down, and create invisible debt."
categories: ["Project Management", "Quality"]
excerpt: "The ticket moves to \"Done\". Everyone moves on. Three weeks later, you discover the feature was never deployed to production, integration tests weren't updated, and nobody set up monitoring. It was done, really?"
date: 2026-06-30 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-30-definition-of-done-illusion-fini-featured.png

---

There is a precise moment when work becomes invisible. Not when it starts, not when it ends. It's in the gap between the two - in everything that stays "almost done" without ever being truly delivered.

In many teams, "done" means different things depending on who you ask. For the developer, it often means "the code is merged." For the lead, it means "tests pass." For the manager, it means "the ticket is closed." For the user, it means "the feature works in production."

These definitions aren't incompatible. They're just incomplete. And this silent incompatibility is expensive.

## Why "done" is the most ambiguous word in development

Take a concrete example. A team is working on a CSV export feature. The developer finishes the implementation on Thursday. They open a pull request, it gets reviewed and merged on Friday. The ticket moves to "Done."

What happened between the merge and what the user can actually use?

The feature isn't deployed to staging for validation yet. End-to-end tests weren't updated to cover the new behavior. There's no monitoring alert if the export silently fails in production. User documentation wasn't updated. And the production deployment is waiting for the next cycle.

The ticket is "Done." The feature isn't delivered.

This drift is normal. It's not the sign of a bad team. It's the sign of an implicit, shared definition of what "finished" means - one that stops too early.

## Work-in-progress states are expensive

The real problem with "almost done" features isn't cosmetic. It's structural.

**They block other features.** A merged but undeployed feature can create conflicts, block parallel branches, make tests harder to interpret. The longer a feature stays in this intermediate state, the more friction it creates for everything that follows.

**They generate invisible finishing debt.** Untouched tests, missing documentation, absent monitoring: it all accumulates. Each passing week makes finishing harder because context fades and priorities shift.

**They distort progress tracking.** If twenty tickets are in "Done" but ten of them aren't in production, the actual delivery progress is well below what the board shows. Decisions made based on this state are decisions made on false information.

**They erode trust.** When stakeholders ask "is this available?" and the answer is "it's done but not deployed yet," confidence in estimates and commitments deteriorates.

## What a real Definition of Done contains

A Definition of Done (DoD) is an explicit team agreement on what "finished" means for any unit of work - an issue, a capability, a feature.

It isn't universal. Each team must define theirs based on their context, practices, and what they deliver. But a solid DoD generally covers these levels:

**Code complete:**
- Code is written and corresponding unit tests pass
- A pull request is open and reviewed by at least one other developer
- Review comments are addressed and the PR is merged

**Quality validated:**
- Integration tests are updated to cover the new behavior
- Regression tests pass
- A manual test of the feature was done in the staging environment

**Deployed:**
- The feature is deployed to staging and validated
- The feature is deployed to production
- A rollback is possible if needed

**Observable:**
- Metrics or logs allow verifying the feature works as expected in production
- An alert exists if the feature fails silently

**Documented:**
- User documentation is updated if the feature is user-facing
- Technical documentation is updated if API or system behavior changes

This may seem like a lot. That's precisely the point: making visible everything that was invisible in a simple "it's merged."

## The temptation of softening

When a team establishes a DoD, pressure to soften it begins almost immediately.

"We don't have time to update docs for this feature." "We'll set up monitoring later." "End-to-end tests we'll do next iteration."

These one-off compromises become habits. The habit becomes the new implicit norm. And the carefully defined initial DoD becomes a document rarely consulted and followed even less.

The problem isn't softening the DoD in exceptional cases. It's doing so without explicitly acknowledging it.

When a team decides to ship something that doesn't fully satisfy its DoD, it should do so consciously: explicitly creating issues for the finishing debt, integrating them into the next cycle, and communicating clearly about what is delivered and what isn't yet.

The difference between a managed exception and an entrenched habit is traceability and awareness.

## DoD at different levels

The Definition of Done doesn't only apply to individual issues. It can and should apply at different levels of work.

**At the issue level:** the criteria listed above. The work unit is done when all boxes are checked.

**At the capability level:** a capability is done when all its constituent issues satisfy their individual DoD, and when the capability as a whole has been validated end-to-end in the production environment.

**At the release level:** a release is done when all planned capabilities satisfy their DoD, when release notes are published, and when stakeholders have been informed of what's available.

This cascade of definitions gives each level a clear, honest view of real progress.

## The link between DoD and work cycles

The Definition of Done has a direct relationship with how a team structures its work cycles.

A team working in short cycles - two weeks or less - has a natural imperative for a strict DoD. If each cycle must produce something deliverable, it's impossible to end a cycle with half-finished features. The pressure of the cycle forces completion.

A team working on longer horizons can accumulate more work-in-progress before finalizing. This isn't necessarily bad, but it requires greater discipline to prevent "almost done" from piling up.

In Sinra, issues have explicit statuses that reflect their real progression - not just "in progress" and "done," but the intermediate steps that correspond to the reality of the work. Releases define what's actually delivered in a version. Capabilities allow tracking whether a high-level feature is truly complete or still waiting on parts.

This clarity of statuses at every level is the DoD in practice: an agreement on what each state means, visible to the whole team.

## How to establish a DoD in a team

A DoD shouldn't be imposed from outside. It should be built by the team that will follow it, because the team knows best what "finished" needs to mean in their context.

A simple workshop is enough. The team lists everything that must be true for a feature to be considered truly delivered. Items are debated, consolidated, prioritized. The result is a short document - a checklist - that becomes the shared reference.

The DoD should be reviewed regularly. What constitutes "done" evolves with team practices, tools, and product requirements. A DoD written six months ago may no longer reflect today's reality.

---

The word "done" deserves precision. Not for bureaucracy's sake, but because precision about what "finished" means is a prerequisite for trust: the team's trust in its real progress, stakeholders' trust in deliveries, and trust in decisions made based on the state of work.

A ticket in "Done" that isn't in production isn't done. A CSV export that works in staging but has no production monitoring isn't done. A feature without updated documentation isn't done.

Defining what "done" means, explicitly and collectively, is one of the most valuable investments a team can make.
