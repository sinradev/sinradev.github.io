---

title: "Feature Flags: Real Power and Hidden Complexity"
subtitle: "Feature flags let you deploy code without activating it, test with a fraction of users, and roll back instantly. They also introduce complexity that accumulates quietly until it becomes unmanageable."
description: "Feature flags are a powerful tool for progressive deployment and separating deployment from delivery. Their hidden cost is the debt of accumulated flags, the complexity of conditional code, and the combinatorial explosion of states to test."
categories: ["Development Productivity"]
excerpt: "Your codebase has 47 active feature flags. Five are documented. Three are tied to features shipped nine months ago and no one thought to remove them. Two conflict with each other: enabling both at the same time produces undefined behavior. You have just discovered why feature flags are not free."
date: 2026-06-07 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-07-feature-flags-puissance-complexite-featured.svg

---

The concept of a feature flag is elegant in its simplicity: a condition in the code that determines whether a feature is active or not, controlled from outside the code. Deploy the code, activate the feature when you are ready. Deactivate it instantly if a problem appears.

This elegance conceals a more complicated operational reality. Feature flags are a powerful tool, but they accumulate, they interact, they create conditional code that becomes difficult to read and test, and they end up costing more than they return if not actively managed.

## What Feature Flags Actually Enable

The legitimate use cases for feature flags are well defined, and distinguishing them from uses that create more problems than they solve is the first step toward thoughtful usage.

**Deployment / delivery separation.** This is the most powerful use case. Deploying code to production without activating it allows you to validate that the deployment is healthy (no crash, no performance regression) before exposing the feature to users. Teams with mature CI/CD pipelines use feature flags to make their deployments near-continuous.

**Canary releases.** Activating a feature for a subset of users (1%, 10%, 50%) lets you measure its real impact before a full rollout. If metrics show a problem, you reduce the percentage or deactivate. It is rollback without a rollback.

**A/B testing.** Presenting two versions of a feature to two groups of users and measuring behavioral differences. Useful for design and UX decisions with enough user volume to have statistical significance.

**Environment-based configuration.** Enabling certain features only in development or staging, disabling expensive external integrations locally. This is a simple, low-risk use.

**Feature switches for enterprise clients.** Some clients have contracts that include specific features. Feature flags allow you to activate those features per account or per organization without maintaining separate branches.

## The Accumulating Flag Debt

The problem with feature flags is that they are easy to create and difficult to remove.

Creating a feature flag takes two minutes. Removing a feature flag once a feature is fully deployed requires: verifying that the flag is active for 100% of users, removing all conditional branches in the code, removing the flag configuration, and testing that the behavior without the flag is identical to the behavior with the flag enabled. It is work, and it is work that delivers no visible feature.

Predictable result: flags accumulate. Three months after a feature is shipped, the corresponding flag is still there. A year later, no one knows whether removing it is safe. Two years later, the conditional code is so intertwined with everything else that nobody touches that file.

Research on large codebases consistently shows that obsolete feature flags are a significant source of technical debt. They increase the surface area of code to maintain, complicate the reading of logical flow, and create states that are impossible to test exhaustively.

## The Combinatorial State Explosion

One feature flag creates two states: enabled or disabled. Two feature flags create four possible states. Ten feature flags create 1,024 possible states. Fifty feature flags create more states than you can test in a lifetime.

In practice, most of these combinations never occur. But some do, and interactions between flags can produce unexpected behaviors that only manifest in specific configurations.

Automated tests generally cover the main states (everything enabled, everything disabled) and perhaps a few important combinations. They rarely cover the full combinatorial space. Bugs that live in specific flag combinations are difficult to find and difficult to reproduce.

## The Readability of Conditional Code

Code without feature flags has a readable logical flow: the feature is there, it works in a particular way.

Code with multiple feature flags on the same code paths becomes difficult to read. Each conditional branch interrupts the narrative flow. Developers reading the code must keep the state of the flags in mind to understand what actually executes in each configuration.

This problem worsens over time because the developers who created the flags understand their meaning, but those who come afterward must reconstruct that context on every read.

## The Rules That Limit Debt

Teams that use feature flags successfully at scale generally have explicit rules to limit their accumulation.

**Mandatory expiration date.** Every feature flag created has an expiration date. Once that date passes, either the flag is removed or the date is explicitly pushed back with a justification. This process forces a conscious decision about the flag's lifespan.

**Assigned owner.** Every feature flag has an owner responsible for removing it once the feature is deployed. Without an owner, flags are orphaned from the moment of their creation.

**Regular inventory.** A periodic review (monthly or quarterly) of all active flags, asking for each flag: is it still necessary? If not, when will it be removed?

**Limit on total count.** Some teams set an absolute limit: no more than X active flags at any time. Creating a new flag requires removing an old one. This constraint forces treating flags as a resource to be actively managed.

## The Underused Alternatives

Feature flags are sometimes used to solve problems that have better solutions.

**Feature flags to avoid git branches.** Some teams use feature flags to allow multiple developers to work on interdependent features without using long-lived branches. This is a solution that moves complexity from git into application code. Trunk-based development techniques combined with small commits are often a better answer.

**Feature flags for environment configuration.** Environment variables are often more appropriate for differences between development, staging, and production. Feature flags add an unnecessary management layer for this use case.

**Feature flags as a substitute for real versioning.** If an API changes incompatibly, the right answer is versioning (v1, v2), not a feature flag. Feature flags for API changes create a proliferation of conditions in service layers.

## When Not to Use Feature Flags

There are contexts where feature flags are not the right tool despite their popularity.

**Small projects with low deployment frequency.** If you deploy once a month and your team is small, the value of feature flags does not justify the cost of managing them. A clean deployment with manual rollback is simpler.

**Features with strong consistency constraints.** If a feature requires database migrations or API changes that cannot coexist with the old version, a feature flag does not truly protect you. Rollback remains complex even with the flag.

**Domains where partial state is dangerous.** In financial or compliance systems, exposing a partially implemented feature to some users can create data inconsistencies that are difficult to correct. The added caution of feature flags does not offset the risk of partial states.

---

Feature flags are a valuable tool for teams with mature deployment pipelines, large teams, and progressive deployment needs. Their value is real and measurable.

Their cost is equally real. Treating it as such - with explicit removal rules, assigned owners, and a regular inventory - is the difference between a tool that accelerates work and a complexity debt that ends up slowing it down.
