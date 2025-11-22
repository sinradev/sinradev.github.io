# Deployment Guide: Icon Redesign

**Project**: Redesign Sinra Icons (001-redesign-icons)
**Date**: 2025-11-18
**Branch**: `001-redesign-icons`

---

## Overview

This guide documents the Git workflow and deployment process for the icon redesign project. Icons are pure static assets (SVG files) that replace existing files in `/assets/images/`.

---

## Git Workflow

### Branch Management

**Feature Branch**: `001-redesign-icons`
- All icon redesign work happens on this branch
- Branch exists before planning begins
- All commits reference this branch

**Base Branch**: `main`
- Production-ready code
- PR merge target
- Requires code review before merge

### Pre-Deployment Checklist

Before creating a PR, verify:

1. **All Icons Created**
   - [ ] 7 feature icons in `assets/images/features/`
   - [ ] 6 benefit icons in `assets/images/benefits/`
   - [ ] 2 methodology icons in `assets/images/methodology/`
   - [ ] 3 interactive icons in `assets/images/interactive/`
   - Total: 15 icons

2. **Icons Optimized**
   ```bash
   # Verify all icons are ≤5KB
   du -sh assets/images/**/*.svg | awk '$1 ~ /K$|M$/ {print}'

   # Should return: all ≤5K
   ```

3. **File Naming**
   - [ ] All files in kebab-case (editor.svg, not Editor.svg)
   - [ ] In correct category directories
   - [ ] No duplicate names across categories

4. **SVG Validity**
   - [ ] All files have `viewBox="0 0 64 64"`
   - [ ] All have `stroke="#000000"` (black)
   - [ ] All have `fill="none"` or semantic fill
   - [ ] No hardcoded width/height attributes

5. **Documentation**
   - [ ] Alt text added to all icons
   - [ ] ARIA labels defined
   - [ ] Validation test results documented
   - [ ] Coherence audit completed

6. **Testing**
   - [ ] User recognition test results (75%+ target)
   - [ ] Visual clarity at 60px–300px verified
   - [ ] Cross-browser testing (Chrome, Firefox, Safari)
   - [ ] Dark background rendering verified
   - [ ] Screen reader accessibility tested

---

## Commit Strategy

### Conventional Commits Format

All commits follow the format:

```
[type]([scope]): [description]

[optional body]

[optional footer with references]
```

### Commit Types

- `feat`: New feature or icon addition
- `refactor`: Icon redesign or improvement
- `fix`: Bug fixes to icons
- `docs`: Documentation updates
- `test`: Testing additions

### Examples

**Feature Icons Batch**:
```
feat(icons): redesign 7 feature icons for homepage

- Editor: pen/pencil + document metaphor
- Progress: ascending line indicator
- Collaboration: geometric elements working together
- Release: calendar/milestone metaphor
- Multiapp: layered applications
- Workflows: connected nodes showing flow
- Carryover: arrow/continuation indicator

All icons:
- 64px canvas with viewBox="0 0 64 64"
- 2px primary stroke, ≤1.5px variance
- Optimized via SVGO to ≤5KB each
- Tested at 32px–300px for clarity
- Include semantic alt text for a11y

Refs: specs/001-redesign-icons
```

**Benefit Icons Batch**:
```
feat(icons): redesign 6 benefit icons for about page

- Visibility: eye/window metaphor for clarity
- Capacity: container/expansion for scope
- Quality: checkmark/shield for confidence
- Release-Mgmt: cycle/versioning metaphor
- Deploy-Checklist: checklist/steps metaphor
- Golive: launch/success indicator

All icons tested with 10+ users (75%+ recognition target).
Coherence audit: stroke weight variance ≤1.5px.

Refs: specs/001-redesign-icons
```

### Commit Best Practices

1. **Commit Early, Commit Often**
   - One icon or one batch per commit
   - Keep commits focused and reviewable

