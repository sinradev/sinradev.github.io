# Implementation Plan: Unified Pricing Display with AI-Powered Features

**Feature Branch**: `3-pricing-redesign`
**Created**: 2025-11-28
**Status**: Planning
**Spec Reference**: [spec.md](./spec.md)

---

## Technical Context

### Current State Analysis

**Existing Pricing Implementation**:
- Two separate plan entries in `_data/en/pricing.yml` (monthly: €10, annual: €96)
- Separate YAML entries allow for different content but create data duplication
- Pricing template in `_includes/pricing.html` loops through plans array
- Black Friday system checks `site.data[page.lang].promotion` for date-based discounts
- Plan cards use consistent styling through CSS classes

**Key Files**:
- **Data**: `_data/en/pricing.yml`, `_data/fr/pricing.yml`
- **Template**: `_includes/pricing.html`
- **Styles**: `assets/css/plan.css` (pricing-specific styles)
- **Theme**: `assets/css/theme.css` (DaisyUI Dim theme variables)

### Clarifications Resolved

**Q1: Mobile Display Strategy**
- **Decision**: For screens < 768px, stack price frames vertically (annual frame above monthly)
- **Rationale**: Side-by-side layout requires minimum 600px width to avoid cramping; stacking preserves clarity on mobile
- **Alternatives**: Considered hiding monthly option on mobile (rejected - users want all pricing visible), considered single-column layout without frames (rejected - loses visual hierarchy)

**Q2: Visual Emphasis Method for Annual Frame**
- **Decision**: Use increased font size (1.2x larger) for annual price amount + subtle background container to differentiate
- **Rationale**: Size difference is immediately recognizable without adding complexity; maintains DaisyUI color harmony
- **Alternatives**: Considered border/outline (rejected - adds visual noise), considered opacity reduction for monthly (rejected - reduces clarity)

**Q3: Sinra Specif-AI Feature List Source**
- **Decision**: Use defined AI-related features in spec acceptance scenarios as baseline; add 2-3 additional related capabilities
- **Rationale**: Spec provides 4 explicit examples; can expand with related concepts (templates, automation, integration with existing Sinra Pro features)
- **Alternatives**: Considered waiting for full product specs (rejected - timeline requires content ready now), considered using placeholder text (rejected - unprofessional)

---

## Constitution Check

**Compliance Status**: ✅ FULL COMPLIANCE

