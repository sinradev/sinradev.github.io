---
layout: post
title: "Hidden Dependencies: Why Your Features Are Always Blocked"
subtitle: "Between invisible dependencies, teams waiting for each other, and \"wait, who depends on what?\", nothing moves forward: Sinra makes dependencies visible and manageable"
description: "Features are constantly blocked by dependencies discovered too late. Teams wait for each other. Releases slip because an API isn't ready. Discover how Sinra makes dependencies explicit and traceable."
date: 2025-12-28 09:00:00 +0100
lang: en
category: Dependencies
excerpt: "The dev asks: \"Why has my feature been blocked for 3 weeks?\". You discover it depends on the backend team, who's waiting for the infra team, who's waiting for a CTO decision. Nobody knew. Welcome to hidden dependencies hell."
permalink: /dependencies/:year/:month/:day/dependances-cachees-features-bloquees.html
featured_image: /assets/images/blog/2025-12-28-dependances-cachees-featured.png
---

## The Feature Blocked For 3 Weeks

**Monday morning. Daily standup.**

Scrum Master: "Dev 1, status on the 'Export PDF' feature?"

Dev 1: "Still blocked."

SM: "Blocked for how long already?"

Dev 1: "3 weeks."

SM: "3 weeks?! Why is it blocked?"

Dev 1: "I'm waiting for the PDF generation API from the backend team."

SM: "OK, and the backend team, where are they at?"

**SM goes to see the backend team.**

SM: "The PDF API, when will it be ready?"

Backend Dev: "We can't do it now. We're waiting for the infra team to give us access to the S3 storage service."

SM: "And the infra team?"

**SM goes to see the infra team.**

SM: "The S3 access, when will it be ready?"

Infra Lead: "We're waiting for CTO approval to create the S3 bucket. For security reasons."

SM: "And the CTO, does he know we're waiting for that?"

Infra Lead: "Uh... I sent him an email 2 weeks ago. No response."

**SM goes to see the CTO.**

SM: "There's an S3 access request that's been blocking a feature for 3 weeks. Can you approve?"

CTO: "S3? For what?"

SM: "For the PDF API that's blocking the 'Export PDF' feature."

CTO: "Ah. Nobody explained the context. OK, approved. It'll take 2 days to provision."

**Result:**
- **Feature blocked: 3 weeks**
- **Dependency chain discovered too late:** Frontend → Backend → Infra → CTO
- **Real time needed after unblocking:** 4 days
- **Time wasted due to hidden dependencies:** 17 days

<img src="/assets/images/blog/2025-12-28-dependances-cachees-blocked-timeline.svg" alt="Timeline: feature blocked 3 weeks, but only 4 days of real work" width="800" height="400" loading="lazy">

---

## The Hidden Dependencies Problem

Most tech teams live with invisible dependencies. Blocked features because they discover too late that they depend on another team, a decision, an unready API.

### The Five Symptoms Of Hidden Dependencies

#### 1. Features Constantly Blocked ("We're Waiting For Team X")

**The Scenario:**
Your feature has been "in progress" for 2 weeks, but nothing's moving. When you ask why, you're told: "We're waiting for team X."

**Typical timeline:**

**Week 1:** Feature started. All good.

**Week 2, Day 1:** "Oh crap, we need the API from the backend team to move forward."

**Week 2, Day 3:** Message sent to backend team: "We need your API."

**Week 2, Day 5:** Backend team responds: "OK, we can do it next week."

**Week 3:** Feature blocked. Frontend team waiting.

**Week 4:** API delivered. Feature can resume. But meanwhile, the frontend dev switched context to something else.

**The Problem:**
- ❌ Dependency discovered late (after starting the feature)
- ❌ No anticipation (thought we could do everything alone)
- ❌ Time wasted waiting (2 weeks blocked)
- ❌ Context switching (dev moves to something else, comes back later)

**Real Statistic:**

In a survey of 120 engineering teams:
- **47% of features** encounter at least one unexpected blocking dependency
- **Average delay caused by hidden dependency:** 12 days
- **% of dependencies identified before feature start:** 23%

