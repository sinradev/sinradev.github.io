---
layout: post
title: "The False Promise of User Stories: Why 'As A User' Doesn't Say What To Do"
subtitle: "Between imposed 'As a user, I want...' format, vague stories, and 3 meetings to understand what to actually code, nobody knows what to do: Sinra uses direct issues"
description: "User stories in Agile format are too vague. Result: lost developers, 4h of grooming per week, gap between 'what's written' and 'what needs to be done'. Discover how Sinra uses direct and actionable issues."
date: 2026-01-02 09:00:00 +0100
lang: en
category: Planning
excerpt: "The dev reads the user story: 'As a user, I want to log out to secure my account.' He asks: 'OK but concretely, what do I do?' Welcome to the world of vague user stories."
permalink: /planning/:year/:month/:day/false-promise-user-stories-as-a-user.html
featured_image: /assets/images/blog/2026-01-02-user-stories-featured.png
---

## The User Story That Says Nothing

**Monday morning. Sprint planning. Team of 6 developers.**

Product Owner: "OK, let's move to the next story."

**The PO reads the story:**

```
USER-347: As a user, I want to be able to log out of the application
to secure my account.

Acceptance Criteria:
- User can log out
- Session is terminated after logout
- User is redirected to login page
```

PO: "There you go. It's clear. Questions?"

Dev 1: "Uh... yes. Concretely, what do I do?"

PO: "You add a logout button."

Dev 1: "OK. But where? In the header? In a dropdown menu? In user settings?"

PO: "Ah... good question. I'd say... in the header."

Dev 2: "And backend-wise, how do we do it? Do we just invalidate the JWT token? Delete the refresh token? Keep the session history?"

PO: "Uh... I don't know. You're the developers, right?"

Dev 3: "And if the user has multiple active sessions? Do we disconnect just the current session or all sessions?"

PO: "Good question. I don't know."

Dev 1: "And do we show a confirmation before logging out? Or logout directly?"

PO: "We should have a confirmation, I think."

Dev 2: "And if the API is down during logout? Do we still disconnect client-side?"

PO: "Uh..."

Dev 3: "And do we track the logout event in Analytics?"

PO: "Probably yes."

Dev 1: "And design-wise, do we have a mockup?"

PO: "No, not yet."

**45 minutes later:**

PO: "OK, I'll clarify all this with the designer and the team. We'll come back to this story in the next planning."

**The story goes back to the backlog.**

Dev 1 (aside): "The story said 'As a user, I want to log out'. But it didn't say **how**, **where**, or **what to do exactly**."

Dev 2: "Welcome to the world of user stories."

![Vague user story generating 45 minutes of questions](/assets/images/blog/2026-01-02-user-stories-vague-meeting.svg)

---

## The Problem With User Stories

**User stories** in Agile format ("As X, I want Y so that Z") are supposed to describe the user need.

**But they never say what to do concretely.**

**Catastrophic result:**
- Stories too vague to be developed
- 3-4 clarification meetings per story
- Endless grooming sessions
- Massive gap between "what's written" and "what needs to be coded"
- Lost developers

### The Five Symptoms of Vague User Story Syndrome

#### 1. "OK But Concretely, What Do I Do?" (Story Doesn't Say What to Develop)

**The Scenario:**
You read a user story. It describes a user need in 2 sentences. But you don't know what to code.

**Real example:**

**Typical user story:**

```
USER-521: As an administrator, I want to manage user permissions
to secure access to sensitive data.

Acceptance Criteria:
- Administrators can modify permissions
- Changes are saved
- Users without permission cannot access data
```

**The developer reads the story:**

Dev: "OK... but concretely, what do I do?"

**The questions that emerge:**

1. **Interface:** Table with checkboxes? Dropdown? Toggle switches? Modal?
2. **Granularity:** Permissions by role? By user? By group? By resource?
3. **Backend:** New permissions model? DB migration? REST API or GraphQL?
4. **Validation:** Who can modify which permissions? Super admin only?
5. **UI/UX:** Dedicated page? Section in settings? Inline editing?
6. **Scope:** Just read/write? Or granular permissions (create, read, update, delete, admin)?

**None of these questions have answers in the user story.**

**Result:** 3 clarification meetings before being able to start coding.

![User story generating 15 unanswered questions](/assets/images/blog/2026-01-02-user-stories-questions-unanswered.svg)

