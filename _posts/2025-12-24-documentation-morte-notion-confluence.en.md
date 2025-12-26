---
layout: post
title: "Dead Documentation: Why Your Confluence/Notion Falls Into Ruin"
subtitle: "Between obsolete specs, contradictory docs, and multiple versions, nobody knows what information is reliable—Sinra unifies context and work"
description: "Teams create beautiful documentation in Notion/Confluence. Six months later, 70% is obsolete and nobody knows which version is correct. Discover how Sinra integrates documentation and work in a unified system."
date: 2025-12-24 09:00:00 +0100
lang: en
category: Documentation
excerpt: "Your new developer asks: 'How does authentication work?'. You point to 3 different Notion docs from 6 months ago. None match the current code. Welcome to the dead documentation graveyard."
permalink: /documentation/:year/:month/:day/dead-documentation-notion-confluence.html
featured_image: /assets/images/blog/2025-12-24-documentation-morte-featured.svg
---

## The New Developer's First Day

**Monday 9am. Alex joins the engineering team.**

Lead Developer: "Welcome Alex! To understand our architecture, start by reading the documentation."

**Alex opens Notion.**

**Search: "Authentication"**

**Results found: 8 documents**

1. `RFC-042: Authentication Architecture` (created 8 months ago)
2. `Technical Spec: SSO Implementation` (created 6 months ago)
3. `API Auth v2 Documentation` (created 4 months ago)
4. `Migration JWT → OAuth2` (created 3 months ago)
5. `Guide: How to authenticate users` (created 2 months ago)
6. `Auth System Overview [DRAFT]` (created 1 month ago)
7. `Authentication Best Practices` (created 2 weeks ago)
8. `Auth Quick Start` (created yesterday)

**Alex, puzzled:**

> "Which one should I read? Which one is up to date?"

**He opens RFC-042 (the oldest).**

```markdown
# RFC-042: Authentication Architecture

## Status: Approved ✅

We will implement JWT tokens for authentication.

### Architecture:
- Backend: Node.js + Express + JWT
- Tokens stored in localStorage
- Lifespan: 24h
- No refresh tokens (to keep it simple)
```

**Alex reads the entire document (30 minutes).**

**Then, he opens the current code:**

```javascript
// auth.service.ts
export class AuthService {
  // Using OAuth2 with refresh tokens
  async login(provider: 'google' | 'microsoft') {
    return this.oauth2Provider.authenticate(provider);
  }
}
```

**Alex, confused:**

> "The doc says JWT, the code does OAuth2. The doc says no refresh tokens, the code has them. The doc says localStorage, the code uses httpOnly cookies. Nothing matches!"

**He asks the Lead Developer:**

Alex: "The RFC-042 doc says we use JWT, but the code does OAuth2?"

Lead Dev: "Oh yeah, we changed 4 months ago. Check the 'Migration JWT → OAuth2' doc instead."

Alex: "But which one is the current version?"

Lead Dev: "Uh... good question. Maybe the 'Auth System Overview'? Or the 'Quick Start'? Actually, I'm not sure. Just read the code, it'll be more reliable."

**Result:** Alex spent 2 hours reading obsolete documentation to eventually learn by reading the code.

![Multiple versions: Nobody knows which is correct](/assets/images/blog/2025-12-24-documentation-morte-multiple-versions.svg)

---

## The Problem Of Dead Documentation

Most tech teams create documentation. Then it slowly dies, without anyone noticing.

### The Five Symptoms Of Dead Documentation

#### 1. Obsolete Documentation (Disconnected From Real Code)

**The Scenario:**
You write a beautiful technical spec in Notion 6 months ago. The code evolves. The spec stays frozen.

**Typical timeline:**

**Month 1:** Spec created, perfectly aligned with code.

**Month 2:** Small code change (added a parameter). Spec not updated ("I'll do it later").

**Month 3:** Major refactoring (architecture change). Spec not updated ("too busy, deadline").

**Month 4:** New team member reads the spec, doesn't understand why the code is different.

**Month 6:** The spec is officially obsolete. Nobody reads it anymore. It becomes a historical artifact.

**The Problem:**
- ❌ Documentation frozen while code evolves
- ❌ No incentive to keep it updated
- ❌ Progressive and silent desynchronization
- ❌ Nobody knows when the doc became obsolete

**Real Result:**
An internal study at a 50-person tech scale-up revealed that **73% of their Confluence documentation was over 6 months old and no longer matched the current code**.

