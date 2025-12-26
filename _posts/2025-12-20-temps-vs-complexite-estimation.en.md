---
layout: post
title: "Time vs Complexity: Why Sinra Abandons Story Points"
subtitle: "Complexity points hide reality. Time (in days) confronts your estimates with the real world and makes planning predictable."
description: "Story points create an abstraction that distances teams from reality. Discover why Sinra uses time in days to estimate work: exact capacity, reliable forecasts, forced decomposition, and universal visibility."
date: 2025-12-20 09:00:00 +0100
lang: en
category: Methodology
excerpt: "Planning poker. The team debates for 20 minutes: \"Is it a 5 or an 8?\". Nobody knows what that represents in real time. Six weeks later, you discover that the \"5\" took 3 weeks. Story points lie."
permalink: /methodology/:year/:month/:day/time-vs-complexity-estimation.html
featured_image: /assets/images/blog/2025-12-20-time-vs-complexity-featured.svg
---

## The Planning Poker That Goes Wrong

**Monday morning, sprint planning meeting.**

Product Owner: "We're going to estimate the \"Push Notifications\" feature."

**The team pulls out planning poker cards.**

Developer 1: "I think it's a 5."

Developer 2: "No, it's clearly an 8. There's iOS permission management, Android, web..."

Developer 3: "Wait, are we counting just the backend or the frontend too?"

Dev 1: "Uh... both?"

Dev 2: "In that case it's a 13."

**20 minutes of debate.**

Product Owner: "Okay, we'll go with 8 points."

**Six weeks later.**

Product Owner: "Why aren't the notifications done? We estimated 8 points."

Developer 1: "Yeah, but 8 points isn't 8 days. We actually spent 3 weeks on it."

Product Owner: "But... what are the points for then?"

**Awkward silence.**

---

## The Fundamental Problem With Story Points

**Story points** (complexity points) are an abstraction invented by Agile methodologies to estimate work without talking about time.

### The Illusion of Abstraction

**The Promise:**
> "Points measure complexity, not time. It avoids management pressure on deadlines."

**The Reality:**
- Nobody knows what a "5" concretely represents
- Each team has its own scale (a 5 on team A ≠ 5 on team B)
- Points change with turnover (new dev = complete recalibration)
- Management always ends up converting points to time ("your velocity is 40 points/sprint, so 10 days")

**Result:** You create an unnecessary layer of abstraction that hides reality.

![Planning Poker vs Time Estimation](/assets/images/blog/2025-12-20-temps-vs-complexite-planning-poker.svg "Planning Poker: 20 min debate vs Time Estimation: 2 min")

---

### The Four Lies of Story Points

#### Lie 1: "Points Avoid Pressure On Deadlines"

**False.**

Management will **always** convert points to time:
- "You do 40 points per sprint of 2 weeks."
- "So 1 point = 0.25 day."
- "This feature is 20 points, so 5 days."

**You just added a conversion step.**

Instead of saying directly "5 days", you say "20 points" which everyone converts to "5 days" in their heads anyway.

![Useless Conversion Cycle](/assets/images/blog/2025-12-20-temps-vs-complexite-conversion-cycle.svg "The Lying Cycle of Story Points")

---

#### Lie 2: "Points Measure Complexity, Not Time"

**False.**

During planning poker, the team **always** thinks in time:
- "It's a 5" = "It'll take about 2-3 days"
- "It's a 13" = "It'll take a whole week"

**Nobody thinks in "abstract complexity units".**

Developers mentally convert points to time, then you convert points back to time to do planning.

**Why not just estimate in time from the start?**

---

#### Lie 3: "Points Allow You To Compare Issues"

**False.**

Points create a **false comparability**:
- "This issue is a 5, so it's half as complex as a 10."

But in reality:
- A 5 might take 1 day (simple, well-defined feature)
- Another 5 might take 5 days (simple feature but with hidden dependencies)

**Points guarantee no consistency.**

---

#### Lie 4: "Points Auto-Adjust With Experience"

**False.**

With each new team member:
- Recalibration of points
- "Wait, for you what's a 5?"
- New planning poker sessions to align the team

**Points depend on the current team composition.**

When someone leaves or joins, your entire scale becomes invalid.

---

## Why Sinra Uses Time (In Days)

