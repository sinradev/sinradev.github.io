# Feature Specification: Add Compare Products Dropdown to Navbar

**Feature ID**: 001-navbar-compare-dropdown
**Status**: Specification
**Created**: 2025-11-29
**Last Updated**: 2025-11-29

---

## Summary

Implement a comprehensive comparison feature accessible from the navbar using a hybrid approach:
1. Add a "Compare" dropdown menu to the main navigation bar linking to comparison resources
2. Create a unified comparison hub page (/compare/) with a consolidated table comparing Sinra, Asana, Jira, and Monday
3. Maintain detailed individual comparison pages (/compare/asana/, /compare/jira/, /compare/monday/) for SEO and deep-dive content

---

## Problem Statement

Currently, the navbar only contains top-level navigation items (About, Pricing, Blog, Contact, Login, Sign up). Users cannot discover Sinra's comparison resources from main navigation. The existing individual comparison pages lack a unified entry point, fragmenting the user journey and reducing decision-making efficiency for prospects evaluating multiple tools simultaneously. From an SEO perspective, there's untapped opportunity for capturing "Sinra vs [all tools]" search intent with a consolidated resource.

---

## User Scenarios & Acceptance Criteria

### Scenario 1: B2B Decision-Maker Compares Multiple Tools
**Actor**: Prospect evaluating project management tools for their team
**Action**: User clicks "Compare" in navbar to see all options at once
**Expected Outcome**:
- User lands on a comparison hub page showing Sinra vs Asana vs Jira vs Monday in a clear table
- User can quickly scan and compare key features across all four tools
- User can click "View Details" to dive deeper into any specific comparison
- Page is mobile-friendly for on-the-go research

**Acceptance Criteria**:
- [ ] Comparison hub page exists at /compare/
- [ ] Hub page displays consolidated table with Sinra and three competing tools
- [ ] Table shows meaningful comparison dimensions (pricing, features, use cases, etc.)
- [ ] Links to detailed comparison pages are clearly visible
- [ ] Page is responsive and readable on mobile devices
- [ ] Hub page is translated to both English and French

### Scenario 2: Desktop User Navigates Comparison Resources
**Actor**: Visitor on desktop view
**Action**: User hovers over or clicks "Compare" in the navbar
**Expected Outcome**:
- Dropdown menu appears showing comparison options
- User can access the hub page or dive into a specific tool comparison
- Dropdown styling matches the existing navbar design

**Acceptance Criteria**:
- [ ] "Compare" menu item appears in desktop horizontal navbar (navbar-menu)
- [ ] Dropdown contains "Comparison Hub" link pointing to /compare/
- [ ] Dropdown contains three detailed comparison links: Asana, Jira, Monday
- [ ] Dropdown appears on hover with smooth animation
- [ ] Dropdown styling matches navbar theme (colors, shadows, spacing)
- [ ] Links within dropdown respond to hover with visual feedback
- [ ] Dropdown closes when user clicks outside or navigates away

### Scenario 3: Mobile User Discovers Comparison Resources
**Actor**: Visitor on mobile/tablet view
**Action**: User opens mobile menu and looks for comparison options
**Expected Outcome**:
- "Compare" appears in the mobile dropdown menu
- User can access hub and detailed comparisons from mobile menu
- Mobile styling matches mobile navigation patterns

**Acceptance Criteria**:
- [ ] "Compare" menu item appears in mobile dropdown menu (nav-dropdown)
- [ ] Mobile dropdown contains "Comparison Hub" and detailed comparison links
- [ ] Mobile display accommodates menu items without overflow
- [ ] Mobile menu layout remains usable and accessible
- [ ] Touch targets have adequate size for mobile interaction (min 44px)

### Scenario 4: Multilingual Support
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

### Comparison Hub Page
- **FR-1**: Create comparison hub page at `/compare/` (English) and `/compare/` (French)
- **FR-2**: Hub page displays consolidated comparison table with Sinra, Asana, Jira, and Monday
- **FR-3**: Table includes key comparison dimensions (features, pricing model, best for, ease of use, etc.)
- **FR-4**: Hub page includes links to detailed comparison pages for deeper analysis
- **FR-5**: Hub page is mobile-responsive and readable on all screen sizes
- **FR-6**: Hub page follows site design conventions (layout, colors, typography, spacing)
- **FR-7**: Hub page includes proper SEO metadata (title, description, headings)

### Navigation Data Management
- **FR-8**: Add "Compare" menu item to `_data/en/navigation.yml` with sub-items
- **FR-9**: Add "Compare" menu item to `_data/fr/navigation.yml` with French translations
- **FR-10**: Store "Comparison Hub" as first sub-item linking to /compare/
- **FR-11**: Store detailed comparison sub-items (Asana, Jira, Monday) below hub link
- **FR-12**: Ensure translation keys are consistent and all entries have corresponding en/fr versions

