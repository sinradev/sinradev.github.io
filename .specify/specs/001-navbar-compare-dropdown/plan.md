# Implementation Plan: Add Compare Products Dropdown to Navbar

**Feature ID**: 001-navbar-compare-dropdown
**Status**: Planning
**Created**: 2025-11-29
**Branch**: 001-navbar-compare-dropdown

---

## Executive Summary

This plan outlines the technical approach to implement a hybrid comparison feature:
1. **Comparison Hub Page**: Consolidated `/compare/` page with side-by-side comparison table
2. **Navbar Dropdown**: Add "Compare" dropdown with links to hub and detailed pages
3. **Multilingual Support**: Both English and French versions
4. **Design System**: DaisyUI Dim theme + existing navbar CSS

**Key Deliverables**:
- `/compare/` hub page (en + fr)
- Updated navbar dropdown with nested items
- Updated navigation YAML files
- Updated header template with dropdown logic
- Responsive design across all breakpoints

---

## Technical Context

### Technology Stack (Fixed)
- **Static Site Generator**: Jekyll 4.3.4 (Ruby-based)
- **Styling**: Plain CSS + DaisyUI Dim theme (no SCSS/preprocessors)
- **JavaScript**: Vanilla JavaScript (no build tools)
- **Multilingual**: Jekyll Polyglot plugin
- **Data Management**: YAML files in `_data/en/` and `_data/fr/`

### Known Constraints
- No additional gems or dependencies (existing stack only)
- No CSS preprocessors or build tools
- Manual responsive design testing (no automated testing framework)
- DaisyUI Dim theme colors MUST be used exclusively
- Lighthouse CI performance thresholds: Performance ≥90, Accessibility ≥95, Best Practices ≥90, SEO ≥90

### Architecture Assumptions
1. Navbar dropdown can be implemented with existing CSS (`.dropdown`, `.dropdown-content` classes)
2. Navigation YAML supports hierarchical structure (parent items with children)
3. Header template can be updated to recursively render nested menu items
4. Comparison hub page uses standard Jekyll page template pattern
5. Comparison table data can be stored in YAML and rendered in Liquid template

---

## Constitution Check

### ✅ Design System Compliance
- **DaisyUI Dim Theme**: Hub page and dropdown styling will use existing DaisyUI variables only
- **CSS Strategy**: Leverage existing `.dropdown` classes; minimal custom CSS needed
- **Color Palette**: All colors from `assets/css/theme.css`; no hardcoded values
- **Status**: ✅ Compliant - no theme violations anticipated

### ✅ Multilingual Support
- **English/French**: Both languages required per spec
- **Data Structure**: Use existing `_data/en/` and `_data/fr/` pattern
- **Templates**: Liquid templating with `page.lang` context
- **Status**: ✅ Compliant - architecture supports both languages

### ✅ Performance Requirements
- **Lighthouse Targets**: Performance ≥90, Accessibility ≥95, Best Practices ≥90, SEO ≥90
- **Hub Page Impact**: Static content (table + text); no performance risks
- **Dropdown Impact**: CSS-based, no JavaScript; lightweight
- **Status**: ✅ Compliant - no performance degradation expected

### ✅ Technology Constraints
- **No new gems**: Using existing Jekyll + plugins
- **No build tools**: Plain CSS only
- **No preprocessors**: YAML data + Liquid templates
- **Status**: ✅ Compliant - no stack changes needed

### ✅ Git Workflow
- **Branch naming**: `001-navbar-compare-dropdown` (numbered feature)
- **Commit messages**: Clear, descriptive with file paths
- **PR requirements**: Link to spec/plan, Lighthouse CI pass
- **Status**: ✅ Ready for implementation

---

## Phase 0: Research & Decision Making

### Unknowns to Resolve

#### 1. Navigation YAML Structure for Dropdowns
**Question**: How should hierarchical navigation (parent > children) be represented in YAML?

**Research Needed**:
- Review current `_data/en/navigation.yml` structure
- Check Jekyll Polyglot documentation for nested item support
- Identify YAML pattern used elsewhere in codebase

**Decision**:
```yaml
- name: Compare
  link: /compare/
  target: _top
  children:
    - name: Comparison Hub
      link: /compare/
      target: _top
    - name: Asana
      link: /compare/asana/
      target: _top
    - name: Jira
      link: /compare/jira/
      target: _top
    - name: Monday
      link: /compare/monday/
      target: _top
```

**Rationale**: Nested YAML structure is standard for hierarchical menus; mirrors how other frameworks handle dropdowns

#### 2. Dropdown Rendering Logic
**Question**: How should header.html render nested menu items?

