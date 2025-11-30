# Implementation Tasks: Add Compare Products Dropdown to Navbar

**Feature**: 001-navbar-compare-dropdown
**Branch**: 001-navbar-compare-dropdown
**Status**: Ready for Implementation
**Created**: 2025-11-29

---

## Overview

This document contains all actionable tasks needed to implement the comparison feature. Tasks are organized by phase and user story, with clear dependencies and independent test criteria.

**Total Tasks**: 18
**Estimated Effort**: 3 hours
**Risk Level**: Low

---

## Phase 1: Setup & Data Initialization

**Goal**: Initialize all data structures (YAML files) needed for the feature
**Duration**: ~30 minutes
**Dependencies**: None - all setup tasks are independent

### Tasks

- [ ] T001 Update `_data/en/navigation.yml` to add "Compare" dropdown item with 4 children (Hub, Asana, Jira, Monday)
- [ ] T002 Update `_data/fr/navigation.yml` to add "Comparaison" dropdown with French translations
- [ ] T003 Create `_data/en/comparisons.yml` with hub page metadata (title, subtitle, description) and 4 tool definitions
- [ ] T004 Create `_data/en/comparisons.yml` with 9 comparison dimensions (9 rows per dimension, 4 values each)
- [ ] T005 Create `_data/fr/comparisons.yml` with translated hub metadata and tool definitions
- [ ] T006 Create `_data/fr/comparisons.yml` with translated comparison dimensions (match English structure exactly)

**Validation Criteria**:
- ✅ All YAML files have valid syntax (run `bundle exec jekyll build` without errors)
- ✅ Navigation files have "Compare" item with 4 children in both EN/FR
- ✅ Comparisons files have all 9 dimensions with 4 values each
- ✅ EN/FR structure matches (same keys, translated values only)

---

## Phase 2: Template Updates & Page Creation

**Goal**: Update header template to support nested menus and create hub pages
**Duration**: ~1.5 hours
**Dependencies**: Requires Phase 1 complete (data exists)

### Tasks

- [ ] T007 Update `_includes/header.html` navbar-menu section (line ~32-45) to support nested menu items with `if item.children` check
- [ ] T008 [P] Create `_pages/compare.en.html` with layout, title, permalink, and comparison-table include
- [ ] T009 [P] Create `_pages/compare.fr.html` with identical structure (Liquid automatically uses French data)
- [ ] T010 Create `_includes/comparison-table.html` component that renders table from YAML data structure
- [ ] T011 Update `_includes/header.html` mobile nav-dropdown section (line ~10-23) to support nested items (copy logic from navbar-menu)

**Validation Criteria**:
- ✅ Header template renders dropdown correctly on desktop (hover shows sub-items)
- ✅ Header template renders dropdown correctly on mobile (click/expand shows sub-items)
- ✅ Hub page exists at `/compare/` (EN) and `/fr/compare/` (FR)
- ✅ Hub page displays comparison table with 4 tools and 9 dimensions
- ✅ All links in dropdown and table work correctly
- ✅ `bundle exec jekyll build` completes without errors

---

## Phase 3: Styling & Responsive Design

**Goal**: Add CSS for comparison table and dropdown styling
**Duration**: ~45 minutes
**Dependencies**: Requires Phase 2 complete (pages exist and render)

### Tasks

- [ ] T012 Create `assets/css/comparison.css` with styles for `.comparison-hub`, `.comparison-table`, table header/body
- [ ] T013 Add mobile responsive styles to comparison.css (tables, font sizes, padding for 320px, 768px, 1024px)
- [ ] T014 Add dropdown styling to comparison.css (z-index, shadows, hover effects for nested items)
- [ ] T015 Link comparison.css in page layout (add `<link>` tag to `_layouts/default.html` or footer)
- [ ] T016 Verify dropdown styling matches existing navbar design (colors from DaisyUI Dim theme, spacing, shadows)

**Validation Criteria**:
- ✅ Comparison table displays correctly at desktop (1200px+) viewport
- ✅ Comparison table displays correctly at tablet (768px) viewport with proper scaling
- ✅ Comparison table displays correctly at mobile (320px) viewport with scroll or card layout
- ✅ Dropdown appears with smooth styling (colors, shadows match navbar)
- ✅ Touch targets on mobile have adequate size (min 44px)
- ✅ No CSS conflicts with existing navbar.css

---

