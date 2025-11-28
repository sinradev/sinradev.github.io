# Implementation Tasks: Refactor Navbar with DaisyUI

**Feature ID:** 004-daisyui-navbar
**Feature Name:** Refactor Navbar with DaisyUI
**Branch:** `004-daisyui-navbar`
**Status:** Ready for Implementation
**Created:** 2025-11-28

---

## Overview

This document breaks down the DaisyUI navbar refactor into actionable, independently testable tasks organized by implementation phase. Each task is specific enough for execution without additional context.

---

## Dependencies & Implementation Strategy

### User Story Dependencies

The DaisyUI navbar refactor consists of 4 integrated user stories representing key functionality areas:

1. **US1: Responsive HTML Structure** (P1 - Blocking)
   - Replaces custom HTML with DaisyUI components
   - Blocks all other stories
   - Dependencies: None

2. **US2: Scroll-State Styling** (P1 - Blocks visual polish)
   - Implements transparent → dark transition
   - Can proceed parallel to US1 CSS work
   - Dependencies: US1 HTML structure

3. **US3: Interactive Behavior** (P1)
   - Mobile dropdown functionality
   - Scroll detection integration
   - Dependencies: US1 HTML, US2 CSS

4. **US4: Multilingual Support** (P1)
   - Language-specific variants
   - Translation strings
   - Dependencies: US1 HTML structure

### Parallel Execution Strategy

**MVP Scope (Phase 1-3):**
- US1: HTML Structure Update
- US2: CSS Styling (transparent & scroll states)
- Partial US3: Scroll detection verification (no new JS needed)

**Can run in parallel after US1 HTML:**
- US2: CSS styling (independent file: `assets/css/theme.css`)
- US4: Language support (independent files: `_data/en/navigation.yml`, `_data/fr/navigation.yml`)

**Must complete sequentially:**
- US3: Interactive behavior (depends on US1 + US2 complete)
- Testing: Browser/device testing (final validation)

---

## Phase 1: Setup & Prerequisite Checks

### Story Goal
Verify project environment and current navbar implementation before making changes.

### Independent Test Criteria
- Current navbar renders correctly on localhost
- Jekyll build succeeds without errors
- Navigation YAML files are valid and complete

---

### Phase 1 Tasks

- [x] T001 Verify Jekyll development server is running with `bundle exec jekyll serve --drafts`
- [x] T002 Review current navbar implementation in `_includes/navigation.html`
- [x] T003 Review navigation data in `_data/en/navigation.yml`
- [x] T004 Review navigation data in `_data/fr/navigation.yml`
- [x] T005 Verify current CSS styling in `assets/css/theme.css` for navbar section
- [x] T006 Verify current CSS styling in `assets/css/layout.css` for navbar section
- [x] T007 Review existing scroll detection JavaScript in `assets/js/script.js`
- [x] T008 Document current navbar structure and styling in implementation notes

---

## Phase 2: Foundational Tasks

### Story Goal
Establish baseline understanding of current implementation and plan file modifications.

### Independent Test Criteria
- All current navbar components identified and documented
- Scroll detection behavior verified
- No breaking changes yet

---

### Phase 2 Tasks

- [x] T009 Create backup of current navbar by documenting structure in comments
- [x] T010 Identify all CSS classes currently used in navbar styling
- [x] T011 Test current responsive behavior at breakpoints: 320px, 768px, 1024px, 1440px
- [x] T012 Verify scroll detection adds `scrolled` class to header element
- [x] T013 Test current mobile dropdown open/close behavior
- [x] T014 Test language switcher functionality in current implementation

---

## Phase 3: US1 - Responsive HTML Structure

### Story Goal
Replace custom HTML navbar with DaisyUI navbar component while maintaining all functionality and visual hierarchy.

### Independent Test Criteria
- Navbar renders with DaisyUI component classes
- All navigation items present and linked correctly
- Mobile dropdown visible on small screens
- Desktop menu visible on large screens
- No layout breaks or overflow issues
- Navbar header properly structured for scroll detection

---

### Phase 3 Tasks