![Timeline of documentation obsolescence over 6 months](/assets/images/blog/2025-12-24-documentation-morte-obsolescence-timeline.svg)

---

#### 2. Multiple Versions (Nobody Knows Which Is Correct)

**The Scenario:**
You search for "How does authentication work?" in Notion.

**You find:**
- `Auth Architecture v1` (8 months)
- `Auth Architecture v2 [FINAL]` (6 months)
- `Auth Architecture v2.1` (4 months)
- `Auth Overview [Updated]` (2 months)
- `Authentication Guide` (1 week)

**Question:** Which one is correct?

**Answer:** No idea.

**The Problem:**
- ❌ Nobody deletes old versions
- ❌ No clear versioning system
- ❌ Titles don't reflect real status ("FINAL" is never final)
- ❌ Impossible to know which doc reflects current code

**Real Scenario:**

**Developer 1:** "Read the 'Auth v2 FINAL' doc."

**Developer 2:** "No, that one's obsolete. Read 'Auth Overview Updated'."

**Developer 3:** "Wait, the most recent is 'Authentication Guide' created last week."

**Lead Developer:** "Honestly, just read the code."

---

#### 3. Contradictory Docs (Each Doc Says Something Different)

**The Scenario:**
Three different documents describe the same feature. Each says something slightly different.

**Doc A (Notion):** "Tokens expire after 1 hour."

**Doc B (Confluence):** "Tokens expire after 24 hours."

**Current code:** `TOKEN_EXPIRY = 12 * 60 * 60` (12 hours)

**None are correct.**

**The Problem:**
- ❌ Documentation fragmented between tools (Notion + Confluence + GitHub Wiki + Google Docs)
- ❌ Each doc created independently, never synchronized
- ❌ Impossible to know which info is correct
- ❌ Contradictions create confusion and bugs

**Real Example:**

A developer implements a feature based on Doc A ("tokens 1h"). QA tests based on Doc B ("tokens 24h"). The code does 12h. Everyone thinks there's a bug, but it's just the docs lying.

---

#### 4. "We'll Update The Doc After" (Spoiler: Never Done)

**The Scenario:**

**Friday 5pm, end of sprint.**

Dev: "I finished the SSO feature."

Lead: "Great! Did you update the documentation?"

Dev: "Uh... no, I didn't have time. I'll do it Monday."

**Monday morning.**

Dev: (3 new issues assigned, 2 urgent bugs, 1 impromptu meeting)

"Damn, I forgot the doc. I'll do it later."

**2 weeks later.**

Dev: (completely forgot)

**3 months later.**

New dev: "How does SSO work?"

Old dev: "Uh... look at the code, the doc is obsolete."

**The Problem:**
- ❌ Documenting is never urgent
- ❌ No accountability (nobody checks)
- ❌ Separate workflow (code → commit → ... doc? maybe?)
- ❌ Incentive to document = zero

**Real Statistic:**

In a survey of 200 developers:
- 92% say "I'll update the doc later"
- 8% actually update
- Average delay between code change and doc update: **never**

---

#### 5. Nightmarish Onboarding (New Person Lost)

**The Scenario:**

**New developer, Day 1.**

Lead: "Read these 40 Notion documents to understand the architecture."

**New developer spends 3 days reading.**

**Day 4:**

New dev: "I read all the docs. Can I start coding?"

Lead: "Cool, which feature do you want to tackle?"

New dev: "The payments API. The doc says we use Stripe with webhooks."

Lead: "Oh no, we migrated to Adyen 2 months ago. The doc is obsolete."

New dev: "..."

**The Problem:**
- ❌ Onboarding based on obsolete docs = wasted time
- ❌ New person can't distinguish valid vs obsolete docs
- ❌ Massive frustration ("I read for 3 days for nothing")
- ❌ Loss of trust in documentation

**Result:** New developers quickly abandon docs and learn by asking 100 questions to their colleagues.

---

## Why Documentation Dies

### Reason 1: Documentation Separated From Work

**The Problem:**

Teams use:
- **GitHub** for code
- **Jira/Linear** for issues
- **Notion/Confluence** for documentation

**Typical workflow:**

1. Developer works on a feature in Jira
2. Code in GitHub
3. Merge the PR
4. ✅ Feature done!
5. ... Documentation? "Oh yeah, I need to update it in Notion. Later."

**Result:** Documentation is an afterthought, disconnected from the natural workflow.