At Sinra, we abandoned story points for a simpler, more honest approach: **estimating in days**.

### Time Forces You To Face Reality

**Estimation in points:**
> "This feature is 8 points."

**Question:** How long does it take?
**Answer:** "It depends on velocity, the team, the sprint..."

**Estimation in time:**
> "This feature will take 3 days."

**Question:** How long does it take?
**Answer:** "3 days."

**Benefit:** No abstraction. No mental conversion. You directly confront your estimate with reality.

---

### Time Reveals Poorly Decomposed Features

**Sinra Rule:** If you can't estimate an issue in days, **it's too big**.

**Typical scenario:**

Developer: "I can't estimate this. It's between 5 and 15 days."

Product Owner: "Why this uncertainty?"

Developer: "Because there are 10 different things in this issue: backend, frontend, tests, data migration, documentation..."

**Sinra Solution:** Decompose.

Create 5 separate issues:
- Backend API: 2 days
- Frontend UI: 1.5 days
- Automated tests: 1 day
- Data migration: 3 days
- Documentation: 0.5 day

**Total:** 8 days (with clear visibility on each component)

**Result:**
- ✅ Precise estimates
- ✅ Granular tracking
- ✅ Quick identification of blockers

---

### Time Enables Real Capacity Management

**With points:**
- "Marc has 20 points to do this sprint."
- But how many hours does that represent? **You don't know.**

**With time (Sinra):**
- "Marc has 6 days of work assigned this sprint (10 working days available)."
- That leaves 4 days for bugs, meetings, unexpected issues.

**Benefit:** You know **exactly** how much capacity each developer has, in concrete units.

You can:
- ✅ Balance load between developers
- ✅ Identify overload **before** it becomes a crisis
- ✅ Make reliable forecasts ("At this rate, we ship in 3 weeks")

---

### Time Is Universal

**Points:**
- Team A estimates in Fibonacci (1, 2, 3, 5, 8, 13...)
- Team B estimates in powers of 2 (1, 2, 4, 8, 16...)
- Management understands nothing

**Time:**
- Everyone understands "3 days"
- The CTO understands
- The CEO understands
- The client understands
- The team understands

**Benefit:** No need to explain your estimation system. Time is a universal unit.

---

### Time Enforces Accountability

**With points:**
> "I estimated 5 points, but it took longer than expected."

**With time:**
> "I estimated 2 days, but it took me 4 days."

The difference is immediate. **You confront the estimate with reality.**

When you estimate in days:
- You're more cautious ("2 days" sounds more binding than "5 points")
- You decompose better ("10 days is too much, I need to cut it up")
- You learn from your mistakes ("I underestimated by 100%, I'll adjust")

**Result:** Your estimates improve over time.

---

### Time Enables Reliable Forecasts

**With points:**
- Sprint 1 velocity: 35 points
- Sprint 2 velocity: 42 points
- Sprint 3 velocity: 28 points

**Question:** When do we ship the 60-point feature?
**Answer:** "It depends... somewhere between 1.5 and 2.5 sprints?"

**With time (Sinra):**
- Sprint 1: 7 days delivered out of 10 planned (70% capacity used)
- Sprint 2: 8 days delivered out of 10 planned (80%)
- Sprint 3: 6.5 days delivered out of 10 planned (65%)

**Average:** 72% capacity used

**Feature estimated:** 15 days

**Forecast calculation:** 15 days / 0.72 = 20.8 calendar days = **2.1 sprints**

**Benefit:** Forecasts based on real, objective data.

---

## The Six Advantages of Time Over Complexity

### 1. Exact and Visible Capacity

**Points:** Fuzzy abstraction
**Time:** Concrete units

You know **exactly** how many days of work are assigned to each person.

---

### 2. Reliable Forecasts

**Points:** Random mental conversion
**Time:** Direct calculation

"15 days estimated + 70% capacity = 21 calendar days."

---

### 3. Forced Decomposition

**Points:** You can estimate "13" without decomposing
**Time:** "10+ days" forces you to cut

If you can't estimate in days, **decompose**.

![Forced Decomposition by Time](/assets/images/blog/2025-12-20-temps-vs-complexite-decomposition.svg "Time Forces Decomposition Into Estimable Issues")

---

### 4. Universality

**Points:** Unique team scale
**Time:** Understandable by everyone