**Decision**:
- Use Liquid `if item.children` to detect dropdown items
- Iterate with `for child in item.children` to render sub-items
- Wrap parent + children in `.dropdown` classes
- Handle both desktop (navbar-menu) and mobile (nav-dropdown) rendering

**Rationale**: Reuses existing dropdown CSS; maintains consistent behavior across layouts

#### 3. Comparison Table Structure
**Question**: What YAML structure best represents the comparison table?

**Decision**:
```yaml
comparisons:
  - id: all_tools_overview
    title: Sinra vs Asana vs Jira vs Monday
    dimensions:
      - name: Best For
        tools:
          - tool: Sinra
            value: "Modern, visibility-first PM"
          - tool: Asana
            value: "Enterprise workflows"
          # ... etc
      - name: Pricing Model
        # ... etc
    links:
      - name: Asana Details
        url: /compare/asana/
```

**Rationale**: YAML hierarchy mirrors HTML table structure; easier to maintain and translate

#### 4. Comparison Dimensions Content
**Question**: What 8+ comparison dimensions should the hub page include?

**Decision** (from domain knowledge):
1. **Best For**: Use case / ideal customer
2. **Pricing Model**: Subscription, user-based, flat-rate, etc.
3. **Core Features**: Issues, workflows, automation, etc.
4. **Ease of Use**: Learning curve, setup time
5. **Team Collaboration**: Comments, mentions, @assignments
6. **Reporting & Insights**: Dashboards, metrics, analytics
7. **Integrations**: API, Slack, GitHub, etc.
8. **Mobile Experience**: Apps, responsive design
9. **Setup Time**: Hours/days to deploy (if deferred, min 8 above)

**Rationale**: Covers key decision factors for B2B PM tool evaluation; aligns with Sinra's positioning

#### 5. Hub Page Layout & Components
**Question**: What layout pattern works best for comparison table on mobile?

**Decision**:
- Desktop: Standard HTML table with Tailwind/DaisyUI utilities
- Tablet (768px): Horizontal scroll or reorganized cards
- Mobile: Card-based layout with tools as columns, dimensions as rows (rotated view)
- Use `<table>` with semantic HTML (`<thead>`, `<tbody>`, `<th>`, `<td>`)

**Rationale**: DaisyUI supports responsive table styling; semantic HTML improves accessibility and SEO

---

## Phase 1: Design & Data Model

### 1. Data Model: Navigation Structure

**File**: `_data/en/navigation.yml`

```yaml
# Existing items (About, Pricing, Blog, Contact, Login, Sign up)
- name: About
  link: about/
  target: _top
  children: null

# New item
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
    - name: Jira
      link: /compare/jira/
      target: _top
      children: null
    - name: Monday
      link: /compare/monday/
      target: _top
      children: null
```

**French Translation** (`_data/fr/navigation.yml`):
```yaml
- name: Comparaison
  link: /compare/
  target: _top
  children:
    - name: Hub de Comparaison
      link: /compare/
      target: _top
      children: null
    - name: Asana
      link: /compare/asana/
      target: _top
      children: null
    # ... etc
```

### 2. Data Model: Comparison Table

**File**: `_data/en/comparisons.yml`

New section:
```yaml
comparison_hub:
  title: "Compare Sinra to Other Tools"
  subtitle: "See how Sinra stacks up against Asana, Jira, and Monday"
  tools:
    - name: Sinra
      logo: /assets/images/sinra-logo.svg
    - name: Asana
      logo: /assets/images/asana-logo.svg
    - name: Jira
      logo: /assets/images/jira-logo.svg
    - name: Monday
      logo: /assets/images/monday-logo.svg

  dimensions:
    - category: "Best For"
      rows:
        - dimension: "Ideal Use Case"
          values:
            - "Modern, visibility-first project management"
            - "Enterprise workflows and large teams"
            - "Software development and technical teams"
            - "General team collaboration and task management"

    - category: "Core Features"
      rows:
        - dimension: "Issue Management"
          values:
            - "✅ Native, first-class"
            - "✅ Available"
            - "✅ Built-in (Jira Issues)"
            - "✅ Task-based"
        # ... more features
```

### 3. Page Structure: Hub Page

**File**: `_pages/compare.en.html`

