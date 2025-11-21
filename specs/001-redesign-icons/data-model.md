# Data Model: Icon System Specification

**Phase**: 1 (Design & Contracts)
**Date**: 2025-11-18
**Status**: Complete

---

## Overview

This document defines the data structure, entities, and relationships for the Sinra icon system redesign. All 15 icons follow a unified schema with consistent properties while allowing flexibility for semantic accuracy.

---

## Icon Entity Definition

```
ICON
├── Metadata
│   ├── id: string                 # Unique identifier (kebab-case)
│   ├── name: string               # Display name
│   ├── description: string        # Semantic meaning
│   ├── category: enum             # "feature" | "benefit" | "methodology" | "interactive"
│   └── use_cases: string[]        # Where used on site
│
├── Design Properties
│   ├── canvas_size: "64px"        # Fixed size
│   ├── viewbox: "0 0 64 64"       # Fixed viewBox
│   ├── stroke_weight: number      # Primary 2px, range 1.5–2.5px
│   ├── fill: "transparent"        # Default
│   ├── design_philosophy: string  # Concept approach (eye, container, etc.)
│   └── visual_notes: string       # Design-specific guidance
│
├── Color & Rendering
│   ├── stroke_color: "#000000"    # Black stroke
│   ├── fill_color: "transparent"  # Transparent fill
│   ├── currentColor_support: true # CSS theming ready
│   └── dark_mode_ready: true      # Works on dark backgrounds
│
├── Scaling & Responsiveness
│   ├── min_display_size: 32       # Minimum (favicon)
│   ├── max_display_size: 300      # Maximum (hero section)
│   ├── tested_sizes: [60, 96, 128, 192] # Representative viewports
│   └── clarity_verified: boolean  # Passes visual clarity audit
│
├── Accessibility
│   ├── alt_text: string           # For <img> tags
│   ├── aria_label: string         # For inline SVGs
│   └── a11y_tested: boolean       # Screen reader tested
│
├── Technical
│   ├── file_path: string          # Location in repo
│   ├── file_size_bytes: number    # Post-optimization size
│   ├── file_size_target: 5000     # Max 5KB
│   ├── viewbox_decimal_precision: 2  # Coordinates: 2 decimal places
│   └── svgo_optimized: boolean    # Optimization complete
│
└── Validation
    ├── recognition_tested: boolean      # User validation done
    ├── recognition_score: number        # 0.0–1.0 (target ≥0.75)
    ├── coherence_variance: number       # Max stroke variance (target ≤1.5px)
    ├── coherence_verified: boolean      # Audit complete
    └── production_ready: boolean        # Approved for deployment
```

---

## Feature Icons (7 Total)

### 1. Editor (Rich Text Editor)
- **ID**: `editor`
- **Name**: Rich Text Editor
- **Description**: Icon representing text editing, writing, or document composition capability
- **Use Cases**: Homepage feature section
- **Visual Approach**: Pen/pencil + document metaphor (writing action)
- **Design Notes**: Clean pen stroke overlaying document outline; represents creative/editorial action
- **File Path**: `assets/images/features/editor.svg`
- **Visual Guidance**: Pen angled ~45°, document outline simple rectangle with optional lines

### 2. Progress (Progress Tracking)
- **ID**: `progress`
- **Name**: Progress Tracking
- **Description**: Icon representing tracking advancement, completion, or status monitoring
- **Use Cases**: Homepage feature section
- **Visual Approach**: Ascending line or completion indicator
- **Design Notes**: Clear upward trajectory or progress bar with fill indication
- **File Path**: `assets/images/features/progress.svg`
- **Visual Guidance**: Line should ascend smoothly (not jagged); optional milestone markers

### 3. Collaboration (Collaboration)
- **ID**: `collaboration`
- **Name**: Collaboration
- **Description**: Icon representing teamwork, multiple people, or collective action
- **Use Cases**: Homepage feature section
- **Visual Approach**: Multiple people/elements working together
- **Design Notes**: Avoid literal "people" shapes; use geometric representation (circles, shapes interacting)
- **File Path**: `assets/images/features/collaboration.svg`
- **Visual Guidance**: 2–3 geometric elements in connected/overlapping arrangement

