---

title: "KISS: The Art of Not Overcomplicating What Doesn't Need to Be"
subtitle: "MCP, agents, plugins, orchestrators, RAG, fine-tuning. Every week brings a new wave of concepts. KISS isn't a refusal to evolve. It's a compass for not getting lost."
description: "KISS - Keep It Simple, Stupid - is a design principle born in military engineering in the 1960s. Sixty years later, in a world saturated with new AI tools and concepts, it is more relevant than ever."
categories: ["Engineering", "Work Culture"]
excerpt: "Complexity builds itself. Simplicity is a choice. KISS isn't intellectual laziness: it's a discipline that requires resisting the urge to add, integrate, and adopt everything that shines."
date: 2026-05-28 00:00:00 +0100
featured_image: /assets/images/blog/2026-05-28-kiss-principe-simplicite-featured.png

---

There is a scene that repeats itself in technical teams around the world. A developer opens a project they haven't touched in six months. They try to understand why there are twelve microservices for an application that does three things. Why the configuration is distributed across four different tools. Why they need to read five READMEs just to run the project locally.

Someone, at some point, thought they were doing the right thing. Each layer of complexity had a reason when it was added. And yet the result is a system nobody truly understands end to end.

KISS could have prevented that. Not by banning complexity, but by making it deliberate.

## The Origin: A Philosophy Born in Military Engineering

The KISS principle - Keep It Simple, Stupid - is attributed to Kelly Johnson, chief engineer at Lockheed, in the 1960s. Johnson was one of the lead architects of the Skunk Works program, Lockheed's secretive division that produced some of the most advanced aircraft of the era: the U-2, the SR-71 Blackbird.

The original formulation was direct, almost brutal: a weapon system must be repairable in the field, by a mechanic with basic tools, under difficult conditions. If an ordinary mechanic can't fix it, the design has failed.

This was not an aesthetic principle. It was a survival constraint.

Johnson reportedly illustrated the principle by asking his engineers to design an aircraft that could be repaired using only tools a mechanic could hold in their hands. No impossible-to-find parts. No procedures requiring a 400-page manual. A design that a competent but non-specialized person could understand and maintain.

The idea then migrated into software engineering in the 1970s and 1980s, popularized by figures like Dennis Ritchie and Ken Thompson during the design of Unix. The Unix philosophy is a direct expression of it: write programs that do one thing, and do it well. Programs that compose. Not monoliths that try to do everything.

## The Concept: What KISS Actually Says

KISS is often misunderstood as a call for naive simplicity. It is not.

KISS says: **do not add complexity that is not justified by a real, current problem.**

The distinction matters. It is not about writing dumb code or avoiding abstractions on principle. It is about not introducing speculative complexity - complexity anticipated for needs that may never arrive.

There are generally two kinds of complexity:

**Essential complexity**: the kind that comes from the problem itself. A payment processing system has inherent complexity. It cannot be eliminated, only managed.

**Accidental complexity**: the kind introduced by architecture choices, tool choices, patterns. A payment processing system that uses twelve dependencies to do what a standard library would handle in ten lines.

KISS targets accidental complexity. It does not claim all problems are simple. It says that if a problem can be solved simply, it should be.

## Why Complexity Attracts Us

Understanding KISS requires understanding why we default to the opposite.

Complexity attracts for several reasons.

**It signals expertise.** An elaborate system with sophisticated patterns and a layered architecture gives the impression of seriousness. A hundred-line script that does the same thing seems too simple to be professional.

**It anticipates hypothetical needs.** "We might need to scale to a million users." Maybe. Probably not. And even if that happens, the real needs at that scale will be different from what we imagine now.

**It is socially rewarded.** In many teams, proposing a complex architecture looks like thorough thinking. Proposing the simple solution can look like you haven't worked the problem hard enough.

**It is easier to build than simplicity.** This is paradoxical but true. Adding an abstraction layer takes five minutes. Deciding that layer isn't necessary requires confidence, experience, and the ability to resist real social pressure.

## Concrete Examples

### The Tech Stack

A startup launching a B2B SaaS probably doesn't need Kubernetes. It needs its service to work.

The temptation is strong: tutorials show Kubernetes, job listings mention Kubernetes, conference talks are about Kubernetes. It seems like the right tool for a serious application.

But Kubernetes solves orchestration problems at scale. For a five-person startup with two hundred customers, it's infrastructure that demands hours of maintenance, rare skills, and adds layers between the code and the server. A VPS with Docker Compose, or a platform like Fly.io or Render, does the same job with a fraction of the complexity.

Similarly: an API doing CRUD operations probably doesn't need a distributed event system, a message queue, and a CQRS architecture. It needs a database and a few well-written routes.

Rails, Laravel, Django are successful examples of KISS stacks. Not because they are technically simple, but because they solve many common problems with conventions rather than configuration. Fewer decisions to make, fewer pieces to assemble, less surface area for errors.

### Infrastructure

Infrastructure follows the same pattern. A CI/CD pipeline chaining twenty steps, with three-hundred-line bash scripts, multi-stage Dockerfiles, nested Terraform configurations, and secrets distributed across four different systems is infrastructure nobody truly understands and everyone fears touching.

KISS in infrastructure asks: can we deploy with a single command? Can someone joining the team understand how the infrastructure works in an hour? Can we restore the service quickly if something fails?

A resilient infrastructure doesn't come from sophistication. It comes from readability and reproducibility.

### Artificial Intelligence: The Hardest Terrain

AI is today the domain where KISS is hardest to apply and most necessary.

