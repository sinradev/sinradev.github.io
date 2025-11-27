# Implementation Plan: Black Friday 50% Discount Promotion

**Branch**: `002-blackfriday-promo` | **Date**: 2025-11-27 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/002-blackfriday-promo/spec.md`

## Summary

Implement a time-limited Black Friday promotion offering 50% discount on annual pricing plans through two complementary visual mechanisms: (1) a discount badge on the annual pricing card with strikethrough original price and bold discounted price, and (2) a sticky notification banner at the top of every site page with a CTA to visit pricing. The implementation leverages Jekyll's existing template structure and CSS, requiring only markup updates to pricing data and a minimal JavaScript snippet for banner dismissal behavior.

## Technical Context

**Language/Version**: Ruby 3.4.5 (Jekyll 4.3.4 static site generator)
**Primary Dependencies**: jekyll-polyglot (multilingual support), Liquid templating
**Storage**: N/A (static site; promotion data stored in YAML)
**Testing**: Manual via `jekyll serve` with cross-browser visual inspection
**Target Platform**: Web (all browsers; mobile-responsive)
**Project Type**: Static Jekyll site with HTML/CSS/vanilla JS
**Performance Goals**: Page load time <2 seconds; banner appears within 1 second
**Constraints**: No new external dependencies; minimal JS footprint; banner must not interfere with header navigation
**Scale/Scope**: Two main components (badge + banner) affecting pricing page and site layout includes

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

✓ **Pragmatisme Élégant**: Promotion messaging is solution-focused ("50% off annual plans") not problem-focused. Design integrates elegantly without aggression.

✓ **Specification-Driven Development**: Feature spec clearly defines WHAT (badge + banner), WHY (drive conversions), and WHO (visitors/purchasers). Acceptance criteria detailed.

✓ **Multilingual-First Architecture**: Promotion messaging must be translated to French in `_data/fr/` and `_data/en/`. Liquid templating via `{{ site.data[page.lang].promotion.* }}`.

✓ **V-Model + Agile Hybrid**: Feature aligns with marketing discipline (V-Model planning) + responsive execution. No Sinra terminology conflicts; feature is marketing-focused, not product-feature development.

✓ **Quality Through Manual Testing**: Validation via `jekyll serve`, cross-browser testing (Chrome, Firefox, Safari), multilingual consistency (EN/FR), responsive design check.

✓ **Operational Grounding**: 50% discount is concrete, measurable. Success criteria based on conversion rates and CTR—not aspirational.

✓ **Jekyll Static Site Simplicity**: Minimal implementation: YAML data updates + markup changes + vanilla JS for banner dismissal. No new gems, no build tools, no test frameworks needed.

**All Constitution gates PASS.** Feature is compliant and ready for Phase 0.

## Project Structure

### Documentation (this feature)

```text
specs/002-blackfriday-promo/
├── spec.md              # Feature specification
├── checklists/
│   └── requirements.md  # Quality validation checklist
├── plan.md              # This file (plan output)
├── research.md          # Phase 0 output (no unknowns, will be minimal)
├── data-model.md        # Phase 1 output (YAML data structure)
├── quickstart.md        # Phase 1 output (implementation guide)
├── contracts/           # Phase 1 output (not applicable to static site)
└── tasks.md             # Phase 2 output (/speckit.tasks command)
```

### Source Code (repository root)

This is a static Jekyll site feature with no application-specific source directories. Changes affect:

```text
_data/
├── en/
│   ├── strings.yml         # [MODIFIED] Add promotion messaging keys
│   └── pricing.yml         # [MODIFIED] Add pricing discount data
└── fr/
    ├── strings.yml         # [MODIFIED] Add French promotion messaging
    └── pricing.yml         # [MODIFIED] Add French pricing data

_includes/
├── header.html             # [MODIFIED] Add sticky banner component
└── pricing-badge.html      # [NEW] Reusable badge component

assets/
├── css/
│   └── theme.css           # [MODIFIED] Add banner styling
└── js/
    └── script.js           # [MODIFIED] Add banner dismissal behavior

_layouts/
└── default.html            # [MODIFIED] Include sticky banner globally

_pages/
└── pricing.en.html, pricing.fr.html  # [MODIFIED] Include badge on annual card
```

**Structure Decision**: Static Jekyll site with YAML data-driven content. No new directories created. All changes are localized to existing template and data structure. Multilingual consistency maintained via parallel EN/FR YAML files.

## Complexity Tracking

No Constitution violations. Feature is minimal, well-scoped, and fully compliant with all 7 core principles.