Management, clients, stakeholders understand "3 days".

---

### 5. Comparability

**Points:** Not comparable between teams
**Time:** Comparable everywhere

You can compare velocity between projects and teams ("team A delivers 6 days/sprint, team B delivers 8 days/sprint").

---

### 6. Continuous Improvement

**Points:** Difficulty measuring improvement
**Time:** Clear metrics

"Before we estimated with 50% error. Now 20%."

---

## Common Objections (And Answers)

### Objection 1: "Time Puts Too Much Pressure On The Team"

**Answer:** No, **bad estimates** create pressure.

When you estimate in points:
- You create a false sense of precision
- Management converts points to time anyway
- The team is surprised when reality doesn't match

When you estimate in time:
- You're honest from the start
- You can refine your estimates with experience
- You confront expectations with reality **before** you start

**Pressure comes from the disconnect between expectations and reality, not from the estimation unit.**

---

### Objection 2: "Each Developer Works At A Different Pace"

**Answer:** True. **But it's also true with points.**

A junior dev will estimate "5 points" for a task a senior will do in "2 points".

**The difference with time:**
- You know **who** is estimating
- You can adjust based on the assigned developer
- You can measure individual improvement

**With Sinra:**
- Marc (senior) estimates 2 days → takes 2.5 days (125%)
- Sophie (mid-level) estimates 2 days → takes 3 days (150%)
- Thomas (junior) estimates 2 days → takes 4 days (200%)

You learn each person's coefficient and adjust your forecasts.

---

### Objection 3: "We Can't Estimate Precisely In Days"

**Answer:** **That's exactly the signal that the issue is too big.**

If you say:
> "I don't know if it's 2 days or 8 days"

**Then decompose.**

Create smaller issues:
- Backend: 1.5 days
- Frontend: 2 days
- Tests: 1 day
- Integration: 1.5 days

**Total:** 6 days (with better visibility)

**Time forces decomposition. It's a feature, not a bug.**

---

### Objection 4: "Story Points Avoid Deadline Debates"

**Answer:** No, they **postpone** the debates.

**With points:**
- Team estimates 40 points
- Management asks "How long does that take?"
- You convert: "About 2 weeks"
- Management: "Why not 1 week?"

**With time:**
- Team estimates 8 days
- Management: "Why not 4 days?"
- You explain: "Because there's X, Y, Z to do"

**The debate happens anyway. Might as well be direct.**

---

### Objection 5: "Points Auto-Adjust With Velocity"

**Answer:** False. **Velocity fluctuates enormously.**

Sprint 1 velocity: 35 points
Sprint 2 velocity: 42 points (a dev was on vacation sprint 1)
Sprint 3 velocity: 28 points (lots of production bugs)

**Points don't adjust. You have to manually recalibrate all the time.**

**With time:**
- Sprint 1: 7 days delivered / 10 available = 70%
- Sprint 2: 8 days delivered / 8 available (1 dev on vacation) = 100%
- Sprint 3: 6 days delivered / 10 available (bugs) = 60%

**Average:** 77% effective capacity

You can **objectively measure** your real capacity.

---

## Sinra In Action: Time vs Complexity

### Real Example: "PDF Export" Feature

#### Points Approach (Before Sinra)

**Planning Poker:**
- Team debates 30 minutes
- Final estimate: **8 points**

**Delivery:**
- Real time: 12 days
- Why the delay? "We underestimated the complexity of the PDF layout."

**Retrospective:**
- "We should estimate wider."
- "Maybe 13 points next time?"

**Problem:** No concrete learning. You adjust an abstraction.

---

#### Time Approach (With Sinra)

**Initial estimate:**
- Product Owner: "How long to estimate the PDF export?"
- Developer: "I can't estimate that as one block. We need to decompose."

**Decomposition:**
- Generate simple PDF (text): 1.5 days
- Add images and layout: 2 days
- Handle complex tables: 2.5 days
- Optimize performance (large documents): 1.5 days
- Tests and edge cases: 1.5 days

**Total estimated:** 9 days

**Delivery:**
- Real time: 11 days
- Why the overage? Table layout took 3.5 days instead of 2.5.

**Retrospective:**
- "We systematically underestimate complex layouts."
- "Next feature with layout: add +1 day buffer."

**Benefit:** Concrete, actionable learning.

---

