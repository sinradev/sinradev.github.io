# CSS Overrides Strategy

**Created:** 2025-11-29
**Purpose:** Define rules and guidelines for selective CSS overrides to maintain visual consistency while minimizing custom CSS

---

## Override Philosophy

**Principle:** Use DaisyUI as the foundation. Override only when:
1. DaisyUI default doesn't match current site design
2. Brand-specific customization is needed
3. Visual consistency requires adjustment

**Goal:** Keep overrides to <50 total rules, focused on brand differentiation and design coherence.

---

## When to Override

### ✓ ACCEPTABLE OVERRIDES

1. **Color Overrides for Brand Identity**
   - Brand gradient definitions
   - Custom neon colors
   - Accent color variations

2. **Typography Customizations**
   - Font families (brand fonts)
   - Custom font sizes for specific components
   - Line height adjustments

3. **Spacing Adjustments**
   - Container padding for brand layout
   - Section margins for spacing rhythm
   - Gap adjustments for specific layouts

4. **Hover/Focus States**
   - Enhanced interactions for brand
   - Smooth transitions
   - Visual feedback improvements

5. **Complex Component Styling**
   - Multi-element components needing coordination
   - Brand-specific animations
   - Custom gradients for visual interest

### ✗ DO NOT OVERRIDE

1. **Basic Utility Classes**
   - Margin, padding (use Tailwind)
   - Display, flex, grid (use Tailwind)
   - Border, shadow (use DaisyUI)
   - Text colors for standard text (use DaisyUI)

2. **Component Defaults**
   - Button sizing (use DaisyUI sizes)
   - Card structure (use DaisyUI card)
   - Form controls (use DaisyUI forms)
   - Border radius (use Tailwind)

3. **Responsive Breakpoints**
   - Use Tailwind breakpoints (`md:`, `lg:`, `xl:`)
   - Don't create custom breakpoints
   - Don't override responsive behavior

---

## Override Documentation Format

**Every override MUST include a comment explaining:**

```css
/* OVERRIDE: [component] - [reason]
   Rationale: Why DaisyUI default doesn't work
   Impact: Visual effect of this override
   Brand: How this supports brand identity
*/
.custom-class {
  /* override properties */
}
```

### Example

```css
/* OVERRIDE: Hero gradient - Brand space theme
   Rationale: DaisyUI gradients don't match custom neon aesthetic
   Impact: Creates distinctive hero visual with gradient animation
   Brand: Core to Sinra's modern, tech-forward visual identity
*/
.hero-gradient {
  background: var(--gradient-hero);
  animation: gradientShift 8s ease infinite;
}
```

---

## Color Override Rules

### DaisyUI Dim Theme Colors (DO NOT OVERRIDE)

These colors match DaisyUI exactly and should NOT be redefined:

```
❌ DO NOT redefine:
  --primary: oklch(86.133% 0.141 139.549);
  --secondary: oklch(73.375% 0.165 35.353);
  --success: oklch(86.171% 0.142 166.534);
  --warning: oklch(86.163% 0.142 94.818);
  --error: oklch(82.418% 0.099 33.756);
  --gray-50 through --gray-900
```

### Brand Color Overrides (KEEP THESE)

These are brand-specific and should be preserved:

```
✓ KEEP:
  --primary-dark: oklch(80% 0.141 139.549);     /* Variant */
  --accent: oklch(74.229% 0.133 311.379);       /* Custom */
  --neon-blue: #00d4ff;                         /* Brand */
  --neon-purple: #8b5cf6;                       /* Brand */
  --neon-green: #00ff88;                        /* Brand */
  --neon-pink: #ff0080;                         /* Brand */
  --neon-orange: #ff6b35;                       /* Brand */
```

---

## Gradient Override Rules

### Preserve Brand Gradients

Gradients are essential for brand identity and should be kept:

```css
/* ✓ KEEP - Brand identity */
--gradient-primary: linear-gradient(135deg, primary, primary-dark);
--gradient-secondary: linear-gradient(135deg, secondary, secondary-dark);
--gradient-space: linear-gradient(135deg, gray-50 0%, gray-200 100%);
--gradient-neon: linear-gradient(45deg, neon-blue, neon-purple, neon-green);
--gradient-hero: linear-gradient(135deg, gray-50 0%, gray-200 100%);
```

---

## Typography Override Rules

### Font Variables (KEEP)

Brand typography is core to visual identity:

```css
/* ✓ KEEP */
--font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", ...
--font-mono: "SF Mono", Monaco, "Cascadia Code", ...
```

### Custom Font Sizes (REVIEW)

Only keep custom sizes if they're brand-specific:

```css
/* Consider removing - might be achievable with Tailwind */
.headline { font-size: 2.8rem; }  /* Use Tailwind: text-5xl */
.subtitle { font-size: 1.25rem; }  /* Use Tailwind: text-xl */

/* Keep if brand-specific */
.hero-title { font-size: 3.5rem; font-weight: 700; } /* Brand-specific hero */
```