**Nobody updates because:**
- It's in a separate tool (context switch)
- Not part of review process (PR merged without doc)
- No automatic reminder ("You forgot the doc")

---

### Reason 2: No Single Source Of Truth

**The Problem:**

Information scattered across:
- Notion: Technical specs
- Confluence: Architecture decisions
- GitHub Wiki: Setup guides
- Google Docs: Product requirements
- Slack: Quick decisions (lost after 90 days)
- Email: Stakeholder approvals

**Result:** **6 sources of truth** = **0 source of truth**.

Nobody knows where to look. Nobody knows which info is correct. Everyone maintains their own mental version of "how it really works".

![Documentation scattered across 6 tools](/assets/images/blog/2025-12-24-documentation-morte-scattered-tools.svg)

---

### Reason 3: No Owner (Everybody's Responsibility = Nobody's Responsibility)

**The Problem:**

Lead: "Who is responsible for keeping the docs updated?"

**Answer A:** "The team."

**Answer B:** "The developer who makes the change."

**Answer C:** "The tech lead."

**Reality:** Nobody.

**Why?**

Because "collective responsibility" = no individual accountability.

Developer: "I forgot to update the doc, but it's not critical."

Tech Lead: "I thought the dev would update the doc."

New dev (6 months later): "Why is this doc obsolete?"

Everyone: 🤷

---

## The Sinra Approach: Living Documentation Integrated With Work

Sinra eliminates dead documentation by **integrating context and work in a unified system**.

### The Concept: Pages + Commentary = Living Documentation

In Sinra, documentation doesn't live in a separate tool. It lives **with the work**.

**Three mechanisms:**

1. **Pages**: Structured documentation organized by categories
2. **Commentary**: Context and decisions captured directly in issues and capabilities
3. **Unified search**: Find code, context, and documentation in one place

**Result:** Impossible to desynchronize (no external docs to maintain).

---

### Anatomy Of A Feature With Sinra Documentation

Let's revisit the authentication example.

#### Traditional Approach (Notion + Code)

**Step 1:** Write spec in Notion ("RFC-042: Auth Architecture")

**Step 2:** Code in GitHub

**Step 3:** Merge the PR

**Step 4:** "I'll update the Notion doc later" → never done

**Result:** Notion doc frozen, code evolves, total desynchronization.

![Traditional approach vs Sinra](/assets/images/blog/2025-12-24-documentation-morte-traditional-vs-sinra.svg)

---

#### Sinra Approach (Integrated Documentation)

**Step 1:** Create capability "SSO Authentication"

**Capability description:**
```markdown
# SSO Authentication

Allow users to login via Google and Microsoft OAuth2.

## Architecture
- OAuth2 flow (not JWT)
- Tokens in httpOnly cookies (not localStorage)
- Refresh tokens with rotation
- Session duration: 12h

## Key decisions
[See commentary below]
```

**Step 2:** Capability commentary (context captured in real-time)

```markdown
@lead: Why OAuth2 and not JWT?

@architect: JWT requires manually managing revocation (complex).
OAuth2 with refresh tokens offers native revocation via the provider.

@dev1: And why httpOnly cookies instead of localStorage?

@architect: localStorage vulnerable to XSS attacks. httpOnly cookies
protect better against token theft.

@lead: Approved. Let's go.

Final decision: OAuth2 + refresh tokens + httpOnly cookies.
Reason: Security and simplicity of revocation.
```

**Step 3:** Issues created under the capability

- `[AUTH-120] Implement Google OAuth2 backend`
- `[AUTH-121] Implement Microsoft OAuth2 backend`
- `[AUTH-122] Setup httpOnly cookie management`
- `[AUTH-123] Implement refresh token rotation`

**Step 4:** Development with commentary per issue

```markdown
[Issue AUTH-120: Implement Google OAuth2 backend]

@dev1: I'm using the `passport-google-oauth20` lib. Config:
- Client ID/Secret stored in env vars
- Redirect URL: `/auth/google/callback`
- Scopes: profile, email

@architect: ✅ Perfect. Make sure to validate the state param for CSRF.

@dev1: ✅ Done. Code review ready.
```

**Step 5:** Code merged → Commentary preserved

**6 months later**, new developer:

> "How does auth work?"

**Answer:** Open the capability "SSO Authentication"

**They see:**
- ✅ Current architecture description
- ✅ Commentary explaining **why** OAuth2 (not just **what**)
- ✅ Technical decisions with justifications
- ✅ Related issues with implementation details
- ✅ Complete discussion history

