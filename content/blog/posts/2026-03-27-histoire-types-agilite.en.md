---
url: /methodology/2026/03/27/history-types-agility.html
title: "History and Types of Agility: How to Actually Work Better"
subtitle: "From the 2001 Agile Manifesto to modern frameworks: Scrum, Kanban, Shape Up, XP, Lean and beyond"
description: "Discover the history of agility, its 4 core principles, and the different types of agility (Scrum, Kanban, Shape Up, XP, Lean) with clear explanations, concrete examples, and a detailed comparison to choose the right approach."
categories: ["Methodology"]
excerpt: "Agility is not one thing. It's a philosophy born in 2001 with 4 simple values that exploded into dozens of different frameworks. Scrum, Kanban, Shape Up, XP, Lean... Which one fits your team?"
date: 2026-03-27 09:00:00 +0100
featured_image: /assets/images/blog/2026-03-27-histoire-agilite-featured.png
---

## Agility: A Revolution Born of Frustration

Before 2001, there was a major problem in software development. Projects failed.

Teams spent months - sometimes years - writing detailed specs. Planning every detail in a rigid waterfall. Ordering a complete product, then waiting 18 months to deliver it.

And invariably, when the version finally shipped?

**It didn't match what the client needed.**

The market had changed. Priorities had changed. Technologies had changed. But the product was frozen, delivered, obsolete before it even saw the light.

## Timeline: How Agility Was Born

![](/assets/images/blog/2026-03-27-agilite-naissance-timeline.svg)

In **2001**, 17 expert developers gathered in Snowbird, Utah. They didn't create a methodology. They wrote a **manifesto**: 4 simple values that said "No, there must be a better way."

This manifesto catalyzed a revolution.

Frameworks exploded: **Scrum** (2002), **XP** (1999-2002), **Lean Software Development** (2003), **Kanban** (adapted from lean in 2007), **Shape Up** (created by Basecamp around 2015).

Today, almost no team says "we do Waterfall." Everyone says "we're Agile." But what they actually do? It varies enormously.

## The 4 Values of the Agile Manifesto

![](/assets/images/blog/2026-03-27-agilite-quatre-valeurs.svg)

The Agile Manifesto comes down to 4 values:

1. **Individuals and interactions over processes and tools**: People matter more than tools. Direct communication > static docs.

2. **Working software over comprehensive documentation**: A product that works beats a perfect spec you'll never ship.

3. **Customer collaboration over contract negotiation**: Working together, rather than "you signed, so we're shipping this."

4. **Responding to change over following a plan**: The market changes. The product must change with it, not stay frozen on a 2023 roadmap.

This manifesto didn't create a single methodology. It created a **philosophy**. And different frameworks interpret it differently.

---

## The Different Types of Agility

### 1. Scrum: The Agile Structure

![](/assets/images/blog/2026-03-27-agilite-scrum-rituel.svg)

**Scrum is the most popular agile framework.** If you say "Agile" to someone, they think of Scrum.

**How it works:**

- **Sprints** of 2-4 weeks (usually 2)
- Each sprint has **clear objectives defined**
- **Daily standups** (15 min each morning): who did what, who's doing what, any blockers?
- **Sprint review** at the end: demo the work to client/stakeholders
- **Retrospective**: the team discusses what went well, what can improve

**The 3 Scrum roles:**

1. **Product Owner (PO)**: prioritizes needs, validates work, represents the client
2. **Scrum Master**: facilitates the process, removes blockers, is not a manager
3. **Development Team**: self-organizing, ships the product

**Simple example:**

You're building an e-commerce app. Sprint 1: build login system. Sprint 2: add shopping cart. Sprint 3: integrate payments. Each sprint, you ship code that works and can go to production.

**Advantages:**

- Clear, repeatable structure
- Regular feedback (every 2 weeks)
- Team focused on one objective
- Easy to explain

**Disadvantages:**

- Ritualism: lots of meetings
- Can become rigid ("we respect the sprint no matter what")
- Hard to scale with multiple teams
- Can cause burnout if sprints are filled to max capacity

---

### 2. Kanban: Continuous Flow

![](/assets/images/blog/2026-03-27-agilite-kanban-flux.svg)

**Kanban says: forget fixed iterations. Work flows continuously from one phase to the next.**

It's a board with columns: "To Do" → "In Progress" → "Review" → "Done". Cards slide left to right. No sprints, no sprint planning, no Scrum retrospectives.

