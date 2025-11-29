# CSS Architecture & Data Model

**Created:** 2025-11-29
**Purpose:** Document CSS structure, organization, and relationship to DaisyUI/Tailwind ecosystem

---

## Current CSS Architecture

### File Organization

```
assets/css/
├── theme.css          (64 KB) - Primary stylesheet, to be simplified
├── layout.css         (6.2 KB) - Layout utilities, to be refactored
├── blog.css           (13 KB) - Blog post styling, to be refactored
├── plan.css           (4.9 KB) - Pricing page, to be refactored
└── contact.css        (138 B) - Contact form, minimal
```

### CSS Cascade & Specificity

**Current state:**
1. Browser defaults
2. DaisyUI CSS (via Tailwind)
3. theme.css (general styles, colors, typography)
4. layout.css (layout-specific)
5. page-specific CSS files (blog.css, plan.css, contact.css)
6. Inline styles (minimal)

**After refactoring:**
1. Browser defaults
2. DaisyUI CSS (via Tailwind)
3. Simplified theme.css (brand colors, gradients only)
4. Tailwind utility classes in HTML
5. Minimal page-specific CSS

---

## Proposed CSS Structure (Post-Refactoring)

### theme.css (Simplified to ~40 KB)

**Section 1: CSS Variables (Lines 1-100)**
```
- Color definitions (brand colors only)
- Gradient definitions (brand gradients)
- Typography variables (fonts)
- Spacing variables (essential padding/margin)
- Animation variables (fast/normal/slow transitions)
```

**Section 2: Base Styles (Lines 101-200)**
```
- HTML resets (box-sizing, scroll-behavior)
- Body styles (font-family, line-height, background)
- Heading styles (h1-h6 base sizing)
```

**Section 3: Container & Layout (Lines 201-250)**
```
- .container (max-width, padding)
- .text-container (narrower max-width)
- Basic layout helpers
```

**Section 4: Component Enhancements (Lines 251-350)**
```
- Brand-specific button styles (hover effects with neon colors)
- Custom card styling (shadows, gradients)
- Form enhancements (brand styling)
- Hero section customizations
```

**Section 5: Animations (Lines 351-400)**
```
- @keyframes fadeIn
- @keyframes gradientShift (if brand-critical)
- Transition timing definitions
```

**Section 6: Brand-Specific (Lines 401-600)**
```
- Custom gradient applications
- Neon color accent usage
- Brand animation sequences
- Hero section theme
- Scroll effects
```

### layout.css (Simplified to ~4 KB)

**Proposal:**
- Remove layout utilities (use Tailwind)
- Keep navigation-specific styling
- Keep mobile toggle styling
- Keep footer layout
- Use Tailwind for flex, grid, gap

### blog.css (Simplified to ~8 KB)

**Proposal:**
- Convert `.post-card` to DaisyUI `card`
- Convert `.blog-posts` grid to Tailwind responsive
- Use `badge` for categories
- Keep brand color accents
- Use Tailwind for spacing

### plan.css (Simplified to ~3 KB)

**Proposal:**
- Convert `.plan-card` to DaisyUI `card`
- Convert pricing table to DaisyUI `table`
- Use Tailwind for grid layout
- Keep brand color accents

### contact.css (Simplified to <1 KB)

**Proposal:**
- Convert form styling to DaisyUI form components
- Use `input`, `textarea`, `button` classes
- Remove custom form styling
- Keep brand color accents

---

## CSS Classes Organization

### Color Variables (Brand Only)

**Keep in theme.css:**
```css
:root {
  /* DaisyUI Dim Theme - DO NOT REDEFINE */
  --primary: oklch(...);      /* Use via DaisyUI classes */
  --secondary: oklch(...);    /* Use via DaisyUI classes */

  /* Brand Custom Colors - KEEP */
  --primary-dark: oklch(...);
  --accent: oklch(...);
  --neon-blue: #00d4ff;
  --neon-purple: #8b5cf6;
  --neon-green: #00ff88;
  --neon-pink: #ff0080;
  --neon-orange: #ff6b35;
}
```

### Gradient Variables (Brand Identity)

**Keep in theme.css:**
```css
--gradient-primary: linear-gradient(...);    /* Brand gradient */
--gradient-secondary: linear-gradient(...);  /* Brand gradient */
--gradient-space: linear-gradient(...);      /* Space theme */
--gradient-neon: linear-gradient(...);       /* Neon accent */
--gradient-hero: linear-gradient(...);       /* Hero section */
```

### Typography Variables (Brand Fonts)

**Keep in theme.css:**
```css
--font-family: -apple-system, BlinkMacSystemFont, ...;  /* Brand font stack */
--font-mono: "SF Mono", Monaco, ...;                    /* Monospace fonts */
```

### Spacing Variables (Essential References)

**Keep essential references:**
```css
--container-padding: 24px;      /* Used throughout */
--section-margin: 80px;         /* Section spacing */
--border-radius: 6px;           /* Corner radius */
```

**Remove:** All margin, padding utility variables (use Tailwind instead)

---

