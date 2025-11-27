# Task Breakdown: Black Friday 50% Discount Promotion

**Feature**: Black Friday 50% Discount Promotion
**Branch**: `002-blackfriday-promo`
**Created**: 2025-11-27
**Based on**: spec.md, plan.md, data-model.md, quickstart.md

---

## Implementation Strategy

**MVP Scope**: User Story 1 + User Story 2 (the two P1 stories) deliver core value—badge on pricing page + sticky banner across site.

**Incremental Delivery**:
1. **Phase 1 (Setup)**: Promote data infrastructure and globals
2. **Phase 2 (Foundational)**: Create reusable components and CSS
3. **Phase 3 (US1)**: Badge on pricing page with pricing display
4. **Phase 4 (US2)**: Sticky banner with dismissal logic
5. **Phase 5 (US3)**: Enhanced pricing details (discount calculation breakdown)
6. **Phase 6 (Polish)**: Cross-browser testing, multilingual validation, cleanup

**Parallel Opportunities**:
- Phase 3 & Phase 4 can run in parallel (independent components, different files)
- EN/FR translations run in parallel (same structure, different content)

---

## Dependencies & Completion Order

```
Phase 1 (Setup)
  ↓
Phase 2 (Foundational - blocking)
  ├→ Phase 3 (US1 - Badge) [PARALLEL with Phase 4]
  │   └→ Phase 5 (US3 - Enhanced Details) [depends on Phase 3]
  │
  ├→ Phase 4 (US2 - Banner) [PARALLEL with Phase 3]
  │
  └→ Phase 6 (Polish)
      └→ Completion
```

---

## Phase 1: Setup & Data Infrastructure

**Goal**: Establish promotion data files and prepare Jekyll site for translations.

### Tasks

- [ ] T001 Create English promotion data file `_data/en/promotion.yml` with banner, badge, and pricing configuration per data-model.md
- [ ] T002 Create French promotion data file `_data/fr/promotion.yml` mirroring English structure with French translations
- [ ] T003 Verify YAML syntax and Jekyll build succeeds with new data files via `bundle exec jekyll build`

**Independent Test Criteria**:
- YAML files parse without errors
- `jekyll build` completes successfully
- `site.data.en.promotion` and `site.data.fr.promotion` are accessible in Liquid templates

---

## Phase 2: Foundational Components & Styling

**Goal**: Create reusable components and CSS foundation for both badge and banner.

### Tasks (Parallelizable)

- [ ] T004 [P] Create banner component include file `_includes/blackfriday-banner.html` with conditional rendering based on banner.enabled flag per quickstart.md
- [ ] T005 [P] Create badge component include file `_includes/blackfriday-badge.html` with promotion badge markup and color class
- [ ] T006 [P] Add promotion styling to `assets/css/theme.css`:
  - `.sticky-banner` styles (position: fixed, top: 0, z-index: 1000, colors, layout)
  - `.sticky-banner-content` flexbox layout
  - `.banner-message`, `.banner-cta`, `.banner-close` button styles
  - `.promotion-badge` position: absolute, high-contrast colors (red/gold)
  - `.original-price` strikethrough styling
  - `.discounted-price` bold red styling
  - `body.banner-active` padding-top adjustment
  - Mobile responsiveness (@media max-width: 768px)
- [ ] T007 Add banner dismissal JavaScript to `assets/js/script.js`:
  - Check `sessionStorage` for dismissal flag on load
  - Attach click handler to close button
  - Store dismissal in `sessionStorage`
  - Add/remove `banner-active` class from body for padding

**Independent Test Criteria**:
- All includes parse in Jekyll without errors
- CSS compiles; no syntax errors in theme.css
- JavaScript has no console errors on page load
- No layout shift introduced (CLS check)

---

## Phase 3: User Story 1 - Pricing Page Badge

**Goal**: Implement discount badge on annual pricing card with original and discounted prices visible.

**User Story**: Visitor discovers annual plan discount via pricing page (Priority: P1)

**Independent Test Criteria**:
- Badge visible on pricing page annual card
- Original price shows with strikethrough
- Discounted price shows in bold, larger font
- Badge uses high-contrast colors (red or gold)
- Works on desktop, tablet, and mobile viewports
- No layout regression on pricing page

