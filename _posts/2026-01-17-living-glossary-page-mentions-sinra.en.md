---
layout: post
title: "From Notion To Sinra: When Your Technical Glossary Becomes Alive Through @Mentions"
subtitle: "Between obsolete definitions, scattered vocabulary and documentation isolated from work, nobody speaks the same language: Sinra connects glossary and execution via @pages"
description: "Teams create technical glossaries in Notion. Six months later, nobody uses them and everyone reinvents definitions. Discover how Sinra's @page mentions transform your glossary into a living source integrated with work."
date: 2026-01-17 09:00:00 +0100
lang: en
category: Documentation
excerpt: "The new developer asks: What exactly is a release candidate here? You point to the Notion glossary created 8 months ago. They find 3 contradictory definitions. Welcome to the technical glossary graveyard."
permalink: /documentation/:year/:month/:day/living-glossary-page-mentions-sinra.html
featured_image: /assets/images/blog/2026-01-17-glossaire-vivant-featured.png
---

## "What's A Release Candidate Here?"

**Tuesday afternoon. Release planning meeting.**

Product Manager: "We'll create a release candidate on Friday for staging testing."

**New developer (joined 2 weeks ago) raises hand:**

Dev: "Sorry, what exactly is a release candidate in our workflow?"

PM: "Good question! We have a glossary in Notion. Check the Release Management Vocabulary page."

**The developer opens Notion.**

**Search: "Release Candidate"**

**Result 1:** `Engineering Glossary v1` (created 12 months ago)
> **Release Candidate (RC):** Version tested internally, ready for production deployment without additional modifications.

**Result 2:** `Product Vocabulary 2025` (created 6 months ago)
> **RC (Release Candidate):** Stable build deployed to staging environment for QA validation. May still receive hotfixes.

**Result 3:** `Developer Onboarding Guide` (created 3 months ago)
> **Release Candidate:** Feature-complete version deployed for beta user testing. Code freeze except critical bugs.

**The developer, puzzled:**

> "Uh... I have three different definitions. Which one is correct?"

PM: "Ah yes, the glossary hasn't been updated since we changed our process."

Dev: "When was that?"

PM: "4 months ago."

Dev: "And the correct definition is which one?"

PM: "Actually, now we call it a staging release. We don't really use the term release candidate anymore."

**The developer closes Notion.**

Dev: "So your glossary is obsolete and you use terms that aren't even in it?"

PM: "... Yes."

<img src="/assets/images/blog/2026-01-17-glossaire-contradictoire.svg" alt="Three contradictory definitions in the Notion glossary" width="800" height="500" loading="lazy">

---

## The Problem Of Dead Glossaries

Most tech teams create a glossary or vocabulary wiki. Notion, Confluence, Google Docs, GitHub Wiki.

**Noble objective:** Create a single source of truth for business and technical vocabulary.

**Result 6 months later:** Dead, obsolete glossary that nobody consults.

### The Five Symptoms Of A Dead Glossary

#### 1. Obsolete Definitions (Vocabulary Evolves, Glossary Doesn't)

**The Scenario:**

You create a glossary with 50 carefully written definitions.

**Months 1-2:** Everyone consults it. "Super useful!"

**Month 3:** Team changes methodology. Terms evolve. Glossary isn't updated.

**Month 6:** 60% of definitions are obsolete or inaccurate.

**Month 12:** Nobody consults the glossary. Everyone has their own interpretation of terms.

**Real Example:**

**Term:** "Sprint"

**Glossary definition (8 months old):**
> 2-week iteration with fixed objectives and Scrum ceremonies.

**Current reality:**
Team abandoned Scrum to adopt 4-week "cycles" with flexible planning.

**Result:** New member reads "sprint" in glossary, thinks team does Scrum. Total confusion.

<img src="/assets/images/blog/2026-01-17-glossaire-obsolescence.svg" alt="Timeline of glossary obsolescence" width="800" height="400" loading="lazy">

**The Problem:**
- ❌ Vocabulary evolves with methodology
- ❌ Glossary frozen, never updated
- ❌ Progressive desynchronization
- ❌ Loss of trust in glossary

**Quote Lead Developer:**
> "We created a beautiful glossary in Notion. Now it mainly serves to show what we no longer do."

---

#### 2. Scattered Vocabulary (Each Tool Has Its Own Jargon)

**The Scenario:**

Your team uses multiple tools. Each tool imposes its own vocabulary.

