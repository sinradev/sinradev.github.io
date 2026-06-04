---

title: "Monorepo vs Polyrepo: The Debate Nobody Wins"
subtitle: "Google and Meta use massive monorepos. Netflix and Spotify use polyrepos. Both companies ship quality software at scale. What that says about the debate: the answer depends on context, not on a universal principle."
description: "The choice between monorepo and polyrepo is often framed as a fundamental architectural decision. It is mostly an organizational one. Each approach solves certain problems and creates others. Understanding which ones helps you choose."
categories: ["Development Productivity"]
excerpt: "If your team spends more time debating monorepo vs polyrepo than writing code, that is a sign the debate is framed wrong. Both approaches work. The real question is: which structure fits your organization and your delivery cycle?"
date: 2026-06-08 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-08-monorepo-vs-polyrepo-featured.svg

---

Twitter (now X) migrated from polyrepo to monorepo in 2022. Airbnb maintains a monorepo. Lyft, Uber, and most large American tech companies have their own repo architectures, none universally identical.

On the other side, the open source ecosystem is almost universally polyrepo. Netflix's microservices live in separate repos. Most startups begin with polyrepo and migrate or not depending on the problems they encounter.

This panorama leads to no universal conclusion. Both approaches coexist in companies shipping at scale. That suggests the choice between the two is less critical than online debates make it seem - and that the real question is understanding which problems each approach actually solves.

## What the Monorepo Solves

**Dependency consistency.** In a monorepo, all projects use the same versions of shared dependencies. There is no possible divergence between project A using version 3.2 of a library and project B using version 2.8. Dependency updates propagate to all projects simultaneously.

This consistency has a cost: dependency updates affect all projects at once. If a version 4.0 update introduces an incompatible API, all projects using that library must migrate simultaneously. That is potentially a large operation.

**Cross-project refactoring.** In a monorepo, renaming a function or modifying a shared interface can be done in a single operation across all the code. The compiler or tests immediately signal every location that needs fixing. Consistency is guaranteed by tooling.

In a polyrepo, the same operation requires updating multiple repos, probably in a specific order, while managing transition versions. It is possible, but slower and more error-prone.

**Global visibility.** A monorepo allows any developer to browse all of the organization's code. It facilitates reuse of existing code (it is discoverable), understanding of dependencies between projects, and onboarding of new developers who have a complete view of the system.

**Atomic cross-project commits.** A change that touches multiple projects can be committed in a single operation with a single commit reference. Consistency between projects is guaranteed at every state of the code.

## What the Polyrepo Solves

**Team autonomy.** Different teams working on different projects can make their own choices about stack, process, and release cadence, without being constrained by the conventions of a single monorepo. A team can migrate to a new version of a framework without blocking the entire organization.

**Tool performance.** Tools like git, IDEs, and CI pipelines are not designed for repos measured in terabytes. Google had to build its own tools (Piper, CitC) to manage its monorepo. Most organizations have neither the resources nor the need to do the same. A polyrepo keeps repos at sizes manageable by standard tools.

**Boundary clarity.** One repo equals one service or application equals one clear ownership boundary. Ownership is immediately visible: who owns this repo, who has merge rights, who gets notified when something breaks. In a monorepo, these boundaries must be defined and maintained by convention.

**Security and access control.** In a polyrepo, access can be controlled per repo. A contractor can have access to certain repos but not others. In a monorepo, access control is more granular and more complex to maintain.

## The Problems Neither Solves

A frequent confusion in this debate: believing that the choice of repo architecture resolves deeper organizational problems.

**Cross-team coordination.** Whether services are in a monorepo or separate polyrepos, if the teams building them do not communicate, interfaces will be inconsistent and dependencies poorly managed. Repo architecture does not create coordination. It can facilitate or complicate it, but it does not replace it.

**Code quality.** A monorepo with bad code is bad code in one place. A polyrepo with bad code is bad code in multiple places. The structure of the repo does not change the quality of what is in it.

**Delivery speed.** Fast teams are fast because they have clear processes, reliable pipelines, and a culture of accountability. Not because they chose the right type of repo. Slow teams are slow for reasons that the choice of repo does not change.

## The Cost of Migration

An underestimated aspect of this debate: the cost of migrating from one approach to the other.

Migrating from polyrepo to monorepo is a significant operation. It requires merging the git history of different repos, reorganizing CI/CD pipelines, adapting access rights, and training teams on new tools and conventions. For a medium-sized organization, that is several weeks or months of work.

Migrating in the other direction is equally costly. Extracting a service from a monorepo into its own repo involves separating history, managing circular dependencies that had developed, and rebuilding independent pipelines.

In both cases, the migration has a direct cost (time spent) and an indirect cost (disruption to delivery work during the migration). This cost must be weighed against the expected benefits.

## What Team Size Tells You

Team size and structure is the most predictive factor for the optimal choice.

**Small teams (fewer than 10 developers, single product):** the debate is generally inconsequential. Both approaches work. If the product is a monolith or a few services, a simple polyrepo is sufficient. If it is a project with several tightly related packages, a monorepo simplifies dependency management.

**Medium teams (10-100 developers, multiple services):** tensions between consistency (monorepo) and autonomy (polyrepo) start to manifest. The choice depends on team culture and the degree of coupling between services. Tightly coupled services benefit from monorepo. Independent services benefit from polyrepo.

**Large teams (100+ developers, dozens of services):** both approaches require significant tooling investment. The monorepo requires incremental build tools (Bazel, Turborepo, Nx). The polyrepo requires coordination tools and cross-repo dependency management (Renovate, coordinated versioning systems).

## The Pragmatic Approach

For most teams, the practical decision is:

Start with the approach that minimizes initial friction - generally a simple polyrepo for small projects, or a monorepo if the project already has multiple tightly linked packages from the start.

Observe the problems that actually emerge, not the ones you anticipate. If diverging dependency problems become frequent, consider the monorepo. If CI pipelines become too slow and teams suffer under shared conventions, consider polyrepo.

Avoid premature migration. The problems that justify a repo migration are generally visible and painful when they exist. If you do not clearly feel those pains, the status quo is probably correct.

---

The monorepo vs polyrepo debate is often more ideological than pragmatic. There are engineers with deep convictions about the superiority of one approach or the other, generally based on their experience in a particular context that is not yours.

The real question is not "what is the best repo architecture?" It is "what concrete problems do I actually have, and which architecture solves them with the least overhead?"

That is not as satisfying as a universal answer. It is more honest.
