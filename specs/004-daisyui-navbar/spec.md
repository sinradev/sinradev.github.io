# Feature Specification: Refactor Navbar with DaisyUI

**Status:** Specification Phase
**Feature ID:** 004-daisyui-navbar
**Created:** 2025-11-28
**Language:** en / fr

---

## Overview

Replace the current custom HTML navbar with DaisyUI navbar component to ensure robust, responsive behavior across all device sizes. The navbar must maintain the current design system (transparent on homepage hero, dark background on scroll) while leveraging DaisyUI's production-ready responsive patterns.

## Problem Statement

The current navbar uses custom HTML and CSS that manages responsive behavior through custom JavaScript and media queries. While functional, this approach:
- Requires manual mobile dropdown management
- May miss edge cases in responsive breakpoints
- Lacks battle-tested patterns from established UI component libraries
- Increases maintenance burden

By adopting DaisyUI's navbar component, we gain:
- Proven responsive behavior across devices
- Accessible HTML structure (proper ARIA roles, semantic markup)
- Battle-tested dropdown patterns
- Reduced custom CSS and JavaScript

## What's Being Built

### Primary Goal
Migrate the navbar implementation from custom HTML to DaisyUI component while preserving:
1. Current visual appearance and brand consistency
2. Transparent navbar on homepage with scroll-to-dark transition
3. All navigation links and language switcher
4. Mobile dropdown menu on small screens
5. Centered menu on large screens

### Key Features
- **Responsive Design**: Mobile dropdown on screens < 1024px, horizontal menu on larger screens
- **Scroll Behavior**: Transparent navbar at page top, dark background and shadow when scrolling
- **Language Switcher**: Maintained in navbar end section
- **Sign Up CTA**: "Sign up" button remains highlighted as primary action
- **Accessibility**: Semantic HTML with proper ARIA labels from DaisyUI

## User Scenarios

### Scenario 1: User Visits Homepage on Mobile
**Actor:** First-time visitor on smartphone (< 768px)
**Flow:**
1. User loads homepage and sees transparent navbar with hamburger menu icon
2. Navbar adapts seamlessly to mobile layout
3. User clicks hamburger menu to reveal dropdown with navigation items
4. Menu closes when user selects an item
5. Language switcher is accessible in the dropdown or navbar end

**Expected Outcome:** Navigation is intuitive and functional on mobile without overflow or layout breaks

### Scenario 2: User Scrolls Page on Desktop
**Actor:** Visitor on desktop/laptop (> 1024px)
**Flow:**
1. User lands on homepage and sees transparent navbar with centered menu
2. As user scrolls down, navbar transitions to dark background
3. Navigation items remain visible and readable
4. Language switcher and "Sign up" button stay accessible
5. Scroll behavior is smooth without layout shifts

**Expected Outcome:** Navbar provides visual feedback during page navigation while maintaining usability

### Scenario 3: User Switches Language
**Actor:** Bilingual visitor
**Flow:**
1. User clicks language switcher (en/fr toggle)
2. Page content updates to selected language
3. Navbar structure remains intact with proper language variants
4. All navigation links point to correct language-specific pages

**Expected Outcome:** Language switching is seamless with navbar fully localized

### Scenario 4: Responsive Resize (Device Rotation)
**Actor:** Mobile user rotating device
**Flow:**
1. User on mobile (portrait) navigates with mobile dropdown open
2. User rotates device to landscape
3. Navbar automatically adapts to landscape layout
4. Menu properly repositions without breaking

**Expected Outcome:** Layout adapts gracefully to viewport changes without manual refresh

## Functional Requirements

### F1: HTML Structure
- [ ] Navbar uses DaisyUI navbar component (`<div class="navbar">`)
- [ ] Mobile dropdown uses DaisyUI dropdown component with hamburger icon
- [ ] Large screen menu uses DaisyUI horizontal menu (`navbar-center` section)
- [ ] Navbar sections: `navbar-start` (logo), `navbar-center` (menu), `navbar-end` (language + CTA)

### F2: Responsive Behavior
- [ ] Mobile dropdown visible only on screens < 1024px (using `lg:hidden` class)
- [ ] Horizontal menu visible only on screens ≥ 1024px (using `hidden lg:flex` classes)
- [ ] Hamburger icon toggles dropdown menu smoothly
- [ ] No horizontal scrollbar overflow on any screen size

### F3: Visual Design
- [ ] Navbar background transparent on homepage hero section
- [ ] Navbar transitions to dark background on scroll (via scroll detection JavaScript)
- [ ] Border appears on scroll for visual separation
- [ ] Smooth transitions for all state changes (< 300ms)
- [ ] Text colors adapt for visibility in both transparent and dark states

### F4: Navigation Content
- [ ] All current navigation items present: About, Pricing, Blog, Contact
- [ ] "Login" link maintained (external link to app.sinra.dev)
- [ ] "Sign up" button highlighted as primary action (external link to app.sinra.dev)
- [ ] Links work correctly in both mobile dropdown and desktop menu

### F5: Language Support
- [ ] Language switcher (en/fr) displayed in navbar-end
- [ ] Language switcher functional in both mobile and desktop views
- [ ] Navigation items and labels localized for each language
- [ ] Links navigate to correct language-specific pages

