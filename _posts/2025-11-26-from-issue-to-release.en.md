---
layout: post
title: "From Issue to Release: How Sinra Structures Your Work"
subtitle: "A practical guide through the journey of a feature from conception to delivery"
description: "Follow a feature through Sinra's hierarchy—from individual issues to capabilities to releases—and discover how concrete structure creates clarity instead of complexity."
lang: en
category: Product Guide
excerpt: "Understanding how work flows through Sinra: issues are the building blocks, capabilities group related work, and releases define what ships. No jargon, just clear structure."
permalink: /product-guide/:year/:month/:day/from-issue-to-release.html
---

## The Problem: Lost in Translation

Most project management tools force you to think in abstractions:

- “User stories” that aren't actually stories
- “Epics” that don't feel epic
- “Backlogs” that become graveyards
- “Increments” that nobody understands

**The result?** Teams spend more time translating concepts than doing work.

Sinra takes a different approach: **concrete hierarchy that mirrors how work actually happens**.

Let's follow a real feature from start to finish.

---

## The Feature: Two-Factor Authentication

Your team decides to add two-factor authentication (2FA) to your SaaS product.

In traditional tools, you might create:

- A “user story” for 2FA
- Multiple “sub-tasks”
- An “epic” to group them
- Tags to track testing
- Custom fields for release targeting

**In Sinra, the structure is simpler and more direct.**

---

## Level 1: Issues (The Building Blocks)

**Issues are individual work items.** Bugs, tasks, features—anything a person does is an issue.

For 2FA, you create these issues:

**Backend Issues:**

1. “Implement TOTP token generation”
2. “Create 2FA enrollment API endpoint”
3. “Add 2FA verification to login flow”
4. “Generate backup codes on enrollment”

**Frontend Issues:** 5. “Build 2FA setup page UI” 6. “Add QR code scanner component” 7. “Create backup codes download interface” 8. “Update login form with 2FA input”

**Testing Issues:** 9. “Write unit tests for TOTP validation” 10. “Test 2FA enrollment flow” 11. “Test 2FA login verification” 12. “Test backup code recovery”

Each issue has:

