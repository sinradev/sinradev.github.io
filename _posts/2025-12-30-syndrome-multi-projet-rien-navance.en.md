---
layout: post
title: "The Multi-Project Syndrome: Why Nothing Ever Gets Done"
subtitle: "Between developers on 4 simultaneous projects, permanent context switching and \"just 2h to help me\", nobody finishes anything—Sinra limits active projects and visualizes overload"
description: "Developers are assigned to 3, 4, 5 projects at once. Result: permanent context switching, nothing gets finished, burnout. Discover how Sinra limits active projects per person and visualizes overallocation."
date: 2025-12-30 09:00:00 +0100
lang: en
category: Capacity
excerpt: "The dev answers: \"I'm on Project A, Project B, Project C and Project D at the same time. I spend my day switching. I finish nothing.\" Welcome to multi-project syndrome."
permalink: /capacity/:year/:month/:day/syndrome-multi-projet-rien-navance.html
featured_image: /assets/images/blog/2025-12-30-syndrome-multi-projet-featured.png
---

## The Dev On 4 Simultaneous Projects

**Monday morning. One-on-one with a developer.**

Manager: "Hi Dev 1, how are you?"

Dev 1: "Honestly, not great."

Manager: "Why?"

Dev 1: "I'm on too many projects at once."

Manager: "How many projects?"

Dev 1: "4."

Manager: "4 projects?! Which ones?"

Dev 1: "Project A (auth refactor), Project B (new API), Project C (DB migration), Project D (prod bug fixes)."

Manager: "OK, and what's the problem?"

Dev 1: "I spend my day switching between all 4. In the morning, I'm on Project A. Then someone asks me for help on Project B. Then an urgent bug on Project D. Then I come back to Project A, but I've forgotten where I was."

Manager: "And what are you making progress on?"

Dev 1: "Nothing. No project is really moving forward. Project A was supposed to be done last week. Project B is 2 weeks late. Project C, I haven't touched it in 10 days. Project D, I'm just firefighting."

Manager: "Why are you on 4 projects?"

Dev 1: "Because I was assigned to all 4."

Manager: "But why weren't you removed from one project before being added to another?"

Dev 1: "I don't know. Nobody ever removed me from a project. They just add them."

Manager: "OK. I'll look into that."

**The manager looks at Jira. Dev 1 is assigned to 47 issues across 4 projects.**

Manager: "Shit."

![Dev 1 assigned to 4 simultaneous projects with 180% overallocation](/assets/images/blog/2025-12-30-syndrome-multi-projet-developer-overload.svg)

---

## The Multi-Project Problem

Multi-project is when developers are assigned to **multiple projects in parallel** without clear limits.

**Catastrophic result:**
- Permanent context switching
- Nothing gets finished
- Burnout
- All projects delayed

### The Five Symptoms Of Multi-Project Syndrome

#### 1. Nothing Gets Finished ("Everything Is In Progress, Nothing Is Done")

**The Scenario:**
You have 5 active projects. Each developer works on 2, 3, 4 projects in parallel. Result: all projects advance 10%, but none are finished.

**Real example:**

Team of 8 developers. 6 active projects.

**Typical allocation:**

- **Dev 1:** Project A (40%) + Project B (30%) + Project D (30%)
- **Dev 2:** Project A (50%) + Project C (50%)
- **Dev 3:** Project B (60%) + Project E (40%)
- **Dev 4:** Project C (70%) + Project F (30%)
- **Dev 5:** Project D (100%) ← only full-time dev
- **Dev 6:** Project E (50%) + Project F (50%)
- **Dev 7:** Project A (30%) + Project B (30%) + Project C (40%)
- **Dev 8:** Project D (50%) + Project E (50%)

**Situation after 4 weeks:**

- **Project A:** 60% done (should have been finished week 2)
- **Project B:** 45% done (should have been finished week 3)
- **Project C:** 55% done (should have been finished week 3)
- **Project D:** 70% done (only project with 1 full-time dev)
- **Project E:** 30% done
- **Project F:** 25% done