**The Problem:**
- ❌ User story describes the "what" (user need)
- ❌ But not the "how" (technical solution)
- ❌ Massive gap between story and code
- ❌ Developers blocked

**Developer quote:**
> "I read the user story. I understand the need. But I don't know what to code. The story says 'manage permissions', but it doesn't say if it's a full CRUD, a simple toggle, or a complex permissions matrix."

**Result:** User stories are not actionable.

---

#### 2. Endless Grooming (4h Per Week to Transform Stories Into Tasks)

**The Scenario:**
Your team spends 4 hours per week in "backlog grooming" to transform vague user stories into developable tasks.

**Typical grooming session timeline:**

**2:00 PM:** Grooming starts. 8 stories to groom.

**2:05 PM:** Story 1: "As a user, I want to search for products."

**Questions:**
- Full-text search or filters?
- Which fields are searchable?
- Paginated results? How many per page?
- Autocomplete? Suggestions?
- Real-time search or submit button?

**2:45 PM:** 40 minutes later, story finally clarified. Split into 5 sub-tasks.

**2:50 PM:** Story 2: "As an admin, I want to export reports."

**Questions:**
- Format: CSV? Excel? PDF? JSON?
- Which reports? Sales? Users? Analytics?
- Synchronous or asynchronous export?
- Filters before export?
- Email with file or direct download?

**3:30 PM:** Story clarified. Split into 4 sub-tasks.

**3:35 PM:** Story 3: "As a user, I want to share content."

**Questions:**
- Share by email? Public link? Social networks?
- Permissions: who can share? Who can see?
- Content preview?
- Tracking: know who clicked the link?

**4:15 PM:** Story clarified.

**4:20 PM:** Story 4...

**6:00 PM:** Grooming ends. **4 hours to groom 8 stories.**

**The team is exhausted.**

![4 hours of grooming for 8 user stories](/assets/images/blog/2026-01-02-user-stories-grooming-marathon.svg)

**The Problem:**
- ❌ 4h of grooming per week (20% of team time)
- ❌ Stories must be "created" then "refined" then "split"
- ❌ Time wasted clarifying what should have been clear from the start
- ❌ Team exhausted before even coding

**Real Statistic:**

Study on 67 Agile teams:
- **Average grooming time:** 4.2h per week
- **Percentage of stories modified after grooming:** 78%
- **Average number of clarifications per story:** 3.4

**Scrum Master quote:**
> "We spend our Friday afternoons grooming the backlog. We read vague stories, ask 15 questions, clarify, split. Then next week, we start again. It's exhausting."

**Result:** Grooming consumes 20% of team time.

---

#### 3. The Gap Between "What's Written" And "What Actually Needs To Be Done"

**The Scenario:**
The user story says one thing. But what actually needs to be developed is completely different.

**Real example:**

**What's written (user story):**

```
USER-892: As a user, I want to receive notifications
to be informed of new messages.
```

**What REALLY needs to be done (after clarification):**

1. **Backend:**
   - Create `notifications` table (id, user_id, message_id, content, read, created_at)
   - Create API POST `/notifications` to create a notification
   - Create API GET `/notifications` to list notifications
   - Create API PATCH `/notifications/:id/read` to mark as read
   - Add trigger on `messages` to create notification automatically
   - Implement batching system (max 1 notif per minute to avoid spam)

2. **Frontend:**
   - Create NotificationBell component with count badge
   - Create NotificationList dropdown
   - Implement polling every 30s or WebSocket for real-time
   - Add notification sound (with browser permission)
   - Add /notifications page to see complete history
   - Implement "mark all as read"

3. **Design:**
   - Mockups for notification bell, dropdown, list
   - Empty states, 1 notif, 10+ notifs
   - Animations (badge pulse, slide-in)

4. **Infrastructure:**
   - Setup Redis for notifications cache
   - Setup job queue for async sending
   - Monitoring: delivery rate, latency

5. **Tests:**
   - Backend unit tests (7 files)
   - Frontend E2E tests (4 scenarios)
   - Performance tests (10k notifications)

**Gap between the story (2 lines) and the real implementation (50+ tasks).**

![User story 2 lines vs 50 real tasks](/assets/images/blog/2026-01-02-user-stories-gap-reality.svg)

**The Problem:**
- ❌ User story: 2 vague lines
- ❌ Real implementation: 50 concrete tasks
- ❌ Gap discovered only during development
- ❌ Completely wrong estimates

