# CSS Refactoring Quick Reference

**Created:** 2025-11-29
**Purpose:** Quick guide for developers implementing CSS simplification

---

## Before You Start

1. **Read:** This document + `contracts/css-overrides.md`
2. **Understand:** DaisyUI component classes (btn, card, input, etc.)
3. **Know:** Tailwind utility naming (m-4 = margin 16px, etc.)
4. **Have:** `data-model.md` open for reference

---

## Refactoring Checklist

### Phase 4: CSS Simplification

- [ ] **Backup original:** `cp assets/css/theme.css assets/css/theme.css.backup`
- [ ] **Start simple:** Begin with contact.css (smallest, easiest)
- [ ] **Test each step:** `bundle exec jekyll build` after each file
- [ ] **Track metrics:** Note file sizes and rule counts

### Color Removal (theme.css)

- [ ] Remove: `--primary`, `--secondary`, `--success`, `--warning`, `--error`
- [ ] Remove: `--gray-50` through `--gray-900`
- [ ] Keep: `--primary-dark`, `--accent`, `--neon-*` colors
- [ ] Keep: `--gradient-*` definitions
- [ ] Expected savings: ~10 KB

### Layout Utilities (layout.css)

- [ ] Remove: Custom margin/padding classes
- [ ] Remove: Custom flex utilities
- [ ] Replace with: Tailwind classes in HTML
- [ ] Keep: Navigation-specific styles
- [ ] Expected savings: ~2 KB

### Blog Styling (blog.css)

- [ ] Migrate: `.post-card` → `card` component
- [ ] Migrate: `.blog-posts` grid → Tailwind `grid grid-cols-1 md:grid-cols-2`
- [ ] Keep: Brand color accents (hover effects)
- [ ] Keep: Custom animations if essential
- [ ] Expected savings: ~5 KB

### Pricing Styling (plan.css)

- [ ] Migrate: `.plan-card` → `card` component
- [ ] Migrate: Pricing table → DaisyUI `table`
- [ ] Remove: Custom table styling
- [ ] Keep: Brand highlights
- [ ] Expected savings: ~2 KB

### Form Styling (contact.css)

- [ ] Migrate: Form inputs → DaisyUI `input input-bordered`
- [ ] Migrate: Form wrapper → DaisyUI `form-control`
- [ ] Remove: Custom form styling
- [ ] Keep: Form layout/brand colors
- [ ] Expected savings: Minimal (already 138 B)

---

## Common Refactoring Patterns

### Pattern 1: Remove Color Definition

**Before:**
```css
:root {
  --primary: oklch(86.133% 0.141 139.549);  /* DaisyUI match */
  --secondary: oklch(73.375% 0.165 35.353); /* DaisyUI match */
}

.button { color: var(--primary); }
```

**After:**
```css
/* Remove color variables - use DaisyUI classes in HTML */
```

**HTML:**
```html
<button class="btn btn-primary">Click me</button>
```

### Pattern 2: Replace Custom Card

**Before:**
```css
.custom-card {
  border: 1px solid #333;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
```

**After:**
```html
<div class="card bg-base-100 shadow-xl">
  <div class="card-body">
    <!-- content -->
  </div>
</div>
```

### Pattern 3: Replace Custom Grid

**Before:**
```css
.grid-3-cols {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

@media (max-width: 768px) {
  .grid-3-cols {
    grid-template-columns: 1fr;
  }
}
```

**After:**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- items -->
</div>
```

### Pattern 4: Replace Custom Form

**Before:**
```css
.form-input {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
}

.form-input:focus {
  border-color: #00d4ff;
  outline: none;
}
```

**After:**
```html
<input type="text" class="input input-bordered" />
```

### Pattern 5: Keep Brand Gradient

**Before & After (SAME):**
```css
/* OVERRIDE: Hero gradient - Brand space theme
   Rationale: DaisyUI doesn't provide custom neon gradients
   Impact: Creates distinctive hero with gradient animation
   Brand: Core to Sinra's modern visual identity
*/
--gradient-hero: linear-gradient(
  135deg,
  oklch(30.857% 0.023 264.149) 0%,
  oklch(28.036% 0.019 264.182) 100%
);

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

---

## DaisyUI Component Quick Reference

### Buttons

```html
<!-- Basic -->
<button class="btn">Default</button>

<!-- Variants -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-accent">Accent</button>

<!-- Sizes -->
<button class="btn btn-lg">Large</button>
<button class="btn">Default</button>
<button class="btn btn-sm">Small</button>
<button class="btn btn-xs">Extra Small</button>

<!-- States -->
<button class="btn" disabled>Disabled</button>
<button class="btn btn-loading">Loading</button>
```

### Cards

```html
<div class="card bg-base-100 shadow-xl">
  <figure><img src="image.jpg" alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>Card description...</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```

### Forms

```html
<label class="form-control w-full">
  <div class="label">
    <span class="label-text">Your name</span>
  </div>
  <input type="text" placeholder="Type here" class="input input-bordered w-full" />
</label>

<label class="form-control w-full">
  <div class="label">
    <span class="label-text">Pick your color</span>
  </div>
  <select class="select select-bordered">
    <option disabled selected>Pick one</option>
    <option>Red</option>
    <option>Blue</option>
  </select>
</label>

<label class="form-control">
  <label class="label cursor-pointer">
    <span class="label-text">Remember me</span>
    <input type="checkbox" class="checkbox" />
  </label>
</label>
```

