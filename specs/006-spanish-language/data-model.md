# Data Model: Add Spanish Language Support

**Feature**: 006-spanish-language
**Date**: 2025-12-10

## Overview

This feature adds Spanish language data files following the existing YAML schema. No schema changes are required - only new Spanish content files.

## Entities

### Translation Files (`_data/es/*.yml`)

Static YAML files containing Spanish translations. Each file mirrors the English structure exactly.

#### Entity: Navigation Item

**File**: `_data/es/navigation.yml`

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| name | string | Display label (Spanish) | "Acerca de" |
| link | string | URL path (unchanged) | "about/" |
| target | string | Link target | "_top" |
| klass | string | CSS class (unchanged) | "btn btn-accent btn-sm" |

#### Entity: Feature Item

**File**: `_data/es/index_features.yml`

| Field | Type | Description |
|-------|------|-------------|
| title | string | Feature title (Spanish) |
| description | string | Feature description (Spanish) |
| icon | string | Icon identifier (unchanged) |
| link | string | Optional link URL (unchanged) |

#### Entity: String Translation

**File**: `_data/es/strings.yml`

| Field | Type | Description |
|-------|------|-------------|
| [key] | string | Translated string value |

Key categories:
- `hero.*` - Homepage hero section
- `about.*` - About page content
- `pricing.*` - Pricing page labels
- `contact.*` - Contact form labels
- `blog.*` - Blog UI strings
- `common.*` - Shared labels/buttons
- `meta.*` - SEO meta descriptions

#### Entity: Pricing Plan

**File**: `_data/es/pricing.yml`

| Field | Type | Description |
|-------|------|-------------|
| name | string | Plan name (Spanish) |
| price | string | Price display |
| period | string | Billing period (Spanish) |
| features | array | List of features (Spanish) |
| cta | string | Call-to-action text (Spanish) |
| popular | boolean | Featured flag (unchanged) |

#### Entity: Testimonial

**File**: `_data/es/testimonials.yml`

| Field | Type | Description |
|-------|------|-------------|
| quote | string | Testimonial text (Spanish) |
| author | string | Author name (unchanged) |
| role | string | Author role (Spanish) |
| company | string | Company name (unchanged) |
| avatar | string | Image path (unchanged) |

#### Entity: FAQ Item

**Files**: `_data/es/contact_faq.yml`, `_data/es/pricing_faq.yml`

| Field | Type | Description |
|-------|------|-------------|
| question | string | FAQ question (Spanish) |
| answer | string | FAQ answer (Spanish) |

#### Entity: Case Study

**File**: `_data/es/case_studies.yml`

| Field | Type | Description |
|-------|------|-------------|
| title | string | Case study title (Spanish) |
| industry | string | Industry name (Spanish) |
| challenge | string | Challenge description (Spanish) |
| solution | string | Solution description (Spanish) |
| results | array | Result items (Spanish) |
| quote | string | Customer quote (Spanish) |

#### Entity: Comparison

**File**: `_data/es/comparisons.yml`

| Field | Type | Description |
|-------|------|-------------|
| competitor | string | Competitor name (unchanged) |
| sinra_advantages | array | Sinra advantages (Spanish) |
| competitor_limitations | array | Competitor limitations (Spanish) |

#### Entity: Blog Category

**File**: `_data/es/blog_categories.yml`

| Field | Type | Description |
|-------|------|-------------|
| slug | string | URL slug (unchanged) |
| name | string | Category name (Spanish) |
| description | string | Category description (Spanish) |

### Page Templates (`_pages/*.es.html`)

Jekyll page files with Spanish metadata.

| Field | Type | Description |
|-------|------|-------------|
| page_id | string | Page identifier (matches EN/FR) |
| permalink | string | URL path (unchanged) |
| layout | string | Template name (unchanged) |
| description | string | Meta description (Spanish) |
| lang | string | Always "es" |

### Blog Posts (`_posts/*.es.md`)

Markdown files with Spanish content.

| Field | Type | Description |
|-------|------|-------------|
| layout | string | Always "post" |
| title | string | Post title (Spanish) |
| subtitle | string | Post subtitle (Spanish) |
| description | string | Meta description (Spanish) |
| lang | string | Always "es" |
| category | string | Category name (must match blog_categories.yml) |
| excerpt | string | Short excerpt (Spanish) |
| permalink | string | URL pattern (unchanged) |

## Relationships

```
_config.yml
    └── languages: ["en", "fr", "es"]
            │
            ├── _data/en/ ─────┐
            ├── _data/fr/ ─────┼── YAML structure must be identical
            └── _data/es/ ─────┘
                    │
                    ├── navigation.yml ──► _includes/header.html
                    ├── strings.yml ──► _includes/*.html (various)
                    ├── index_features.yml ──► _includes/index.html
                    └── ... (other data files)

_pages/
    ├── about.en.html ─┐
    ├── about.fr.html ─┼── page_id must match
    └── about.es.html ─┘

_posts/
    ├── YYYY-MM-DD-slug.en.md ─┐
    ├── YYYY-MM-DD-slug.fr.md ─┼── date + slug must match
    └── YYYY-MM-DD-slug.es.md ─┘
```

## Validation Rules

1. **Key Parity**: Every key in `_data/en/*.yml` must exist in `_data/es/*.yml`
2. **Page ID Matching**: `page_id` in Spanish pages must match corresponding EN/FR pages
3. **Date Matching**: Spanish blog posts must have same date as EN/FR versions
4. **Category Consistency**: Blog post `category` must exist in `blog_categories.yml`
5. **No Empty Strings**: All translated values must have content (no empty strings)

## Data Integrity

| Constraint | Enforcement |
|------------|-------------|
| YAML syntax | Jekyll build fails on invalid YAML |
| Missing keys | Template renders blank (detected visually) |
| Invalid page_id | Language switching fails (detected manually) |
| Missing blog translation | Post not shown in Spanish blog index (expected behavior) |
