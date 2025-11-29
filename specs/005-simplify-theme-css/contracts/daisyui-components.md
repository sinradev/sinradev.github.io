# DaisyUI Component Mapping Guide

**Created:** 2025-11-29
**Purpose:** Reference guide for implementing DaisyUI components throughout the refactored site

---

## Button Components

### DaisyUI Button Classes

| Component | Class | Use Case | Example |
|-----------|-------|----------|---------|
| Primary Button | `btn btn-primary` | Main CTA actions | "Sign up", "Get started" |
| Secondary Button | `btn btn-secondary` | Alternative actions | Secondary CTA |
| Ghost Button | `btn btn-ghost` | Subtle actions | Navigation, toggle buttons |
| Outline Button | `btn btn-outline` | Secondary emphasis | Alternative options |
| Accent Button | `btn btn-accent` | Brand accent color | Special highlighting |

### Button Sizes

| Size | Class | Usage |
|------|-------|-------|
| Large | `btn btn-lg` | Primary hero CTAs |
| Default | `btn` | Standard buttons |
| Small | `btn btn-sm` | Secondary actions, inline |
| Extra Small | `btn btn-xs` | Minimal space needed |

### Button States

| State | Class/Method | Implementation |
|-------|--------------|----------------|
| Disabled | `btn-disabled` or `disabled` attr | Add class or HTML attribute |
| Loading | `btn-disabled` + loading text | Show spinner/loading state |
| Active | (DaisyUI default via CSS) | Focus/active states automatic |
| Hover | (DaisyUI default) | Handled by DaisyUI CSS |

### Current Site Usage

**Already implemented:**
- `btn btn-ghost` - Navbar buttons, toggles
- `btn btn-accent` - CTA buttons (Sign up)
- `btn btn-sm` - Small secondary buttons
- `btn` - Basic buttons

**Recommendation:** Current usage is excellent. No changes needed for button components.

---

## Card Components

### DaisyUI Card Structure

```html
<div class="card bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Title</h2>
    <p>Content here</p>
    <div class="card-actions justify-end">
      <button class="btn">Action</button>
    </div>
  </div>
</div>
```

### Card Variants

| Variant | Classes | Use Case |
|---------|---------|----------|
| Basic Card | `card bg-base-100 shadow-xl` | Standard card with shadow |
| Bordered Card | `card border border-base-300` | Card with visible border |
| Compact Card | `card card-compact` | Reduced padding card |
| Side Image | `card card-side` | Image on left, content right |

### Card Component Classes

| Element | Class | Purpose |
|---------|-------|---------|
| Container | `card` | Main card wrapper |
| Body | `card-body` | Card content container |
| Title | `card-title` | Heading within card |
| Actions | `card-actions` | Button/action container |
| Image | `card-image` | Image section |

### Current Site Cards to Migrate

| Current Class | New DaisyUI Class | Location | Status |
|---------------|-------------------|----------|--------|
| `stat-card` | `card card-compact` | Homepage | Can migrate |
| `benefit-card` | `card` | Benefits section | Can migrate |
| `challenge-card` | `card border` | About page | Can migrate |
| `form-card` | `card` | Contact form | Can migrate |
| `plan-card` | `card` | Pricing plans | Can migrate |
| `difference-card` | `card` | Comparison section | Can migrate |
| `case-study-card` | `card` | Case studies | Can migrate |
| `post-card` | `card` | Blog posts | Can migrate |

**Recommendation:** Migrate all custom card classes to DaisyUI `card` component. Keep brand-specific styling (colors, hover effects) via Tailwind utilities.

---

## Form Components

### DaisyUI Form Elements

| Element | Class | Implementation |
|---------|-------|----------------|
| Input | `input input-bordered` | Text input field |
| Textarea | `textarea textarea-bordered` | Multi-line text |
| Select | `select select-bordered` | Dropdown |
| Checkbox | `checkbox` | Checkbox input |
| Radio | `radio` | Radio button |
| Toggle | `toggle` | Switch/toggle input |

### Form Control Wrapper

```html
<label class="form-control w-full">
  <div class="label">
    <span class="label-text">Your name</span>
  </div>
  <input type="text" class="input input-bordered w-full" />
</label>
```

### Form Layout Classes

| Class | Purpose |
|-------|---------|
| `form-control` | Wrapper for form field |
| `label` | Label container |
| `label-text` | Label text styling |
| `input` | Text input base |
| `textarea` | Textarea base |

