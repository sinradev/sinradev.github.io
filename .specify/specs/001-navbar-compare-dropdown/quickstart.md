# Quick Start Implementation Guide

**Feature**: 001-navbar-compare-dropdown
**Branch**: 001-navbar-compare-dropdown
**Status**: Ready for Implementation

---

## Overview

This guide provides step-by-step instructions to implement the comparison feature:
1. Add dropdown navigation (YAML data)
2. Create hub page (templates + data)
3. Add styling (CSS)
4. Test and validate

**Estimated Time**: 2-3 hours
**Complexity**: Low-Medium
**Risk Level**: Low

---

## Prerequisites

```bash
# Ensure you're on the feature branch
git checkout 001-navbar-compare-dropdown

# Start Jekyll dev server (will auto-reload)
bundle exec jekyll serve

# In another terminal, navigate to repo root
cd /Users/thomas/Apps/sinra-website
```

---

## Step 1: Update Navigation Data (30 min)

### 1.1 Update English Navigation

**File**: `_data/en/navigation.yml`

Add "Compare" item after "Blog" and before "Contact":

```yaml
- name: About
  link: about/
  target: _top

- name: Pricing
  link: pricing/
  target: _top

- name: Blog
  link: blog/
  target: _top

# ADD THIS:
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

- name: Contact
  link: contact/
  target: _top

- name: Login
  link: https://app.sinra.dev/users/sign_in
  target: _blank

- name: Sign up
  link: https://app.sinra.dev/users/sign_up
  target: _blank
  klass: btn btn-accent btn-sm
```

### 1.2 Update French Navigation

**File**: `_data/fr/navigation.yml`

Add "Comparaison" item (in same position as English):

```yaml
- name: À propos
  link: about
  target: _top

- name: Tarifs
  link: pricing
  target: _top

- name: Blog
  link: blog
  target: _top

# ADD THIS:
- name: Comparaison
  link: /compare/
  target: _top
  children:
    - name: Hub de Comparaison
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

- name: Contact
  link: contact
  target: _top

- name: Se connecter
  link: https://app.sinra.dev/users/sign_in
  target: _blank

- name: S'enregistrer
  link: https://app.sinra.dev/users/sign_up
  target: _blank
  klass: btn btn-accent btn-sm
```

### 1.3 Create Comparison Data (English)

**File**: `_data/en/comparisons.yml` (new)

```yaml
comparison_hub:
  title: "Compare Sinra to Other Tools"
  subtitle: "See how Sinra stacks up against Asana, Jira, and Monday"
  description: "Compare Sinra with Asana, Jira, and Monday. Explore features, pricing, and find the best tool for your team."

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

    - category: "Pricing Model"
      rows:
        - dimension: "Cost Structure"
          values:
            - "Usage-based with cycle billing"
            - "Per-user monthly subscription"
            - "Self-hosted or cloud (subscription)"
            - "Per-user or team plan"

        - dimension: "Free Trial"
          values:
            - "14 days"
            - "30 days"
            - "N/A (open source available)"
            - "14 days"

    - category: "Core Features"
      rows:
        - dimension: "Issue Management"
          values:
            - "✅ Native, first-class"
            - "✅ Available via Asana tasks"
            - "✅ Built-in (Jira Issues)"
            - "✅ Task-based"

        - dimension: "Workflows & Automation"
          values:
            - "✅ Custom workflows"
            - "✅ Rules and automations"
            - "✅ Advanced automation"
            - "✅ Automations and workflows"

        - dimension: "Release Planning"
          values:
            - "✅ Native cycles and releases"
            - "⭐ Limited (Portfolios)"
            - "✅ Strong (Jira Releases)"
            - "⭐ Timeline view"

    - category: "Team Collaboration"
      rows:
        - dimension: "Comments & Mentions"
          values:
            - "✅ Full inline comments"
            - "✅ Available"
            - "✅ Full featured"
            - "✅ Available"

        - dimension: "Real-time Updates"
          values:
            - "✅ Real-time sync"
            - "✅ Real-time collaboration"
            - "✅ Real-time updates"
            - "✅ Real-time sync"

    - category: "Reporting & Insights"
      rows:
        - dimension: "Dashboards"
          values:
            - "✅ Customizable dashboards"
            - "✅ Portfolio dashboards"
            - "✅ Dashboards and insights"
            - "✅ Widgets and dashboards"

        - dimension: "Analytics"
          values:
            - "✅ Burn-down and metrics"
            - "✅ Advanced reporting"
            - "✅ Advanced analytics"
            - "✅ Reports and charts"

    - category: "Integrations"
      rows:
        - dimension: "API & Webhooks"
          values:
            - "✅ REST API"
            - "✅ Webhooks and API"
            - "✅ Comprehensive API"
            - "✅ API and Webhooks"

        - dimension: "Popular Integrations"
          values:
            - "✅ Slack, GitHub, GitLab"
            - "✅ 100+ integrations"
            - "✅ 500+ integrations"
            - "✅ 200+ integrations"

    - category: "Ease of Use"
      rows:
        - dimension: "Setup Time"
          values:
            - "⚡ 5-10 minutes"
            - "⚡ 15-30 minutes"
            - "🔧 1-2 hours"
            - "⚡ 15-20 minutes"

        - dimension: "Learning Curve"
          values:
            - "Flat, intuitive"
            - "Moderate"
            - "Steep for complex setups"
            - "Flat, intuitive"

    - category: "Mobile Experience"
      rows:
        - dimension: "Native Apps"
          values:
            - "✅ iOS & Android"
            - "✅ iOS & Android"
            - "✅ iOS & Android"
            - "✅ iOS & Android"

        - dimension: "Responsive Web"
          values:
            - "✅ Fully responsive"
            - "✅ Fully responsive"
            - "✅ Fully responsive"
            - "✅ Fully responsive"
```

