# Implementation Plan: Redesign Sinra Icons

**Branch**: `001-redesign-icons` | **Date**: 2025-11-18 | **Spec**: [Feature Specification: Redesign Sinra Icons](spec.md)
**Input**: Feature specification from `/specs/001-redesign-icons/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Redesign 15 SVG icons across the Sinra website to improve visual clarity and professional presentation. Icons represent features (7), benefits (6), methodologies (2), and interactive elements (3). The redesign emphasizes clean line work, geometric shapes, consistent stroke weight (~2px), and semantic accuracy. All icons must be recognizable at sizes 60px-300px, work on light/dark backgrounds, and maintain visual coherence while respecting the "Pragmatisme Élégant" brand voice.

## Technical Context

**Language/Version**: SVG 1.1 (vector graphics format), no language runtime required
**Primary Dependencies**: SVGO (SVG optimizer for web), Figma/Adobe XD or similar design tool (external; not in codebase), standard web browser rendering (no JS required)
**Storage**: SVG files in `/assets/images/` directory (static file system)
**Testing**: Manual visual validation via `bundle exec jekyll serve`, cross-browser testing (Chrome, Firefox, Safari), accessibility testing via screen readers
**Target Platform**: Web (static SVGs served via Jekyll), CSS support for light/dark backgrounds, standard SVG rendering across browsers
**Project Type**: Static web (Jekyll-based), design asset deliverable
**Performance Goals**: Each SVG file ≤5KB post-optimization; all icons render instantly (no async loading needed)
**Constraints**: SVG must be compatible with currentColor CSS variable for dynamic color support; must work without JavaScript; <64px canvas as base unit for consistent proportions
**Scale/Scope**: 15 icons total (7 feature + 6 benefit + 2 methodology); no backend logic, pure asset replacement

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Principle I: Pragmatisme Élégant
✅ **PASS** - Icon redesign directly supports "confidence without aggression, professionalism without stiffness." Current imprecise icons undermine this. New clean, geometric design reinforces sophisticated positioning matching Notion/Linear/GitLab aesthetic.

### Principle II: Specification-Driven Development
✅ **PASS** - Feature specification clearly defines WHAT (15 redesigned icons), WHY (improve visual clarity and professional brand perception), and acceptance criteria (75%+ user recognition, visual coherence audit, ≤5KB file sizes).

### Principle III: Multilingual-First Architecture
✅ **PASS** - Icons are language-agnostic design assets. No YAML translation needed. Semantic alt text will be added to all icons supporting both EN and FR accessibility. Icon naming convention remains consistent.

### Principle IV: V-Model + Agile Hybrid
✅ **PASS** - Design approach combines V-Model structure (comprehensive design system, clear specifications) with Agile flexibility (iterative refinement, responsive to user feedback during visual validation).

### Principle V: Quality Through Manual Testing & Browser Validation
✅ **PASS** - No automated test framework needed. Validation via `jekyll serve` with visual inspection, cross-browser compatibility testing (Chrome, Firefox, Safari), and user feedback on icon recognition (independent test with 10+ participants).

### Principle VI: Operational Grounding Over Hype
✅ **PASS** - Icon redesign grounded in specific problem: current icons create confusion and undermine professional perception. Success measured by concrete metrics (75%+ user recognition, consistent stroke weight variance ≤1.5px, file optimization ≤5KB).

### Principle VII: Jekyll Static Site Simplicity
✅ **PASS** - SVG files are pure static assets. No new dependencies, no build tools, no processing pipeline beyond SVGO optimization. Jekyll serves unchanged from `/assets/images/` directory.

### Gates Summary
🟢 **All gates PASS** - Feature aligns with all seven constitutional principles. No violations or exemptions needed.

## Project Structure

### Documentation (this feature)

```text
specs/001-redesign-icons/
├── plan.md                  # This file (/speckit.plan command output)
├── research.md              # Phase 0 output: Design system research, best practices
├── data-model.md            # Phase 1 output: Icon system specification, design tokens
├── design-system.md         # Phase 1 output: Visual guidelines, stroke weight rules, proportions
├── quickstart.md            # Phase 1 output: Quick reference for icon creation/optimization
├── contracts/
│   └── icon-system.schema.json  # Phase 1: JSON schema for icon naming, sizing, metadata
└── tasks.md                 # Phase 2 output (/speckit.tasks command)
```

### Source Code (repository root) - Asset-Based Project

**This is a design asset project, not code-based.**

```text
assets/images/
├── features/                    # 7 feature icons
│   ├── editor.svg              # Rich Text Editor
│   ├── progress.svg            # Progress Tracking
│   ├── collaboration.svg       # Collaboration
│   ├── release.svg             # Release Planning
│   ├── multiapp.svg            # Multi-App Workload
│   ├── workflows.svg           # Custom Workflows
│   └── carryover.svg           # Carry-Over Issues
│
├── benefits/                    # 6 benefit icons
│   ├── visibility.svg          # Visibility
│   ├── capacity.svg            # Capacity
│   ├── quality.svg             # Quality Control
│   ├── release-mgmt.svg        # Release Management
│   ├── deploy-checklist.svg    # Deployment Checklist
│   └── golive.svg              # Go-Live Confidence
│
├── methodology/                 # 2 methodology icons
│   ├── agile.svg               # Agile
│   └── waterfall.svg           # Waterfall
│
└── interactive/                 # 3 interactive icons
    ├── checkmark.svg           # Pricing checkmark
    ├── chevron.svg             # FAQ dropdown
    └── send.svg                # Contact form submit
