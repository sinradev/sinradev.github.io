# Quick Start Guide: Unified Pricing Implementation

**Feature**: Unified Pricing Display with AI-Powered Features
**Branch**: `3-pricing-redesign`
**Status**: Ready for Implementation

---

## Overview

This guide provides developers with a quick reference for implementing the unified pricing display. See `plan.md` for detailed architecture and `data-model.md` for complete entity definitions.

---

## Implementation Checklist

### Phase 1: Data Updates (30 mins)

#### Step 1.1: Update English Pricing Data
**File**: `_data/en/pricing.yml`

**Actions**:
1. Delete the two separate Sinra Pro entries (monthly + annual)
2. Create single Sinra Pro entry with `pricing_tiers` array:
   ```yaml
   - name: Sinra Pro
     color: "#2196F3"
     description: "The complete project management platform combining V-Model and Agile methodologies"
     pricing_tiers:
       - period: Monthly
         price: "10"
         currency: "€"
         billing: "/month"
         plan_type: "monthly"
       - period: Annual
         price: "96"
         currency: "€"
         billing: "/year"
         plan_type: "annual"
         original_price: "120"
         struck_price: "96"
         has_black_friday: true
         black_friday_price: "60"
         promo_code: "BLACKFRIDAY2025"
         recommended: true
     features: [all existing features]
     call_to_action:
       link: "https://app.sinra.dev/users/sign_up"
       text: "Start Free Trial"
   ```

3. Add Sinra Specif-AI plan entry:
   ```yaml
   - name: Sinra Specif-AI
     color: "#2196F3"
     description: "AI-powered specification generation for issues, capabilities, and projects"
     pricing_tiers:
       - period: Coming Soon
         price: null
         billing: null
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
       - text: "Integration with Sinra Pro features"
         highlight: false
       - text: "More capabilities coming soon..."
         highlight: false
     call_to_action:
       link: null
       text: "Coming Soon"
       badge_type: "coming_soon"
   ```

#### Step 1.2: Update French Pricing Data
**File**: `_data/fr/pricing.yml`

**Actions**:
1. Mirror the English structure with French translations:
   - `description` fields → French translations
   - `features[].text` → French translations
   - `call_to_action.text` → "Démarrer l'essai gratuit" (for Pro), "Bientôt disponible" (for Specif-AI)

**Reference English-French Mapping**:
- "AI-powered issue specification" → "Spécification d'issues alimentée par l'IA"
- "Automated capability definition" → "Définition automatisée des capacités"
- "AI-generated project templates" → "Modèles de projet générés par l'IA"
- "AI-assisted requirement generation" → "Génération d'exigences assistée par l'IA"

---

### Phase 2: Template Updates (45 mins)

#### Step 2.1: Modify Pricing Template
**File**: `_includes/pricing.html`

**Key Changes**:

1. **Update the plan card pricing section** to handle `pricing_tiers` array:

   ```liquid
   <!-- OLD: Single price per plan -->
   <div class="plan-price">
     <span class="currency">{{ plan.currency }}</span>
     <span class="amount">{{ plan.price }}</span>
     <span class="period">{{ plan.period }}</span>
   </div>

   <!-- NEW: Dual pricing frames -->
   <div class="pricing-tiers">
     {% for tier in plan.pricing_tiers %}
       {% assign promo = site.data[page.lang].promotion %}
       {% assign today = site.time | date: "%Y-%m-%d" %}
       {% assign is_black_friday_active = false %}
       {% if promo.end_date %}
         {% if today <= promo.end_date %}
           {% assign is_black_friday_active = true %}
         {% endif %}
       {% endif %}

       <div class="pricing-frame {% if tier.recommended %}emphasized{% endif %}">
         <div class="tier-period">{{ tier.period }}</div>

         {% if tier.plan_type == "coming_soon" %}
           <!-- Coming Soon tier: no price display -->
         {% elsif tier.has_black_friday and is_black_friday_active %}
           <!-- Black Friday pricing -->
           <div class="plan-price-black-friday">
             <span class="original-price">{{ tier.currency }}{{ tier.original_price }}</span>
             <span class="struck-price">{{ tier.currency }}{{ tier.struck_price }}</span>
             <div class="plan-price">
               <span class="currency">{{ tier.currency }}</span>
               <span class="amount">{{ tier.black_friday_price }}</span>
               <span class="period">{{ tier.billing }}</span>
             </div>
             {% if tier.promo_code %}
               <div class="promo-code">
                 <span class="promo-label">{{ site.data[site.active_lang].strings.pricing.promo_code }}</span>
                 <span class="promo-code-value">{{ tier.promo_code }}</span>
               </div>
             {% endif %}
           </div>
         {% elsif tier.original_price %}
           <!-- Regular discount display -->
           <div class="plan-price-with-discount">
             <span class="original-price">{{ tier.currency }}{{ tier.original_price }}</span>
             <div class="plan-price">
               <span class="currency">{{ tier.currency }}</span>
               <span class="amount">{{ tier.price }}</span>
               <span class="period">{{ tier.billing }}</span>
             </div>
           </div>
         {% else %}
           <!-- Standard pricing -->
           <div class="plan-price">
             <span class="currency">{{ tier.currency }}</span>
             <span class="amount">{{ tier.price }}</span>
             <span class="period">{{ tier.billing }}</span>
           </div>
         {% endif %}
       </div>
     {% endfor %}
   </div>
   ```

