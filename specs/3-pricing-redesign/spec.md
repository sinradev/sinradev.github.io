# Feature Specification: Unified Pricing Display with AI-Powered Features

**Feature Branch**: `3-pricing-redesign`
**Created**: 2025-11-28
**Status**: Draft
**Input**: User description: "Je veux que tu merge les prix annuel et mensuel en 1 seul plan. Tu dois garder également le sytème de black friday. Ajoute simplement 2 cadre l'un a côté de l'autre avec le prix mensuel et annuel et mettant en avant l'annuel. Ne change pas l'aspect visuel des plans garde le comme ça. Et dans le deuxième plan, je veux que tu le nomme \"Sinra Specif-AI\". Et au lieu du bouton \"Try free\" tu mets un badge \"Coming Soon\", Rajoute dans la liste des features qui permette la spécification d'issues, capabilities, project,..  par AI."

## Clarifications

### Session 2025-11-28

- Q: Should Sinra Specif-AI be always visible with "Coming Soon" badge, or hidden until launch? → A: Always visible with "Coming Soon" badge (Option A)

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Pricing Comparison with Flexible Billing Options (Priority: P1)

When customers visit the pricing page, they want to understand both monthly and annual pricing options for the same plan. Currently, separate plan cards for monthly and annual create visual clutter and make cost comparison difficult. Customers should be able to see both billing periods side-by-side within a single plan card, with the annual option visually emphasized to encourage cost-effective commitment.

**Why this priority**: The pricing page is critical for conversion. Customers making purchasing decisions need to quickly understand their total cost investment and make cost-benefit decisions. A unified view with both billing options prominently displayed reduces decision friction and supports the sales narrative.

**Independent Test**: Can be tested by having 10+ prospective customers view the pricing page and complete these tasks: (1) identify the monthly cost of Sinra Pro, (2) identify the annual cost and total savings, (3) state which option is recommended. 75%+ success rate indicates clarity improvement.

**Acceptance Scenarios**:

1. **Given** a customer visits the pricing page, **When** they view the Sinra Pro plan card, **Then** they see two price frames side-by-side - one for monthly billing, one for annual billing
2. **Given** the annual and monthly frames are displayed together, **When** the customer scans the card, **Then** the annual option is visually emphasized (larger, bolder, or highlighted) to indicate it as the recommended choice
3. **Given** Black Friday promotion is active, **When** customers view the annual pricing frame, **Then** they see the promotional pricing with the original price struck through, the discounted price prominently displayed, and the promo code visible
4. **Given** the pricing frames are displayed on mobile, tablet, and desktop, **When** a customer views them at any breakpoint, **Then** both frames remain visible and the annual option remains emphasized

---

### User Story 2 - AI-Powered Issue and Capability Specification (Priority: P1)

The product roadmap includes an AI-powered feature called "Sinra Specif-AI" that helps teams automatically generate specifications for issues, capabilities, and projects based on AI analysis. This feature should be introduced on the pricing page as a new plan tier that sets customer expectations for upcoming functionality, with a "Coming Soon" status to manage expectations while building anticipation.

**Why this priority**: Market positioning requires communicating the differentiated AI-powered feature to prospects and customers. A clear roadmap with the upcoming feature increases perceived value and helps position Sinra as innovation-focused. The "Coming Soon" badge manages expectations while driving awareness.

**Independent Test**: Can be tested by asking 10+ customers whether they understand (1) what Sinra Specif-AI does, (2) when it will be available, (3) what value it provides. 80%+ clarity rate confirms messaging effectiveness.

**Acceptance Scenarios**:

1. **Given** a customer scrolls to the second plan on the pricing page, **When** they view the plan card, **Then** they see "Sinra Specif-AI" as the plan name instead of "Sinra Pro"
2. **Given** the Sinra Specif-AI plan is displayed, **When** customers examine the plan card, **Then** they see a "Coming Soon" badge instead of the "Try Free" or "Start Free Trial" call-to-action button
3. **Given** customers want to understand Specif-AI capabilities, **When** they view the features list, **Then** they see new features listed that describe AI-powered specification generation (issues, capabilities, projects, etc.)
4. **Given** multiple features describe AI specifications, **When** customers scan the list, **Then** the AI-specific features are visually distinct or grouped to indicate they're the differentiating capabilities of this plan

---

### User Story 3 - Visual Consistency and Layout Preservation (Priority: P1)

The product team has invested in a specific visual design language for pricing cards. Customers expect consistency across the site, and the design team has carefully calibrated visual hierarchy, spacing, and component styling. Any restructuring must preserve the existing visual aesthetic - the card layout, typography, color scheme, spacing, and interactive elements should remain unchanged, with modifications limited to content organization within cards.

**Why this priority**: Maintaining visual consistency reinforces brand identity and prevents user confusion from unexpected layout changes. Preserving the current design ensures that existing brand positioning and customer familiarity remain intact while adding new content.

**Independent Test**: Can be tested by comparing the redesigned pricing page against the current version using visual regression testing (pixel-perfect or visual diff tools) and design review to confirm: (1) no changes to card dimensions, spacing, or layout structure, (2) typography sizes and weights unchanged, (3) color palette consistent, (4) interactive element behavior preserved.

**Acceptance Scenarios**:

1. **Given** the pricing plans are redesigned, **When** the plan cards are displayed, **Then** the overall card dimensions, internal spacing, and grid layout remain identical to the current design
2. **Given** customers view the monthly and annual frames side-by-side, **When** they examine typography and spacing, **Then** font sizes, weights, and internal padding match the current card design
3. **Given** interactive elements (buttons, badges) are present, **When** customers interact with them, **Then** hover states, transitions, and visual feedback match the current behavior
4. **Given** color scheme and branding elements are reviewed, **When** the card is displayed on the page, **Then** primary colors, text colors, and background treatments are unchanged

