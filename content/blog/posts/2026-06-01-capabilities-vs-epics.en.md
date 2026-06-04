---

title: "Capabilities vs epics: when word precision changes work precision"
subtitle: "An epic is supposed to group the user stories that contribute to a shared high-level objective. In practice, it is often a catch-all that nobody really knows how to close."
description: "An Agile epic is a vague concept that groups user stories without a clear completion criterion. A capability is a concrete feature with a defined state. The difference is not semantic: it changes how you plan and how you know when you are done."
categories: ["Project Management"]
excerpt: "When is an epic done? The question should have a simple answer. In practice, in most teams, it triggers a long conversation. The epic grows, splits, reopens, migrates from sprint to sprint. That is not a Scrum implementation problem. It is a definition problem."
date: 2026-06-01 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-01-capabilities-vs-epics-featured.svg

---

Open the backlog of any Scrum team that has been working for more than a year. Find the epics. There are probably a dozen, maybe twenty. Some date back two years. A few contain only closed tickets but are still open, because no one decided to close them. Others have a mix of open and closed tickets, with no way to tell whether what is done represents 20% or 80% of the original objective.

If you ask the Product Owner when the epic will be done, you will get a hesitant answer. If you ask what "done" even means for that epic, you will get a conversation.

This is not an organizational problem. It is a definition problem.

## What an epic is supposed to be

An epic, in extended Scrum terminology, is a large user story that must be broken down into smaller user stories in order to be planned and delivered.

The definition is circular: an epic is a user story that is too large. Its size is therefore relative to what the team considers plannable within a sprint. And since team capacities, project complexities, and sprint definitions vary, the definition of an epic varies too.

What an epic typically does not have: a completion criterion defined in advance. It has child user stories. It is done when its user stories are done. But which user stories? All of those created under it? All those that could theoretically contribute to it? The ones that existed when the epic was created?

Nobody really knows. And that is precisely why epics stay open for months or years.

## The problem of the open epic

An epic that never closes communicates nothing about the state of the work.

When a stakeholder asks "where are we with the export feature?", the team opens the corresponding epic and counts the tickets. Twenty closed, seven open. Is that good progress? It depends on the relative weight of the tickets. It depends on whether the seven open ones are details or core parts of the feature. It depends on whether new tickets have been added since the epic was created.

The honest answer is: "We're not really sure." But that is not what the stakeholder hears.

What this produces in teams: a tendency to create proxy metrics (percentage of closed tickets, epic burndown) that give the appearance of tracking without really answering the question. And a tendency to underreport the true work backlog to keep those metrics in a comfortable zone.

## What capabilities do differently

A capability is a concrete product feature. It describes what the product will be able to do once the capability is complete.

The fundamental difference from an epic: a capability has a completion definition that can be evaluated independently of the tickets that compose it.

"CSV export for reports" is a capability. It is done when the user can export their reports in CSV format from the interface. That criterion can be defined before even creating the first ticket. It can be validated without opening the backlog.

"Improving the user experience of the reports page" is a classic epic. When is it done? It depends on what was decided, what was delivered, what is considered sufficiently improved. The answer changes depending on who you ask.

## The right level of abstraction

A capability lives at a level of abstraction that matches how users and stakeholders think about the product. Not at the level of the technical ticket, not at the level of a multi-year strategic objective - at the level of the visible, usable feature.

This level is more useful for planning than an epic, for several reasons.

**It is estimable in a meaningful way.** "How long to deliver the CSV export?" is a question a team can answer with a reasoned range. "How long for the Reports Improvement epic?" produces an answer that varies depending on what you include in the epic.

**It is communicable externally.** "The next release includes CSV export, email notifications, and role management" is a sentence that management, sales, and users can understand. Epics generally do not lend themselves to this level of communication.

**It has a binary state.** A capability is either delivered or not. It can have sub-states (in development, in review, in testing), but its final state is binary. An epic can be "partially done" indefinitely.

## The impact on planning

In medium-term planning - roadmaps, product vision over two to four quarters - capabilities are the natural unit of work.

"In Q3, we deliver capabilities X, Y, Z. In Q4, we start W and V." That sentence is concrete, communicable, and allows you to manage dependencies and priorities.

The same planning with epics produces either too high a level of abstraction (giant epics covering months of work without precise definition) or too low a level (dozens of epics requiring a complex taxonomy to be understood as a coherent plan).

The granularity of capabilities corresponds to the granularity of planning decisions. That is why this level is useful.

## What capabilities reveal about dependencies

An important property of well-defined capabilities: they make dependencies visible.

"The CSV export depends on the Reports Management capability, which must be delivered first." This dependency is clear because capabilities are concrete features with defined interfaces.

Dependencies between epics are often implicit and discovered too late. You realize mid-sprint that the user stories in epic B assume the user stories in epic A are done, which they are not.

When capabilities are defined with a clear completion criterion, dependencies emerge naturally during planning, not during implementation.

## The renaming trap

It would be tempting to conclude: let's just rename our epics to capabilities and everything will be fine.

That is not how it works. The name changes something in how you think about the object, but only if the definition changes with it.

An epic renamed to capability but still defined vaguely, without a completion criterion, without a stable scope, is just an epic with a new name.

What really changes when you move from epics to capabilities:

The question asked at creation changes. "What is the user-level feature this represents? How do we know when it is done?" These questions, asked consistently, change the nature of the objects being created.

The closing criterion changes. A capability closes when the feature is delivered and validated, not when all its tickets are closed. The distinction matters: you can have closed tickets and a feature not yet validated, and open tickets for future improvements that do not block the delivery of the main feature.

The link with the release changes. A capability is either in the release or it is not. Epics often end up partially spanning several releases, which makes tracking ambiguous.

## The organizational dimension

The move from epics to capabilities says something about the relationship between product and engineering.

The epic, in its original conception, is a Product Owner artifact. User stories are broken down by the team. The epic often stays on the product side.

The capability is a shared artifact. It must be understandable by product (it is a user feature), by engineering (it is a technical scope with implementation implications), and by stakeholders (it is something the product will be able to do).

This shared nature forces closer collaboration during definition. It produces more precise artifacts because they have been challenged from multiple perspectives before being planned.

---

The vocabulary you use to describe your work structures how you plan, how you communicate, and how you know when you are done.

Capability is not just another word for epic. It is a promise of precision: knowing what the product will be able to do, and knowing when that is true.
