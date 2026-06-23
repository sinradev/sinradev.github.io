---

title: "#NoEstimates: Good Idea or a FAANG Luxury?"
subtitle: "The #NoEstimates movement proposes stopping all estimation of development work. The arguments are solid. The conditions under which it works are specific. It is not a universal recipe."
description: "The #NoEstimates movement challenges the value of estimation in software development. Its arguments point to real problems. But removing estimates without replacing them with something useful creates other problems for other stakeholders."
categories: ["Project Management", "Work Culture"]
excerpt: "Estimation is often a shared fiction: developers give numbers they know are imprecise, management treats them as commitments, and when estimates are exceeded, everyone is surprised to be surprised. #NoEstimates says: let's stop the fiction. The question is: what do we replace it with?"
date: 2026-06-10 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-10-no-estimates-featured.png

---

Here is a familiar scene. The team is in a planning meeting. The Product Owner presents a new feature. A developer asks for clarifications. A discussion begins. Fifteen minutes later, someone says: "OK, how do we estimate this?" Planning poker. Fibonacci. Arguments about whether it's 5 or 8 points. Reluctant consensus: 8 points. The meeting continues.

Three weeks later, the feature is still in progress. It took twenty points. Nobody is surprised.

This is the context in which the #NoEstimates movement emerged. Agile practitioners who observed that estimates consume time, create artificial pressure, are systematically inaccurate, and do not really deliver the value they are supposed to provide.

## The Valid Arguments of the #NoEstimates Movement

The #NoEstimates movement, popularized notably by Woody Zuill and Vasco Duarte, is grounded in several well-founded observations.

**The cost of estimation is real.** Estimating takes time. Planning poker sessions, refinement meetings, discussions about ticket granularity - this is time that is not development time. For a team doing continuous development, this cost can represent several hours per week.

**The accuracy of estimates is low.** Decades of software engineering research shows that development estimates are systematically optimistic, sometimes by a factor of two or three. Individual estimation is poor. Collective estimation (planning poker) is slightly better but remains fundamentally imprecise for complex items.

**Estimates create parasitic commitments.** When a developer estimates a ticket at 3 points and it takes 7, there is tension. Not productive tension (the work took longer because it was more complex than expected - that is information), but social tension (the person "missed" their estimate). This tension pushes teams to deliberately underestimate difficult items, or to break items apart so they fit into comfortable boxes.

**Management by estimates creates bad dynamics.** When estimates are used to measure developer productivity or to "hold deadlines," behaviors change: estimates are inflated to create comfort, stories are broken down to maximize the number of closed points, and velocity becomes a game rather than a measure.

## What #NoEstimates Proposes Instead

#NoEstimates does not say "don't plan." It says "use different indicators for planning."

The main tool proposed: throughput, the number of items completed per period. Rather than estimating the size of each item and summing the estimates to plan, you measure the historical delivery rate and predict future deliveries on that basis.

The argument: if the team has delivered an average of 12 items per sprint over three months, you can predict it will deliver around 12 items in the next sprint, regardless of the estimated size of those items. If items are of relatively homogeneous size (which certain splitting practices make possible), this prediction is at least as accurate as the sum of estimates.

This reasoning is fundamentally statistical. It works when conditions are met: a long enough history for throughput to be stable, items of reasonably homogeneous size, and confidence in the future consistency of the pace.

## The Conditions That Make #NoEstimates Viable

#NoEstimates works well in specific contexts that its proponents don't always highlight clearly enough.

**A product in continuous development without strong external date constraints.** If a team is developing a SaaS product with a continuous delivery flow and no contractual commitments to specific features at specific dates, throughput is a good planning tool. Stakeholders can see the delivery pace and infer when something will be delivered.

**Items of controlled granularity.** For throughput to be a meaningful measure, items must be of similar size. If some items take an hour and others take three weeks, counting the number of items completed says nothing useful. #NoEstimates often implicitly assumes a discipline of item splitting that teams who do a lot of estimation do not necessarily have.

**A relationship of trust with stakeholders.** If stakeholders (management, clients, investors) need precise predictions about specific features at specific dates, throughput alone is not enough to satisfy this need. Either stakeholders trust the team to deliver the most valuable work at the pace it maintains, or another prediction mechanism is needed.

**A stable team.** Historical throughput is only predictive if the team is stable. Arrivals and departures, stack changes, periods of high technical debt - all these factors vary throughput in ways that past history does not predict.

## When Estimates Still Have Value

There are contexts where estimates provide real value that throughput does not replace.

**Fixed-price or fixed-scope projects.** If you commit to delivering a defined set of features by a fixed date and budget, you need an upfront estimate. The historical throughput of another team or another project does not tell you how much this specific project will cost.

**Investment prioritization.** When a team must choose between two candidate features, a rough estimate of relative effort combined with a value estimate provides useful information. "This feature is worth twice as much but takes ten times longer" is prioritization information that throughput alone does not produce.

**Anomaly detection.** If a ticket takes much longer than expected, that is information. Perhaps it was misunderstood, perhaps there is an underlying technical problem, perhaps the complexity was structurally underestimated. The estimate as a reference point allows detecting these anomalies.

**External communication.** "This feature will be ready in about three weeks" is useful communication for clients or downstream teams. Producing this from throughput requires a conversion that not everyone in the organization makes naturally.

## The Real Problem That #NoEstimates Identifies

The lasting value of the #NoEstimates movement is less in removing estimates than in the diagnosis it offers about how estimates are used in organizations.

When estimates are used to evaluate developer productivity: that is a misuse of estimates, and #NoEstimates is right to criticize it.

When estimates create commitments that ignore uncertainty: that is a misuse of estimates, and #NoEstimates is right to criticize it.

When estimates consume more energy than they deliver in value: that is a misuse of estimates, and #NoEstimates is right to criticize it.

But this diagnosis does not imply that removing estimates is the only possible response. Improving how estimates are used - treating them as probabilistic predictions with uncertainty ranges, not using them to evaluate individuals, revising them when available information changes - addresses the same problem.

---

#NoEstimates is a radical response to a real problem. Like all radical responses, it works perfectly in some contexts and poorly in others.

The real progress is not in choosing between "estimate" and "don't estimate." It lies in being honest about what estimates can and cannot do, and in adapting their use to the real context.