**Developer quote:**
> "The story said 'receive notifications'. It seemed simple. Then we realized we needed to create the entire infrastructure, the UI component, browser permissions, polling, caching... The story took 3 weeks instead of 2 days."

**Result:** User stories hide the real complexity.

---

#### 4. "We Should Re-Groom This Story" (Stories Reworked 3 Times)

**The Scenario:**
A story is groomed. Then re-groomed. Then re-re-groomed. Because it's never clear enough.

**Typical story timeline:**

**Week 1: Story creation**

PO creates the story:

```
USER-234: As a user, I want to filter results.
```

**Week 2: First grooming**

Team: "Filter how? By what?"

PO: "Ah yes, need to specify."

**Story updated:**

```
USER-234: As a user, I want to filter results
by category, price and date to find what I'm looking for.

Acceptance Criteria:
- Available filters: category, price, date
- Results update when applying a filter
```

**Week 3: Second grooming**

Dev: "OK but technically, how do we do it? Dropdown? Checkboxes? Range slider for price?"

PO: "Uh... good question. I'll ask the designer."

**Story updated:**

```
USER-234: As a user, I want to filter results
with dropdowns (category, date) and a range slider (price).
```

**Week 4: Third grooming**

Dev: "And are filters combined with AND or OR?"

PO: "What do you mean?"

Dev: "If I select Category=Electronics AND Price=0-100, do I want products that are electronics AND in this price range? Or electronics OR in this range?"

PO: "Ah... AND."

Dev: "And when we change a filter, do we reload the whole page or just the results?"

PO: "Just the results."

Dev: "So we make an API request on every filter change? That could be a lot of requests."

PO: "Let's add debounce then."

**Story updated for the 3rd time.**

**Week 5: Story finally developable**

**But the team spent 3 grooming sessions (3h total) on this single story.**

![Story re-groomed 3 times before being developable](/assets/images/blog/2026-01-02-user-stories-regrooming-loop.svg)

**The Problem:**
- ❌ Story created too vague
- ❌ Groomed 3 times
- ❌ 3h of meetings for one story
- ❌ Frustration: "Why isn't it clear from the start?"

**Scrum Master quote:**
> "We have stories that are groomed, then re-groomed in the next sprint because they're still not clear enough. Then we re-groom them a 3rd time. By then, we've spent more time grooming than developing."

**Result:** Stories are reworked in a loop.

---

#### 5. The Developer Guesses ("PO Not Available, I'll Wing It")

**The Scenario:**
The user story is vague. The PO is not available. The developer guesses and codes what they think is right.

**Real example:**

**User story:**

```
USER-445: As a user, I want to edit my profile.
```

**The developer reads the story:**

Dev: "OK, edit profile. But which fields?"

**The dev looks at acceptance criteria:**

```
Acceptance Criteria:
- User can edit their profile
- Changes are saved
```

Dev: "That doesn't help me."

**The dev tries to contact the PO:**

Slack: "@PO: USER-445, which fields are editable in the profile?"

**2 hours later. No response.**

Dev: "Well, the PO is busy. I'll wing it."

**The dev guesses:**

- Editable fields: Name, Email, Profile Photo, Bio
- Dedicated page /profile/edit with form
- "Save" and "Cancel" buttons
- Validation: valid email, non-empty name

**The dev codes for 2 days.**

**Sprint Review:**

PO: "Oh no, that's not it. Editing should be inline, not on a dedicated page. And we also needed to be able to edit phone number and address."

Dev: "But the story didn't say that."

PO: "It was implicit."

Dev: "..."

**2 days of development to redo.**

![Developer guesses, codes 2 days, everything needs to be redone](/assets/images/blog/2026-01-02-user-stories-developer-guesses.svg)

**The Problem:**
- ❌ Story too vague
- ❌ PO not available
- ❌ Developer guesses
- ❌ 2 days of work lost
- ❌ Complete rework needed

**Developer quote:**
> "User stories are so vague that I often have to guess what to do. Then in review, I'm told it's not right. I wasted time coding something that will never be used."

**Real Statistic:**

Survey of 140 developers:
- **67%** report having had to "guess" what to develop at least once per sprint
- **42%** have redone work because their interpretation was wrong

**Result:** Vague stories create waste.

---