```

**Structure Decision**: Pure asset-based project. Icon files replace existing SVGs in `/assets/images/`. No code changes to Jekyll templates or configuration. SVG files are language-agnostic; semantic alt text managed in HTML templates and data files (already in place). Optimization via SVGO post-design.

## Complexity Tracking

> **All gates pass - no violations to justify. Section omitted.**

---

## Phase 0: Research & Clarification

### Research Tasks

Based on Technical Context and Spec, the following unknowns have been identified and require research:

**R1: Best Practices for Web Icon Design Systems**
- Research scalability rules (fluid sizing, viewport considerations)
- Best practices for stroke weight consistency across varied conceptual complexity
- Icon naming and organizational conventions

**R2: SVG Optimization for Web Delivery**
- SVGO configuration and best practices for maintaining visual quality while reducing file size
- Comparison of optimization tools (SVGO, Boxy SVG, online optimizers)
- Techniques for achieving ≤5KB file size targets

**R3: Semantic Accuracy Guidelines for Abstract Concept Icons**
- Design patterns for representing abstract concepts (Visibility, Capacity, Quality)
- Visual metaphor research (what visual elements communicate these concepts?)
- Testing methodologies for icon recognition (user validation approach)

**R4: Sinra Brand Visual Identity Alignment**
- Analysis of Notion, Linear, GitLab visual design (reference brands per Constitution)
- Stroke weight and geometric patterns used in modern SaaS design
- Dark/light mode icon rendering approaches

### Research Findings (Consolidated)

#### Decision: SVG Stroke Weight System
**Choice**: 2px primary stroke weight with flexible adjustments per icon for visual clarity
**Rationale**: 2px is standard in modern SaaS design (Notion, Linear), provides adequate visibility at 60px minimum size, scales well to 300px, and maintains "Pragmatisme Élégant" aesthetic
**Alternatives Rejected**: 1.5px (too thin at small sizes), 2.5px (visually heavy on simple glyphs)

#### Decision: Icon Canvas & Proportions
**Choice**: 64px base canvas with optical centering for all icons
**Rationale**: Divisible by common display sizes (32px favicon, 64px standard, 128px double, 192px, 256px), allows clean scaling without blurring, provides sufficient space for detail
**Alternatives Rejected**: 48px (non-standard for many use cases), 100px (complicates favicon generation)

#### Decision: SVG Optimization Approach
**Choice**: SVGO with custom configuration (remove unnecessary groups/defs, optimize path precision to 2 decimal places)
**Rationale**: SVGO is industry standard, maintains quality while reducing file size significantly, no additional tool dependencies
**Alternatives Rejected**: Online optimizers (vendor lock-in, potential security concerns), manual SVG editing (time-consuming, error-prone)

#### Decision: Abstract Concept Visual Metaphors
**Choice**:
- **Visibility**: Eye or window motif (clarity/transparency metaphor)
- **Capacity**: Expanding shapes or container with elements (growth/scope metaphor)
- **Quality**: Checkmark or excellence indicator (validation/confidence metaphor)
**Rationale**: Aligns with common SaaS visual language, user-testable (10+ participant recognition test)
**Alternatives Rejected**: More abstract/artistic approaches (difficult to validate, risk of ambiguity)

#### Decision: Dark/Light Mode Support
**Choice**: Use black stroke with transparent fill, support CSS `currentColor` for dynamic coloring
**Rationale**: Works on all backgrounds without modification, CSS-based theming allows future brand adjustments, no SVG duplication needed
**Alternatives Rejected**: Separate light/dark SVG files (maintenance burden), hardcoded colors (inflexible)

### Unresolved Clarifications: NONE

✅ All technical unknowns resolved through research. No blocking clarifications remain. Phase 0 complete.

---

## Phase 1: Design & Contracts

### 1.1 Icon System Specification (data-model.md)

**Icon Entities**:

```
ICON
├── id: string (e.g., "editor", "visibility", "agile")
├── category: enum ("feature" | "benefit" | "methodology" | "interactive")
├── name: string (display name)
├── description: string (semantic meaning)
├── use_cases: string[] (where used on site)
├── design_notes: string (specific concept to represent)
├── canvas_size: 64px (fixed)
├── stroke_weight: 2px (primary) | variable (per concept)
├── viewbox: "0 0 64 64" (fixed)
├── scaling: 32px-300px (valid range)
├── colors: { stroke: "#000000", fill: "transparent", currentColor: true }
├── a11y: { alt_text: string, aria_label: string }
└── validation: { recognition_target: "75%+", file_size_target: "≤5KB", coherence_variance: "≤1.5px" }
```

**Feature Icons (7 total)**:
| Icon | Concept | Visual Approach |
|------|---------|-----------------|
| editor | Rich Text Editor | Pen/pencil + document metaphor |
| progress | Progress Tracking | Ascending line or completion indicator |
| collaboration | Collaboration | Multiple people/elements working together |
| release | Release Planning | Calendar/milestone or shipping metaphor |
| multiapp | Multi-App Workload | Layered applications or connected modules |
| workflows | Custom Workflows | Process flow or connected nodes |
| carryover | Carry-Over Issues | Arrow/continuation or unfinished item indicator |

**Benefit Icons (6 total)**:
| Icon | Concept | Visual Approach |
|------|---------|-----------------|
| visibility | Visibility | Eye, window, or lens metaphor |
| capacity | Capacity | Container, growth, or expanding scope |
| quality | Quality Control | Checkmark, shield, or excellence indicator |
| release-mgmt | Release Management | Release cycle or versioning metaphor |
| deploy-checklist | Deployment Checklist | Checklist, tasks, or deployment steps |
| golive | Go-Live Confidence | Launch, confidence, or success indicator |

**Methodology Icons (2 total)**:
| Icon | Concept | Visual Approach |
|------|---------|-----------------|
| agile | Agile | Sprint cycles, iterative loops, flexibility |
| waterfall | Waterfall | Sequential flow, cascading stages, phases |

**Interactive Icons (3 total)**:
| Icon | Concept | Visual Approach | Current Use |
|------|---------|-----------------|-------------|
| checkmark | Pricing Inclusion | Clean checkmark with clear affordance | Pricing table |
| chevron | FAQ Expansion | Arrow/chevron indicating direction | FAQ dropdown |
| send | Contact Submit | Paper plane or send button metaphor | Contact form |

### 1.2 Design System Guidelines (design-system.md)

**Visual Language**:
- **Philosophy**: Clean line work + geometric shapes (no curves except where semantically necessary)
- **Stroke Weight**: Primary 2px; may vary ±0.5px per icon for optical balance
- **Fill**: Transparent (stroke only) as default; shapes may have geometric fills where necessary for clarity
- **Color**: Black (#000000) stroke, transparent background; CSS `currentColor` support for theming

**Proportions & Scaling**:
- Base canvas: 64×64px (viewBox="0 0 64 64")
- Optical margin: ~8px from edge (content in 48×48px region)
- Scaling formula: Valid from 32px (32×32) to 300px (300×300) without loss of clarity
- Test sizes: 60px, 96px, 128px, 192px (representative viewports)

**Stroke Weight Rules**:
- Primary elements: 2px stroke
- Secondary details: 1.5px–2.5px (max variance 1.5px)
- Avoid: hairline strokes (<1px), overly heavy strokes (>2.5px)
- Measurement: Variance audit across all icons should be ≤1.5px between min/max

**Coherence Standards**:
- Consistency in corner radius (e.g., all rounded corners use same r value)
- Alignment of geometric baselines (horizontal/vertical alignment grid)
- Visual weight balance (similar concepts feel similar in prominence)
- Negative space usage (consistent breathing room)

**Export & Optimization**:
- Format: SVG 1.1 (compatible with all modern browsers)
- viewBox: Must be present and set to "0 0 64 64"
- SVGO optimization: Custom config to remove unnecessary elements while preserving path precision
- File size target: ≤5KB per icon (measured post-optimization)
- Decimal precision: 2 decimal places for path coordinates (e.g., "10.5" not "10.49999")

### 1.3 Icon System Contract (contracts/icon-system.schema.json)

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Sinra Icon System Schema",
  "type": "object",
  "properties": {
    "icons": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["id", "name", "category", "file_path", "viewbox", "stroke_width"],
        "properties": {
          "id": { "type": "string", "pattern": "^[a-z-]+$" },
          "name": { "type": "string" },
          "category": { "enum": ["feature", "benefit", "methodology", "interactive"] },
          "description": { "type": "string" },
          "file_path": { "type": "string", "pattern": "^assets/images/[a-z-]+/[a-z-]+\\.svg$" },
          "viewbox": { "type": "string", "pattern": "^0 0 64 64$" },
          "stroke_width": { "type": "number", "minimum": 1.5, "maximum": 2.5 },
          "min_display_size": { "type": "number", "const": 32 },
          "max_display_size": { "type": "number", "const": 300 },
          "file_size_bytes": { "type": "number", "maximum": 5000 },
          "a11y": {
            "type": "object",
            "required": ["alt_text"],
            "properties": {
              "alt_text": { "type": "string" },
              "aria_label": { "type": "string" }
            }
          },
          "validation": {
            "type": "object",
            "properties": {
              "recognition_tested": { "type": "boolean" },
              "recognition_score": { "type": "number", "minimum": 0.75, "maximum": 1.0 },
              "coherence_variance": { "type": "number", "maximum": 1.5 },
              "optimized": { "type": "boolean" }
            }
          }
        }
      }
    }
  }
}
```