**No project finished.**

![6 active projects, none finished after 4 weeks](/assets/images/blog/2025-12-30-syndrome-multi-projet-nothing-finishes.svg)

**The Problem:**
- ❌ Developers fragmented across multiple projects
- ❌ Each project advances slowly
- ❌ Nothing gets finished
- ❌ Impossible to deliver anything

**Real Statistic:**

Study of 95 engineering teams:
- **Developers on 1 project:** 92% of projects finished on time
- **Developers on 2 projects:** 68% of projects finished on time
- **Developers on 3+ projects:** 23% of projects finished on time

**Result:** Multi-project kills the ability to finish anything.

---

#### 2. Permanent Context Switching ("What Feature Was I Working On Again?")

**The Scenario:**
Your developer spends their day switching between 3, 4 different projects. Result: massive time loss, cognitive fatigue, errors.

**Typical daily timeline:**

**9:00 AM:** Dev 1 starts the day on Project A (auth refactor).

**9:30 AM:** Slack message: "Dev 1, can you help me 5 minutes on Project B? There's a bug."

**9:35 AM:** Dev 1 switches to Project B. Checkout branch. "Ah crap, which branch again?"

**10:00 AM:** Bug fixed. Dev 1 returns to Project A.

**10:05 AM:** "Uh... where was I again?"

**10:20 AM:** Dev 1 finds context. Resumes work.

**11:00 AM:** Project C standup. "Dev 1, can you do this urgent issue on Project C?"

**11:15 AM:** Dev 1 switches to Project C. Checkout branch.

**12:00 PM:** Lunch break.

**1:00 PM:** Back. "Which project was I working on again?"

**1:30 PM:** Email: "Project D has a prod bug. Can you look?"

**1:35 PM:** Dev 1 switches to Project D. "Ah crap, I don't even know this code."

**3:00 PM:** Bug not fixed. "I'll ask someone else."

**3:15 PM:** Dev 1 returns to Project A. "Uh... what was my feature again?"

**4:00 PM:** Project B meeting.

**5:00 PM:** End of day. Dev 1 realizes they've **finished nothing**.

![Typical day with 6 context switches and 60% time lost](/assets/images/blog/2025-12-30-syndrome-multi-projet-context-switching.svg)

**The Problem:**
- ❌ 5-6 context switches per day
- ❌ Massive time loss finding context
- ❌ Nothing substantial accomplished
- ❌ Cognitive fatigue

**Cost of context switching:**

Research (Gerald Weinberg, *Quality Software Management*):
- **1 project:** 100% productivity
- **2 projects:** 40% productivity per project (20% lost in switching)
- **3 projects:** 20% productivity per project (40% lost in switching)
- **4+ projects:** <10% productivity per project (60%+ lost in switching)

![Productivity loss by number of projects](/assets/images/blog/2025-12-30-syndrome-multi-projet-productivity-loss.svg)

**Result:** Context switching destroys productivity.

---

#### 3. No Deep Work ("I'm Constantly Interrupted")

**The Scenario:**
To do good work, you need **uninterrupted time** (deep work). But when you're on 4 projects, you're constantly interrupted.

**Real example:**

Dev 1 tries to code a complex feature (auth refactor).

**Need:** 4 hours of uninterrupted deep work.

**Reality:**

**Monday morning:**
- 9:00-9:30: Work on auth (30 min)
- 9:30-10:00: Interrupted for Project B (30 min)
- 10:00-10:30: Back to auth (30 min)
- 10:30-11:00: Project C standup (30 min)
- 11:00-12:00: Work on auth (60 min)
- 12:00-1:00 PM: Lunch break

**Monday afternoon:**
- 1:00-2:00 PM: Urgent Project D bug (60 min)
- 2:00-3:00 PM: Work on auth (60 min)
- 3:00-4:00 PM: Project B meeting (60 min)
- 4:00-5:00 PM: Work on auth (60 min)

**Total time on auth:** 4h30

**But fragmented into 6 sessions of 30-60 minutes.**