2. **Update CTA button rendering** to support Coming Soon badge:

   ```liquid
   {% if plan.call_to_action %}
     <div class="plan-cta">
       {% if plan.call_to_action.badge_type == "coming_soon" %}
         <div class="cta-badge coming-soon">
           {{ plan.call_to_action.text }}
         </div>
       {% else %}
         <a href="{{ plan.call_to_action.link }}" class="cta-button {% if plan.recommended %}primary{% else %}secondary{% endif %}">
           {{ plan.call_to_action.text }}
         </a>
       {% endif %}
     </div>
   {% endif %}
   ```

3. **Preserve existing sections**:
   - Plan header (name, description)  -  unchanged
   - Plan features list  -  unchanged (no per-tier variation)
   - Promotion badge logic  -  moved to tier-level logic

#### Step 2.2: Test Template Changes

```bash
# Start local server
bundle exec jekyll serve --drafts

# Verify:
# 1. Visit http://localhost:4000/pricing
# 2. Check Sinra Pro displays both monthly and annual frames
# 3. Check annual frame is visually emphasized
# 4. Check Sinra Specif-AI appears as second plan
# 5. Check "Coming Soon" badge displays
# 6. Test Black Friday (if promotion active)
```

---

### Phase 3: Styling Updates (30 mins)

#### Step 3.1: Add CSS Classes
**File**: `assets/css/plan.css`

**Add these classes**:

```css
/* Pricing frames container */
.pricing-tiers {
  display: flex;
  gap: 1.5rem;
  margin: 1.5rem 0;
}

/* Individual pricing frame */
.pricing-frame {
  flex: 1;
  padding: 1rem;
  border-radius: var(--radius-box);
  background: var(--color-base-300);
  transition: all 0.3s ease;
}

/* Emphasized frame (annual option) */
.pricing-frame.emphasized {
  flex: 1.1;  /* Slightly larger */
  background: var(--color-base-200);
  border: 2px solid var(--color-primary);
}

/* Tier period label */
.tier-period {
  font-size: 0.875rem;
  color: var(--color-base-content);
  margin-bottom: 0.5rem;
  font-weight: 500;
}

/* Tier price display */
.tier-price {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-primary);
}

/* Emphasized frame price (1.2x larger) */
.pricing-frame.emphasized .tier-price {
  font-size: 1.8rem;
}

/* Coming Soon badge */
.cta-badge {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-box);
  background: var(--color-neutral);
  color: var(--color-neutral-content);
  font-weight: 600;
  text-align: center;
  width: 100%;
}

/* Mobile responsive: stack frames vertically */
@media (max-width: 767px) {
  .pricing-tiers {
    flex-direction: column;
  }

  .pricing-frame.emphasized {
    order: -1;  /* Annual frame appears first on mobile */
  }

  /* Adjust font sizes for mobile */
  .tier-price {
    font-size: 1.25rem;
  }

  .pricing-frame.emphasized .tier-price {
    font-size: 1.5rem;
  }
}
```

