---

title: "Microservices: You Are Not Netflix"
subtitle: "Why the microservices trend often hides a poor technical decision dressed up as modernity."
description: "Everyone wants microservices because Netflix, GitHub and Airbnb use them. But 90% of projects don't have those problems. A well-built monolith is often the best architecture - and certainly the easiest to maintain."
date: 2026-05-06 10:00:00 +0100
categories: ["Engineering"]
excerpt: "\"We should move to microservices.\" This sentence has become the signal of a technical decision made by imitation rather than necessity. Here's why, in the majority of cases, a monolith is a better choice."
featured_image: /assets/images/blog/2026-05-06-microservices-monolithe-featured.png
---

## The Fantasy of Distributed Architecture

Open any technical conversation in a startup. Within five minutes, someone says:

> "We should migrate to microservices."

The room nods. CTOs stroke their chins. Senior developers think about their next resume. The PowerPoint slides mention Netflix. GitHub. Airbnb. Spotify.

**Nobody asks the real question: do we actually have the same problems they do?**

The answer, in 90% of cases, is no.

## Why Everyone Wants Microservices

The reason is simple: **imitation without context**.

When Netflix publishes a blog post explaining how they broke their monolith into 700 independent services, engineers around the world read it like a medical prescription. As if Netflix had found The Architectural Truth.

What nobody reads is the context:

- Netflix serves **250 million subscribers** across 190 countries
- Their engineering organization employs thousands of people
- They have entire teams dedicated solely to managing distributed infrastructure
- They migrated to microservices **after** suffering the limits of a monolith at that scale

GitHub followed the same path. Airbnb too. These companies **didn't start with microservices**. They got there after years, once their scalability problems actually justified that complexity.

Your 5-developer startup serving 2,000 users doesn't have those problems.

## What a Well-Built Monolith Actually Is

The word "monolith" has become an insult in our industry. We associate it with legacy code, technical debt, catastrophic deployments.

That's a perception error.

**A well-built monolith is:**

- A single deployment to manage
- A single codebase to understand
- ACID transactions without complex configuration
- Simple, linear debugging
- Easy refactors that span multiple modules
- A whole team that can understand the entire system

This isn't spaghetti code. It's modular architecture in a single process. The difference between a poorly-designed monolith and a good one is internal discipline, not distributed architecture.

Stack Overflow runs one of the most visited sites in the world **on a few servers and a monolith**. Basecamp has built a profitable company on a Ruby on Rails monolith for 20 years. Shopify too.

## The Real Advantages of Microservices

Let's be honest: microservices have genuine reasons to exist. In the right contexts.

**Independent scaling:** If your image processing service consumes 10x more resources than your API, you can scale just that service. With a monolith, you scale everything.

**Independent deployments:** Teams of 50 developers can deploy their services without coordinating with other teams. At scale, that's valuable.

**Fault isolation:** A failing service doesn't take down the whole system. The circuit breaker isolates the failure.

**Heterogeneous technologies:** Each service can use the technology best suited to its problem. Recommendations in Python, main API in Go, notifications in Node.js.

**Autonomous teams:** Teams organized around services can work in parallel without excessive friction.

These advantages are real. But they have a cost.

## The Drawbacks Nobody Mentions at Conferences

This is where the conversation gets interesting, because it's almost never talked about.

### 1. Operational Complexity Explodes

With a monolith, your deployment looks like:

```
git push → CI/CD → one binary → one production deployment
```

With 15 microservices, it looks like:

```
Kubernetes orchestration + Service mesh + API Gateway + Load balancers 
+ Circuit breakers + Distributed tracing + Log aggregation 
+ Health checks per service + API versioning between services 
+ Secrets management per service + Independent monitoring...
```

That's not a simplification. It's a multiplication of failure surfaces. Each new service adds configuration points, certificates to manage, separate CI/CD pipelines.

Netflix has a dedicated team just for deployment infrastructure. You probably don't.

### 2. Debugging Becomes a Reconstruction Exercise

In a monolith, you have a stacktrace. Linear. Readable.

With microservices, you have a request passing through 6 different services. When something breaks, you search through 6 different logs, on 6 different machines, with potentially 6 different logging systems.

Without distributed tracing (Jaeger, Zipkin, etc.), you're blind. And setting up proper distributed tracing is a project in itself.

### 3. Data Consistency Becomes a Hard Problem

Distributed transactions are one of the hardest problems in computer science.