```html
---
layout: default
title: Compare Sinra to Asana, Jira, and Monday
lang: en
permalink: /compare/
description: See how Sinra compares to Asana, Jira, and Monday.com
---

{% assign data = site.data[page.lang].comparisons.comparison_hub %}
<div class="comparison-hub">
  <h1>{{ data.title }}</h1>
  <p class="subtitle">{{ data.subtitle }}</p>

  <div class="comparison-table-wrapper">
    {% include comparison-table.html %}
  </div>

  <div class="cta-section">
    <h2>Want to learn more?</h2>
    <p>Dive deeper into specific comparisons:</p>
    <!-- Links to detailed comparison pages -->
  </div>
</div>
```

**French Version**: `_pages/compare.fr.html` (identical structure, uses `page.lang` for translations)

### 4. Template Component: Comparison Table

**File**: `_includes/comparison-table.html`

```html
<table class="comparison-table">
  <thead>
    <tr>
      <th>Feature</th>
      {% for tool in data.tools %}
        <th class="tool-column">
          <img src="{{ tool.logo }}" alt="{{ tool.name }}" class="tool-logo" />
          {{ tool.name }}
        </th>
      {% endfor %}
    </tr>
  </thead>
  <tbody>
    {% for dimension_group in data.dimensions %}
      {% for row in dimension_group.rows %}
        <tr class="comparison-row">
          <td class="dimension">
            <strong>{{ row.dimension }}</strong>
          </td>
          {% for value in row.values %}
            <td class="tool-value">{{ value }}</td>
          {% endfor %}
        </tr>
      {% endfor %}
    {% endfor %}
  </tbody>
</table>
```

### 5. Template Update: Header with Nested Items

**File**: `_includes/header.html`

**Key Changes**:
- Update navbar-menu loop to detect `item.children`
- Wrap parent items with `.dropdown` class if children exist
- Create `.dropdown-content` menu for child items
- Same logic for mobile nav-dropdown

**Pseudo-code**:
```liquid
{% for item in site.data[site.active_lang].navigation %}
  {% if item.children %}
    <!-- Dropdown menu -->
    <li class="dropdown">
      <a href="{{ item.link }}">{{ item.name }}</a>
      <ul class="dropdown-content">
        {% for child in item.children %}
          <li><a href="{{ child.link }}">{{ child.name }}</a></li>
        {% endfor %}
      </ul>
    </li>
  {% else %}
    <!-- Regular menu item -->
    <li><a href="{{ item.link }}">{{ item.name }}</a></li>
  {% endif %}
{% endfor %}
```

### 6. Styling: CSS for Hub Page & Dropdown

**File**: `assets/css/comparison.css` (new file)

```css
/* Comparison Hub Page */
.comparison-hub {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.comparison-table-wrapper {
  overflow-x: auto;
  margin: 2rem 0;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  background-color: var(--base-100);
  border: 1px solid var(--base-300);
  border-radius: var(--radius-box);
}

.comparison-table thead {
  background-color: var(--base-200);
}

.comparison-table th {
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: var(--base-content);
  border-bottom: 2px solid var(--primary);
}

.comparison-table td {
  padding: 1rem;
  border-bottom: 1px solid var(--base-300);
}

.comparison-table tr:hover {
  background-color: var(--base-200);
}

/* Mobile responsive */
@media (max-width: 768px) {
  .comparison-table {
    font-size: 0.875rem;
  }

  .comparison-table th,
  .comparison-table td {
    padding: 0.75rem;
  }
}
```

---

## Phase 2: Implementation Tasks

### Task Group A: Data & Structure

**A1**: Update `_data/en/navigation.yml` with "Compare" dropdown structure
**A2**: Update `_data/fr/navigation.yml` with French translations
**A3**: Create `_data/en/comparisons.yml` with hub table data (comparison dimensions)
**A4**: Create `_data/fr/comparisons.yml` with French translations of comparison data

### Task Group B: Pages & Templates

**B1**: Create `_pages/compare.en.html` (hub page template)
**B2**: Create `_pages/compare.fr.html` (French hub page)
**B3**: Create `_includes/comparison-table.html` (reusable table component)
**B4**: Update `_includes/header.html` to support nested menu items

### Task Group C: Styling & Responsive Design

**C1**: Create `assets/css/comparison.css` with hub page styling
**C2**: Verify dropdown styling works at all breakpoints (320px, 768px, 1024px, 1440px)
**C3**: Test comparison table responsiveness on mobile
**C4**: Ensure Lighthouse scores remain above thresholds

### Task Group D: Testing & Validation

**D1**: Manual test: Hub page displays correctly in English and French
**D2**: Manual test: Dropdown menu appears/disappears on hover (desktop) and click (mobile)
**D3**: Manual test: All comparison links navigate to correct pages
**D4**: Manual test: Responsive design works at all breakpoints
**D5**: Manual test: Lighthouse CI passes with required scores
**D6**: Accessibility: Test keyboard navigation in dropdown and table

