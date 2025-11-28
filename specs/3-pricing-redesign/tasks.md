# Implementation Tasks: Unified Pricing Display with AI-Powered Features

**Feature**: Unified Pricing Display with AI-Powered Features
**Branch**: `3-pricing-redesign`
**Status**: Ready for Implementation
**Task Count**: 13 tasks across 3 user stories

---

## Task Dependencies & Execution Strategy

### Dependency Graph

```
Phase 1: Setup (T001)
  ↓
Phase 2: Foundational (T002-T003)
  ↓
Phase 3: User Story 1 - Pricing Display (T004-T006) [P]
  ↓
Phase 4: User Story 2 - Specif-AI Introduction (T007-T009) [P]
  ↓
Phase 5: User Story 3 - Visual Verification (T010-T011) [P]
  ↓
Phase 6: Polish & Testing (T012-T013)
```

### Parallel Execution Opportunities

**After Phase 2 (Foundational tasks complete)**:
- T004-T006 (US1: Pricing Display) can run in parallel with T007-T009 (US2: Specif-AI) and T010-T011 (US3: Visual Verification)
- All three user stories are independent; no cross-story data dependencies
- Optimization: Complete T002-T003 → Execute T004-T013 in parallel by story

### Independent Test Criteria

**US1 - Pricing Comparison**: Both monthly/annual frames visible, annual emphasized, Black Friday functional
**US2 - Specif-AI Introduction**: Plan visible with "Coming Soon" badge, 4+ AI features listed
**US3 - Visual Consistency**: Card dimensions/spacing unchanged, colors preserved, interactions functional

---

## Task Breakdown

### Phase 1: Setup & Verification

- [ ] T001 Verify current pricing implementation and backup existing YAML files in `_data/en/pricing.yml` and `_data/fr/pricing.yml`

### Phase 2: Foundational Data & Template Setup

- [ ] T002 Update English pricing data structure: Consolidate two Sinra Pro entries into single unified plan with `pricing_tiers` array in `_data/en/pricing.yml`
- [ ] T003 Update French pricing data structure: Mirror English structure with French translations in `_data/fr/pricing.yml`

### Phase 3: User Story 1 - Pricing Comparison with Flexible Billing Options

**Story Goal**: Display monthly and annual pricing side-by-side with annual emphasized, preserving Black Friday system

**Independent Test**: Customers can identify monthly cost (€10), annual cost (€96/€60), and recommended option with 75%+ clarity

- [ ] T004 [P] [US1] Update pricing template to support `pricing_tiers` array iteration in `_includes/pricing.html`
- [ ] T005 [P] [US1] Add CSS classes for pricing frames layout (.pricing-tiers, .pricing-frame, .emphasized) in `assets/css/plan.css`
- [ ] T006 [US1] Test pricing display at desktop (1024px+), tablet (768-1023px), and mobile (<768px) breakpoints; verify Black Friday logic

### Phase 4: User Story 2 - AI-Powered Issue and Capability Specification

**Story Goal**: Introduce Sinra Specif-AI plan as second card with "Coming Soon" badge and AI-related features

**Independent Test**: Customers understand Specif-AI purpose, availability, and value; 80%+ clarity on AI feature benefits

- [ ] T007 [P] [US2] Add Sinra Specif-AI plan entry to `_data/en/pricing.yml` with Coming Soon tier and AI feature list
- [ ] T008 [P] [US2] Add Sinra Specif-AI plan entry to `_data/fr/pricing.yml` with French translations of features
- [ ] T009 [US2] Implement Coming Soon badge rendering in template (conditional logic for non-interactive badge) in `_includes/pricing.html`

### Phase 5: User Story 3 - Visual Consistency and Layout Preservation

**Story Goal**: Verify no unintended visual changes to card styling, typography, or spacing

**Independent Test**: Visual regression test shows no pixel-level changes to card dimensions, colors, or typography

- [ ] T010 [P] [US3] Add responsive CSS for mobile stacking: `.pricing-tiers { flex-direction: column; }` and `order: -1` for emphasized frame in `assets/css/plan.css`
- [ ] T011 [US3] Perform visual regression test: Compare redesigned pricing page against current version for card dimensions, typography, colors, and interactive behavior