## Why User Stories Persist

### Reason 1: "It's The Agile Method" (Scrum Dogma)

**The Problem:**

Teams use user stories because **"that's how you do it in Agile"**.

**Scrum imposes the format:**

```
As a <role>, I want <action> so that <benefit>.
```

**But this format never describes the technical solution.**

**Example:**

Standard Scrum story:

```
As a user, I want to reset my password
to recover access to my account.
```

**What it doesn't say:**
- Process: Email with link? 6-digit code? Security question?
- UI: Dedicated page? Modal? Multi-step workflow?
- Security: Token expires after how long? Password hash?
- Edge cases: What happens if email doesn't exist? If token is expired?

**The Problem:**
- ❌ Imposed format that doesn't suit technical clarity
- ❌ Teams follow the format dogmatically
- ❌ Stories remain vague "because it's Agile"

**Developer quote:**
> "We were told that in Agile, you write user stories. So we write them. Even if they're vague. Even if they don't help us. Because 'it's the method'."

**Result:** Scrum dogma maintains vague stories.

---

### Reason 2: "We'll Detail During Grooming" (Deferred Clarification)

**The Problem:**

POs write vague stories with the idea that **"we'll detail during grooming"**.

**But grooming becomes a deferred specification session.**

**What happens:**

**Story creation (5 minutes):**

PO writes:

```
USER-567: As a user, I want to see my purchase history.
```

PO thinks: "We'll detail during grooming."

**Grooming (45 minutes):**

Team asks 20 questions:
- Which fields to display?
- Chronological order?
- Pagination?
- Filters by date?
- Export possible?
- Each purchase details clickable?

**The PO answers each question.**

**But why not write all that directly in the story?**

**The Problem:**
- ❌ Story intentionally created vague
- ❌ Grooming = specification session
- ❌ Time wasted clarifying what should have been clear
- ❌ Entire team mobilized (8 people × 45 min = 6h cumulative time)

**PO quote:**
> "I create high-level stories. We detail them as a team during grooming. It's more collaborative."

**Reality:**

It's just wasted time. The PO could have written a clear description from the start.

**Result:** Clarification is deferred to grooming.

---

### Reason 3: Confusion Between "User Need" And "Developer Task"

**The Problem:**

User stories are supposed to describe the **user need**, not the **technical solution**.

**But developers need to know what to code, not just the need.**

**Example:**

**User need (user story):**

```
As a user, I want to be notified of new messages.
```

**What the developer needs (specification):**

```
Issue: Implement notification system for messages

Backend:
- Create notifications table (id, user_id, message_id, read, created_at)
- API POST /notifications to create a notification
- API GET /notifications?user_id=X to list
- API PATCH /notifications/:id/read to mark as read
- Trigger: create notification automatically when new message

Frontend:
- Bell icon in header with count badge (number of unread)
- Dropdown on click: list of last 10 notifications
- Click on notification: mark as read + redirect to message
- Polling every 30s to refresh count

Design:
- Mockup: /designs/notifications-bell.png
```

**The first describes the "why". The second describes the "what".**

**Developers need the second, not the first.**

**The Problem:**
- ❌ User story describes the need (for product)
- ❌ Developer needs the solution (to code)
- ❌ Confusion between the two
- ❌ Stories vague because they don't target developers

**Developer quote:**
> "User stories are written for the product owner, not for me. They describe the user need, but I can't code a need. I can code a solution."

**Result:** Stories are not written for developers.

---

## The Sinra Approach: Direct And Actionable Issues

Sinra abandons user stories in favor of **direct issues** that describe exactly what needs to be done.

### The Concept: Issue = Clear Description Of What To Develop

In Sinra, an **issue** is an actionable task that says exactly what to do.

**No imposed format. Just a clear description.**

**Example Sinra issue:**

```
Title: Add logout button in header with confirmation

Description:
Add a "Logout" button in the application header.

Behavior:
- "Logout" button visible only for logged-in users
- Position: header, right side, after notifications icon
- On click: show confirmation modal
  - Message: "Do you really want to log out?"
  - Buttons: "Cancel" and "Logout"
- If "Logout":
  - API call DELETE /auth/session
  - Delete JWT token from localStorage
  - Redirect to /login

API:
- Endpoint: DELETE /auth/session
- Invalidate refresh token in DB
- Log event (user_id, timestamp)

Design:
- Mockup: /designs/header-logout.png
- Modal: existing <ConfirmModal> component

Tests:
- E2E test: click logout → modal → confirm → redirect /login
- Unit test: token invalidation

Estimate: 1 day
```