---

## Implementation Approach

### Phase 2a: Data Setup (Tasks A1-A4)

**Sequence**:
1. Read current `_data/en/navigation.yml` and `_data/fr/navigation.yml`
2. Add "Compare" item with children structure
3. Create new `comparisons.yml` files with hub table data
4. Validate YAML syntax

**Files Modified**:
- `_data/en/navigation.yml` (update)
- `_data/fr/navigation.yml` (update)
- `_data/en/comparisons.yml` (new)
- `_data/fr/comparisons.yml` (new)

### Phase 2b: Templates & Components (Tasks B1-B4)

**Sequence**:
1. Create `_includes/comparison-table.html` component
2. Create `_pages/compare.en.html` hub page
3. Create `_pages/compare.fr.html` French hub page
4. Update `_includes/header.html` for nested menu rendering

**Files Modified**:
- `_includes/header.html` (update)
- `_pages/compare.en.html` (new)
- `_pages/compare.fr.html` (new)
- `_includes/comparison-table.html` (new)

### Phase 2c: Styling (Tasks C1-C4)

**Sequence**:
1. Create `assets/css/comparison.css` with hub page styles
2. Test dropdown styling at desktop breakpoint
3. Test table responsiveness at mobile breakpoints
4. Run Lighthouse CI and verify scores

**Files Modified**:
- `assets/css/comparison.css` (new)

### Phase 2d: Testing & Validation (Tasks D1-D6)

**Sequence**:
1. Start Jekyll dev server: `bundle exec jekyll serve`
2. Test hub page in English and French
3. Test dropdown menu on desktop and mobile
4. Test navigation links
5. Test responsive design at all breakpoints
6. Run Lighthouse CI via PR

**Test Coverage**:
- Desktop dropdown (hover behavior)
- Mobile dropdown (click/expand behavior)
- Hub page table layout (desktop, tablet, mobile)
- Multilingual rendering (EN/FR)
- Keyboard navigation (Tab, Enter, Escape)
- Link navigation (all dropdown and table links)

---

## Success Criteria (Acceptance)

✅ Hub page exists at `/compare/` and `/fr/compare/` with comparison table
✅ Navbar dropdown "Compare" appears with 4 sub-items (hub + 3 detailed pages)
✅ Dropdown styling matches navbar design (colors, shadows, spacing)
✅ Dropdown works on desktop (hover) and mobile (click/expand)
✅ Comparison table displays 9 dimensions across 4 tools (Sinra, Asana, Jira, Monday)
✅ All links in dropdown and table work correctly
✅ Page is responsive and readable at all breakpoints (320px, 768px, 1024px, 1440px)
✅ English and French versions display correctly
✅ Lighthouse CI scores remain at or above: Performance ≥90, Accessibility ≥95, Best Practices ≥90, SEO ≥90
✅ No console errors or warnings in browser DevTools

---

## Known Risks & Mitigation

| Risk | Impact | Mitigation |
|------|--------|-----------|
| YAML syntax errors in navigation | Build failure | Validate YAML before commit; test Jekyll build locally |
| Dropdown CSS conflicts with existing navbar | Display issue | Test thoroughly on both desktop and mobile before PR |
| Comparison table doesn't scale well on mobile | UX issue | Test at 320px width; consider horizontal scroll or card layout |
| Lighthouse performance drop | CI/CD block | Monitor CSS size; avoid heavy custom styles |
| Multilingual data mismatch (EN/FR) | Broken links | Maintain parallel YAML structure; validate both languages |

---

## Git Strategy

**Branch**: `001-navbar-compare-dropdown`

**Commit Sequence**:
1. Data setup: `git add _data/` && `git commit -m "chore: Add navigation and comparison data"`
2. Templates: `git add _pages/ _includes/` && `git commit -m "feat: Add hub page and comparison components"`
3. Styling: `git add assets/css/` && `git commit -m "style: Add comparison page styling"`

**PR Creation**:
1. Link to spec: `.specify/specs/001-navbar-compare-dropdown/spec.md`
2. Link to plan: `.specify/specs/001-navbar-compare-dropdown/plan.md`
3. Note: "Implements hybrid comparison feature with hub page and navbar dropdown"
4. Wait for Lighthouse CI to pass before merging

---

## Next Steps

1. ✅ Spec approved
2. ✅ Plan created
3. ⏭️ Generate tasks.md with actionable implementation steps
4. ⏭️ Execute tasks via `/speckit.implement`
5. ⏭️ Create PR and verify Lighthouse CI
6. ⏭️ Merge to main when all checks pass

