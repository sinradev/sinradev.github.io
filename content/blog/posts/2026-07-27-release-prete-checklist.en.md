---

title: "How to Know if a Release Is Ready to Ship: the Checklist"
subtitle: "\"I think it's good\" is not a release criterion. Here are the concrete questions to ask before deciding a version can ship."
description: "Knowing whether a release is ready to ship should not depend on a collective gut feeling. A concrete checklist: capabilities delivered, testings validated, dependencies resolved, before deciding a version can go to production."
categories: ["Project Management", "Quality"]
excerpt: "The question \"can we ship?\" too often gets an answer based on a general impression rather than verifiable criteria. Here is how to turn that impression into a checklist."
date: 2026-07-27 09:00:00 +0200
featured_image: /assets/images/blog/2026-07-27-release-prete-checklist-featured.png

---

The end-of-cycle meeting arrives, and the question comes up: "can we ship?". Too often, the answer relies on a collective impression rather than verifiable criteria. That ambiguity is a direct source of regressions discovered in production.

## The problem with collective impressions

When nobody has an explicit list of what must be true for a release to ship, each person in the meeting evaluates according to their own frame of reference. The developer thinks about their code. The PM thinks about functional scope. QA thinks about the tests they had time to run, not the ones they wanted to run. These three partial evaluations combine into a "should be fine" that commits nobody clearly.

## A checklist in four categories

**Are the planned capabilities actually delivered?** Not "almost done", not "90% there": delivered, with their predefined completion criterion met. A capability with no clear completion criterion cannot be evaluated here, which is itself a warning sign about how the work was defined upstream.

**Are the associated testings validated?** Every critical capability should have associated tests, executed, with a recorded result. "Seems to work" is not a testing validation.

**Are dependencies between capabilities resolved?** A capability that depends on another one not yet delivered cannot be considered ready, even if its own work is finished.

**Are there any blocking issues still open?** A critical bug open on a feature included in the release should stop the release, regardless of everything else going well.

## Why the checklist format changes behavior

An explicit checklist changes the dynamic of the release meeting. The question is no longer "does it overall feel okay" but "is each specific point true or false". This format shift reduces the room left for collective optimism, which is the most common source of premature releases.

In Sinra, this logic is natively carried by the structure of the **release**: it groups **capabilities** with a binary state (delivered or not) and associated **testings** with a recorded result. The question "can we ship" is read directly from the state of these elements, instead of depending on a manual reconstruction during the meeting.

## The real goal: making doubt visible before the release

A release checklist never guarantees the absence of bugs. Its goal is different: making visible, before shipping, everything that remains uncertain. A capability with no associated testing, an unverified dependency, a fuzzy completion criterion: these are signals a meeting based on collective impression easily lets through, and that an explicit checklist systematically surfaces.