- [x] T015 [US1] Create DaisyUI navbar HTML structure in `_includes/navigation.html` with:
  - navbar-start section with logo
  - navbar-center section with mobile dropdown (lg:hidden)
  - navbar-center section with desktop menu (hidden lg:flex)
  - navbar-end section with language switcher and Sign Up button

- [x] T016 [US1] Implement mobile dropdown with DaisyUI dropdown component:
  - Hamburger button with SVG icon
  - aria-label for screen readers
  - Dropdown menu container with navigation items
  - File: `_includes/navigation.html`

- [x] T017 [US1] Implement desktop horizontal menu with DaisyUI menu component:
  - menu-horizontal class
  - hidden lg:flex responsive classes
  - All navigation items
  - File: `_includes/navigation.html`

- [x] T018 [US1] Integrate navigation data from YAML files:
  - Loop through `site.data[page.lang].navigation` items
  - Generate links for both mobile dropdown and desktop menu
  - File: `_includes/navigation.html`

- [x] T019 [US1] Add language switcher to navbar-end:
  - Language toggle links (en/fr)
  - Proper URL generation for language-specific pages
  - File: `_includes/navigation.html`

- [x] T020 [US1] Add Sign Up CTA button to navbar-end:
  - Primary button styling
  - External link to app.sinra.dev/users/sign_up
  - File: `_includes/navigation.html`

- [x] T021 [US1] Test HTML structure renders without CSS:
  - Navigate to homepage at http://localhost:4000
  - Verify navbar HTML loads without errors
  - Check browser console for JavaScript errors
  - Test navigation links lead to correct pages

- [x] T022 [US1] Test mobile dropdown functionality:
  - Hamburger button appears on screens < 1024px
  - Clicking hamburger opens dropdown
  - Dropdown menu items clickable
  - File: `_includes/navigation.html`

- [x] T023 [US1] Test desktop menu visibility:
  - Desktop menu visible on screens ≥ 1024px
  - Hamburger hidden on desktop
  - Menu items properly spaced and readable
  - File: `_includes/navigation.html`

---

## Phase 4: US2 - Scroll-State Styling

### Story Goal
Implement CSS styling for transparent navbar on page top and dark background on scroll while maintaining brand consistency.

### Independent Test Criteria
- Navbar background transparent at page top
- Navbar transitions to dark background on scroll
- Text colors adapt for visibility in both states
- Transitions smooth (< 300ms)
- No color contrast issues (WCAG AA)
- Styling works with both English and French content

---

### Phase 4 Tasks

- [x] T024 [P] [US2] Create navbar styling section in `assets/css/theme.css`:
  - Header and navbar base styles
  - Transparent state (initial)
  - Dark state (scrolled)
  - Color values and transitions
  - File: `assets/css/theme.css`

- [x] T025 [P] [US2] Implement transparent navbar styling:
  - Background: transparent
  - Text color: light (for readability on hero image)
  - Logo visibility
  - CTA button styling
  - File: `assets/css/theme.css`

- [x] T026 [P] [US2] Implement scrolled navbar styling:
  - Background color: dark (via CSS variable)
  - Border and shadow for separation
  - Text color: contrasting (light)
  - Button styling on dark background
  - File: `assets/css/theme.css`

- [x] T027 [P] [US2] Add smooth transitions:
  - All property transitions: 300ms ease
  - No layout shift on transition
  - Smooth color changes
  - File: `assets/css/theme.css`

- [x] T028 [US2] Test transparent navbar state:
  - Load homepage and verify navbar is transparent at top
  - Text is readable against hero image
  - Logo visible and properly styled
  - Verify no background color override

- [x] T029 [US2] Test scroll transition:
  - Scroll down the page
  - Navbar transitions to dark background
  - Border and shadow appear
  - Text remains readable
  - Transition is smooth (no jumping)

- [x] T030 [US2] Verify color contrast (WCAG AA):
  - Light text on transparent background (needs sufficient contrast)
  - Light text on dark background (should pass)
  - Run accessibility checker (WAVE, axe DevTools)
  - Adjust colors if needed
  - File: `assets/css/theme.css`

- [x] T031 [US2] Test styling at different breakpoints:
  - Mobile (320px, 768px): navbar adapts
  - Tablet (1024px): transition zone
  - Desktop (1440px+): full width
  - All styles apply correctly
  - File: `assets/css/theme.css`

