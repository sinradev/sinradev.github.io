# Phase 1: Data Model

**Feature**: Black Friday 50% Discount Promotion
**Status**: Design ready for implementation

## Entity: Promotion

Represents the Black Friday 50% off annual plan offer with display configuration.

### YAML Structure

**Location**: `_data/en/promotion.yml` and `_data/fr/promotion.yml`

```yaml
# _data/en/promotion.yml
name: "Black Friday"
description: "50% discount on annual pricing"
discount_percentage: 50
plan_type: "annual"

# Banner configuration
banner:
  enabled: true
  message: "Black Friday: 50% off annual plans"
  cta_text: "View Pricing"
  cta_link: "/en/pricing"  # Will be /fr/pricing for French
  dismissible: true

# Badge configuration
badge:
  enabled: true
  text: "50% OFF"
  color_class: "badge-promotion"  # CSS class for styling

# Pricing display
pricing:
  original_annual_price: 100  # Example: €100/year
  discount_amount: 50          # Calculated or explicit
  discounted_annual_price: 50  # After 50% off
  currency: "€"
  currency_code: "EUR"
```

**French equivalent** (`_data/fr/promotion.yml`):

```yaml
name: "Black Friday"
description: "50% de réduction sur la tarification annuelle"
discount_percentage: 50
plan_type: "annual"

banner:
  enabled: true
  message: "Black Friday : 50% de réduction sur les forfaits annuels"
  cta_text: "Voir les tarifs"
  cta_link: "/fr/pricing"
  dismissible: true

badge:
  enabled: true
  text: "50% DE RÉDUCTION"
  color_class: "badge-promotion"

pricing:
  original_annual_price: 100
  discount_amount: 50
  discounted_annual_price: 50
  currency: "€"
  currency_code: "EUR"
```

## Entity: PricingCard

Represents pricing plan display with optional promotion badge.

### Structure (part of `_data/en/pricing.yml`)

```yaml
plans:
  - name: "Annual"
    plan_type: "annual"
    price: 50  # This is the discounted price during promotion
    original_price: 100  # Used for strikethrough display
    billing_period: "year"
    show_original_price: true  # Controls whether to show strikethrough
    promotion: true  # Whether to display badge
    features:
      - "Feature 1"
      - "Feature 2"
```

## Data Validation Rules

### Promotion Entity

1. **discount_percentage**: Must be integer 0-100
2. **original_annual_price**: Must be > discounted_annual_price
3. **discounted_annual_price**: Must be < original_annual_price
4. **Math validation**: `discounted_annual_price = original_annual_price * (1 - discount_percentage/100)`
5. **banner.enabled**: Boolean; controls whether banner renders
6. **badge.enabled**: Boolean; controls whether badge renders on pricing page
7. **Currency**: Must match site's active currency (€ for EU, adjust if needed)

### PricingCard Entity

1. **original_price**: Only present if `show_original_price: true`
2. **promotion**: Boolean; when true, badge is included in card
3. **price**: Must reflect promotional pricing (discounted_annual_price from Promotion entity)
4. **plan_type**: Must match exactly (e.g., "annual" = "annual")

## State Diagram

```
Promotion Display States:

┌─────────────────────────────────┐
│  Active (Black Friday Period)   │
├─────────────────────────────────┤
│ - banner.enabled: true          │
│ - badge.enabled: true           │
│ - Prices: original + discounted │
│ - Annual plan highlighted       │
└──────────────┬──────────────────┘
               │
               ↓ (After campaign ends)
┌─────────────────────────────────┐
│      Inactive (Default)         │
├─────────────────────────────────┤
│ - banner.enabled: false         │
│ - badge.enabled: false          │
│ - Prices: normal annual price   │
│ - Annual plan appears as usual  │
└─────────────────────────────────┘
```

## Relationships

- **Promotion** → **PricingCard** (one-to-many): One promotion campaign affects multiple pricing cards/displays
- **PricingCard** → **Promotion** (many-to-one): Each card can reference the active promotion via `plan_type` matching

## Derived Fields (calculated in Liquid)

When `promotion.enabled == true`:

- `discount_display`: `{{ promotion.discount_percentage }}% OFF`
- `savings_amount`: `{{ promotion.original_annual_price | minus: promotion.discounted_annual_price }}`
- `savings_display`: `Save {{ savings_amount }}{{ currency }}`

## Notes

- **Multilingual parity**: All YAML keys MUST exist in both `_data/en/` and `_data/fr/` directories
- **Price updates**: To change pricing, update BOTH `promotion.yml` and `pricing.yml`
- **Campaign duration**: To disable promotion, set `banner.enabled: false` and `badge.enabled: false`
- **No database**: All data is static YAML, built into Jekyll at generation time
- **No external API calls**: Pricing is deterministic; no runtime fetching needed
