---

title: "Should You Follow the Latest JavaScript Frameworks?"
subtitle: "Ruby on Rails has existed since 2005. It is still here, still modern, still relevant. How many JavaScript frameworks have come and gone in that time?"
description: "Every year, a new JavaScript framework becomes 'the future of the web.' And every year, teams rewrite their codebase to stay current. Rails has been running since 2005 and still solves the same problems effectively. Isn't that the real right choice?"
date: 2026-05-26 09:00:00 +0100
categories: ["Engineering"]
excerpt: "Angular, React, Vue, Svelte, Next.js, Remix, SolidJS, Qwik, Astro... JavaScript invents a new 'future of the web' every eighteen months. Ruby on Rails turns 21 this year. Which one is right?"
featured_image: /assets/images/blog/2026-05-26-frameworks-javascript-mode-rails-featured.png
---

## The Wheel That Spins Without Going Anywhere

2010: Backbone.js is the future of the web.
2013: Angular 1 takes over. Backbone is has-been.
2014: React arrives. Angular 1 is already "legacy."
2016: Vue.js becomes the "serious" alternative. Angular 2 is a complete rewrite, incompatible with Angular 1.
2018: Next.js establishes itself for server-side rendering. Vue 3 breaks compatibility with Vue 2.
2020: Svelte "revolutionizes" the approach. NuxtJS, SvelteKit join the list.
2021: Remix enters the scene as "the real answer" to React's problems.
2022: SolidJS, Qwik. Partial hydration becomes the new Holy Grail.
2023: Astro for static sites. Bun as an alternative runtime to Node.
2024: htmx comes back into fashion as a reaction against the complexity of everything that preceded it.

And in 2026?

Meanwhile, Ruby on Rails shipped version 8.0. Quietly. Without an explosive conference. Without a viral Twitter thread. Just a stable release, with features that solve real problems.

## What "Trendy" Actually Costs

Adopting a framework because it is fashionable means making your product pay for your team's curiosity debt.

Here is what nobody mentions in "Why I migrated to [new framework]" articles:

**Migration cost.** Every rewrite takes months. Not weeks: months. Features go unshipped. Bugs stay open. The team focuses on rebuilding what already worked instead of creating value for users.

**Hiring cost.** A trendy framework attracts enthusiastic junior developers and seniors who want to "explore." In 18 months, when the next framework is out, those same profiles will have moved on to the next wave. Your most experienced developers master mature tools. They do not switch ecosystems for every hype cycle.

**Documentation cost.** Young frameworks have fragmented ecosystems, incomplete documentation, frequent breaking changes, and communities still debating the right way to do things. Rails has 21 years of guides, established patterns, and solutions to every imaginable problem.

**Cognitive cost.** Following JavaScript trends requires constant monitoring. Not to improve the product, just to avoid "falling behind." That is energy taken away from what matters: understanding the business, refining features, reducing real technical debt.

## Ruby on Rails: Why 2005 Is Not a Problem

Rails shipped in 2005. That is often presented as a weakness. In reality, it is its greatest strength.

**21 years of existence mean:**

- Thousands of problems solved in the core codebase
- Exhaustive documentation covering every use case
- Established patterns and stable conventions
- A mature gem ecosystem for nearly every need
- Millions of developers who know the framework

But most importantly: **Rails is not a museum piece**. Version 7 introduced Turbo and Stimulus, a modern architecture for dynamic interfaces without massive JavaScript. Version 8 integrates a simplified deployment approach with Kamal, Solid Queue for background jobs, and Solid Cache. Rails addresses the same challenges in 2026 as it did in 2014, but with 21 years of experience behind it.

Shopify, GitHub, Basecamp, Airbnb (in its origins), Hulu... These companies built massive products on Rails. Shopify, processing billions of transactions per year, still runs primarily on a Rails monolith. Not because they cannot afford to migrate. Because it works.

## The Confusion Between "Trendy" and "Modern"

The tech industry constantly confuses these two notions.

**Modern:** capable of solving current technical problems effectively.