### Tasks

- [ ] T008 [US1] Modify `_pages/pricing.en.html` to include badge component in annual plan card section (top-right position)
- [ ] T009 [US1] Modify `_pages/pricing.en.html` annual card pricing display:
  - Show original price with strikethrough: `{{ site.data[page.lang].promotion.pricing.original_annual_price }}`
  - Show "50% OFF" indicator from badge
  - Show discounted price bold and red: `{{ site.data[page.lang].promotion.pricing.discounted_annual_price }}`
- [ ] T010 [US1] Modify `_pages/pricing.fr.html` to include badge and pricing display (same structure as EN)
- [ ] T011 [US1] Test pricing page rendering on desktop, tablet, mobile via `jekyll serve`:
  - Navigate to `/en/pricing` and `/fr/pricing`
  - Verify badge appears on annual card
  - Verify original + discounted prices display correctly
  - Check badge doesn't overlap other card content
  - Verify font sizing on mobile (<768px)
- [ ] T012 [US1] Verify no Cumulative Layout Shift (CLS) on pricing page:
  - Load pricing page multiple times
  - Check no visual jumps when badge and pricing render
  - Measure page load time remains <2 seconds

**Success Criteria** (from spec.md):
- SC-001: 100% of pricing page visitors see badge (no broken styling)
- SC-006: Pricing page load time <2 seconds
- SC-007: No layout shift

---

## Phase 4: User Story 2 - Sticky Banner

**Goal**: Implement sticky banner on all site pages with CTA and session-based dismissal.

**User Story**: New visitor learns about promotion via sticky banner (Priority: P1)

**Independent Test Criteria**:
- Banner appears at top of every page
- Banner remains fixed while scrolling
- CTA button navigates to pricing
- Close button dismisses for browser session
- Dismissal persists until browser tab closes
- Works on mobile without horizontal scrolling
- Banner appears on first visit; respects dismissal on same session

### Tasks

- [ ] T013 [US2] Modify `_layouts/default.html` to include banner component near top of body:
  - Add `{% include blackfriday-banner.html %}` after `<body>` tag
  - Ensure banner doesn't interfere with header navigation
  - Check z-index stack (should be >1000 to avoid overlap)
- [ ] T014 [US2] Test banner display on all site pages via `jekyll serve`:
  - Visit homepage, about, contact, blog (if exists)
  - Verify banner appears on all pages
  - Verify banner remains fixed while scrolling
  - Verify CTA link "View Pricing" navigates to `/en/pricing` or `/fr/pricing`
- [ ] T015 [US2] Test banner dismissal behavior:
  - Click close button (X)
  - Verify banner disappears
  - Reload page → banner should remain hidden (sessionStorage)
  - Close browser tab completely
  - Open new browser tab → visit site again → banner reappears
- [ ] T016 [US2] Test banner responsiveness on mobile:
  - Resize viewport to <768px
  - Verify banner text is readable without horizontal scroll
  - Verify close button is tappable (touch target ≥32px)
  - Check padding-top on body prevents header overlap
- [ ] T017 [US2] Verify banner styling across browsers:
  - Chrome: banner sticky, dismissal works, CTA functional
  - Firefox: same checks
  - Safari: same checks
  - Note any browser-specific quirks

**Success Criteria** (from spec.md):
- SC-002: 95% of visitors see banner within 1 second
- SC-004: CTR on banner CTA ≥15%
- SC-005: Users can dismiss without disruption

---

## Phase 5: User Story 3 - Enhanced Pricing Details

**Goal**: Show pricing calculation breakdown (original → 50% OFF → final price) for trust and confidence.

**User Story**: Pricing page shows discount calculation details (Priority: P2)

**Independent Test Criteria**:
- Annual card shows three pieces of pricing info: original (struck), "50% OFF", final price
- Math is accurate (50% discount verified)
- Annual plan visually distinct from other plans
- All info displayed clearly without crowding

### Tasks

- [ ] T018 [US3] Review current pricing card markup in `_pages/pricing.en.html` and `_pages/pricing.fr.html`
  - Identify where pricing details are displayed
  - Verify original price, discount indicator, and final price are all present per T009/T010
  - Check visual hierarchy (original smaller/struck, final large/bold)
