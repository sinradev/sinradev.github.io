---
layout: post
title: "Invisible QA: When Tests Are Scattered Between Jira, Excel And QA's Memory"
subtitle: "Between obsolete Excel test cases, disconnected Jira bugs, and lost results, nobody knows if the release is ready: Sinra centralizes everything"
description: "Teams test without visibility: test cases in Excel, bugs in Jira, QA results in memory. Impossible to know what's been tested, what remains, and if the release can ship. Discover how Sinra unifies QA and development."
date: 2025-12-22 09:00:00 +0100
lang: en
category: Quality Assurance
excerpt: "You're 3 days from release. The CTO asks: 'Can we ship?' You ask QA. She opens Excel, counts manually, checks her notes, and answers: 'I think so... unless I forgot something.' Welcome to invisible QA."
permalink: /quality-assurance/:year/:month/:day/qa-invisible-tests-dispersed.html
featured_image: /assets/images/blog/2025-12-22-qa-invisible-featured.png
---

## The Friday Before Release

**Friday 3:00 PM. Release scheduled for Monday morning.**

The CTO enters the QA office:

> "Marie, are we good to ship Monday? All tests passed?"

Marie (QA Lead) opens her laptop:

**Step 1:** Open Excel
- File: `Test_Cases_Release_v2.3_FINAL_v4.xlsx`
- 87 test cases listed
- Columns: ID, Description, Priority, Status (Passed/Failed/Not Run)

**Step 2:** Count manually
- 62 tests marked "Passed"
- 18 tests marked "Not Run"
- 7 tests marked "Failed"

**Step 3:** Check Jira
- 14 open bugs
- 8 bugs "In Progress"
- 3 bugs "Resolved" (but not closed)

**Step 4:** Consult her notes
- Post-it: "Test SSO feature with Microsoft OAuth"
- Email: "Don't forget to retest bug AUTH-247"
- Slack message: "@marie is the pagination bug fixed?"

**30 minutes later.**

Marie answers:

> "Uh... I think we're good. There are 18 non-critical tests I didn't have time to do. The 7 failed ones are known bugs being fixed. Should be fine."

CTO: "Should be?"

Marie: "Yes... well, unless I forgot something."

**The CTO has a choice:**
- ✅ Ship Monday (with 18 untested cases and 7 active bugs)
- ❌ Delay the release (and disappoint customers)

**The CTO chooses:** Ship. "We'll see."

**Monday 10:00 AM:** Critical bug in production. Microsoft OAuth SSO feature doesn't work.

**Cause:** Marie had forgotten to test it (it was on a lost post-it).

---

## The Problem Of Invisible QA

Most tech teams manage their tests this way: **QA scattered across disconnected tools, without global visibility**.

### The Five Symptoms Of Invisible QA

#### 1. Test Cases In Excel (Disconnected From Development)

**The Scenario:**
Your QA maintains an Excel file with all test cases:
- `Test_Cases_v1.xlsx`
- `Test_Cases_v2_FINAL.xlsx`
- `Test_Cases_v2.3_FINAL_v4.xlsx` (the real file... or not?)

**The Problem:**
- ❌ Excel is **not linked to features** being developed
- ❌ Impossible to know which tests cover which feature
- ❌ No sync with code (feature added = test forgotten)
- ❌ Multiple Excel versions (nobody knows which is current)

**Real Result:**
A team discovers 3 weeks after a release that a critical feature had **no test case** defined - it was in an old lost Excel version.

<img src="/assets/images/blog/2025-12-22-qa-invisible-fragmented-tools.svg" alt="QA Scattered Across Tools" width="800" height="400" loading="lazy">

---

#### 2. Bugs In Jira (But No Link With Tests)

**The Scenario:**
Bugs are tracked in Jira:
- `[BUG-423] Pagination broken on user list`
- `[BUG-424] SSO Microsoft OAuth fails with 500 error`
- `[BUG-425] Export PDF crashes on large datasets`

**The Problem:**
- ❌ No link between the bug and the test case that detected it
- ❌ Impossible to know if the bug was retested after fix
- ❌ No global view "how many bugs block the release?"
- ❌ QA must manually cross-reference Excel (tests) and Jira (bugs)

**Real Scenario:**

**Marie (QA):** "Is bug AUTH-247 fixed?"

**Dev:** "Yes, closed yesterday."

**Marie:** "Ok."

**2 weeks later:** Bug AUTH-247 reappears in prod.