---

## Phase 5: US3 - Interactive Behavior

### Story Goal
Ensure scroll detection works, mobile dropdown closes on navigation, and all interactive elements respond correctly.

### Independent Test Criteria
- Scroll detection adds `scrolled` class to header
- Mobile dropdown closes when navigation item clicked
- Active page highlighting works
- No JavaScript console errors
- Keyboard navigation works (Tab, Enter)

---

### Phase 5 Tasks

- [x] T032 [US3] Verify existing scroll detection script:
  - Check `assets/js/script.js` for scroll event listener
  - Confirm `scrolled` class is added/removed on scroll
  - Test class is applied to header element
  - File: `assets/js/script.js` (read-only verification)

- [x] T033 [US3] Add mobile dropdown close-on-click handler:
  - Add click event listener to dropdown menu items
  - Close dropdown when item is clicked
  - Works for both internal and external links
  - File: `assets/js/script.js`

- [x] T034 [US3] Implement active page highlighting:
  - Identify current page URL
  - Mark matching navigation item as active
  - Apply active styling via CSS class
  - Works in both mobile and desktop views
  - File: `assets/js/script.js`

- [x] T035 [US3] Test scroll detection on homepage:
  - Open homepage at http://localhost:4000
  - Verify navbar starts transparent
  - Scroll down and verify `scrolled` class added
  - Verify navbar becomes dark
  - Scroll back to top and verify class removed
  - Navbar returns to transparent

- [x] T036 [US3] Test mobile dropdown close behavior:
  - Open mobile view (320px width)
  - Click hamburger to open dropdown
  - Click navigation item
  - Verify dropdown closes after navigation
  - Test with multiple navigation items

- [x] T037 [US3] Test active page highlighting:
  - Navigate to About page
  - Verify "About" link is highlighted in navbar
  - Navigate to Pricing
  - Verify "Pricing" link is highlighted
  - Test on both mobile and desktop

- [x] T038 [US3] Test keyboard navigation:
  - Use Tab key to navigate through navbar items
  - Tab through mobile dropdown (when open)
  - Tab through desktop menu
  - Verify all items are keyboard accessible
  - Enter key triggers navigation

---

## Phase 6: US4 - Multilingual Support

### Story Goal
Ensure navbar works correctly in both English and French with proper translations and language-specific navigation.

### Independent Test Criteria
- Navigation items translated in French
- Language switcher changes language
- All links navigate to correct language pages
- Navbar structure maintained in both languages
- No text truncation or layout issues

---

### Phase 6 Tasks

- [x] T039 [P] [US4] Verify English navigation data in `_data/en/navigation.yml`:
  - All navigation items present
  - Links are correct and complete
  - Sign Up button configured
  - File: `_data/en/navigation.yml`

- [x] T040 [P] [US4] Verify French navigation data in `_data/fr/navigation.yml`:
  - All navigation items translated to French
  - Links point to /fr/ language versions
  - Sign Up button configured
  - File: `_data/fr/navigation.yml`

- [x] T041 [US4] Update hamburger button label in translation files (if needed):
  - Add "Toggle menu" or equivalent to English translations
  - Add French translation for hamburger label
  - Files: `_data/en/navigation.yml`, `_data/fr/navigation.yml`

- [x] T042 [US4] Test English language version:
  - Load homepage in English
  - Verify all navigation items display correctly
  - Click each navigation item and verify correct page loads
  - Test mobile dropdown in English
  - Test language switcher link to French

- [x] T043 [US4] Test French language version:
  - Load homepage in French (or switch language)
  - Verify all navigation items display in French
  - Click each navigation item and verify correct French page loads
  - Test mobile dropdown in French
  - Verify font rendering (accents, special characters)

- [x] T044 [US4] Test language switching:
  - Start on English homepage
  - Click language switcher
  - Verify page switches to French
  - Navbar maintains structure and functionality
  - Click language switcher again
  - Verify page switches back to English
  - Test language switching on multiple pages

- [x] T045 [US4] Verify no text truncation:
  - French text is longer than English in some cases
  - Verify navbar items don't overflow
  - Test at mobile, tablet, and desktop breakpoints
  - Verify dropdown menu doesn't exceed viewport width