## The Three Sinra Rules For Estimating In Time

### Rule 1: Estimate In Days (Not Hours)

**Why?**
- Hours give a false sense of precision
- Nobody works 8 productive hours per day (meetings, bugs, interruptions)
- Days are easier to communicate

**Granularity:**
- 0.5 day (half day)
- 1 day
- 1.5 days
- 2 days
- etc.

**Avoid:**
- "3.75 days" (too precise, unrealistic)
- "0.25 day" (too small, create a separate issue)

---

### Rule 2: If You Can't Estimate, Decompose

**Warning sign:**
> "It's between 3 and 10 days."

**Action:** Decompose into smaller issues until uncertainty disappears.

**Goal:** Each issue should be estimable with ±50% accuracy.

**Example:**
- ❌ "Implement notifications: 5-15 days"
- ✅ "Notifications backend API: 2 days"
- ✅ "Notifications frontend UI: 1.5 days"
- ✅ "Mobile push notifications: 3 days"

---

### Rule 3: Confront Your Estimates With Reality

**After each issue:**
- Estimated time: 2 days
- Real time: 3.5 days
- Gap: +75%

**Action:** Identify why.
- Unforeseen dependency?
- Underestimated complexity?
- Blocking bugs?

**Adjust future estimates accordingly.**

**Result:** Your estimates improve sprint after sprint.

---

## Comparison: Planning Poker vs Sinra Time Estimation

| **Aspect** | **Planning Poker (Story Points)** | **Time Estimation (Sinra)** |
|------------|-----------------------------------|------------------------------|
| **Unit** | Abstract points (1, 2, 3, 5, 8, 13...) | Days (0.5d, 1d, 1.5d, 2d...) |
| **Understanding** | Requires team calibration | Universal, immediately understood |
| **Conversion** | Points → time (mental or explicit) | Already in time |
| **Capacity management** | Abstract ("20 points this sprint") | Concrete ("8 days out of 10 available") |
| **Forecasts** | Based on fluctuating velocity | Based on real capacity |
| **Decomposition** | Can stay vague ("13 points") | Forces decomposition ("10+ days = too big") |
| **Comparability** | Not comparable between teams | Comparable universally |
| **Turnover** | Complete recalibration needed | Minimal impact |
| **Improvement** | Difficult to measure | Clear metrics |
| **Transparency** | Opaque for stakeholders | Transparent for everyone |

---

## The Five Signs You Should Abandon Story Points

### Sign 1: You Systematically Convert Points To Time

If your process looks like:
1. Estimate in points
2. Multiply by your "coefficient" to get days
3. Use days to plan

**You're wasting your time. Estimate directly in days.**

---

### Sign 2: Planning Poker Takes More Than 5 Minutes Per Issue

If each estimate triggers a 20-minute debate ("Is it a 5 or an 8?"), **you're optimizing the wrong metric**.

**The goal isn't a perfect estimate. It's an usable estimate.**

---

### Sign 3: Your Forecasts Are Always Wrong

If you regularly say:
> "We thought we'd ship in 2 sprints, but it took 4 sprints"

**Your point estimates don't help you forecast.**

---

### Sign 4: Stakeholders Don't Understand Your Velocity

If management constantly asks you:
> "Your velocity is 40 points/sprint. What does that actually mean?"

**You've created an unnecessary abstraction.**

---

### Sign 5: Every New Team Member Disrupts Your Scale

If hiring a junior or senior dev forces you to recalibrate all your points, **your estimation system isn't robust**.

---

## Real Example: TechFlow Switches To Time Estimation

**TechFlow (15-person team, marketing automation platform)**

*Note: TechFlow is a real company we've anonymized with a fictional name to protect their confidentiality.*

### Before Sinra: Story Points And Planning Poker

**Problems:**
- Planning poker: 45 minutes per sprint to estimate 10-15 issues
- Fluctuating velocity: 32-48 points per sprint (50% variation)
- Wrong forecasts: 60% of releases shipped late
- Endless debates: "Is it a 5 or an 8?"
- Turnover: Each new dev required 2 sprints of recalibration

**Revealing Incident:**
"API Webhooks" feature estimated at 13 points.
Average velocity: 40 points/sprint.
Forecast: "1/3 of sprint = 3-4 days."

**Reality:** 18 days (3.5 weeks).

