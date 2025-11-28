# Implementation Plan: Refactor Navbar with DaisyUI

**Feature ID:** 004-daisyui-navbar
**Status:** Planning Phase
**Created:** 2025-11-28
**Branch:** `004-daisyui-navbar`

---

## Executive Summary

This plan outlines the technical implementation of migrating the current custom navbar to a DaisyUI component while maintaining all existing functionality and visual design. The refactor focuses on leveraging DaisyUI's battle-tested responsive patterns while preserving the transparent-to-dark scroll transition and supporting multiple languages.

**Key Deliverables:**
1. Updated navbar HTML using DaisyUI component structure
2. CSS styling maintaining current design system
3. JavaScript scroll detection integration
4. Multilingual support (EN/FR)
5. Full responsive behavior (mobile dropdown, desktop centered menu)

---

## Technical Context

### Architecture Overview

```
Header Component
├── Logo/Brand (navbar-start)
├── Navigation Menu
│   ├── Mobile Dropdown (lg:hidden)
│   │   ├── Hamburger Icon
│   │   └── Dropdown Menu Items
│   └── Desktop Menu (hidden lg:flex)
│       └── Horizontal Menu Items
├── Language Switcher (navbar-end)
└── Sign Up Button (navbar-end)
```

### Current Implementation Details

**Files to Modify:**
- `_includes/navigation.html` - Main navbar component
- `_data/en/navigation.yml` - English navigation items
- `_data/fr/navigation.yml` - French navigation items
- `assets/css/layout.css` - Navbar-specific CSS
- `assets/css/theme.css` - Scroll state styling

**Current Functionality:**
- Manual mobile dropdown via custom JavaScript
- Media query breakpoint at 768px
- Scroll detection adding `scrolled` class to `<header>`
- Language switcher (en/fr toggle)
- Custom CSS for transparent → dark transition

### Technology Stack

**Fixed (per constitution):**
- Jekyll 4.3.4 (static site generator)
- Ruby 3.4.5
- DaisyUI Dim theme (existing)
- Plain CSS (no SCSS/preprocessors)
- Vanilla JavaScript
- YAML data files

**DaisyUI Components Used:**
- `navbar` - Main container
- `navbar-start`, `navbar-center`, `navbar-end` - Layout sections
- `dropdown` - Mobile menu component
- `menu` - Horizontal menu on desktop
- Tailwind utility classes (`lg:hidden`, `hidden lg:flex`, etc.)

### Dependencies

**Already Present:**
- DaisyUI CSS framework (via theme.css and Tailwind)
- Existing scroll detection JavaScript
- Navigation data structure (YAML files)
- CSS variables for theming

**No New Dependencies Required**

---

## Constitution Check

✅ **Styling Guidelines:**
- Using DaisyUI Dim theme colors defined in `assets/css/theme.css`
- Plain CSS only (no SCSS/preprocessors)
- No hardcoded colors (except temporary promotions - not applicable here)
- Responsive design tested at 320px, 768px, 1024px, 1440px

✅ **Multilingual Support:**
- Navigation items managed via YAML (`_data/en/`, `_data/fr/`)
- Liquid templating for translations
- No hardcoded strings in templates

✅ **Testing:**
- Manual testing via `bundle exec jekyll serve`
- Cross-browser testing (Chrome, Firefox, Safari)
- Responsive design verification
- Build verification with `bundle exec jekyll build`

✅ **Git Workflow:**
- Feature branch: `004-daisyui-navbar`
- Clear commit messages with file paths
- Spec-driven development approach

✅ **No Violations:**
- No new build tools, preprocessors, or frameworks
- No additional gems required
- No testing frameworks needed
- No linters or formatters

---

## Phase 0: Research & Clarifications

### Technical Unknowns