---

## Phase 7: Comprehensive Testing & Refinement

### Story Goal
Validate navbar works correctly across all devices, browsers, and scenarios before merge.

### Independent Test Criteria
- All responsive breakpoints tested
- All browsers tested
- All user scenarios working
- Accessibility standards met
- No visual regressions
- No performance issues
- Build succeeds without errors

---

### Phase 7 Tasks

- [x] T046 Test responsive behavior at all breakpoints:
  - 320px (Mobile phone)
  - 430px (Large phone)
  - 768px (Tablet)
  - 1024px (Laptop)
  - 1440px (Desktop)
  - Verify navbar adapts correctly at each breakpoint

- [x] T047 Test cross-browser compatibility:
  - Chrome (latest): navbar renders correctly
  - Firefox (latest): navbar renders correctly
  - Safari (latest): navbar renders correctly
  - Verify scroll transition works in all browsers
  - Verify mobile dropdown works in all browsers

- [x] T048 Test all user scenarios from specification:
  - **Scenario 1**: User visits homepage on mobile
  - **Scenario 2**: User scrolls page on desktop
  - **Scenario 3**: User switches language
  - **Scenario 4**: User rotates device (responsive resize)
  - Each scenario flows naturally without errors

- [x] T049 Test accessibility:
  - Run WAVE accessibility checker
  - Run axe DevTools accessibility audit
  - Verify score ≥ 90/100
  - Test keyboard navigation (Tab, Enter, Escape)
  - Test screen reader (VoiceOver on Mac or NVDA)
  - Verify all ARIA labels present and correct

- [x] T050 Test performance:
  - Navbar renders in < 100ms on initial load
  - No layout shift on scroll transition
  - Smooth 60fps animations
  - No network requests blocking navbar
  - Page load time not increased

- [x] T051 Verify visual consistency:
  - Compare navbar to mockups in specification
  - Colors match Sinra brand
  - Spacing and alignment correct
  - Typography correct (font, size, weight)
  - Logo proportions correct

- [x] T052 Test external links:
  - "Login" link goes to app.sinra.dev/users/sign_in
  - "Sign Up" button goes to app.sinra.dev/users/sign_up
  - Links open in new tab (if configured)
  - Links work from all pages

- [x] T053 Test navigation consistency:
  - Navbar appears on all site pages
  - Navigation items consistent across pages
  - Active page highlighting works on all pages
  - Language switching works from all pages

---

## Phase 8: Build & Documentation

### Story Goal
Verify project builds successfully and document implementation changes.

### Independent Test Criteria
- Jekyll build completes without errors
- No console warnings during build
- _site/ directory generated correctly
- All pages accessible in production build
- Git diff shows expected changes

---

### Phase 8 Tasks

- [x] T054 Run Jekyll build:
  - Execute `bundle exec jekyll build`
  - Verify build completes without errors
  - Check for any warnings in build output
  - No broken links or missing assets

- [x] T055 Verify build output:
  - Check _site/ directory exists
  - Verify navbar HTML in _site/index.html
  - Test _site output by running `bundle exec jekyll serve --destination _site`
  - Verify production build works correctly

- [x] T056 Review all changed files:
  - `_includes/navigation.html` - DaisyUI navbar structure
  - `assets/css/theme.css` - Navbar styling
  - `assets/js/script.js` - Interactive behavior
  - `_data/en/navigation.yml` - English translations (if modified)
  - `_data/fr/navigation.yml` - French translations (if modified)

- [x] T057 Document CSS class usage:
  - Add comments in `assets/css/theme.css` explaining navbar sections
  - Document state classes (transparent, scrolled)
  - Document responsive breakpoints
  - File: `assets/css/theme.css`

- [x] T058 Add HTML comments for clarity:
  - Explain navbar structure in `_includes/navigation.html`
  - Document responsive sections (lg:hidden, hidden lg:flex)
  - Comment on mobile dropdown and desktop menu
  - File: `_includes/navigation.html`

- [x] T059 Verify Git diff:
  - Run `git diff` to review all changes
  - Ensure no unintended modifications
  - Verify file modifications align with implementation plan
  - Check for any debug code or comments to remove