**Why?** Marie never retested. She thought "closed" = "QA validated". The dev thought closing the bug = automatic QA.

---

#### 3. Lost Test Results (No History)

**The Scenario:**
Marie manually tests a feature. She finds a bug, reports it in Jira, then... forgets she had already tested that feature.

**3 weeks later:**

Dev: "Marie, did you retest feature X after my fix?"

Marie: "Uh... I think so? Wait, let me check."

**Marie searches:**
- Excel: no trace of date/result
- Jira: bug closed but no QA comment
- Notes: nothing
- Memory: "I think I tested it but I'm not sure."

**Marie retests.** (Time wasted: 30 minutes for something she had already done)

**The Problem:**
- ❌ No history of test executions
- ❌ Impossible to know "who tested what when"
- ❌ Duplicate tests (same test executed twice by mistake)
- ❌ Forgotten tests ("I thought someone had already tested it")

---

#### 4. Invisible QA Coverage

**The Scenario:**
You're shipping a release with 12 features.

**CTO's question:** "What's our test coverage for this release?"

**Response process:**
1. List the 12 features
2. Open Excel, count how many test cases per feature
3. Count how many tests "Passed" vs "Not Run"
4. Mentally reconstruct coverage

**Time needed:** 1-2 hours.

**Reliability:** 60% (you probably forgot something).

**Final answer:** "I'd say we're at 70-80% coverage."

**The Problem:**
- ❌ No automatic coverage view
- ❌ Impossible to know "Is Feature X well tested?"
- ❌ Shipping decisions based on intuition, not data
- ❌ No reliable QA metrics

---

#### 5. QA Bottleneck At End Of Sprint

**The Scenario:**
**Monday-Wednesday:** Devs code.

**Thursday-Friday:** "Marie, here are 8 features to test for Monday's release."

**Marie:** "8 features in 2 days?!"

**Result:**
- Marie tests in rush mode
- 50% of tests are superficial (not thorough)
- 30% of tests are not executed (no time)
- Bugs found Friday evening → no time to fix before Monday

**The Problem:**
- ❌ QA is treated as a "final phase" instead of continuous process
- ❌ No real-time visibility on what's ready to test
- ❌ Marie doesn't know when features will be ready for her
- ❌ Testing becomes a bottleneck

<img src="/assets/images/blog/2025-12-22-qa-invisible-bottleneck.svg" alt="QA Bottleneck At End Of Sprint" width="800" height="400" loading="lazy">

---

## Why QA Becomes Invisible

### Reason 1: Dev And QA Tools Are Separated

**Devs Use:**
- Jira/Linear to track issues
- GitHub for code
- CI/CD for automated tests

**QA Uses:**
- Excel for test cases
- Jira to report bugs
- Personal notes for tracking

**Result:** Two parallel worlds that never communicate.

Devs don't know what QA tests. QA doesn't know what devs have developed.

<img src="/assets/images/blog/2025-12-22-qa-invisible-dev-qa-separated.svg" alt="Dev And QA Separated" width="800" height="400" loading="lazy">

---

### Reason 2: Test Cases Are Not Linked To Features

**The Problem:**
In Excel, you have:
- `TC-001: Test user login with valid credentials`
- `TC-002: Test user login with invalid credentials`
- `TC-003: Test SSO Google OAuth`

But **no information on**:
- Which feature these tests cover
- Which release requires these tests
- Which developer implemented the tested feature
- If the feature changed since test creation

**Result:** Test cases float in a void, disconnected from actual work.

---

### Reason 3: No Real-Time Visibility

**The Problem:**
The CTO asks: "Where are we on release testing?"

**Today, QA must:**
1. Open Excel
2. Count manually
3. Check Jira for bugs
4. Consult notes
5. Mentally reconstruct global state

**There's no real-time view** showing:
- How many tests executed vs remaining
- Which features are QA validated
- How many bugs block the release
- If the release can ship

**Result:** QA is invisible until someone explicitly asks.

---

## The Sinra Approach: QA Unified With Development

Sinra was designed to make QA **visible, linked to development, and real-time**.

### The Concept: Testings Linked To Capabilities And Releases

In Sinra, **testings** (test cases) are directly linked to **capabilities** (features) and **releases**.

**Workflow:**
1. A capability is created (e.g., "SSO Authentication")
2. Development issues are added under the capability
3. **Testings** (test cases) are created and linked to the capability
4. QA executes testings and records results
5. QA progression is **automatically synchronized** with the release

