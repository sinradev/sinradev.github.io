# Sinra Website Constitution & Development Guidance

## Project Overview

**Sinra Website** is a multilingual static site built with **Jekyll 4.3.4** promoting Sinra, a modern project management tool. The site features:
- Multilingual support (EN/FR)
- DaisyUI Dim theme
- Plain CSS (no preprocessors)
- Vanilla JavaScript
- YAML-based data and translations

---

## Core Styling Guidelines

### DaisyUI Dim Theme Colors

All styling must use the **DaisyUI Dim theme** colors defined in `assets/css/theme.css`. These are the canonical colors:

```scss
/* DaisyUI Dim Theme Variables */
--color-base-100: oklch(30.857% 0.023 264.149);    /* Dark background */
--color-base-200: oklch(28.036% 0.019 264.182);    /* Slightly darker bg */
--color-base-300: oklch(26.346% 0.018 262.177);    /* Even darker bg */
--color-base-content: oklch(82.901% 0.031 222.959); /* Light text */

--color-primary: oklch(86.133% 0.141 139.549);       /* Cyan/Green primary */
--color-primary-content: oklch(17.226% 0.028 139.549);

--color-secondary: oklch(73.375% 0.165 35.353);      /* Orange secondary */
--color-secondary-content: oklch(14.675% 0.033 35.353);

--color-accent: #c792e9;                              /* Purple accent */
--color-accent-content: oklch(14.845% 0.026 311.379);

--color-neutral: oklch(24.731% 0.02 264.094);         /* Neutral dark */
--color-neutral-content: oklch(82.901% 0.031 222.959);

--color-info: oklch(86.078% 0.142 206.182);           /* Info (blue) */
--color-info-content: oklch(17.215% 0.028 206.182);

--color-success: oklch(86.171% 0.142 166.534);        /* Success (green) */
--color-success-content: oklch(17.234% 0.028 166.534);

--color-warning: oklch(86.163% 0.142 94.818);         /* Warning (yellow) */
--color-warning-content: oklch(17.232% 0.028 94.818);

--color-error: oklch(82.418% 0.099 33.756);           /* Error (red) */
--color-error-content: oklch(16.483% 0.019 33.756);

/* Radius and spacing */
--radius-selector: 1rem;
--radius-field: 0.5rem;
--radius-box: 1rem;
--size-selector: 0.25rem;
--size-field: 0.25rem;
--border: 1px;
--depth: 0;
--noise: 0;
```

### CSS Guidelines

**MUST**:
1. **Use `assets/css/theme.css`** as the primary stylesheet
2. **Reference DaisyUI Dim theme variables** for all colors (never hardcode colors except for transient promotional content)
3. **Use plain CSS** (NO SCSS, NO preprocessors)
4. **Define new styles within `theme.css`** following existing patterns
5. **Maintain existing color harmony** - new colors must complement the Dim theme
6. **Test responsiveness** with DaisyUI breakpoints (md: 768px default)

**AVOID**:
- Hardcoded color values (except for temporary promotions like Black Friday)
- CSS-in-JS or inline styles (except for dynamic content)
- SCSS/SASS preprocessing
- CSS frameworks other than DaisyUI
- !important rules (rework selectors instead)

### Black Friday Exception (Temporary)

For time-limited promotions (Black Friday), hardcoded colors are acceptable:
- Badge: `#d63031` (red) - high-contrast promotional red
- Banner: `#d63031` with white text
- Original price text: `#888` (gray strikethrough)
- Discounted price: `#d63031` (red emphasis)

These promotional colors are **temporary** and isolated to promotion components. Remove after campaign ends (Nov 28, 2025).

---

## Development Standards

### Multilingual Support

- All text must support EN/FR via YAML data files in `_data/en/` and `_data/fr/`
- Use Liquid templating: `{{ site.data[page.lang].section.key }}`
- No hardcoded strings in HTML/templates
- French translations must maintain English tone/meaning

### Testing

- Manual testing via `bundle exec jekyll serve`
- Cross-browser: Chrome, Firefox, Safari (desktop + mobile)
- Responsive design: test at 320px, 768px, 1024px, 1440px
- Build verification: `bundle exec jekyll build` must succeed

### Git Workflow

- Feature branches: `feature/name` or numbered like `002-feature-name`
- Commits: Clear, descriptive messages with file paths
- PRs: Link to spec/plan, note multilingual updates

---

## Technology Stack

**Fixed**:
- Jekyll 4.3.4
- Ruby 3.4.5
- Plain CSS (from `assets/css/theme.css`)
- Vanilla JavaScript (no transpilation)
- DaisyUI Dim theme variables
- YAML for data/translations

**NO additions** of:
- Build tools, minifiers, or preprocessors
- CSS frameworks (use DaisyUI Dim only)
- Testing frameworks
- Linters or formatters
- Additional gems (unless critical)

---

## Summary

✅ **All styling must align with DaisyUI Dim theme**
✅ **Use `theme.css` as single stylesheet**
✅ **Reference CSS variables from Dim theme**
✅ **Plain CSS only, no SCSS**
✅ **Test EN/FR multilingual rendering**
✅ **Temporary hardcoded colors only for time-limited promotions**

This constitution ensures visual consistency, maintainability, and adherence to Sinra's minimalist, elegant design approach.
