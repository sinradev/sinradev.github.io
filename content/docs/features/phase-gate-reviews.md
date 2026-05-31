---
title: "Phase Gate Reviews"
description: "Sinra implements V-model phase gates as structured reviews with explicit evaluation criteria and formal verdicts. Control quality at every stage of your development process."
date: 2024-01-01
weight: 60
---

## What are Phase Gate Reviews?

Phase Gate Reviews are formal checkpoints that determine whether a project, release, or cycle is ready to move forward. Inspired by V-model methodology, they replace informal "looks good to me" approvals with structured, documented, traceable decisions.

A Phase Gate Review answers one question: **are we ready to proceed?**

## Creating a Review

1. Navigate to `/phase_gate_reviews`
2. Create a review with a name and link it to a release, cycle, or project
3. Add participants (tech lead, PO, QA lead, ops)
4. Add evaluation criteria
5. Evaluate each criterion
6. Record the verdict

## Evaluation Criteria

Criteria are the specific conditions that must be met to proceed. Examples:

- All critical bugs resolved
- Test coverage above 80%
- API documentation complete
- Security scan passed
- Stakeholder demo completed

Each criterion can be evaluated as **passed**, **failed**, or **n/a** (not applicable).

## Verdict System

| Verdict | Resulting Status | When to use |
|---------|-----------------|-------------|
| **go** | approved | All critical criteria passed |
| **no-go** | rejected | One or more blocking criteria failed |
| **conditional go** | conditionally_approved | Minor issues noted, proceeding with documented reservations |

The status updates automatically when you record a verdict. A review is terminal once it reaches approved, rejected, or conditionally_approved — it cannot be reopened.

## Participants

Participants are the stakeholders whose sign-off matters for this gate. Adding participants creates an audit trail of who reviewed and approved a phase transition. This is especially important in regulated industries where evidence of formal review is required.

## Phase Gate vs Retrospective

| | Phase Gate Review | Retrospective |
|--|--|--|
| **Timing** | Before moving to next phase | After release delivery |
| **Purpose** | Conditional gate — can block progress | Reflective — never blocks |
| **Output** | Go/no-go verdict | Feedback and improvements |
| **Direction** | Forward-looking | Backward-looking |

## Hybrid V-Model + Agile Usage

In a hybrid methodology, Phase Gate Reviews gate the major V-model phases (requirements complete, design approved, integration ready, UAT passed) while Agile cycles run within each phase. A typical sequence:

1. Requirements phase ends → Phase Gate Review (all specs approved?)
2. Design phase ends → Phase Gate Review (architecture reviewed?)
3. Cycle delivers to staging → Phase Gate Review (deployment ready?)
4. UAT complete → Phase Gate Review (go for production?)

Each gate creates a documented, auditable decision point without blocking the Agile cadence within phases.