**Result:** Dev and QA work in the same system, with shared visibility.

<img src="/assets/images/blog/2025-12-22-qa-invisible-unified-workflow.svg" alt="Testings Linked To Capabilities" width="800" height="450" loading="lazy">

---

### Anatomy Of A Feature With Sinra Testings

#### Step 1: Create The Capability "SSO Authentication"

**Description:**
- Allow users to log in via Google and Microsoft OAuth

**Issues:**
- `[AUTH-120] Implement Google OAuth backend`
- `[AUTH-121] Implement Microsoft OAuth backend`
- `[AUTH-122] Create SSO provider selection UI`
- `[AUTH-123] Add token and refresh management`

---

#### Step 2: Create Testings For This Capability

**QA Testings:**

| ID | Test Case | Priority | Linked to |
|----|-----------|----------|-----------|
| TC-AUTH-01 | Login Google OAuth with valid account | High | AUTH-120 |
| TC-AUTH-02 | Login Google OAuth with invalid account | High | AUTH-120 |
| TC-AUTH-03 | Login Microsoft OAuth with valid account | High | AUTH-121 |
| TC-AUTH-04 | Login Microsoft OAuth with invalid account | High | AUTH-121 |
| TC-AUTH-05 | SSO provider selection in UI | Medium | AUTH-122 |
| TC-AUTH-06 | Refresh token management after expiration | High | AUTH-123 |

**Benefits:**
- ✅ Each test is **linked to the development issue**
- ✅ When issue AUTH-120 is completed, Sinra **alerts QA** that TC-AUTH-01 and TC-AUTH-02 are ready to test
- ✅ No forgotten test (impossible to mark capability "Done" if tests not executed)

---

#### Step 3: Execute Tests And Record Results

**Marie (QA) executes tests:**

**TC-AUTH-01: Login Google OAuth with valid account**
- **Result:** ✅ Passed
- **Date:** 2025-12-22 10:34
- **Tested by:** Marie
- **Notes:** Works correctly, redirection OK, token stored

**TC-AUTH-03: Login Microsoft OAuth with valid account**
- **Result:** ❌ Failed
- **Date:** 2025-12-22 11:02
- **Tested by:** Marie
- **Bug created:** `[BUG-456] Microsoft OAuth returns 500 error`
- **Notes:** Server error during Microsoft token validation

**Benefits:**
- ✅ Complete history preserved (who, when, result, notes)
- ✅ Bug **automatically linked** to test case and development issue
- ✅ Dev receives notification: "Bug detected on AUTH-121 by TC-AUTH-03"

---

#### Step 4: Dev Fixes Bug, QA Retests

**Dev fixes BUG-456:**
- Commit: `Fix Microsoft OAuth token validation`
- Marks bug "Resolved"
- Sinra **automatically notifies Marie**: "BUG-456 resolved, retest TC-AUTH-03"

**Marie retests:**
- **TC-AUTH-03: Login Microsoft OAuth with valid account**
- **Result:** ✅ Passed (retest)
- **Date:** 2025-12-22 15:18
- **Notes:** Fix validated, works correctly now

**Benefits:**
- ✅ No forgotten test (automatic notification)
- ✅ Complete history (failed → bug → fix → passed)
- ✅ Real-time Dev ↔ QA synchronization

<img src="/assets/images/blog/2025-12-22-qa-invisible-test-history.svg" alt="Complete Test History" width="800" height="400" loading="lazy">

---

### Global View: QA Progression Per Release

**Release: SaaS Platform v2.5 (Delivery: 2025-12-30)**

| Capability | Total Tests | Passed | Failed | Not Run | QA Status |
|------------|-------------|--------|--------|---------|-----------|
| SSO Authentication | 6 | 6 | 0 | 0 | ✅ Validated |
| Analytics Dashboard | 8 | 5 | 1 | 2 | ⚠️ In Progress |
| API Webhooks | 10 | 0 | 0 | 10 | 🚨 Not Started |
| PDF Export | 5 | 4 | 0 | 1 | ⚠️ In Progress |

**Global QA Progression:** 15/29 tests passed = **52% completed**

**Automatic Alerts:**
- 🚨 **API Webhooks: 0 tests executed** (delivery in 8 days)
- ⚠️ **Analytics Dashboard: 1 active bug** (blocks QA validation)