---

## Spacing Override Rules

### Container Spacing (KEEP ESSENTIAL)

```css
/* ✓ KEEP - Used throughout */
--container-padding: 24px;
--section-margin: 80px;
--border-radius: 6px;

/* ❌ REMOVE - Use Tailwind instead */
.custom-margin { margin: 20px; }  → Use Tailwind: m-5
.custom-padding { padding: 16px; } → Use Tailwind: p-4
```

---

## Shadow & Border Override Rules

### Shadows

```css
/* ❌ REMOVE - Use DaisyUI/Tailwind instead */
--shadow-sm: 0 1px 3px rgba(...);   → Use Tailwind: shadow-sm
--shadow-md: 0 3px 6px rgba(...);   → Use Tailwind: shadow-md
--shadow-lg: 0 8px 24px rgba(...);  → Use Tailwind: shadow-lg

/* ✓ KEEP - Custom brand shadow */
--shadow-glow: 0 0 20px oklch(...); → Brand glow effect
```

### Borders

```css
/* ❌ REMOVE - Use Tailwind instead */
border: 1px solid gray;  → Use Tailwind: border border-gray-300

/* ✓ KEEP - Custom brand borders */
border: 2px solid neon;  → Brand-specific accent border
```

---

## Animation Override Rules

### Transitions

```css
/* ❌ REMOVE - Use Tailwind instead */
--transition-fast: 0.15s;    → Use Tailwind: transition-fast
--transition-normal: 0.3s;   → Use Tailwind: transition
--transition-slow: 0.5s;     → Use Tailwind: transition-slow

/* ✓ KEEP - Custom animations */
@keyframes gradientShift { ... }  /* Brand gradient animation */
@keyframes fadeIn { ... }         /* Custom entrance effect */
```

---

## Component-Specific Override Guidelines

### Buttons

```css
/* ❌ DO NOT override */
.btn { padding: 10px; }           → Use DaisyUI btn-sm, btn-lg
.btn:hover { background: ...; }   → Use DaisyUI default

/* ✓ ACCEPTABLE */
.btn-brand {
  /* Additional brand styling */
  border-color: var(--neon-blue);
}
```

### Cards

```css
/* ❌ DO NOT override */
.card { border-radius: 8px; }     → Use DaisyUI default
.card { padding: 20px; }          → Use card-body

/* ✓ ACCEPTABLE */
.card-brand:hover {
  box-shadow: 0 0 20px var(--shadow-glow);
  border-color: var(--neon-blue);
}
```

### Forms

```css
/* ❌ DO NOT override */
.input { padding: 10px; }         → Use DaisyUI input
.input:focus { border: 1px solid blue; } → Use DaisyUI default

/* ✓ ACCEPTABLE */
.form-card {
  background: rgba(var(--primary-dark) / 0.05);
  border-color: var(--neon-purple);
}
```

---

## Testing Override Changes

### Before Committing an Override

1. **Check if Tailwind class exists**
   - Search Tailwind docs first
   - Example: margin → use `m-4` instead of custom CSS

2. **Check if DaisyUI provides it**
   - Search DaisyUI components
   - Example: shadows → use `shadow-lg` instead of custom

3. **Verify brand necessity**
   - Does this customize beyond standard?
   - Is it essential to brand identity?
   - Could it be achieved with Tailwind utilities?

4. **Document the override**
   - Add comment with OVERRIDE format
   - Explain rationale
   - Link to DaisyUI/Tailwind if relevant

5. **Test responsiveness**
   - Verify override works at all breakpoints
   - Check mobile (320px), tablet (768px), desktop (1440px)

---

## Override Review Checklist

Before merging refactored CSS, validate each override:

- [ ] Override has documentation comment
- [ ] Rationale clearly explains why override needed
- [ ] Brand benefit confirmed
- [ ] Tailwind/DaisyUI alternative verified as inadequate
- [ ] Tested at mobile, tablet, desktop breakpoints
- [ ] Contributes to visual consistency
- [ ] Does not duplicate Tailwind/DaisyUI functionality

---

## Expected Override Count

**Phase 4 Target:** <50 total CSS rules after refactoring

**Breakdown:**
- Brand colors: 8 definitions
- Gradients: 5 definitions
- Typography: 4 definitions
- Custom animations: 3 definitions
- Spacing adjustments: 5 definitions
- Component enhancements: 10 definitions
- Misc brand styling: 10 definitions
- **Total: ~45 rules** ✓

---

## References

- **DaisyUI Components:** https://daisyui.com/components/
- **Tailwind Utilities:** https://tailwindcss.com/docs
- **DaisyUI Themes:** https://daisyui.com/docs/themes/
- **Project Constitution:** `.specify/memory/constitution.md`

---

**Status:** Ready for Phase 4 implementation
**Last Updated:** 2025-11-29
