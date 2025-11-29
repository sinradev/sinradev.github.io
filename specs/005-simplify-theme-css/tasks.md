# Tasks: Simplify theme.css Using DaisyUI

**Feature ID:** 005-simplify-theme-css
**Created:** 2025-11-29
**Status:** Ready for Implementation

---

## Overview

This tasks document breaks down the CSS simplification refactoring into actionable, independently testable units organized by implementation phase. The work prioritizes maximizing DaisyUI component usage while minimizing custom CSS through a hybrid approach that respects the current design.

**Total Tasks:** 38
**Estimated Phases:** 4 (Setup, Audit, Refactoring, Validation)
**Critical Path:** Phase 1 → Phase 2 → Phase 3 (all others)

---

## Phase 1: Setup & Baseline Establishment

**Objective:** Prepare for refactoring and establish baseline metrics

**Phase Goals:**
- Document current CSS state
- Create visual baseline
- Set up testing infrastructure
- Establish metrics for success validation

### Setup Tasks

- [ ] T001 Create baseline CSS metrics document at `specs/005-simplify-theme-css/audit/baseline-metrics.md` (measure theme.css size in bytes and lines, count current CSS rules by category)
- [ ] T002 Capture visual baseline screenshots at `specs/005-simplify-theme-css/audit/baseline-screenshots/` (screenshot all pages: homepage, about, pricing, blog, contact at 1440px, 768px, and 320px)
- [ ] T003 Create CSS audit template at `specs/005-simplify-theme-css/audit/css-audit.md` (document structure: current rules, duplicates, candidates for removal)
- [ ] T004 Create component audit template at `specs/005-simplify-theme-css/audit/component-audit.md` (document all HTML components: buttons, cards, badges, forms, tables, modals with current classes)
- [ ] T005 Create color audit template at `specs/005-simplify-theme-css/audit/color-audit.md` (document all colors in theme.css, map to DaisyUI dim theme, identify overrides needed)
- [ ] T006 Create HTML class usage script at `specs/005-simplify-theme-css/audit/scan-html-classes.sh` (bash script to scan all HTML files for component classes and generate report)
- [ ] T007 [P] Run Jekyll build and verify clean output with `bundle exec jekyll build` (ensure current state builds successfully, no warnings)
- [ ] T008 [P] Test current site in browsers at `bundle exec jekyll serve` (manual verification: Chrome, Firefox, Safari at baseline)

---

## Phase 2: Audit & Analysis

**Objective:** Comprehensive analysis of current CSS and component usage

**Phase Goals:**
- Identify all CSS duplication
- Map all components to DaisyUI equivalents
- Identify color overrides needed
- Document override rationale

### CSS Analysis Tasks

- [ ] T009 Audit theme.css for duplicate utilities at `assets/css/theme.css` (document margin, padding, display, flex, grid rules that duplicate Tailwind; list line numbers)
- [ ] T010 [P] Audit layout.css for Tailwind equivalents at `assets/css/layout.css` (identify layout utilities that should be Tailwind classes instead)
- [ ] T011 [P] Audit blog.css for typography at `assets/css/blog.css` (identify typography rules; check if markdown elements can use Tailwind text utilities)
- [ ] T012 [P] Audit plan.css for table/layout styles at `assets/css/plan.css` (identify table and layout rules; check DaisyUI table component compatibility)
- [ ] T013 [P] Audit contact.css for form styles at `assets/css/contact.css` (identify form-related rules; check DaisyUI form component compatibility)

### Component Audit Tasks

- [ ] T014 Map all buttons to DaisyUI variants at `specs/005-simplify-theme-css/audit/component-audit.md` (document current button classes, map to `btn`, `btn-primary`, `btn-secondary`, etc.)
- [ ] T015 [P] Map all cards to DaisyUI card component at `specs/005-simplify-theme-css/audit/component-audit.md` (document current card classes, map to `card`, `card-body`, etc.)
- [ ] T016 [P] Map all badges to DaisyUI badge component at `specs/005-simplify-theme-css/audit/component-audit.md` (document current badge classes, map to `badge`, `badge-primary`, etc.)
- [ ] T017 [P] Map all forms to DaisyUI form components at `specs/005-simplify-theme-css/audit/component-audit.md` (document current form classes, map to `form-control`, `input`, `textarea`, etc.)
- [ ] T018 [P] Map tables/modals to DaisyUI if present at `specs/005-simplify-theme-css/audit/component-audit.md` (document table and modal classes if used; map to DaisyUI equivalents)

