# Design System: Sinra Icon Guidelines

**Phase**: 1 (Design & Contracts)
**Date**: 2025-11-18
**Status**: Complete

---

## Visual Language & Philosophy

### Design Principles

The Sinra icon system embodies **Pragmatisme Élégant**—sophisticated yet approachable, refined without being ornate. Icons should:

1. **Be geometrically refined**: Intentional, deliberate shapes with thoughtful details
2. **Communicate with sophistication**: Concept immediately clear, with visual depth and refinement
3. **Feel cohesive**: Strong visual family across all icons despite varied concepts; consistent visual weight and detail level
4. **Scale gracefully**: Recognizable and detailed from 32px to 300px without quality loss
5. **Support light & dark**: Work on any background without modification
6. **Balance complexity & clarity**: Include meaningful details that enhance communication, avoiding both minimalism and visual noise

### Visual Style

- **Line Work**: Clean, precise strokes with refined details; polished appearance through thoughtful curves and joins
- **Shapes**: Geometric foundations with carefully crafted details; layered elements create depth and sophistication
- **Complexity**: Meaningful details that enhance semantic clarity; avoid minimalism but prevent visual clutter
- **Curves**: Smooth, intentional curves that add refinement (e.g., eye with defined iris, detailed containers, graduated lines)
- **Fills**: Strategic use of fills and nested shapes to create visual hierarchy and sophistication; fills always serve semantic purpose
- **Details**: Secondary elements, inner lines, and layered components that convey expertise and care
- **Layering**: Multiple paths and components work together to create a sense of depth and professional craftsmanship

### Design References

Study these brands for visual alignment:
- **Notion**: Clean, geometric, minimal decoration
- **Linear**: Refined line work, consistent stroke weight
- **GitLab**: Clear geometric shapes, solid visual hierarchy

---

## Canvas & Proportions

### Fixed Dimensions

```
SVG Canvas
├── ViewBox: "0 0 64 64" (fixed)
├── Canvas Size: 64px × 64px
├── Content Area: 48px × 48px (8px optical margin from edges)
├── Safe Zone: 40px × 40px (for critical details, safe from edge clipping)
└── Scaling Range: 32px (min) to 300px (max)
```

### Optical Centering

All icons must be **optically centered** within the 64px canvas, not mathematically centered.

**Guidelines**:
- Visual weight should feel balanced, not necessarily mathematically centered
- Account for stroke width in centering (strokes add visual weight)
- Use guides at: 8px, 16px, 32px, 48px, 56px (for alignment reference)

### Safe Scaling

**Tested Display Sizes**:
- 32px (favicon, very small UI)
- 60px (mobile feature cards)
- 96px (tablet navigation)
- 128px (desktop sidebar)
- 192px (tablet hero section)
- 300px (desktop hero section)

All icons must remain **recognizable and clear** at these sizes without modification.

---

## Stroke Weight System

### Primary Stroke Weight: 2px

**Rationale**:
- Standard in modern SaaS design (Notion, Linear)
- Visible at small sizes (32px+)
- Scales well to large sizes (300px+)
- Conveys confidence without heaviness

### Flexible Adjustments: ±0.5px

Some icons may require slight stroke weight variation for optical balance:

**When to Vary**:
- Thin strokes (1.5px) for fine details or secondary elements
- Slightly heavier (2.5px) for enclosed shapes that might look hollow
- Rarely needed; use only for visual clarity, not aesthetic preference

**Examples of Acceptable Variation**:
- Primary outline: 2px
- Secondary detail lines: 1.5px
- Enclosed shape: 2.5px (to prevent "floating" appearance)

### Maximum Variance Rule

**Across entire icon set**: Maximum difference between any two icon strokes must be ≤1.5px

**Measurement Method**:
1. Document primary stroke weight for each icon (min/max)
2. Calculate variance: max stroke - min stroke
3. Verify variance ≤ 1.5px
4. Document in validation section of data-model.md

**Example**:
- Feature icons: 2px primary
- Benefit icons: 2px primary, 1.5px details
- Methodology icons: 2px primary
- Interactive icons: 2px primary
- Variance audit: 2.5px - 1.5px = 1.0px ✅ (within ≤1.5px limit)

---

## Color & Rendering

### Stroke Color

