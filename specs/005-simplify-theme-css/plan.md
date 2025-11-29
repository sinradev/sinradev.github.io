# Implementation Plan: Simplify theme.css Using DaisyUI

**Status:** Planning Phase
**Feature ID:** 005-simplify-theme-css
**Created:** 2025-11-29
**Branch:** 005-simplify-theme-css

---

## Executive Summary

This plan outlines a systematic refactoring of `theme.css` to prioritize DaisyUI components and eliminate duplicate CSS rules. The approach uses a hybrid methodology: maximizing DaisyUI component usage in HTML while maintaining selective CSS overrides for visual consistency with the current design.

**Key Outcomes:**
- Reduce `theme.css` file size by 40%+
- Achieve 95%+ DaisyUI component coverage
- Limit custom CSS to <50 rules (from current baseline)
- Maintain visual consistency across all pages
- Ensure WCAG AA accessibility compliance

---

## Constitution Alignment Check

**Project Constitution Compliance:**
- ✅ **Prioritize DaisyUI components in HTML** – Core principle of this refactoring
- ✅ **Use DaisyUI Dim theme as foundation** – Dim theme is primary color source
- ✅ **Minimize custom CSS in theme.css** – Goal is reduce custom rules to <50
- ✅ **Plain CSS only (no SCSS)** – Only editing/simplifying existing CSS
- ✅ **Reference DaisyUI Dim theme variables** – All colors from dim theme
- ✅ **Maintain multilingual support (EN/FR)** – No HTML structure changes, CSS-only

**Alignment Status:** ✅ APPROVED
No constitution violations. Feature directly implements core styling guidelines.

---

## Technical Context

### Current State Analysis

**Baseline Metrics (Pre-Refactoring):**
- Current `theme.css` size: ~X KB (to be measured)
- Current custom CSS rule count: ~Y rules (to be measured)
- DaisyUI component coverage: ~Z% (estimated from audit)

**Key Files Involved:**
- `assets/css/theme.css` – Primary file to simplify
- `assets/css/layout.css` – Layout utilities (review for Tailwind migration)
- `assets/css/blog.css` – Blog-specific styles (review for DaisyUI components)
- `assets/css/plan.css` – Pricing/plan styles (review for DaisyUI components)
- `assets/css/contact.css` – Contact form styles (review for DaisyUI components)
- `_includes/*.html` – All HTML files using component classes
- `_pages/*.html` – Page templates (review for component class usage)
- `index.html` – Homepage (review for component class usage)

### Dependencies

**External:**
- DaisyUI (already integrated)
- Tailwind CSS (underlying DaisyUI)
- Jekyll 4.3.4 (static site generator)

**Internal:**
- Current HTML structure across all pages
- Existing color definitions in theme.css
- Current design system (spacing, typography, layout)

### Design Decisions

**Decision 1: DaisyUI/Design Conflict Resolution**
- **Choice:** Hybrid approach – Use DaisyUI defaults where they match current design; override selectively for visual consistency
- **Rationale:** Balances CSS reduction with maintaining current visual investment
- **Trade-off:** Some custom overrides acceptable to preserve current appearance while minimizing CSS duplication

**Decision 2: Component Migration Strategy**
- **Choice:** Audit-first approach – Identify all components before refactoring
- **Rationale:** Ensures comprehensive coverage and prevents missed opportunities for simplification
- **Output:** Component audit document guiding systematic updates

**Decision 3: CSS Override Documentation**
- **Choice:** Label all selective overrides with comments explaining rationale
- **Rationale:** Future developers can understand why overrides exist and when they can be revisited
- **Format:** `/* OVERRIDE: [component] - [reason] */`

---

## Implementation Phases

### Phase 0: Audit & Research

**Objective:** Document current state and identify optimization opportunities

**Tasks:**

1. **Measure Current Baseline**
   - Measure `theme.css` file size (bytes and lines)
   - Count current CSS rules by category
   - Document component usage patterns in HTML
   - Identify duplicate rules between CSS files

2. **Component Audit**
   - Map all buttons to DaisyUI `btn` variants
   - Map all cards to DaisyUI `card` component
   - Map all badges to DaisyUI `badge` variants
   - Map all forms to DaisyUI form components
   - Map all other components (tables, modals, etc.)
   - Identify custom components with no DaisyUI equivalent