### 4. Release (Release Planning)
- **ID**: `release`
- **Name**: Release Planning
- **Description**: Icon representing versioning, shipping, or milestone achievement
- **Use Cases**: Homepage feature section
- **Visual Approach**: Calendar/milestone or shipping metaphor
- **Design Notes**: Suggests scheduling (calendar) or deployment (arrow/launch)
- **File Path**: `assets/images/features/release.svg`
- **Visual Guidance**: Calendar grid or shipping-related geometry (box, arrow)

### 5. Multiapp (Multi-App Workload)
- **ID**: `multiapp`
- **Name**: Multi-App Workload
- **Description**: Icon representing multiple applications, integrations, or connected modules
- **Use Cases**: Homepage feature section
- **Visual Approach**: Layered applications or connected modules
- **Design Notes**: Shows stacking/layering or interconnection of multiple units
- **File Path**: `assets/images/features/multiapp.svg`
- **Visual Guidance**: 2–3 layered rectangles or connected nodes

### 6. Workflows (Custom Workflows)
- **ID**: `workflows`
- **Name**: Custom Workflows
- **Description**: Icon representing process flow, automation, or custom sequencing
- **Use Cases**: Homepage feature section
- **Visual Approach**: Process flow or connected nodes
- **Design Notes**: Shows sequential steps or connections (flowchart-style)
- **File Path**: `assets/images/features/workflows.svg`
- **Visual Guidance**: Connected nodes/boxes with connecting lines (left-to-right or circular flow)

### 7. Carryover (Carry-Over Issues)
- **ID**: `carryover`
- **Name**: Carry-Over Issues
- **Description**: Icon representing unfinished items, continuity, or work carried to next cycle
- **Use Cases**: Homepage feature section
- **Visual Approach**: Arrow/continuation or unfinished item indicator
- **Design Notes**: Shows forward movement or incomplete-to-complete state
- **File Path**: `assets/images/features/carryover.svg`
- **Visual Guidance**: Arrow with subtle completion indicator (e.g., checkmark at end)

---

## Benefit Icons (6 Total)

### 1. Visibility (Visibility)
- **ID**: `visibility`
- **Name**: Visibility
- **Description**: Icon representing seeing, understanding, clarity, or transparency in planning and execution
- **Use Cases**: About page benefits section
- **Visual Approach**: Eye or window metaphor
- **Design Notes**: Suggests clarity and ability to see; metaphor for insight/oversight
- **File Path**: `assets/images/benefits/visibility.svg`
- **Visual Guidance**: Eye shape (geometric, not realistic) or window with panes

### 2. Capacity (Capacity)
- **ID**: `capacity`
- **Name**: Capacity
- **Description**: Icon representing resource allocation, scope of work, or organizational capability
- **Use Cases**: About page benefits section
- **Visual Approach**: Container with elements or expanding scope
- **Design Notes**: Shows growth, expansion, or contained resources
- **File Path**: `assets/images/benefits/capacity.svg`
- **Visual Guidance**: Container (rectangle/circle) with internal elements or outward-pointing arrows

### 3. Quality (Quality Control)
- **ID**: `quality`
- **Name**: Quality Control
- **Description**: Icon representing confidence, validation, excellence, or quality assurance
- **Use Cases**: About page benefits section
- **Visual Approach**: Checkmark, shield, or excellence indicator
- **Design Notes**: Conveys trust, validation, and confidence in outcomes
- **File Path**: `assets/images/benefits/quality.svg`
- **Visual Guidance**: Clean checkmark or shield shape

### 4. Release-Mgmt (Release Management)
- **ID**: `release-mgmt`
- **Name**: Release Management
- **Description**: Icon representing structured release cycles, versioning, and deployment cadence
- **Use Cases**: About page benefits section (release-driven deployment planning)
- **Visual Approach**: Release cycle or versioning metaphor
- **Design Notes**: Suggests periodic release cycles, versions, or cadence
- **File Path**: `assets/images/benefits/release-mgmt.svg`
- **Visual Guidance**: Circular progression (cycle) or stacked versions (v1, v2, v3)

### 5. Deploy-Checklist (Deployment Checklist)
- **ID**: `deploy-checklist`
- **Name**: Deployment Checklist
- **Description**: Icon representing deployment readiness, quality gates, and pre-release validation
- **Use Cases**: About page benefits section
- **Visual Approach**: Checklist, tasks, or deployment steps
- **Design Notes**: Shows structured verification/validation process
- **File Path**: `assets/images/benefits/deploy-checklist.svg`
- **Visual Guidance**: Checklist with checked boxes or step-by-step indicator

