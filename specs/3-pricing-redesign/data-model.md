# Data Model: Unified Pricing Structure

**Feature**: Unified Pricing Display with AI-Powered Features
**Created**: 2025-11-28
**Status**: Final Design

---

## Core Entities

### PricingPlan

**Purpose**: Represents a plan tier offered to customers (e.g., Sinra Pro, Sinra Specif-AI)

**Fields**:

| Field | Type | Required | Notes |
|---|---|---|---|
| `name` | String | Yes | Display name (e.g., "Sinra Pro", "Sinra Specif-AI") |
| `color` | Hex Color | Yes | Primary brand color (e.g., "#2196F3") |
| `description` | String | Yes | Short marketing description |
| `pricing_tiers` | Array<PricingTier> | Yes | Array of pricing options (min 1) |
| `features` | Array<PricingFeature> | Yes | Features included in plan (min 1) |
| `call_to_action` | CallToAction | Yes | Primary action (CTA button or Coming Soon badge) |

**Example**:
```yaml
- name: Sinra Pro
  color: "#2196F3"
  description: "The complete project management platform combining V-Model and Agile methodologies"
  pricing_tiers:
    - period: Monthly
      price: "10"
      # ...
    - period: Annual
      price: "96"
      # ...
  features:
    - text: "Pay per seat (flexible team sizing)"
      highlight: true
  call_to_action:
    link: "https://app.sinra.dev/users/sign_up"
    text: "Start Free Trial"
```