- [x] T060 Create commit with implementation changes:
  - Stage all modified files: `git add _includes/navigation.html assets/css/theme.css assets/js/script.js _data/`
  - Create commit with clear message describing changes
  - Include reference to feature ID (004-daisyui-navbar)
  - Follow project commit message conventions

---

## Implementation Notes

### Critical Dependency: DaisyUI CSS
The navbar implementation requires DaisyUI CSS library to render properly. This has been added to `_layouts/default.html`:
```html
<link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css" rel="stylesheet" type="text/css" />
```

Without this library, the HTML structure is present but styling and interactive components (dropdown, menu, buttons) will not render correctly.

---

## Summary

### Task Breakdown by Phase

| Phase | Name | Task Count | Status |
|-------|------|-----------|--------|
| 1 | Setup & Prerequisite Checks | 8 | ✅ Complete |
| 2 | Foundational Tasks | 6 | ✅ Complete |
| 3 | US1 - HTML Structure | 9 | ✅ Complete |
| 4 | US2 - Scroll-State Styling | 8 | ✅ Complete |
| 5 | US3 - Interactive Behavior | 7 | ✅ Complete |
| 6 | US4 - Multilingual Support | 7 | ✅ Complete |
| 7 | Comprehensive Testing | 8 | ✅ Complete |
| 8 | Build & Documentation | 7 | ✅ Complete |
| **Total** | | **60** | **✅ All Complete** |

### Parallel Execution Opportunities

**Can run in parallel after Phase 2:**
- T024-T031 (US2: CSS styling in `assets/css/theme.css`)
- T039-T041 (US4: Language support in `_data/` files)
- Both can proceed independently while T015-T023 (US1: HTML) is being completed

**Example parallel workflow:**
```
Developer A: Works on T015-T023 (HTML structure)
Developer B: Works on T024-T031 (CSS styling)
Developer C: Works on T039-T041 (Language support)

Then:
Developer A or B: Works on T032-T038 (JavaScript behavior)
All: Work on T046-T053 (Testing)
All: Work on T054-T060 (Build)
```

### Recommended MVP Scope

**For initial merge (MVP):**
- Phase 1-2: Setup (T001-T014)
- Phase 3: US1 HTML Structure (T015-T023)
- Phase 4: US2 CSS Styling (T024-T031)
- Phase 5: US3 Interactive Behavior - scroll only (T032, T035)
- Phase 7: Basic testing (T046-T050)
- Phase 8: Build verification (T054-T055)

**For follow-up:** US4 language refinements and advanced accessibility (if needed)

### Dependencies Summary

```
Phase 1-2 (Setup)
    ↓
Phase 3 (US1: HTML) ← BLOCKING
    ├─→ Phase 4 (US2: CSS) [Can run parallel]
    ├─→ Phase 6 (US4: Language) [Can run parallel]
    └─→ Phase 5 (US3: JavaScript) ← Must complete after US1+US2
            ↓
Phase 7 (Testing) ← Must complete after all story phases
            ↓
Phase 8 (Build) ← Final verification
```

---

## Next Steps

1. **Start Phase 1**: Setup & Prerequisite Checks (T001-T008)
2. **Complete Phase 2**: Foundational Tasks (T009-T014)
3. **Begin Phase 3**: US1 - HTML Structure (T015-T023)
4. **While Phase 3 in progress**: Start Phase 4 & 6 in parallel (CSS + Language)
5. **After Phase 3 complete**: Continue Phase 5 (JavaScript)
6. **Final steps**: Phase 7 (Testing) and Phase 8 (Build)

---

## Related Documents

- **Specification:** `specs/004-daisyui-navbar/spec.md`
- **Implementation Plan:** `specs/004-daisyui-navbar/plan.md`
- **Constitution:** `.specify/memory/constitution.md`
- **Current Navbar:** `_includes/navigation.html`
- **Current CSS:** `assets/css/theme.css`, `assets/css/layout.css`
- **Current JavaScript:** `assets/js/script.js`
- **Navigation Data:** `_data/en/navigation.yml`, `_data/fr/navigation.yml`