**1. DaisyUI Integration Status**
- **Question:** Is DaisyUI already fully integrated in the project?
- **Research Finding:** ✅ DaisyUI is integrated via Tailwind classes and defined in `assets/css/theme.css`
- **Decision:** Use existing DaisyUI navbar component classes without additional dependencies

**2. Scroll Detection Integration**
- **Question:** How will existing scroll detection JavaScript integrate with new navbar HTML?
- **Research Finding:** ✅ Current implementation adds `scrolled` class to `<header>` element
- **Decision:** Maintain same header structure and scroll event listener; update CSS selectors as needed

**3. Mobile Breakpoint Confirmation**
- **Question:** Is 1024px the correct responsive breakpoint?
- **Research Finding:** ✅ DaisyUI uses `lg` breakpoint at 1024px, aligns with Tailwind defaults
- **Decision:** Use `lg:hidden` for mobile dropdown, `hidden lg:flex` for desktop menu

**4. Language Switcher Positioning**
- **Question:** Should language switcher be in dropdown or navbar-end?
- **Research Finding:** ✅ Current implementation has language switcher in navbar-end
- **Decision:** Maintain in navbar-end for both mobile and desktop

### All Clarifications Resolved ✅

---

## Phase 1: Design & Architecture

### 1.1 HTML Structure Design

**Navbar Layout:**
```html
<header>
  <div class="navbar bg-base-100">
    <!-- navbar-start: Logo -->
    <div class="navbar-start">
      <a class="btn btn-ghost text-xl">
        <img src="..." alt="Sinra Logo" />
      </a>
    </div>

    <!-- navbar-center: Navigation Menu -->
    <div class="navbar-center">
      <!-- Mobile Dropdown (visible < 1024px) -->
      <div class="dropdown lg:hidden">
        <button class="btn btn-ghost" aria-label="Toggle menu">
          <svg><!-- hamburger icon --></svg>
        </button>
        <ul class="dropdown-content menu bg-base-100 rounded-box">
          <!-- Navigation items from data -->
        </ul>
      </div>

      <!-- Desktop Menu (visible >= 1024px) -->
      <ul class="menu menu-horizontal hidden lg:flex px-1">
        <!-- Navigation items from data -->
      </ul>
    </div>

    <!-- navbar-end: Language + Sign Up -->
    <div class="navbar-end gap-2">
      <!-- Language Switcher -->
      <div class="language-switcher">
        <!-- en/fr toggle -->
      </div>
      <!-- Sign Up Button -->
      <a class="btn btn-primary">Sign up</a>
    </div>
  </div>
</header>
```

### 1.2 CSS Styling Design

**State Transitions:**
- **Initial (top of page):** Transparent background, light text
- **Scrolled:** Dark background (var(--gray-50)), border, shadow

**DaisyUI Classes Used:**
- `navbar` - Main container with flexbox layout
- `navbar-start`, `navbar-center`, `navbar-end` - Layout sections
- `dropdown` - Mobile menu component
- `menu` - Menu list with `menu-horizontal` on desktop
- `btn` - Button component for hamburger and CTA
- `gap-2` - Spacing utilities

**Custom CSS Requirements:**
- Transparent background override (DaisyUI default has background)
- Smooth transitions for scroll state (< 300ms)
- Text color adaptation for transparent state
- Border and shadow on scrolled state
- Mobile/desktop visibility rules

### 1.3 JavaScript Integration

**Existing Scroll Detection:**
- Current: Adds `scrolled` class to `<header>` on scroll
- No changes needed: DaisyUI navbar HTML structure is compatible

**Mobile Dropdown Behavior:**
- DaisyUI dropdown automatically handles open/close on click
- Close on item selection: Add click handler to close dropdown

**Active Page Highlighting:**
- Current logic checks `page.url` against navigation links
- Maintain same logic, update selectors for DaisyUI structure

### 1.4 Multilingual Support

**Data Structure (No Changes Required):**
- Keep existing `_data/en/navigation.yml` and `_data/fr/navigation.yml`
- Iterate through data using Liquid loops

