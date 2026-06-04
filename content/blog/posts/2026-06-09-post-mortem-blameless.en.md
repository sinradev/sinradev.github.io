---

title: "Blameless Post-Mortems: Why They Are Rare in Europe"
subtitle: "The blameless post-mortem is a practice born in Google's SRE culture. The idea: analyze incidents without looking for culprits, in order to understand systemic causes. In theory, it is obvious. In practice, it is culturally difficult."
description: "The blameless post-mortem rests on a simple principle: incidents are symptoms of systemic flaws, not individual faults. This practice is well documented and rarely applied faithfully, particularly in European corporate cultures."
categories: ["Work Culture", "Development Productivity"]
excerpt: "The production database went down on Friday at 6pm. The post-mortem was held on Monday. In the write-up: five process improvement points, three technical remediation actions, and a discreet mention that 'the incident was caused by human error during migration.' That sentence is the opposite of a blameless post-mortem."
date: 2026-06-09 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-09-post-mortem-blameless-featured.svg

---

It is 6:47pm on a Friday. An alert fires: the production database is no longer responding. The on-call engineer opens their terminal and starts investigating. Fifteen minutes later, they have found the cause: an automatic migration triggered by an incorrect configuration has locked the main table of the service. The fix takes twenty minutes. At 7:22pm, the service is restored.

The following Monday, the post-mortem. The timeline is reconstructed. Remediation actions are listed. And somewhere in the document, a sentence: "The incident was triggered by a configuration error made by engineer X during Friday's deployment."

That document is not a blameless post-mortem. It is a classic post-mortem with a designated culprit.

The difference between the two is not cosmetic. It determines whether your organization is capable of learning from its incidents, or whether it is condemned to repeat them.

## What "Blameless" Actually Means

The blameless post-mortem does not say that individuals do not make mistakes. It says that when an individual makes a mistake that causes an incident, the relevant question is not "who made the mistake" but "why did the system allow this mistake to happen, and why did it not limit its impact."

This perspective rests on a well-documented cognitive principle: in a complex system, individual errors are rarely the root cause of incidents. They are the trigger. The root cause is generally a combination of systemic factors: ambiguous procedures, failing tooling, lack of visibility, time pressure, accumulated technical debt.

If you only identify the individual error, you may correct the behavior of the person involved (who, under the stress of the incident, had probably already internalized the lesson). You do not correct the systemic factors that made the error possible and probable.

Next time, it will be a different person. In the same systemic conditions. With the same result.

## Why Blame Persists

If the blameless post-mortem is clearly superior, why is it so rare in practice?

**The scapegoat psychology.** Finding a human responsible for an incident satisfies a deep psychological need. It gives the impression that the problem is solved (we know who did what) and that it will not happen again (the person will be more careful). These impressions are comforting and false.

**Hierarchical structure.** In a classic hierarchical organization, incidents have a cost: they are escalated to managers, clients, sometimes to leadership. It is natural for teams to want to show that the problem has been identified and that measures have been taken. Naming a person satisfies this implicit demand.

**The culture of individual risk.** In many companies, making an error that causes an incident has consequences for individual performance reviews. Even without an explicit disciplinary process, there is an informal memory. In this context, engineers do not proactively report problems they have detected before they become incidents. They silently work around them or hope they never materialize.

**Legalism.** In some sectors (finance, healthcare, regulated industries), regulation requires traceability audits that identify the actors of each operation. This legal framework influences post-mortem culture even when it is not strictly required.

## The European Cultural Specificity

The blameless practice emerged primarily from American companies (Google, Etsy, Netflix) with a management culture very different from traditional European corporate culture.

A few characteristics of European corporate culture that complicate adoption:

**More pronounced hierarchy.** In many European companies, management distance is greater. A junior engineer has difficulty flagging a problem they discovered if doing so means contradicting a decision made by their superior or exposing a flaw in a process approved by management.

**The culture of individual performance.** Annual reviews and individual bonuses are a deeply entrenched form of organization in Europe. In this system, errors have direct individual consequences. It is rational for individuals to minimize their visibility in incidents.

**Labor law.** Documenting an individual error in an incident report can have legal implications in certain European contexts. HR and legal teams are sometimes involved in post-mortems for serious incidents, which creates natural caution around naming responsible parties.

**The culture of discretion.** The tendency not to call out colleagues publicly is culturally strong in many European countries. The blameless post-mortem requires an openness about errors committed that can clash with this implicit norm.

## What a Good Blameless Post-Mortem Contains

A blameless post-mortem does not say "no one is responsible." It says "individual actions are explained by the systemic context." This nuance matters.

The detailed timeline of a good post-mortem describes what engineers did and why they did it - with empathy for the fact that at the time of the incident, with the available information and time pressure, their decisions were rational. It is only in hindsight that they appear as errors.

This approach requires what John Allspaw calls "assuming competence": starting from the premise that the people involved in an incident were competent professionals who did their best with what they knew and what they had available.

From this perspective, the useful questions become: what made this action risky without that being visible? What could have signaled the danger before the action was taken? What amplified the impact of the error rather than containing it?

The answers to these questions lead to systemic improvements: better observability, additional validation processes, circuit-breakers, clearer documentation, targeted training.

## The Incident as Organizational Learning

The blameless post-mortem rests on a conviction: incidents are opportunities for organizational learning.

Organizations that treat incidents as individual faults have a low learning rate. Information about what happened does not circulate freely because the people involved have an interest in minimizing their role. Systemic causes remain in place. Incidents repeat themselves.

Organizations that treat incidents as learning opportunities have a high learning rate. Engineers proactively report near-misses (incidents that could have happened but did not). Post-mortems are read by teams outside the directly involved team. Systemic improvements are prioritized and tracked.

The maturity gap between the two types of organization is often measured in terms of mean time to recovery (MTTR): organizations that learn from their incidents recover faster because they have the playbooks, observability, and automations that previous incidents revealed as necessary.

## Establishing the Practice in an Unfavorable Culture

It is difficult to impose the blameless post-mortem in an organization whose culture is fundamentally blaming. But it is possible to create spaces where the practice can gradually take root.

Start with small incidents, those with no serious business consequences. These incidents have less management visibility and allow experimentation with the format without political stakes.

Clearly separate the post-mortem (technical and systemic analysis) from disciplinary processes (if they exist). The post-mortem must never be the vehicle for a sanction.

Model the desired behavior. When a manager or lead shares their own mistakes in a post-mortem, they signal that it is acceptable to do so.

Measure and share the improvements produced by post-mortems. When teams see that post-mortems produce concrete improvements (not just bureaucracy), their engagement in the process increases.

---

The blameless post-mortem is not a technique. It is a philosophy about the nature of errors in complex systems.

The real question is not "who made the mistake?" It is "why did our system allow this mistake to become an incident, and how do we change it so that the next mistake - because there will be one - does not have the same impact?"

That question is harder. It is also more useful.