**Why?** The 13 points hid:
- 5 different endpoints
- Retry + queue management
- Complex integration tests
- API documentation

**Nobody knew what "13 points" really meant.**

---

### After Sinra: Time Estimation

**Changes:**
1. Abandoned planning poker
2. Direct estimation in days
3. Forced decomposition if >3 days
4. Tracked estimated vs real time

**"API Webhooks" Feature (Time Version):**
Instead of "13 points", decomposed into:
- Webhook creation endpoint: 1.5 days
- List/update/delete endpoints: 1 day
- Retry system: 2 days
- Queue management: 2.5 days
- Integration tests: 2 days
- OpenAPI documentation: 1 day

**Total estimated:** 10 days

**Real delivery:** 12 days

**Gap:** +20% (instead of +350% with points)

---

### Results (After 6 Months)

**Before (Story Points):**
- Planning poker time: 45 min/sprint
- Estimate reliability: 40% (60% late)
- Velocity: Fluctuating (32-48 points)
- Release forecasts: Wrong 6 out of 10 times

**After (Time):**
- Estimation time: 15 min/sprint
- Estimate reliability: 75% (±25% error)
- Capacity: Stable (7-8 days/sprint)
- Release forecasts: Reliable 8 out of 10 times

**Lead Developer Quote:**
> "Before, we'd spend 45 minutes debating if it was a 5 or an 8. Now we say '2 days' and move on. We tripled our planning efficiency."

**Product Manager Quote:**
> "With points, I never knew when we'd ship. Now I can say 'in 3 weeks' with 80% confidence. Stakeholders love it."

![TechFlow Before/After Results](/assets/images/blog/2025-12-20-temps-vs-complexite-techflow-results.svg "Measurable Impact: Story Points vs Time")

---

## How To Switch From Story Points To Time

### Step 1: Analyze Your Historical Data

**Action:**
- Take your last 5 sprints
- For each issue: estimated points vs real time
- Calculate your average ratio (ex: 1 point = 0.5 day)

**Benefit:** You have a conversion baseline.

---

### Step 2: Announce The Change To The Team

**Communication:**
> "Starting next sprint, we estimate directly in days instead of points. Why? Because it lets us plan better and make reliable forecasts."

**Anticipate objections:** (see Objections section above)

---

### Step 3: Estimate Your First Sprint In Time

**Rules:**
- Estimate in days (0.5d, 1d, 1.5d, 2d...)
- If >3 days: decompose
- If uncertainty >50%: decompose

**Example:**
- Issue A: 1.5 days
- Issue B: 2 days
- Issue C: decomposed into C1 (1d) + C2 (1.5d) + C3 (0.5d)

---

### Step 4: Track Estimated vs Real

**After each issue:**
- Estimated time: X days
- Real time: Y days
- Gap: (Y - X) / X

**Learn from mistakes:**
- What types of issues do you underestimate?
- Which developers need adjustment coefficients?

---

### Step 5: Refine Gradually

**Sprint 1:** Average error +40%
**Sprint 2:** Average error +25%
**Sprint 3:** Average error +15%

**Your estimates naturally improve.**

---

## Action Items: Adopt Time Estimation

1. **Calculate your current ratio**: 1 point = how many days? (analyze your last 5 sprints)
2. **Estimate your next sprint in days**: abandon points for a test sprint
3. **Decompose big issues**: if >3 days estimated, split into smaller issues
4. **Track estimated vs real**: measure your gaps and learn
5. **Refine your forecasts**: use your average error % to fine-tune deadlines

---

## The Key Point

**Story points create an abstraction that distances teams from reality.**

You estimate in points, you mentally convert to time, you plan in time, then you discover reality doesn't match.

**Time (in days) confronts your estimates with reality.**

No abstraction. No conversion. No team calibration. No endless debates.

**Just an honest estimate, verifiable, and improves with experience.**

**Result:**
- ✅ Exact and visible capacity
- ✅ Reliable forecasts
- ✅ Forced decomposition of complex features
- ✅ Universality (understood by everyone)
- ✅ Measurable continuous improvement

**Time doesn't lie. Story points do.**

---

**Ready to abandon story points and plan with real data?** [Start a free Sinra trial →](https://app.sinra.dev/users/sign_up)

Discover project management where estimates confront reality, not where they hide it.