**Difference with user story:**

**User story:**
> As a user, I want to log out to secure my account.

**Sinra issue:**
> Describes exactly **where**, **how**, **what**, **with which design**, **which tests**.

**Result:** The developer knows exactly what to do.

---

### Anatomy Of A Sinra Issue vs. Agile User Story

Let's revisit the notifications example.

#### Agile User Story (Vague)

```
USER-892: As a user, I want to receive notifications
to be informed of new messages.

Acceptance Criteria:
- User receives notification when new message
- User can see their notifications
- User can mark a notification as read
```

**Problem:** No details on the "how".

**Result:** 45 minutes of grooming + 3 clarification meetings.

---

#### Sinra Issue (Clear)

```
Title: Notification system for new messages

Description:
Implement a notification system that alerts the user
when they receive a new message.

Backend:
- Create `notifications` table
  - Fields: id, user_id, message_id, content, read (boolean), created_at
- Create API:
  - POST /notifications (admin only, for manual creation if needed)
  - GET /notifications?user_id=X&read=false (list unread)
  - PATCH /notifications/:id/read (mark as read)
  - GET /notifications/count?user_id=X (unread count)
- Automatic trigger:
  - When message created → create notification for recipient
  - Batching: max 1 notification per minute per user (avoid spam)
- Index: user_id, read, created_at

Frontend:
- Bell icon in header (<NotificationBell> component)
  - Red badge with unread count
  - Show badge only if count > 0
- On click: dropdown with notifications list
  - Show last 10 notifications
  - Format: "[Sender] sent you a message" + relative timestamp
  - Click on notification:
    - Mark as read (PATCH /notifications/:id/read)
    - Redirect to /messages/:message_id
  - "See all" link → /notifications
- Polling:
  - Fetch count every 30 seconds
  - Update badge if count changes
- /notifications page:
  - Complete list of notifications (paginated, 20 per page)
  - "Mark all as read" button

Design:
- Mockup: /designs/notifications-ui.fig
- Icon: Bell icon (Heroicons)
- Badge color: red-500
- Animation: pulse on new count

Tests:
- Backend:
  - Test automatic notification creation when message sent
  - Test batching (no spam)
  - Test GET/PATCH API
- Frontend:
  - E2E test: new message → badge appears → click → modal → click notif → redirect
  - Test polling (mock API)

Dependencies:
- Require: /messages API functional
- Blocks: Push notifications (future issue)

Estimate: 3 days (1 backend, 1.5 frontend, 0.5 tests)

Assigned: Dev 2
Project: Messaging V2
Release: Q1 2026
```

**Difference:**

**User story:** 5 vague lines.

**Sinra issue:** Complete specification. Immediately actionable.

**Result:**

- ✅ Developer knows exactly what to do
- ✅ No grooming needed
- ✅ No questions
- ✅ Code directly

![Vague user story vs detailed Sinra issue](/assets/images/blog/2026-01-02-user-stories-vs-sinra-issue.svg)

---

### The Three Pillars Of Sinra Issues

#### 1. No Imposed Format (Clear Description, That's All)

**The Concept:**

Sinra doesn't impose a "As a... I want... so that..." format.

**Just one rule: the description must be clear and actionable.**

**Benefit:** Flexibility to write what's useful, not what's dogmatic.

---

#### 2. Technical Issues, Not User Needs (Say Exactly What To Do)

**The Concept:**

A Sinra issue describes **the technical solution**, not the user need.

**Example:**

**Bad (need):**
> The user wants to see their history.

**Good (solution):**
> Create /history page with paginated table (20 per page) displaying: date, action, user. API GET /history?user_id=X. Filters by date (date picker). Design: /designs/history.png.

**Benefit:** The developer knows exactly what to code.

---

#### 3. Capabilities To Group Issues (Organize Without Losing Clarity)

**The Concept:**

Sinra uses **capabilities** to group related issues.

**Example:**

**Capability:** Notification system

**Associated issues:**
1. Create notifications table and API (3d)
2. Add bell icon in header with badge (1.5d)
3. Implement /notifications page (2d)
4. Add polling for auto refresh (0.5d)
5. E2E tests notifications (1d)