**Validation Rules**:
- `name`: Non-empty string, max 50 characters
- `color`: Valid hex color format (#RRGGBB)
- `pricing_tiers`: At least one tier (monthly, annual, or coming_soon)
- `features`: At least one feature item
- `call_to_action`: Required; type depends on `pricing_tiers[].plan_type`

**Relationships**:
- Contains 1..N `PricingTier` objects
- Contains 1..N `PricingFeature` objects
- Owns 1 `CallToAction` object

---

### PricingTier

**Purpose**: Represents a single billing option within a plan (monthly, annual, or future Coming Soon tier)

**Fields**:

| Field | Type | Required | Notes |
|---|---|---|---|
| `period` | String | Yes | Display label ("Monthly", "Annual", "Coming Soon") |
| `price` | String \| Null | No | Price amount (nullable for Coming Soon tiers) |
| `currency` | String | No | Currency symbol (e.g., "€", "$"); defaults to "€" |
| `billing` | String | No | Billing unit (e.g., "/month", "/year"); null for Coming Soon |
| `plan_type` | String | Yes | Tier classification: "monthly", "annual", "coming_soon" |
| `original_price` | String | No | Original price before discount (for strikethrough display) |
| `struck_price` | String | No | Price to display with strikethrough effect |
| `has_black_friday` | Boolean | No | Flag: can this tier use Black Friday pricing? (default: false) |
| `black_friday_price` | String | No | Discounted price during Black Friday promotion |
| `promo_code` | String | No | Code to display (e.g., "BLACKFRIDAY2025") |
| `recommended` | Boolean | No | Flag: is this tier the recommended choice? (default: false) |

**Example - Standard Annual Tier**:
```yaml
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
```

**Example - Coming Soon Tier**:
```yaml
- period: Coming Soon
  price: null
  billing: null
  plan_type: "coming_soon"
```

**Validation Rules**:
- `period`: Non-empty string
- `price`: If not null, valid numeric string; null only for "coming_soon" tier
- `plan_type`: Must be one of ["monthly", "annual", "coming_soon"]
- `billing`: Matches pattern "/unit" if present (e.g., "/month", "/year")
- `recommended`: Only one tier per plan should be `true`
- **Black Friday Logic**:
  - `has_black_friday: true` requires `black_friday_price` and `promo_code`
  - `black_friday_price` < `original_price` (discount validation)

**State Transitions**:
```
┌─────────────────────────────────────────┐
│ Standard Price Display                  │
│ Shows: price (e.g., "€96/year")        │
└──────────────┬──────────────────────────┘
               │
               ▼ (when promotion active)
┌─────────────────────────────────────────┐
│ Black Friday Price Display              │
│ Shows: original struck, black_friday    │
│ Shows: promo_code                       │
└─────────────────────────────────────────┘
```

**Relationships**:
- Parent: `PricingPlan` (many tiers per plan)
- Depends on: `Promotion` (external) for Black Friday logic

---

### PricingFeature

**Purpose**: Represents a capability or feature included in a plan

**Fields**:

| Field | Type | Required | Notes |
|---|---|---|---|
| `text` | String | Yes | Feature description (e.g., "Unlimited projects and releases") |
| `highlight` | Boolean | No | Flag: is this a key/highlighted feature? (default: false) |
| `ai_feature` | Boolean | No | Flag: is this an AI-powered feature? (default: false) |

**Example - Standard Feature**:
```yaml
- text: "Pay per seat (flexible team sizing)"
  highlight: true
```

**Example - AI Feature**:
```yaml
- text: "AI-powered issue specification"
  highlight: true
  ai_feature: true
```

**Validation Rules**:
- `text`: Non-empty string, max 150 characters
- `highlight`: Boolean; defaults to false
- `ai_feature`: Boolean; defaults to false; should only be true for Sinra Specif-AI plan

**Template Display Logic**:
```
IF highlight = true
  THEN render with checkmark icon ✓
ELSE
  THEN render with dot icon •

IF ai_feature = true
  THEN add visual indicator/grouping for AI features
```

**Relationships**:
- Parent: `PricingPlan` (many features per plan)

---

### CallToAction

**Purpose**: Defines the primary action shown at bottom of plan card

**Fields**:

| Field | Type | Required | Notes |
|---|---|---|---|
| `link` | URL \| Null | No | Destination URL (null for non-interactive badges) |
| `text` | String | Yes | Button/badge text (e.g., "Start Free Trial", "Coming Soon") |
| `badge_type` | String | No | Type of display: "button" (default), "coming_soon" |

**Example - Interactive CTA**:
```yaml
call_to_action:
  link: "https://app.sinra.dev/users/sign_up"
  text: "Start Free Trial"
  badge_type: "button"
```

**Example - Coming Soon Badge**:
```yaml
call_to_action:
  link: null
  text: "Coming Soon"
  badge_type: "coming_soon"
```

**Validation Rules**:
- `text`: Non-empty string
- `link`: Valid URL format if present; null for Coming Soon
- `badge_type`: One of ["button", "coming_soon"]

**Template Display Logic**:
```
IF badge_type = "coming_soon"
  THEN render as non-interactive badge
ELSE
  THEN render as clickable button with link
```

**Relationships**:
- Parent: `PricingPlan` (one CTA per plan)

---

### Promotion (External Reference)

**Purpose**: Manages time-limited promotions (e.g., Black Friday)

**Location**: `_data/[lang]/promotion.yml` (existing)

**Fields**:
| Field | Type | Notes |
|---|---|---|
| `end_date` | YYYY-MM-DD | Promotion end date |

**Logic Used by Pricing**:
```liquid
{% if today <= promo.end_date %}
  {% assign is_black_friday_active = true %}
{% endif %}

IF is_black_friday_active AND tier.has_black_friday
  THEN display tier.black_friday_price
ELSE
  THEN display tier.price
```

---

## Data Structure in YAML

### Before (Current - Separate Plans)

```yaml
# _data/en/pricing.yml
- name: Sinra Pro
  color: "#2196F3"
  description: "..."
  period: Monthly
  price: "10"
  plan_type: "monthly"
  features:
    - text: "Feature A"
      highlight: true
  call_to_action:
    link: "..."
    text: "Start Free Trial"

- name: Sinra Pro
  color: "#2196F3"
  description: "..."
  period: Annual
  price: "96"
  plan_type: "annual"
  original_price: "120"
  struck_price: "96"
  has_black_friday: true
  black_friday_price: "60"
  promo_code: "BLACKFRIDAY2025"
  recommended: true
  features:
    - text: "Feature A"
      highlight: true
  call_to_action:
    link: "..."
    text: "Start Free Trial"
```

**Problems with current approach**:
- ❌ Duplicated plan name, description, features
- ❌ Risk of inconsistency between monthly/annual versions
- ❌ Hard to add future tiers without data duplication
- ❌ Template must loop through all plans, treating monthly/annual as separate

### After (Unified - Single Plan with Pricing Tiers)

```yaml
# _data/en/pricing.yml
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
  features:
    - text: "Pay per seat (flexible team sizing)"
      highlight: true
    - text: "Unlimited projects and releases"
      highlight: true
    - text: "Rich text editor & specifications"
      highlight: true
    - text: "Advanced real-time capacity planning"
      highlight: true
    - text: "Integrated QA management"
      highlight: true
    - text: "Advanced templates & customization"
      highlight: true
    - text: "Multi-view intelligence (Kanban, List, Release)"
      highlight: true
    - text: "Release management & go-live checklists"
      highlight: true
    - text: "Priority email & chat support"
      highlight: true
    - text: "Custom workflows & roles"
      highlight: false
    - text: "Advanced security features"
      highlight: false
    - text: "Dedicated account manager"
      highlight: false
  call_to_action:
    link: "https://app.sinra.dev/users/sign_up"
    text: "Start Free Trial"

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
      ai_feature: false
    - text: "More capabilities coming soon..."
      highlight: false
      ai_feature: false
  call_to_action:
    link: null
    text: "Coming Soon"
    badge_type: "coming_soon"
```

**Benefits of new approach**:
- ✅ Single source of truth per plan
- ✅ Features defined once, used for all tiers
- ✅ Easy to add future tiers (quarterly, etc.)
- ✅ Clear separation of plan-level vs tier-level data
- ✅ Reduces maintenance burden
- ✅ Specif-AI clearly defined as future tier with placeholder features

---

## Backward Compatibility

**Current Template Assumptions**:
- Plans are iterated as array items
- Each plan item has `price`, `period`, `plan_type` at root level

**Changes Required in Template**:
1. Outer loop iterates over plans (unchanged)
2. New inner loop iterates over `pricing_tiers` within each plan
3. Pricing display logic moved inside tier loop
4. Features and CTA moved outside loops (shared across tiers)

**No breaking changes**:
- ✅ Existing template structure preserved
- ✅ CSS classes remain compatible
- ✅ No new frontend dependencies
- ✅ Build process unchanged

---

## Multilingual Considerations

### English (_data/en/pricing.yml)
- Full data with translations

### French (_data/fr/pricing.yml)
- Mirror structure with French translations:
  - `description`: French marketing text
  - `features[].text`: French feature descriptions
  - `call_to_action.text`: French action text ("Démarrer l'essai gratuit" / "Bientôt disponible")

**Syncing Strategy**:
- Structure should match between EN and FR (same number of plans, tiers, features)
- Content differs (translations only)
- Maintain parallel YAML structure for maintainability

---

## Database (Not Applicable)

This is a static site; no database required. All data sourced from YAML files processed at build time by Jekyll.

---

## API Contract (Not Applicable)

No external API integration required. This feature is purely frontend-side data organization and template rendering.

---

## Integration Points

**Data Consumer**: `_includes/pricing.html`

**Expectations**:
```liquid
{% for plan in site.data[site.active_lang].pricing %}
  {% for tier in plan.pricing_tiers %}
    <!-- Render pricing frame -->
  {% endfor %}
{% endfor %}
```

**External Dependencies**:
- `site.data[site.active_lang].promotion.end_date` (for Black Friday date)
- Jekyll build time (`site.time`) for promotion activity check