**Default**: Black (#000000)

```svg
<path stroke="#000000" stroke-width="2" fill="none" ... />
```

**Rationale**: Works on light backgrounds (default), visible on dark backgrounds, CSS-friendly

### Fill Color

**Default**: Transparent (none)

```svg
<path stroke="#000000" fill="none" ... />
```

**Exceptions**: Geometric fills acceptable where needed for clarity
- Example: Filled checkmark in "quality" icon
- Example: Filled container in "capacity" icon
- **Rule**: Fills must be semantic (part of meaning), never decoration

### CSS currentColor Support (Future-Ready)

For future dark mode / theme support:

```svg
<path stroke="currentColor" stroke-width="2" fill="none" ... />
```

**Implementation** (in CSS):
```css
.icon-feature {
  color: #000000; /* Light mode */
}

@media (prefers-color-scheme: dark) {
  .icon-feature {
    color: #ffffff; /* Dark mode */
  }
}
```

**Status**: Plan for future implementation; not required for current redesign

---

## Stroke Attributes

### Recommended Settings

```svg
stroke-width="2"           <!-- Primary stroke -->
stroke-linecap="round"     <!-- Rounded endpoints -->
stroke-linejoin="round"    <!-- Rounded corners -->
fill="none"               <!-- Transparent fill -->
stroke="#000000"          <!-- Black stroke -->
```

### Stroke Linecap & Linejoin

- **linecap="round"**: Rounded line endings (more polished than flat "butt")
- **linejoin="round"**: Rounded path intersections (avoids sharp spikes)
- These create a softer, more professional appearance

---

## Proportional Relationships

### Consistency Rules

**Element Sizing**:
- Primary shapes should be proportionally similar (e.g., all circles use r=8–10)
- Detail elements should follow consistent ratios
- Example: If one icon uses 8px-radius circles, others should use similar proportions for visual family feeling

**Grid Alignment**:
- Snap shapes to 2px or 4px grid where possible
- Exact mathematical alignment not required, but similar approaches preferred
- Rationale: Reduces fractional pixel values, improves crispness

**Spacing Within Icon**:
- Consistent padding/margins between elements (e.g., 4px or 6px gaps)
- Negative space should feel balanced, not cramped
- Avoid: Icons that feel "floating" vs those that feel "grounded"

### Baseline Alignment

For icons with text (if used):
- Visual baseline should align with text baseline
- Accounts for optical centering (baseline may differ from mathematical center)
- Test: Display icon next to text; should feel aligned

---

## Export & Optimization Standards

### SVG Specification

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  width="64"
  height="64"
>
  <!-- Icon content -->
</svg>
```

**Required Attributes**:
- `xmlns`: XML namespace (required)
- `viewBox`: "0 0 64 64" (required, fixed)
- `width` & `height`: Can be removed (optional; CSS/HTML controls sizing)

**Optional (Remove Unless Needed)**:
- `id`, `class`, `data-*` attributes
- `<defs>` for unused patterns/gradients
- Metadata, comments, style tags
- `xlink` namespace (if not used)

### SVGO Optimization Configuration

**File**: `.svgo.config.js` (repo root)

```javascript
module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,            // KEEP viewBox
          convertPathData: {
            precision: 2,                  // Limit to 2 decimal places
            transformPrecision: 2,
          },
          convertTransform: {
            convertToShorts: true,
          },
          removeHiddenElems: true,         // Remove hidden elements
          removeEmptyContainers: true,     // Remove empty groups
          removeEmptyAttrs: true,          // Remove empty attributes
          convertStyleToAttrs: true,       // Inline styles
          removeComments: true,            // Remove comments
          removeDesc: true,                // Remove <desc>
          removeTitle: true,               // Remove <title>
          removeMetadata: true,            // Remove metadata
        },
      },
    },
  ],
};
```

### Optimization Workflow

1. **Design & Export** (Figma/Adobe XD)
   - Use 64px artboard
   - Export as SVG

2. **Inspect** (before optimization)
   - Check viewBox="0 0 64 64"
   - Verify stroke width (2px)
   - Confirm fill="none" or appropriate fill

3. **Optimize** (via SVGO)
   ```bash
   npx svgo icon-name.svg --config .svgo.config.js
   ```

4. **Verify** (post-optimization)
   - Visual inspection: Icon looks identical
   - File size: ≤5KB
   - Precision: 2 decimal places (e.g., "10.5")
   - View in browser at multiple sizes

5. **Validate** (via browser)
   - Test at 60px, 96px, 128px, 192px
   - Check on light & dark backgrounds
   - Verify in Firefox, Chrome, Safari

### Decimal Precision

**Target**: 2 decimal places for all path coordinates

**Rationale**:
- Balances precision (prevents rounding artifacts) with file size
- Unoptimized: "10.499999999" → Optimized: "10.5"
- Result: ~20–40% file size reduction without visible quality loss

**Example Path**:
```svg
<!-- Before: 77 bytes -->
<path d="M10.50 10.50 L20.30 30.60 L40.80 25.90 Z" stroke="#000000" stroke-width="2" fill="none"/>