**Trendy:** recently released, lots of noise on social media, conferences, and blogs.

Rails in 2026 is modern. It supports WebSockets, async jobs, REST and GraphQL APIs, containerized deployment, multi-factor authentication, integration with cloud services. It does everything a modern SaaS product needs to do.

Is it trendy? No. It is not the subject of keynotes or LinkedIn threads. And that is precisely what protects you: you are not exposed to the migration waves that accompany every hype cycle.

## What a Proven Framework Guarantees

Choosing a mature framework means choosing a kind of predictability that young frameworks cannot offer.

**API stability.** Rails maintains serious backward compatibility. Rails applications written 5 years ago generally run without major modifications on recent versions. Compare that to Angular 1 to Angular 2 migrations, or Vue 2 to Vue 3, or the regular breaking changes in the React ecosystem between major versions.

**Support longevity.** Rails will still exist in ten years. The community, core contributors, and companies that depend on it guarantee its survival. How many JavaScript frameworks from 2018 are today abandoned or in minimal maintenance?

**Mature tooling.** Debugging, profiling, monitoring, testing: the Rails ecosystem has solid tools for every stage of development. Recent frameworks often have gaps in these areas during their first years.

**Targeted hiring.** An experienced Rails developer has value because their expertise does not depreciate with every hype cycle. They know the patterns, the pitfalls, the best practices. It is a durable human investment.

## Tech FOMO: A Bias, Not a Strategy

FOMO: Fear Of Missing Out.

In tech, this bias is particularly destructive because it is dressed up as rational reasoning. "We need to migrate to React because it is the industry standard." "We should try Bun because it is faster." "If we stay on Rails, we will have trouble hiring."

These arguments sound professional. But they often mask a simpler reality: **someone on the team wants to play with the new technology**.

That is not a moral judgment. It is human. Engineers are curious and that is a quality. But an engineer's personal curiosity should not dictate the technical architecture of a production product.

The question to ask is not "is this framework cool?" The question is: "does this change create value for our users and our team over a five-year horizon?"

In most cases, the answer is no.

## The Concrete Case: Sinra and Rails

Sinra is built on Ruby on Rails. This is not a default choice or a lack of alternatives. It is a deliberate choice.

Rails fits exactly what Sinra needs to do: a SaaS web application with rich features, a responsive interface, complex relational data management, and frequent delivery of new capabilities. Rails has excelled at these use cases since 2005. It does so today with modern tools integrated into the framework.

The team can focus on business problems: how to better organize issues, cycles, releases, capabilities. Not on "how to migrate our frontend to the latest trendy framework before our team gets poached by another startup that already uses it."

That is the difference between building a product and managing a technology stack.

## The Real Question: What Time Horizon Are You Deciding On?

If you are building a prototype for a demo in three weeks, use whatever technology you want. It does not matter.

If you are building a product that must exist in five years, serve real customers, and be maintained by a team that will evolve, the decision is different.

**The criteria that matter over a five-year horizon:**

- Will the framework still be maintained and active?
- Is there a stable community of developers?
- Are breaking changes handled carefully with backward compatibility?
- Does the ecosystem cover technical needs without reinventing the wheel?
- Does the learning curve allow new developers to get up to speed quickly?

Rails answers positively to each of these criteria. Many popular JavaScript frameworks today will not in five years.

## Conclusion: The Boring Choice Is Often the Right Choice

There is something ironic in our industry: the technologies that make the least noise are often the most solid.

Rails has no spectacular keynote. It has no Twitter thread with 50,000 likes explaining how it will "revolutionize web development." It has something more valuable: **two decades of solutions to real problems, a stable community, and a track record that speaks for itself**.

In 2026, the real question is not "should you follow the latest JavaScript frameworks?" The real question is: "what is your tolerance for technical risk, and what time horizon are you building on?"

If the answer is "I am building something to last," then the boring, stable, proven choice is probably the best choice you can make.

The next revolutionary JavaScript framework will arrive in a few months. Rails will still be there.