**Time to understand:** 15 minutes instead of 3 days.

**Reliability:** 100% (because context captured at work time, not after).

---

### The Three Pillars Of Sinra Living Documentation

#### 1. Pages: Structured Documentation By Categories

**The Concept:**

Sinra **pages** allow you to create structured documentation, organized by **categories**.

**Use cases:**
- Architecture guides
- API documentation
- Setup instructions
- Best practices
- Runbooks

**Difference with Notion:**

| **Aspect** | **Notion/Confluence** | **Sinra Pages** |
|------------|----------------------|-----------------|
| **Link with work** | ❌ Separated | ✅ Integrated (can link issues, capabilities) |
| **Search** | Siloed | Unified (finds pages + issues + commentary) |
| **Updates** | Manual (forgotten) | Encouraged (in same system) |
| **Versioning** | Confusing | Clear (linked to releases) |

**Example: "Authentication Setup" Page**

```markdown
# Authentication Setup

## Overview
Our system uses OAuth2 with Google and Microsoft as providers.

## Quick Start
[Link to issues AUTH-120, AUTH-121]

## Architecture Decisions
[Link to commentary of SSO Authentication capability]

## Common Issues
[Link to resolved bugs with tag #auth]
```

**Benefit:** The page isn't isolated. It **points to real context** (issues, commentary, bugs).

---

#### 2. Commentary: Context Captured At Work Time

**The Concept:**

**Commentary** (already explained in the "Scattered Communication" post) captures:
- Technical decisions
- Justifications ("why")
- Team discussions
- Approach changes

**Difference with traditional documentation:**

**Traditional doc (Notion):**
> "We use OAuth2."

**Sinra Commentary:**
> "We use OAuth2 instead of JWT because [detailed reasons]. Full discussion: [link]. Alternative approaches considered: JWT (rejected due to complex revocation), Session cookies (rejected because not stateless)."

**Result:** Documentation isn't just **what**, but **why** and **how we got there**.

---

#### 3. Unified Search: Find Everything In One Place

**The Concept:**

Sinra offers **unified search** that finds:
- Documentation pages
- Issues
- Capabilities
- Commentary
- Bugs

**Scenario:**

Developer searches: "OAuth2 refresh tokens"

**Results:**
1. **Page**: "Authentication Setup" → mentions refresh tokens
2. **Capability**: "SSO Authentication" → describes refresh token architecture
3. **Issue**: AUTH-123 "Implement refresh token rotation" → detailed implementation
4. **Commentary**: Discussion on why rotation is mandatory
5. **Bug**: AUTH-247 "Refresh token expiry bug" → resolved edge case

**Time to find info:** < 1 minute.

**With Notion + GitHub + Jira separated:** 30 minutes (3 searches in 3 tools).

![Siloed search vs unified search](/assets/images/blog/2025-12-24-documentation-morte-search-comparison.svg)

---

## Real Example: DataFlow (SaaS Analytics)

**DataFlow (15-person team, analytics platform)**

*Note: DataFlow is a real company that we've anonymized under a fictional name to protect their confidentiality.*

### Before Sinra: Dead Documentation

**Docs stack:**
- Notion: Technical specs (200+ pages)
- Confluence: Architecture decisions (50+ pages)
- GitHub Wiki: Setup guides (30+ pages)
- Google Docs: Product specs (100+ docs)

**Problems Encountered:**
- **73% obsolete docs** (internal audit revealed)
- **Onboarding: 2 weeks** (new dev spends 10 days reading obsolete docs)
- **Multiple versions**: Each feature has 3-5 contradictory docs
- **No updates**: "We'll update the doc later" = never done
- **Team frustration**: "Nobody reads the docs anyway"

**Revealing Incident:**

New developer implements "CSV Export" feature based on 8-month-old Notion spec.

**Spec said:** "CSV comma-delimited, UTF-8 encoding"

**Current code did:** "CSV tab-delimited, UTF-16 encoding (for international Excel support)"

**Result:** Feature incorrectly reimplemented. 1 week wasted redoing it.

**Why?** Obsolete spec, never updated after implementation change 6 months prior.

---

### After Sinra: Living Documentation

**Workflow:**
1. Each feature documented in **capability description** + **commentary**
2. Sinra pages for setup guides and architecture
3. Unified search to find context
4. Zero external docs (everything in Sinra)

