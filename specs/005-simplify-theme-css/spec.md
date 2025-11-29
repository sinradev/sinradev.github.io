# Feature Specification: Simplify theme.css Using DaisyUI

**Status:** Specification Phase
**Feature ID:** 005-simplify-theme-css
**Created:** 2025-11-29
**Language:** en / fr

---

## Overview

Refactor `theme.css` to leverage DaisyUI component styles and utilities, eliminating duplicate custom CSS while maintaining design consistency. The dim theme should be the primary foundation, with DaisyUI components providing the base styling for all UI elements across the site.

## Problem Statement

The current `theme.css` contains custom CSS rules that often duplicate styling provided by DaisyUI. This creates:
- Redundant color definitions and utility classes
- Maintenance burden when updating colors or spacing
- Inconsistency between DaisyUI component defaults and custom overrides
- Larger CSS file size than necessary
- Difficulty tracking which styles apply where

By simplifying `theme.css` to use DaisyUI as the foundation:
- Reduce custom CSS to only override-specific cases or brand customizations
- Use DaisyUI's dim theme as the base for all colors and components
- Leverage built-in DaisyUI utilities for spacing, sizing, and layout
- Maintain consistency across all pages and components
- Reduce CSS file size and improve maintainability

## What's Being Built

### Primary Goal
Refactor `theme.css` to minimize custom CSS by:
1. Using DaisyUI component classes directly (buttons, cards, badges, etc.)
2. Applying DaisyUI dim theme colors without custom overrides
3. Removing duplicate CSS rules already provided by DaisyUI utilities
4. Keeping only brand-specific customizations (e.g., custom color accents, typography rules)

### Key Features
- **DaisyUI Components**: Use built-in component classes for buttons, cards, badges, forms, etc.
- **Dim Theme Foundation**: Apply DaisyUI's dim color palette for backgrounds, borders, and text
- **Minimal Custom CSS**: Keep only styles that customize beyond DaisyUI (fonts, spacing adjustments, brand colors)
- **Consistency**: All pages and sections use the same component styling approach
- **Maintainability**: Clear separation between DaisyUI defaults and custom overrides

## User Scenarios

### Scenario 1: Developer Adds New Component to Homepage
**Actor:** Developer adding a new UI component
**Flow:**
1. Developer needs to add a button or card to the page
2. Developer uses DaisyUI component class (e.g., `btn btn-primary`)
3. Component automatically inherits dim theme styling
4. Component matches existing site design without additional CSS
5. Component appears consistently across all pages

**Expected Outcome:** New components integrate seamlessly with the design system using only DaisyUI classes

### Scenario 2: Designer Updates Brand Color
**Actor:** Designer updating brand color palette
**Flow:**
1. Designer identifies a brand color needs to change
2. Only custom color override in `theme.css` needs updating
3. All pages using DaisyUI components automatically reflect the change
4. No need to search and update multiple CSS files

**Expected Outcome:** Color changes propagate site-wide with minimal effort

### Scenario 3: Visitor Views Site on Mobile Device
**Actor:** Mobile visitor
**Flow:**
1. Visitor loads any page on smartphone
2. All components (navbar, cards, buttons, forms) use responsive DaisyUI defaults
3. Layout adapts gracefully to mobile screen
4. Spacing and sizing automatically adjust per DaisyUI breakpoints
5. User sees consistent, responsive design

**Expected Outcome:** Mobile experience is consistent and properly responsive through DaisyUI utilities

### Scenario 4: Developer Reviews CSS Files
**Actor:** Developer maintaining codebase
**Flow:**
1. Developer opens `theme.css`
2. File is concise and contains only essential customizations
3. Each rule is clearly labeled with its purpose
4. Most styling comes from DaisyUI classes in HTML, not CSS rules
5. Updating styles is straightforward and low-risk

**Expected Outcome:** CSS is maintainable and easy to understand

## Functional Requirements

### F1: DaisyUI Component Usage
- [ ] All buttons use DaisyUI button classes (`btn`, `btn-primary`, `btn-secondary`, etc.)
- [ ] All cards use DaisyUI card component (`card`, `card-body`, etc.)
- [ ] All badges use DaisyUI badge classes (`badge`, `badge-primary`, etc.)
- [ ] All forms use DaisyUI form classes (`form-control`, `input`, `textarea`, etc.)
- [ ] All tables use DaisyUI table component if present
- [ ] All modals use DaisyUI modal classes if present

### F2: Dim Theme Application
- [ ] DaisyUI dim theme applied globally (via Tailwind/DaisyUI configuration)
- [ ] Dim theme colors used for all backgrounds, borders, and text
- [ ] No custom color definitions that duplicate dim theme colors
- [ ] Custom brand colors only override when needed for brand differentiation

### F3: CSS Simplification
- [ ] Duplicate utility classes removed (margin, padding, display, etc. handled by Tailwind)
- [ ] Layout utilities replaced with Tailwind/DaisyUI equivalents (`flex`, `grid`, `gap`, etc.)
- [ ] Responsive breakpoints use Tailwind conventions (`sm:`, `md:`, `lg:`, `xl:`)
- [ ] Custom CSS limited to brand-specific styles and necessary overrides
- [ ] Unused CSS rules identified and removed

### F4: Typography & Spacing
- [ ] Font stack and sizes defined in Tailwind configuration (not duplicated in CSS)
- [ ] Line heights and letter spacing use Tailwind utilities
- [ ] Margin and padding use consistent scale (TailwindCSS default or custom)
- [ ] Heading styles (`h1`, `h2`, etc.) inherit Tailwind typography classes