In the space of two years, the ecosystem around LLMs has exploded. RAG, fine-tuning, agents, MCP (Model Context Protocol), plugins, orchestrators like LangChain or LlamaIndex, evaluation frameworks, training data pipelines, vector databases.

Every week, a new concept presents itself as "essential." Every week, a startup raises millions to solve a problem most teams don't have yet.

The temptation is to adopt all of it. To have a complete AI stack, with an orchestrator, a persistent memory system, several specialized agents, plugins for every integration.

What KISS says here is clear: **start with a direct API call to the model. Add a layer only when you have a real problem the direct call doesn't solve.**

For the majority of AI use cases in production today, a good prompt and a direct API call get the job done. LangChain adds abstraction. That abstraction has a cost: harder debugging, dependency on a fast-moving framework, implicit behaviors that are difficult to trace.

That is not an argument against LangChain. It is an argument for starting simple and adding complexity only when justified by a concrete problem.

## KISS and Resilience in a Fast-Moving World

KISS is not resistance to change. It is a way of staying capable of changing.

A simple system can be modified quickly. A complex system accumulates inertia. Each added layer makes the layers underneath harder to touch. Each dependency creates an uncontrolled vector of change.

In a fast-moving context, resilience comes from the ability to adapt. And that ability is directly correlated with the simplicity of the system.

The teams that cope best with moments of change - AI model migration, cloud infrastructure shift, product pivot - are generally those with the most readable and least coupled systems. Not because they anticipated these changes, but because a simple system can absorb unexpected changes without collapsing.

Complexity accumulates debt. Every abstraction layer that no longer matches the need becomes an obstacle. Every dependency that stops being maintained becomes a risk. A system that has grown organically over five years, without design principles, is often a system you rewrite rather than evolve.

## AI in 2025: The Best Case Study for KISS

The AI domain perfectly illustrates why KISS is a discipline rather than a passive principle.

**MCP (Model Context Protocol)**: an open protocol launched by Anthropic so LLMs can interact with external tools and data sources. Useful for specific use cases. Not necessary for calling a weather API in a simple agent.

**Skills and agents**: architectures where a main LLM orchestrates specialized agents each with a defined set of capabilities. Powerful for complex workflows. Often over-engineered for extracting text from a PDF and reformatting it.

**Plugins and integrations**: connectors that extend LLM capabilities toward external systems. Copilot, Cursor, IDE extensions. Each solves a real problem. Together, they create a work environment whose behavior nobody fully controls.

**RAG (Retrieval-Augmented Generation)**: retrieving relevant documents before generating a response. A solid solution to the problem of limited context windows and stale knowledge. But for a knowledge base of twenty documents, putting all documents in context is simpler and often more effective.

The KISS question for every new concept is the same: **do I have a problem this concept solves, or am I searching for a problem for this concept?**

Many current AI architectures answer the second question. They are built with the most advanced tools because those tools exist, not because the problem requires them.

## Wait and See: The Discipline of Non-Adoption

KISS implies an active posture toward new tools: **wait to see what remains.**

The AI ecosystem in 2024 and 2025 saw dozens of frameworks, protocols, and tools emerge that were presented as essential. Some held. Many disappeared or were absorbed into other projects.

LangChain was presented as the standard framework for LLM agents. Today it competes with LlamaIndex, CrewAI, AutoGen, LangGraph, DSPy, and a dozen other projects. Most teams that invested early in LangChain had to rewrite significant portions of their code as the framework evolved.

Teams that waited six months, observed what was stabilizing, and chose when options were better defined generally made better choices with less refactoring.

That is not timidity. That is engineering. You don't build a house with materials you don't yet know will hold up in the rain.

KISS applied to new tools: use the simplest one that solves the problem now. Adopt something more sophisticated only when the simpler approach has demonstrated its limits.

## Mastery as the Goal

What distinguishes KISS from laziness is mastery.

A simple system that the team fully understands is more reliable than a sophisticated system nobody truly masters. Mastery enables rapid diagnosis. It enables trusting the system's behavior. It enables onboarding new members without asking for six months of immersion.

Mastering a tool means knowing what it does when it breaks. It means knowing its limits as well as its capabilities. It means being able to explain its behavior to someone who has never seen it.

In the current AI ecosystem, few teams truly master their stacks. They use them. They trust the abstractions. They hope the implicit behaviors don't create problems in production.

KISS forces the question: do I truly understand what this system does? Could I rebuild it if necessary? Could I explain its behavior to someone else?

If the answer is no, that is a signal complexity has outpaced mastery.

## KISS Doesn't Mean Never Evolving

One final point, important.

KISS is not an argument for never adopting new tools or new architectures. It is an argument for adopting them at the right moment, for the right reasons.

When a real problem exceeds the capabilities of a simple solution, evolution is necessary. The KISS question is not "is this new tool interesting?" but "does my current problem justify this level of complexity?"

A recommendation system that needs to handle a million users with strict latency constraints probably needs a more sophisticated architecture than a direct API call. But it doesn't need that before having this problem. And when the problem arrives, the real needs will be clearer than they would have been at the time of the initial architecture.

That is the paradox of KISS: starting simple, you learn faster what you truly need. And you build better things, not things that anticipate imaginary needs.

---

Simplicity is not a starting point. It is a destination chosen deliberately, against the constant pressure to add, integrate, adopt. In an ecosystem that produces new concepts every week, KISS is less a technical principle than a posture: watch the new pieces arrive, wait to see which ones remain on the field, and only take those that solve a problem you actually have.

The rest, you can let pass.
