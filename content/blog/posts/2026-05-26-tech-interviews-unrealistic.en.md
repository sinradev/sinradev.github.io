---

title: "The great theatre of tech interviews: why we hire into a void"
subtitle: "Take-home tests that last a weekend, live coding under surveillance, Google questions for a CRUD developer role. Tech hiring is broken. And everyone knows it."
description: "Technical interviews have become an ordeal disconnected from the reality of work. Unrealistic tests, live coding under pressure, out-of-context questions. Here's why two interviews are enough, and why the probation period exists for the rest."
categories: ["Work Culture", "Developer Productivity"]
excerpt: "How many hours of your life have you spent implementing a bubble sort algorithm for a role where you'll spend your days making REST calls and debugging SQL queries? Tech hiring has turned into an obstacle course that measures nothing useful."
date: 2026-05-26 00:00:00 +0100
featured_image: /assets/images/blog/2026-05-26-entretiens-tech-irrealistes-featured.png

---

Somewhere in a meeting room, a candidate is coding a binary tree on a whiteboard. He's sweating. Two recruiters watch in silence, pens raised. The role: maintaining a PHP/Symfony e-commerce back-office. There will never be a single binary tree in that project.

This scene repeats thousands of times every week. And everyone, candidate and recruiter alike, knows perfectly well that it's absurd.

Technical hiring is broken. Not slightly dysfunctional: structurally broken. And the way we're fixing it right now mostly consists of adding more steps.

## The take-home test: "3 hours, max"

The description says three hours. The project itself hasn't read the description.

"Build a complete REST API with JWT authentication, unit tests, OpenAPI documentation, error handling, a Dockerfile, and if you have time, a frontend interface."

Three hours. Sure.

What actually happens: the candidate spends an entire weekend on it. Friday evening scoping the project. Saturday coding cleanly because they know the quality will be judged. Sunday cleaning up, documenting, writing the README.

And if they don't, if they truly deliver three honest hours of work, they'll be compared against candidates who sacrificed their weekend. They'll be labelled "not very invested." They'll be eliminated.

The take-home test, in its current form, doesn't measure technical skills. It measures willingness to give away personal time without compensation. It's a precarity test, not an engineering test.

Some companies go further: they collect functional prototypes this way without ever hiring anyone. It's rare, but it happens. And the doubt alone is enough to make the whole exercise toxic.

## Live coding: coding like your life depends on it

Live coding was born from a good intention: watch someone solve a problem in real time, observe their way of thinking, their relationship with uncertainty, their ability to communicate under effort.

In practice: a candidate alone facing a shared editor, two or three people reading their code live, a mental countdown running, and an algorithmic problem pulled from the Google interview prep handbook.

The kind of problem that 99% of working developers couldn't solve from memory, in twenty minutes, under pressure, without documentation.

"Implement an LRU cache."
"Find the shortest path in a weighted graph."
"Reverse a linked list."

For a full-stack developer role on a B2B SaaS application.

What's measured: the ability to perform under artificial stress, in an artificial context, on artificial problems.

What's not measured: how the person reads an unfamiliar codebase, how they ask relevant questions, how they trade off speed against quality, how they handle inherited technical debt, how they communicate with non-technical stakeholders.

In other words: everything that determines whether someone will be good at the job.

## Five interviews in a row: the exhaustion marathon

It's become the norm in tech companies that believe they're rigorous: five, six, sometimes seven interviews for a single role.

First interview: HR screening, 30 minutes, to verify you speak English and did actually apply.

Second interview: introductory technical interview with a lead dev, to verify you know what a variable is.

Third interview: take-home technical test, one week deadline, three hours announced, one weekend in reality.

Fourth interview: live code review of the test, with two developers looking for traps in your implementation.

Fifth interview: culture fit interview with the manager, to verify you're "aligned with our values."

Sixth interview (bonus at ambitious startups): team presentation, twenty minutes demoing your test, rapid-fire questions.

Total: between 15 and 25 hours invested by the candidate. To learn, often, that they "decided to fill the position internally."

This process eliminates candidates who are currently employed and don't have the luxury of sacrificing their evenings and weekends for a month. It structurally favours those with free time, which means those who are either very junior or between jobs. This is not a competence filter. It's a social filter.

## Google questions for the open-plan office role

There's a particularly absurd moment in some technical interviews: the gap between the company hiring and the questions they ask.

A twenty-person startup selling an online invoicing tool for SMEs that asks: "Explain how consensus works in a distributed system."

A web agency that builds WordPress sites that asks: "What's the time complexity of your search algorithm?"

A software publisher whose main product runs on shared hosting that asks: "How would you optimise a database at the scale of billions of entries?"

These questions come from question banks copied from FAANG interview prep guides. They were designed to hire engineers who will architect globally distributed systems.

They have nothing to do with the role being offered. They don't predict performance in that role. They eliminate perfectly competent candidates who haven't spent their evenings memorising algorithms they'll never use.

## The internal business problem disguised as an interview test