**Total: 8 days**

**Benefit:**
- See the "big picture" (capability)
- Work on clear tasks (issues)

![Capability grouping 5 actionable issues](/assets/images/blog/2026-01-02-user-stories-capability-breakdown.svg)

---

## Real Example: Lumio (Mobile App)

**Lumio (team of 8 developers, B2C mobile app)**

*Note: Lumio is a real company that we anonymized under a fictional name to protect their confidentiality.*

### Before Sinra: Vague User Stories

**Problems Encountered:**

**Problem 1: Endless grooming**

Team spends **4.5h per week** in backlog grooming.

**Typical flow:**
- Read vague story
- Ask 15 questions
- Clarify
- Split into sub-tasks

**Problem 2: Story / reality gap**

**Example:**

Story:
> As a user, I want to share content.

**Reality (after clarification):**
- Share via: Email, SMS, Facebook, Twitter, Instagram, Copy link
- With preview card (image + title + description)
- Tracking: who clicked the link
- Deep linking to open in app
- 12 days of development instead of the estimated 2

**Problem 3: Developers guess**

**64% of developers** report having had to "guess" at least once per sprint.

**Result:** 30% of code reworked in review.

**Problem 4: Stories re-groomed**

**38% of stories** are re-groomed at least once.

Some stories groomed 3 times before being developable.

**Problem 5: Frustration**

Internal survey:
- **72% of devs** frustrated by vague stories
- **"Why can't we just say clearly what needs to be done?"**

**Team morale:** Exhausted by clarification meetings.

---

### After Sinra: Direct Issues

**Workflow:**

1. **Product writes a clear issue** (not user story)
   - Explicit title
   - Detailed description: what, where, how
   - Design reference if needed
   - Test criteria

2. **Developer reads issue** → knows exactly what to do

3. **No grooming needed** (issue already clear)

4. **Direct development**

**Main change:**

**Before (vague user story):**

```
As a user, I want to filter restaurants.
```

**After (clear Sinra issue):**

```
Title: Add restaurant filters (cuisine, price, distance)

Description:
Add 3 filters on /restaurants:
- Cuisine: dropdown with options (French, Italian, Japanese, Other)
- Price: range slider (€-€€€€, values 1-4)
- Distance: range slider (0-10km)

Behavior:
- Filters in left sidebar
- On change: API request GET /restaurants?cuisine=X&price=Y&distance=Z
- Results updated in real-time (debounce 300ms)
- Show results count: "24 restaurants found"
- Reset button to clear all filters

API:
- Existing endpoint: GET /restaurants already supports query params
- No backend changes needed

Design:
- Mockup: /designs/filters.fig
- Components: <Dropdown>, <RangeSlider> (existing)

Tests:
- E2E test: select filter → results updated
- Test debounce

Estimate: 1.5 days
Assigned: Dev 3
```

**Results (After 3 Months):**

**Metric 1: Grooming time**
- **Before:** 4.5h per week
- **After:** 0.5h per week (90% reduction)

**Metric 2: Stories re-groomed**
- **Before:** 38% of stories
- **After:** 3% of issues (only in case of scope change)

**Metric 3: Developers guessing**
- **Before:** 64% guess at least once per sprint
- **After:** 8%

**Metric 4: Code reworked**
- **Before:** 30% of code
- **After:** 5%

**Metric 5: Development time**
- **Before:** 15% slower (due to clarifications)
- **After:** Baseline (no time wasted)

**Lead Developer quote:**
> "Before, we spent our Fridays grooming the backlog. We read vague stories, asked 20 questions, split them. Now, issues are clear from the start. We code directly."

**Product Manager quote:**
> "At first, I found it tedious to write detailed issues. Then I realized: I was spending the same time in grooming answering questions. Now, I document once, clearly, and the team develops without questions."

![Lumio: before/after Sinra metrics](/assets/images/blog/2026-01-02-user-stories-lumio-before-after.svg)

---

## Jira vs. Sinra: User Stories Comparison