- [ ] T019 [US3] Add pricing calculation helper (optional enhancement) in `_layouts/default.html` or direct in pricing page:
  - Calculate savings: `{{ original - discounted }}`
  - Display as: "Save €50 (50% OFF)"
  - Use Liquid filters to format currency
- [ ] T020 [US3] Enhance badge styling to ensure it stands out vs. other plans:
  - Verify badge position (top-right) doesn't overlap prices
  - Confirm color contrast meets WCAG AA standard (4.5:1 minimum)
  - Test visual distinction between annual card and monthly/quarterly cards (if they exist)
- [ ] T021 [US3] Verify pricing calculation accuracy:
  - Original: €100 → Discounted: €50 (from promotion data)
  - Math: €100 × (1 - 50%) = €50 ✓
  - Test with different original prices if needed
- [ ] T022 [US3] Cross-check pricing display across EN/FR:
  - Verify `_data/en/promotion.yml` and `_data/fr/promotion.yml` have matching prices
  - Ensure currency symbol (€) displays correctly in both languages
  - Check French number formatting if applicable (€50,00 vs €50.00)

**Success Criteria** (from spec.md):
- SC-001: Badge visible on annual card (covered by US1)
- SC-003: Conversion rate ≥25% increase (measurement task, not implementation)

---

## Phase 6: Polish & Cross-Cutting Concerns

**Goal**: Final validation, accessibility, multilingual consistency, and deployment readiness.

### Tasks

- [ ] T023 Verify multilingual consistency:
  - Side-by-side comparison of `/en/pricing` and `/fr/pricing`
  - Confirm banner message in French: "Black Friday : 50% de réduction sur les forfaits annuels"
  - Confirm badge text in French: "50% DE RÉDUCTION"
  - Check all keys in `_data/en/promotion.yml` match `_data/fr/promotion.yml`
  - No hardcoded English strings in HTML
- [ ] T024 Accessibility validation:
  - Banner and badge text meets WCAG AA contrast ratio (4.5:1 for text)
  - Close button has `aria-label="Close banner"`
  - CTA link is keyboard navigable (Tab key)
  - Color is not sole indicator (use text labels: "50% OFF", not color alone)
  - Test with screen reader (e.g., VoiceOver on Mac)
- [ ] T025 Date-based disable logic verification:
  - Verify end_date in `_data/[lang]/promotion.yml` is set to "2025-11-28"
  - Confirm date comparison logic in `_includes/blackfriday-banner.html` and badge component
  - Liquid: `{% if now > end_date %}` disable banner and badge
  - Test by temporarily setting end_date to past date → banner should NOT appear
  - Test by setting end_date to future date → banner should appear
- [ ] T026 Performance final check:
  - Run `bundle exec jekyll build` → measure build time (should be <10s)
  - Load pricing page via `jekyll serve` → measure page load via DevTools (should be <2s)
  - Check waterfall: JS, CSS, HTML all load without blocking
  - Verify no Cumulative Layout Shift (CLS) - should be 0 or near 0
- [ ] T027 Manual cross-browser testing (final pass):
  - **Chrome**: All features work, banner sticky, dismissal persists, CTA navigates correctly
  - **Firefox**: Same checks, verify sessionStorage works
  - **Safari**: Same checks, verify position: fixed works (known issues on older Safari)
  - **Mobile Safari** (iOS): Banner readable, close button tappable, no horizontal scroll
  - **Android Chrome**: Same mobile checks
- [ ] T028 Git cleanup and final documentation:
  - Verify all changes are committed to branch `002-blackfriday-promo`
  - Review commit history for clarity
  - Ensure no debug code or console.logs remain
  - Update CLAUDE.md notes if needed for future promotion campaigns
- [ ] T029 Create PR checklist:
  - Link to spec: `specs/002-blackfriday-promo/spec.md`
  - Link to plan: `specs/002-blackfriday-promo/plan.md`
  - Summary of changes: 2 YAML files, 2 includes, CSS additions, JS additions, 2 page modifications
  - Multilingual: EN/FR both tested
  - Manual testing completed: pricing page, banner on all pages, dismissal, mobile
  - Ready for merge to main