**Recommendation:** Convert all custom form styling to DaisyUI form components. Update contact form specifically.

---

## Badge Components

### DaisyUI Badge Classes

| Variant | Class | Use Case |
|---------|-------|----------|
| Default | `badge` | Neutral badge |
| Primary | `badge badge-primary` | Primary color |
| Secondary | `badge badge-secondary` | Secondary color |
| Success | `badge badge-success` | Success/positive |
| Warning | `badge badge-warning` | Warning/caution |
| Error | `badge badge-error` | Error/danger |

### Badge Sizes

| Size | Class |
|------|-------|
| Large | `badge badge-lg` |
| Default | `badge` |
| Small | `badge badge-sm` |

**Recommendation:** Use for any label/tag elements throughout site. Especially for blog post categories.

---

## Table Components

### DaisyUI Table Structure

```html
<div class="overflow-x-auto">
  <table class="table">
    <thead>
      <tr>
        <th>Header</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cell</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Table Classes

| Class | Purpose |
|-------|---------|
| `table` | Main table wrapper |
| `table-compact` | Reduced padding |
| `table-zebra` | Alternating row colors |

**Recommendation:** Use for pricing comparison table. Much simpler than current custom table styling.

---

## Color & Theme Usage

### Color Classes (from DaisyUI Dim Theme)

| Color | Class Prefix | Example |
|-------|--------------|---------|
| Primary (Cyan/Green) | `bg-primary`, `text-primary` | `bg-primary` |
| Secondary (Orange) | `bg-secondary`, `text-secondary` | `bg-secondary` |
| Accent (Purple) | `bg-accent`, `text-accent` | `bg-accent` |
| Success (Green) | `bg-success`, `text-success` | `bg-success` |
| Warning (Yellow) | `bg-warning`, `text-warning` | `bg-warning` |
| Error (Red) | `bg-error`, `text-error` | `bg-error` |
| Base | `bg-base-100`, `bg-base-200` | `bg-base-100` |
| Neutral | `bg-neutral`, `text-neutral` | `bg-neutral` |

### Custom Brand Colors

**Keep in CSS variables (theme.css):**
- `--neon-blue`, `--neon-purple`, `--neon-green`, `--neon-pink`, `--neon-orange`
- `--gradient-primary`, `--gradient-secondary`, `--gradient-space`, `--gradient-neon`, `--gradient-hero`

**Usage:** Reference via CSS variables in custom styles for brand differentiation.

---

## Responsive Breakpoints (Tailwind Convention)

| Breakpoint | Size | Prefix | Example |
|-----------|------|--------|---------|
| Mobile | 320px+ | (none) | `w-full` |
| Tablet | 768px+ | `md:` | `md:w-1/2` |
| Laptop | 1024px+ | `lg:` | `lg:w-1/3` |
| Desktop | 1440px+ | `xl:` | `xl:w-1/4` |

**Usage in HTML:**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- Responsive grid -->
</div>
```

---

## Spacing & Utility Classes

### Margin & Padding

| Class | Size | Pixels |
|-------|------|--------|
| `m-1` | xs | 4px |
| `m-2` | sm | 8px |
| `m-4` | md | 16px |
| `m-6` | lg | 24px |
| `m-8` | xl | 32px |

**Usage:** Replace custom margin/padding CSS with Tailwind classes.

### Gap (Flexbox/Grid)

| Class | Size |
|-------|------|
| `gap-2` | 8px |
| `gap-4` | 16px |
| `gap-6` | 24px |
| `gap-8` | 32px |

---

## Implementation Checklist

### Phase 4 (Refactoring) Implementation Order

- [ ] Remove DaisyUI-matching colors from theme.css
- [ ] Simplify layout.css with Tailwind utilities
- [ ] Update blog.css to use DaisyUI card component
- [ ] Update plan.css to use DaisyUI table component
- [ ] Update contact.css to use DaisyUI form components
- [ ] Add missing component classes to HTML where needed
- [ ] Test responsive behavior at all breakpoints
- [ ] Verify visual consistency with baseline

---

## References

- **DaisyUI Components:** https://daisyui.com/components/
- **Tailwind Utilities:** https://tailwindcss.com/docs/utility-first
- **DaisyUI Themes:** https://daisyui.com/docs/themes/
- **Dim Theme Colors:** See `.specify/memory/constitution.md`

---

**Status:** Ready for Phase 4 implementation
**Last Updated:** 2025-11-29