**Key principles:**

1. **WIP limits (Work In Progress)**: you say "we never have more than 5 things in progress at once." When one finishes, you pull the next from the backlog.

2. **Continuous flow**: no artificial breaks every 2 weeks

3. **Continuous improvement**: you measure cycle time (how long a card takes to cross the board) and optimize it

**Simple example:**

A software support team. They receive bug tickets continuously. No sense of "we have to finish the sprint." Assign tickets as they come, limit work in progress, handle things by priority.

**Advantages:**

- Very flexible, adapts easily
- Reduces rituals/meetings
- Scalable: works with 3 devs and with 300 devs
- Good for continuous work (support, maintenance)

**Disadvantages:**

- Lack of structure can become disorganized and confusing if poorly implemented
- Requires strong discipline (WIP limits need to be respected!)
- No natural breathing room
- Less frequent feedback than with sprints

---

### 3. Shape Up: Basecamp's Structured Cycle

![](/assets/images/blog/2026-03-27-agilite-shapeup-cycles.svg)

**Shape Up is created by Basecamp.** It's a framework between Scrum and Kanban: fixed cycles but longer, with significant upfront design work.

**How it works:**

One cycle = **6 weeks** with 4 phases:

1. **Shaping (1-2 weeks before)**: designers/PMs "shape" features. Create mockups, define scope, clarify constraints. Before the dev team starts.

2. **Pitching (start of cycle)**: present to stakeholders. Is this worth doing? Vote/decision.

3. **Building (6 weeks)**: dev team builds. Can make adjustments, but can't change the fundamental scope (it's "shaped").

4. **Cooldown (between cycles)**: 1-2 week break. Bug fixes, prep for next cycle.

**Simple example:**

You're building a SaaS product. Cycle 1 (6 weeks): initial version of features A and B, with solid upfront design. Weeks 7-8: break. Cycle 2: features C and D.

**Advantages:**

- Solid design = fewer changes mid-course
- Long cycles = stable context, less switching
- Clear phases without overthinking

**Disadvantages:**

- Requires lots of upfront design/shaping
- Roles less defined than Scrum = can be confusing
- Less documented than Scrum

---

### 4. XP (Extreme Programming): Hardcore Code

![](/assets/images/blog/2026-03-27-agilite-xp-pratiques.svg)

**XP doesn't talk about cycles or meetings. It talks about development practices.**

It's an answer to a question: "What is the most robust, maintainable, bug-free code we can write?"

**Key practices:**

1. **Pair Programming**: 2 devs on 1 machine. One "driver" (types the code), one "navigator" (thinks big picture, catches errors).

2. **TDD (Test Driven Development)**: write the test first. It fails. Write code to make it pass. Then refactor. Red-Green-Refactor.

3. **Continuous Integration**: push and merge code every day (or several times a day). Automated tests run on every merge.

4. **Collective Code Ownership**: everyone can touch any code. No "this module is my personal domain."

5. **Refactoring**: constantly clean and improve code without changing behavior.

6. **Simple Design**: "as simple as possible." No overengineering.

7. **Frequent Releases**: deploy multiple times a week or daily.

**Simple example:**

A team builds a critical payment system. Mandatory pair programming on everything. All changes go through TDD. Deploy to production 3 times a week. Result: very few bugs, highly maintainable code.

**Advantages:**

- Extremely robust, high-quality code
- Fewer bugs in production
- Very well-coordinated team (pair programming)
- Flexibility through constant refactoring

**Disadvantages:**

- **Very demanding** mentally and physically
- Pair programming = 2 devs to do 1 job = doubled costs
- Burnout possible if that's all you do
- Takes time to master
- Not suitable if quality isn't critical

---

### 5. Lean Software Development: Eliminate Waste

![](/assets/images/blog/2026-03-27-agilite-lean-principes.svg)

**Lean comes from Toyota manufacturing.** The idea is simple: **eliminate everything that doesn't add value.**

**5 Lean principles:**

1. **Value**: create value for the customer
2. **Flow**: work must flow without unnecessary waiting
3. **Pull**: the team "pulls" work as needed, rather than having it imposed
4. **Quality**: quality built in from the start, not tested at the end
5. **Kaizen**: continuous improvement (kaizen = "change for the better")

**Types of waste (Muda):**