**Typical stack:**
- **Jira:** Epic, Story, Subtask, Sprint, Backlog
- **Notion:** Database, Page, Block, Relation
- **GitHub:** Issue, PR, Project, Milestone
- **Your business glossary:** Capability, Feature, Task, Release

**Result:** 4 different vocabularies describing the same thing.

**Concrete Example:**

PM writes in Notion:
> "We'll create a **capability** "SSO Authentication" with 5 **tasks** assigned to the next **release**."

Dev translates in Jira:
> "I created an **epic** "SSO Authentication" with 5 **stories** in **sprint** 42."

QA translates in Slack:
> "I'm testing the **feature** "SSO" for **milestone** v2.4."

**Nobody speaks the same language.**

<img src="/assets/images/blog/2026-01-17-vocabulaire-disperse.svg" alt="Vocabulary fragmented across tools" width="800" height="450" loading="lazy">

**The Problem:**
- ❌ Each tool imposes its jargon
- ❌ Constant mental translation (capability = epic = feature?)
- ❌ Business glossary disconnected from work tools
- ❌ Confusion in conversations

**Quote Product Manager:**
> "When I say capability, devs think epic, QA thinks feature, and stakeholders think project. We're never talking about the same thing."

---

#### 3. Glossary Isolated From Work (Documentation ≠ Execution)

**The Scenario:**

You have a beautiful glossary in Notion. But it's **isolated from daily work**.

**Typical workflow:**

1. **Write glossary** in Notion (1 day, well done)
2. **Create issues** in Jira (Jira vocabulary, not glossary vocabulary)
3. **Discuss features** in Slack (everyone uses their own terms)
4. **Code** in GitHub (comments with technical jargon)

**The Notion glossary never appears in the workflow.**

**Result:** Glossary = dead documentation, never consulted during work.

**Real Example:**

**Term defined in Notion glossary:** "Capability"
> A high-level feature grouping multiple technical issues.

**Usage in Jira:** "Epic"

**Usage in Slack:** "Feature"

**Usage in GitHub PR:** "Module"

**The glossary has no impact on vocabulary used daily.**

**The Problem:**
- ❌ Glossary separated from work tools
- ❌ No incentive to use defined vocabulary
- ❌ Everyone uses their own terms
- ❌ Glossary becomes obsolete because disconnected from reality

**Quote QA Engineer:**
> "We have a glossary? I didn't even know. I just use the terms I see in issues."

---

#### 4. Contradictory Definitions (Multiple Versions, No Authority)

**The Scenario:**

Your team grows. Multiple people create definitions. Result: contradictory versions.

**Example:**

**Term:** "Hotfix"

**Definition A (Engineering Glossary):**
> Urgent fix deployed to production without going through the normal release cycle.

**Definition B (Ops Guide):**
> Critical patch deployed on a maintenance branch to correct a blocking bug.

**Definition C (QA Process):**
> Minor change deployed directly to production after quick validation (< 2h).

**Three definitions, three interpretations.**

**Question:** Which is correct?

**Answer:** No idea. Nobody defined an official version.

**The Problem:**
- ❌ Multiple definition sources
- ❌ No "official" version
- ❌ Impossible to know which definition is correct
- ❌ Sterile debates about the "true" meaning of terms

---

#### 5. Unused Glossary (Too Much Friction To Consult)

**The Scenario:**

You're working on an issue in Jira. You see the term "staging release."

**To consult the glossary, you must:**

1. Open a new tab
2. Go to Notion
3. Search for "Glossary"
4. Find the right page (there are 3)
5. Search for "staging release" in the page
6. Read the definition
7. Return to Jira

**Total time:** 2-3 minutes.

**Result:** You don't do it. You guess or ask a colleague.

**The Problem:**
- ❌ Too much friction to consult glossary
- ❌ Context switching (Jira → Notion → Jira)
- ❌ No direct link from work to definition
- ❌ Nobody consults glossary in practice

**Quote Developer:**
> "The glossary is in Notion. I work in Jira and GitHub. I never go look in Notion while coding."

**Result:** Glossary ignored, vocabulary fragmented, permanent confusion.

---

## Why Glossaries Die

### Reason 1: Glossary Separated From Work Workflow

**The Problem:**

The glossary lives in one tool (Notion, Confluence).

Work happens in other tools (Jira, Linear, GitHub).

**Result:** The glossary is never used during daily work.

**Typical workflow:**

1. PM writes spec in Notion (with glossary terms)
2. Dev creates issues in Jira (with Jira jargon)
3. QA tests feature (with their own terms)
4. The glossary never appears

