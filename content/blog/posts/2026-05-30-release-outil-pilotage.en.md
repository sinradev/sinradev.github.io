---

title: "A release is not a packaging: it's a management tool"
subtitle: "Most teams treat a release as a delivery event. A version number, a deployment, a changelog. That means missing everything it can do for how work is organized."
description: "A well-designed release is not just a packaging of delivered features. It is a commitment, a scope boundary, and a communication tool toward the team and stakeholders. Here is how to change the way you use them."
categories: ["Project Management", "Development Productivity"]
excerpt: "How many times have you seen a release turn into a catch-all of half-finished features, last-minute fixes, and tickets migrated from three previous sprints? The release has lost its meaning because it is only used as a delivery container, not as a management tool."
date: 2026-05-30 00:00:00 +0100
featured_image: /assets/images/blog/2026-05-30-release-outil-pilotage-featured.svg

---

There is a characteristic moment in many tech teams: release day. The team opens Jira or Notion, searches for all tickets marked "done," assembles a list, writes a changelog in twenty minutes, and pushes the code to production. Version number incremented. Task done.

What was just described is not a release. It is a packaging. And the difference between the two determines whether your team can steer its work or whether it is driven by its backlog.

## What a release is supposed to represent

A release, at its core, is a commitment. It says: here is what we are delivering, here is what we are not including, here is when we are doing it.

This commitment has three dimensions that teams often forget.

**Scope.** A release defines what it contains. Not by accident, by collecting whichever tickets happen to be finished at deployment time. Deliberately, by deciding in advance which features belong to this version and which ones wait for the next.

**The boundary.** A release also defines what it does not contain. This is the hardest part. Saying "this release includes X, Y, and Z" means saying "this release does not include W, even if W is almost done." This discipline is what distinguishes a planned release from an unstructured continuous deployment.

**The signal.** A release sends a signal outside the team: to users, to stakeholders, to the organization. That signal has value precisely because it is deliberate. A list of closed tickets is not a signal. It is an archive.

## Why the release became just a deployment

Several factors progressively drained the release of its substance.

**Continuous deployment.** With CI/CD, you can deploy on every commit. This is a good thing for technical delivery. It had the side effect of completely decoupling the concept of release (scope commitment) from the concept of deployment (technical operation). Teams often kept continuous deployment but lost the discipline of scope.

**Sprint pressure.** In Scrum teams, the cadence is defined by the sprint. The release often becomes synonymous with the end of the sprint: deliver what is done, then start again. The release loses its value as a planning tool and becomes a mechanical reflection of passing time.

**Fear of delay.** When a release is defined by its content, postponing unfinished features becomes visible and painful. When it is defined by its date, you can include anything that is done and silently exclude what is not. Visibility decreases, but so does the pressure.

## A release as a scope commitment

The way to restore value to the release is to redefine it as a scope commitment rather than a deployment event.

Concretely: at the end of a planning cycle, the team defines what the next release will contain. Not a list of tickets. A list of capabilities: the high-level features that this version of the product must deliver.

This list is a commitment. Not a rigid contract that no one can modify, but a clear intention that everyone can read, understand, and challenge if something changes.

What this changes in practice:

Prioritization conversations become more direct. "Does this capability go into the next release or the one after?" is a clear question. It forces a decision. It produces a usable answer.

Load estimates become more meaningful. If the release contains three capabilities and you know how much work each represents, you can have a realistic conversation about whether the scope is achievable within the planned timeline.

Scope changes become visible. When a new request arrives mid-release, the question is no longer "how do we fit this into the next sprint" but "do we add it to the current release by removing something else, or do we add it to the next release?" The choice is explicit.

## The release as a communication tool

One of the most underused values of a release is its function as communication to those outside the development team.

Stakeholders, users, sales and support teams need to know what is going to change in the product. Not at the individual ticket level, but at the level of visible functionality.

A well-defined release makes it possible to produce clear and predictable communication. "Version 2.4 will launch in July. It will bring the notification system, CSV export for reports, and new role permissions." That sentence is understandable by someone who does not read the backlog. It creates manageable expectations.

The same information expressed in terms of closed tickets is not communicable. "This release includes 47 tickets" means nothing to anyone outside the technical team.

## The risk of a fixed scope

The question that always comes up: if we define scope in advance, how do we handle the inevitable changes along the way?

The answer lies in how you define the scope. A release defined in capabilities (high level) is more stable than a release defined in tickets (low level). Capabilities can absorb implementation changes without modifying the high-level commitment.

If a capability is substantially modified during a release - because a technical constraint was discovered, because the user need evolved, because the priority changed - that is a scope change. It must be treated as such: an explicit decision, communication to stakeholders, updating the release definition.

This is not rigidity. It is transparency. The difference between "we changed direction" and "we're not really sure where we stand."

## The changelog as a value document

A symptom of the problem: the way most teams write their changelogs.

The typical changelog is auto-generated from commits or closed tickets. It contains entries like "Fix #847," "Refactor authentication module," "Update dependencies." It is accurate. It is useless to anyone who has not worked on the code.

A good changelog speaks in terms of value, not implementation. "Users can now export their reports in CSV format from any view." "The project list loading time has been reduced by 60%." "Role permission management is now available on all plans."

That changelog cannot be auto-generated. It has to be written. And it is precisely because it is written that it has value: the effort of writing it forces the team to think in terms of impact, not activity.

## Semantic versioning or calendar versioning?

A recurring debate: how to number releases?

Semantic versioning (semver: major.minor.patch) has a logic specific to libraries and public APIs. It communicates the nature of changes: breaking changes, new features, fixes. It is useful for technical dependencies.

For a user-facing product, calendar versioning (2026.05, 2026.06) is often more useful. It anchors the release in time, facilitates external communication, and avoids debates about what constitutes a "major" or "minor" change.

What matters more than the numbering scheme: consistency. A team that changes conventions with every release is not communicating. A team that maintains a consistent scheme, whatever it is, creates a usable reference.

## Releases and cycles

A common source of confusion in teams that use time-based iterations: the difference between a cycle and a release.

A cycle is a period of time. It structures the rhythm of work, synchronization rituals, the cadence of planning and retrospectives.

A release is a scope of features. It can cover a single cycle, multiple cycles, or even part of a cycle.

Both concepts are useful, but for different reasons. Conflating them produces the classic situation: the release becomes synonymous with the end of the sprint, with all the rushing and poorly defined scope that entails.

A cleaner architecture: cycles structure how the team works. Releases define what it delivers. The two can operate on different cadences.

## What a release reveals about team maturity

The way a team defines and manages its releases is a fairly reliable indicator of its maturity in terms of product management.

A team that treats releases as deployment events has no visibility over what it is delivering. It can tell you how many tickets were closed. It cannot always tell you whether the product is heading in the right direction.

A team that treats releases as scope commitments has an ongoing conversation about value. It knows what it committed to deliver, why, and for whom. It can adapt that scope deliberately when conditions change.

---

A release is not a closing ceremony. It is a thinking tool about what you are building and why. Restoring that function gives the team a way to steer its work rather than be steered by it.
