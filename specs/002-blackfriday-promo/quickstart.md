# Phase 1: Quickstart Guide

**Feature**: Black Friday 50% Discount Promotion
**Audience**: Developers implementing the feature

## Overview

This guide provides the minimal steps to implement and test the Black Friday promotion.

## Prerequisites

- Ruby 3.4.5 (via Mise)
- Jekyll 4.3.4
- `bundle exec jekyll serve` running locally
- Familiarity with Liquid templating and YAML structure

## Implementation Summary

1. **Add YAML data** for promotion messaging and pricing
2. **Create banner component** in `_includes/` (HTML + CSS)
3. **Create badge component** in `_includes/` (reusable snippet)
4. **Add banner to base layout** (`_layouts/default.html`)
5. **Embed badge on pricing page** (annual plan card)
6. **Add CSS styling** for banner and badge
7. **Add vanilla JS** for banner dismissal (session-based)
8. **Test multilingual display** (EN + FR)

## Files to Create/Modify

### New Files

- `_data/en/promotion.yml`  -  English promotion data
- `_data/fr/promotion.yml`  -  French promotion data
- `_includes/blackfriday-banner.html`  -  Sticky banner component
- `_includes/blackfriday-badge.html`  -  Discount badge component

### Modified Files

- `_data/en/pricing.yml`  -  Add original price + promotion flag to annual plan
- `_data/fr/pricing.yml`  -  French equivalent of pricing changes
- `_layouts/default.html`  -  Include banner at top of page
- `_pages/pricing.en.html`  -  Include badge on annual card
- `_pages/pricing.fr.html`  -  Include badge on annual card (French)
- `assets/css/theme.css`  -  Add `.sticky-banner` and `.promotion-badge` styles
- `assets/js/script.js`  -  Add banner dismissal logic

## Detailed Steps

### Step 1: Create Promotion Data

**File**: `_data/en/promotion.yml`

See `data-model.md` for the complete YAML structure. Minimal example:

```yaml
name: "Black Friday"
discount_percentage: 50
plan_type: "annual"

banner:
  enabled: true
  message: "Black Friday: 50% off annual plans"
  cta_text: "View Pricing"
  cta_link: "/en/pricing"
  dismissible: true

badge:
  enabled: true
  text: "50% OFF"
  color_class: "badge-promotion"

pricing:
  original_annual_price: 100
  discounted_annual_price: 50
  currency: "€"
```

**File**: `_data/fr/promotion.yml`

Mirror structure with French translations.

### Step 2: Create Banner Component

**File**: `_includes/blackfriday-banner.html`

```html
{% assign promo = site.data[page.lang].promotion %}
{% if promo.banner.enabled %}
<div id="blackfriday-banner" class="sticky-banner">
  <div class="sticky-banner-content">
    <span class="banner-message">{{ promo.banner.message }}</span>
    <a href="{{ promo.banner.cta_link }}" class="banner-cta">{{ promo.banner.cta_text }}</a>
    {% if promo.banner.dismissible %}
    <button id="banner-close" class="banner-close" aria-label="Close banner">&times;</button>
    {% endif %}
  </div>
</div>
{% endif %}
```

### Step 3: Create Badge Component

**File**: `_includes/blackfriday-badge.html`

```html
{% assign promo = site.data[page.lang].promotion %}
{% if promo.badge.enabled %}
<div class="promotion-badge {{ promo.badge.color_class }}">
  {{ promo.badge.text }}
</div>
{% endif %}
```

### Step 4: Add Banner to Base Layout

**File**: `_layouts/default.html`

Add near the top, before `<body>` content:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- existing head content -->
  </head>
  <body>
    {% include blackfriday-banner.html %}
    <!-- rest of body content -->
  </body>
</html>
```

### Step 5: Embed Badge on Pricing Page

**File**: `_pages/pricing.en.html` (and `.fr.html`)

In the annual plan card section:

```html
<div class="pricing-card annual-plan">
  {% include blackfriday-badge.html %}
  <!-- existing card content -->
  <div class="pricing-display">
    {% if site.data[page.lang].promotion.badge.enabled %}
      <del class="original-price">
        {{ site.data[page.lang].promotion.pricing.currency }}
        {{ site.data[page.lang].promotion.pricing.original_annual_price }}
      </del>
      <strong class="discounted-price">
        {{ site.data[page.lang].promotion.pricing.currency }}
        {{ site.data[page.lang].promotion.pricing.discounted_annual_price }}
      </strong>
    {% else %}
      <!-- normal pricing display -->
    {% endif %}
  </div>
</div>
```

### Step 6: Add CSS Styling

**File**: `assets/css/theme.css`

Add new rules:

```css
/* Sticky Banner */
.sticky-banner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #d63031; /* red */
  color: white;
  padding: 12px 20px;
  z-index: 1000;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.sticky-banner-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.banner-message {
  flex: 1;
  font-size: 14px;
}