### Phase 6: Polish & Cross-Cutting Concerns

- [ ] T012 Test complete pricing page flow: Create Sinra Pro dual frames, verify Specif-AI Coming Soon, test all responsive breakpoints, confirm Black Friday logic in `bundle exec jekyll serve`
- [ ] T013 Verify build success: Run `bundle exec jekyll build` and confirm no warnings or errors

---

## Detailed Task Descriptions

### T001: Verify Current Implementation & Backup

**File**: `_data/en/pricing.yml`, `_data/fr/pricing.yml`
**Actions**:
1. Review current pricing.yml structure (two separate Sinra Pro entries)
2. Confirm Black Friday promotion system working in `_data/promotion.yml`
3. Document current CSS classes in `assets/css/plan.css`
4. Create backup of current pricing files (for rollback reference)

**Acceptance**: Current implementation documented; backup files available; no breaking changes yet

---

### T002: Update English Pricing Data

**File**: `_data/en/pricing.yml`
**Actions**:
1. Replace two Sinra Pro entries (monthly + annual) with single unified entry
2. Create `pricing_tiers` array with two objects:
   - Monthly tier (period: "Monthly", price: "10", currency: "€", billing: "/month", plan_type: "monthly")
   - Annual tier (period: "Annual", price: "96", currency: "€", billing: "/year", plan_type: "annual", original_price: "120", struck_price: "96", has_black_friday: true, black_friday_price: "60", promo_code: "BLACKFRIDAY2025", recommended: true)
3. Consolidate feature list (use existing 12 features, shared across both tiers)
4. Keep call_to_action unchanged (link + "Start Free Trial" text)
5. Validate YAML syntax (no parsing errors)

**Acceptance**: Single Sinra Pro plan renders with both tiers; features identical across monthly/annual; no YAML errors

---

### T003: Update French Pricing Data

**File**: `_data/fr/pricing.yml`
**Actions**:
1. Mirror English YAML structure exactly (same plan names, tier structure, feature count)
2. Translate Sinra Pro description to French
3. Translate all 12 feature texts to French equivalents
4. Translate call_to_action.text to "Démarrer l'essai gratuit"
5. Keep pricing values unchanged (€ symbol, numbers same as English)
6. Validate YAML syntax and French character encoding

**Acceptance**: French pricing page displays correctly; feature list parity with English; no encoding issues

---

### T004: Update Pricing Template for Tiers Array

**File**: `_includes/pricing.html`
**Actions**:
1. Locate plan loop: `{% for plan in site.data[site.active_lang].pricing %}`
2. After plan header (name, description), add nested loop: `{% for tier in plan.pricing_tiers %}`
3. Move all pricing display logic inside tier loop (price, period, Black Friday, original price, promo code)
4. Keep features and CTA outside tier loops (shared across tiers)
5. Update Black Friday condition to check `tier.has_black_friday` instead of `plan.has_black_friday`
6. Wrap pricing output in `<div class="pricing-frame">` element with conditional class `{% if tier.recommended %}emphasized{% endif %}`
7. Test template renders without Liquid errors

**Acceptance**: Template compiles without errors; pricing tiers render independently within each plan card

---

### T005: Add CSS Classes for Pricing Frames

**File**: `assets/css/plan.css`
**Actions**:
1. Add `.pricing-tiers` class:
   - display: flex
   - gap: 1.5rem
   - margin: 1.5rem 0
2. Add `.pricing-frame` class:
   - flex: 1
   - padding: 1rem
   - border-radius: var(--radius-box)
   - background: var(--color-base-300)
   - transition: all 0.3s ease
3. Add `.pricing-frame.emphasized` class:
   - flex: 1.1 (slightly larger)
   - background: var(--color-base-200)
   - border: 2px solid var(--color-primary)
