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
1. **Use DaisyUI components in HTML first** - leverage built-in component classes (`btn`, `card`, `badge`, `form-control`, etc.) before adding custom CSS
2. **Use `assets/css/theme.css`** as the primary stylesheet for brand-specific overrides only
3. **Reference DaisyUI Dim theme variables** for all colors (never hardcode colors except for transient promotional content)
4. **Use plain CSS** (NO SCSS, NO preprocessors)
5. **Define new styles within `theme.css`** following existing patterns, but minimize custom CSS by maximizing DaisyUI component usage
6. **Maintain existing color harmony** - new colors must complement the Dim theme
7. **Test responsiveness** with DaisyUI breakpoints (md: 768px default)

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

## Blog Content Guidelines

### Illustrations for Blog Posts

**MANDATORY**: Every blog post created must include custom illustrations that:

1. **Visualize the core message** - illustrations must clarify and reinforce the article's main concepts
2. **Follow brand consistency** - use DaisyUI Dim theme colors and Sinra's visual identity
3. **Are placed strategically** - insert illustrations at key sections to break up text and maintain reader engagement
4. **Are format-appropriate** - use SVG for diagrams/icons, WebP with PNG fallback for complex images
5. **Have descriptive alt text** - ensure accessibility with clear, meaningful descriptions

**Illustration Types to Consider**:
- **Diagrams** - workflow comparisons (before/after), process flows, architecture
- **Visual metaphors** - illustrate abstract concepts (fragmentation, synchronization, visibility)
- **Data visualizations** - charts, graphs, progress indicators, Gantt examples
- **UI mockups** - annotated screenshots showing Sinra features in action
- **Infographics** - summarize key statistics or benefits

**Naming Convention**:
- Store in `assets/images/blog/`
- Format: `YYYY-MM-DD-post-slug-illustration-name.svg` or `.webp`
- Example: `2025-12-19-roadmap-incomplete-pm-gantt-comparison.svg`

**Implementation**:
```markdown
![Alt Text](/assets/images/blog/illustration-name.svg "Tooltip Title")
```

**When to Create Illustrations**:
- Immediately after drafting the blog post content
- Before requesting user validation
- Aim for 3-6 illustrations per long-form article (3000+ words)

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

### DaisyUI Documentation References

When implementing components, refer to:
- **Components**: https://daisyui.com/components/
- **Themes (Dim)**: https://daisyui.com/docs/themes/
- **Tailwind Utilities**: https://tailwindcss.com/docs/utility-first
- **Responsive Design**: https://daisyui.com/docs/use/

---

## Lighthouse CI & Performance Standards

### Performance Requirements

All code must maintain or improve the following **minimum Lighthouse scores**:

- **Performance**: ≥ 90/100
- **Accessibility**: ≥ 95/100
- **Best Practices**: ≥ 90/100
- **SEO**: ≥ 90/100

### GitHub Actions Verification (MANDATORY)

**After every PR creation:**
1. ✅ **Check GitHub Actions status** in the PR checks section
2. ✅ **Verify Lighthouse CI passed** (green checkmark)
3. ✅ **Review the Lighthouse comment** showing score breakdown
4. ❌ **If scores dropped** below thresholds, address before merging
5. ❌ **If Lighthouse CI failed**, fix issues and push new commit

**Workflow Details**:
- Runs on every PR targeting `main` and every push to `main`
- Tests: homepage (EN/FR) + about page (EN/FR)
- Results posted as PR comment with clickable detailed report
- Cannot merge PRs with Lighthouse warnings without review

### Performance Optimization Guidelines

**When optimizing for Lighthouse:**
1. **Images**: Use WebP format with PNG/JPG fallback via `<picture>` element
2. **Dimensions**: Always set explicit width/height on images
3. **Lazy Loading**: Only use on below-the-fold content, NOT on LCP elements
4. **CSS/JS**: Use jekyll-minifier for automatic production minification
5. **Core Web Vitals**: Monitor LCP, FID, CLS

**Tools**:
- Local: `bundle exec jekyll serve` + manual Chrome DevTools
- CI/CD: Lighthouse CI (automated on every PR)
- Manual: lighthouse CLI or Web Vitals extension

---

## Summary

✅ **Prioritize DaisyUI component classes in HTML** - use built-in components before custom CSS
✅ **All styling must align with DaisyUI Dim theme**
✅ **Use `theme.css` for brand-specific overrides only** - minimize custom CSS
✅ **Reference CSS variables from Dim theme**
✅ **Plain CSS only, no SCSS**
✅ **Test EN/FR multilingual rendering**
✅ **Temporary hardcoded colors only for time-limited promotions**
✅ **Check Lighthouse CI results after every PR** - verify all scores meet minimum thresholds before merging

This constitution ensures visual consistency, maintainability, adherence to Sinra's minimalist, elegant design approach while maximizing DaisyUI component usage to reduce CSS duplication, and maintaining high performance standards through automated Lighthouse CI verification.