**Benefits:**
- ✅ Real-time view of QA state per release
- ✅ Immediate risk identification
- ✅ Instant answer to "Can we ship?"

**Answer to CTO:**
> "No, we can't ship Monday. API Webhooks has no tests executed, and Analytics still has 1 active bug. I recommend delaying 5 days or removing API Webhooks from the release."

**Response time:** 30 seconds instead of 2 hours.

<img src="/assets/images/blog/2025-12-22-qa-invisible-release-dashboard.svg" alt="QA Progression Dashboard" width="800" height="500" loading="lazy">

---

## The Five Advantages Of Sinra Unified QA

### 1. Tests Linked To Features (Not Disconnected Excel)

**Before (Excel):**
- Test cases float in a void
- No link with developed code
- Features added = tests forgotten

**After (Sinra):**
- Each testing linked to a capability
- Impossible to mark "Done" without validated tests
- New features = create testings automatically suggested

---

### 2. Complete Execution History

**Before (Notes/Memory):**
- "I think I tested that last week..."
- No trace of who tested what when
- Duplicate tests

**After (Sinra):**
- Complete history: date, tester, result, notes
- "TC-AUTH-03 tested by Marie on 12/22 at 11:02: Failed, bug BUG-456 created"
- Search: "Who tested Microsoft OAuth?" → Instant answer

---

### 3. Automatic Dev ↔ QA Synchronization

**Before (Separate Tools):**
- Dev completes issue → QA doesn't know it's ready
- Bug fixed → QA must guess to retest
- Constant desynchronization

**After (Sinra):**
- Issue completed → QA automatically notified
- Bug resolved → Test case to re-execute suggested
- Dev and QA work in the same system

---

### 4. Real-Time QA Coverage Visibility

**Before (Manual Calculation):**
- "What's our coverage?" → 2h calculation
- 60% reliability
- Decisions based on intuition

**After (Sinra):**
- Automatic view: 15/29 tests passed (52%)
- Per capability: SSO 100%, Webhooks 0%
- Decisions based on real data

---

### 5. QA Bottleneck Eliminated (Continuous Testing)

**Before (QA At End Of Sprint):**
- Dev codes Monday-Wednesday
- QA tests Thursday-Friday in rush
- Bugs found too late

**After (Sinra):**
- QA sees in real-time when issues are ready
- Continuous testing (as soon as issue completed)
- Bugs detected early (time to fix before release)

---

## Real Example: HealthTech Solutions

**HealthTech Solutions (team of 10, SaaS health platform)**

*Note: HealthTech Solutions is a real company we've anonymized under a fictitious name to protect their confidentiality.*

### Before Sinra: Invisible QA

**Tool stack:**
- Excel: Test cases (`Test_Cases_v12_FINAL.xlsx`)
- Jira: Bugs and development issues
- Personal notes: Test results
- Slack: Dev ↔ QA communication

**Problems Encountered:**
- **Invisible coverage:** Impossible to know how many tests were missing
- **Forgotten tests:** 2 features shipped without any tests (discovered after prod incidents)
- **Desynchronization:** QA often tested obsolete versions (dev had already changed code)
- **QA bottleneck:** Marie (sole QA) overwhelmed at end of sprint
- **Lost history:** "Did I already test that?" (no trace)

**Revealing Incident:**
Release "Patient Portal v3.2" shipped with feature "Export medical record PDF".

**1 week after release:** 12 customers report PDF export fails on records >50 pages.

**Analysis:** No test case existed for "PDF Export with large records". Marie had only tested with small records (5 pages).

**Cost:**
- 3 weeks urgent fixes
- 12 unhappy customers
- Impacted reputation

---

### After Sinra: Unified QA

**Workflow:**
1. Each capability has testings defined from conception
2. QA creates test cases directly in Sinra (linked to capability)
3. When dev completes issue, Marie is automatically notified
4. Marie executes tests, records results, creates bugs if needed
5. Real-time view of QA progression per release

**Results (After 4 Months):**
- **Visible coverage:** Automatic view "Release 78% tested"
- **Forgotten tests:** 0 (impossible to ship without validating testings)
- **Synchronization:** Dev and QA aligned in real-time
- **QA bottleneck:** Eliminated (continuous testing throughout sprint)
- **Complete history:** "TC-PDF-05 tested 3 times: 12/12 failed, 15/12 failed, 18/12 passed"