4. Add `.tier-period` and `.tier-price` classes with appropriate sizing
5. Ensure all colors use DaisyUI Dim theme variables (no hardcoded except Black Friday #d63031)
6. Test in browser: Verify frames display side-by-side with annual emphasized

**Acceptance**: CSS classes applied; annual frame visually emphasized; DaisyUI theme compliance verified

---

### T006: Test Pricing Display & Responsive Behavior

**File**: `_includes/pricing.html`, `assets/css/plan.css`, `_data/*/pricing.yml`
**Actions**:
1. Run `bundle exec jekyll serve --drafts`
2. Open http://localhost:4000/pricing
3. **Desktop test (1024px+)**:
   - Verify Sinra Pro shows two frames side-by-side
   - Confirm monthly frame shows €10/month
   - Confirm annual frame shows €96/year and is visually emphasized (larger, bordered)
   - Confirm annual is recommended option
4. **Tablet test (768-1023px)**:
   - Verify frames remain side-by-side
   - Check spacing is proportional
   - Verify annual still emphasized
5. **Mobile test (<768px)**:
   - Verify frames are present (not hidden)
   - Confirm layout is readable (no cramping)
   - Check responsive styling applied
6. **Black Friday test (if promotion active)**:
   - Verify annual frame shows €60 instead of €96
   - Confirm original price (€96) struck through
   - Verify promo code displayed
7. Document any layout issues or unexpected behavior

**Acceptance**: Pricing displays correctly at all breakpoints; Black Friday system functional; no visual anomalies

---

### T007: Add Sinra Specif-AI Plan to English Data

**File**: `_data/en/pricing.yml`
**Actions**:
1. Add second plan entry after Sinra Pro:
   - name: "Sinra Specif-AI"
   - color: "#2196F3" (same as Pro for visual grouping)
   - description: "AI-powered specification generation for issues, capabilities, and projects"
2. Add `pricing_tiers` array with single Coming Soon tier:
   - period: "Coming Soon"
   - price: null
   - billing: null
   - plan_type: "coming_soon"
3. Add features array with 6 items (4 AI + 2 supporting):
   - "AI-powered issue specification" (highlight: true, ai_feature: true)
   - "Automated capability definition" (highlight: true, ai_feature: true)
   - "AI-generated project templates" (highlight: true, ai_feature: true)
   - "AI-assisted requirement generation" (highlight: true, ai_feature: true)
   - "Integration with Sinra Pro features" (highlight: false)
   - "More capabilities coming soon..." (highlight: false)
4. Add call_to_action:
   - link: null
   - text: "Coming Soon"
   - badge_type: "coming_soon"
5. Validate YAML syntax

**Acceptance**: Specif-AI plan entry created; 4+ AI features included; Coming Soon badge configured; no YAML errors

---

### T008: Add Sinra Specif-AI Plan to French Data

**File**: `_data/fr/pricing.yml`
**Actions**:
1. Mirror Specif-AI plan structure from English
2. Translate description: "Génération de spécifications alimentée par l'IA pour les issues, capacités et projets"
3. Translate features (maintain ai_feature flags):
   - "Spécification d'issues alimentée par l'IA"
   - "Définition automatisée des capacités"
   - "Modèles de projet générés par l'IA"
   - "Génération d'exigences assistée par l'IA"
   - "Intégration avec les fonctionnalités de Sinra Pro"
   - "D'autres capacités à venir..."
4. Translate CTA text: "Bientôt disponible"
5. Keep badge_type and pricing_tiers structure identical to English
6. Validate YAML and character encoding

**Acceptance**: French Specif-AI plan complete; feature parity with English; French translations accurate

---

### T009: Implement Coming Soon Badge Rendering

**File**: `_includes/pricing.html`
**Actions**:
1. Locate CTA rendering section (plan.call_to_action)
2. Add conditional logic:
   ```liquid
   {% if plan.call_to_action.badge_type == "coming_soon" %}
     <div class="cta-badge coming-soon">
       {{ plan.call_to_action.text }}
     </div>
   {% else %}
     <a href="{{ plan.call_to_action.link }}" class="cta-button ...">
       {{ plan.call_to_action.text }}
     </a>
   {% endif %}
   ```
3. Add CSS for `.cta-badge`:
   - display: inline-block
   - padding: 0.75rem 1.5rem
   - border-radius: var(--radius-box)
   - background: var(--color-neutral)
   - color: var(--color-neutral-content)
   - font-weight: 600
   - text-align: center
   - width: 100%
   - (no hover/link behavior)
4. Test template renders Coming Soon badge for Specif-AI plan
5. Verify badge is non-interactive (no link, no hover effects)

**Acceptance**: Coming Soon badge displays for Specif-AI; interactive CTA button shows for Sinra Pro; no template errors

---

### T010: Add Mobile Responsive CSS for Frame Stacking

**File**: `assets/css/plan.css`
**Actions**:
1. Add media query for mobile (max-width: 767px):
   ```css
   @media (max-width: 767px) {
     .pricing-tiers {
       flex-direction: column;
     }

     .pricing-frame.emphasized {
       order: -1;  /* Annual frame appears first */
     }
   }
   ```
2. Adjust font sizes for mobile (optional but recommended):
   ```css
   @media (max-width: 767px) {
     .tier-price {
       font-size: 1.25rem;
     }

     .pricing-frame.emphasized .tier-price {
       font-size: 1.5rem;
     }
   }
   ```
3. Test at 320px, 375px, 480px widths
4. Verify frames stack vertically with annual first
5. Confirm text remains readable at small sizes
6. Check no horizontal scrolling or layout breaking

**Acceptance**: Mobile layout stacks frames vertically; annual appears first; no layout breaks at any mobile width

---

### T011: Visual Regression Test & Design Verification

**File**: `_includes/pricing.html`, `assets/css/plan.css`, `_data/*/pricing.yml`
**Actions**:
1. Open current pricing page in browser (original implementation)
2. Take screenshots at three breakpoints: 1024px (desktop), 768px (tablet), 375px (mobile)
3. Document baseline measurements:
   - Plan card width and height
   - Feature list item spacing and typography
   - Button/badge dimensions and padding
   - Color values (primary, text, background)
4. Open redesigned pricing page
5. Compare side-by-side at same breakpoints:
   - Card dimensions: Should be **identical**
   - Typography: Font sizes and weights should be **unchanged**
   - Spacing: Margins and padding should be **identical**
   - Colors: Primary, text, and background colors should be **unchanged** (except Black Friday #d63031)
   - Interactive behavior: Hover states should be **identical**
6. Document any discrepancies
7. If discrepancies found: Adjust CSS and re-test until pixel-perfect match achieved

**Acceptance**: Visual regression test passes; no unintended styling changes; card appearance preserved

---

### T012: End-to-End Pricing Page Test

**File**: All pricing-related files
**Actions**:
1. Run `bundle exec jekyll serve --drafts`
2. Open http://localhost:4000/pricing in Chrome, Firefox, and Safari
3. **Sinra Pro Plan - Desktop**:
   - [ ] Two price frames visible side-by-side
   - [ ] Monthly: €10/month clearly displayed
   - [ ] Annual: €96/year (or €60 if Black Friday active) clearly displayed
   - [ ] Annual frame is visually emphasized (larger text, bordered, or highlighted)
   - [ ] All 12 features listed (same for both tiers)
   - [ ] "Start Free Trial" button clickable
4. **Specif-AI Plan - Desktop**:
   - [ ] Plan name displays as "Sinra Specif-AI"
   - [ ] "Coming Soon" badge visible (non-clickable)
   - [ ] 6 features listed (4 AI + 2 supporting)
   - [ ] No pricing displayed (Coming Soon tier has no price)
5. **Responsive Testing**:
   - [ ] Desktop (1024px): Frames side-by-side
   - [ ] Tablet (768px): Frames side-by-side, readable
   - [ ] Mobile (375px): Frames stacked vertically, annual first
   - [ ] No layout breaking at any width
6. **Black Friday (if active)**:
   - [ ] Annual frame shows €60, original €96 struck through
   - [ ] Promo code "BLACKFRIDAY2025" visible
   - [ ] Monthly frame unaffected
7. **Cross-Browser**:
   - [ ] Chrome: All elements render correctly
   - [ ] Firefox: All elements render correctly
   - [ ] Safari: All elements render correctly
8. Document any issues and resolution steps

**Acceptance**: All acceptance scenarios pass; no visual anomalies; responsive layout functional; cross-browser compatible

---

### T013: Build Verification & Final Validation

**File**: All files
**Actions**:
1. Run `bundle exec jekyll build`
2. Verify build completes without errors or warnings:
   - No Liquid syntax errors
   - No missing includes or data files
   - No broken front matter in layouts/pages
3. Check build output:
   - `_site/pricing/index.html` exists and is valid HTML
   - Check for broken links (if auto-check tool available)
4. Verify `_site/` directory has all assets:
   - CSS files present
   - JavaScript files present
   - Images/SVGs present
5. Spot-check generated HTML:
   - Pricing tiers rendered correctly
   - No orphaned HTML tags
   - All Liquid variables resolved
6. Confirm no regressions in other pages (spot-check homepage, about page)
7. Document build time and any warnings for performance baseline

**Acceptance**: Build succeeds with zero errors/warnings; generated HTML is valid; pricing page renders correctly; no regressions in other pages

---

## Success Criteria by User Story

### User Story 1: Pricing Comparison
- ✅ SC-001: Dual pricing frames displayed side-by-side on desktop/tablet (> 768px) with annual emphasized
- ✅ SC-002: 75%+ of test users can identify monthly/annual costs and recommended option
- ✅ SC-003: Black Friday system functional (promotional pricing, strike-through, promo code)
- ✅ SC-007: Responsive layout adapts to mobile without breaking

### User Story 2: AI-Powered Specif-AI
- ✅ SC-004: Sinra Specif-AI plan clearly labeled with "Coming Soon" badge
- ✅ SC-005: 4+ AI-related capabilities listed in features
- ✅ SC-008: All existing features preserved in updated structure

### User Story 3: Visual Consistency
- ✅ SC-006: Visual regression test confirms no pixel-level changes to card styling, typography, colors

---

## Implementation Strategy

**MVP Scope**: All three user stories (US1, US2, US3) are interdependent and required for a complete, cohesive update. Partial implementation would leave inconsistent experience.

**Recommended Execution**:
1. **Phase 1-2** (T001-T003): Complete setup sequentially (data foundation)
2. **Phase 3-5** (T004-T011): Execute user stories in parallel by story:
   - US1 (T004-T006): Pricing display framework
   - US2 (T007-T009): Specif-AI introduction (parallel with US1)
   - US3 (T010-T011): Visual verification (parallel with US1 & US2)
3. **Phase 6** (T012-T013): Complete integration testing and build verification

**Estimated Timeline**:
- Phase 1-2: ~1-2 hours (data updates)
- Phase 3-5 (parallel): ~2-3 hours (template, CSS, content)
- Phase 6: ~1-2 hours (testing, verification)
- **Total**: ~4-7 hours for complete feature

**Testing Strategy**:
- Manual testing via `bundle exec jekyll serve` (primary method)
- Visual regression testing for consistency
- Cross-browser testing (Chrome, Firefox, Safari)
- Responsive testing at 4+ breakpoints

---

## Rollback Plan

If critical issues arise during implementation:

```bash
# Revert data changes
git checkout -- _data/en/pricing.yml _data/fr/pricing.yml

# Revert template changes
git checkout -- _includes/pricing.html

# Revert CSS changes
git checkout -- assets/css/plan.css

# Rebuild
bundle exec jekyll build
```

**Status Check**: `git status` shows clean working tree; `bundle exec jekyll build` completes successfully

---

## Reference Documents

- **Specification**: `specs/3-pricing-redesign/spec.md`
- **Implementation Plan**: `specs/3-pricing-redesign/plan.md`
- **Data Model**: `specs/3-pricing-redesign/data-model.md`
- **Quick Start**: `specs/3-pricing-redesign/quickstart.md`
- **Constitution**: `.specify/memory/constitution.md`