3. **Color Audit**
   - Document all colors currently defined in theme.css
   - Identify which match DaisyUI Dim theme defaults
   - Identify which require custom overrides
   - Flag hardcoded colors outside dim theme variables

4. **Typography & Spacing Audit**
   - Document font stack definitions
   - Document heading styles (h1-h6)
   - Document margin/padding utility classes
   - Identify which can be replaced with Tailwind utilities

**Output:** `research.md` with detailed audit findings

---

### Phase 1: Design & Refactoring Strategy

**Objective:** Create detailed refactoring plan with component-by-component breakdown

**Deliverables:**

1. **data-model.md** – CSS Structure
   - Current CSS architecture (sections, groupings)
   - Proposed simplified structure
   - Component groupings for DaisyUI
   - Override rules documentation structure

2. **contracts/daisyui-components.md** – Component Mapping
   - Table: Current HTML → DaisyUI component classes
   - Breakpoint conventions (sm, md, lg, xl)
   - Color class mappings (primary, secondary, accent, etc.)
   - State classes (hover, active, disabled, focus)

3. **contracts/css-overrides.md** – Override Strategy
   - Rules for when overrides are acceptable
   - Format for documenting overrides
   - Testing requirements for overrides
   - Rationale documentation template

4. **quickstart.md** – Refactoring Quick Reference
   - Step-by-step refactoring checklist
   - Before/after examples
   - DaisyUI component reference with dim theme colors
   - Common patterns and how to implement them

---

### Phase 2: Systematic Refactoring

**Objective:** Execute CSS simplification following the documented strategy

**Approach:**

1. **CSS Simplification (theme.css)**
   - Remove all duplicate utility classes (margin, padding, display, flex, grid)
   - Remove color definitions that match DaisyUI Dim theme exactly
   - Keep only brand-specific color overrides
   - Keep only typography rules for custom fonts
   - Document all remaining rules with purpose comments
   - Target: Reduce file size by 40%+, limit to <50 custom rules

2. **Layout CSS Audit (layout.css)**
   - Replace layout utilities with Tailwind equivalents (flex, grid, gap)
   - Remove redundant spacing rules
   - Document any necessary overrides
   - Verify responsive breakpoints align with DaisyUI

3. **Page-Specific CSS Review**
   - Blog styles: Ensure markdown elements use DaisyUI typography
   - Pricing styles: Use DaisyUI table component and layout
   - Contact styles: Use DaisyUI form components
   - Remove any duplicate component styling

4. **HTML Component Class Audit**
   - Scan all HTML files for component usage
   - Add missing DaisyUI classes where components lack them
   - Remove custom class-based styling where DaisyUI defaults apply
   - Update class naming to follow DaisyUI conventions

**Testing During Refactoring:**
- Visual regression testing at each major component update
- Browser testing (Chrome, Firefox, Safari)
- Device testing (mobile, tablet, desktop)
- Accessibility testing (WCAG AA)

---

### Phase 3: Validation & Optimization

**Objective:** Verify all requirements met and optimize final output

**Tasks:**

1. **Visual Regression Testing**
   - Capture baseline screenshots (before refactoring complete)
   - Compare against refactored version
   - Document any visual differences and justify
   - Verify no unintended changes

2. **Component Testing**
   - Test all button states (normal, hover, active, disabled)
   - Test card styling (borders, shadows, backgrounds)
   - Test form inputs (focus, error, placeholder)
   - Test badges, labels, tables, modals (if applicable)
   - Verify responsive behavior

3. **Browser & Device Testing**
   - Chrome, Firefox, Safari (latest versions)
   - Mobile (iOS Safari, Android Chrome)
   - Tablet (768px-1024px)
   - Desktop (1440px+)

4. **Accessibility Verification**
   - Color contrast (WCAG AA minimum)
   - Keyboard navigation (Tab, Enter, Esc)
   - Screen reader testing (focus announcements)
   - Focus state visibility