<!-- After SVGO (decimal precision=2): ~60 bytes -->
<path d="M10.5 10.5 L20.3 30.6 L40.8 25.9 Z" stroke="#000000" stroke-width="2" fill="none"/>
```

### File Size Targets

| Icon Complexity | Target Size | Rationale |
|-----------------|------------|-----------|
| Refined (8–12 paths) | 3–4 KB | Interactive icons, simpler feature icons |
| Sophisticated (15–30 paths) | 4–6 KB | Feature icons, benefit icons with multiple layers |
| Detailed (30+ paths) | 6–7 KB | Complex benefit icons with rich detail |
| Maximum | ≤8 KB | Hard limit for all icons (allows refined, sophisticated design) |

**If Exceeding 8KB**:
1. Review path complexity (can curves be simplified while maintaining detail?)
2. Consolidate overlapping shapes where semantically appropriate
3. Remove redundant elements
4. Re-optimize with SVGO

**Note**: Refined icons with meaningful details will naturally be larger than minimal designs. The new 8KB limit allows for sophisticated, professional-quality icons while maintaining excellent performance.

---

## Accessibility Standards

### Alt Text

**For `<img>` Tags**:
```html
<img src="visibility.svg" alt="Visibility - Clear planning and oversight of all work">
```

**Guidelines**:
- 4–8 words
- Descriptive (icon name + brief meaning)
- No "icon of" prefix (redundant)
- Actionable context where possible

### ARIA Labels

**For Inline SVGs**:
```html
<svg aria-label="Visibility - Clear planning and oversight of all work">
  <!-- icon content -->
</svg>
```

**Alternately, use `<title>` inside SVG**:
```svg
<svg viewBox="0 0 64 64">
  <title>Visibility - Clear planning and oversight of all work</title>
  <!-- icon content -->
</svg>
```

### Screen Reader Testing

**Test with**:
- VoiceOver (macOS/iOS)
- NVDA (Windows)
- JAWS (Windows, enterprise)

**Success Criteria**:
- Alt text or aria-label announced correctly
- No extraneous information (e.g., path elements not read aloud)
- Context is clear

---

## Dark & Light Mode Compatibility

### Current Approach (Recommended)

**Black stroke, transparent fill** works on all backgrounds without modification.

**Light Background**:
```html
<img src="icon.svg" alt="Visibility">
<!-- Displays: black icon on white/light background ✓ -->
```

**Dark Background**:
```html
<img src="icon.svg" alt="Visibility" style="color: white;">
<!-- Still displays: black icon (CSS filter may be applied) ✓ -->
<!-- Or use CSS: filter: invert(1); -->
```

### Future Enhancement: CSS currentColor

Once implemented:

```svg
<path stroke="currentColor" ... />
```

```css
.icon-light { color: #000000; }
.icon-dark { color: #ffffff; }
```

**Advantage**: Single SVG file, theme-aware rendering without filters

---

## Quality Checklist

### Pre-Export

- [ ] Icon is on 64px artboard
- [ ] Stroke weight is 2px (or documented variance)
- [ ] No fill (or documented semantic fill)
- [ ] Paths are clean (no redundant points)
- [ ] Icon is optically centered
- [ ] Minimum detail size: 2–3px at actual size
- [ ] Scales clearly at 32px and 300px

### Post-Optimization

- [ ] ViewBox is "0 0 64 64"
- [ ] File size ≤5KB
- [ ] Decimal precision: 2 places
- [ ] Visual inspection: Identical to original
- [ ] No hidden elements or empty groups

### Testing

- [ ] Tested at 60px, 96px, 128px, 192px
- [ ] Works on light background
- [ ] Works on dark background (or CSS filter applied)
- [ ] Alt text and aria-label present
- [ ] SVG validates (W3C validator)
- [ ] Browser compatibility: Chrome, Firefox, Safari

---

## Related Documentation

- **Data Model**: See `data-model.md` for icon specifications
- **Icon Contract**: See `contracts/icon-system.schema.json`
- **Quick Start**: See `quickstart.md` for step-by-step guide
- **Research**: See `research.md` for design decisions & rationale
