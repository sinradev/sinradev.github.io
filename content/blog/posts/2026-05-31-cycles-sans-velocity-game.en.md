---

title: "Cycles without the velocity game: escaping Scrum theater"
subtitle: "Velocity has become the king metric of software development. It measures team productivity, justifies planning, reassures management. It also measures something nobody can really define."
description: "Scrum velocity is a proxy metric that has often become the primary metric. Teams optimize their estimates to maintain a stable velocity rather than to deliver value. Here is how to get out of that trap."
categories: ["Project Management", "Work Culture"]
excerpt: "\"Our velocity is 42 points per sprint.\" This sentence is spoken with pride in hundreds of planning meetings every week. What does it actually say? That the team is closing tickets at a consistent pace. What it does not say: whether those tickets create value, whether the estimates are realistic, whether the team is thriving."
date: 2026-05-31 00:00:00 +0100
featured_image: /assets/images/blog/2026-05-31-cycles-sans-velocity-game-featured.png

---

There is a sprint planning meeting happening right now in hundreds of companies. The team is gathered, the backlog is open. And somewhere in the room, someone says: "If we want to maintain our velocity, we should cap this sprint at 40 points."

What this sentence reveals: the team is not planning to deliver value. It is planning to maintain a stable number.

That is the velocity game. And it is one of the most widespread pathologies of Scrum in enterprise settings.

## Where velocity comes from

Velocity was born from a sound intuition: measure a team's capacity to deliver work over a given period, in order to plan future periods realistically.

The core idea is healthy. If a team has been delivering an average of 35 story points per sprint for three months, it is reasonable to plan the next sprints at 35 points. That is empirical predictability, not guesswork.

The problem starts when this predictive metric becomes an evaluative one.

## How velocity becomes a target

Goodhart's Law states roughly: when a measure becomes a target, it ceases to be a good measure.

That is exactly what happens with velocity.

In the beginning: the team estimates tickets in story points in order to plan realistically. Velocity is observed, not driven.

A few months later: the manager starts looking at velocity in the Jira reports. They ask whether a dip in one sprint's velocity is "concerning." The team starts defending its velocity in meetings.

A year later: the team estimates tickets by choosing values that keep velocity stable. Large tickets are broken up to stay under a comfortable threshold. Small tickets are grouped together to hit the minimum. Acceptance criteria adjust to fit available points rather than actual needs.

Velocity is now a target. And as a target, it pushes the team to optimize for itself, not for delivered value.

## Scrum theater

The velocity game is one of the symptoms of Scrum theater: following the forms of a method without retaining its spirit.

Scrum theater looks like this:

**Daily standups** that run fifteen minutes on the calendar and last forty-five in practice, ending with "let's take this to DMs." Everyone answers the three ritual questions. Nobody really flags what is blocking them.

**Sprint reviews** where the team presents what was delivered, but stakeholders give no real feedback because the important decisions were already made elsewhere.

**Retrospectives** where the same problems are listed every sprint, with the same action items that are never implemented because they would require structural changes the Scrum Master has no mandate to make.

**Sprint planning** where tickets are estimated in seven minutes each because there are too many and the meeting has to end before noon.

The form is there. The substance has disappeared.

## What cycles can do differently

A cycle is not necessarily better than a sprint. It is not a method with a user manual. It is simply a bounded period of time for organizing work.

What it opens up: defining the cycle based on what needs to be done rather than an imposed cadence.

A cycle can last two weeks, four weeks, six weeks - depending on what there is to do and how the team works. It can have a theme: "This cycle, we focus on homepage performance." It can have a measurable objective: "By the end of this cycle, the load time is under 2 seconds."

The fundamental difference: the cycle is defined by its objective, not its duration. Duration is a constraint that helps define an achievable objective, not the other way around.

## Estimating without story points

One way to escape the velocity game is to change how you estimate.

Story points are supposed to represent relative complexity, not time. In practice, in most teams, they represent time. And they are manipulated to hit the velocity target.

Alternatives that have shown their effectiveness in some teams:

**T-shirt sizing.** XS, S, M, L, XL. Less precise, but more honest about the nature of estimation. You are not pretending to know whether something takes 3 points or 5 points. You know whether it is small, medium, or large.

**Probabilistic estimation.** Instead of a number, a range: "This work takes between 2 and 5 days depending on what surprises we run into." More realistic, harder to game.

**No estimation at all.** Some teams, notably in the #NoEstimates movement, have simply stopped estimating at this level of granularity. They track the number of issues completed per period rather than hypothetical points.

None of these approaches is universally better. What is universally true: any estimation metric can be gamed if it becomes a performance metric.

## What a cycle objective shifts

When a cycle has a clear objective - an expected outcome, not just a list of tickets - something changes in how the team makes decisions along the way.

With a velocity to maintain: every decision is filtered by "does this move me toward my points?" An unexpected but important issue outside the sprint scope creates tension. If you take it on, you miss the velocity. If you do not, you ignore something important.

With a cycle objective: every decision is filtered by "does this move me toward the objective?" An unexpected but important issue is either within the objective's scope (you take it on) or outside it (you note it for the next cycle). The trade-off feels more natural.

The cycle objective also gives a success criterion independent of delivery metrics. "Did we achieve the objective of this cycle?" is a question you can answer with yes or no, with substantive arguments. "Did we maintain our velocity?" is a question you can always answer yes to if you have calibrated your estimates well enough.

## Rituals that actually matter

Just because Scrum theater exists does not mean all Scrum rituals are useless. Some have real value, provided they are practiced for the right reasons.

**Daily synchronization** has value when it serves to detect real blockers. Not to deliver a status report. The useful question is not "what did you do yesterday?" but "is anything preventing you from moving forward today?"

**The end-of-cycle review** has value when it produces real feedback from people who use or will use what was delivered. Not a demo to confirm that tickets are closed.

**The retrospective** has value when it produces concrete actions with an owner and a deadline. Not a list of positives and negatives that disappears into Confluence.

What these rituals have in common when they work: they produce decisions, not reports.

## The question few teams ask themselves

At the end of a cycle, what question does the team ask?

In many Scrum teams: "Did we close the planned tickets?" If yes, the cycle is a success. If no, you figure out what blocked it.

A more useful question: "What can users do now that they could not do before this cycle?"

If the answer is empty - if everything done during the cycle was technical debt, internal refactoring, infrastructure - that is not necessarily a problem. But it is information. It says that this cycle did not create direct value for users, and the team should be able to explain why that was the right call.

If the answer is there but vague - "we improved overall performance" - that is also information. It says the team struggles to articulate the value of what it delivers.

The ability to answer this question clearly is one of the best indicators of a development team's health.

## Getting out of the velocity game without breaking everything

Most teams cannot drop story points tomorrow. They are embedded in reports, in management commitments, in years of working habits.

What can change gradually:

Start by adding an explicit objective to every cycle, even if you keep the points. The objective becomes the main conversation. The points remain for predictability.

Reduce the number of tickets per cycle rather than inflating estimates. Fewer tickets, better defined, with precise acceptance criteria.

Evaluate the cycle on its objective achieved, not on its velocity. Gradually, the team's focus shifts.

Velocity can remain as a capacity indicator. But when the cycle objective becomes the primary success criterion, the velocity game loses its appeal.

---

The problem is not the sprint. It is confusing the sprint's duration with the sprint's objective. And confusing velocity with value.

A well-defined cycle does not need 42 points to know whether it succeeded. It needs a clear question: by the end, what will we have delivered, and who does it serve?