### 1.4 Create Comparison Data (French)

**File**: `_data/fr/comparisons.yml` (new)

Copy the structure above and translate:

```yaml
comparison_hub:
  title: "Comparer Sinra aux autres outils"
  subtitle: "Voyez comment Sinra se compare à Asana, Jira et Monday"
  description: "Comparez Sinra avec Asana, Jira et Monday. Explorez les fonctionnalités, les tarifs et trouvez le meilleur outil pour votre équipe."

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
    - category: "Idéal pour"
      rows:
        - dimension: "Cas d'utilisation"
          values:
            - "Gestion de projet moderne, axée sur la visibilité"
            - "Flux de travail d'entreprise et grandes équipes"
            - "Équipes de développement logiciel"
            - "Collaboration générale d'équipe et gestion de tâches"
    # ... continue with French translations
```

**Test**: Verify YAML syntax is valid:
```bash
bundle exec jekyll build --drafts
```

---

## Step 2: Update Header Template (45 min)

**File**: `_includes/header.html`

Replace the navbar-menu loop (around line 32-45) to support nested items:

**Find this section**:
```liquid
<div class="navbar-center navbar-menu">
  <ul class="menu menu-horizontal px-1">
    {% for item in site.data[site.active_lang].navigation %}
    {% assign page_url = "/" | append: item.link %}
    <li>
      <a href="{% if item.link contains "http" %}{{ item.link }}{% else %}{{ site.baseurl}}/{{ item.link }}{% endif %}"
         class="{% if page.url == page_url %}active{% endif %} {{ item.klass }}"
         target="{{ item.target }}"
         aria-current="{% if page.url == page_url %}page{% else %}false{% endif %}">
        {{ item.name }}
      </a>
    </li>
    {% endfor %}
  </ul>
</div>
```

**Replace with**:
```liquid
<div class="navbar-center navbar-menu">
  <ul class="menu menu-horizontal px-1">
    {% for item in site.data[site.active_lang].navigation %}
    {% assign page_url = "/" | append: item.link %}
    {% if item.children %}
      <!-- Dropdown menu -->
      <li class="dropdown">
        <a href="{% if item.link contains "http" %}{{ item.link }}{% else %}{{ site.baseurl}}/{{ item.link }}{% endif %}"
           class="{% if page.url == page_url %}active{% endif %} {{ item.klass }}"
           target="{{ item.target }}"
           aria-current="{% if page.url == page_url %}page{% else %}false{% endif %}">
          {{ item.name }}
        </a>
        <ul class="dropdown-content menu">
          {% for child in item.children %}
          {% assign child_url = "/" | append: child.link %}
          <li>
            <a href="{% if child.link contains "http" %}{{ child.link }}{% else %}{{ site.baseurl}}/{{ child.link }}{% endif %}"
               class="{% if page.url == child_url %}active{% endif %}"
               target="{{ child.target }}"
               aria-current="{% if page.url == child_url %}page{% else %}false{% endif %}">
              {{ child.name }}
            </a>
          </li>
          {% endfor %}
        </ul>
      </li>
    {% else %}
      <!-- Regular menu item -->
      <li>
        <a href="{% if item.link contains "http" %}{{ item.link }}{% else %}{{ site.baseurl}}/{{ item.link }}{% endif %}"
           class="{% if page.url == page_url %}active{% endif %} {{ item.klass }}"
           target="{{ item.target }}"
           aria-current="{% if page.url == page_url %}page{% else %}false{% endif %}">
          {{ item.name }}
        </a>
      </li>
    {% endif %}
    {% endfor %}
  </ul>
</div>
```