## Phase 4: Testing & Validation

**Goal**: Verify functionality across browsers, devices, and languages
**Duration**: ~45 minutes
**Dependencies**: Requires Phase 3 complete (all pages and styling in place)

### Tasks

- [ ] T017 [P] Manual test: Hub page displays correctly in English and French (content, layout, links)
- [ ] T017 [P] Manual test: Dropdown menu appears on desktop navbar on hover (all 4 items visible)
- [ ] T017 [P] Manual test: Dropdown menu works on mobile (click to open, shows all 4 items, touch targets adequate)
- [ ] T017 [P] Manual test: All dropdown links navigate to correct pages (hub, asana, jira, monday)
- [ ] T017 [P] Manual test: All table CTA links navigate to correct pages (asana, jira, monday details)
- [ ] T018 Run Lighthouse CI: Verify Performance ≥90, Accessibility ≥95, Best Practices ≥90, SEO ≥90

**Validation Criteria**:
- ✅ No console errors or warnings in browser DevTools
- ✅ Lighthouse CI passes all thresholds
- ✅ Page renders identically in Chrome, Firefox, Safari
- ✅ Responsive design works at all breakpoints (320px, 768px, 1024px, 1440px)
- ✅ Keyboard navigation works (Tab, Enter, Escape keys)
- ✅ Screen reader friendly (semantic HTML, ARIA labels)

---

## Phase 5: Final Checklist & Deployment

**Goal**: Review, commit, and prepare for merge
**Duration**: ~15 minutes
**Dependencies**: Requires Phase 4 complete (all tests pass)

### Tasks

- [ ] T019 Run `bundle exec jekyll build` to verify production build succeeds
- [ ] T020 Review git diff to ensure all changes are intentional and correct
- [ ] T021 Commit changes with message: "feat: Add comparison hub and navbar dropdown"
- [ ] T022 Push branch to origin and create PR with links to spec/plan
- [ ] T023 Wait for GitHub Actions to pass (Lighthouse CI, Jekyll build)
- [ ] T024 Merge PR to main and verify site deploys

**Validation Criteria**:
- ✅ Git commit contains exactly these files:
  - `_data/en/navigation.yml` (updated)
  - `_data/fr/navigation.yml` (updated)
  - `_data/en/comparisons.yml` (new)
  - `_data/fr/comparisons.yml` (new)
  - `_includes/header.html` (updated)
  - `_pages/compare.en.html` (new)
  - `_pages/compare.fr.html` (new)
  - `_includes/comparison-table.html` (new)
  - `assets/css/comparison.css` (new)
- ✅ PR checks pass (Lighthouse CI, Jekyll build, all status checks green)
- ✅ Feature is live on https://sinra.dev/compare/

---

## Task Execution Guide

### Quick Reference

**Phase 1 (Setup)**: T001-T006 (all independent, can run in parallel)
**Phase 2 (Templates)**: T007-T011 (T008-T009 can run in parallel after T007)
**Phase 3 (Styling)**: T012-T016 (all dependent on Phase 2 completion)
**Phase 4 (Testing)**: T017-T018 (T017 tasks can run in parallel)
**Phase 5 (Deployment)**: T019-T024 (sequential)

### Parallel Execution Opportunities

**Phase 1 Parallel**: Run T001-T006 simultaneously if editing different files:
```
Terminal 1: T001 + T003
Terminal 2: T002 + T005
Terminal 3: T004 + T006
```

**Phase 2 Parallel**: After T007 completes:
```
Terminal 1: T010
Terminal 2: T008 + T009 (identical content, different language)
Terminal 3: T011
```

**Phase 4 Parallel**: Run T017 tests simultaneously on different devices/browsers:
```
Desktop 1: T017 English + Dropdown
Desktop 2: T017 Mobile + Dropdown
Desktop 3: T017 Navigation links
Desktop 4: T017 Table links
```

### Tips for Efficiency

1. **Use template from quickstart.md**: Copy-paste YAML and HTML examples to save time
2. **Test incrementally**: After Phase 2, run `bundle exec jekyll serve` and view http://localhost:4000/compare/
3. **Keep DevTools open**: Monitor console for errors while editing
4. **Batch similar changes**: Do both EN/FR files together (T001-T002, T003-T005, etc.)
5. **Use hot-reload**: Jekyll automatically rebuilds when files change

---

## Success Criteria