- Overproduction (unneeded features)
- Waiting (queues, blockers)
- Unnecessary motion (context switching)
- Defects (bugs, rework)
- Unnecessary processes (bureaucracy)

**Simple example:**

A team spends 30% of time in useless meetings. 20% context switching between multiple projects. That's Lean waste. Solution: reduce meetings, concentrate each team on 1-2 projects at a time. Result: same team, 40% more productive.

**Advantages:**

- Very value-focused = no waste
- Flexible and adaptable
- Scalable to any size

**Disadvantages:**

- Very general: it's principles, not a recipe
- Must be adapted to each context
- Risk of becoming "common sense without structure"

---

### 6. Other Agile Frameworks

**Crystal**: Family of flexible, lightweight frameworks. Not a single approach, but a spectrum based on project criticality and team size.

**DSDM (Dynamic Systems Development Method)**: Framework with strict governance. Fast iterations but with lots of control/documentation. Used in heavily regulated contexts.

**FDD (Feature-Driven Development)**: Centered on features. Each feature has a clear cycle (design, build, test). Less popular than Scrum or Kanban.

**Scrumban**: Hybrid Scrum + Kanban. Sprints like Scrum, but with continuous work flow like Kanban. Good transition between the two.

---

## Pros and Cons: Agility in General

![](/assets/images/blog/2026-03-27-agilite-pros-cons.svg)

### Advantages of Agility

**Flexibility and Adaptation**: You can quickly respond to market changes, customer feedback, new technologies.

**Fast Customer Feedback**: Regular product validation. Less "oh no, this isn't what I wanted."

**Risk Reduction**: Regular deployment = you catch problems early, not after 12 months of development.

**Team Morale**: Autonomy, collaboration, sense of shipping something useful. Vs. waterfall where you code for 6 months without seeing the product live.

### Disadvantages of Agility

**Requires Customer Engagement**: Agile says "client very available." If your client disappears for 3 months, the approach breaks.

**Hard to Scale**: Scrum works well with 6-10 devs. With 100 devs and 10 teams? Gets very complex (SAFe, LeSS, etc.).

**Often Weak Documentation**: "Code is documentation" = no business context. Slow onboarding for new people.

**Possible Burnout**: Sustained pace, pressure to "maintain velocity." Teams exhaust themselves long-term.

---

## Framework Comparison

![](/assets/images/blog/2026-03-27-agilite-comparaison-frameworks.svg)

Which framework for your team?

**Scrum** if you have a medium project, an engaged client, a team of 6-15 devs, and you want very clear structure.

**Kanban** if you do support, maintenance, continuous work, or have a distributed and flexible team.

**Shape Up** if you're building a SaaS/digital product, have a team capable of solid design, and want long, stable cycles.

**XP** if code quality is critical (financial systems, healthcare, infrastructure), and your team is small and very dedicated.

**Lean** if you want a general philosophy rather than a prescriptive recipe.

**Advice**: Most teams start with Scrum (the most structured and documented), then evolve toward Kanban or a homegrown variation based on experience.

---

## Conclusion: Choose Your Path

Agility in 2001 was a revolution. In 2026, it's become mainstream. But everyone practices it differently.

There is no "one" Agility. There is:

- **Scrum** if you want structure
- **Kanban** if you want flexibility
- **Shape Up** if you want solid design
- **XP** if code quality is vital
- **Lean** if you want a general philosophy

The best framework for your team isn't the most popular one. It's the one that **fits your context, your size, your culture, your product**.

And often, it's a **hybrid**: a bit of Scrum (the rituals), a bit of Kanban (the flow), a bit of XP (code practices), lots of local adaptation.

What matters: **iterate. Listen to your team. Adjust regularly.**

Because that's what Agility really is.

---

## If you want to dig deeper...

Discover other perspectives on project management and agility:

- ["Why We Abandoned 'Sprints' for 'Cycles'"](/philosophy/2025/11/21/why-we-abandoned-sprints-for-cycles.html)
- ["From Issue to Release: How to Actually Structure Work"](/philosophy/2025/11/26/from-issue-to-release.html)
- ["Release-Driven Development: When Release Becomes the Driver"](/philosophy/2025/12/01/release-driven-development.html)
- ["The False Promise of User Stories"](/planning/2026/01/02/false-promise-user-stories-as-a.html)
- ["The Chaos of Infinite Backlog: Nobody Knows What to Do"](/planning/2025/12/26/infinite-backlog-nobody-knows.html)