### Color Override Analysis Tasks

- [ ] T019 Extract all colors from theme.css at `specs/005-simplify-theme-css/audit/color-audit.md` (list every color definition, note if hardcoded or variable)
- [ ] T020 Compare colors to DaisyUI Dim theme at `specs/005-simplify-theme-css/audit/color-audit.md` (check which colors match Dim theme, which require custom overrides)
- [ ] T021 Document override rationale at `specs/005-simplify-theme-css/audit/color-audit.md` (for each override, explain why DaisyUI default doesn't work; note visual impact)
- [ ] T022 Identify color duplicates across CSS files at `specs/005-simplify-theme-css/audit/color-audit.md` (find color definitions duplicated in layout.css, blog.css, plan.css, contact.css)

### HTML Component Usage Tasks

- [ ] T023 Run HTML class scanning script at `specs/005-simplify-theme-css/audit/html-usage.txt` (execute bash script to scan all HTML files; generate report of component class usage)
- [ ] T024 Document component usage patterns at `specs/005-simplify-theme-css/audit/component-audit.md` (from scan results, document which pages use which components; identify missing component classes)

---

## Phase 3: Refactoring Strategy & Design

**Objective:** Document detailed refactoring approach before implementation

**Phase Goals:**
- Create component mapping guide
- Document override rules
- Define refactoring order
- Create quick reference for developers

### Strategy Documentation Tasks

- [ ] T025 Create component mapping guide at `specs/005-simplify-theme-css/contracts/daisyui-components.md` (table: current HTML → DaisyUI classes, include breakpoint conventions, color classes, state classes)
- [ ] T026 Document override rules at `specs/005-simplify-theme-css/contracts/css-overrides.md` (rules for acceptable overrides, format for documenting, rationale template, testing requirements)
- [ ] T027 Create refactoring quick reference at `specs/005-simplify-theme-css/quickstart.md` (step-by-step checklist, before/after examples, DaisyUI component reference, common patterns)
- [ ] T028 Create data model for CSS structure at `specs/005-simplify-theme-css/data-model.md` (document CSS architecture: sections, groupings, proposed simplified structure, component groupings)

---

## Phase 4: CSS Simplification

**Objective:** Execute CSS refactoring following documented strategy

**Phase Goals:**
- Reduce theme.css by 40%+
- Simplify layout.css
- Update page-specific CSS
- Prepare HTML for component class updates

### Theme.css Refactoring Tasks

- [ ] T029 Backup current theme.css at `assets/css/theme.css.backup` (preserve original for comparison)
- [ ] T030 Remove duplicate utility classes from theme.css at `assets/css/theme.css` (remove margin, padding, display, flex, grid utilities already in Tailwind; document each removal)
- [ ] T031 Remove color definitions matching DaisyUI at `assets/css/theme.css` (remove colors that exactly match Dim theme; keep only custom overrides)
- [ ] T032 [P] Simplify layout.css for Tailwind at `assets/css/layout.css` (replace layout utilities with Tailwind classes; remove redundant spacing rules)
- [ ] T033 [P] Update blog.css typography rules at `assets/css/blog.css` (ensure markdown elements inherit Tailwind text utilities; remove redundant typography)
- [ ] T034 [P] Update plan.css for DaisyUI tables at `assets/css/plan.css` (apply DaisyUI table component; remove custom table styling)
- [ ] T035 [P] Update contact.css for DaisyUI forms at `assets/css/contact.css` (apply DaisyUI form components; remove custom form styling)
- [ ] T036 Document all remaining custom CSS rules at `assets/css/theme.css` (add comments explaining purpose of each remaining rule; note which are overrides vs. brand-specific)

### HTML Component Updates

- [ ] T037 Add missing DaisyUI component classes to HTML files at `_includes/` and `_pages/` and `index.html` (update buttons to use `btn` classes, cards to use `card` classes, forms to use `form-control` classes, etc.; ensure all components have proper DaisyUI classes)

### Testing & Validation During Refactoring

- [ ] T038 Test Jekyll build after each major CSS file change with `bundle exec jekyll build` (verify no CSS syntax errors, no warnings after each phase)

---

## Phase 5: Visual Regression & Component Testing

**Objective:** Verify refactoring didn't break visual design

**Phase Goals:**
- Compare visual appearance before/after
- Test all component states
- Verify responsive behavior
- Document any visual differences

### Visual Regression Testing

- [ ] T039 Capture refactored screenshots at `specs/005-simplify-theme-css/audit/refactored-screenshots/` (screenshot all pages at 1440px, 768px, 320px after refactoring)
- [ ] T040 Compare screenshots visually at `specs/005-simplify-theme-css/audit/visual-regression-report.md` (document comparison of baseline vs. refactored; note any unintended changes; justify if changes are acceptable)
- [ ] T041 Test button states at `specs/005-simplify-theme-css/audit/component-testing.md` (verify buttons: normal, hover, active, disabled, focus states render correctly)
- [ ] T042 [P] Test card styling at `specs/005-simplify-theme-css/audit/component-testing.md` (verify cards: border, shadow, background, hover effects match design)
- [ ] T043 [P] Test form inputs at `specs/005-simplify-theme-css/audit/component-testing.md` (verify inputs: focus state, error state, placeholder text appear correctly)
- [ ] T044 [P] Test badges and labels at `specs/005-simplify-theme-css/audit/component-testing.md` (verify badge appearance and colors)
- [ ] T045 [P] Test responsive behavior at `specs/005-simplify-theme-css/audit/component-testing.md` (verify responsive layout at 320px, 768px, 1440px breakpoints)

### Browser & Device Testing

- [ ] T046 Test on Chrome at `bundle exec jekyll serve` (manual testing: Chrome desktop, mobile, tablet; note any visual issues)
- [ ] T047 [P] Test on Firefox at `bundle exec jekyll serve` (manual testing: Firefox desktop; note any visual issues)
- [ ] T048 [P] Test on Safari at `bundle exec jekyll serve` (manual testing: Safari desktop and iOS mobile; note any visual issues)
- [ ] T049 Test responsive resize at `bundle exec jekyll serve` (test device rotation and window resize; verify layouts adapt correctly)

### Accessibility Testing

- [ ] T050 Verify color contrast at `specs/005-simplify-theme-css/audit/accessibility-report.md` (check WCAG AA contrast ratios for all text on backgrounds; document any issues)
- [ ] T051 [P] Test keyboard navigation at `specs/005-simplify-theme-css/audit/accessibility-report.md` (Tab through all interactive elements; verify focus visible and logical order)
- [ ] T052 [P] Test screen reader at `specs/005-simplify-theme-css/audit/accessibility-report.md` (test with VoiceOver or NVDA; verify focus announcements and labels correct)
- [ ] T053 Verify focus state visibility at `specs/005-simplify-theme-css/audit/accessibility-report.md` (confirm focus indicators visible on all interactive elements)

---

## Phase 6: Metrics Validation & Optimization

**Objective:** Validate success criteria and optimize final result

**Phase Goals:**
- Measure CSS reduction achieved
- Verify component coverage target
- Confirm custom rule limit met
- Optimize performance

### Metrics Validation Tasks

- [ ] T054 Measure final theme.css size at `specs/005-simplify-theme-css/audit/final-metrics.md` (compare bytes and lines to baseline; calculate % reduction; verify ≥40%)
- [ ] T055 Count final custom CSS rules at `specs/005-simplify-theme-css/audit/final-metrics.md` (count remaining custom rules; verify <50; list each with purpose)
- [ ] T056 Calculate DaisyUI component coverage at `specs/005-simplify-theme-css/audit/final-metrics.md` (from HTML audit, calculate % of UI elements using DaisyUI classes; verify ≥95%)
- [ ] T057 Measure page load time at `specs/005-simplify-theme-css/audit/final-metrics.md` (test with Chrome DevTools; compare to baseline; verify no regression)

### Performance Optimization Tasks

- [ ] T058 [P] Check for unused CSS rules at `specs/005-simplify-theme-css/audit/unused-css-report.md` (use PurgeCSS or manual analysis; document any unused rules found)
- [ ] T059 [P] Verify CSS syntax validity at `specs/005-simplify-theme-css/audit/css-validation.md` (run CSS validator; fix any syntax errors)
- [ ] T060 [P] Check CSS loading order at `assets/` (verify CSS files load in correct order; no cascading issues)

---

## Phase 7: Documentation & Completion

**Objective:** Document refactoring results and enable future maintenance

**Phase Goals:**
- Create maintenance guide
- Document all decisions
- Update project documentation
- Prepare for merge

### Documentation Tasks

- [ ] T061 Create CSS maintenance guide at `specs/005-simplify-theme-css/maintenance-guide.md` (explain simplified CSS structure, how to add new styles, when to override, DaisyUI component reference)
- [ ] T062 Document all override decisions at `assets/css/theme.css` (inline comments for each custom rule; explain why override needed)
- [ ] T063 Create component implementation reference at `specs/005-simplify-theme-css/component-reference.md` (quick reference for developers: which DaisyUI classes to use for each component type)
- [ ] T064 Update project CLAUDE.md if needed at `CLAUDE.md` (add notes about CSS simplification approach, DaisyUI priority, when to override)
- [ ] T065 Generate final refactoring report at `specs/005-simplify-theme-css/refactoring-report.md` (summary: metrics achieved, changes made, testing results, recommendations)

### Final Validation Tasks

- [ ] T066 Full site regression test at `bundle exec jekyll serve` (comprehensive manual test of all pages, components, and interactions; verify nothing broken)
- [ ] T067 [P] Build for production at `bundle exec jekyll build` (full production build; verify no errors; check generated _site/ for completeness)

---

## Dependencies & Execution Order

### Critical Path
```
Phase 1 (Setup) → Phase 2 (Audit) → Phase 3 (Strategy) → Phase 4 (Refactoring) → Phase 5 (Testing) → Phase 6 (Metrics) → Phase 7 (Docs)
```

### Parallelization Opportunities

**Within Phase 1:**
- T002, T003, T004, T005, T006 can run in parallel (audit template creation)
- T007, T008 can run in parallel (build and browser testing)

**Within Phase 2:**
- T010, T011, T012, T013 can run in parallel (CSS file audits)
- T015, T016, T017, T018 can run in parallel (component mapping)
- T022 can run during color audit work

**Within Phase 4:**
- T032, T033, T034, T035 can run in parallel (page-specific CSS updates)
- All HTML component updates (T037) can be batched as one task

**Within Phase 5:**
- T042, T043, T044, T045 can run in parallel (component testing)
- T047, T048 can run in parallel with T046 (browser testing)
- T051, T052, T053 can run in parallel (accessibility testing)

**Within Phase 6:**
- T058, T059, T060 can run in parallel (optimization checks)

### Task Dependencies
- Phase 2 depends on Phase 1 (baseline established)
- Phase 3 depends on Phase 2 (audit results inform strategy)
- Phase 4 depends on Phase 3 (strategy documented)
- Phase 5 depends on Phase 4 (refactoring complete)
- Phase 6 depends on Phase 5 (testing passed)
- Phase 7 depends on Phase 6 (metrics validated)

---

## Implementation Strategy

### MVP Scope (Minimum Viable Product)
**Recommended for first pass:**
- Phase 1: Setup & baseline (T001-T008)
- Phase 2: Audit & analysis (T009-T024)
- Phase 3: Strategy documentation (T025-T028)

**This gives you:** Clear understanding of current state, detailed refactoring roadmap, and strategy documents

### Incremental Delivery
1. **Iteration 1** (Phases 1-3): Audit, plan, document
2. **Iteration 2** (Phase 4): CSS refactoring + basic testing (T029-T038)
3. **Iteration 3** (Phase 5): Visual & accessibility testing (T039-T053)
4. **Iteration 4** (Phases 6-7): Metrics, optimization, documentation (T054-T067)

### Recommended Execution Order (MVP First)
```
1. Complete Phase 1 (T001-T008) - establish baseline
2. Complete Phase 2 (T009-T024) - comprehensive audit
3. Complete Phase 3 (T025-T028) - document strategy
4. Review audit findings with team
5. Proceed to Phase 4+ only if ready for implementation
```

---

## Success Criteria

### After Phase 1
- ✅ Baseline metrics documented (CSS size, rule count)
- ✅ Visual baseline captured (screenshots)
- ✅ Current site builds and renders correctly

### After Phase 2
- ✅ All CSS files analyzed
- ✅ All components mapped to DaisyUI equivalents
- ✅ All color overrides identified with rationale
- ✅ Component usage patterns documented

### After Phase 3
- ✅ Detailed refactoring strategy documented
- ✅ Component mapping guide created
- ✅ Override rules defined
- ✅ Quick reference for developers ready

### After Phase 4
- ✅ theme.css simplified (duplicates removed)
- ✅ All CSS files updated
- ✅ HTML updated with DaisyUI component classes
- ✅ CSS builds without errors

### After Phase 5
- ✅ Visual regression testing passed (no unintended changes)
- ✅ All component states tested
- ✅ Browser testing passed (Chrome, Firefox, Safari)
- ✅ Accessibility testing passed (WCAG AA)

### After Phase 6
- ✅ CSS size reduced by 40%+ ✓
- ✅ Custom CSS rules <50 ✓
- ✅ DaisyUI component coverage 95%+ ✓
- ✅ Page load time maintained/improved ✓

### After Phase 7
- ✅ All decisions documented
- ✅ Maintenance guide created
- ✅ Final report completed
- ✅ Ready for production merge

---

## Notes & Considerations

### Testing Notes
- **Visual regression testing** is critical – use before/after screenshots at multiple breakpoints
- **Accessibility testing** must verify WCAG AA compliance (contrast, focus, keyboard nav)
- **Component testing** should cover all states: normal, hover, active, disabled, focus
- **Browser testing** should include latest Chrome, Firefox, Safari (desktop and mobile)

### Refactoring Notes
- **Hybrid approach** means some custom overrides are acceptable for visual consistency
- **Document all overrides** with rationale – future developers need to understand why
- **Incremental testing** – test after each major CSS file update to catch issues early
- **DaisyUI priority** – use component classes first, custom CSS only for brand differentiation

### Performance Notes
- CSS reduction should improve page load time (smaller file)
- Ensure CSS pipeline (Jekyll) handles simplified CSS correctly
- Test production build to verify no compilation issues

---

## File Structure

```
specs/005-simplify-theme-css/
├── spec.md                          # Feature specification
├── plan.md                          # Implementation plan
├── tasks.md                         # This file
├── audit/
│   ├── baseline-metrics.md          # Current CSS metrics
│   ├── baseline-screenshots/        # Before refactoring
│   ├── refactored-screenshots/      # After refactoring
│   ├── css-audit.md                 # CSS analysis
│   ├── component-audit.md           # Component mapping
│   ├── color-audit.md               # Color analysis
│   ├── html-usage.txt               # HTML class scan results
│   ├── visual-regression-report.md  # Before/after comparison
│   ├── component-testing.md         # Component test results
│   ├── accessibility-report.md      # Accessibility test results
│   ├── final-metrics.md             # Success criteria validation
│   ├── unused-css-report.md         # Unused CSS analysis
│   └── css-validation.md            # CSS syntax validation
├── contracts/
│   ├── daisyui-components.md        # Component mapping guide
│   └── css-overrides.md             # Override rules
├── quickstart.md                    # Developer quick reference
├── data-model.md                    # CSS structure documentation
├── maintenance-guide.md             # Future maintenance guide
├── component-reference.md           # Component implementation reference
└── refactoring-report.md            # Final refactoring report

assets/css/
├── theme.css                        # Main file (to be simplified)
├── theme.css.backup                 # Backup of original
├── layout.css                       # (to be simplified)
├── blog.css                         # (to be updated)
├── plan.css                         # (to be updated)
└── contact.css                      # (to be updated)
```

---

**Ready for implementation. Start with Phase 1 tasks for baseline establishment.**