**Translation Keys:**
- Add if needed: "Toggle menu" button label (ARIA)
- Existing: All navigation item names and links

### 1.5 Responsive Behavior

**Mobile (< 1024px):**
- Hamburger button visible, desktop menu hidden
- Dropdown menu shows navigation items vertically
- Language switcher in navbar-end
- Single column layout

**Desktop (>= 1024px):**
- Hamburger button hidden, desktop menu visible
- Navigation items displayed horizontally
- Language switcher in navbar-end
- Multiple columns with spacing

**Tablet (768px - 1024px):**
- Transition zone, hamburger appears
- Navigation adapts to mobile view

---

## Phase 2: Implementation Tasks

### Task Breakdown

**Task 1: Update HTML Structure**
- File: `_includes/navigation.html`
- Replace custom HTML with DaisyUI navbar component
- Implement hamburger button with proper ARIA labels
- Create mobile dropdown and desktop menu sections
- Maintain all navigation items and language switcher
- Estimated effort: 1 hour

**Task 2: Implement CSS Styling**
- File: `assets/css/theme.css` (append navbar section)
- Override DaisyUI navbar background (transparent initially)
- Define scroll state styling (dark background, border, shadow)
- Implement smooth transitions (300ms)
- Add text color variations for visibility
- Estimated effort: 1 hour

**Task 3: Integrate Scroll Detection**
- File: `assets/js/script.js` (verify compatibility)
- Ensure scroll detection adds `scrolled` class to header
- Add mobile dropdown close-on-click handler
- Test scroll behavior across devices
- Estimated effort: 30 minutes

**Task 4: Update Language Support**
- Files: `_data/en/navigation.yml`, `_data/fr/navigation.yml`
- Add hamburger button label translations if not present
- Verify all existing navigation items are present
- Add French translations as needed
- Estimated effort: 30 minutes

**Task 5: Testing & Refinement**
- Test responsive behavior at all breakpoints (320px, 768px, 1024px, 1440px)
- Test scroll transition on desktop and mobile
- Test language switching
- Test mobile dropdown open/close
- Verify accessibility (keyboard navigation, screen readers)
- Cross-browser testing (Chrome, Firefox, Safari)
- Estimated effort: 2 hours

**Task 6: Build & Documentation**
- Run `bundle exec jekyll build` to verify build succeeds
- Document CSS class usage and structure
- Update comments in HTML for clarity
- Estimated effort: 1 hour

**Total Estimated Effort:** 6 hours

### Implementation Sequence

```
Phase 1: HTML Structure Update
├── Update _includes/navigation.html
├── Test basic structure in browser
└── Verify navigation links work

Phase 2: CSS Styling
├── Add transparent navbar styling
├── Add scroll state styling
├── Test transitions
└── Verify visibility in both states

Phase 3: JavaScript Integration
├── Verify scroll detection works
├── Add dropdown close-on-click
├── Test mobile interactions
└── Verify no console errors

Phase 4: Multilingual Support
├── Update translation files
├── Test language switching
├── Verify all text displays correctly
└── Check foreign language rendering

Phase 5: Testing & Refinement
├── Test all breakpoints
├── Test all browsers
├── Test accessibility
├── Fix any issues found

Phase 6: Build & Documentation
├── Run build command
├── Verify successful build
├── Document changes
└── Ready for merge
```

---

## File Change Summary

### Files to Create
- None (using existing structure)

### Files to Modify
1. **`_includes/navigation.html`**
   - Replace custom HTML with DaisyUI navbar component
   - Maintain data iteration and link generation
   - Add hamburger button with ARIA labels

2. **`assets/css/theme.css`**
   - Add navbar-specific CSS section
   - Define transparent and scrolled states
   - Implement color transitions

3. **`_data/en/navigation.yml`**
   - Add hamburger button label if not present (may not be needed in YAML)