### 1.4 Quick Start Guide (quickstart.md)

**For Icon Creation**:
1. Use Figma/Adobe XD with 64px artboard preset
2. Set stroke to 2px, no fill (transparent background)
3. Ensure all paths are centered within the 64px canvas
4. Name layers descriptively (e.g., "outline", "detail", "highlight")
5. Export as SVG (not as component)

**For SVG Optimization**:
```bash
# Using SVGO (install via npm if needed)
npx svgo icon-name.svg --config .svgo.config.js

# Verify file size (should be ≤5KB)
ls -lh icon-name.svg
```

**For Accessibility**:
- Add alt text to `<img>` tags: `<img src="icon.svg" alt="Feature name">`
- For inline SVGs, use `<svg aria-label="Feature name">`
- Test with screen reader (VoiceOver, NVDA)

**For Testing Recognition**:
- Show icon without text label to test users
- Ask: "What feature/benefit does this represent?"
- Target: 75%+ of 10+ users identify correctly
- Document results in validation section

### 1.5 Re-Check Constitution Post-Design

🟢 **PASS** - Design remains aligned with all constitutional principles:
- Pragmatisme Élégant: Clean geometric design reflects sophisticated SaaS aesthetic
- Specification-Driven: Design system fully specified with measurable criteria
- Multilingual-First: Icons are language-neutral; alt text framework supports EN/FR
- Jekyll Simplicity: Pure SVG assets, no new dependencies or build steps
- Quality & Testing: Manual visual validation + user recognition testing planned
- Operational Grounding: Design decisions documented with rationale and alternatives

