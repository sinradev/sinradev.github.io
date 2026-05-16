---
title: "Modular Monolith: The Architecture Everyone Is Rediscovering"
subtitle: "Vertical Slice, domain-first, package by feature - how an old idea became the modern answer to microservices complexity."
description: "The modular monolith with Vertical Slice Architecture is not a novelty - it is a rediscovery. History, principles, structure examples, and why Sinra chose this approach to build a maintainable product."
date: 2026-05-16 10:00:00 +0100
categories: ["Engineering"]
excerpt: "After years of selling microservices as the universal solution, the industry is returning to a simpler idea: a single deployment, but organized around business domains. The modular monolith is making a comeback - and this time, it is intentional."
featured_image: /assets/images/blog/2026-05-16-modular-monolith-featured.png
---

## The Return of the Intentional Monolith

A few years ago, saying "we're building a monolith" at a tech conference was tantamount to admitting defeat. The monolith was synonymous with legacy code, accumulated technical debt, unmaintainable systems.

Today, something has changed.

Teams at Shopify, Stack Overflow, Basecamp, and GitHub openly talk about their well-built monoliths. Recognized engineers publish articles about the limits of microservices. And one particular architecture is emerging as a serious alternative:

**The Modular Monolith with Vertical Slice Architecture.**

This is not a regression. It is an evolution.

---

## History: An Idea With Several Lives

### The 2000s: The Monolith Without Structure

The first web frameworks - Rails, Django, Spring MVC - imposed a **horizontal** organization: all views together, all models together, all controllers together.

```
app/
  controllers/   <- toutes les routes
  models/        <- tous les modèles
  views/         <- tous les templates
  services/      <- toute la logique
```

This works well up to around 20-30 models. Beyond that, navigation becomes a nightmare. A change in `UserService` breaks `OrderService`. Circular dependencies proliferate. New developers do not know where to start.

### 2010-2018: The Flight Toward Microservices

Faced with this complexity, the industry made a radical decision: **distribute the problem**.

If a monolith becomes unmanageable, let's split it into independent services. Each service manages its own domain, its own database, its own deployment.

The problem? Complexity does not disappear - it shifts to the infrastructure.

- How do services communicate? (REST? gRPC? events?)
- How do you manage distributed transactions?
- How do you debug a request that crosses 12 services?
- How do you maintain data consistency between services?

For teams at Netflix, Uber, or Amazon, this cost is justified. For everyone else, it is often an unjustified overhead.

### 2014: Jimmy Bogard and Vertical Slice Architecture

In 2014, **Jimmy Bogard** - creator of AutoMapper and MediatR - articulated what he observed in the codebases he audited:

> "The usual layer-based organization (Controller → Service → Repository) creates artificial coupling between features that have nothing to do with each other."

His proposal: organize code **vertically by feature**, not horizontally by technical layer.

Each feature contains everything it needs: its request, its validation, its handler, its data access, its response.

```
features/
  CreateOrder/
    CreateOrderCommand.cs
    CreateOrderValidator.cs
    CreateOrderHandler.cs
    CreateOrderResponse.cs
  CancelOrder/
    CancelOrderCommand.cs
    CancelOrderHandler.cs
```

This is **Vertical Slice Architecture** - or VSA. One feature = one vertical slice through all the layers.

### 2015-2020: Domain-Driven Design Goes Mainstream

In parallel, **Domain-Driven Design** (DDD) by Eric Evans - published in 2003 but long reserved for the elite - became more accessible thanks to the work of Vaughn Vernon, Greg Young, and Scott Millet.

The central concept: organize code around **Bounded Contexts** - explicit boundaries between business domains.

An e-commerce system does not think about "user" the same way in the context of orders, billing, and support. These are three distinct contexts, with their own rules, their own vocabularies, their own models.

The **domain-first** idea (or **package by feature**) follows naturally:

```
src/
  ordering/      <- tout ce qui concerne les commandes
  billing/       <- tout ce qui concerne la facturation
  inventory/     <- tout ce qui concerne le stock
  users/         <- tout ce qui concerne les utilisateurs
```

### 2020-2025: The Synthesis - Modular Monolith

The synthesis of these ideas yields the **Modular Monolith**:

- A single deployment (monolith)
- Highly cohesive, loosely coupled modules (like microservices, but within the same process)
- Explicit boundaries between domains (DDD Bounded Contexts)
- Organization by feature or slice (Vertical Slice Architecture)

Kijana Woodard, Sam Newman, Mauro Servienti, and many architects began documenting and popularizing this pattern under this name.

---

## Who Uses This Architecture?

### Shopify

Shopify is the canonical example. Their Rails monolith handles billions of transactions. Rather than migrating to microservices, they invested in **modularizing** their monolith: modules with explicit interfaces, declared dependencies, respected boundaries.

Their internal tool **Packwerk** enforces these boundaries at compilation - a module cannot directly call another module's classes without going through its public API.

### Stack Overflow

One of the most visited sites in the world runs on a few servers and a .NET monolith. Their approach is explicitly **modular**: separate .NET projects by domain, clear interfaces, strict internal discipline.