**Nobody consults the glossary because it's elsewhere.**

---

### Reason 2: No Incentive To Keep Glossary Updated

**The Problem:**

Maintaining a glossary = manual work, not urgent, invisible.

**Scenario:**

Your team changes process. "We no longer do sprints, we do cycles."

**Who updates the glossary?**

**Answer A:** The PM. ("I don't have time.")

**Answer B:** The lead dev. ("It's not my job.")

**Answer C:** Nobody.

**6 months later:** The glossary still says "sprint". New member thinks you do Scrum. Confusion.

**The Problem:**
- ❌ Updating glossary is never urgent
- ❌ No accountability
- ❌ Vocabulary evolves faster than glossary
- ❌ Progressive desynchronization

---

### Reason 3: Impossible To Link Definitions And Real Work

**The Problem:**

In Notion, you can create a beautiful glossary.

But you cannot **directly link a definition to an issue or capability**.

**Example:**

You create an issue in Jira: "Implement staging release for v2.4."

You want the team to understand what a "staging release" is according to your definition.

**In Notion:** You can copy-paste the definition into the Jira description. (Redundancy, loss of synchronization if definition changes.)

**In Jira:** You can put a link to the Notion page. (But nobody clicks.)

**Result:** No direct link between vocabulary and work.

<img src="/assets/images/blog/2026-01-17-notion-glossaire-isole.svg" alt="Notion glossary isolated from work" width="800" height="450" loading="lazy">

**Quote CTO:**
> "We spent 3 days creating a perfect glossary. Now nobody uses it because it's not integrated with our work tools."

---

## The Sinra Approach: Living Glossary With @Page Mentions

Sinra solves the dead glossary problem with a simple mechanism: **@page mentions**.

### The Concept: Pages + @Mentions = Glossary Integrated With Work

In Sinra, you create your glossary in **pages** (equivalent to Notion pages, but integrated with the tool).

**Then, you can mention these pages directly in your issues and capabilities with @pages.**

**Result:** The glossary becomes **part of the work**, not external documentation.

---

### Anatomy Of A Living Sinra Glossary

Here's how it works in practice.

#### Step 1: Create Pages For Your Glossary

**In Sinra, you create pages organized by categories.**

**Example: Category "Release Vocabulary"**

**Page 1: Staging Release**
```markdown
# Staging Release

**Definition:**
Feature-complete version deployed to staging environment for QA tests and business validation before production.

**Criteria:**
- Code freeze (no new features)
- All automated tests pass
- Mandatory QA validation
- Duration in staging: 2-3 days minimum

**Difference with Production Release:**
Staging release can still receive hotfixes for bugs discovered in QA.
Production release only receives critical patches.

**Workflow:**
1. Merge all features into `release-staging` branch
2. Automatic deployment to staging environment
3. QA tests
4. If validated → promotion to Production Release
5. If bugs → hotfixes → return to step 3
```

**Page 2: Production Release**
```markdown
# Production Release

**Definition:**
Version validated in staging, deployed to production and accessible to end users.

**Criteria:**
- Complete QA validation in staging
- Product Manager approval
- Regression tests passed
- Monitoring and rollback plan ready

**Workflow:**
Validated Staging Release → Git tag `v2.4.0` → Production deployment
```

**Page 3: Hotfix**
```markdown
# Hotfix

**Definition:**
Urgent fix applied directly to a Production Release to correct a critical bug without waiting for the next cycle.

**Hotfix criteria:**
- Blocking bug (crash, data loss, security)
- Significant user impact
- No workaround

**Workflow:**
1. Create `hotfix/bug-description` branch from production tag
2. Fix + tests
3. Accelerated review
4. Direct production deployment
5. Merge into main branch for future integration
```

**Sinra Category:** "Release Vocabulary"

**Result:** You have a structured glossary, organized by categories, in Sinra.

<img src="/assets/images/blog/2026-01-17-sinra-pages-glossaire.svg" alt="Sinra pages organized by categories" width="800" height="450" loading="lazy">

---

#### Step 2: Mention Pages In Issues And Capabilities With @pages

**Here's the key difference between Notion and Sinra:**

**In Notion:** Your glossary is in a page. Your issues are in Jira. No direct link.

**In Sinra:** Your issues and capabilities can **directly mention glossary pages with @pages**.

**Example: Capability "v2.4 Deployment"**