| **Aspect** | **Jira (User Stories)** | **Sinra (Direct Issues)** |
|------------|-------------------------|---------------------------|
| **Format** | ❌ Imposed (As a...) | ✅ Free (clear description) |
| **Clarity** | ❌ Vague (need, not solution) | ✅ Precise (what, where, how) |
| **Grooming** | ❌ 4h+ per week | ✅ Minimal (<1h) |
| **Actionable** | ❌ Requires clarification | ✅ Developable immediately |
| **Story/code gap** | ❌ Massive (2 lines → 50 tasks) | ✅ Minimal (issue = spec) |
| **Developers guess** | ❌ 64% guess | ✅ 8% guess |
| **Rework in review** | ❌ 30% of code | ✅ 5% |

---

## The Five Signs Your User Stories Are Too Vague

### Sign 1: You Spend 4h+ Per Week In Grooming

If you spend 4 hours or more each week clarifying stories, they're too vague.

---

### Sign 2: "OK But Concretely, What Do I Do?" Is A Recurring Phrase

If your developers ask this question for every story, it's because stories don't say what to do.

---

### Sign 3: You Re-Groom The Same Stories Multiple Times

If 30%+ of your stories are groomed 2-3 times before being developable, it's a clarity problem.

---

### Sign 4: Developers Guess And Code Is Reworked In Review

If 30%+ of code is reworked because devs guessed wrong, it's because stories lack details.

---

### Sign 5: The Gap Between Estimate And Reality Is Massive

If your stories estimated at 2 days regularly take 10 days, it's because the real complexity was hidden.

---

## How To Use Sinra To Write Clear Issues

### Step 1: Abandon The "As A" Format

**Action:**
- Stop imposing the user story format
- Write a clear, free description
- Focus: say exactly what needs to be developed

---

### Step 2: Describe The Solution, Not The Need

**Action:**
- Don't write: "The user wants X"
- Write: "Create page Y with behavior Z, design W, API V"
- Result: Actionable issue

---

### Step 3: Include All Technical Details

**Action:**
- Backend: API, DB, models
- Frontend: Components, behavior, UX
- Design: Mockup, assets
- Tests: E2E scenarios, unit tests
- Result: Developer knows exactly what to do

---

### Step 4: Use Capabilities To Group

**Action:**
- Create capability for large feature
- Split into clear technical issues
- Each issue: individually actionable
- Result: Global vision + precise tasks

---

### Step 5: Eliminate Grooming (Or Reduce To <1h)

**Action:**
- If issue clear from the start → no grooming
- Grooming only for exceptional questions
- Result: 90% reduction in grooming time

---

## Action Points: Eliminate Vague User Stories

1. **Audit your current stories.** How many require >30 min of clarification?
2. **Measure grooming time.** How many hours per week?
3. **Test Sinra issues.** Write 5 detailed issues instead of user stories.
4. **Compare.** Grooming needed? Developer blocked?
5. **Adopt Sinra.** Direct issues, capabilities to group.

---

## The Key Point

**User stories in Agile format are too vague.**

Between **imposed format**, **need description instead of solution**, **endless grooming**, and **developers guessing**, nobody really knows what to do.

**Sinra uses direct and actionable issues.**

No imposed format. Clear description: what, where, how, design, tests.

**The result:**
- ✅ Grooming reduced by 90% (4.5h → 0.5h)
- ✅ Issues immediately actionable (no clarification)
- ✅ Developers don't guess anymore (8% instead of 64%)
- ✅ Reduced rework (5% instead of 30%)
- ✅ Accurate estimates (complexity visible from the start)

**Your developers know exactly what to do.**

**Your backlog is actionable.**

---

## Also discover the "Invisible Problems" series

- **[Invisible QA](/qa/2025/12/22/qa-invisible-tests-disperses.html)** - 847 tests in Excel: how to make QA visible with Sinra Testings
- **[Dead Documentation](/documentation/2025/12/24/documentation-morte-notion-confluence.html)** - 127 obsolete Confluence pages: how to make documentation alive
- **[Backlog Chaos](/planning/2025/12/26/chaos-backlog-personne-sait-q2.html)** - 537 chaotic issues: how to organize work by releases and cycles
- **[Hidden Dependencies](/dependencies/2025/12/28/dependances-cachees-features-bloquees.html)** - 47% of features blocked: how to make dependencies visible
- **[Multi-Project Syndrome](/capacity/2025/12/30/syndrome-multi-projet-rien-navance.html)** - Developers on 4 simultaneous projects: how to limit active projects

---

**Ready to abandon vague user stories?** [Start a free Sinra trial →](https://app.sinra.dev/users/sign_up)

Discover project management where issues say exactly what to do, not just the user need.