2. **Reference Specification**
   - Link to specs/001-redesign-icons in commit body
   - Reference design-system.md for style decisions

3. **Document Decisions**
   - Why this visual approach?
   - What user feedback informed the design?
   - What alternatives were considered?

---

## Pull Request Process

### Creating a PR

```bash
# 1. Stage all icon files
git add assets/images/features/*.svg
git add assets/images/benefits/*.svg
git add assets/images/methodology/*.svg
git add assets/images/interactive/*.svg

# 2. Stage documentation updates
git add specs/001-redesign-icons/validation-checklist.md
git add specs/001-redesign-icons/data-model.md

# 3. Verify changes
git status

# 4. Create commits (see commit strategy above)
git commit -m "feat(icons): ..."

# 5. Push to feature branch
git push origin 001-redesign-icons

# 6. Create PR via GitHub CLI
gh pr create \
  --title "Redesign Sinra Icons (15 total)" \
  --body "## Summary

Redesign all 15 icons across feature, benefit, methodology, and interactive categories.

### What's Changed
- 7 feature icons for homepage (editor, progress, collaboration, release, multiapp, workflows, carryover)
- 6 benefit icons for about page (visibility, capacity, quality, release-mgmt, deploy-checklist, golive)
- 2 methodology icons for methodology comparison (agile, waterfall)
- 3 interactive icons for UI elements (checkmark, chevron, send)

### Design System
- 64px canvas with viewBox='0 0 64 64'
- 2px primary stroke (±0.5px flexible per icon)
- Stroke weight variance ≤1.5px across all icons
- All icons ≤5KB post-optimization via SVGO
- Black #000000 stroke, transparent fill
- Compatible with CSS currentColor for future theming

### Testing
- User recognition test: 10+ participants, 75%+ accuracy target
- Visual clarity: Tested at 32px–300px without loss of detail
- Cross-browser: Chrome, Firefox, Safari compatibility verified
- Accessibility: Screen reader tested, alt text provided
- Dark background: Renders correctly on dark backgrounds

### Validation Results
- Feature icons: 75%+ user recognition ✓
- Benefit icons: 75%+ user recognition ✓
- Methodology icons: 70%+ user recognition ✓
- Coherence audit: ≤1.5px stroke variance ✓
- All icons ≤5KB post-optimization ✓

### Related Documentation
- Specification: specs/001-redesign-icons/spec.md
- Design System: specs/001-redesign-icons/design-system.md
- Data Model: specs/001-redesign-icons/data-model.md
- Implementation Plan: specs/001-redesign-icons/plan.md
- Validation Results: specs/001-redesign-icons/validation-checklist.md

### Checklist
- [x] All 15 icons created and optimized
- [x] Semantic alt text added
- [x] User recognition testing completed
- [x] Visual clarity testing completed
- [x] Cross-browser testing completed
- [x] Accessibility testing completed
- [x] Coherence audit completed
- [x] Documentation updated

🧠 Generated with Claude Code"
```

### PR Review Checklist

Reviewers should verify:

1. **Icon Quality**
   - [ ] Icons are clean and professional
   - [ ] Visual language is consistent (Pragmatisme Élégant)
   - [ ] All icons follow 2px stroke weight standard
   - [ ] Proportions and spacing consistent

2. **Technical Compliance**
   - [ ] All SVGs valid and optimized
   - [ ] File sizes ≤5KB (verify with `du -sh`)
   - [ ] ViewBox="0 0 64 64" on all files
   - [ ] No hardcoded dimensions
   - [ ] Proper namespace and structure

3. **Accessibility**
   - [ ] Alt text present and descriptive
   - [ ] ARIA labels defined
   - [ ] Screen reader compatible
   - [ ] Color contrast verified

4. **Testing**
   - [ ] User recognition test results documented
   - [ ] Visual clarity verified at multiple sizes
   - [ ] Cross-browser testing confirmed
   - [ ] Dark background rendering verified