```markdown
# Capability: v2.4 Deployment

**Objective:**
Deploy version 2.4 with new authentication and permissions features.

**Workflow:**
1. Create a @page:staging-release for QA tests
2. QA validation for 2-3 days
3. If validated, promote to @page:production-release
4. In case of critical post-deployment bug, apply a @page:hotfix

**Assigned issues:**
- [DEPLOY-120] Prepare staging release v2.4
- [DEPLOY-121] QA staging tests
- [DEPLOY-122] Production deployment v2.4
```

**Result:**

When a team member reads this capability, they see **@page:staging-release**.

**By clicking the mention, they access directly the "Staging Release" page with the complete definition.**

**No need to:**
- Open another tool
- Search in an external glossary
- Guess what "staging release" means

**The definition is one click away.**

<img src="/assets/images/blog/2026-01-17-sinra-mention-pages.svg" alt="@page mentions in a Sinra capability" width="800" height="450" loading="lazy">

---

#### Step 3: Use Glossary In Issues

**Same principle for issues.**

**Example: Issue "Prepare staging release v2.4"**

```markdown
# [DEPLOY-120] Prepare staging release v2.4

**Description:**
Create a @page:staging-release for version 2.4 according to defined workflow.

**Checklist:**
- [ ] Merge all validated features into `release-staging` branch
- [ ] Verify all automated tests pass
- [ ] Deploy to staging environment
- [ ] Notify QA for validation
- [ ] Document changes since last release

**Vocabulary reference:**
See @page:staging-release for complete workflow and validation criteria.
```

**Result:**

A developer who has never done a staging release can:
1. Read the issue
2. See @page:staging-release
3. Click to access the complete definition
4. Understand exactly what they need to do

**No confusion. No questions to ask. Everything is documented and accessible.**

---

#### Step 4: Glossary Evolves With Work

**Here's the magic of @page mentions:**

When you **update a page** in the glossary, **all @pages links automatically point to the updated version**.

**Example:**

**Month 1:** You define "staging release" with a 2-day workflow in staging.

**Month 6:** You change the workflow: now 3 days minimum in staging for more tests.

**You update the "Staging Release" page in Sinra.**

**Result:**

- All capabilities mentioning @page:staging-release point to the new definition
- All issues mentioning @page:staging-release point to the new definition
- No need to search and update 50 different places
- **Single source of truth**

**Difference with Notion:**

**In Notion:**
- You update the definition in the glossary
- But copy-pasted links in Jira/Linear remain obsolete
- You must manually update all places where you copied the definition

**In Sinra:**
- You update the page
- All @pages automatically point to the updated version
- Automatic synchronization

<img src="/assets/images/blog/2026-01-17-sinra-glossaire-sync.svg" alt="Sinra glossary automatically synchronized via @mentions" width="800" height="400" loading="lazy">

**Quote Lead Developer:**
> "Before, when we changed a definition in our Notion glossary, we had to update 10 different places in Jira. With Sinra, we update the page, and all @pages point to the new version. It's automatic."

---

### The Three Pillars Of Sinra's Living Glossary

#### 1. Pages: Documentation Structured By Categories

**The Concept:**

Sinra **pages** allow you to create your glossary, organized by **categories**.

**Category examples:**
- Release Management Vocabulary
- Technical Vocabulary (API, Architecture, etc.)
- QA Process
- Development Workflow
- Business Acronyms

**Advantages:**
- Structured glossary easy to navigate
- Customizable categories for your business
- Unified search (finds pages + issues + capabilities)

---

#### 2. @Mentions: Direct Link Between Glossary And Work

**The Concept:**

You can **mention a page** directly in an issue or capability with `@page:page-name`.

**Result:**
- Clickable link to definition
- No need to leave Sinra to consult glossary
- Glossary integrated in daily workflow

**Difference with Notion:**

| **Aspect** | **Notion** | **Sinra** |
|------------|-----------|-----------|
| **Glossary** | ✅ Yes (pages) | ✅ Yes (pages) |
| **Link to glossary from issue** | ⚠️ Copy Notion URL into Jira (friction) | ✅ @page:term (integrated) |
| **Auto synchronization** | ❌ No (copy-paste) | ✅ Yes (dynamic link) |
| **Workflow** | Siloed (Notion ≠ Jira) | Unified (everything in Sinra) |

---

#### 3. Single Source Of Truth: One Page, One Definition

**The Concept:**

Each term has **one single page** in the Sinra glossary.

**Result:**
- No contradictory versions
- Everyone points to same definition
- Centralized updates

