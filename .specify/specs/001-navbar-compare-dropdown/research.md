# Research & Decision Log

**Feature**: 001-navbar-compare-dropdown
**Date**: 2025-11-29

---

## R1: Navigation YAML Structure for Hierarchical Menus

**Question**: How should dropdown menus (parent > children) be represented in Jekyll navigation YAML?

**Alternatives Evaluated**:
1. **Flat list with parent links** - Separate dropdown data structure
2. **Nested YAML with children array** ✅ **SELECTED**
3. **Key-based parent references** - Parent item ID referenced in child items

**Decision**: Nested YAML structure with `children` key

**Rationale**:
- Standard pattern in web frameworks (React, Vue, etc.)
- Mirrors semantic HTML hierarchy (nested lists)
- Easier to template in Liquid with `for` loops
- Maintains backward compatibility (non-dropdown items have `children: null`)

**Implementation**:
```yaml
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

**Confidence**: High - similar to existing Jekyll/DaisyUI patterns

---

## R2: Dropdown Rendering Logic in Templates

**Question**: How should `_includes/header.html` render nested menu items to support both desktop and mobile layouts?

**Alternatives Evaluated**:
1. **Separate template for dropdowns** - More complex but modular
2. **Conditional rendering in main loop** ✅ **SELECTED**
3. **Recursive template partial** - Over-engineered for 2 levels

**Decision**: Use `if item.children` check within main navigation loop

**Rationale**:
- Simple, readable Liquid logic
- Reuses existing `.dropdown` CSS classes from navbar.css
- Works for both desktop (navbar-menu) and mobile (nav-dropdown)
- Minimal template changes needed

**Implementation**:
```liquid
{% for item in site.data[site.active_lang].navigation %}
  {% if item.children %}
    <li class="dropdown">
      <a href="{{ item.link }}">{{ item.name }}</a>
      <ul class="dropdown-content">
        {% for child in item.children %}
          <li><a href="{{ child.link }}">{{ child.name }}</a></li>
        {% endfor %}
      </ul>
    </li>
  {% else %}
    <li><a href="{{ item.link }}">{{ item.name }}</a></li>
  {% endif %}
{% endfor %}
```

**Confidence**: High - existing CSS supports this pattern

---

## R3: Comparison Table Data Structure

**Question**: What YAML schema best represents a comparison table with tools and dimensions?

**Alternatives Evaluated**:
1. **Row-based model** - Tools as header, dimensions as rows ✅ **SELECTED**
2. **Column-based model** - Tools as columns, dimensions as rows
3. **Nested objects per tool** - Tool properties grouped together

**Decision**: Row-based model with dimensions as top-level, values organized by tool

**Rationale**:
- Mirrors HTML `<table>` structure (rows = `<tr>`, cells = `<td>`)
- Easy to translate (one dimension key per language)
- Scalable to add more tools or dimensions
- Liquid templating translates directly to table rows

**Implementation**:
```yaml
comparison_hub:
  dimensions:
    - category: "Core Features"
      rows:
        - dimension: "Issue Management"
          values:
            - "✅ Native"
            - "✅ Available"
            - "✅ Built-in"
            - "✅ Task-based"
```

**Confidence**: High - proven pattern in Jekyll projects

---

## R4: Hub Page Comparison Dimensions (Content)

**Question**: What 8+ comparison dimensions best support B2B decision-making for PM tools?

**Research**: Analyzed common PM tool comparisons (G2, Capterra, ProductHunt)

**Alternatives Evaluated**:
1. **Technical features only** - Too narrow for buyers
2. **Business-focused only** - Misses technical differentiation
3. **Hybrid (business + technical)** ✅ **SELECTED**

**Decision**: 9 dimensions covering buyer and builder perspectives

**Dimensions**:
1. **Best For** - Primary use case / ideal customer
2. **Pricing Model** - How pricing is structured (user-based, flat, etc.)
3. **Core Features** - Issues, workflows, automation
4. **Ease of Use** - Learning curve, setup time
5. **Team Collaboration** - Comments, mentions, @assignments
6. **Reporting & Insights** - Dashboards, analytics
7. **Integrations** - API, Slack, GitHub, Zapier
8. **Mobile Experience** - Native apps, responsive web
9. **Setup Time** - Time to deploy and start using

**Rationale**:
- Covers buyer's top decision criteria (pricing, ease of use, features)
- Includes builder's concerns (integrations, mobile, technical depth)
- Aligns with Sinra's positioning (visibility, simplicity, modern)
- 9 dimensions provide comprehensive comparison without overwhelming users

**Confidence**: High - based on market research and user feedback

---

## R5: Hub Page Responsive Design Strategy

**Question**: How should a comparison table scale to mobile (320px) without losing readability?

**Alternatives Evaluated**:
1. **Fixed horizontal scroll** - Users swipe to see tools
2. **Card-based layout (rows become cards)** ✅ **SELECTED**
3. **Hide some dimensions** - Reduces content for mobile

**Decision**: Card-based layout for mobile (dimensions as rows, tools as columns)

**Rationale**:
- Maintains full content visibility on mobile
- Matches DaisyUI card component patterns
- Better for accessibility (no horizontal scroll)
- Easier to translate to mobile-first design

**Implementation**:
```css
@media (max-width: 768px) {
  /* Table becomes block display with card styling */
  .comparison-table {
    display: flex;
    flex-direction: column;
  }

  .comparison-row {
    border: 1px solid var(--base-300);
    border-radius: var(--radius-box);
    margin-bottom: 1rem;
    padding: 1rem;
  }
}
```

**Confidence**: Medium-High - requires testing but follows DaisyUI patterns

---

## R6: Hub Page SEO & Accessibility

**Question**: How should the hub page be structured for optimal SEO and accessibility?

**Alternatives Evaluated**:
1. **Images only** - Poor for SEO and accessibility
2. **Text in `<table>` with semantic HTML** ✅ **SELECTED**
3. **Custom divs with ARIA labels** - More work, same output

**Decision**: Use semantic `<table>` with proper `<thead>`, `<tbody>`, `<th>`, `<td>`

**Rationale**:
- Semantic HTML improves SEO (Google understands table content)
- Accessibility: Screen readers parse table structure correctly
- Easier to maintain and translate
- DaisyUI provides built-in table styling

**Implementation**:
```html
<table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Sinra</th>
      <th>Asana</th>
      <th>Jira</th>
      <th>Monday</th>
    </tr>
  </thead>
  <tbody>
    <!-- Rows from YAML data -->
  </tbody>
</table>
```

**Confidence**: High - standard practice in modern web development

---

## Summary of Decisions

| Decision | Choice | Confidence |
|----------|--------|-----------|
| Navigation structure | Nested YAML with children | High |
| Template logic | Conditional rendering (if children) | High |
| Table data structure | Row-based with dimensions | High |
| Comparison dimensions | 9 dimensions (business + technical) | High |
| Mobile responsiveness | Card-based layout at <768px | Medium-High |
| SEO & accessibility | Semantic HTML tables | High |

All decisions align with existing project patterns (Jekyll, DaisyUI, YAML) and require no new dependencies or technology stack changes.