Do the same for the mobile menu section (nav-dropdown, around line 10-23).

**Test**: Reload the page in browser and verify dropdown appears on hover (desktop) and click (mobile).

---

## Step 3: Create Hub Pages (45 min)

### 3.1 Create English Hub Page

**File**: `_pages/compare.en.html` (new)

```html
---
layout: default
title: Compare Sinra to Other Tools
lang: en
permalink: /compare/
description: Compare Sinra with Asana, Jira, and Monday. See features, pricing, and ideal use cases.
---

{% assign data = site.data[page.lang].comparisons.comparison_hub %}

<div class="comparison-hub">
  <section class="comparison-intro">
    <h1>{{ data.title }}</h1>
    <p class="subtitle">{{ data.subtitle }}</p>
  </section>

  <div class="comparison-table-wrapper">
    {% include comparison-table.html %}
  </div>

  <section class="comparison-cta">
    <h2>Want to learn more?</h2>
    <p>Dive deeper into specific comparisons:</p>
    <div class="cta-links">
      <a href="{{ site.baseurl }}/compare/asana/" class="btn btn-outline">Sinra vs Asana</a>
      <a href="{{ site.baseurl }}/compare/jira/" class="btn btn-outline">Sinra vs Jira</a>
      <a href="{{ site.baseurl }}/compare/monday/" class="btn btn-outline">Sinra vs Monday</a>
    </div>
  </section>
</div>
```

### 3.2 Create French Hub Page

**File**: `_pages/compare.fr.html` (new)

Same as above (Liquid will automatically use French data from `site.data[page.lang]`).

---

## Step 4: Create Comparison Table Component (30 min)

**File**: `_includes/comparison-table.html` (new)

```html
<table class="comparison-table">
  <thead>
    <tr>
      <th class="dimension-header">Feature</th>
      {% for tool in data.tools %}
      <th class="tool-column">
        <img src="{{ tool.logo }}" alt="{{ tool.name }}" class="tool-logo" />
        <span class="tool-name">{{ tool.name }}</span>
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
      <td class="tool-value">
        {{ value }}
      </td>
      {% endfor %}
    </tr>
    {% endfor %}
    {% endfor %}
  </tbody>
</table>
```

---

## Step 5: Add Styling (45 min)

**File**: `assets/css/comparison.css` (new)

