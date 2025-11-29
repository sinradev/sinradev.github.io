# Baseline CSS Metrics

**Created:** 2025-11-29
**Purpose:** Establish baseline measurements for CSS simplification success validation

## Current State Measurements

### theme.css
- **File Size:** 63,983 bytes (~64 KB)
- **Lines of Code:** 3,494 lines
- **CSS Rules:** ~514 selectors

### Aggregated CSS Files
- **Total CSS Size:** 108 KB
- **Files:** 5 (theme.css, layout.css, blog.css, plan.css, contact.css)

## CSS Rule Count by File

| File | Lines | Approximate Rules | Comment |
|------|-------|-------------------|---------|
| theme.css | - | - | Main stylesheet (to be simplified) |
| layout.css | - | - | Layout utilities |
| blog.css | - | - | Blog-specific styles |
| plan.css | - | - | Pricing/plan styles |
| contact.css | - | - | Contact form styles |

## Analysis Notes

- [ ] Count all CSS selectors/rules in theme.css
- [ ] Identify duplicate utility classes
- [ ] Identify colors that match DaisyUI Dim theme
- [ ] Identify custom brand colors that need overrides

## Success Targets

| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| theme.css size (bytes) | 63,983 | <38,390 (-40%) | Pending |
| theme.css lines | 3,494 | <2,096 (-40%) | Pending |
| Custom CSS rules | ~514 | <50 | Pending |
| DaisyUI coverage | Unknown | 95%+ | Pending |
| Page load time | Baseline | No regression | Pending |

---

**Status:** Baseline established, ready for Phase 2 audit