**Example:**

**Term:** "Hotfix"

**Sinra Page:** `/pages/release-vocabulary/hotfix`

**Mentioned in:**
- Capability "Production Deployment v2.4": @page:hotfix
- Issue "Fix critical auth bug": @page:hotfix
- Page "Ops Workflow": @page:hotfix

**All links point to the same page.**

**If you update the "hotfix" definition, all @pages instantly reflect the change.**

---

## Real Example: DevStream (CI/CD SaaS)

**DevStream (team of 25 people, CI/CD platform for startups)**

*Note: DevStream is a real company that we've anonymized under a fictitious name to protect their confidentiality.*

### Before Sinra: Dead Notion Glossary

**Configuration:**
- Technical glossary in Notion (120 defined terms)
- Issues in Linear
- Discussions in Discord
- Documentation in Confluence

**Problems Encountered:**

**Problem 1: Obsolete glossary**

60% of definitions were no longer current after 6 months.

Example: Glossary defined "pipeline" as "sequence of jobs executed sequentially."

Reality: They had moved to parallel pipelines 4 months earlier.

**Problem 2: Scattered vocabulary**

Each tool imposed its jargon:
- Notion: Capability, Feature, Task
- Linear: Epic, Issue, Subtask
- Confluence: Requirement, Spec, Deliverable

**Result:** Nobody spoke the same language.

**Problem 3: Glossary never used**

Internal statistics:
- 12% of team consulted glossary at least once per month
- 88% never opened it

**Reason:** Too much friction (Notion ≠ Linear).

**Quote Product Manager:**
> "We spent a week creating a perfect glossary. Now it serves as a museum showing the vocabulary we used 8 months ago."

---

### After Sinra: Living Glossary With @Pages

**Workflow:**

1. **Migration of Notion glossary to Sinra pages** (2 days)
   - Category "Technical Vocabulary"
   - Category "Release Process"
   - Category "CI/CD Workflow"

2. **Use of @pages in issues and capabilities**

**Example: Capability "Multi-Stage Pipeline"**

```markdown
# Capability: Multi-Stage Pipeline

**Objective:**
Allow users to define @page:pipeline with multiple stages (build, test, deploy) executed in parallel.

**Architecture:**
- Each @page:stage can have multiple @page:jobs
- Stages execute sequentially
- Jobs in same stage execute in parallel

**Issues:**
- [PIPE-301] Implement parallel job execution
- [PIPE-302] Add dependency management between stages
- [PIPE-303] UI to visualize multi-stage pipeline
```

**Result:**

Developer implementing PIPE-301:
1. Reads capability
2. Sees @page:pipeline, @page:stage, @page:jobs
3. Clicks to access exact definitions
4. Understands architecture without asking questions

**Time to understand:** 10 minutes (instead of 1 hour of questions to team).

---

**Results (After 4 Months):**

**Metric 1: Glossary usage**
- **Before:** 12% of team consulted glossary
- **After:** 89% of team uses @pages regularly
- **Reason:** Integrated in workflow (no need to leave Sinra)

**Metric 2: Unified vocabulary**
- **Before:** 3 different terms for same thing (capability = epic = requirement)
- **After:** 1 single vocabulary (defined in Sinra pages)

**Metric 3: Obsolete definitions**
- **Before:** 60% obsolete definitions after 6 months
- **After:** Only 5% (easy update because integrated with work)

**Metric 4: Onboarding**
- **Before:** 2 weeks for new dev to understand vocabulary
- **After:** 3 days (targeted reading on key pages via @mentions in capabilities)

**Quote DevStream Lead Developer:**
> "Before, our Notion glossary was dead. Now, with Sinra @pages, the glossary is alive. When we create an issue, we mention technical terms with @page. Everyone has the same definition."

**Quote New Developer:**
> "When I joined DevStream, I read 5 main capabilities. Each technical term had a @page. I clicked, read definitions, understood everything in 2 days. At my old company, it would have taken 2 weeks."

<img src="/assets/images/blog/2026-01-17-devstream-before-after.svg" alt="DevStream: Before vs After Sinra" width="800" height="450" loading="lazy">

---

## Notion vs Sinra: Glossary Comparison