### Tables

```html
<div class="overflow-x-auto">
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Feature 1</td>
        <td>$99</td>
        <td><button class="btn btn-sm">Buy</button></td>
      </tr>
    </tbody>
  </table>
</div>
```

### Badges

```html
<div class="badge">Default</div>
<div class="badge badge-primary">Primary</div>
<div class="badge badge-secondary">Secondary</div>
<div class="badge badge-success">Success</div>
<div class="badge badge-warning">Warning</div>
<div class="badge badge-error">Error</div>
```

---

## Tailwind Utility Quick Reference

### Spacing (Margin/Padding)

```html
<!-- Margin -->
<div class="m-4">Margin all sides (16px)</div>
<div class="mt-4">Margin top (16px)</div>
<div class="mb-4">Margin bottom (16px)</div>
<div class="mx-auto">Margin horizontal (auto)</div>

<!-- Padding -->
<div class="p-4">Padding all sides (16px)</div>
<div class="px-6">Padding left/right (24px)</div>
<div class="py-2">Padding top/bottom (8px)</div>

<!-- Gap (flex/grid) -->
<div class="gap-4">Gap between items (16px)</div>
<div class="gap-8">Gap between items (32px)</div>
```

### Layout

```html
<!-- Flexbox -->
<div class="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Responsive Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

<!-- Centering -->
<div class="flex items-center justify-center">Centered content</div>
```

### Sizing

```html
<!-- Width -->
<div class="w-full">Full width</div>
<div class="w-1/2">Half width</div>
<div class="w-1/3">One third width</div>
<div class="max-w-2xl">Max width</div>

<!-- Height -->
<div class="h-64">Height (256px)</div>
<div class="h-screen">Full screen height</div>
```

### Colors (from DaisyUI Dim Theme)

```html
<!-- Text Colors -->
<span class="text-primary">Primary text</span>
<span class="text-secondary">Secondary text</span>
<span class="text-base-content">Base text color</span>

<!-- Background Colors -->
<div class="bg-base-100">Base background</div>
<div class="bg-base-200">Slightly darker</div>
<div class="bg-primary">Primary background</div>

<!-- Border Colors -->
<div class="border border-base-300">Bordered</div>
<div class="border-l-4 border-primary">Left border accent</div>
```

### Responsive Breakpoints

```html
<!-- Mobile first (320px+) -->
<div class="w-full p-4">Mobile</div>

<!-- Tablet (768px+) -->
<div class="md:w-1/2 md:p-6">Tablet+</div>

<!-- Desktop (1024px+) -->
<div class="lg:w-1/3 lg:p-8">Desktop+</div>

<!-- Large (1440px+) -->
<div class="xl:w-1/4">Large desktop+</div>
```

---

## Testing Each File

### After modifying each CSS file:

```bash
# Build
bundle exec jekyll build

# Check for errors
bundle exec jekyll serve

# Manual testing
# 1. Open http://localhost:4000
# 2. Test responsive (320px, 768px, 1440px)
# 3. Check colors, buttons, cards, forms
# 4. Verify no layout breaks
```

---

## Metrics Validation

### After Each File (Optional)

```bash
# Check file size
ls -lh assets/css/theme.css

# Count CSS rules (rough estimate)
grep -E '^\s*[^{}]+\s*{' assets/css/theme.css | wc -l
```

### Final Validation

```bash
# Compare total CSS size
du -sh assets/css/

# Verify target achievement:
# - 45-55% reduction from 108 KB to 50-56 KB
# - <50 custom rules in theme.css
# - 95%+ DaisyUI component coverage
```

---

## Troubleshooting

### Issue: Button styling lost after removing custom CSS

**Solution:** Use DaisyUI button classes instead
```html
<!-- ❌ Won't work (no custom CSS) -->
<button>Click me</button>

<!-- ✓ Use DaisyUI -->
<button class="btn btn-primary">Click me</button>
```

### Issue: Grid layout breaks on mobile

**Solution:** Use Tailwind responsive classes
```html
<!-- ❌ Fixed columns -->
<div class="grid grid-cols-3">...

<!-- ✓ Responsive -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">...
```

### Issue: Color doesn't match brand

**Solution:** Use brand custom variables, not DaisyUI defaults
```css
/* ✓ Brand custom color - keep in theme.css */
--neon-blue: #00d4ff;

/* In HTML: */
<div class="hover:text-[var(--neon-blue)]">Neon text</div>
```

### Issue: Spacing too small/large

**Solution:** Use Tailwind spacing scale
```html
<!-- ❌ Custom margin (remove) -->
<div style="margin: 20px;">...

<!-- ✓ Tailwind spacing -->
<div class="m-5">...  <!-- 20px -->
```

---

## References

- **DaisyUI Components:** https://daisyui.com/components/
- **Tailwind Utilities:** https://tailwindcss.com/docs/
- **CSS Overrides Guide:** `contracts/css-overrides.md`
- **Data Model:** `data-model.md`
- **Project Constitution:** `.specify/memory/constitution.md`

---

**Status:** Ready for Phase 4 implementation
**Last Updated:** 2025-11-29