There's a particularly perverse variant of live coding, less often named but very widespread: the company submits a real problem they're facing in production to the candidate.

Not a generic exercise. Not an algorithmic kata. Their problem. The one their teams have been working on for weeks. The one they already have a solution for, refined, discussed in architecture reviews, validated by the business context and the product's technical history.

And they ask the candidate to solve it live, in thirty minutes, with no context whatsoever.

The imbalance is total. On one side: a team that knows the domain, the stack, the performance constraints, the past decisions, the reasons why certain approaches were already ruled out. On the other: someone who read the job description ten days ago and is trying to decipher an ambiguous problem statement while three people who already know the answer watch them.

This is not a competence test. It's an omniscience test.

The worst part is how results are interpreted. If the candidate proposes a different solution from the team's, they're "not pragmatic enough" or "they don't understand the real constraints." If their solution resembles the team's, it's "good, but they could have gone further." The evaluation grid is invisible because it's actually a comparison against an answer the candidate isn't allowed to know.

Some recruiters call this "testing the ability to solve complex problems." What they're actually testing is the ability to guess their internal context without ever having been exposed to it. That's a skill that doesn't exist. And one that predicts nothing about future performance in the role.

## The online personality questionnaire: 90 questions about your values

Before even speaking to a human, some processes begin with an online personality test.

90 questions. Sometimes 120. Of the type: "On a scale of 1 to 5, to what extent do you agree with the statement: 'I prefer working alone rather than in a team'?"

These tests have weak predictive validity, documented for decades in occupational psychology literature. They're easy to bias consciously or unconsciously. They eliminate atypical profiles who might be exactly what the team needs.

And above all: they give an impression of scientific rigour without having its properties. It's theatre of seriousness.

## What actually predicts performance

Research on the predictive validity of selection methods has been clear for a long time. The best predictions of job performance come from:

**The structured interview**: same questions for all candidates, evaluation grid defined in advance, independent scoring. No improvisation, no "gut feeling."

**Real work samples**: give a genuine problem from the role's daily work, in conditions close to reality. Not a weekend project. Not an abstract algorithm. A bug to fix in an existing codebase, a feature to design for a described system, an architecture decision to justify on a concrete case.

**The probation period**: it's the most valid test that exists. The person works in the real context, with real colleagues, on real problems. No interview can simulate that.

What predicts poorly: algorithm questions under pressure, personality tests, unstructured interviews based on gut feeling, interview marathons that exhaust candidates before their first day.

## The proposal: two interviews, one probation period

Hiring doesn't need ten steps. It needs two.

**Interview 1: technical**

A structured interview of one to one and a half hours. A concrete problem from the role's daily work, not an academic exercise. The candidate can ask questions, use documentation, work as they would actually work. The goal: see how they think, how they communicate, how they handle uncertainty. Not whether they've memorised quicksort.

If a take-home test is truly necessary, it must be short, paid (yes, paid), and representative of real work. Two hours maximum, compensated, on a topic relevant to the role.

**Interview 2: HR / culture**

A structured one-hour interview with the manager and potentially a future colleague. Goal: verify alignment on working conditions, mutual expectations, how to collaborate, each person's constraints. No trick questions. No "What's your greatest weakness?" Real questions about real situations.

**The probation period does the rest**

That's exactly what it's there for. Three months to observe how someone actually works. How they integrate. How they handle the unexpected. How they evolve with feedback. It's the richest, most contextual, most honest test there is.

No interview, however sophisticated, will ever replace three months of real work. Let's stop pretending otherwise by piling up pointless steps beforehand.

## Why nothing changes

If the problem is known, documented, and solutions exist, why do practices remain so poor?

Several reasons.

First, **asymmetric error aversion**: hiring someone who isn't up to the job is visible, traceable, and socially costly for the recruiter. Rejecting a good candidate is invisible. Nobody knows what you're missing. This bias pushes people to accumulate steps for cover, not to choose better.

Then, **mimicry**: companies copy the practices of companies they admire. Startups copy FAANG. Agencies copy startups. Google's algorithm questions end up in interviews for municipal developer roles. Nobody asked whether it was appropriate. It's just what's done.

Finally, **power imbalance**: in a tight job market, candidates endure without complaining. Refusing to do a forty-hour test means disqualifying yourself. Expressing discomfort with live coding means showing you "lack confidence." Negative feedback never filters back up.

## What it says about the culture

The way a company hires says something about how it treats its employees.

A company that asks for an unpaid weekend of work before even making you an offer tells you something about the value it places on your time.

A company that puts you through six interviews tells you something about its relationship with trust and decision-making efficiency.

A company that asks out-of-context questions tells you something about its ability to distinguish essential from accessory.

It's not universal. Some teams hire well despite imperfect processes. But the hiring process is a signal. It's worth reading.

---

Technical hiring isn't inherently difficult. It became difficult because we piled up inherited, copied, and never-questioned practices. Two well-designed interviews are worth more than six poorly constructed ones. And an honest probation period remains the best selection instrument that exists.

The rest is theatre.