---

## Phase 1 Summary & Deliverables

### Phase 1 Status: ✅ COMPLETE

**All Phase 1 design artifacts have been generated and documented.**

### Deliverables Generated

1. **research.md** ✅
   - R1: Best practices for web icon design systems
   - R2: Stroke weight consistency guidelines
   - R3: Icon naming & organization conventions
   - R4: SVG optimization techniques (SVGO)
   - R5: Semantic accuracy for abstract concepts
   - R6: Dark/light mode rendering approaches
   - R7: Sinra brand visual identity alignment
   - Status: All 7 research areas resolved

2. **data-model.md** ✅
   - Icon entity definition with all properties
   - 15 icon specifications (7 feature + 6 benefit + 2 methodology + 3 interactive)
   - Visual approaches and design notes for each icon
   - Validation requirements and testing criteria
   - Related documentation cross-references

3. **design-system.md** ✅
   - Visual language & philosophy aligned with "Pragmatisme Élégant"
   - Canvas & proportions (64px base, 32–300px scaling range)
   - Stroke weight system (2px primary, ±0.5px flexible, ≤1.5px variance)
   - Color & rendering specifications (black stroke, transparent fill, currentColor support)
   - Export & optimization standards (SVGO with 2-decimal precision, ≤5KB target)
   - Accessibility standards (alt text, ARIA labels, screen reader testing)
   - Dark/light mode compatibility guidelines
   - Quality checklist for pre-export, post-optimization, and testing