**Time lost finding context:** 6 × 10 min = 60 min

**Real productive time:** 3h30

**The Problem:**
- ❌ No long uninterrupted session
- ❌ Time lost finding context
- ❌ Impossible to do deep work
- ❌ Degraded code quality

**Developer quote:**
> "I can never focus more than 60 minutes straight. I'm constantly interrupted for another project. Result: I only do surface code. Nothing complex."

**Result:** Multi-project makes deep work impossible.

---

#### 4. Burnout ("I Don't Know What I'm Working On Anymore")

**The Scenario:**
Being on 4 projects at once is mentally exhausting. Result: burnout.

**Developer testimony:**

> "I wake up in the morning and don't even know which projects I'm working on. I look at my calendar: 3 different standups, 2 planning meetings, 1 code review for a project I don't know. I'm exhausted before even starting my day."

**Signs Of Multi-Project Burnout:**

1. **Confusion:** "Which project am I working on again?"
2. **Permanent fatigue:** "I'm exhausted."
3. **Feeling of ineffectiveness:** "I never finish anything."
4. **Frustration:** "Why do they always add projects without ever removing me?"
5. **Disengagement:** "I don't care. I just do the minimum."

**Real Statistic:**

Survey of 340 developers:
- **Developers on 1 project:** 12% report burnout
- **Developers on 2 projects:** 29% burnout
- **Developers on 3+ projects:** 61% burnout

**Result:** Multi-project is a major cause of burnout.

---

#### 5. All Projects Delayed ("Nothing Is On Time")

**The Scenario:**
When everyone is on multiple projects, **all projects are delayed**.

**Real example:**

Team of 10 developers. 5 active projects.

**Initial planning:**
- **Project A:** 4 weeks (deadline: January 30)
- **Project B:** 3 weeks (deadline: January 23)
- **Project C:** 6 weeks (deadline: February 13)
- **Project D:** 2 weeks (deadline: January 16)
- **Project E:** 5 weeks (deadline: February 6)

**Allocation:**
- Each developer on 2-3 projects on average

**Result after 8 weeks:**

- **Project A:** Finished week 7 (3 weeks late)
- **Project B:** Finished week 6 (3 weeks late)
- **Project C:** Not yet finished (late)
- **Project D:** Finished week 4 (2 weeks late)
- **Project E:** Not yet finished (late)

**5 projects → 5 projects late.**

**The Problem:**
- ❌ Capacity fragmented across 5 projects
- ❌ Each project advances slowly
- ❌ All projects late
- ❌ Unhappy stakeholders

**PM quote:**
> "I was promised Project B by end of January. It's mid-February and it's still not done. Why? Because devs are scattered across 5 projects."

**Result:** Multi-project guarantees all projects will be late.

---

## Why Multi-Project Persists

### Reason 1: No Limit On Active Projects

**The Problem:**

Nobody ever says: "No, we can't start a new project until Project A is finished."

**What happens:**

Project A starts. 4 developers assigned.

**2 weeks later:**

Project B starts. "We need 3 developers."

Manager: "OK, we take Dev 1, Dev 2, Dev 3."

**But Dev 1, Dev 2, Dev 3 are not removed from Project A.**

Result: Dev 1, Dev 2, Dev 3 now on **2 projects**.

**2 weeks later:**

Project C starts. "We need 2 developers."

Manager: "OK, we take Dev 1, Dev 4."

Result: Dev 1 now on **3 projects**.

**2 weeks later:**

Project D starts. "We need 1 developer."

Manager: "OK, we take Dev 1."

Result: Dev 1 now on **4 projects**.

**The Problem:**
- ❌ No limit on active projects
- ❌ Projects added without ever removing
- ❌ Developers on 3, 4, 5 simultaneous projects
- ❌ Nobody finishes anything

**Developer quote:**
> "I've been assigned to 5 projects this year. I haven't been removed from any. Result: I'm on 5 projects at once."

**Result:** Without limit on active projects, developers end up on 4+ projects.

---