### Basecamp / Hey

DHH (David Heinemeier Hansson) and the Basecamp team have actively defended the modular monolith for years. Basecamp and Hey, two distinct products, run on Rails monoliths organized by business domain.

### GitHub (before partial migration)

GitHub long operated on a Rails monolith. When they migrated certain parts to services, they were explicit about the reasons: very specific scalability problems, not an ideological decision.

### .NET and Java Enterprise Teams

In the .NET ecosystem, the pattern is widespread thanks to frameworks like **MediatR** (CQRS + VSA), **Ardalis.Modulith**, and Microsoft's **Aspire** components.

In Java, **Spring Modulith** (officially supported by Spring since 2023) provides the tools to build and verify the modularity of a Spring Boot application.

---

## Concrete Structure: What It Looks Like

### Approach 1: Package by Feature (the foundation)

The minimum viable modular monolith: organize by domain, not by technical layer.

**Before (horizontal organization):**
```
src/
  controllers/
    UserController.ts
    OrderController.ts
    ProductController.ts
  services/
    UserService.ts
    OrderService.ts
    ProductService.ts
  repositories/
    UserRepository.ts
    OrderRepository.ts
    ProductRepository.ts
  models/
    User.ts
    Order.ts
    Product.ts
```

**After (vertical organization):**
```
src/
  users/
    UserController.ts
    UserService.ts
    UserRepository.ts
    User.ts
    index.ts          <- API publique du module
  orders/
    OrderController.ts
    OrderService.ts
    OrderRepository.ts
    Order.ts
    index.ts
  products/
    ProductController.ts
    ProductService.ts
    ProductRepository.ts
    Product.ts
    index.ts
```

### Approach 2: Vertical Slice Architecture (VSA)

Taken further, each **feature** is an autonomous unit.

```
src/
  orders/
    create-order/
      CreateOrderRequest.ts
      CreateOrderValidator.ts
      CreateOrderHandler.ts
      CreateOrderResponse.ts
    cancel-order/
      CancelOrderRequest.ts
      CancelOrderHandler.ts
    get-order/
      GetOrderQuery.ts
      GetOrderHandler.ts
      GetOrderResponse.ts
    shared/
      Order.ts              <- modèle partagé dans le module
      OrderRepository.ts
```

Each slice is independent. Modifying "cancel an order" cannot break "create an order" - they share only the domain model.

### Approach 3: Modular Monolith with Explicit Boundaries

The next level: modules as "mini-applications" with their own interfaces.

```
src/
  modules/
    ordering/
      api/              <- ce que les autres modules peuvent utiliser
        IOrderingModule.ts
        OrderDto.ts
      internal/         <- implémentation privée
        domain/
          Order.ts
          OrderItem.ts
        application/
          CreateOrderUseCase.ts
          CancelOrderUseCase.ts
        infrastructure/
          OrderRepository.ts
          OrderMapper.ts
      OrderingModule.ts  <- registre et bootstrap du module
    billing/
      api/
        IBillingModule.ts
        InvoiceDto.ts
      internal/
        ...
      BillingModule.ts
    inventory/
      api/
        IInventoryModule.ts
      internal/
        ...
      InventoryModule.ts
  app.ts                <- assemble les modules
```

**The fundamental rule:** a module can never import directly from another module's `internal/`. It goes only through `api/`.

### Example in Python (Django Modular)

```
myapp/
  core/             <- infrastructure partagée
  ordering/
    __init__.py     <- expose l'API publique
    models.py
    views.py
    urls.py
    services.py
    tests.py
  billing/
    __init__.py
    models.py
    views.py
    urls.py
    services.py
    tests.py
  inventory/
    __init__.py
    models.py
    views.py
    urls.py
    services.py
    tests.py
```

### Example in Java (Spring Modulith)

```java
// Spring Modulith impose la structure de packages
com.example.shop/
  ordering/          <- module Ordering
    OrderingModule.java
    Order.java
    OrderService.java
    internal/
      OrderRepository.java   <- inaccessible aux autres modules
  billing/           <- module Billing
    BillingModule.java
    Invoice.java
    BillingService.java
    internal/
      InvoiceRepository.java
```

```java
// Spring Modulith vérifie les dépendances à la compilation
@ApplicationModuleTest
class OrderingModuleTests {
    // Si Billing accède à OrderRepository (internal), le test échoue
}
```

---

## The Key Principles

### 1. High Cohesion, Low Coupling

What changes together should be together. The order creation page, validation logic, data access, and HTTP response form a cohesive unit. Separating them into different layers creates artificial coupling.

### 2. Explicit Boundaries

Each module exposes a **public API** and hides its implementation. Other modules only access this API. It is the same rule as between microservices - but without the network.

### 3. Feature Autonomy

A feature must be understandable, modifiable, and testable without touching other features. If changing "cancel an order" requires understanding "create an order," the separation is incorrect.

### 4. Event-Based Communication Between Modules

When a module needs to inform another of an event, it publishes a domain event - it does not call it directly.