.banner-cta {
  background-color: white;
  color: #d63031;
  padding: 6px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 12px;
  white-space: nowrap;
}

.banner-cta:hover {
  background-color: #f0f0f0;
}

.banner-close {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-close:hover {
  opacity: 0.8;
}

/* Adjust body padding for fixed banner */
body.banner-active {
  padding-top: 50px;
}

/* Promotion Badge */
.promotion-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: #d63031;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.badge-promotion {
  /* color already set in .promotion-badge */
}

/* Pricing Display */
.original-price {
  color: #888;
  font-size: 12px;
  margin-right: 8px;
  text-decoration: line-through;
}

.discounted-price {
  color: #d63031;
  font-size: 20px;
  font-weight: 700;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .sticky-banner-content {
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }

  .banner-message {
    font-size: 13px;
    max-width: 80%;
  }

  .banner-cta {
    font-size: 11px;
    padding: 5px 12px;
  }

  body.banner-active {
    padding-top: 65px;
  }
}
```

### Step 7: Add JavaScript for Banner Dismissal

**File**: `assets/js/script.js`

Add or append:

```javascript
(function() {
  const BANNER_ID = 'blackfriday-banner';
  const SESSION_STORAGE_KEY = 'blackfriday_banner_dismissed';

  function closeBanner() {
    const banner = document.getElementById(BANNER_ID);
    if (banner) {
      banner.style.display = 'none';
      document.body.classList.remove('banner-active');
      sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
    }
  }

  function initBanner() {
    const banner = document.getElementById(BANNER_ID);
    if (!banner) return;

    // Check if banner was dismissed in this session
    if (sessionStorage.getItem(SESSION_STORAGE_KEY)) {
      banner.style.display = 'none';
      return;
    }

    // Add active state to body for padding adjustment
    document.body.classList.add('banner-active');

    // Attach close button listener
    const closeBtn = document.getElementById('banner-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeBanner);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBanner);
  } else {
    initBanner();
  }
})();
```

### Step 8: Test Multilingual Display

1. **English**: `bundle exec jekyll serve` → Visit `http://localhost:4000/en/pricing`
   - Verify banner shows: "Black Friday: 50% off annual plans"
   - Verify badge shows: "50% OFF"
   - Verify pricing shows: €100 ~~€100~~ (original struck) + €50 (bold, red)
   - Test close button: dismiss banner, verify dismissal persists during session
   - Test CTA: "View Pricing" link navigates to pricing section

2. **French**: `http://localhost:4000/fr/pricing`
   - Verify banner shows: "Black Friday : 50% de réduction sur les forfaits annuels"
   - Verify badge shows: "50% DE RÉDUCTION"
   - Verify messaging is French
   - CTA link points to `/fr/pricing`

3. **Cross-browser**: Chrome, Firefox, Safari
   - Verify banner renders correctly
   - Verify CSS doesn't break existing layout
   - Check for layout shift (Cumulative Layout Shift)

4. **Mobile**: Resize to <768px
   - Verify banner text is concise and readable
   - Verify close button is tappable
   - Verify badge on pricing card doesn't overlap other content

## Rollback Instructions

To disable promotion:

1. **`_data/en/promotion.yml`**: Set `banner.enabled: false` and `badge.enabled: false`
2. **`_data/fr/promotion.yml`**: Same changes
3. **Rebuild**: `bundle exec jekyll serve` will reflect changes immediately

No code needs to be removed - just toggle the YAML flags.

## Success Criteria Checklist

- [ ] Banner appears on all pages within 1 second
- [ ] Badge visible on pricing page annual plan card
- [ ] Pricing shows original (struck) + discounted (bold)
- [ ] Banner dismissible; stays dismissed for session
- [ ] English and French versions match spec
- [ ] Mobile responsiveness verified (<768px)
- [ ] No layout shift on pricing page (CLS = 0)
- [ ] Page load time remains <2 seconds
- [ ] All links (CTA, navigation) functional
- [ ] Cross-browser testing passed (Chrome, Firefox, Safari)

## Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| Banner doesn't show | Check `banner.enabled: true` in YAML; verify `_includes/blackfriday-banner.html` exists |
| Banner overlaps header | Adjust `z-index` in `.sticky-banner` CSS |
| Mobile text wraps awkwardly | Reduce `font-size` or break into multiple lines in `_data/[lang]/promotion.yml` |
| Badge not visible on pricing card | Ensure `position: relative` on `.pricing-card` container |
| Dismissal doesn't work | Check browser console for JS errors; verify `sessionStorage` API available |
| French text missing | Verify `_data/fr/promotion.yml` has all keys matching `_data/en/promotion.yml` |

## Next Steps

After implementation:
1. Run `/speckit.tasks` to generate actionable task breakdown
2. Use `/speckit.implement` to execute tasks with Claude Code
3. Create PR with: branch name, links to spec/plan, notes on multilingual updates
4. Run `jekyll build` to verify production build succeeds
