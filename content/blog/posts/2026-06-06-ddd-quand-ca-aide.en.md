---

title: "DDD in Practice: When It Helps, When It's Just Noise"
subtitle: "Domain-Driven Design is one of the most influential concepts in software engineering over the past twenty years. It is also one of the most frequently misapplied and overused."
description: "Domain-Driven Design delivers real value in certain contexts. In others, it adds complexity with no benefit. Understanding the difference saves years of ceremony for ceremony's sake."
categories: ["Development Productivity"]
excerpt: "The team spent three weeks modeling the bounded contexts, aggregates, and domain events of their content management application. The application does CRUD on five tables. That is the sign that DDD is being used as an end in itself, not as a tool."
date: 2026-06-06 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-06-ddd-quand-ca-aide-featured.png

---

Domain-Driven Design emerged from Eric Evans's book in 2003. It took twenty years to go mainstream - perhaps because the book is dense, perhaps because a certain volume of complexity is needed to see its value, perhaps because the rise of microservices was needed for its domain decomposition concepts to find their natural context of application.

Today, DDD is everywhere in architecture conversations. Bounded contexts, aggregates, domain events, ubiquitous language, context maps - these terms appear in design docs, READMEs, and job postings. And like any concept that has become popular, it gets applied both in contexts where it delivers real value and in contexts where it only adds complexity with no benefit.

## What DDD Actually Solves

To understand when DDD is useful, you need to understand what problem it is trying to solve.

The problem DDD addresses: the drift between the mental model of business experts and the technical model implemented by developers. When these two models diverge, communication becomes difficult, misunderstandings multiply, and the code ends up implementing business rules that no one in the organization truly recognizes.

DDD proposes a multi-part solution: align the terms used by developers and business experts (ubiquitous language), decompose the system into coherent domains with explicit boundaries (bounded contexts), and model each domain to faithfully reflect its business rules (domain model).

This solution has genuine value in a specific context: when the business domain is complex, when business rules are numerous and interdependent, and when business experts play an active role in defining the system.

## When DDD Delivers Value

Contexts where DDD provides clear value:

**Financial and insurance systems.** These domains have extremely complex business rules: calculation rules that depend on dozens of variables, strict invariants on data consistency, sequential processes with clearly defined states. Precise modeling of aggregates and domain events is directly useful here.

**Systems with multiple distinct domains that evolve independently.** An e-commerce platform has a catalog domain (products and their attributes), an order domain (the purchase process and state management), and a delivery domain (logistics). These domains have different rules, different experts, and different evolution cycles. Separating them into bounded contexts makes each team more autonomous.

**Systems with multiple teams that need to collaborate.** When several teams work on parts of the same system, bounded contexts define team boundaries and the interfaces between them. This is a direct application of Conway's Law.

**Domains where semantics are critical.** In some domains, the same word has different meanings depending on context. "Client" means something different in the commercial domain (a contractual relationship) and in the technical domain (a network connection). Ubiquitous language forces these ambiguities to be clarified.

## When DDD Creates Unnecessary Complexity

Contexts where DDD is counterproductive:

**Simple CRUD applications.** A contact management application, a blog, a simple invoicing tool - these systems have low-complexity domains, limited business rules, and often small teams. Adding aggregates, repositories, and domain events to implement basic read and write operations produces more verbose code with no benefit.

**Startups in discovery phase.** When the product changes radically every month, carefully modeling bounded contexts is an investment that becomes obsolete before it pays off. Flexibility is more valuable than model precision in this context.

**Small teams.** DDD assumes intensive collaboration between developers and business experts, event storming sessions, and modeling workshops. These practices have a cost in time and organization. For a team of three developers, that cost is disproportionate.

**Technical domains without business logic.** An infrastructure service, a proxy, a logging system - these components have no "domain" in the business sense of the term. Applying DDD to purely technical components is a category error.

## Event Storming Without the Reason

Event storming - the collaborative modeling technique developed by Alberto Brandolini - is one of the most useful DDD practices when applied correctly.

Its premise: bring developers and business experts together to model the events that occur in the domain, starting from outcomes (the events) rather than from structures (the entities). This approach reveals implicit processes, hidden rules, and communication ambiguities.

The problem: event storming is often practiced without business experts. The technical team runs an event storming session among themselves to "model the domain." In doing so, they model their own understanding of the domain - which can diverge significantly from reality.

An event storming session without business experts produces an elaborate model of assumptions. That is not useless, but it is far from the original promise.

## Ubiquitous Language in Practice

One of DDD's most valuable concepts is also one of the simplest: using the same terms in code and in business conversations.

This principle has direct value even without adopting the rest of DDD. When the code uses "Customer" and the business talks about "Client," every conversation produces an implicit translation that creates opportunities for misunderstanding.

Ubiquitous language can be adopted lightly: maintain a glossary of business terms, verify that the code uses these terms, correct divergences when they appear. No bounded contexts or aggregates are needed to benefit from it.

This may be the most directly applicable lesson of DDD for teams that are not building complex systems.

## The Confusion Between Tactical and Strategic DDD

DDD is often presented as a coherent set of practices. In reality, there are two levels that apply in different contexts.

Strategic DDD (bounded contexts, context maps, domain discovery) is useful for any team building systems with multiple distinct domains. It helps decompose the system and define responsibility boundaries. Its cost is moderate and its benefits are broad.

Tactical DDD (aggregates, value objects, domain events, repositories) is a set of implementation patterns useful for domains with complex business rules. Its cost is higher: it requires developers to become familiar with the patterns and demands significant implementation discipline. Its benefits are real but only in the domains that genuinely need it.

Most teams that "do DDD" apply the tactical patterns everywhere, including in parts of the system that do not need them. They get the complexity without the benefits.

The measured approach: apply strategic DDD broadly to clarify boundaries, and reserve tactical DDD for the bounded contexts where business complexity truly justifies it.

## What DDD Teaches Even When You Don't Adopt It

Even for teams that do not formally practice DDD, the central concepts have pedagogical value.

The question "what is the domain of this component?" is a good question to ask about any architecture. It forces thinking in terms of responsibility and coherence, not just technical structure.

The question "are developers and business experts using the same words for the same things?" often reveals deep misunderstandings that no code review would have caught.

The question "what are the important events in this domain?" is a way of thinking about the system in terms of flow rather than static structures, which is often closer to business reality.

These questions are worthwhile even if you are not building aggregates.

---

DDD is a powerful tool in complex domains. Like all powerful tools, it is counterproductive when applied without discernment.

The decision criterion is simple: does the complexity of the domain justify the investment in tactical patterns? If the domain has simple and limited business rules, the answer is no. If the domain is complex, multi-actor, and constantly evolving, the answer is probably yes.

Everything else is ceremony for ceremony's sake.