```css
/* Comparison Hub Page */
.comparison-hub {
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 1rem;
}

.comparison-intro {
  text-align: center;
  margin-bottom: 3rem;
}

.comparison-intro h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--base-content);
}

.comparison-intro .subtitle {
  font-size: 1.1rem;
  color: rgba(var(--base-content-rgb), 0.8);
  max-width: 600px;
  margin: 0 auto;
}

/* Comparison Table */
.comparison-table-wrapper {
  overflow-x: auto;
  margin: 2rem 0;
  border-radius: var(--radius-box);
  border: 1px solid var(--base-300);
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  background-color: var(--base-100);
}

.comparison-table thead {
  background-color: var(--base-200);
}

.comparison-table th {
  padding: 1.25rem;
  text-align: left;
  font-weight: 600;
  color: var(--base-content);
  border-bottom: 2px solid var(--primary);
}

.dimension-header {
  width: 25%;
}

.tool-column {
  width: 18.75%;
  text-align: center;
}

.tool-logo {
  width: 40px;
  height: 40px;
  display: block;
  margin: 0 auto 0.5rem;
  object-fit: contain;
}

.tool-name {
  display: block;
  font-size: 0.95rem;
}

.comparison-table td {
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--base-300);
  vertical-align: top;
}

.comparison-table tbody tr:hover {
  background-color: var(--base-200);
}

.dimension {
  font-weight: 500;
  width: 25%;
}

.tool-value {
  text-align: left;
  width: 18.75%;
  font-size: 0.95rem;
}

/* CTA Section */
.comparison-cta {
  text-align: center;
  margin-top: 3rem;
  padding: 2rem;
  background-color: var(--base-200);
  border-radius: var(--radius-box);
}

.comparison-cta h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.comparison-cta p {
  color: rgba(var(--base-content-rgb), 0.8);
  margin-bottom: 1.5rem;
}

.cta-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-links .btn {
  min-width: 180px;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .comparison-hub {
    margin: 2rem auto;
  }

  .comparison-intro h1 {
    font-size: 1.5rem;
  }

  .comparison-intro .subtitle {
    font-size: 1rem;
  }

  .comparison-table-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .comparison-table {
    font-size: 0.875rem;
  }

  .comparison-table th {
    padding: 0.75rem;
  }

  .comparison-table td {
    padding: 0.75rem;
  }

  .tool-logo {
    width: 32px;
    height: 32px;
  }

  .tool-name {
    font-size: 0.85rem;
  }

  .comparison-cta {
    padding: 1.5rem;
  }

  .cta-links {
    flex-direction: column;
  }

  .cta-links .btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .comparison-intro h1 {
    font-size: 1.25rem;
  }

  .comparison-table {
    font-size: 0.8rem;
  }

  .comparison-table th,
  .comparison-table td {
    padding: 0.5rem;
  }

  .tool-logo {
    width: 28px;
    height: 28px;
    margin-bottom: 0.25rem;
  }
}
```

**Don't forget to link the CSS** in `_layouts/default.html` or `_includes/header.html`:

```html
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/comparison.css">
```

---

## Step 6: Test Locally (30 min)

### 6.1 Visual Testing

```bash
# Ensure dev server is running
bundle exec jekyll serve

# Open browser
open http://localhost:4000/compare/
open http://localhost:4000/fr/compare/
```

✅ **Checklist**:
- [ ] Hub page displays correctly
- [ ] Comparison table renders with 4 tools and all dimensions
- [ ] Mobile responsive (test at 320px, 768px, 1024px)
- [ ] Dropdown menu appears on desktop navbar
- [ ] Dropdown menu works on mobile navbar
- [ ] All links in dropdown work
- [ ] All links in table CTA section work
- [ ] French version displays correctly
- [ ] No console errors

### 6.2 Build Test

```bash
bundle exec jekyll build

# Should show: Successfully generated site in _site to https://sinra.dev
```

### 6.3 Lighthouse Test (Local)

```bash
# Use Chrome DevTools or lighthouse CLI
# Target: Performance ≥90, Accessibility ≥95, Best Practices ≥90, SEO ≥90
```

---

## Step 7: Commit & Create PR (15 min)

```bash
# Stage all changes
git add _data/ _pages/ _includes/ assets/css/

# Commit
git commit -m "feat: Add comparison hub and navbar dropdown

- Add Compare dropdown to navbar with hub + detailed page links
- Create /compare/ hub page with 4-tool comparison table (9 dimensions)
- Update header template to support nested menu items
- Add comparison styling with mobile responsiveness
- Support EN/FR multilingual rendering"

# Push and create PR
git push -u origin 001-navbar-compare-dropdown

# Then create PR on GitHub
# Link to spec and plan
# Wait for Lighthouse CI to pass
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| YAML syntax error | Run `bundle exec jekyll build` to see errors |
| Dropdown not showing | Check navbar.css has `.dropdown` class; verify CSS is linked |
| Links broken | Verify `site.baseurl` is used correctly in templates |
| French page not working | Ensure `compare.fr.html` exists and has `lang: fr` |
| Table doesn't fit on mobile | Check `assets/css/comparison.css` overflow-x: auto |
| Lighthouse score dropped | Check CSS file size; optimize images; avoid new fonts |

---

## Next Steps

After testing:
1. Commit and push (see Step 7)
2. Create PR with links to spec/plan
3. Wait for GitHub Actions Lighthouse CI to pass
4. Merge to main
5. Deploy via GitHub Pages (automatic)