4. **quickstart.md** ✅
   - Step-by-step icon creation workflow (8 steps)
   - Design setup instructions (Figma/Adobe XD)
   - SVG export guidelines with tool-specific settings
   - SVGO optimization with configuration file
   - Visual testing procedures (multiple sizes, browsers, backgrounds)
   - Accessibility setup (alt text, ARIA labels, screen reader testing)
   - Documentation updates and Git workflow
   - Troubleshooting guide for common issues
   - Batch optimization commands
   - Icon naming conventions

5. **contracts/icon-system.schema.json** ✅
   - JSON Schema specification for icon system
   - 15 required icon properties (metadata, design, scaling, validation)
   - Enum constraints (categories, colors, browser support)
   - File path patterns enforced at schema level
   - Validation rules (recognition score ≥0.75, file size ≤5KB)
   - Complete example icon with all fields
   - Design system constants documented
   - Success criteria formalized

### Constitution Verification: ✅ PASS

All seven constitutional principles verified post-design:
1. ✅ Pragmatisme Élégant: Design is elegant yet pragmatic
2. ✅ Specification-Driven: Comprehensive specs with clear acceptance criteria
3. ✅ Multilingual-First: Icons are language-agnostic; alt text supports EN/FR
4. ✅ V-Model + Agile: Design combines structure (V-Model) with flexibility (Agile)
5. ✅ Quality Through Testing: Manual validation + user recognition testing defined
6. ✅ Operational Grounding: Specific metrics, not aspirational language
7. ✅ Jekyll Simplicity: Pure static assets, no new dependencies

### Next Steps: Phase 2

**Phase 2 (not in this command)** will be executed via `/speckit.tasks`:
- Generate `tasks.md` with actionable implementation steps
- Break down icon creation into:
  - Design phase (Figma/Adobe XD)
  - Optimization phase (SVGO)
  - Testing phase (visual + a11y)
  - Deployment phase (Git workflow)
- Assign ownership and dependencies
- Estimated timeline per icon (~20–30 min design + testing)

---

## Branch & Deployment Info

**Branch**: `001-redesign-icons`
**Spec**: `/specs/001-redesign-icons/spec.md`
**Plan**: `/specs/001-redesign-icons/plan.md` (this file)

**Implementation Plan Location**: All artifacts in `/specs/001-redesign-icons/`

**Production Deployment**:
1. Design 15 icons per design system guidelines
2. Optimize via SVGO (≤5KB per icon)
3. Test at 32px, 60px, 96px, 128px, 192px sizes
4. User recognition validation (10+ users, 75%+ target)
5. Screen reader accessibility testing
6. Commit to `001-redesign-icons` branch
7. PR review + merge to `main`
8. Jekyll rebuild serves updated icons automatically

**No Code Changes Required**: Icons are pure static assets; all templates already reference by file path.