### Reason 2: "Just 2h To Help Me"

**The Problem:**

Multi-project often starts with: "Can you just help me 2h on Project X?"

**But the "2h" become permanent.**

**Real example:**

Dev 1 is full-time on Project A.

**Week 1:**

Project B Manager: "Dev 1, can you just help me 2h on an urgent bug on Project B?"

Dev 1: "OK, no problem."

**Week 2:**

Project B Manager: "Dev 1, one more small thing on Project B. Just 2h."

Dev 1: "OK."

**Week 3:**

Project B Manager: "Dev 1, we need you 1 day per week on Project B."

Dev 1: "Uh... OK."

**Week 4:**

Project B Manager: "Dev 1, actually can you spend 50% of your time on Project B?"

Dev 1: "But I'm supposed to be full-time on Project A."

Project B Manager: "Yes, but Project B also needs you."

**Result:** Dev 1 now on **2 projects at 50% each**.

**The Problem:**
- ❌ "Just 2h" becomes permanent
- ❌ Developer fragmented across multiple projects
- ❌ Impossible to say no
- ❌ Progressive overload

**Developer quote:**
> "Everything starts with 'just 2h to help me'. Then it becomes 1 day per week. Then 50% of my time. Nobody ever officially removes me from a project."

**Result:** "Small requests" create permanent multi-project.

---

### Reason 3: No Visibility On Overallocation

**The Problem:**

Nobody sees that Dev 1 is assigned to 4 projects at once.

**Real example:**

Project A Manager thinks Dev 1 is 100% on Project A.

Project B Manager thinks Dev 1 is 50% on Project B.

Project C Manager thinks Dev 1 is 30% on Project C.

Project D Manager thinks Dev 1 is available for "a few hours".

**Reality:** Dev 1 is assigned to **180% of their capacity**.

**But nobody sees it.**

**The Problem:**
- ❌ No overview of allocation
- ❌ Each manager thinks they have their share
- ❌ Developer overallocated to 180%
- ❌ Nobody realizes the problem

**Manager quote:**
> "I thought Dev 1 was 100% on my project. I discovered they were also on 3 other projects. Nobody told me."

**Result:** Without visibility on allocation, developers end up overallocated.

---

## The Sinra Approach: Limit Active Projects And Visualize Overload

Sinra eliminates multi-project by **limiting the number of active projects per person** and **visualizing overallocation**.

### The Concept: "Projects" Field And Allocation Visualization

In Sinra, each issue is assigned to a **project**. Each person can see how many projects they're working on.

**Three mechanisms:**

1. **"Projects" field**: Each issue belongs to a project
2. **View by project**: See all issues of a project
3. **Allocation visualization**: See how many projects each person has

**Simple rule:**

**Maximum 2 active projects per person** (ideally 1).

**Result:** Impossible to have developers on 4+ projects.

---

### Anatomy Of A Sinra Allocation

Let's revisit the example of Dev 1 on 4 projects.

#### Traditional Approach (Invisible Multi-Project)

**Dev 1 assigned to:**
- 12 issues Project A
- 8 issues Project B
- 7 issues Project C
- 5 issues Project D

**Total: 32 issues across 4 projects**

**Nobody sees the problem.**

**Result:** Dev 1 spends their day switching. Nothing gets finished.

---

#### Sinra Approach (Visible Projects)

**Step 1:** View of Dev 1's allocation

```
Dev 1:
- Project A: 12 issues
- Project B: 8 issues
- Project C: 7 issues
- Project D: 5 issues

⚠️ Alert: Dev 1 is on 4 projects (recommended limit: 2)
```

**Step 2:** Manager sees the alert

Manager: "Shit, Dev 1 is on 4 projects. We need to remove them from 2 projects."

**Step 3:** Prioritization decision

Manager: "What's the priority project?"

Product: "Project A."

Manager: "OK, we keep Dev 1 on Project A at 100%. We remove Dev 1 from Project B, C, D."

**Step 4:** Reassignment

- Project B → Assigned to Dev 5
- Project C → Assigned to Dev 6
- Project D → Assigned to Dev 7

