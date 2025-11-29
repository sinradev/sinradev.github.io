# Feature Specification: Add Compare Products Dropdown to Navbar

**Feature ID**: 001-navbar-compare-dropdown
**Status**: Specification
**Created**: 2025-11-29
**Last Updated**: 2025-11-29

---

## Summary

Add a "Compare" dropdown menu to the main navigation bar that displays links to Sinra's product comparison pages (Asana, Jira, Monday.com). The dropdown should be accessible in both desktop and mobile navigation, with styling consistent with the rest of the site.

---

## Problem Statement

Currently, the navbar only contains top-level navigation items (About, Pricing, Blog, Contact, Login, Sign up). Users cannot discover Sinra's comparison pages directly from the main navigation. The comparison pages exist but are not easily accessible, reducing their discoverability and potential traffic.

---

## User Scenarios & Acceptance Criteria

### Scenario 1: Desktop User Discovers Comparison Pages
**Actor**: Visitor on desktop view
**Action**: User hovers over or clicks "Compare" in the navbar
**Expected Outcome**:
- Dropdown menu appears showing three comparison options: Asana, Jira, Monday
- User can click any option to navigate to the corresponding comparison page
- Dropdown styling matches the existing navbar design
- User can navigate away without triggering the dropdown to remain open

**Acceptance Criteria**:
- [ ] "Compare" menu item appears in desktop horizontal navbar (navbar-menu)
- [ ] Dropdown contains three links: Asana, Jira, Monday
- [ ] Links point to correct comparison pages (/compare/asana/, /compare/jira/, /compare/monday/)
- [ ] Dropdown appears on hover with smooth animation
- [ ] Dropdown styling matches navbar theme (colors, shadows, spacing)
- [ ] Links within dropdown respond to hover with visual feedback
- [ ] Dropdown closes when user clicks outside or navigates away

### Scenario 2: Mobile User Discovers Comparison Pages
**Actor**: Visitor on mobile/tablet view
**Action**: User opens mobile menu and looks for comparison options
**Expected Outcome**:
- "Compare" appears in the mobile dropdown menu
- User can expand it to see sub-items or navigate directly
- Mobile styling matches mobile navigation patterns

**Acceptance Criteria**:
- [ ] "Compare" menu item appears in mobile dropdown menu (nav-dropdown)
- [ ] Mobile display accommodates the new menu item without overflow
- [ ] Mobile menu layout remains usable and accessible
- [ ] Touch targets have adequate size for mobile interaction (min 44px)

### Scenario 3: Multilingual Support
**Actor**: French-speaking visitor
**Action**: User navigates with French language selected
**Expected Outcome**:
- "Compare" menu displays correctly in both English and French
- All three comparison page links work in the selected language

**Acceptance Criteria**:
- [ ] "Compare" label displays in English (en) and French (fr)
- [ ] Comparison links in French version point to French comparison pages
- [ ] Navigation structure is maintained across both languages
- [ ] Navigation data is properly translated in both navigation.yml files

---

## Functional Requirements

### Navigation Data Management
- **FR-1**: Add "Compare" menu item to `_data/en/navigation.yml` with link to comparison pages
- **FR-2**: Add "Compare" menu item to `_data/fr/navigation.yml` with French label
- **FR-3**: Store comparison sub-items (Asana, Jira, Monday) in navigation data structure to support dropdown rendering
- **FR-4**: Ensure translation keys are consistent and all entries have corresponding en/fr versions

### Header Component Updates
- **FR-5**: Update `_includes/header.html` to support dropdown menu items
- **FR-6**: Implement dropdown rendering logic that displays sub-items when parent has children
- **FR-7**: Support both desktop (navbar-menu) and mobile (nav-dropdown) dropdown menus

### Styling
- **FR-8**: Apply existing CSS dropdown classes from `assets/css/navbar.css` (already supports `.dropdown` and `.dropdown-content`)
- **FR-9**: Ensure dropdown styling matches navbar theme (background color, text color, shadows)
- **FR-10**: Style dropdown links to match hover and active states of existing menu items
- **FR-11**: Verify dropdown styling works correctly at all breakpoints (mobile, tablet, desktop)
- **FR-12**: Ensure proper z-index and stacking context for dropdown visibility

---

## Success Criteria

1. **Discoverability**: Compare pages are directly accessible from main navbar with single click/tap
2. **Consistency**: Dropdown styling matches existing navbar design and DaisyUI theme variables
3. **Responsiveness**: Dropdown functions correctly on all screen sizes (mobile, tablet, desktop)
4. **Internationalization**: Both English and French navigation display correctly with proper translations
5. **Accessibility**: Dropdown is keyboard navigable and has proper ARIA labels for screen readers
6. **User Experience**: Dropdown appears/disappears with smooth interaction (no jarring transitions)
7. **SEO**: Navigation structure maintains proper heading hierarchy and link semantics

---

## Key Entities

- **Navigation Menu Item**: Represents a single entry in the navbar (name, link, target, CSS class)
- **Dropdown Item**: Sub-item of a navigation menu item (inherits parent structure)
- **Comparison Pages**: /compare/asana/, /compare/jira/, /compare/monday/ (existing pages)

---

## Dependencies

- Existing comparison pages (compare-asana, compare-jira, compare-monday in both en/fr)
- DaisyUI theme variables for navbar styling (already integrated)
- Jekyll Polyglot for multilingual support (already configured)

---

## Assumptions

1. The comparison pages are properly translated and exist in both English and French versions
2. The dropdown structure can be represented in YAML data files alongside other navigation items
3. Existing navbar CSS (navbar.css) provides sufficient styling for dropdowns (`.dropdown` classes exist)
4. Dropdown behavior should match common UI patterns (appear on hover/focus on desktop, maintain state on mobile)
5. The header.html template uses Liquid templating and can iterate over nested data structures

---

## Out of Scope

- Creating new comparison pages
- Redesigning existing comparison page content
- Changing overall navbar layout or primary menu structure
- Implementing mega-menu or complex multi-level dropdowns
- Analytics or tracking of comparison page clicks

---

## Questions for Clarification

None at this stage. The feature scope is well-defined based on existing infrastructure.