5. **Documentation**
   - [ ] Spec, plan, and design-system consistent
   - [ ] Validation checklist updated
   - [ ] All changes documented
   - [ ] Commit messages follow conventions

### Approval & Merge

**Required for Merge**:
1. At least 1 code review approval
2. All tests passing (if CI configured)
3. No merge conflicts
4. Branch up to date with main

**Merge Strategy**:
- **Squash Merge** (recommended): Cleans up commit history
- **Rebase Merge**: Preserves individual commits
- Choose based on project convention

```bash
# Example: Squash merge
gh pr merge 001-redesign-icons --squash --auto

# Or via GitHub UI:
# 1. Click "Merge pull request"
# 2. Select "Squash and merge"
# 3. Confirm
```

---

## Post-Deployment Verification

After merging to main:

### 1. Verify Jekyll Build

```bash
# Build static site
bundle exec jekyll build

# Check for errors
echo "Build completed with status: $?"
```

### 2. Test Development Server

```bash
# Start dev server
bundle exec jekyll serve

# Open http://localhost:4000 and verify:
# - Homepage icons display correctly
# - About page icons render properly
# - Pricing checkmarks visible
# - FAQ chevrons work
# - Contact send icon displays
```

### 3. Visual Inspection

Test on:
- [ ] **Homepage**: Feature icons section
- [ ] **About Page**: Benefit icons + methodology icons
- [ ] **Pricing Page**: Checkmark icons in feature table
- [ ] **FAQ/Contact**: Chevron and send icons
- [ ] **Different screen sizes**: Mobile, tablet, desktop
- [ ] **Different browsers**: Chrome, Firefox, Safari

### 4. Accessibility Check

- [ ] Alt text appears on hover/inspect
- [ ] Screen reader announces alt text correctly
- [ ] No console errors for missing resources
- [ ] Icons display on light & dark backgrounds

---

## Rollback Plan

If issues arise after deployment:

### Identifying Issues

Watch for:
- Icons not displaying (404 errors)
- Pixelated or blurry icons
- Dark background rendering problems
- Accessibility regressions

### Rollback Steps

```bash
# 1. Identify problematic commit
git log --oneline origin/main | grep -i icon

# 2. Revert PR if needed
gh pr revert <PR-NUMBER>

# 3. Or revert specific commit
git revert <COMMIT-HASH>

# 4. Verify Jekyll build
bundle exec jekyll build

# 5. Test locally
bundle exec jekyll serve

# 6. Push fix or revert
git push origin main
```

---

## Success Metrics

Project is successfully deployed when:

✅ All 15 icons display correctly on all pages
✅ No broken image links or 404 errors
✅ Icons render clearly at all sizes (32px–300px)
✅ Visual design meets "Pragmatisme Élégant" standard
✅ Accessibility standards met (alt text, ARIA labels)
✅ Cross-browser compatibility verified
✅ No performance regression (Jekyll build time stable)

---

## Support & Communication

### Issues During Deployment

Document any issues in:
1. PR comments (immediate feedback)
2. GitHub Issues (ongoing concerns)
3. Project documentation (known limitations)

### Future Maintenance

Icon updates or additions should:
1. Follow same design system rules
2. Maintain stroke weight consistency
3. Test at multiple sizes before committing
4. Update data-model.md and documentation
5. Request review before merging

---

## References

- **Specification**: specs/001-redesign-icons/spec.md
- **Implementation Plan**: specs/001-redesign-icons/plan.md
- **Design System**: specs/001-redesign-icons/design-system.md
- **Data Model**: specs/001-redesign-icons/data-model.md
- **Validation Checklist**: specs/001-redesign-icons/validation-checklist.md
- **Quick Start**: specs/001-redesign-icons/quickstart.md

---

**Last Updated**: 2025-11-18
**Next Review**: Upon deployment completion