With a monolith and a single database, you do:

```sql
BEGIN TRANSACTION;
  UPDATE account SET balance = balance - 100 WHERE id = 1;
  UPDATE account SET balance = balance + 100 WHERE id = 2;
COMMIT;
```

Atomic. Either both happen, or neither does.

With two microservices and two databases, you need the Saga pattern, compensation events, intermediate state management. Complex to write, hard to test, very easy to get wrong.

How many teams adopting microservices have actually thought through data consistency between services? Most improvise and discover the problems in production.

### 4. Network Calls Replace Function Calls

In a monolith, you call a function. In memory. Microseconds.

With microservices, you make an HTTP or gRPC call. Network. A few milliseconds. And that network can:

- Go down
- Be slow
- Return a timeout
- Return a corrupted response

You have to handle all of that. Retries, timeouts, fallbacks, circuit breakers. Every call between services adds latency and failure surface.

For an operation touching 5 services in cascade, you multiply failure points by 5.

### 5. Team Coordination Doesn't Disappear, It Moves

Microservices are sold as the solution to coordination problems. "Teams work independently."

That's true for deployments. But for features that span multiple services? You still need coordination. Except instead of coordinating code in the same repository, you're coordinating API contracts between different teams, with versions, migrations, deprecations.

Inter-service API versioning is a hard problem nobody anticipates.

### 6. Infrastructure Cost Is Real

A monolith means a few servers.

15 microservices with their databases, cache instances, message queues, Kubernetes infrastructure... that costs money. Time. Expertise.

For a startup watching its burn rate, that's a non-trivial argument.

### 7. Development Overhead

Adding a new feature in a monolith: modify a module, write tests, deploy.

Adding the same feature touching 3 microservices: modify 3 repositories, update 3 API contracts, write unit tests in each, write integration tests between services, coordinate 3 deployments.

For small teams, that overhead significantly slows velocity.

## The One Question That Matters

Before deciding on an architecture, one question matters:

**What problem am I trying to solve?**

If the answer is "we're going to have millions of users and need to scale each part of the system independently," microservices might make sense. But only if you also have the teams to maintain them.

If the answer is "it's what the big tech companies do" or "it'll give us a nice architecture," that's imitation.

**Real signals that you need microservices:**

- Your monolith has real, measured bottlenecks at specific points
- You have teams large enough for each to own their service(s)
- Your organization has the DevOps maturity to manage distributed infrastructure
- Different parts of your system have genuinely different scaling requirements
- You deploy so frequently that coordination is actually slowing your team down

**Bad signals for migrating:**

- "It's more modern"
- "Everyone's doing it"
- "It'll look good on my resume"
- "Netflix does it"
- "We're going to need to scale" (without current measurements)

## The Right Path

The right architectural approach isn't treating monolith vs. microservices as a binary, once-and-for-all choice.

It's building the simplest thing that works first.

**Phase 1:** Modular monolith. Well-organized code, clearly separated modules, explicit boundaries. You're learning your business domain.

**Phase 2:** If a specific problem emerges (one part is too slow, needs to scale independently, has radically different technical requirements), you extract **that specific service**.

**Phase 3:** You continue extracting only what's actually causing problems.

Amazon followed this path. GitHub too. Shopify deliberately chose not to follow it after evaluating it.

The right architect doesn't adopt microservices. They choose the architecture suited to the current problem, not the imagined problem three years from now.

## What It Says About an Organization

When an organization chooses microservices by imitation rather than necessity, it sends a signal:

- It prefers technical complexity over product clarity
- It optimizes for developer resumes, not value delivery
- It hasn't measured its actual bottlenecks
- It confused the architecture of tech giants with universal best practice

The most effective organizations I've seen build simple, measure, and only add complexity when the data demands it.

## In Conclusion

No, you are not Netflix. You are not GitHub. And that's perfectly fine.

These companies have problems you don't have. Copying their solutions without having their problems means importing their complexity without getting the benefits.

A well-built monolith is maintainable. Understandable. Deployable. Testable. For 90% of projects, that's all you need.

Next time someone says "we should migrate to microservices," ask the simple question:

**"What specific, measured, current problem are we solving with this?"**

If the answer is vague, you have your answer.

Fashion is not architecture. Complexity is not a goal. And "it's what the big companies do" is not a technical justification.

Build simple. Measure. Add complexity only when the data demands it.

---
