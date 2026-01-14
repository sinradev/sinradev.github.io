# Data Model & Entity Definitions

**Feature**: 001-navbar-compare-dropdown
**Date**: 2025-11-29

---

## Data Model Overview

The feature introduces three primary data structures:

1. **Navigation Menu Items** (enhanced existing structure)
2. **Comparison Hub Page Content** (new)
3. **Comparison Table Data** (new)

---

## Entity 1: Navigation Menu Item (Hierarchical)

### Definition
A navigation menu item with optional child items, representing a single entry in the navbar.

### Structure

```yaml
NavigationMenuItem:
  name: string          # Display text (e.g., "Compare", "Comparaison")
  link: string          # URL path or absolute URL (e.g., "/compare/", "/about/")
  target: string        # HTML target attribute ("_top", "_blank")
  children: array       # Optional: child menu items (null if no children)
```

### Attributes

| Attribute | Type | Required | Constraints | Example |
|-----------|------|----------|-------------|---------|
| `name` | string | Yes | Display name; max 50 chars; supports Unicode | "Compare", "Comparaison" |
| `link` | string | Yes | Relative or absolute URL | "/compare/", "/compare/asana/" |
| `target` | string | Yes | "_top" (same window) or "_blank" (new tab) | "_top" |
| `children` | array | No | Array of NavigationMenuItem; null if not a dropdown | `[{name: "...", ...}]` |

### Validation Rules

- `name` must not be empty
- `link` must be valid URL path or absolute URL
- `target` must be "_top" or "_blank"
- `children` must be null or array of valid NavigationMenuItems
- If `children` is present, parent item is a dropdown container
- All child items must have matching `lang` context (EN/FR)

### Example Usage

```yaml
# Regular menu item (no dropdown)
- name: About
  link: about/
  target: _top
  children: null

# Dropdown menu item
- name: Compare
  link: /compare/
  target: _top
  children:
    - name: Comparison Hub
      link: /compare/
      target: _top
      children: null
    - name: Asana
      link: /compare/asana/
      target: _top
      children: null
```

### Storage Location

- **English**: `_data/en/navigation.yml`
- **French**: `_data/fr/navigation.yml`

---

## Entity 2: Comparison Hub Page

### Definition
A page displaying a consolidated comparison table of Sinra against competing tools.

### Structure

```yaml
ComparisonHubPage:
  title: string               # Page title
  subtitle: string            # Subtitle/description
  description: string         # Meta description
  tools: array                # Array of Tool objects
  dimensions: array           # Array of ComparisonDimension groups
```

### Attributes

| Attribute | Type | Required | Constraints | Example |
|-----------|------|----------|-------------|---------|
| `title` | string | Yes | SEO-friendly title; max 60 chars | "Compare Sinra to Other Tools" |
| `subtitle` | string | Yes | User-facing intro; max 120 chars | "See how Sinra stacks up..." |
| `description` | string | Yes | Meta description; max 160 chars | "Compare Sinra with Asana, Jira..." |
| `tools` | array | Yes | Array of 4 Tool objects (Sinra + 3 competitors) | See Tool entity below |
| `dimensions` | array | Yes | Array of ComparisonDimension objects; at least 8 | See ComparisonDimension entity |

### Validation Rules

- `title` and `subtitle` must not be empty
- `description` must be SEO-friendly (< 160 chars)
- `tools` must contain exactly 4 tools: Sinra + Asana + Jira + Monday (in order)
- `dimensions` must contain at least 8 comparison categories
- All string values must support multi-language context (EN/FR)

### Example

```yaml
comparison_hub:
  title: "Compare Sinra to Asana, Jira, and Monday"
  subtitle: "See how Sinra compares to other project management tools"
  description: "Compare Sinra with Asana, Jira, and Monday. See features, pricing, and ideal use cases."
  tools:
    - name: Sinra
      logo: /assets/images/sinra-logo.svg
    - name: Asana
      logo: /assets/images/asana-logo.svg
    - name: Jira
      logo: /assets/images/jira-logo.svg
    - name: Monday
      logo: /assets/images/monday-logo.svg
  dimensions: [...]
```

### Storage Location

- **English**: `_data/en/comparisons.yml` (new section `comparison_hub`)
- **French**: `_data/fr/comparisons.yml` (new section `comparison_hub`)

---

## Entity 3: Comparison Tool

### Definition
Metadata for a tool displayed in the comparison table (Sinra, Asana, Jira, Monday).

### Structure

```yaml
ComparisonTool:
  name: string          # Tool name
  logo: string          # URL to logo image
```

### Attributes

| Attribute | Type | Required | Constraints | Example |
|-----------|------|----------|-------------|---------|
| `name` | string | Yes | Official tool name; max 30 chars | "Sinra", "Asana" |
| `logo` | string | Yes | Relative path to logo image (SVG or PNG) | "/assets/images/asana-logo.svg" |

### Validation Rules

- `name` must match official product name
- `logo` must be valid file path in `/assets/images/`
- Logo image must be square (1:1 aspect ratio) for consistency
- Logo files must be optimized (SVG preferred, <20KB)

### Example

```yaml
tools:
  - name: Sinra
    logo: /assets/images/sinra-logo.svg
  - name: Asana
    logo: /assets/images/asana-logo.svg
```

---

## Entity 4: Comparison Dimension Group

### Definition
A category of comparison (e.g., "Best For", "Core Features") containing multiple comparison rows.

### Structure

```yaml
ComparisonDimensionGroup:
  category: string      # Category name (e.g., "Core Features")
  rows: array           # Array of ComparisonRow objects
```