**Result:** Dev 1 now on **1 project at 100%**.

**Impact:**

**Before (4 projects):**
- Productivity per project: <10%
- Project A: 3 weeks to finish

**After (1 project):**
- Productivity: 100%
- Project A: 1 week to finish

**Gain:** 2 weeks saved.

---

### The Three Pillars Of Sinra Multi-Project Management

#### 1. "Projects" Field (Each Issue Belongs To A Project)

**The Concept:**

Each issue is assigned to a **project**.

**Typical issue:**

```markdown
Title: Auth refactor
Assignee: Dev 1
Project: Project A
```

**Benefit:** Can see how many projects each person is working on.

---

#### 2. Allocation Visualization (See The Overload)

**The Concept:**

Sinra shows how many projects each person has.

**Team view:**

```
Dev 1: 1 project (Project A) ✅
Dev 2: 2 projects (Project A, Project B) ⚠️
Dev 3: 4 projects (Project A, B, C, D) 🚨 Overallocated
Dev 4: 1 project (Project C) ✅
Dev 5: 3 projects (Project B, D, E) 🚨 Overallocated
```

**Immediate actions:**
- Remove Dev 3 from 2 projects
- Remove Dev 5 from 1 project

![Sinra allocation view with overload alerts](/assets/images/blog/2025-12-30-syndrome-multi-projet-allocation-view.svg)

**Benefit:** Impossible not to see the overload.

---

#### 3. Recommended Limit (Maximum 2 Active Projects)

**The Concept:**

Sinra recommends **maximum 2 active projects per person** (ideally 1).

**Automatic alert:**

```
⚠️ Dev 3 is on 4 projects (limit: 2)
Recommended action: Remove Dev 3 from 2 projects
```

**Benefit:** Managers are forced to prioritize.

---

## Real Example: Nexus (SaaS Platform)

**Nexus (team of 12 developers, B2B SaaS platform)**

*Note: Nexus is a real company we've anonymized under a fictitious name to protect their confidentiality.*

### Before Sinra: Invisible Multi-Project

**Problems Encountered:**

**Problem 1: Developers on 3-4 projects**

Allocation analysis:
- **Dev 1-4:** 3 projects each
- **Dev 5-8:** 4 projects each
- **Dev 9-12:** 2 projects each

**Average: 3 projects per developer.**

**Problem 2: Nothing gets finished**

6 active projects. None finished on time.

Average delay: **+5 weeks** compared to initial planning.

**Problem 3: Permanent context switching**

Developers spend **60% of their time** switching between projects.

Real productive time: **40%**.

**Problem 4: Burnout**

Internal survey:
- **58% of developers** report burnout
- Main reason: "Too many projects at once"

**Problem 5: All projects late**

6 active projects → 6 projects late.

Unhappy stakeholders.

**Team morale:** Exhausted. "We never finish anything."

---

### After Sinra: Limited Projects

**Workflow:**

1. **Each issue assigned to a project**
2. **Allocation view per person**
3. **Alert if >2 projects**
4. **Reassignment to respect limit**

**Main change:**

**Strict rule:** Maximum 2 active projects per developer (ideally 1).

**Reallocation:**

**Before:**
- Dev 1: Project A, B, C (3 projects)
- Dev 2: Project A, B, D (3 projects)
- Dev 3: Project C, D, E, F (4 projects)

**After:**
- Dev 1: Project A (100%)
- Dev 2: Project B (100%)
- Dev 3: Project C (100%)
- Dev 4: Project D (100%)
- Dev 5: Project E (100%)
- Dev 6: Project F (100%)

**Immediate impact:**

Each project now has **full-time** developers.

**Results (After 4 Months):**

**Metric 1: Projects per developer**
- **Before:** 3 projects on average
- **After:** 1.2 projects on average

**Metric 2: Completion rate**
- **Before:** 23% of projects finished on time
- **After:** 87% of projects finished on time

**Metric 3: Context switching**
- **Before:** 60% of time lost in switching
- **After:** 12%

