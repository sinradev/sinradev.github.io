---

title: "KISS: Why Tech Companies Abandon The Most Important Principle"
subtitle: "Keep It Simple, Stupid. A universal slogan forgotten by those who invented it."
description: "Tech companies cannot stay KISS in their technical choices. They pile on languages, frameworks, infrastructure. Analysis of reasons and real costs."
date: 2026-04-18 10:00:00 +0100
categories: ["Architecture"]
excerpt: "KISS: Keep It Simple, Stupid. The golden principle of computing. And also the first one that companies abandon once they exceed ten employees."
featured_image: /assets/images/blog/2026-04-18-kiss-keep-it-simple-stupid-featured.png
---

## KISS: The Definition

**KISS**: Keep It Simple, Stupid.

Three words. Invented by Kelly Johnson, engineer at Lockheed Martin, in the late 1960s. The principle is straightforward (as it should be):

> "All systems work better if you keep them simple rather than complex; therefore, simplicity should be a key design goal, and unnecessary complexity should be avoided."

No mystery. No complex interpretation.

**The principle:** Always choose the simplest solution that solves your problems.

## Why KISS Is Fundamental

Before analyzing why everyone ignores it, first understand why this principle exists.

### 1. Simple Systems Build Faster

If you have a problem A, you have two solutions:

**Solution 1 (simple)**: 100 lines of code. Three days of dev. No external dependencies.

**Solution 2 (complicated)**: Integrate an elegant framework. Import five libraries. Read the docs. 300 lines of code. Two weeks.

Which one do you choose? KISS says: solution 1.

### 2. Simple Systems Are More Maintainable

Revisit your code in 2024. You wrote a "simple" solution in 2015? You still understand it in two minutes.

You chose an "elegant solution" with twelve dependencies? Good luck. Three of those dependencies no longer exist. One was taken over by an unknown company. Another changed major versions six times.

You're in trouble.

### 3. Simple Systems Let You Pivot

If your strategy changes, you can throw away your "simple" code and write a new one in a week.

If your code is a cathedral of complexity, you're stuck. You've invested too much time, too many dependencies. Pivoting = rebuilding the world.

### 4. Simple Systems Have Fewer Bugs

Less code equals smaller attack surface. Fewer dependencies equals fewer broken versions. Less complex logic equals fewer untested conditions.

**It's mathematical.**

You have a one-in-100 chance of a bug in 100 lines of code.
You have a one-in-1000 chance of a bug in 500 lines of code (if well-written).
You have a one-in-100 chance in 500 lines if you've also imported Lodash, Moment, Express, and three custom libraries.

## The Paradox: Why Companies Abandon KISS

Here's the weird part. KISS came from the 1960s, from NASA, from military aviation. Fields where bugs equals death. Fields that **understood** simplicity is critical.

But modern tech companies? They ignore it completely.

Why?

### 1. The LinkedIn Resume Syndrome

Every developer has a problem:

> "I need to show I've learned modern technologies."

Not: "I need to build the best product."

No. It's: "I need to write on my LinkedIn: 3 years on Kubernetes, used 8 different languages, deployed on AWS, GCP, and Azure."

So when someone suggests adding a new tech to the stack, they say yes. Not because it's necessary. Because it "adds to the CV."

The company knows it. It throws Rust into the stack just to say "we use Rust."

**Result:** Technical stack equals collective CV gallery, not rational architecture.

### 2. The Cargo Cult Of Technical Design

Somewhere, a big company (Netflix, Spotify, Google) chose a complex architecture.

Why? Because they have 50,000 developers and need microservices, load-balancing, distributed caching, etc.

Your startup of 6 people watches this and thinks: "We'll do the same."

**Spoiler:** You don't do the same. You copy the architecture without understanding why it exists.

Netflix needs 3000 microservices because there are 10,000 requests per second. Your startup has 10 per day. You don't need Kubernetes. You need a server.

But no. Everyone uses Kubernetes now. It's cool. It's at conferences. It's on CVs.

And boom, you have infrastructure that consumes 40% of your intellectual bandwidth just to "keep it running." Meanwhile, no features ship.

### 3. The Apotheosis Of The Engineer Who Wants To Do Well

You hire a good engineer. He arrives. He looks at your code.

> "It's... too simple. We should refactor. We could use a design pattern here. We could use an ORM framework. And oh, look, we could split services, add queues, add a cache..."

He's a good engineer. He's right on many points. But he follows a maxim: "More is better."

KISS says: "Good enough equals good enough."

He sees every simplification as "technical debt." A thing to fix. A problem.

Three years later, you have infrastructure that takes five developers just for maintenance. Your real priorities? Not done.

### 4. Fear Of Scale Change

The CTO: "What if we grow? Then what?"

That's a real question. But here's the real answer:

**You refactor when you need to.**

Not before. Not "just in case." Not prophetically.

KISS says: "Build for today. Refactor tomorrow if necessary."

But no. Everyone wants to "scale from day one." You build architecture capable of supporting 1 million users when you have 100.

Result? Free complexity, zero benefit, until the day you actually have 1 million. And by then, your architecture is 5 years old and obsolete anyway.

### 5. Obsession With The "Modern Stack"

