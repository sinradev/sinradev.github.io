---

title: "Conway's Law: why your architecture looks like your org chart"
subtitle: "There is a law in software that predicts the shape of your systems with unsettling accuracy. It says nothing about code or technical patterns. It is about how your teams communicate."
description: "Conway's Law states that systems built by an organization mirror its communication structure. Understanding this law changes how you approach software architecture: sometimes, before changing the code, you need to change the organization."
categories: ["Architecture", "Organisation"]
excerpt: "Three teams work on the same product: a frontend team, a backend team, a mobile team. Six months later, the system has exactly three distinct layers with defined interfaces between each. Nobody designed it that way explicitly. That is Conway's Law."
date: 2026-06-28 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-28-conways-law-architecture-org-featured.png

---

In 1967, Melvin Conway published an article in Datamation magazine. He formulated an observation that reads almost like a law of physics applied to organizations:

"Organizations which design systems are constrained to produce designs which are copies of the communication structures of those organizations."

At the time, the article was rejected by the Harvard Business Review as too obvious. Fred Brooks later cited it in *The Mythical Man-Month* and gave it the name Conway's Law. Decades of industry experience since then have confirmed its unsettling accuracy.

## What the law actually says

Conway's Law is not a metaphor. It is a structural constraint.

When a team designs an interface between two components, it implicitly reflects the boundary between two groups of people. If those two groups rarely talk, the interface will be rigid, poorly defined, or overloaded with parameters to handle all the cases nobody had time to synchronize on. If those two groups work side by side, the interface will be fluid, well-adjusted, and easy to evolve.

The communication structure of an organization gets etched into the architecture of the systems it produces. Not intentionally. Naturally.

## Concrete examples

Take a team divided by technical layer: a frontend team, a backend team, a database team. In six months, the system will have a clear three-layer architecture, with APIs between each layer shaped by the contact points between teams. This is not a coincidence. It is a direct translation of who talks to whom.

Another example: a company with an iOS team, an Android team, and a Web team will produce three separate applications with diverging user experiences and backend APIs that reflect each platform's needs in isolation - even if the product is supposed to be coherent.

Conversely, a company that organizes its teams around business domains - a payments team, a catalog team, a delivery team - will naturally produce an architecture that reflects those domains. Each team owns its service, its data, its deployment. The architecture emerges from the organization.

## The microservices trap

Conway's Law explains one of the most common failures in microservices adoption.

Organizations decide to migrate to a microservices architecture because it is best practice, scalability, flexibility. They split their monolith into dozens of services. But they do not change their organization. The same teams, organized the same way, keep working together the same way.

The result: a distributed monolith. Services call each other synchronously, changes require coordinating multiple teams, deployments are coupled. All the operational cost of microservices, none of the benefits.

The problem is not technical. It is Conway's Law expressing itself: the architecture always reflects the real communication structure, not the one the architecture diagram would like to show.

## The Inverse Conway Maneuver

If Conway's Law says organization determines architecture, then the converse is actionable: to get a target architecture, change the organization first.

This is what Martin Fowler and others have called the Inverse Conway Maneuver. Instead of designing the architecture and hoping the organization will adapt to it, you structure teams to match the desired architectural boundaries, and let the architecture emerge naturally.

If you want a domain-oriented architecture, form teams around those domains. Give them full ownership of their scope - code, data, deployment, on-call. Do not make them depend on other teams to ship their work. The resulting architecture will exactly reflect those boundaries.

This is counter-intuitive. We tend to think we draw the architecture first, then organize people to implement it. Conway's Law says that is the wrong order.

## Team size matters too

Conway's Law also applies to granularity. A team of three people cannot maintain twenty independent services. The number of services an organization can healthily maintain is constrained by the number of distinct communication silos it has.

Jeff Bezos with his two-pizza rule (a team should not require more than two pizzas to be fed) was intuitively touching this principle: small teams with clear scopes produce components with clear scopes.

Organizations that create too many services relative to their team size end up with services nobody truly owns, blurry boundaries, and coordination overhead that drains delivery speed.

## What this changes in practice

When an architectural problem arises - excessive coupling between services, poorly defined interfaces, constant team coordination to ship a feature - the first question to ask is not technical. It is: "Which teams need to talk to each other for this change to happen?"

If the answer is "three different teams need to coordinate for every deployment," the problem is not in the code. It is in the organizational structure.

The durable solution comes from reorganizing ownership boundaries, not from new architecture patterns.

## Conway's Law and Sinra

For teams using Sinra, Conway's Law has a direct implication for how work is organized.

Capabilities and releases make more sense when they correspond to real team scopes. A capability that requires coordinating five teams to ship is often a signal that organizational boundaries do not match the functional boundaries of the product.

Organizing cycles per team - each team manages its own issues, its own testings, its own releases within its domain - produces a system where velocity is real and measurable. Not diluted by cross-team dependencies that slow everyone down.

Conway's Law is not a fatality. It is a diagnostic. When architecture becomes a problem, looking at team structure is often the most honest starting point.

---

Conway's Law was formulated nearly sixty years ago. It remains one of the most useful observations about how organizations produce software. Not because it is pessimistic about human capability - but because it acknowledges that communication has a cost, and that cost always shows up somewhere in the system.