### 6. Golive (Go-Live Confidence)
- **ID**: `golive`
- **Name**: Go-Live Confidence
- **Description**: Icon representing successful launch, confidence, and assured deployment
- **Use Cases**: About page benefits section
- **Visual Approach**: Launch, confidence, or success indicator
- **Design Notes**: Conveys success, readiness, and confidence in go-live
- **File Path**: `assets/images/benefits/golive.svg`
- **Visual Guidance**: Launch icon (rocket/arrow), success indicator (trophy/checkmark), or upward motion

---

## Methodology Icons (2 Total)

### 1. Agile (Agile Approach)
- **ID**: `agile`
- **Name**: Agile
- **Description**: Icon representing iterative cycles, flexibility, and rapid iteration
- **Use Cases**: About page methodology comparison section
- **Visual Approach**: Sprint cycles or iterative loops
- **Design Notes**: Conveys flexibility, quick iterations, and circular/cyclical process
- **File Path**: `assets/images/methodology/agile.svg`
- **Visual Guidance**: Circular arrows, cyclical pattern, or iterative steps

### 2. Waterfall (Waterfall Approach)
- **ID**: `waterfall`
- **Name**: Waterfall
- **Description**: Icon representing sequential phases, structured planning, and cascading stages
- **Use Cases**: About page methodology comparison section
- **Visual Approach**: Sequential flow or cascading stages
- **Design Notes**: Conveys linear progression, cascading steps, and sequential phases
- **File Path**: `assets/images/methodology/waterfall.svg`
- **Visual Guidance**: Downward cascading steps or linear sequential arrows

---

## Interactive Icons (3 Total)

### 1. Checkmark (Pricing Checkmark)
- **ID**: `checkmark`
- **Name**: Checkmark
- **Description**: Icon indicating included feature in pricing table
- **Use Cases**: Pricing page feature comparison table
- **Visual Approach**: Clean checkmark with clear affordance
- **Design Notes**: Must be immediately recognizable as "included/yes"
- **File Path**: `assets/images/interactive/checkmark.svg`
- **Refinement Notes**: Current version may need slight visual enhancement for clarity; maintain established functionality
- **Current Implementation**: SVG checkmark in pricing table

### 2. Chevron (FAQ Dropdown)
- **ID**: `chevron`
- **Name**: Chevron
- **Description**: Icon indicating FAQ item can be expanded/collapsed
- **Use Cases**: Contact/FAQ page dropdown indicators
- **Visual Approach**: Arrow/chevron indicating direction
- **Design Notes**: Must clearly indicate "can expand downward" or "can collapse upward"
- **File Path**: `assets/images/interactive/chevron.svg`
- **Refinement Notes**: Current version may need rotation indicators (points down when collapsed, up when expanded); maintain interaction clarity
- **Current Implementation**: SVG chevron for FAQ dropdown

### 3. Send (Contact Form Submit)
- **ID**: `send`
- **Name**: Send
- **Description**: Icon indicating form submission action
- **Use Cases**: Contact form submit button
- **Visual Approach**: Paper plane or send button metaphor
- **Design Notes**: Must clearly convey "send/submit" action
- **File Path**: `assets/images/interactive/send.svg`
- **Refinement Notes**: Current version may need refinement for clarity; maintain interaction affordance
- **Current Implementation**: SVG paper plane/send icon for contact form

---

## Validation Requirements

### For All Icons

**Recognition Testing** (post-design):
- Test with 10+ users per icon category
- Success: 75%+ correctly identify concept without text label
- Document results in this model

**Coherence Audit**:
- Measure stroke weight variance across all icons
- Target: Maximum variance ≤1.5px
- Document: Min/max stroke weights found

**File Size Optimization**:
- Optimize via SVGO with 2-decimal path precision
- Measure: Size in bytes
- Target: ≤5KB per icon
- Document: Optimized file size

**Clarity Verification**:
- Test at: 60px, 96px, 128px, 192px (representative sizes)
- Success: Icon remains recognizable at all sizes
- Document: Approved test sizes

**Accessibility**:
- Alt text: Descriptive, 4–8 words
- ARIA label: Clear for screen readers
- Test: VoiceOver, NVDA
- Document: A11y test results

---

## Related Documentation

- **Design System Guidelines**: See `design-system.md`
- **Icon Contract (Schema)**: See `contracts/icon-system.schema.json`
- **Quick Start Guide**: See `quickstart.md`
- **Implementation Tasks**: See `tasks.md` (generated by `/speckit.tasks`)