### Attributes

| Attribute | Type | Required | Constraints | Example |
|-----------|------|----------|-------------|---------|
| `category` | string | Yes | Category name; max 50 chars; translatable | "Core Features", "Pricing Model" |
| `rows` | array | Yes | Array of ComparisonRow objects; at least 1 per category | See ComparisonRow entity |

### Validation Rules

- `category` must not be empty
- `category` must be unique within dimensions array
- `rows` must contain at least 1 row per category
- All rows must have same number of values (matching number of tools)

### Example

```yaml
dimensions:
  - category: "Best For"
    rows:
      - dimension: "Ideal Use Case"
        values:
          - "Modern project visibility"
          - "Enterprise workflows"
          - "Software development"
          - "Team collaboration"

  - category: "Core Features"
    rows:
      - dimension: "Issue Management"
        values:
          - "✅ Native, first-class"
          - "✅ Available"
          - "✅ Built-in (Jira Issues)"
          - "✅ Task-based"
```

---

## Entity 5: Comparison Row

### Definition
A single comparison dimension (e.g., "Issue Management") with values for each tool.

### Structure

```yaml
ComparisonRow:
  dimension: string     # Name of the comparison dimension
  values: array         # Array of 4 values (one per tool)
```

### Attributes

| Attribute | Type | Required | Constraints | Example |
|-----------|------|----------|-------------|---------|
| `dimension` | string | Yes | Dimension name; max 100 chars | "Issue Management", "Pricing Model" |
| `values` | array | Yes | Array of exactly 4 string values (matching tools) | `["✅ Native", "✅ Available", ...]` |

### Validation Rules

- `dimension` must not be empty
- `values` must be array of exactly 4 items (matching 4 tools)
- Each value must not be empty (null values should use "N/A" or " - ")
- Values can include emojis (✅, ❌, ⭐, etc.) for visual indicators
- Values support markdown-like formatting (e.g., `**bold**`, but rendered as plain text in table)

### Example

```yaml
rows:
  - dimension: "Pricing Model"
    values:
      - "Usage-based with cycle billing"
      - "Per-user monthly subscription"
      - "Self-hosted or cloud (subscription)"
      - "Per-user or team plan"

  - dimension: "Free Trial"
    values:
      - "14 days"
      - "30 days"
      - "N/A"
      - "14 days"
```

---

## Entity 6: Comparison Table (Generated)

### Definition
Runtime data structure generated from ComparisonHubPage for template rendering.

### Structure (Liquid Template Context)

```liquid
comparison_hub:
  title: string                        # Page title
  subtitle: string                     # Page subtitle
  tools: array[ComparisonTool]         # 4 tools with logos
  dimensions: array[ComparisonDimensionGroup]  # Grouped rows
```

### Rendering Logic

In template `_includes/comparison-table.html`:

```liquid
<table>
  <thead>
    <tr>
      <th>Feature</th>
      {% for tool in data.tools %}
        <th>{{ tool.name }}</th>
      {% endfor %}
    </tr>
  </thead>
  <tbody>
    {% for dimension_group in data.dimensions %}
      {% for row in dimension_group.rows %}
        <tr>
          <td>{{ row.dimension }}</td>
          {% for value in row.values %}
            <td>{{ value }}</td>
          {% endfor %}
        </tr>
      {% endfor %}
    {% endfor %}
  </tbody>
</table>
```

---

## Relationships & Dependencies

### Navigation ↔ Pages
- Navigation item "Compare" links to `/compare/`
- Navigation sub-items link to `/compare/asana/`, etc.
- Hub page is rendered from `_pages/compare.en.html`

### Comparison Hub ↔ Detailed Pages
- Hub page includes links to detailed comparison pages (`/compare/asana/`, etc.)
- Detailed pages exist independently (not modified by this feature)
- Hub page serves as entry point; detailed pages provide deep dives

### Data Structure ↔ Template
- `_data/en/comparisons.yml` stores hub data
- `_includes/comparison-table.html` consumes hub data
- `_pages/compare.en.html` orchestrates page layout

---

## Multilingual Support

### EN/FR Data Alignment

All data entities must have parallel entries in both languages:

**English** (`_data/en/comparisons.yml`):
```yaml
comparison_hub:
  title: "Compare Sinra to Other Tools"
  subtitle: "See how Sinra stacks up..."
```

**French** (`_data/fr/comparisons.yml`):
```yaml
comparison_hub:
  title: "Comparer Sinra aux autres outils"
  subtitle: "Voyez comment Sinra se compare..."
```

### Validation
- Every key in `_data/en/` must have corresponding key in `_data/fr/`
- No partial translations allowed
- Navigation items must exist in both `_data/en/navigation.yml` and `_data/fr/navigation.yml`

---

## Summary

| Entity | Storage | Required | Purpose |
|--------|---------|----------|---------|
| NavigationMenuItem | `_data/[lang]/navigation.yml` | Yes (updated) | Navbar dropdown structure |
| ComparisonHubPage | `_data/[lang]/comparisons.yml` | Yes (new) | Hub page content |
| ComparisonTool | `_data/[lang]/comparisons.yml` | Yes (new) | Tool logos and names |
| ComparisonDimensionGroup | `_data/[lang]/comparisons.yml` | Yes (new) | Comparison categories |
| ComparisonRow | `_data/[lang]/comparisons.yml` | Yes (new) | Individual comparisons |
| ComparisonTable | Generated at render time | Auto | Template context |