- A clear title (what needs to be done)
- A description (context and requirements)
- An assignee (who's doing it)
- A status (writing → development → review → testing → done)
- Labels (backend, frontend, security, etc.)

**Issues are the atomic unit of work.** Everything starts here.

![Issue Structure](/assets/images/issue-structure.svg “How Issues Work in Sinra”)

---

## Level 2: Capabilities (Grouping Related Work)

**Capabilities are features or initiatives tracked in your releases.** They organize work at a higher level than issues.

For 2FA, you create a capability called:
**“Two-Factor Authentication”**

This capability includes:

- All 12 issues listed above
- Acceptance criteria for the feature
- Dependencies (e.g., requires SMS provider integration)
- Target release (e.g., Release 2.1)

**Why “capability” instead of “epic”?**

Because it's concrete. A capability describes what your product can do. “2FA capability” means your product can do two-factor authentication. No metaphor required.

**Capabilities let you see:**

- Progress across all related issues
- Who's working on what parts
- Testing coverage
- Blockers and dependencies
- Release readiness

![Capability Hierarchy](/assets/images/capability-hierarchy.svg “Issues Grouped into Capabilities”)

---

## Level 3: Releases (Defining What Ships)

**Releases are versions of your product.** They're concrete, numbered, and shipped.

You assign the 2FA capability to **Release 2.1**.

Release 2.1 might include:

- **Two-Factor Authentication** (new capability)
- **Password reset improvements** (existing capability)
- **Bug fixes for login page** (individual issues)

**Releases answer the critical question: “What are we shipping, and when?“**

In Release 2.1 view, you see:

- All capabilities assigned to this release
- Progress on each capability
- Individual issues not grouped in capabilities
- Testing status
- Deployment readiness

![Release View](/assets/images/release-view.svg “Capabilities Grouped into Releases”)

---

## The Complete Hierarchy in Action

Let's trace the 2FA feature through the system:

### Week 1-2: Planning

**Action:** Product team defines the 2FA capability

- Write requirements in the capability description
- Create 12 issues (backend, frontend, testing)
- Assign issues to developers and QA engineers
- Set target release: 2.1
- Add to current cycle

**Visibility:** Everyone sees:

- What issues exist
- Who's assigned to what
- What the acceptance criteria are
- When it's expected to ship

### Week 3-4: Development

**Action:** Team starts building

- Backend developer marks “Implement TOTP” as in_progress
- Frontend developer marks “Build 2FA setup page” as in_progress
- Issues move from writing → development → review
- Commentary captures design decisions and blockers
- QA engineer prepares test cases

**Visibility:** Real-time progress shows:

- Which issues are in development vs. done
- Overall capability completion percentage
- Blockers (e.g., “Waiting on SMS provider API keys”)
- Capacity vs. workload

### Week 5: Testing

**Action:** QA starts verification

- Test issues move to in_progress
- Bugs found become new issues linked to the capability
- Regression tests run on staging
- Documentation updated

**Visibility:** Testing dashboard shows:

- Test coverage for 2FA capability
- Pass/fail status
- Remaining test cases
- Bug fix progress

### Week 6: Release

**Action:** Deploy Release 2.1

- All 2FA issues marked complete
- Capability marked ready for release
- Release 2.1 deployed to production
- Monitoring confirms successful rollout

**Visibility:** Release view confirms:

- All planned capabilities shipped
- All tests passed
- Documentation complete
- Deployment successful

![Complete Workflow](/assets/images/issue-to-release-workflow.svg “Full Journey from Issue to Release”)

---

## Why This Hierarchy Works

### 1. Mirrors Reality

Work doesn't happen in “user stories” or “epics.” It happens in tasks (issues), grouped into features (capabilities), shipped in versions (releases).

### 2. No Translation Required

A developer doesn't need to decode what an “epic” means. They see a capability called “Two-Factor Authentication” and immediately understand what's being built.

### 3. Multi-Level Visibility

- **Individual contributors** see their assigned issues
- **Team leads** see capability progress
- **Product managers** see release readiness
- **Executives** see delivery timeline

Everyone gets the view they need without custom dashboards.

### 4. Flexible Granularity

Not everything needs to be a capability. Small features can be standalone issues assigned directly to releases. Large initiatives can have 50+ issues grouped in a capability. The structure adapts to your work.

### 5. Testing is First-Class

Test issues live alongside development issues. QA engineers see what needs testing in real-time, not after development is “done.”

---

## Comparison: Sinra vs. Traditional Tools

| **Concept**    | **Traditional Tools**                         | **Sinra**                                     |
| -------------- | --------------------------------------------- | --------------------------------------------- |
| **Work item**  | User story, task, bug (different types)       | Issue (unified)                               |
| **Grouping**   | Epic, theme, initiative (vague)               | Capability (concrete feature)                 |
| **Version**    | Increment, sprint goal, milestone (ambiguous) | Release (numbered version)                    |
| **Testing**    | Separate test cases or custom fields          | Test issues (same as dev issues)              |
| **Visibility** | Custom dashboards, velocity charts            | Real-time progress on capabilities & releases |

---

## Real-World Example: E-Commerce Team

**PayFast (8-person team building payment platform)**

### Before Sinra (Using Jira)

**Problem:** Tracking a feature meant:

- Creating an epic
- Writing 20 user stories
- Linking sub-tasks
- Tagging for release
- Building custom dashboard to see progress

Result: **3+ hours per week maintaining structure**

### After Sinra

**Solution:** Tracking the same feature:

- Create 1 capability: “Subscription Billing”
- Create 18 issues (dev, design, QA)
- Assign to Release 3.2
- View progress in real-time

Result: **15 minutes to set up, zero maintenance**

**Team feedback:**

> “We stopped spending time managing Jira and started shipping features. The hierarchy just makes sense.”
> — Lead Developer, PayFast

---

## How to Structure Your First Feature in Sinra

### Step 1: Define the Capability

Ask: “What feature or initiative are we building?”

- Example: “API Rate Limiting”
- Write a brief description and acceptance criteria
- Assign to a target release

### Step 2: Break Down into Issues

Ask: “What individual tasks are needed?”

- Backend issues (implement rate limit middleware, add Redis caching)
- Frontend issues (show rate limit status in dashboard)
- Testing issues (test rate limit enforcement, test reset logic)

### Step 3: Assign Owners and Labels

- Assign issues to team members
- Add labels (backend, frontend, security, etc.)
- Set dependencies if needed

### Step 4: Track Progress

- Issues move through statuses as work progresses
- Capability completion updates automatically
- Release readiness becomes visible in real-time

### Step 5: Ship the Release

- When all capability issues are done, mark capability complete
- Deploy the release
- Review what shipped and plan the next one

---

## Common Questions

**Q: Do I always need capabilities?**
No. Small bug fixes or standalone tasks can be issues directly assigned to a release. Capabilities are for grouping related work.

**Q: Can an issue belong to multiple capabilities?**
No. Each issue belongs to one capability (or none). If work spans multiple features, consider if it's actually one capability with broader scope.

**Q: How do I handle dependencies between issues?**
Sinra tracks dependencies between issues and capabilities. Mark dependencies, and the system highlights blockers in your workflow.

**Q: What if priorities change mid-release?**
Move issues between capabilities or releases as needed. Sinra doesn't force rigid sprint commitments—adapt when reality changes.

**Q: How do I see what my team is working on right now?**
Filter by current cycle + team + in_progress status. You'll see exactly what's active.

---

## The Sinra Advantage: Clarity by Design

Most tools inherit Agile jargon and force teams to adapt their thinking.

Sinra does the opposite: **the structure mirrors how work actually happens.**

- **Issues** = individual work items
- **Capabilities** = grouped features
- **Releases** = product versions

No metaphors. No translation. No cognitive overhead.

When your tool speaks the same language as your team, work flows faster.

---

## Action Items: Structuring Your Work in Sinra

1. **Identify your next feature.** What are you building?
2. **Create a capability.** Name it concretely (not “Epic: User Mgmt” but “User Role Permissions”)
3. **Break it into issues.** Development, design, testing—everything a person does
4. **Assign to a release.** What version will this ship in?
5. **Start building.** Track progress in real-time, adjust as needed

---

## The Bottom Line

**Traditional tools make you think in abstractions. Sinra makes you think in concrete terms.**

Issues → Capabilities → Releases.

That's it. That's the hierarchy.

Simple, clear, and aligned with how teams actually build software.

---

**Ready to structure your work clearly?** [Start a free trial of Sinra →](https://app.sinra.dev/users/sign_up)

Experience project management built on concrete structure, not confusing jargon.
