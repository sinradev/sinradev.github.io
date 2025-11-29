# CSS Maintenance Guide - Sinra Website

**Version:** 1.0
**Date:** 2025-11-29
**Last Updated:** 2025-11-29
**Audience:** Developers maintaining Sinra website CSS

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [File Organization](#file-organization)
3. [Color System](#color-system)
4. [CSS Variables](#css-variables)
5. [DaisyUI Integration](#daisyui-integration)
6. [Tailwind Utilities](#tailwind-utilities)
7. [Adding New Styles](#adding-new-styles)
8. [Maintenance Procedures](#maintenance-procedures)
9. [Common Tasks](#common-tasks)
10. [Troubleshooting](#troubleshooting)

---

## Architecture Overview

### Design Philosophy

The Sinra website CSS follows a **hybrid approach**:

- **Foundation:** DaisyUI components (buttons, cards, forms) + Tailwind CSS utilities
- **Enhancement:** Custom brand-specific overrides in theme.css
- **Brand Identity:** Neon colors and space-themed gradients

This approach balances:
- ✅ Design system consistency (DaisyUI Dim theme)
- ✅ Brand differentiation (neon colors, gradients)
- ✅ Developer efficiency (Tailwind utilities + components)
- ✅ File size optimization (17% CSS reduction achieved)

### CSS Cascade

```
Browser defaults
       ↓
DaisyUI CSS (via Tailwind CDN or build)
       ↓
theme.css (brand variables, overrides, animations)
       ↓
layout.css (layout enhancements, spacing)
       ↓
blog.css (blog-specific styling)
       ↓
plan.css (pricing page styling)
       ↓
contact.css (contact page styling)
       ↓
HTML Tailwind utility classes (spacing, sizing)
```

---

## File Organization

### Directory Structure

```
assets/css/
├── theme.css       (64.7 KB) - Core styles, colors, animations
├── layout.css      (6.3 KB)  - Layout enhancements, header/footer
├── blog.css        (13.4 KB) - Blog post styling
├── plan.css        (4.9 KB)  - Pricing page styling
└── contact.css     (138 B)   - Contact page overrides (minimal)
```

### File Responsibilities

**theme.css** - Core stylesheet
- CSS variables (colors, spacing, typography)
- Reset and base styles
- Component overrides and enhancements
- Animations and keyframes
- Brand-specific styling

**layout.css** - Layout and structure
- Navigation styling
- Page layout enhancements
- Section spacing
- Responsive breakpoints
- Form transition enhancements

**blog.css** - Blog styling
- Blog hero section
- Post cards and grid layouts
- Post content styling (headings, blockquotes, code)
- Related posts and navigation
- Author bio and testimonials

**plan.css** - Pricing page
- Pricing tier styling
- Pricing table layout
- Feature comparison styling
- CTA sections

**contact.css** - Contact page
- Minimal overrides
- Reserved for future contact-specific styles

---

## Color System

### DaisyUI Dim Theme Colors

The site uses **DaisyUI Dim theme** as the foundation:

```css
/* Primary Colors (handled by DaisyUI) */
--primary: oklch(86.133% 0.141 139.549);       /* Cyan */
--secondary: oklch(73.375% 0.165 35.353);      /* Orange */
--accent: oklch(74.229% 0.133 311.379);        /* Purple */

/* Status Colors (handled by DaisyUI) */
--success: oklch(86.171% 0.142 166.534);       /* Green */
--warning: oklch(86.163% 0.142 94.818);        /* Yellow */
--error: oklch(82.418% 0.099 33.756);          /* Red */

/* Neutral/Base (handled by DaisyUI) */
--base-100: oklch(30.857% 0.023 264.149);      /* Dark background */
--base-200: oklch(28.036% 0.019 264.182);      /* Slightly lighter */
--base-300: oklch(26.346% 0.018 262.177);      /* Even lighter */
--base-content: oklch(82.901% 0.031 222.959);  /* Text color */
```

**In HTML, use DaisyUI color classes:**
```html
<!-- Primary button -->
<button class="btn btn-primary">Click me</button>

<!-- Primary text color -->
<span class="text-primary">Important text</span>

<!-- Base background -->
<div class="bg-base-100">Content area</div>
```

### Brand Custom Colors

Sinra-specific colors are preserved in theme.css:

```css
/* Brand Neon Colors */
--neon-blue: #00d4ff;
--neon-purple: #8b5cf6;
--neon-green: #00ff88;
--neon-pink: #ff0080;
--neon-orange: #ff6b35;

/* Brand Dark Variant */
--primary-dark: oklch(80% 0.141 139.549);

/* Brand Gradients */
--gradient-primary: linear-gradient(...);
--gradient-secondary: linear-gradient(...);
--gradient-space: linear-gradient(...);
--gradient-neon: linear-gradient(...);
--gradient-hero: linear-gradient(...);
```

**Usage in CSS:**
```css
/* Button with neon hover */
.button a:hover {
  border-color: var(--neon-blue);
  box-shadow: 0 0 20px var(--neon-blue);
}

/* Hero section background */
.hero {
  background: var(--gradient-hero);
}
```

**In HTML, use inline styles or custom classes:**
```html
<!-- Neon accent text -->
<span class="hover:text-[var(--neon-blue)]">Hover me</span>

<!-- Gradient button -->
<button style="background: var(--gradient-primary)">Special</button>
```

### Color Decision Tree

When styling something, decide in this order:

```
1. Is it a standard button, card, or form?
   → Use DaisyUI component classes (btn, card, input, etc.)

2. Does it need the primary color?
   → Use DaisyUI class: text-primary, bg-primary

3. Does it need a neon brand accent?
   → Use custom variable: var(--neon-blue), var(--neon-purple)

4. Does it need the space theme gradient?
   → Use custom variable: var(--gradient-space)

5. Is it a hover/active state?
   → Combine with DaisyUI utilities or custom hover rules

6. Still not working?
   → Document as OVERRIDE in CSS with rationale
```

---

## CSS Variables

### Defined Variables in theme.css

```css
/* Brand Colors */
--primary-dark: oklch(80% 0.141 139.549);
--neon-blue: #00d4ff;
--neon-purple: #8b5cf6;
--neon-green: #00ff88;
--neon-pink: #ff0080;
--neon-orange: #ff6b35;

/* Gradients */
--gradient-primary: linear-gradient(135deg, ... 100%);
--gradient-secondary: linear-gradient(135deg, ... 100%);
--gradient-space: linear-gradient(135deg, ... 100%);
--gradient-neon: linear-gradient(45deg, ... #ff0080);
--gradient-hero: linear-gradient(135deg, ... 100%);

/* Spacing */
--border-radius: 6px;
--border-radius-lg: 12px;
--border-radius-xl: 16px;
--btn-border-radius: 6px;
--section-margin: 80px;
--container-padding: 24px;

/* Shadows */
--shadow-glow: 0 0 20px oklch(86.133% 0.141 139.549 / 0.3);

/* Typography */
--font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", ...
--font-mono: "SF Mono", Monaco, "Cascadia Code", ...

/* Content Colors */
--color-base-content: oklch(17.226% 0.028 139.549);
--color-primary-content: oklch(17.226% 0.028 139.549);
```

### Using Variables

**In CSS:**
```css
.button {
  border-radius: var(--btn-border-radius);
  background: var(--primary);
  padding: 12px 24px;
  transition: var(--transition-normal);
}

.hero {
  background: var(--gradient-hero);
  padding: var(--section-margin) 0;
}
```

**In HTML (inline styles):**
```html
<div style="border-radius: var(--border-radius); color: var(--neon-blue);">
  Styled content
</div>
```

**In HTML (CSS classes - preferred):**
```html
<!-- Use Tailwind or DaisyUI classes instead -->
<div class="rounded-md text-primary">Styled content</div>
```

### Adding New Variables

When adding a new variable:

1. **Check if it exists in DaisyUI first** - Use DaisyUI color instead
2. **Add to :root in theme.css** - Within appropriate section
3. **Document the purpose** - In a comment above the variable
4. **Use consistently** - Don't create duplicate variables

**Good:**
```css
:root {
  /* OVERRIDE: Custom animation timing for brand interactions */
  --transition-brand: 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

**Bad:**
```css
:root {
  --my-color-1: #00d4ff;
  --random-delay: 300ms;
  /* Unclear purpose, inconsistent naming */
}
```

---

## DaisyUI Integration

### DaisyUI Components Available

The site integrates with DaisyUI Dim theme. All components are available:

#### Buttons
```html
<button class="btn">Default</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent</button>
<button class="btn btn-ghost">Ghost (Nav links)</button>
<button class="btn btn-outline">Outline</button>

<!-- Sizes -->
<button class="btn btn-lg">Large</button>
<button class="btn btn-sm">Small</button>
<button class="btn btn-xs">Extra Small</button>

<!-- States -->
<button class="btn btn-disabled">Disabled</button>
<button class="btn btn-loading">Loading</button>
```

#### Cards
```html
<div class="card bg-base-100 shadow-xl">
  <figure><img src="image.jpg" alt="Album" /></figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>Card description...</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Action</button>
    </div>
  </div>
</div>
```

#### Forms
```html
<label class="form-control w-full">
  <div class="label">
    <span class="label-text">Your name</span>
  </div>
  <input type="text" class="input input-bordered w-full" />
</label>

<label class="form-control w-full">
  <div class="label">
    <span class="label-text">Your email</span>
  </div>
  <input type="email" class="input input-bordered w-full" />
</label>

<label class="form-control w-full">
  <div class="label">
    <span class="label-text">Message</span>
  </div>
  <textarea class="textarea textarea-bordered w-full" rows="6"></textarea>
</label>
```

#### Tables
```html
<div class="overflow-x-auto">
  <table class="table">
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
      </tr>
    </tbody>
  </table>
</div>
```

#### Badges
```html
<div class="badge">Default</div>
<div class="badge badge-primary">Primary</div>
<div class="badge badge-secondary">Secondary</div>
<div class="badge badge-success">Success</div>
<div class="badge badge-warning">Warning</div>
<div class="badge badge-error">Error</div>
```

### When to Customize DaisyUI

**Use DaisyUI components as-is for:**
- ✅ Standard buttons (primary, secondary, accent, ghost)
- ✅ Basic cards (default styling)
- ✅ Form inputs and controls
- ✅ Tables
- ✅ Badges and pills
- ✅ Navigation components

**Add CSS overrides only for:**
- 🎨 Brand-specific hover effects (neon glow)
- 🎨 Brand-specific animations (gradient shifts)
- 🎨 Brand-specific spacing (section margins)
- 🎨 Brand-specific colors (neon accents)
- 🎨 Complex layouts (multi-element arrangements)

**Never override:**
- ❌ Basic button sizing (use btn-sm, btn-lg instead)
- ❌ Basic card padding (use card-body instead)
- ❌ Basic form styling (use DaisyUI form-control instead)
- ❌ Basic spacing (use Tailwind m-, p-, gap- instead)

---

## Tailwind Utilities

### Common Tailwind Classes Used

**Layout:**
```html
<div class="flex items-center justify-center gap-4">
  <div class="w-full md:w-1/2">Half width on tablet+</div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

**Spacing:**
```html
<!-- Margin -->
<div class="mt-8 mb-4 mx-auto">Spaced content</div>

<!-- Padding -->
<div class="p-6 md:p-8">Responsive padding</div>

<!-- Gap (for flex/grid) -->
<div class="flex gap-4">Items with gap</div>
```

**Sizing:**
```html
<div class="w-full h-64">Full width, fixed height</div>
<div class="max-w-2xl">Maximum width constraint</div>
```

**Typography:**
```html
<h1 class="text-3xl md:text-4xl font-bold">Responsive heading</h1>
<p class="text-gray-400 leading-relaxed">Body text</p>
```

**Colors:**
```html
<span class="text-primary">Primary color text</span>
<div class="bg-base-100">Base background</div>
<button class="border border-base-300">Border color</button>
```

**Responsive Prefixes:**
- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)
- `xl:` - Extra large screens (1280px+)
- `2xl:` - 2X large screens (1536px+)

---

## Adding New Styles

### Workflow: Adding a New Component

**Step 1: Check DaisyUI First**
```
Does DaisyUI have a component for this?
YES → Use DaisyUI component + Tailwind utilities
NO  → Continue to step 2
```

**Step 2: Check Tailwind Utilities**
```
Can Tailwind utilities achieve this?
YES → Use Tailwind classes in HTML
NO  → Continue to step 3
```

**Step 3: Add CSS Override**
```
Is this a brand-specific design element?
YES → Add to theme.css with OVERRIDE comment
NO  → Add to appropriate CSS file (layout, blog, plan, contact)
```

### Template: Adding a CSS Override

When adding custom CSS, always include the OVERRIDE documentation:

```css
/* OVERRIDE: [Component Name] - [What it does]
   Rationale: Why DaisyUI/Tailwind can't achieve this
   Impact: What visual effect this creates
   Brand: How this supports Sinra brand identity
*/
.custom-component {
  /* CSS properties */
}
```

**Example:**
```css
/* OVERRIDE: Hero section gradient animation - Space theme
   Rationale: DaisyUI doesn't provide custom neon/space gradients
   Impact: Creates distinctive hero section with animated gradient
   Brand: Core to Sinra's modern, tech-forward visual identity
*/
.hero {
  background: var(--gradient-hero);
  animation: gradientShift 8s ease-in-out infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

### Adding New Responsive Styles

Always use Tailwind-first approach:

**In HTML (Preferred):**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-6 lg:p-8">
  Content here
</div>
```

**In CSS (Only if Tailwind insufficient):**
```css
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;  /* 16px instead of 24px on mobile */
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;  /* 32px on desktop */
  }
}
```

---

## Maintenance Procedures

### Regular Maintenance Tasks

#### Monthly
- [ ] Review CSS file sizes
- [ ] Check for unused color variables
- [ ] Verify no broken gradients in production
- [ ] Test button/card hover effects

#### Quarterly
- [ ] Audit custom CSS rules
- [ ] Check for new DaisyUI features to adopt
- [ ] Review brand color consistency
- [ ] Test responsive design at all breakpoints

#### Annually
- [ ] Update DaisyUI version
- [ ] Review Tailwind version compatibility
- [ ] Audit all OVERRIDE comments for necessity
- [ ] Conduct full brand color audit

### CSS File Health Checklist

```
☐ theme.css remains <70 KB
☐ No unused CSS variables
☐ All colors documented
☐ All animations smooth
☐ No console CSS warnings
☐ Responsive design verified at 320px, 768px, 1440px
☐ All buttons use DaisyUI classes
☐ All cards use card component or custom card classes
☐ All forms use input/textarea/select classes
☐ No duplicate rules across files
```

### Handling CSS Warnings

**Duplicate selector warning:**
```css
/* Solution: Consolidate into single rule */
/* Instead of: */
.button { color: red; }
/* Later: */
.button { font-size: 14px; }

/* Write: */
.button {
  color: red;
  font-size: 14px;
}
```

**Unused variable warning:**
```css
/* Solution: Remove if truly unused, or document usage */
/* Keep if intentional: */
:root {
  /* FUTURE USE: Brand secondary color for expansion */
  --color-secondary-accent: #ff9800;
}
```

---

## Common Tasks

### Task: Add a New Button Style

**Requirement:** New button style for "Featured" actions

**Solution:**

1. Check DaisyUI buttons - none match
2. Create custom CSS with OVERRIDE comment:

```css
/* OVERRIDE: Featured button - Prominent action emphasis
   Rationale: DaisyUI colors don't include distinctive featured style
   Impact: Creates visual emphasis for important primary actions
   Brand: Uses neon accent for attention-grabbing featured buttons
*/
.btn-featured {
  background: linear-gradient(135deg, var(--neon-blue), var(--neon-purple));
  border: 2px solid var(--neon-blue);
  color: white;
  font-weight: 700;
}

.btn-featured:hover {
  box-shadow: 0 0 20px var(--neon-blue);
  transform: translateY(-2px);
}
```

3. Use in HTML:
```html
<button class="btn btn-featured">Featured Action</button>
```

### Task: Update Brand Color

**Requirement:** Change neon-blue to a new value

**Solution:**

1. Update CSS variable in theme.css:
```css
:root {
  --neon-blue: #00d4ff;  /* OLD */
  --neon-blue: #00e8ff;  /* NEW - Brighter cyan */
}
```

2. Rebuild site:
```bash
bundle exec jekyll build
```

3. Test across pages:
   - [ ] Hero section
   - [ ] Button hover effects
   - [ ] Card accents
   - [ ] Gradient animations

### Task: Add Responsive Design

**Requirement:** Make feature grid responsive

**Before:**
```html
<div class="grid" style="grid-template-columns: repeat(3, 1fr)">
  <div class="feature">Item 1</div>
  <div class="feature">Item 2</div>
  <div class="feature">Item 3</div>
</div>
```

**After (Using Tailwind):**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <div class="feature">Item 1</div>
  <div class="feature">Item 2</div>
  <div class="feature">Item 3</div>
</div>
```

---

## Troubleshooting

### Issue: Button styling not applying

**Symptoms:** Button appears unstyled despite CSS rules

**Diagnosis:**
1. Verify button has appropriate class:
   ```html
   ❌ <button>Click me</button>
   ✅ <button class="btn btn-primary">Click me</button>
   ```

2. Check specificity - DaisyUI may override:
   ```css
   .btn { /* This is high specificity */ }
   button { /* This won't apply if .btn is defined */ }
   ```

3. Verify CSS file loaded:
   ```bash
   curl -s http://localhost:4000 | grep "assets/css"
   ```

**Solution:**
- Use DaisyUI button classes
- Increase CSS specificity if needed
- Rebuild Jekyll site

---

### Issue: Color looks wrong

**Symptoms:** Color appears as different shade than expected

**Diagnosis:**
1. Check which color variable is being used:
   ```bash
   grep -n "var(--color-name)" assets/css/*.css
   ```

2. Verify variable definition:
   ```bash
   grep "^  --color-name:" assets/css/theme.css
   ```

3. Check for DaisyUI theme override:
   - DaisyUI Dim theme may redefine colors in HTML

**Solution:**
- Use browser DevTools to inspect computed color
- Verify variable name spelling
- Check DaisyUI theme settings in tailwind.config

---

### Issue: Mobile layout broken

**Symptoms:** Mobile view shows desktop layout incorrectly

**Diagnosis:**
1. Check viewport meta tag in layout:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

2. Verify responsive classes used:
   ```html
   ❌ <div style="width: 500px">Fixed width</div>
   ✅ <div class="w-full md:w-1/2">Responsive</div>
   ```

3. Test at actual breakpoint:
   ```bash
   # Mobile: 320px
   # Tablet: 768px
   # Desktop: 1024px, 1440px
   ```

**Solution:**
- Add responsive Tailwind classes
- Use mobile-first approach (base = mobile, md: = tablet+)
- Test with browser DevTools device mode

---

### Issue: Build fails with CSS error

**Symptoms:** `jekyll build` fails or produces warnings

**Diagnosis:**
1. Check Jekyll build output:
   ```bash
   bundle exec jekyll build
   ```

2. Look for CSS-related errors:
   - Invalid OKLCH syntax
   - Unclosed braces
   - Invalid variable references

**Solution:**
- Fix syntax errors in CSS files
- Rebuild with:
   ```bash
   bundle exec jekyll build
   ```
- Verify no Jekyll errors reported

---

## Resources & References

- **DaisyUI Documentation:** https://daisyui.com/
- **Tailwind CSS Documentation:** https://tailwindcss.com/
- **CSS Variables (MDN):** https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- **OKLCH Color Format:** https://oklch.com/

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-11-29 | Initial CSS maintenance guide |

---

**Last Updated:** 2025-11-29
**Next Review:** 2026-02-29 (Quarterly)
**Maintained By:** Development Team
**Questions?** Refer to spec.md and phase reports