**Quote from Marie (QA Lead):**
> "Before, I spent 30% of my time searching for what I had already tested and asking devs what was ready. Now, Sinra tells me exactly what to test and I can trace all my work. I test 2x more with zero stress."

**Quote from CTO:**
> "No more Friday nights wondering if we can ship Monday. I open Sinra, I see QA progression in real-time, and I make fact-based decisions. Game changer."

<img src="/assets/images/blog/2025-12-22-qa-invisible-before-after.svg" alt="HealthTech Before/After Sinra" width="800" height="450" loading="lazy">

---

## Excel + Jira vs. Sinra: QA Comparison

| **Aspect** | **Excel + Jira** | **Sinra Testings** |
|------------|------------------|-------------------|
| **Test cases** | Disconnected Excel | Linked to capabilities |
| **Link with features** | ❌ None | ✅ Automatic |
| **Execution history** | ❌ None (manual notes) | ✅ Complete with dates/testers |
| **Dev ↔ QA synchronization** | ❌ Manual | ✅ Automatic |
| **Visible QA coverage** | ❌ Manual calculation (2h) | ✅ Real-time (<10s) |
| **Missing test alerts** | ❌ None | ✅ Automatic |
| **Continuous testing** | ❌ Bottleneck at sprint end | ✅ Throughout sprint |
| **Bugs linked to tests** | ❌ Disconnected | ✅ Automatically linked |
| **Release visibility** | ❌ "I think we're good" | ✅ "78% tested, 2 active bugs" |

---

## The Five Signs Your QA Is Invisible

### Sign 1: Your QA Uses Excel For Test Cases

If your test cases live in an Excel file disconnected from development, your QA is invisible.

---

### Sign 2: You Don't Know How Many Tests Remain Before Release

If the answer to "How many tests remain?" requires 1h manual calculation, your QA coverage is invisible.

---

### Sign 3: QA Discovers Ready Features By Chance

If your QA must ask "Is this ready to test?" instead of being automatically notified, synchronization is broken.

---

### Sign 4: You Ship Without Knowing If Everything Is Tested

If you answer "I think so" to "Is everything tested?", you have no visibility.

---

### Sign 5: Bugs Reappear Because QA Forgot To Retest

If "fixed" bugs return because QA didn't know to retest, your history is nonexistent.

---

## How To Use Sinra For QA

### Step 1: Create Testings For Each Capability

**Action:**
- Each capability (feature) has a "Testings" section
- Create test cases with priority (High/Medium/Low)
- Link each testing to relevant development issues

**Result:** Test cases linked to work, not floating in Excel.

---

### Step 2: Execute Tests And Record Results

**Action:**
- When issue completed, QA notification
- QA executes testing, records result (Passed/Failed)
- If Failed: create bug directly linked to test

**Result:** Complete history, traced bugs.

---

### Step 3: Track QA Progression Per Release

**Action:**
- Release view displays % tests executed
- Automatic alerts if tests missing
- Shipping decision based on real data

**Result:** Real-time visibility, informed decisions.

---

### Step 4: Continuous Testing (Not Bottleneck At Sprint End)

**Action:**
- QA tests as soon as issues completed
- Bugs detected early (time to fix)
- No Friday accumulation

**Result:** QA becomes continuous process, not final phase.

---

## Action Points: Make Your QA Visible

1. **Create your first testings in Sinra.** Take 1 capability, define 5-10 test cases.
2. **Link testings to development issues.** Ensure Dev ↔ QA visibility.
3. **Execute and record results.** Build complete history.
4. **Track QA progression in real-time.** Use release view for visibility.
5. **Adopt continuous testing.** Test when ready, not at sprint end.

---

## The Key Point

**Invisible QA kills quality.**

Between **disconnected Excel test cases**, **unlinked Jira bugs**, **lost results**, and **unknown coverage**, nobody knows if the release can ship.

**Sinra makes QA visible and unified with development.**

Testings are linked to capabilities, history is complete, synchronization is automatic, and progression is real-time.

**The result:**
- ✅ Tests linked to features (not disconnected Excel)
- ✅ Complete execution history
- ✅ Automatic Dev ↔ QA synchronization
- ✅ Real-time coverage visibility
- ✅ QA bottleneck eliminated (continuous testing)

**You know exactly what's tested, what remains, and if you can ship.**

**Your future self will thank you.**

---

**Ready to make your QA visible?** [Start a free Sinra trial →](https://app.sinra.dev/users/sign_up)

Discover project management where tests are linked to development, not lost in Excel.
