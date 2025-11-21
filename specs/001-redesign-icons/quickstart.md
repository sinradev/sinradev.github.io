# Quick Start: Icon Creation & Optimization Guide

**Phase**: 1 (Design & Contracts)
**Date**: 2025-11-18
**Status**: Complete

---

## Quick Reference

### Key Numbers
- **Canvas Size**: 64px × 64px
- **Stroke Weight**: 2px (primary), ±0.5px flexible
- **ViewBox**: "0 0 64 64"
- **Fill**: Transparent (by default)
- **Color**: Black #000000
- **Scaling Range**: 32px–300px
- **File Size Target**: ≤5KB
- **Recognition Target**: 75%+ of test users

---

## Step 1: Design Setup (Figma/Adobe XD)

### Create New Artboard
1. **New file** in design tool
2. **Artboard size**: 64px × 64px
3. **Name**: Icon name (e.g., "visibility", "release")
4. **Background**: Transparent
5. **Color mode**: RGB

### Configure Stroke Settings
```
Stroke Settings
├── Width: 2px (primary) or flexible ±0.5px
├── Color: Black #000000
├── Linecap: Round
├── Linejoin: Round
└── Fill: None (transparent)
```

### Add Design Guides
- **Horizontal guides** at: 0, 8, 16, 32, 48, 56, 64
- **Vertical guides** at: 0, 8, 16, 32, 48, 56, 64
- **Purpose**: Visual alignment and optical centering

### Design Icon
1. Draw shapes (geometric, clean)
2. Use stroke only (no fills unless semantic)
3. Keep within 48px safe zone (8px margin)
4. Test visibility at multiple sizes (use Figma's scale preview)
5. Ensure optical centering
6. Remove all unnecessary elements

---

## Step 2: Export SVG

### Export Settings (Figma)
```
Export
├── Format: SVG
├── Export size: 1x (64px)
├── Settings:
│   ├── Flatten shapes: NO (keep structure)
│   ├── Include ID: NO
│   ├── Simplify strokes: YES
│   └── Include hidden layers: NO
```

### Export Settings (Adobe XD)
```
Export
├── Format: SVG
├── Image format: 1x (64px)
├── Settings:
│   ├── Responsive: YES (for viewBox)
│   └── Minify: NO (we'll use SVGO instead)
```

### Save File
```
Location: /assets/images/{category}/{icon-name}.svg
Example: /assets/images/benefits/visibility.svg
```

---

## Step 3: Verify Exported SVG

### Open in Text Editor
```bash
cat assets/images/benefits/visibility.svg
```

### Check Essential Properties
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" ... >
  <!-- Icon paths with stroke="2" fill="none" -->
</svg>
```

**Verify**:
- [ ] `xmlns` attribute present
- [ ] `viewBox="0 0 64 64"` (exact)
- [ ] Stroke width: 2 (or documented variance)
- [ ] Fill: "none" (or semantic fill)
- [ ] Color: #000000 or black

### Clean Up (If Needed)
- Remove `id`, `class`, `data-*` attributes
- Remove `<defs>` with unused patterns
- Remove metadata, style tags, comments
- Keep only path/shape content

---

## Step 4: Optimize with SVGO

### Install SVGO (Once)
```bash
npm install -g svgo
# or
npx svgo --version
```

### Create Configuration File

**File**: `.svgo.config.js` (repo root)

```javascript
module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          convertPathData: {
            precision: 2,
            transformPrecision: 2,
          },
          convertTransform: {
            convertToShorts: true,
          },
          removeHiddenElems: true,
          removeEmptyContainers: true,
          removeEmptyAttrs: true,
          convertStyleToAttrs: true,
          removeComments: true,
          removeDesc: true,
          removeTitle: true,
          removeMetadata: true,
        },
      },
    },
  ],
};
```

### Run SVGO Optimization

**Single file**:
```bash
npx svgo assets/images/benefits/visibility.svg --config .svgo.config.js
```

**Batch (all icons)**:
```bash
npx svgo assets/images/**/*.svg --config .svgo.config.js
```

**Output** (in-place optimization):
```
✓ assets/images/benefits/visibility.svg
  3.2KB → 1.8KB (43% reduction)