### F6: Accessibility
- [ ] Hamburger button has `aria-label` for screen readers
- [ ] Dropdown menu has proper `tabindex` attributes
- [ ] Navigation items properly marked with semantic HTML
- [ ] Color contrast meets WCAG AA standards for text on both transparent and dark backgrounds

### F7: JavaScript Behavior
- [ ] Scroll detection adds `scrolled` class to header for styling
- [ ] Mobile dropdown closes when item is selected
- [ ] Mobile dropdown respects any active page state (highlight current page)
- [ ] No console errors or JavaScript conflicts

## Success Criteria

### Technical Metrics
1. **Responsive Coverage**: Navigation functions correctly at all breakpoints (320px, 768px, 1024px, 1440px+)
2. **Visual Consistency**: Design matches current Sinra visual language (colors, spacing, typography)
3. **Performance**: Navbar renders in <100ms on initial page load
4. **Accessibility**: Score minimum 90/100 on automated accessibility audit (WAVE, axe)

### User Experience Metrics
1. **Mobile Usability**: Users can access all navigation items in dropdown with maximum 2 taps
2. **Desktop Clarity**: Menu items clearly visible without truncation or overlap
3. **Scroll Feedback**: Navbar state change (transparent → dark) visible and smooth on scroll
4. **Language Switching**: Users can switch languages without page reload delays

## Key Entities

### Navbar Component
- **Logo/Brand**: Company logo with link to homepage
- **Navigation Menu**: Collection of navigation links
- **Hamburger Button**: Mobile toggle for dropdown menu
- **Dropdown Menu**: Mobile navigation revealed on hamburger click
- **Language Switcher**: Two-option selector (English / Français)
- **Sign Up Button**: Highlighted primary action button

### Navigation Items
- Title: "About", Target: `/about/`, Mobile: Yes, Desktop: Yes
- Title: "Pricing", Target: `/pricing/`, Mobile: Yes, Desktop: Yes
- Title: "Blog", Target: `/blog/`, Mobile: Yes, Desktop: Yes
- Title: "Contact", Target: `/contact/`, Mobile: Yes, Desktop: Yes
- Title: "Login", Target: `https://app.sinra.dev/users/sign_in`, Mobile: Yes, Desktop: Yes
- Title: "Sign up", Target: `https://app.sinra.dev/users/sign_up`, Mobile: Yes, Desktop: Yes, Class: `highlight`

## Constraints & Dependencies

### Constraints
- Must maintain current visual design and brand consistency
- Cannot break existing page layouts or sections
- Must support both English (en) and French (fr) languages
- Must work with Jekyll static site generation
- No breaking changes to page performance

### Dependencies
- DaisyUI CSS framework (already in project or to be added)
- Current navigation data structure (`_data/en/navigation.yml`, `_data/fr/navigation.yml`)
- Scroll detection JavaScript already in place
- Current CSS theming system (colors, spacing variables)

## Assumptions

1. **DaisyUI Integration**: Project already has DaisyUI available via CSS framework or will add it to build process
2. **Screen Breakpoint**: Mobile/desktop breakpoint is 1024px (`lg` breakpoint in Tailwind/DaisyUI)
3. **Scroll Behavior**: Existing scroll detection JavaScript will continue to work with new navbar HTML
4. **Language Variants**: Both English and French navigation data will be updated together
5. **CSS Variable Compatibility**: DaisyUI theme colors will work with existing CSS custom properties
6. **No Dropdown Submenus**: Current navigation doesn't have submenus; if needed, this is out of scope
7. **Mobile Menu Auto-Close**: Mobile dropdown automatically closes when a link is clicked (standard behavior)

## Testing Strategy

### Unit Tests
- Navbar renders with correct HTML structure
- All navigation links have correct href attributes
- Language switcher links point to correct language pages

### Integration Tests
- Navbar scroll detection works with page scroll
- Mobile dropdown opens/closes correctly
- Language switching updates navbar content

### Browser/Device Tests
- Chrome, Firefox, Safari on desktop (1440px+)
- Mobile Safari on iPhone (320px-430px)
- Chrome on Android (320px-480px)
- Tablet views (768px-1024px)
- Responsive resize (rotation testing)

### Accessibility Tests
- Keyboard navigation (Tab through menu items)
- Screen reader testing (VoiceOver, NVDA)
- Color contrast verification
- ARIA labels verification

## Out of Scope

- Adding new navigation items or restructuring menu
- Changing navigation targets or external links
- Adding submenu support (if not currently present)
- Analytics tracking for navbar interactions
- Navbar animations beyond current scroll transition
- Mobile app navbar (web only)

## Questions for Clarification

None identified - feature is well-scoped based on existing navbar and DaisyUI documentation.

---

## Related Documents
- Current navbar implementation: `_includes/navigation.html`
- Navigation data: `_data/en/navigation.yml`, `_data/fr/navigation.yml`
- CSS styling: `assets/css/theme.css`, `assets/css/layout.css`
- DaisyUI reference: https://daisyui.com/components/navbar/