## Component-to-CSS Mapping

### Buttons

| Component | CSS Class | DaisyUI | Tailwind | Custom |
|-----------|-----------|---------|----------|--------|
| Primary CTA | `btn-primary` | ✓ | | |
| Ghost/Nav | `btn-ghost` | ✓ | | |
| Accent | `btn-accent` | ✓ | | |
| Size: Small | `btn-sm` | ✓ | | |
| Hover Effect | | | | ✓ (neon glow) |

### Cards

| Component | CSS Class | DaisyUI | Tailwind | Custom |
|-----------|-----------|---------|----------|--------|
| Basic Card | `card` | ✓ | | |
| Card Body | `card-body` | ✓ | | |
| Border | `border` | | ✓ | |
| Shadow | `shadow-xl` | | ✓ | |
| Hover Glow | | | | ✓ (neon) |

### Forms

| Component | CSS Class | DaisyUI | Tailwind | Custom |
|-----------|-----------|---------|----------|--------|
| Text Input | `input input-bordered` | ✓ | | |
| Textarea | `textarea textarea-bordered` | ✓ | | |
| Select | `select select-bordered` | ✓ | | |
| Checkbox | `checkbox` | ✓ | | |
| Radio | `radio` | ✓ | | |
| Focus State | | ✓ | | |

### Tables

| Component | CSS Class | DaisyUI | Tailwind | Custom |
|-----------|-----------|---------|----------|--------|
| Table | `table` | ✓ | | |
| Responsive | `overflow-x-auto` | | ✓ | |
| Striped | `table-zebra` | ✓ | | |

---

## CSS Rule Categories (Post-Refactoring)

### Category 1: CSS Variables (20 rules)
- Brand colors (8)
- Gradients (5)
- Typography (4)
- Spacing (3)

### Category 2: Base Styles (15 rules)
- Reset & normalize
- HTML/Body defaults
- Heading base styles

### Category 3: Component Enhancements (15 rules)
- Button hover effects
- Card hover/shadow effects
- Form styling
- Hero customizations

### Category 4: Layout & Structure (10 rules)
- Container sizing
- Text container
- Basic layout helpers

### Category 5: Animations (5 rules)
- @keyframes fadeIn
- @keyframes gradientShift (if needed)
- Transition timings

**Total: ~65 rules** (within <50 target is unlikely, but <100 is achievable)

---

## Data Flow & Relationships

### Color System

```
DaisyUI Dim Theme (canonical)
    ↓
Used via CSS classes in HTML (btn-primary, bg-base-100, etc.)
    ↓
No redefinition in theme.css
    ↓
Brand colors defined as custom variables (--neon-blue, etc.)
    ↓
Applied to components via CSS rules (hover effects, glows)
```

### Typography System

```
Brand Font Stack (--font-family)
    ↓
Applied to body via CSS
    ↓
Heading sizes via Tailwind text-* classes or custom rules
    ↓
Monospace fonts (--font-mono) for code/technical content
```

### Spacing System

```
Tailwind Spacing Scale (default)
    ↓
Used via utility classes in HTML (m-4, p-6, gap-8)
    ↓
Essential constants in theme.css (--container-padding, --section-margin)
    ↓
Applied to container and layout helpers
```

---

## Metrics & Goals

### Size Reduction

| File | Current | Target | Reduction |
|------|---------|--------|-----------|
| theme.css | 63.9 KB | 35-40 KB | 40% |
| layout.css | 6.2 KB | 3-4 KB | 35% |
| blog.css | 13 KB | 6-8 KB | 40% |
| plan.css | 4.9 KB | 2-3 KB | 50% |
| contact.css | 138 B | <1 KB | Minimal |
| **Total** | **108 KB** | **50-56 KB** | **45-55%** |

### Rule Count Reduction

| Category | Current | Target |
|----------|---------|--------|
| CSS Rules | ~514 | <50 |
| CSS Variables | ~35 | ~20 |
| @keyframes | ~2 | ~2 |
| **Total** | **~551** | **<72** |

### DaisyUI Component Coverage

| Component | Target |
|-----------|--------|
| Buttons | 95%+ (already high) |
| Cards | 90%+ (8 types identified) |
| Forms | 85%+ (via form components) |
| Tables | 100% (pricing table) |
| **Overall** | **95%+** |

---

## Implementation Dependencies

### Required

1. ✓ DaisyUI CSS framework (already integrated)
2. ✓ Tailwind CSS (underlying DaisyUI)
3. ✓ Jekyll build system (already working)
4. ✓ Current HTML structure (not changing)

### Assumed

1. DaisyUI dim theme is active
2. Tailwind utility classes are available
3. No JavaScript-injected styles
4. No CSS-in-JS required

---

## References

- **Current CSS Files:** `assets/css/`
- **DaisyUI Documentation:** https://daisyui.com/
- **Tailwind Documentation:** https://tailwindcss.com/
- **Project Constitution:** `.specify/memory/constitution.md`

---

**Status:** Ready for Phase 4 implementation
**Last Updated:** 2025-11-29