---

### Edge Cases

- What happens when both monthly and annual frames are displayed on very small mobile screens (< 320px width)? Should one frame stack, or should both remain side-by-side with adjusted sizing?
- How should the annual option visual emphasis work on dark mode or high contrast displays?
- What happens when the Black Friday promotion ends but the pricing page is not immediately updated? Should the frames adapt dynamically or require content update?
- How should the pricing frames respond if a customer's currency preference changes (currently only EUR shown)?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Single plan card for Sinra Pro MUST display both monthly and annual pricing options in separate frames positioned side-by-side
- **FR-002**: Annual pricing frame MUST be visually emphasized compared to monthly frame (through size, color, contrast, or visual weight) to indicate it as the recommended choice
- **FR-003**: Black Friday promotion system MUST continue to work - when active, the annual frame MUST display promotional pricing with original price struck through, discounted price, and promo code visible
- **FR-004**: The second plan card MUST be renamed to "Sinra Specif-AI" to introduce the new AI-powered feature tier and MUST be visible on the pricing page at all times (not hidden or feature-flagged)
- **FR-005**: Sinra Specif-AI plan MUST display a "Coming Soon" badge instead of a "Try Free" or "Start Free Trial" call-to-action button to communicate its upcoming status while building market awareness
- **FR-006**: Sinra Specif-AI plan features list MUST include new AI-powered specification capabilities (e.g., "AI-powered issue specification", "Automated capability definition", "AI-generated project templates", "AI-assisted requirement generation")
- **FR-007**: Monthly and annual frames MUST maintain visual consistency with current card styling - no changes to font sizes, weights, card dimensions, or spacing
- **FR-008**: All existing plan features, descriptions, and metadata for Sinra Pro MUST be preserved and accessible in both billing options
- **FR-009**: Pricing data structure (YAML) MUST be updated to support the unified plan with dual pricing options while maintaining backward compatibility where possible
- **FR-010**: Responsive design MUST accommodate the side-by-side frames across mobile, tablet, and desktop breakpoints without breaking layout

### Key Entities

- **Pricing Plan Card**: Container displaying plan information, pricing, features, and call-to-action
- **Monthly Pricing Frame**: Separate visual container within Sinra Pro card showing monthly billing cost (€10/month)
- **Annual Pricing Frame**: Separate visual container within Sinra Pro card showing annual billing cost (€96/year standard, €60/year with Black Friday)
- **Sinra Pro Plan**: First-tier plan with unified pricing display
- **Sinra Specif-AI Plan**: Second-tier plan featuring AI-powered specification generation (Coming Soon)
- **Black Friday Promotion System**: Dynamic promotion that applies discounted pricing, strike-through of original price, and promo code display when active
- **"Coming Soon" Badge**: Status indicator replacing call-to-action for unreleased features

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Dual pricing frames are displayed side-by-side on desktop and tablet (> 768px width) with annual frame visually emphasized
- **SC-002**: 75%+ of test users (10+ participants) can quickly identify both monthly and annual costs for Sinra Pro without visual confusion
- **SC-003**: Black Friday promotion system continues to function correctly - when active, promotional pricing, strike-through, and promo code display as expected
- **SC-004**: Sinra Specif-AI plan is clearly labeled and includes "Coming Soon" badge in place of call-to-action
- **SC-005**: Sinra Specif-AI plan features list includes 4+ AI-related capabilities (issue specification, capability definition, project templates, requirement generation)
- **SC-006**: Visual regression test confirms no pixel-level changes to card dimensions, typography, colors, or spacing compared to current design
- **SC-007**: Responsive layout adapts appropriately to mobile screens - frames either stack vertically or remain side-by-side with adjusted sizing, without breaking layout
- **SC-008**: All existing features, descriptions, and metadata for both plans are accurately preserved and accessible in updated pricing structure

## Assumptions

- **Current Pricing Structure**: The site currently displays separate monthly and annual plan cards; merging them into a single unified card with dual frames is the intended implementation approach
- **Visual Emphasis Method**: The specific method for emphasizing the annual frame (size, color, border, background) will be determined during planning; spec assumes flexibility in emphasis technique
- **Black Friday System**: Current Black Friday promotion system is working and will continue to function; no changes to promotion logic are required
- **Data Structure Flexibility**: YAML structure can be modified to support dual pricing within a single plan definition while maintaining compatibility with existing rendering logic
- **Feature List Organization**: Sinra Specif-AI features can be sourced from product roadmap; spec assumes features are identified and ready for implementation
- **Responsive Strategy**: Frames will adapt to mobile breakpoints through CSS media queries; stacking or responsive resizing will be determined during planning phase
- **Brand Consistency**: Emphasis on visual consistency assumes no intentional design changes are planned beyond the content restructuring
- **Mobile Breakpoints**: Typical mobile-first approach will be used; desktop-first is not intended

## Out of Scope

- Changes to pricing values, tiers, or business logic (pricing remains as defined in current data)
- Changes to Sinra Pro feature list (features remain identical between monthly and annual)
- Changes to brand logo, colors, or overall site design system
- Integration with payment systems or billing platform changes
- Detailed feature specifications for Sinra Specif-AI (feature list only; implementation deferred to separate epic)
- Changes to other pricing page sections (hero section, FAQ, testimonials, etc.)
- Internationalization updates (French translations will be handled separately)
