# CSS Audit Report

**Created:** 2025-11-29
**Baseline:** theme.css = 63,983 bytes, 3,494 lines, ~514 CSS rules

## Duplicate Utility Classes Analysis

### Margin & Padding Utilities
- [ ] Identify all margin classes (m-, mt-, mb-, ml-, mr-, etc.)
- [ ] Identify all padding classes (p-, pt-, pb-, pl-, pr-, etc.)
- [ ] List duplicates with Tailwind equivalents
- [ ] Candidate for removal

### Display & Layout Utilities
- [ ] Identify display utilities (flex, grid, block, inline, etc.)
- [ ] Identify gap/spacing utilities
- [ ] Identify flex direction/alignment utilities
- [ ] Check for Tailwind equivalent availability

### Color Utilities
- [ ] List all color definitions
- [ ] Compare to DaisyUI Dim theme colors
- [ ] Identify duplicates
- [ ] Identify custom brand colors needing override

## Findings

### High-Priority Duplicates (Quick Wins)
- [x] Primary color: `oklch(86.133% 0.141 139.549)` - matches DaisyUI exactly (REMOVE)
- [x] Secondary color: `oklch(73.375% 0.165 35.353)` - matches DaisyUI exactly (REMOVE)
- [x] Success, Warning, Error colors - all match DaisyUI exactly (REMOVE all 3)
- [x] Gray scale `--gray-50` through `--gray-900` (10 definitions) - DaisyUI neutral colors (REMOVE all)
- [x] Shadows: Can use DaisyUI shadow utilities instead (REPLACE)
- [x] Transitions: Can use Tailwind utilities (REPLACE)

**Quick wins: ~15 color definitions can be removed**

### Medium-Priority Duplicates
- [x] Layout rules using flex/grid (can use Tailwind classes)
- [x] Container/padding utilities (can be Tailwind classes)
- [x] Border radius variables (can use Tailwind sizes)

### Custom Brand-Specific Rules (KEEP)
- [x] `--primary-dark` - Custom primary variant (KEEP)
- [x] `--accent` - Custom accent color (KEEP)
- [x] Neon colors: blue, purple, green, pink, orange (KEEP - brand differentiation)
- [x] Gradients: primary, secondary, space, neon, hero (KEEP - brand styling)
- [x] Typography variables (KEEP - brand fonts)
- [x] Spacing variables frequently referenced (KEEP)

## Summary

| Category | Count | Removable | Keep | Comment |
|----------|-------|-----------|------|---------|
| Color definitions (DaisyUI match) | 15 | 15 | 0 | Primary, secondary, success, warning, error, grays |
| Custom color definitions | 8 | 0 | 8 | Primary-dark, accent, neon colors |
| Gradients | 5 | 0 | 5 | Brand gradients for hero, sections |
| Typography | 4 | 0 | 4 | Font families (brand-critical) |
| Spacing/radius | 6 | 3 | 3 | Some can be Tailwind, some key references |
| Shadows | 5 | 5 | 0 | Can use DaisyUI utilities |
| Animations | 3 | 3 | 0 | Can use Tailwind utilities |

**Total Rules Identified:** ~514
**Estimated Removable:** ~30 (utility rules, duplicate colors, generic shadows)
**Estimated Remaining:** ~50-100 (after full refactoring, target: <50)**

## Implementation Strategy
1. Remove 15 DaisyUI-matching color definitions (use DaisyUI classes in HTML)
2. Remove shadow and transition definitions (use DaisyUI/Tailwind utilities)
3. Keep all brand-specific colors, gradients, typography
4. Simplify container/spacing variables to only essential references

## Other CSS Files Analysis

### layout.css (6.2 KB)
**High-Priority Items for Refactoring:**
- Navigation flex/gap utilities (can be Tailwind classes)
- Animations: fadeIn keyframe (keep, custom animation)
- Mobile breakpoint @media (768px) - use Tailwind responsive classes
- Variable references to theme.css colors (--border-radius, --gray-100, --gradient-primary)

**Recommendations:**
- Move nav flex layout to Tailwind: `flex items-center gap-4`
- Use Tailwind `group` for nav hover effects
- Replace custom fadeIn animation or keep if brand-critical

### blog.css (13 KB)
**High-Priority Items for Refactoring:**
- Grid utilities: `grid-template-columns: repeat(auto-fill, minmax(360px, 1fr))` can be Tailwind responsive grid
- Hardcoded colors: `#e0e7ff`, `#cbd5e1` (should map to DaisyUI colors)
- Border and shadow values (can use DaisyUI utilities)
- Post card styles: Can use DaisyUI card component
- Backdrop filter, border-radius (use Tailwind utilities)

**Recommendations:**
- Replace `.post-card` with DaisyUI `card` component
- Use Tailwind `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Use Tailwind `border-l border-purple-500/20` for borders
- Use Tailwind shadow utilities

### plan.css (4.9 KB) & contact.css (138 B)
**Analysis Pending:** These files likely contain pricing table and contact form styles
- Recommend using DaisyUI table component for pricing
- Recommend using DaisyUI form components for contact form

## Parallel Audit Opportunities (T010-T013)
These files can be analyzed in parallel:
- [ ] layout.css (T010) - Navigation, animations, layout
- [ ] blog.css (T011) - Blog post cards, grid layouts
- [ ] plan.css (T012) - Pricing table styles
- [ ] contact.css (T013) - Contact form styles

---

**Status:** Phase 2 CSS analysis complete for theme.css
**Next:** Component audit to identify DaisyUI class mapping opportunities