### All Phases Complete ✅

When all 24 tasks are completed and marked [X]:

1. ✅ Comparison hub page exists at `/compare/` with side-by-side table
2. ✅ Navbar dropdown "Compare" visible with 4 items (Hub + 3 tools)
3. ✅ Dropdown works on desktop (hover) and mobile (click/expand)
4. ✅ Page is responsive at all breakpoints (mobile, tablet, desktop)
5. ✅ English and French versions display correctly
6. ✅ All navigation links work
7. ✅ Lighthouse CI scores meet thresholds
8. ✅ No console errors
9. ✅ Git commit with all 9 files
10. ✅ PR merged to main and live on sinra.dev

---

## Dependencies & Blockers

### Zero Blockers

This feature has **no external dependencies**:
- ✅ No new gems or dependencies needed
- ✅ Uses existing Jekyll, Polyglot, DaisyUI
- ✅ YAML files are independent
- ✅ Templates use existing Liquid syntax
- ✅ Styling uses existing CSS patterns

### If Stuck

**Issue: YAML Syntax Error**
→ Run `bundle exec jekyll build` to see exact error, check indentation (2 spaces, not tabs)

**Issue: Dropdown Not Showing**
→ Verify `_includes/header.html` has `if item.children` check, verify navbar.css has `.dropdown` class

**Issue: Links Broken**
→ Verify `site.baseurl` is used correctly, check `site.baseurl}}` vs `site.baseurl}}` (no extra `/`)

**Issue: Lighthouse Score Dropped**
→ Check CSS file size, verify no new fonts loaded, use `bundle exec jekyll build --profile` to identify bottlenecks

---

## Files Summary

### Files to Create (4 new)

| File | Lines | Purpose |
|------|-------|---------|
| `_data/en/comparisons.yml` | ~150 | EN comparison table data |
| `_data/fr/comparisons.yml` | ~150 | FR comparison table data |
| `_pages/compare.en.html` | ~30 | EN hub page template |
| `_pages/compare.fr.html` | ~30 | FR hub page template |
| `_includes/comparison-table.html` | ~30 | Table rendering component |
| `assets/css/comparison.css` | ~200 | Styling for hub page + dropdown |

**Total New Lines**: ~590

### Files to Update (3 existing)

| File | Changes | Purpose |
|------|---------|---------|
| `_data/en/navigation.yml` | +14 lines | Add "Compare" dropdown |
| `_data/fr/navigation.yml` | +14 lines | Add "Comparaison" dropdown |
| `_includes/header.html` | +25 lines | Support nested menu rendering |

**Total Changed Lines**: ~53

---

## Checklist Template

Copy and paste to verify completion:

```
Phase 1 (Setup):
- [ ] T001 EN navigation updated
- [ ] T002 FR navigation updated
- [ ] T003 EN comparisons created (hub + tools)
- [ ] T004 EN comparisons created (dimensions)
- [ ] T005 FR comparisons created (hub + tools)
- [ ] T006 FR comparisons created (dimensions)

Phase 2 (Templates):
- [ ] T007 Header template updated
- [ ] T008 EN hub page created
- [ ] T009 FR hub page created
- [ ] T010 Table component created
- [ ] T011 Header mobile section updated

Phase 3 (Styling):
- [ ] T012 Comparison CSS created
- [ ] T013 Responsive styles added
- [ ] T014 Dropdown styles added
- [ ] T015 CSS linked in layout
- [ ] T016 Styling verified

Phase 4 (Testing):
- [ ] T017 Manual tests passed (6 test scenarios)
- [ ] T018 Lighthouse CI passed

Phase 5 (Deployment):
- [ ] T019 Jekyll build succeeded
- [ ] T020 Git diff reviewed
- [ ] T021 Commit created
- [ ] T022 PR created
- [ ] T023 GitHub Actions passed
- [ ] T024 Merged and live
```

---

## Next Steps

**Start Implementation**:
1. Mark tasks as you complete them (change `- [ ]` to `- [X]`)
2. Follow Phase sequence (1 → 2 → 3 → 4 → 5)
3. Run `bundle exec jekyll serve` during Phase 2 to see changes
4. Test progressively (don't wait until Phase 4)
5. Commit and create PR at end of Phase 5

**Time Estimate**: 3 hours for experienced developer, 4-5 hours if learning Jekyll/Liquid

Good luck! 🚀