| Requirement | Status | Notes |
|---|---|---|
| **DaisyUI Dim Theme** | ✅ | All new styling will use `assets/css/theme.css` variables; no hardcoded colors |
| **Plain CSS (No SCSS)** | ✅ | Plain CSS only in `plan.css` modifications |
| **Multilingual Support** | ✅ | YAML updates in both `_data/en/` and `_data/fr/`; Liquid templating preserved |
| **No New Gems/Tools** | ✅ | Uses existing Jekyll + Ruby infrastructure; no build tools or preprocessors |
| **Testing Standards** | ✅ | Manual testing via `bundle exec jekyll serve` across responsive breakpoints |
| **Git Workflow** | ✅ | Feature branch `3-pricing-redesign` follows naming convention |
| **Black Friday Exception** | ✅ | Existing hardcoded colors (#d63031) preserved for promotion (expires Nov 28) |

---

## Design Decisions

### Data Model: Unified Pricing Structure

**Problem**: Current approach uses two separate plan entries, creating duplication and inconsistency risks.

**Solution**: Consolidate into single plan with `pricing_tiers` array containing monthly/annual options.

```yaml
- name: Sinra Pro
  color: "#2196F3"
  description: "..."
  pricing_tiers:
    - period: Monthly
      price: "10"
      billing: "/month"
      plan_type: "monthly"
    - period: Annual
      price: "96"
      billing: "/year"
      plan_type: "annual"
      original_price: "120"
      struck_price: "96"
      has_black_friday: true
      black_friday_price: "60"
      promo_code: "BLACKFRIDAY2025"
      recommended: true
  features: [shared feature list]
  call_to_action:
    link: "..."
    text: "..."
```

**Benefits**:
- Single source of truth for plan (avoids duplication)
- Clear separation of pricing tiers
- Easier to add future tier options (quarterly, etc.)
- Features automatically shared between tiers

**Impact on Template**: `_includes/pricing.html` will iterate over `plan.pricing_tiers` within each plan, creating nested pricing frames.

---

### Template Architecture: Side-by-Side Pricing Frames

**HTML Structure**:
```html
<div class="plan-card">
  <h3>{{ plan.name }}</h3>

  <!-- Pricing Frames Container -->
  <div class="pricing-tiers">
    {% for tier in plan.pricing_tiers %}
      <div class="pricing-frame {% if tier.recommended %}emphasized{% endif %}">
        <div class="tier-period">{{ tier.period }}</div>
        <div class="tier-price">
          {% if tier.has_black_friday and is_black_friday_active %}
            <!-- Black Friday display -->
          {% elsif tier.original_price %}
            <!-- Regular discount display -->
          {% else %}
            <!-- Standard price display -->
          {% endif %}
        </div>
      </div>
    {% endfor %}
  </div>

  <!-- Features (shared) -->
  <div class="plan-features">...</div>

  <!-- CTA -->
  <div class="plan-cta">...</div>
</div>
```

**CSS Strategy**:
- `.pricing-tiers`: Flexbox container with `gap` for spacing
- `.pricing-frame`: Individual tier container with optional border/background
- `.pricing-frame.emphasized`: Increased font-size (1.2x), subtle background, slightly larger padding
- Responsive: `@media (max-width: 767px) { .pricing-tiers { flex-direction: column; } }`

---

### Sinra Specif-AI Plan Introduction

**YAML Changes** (second plan entry):
```yaml
- name: Sinra Specif-AI
  color: "#2196F3"  # Same color as Pro for tier grouping
  description: "AI-powered specification generation for issues, capabilities, and projects"
  pricing_tiers:
    - period: Coming Soon
      price: null  # No pricing yet
      plan_type: "coming_soon"
  features:
    - text: "AI-powered issue specification"
      highlight: true
      ai_feature: true
    - text: "Automated capability definition"
      highlight: true
      ai_feature: true
    - text: "AI-generated project templates"
      highlight: true
      ai_feature: true
    - text: "AI-assisted requirement generation"
      highlight: true
      ai_feature: true
    - text: "Coming soon - more capabilities planned"
      highlight: false
      ai_feature: false
  call_to_action:
    badge_type: "coming_soon"
    text: "Coming Soon"
```

**Template Display**:
- Detect `plan_type: "coming_soon"` → render "Coming Soon" badge instead of button
- Apply `ai_feature: true` → optional visual indicator (icon/styling) to highlight AI capabilities
- No CTA button; badge is non-interactive

---

## Phase 0: Research & Clarifications (COMPLETE)

All clarifications resolved above:
- ✅ Mobile frame layout strategy (stack vertically < 768px)
- ✅ Visual emphasis method (1.2x font-size for annual)
- ✅ Specif-AI feature sourcing (spec examples + related capabilities)

**Output**: Technical decisions documented in Design Decisions section.

---

## Phase 1: Design & Implementation

### 1.1 Data Model (data-model.md)

**Entities**:

**PricingPlan**
- Fields: `name`, `color`, `description`, `pricing_tiers[]`, `features[]`, `call_to_action`
- Validation: At least one pricing tier required; features array not empty
- State: `draft` (unpublished) or `active` (visible to customers)

**PricingTier**
- Fields: `period`, `price`, `billing`, `plan_type`, `original_price`, `struck_price`, `has_black_friday`, `black_friday_price`, `promo_code`, `recommended`
- Validation: `price` optional (null for Coming Soon tiers); `billing` follows pattern "/unit"
- Pricing Logic: If `has_black_friday=true` AND promotion active, display `black_friday_price`; else if `original_price` exists, display as strikethrough

**PricingFeature**
- Fields: `text`, `highlight`, `ai_feature`
- Validation: `text` required, non-empty string; `highlight` defaults to false; `ai_feature` optional

**PromotionWindow** (existing, preserved)
- Fields: `end_date` (YYYY-MM-DD format)
- Logic: Compare Jekyll build time against end_date to determine promotion activity

### 1.2 YAML Structure Updates

**Action**: Update `_data/en/pricing.yml`:
1. Replace two separate monthly/annual entries with single Sinra Pro entry containing `pricing_tiers` array
2. Add second entry for Sinra Specif-AI with Coming Soon tier
3. Preserve all existing feature text and metadata

**Action**: Update `_data/fr/pricing.yml`:
1. Mirror English structure with French translations
2. Maintain feature parity with English version
3. Translate "Coming Soon" and new AI features appropriately

### 1.3 Template Changes

**File**: `_includes/pricing.html`

**Key Modifications**:
1. Update plan loop to handle `pricing_tiers` array
2. Create nested loop for tier display
3. Update Black Friday logic to work within tier context
4. Add "Coming Soon" badge detection for non-pricing tiers
5. Preserve all existing styling classes and CTA button logic

**Testing Approach**:
- Verify both monthly and annual prices display correctly
- Verify Black Friday promotion applies only when active
- Verify Coming Soon badge displays for Specif-AI
- Cross-check responsive layout at 320px, 768px, 1024px, 1440px

### 1.4 CSS Updates

**File**: `assets/css/plan.css`

**New Classes**:
```css
.pricing-tiers {
  display: flex;
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.pricing-frame {
  flex: 1;
  padding: 1rem;
  border-radius: var(--radius-box);
  background: var(--color-base-300);
  transition: all 0.3s ease;
}

.pricing-frame.emphasized {
  flex: 1.1;  /* Slightly larger */
  font-size: 1.1em;
  background: var(--color-base-200);
  border: 2px solid var(--color-primary);
}

.tier-period {
  font-size: 0.875rem;
  color: var(--color-base-content);
  margin-bottom: 0.5rem;
}

.tier-price {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-primary);
}

.pricing-frame.emphasized .tier-price {
  font-size: 1.8rem;  /* 1.2x base 1.5rem */
}

/* Mobile: Stack vertically */
@media (max-width: 767px) {
  .pricing-tiers {
    flex-direction: column;
  }

  .pricing-frame.emphasized {
    order: -1;  /* Annual frame appears first on mobile */
  }
}
```

**Theme Compliance**: Uses DaisyUI Dim variables (`--color-base-300`, `--color-primary`, etc.); no hardcoded colors except existing Black Friday promotions.

### 1.5 Contracts (API Specification)

**No backend API changes required**. This is a frontend-only redesign using existing Jekyll static generation. All data comes from YAML files.

**Internal Contract** (Template ↔ Data):
- Pricing plan must include `pricing_tiers` array with at least one tier
- Each tier must have `period`, `plan_type` (determines display logic)
- Optional fields: `price`, `original_price`, `struck_price`, `black_friday_price`, `promo_code`

---

## Phase 2: Testing & Validation

### 2.1 Functional Testing

**Test Case 1: Dual Pricing Display**
- ✅ Monthly price displays at €10
- ✅ Annual price displays at €96 (standard) or €60 (Black Friday)
- ✅ Annual frame is visually emphasized (larger, bordered)
- ✅ Both frames visible at desktop width (> 768px)

**Test Case 2: Black Friday Activation**
- ✅ When promotion active: Show €60, strike €96, display promo code
- ✅ When promotion inactive: Show €96, no strike-through
- ✅ Promo code visible only during active window

**Test Case 3: Specif-AI Introduction**
- ✅ Second plan labeled "Sinra Specif-AI"
- ✅ Shows "Coming Soon" badge instead of CTA button
- ✅ Features list includes 4+ AI-related items
- ✅ All Specif-AI features are visible and readable

**Test Case 4: Responsive Design**
- ✅ Desktop (1024px+): Frames side-by-side
- ✅ Tablet (768-1023px): Frames side-by-side, adjusted spacing
- ✅ Mobile (< 768px): Frames stacked vertically, annual first
- ✅ Small mobile (320px): No layout breakage, text legible

**Test Case 5: Visual Consistency**
- ✅ Card dimensions unchanged
- ✅ Typography sizes/weights match current design
- ✅ Color palette consistent with DaisyUI Dim theme
- ✅ Interactive elements (buttons, badges) preserve hover/active states

### 2.2 Multilingual Testing

- ✅ English pricing displays correctly
- ✅ French pricing displays correctly (when translations added)
- ✅ Sinra Specif-AI label renders in both languages
- ✅ AI feature descriptions clear in both languages

### 2.3 Browser & Device Testing

- ✅ Chrome (desktop + mobile)
- ✅ Firefox (desktop + mobile)
- ✅ Safari (desktop + mobile)
- ✅ Edge (desktop)

---

## Success Criteria Mapping

| Success Criterion | Implementation Detail | Validation Method |
|---|---|---|
| **SC-001**: Dual frames on desktop/tablet with emphasis | CSS `.emphasized` class on annual tier | Visual inspection at 768px+ |
| **SC-002**: 75%+ user clarity on costs | Side-by-side frames, clear labeling | User testing with real customers |
| **SC-003**: Black Friday system functional | Preserve existing logic, apply to tiers | Test during promotion window |
| **SC-004**: Specif-AI clearly labeled | Plan name + Coming Soon badge | Visual inspection of second card |
| **SC-005**: 4+ AI features listed | Features array with `ai_feature: true` | Count features in rendered card |
| **SC-006**: Visual regression pass | No CSS changes to existing classes | Pixel-diff comparison with current |
| **SC-007**: Responsive layout stable | Flexbox stacking at mobile breakpoint | Test at 320px, 768px, 1024px |
| **SC-008**: Features preserved in new structure | All Sinra Pro features in YAML | Verify feature count matches original |

---

## Implementation Roadmap

### Phase 2: Data & Template (Week 1)
1. Update `_data/en/pricing.yml` with unified plan structure
2. Update `_data/fr/pricing.yml` (structure only; French content separate)
3. Modify `_includes/pricing.html` to handle `pricing_tiers` array
4. Test with `bundle exec jekyll serve --drafts`

### Phase 3: Styling (Week 1)
1. Add new CSS classes to `assets/css/plan.css`
2. Test responsive layout at breakpoints
3. Verify DaisyUI Dim theme compliance
4. Cross-browser testing (Chrome, Firefox, Safari)

### Phase 4: Content & Polish (Week 2)
1. Finalize Sinra Specif-AI feature list
2. Add French translations (if needed)
3. User testing for clarity
4. Final visual regression testing

---

## Dependencies & Risks

**Dependencies**:
- ✅ No new external libraries required
- ✅ No build tool changes
- ✅ No gem updates needed
- ✅ Existing Jekyll/Ruby environment sufficient

**Risks**:
- **Risk**: Mobile layout breaks on very small screens (< 320px)
  - **Mitigation**: Test at 320px minimum; use flexible units (rem) for sizing
- **Risk**: Black Friday promotion end date passes mid-development
  - **Mitigation**: Preserve existing promotion logic; test with both active/inactive states
- **Risk**: Specif-AI feature list not finalized
  - **Mitigation**: Use spec examples as baseline; can be updated after launch with separate content update

---

## Files to Modify

1. **Data**: `_data/en/pricing.yml` (restructure)
2. **Data**: `_data/fr/pricing.yml` (mirror structure + French translations)
3. **Template**: `_includes/pricing.html` (support `pricing_tiers` array)
4. **Styles**: `assets/css/plan.css` (add frame styling, responsive rules)

**Files NOT to Modify**:
- `assets/css/theme.css` (use existing variables only)
- `_includes/header.html`, `_includes/footer.html`
- Pricing page layout (`_pages/pricing.*.html`)
- Other site sections

---

## Deployment

**Build Verification**:
```bash
bundle exec jekyll build
```
Must complete without warnings.

**Local Testing**:
```bash
bundle exec jekyll serve --drafts
# Visit http://localhost:4000/pricing
```

**Visual Checklist**:
- [ ] Sinra Pro shows monthly + annual frames
- [ ] Annual frame is visually emphasized
- [ ] Sinra Specif-AI appears as second plan
- [ ] "Coming Soon" badge visible
- [ ] AI features listed
- [ ] Responsive layout works at all breakpoints
- [ ] Black Friday display correct (when active)
- [ ] All feature text visible and readable
- [ ] No CSS warnings or errors

**Commit & PR**:
- Feature branch: `3-pricing-redesign`
- Link to this plan in PR description
- Note multilingual considerations
- Request visual review before merge