---

## Summary

| Phase | Tasks | Focus | Duration (Est.) |
|-------|-------|-------|-----------------|
| 1 | T001-T003 | YAML data setup | 10 min |
| 2 | T004-T007 | Components & CSS | 30 min |
| 3 | T008-T012 | Badge (US1) | 25 min |
| 4 | T013-T017 | Banner (US2) | 30 min |
| 5 | T018-T022 | Enhanced details (US3) | 20 min |
| 6 | T023-T029 | Polish & validation | 35 min |
| **TOTAL** | **29 tasks** | **Full feature** | **~150 min** |

---

## Parallel Execution Opportunities

### Path 1: MVP Fast Track (P1 Stories Only)
**Goal**: Launch core promotion by Nov 28, 2025

```
Phase 1 (Setup)           10 min
  ↓
Phase 2 (Foundational)    30 min
  ├→ Phase 3 (US1)        25 min
  └→ Phase 4 (US2)        30 min  [PARALLEL with Phase 3]
  ↓
Phase 6 (Polish)          35 min
TOTAL: ~100 minutes (can run Phase 3&4 in parallel → ~85 min wall time)
```

### Path 2: Full Feature (All User Stories)
**Goal**: Complete implementation with enhanced pricing details

```
Phases 1-2 (Setup + Foundational) → 40 min
  ├→ Phase 3 (US1)  → 25 min
  └→ Phase 4 (US2)  → 30 min  [PARALLEL]
  ↓
  Phase 5 (US3)     → 20 min  [depends on Phase 3]
  ↓
  Phase 6 (Polish)  → 35 min
TOTAL: ~150 minutes
```

---

## Testing Checklist

**Before Merge to main**:

- [ ] Pricing page loads <2s (DevTools Network)
- [ ] Badge visible on annual card (desktop, tablet, mobile)
- [ ] Original price struck; final price bold/red
- [ ] Banner appears on all pages
- [ ] Banner sticky on scroll
- [ ] Close button dismisses banner (sessionStorage)
- [ ] Dismissal persists within browser session
- [ ] Dismissal cleared on new browser session
- [ ] CTA link navigates to pricing
- [ ] EN/FR both tested side-by-side
- [ ] No console errors in DevTools
- [ ] No Cumulative Layout Shift (CLS ≈ 0)
- [ ] WCAG AA contrast verified
- [ ] Mobile viewport (<768px) readable
- [ ] Date logic: end_date "2025-11-28" working

---

## Acceptance Criteria Mapping

Each task maps to at least one acceptance scenario from spec.md:

| Task | Maps to Acceptance Scenario |
|------|----------------------------|
| T008-T012 | US1 AC1-4 (Badge visible, colors, pricing display) |
| T013-T017 | US2 AC1-5 (Banner on all pages, sticky, CTA, close, mobile) |
| T018-T022 | US3 AC1-3 (Pricing info, math accuracy, visual distinction) |
| T023-T029 | Cross-cutting: translations, accessibility, performance |

---

## File Modifications Summary

| File | Action | Type |
|------|--------|------|
| `_data/en/promotion.yml` | Create | Data (YAML) |
| `_data/fr/promotion.yml` | Create | Data (YAML) |
| `_includes/blackfriday-banner.html` | Create | Component (HTML + Liquid) |
| `_includes/blackfriday-badge.html` | Create | Component (HTML + Liquid) |
| `_layouts/default.html` | Modify | Layout (add banner include) |
| `_pages/pricing.en.html` | Modify | Page (add badge, pricing display) |
| `_pages/pricing.fr.html` | Modify | Page (add badge, pricing display) |
| `assets/css/theme.css` | Modify | Styling (add banner, badge, responsive) |
| `assets/js/script.js` | Modify | Behavior (add banner dismissal) |

---

## Notes

- **No new gems required**: Uses existing Jekyll, Liquid, vanilla JS, plain CSS
- **Build time**: Should remain <10s with YAML additions
- **Rollback**: Simply toggle `banner.enabled: false` and `badge.enabled: false` in YAML files
- **Maintenance**: After Nov 28, 2025, disable promotion by updating YAML flags; no code changes needed for future campaigns