4. **`_data/fr/navigation.yml`**
   - Add hamburger button label translation if not present

5. **`assets/js/script.js`** (verify only)
   - May need dropdown close-on-click handler
   - Verify scroll detection compatibility

### Files Not Changed
- `_config.yml` (no configuration changes)
- `_pages/*.html` (navbar is included, not modified)
- `_layouts/default.html` (navbar inclusion unchanged)
- Other CSS files (changes isolated to theme.css)

---

## Success Metrics

### Functional Success
- ✅ All navigation items present and working
- ✅ Mobile dropdown functions correctly
- ✅ Desktop menu displays properly
- ✅ Scroll transition works smoothly
- ✅ Language switching works
- ✅ No console errors

### Performance Success
- ✅ Navbar renders in < 100ms
- ✅ No layout shifts on scroll
- ✅ Smooth CSS transitions (60fps)

### Visual Success
- ✅ Matches current design system
- ✅ Text readable in both transparent and dark states
- ✅ Proper spacing and alignment
- ✅ Consistent with DaisyUI Dim theme

### Accessibility Success
- ✅ Keyboard navigation works (Tab, Enter)
- ✅ Screen reader announces buttons properly
- ✅ Color contrast meets WCAG AA
- ✅ Proper ARIA labels on interactive elements

### Testing Coverage
- ✅ Mobile: 320px, 430px
- ✅ Tablet: 768px, 1024px
- ✅ Desktop: 1440px+
- ✅ Browsers: Chrome, Firefox, Safari
- ✅ Languages: English, French

---

## Risk Assessment

### Low Risk Areas ✅
- Navbar is isolated component (no dependencies elsewhere)
- DaisyUI patterns are well-documented and tested
- Existing scroll detection JavaScript is compatible
- Navigation data structure remains unchanged

### Medium Risk Areas ⚠️
- CSS variable compatibility across browsers (modern browsers only)
- Responsive behavior at edge breakpoints
- Language rendering with DaisyUI components

### Mitigation Strategies
- Test at all specified breakpoints
- Use CSS fallbacks for older browsers (if needed)
- Verify language text fits properly in all layouts
- Cross-browser testing before merge

---

## Rollback Plan

If issues arise during implementation:

1. **Pre-merge:** Revert changes and return to feature branch
2. **Post-merge:** Create hotfix branch from main to revert if needed

**Revert Commands:**
```bash
git revert <commit-hash>
# or
git reset --hard <previous-commit>
```

---

## Next Steps

1. **Phase 1 Implementation:** Update HTML structure (Task 1)
2. **Phase 2 Implementation:** Add CSS styling (Task 2)
3. **Phase 3 Implementation:** Integrate JavaScript (Task 3)
4. **Phase 4 Implementation:** Update translations (Task 4)
5. **Phase 5 Testing:** Comprehensive testing (Task 5)
6. **Phase 6 Finalization:** Build and documentation (Task 6)
7. **Merge:** Create PR after all testing passes

---

## Dependencies & Assumptions

### Confirmed Dependencies
- ✅ DaisyUI CSS framework (already in project)
- ✅ Existing scroll detection JavaScript
- ✅ Navigation YAML data files
- ✅ CSS theming system

### Assumptions Validated
- ✅ DaisyUI integration is working
- ✅ Scroll detection adds `scrolled` class to header
- ✅ 1024px is correct breakpoint
- ✅ Language switcher stays in navbar-end
- ✅ No new navigation structure needed

### No New Dependencies Required ✅

---

## Related Documents

- **Specification:** `specs/004-daisyui-navbar/spec.md`
- **Constitution:** `.specify/memory/constitution.md`
- **Current Navbar:** `_includes/navigation.html`
- **Navigation Data:** `_data/en/navigation.yml`, `_data/fr/navigation.yml`
- **DaisyUI Docs:** https://daisyui.com/components/navbar/