There's a trend in 2026: use many different languages because "each is good for something."

Python for ML/data. Go for the API. Rust for performance-critical code. JavaScript for frontend. TypeScript because why not. SQL, GraphQL, Redis, Message Queues... everything.

A team of six people. Six languages.

You know what that means?
- Nobody truly masters anything
- If someone leaves, nobody followed the Rust part
- Docs are scattered (Python docs, Go docs, Rust docs, GraphQL docs...)
- Tests are inconsistent
- Deployment becomes a nightmare

KISS would say: "Choose one language. Master it. Use it for 90% of things. Only in the 10% where it becomes truly critical, then deviate."

But no. "Modern" equals many languages equals we have an advanced tech stack.

## The Real Cost Of Complexity

You have a simple API question to solve.

**With KISS:**
- Write a function. 50 lines. Tests included. It works.

**Without KISS (2026 reality):**
- Create a microservice in Go
- Configure Kubernetes to orchestrate it
- Set up monitoring with Prometheus
- Version the API with OpenAPI/Swagger
- Document it on Notion
- Create tests with testcontainers
- Set up CI/CD to deploy it
- Create Slack alerts
- Document the runbook

Congratulations, you have 2000 lines of configuration for a simple function.

**And now?** If you need to change that API, you must touch:
- The Go code
- The Kubernetes config
- The OpenAPI schema
- The tests
- The Notion docs
- The alerts
- The runbooks

How many people can do that? Two, maybe three. If one leaves, it's a mess.

With KISS? You had a function. Someone changes it. Done.

## Arguments AGAINST KISS (And Why They're Wrong)

Let me present the arguments you'll hear to justify complexity. And why each one is an excuse.

### "We Must Scale"

When? Now? No.

KISS says: "You have a PostgreSQL database. It supports 100,000 requests per second. You have 100 per second. You don't need to scale."

"Yeah but what if we grow?"

Answer: You refactor. At that time. Not before.

Netflix refactored their monolith into microservices after 5 years and 10 million users. Not before.

### "It's More Elegant"

Elegant according to whom? The engineer who designed it?

KISS says: "Elegance equals your code disappearing. Someone modifies it six months later in 10 minutes. That's elegant."

Code that's "elegant" with 5 nested frameworks? That's the opposite.

### "We're Using Best Practices"

Best practices **for Netflix**, not for you.

KISS says: "Best practices equals what works for your context."

If you have 6 people and a simple problem, the "best practice" is a simple solution.

### "Everyone Else Uses It"

The weakest argument.

Everyone jumps off a cliff? No.

But everyone uses Kubernetes now? Almost. And 90% of those using it could use a simple VPS.

### "We Want To Be Modern"

Real modernity? Having a product that works, with no technical debt, with a happy team.

Complicated infrastructure that nobody understands? That's the opposite of modern.

## How To Get Back To KISS

If you're in a company where this turned into chaos, here's the recipe.

### 1. Take Inventory

List every technology you use.
- Python? Check.
- Go? Check.
- Rust? Check.
- Kubernetes? Check.
- Redis? Check.
- MongoDB? Check.
- PostgreSQL? Check.
- Elasticsearch? Check.
- And more.

Honestly: **How many of these tools could disappear tomorrow without breaking the product?**

I'd bet 50%.

### 2. Question Every Choice

For each technology, ask yourself:
- **Do we really need this?**
- **Was this necessary six months ago?**
- **Who chose it, and why?**
- **How many people master it?**
- **How much time do we spend just maintaining it?**

If the answer to "how much maintenance time" is more than "20% of the time," that's a problem.

### 3. Vote For Simplification

Learn to say: "We're removing this."

Kubernetes? Remove it. Use Docker directly on a VPS. That's enough for 99% of companies.

MongoDB AND PostgreSQL? Remove MongoDB. PostgreSQL can do everything.

Python AND Go? Keep one language. The 5% of cases that need Go? You'll handle them if it becomes a real problem.

That doesn't pad the CV? Good. You're looking for a real developer. One who builds products, not one who collects languages.

### 4. Document The Reasons

When you decide to simplify, document why. Not on Notion (too many docs kills docs). Just in a simple `ARCHITECTURE.md` file.

> "We use PostgreSQL because it's sufficient. If someone thinks we need MongoDB, go talk to them, we discuss."

That prevents people from adding layers without thinking.

## The Final Paradox

You know what's ironic?

The people who preach KISS are the really good engineers. The people who build real things. The people at companies that work.

And the people who ignore it? Often junior developers or CTOs who panic.

The REAL seniors, the ones who've seen products die because of complexity, they always come back to KISS.

## In Conclusion

"Keep It Simple, Stupid" isn't a cute slogan. It's not motivational Twitter.

It's the principle that guided NASA in the 1960s. It's what allowed early pioneers to build the internet we use today.

Your modern startup that stacks Kubernetes, Microservices, GraphQL, and 7 different languages? It's not more advanced than those who said "use one server, one database, and a simple API."

It's just more complicated.

And one day, when your team is exhausted maintaining the infrastructure, when nobody can move without breaking something, when bugs multiply, when it takes two weeks to deploy a simple change...

At that moment, you'll realize: Kelly Johnson was right.

That's KISS.

---