#### Step 3.2: Verify Theme Compliance

✅ Check all color variables used:
- `--color-base-100`, `--color-base-200`, `--color-base-300`  -  backgrounds
- `--color-primary`  -  prices and emphasis
- `--color-neutral`, `--color-neutral-content`  -  badges
- `--radius-box`  -  border radius
- `--color-base-content`  -  text color

✅ No hardcoded colors except existing Black Friday (#d63031)
✅ All variables defined in `assets/css/theme.css`

---

### Phase 4: Testing (20 mins)

#### Test Case 1: Pricing Display
```
✓ Sinra Pro shows "Monthly" frame with €10/month
✓ Sinra Pro shows "Annual" frame with €96/year
✓ Annual frame is visually larger/emphasized
✓ Both frames visible on desktop/tablet
✓ Frames stack on mobile
```

#### Test Case 2: Black Friday (if active)
```
✓ Annual frame shows €60 (black_friday_price)
✓ Original price €120 is struck through
✓ Promo code "BLACKFRIDAY2025" displays
```

#### Test Case 3: Specif-AI Plan
```
✓ Second plan labeled "Sinra Specif-AI"
✓ "Coming Soon" badge visible instead of button
✓ AI features listed (4+ items)
✓ Non-interactive badge (no link)
```

#### Test Case 4: Responsive Design
```
Desktop (1024px+):
  ✓ Frames side-by-side
  ✓ Both frames equally visible
  ✓ Annual emphasized with size + border

Tablet (768px-1023px):
  ✓ Frames side-by-side
  ✓ Spacing adjusted
  ✓ Annual still emphasized

Mobile (< 768px):
  ✓ Frames stacked vertically
  ✓ Annual frame appears first
  ✓ No layout breakage
  ✓ Text legible at small sizes
```

#### Test Case 5: Build Verification
```bash
bundle exec jekyll build
# Should complete with no warnings
# Check _site/pricing/index.html exists
```

---

## Key Files to Know

| File | Purpose | Status |
|---|---|---|
| `_data/en/pricing.yml` | English pricing data | UPDATE |
| `_data/fr/pricing.yml` | French pricing data | UPDATE |
| `_includes/pricing.html` | Pricing template | UPDATE |
| `assets/css/plan.css` | Pricing styles | UPDATE |
| `assets/css/theme.css` | DaisyUI Dim variables | NO CHANGE |
| `specs/3-pricing-redesign/` | Feature documentation | REFERENCE |

---

## Common Pitfalls

### ❌ Don't

- Hardcode colors in new CSS (use theme variables)
- Add new gems or build tools
- Change the plan card dimensions or typography
- Modify feature logic or badge system
- Delete existing CSS classes

### ✅ Do

- Use DaisyUI Dim theme colors only
- Test at multiple breakpoints (320px, 768px, 1024px, 1440px)
- Test in Chrome, Firefox, Safari
- Verify French translations are complete
- Run `bundle exec jekyll build` before committing

---

## Rollback Plan

If issues arise:

1. **Revert data changes**: Restore original `_data/en/pricing.yml` (two separate plan entries)
2. **Revert template**: Revert `_includes/pricing.html` to original pricing loop
3. **Revert styles**: Remove new `.pricing-tiers`, `.pricing-frame` classes
4. Rebuild: `bundle exec jekyll build`

**Git Command**:
```bash
git checkout -- _data/en/pricing.yml _includes/pricing.html assets/css/plan.css
bundle exec jekyll build
```

---

## Next Steps After Implementation

1. **User Testing**: Validate 75%+ clarity on pricing with real customers
2. **Finalize Specif-AI Content**: Confirm AI feature descriptions with product team
3. **French Translation**: Complete French versions of Specif-AI features
4. **Performance**: Monitor page load time (should be unchanged)
5. **Analytics**: Track conversion metrics pre/post launch

---

## Support References

- **Data Model**: See `data-model.md` for complete entity definitions
- **Architecture**: See `plan.md` for design decisions and implementation roadmap
- **Specification**: See `spec.md` for requirements and acceptance criteria
- **Constitution**: See `.specify/memory/constitution.md` for styling standards