```typescript
// Ordering publie un événement
eventBus.publish(new OrderCreatedEvent(orderId, customerId, total));

// Billing s'abonne à cet événement
eventBus.subscribe(OrderCreatedEvent, (event) => {
  billingService.createInvoice(event.orderId, event.total);
});
```

Modules remain decoupled. If Billing does not exist, Ordering still works.

---

## Modular Monolith vs Microservices: The Real Comparison

| Aspect | Traditional Monolith | Modular Monolith | Microservices |
|--------|----------------------|------------------|---------------|
| Deployment | 1 unit | 1 unit | N units |
| Operational complexity | Low | Low | High |
| Module boundaries | Informal | Explicit and verified | Network + API |
| ACID transactions | Native | Native | Saga pattern required |
| Debugging | Simple | Simple | Distributed, complex |
| Scalability | All or nothing | All or nothing | Independent per service |
| Migration to microservices | Difficult | Natural | Already distributed |

The modular monolith occupies a strategic position: it delivers the benefits of microservices separation (isolation, cohesion, boundaries) without the operational cost.

And if tomorrow a module needs to be extracted into an independent service? The boundaries are already defined. Migration is a surgical operation, not a rewrite.

---

## Sinra and the Modular Monolith

At Sinra, this architecture is not theoretical - it is the foundation of our codebase.

Sinra is a project management tool. It manages **issues**, **capabilities**, **releases**, **cycles**, **projects**, **teams**, **testings**, **pages**. Each of these is a distinct domain, with its own business rules, its own workflows, its own representations.

### Why the Modular Monolith Was the Right Choice

**Our domains have different lifecycles.** The logic for creating a release is independent from the logic for managing cycles. A change in testings should not impact issues.

**Our team is of a reasonable size.** Microservices optimize for teams of 50+ developers who need to deploy independently. At our size, that complexity would be pure overhead.

**Our transactions are frequently cross-domain.** Closing a cycle involves updating unfinished issues, notifying impacted capabilities, and updating the associated release. With microservices, each operation of this type would become a distributed Saga. With a modular monolith, it is a simple ACID transaction.

**Traceability is at the core of the product.** Sinra lets you see the exact state of a project at any moment. Debugging an inconsistent state is incomparably simpler when everything happens within the same process.

### Our Organization

```
app/
  domains/
    project_management/   <- issues, capabilities, cycles, releases
      issues/             <- décorateurs, extensions de collection
      capabilities/       <- services d'assignation, queries
      cycles/             <- value objects, queries
      releases/           <- calculateurs de capacité, value objects
    table_filtering/      <- commandes, queries, stratégies, opérateurs
    tenancy/              <- lifecycle organisation (setup, destroy)
  shared/
    sorting/              <- services et stratégies de tri
    mentions/             <- extraction et traitement des mentions
  models/                 <- modèles Rails (issues, teams, testings, pages...)
  controllers/            <- controllers minces, logique dans les domaines
```

Business domains group complex logic by context: `project_management` concentrates everything related to planned work, `table_filtering` isolates the advanced filtering engine, `tenancy` manages the lifecycle of organizations. Rails models remain the core of data access - domains layer on top to encapsulate logic that goes beyond the model alone.

### What This Concretely Changes for Our Users

**Data consistency is guaranteed.** When you assign a capability to a release, the link between the underlying issues and that release is always consistent - no asynchronous synchronization, no intermediate state.

**Performance is predictable.** No network latency between modules, no inter-service timeouts, no retry storms to manage.

**Development is fast.** Adding a feature in the `testings` module does not require deploying a new service, configuring an API contract, or managing version compatibility.

---

## When to Use the Modular Monolith

This architecture is the right choice when:

- **Your domain is complex** but your team is not yet a 200-developer organization
- **You need transactional consistency** across multiple domains
- **Your deployment surface must remain simple**: a limited DevOps team, a constrained infrastructure budget
- **You are building a product in an exploration phase**: domain boundaries evolve quickly at the start of a project
- **You want the option to migrate to microservices later** without rewriting

It is not the right choice if:
- You have parts of the system with radically different scalability needs (Netflix's video processing does not have the same requirements as the recommendations API)
- Your teams need to deploy independently at high frequency
- You already have technical constraints that impose different technologies per domain

---

## Conclusion

The modular monolith is not a compromise architecture. It is an architecture suited to a specific context: complex domains, teams of a reasonable size, transactional consistency needs, a desire to remain operationally simple.

The industry spent ten years believing that system complexity had to be managed through distribution. We are progressively rediscovering that it can be managed through internal structure.

Vertical Slice Architecture, domain-first, package by feature: these different terms describe the same fundamental idea. **Code should be organized around what it does, not how it is technically structured.**

At Sinra, this choice is not nostalgic. It is deliberate, justified, and owned. And it allows us to deliver consistent, reliable, traceable features - which is precisely what Sinra promises its users for managing their own projects.

---

*Sinra organizes team work around issues, capabilities, releases, and cycles - concrete concepts rather than abstract jargon. Sinra's architecture follows the same principle: concrete modules, explicit boundaries, an organization that reflects the business.*