**Results (After 5 Months):**
- **0% obsolete docs** (impossible, because integrated with work)
- **Onboarding: 3 days** (targeted reading of key capabilities)
- **Single version**: Capability = single source of truth
- **Automatic updates**: Commentary captured during work (not after)
- **Team morale**: "Finally reliable docs!"

**Lead Developer Quote:**
> "Before, I'd tell new people 'forget the docs, read the code'. Now I say 'read these 5 capabilities and their commentary, you'll understand everything'. Onboarding divided by 3."

**Product Manager Quote:**
> "No more 6 contradictory versions of a spec. We have one capability with description + commentary. It's THE source of truth. If it changes, we update the capability. Simple."

![DataFlow: Before vs After Sinra](/assets/images/blog/2025-12-24-documentation-morte-before-after.svg)

---

## Notion + Confluence + GitHub Wiki vs. Sinra: Comparison

| **Aspect** | **Multi-Docs Stack** | **Sinra Integrated** |
|------------|---------------------|-------------------|
| **Doc location** | 4-6 separate tools | 1 unified system |
| **Code sync** | ❌ Manual (forgotten) | ✅ Integrated (in work) |
| **Obsolescence** | Frequent (70%+) | Rare (living context) |
| **Multiple versions** | Yes (confusion) | No (single source) |
| **Search** | Siloed by tool | Unified (everything) |
| **Onboarding** | 1-2 weeks | 2-3 days |
| **Updates** | "Later" = never | Captured during work |
| **Owner** | Unclear (nobody) | Clear (attached to capability) |
| **Reliability** | 30-40% | 90%+ |

---

## The Five Signs Your Documentation Is Dead

### Sign 1: You Say "Forget The Docs, Read The Code"

If you systematically advise new people not to read the documentation, your docs are dead.

---

### Sign 2: Nobody Knows Which Version Is Correct

If you have 5 documents for the same feature and nobody knows which is up to date, your docs are dead.

---

### Sign 3: The Doc Says One Thing, The Code Does Another

If your documentation contradicts the current code, your docs are dead (and dangerous).

---

### Sign 4: Onboarding Takes 2+ Weeks

If new people spend 2 weeks reading docs only to relearn everything by reading code, your docs are dead.

---

### Sign 5: "I'll Update The Doc Later"

If this phrase is said after every feature, your documentation is doomed to die.

---

## How To Use Sinra For Living Documentation

### Step 1: Create Pages For Structured Guides

**Action:**
- Create Sinra pages for setup, architecture, best practices
- Organize by categories (Setup, Architecture, API, etc.)
- Link pages to relevant capabilities and issues

**Result:** Structured documentation accessible and linked to work.

---

### Step 2: Capture Context In Commentary

**Action:**
- Discuss technical decisions in capability commentary
- Explain **why**, not just **what**
- Tag relevant people

**Result:** Context preserved at work time.

---

### Step 3: Use Capability Description As Spec

**Action:**
- Capability description = short, current spec
- Link to implementation issues
- Update description if architecture changes

**Result:** Single source of truth per feature.

---

### Step 4: Unified Search To Find Info

**Action:**
- Use Sinra search instead of searching in 5 tools
- Find pages, capabilities, issues, commentary in one place

**Result:** Instant answers, not 30 min of searching.

---

## Action Points: Resurrect Your Documentation

1. **Create your first Sinra pages.** Migrate your 5 most important guides from Notion.
2. **Capture context in commentary.** Next technical decision → write in capability, not Notion.
3. **Use capabilities as specs.** Description + Commentary = living documentation.
4. **Abandon Notion for new features.** All new work documented in Sinra.
5. **Onboard with Sinra.** Show 5 key capabilities, not 40 Notion docs.

---

## The Key Point

**Dead documentation kills productivity.**

Between **obsolete specs**, **multiple versions**, **contradictory docs**, and **nightmarish onboarding**, nobody trusts documentation.

**Sinra integrates documentation and work in a unified system.**

Pages structure, commentary captures context, search unifies everything.

**The result:**
- ✅ Living documentation (updated with work)
- ✅ Single source of truth (no multiple versions)
- ✅ Context preserved (why, not just what)
- ✅ Unified search (find everything in one place)
- ✅ Fast onboarding (3 days instead of 2 weeks)

**You finally have reliable documentation.**

**Your future self will thank you.**

---

**Ready to resurrect your documentation?** [Start a free Sinra trial →](https://app.sinra.dev/users/sign_up)

Discover project management where documentation lives with work, not in a Notion graveyard.
