---
title: "Testings (QA)"
description: "Sinra integrates QA test cases directly into the development cycle. Create test cases on capabilities, run them during the cycle, and track acceptance without leaving the platform."
date: 2024-01-01
weight: 40
---

## What are Testings?

Testings are QA test cases attached to capabilities. Instead of maintaining a separate tool like TestRail, your QA team creates and runs test cases directly in Sinra, linked to the feature they validate.

## Creating a Test Case

Any user with Reporter access or above can create a testing on a capability:
1. Open the capability
2. Click "Add Testing"
3. Set the test name, description, and expected result
4. Assign to a QA user

## Running Tests During a Cycle

The `/testings/current` view shows all test cases in progress for the active release. QA runs each test and marks it:

| Result | Meaning |
|--------|---------|
| **Accepted** | Test passed, feature validates |
| **Rejected** | Test failed, linked issue should be reopened or a bug created |

Rejected tests surface immediately in the capability view, giving developers and product owners real-time QA status.

## Traceability

Testings connect capability to validation:

```
Capability → Testing → Accepted / Rejected
```

When a release is delivered, you can review which capabilities had all tests accepted vs which had rejections that were overridden or deferred. This audit trail is preserved in the release retrospective.

## Why Integrated QA Matters

Switching between a ticket tool and a separate QA tool creates synchronization problems: bugs found in TestRail need to be manually created in Jira. Sinra eliminates this handoff. A rejected test case is linked directly to the capability and cycle where the fix belongs.