| **Aspect** | **Notion Glossary** | **Sinra Glossary (Pages + @Mentions)** |
|------------|---------------------|----------------------------------------|
| **Create glossary** | ✅ Yes (pages) | ✅ Yes (pages by categories) |
| **Link from issue** | ⚠️ External URL (friction) | ✅ @page:term (integrated) |
| **Auto synchronization** | ❌ No (static copy-paste) | ✅ Yes (dynamic link) |
| **Workflow integration** | ❌ Separated (Notion ≠ Jira/Linear) | ✅ Unified (everything in Sinra) |
| **Unified search** | ❌ Siloed | ✅ Finds pages + issues + capabilities |
| **Update definition** | ⚠️ Manual everywhere it's copied | ✅ Automatic (all @pages updated) |
| **Real usage** | ⚠️ 10-20% team | ✅ 80-90% team |
| **Unified vocabulary** | ❌ Each tool imposes its jargon | ✅ Vocabulary defined in Sinra pages |

---

## The Five Signs Your Glossary Is Dead

### Sign 1: Nobody Consults It During Work

If your team works without ever opening the glossary, it's dead.

---

### Sign 2: Everyone Uses Their Own Terms

If PM says "capability," dev says "epic," and QA says "feature," your glossary has no impact.

---

### Sign 3: Definitions Are Obsolete

If your glossary describes a workflow you no longer follow, it's obsolete.

---

### Sign 4: New Members Ask 100 Questions About Vocabulary

If onboarding consists of orally explaining business terms because the glossary isn't reliable, it's dead.

---

### Sign 5: Glossary Is In A Different Tool Than Work

If your glossary is in Notion/Confluence and your work in Jira/Linear/GitHub, it's disconnected.

---

## How To Use Sinra To Create A Living Glossary

### Step 1: Create Pages By Categories

**Action:**
- Create categories (Technical Vocabulary, Release Process, QA Workflow, etc.)
- Create one page per important term
- Define clearly: definition, criteria, workflow, examples

**Result:** Structured glossary in Sinra.

---

### Step 2: Use @Pages In Issues And Capabilities

**Action:**
- When you create an issue or capability, mention technical terms with @page:term
- Clickable link to complete definition

**Result:** Glossary integrated in daily work.

---

### Step 3: Update Pages When Vocabulary Evolves

**Action:**
- Vocabulary changes? Update the concerned page
- All @pages automatically point to updated version

**Result:** Single source of truth, always up to date.

---

### Step 4: Use Unified Search To Find Definitions

**Action:**
- Search for a term in Sinra
- Results: glossary page + issues using it + related capabilities

**Result:** Complete context in one place.

---

## Action Points: Transform Your Dead Glossary Into Living Glossary

1. **Audit your current glossary.** How many definitions are obsolete? How many people consult it?
2. **Migrate the 10 most important terms to Sinra pages.** Category "Business Vocabulary."
3. **Use @pages in your next capabilities.** Mention technical terms with @page.
4. **Measure usage.** How many people click on @pages?
5. **Expand progressively.** Add other terms as you go.

---

## The Key Point

**Glossaries die because they're separated from work.**

Between **obsolete definitions**, **scattered vocabulary**, **isolated documentation**, and **friction to consult**, nobody speaks the same language.

**Sinra transforms your glossary into living documentation with @page mentions.**

**The result:**
- ✅ Glossary integrated in workflow (not in separate tool)
- ✅ @pages create direct links between definitions and work
- ✅ Single source of truth (one page, one definition)
- ✅ Automatic synchronization (update = all @pages updated)
- ✅ Unified vocabulary (whole team speaks same language)

**Your glossary finally becomes useful.**

**Your team finally speaks the same language.**

---

## Discover also the "Invisible Problems" series

- **[Dead Documentation](/documentation/2025/12/24/documentation-morte-notion-confluence.html)** - 127 obsolete Confluence pages: how to make documentation alive
- **[Invisible QA](/qa/2025/12/22/qa-invisible-tests-disperses.html)** - 847 tests in Excel: how to make QA visible with Sinra Testings
- **[Backlog Chaos](/planning/2025/12/26/chaos-backlog-personne-sait-q2.html)** - 537 chaotic issues: how to organize work by releases and cycles
- **[Hidden Dependencies](/dependencies/2025/12/28/dependances-cachees-features-bloquees.html)** - 47% features blocked: how to make dependencies visible
- **[Multi-Project Syndrome](/capacity/2025/12/30/syndrome-multi-projet-rien-navance.html)** - Developers on 4 simultaneous projects: how to limit active projects

---

**Ready to create a living glossary?** [Start a free Sinra trial →](https://app.sinra.dev/users/sign_up)

Discover project management where your business vocabulary is integrated with work, not isolated in a dead wiki.