**Result:** Features are constantly blocked because dependencies are discovered too late.

---

#### 2. Invisible Dependency Chains ("Who Does This Depend On Again?")

**The Scenario:**
Your feature depends on team A, who depends on team B, who depends on team C. Nobody sees the complete chain.

**Real example:**

Feature: **"Mobile push notifications"**

**Dependencies discovered progressively:**

**Day 1:** Mobile team starts the feature.

**Day 3:** "We need the notifications API from backend."

**Day 5:** Backend starts the API. "We need a Redis server for the notifications queue."

**Day 8:** Infra provisions Redis. "We need access to Firebase Cloud Messaging service."

**Day 12:** "Firebase requires security approval."

**Day 18:** Security approves. "But you must first configure APNs certificates for iOS."

**Day 23:** Mobile team configures APNs. Feature can finally be completed.

**Dependency chain (discovered progressively):**

Mobile → Backend → Infra (Redis) → Infra (Firebase) → Security → Mobile (APNs)

<img src="/assets/images/blog/2025-12-28-dependances-cachees-chain-progressive.svg" alt="Progressive discovery of dependency chain over 23 days" width="800" height="450" loading="lazy">

**The Problem:**
- ❌ Chain discovered progressively (not anticipated)
- ❌ Each dependency reveals a new dependency
- ❌ Impossible to plan (can't see the complete chain)
- ❌ Cumulative delays (23 days instead of 5 if everything was anticipated)

**Result:** Features take 4x longer due to invisible dependency chains.

---

#### 3. Teams Waiting For Each Other ("Who Does What?")

**The Scenario:**
Team A thinks team B is doing part of the work. Team B thinks it's team A. Result: nobody does anything.

**Real example:**

Feature: **"SSO Authentication"**

**Week 1:**

Frontend team: "We're waiting for backend to do the OAuth2 integration."

Backend team: "We're waiting for frontend to tell us which SSO provider to use (Google, Microsoft, etc.)."

**Week 2:**

Scrum Master discovers the problem: "Wait, you're waiting for each other?"

Frontend: "We thought backend would choose the provider."

Backend: "No, that's a product decision."

Product Manager: "Ah, nobody asked me. OK, we'll do Google and Microsoft."

**Week 3:**

Backend team: "We did the Google integration on the backend side."

Frontend team: "Ah, we thought you'd also do the frontend lib."

Backend: "No, that's your job. We just expose the API."

**Week 4:**

Frontend completes the integration.

**Result:**
- **Feature took 4 weeks**
- **Real time needed with clear coordination:** 1.5 weeks
- **Time wasted due to poor coordination:** 2.5 weeks

<img src="/assets/images/blog/2025-12-28-dependances-cachees-teams-waiting.svg" alt="Teams waiting for each other: total deadlock" width="800" height="450" loading="lazy">

**The Problem:**
- ❌ Contradictory assumptions (everyone thinks the other is doing the work)
- ❌ No upfront clarification ("who does what" not defined)
- ❌ Discovered late (after waiting several weeks)
- ❌ Frustration (feeling of wasted time)

**Result:** Teams wait for each other because responsibilities aren't clear.

---

#### 4. Releases That Slip ("We're Waiting For A Critical Dependency")

**The Scenario:**
Your Q2 release is planned for June 30th. On June 25th, you discover that a critical feature depends on an API that won't be ready until July 10th.

**Typical timeline:**

**May 15:** Q2 release planned with 8 features.

**June 1:** 5 features completed. 3 in progress.

**June 15:** 7 features completed. 1 remaining feature: "Stripe Integration".

**June 20:** Team discovers that Stripe integration depends on a "Payments" backend API not yet done.

**June 22:** Backend starts the Payments API. "We'll be done July 5th."

**June 25:** PM realizes June 30th release is impossible.

**June 30:** Release postponed to July 10th.

**The Problem:**
- ❌ Critical dependency discovered late (10 days before release)
- ❌ No upfront visibility (thought everything was ready)
- ❌ Release slips (impossible to deliver on time)
- ❌ Credibility destroyed (stakeholders disappointed)

**Real Statistic:**

Analysis of 80 tech releases:
- **34% of releases** slip due to dependencies discovered late
- **Average slip delay:** 11 days
- **% of dependencies identified before final sprint:** 41%

**Result:** Releases constantly slip because critical dependencies are discovered too late.

---

#### 5. Forgotten External Dependencies ("We're Waiting For The Client")

**The Scenario:**
Your feature depends on an external action (client approval, third-party API access, legal decision). Nobody tracks it. The feature remains blocked indefinitely.

**Real example:**

Feature: **"Third-party API integration"**

**Week 1:** Team starts the feature.

**Week 2:** "We need API credentials from the client."

**Week 2, Day 3:** Email sent to client: "Can you give us the API credentials?"

**Week 3:** No response from client. Feature marked "Blocked".

**Week 4-8:** Nobody follows up with client. Feature forgotten.

**Week 9:** Client sends credentials (they had forgotten).

**Week 10:** Feature resumed. But the dev who was working on it changed projects.

**The Problem:**
- ❌ External dependency not tracked (no follow-up)
- ❌ Feature forgotten for 7 weeks
- ❌ Massive time wasted (client could have provided credentials in 2 days if followed up)
- ❌ Context switching (original dev no longer available)

**Types of forgotten external dependencies:**
- Client approval
- Third-party API access (keys, credentials)
- Legal/compliance decision
- Security validation
- Budget approval

**Result:** External dependencies are forgotten because nobody actively tracks them.

---

## Why Dependencies Remain Hidden

### Reason 1: Undocumented Dependencies

**The Problem:**

When you create an issue, you don't document its dependencies.

**Typical Jira issue:**

```markdown
Title: Implement PDF export

Description:
As a user, I want to export my data as PDF.

Acceptance criteria:
- [ ] "Export PDF" button visible
- [ ] PDF generated with correct data
- [ ] PDF downloadable
```

**What's missing:** No mention of dependencies.

**Real dependencies (discovered later):**
- Depends on backend API `/generate-pdf`
- Depends on S3 access to store PDFs
- Depends on `pdf-generator` lib (not yet installed)
- Depends on security approval (PDFs may contain sensitive data)

**Why they're not documented:**
- Nobody thinks to list dependencies when creating the issue
- No "Dependencies" field in Jira by default
- Dependencies discovered along the way
- Too late to plan

**Result:** Dependencies remain invisible until encountered.

---

### Reason 2: No Overview (Working In Silos)

**The Problem:**

Each team works in a silo. Nobody sees how features interconnect.

**Example:**

Mobile team works on "Push notifications".

Backend team works on "Users API".

Infra team works on "Redis migration".

**Nobody realizes that:**
- Push notifications (mobile) → depends on backend API
- Backend API → depends on Redis
- Redis → being migrated (unavailable for 3 days)

**Catastrophic result:**

Mobile completes their feature. Backend completes their API. But Redis is down during migration.

**Everything is blocked for 3 days.**

**Why nobody saw it coming:**
- Each team only sees their work
- No overview of dependencies between teams
- Nobody coordinates

**Result:** Teams block each other without knowing it.

---

### Reason 3: Dependencies Discovered Late (No Anticipation)

**The Problem:**

We start a feature without analyzing its dependencies. We discover them along the way.

**Typical workflow:**

**Day 1:** "OK, we're doing feature X."

**Day 3:** "Ah, we need API Y."

**Day 5:** "API Y depends on service Z."

**Day 8:** "Service Z requires approval."

**Why it's toxic:**

Because instead of discovering all dependencies **before** starting, we discover them **during**.

**Consequence:**
- Broken planning (thought we'd finish in 5 days, takes 3 weeks)
- Blocked features (waiting for an unexpected dependency)
- Frustration (feeling of wasting time)

**Why we don't anticipate:**
- No process to identify dependencies upfront
- Pressure to start quickly ("we'll see along the way")
- Lack of experience (don't know all system dependencies)

**Result:** We always discover dependencies too late.

---

## The Sinra Approach: Explicit And Traceable Dependencies

Sinra eliminates hidden dependencies by **making all dependencies explicit, visible and traceable**.

### The Concept: Documented And Tracked Dependencies

In Sinra, each issue can declare its dependencies. Dependencies are:
- **Explicit** (clearly documented)
- **Visible** (whole team sees them)
- **Traceable** (know who blocks whom)
- **Actionable** (can unblock proactively)

**Three mechanisms:**

1. **Dependency links**: Issue A → blocked by → Issue B
2. **Dependencies view**: Visual graph showing all chains
3. **Proactive alerts**: Notification when a dependency blocks

**Result:** Impossible to have hidden dependencies.

---

### Anatomy Of A Feature With Sinra Dependencies

Let's revisit the "Export PDF" example.

#### Traditional Approach (Hidden Dependencies)

**Issue created:**

```markdown
Title: Implement PDF export
Status: To Do
Assignee: Dev 1
```

**No mention of dependencies.**

**Day 3:** Dev 1 discovers they need the backend API.

**Day 5:** Backend discovers they need S3 access.

**Day 10:** Infra discovers they need CTO approval.

**Day 17:** Feature unblocked.

**Time wasted:** 14 days.

---

#### Sinra Approach (Explicit Dependencies)

**Step 1:** Create "Export PDF" issue

**Description:**
```markdown
# Export PDF

Allow users to export their data as PDF.

## Identified dependencies:
- Blocked by: [BACKEND-234] API POST /generate-pdf
- Blocked by: [INFRA-567] S3 bucket access
- Blocked by: [SECURITY-89] Approval to store PDFs
```

**Step 2:** Create dependency issues

**Issue [BACKEND-234]:**
```markdown
Title: API POST /generate-pdf
Status: To Do
Assignee: Backend Team
Blocks: [FRONTEND-123] Export PDF
```

**Issue [INFRA-567]:**
```markdown
Title: Provision S3 bucket for PDFs
Status: Waiting Approval
Assignee: Infra Team
Blocks: [BACKEND-234] API /generate-pdf
Blocked by: [CTO] Security approval
```

**Issue [SECURITY-89]:**
```markdown
Title: Security approval for PDF storage
Status: To Do
Assignee: CTO
Blocks: [INFRA-567] S3 Bucket
```

**Step 3:** Graphical view of dependencies

```
[CTO Approval] → [Infra S3] → [Backend API] → [Frontend Export PDF]
```

**Whole team sees the complete chain.**

**Step 4:** Proactive unblocking

**Day 1:** PM sees the dependency chain. "We need CTO approval first. I'll ping him now."

**Day 1, 2h later:** CTO approves.

**Day 2:** Infra provisions S3.

**Day 3:** Backend starts the API.

**Day 5:** API completed.

**Day 6:** Frontend integrates and completes.

**Total time:** 6 days instead of 17.

**Gain:** 11 days saved thanks to anticipation.

<img src="/assets/images/blog/2025-12-28-dependances-cachees-traditional-vs-sinra.svg" alt="Comparison: traditional approach (17 days) vs Sinra (6 days)" width="800" height="450" loading="lazy">

---

### The Three Pillars Of Sinra Dependency Management

#### 1. Explicit Dependencies (Documented From The Start)

**The Concept:**

Each issue explicitly declares its dependencies **before starting**.

**"Blocked by" field:**
- `[BACKEND-123] API endpoint`
- `[INFRA-456] Redis provisioning`
- `[DESIGN-789] Mockups approval`

**"Blocks" field (automatically generated):**

If issue A is blocked by issue B, then issue B sees that it "blocks" issue A.

**Benefit:** All dependencies are visible **before** starting work.

---

#### 2. Graphical View Of Dependencies (See The Whole Chain)

**The Concept:**

Sinra generates a visual graph showing all dependency chains.

**Example: Q2 Release**

```
Q2 Release
├── Feature A (ready)
├── Feature B (blocked)
│   └── Blocked by [API-123]
│       └── Blocked by [INFRA-456]
│           └── Blocked by [CTO Approval]
├── Feature C (ready)
└── Feature D (blocked)
    └── Blocked by [DESIGN-789]
```

**At a glance view:**
- 2 ready features
- 2 blocked features
- Visible dependency chains

**Immediate actions possible:**
- Ping CTO to unblock Feature B
- Follow up with design to unblock Feature D

<img src="/assets/images/blog/2025-12-28-dependances-cachees-dependency-graph.svg" alt="Complete graphical view of dependencies in Sinra" width="800" height="450" loading="lazy">

**Benefit:** No hidden dependencies. Everyone sees the blockers.

---

#### 3. Proactive Alerts (Automatic Notifications)

**The Concept:**

Sinra sends alerts when a dependency blocks.

**Alert types:**

**Alert 1: Blocking dependency created**

```
🚨 New blocking dependency
Issue [FRONTEND-123] Export PDF is now blocked by [BACKEND-234] API /generate-pdf
Action: Assign [BACKEND-234] to Backend Team
```

**Alert 2: Late dependency**

```
⚠️ Late dependency
Issue [BACKEND-234] API /generate-pdf (blocks Export PDF) should have been completed yesterday
Action: Check with Backend Team
```

**Alert 3: Unblocked dependency**

```
✅ Unblocked dependency
Issue [BACKEND-234] API /generate-pdf is completed
[FRONTEND-123] Export PDF can now move forward
```

**Benefit:** Dependencies are actively tracked. Nothing forgotten.

---

## Real Example: Quantum (E-commerce Platform)

**Quantum (team of 18 people, B2B e-commerce platform)**

*Note: Quantum is a real company we've anonymized under a fictitious name to protect their confidentiality.*

### Before Sinra: Hidden Dependencies

**Problems Encountered:**

**Problem 1: Features constantly blocked**

**47% of features** encountered a blocking dependency discovered after starting.

Average delay caused: **9 days per feature**.

**Problem 2: Invisible dependency chains**

"Improved checkout" feature:
- Blocked by Backend (payments API)
- Backend blocked by Infra (Redis)
- Infra blocked by Security (approval)
- Security blocked by CTO (validation)

**Chain discovered progressively over 4 weeks.**

**Problem 3: Releases that slip**

Q2 release planned for June 30th.

On June 22nd, discovery of an unready critical dependency.

Release slips to July 12th.

**Problem 4: Forgotten external dependencies**

Stripe API integration blocked for 5 weeks because nobody followed up with client for credentials.

**Team morale:** Frustrated. "Our features are always blocked by something we don't see coming."

---

### After Sinra: Visible Dependencies

**Workflow:**

1. **Document dependencies when creating the issue**
2. **Graphical view of dependency chains**
3. **Proactive alerts when dependency blocks**
4. **Anticipated unblocking (before it blocks)**

**Example: "Improved checkout" feature**

**Before starting:**

PM creates the issue with explicit dependencies:
```markdown
Blocked by:
- [BACKEND-567] Payments API
- [INFRA-123] Redis provisioning
- [SECURITY-89] Security approval
- [CTO] Final validation
```

**Graphical view shows the complete chain.**

**Immediate action:**

PM sees everything depends on CTO approval. He pings the CTO **before** starting the feature.

CTO approves in 1 day.

Infra provisions Redis in 2 days.

Backend does the API in 3 days.

Frontend integrates in 2 days.

**Total:** 8 days instead of 28.

**Results (After 6 Months):**

**Metric 1: Blocked features**
- **Before:** 47% of features blocked by unexpected dependencies
- **After:** 8% (dependencies anticipated and proactively unblocked)

**Metric 2: Average dependency delay**
- **Before:** 9 days wasted per feature
- **After:** 2 days

**Metric 3: Releases that slip**
- **Before:** 40% of releases slip
- **After:** 5%

**Metric 4: External dependencies**
- **Before:** Forgotten for weeks
- **After:** Tracked and followed up automatically

**Metric 5: Morale**
- **Before:** Frustrated team
- **After:** "Finally we see blockers coming"

**Lead Developer Quote:**
> "Before, we'd start a feature and discover 3 days later we were blocked by backend. Now, we see all dependencies before starting. If something blocks, we know immediately and can act."

**Product Manager Quote:**
> "Releases don't slip anymore. We know exactly which features have dependencies, and we unblock them proactively. No more surprises 5 days before release."

<img src="/assets/images/blog/2025-12-28-dependances-cachees-quantum-before-after.svg" alt="Quantum: metrics before/after Sinra" width="800" height="450" loading="lazy">

---

## Jira vs. Sinra: Dependency Management Comparison

| **Aspect** | **Jira** | **Sinra** |
|------------|----------|-----------|
| **Dependencies documentation** | ❌ Manual (often forgotten) | ✅ Dedicated field (mandatory) |
| **Chain view** | ❌ Nonexistent | ✅ Complete visual graph |
| **Blocker alerts** | ❌ None | ✅ Proactive notifications |
| **External dependencies** | ❌ Not tracked | ✅ Tracked and followed up |
| **Anticipation** | ❌ Discovered late | ✅ Identified before starting |
| **Blocked features** | 47% (unexpected) | 8% (anticipated) |
| **Average delay** | 9 days wasted | 2 days |

---

## The Five Signs Your Dependencies Are Hidden

### Sign 1: You Discover Dependencies After Starting

If you start a feature and discover 3 days later it depends on another team, your dependencies are hidden.

---

### Sign 2: "We're Waiting For Team X" Is A Recurring Phrase

If every standup someone says "we're waiting for team X", there are unanticipated dependencies.

---

### Sign 3: Your Releases Slip Due To Dependencies

If your releases slip because a critical dependency isn't ready, you have no visibility.

---

### Sign 4: Nobody Knows Who Blocks Whom

If you can't instantly answer "which features block which other features", your dependencies are invisible.

---

### Sign 5: External Dependencies Forgotten For Weeks

If you have features blocked for weeks waiting for a client/partner, you're not tracking external dependencies.

---

## How To Use Sinra To Manage Dependencies

### Step 1: Document Dependencies When Creating

**Action:**
- When you create an issue, list all its dependencies
- Use the "Blocked by" field to link to other issues
- Don't start until dependencies are identified

**Result:** All dependencies are explicit before starting.

---

### Step 2: Visualize Dependency Chains

**Action:**
- Use the graphical view to see all chains
- Identify critical dependencies (blocking the most features)
- Prioritize unblocking critical dependencies

**Result:** Complete overview. No surprises.

---

### Step 3: Unblock Proactively

**Action:**
- Don't wait to be blocked to act
- As soon as a dependency is identified, unblock it
- Ping responsible people/teams immediately

**Result:** Dependencies unblocked before they block.

---

### Step 4: Track External Dependencies

**Action:**
- Mark external dependencies (client, partner, approval)
- Set up automatic reminders
- Follow up regularly

**Result:** External dependencies never forgotten.

---

## Action Points: Make Dependencies Visible

1. **Audit your blocked features.** How many are blocked by unanticipated dependencies?
2. **Document dependencies.** For each new issue, explicitly list dependencies.
3. **Create a dependencies view.** Use Sinra to visualize chains.
4. **Unblock proactively.** Don't wait to be blocked to act.
5. **Track external dependencies.** Follow up with clients/partners regularly.

---

## The Key Point

**Hidden dependencies kill productivity.**

Between **constantly blocked features**, **invisible chains**, **teams waiting for each other**, and **slipping releases**, nobody can move forward.

**Sinra makes all dependencies explicit, visible and traceable.**

Dedicated fields, graphical view, proactive alerts.

**The result:**
- ✅ Anticipated dependencies (identified before starting)
- ✅ Visible chains (complete graph)
- ✅ Proactive unblocking (act before being blocked)
- ✅ On-time releases (no surprises)
- ✅ Restored productivity (features move forward)

**You finally have visibility.**

**Your features are no longer blocked.**

---

**Ready to make your dependencies visible?** [Start a free Sinra trial →](https://app.sinra.dev/users/sign_up)

Discover project management where dependencies are explicit and traceable, not hidden and discovered too late.
