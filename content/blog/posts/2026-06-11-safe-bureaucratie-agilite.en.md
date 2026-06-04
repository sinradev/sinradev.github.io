---

title: "SAFe: When Agile at Scale Becomes Bureaucracy"
subtitle: "Scaled Agile Framework is the most widely used answer to the question 'how do you do Agile with 500 developers.' It is also the most criticized by practitioners who have applied it. Both realities coexist."
description: "SAFe (Scaled Agile Framework) is adopted by thousands of companies worldwide. Its proponents praise its structure and predictability. Its critics see it as an Agile bureaucracy that produces the drawbacks of both models without the advantages of either."
categories: ["Project Management", "Work Culture"]
excerpt: "Your organization has implemented SAFe. You now have ARTs, PI Plannings, System Demos, and Inspect & Adapt workshops. Your organization is also slower, more meeting-heavy, and more frustrating for engineers than before. This is not a bug in your SAFe implementation. It is often a feature."
date: 2026-06-11 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-11-safe-bureaucratie-agilite-featured.svg

---

SAFe is the most widely adopted framework for Agile at scale. According to annual studies by VersionOne (now Digital.ai), it consistently represents 30 to 40 percent of companies practicing large-scale Agile. That is a fact.

SAFe is also regularly ranked as the least appreciated framework by practitioners in those same studies. Developers, Scrum Masters, and Agile coaches who have applied it often describe it using words like "heavy," "bureaucratic," and "contrary to the Agile spirit." That is also a fact.

These two facts coexist because SAFe solves a real problem (coordination at scale) with an approach that creates its own problems (structural complexity and centralization).

## What SAFe Seeks to Solve

Large organizations have a legitimate problem: how do you coordinate the work of hundreds of developers on the same product or platform?

Individual teams can practice Scrum or Kanban successfully at their level. But when ten or twenty teams work on interdependent components, inter-team dependencies create coordination problems that team-level agile methods do not solve.

A feature that requires contributions from three different teams can end up blocked because each team has its own priorities, its own sprints, and its own definition of "done." Without explicit coordination at the inter-team level, components develop in an unsynchronized way.

SAFe addresses this problem with a multi-level coordination structure: the Agile Release Train (ART) groups multiple teams together, the Program Increment (PI) defines a common cadence, and PI Planning synchronizes teams around their goals and dependencies.

The logic is sound. The implementation is complex.

## The SAFe Structure and Its Costs

To describe SAFe, you have to accept entering its terminology.

An **Agile Release Train** is a group of 50 to 125 people (roughly 5 to 12 Scrum teams) who work together on the same value scope. An ART has its own rituals, its own cadence, and its own specific roles (Release Train Engineer, Product Management at the ART level).

A **Program Increment** is a planning period of 8 to 12 weeks, the first week of which is dedicated to **PI Planning**: two days of intensive meetings where all teams in the ART plan their upcoming sprints together, identify their dependencies, and commit to collective goals.

At the level above, multiple ARTs can be grouped into a **Large Solution Train** or a **Portfolio**, with additional governance instances.

The organizational cost of this structure is substantial.

**Rituals multiply.** Each team maintains its Scrum rituals. In addition, there are the ART rituals: the twice-yearly two-day PI Planning, System Demos every two weeks, and the Inspect & Adapt at the end of each PI. For a team of ten people, the ritual time can represent 15 to 20 percent of available capacity.

**Roles proliferate.** Release Train Engineer, Product Manager (ART level), Solution Architect, Business Owners, System Team. Each role has defined responsibilities and requires trained people. Large companies end up with entire teams dedicated to running the SAFe framework.

**Rigidity increases.** The PI Planning cadence, set at regular intervals (generally every 10 to 12 weeks), creates rigid planning windows. If an urgent priority emerges between two PI Plannings, integrating it into the plan requires a formal exception (an "IP Sprint" or an "Innovation Iteration").

## What Engineers Experience in SAFe

The most recurring criticism from engineers working in SAFe organizations is the feeling of being inside an Agile bureaucracy: all the downsides of bureaucracy (complexity, meetings, coordination overhead) without the benefits of agility (flexibility, fast feedback, autonomy).

**PI Planning is often experienced as oppressive.** Two days of intensive meetings with 100 people, to plan the next ten weeks in detail, based on information that will inevitably change. Most plans made during PI Planning are partially obsolete by the end of the first sprint.

**Inter-team dependencies are visible but not resolved.** PI Planning reveals dependencies. But resolving them requires modifying the plans of teams that have their own priorities and constraints. In practice, many dependencies are marked as "accepted risk" and create delays that were not anticipated.

**SAFe metrics are easily gamed.** Program Predictability Measures, PI Objectives, Business Value scores - these are metrics that teams quickly learn to optimize for themselves rather than for real value. A well-formulated but unambitious PI objective is better for the metrics than an ambitious one that partially fails.

## Cases Where SAFe Delivers Real Value

Despite its flaws, SAFe is not universally useless.

**Very large organizations with strong regulatory constraints.** In sectors where traceability, governance, and compliance are legal requirements, SAFe provides a structure that can satisfy these requirements while maintaining a form of agile practice. It is imperfect, but it is often the only realistic option.

**Organizations transitioning from Waterfall.** SAFe is often criticized as Waterfall dressed up as Agile. This criticism is partially valid and partially unfair: for organizations coming from Waterfall, SAFe can represent a transition step toward lighter practices. The twice-yearly PI Planning is less rigid than the annual Waterfall plan.

**Contexts with strong hardware dependencies.** In embedded systems or physical hardware development, development cycles are inherently longer and dependencies more rigid. SAFe with its 10 to 12 week cadence is better suited to this context than a two-week Scrum.

## Alternatives That Work Better for Most Teams

If the goal is to coordinate multiple Agile teams without the costs of SAFe, other approaches have shown better results in mid-sized organizations.

**Spotify model (with caution).** The Spotify model with its Tribes, Squads, Chapters, and Guilds is often cited as an alternative to SAFe. A word of caution: Spotify itself abandoned its "model" as described in the 2012-2013 articles. Applying it as an organizational template without understanding its evolution is a common mistake.

**Team Topologies.** The Team Topologies framework by Matthew Skelton and Manuel Pais offers an approach to team organization based on value streams and interaction types (collaboration, facilitation, X-as-a-service). It is less prescriptive than SAFe and more adaptive to specific contexts.

**The autonomous product approach.** Rather than coordinating teams around technical components, structuring teams around autonomous product scopes that can deliver value independently, minimizing inter-team dependencies. This approach solves the coordination problem at its root by reducing the coordination needed.

---

SAFe is the most effective Agile transformation consulting business ever created. It found the perfect market: large companies that want to "do Agile" with their existing hierarchical structure, their current governance processes, and their teams as they are.

The implicit promise of SAFe is compelling: agility without deep organizational transformation. This promise explains its massive adoption. And it is also the reason it so often disappoints those who apply it.