```

### Verify Optimized SVG
```bash
# Check file size
ls -lh assets/images/benefits/visibility.svg

# Visual inspection (should look identical)
open assets/images/benefits/visibility.svg

# Check for 2-decimal precision
cat assets/images/benefits/visibility.svg | grep -o "M[^" ]*" | head -1
# Example: M8.5 16.3 (2 decimals ✓)
```

---

## Step 5: Visual Testing

### Test at Multiple Sizes
```html
<!-- Create test.html -->
<style>
  .test-container { display: flex; gap: 20px; align-items: center; }
  .test-icon { border: 1px solid #ccc; display: flex; align-items: center; justify-content: center; }
  .test-icon-32 { width: 32px; height: 32px; }
  .test-icon-60 { width: 60px; height: 60px; }
  .test-icon-96 { width: 96px; height: 96px; }
  .test-icon-128 { width: 128px; height: 128px; }
  .test-icon-192 { width: 192px; height: 192px; }
  .dark-bg { background: #333; }
</style>

<div class="test-container">
  <div class="test-icon test-icon-32">
    <img src="visibility.svg" alt="Visibility">
  </div>
  <div class="test-icon test-icon-60">
    <img src="visibility.svg" alt="Visibility">
  </div>
  <div class="test-icon test-icon-96">
    <img src="visibility.svg" alt="Visibility">
  </div>
  <div class="test-icon test-icon-128">
    <img src="visibility.svg" alt="Visibility">
  </div>
  <div class="test-icon test-icon-192">
    <img src="visibility.svg" alt="Visibility">
  </div>
</div>

<!-- Dark background test -->
<div class="test-container dark-bg">
  <div class="test-icon test-icon-96">
    <img src="visibility.svg" alt="Visibility">
  </div>
</div>
```

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Validation Points
- [ ] Icon recognizable at 32px (favicon size)
- [ ] Icon clear at 60px (mobile card size)
- [ ] Icon sharp at 96–192px (standard sizes)
- [ ] Icon solid at 300px (hero size)
- [ ] Works on light background (white)
- [ ] Works on dark background (dark gray/black)
- [ ] No pixelation or blur at any size
- [ ] All details remain visible

---

## Step 6: Accessibility Setup

### Add Alt Text
**For `<img>` tag usage**:
```html
<img
  src="assets/images/benefits/visibility.svg"
  alt="Visibility - Clear planning and oversight of all work"
  width="64"
  height="64"
>
```

### Add ARIA Label
**For inline SVG usage**:
```html
<svg
  viewBox="0 0 64 64"
  aria-label="Visibility - Clear planning and oversight of all work"
  role="img"
>
  <!-- icon content -->
</svg>
```

### Alt Text Guidelines
- **Format**: "Icon Name - Brief Description"
- **Length**: 4–8 words
- **Content**: What the icon represents
- **Example**: "Visibility - Clear planning and oversight of all work"

### Test with Screen Reader
```bash
# macOS: Open Accessibility Inspector
# Command: Cmd+F5, then inspect element

# Windows/Linux: Use NVDA
# Free download: https://www.nvaccess.org/
```

---

## Step 7: Update Documentation

### Update data-model.md
Add entry to icon specification:

```markdown
### Icon Name (Concept)
- **ID**: `icon-id`
- **File Path**: `assets/images/category/icon-id.svg`
- **File Size**: 1.8 KB (post-optimization)
- **Stroke Weight**: 2px
- **Alt Text**: "Icon Name - Description"
- **Validation**: Recognition tested with 12 users, 92% accuracy
```

### Update Icon Schema (contracts/icon-system.schema.json)
Add icon metadata to validation section (if tracking via JSON)

---

## Step 8: Commit to Git

### Stage Files
```bash
git add assets/images/{category}/{icon-name}.svg
git add specs/001-redesign-icons/data-model.md
```

### Commit
```bash
git commit -m "🎨 Redesign [icon-name] icon with clean geometric style

- Replaced with 64px SVG (2px stroke)
- Optimized to 1.8 KB via SVGO
- Tested at 32px-192px for clarity
- Added semantic alt text for a11y

References: specs/001-redesign-icons/design-system.md"
```

---

## Troubleshooting

### Icon Looks Blurry at Small Sizes
- **Cause**: Too many curves or complex paths
- **Fix**: Simplify shapes, reduce path complexity
- **Test**: 32px size is minimum threshold

### File Size > 5KB After Optimization
- **Cause**: Complex design or unnecessary elements
- **Fix**: Reduce path complexity, consolidate shapes
- **Example**: If visibility icon is 5.2 KB, simplify curves in eye shape

### Stroke Weight Inconsistent After Export
- **Cause**: Overlapping shapes, grouped strokes
- **Fix**: Ungroup shapes before export, apply stroke to all paths
- **Verify**: Check SVG source for stroke="2" on each path

### Icon Doesn't Scale Cleanly
- **Cause**: Fixed pixel values or hardcoded sizes
- **Fix**: Remove width/height attributes, rely on viewBox
- **Verify**: `viewBox="0 0 64 64"` only (no px units)

### Alt Text Not Appearing
- **Cause**: SVG served as `<object>` or `<iframe>`
- **Fix**: Use `<img>` tag or inline `<svg>` with aria-label
- **Reference**: See "Accessibility Setup" section above

---

## Batch Icon Optimization

To optimize all icons at once:

```bash
# From repo root
npx svgo assets/images/**/*.svg --config .svgo.config.js

# Verify all files
du -sh assets/images/**/*.svg | awk '$1 ~ /K$|M$/ {print}'

# Show detailed report
npx svgo assets/images/**/*.svg --config .svgo.config.js --verbose
```

---

## Integration with Jekyll

Icons are served statically via Jekyll. No code changes needed.

### Current Usage
```html
<!-- Homepage features -->
<img src="{{ site.baseurl }}/assets/images/features/editor.svg" alt="Rich Text Editor">

<!-- About page benefits -->
<img src="{{ site.baseurl }}/assets/images/benefits/visibility.svg" alt="Visibility">
```

### After Redesign
Simply replace SVG files in place. All templates reference icons by path, so updated icons display automatically.

---

## Icon Naming Convention

### Directory Structure
```
assets/images/
├── features/           # 7 feature icons
├── benefits/           # 6 benefit icons
├── methodology/        # 2 methodology icons
└── interactive/        # 3 interactive icons
```

### File Naming
```
{category}/{icon-name}.svg

Examples:
├── features/editor.svg
├── features/progress.svg
├── benefits/visibility.svg
├── benefits/capacity.svg
├── methodology/agile.svg
└── interactive/checkmark.svg
```

### Icon ID (Internal Reference)
Matches file name in kebab-case:
- `editor` (not `Editor` or `text_editor`)
- `visibility` (not `Visibility` or `visibility_icon`)
- `release-mgmt` (not `release_management`)

---

## Summary: Icon Creation Workflow

1. ✅ **Design**: 64px artboard, 2px stroke, clean geometry
2. ✅ **Export**: SVG with viewBox="0 0 64 64"
3. ✅ **Verify**: Check essential SVG properties
4. ✅ **Optimize**: Run SVGO, target ≤5KB
5. ✅ **Test**: Multiple sizes (32–192px), light/dark backgrounds
6. ✅ **Accessibility**: Add alt text and ARIA labels
7. ✅ **Document**: Update data-model.md with icon specs
8. ✅ **Commit**: Git commit with descriptive message

**Total Time Per Icon**: ~20–30 minutes (design to commit)

---

## Resources

- **SVGO Documentation**: https://github.com/svg/svgo
- **SVG Accessibility**: https://www.w3.org/TR/svg-aam-1.0/
- **Design System**: See `design-system.md`
- **Data Model**: See `data-model.md`
- **Research**: See `research.md`