### Header Component Updates
- **FR-13**: Update `_includes/header.html` to support dropdown menu items with sub-items
- **FR-14**: Implement dropdown rendering logic that displays sub-items when parent has children
- **FR-15**: Support both desktop (navbar-menu) and mobile (nav-dropdown) dropdown menus
- **FR-16**: Ensure proper nesting and hierarchy of menu items in both desktop and mobile views

### Styling
- **FR-17**: Apply existing CSS dropdown classes from `assets/css/navbar.css` (`.dropdown` and `.dropdown-content`)
- **FR-18**: Ensure dropdown styling matches navbar theme (background color, text color, shadows)
- **FR-19**: Style dropdown links to match hover and active states of existing menu items
- **FR-20**: Verify dropdown styling works correctly at all breakpoints (mobile, tablet, desktop)
- **FR-21**: Ensure proper z-index and stacking context for dropdown visibility
- **FR-22**: Style comparison table on hub page for readability and visual hierarchy

---

## Success Criteria

1. **Hub Page Discoverability**: Comparison hub page is the primary entry point for comparison research, accessible via "Compare" dropdown from navbar
2. **Comparison Coverage**: Hub page provides side-by-side view of all four tools (Sinra, Asana, Jira, Monday) with at least 8 key comparison dimensions
3. **Navigation Consistency**: Dropdown styling matches existing navbar design with proper visual hierarchy between hub and detailed comparisons
4. **Deep-Dive Support**: Users can navigate from hub page to detailed comparisons for each tool without friction
5. **Responsiveness**: Hub page and dropdown function correctly on all screen sizes (mobile, tablet, desktop)
6. **Internationalization**: Hub page and navigation display correctly in both English and French with proper translations
7. **Accessibility**: Comparison table is accessible with proper semantic HTML, ARIA labels, and keyboard navigation
8. **User Journey**: Average time to find and reach hub page is under 2 clicks from homepage
9. **SEO Authority**: Hub page targets "Sinra vs" search intent while detailed pages maintain individual SEO value
10. **Visual Consistency**: Hub page table and styling align with overall site design system

---

## Key Entities

- **Navigation Menu Item**: Represents a single entry in the navbar (name, link, target, CSS class)
- **Dropdown Item**: Sub-item of a navigation menu item with children support (hierarchical structure)
- **Comparison Hub Page**: Consolidated page showing all four tools in a comparison table (/compare/)
- **Detailed Comparison Pages**: Individual pages for each tool comparison (/compare/asana/, /compare/jira/, /compare/monday/)
- **Comparison Dimension**: A category or feature used to compare tools (e.g., pricing, features, best for, ease of use)
- **Comparison Table**: HTML table presenting tools and their properties across dimensions

---

## Dependencies

- Existing detailed comparison pages (compare-asana, compare-jira, compare-monday in both en/fr)
- DaisyUI theme variables for navbar styling (already integrated)
- Jekyll Polyglot for multilingual support (already configured)
- HTML table semantic markup and accessibility standards

---

## Assumptions

1. The existing detailed comparison pages are properly translated and exist in both English and French versions
2. The dropdown structure can be represented in YAML data files with support for nested/hierarchical items
3. Existing navbar CSS (navbar.css) provides sufficient styling for dropdowns (`.dropdown` classes already implemented)
4. Dropdown behavior should match common UI patterns (appear on hover/focus on desktop, clickable/expandable on mobile)
5. The header.html template uses Liquid templating and can iterate over nested data structures
6. A comparison hub page can be created using the same Jekyll page template structure as existing pages
7. Comparison table data can be stored in YAML format (similar to existing page data structures)
8. The hub page will use the standard default layout with header, footer, and navigation included
9. Content for comparison dimensions (e.g., pricing, features) will be provided or created during planning phase

---

## Out of Scope

- Redesigning content of existing detailed comparison pages (/compare/asana/, /compare/jira/, /compare/monday/)
- Changing overall navbar layout structure or primary menu items beyond adding Compare dropdown
- Implementing mega-menu or complex multi-level dropdowns (max 2 levels: Compare > Hub/Details)
- Analytics or tracking of comparison page clicks
- Creating new competitor comparison pages beyond Asana, Jira, and Monday
- Changing pricing, features, or business positioning of Sinra itself

---

## Questions for Clarification

None at this stage. The feature scope is well-defined based on existing infrastructure and hybrid approach.