### F5: Consistency Across Pages
- [ ] All pages use same component classes and styling approach
- [ ] Homepage, about, pricing, blog, contact pages all use DaisyUI components
- [ ] No page-specific CSS that duplicates component styling
- [ ] Shared component styles defined once in `theme.css` only

### F6: Custom Overrides (Brand-Specific)
- [ ] Brand-specific color accents preserved and documented
- [ ] Custom spacing or sizing rules needed for brand differentiation kept
- [ ] Hover and focus states aligned with brand and accessibility standards
- [ ] Dark mode compatibility maintained through dim theme

## Success Criteria

### Technical Metrics
1. **CSS File Size**: Reduce `theme.css` by at least 40% while maintaining visual consistency
2. **Component Coverage**: 95%+ of UI elements use DaisyUI component classes directly
3. **Custom Rules**: Custom CSS limited to <50 rules (from current baseline)
4. **Consistency**: All pages pass visual regression test with DaisyUI-based styling

### Code Quality Metrics
1. **Maintainability**: CSS remains clear and well-organized after refactoring
2. **Specificity**: Eliminate high-specificity selectors; use component classes primarily
3. **Accessibility**: WCAG AA compliance maintained (color contrast, focus states, etc.)
4. **Performance**: No increase in page load time; CSS is smaller or equivalent

### Visual Metrics
1. **Design Consistency**: All pages visually match current design without breaking changes
2. **Component Appearance**: Buttons, cards, forms, badges all appear correctly
3. **Responsive Design**: Mobile, tablet, and desktop views all render properly
4. **Color & Theme**: Dim theme colors applied correctly across all components

## Key Entities

### CSS Files
- **theme.css**: Main stylesheet (to be simplified)
- **layout.css**: Layout-specific styles (may reference DaisyUI utilities)
- **blog.css**: Blog-specific styles (if applicable)
- **plan.css**: Plan/pricing-specific styles (if applicable)
- **contact.css**: Contact form styles (if applicable)

### Components Affected
- Navbar/Header
- Buttons (primary, secondary, outline, disabled states)
- Cards (with borders, shadows, hover effects)
- Forms (inputs, textareas, selects, checkboxes, radio buttons)
- Badges and labels
- Modals/Dialogs
- Pricing tables
- Blog post styling
- Footer

### DaisyUI Theme Configuration
- **Dim Theme**: Primary color palette for light/dark modes
- **Custom Theme Variables**: Brand colors and custom spacing as needed
- **Tailwind Configuration**: Breakpoints and utility configuration

## Constraints & Dependencies

### Constraints
- Must maintain current visual design (no breaking design changes)
- Must support both English and French languages
- Must work with Jekyll static site generation
- DaisyUI must be the foundation, not a supplement
- Backward compatibility: no changes to HTML structure (only CSS)
- Must not increase page load time

### Dependencies
- DaisyUI CSS framework (already integrated)
- Tailwind CSS (underlying DaisyUI)
- Current HTML structure across all pages
- Jekyll configuration for CSS compilation
- DaisyUI theme configuration files

## Assumptions

1. **DaisyUI is Available**: DaisyUI is already configured and available in the project
2. **Dim Theme is Configured**: DaisyUI dim theme is set as the default theme
3. **Tailwind Utilities Work**: Tailwind utility classes are available for layout and spacing
4. **HTML Structure Won't Change**: Refactoring is CSS-only; HTML remains unchanged
5. **Component Classes Are Applied**: HTML files already use DaisyUI component classes in appropriate places
6. **No Custom JavaScript Styling**: JavaScript does not add inline styles; all styling is CSS-based
7. **Brand Colors**: Any custom brand colors beyond dim theme are documented
8. **Performance Baseline**: Current page load time is acceptable and CSS reduction won't negatively impact performance

## Testing Strategy

### Visual Regression Testing
- Capture screenshots of all pages (homepage, about, pricing, blog, contact) before refactoring
- Capture same pages after refactoring
- Compare for any unexpected layout shifts, color changes, or missing styles
- Tools: visual regression tools or manual comparison

### Component Testing
- Verify all button states (normal, hover, active, disabled) render correctly
- Check card styling (border, shadow, background) matches design
- Test form inputs (focus state, error state, placeholder text)
- Validate badge and label appearance
- Confirm responsive behavior on mobile, tablet, desktop

### Browser Compatibility Testing
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari on iOS
- Chrome on Android

### Device Testing
- Desktop (1440px+)
- Laptop (1024px-1440px)
- Tablet (768px-1024px)
- Mobile (320px-768px)

### Accessibility Testing
- Color contrast verification (WCAG AA)
- Keyboard navigation (Tab, Enter, Esc)
- Screen reader testing (focus announcements, labels)
- Focus state visibility

### CSS Validation
- Verify no console CSS warnings
- Check for unused CSS rules
- Validate CSS syntax
- Audit CSS file size reduction

## Out of Scope

- Changing the visual design or brand appearance
- Adding new components or features
- Modifying HTML structure
- Changing Tailwind/DaisyUI configuration (only leveraging existing setup)
- Adding animations or transition effects beyond current design
- Supporting additional browsers or devices beyond current baseline
- Converting to a different CSS framework

---

## Related Documents
- Current theme stylesheet: `assets/css/theme.css`
- Related stylesheets: `assets/css/layout.css`, `assets/css/blog.css`, `assets/css/plan.css`, `assets/css/contact.css`
- DaisyUI components: https://daisyui.com/components/
- DaisyUI themes: https://daisyui.com/docs/themes/
- Tailwind CSS utilities: https://tailwindcss.com/docs/utility-first