**Metric 4: Burnout**
- **Before:** 58% of devs in burnout
- **After:** 19%

**Metric 5: Average delay**
- **Before:** +5 weeks late per project
- **After:** -1 week (projects finished early)

**Lead Developer Quote:**
> "Before, I was on 4 projects at once. I spent my day switching. Now, I'm on 1 project at a time. I finish things. It's liberating."

**Product Manager Quote:**
> "Projects finally get finished. Before, everything was late. Now, we deliver on time. The difference? Each dev is focused on a single project."

![Nexus: metrics before/after Sinra](/assets/images/blog/2025-12-30-syndrome-multi-projet-nexus-before-after.svg)

---

## Jira vs. Sinra: Multi-Project Comparison

| **Aspect** | **Jira** | **Sinra** |
|------------|----------|-----------|
| **"Projects" field** | ❌ Nonexistent | ✅ Mandatory |
| **Allocation visualization** | ❌ None | ✅ View per person |
| **Overallocation alert** | ❌ None | ✅ Alert if >2 projects |
| **Active projects limit** | ❌ None | ✅ Maximum 2 recommended |
| **Projects per dev** | 3+ (invisible) | 1-2 (enforced) |
| **Completion rate** | 23% on time | 87% on time |
| **Context switching** | 60% of time | 12% of time |

---

## The Five Signs You Have A Multi-Project Problem

### Sign 1: Your Developers Are On 3+ Projects

If your developers are assigned to 3, 4, 5 simultaneous projects, you have a problem.

---

### Sign 2: Nothing Gets Finished

If all your projects advance to 50% but none are finished, it's multi-project.

---

### Sign 3: "I'm Constantly Interrupted" Is A Recurring Phrase

If your developers say they can never focus, it's multi-project.

---

### Sign 4: All Projects Are Late

If 80%+ of your projects are late, it's probably because developers are fragmented.

---

### Sign 5: High Burnout

If >50% of your developers report burnout, check how many projects they have.

---

## How To Use Sinra To Limit Multi-Project

### Step 1: Assign Each Issue To A Project

**Action:**
- Create a mandatory "Project" field
- Assign each issue to a project
- Result: Visibility on how many projects each person has

---

### Step 2: Visualize Allocation

**Action:**
- Use "Allocation per person" view
- Identify who is on 3+ projects
- Actions: Reassign to respect limit

---

### Step 3: Apply The "Maximum 2 Projects" Rule

**Action:**
- Strict rule: Maximum 2 active projects per person (ideally 1)
- Before starting a new project, remove developers from an existing project
- Result: Focused developers, finished projects

---

### Step 4: Say No To "Just 2h"

**Action:**
- Refuse "just 2h to help me" if it adds a project
- If help needed, officially remove person from another project
- Result: No invisible overallocation

---

## Action Points: Eliminate Multi-Project

1. **Audit current allocation.** How many projects does each developer have?
2. **Identify overallocated.** Who is on 3+ projects?
3. **Reassign.** Remove developers from non-priority projects.
4. **Apply the rule.** Maximum 2 projects per person.
5. **Visualize.** Use Sinra to see allocation in real-time.

---

## The Key Point

**Multi-project kills productivity.**

Between **permanent context switching**, **nothing getting finished**, **burnout**, and **all projects late**, nobody can move forward.

**Sinra limits active projects and visualizes overload.**

"Projects" field, allocation view, automatic alerts.

**The result:**
- ✅ Developers on 1-2 projects max (focus restored)
- ✅ Projects finished on time (87% instead of 23%)
- ✅ Context switching reduced (12% instead of 60%)
- ✅ Burnout divided by 3 (19% instead of 58%)
- ✅ Productivity restored (100% instead of <10%)

**Your developers can finally focus.**

**Your projects get finished.**

---

**Ready to eliminate multi-project?** [Start a free Sinra trial →](https://app.sinra.dev/users/sign_up)

Discover project management where developers are focused on 1-2 projects max, not scattered across 4+.