5. **Metrics Validation**
   - Verify 40%+ CSS file size reduction
   - Verify 95%+ DaisyUI component coverage
   - Verify <50 custom CSS rules
   - Verify no increase in page load time

6. **Performance Optimization**
   - Minify CSS (if applicable)
   - Check for unused CSS rules
   - Verify CSS loading order
   - Test page load performance

---

## Refactoring Workflow

### High-Level Steps

1. **Create baseline snapshots** (visual and metrics)
2. **Audit all CSS and HTML** (map current state)
3. **Identify all color overrides needed** (design vs. DaisyUI mismatch)
4. **Simplify theme.css** (remove duplicates, keep overrides only)
5. **Update HTML with DaisyUI classes** (where missing)
6. **Verify with visual regression** (no breaking changes)
7. **Test accessibility** (WCAG AA compliance)
8. **Measure final metrics** (validate 40% reduction, <50 rules)

### File Update Order (Recommended)

1. `assets/css/theme.css` – Main simplification
2. `assets/css/layout.css` – Remove duplicate utilities
3. `assets/css/blog.css` – Update for DaisyUI typography
4. `assets/css/plan.css` – Update for DaisyUI tables/layout
5. `assets/css/contact.css` – Update for DaisyUI forms
6. `_includes/*.html` – Add missing component classes
7. `_pages/*.html` – Add missing component classes
8. `index.html` – Add missing component classes

---

## Key Assumptions

1. **DaisyUI is fully integrated** – All components are available via CSS classes
2. **Dim theme is configured** – Colors in DaisyUI match or can override dim theme
3. **Hybrid approach is acceptable** – Visual consistency outweighs 100% CSS removal
4. **HTML structure won't change** – Only CSS classes being added/modified
5. **Current design is visually acceptable** – No redesign, only CSS simplification
6. **Browser support is current** – No legacy browser support required beyond DaisyUI baseline
7. **Jekyll compilation works** – CSS pipeline handles the simplified CSS correctly

---

## Risk Mitigation

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Visual regression | High | Visual regression testing before/after; commit-by-commit testing |
| Missing components | Medium | Comprehensive audit phase identifies all components |
| Color mismatches | Medium | Document all overrides; compare screenshots carefully |
| Performance degradation | Low | Monitor page load metrics; CSS is smaller so should improve |
| Accessibility regression | Medium | WCAG AA testing; focus state verification; contrast testing |
| Over-simplification | Medium | Keep override documentation; future-proof decisions |

---

## Success Criteria

### Technical Metrics (Measurable)
- ✅ CSS file size reduced by 40%+ (from baseline)
- ✅ Custom CSS rules limited to <50 (from baseline)
- ✅ 95%+ of UI elements use DaisyUI component classes
- ✅ All pages pass visual regression test
- ✅ Page load time maintained or improved
- ✅ No console CSS warnings

### Quality Metrics (Verifiable)
- ✅ WCAG AA accessibility compliance maintained
- ✅ All browser tests pass (Chrome, Firefox, Safari)
- ✅ All device tests pass (mobile, tablet, desktop)
- ✅ All component states tested (hover, active, disabled, focus)

### Code Quality (Observable)
- ✅ All CSS rules documented with purpose comments
- ✅ Overrides clearly labeled with rationale
- ✅ CSS organized and easy to navigate
- ✅ No duplicate rules across CSS files

---

## Related Artifacts

- **Specification:** `specs/005-simplify-theme-css/spec.md`
- **Constitution:** `.specify/memory/constitution.md`
- **Research:** `specs/005-simplify-theme-css/research.md` (to be generated)
- **Data Model:** `specs/005-simplify-theme-css/data-model.md` (Phase 1)
- **Contracts:** `specs/005-simplify-theme-css/contracts/` (Phase 1)
- **Quick Start:** `specs/005-simplify-theme-css/quickstart.md` (Phase 1)

---

## Next Steps

1. **Phase 0 (Audit):** Run research and component audit
2. **Phase 1 (Design):** Generate detailed refactoring strategy documents
3. **Phase 2 (Implementation):** Execute CSS simplification systematically
4. **Phase 3 (Validation):** Comprehensive testing and metrics verification

Proceed to `/speckit.tasks` to generate actionable task breakdown.
