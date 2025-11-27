# Feature Specification: Black Friday 50% Discount Promotion

**Feature Branch**: `001-blackfriday-promo`
**Created**: 2025-11-27
**Status**: Draft
**Input**: User description: "Implement Black Friday promotion with 50% annual pricing discount badge and sticky top banner notification"

## Overview

This feature introduces a time-limited Black Friday promotion offering 50% discount on annual pricing plans. The promotion will be highlighted through two complementary visual mechanisms: a discount badge on the annual pricing card and a sticky banner notification at the top of the site, ensuring maximum visibility without being intrusive.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Visitor discovers annual plan discount via pricing page (Priority: P1)

A visitor navigates to the pricing section and immediately sees that the annual plan offers 50% off, making the offer clear and compelling.

**Why this priority**: This is the primary conversion path. The pricing page is the main place where purchasing decisions are made, so prominently displaying the discount here drives the most direct impact on sales.

**Independent Test**: Can be fully tested by navigating to the pricing page and verifying the discount badge is visible on the annual pricing card, showing original price (strikethrough) and discounted price.

**Acceptance Scenarios**:

1. **Given** a visitor is on the pricing page, **When** the page loads, **Then** the annual pricing card displays a "50% OFF" badge with the original price crossed out and the new discounted price clearly shown
2. **Given** a visitor views the pricing page on desktop, **When** they look at the annual card, **Then** the badge is positioned prominently (e.g., top-right corner) and uses high-contrast colors (red/gold)
3. **Given** a visitor views the pricing page on mobile, **When** they look at the annual card, **Then** the badge is still visible and legible without crowding other pricing information
4. **Given** a visitor reads the pricing details, **When** they see the annual plan, **Then** they can clearly distinguish the discount from regular pricing (original price struck through, new price in bold)

---

### User Story 2 - New visitor learns about promotion via sticky banner (Priority: P1)

A first-time visitor landing on any page of the site sees a non-intrusive banner at the top informing them of the Black Friday 50% discount on annual plans, with a clear call-to-action to visit pricing.

**Why this priority**: The banner acts as a persistent reminder for visitors who don't immediately go to pricing, capturing attention across the entire site journey and guiding them toward the offer.

**Independent Test**: Can be fully tested by visiting any page on the site, confirming the banner appears at the top, and verifying the CTA link navigates to the pricing section.

**Acceptance Scenarios**:

1. **Given** a new visitor lands on any page (homepage, about, contact, etc.), **When** the page loads, **Then** a sticky banner appears at the top with "Black Friday: 50% off annual plans" messaging
2. **Given** the banner is visible, **When** the visitor scrolls the page, **Then** the banner remains fixed at the top of the viewport
3. **Given** the visitor reads the banner, **When** they click the "View Pricing" or similar CTA link, **Then** they are taken directly to the pricing section with the annual plan in view
4. **Given** the visitor has seen the banner, **When** they click a close button (X), **Then** the banner disappears from the page for the current session
5. **Given** the banner is displayed, **When** viewing on mobile, **Then** the banner text is concise and readable without horizontal scrolling

---

### User Story 3 - Pricing page shows discount calculation details (Priority: P2)

On the pricing page, visitors see not just the discount badge but also understand the value proposition: the original annual price, the discount percentage, and the final price they'll pay.

**Why this priority**: While P1 covers basic discount visibility, showing the calculation (original price → 50% off → final price) increases confidence in the deal and reduces purchase hesitation.

**Independent Test**: Can be fully tested by examining the annual pricing card to verify that original price, discount indicator, and final price are all clearly displayed and correctly calculated.

**Acceptance Scenarios**:

1. **Given** the pricing page is displayed, **When** viewing the annual plan card, **Then** three pieces of pricing information are visible: (a) original annual price with strikethrough, (b) "50% OFF" indicator, (c) final discounted price in large, bold text
2. **Given** a visitor reads the pricing card, **When** they see the prices, **Then** the math is accurate (e.g., if annual is €100, discounted is €50)
3. **Given** the annual plan is displayed, **When** other plans (monthly/quarterly if they exist) are also shown, **Then** the annual plan discount stands out visually compared to regular-priced options

---

### Edge Cases

- What happens if the discount period has ended (after Black Friday)? The badge and banner should be removed or replaced with updated messaging
- What if a user has closed the banner but returns to the site? Should the banner reappear on a new session or remain dismissed?
- How does the discount display on social media previews or email previews (if pricing is shared)?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The annual pricing card on the pricing page MUST display a discount badge showing "50% OFF" or similar messaging
- **FR-002**: The pricing card MUST show the original annual price with strikethrough formatting and the discounted price in prominent, bold text
- **FR-003**: A sticky banner MUST appear at the top of every page on the site with the message "Black Friday: 50% off annual plans" (or similar)
- **FR-004**: The sticky banner MUST remain fixed at the top of the viewport when the user scrolls
- **FR-005**: The sticky banner MUST include a clickable call-to-action (button or link) that navigates users to the pricing page
- **FR-006**: The sticky banner MUST include a close button (X) that allows users to dismiss it for the current session
- **FR-007**: The discount badge on the annual pricing card MUST use high-contrast colors (red, gold, or similar) to draw attention
- **FR-008**: Both the badge and banner MUST be responsive and display correctly on mobile, tablet, and desktop viewports
- **FR-009**: The banner message MUST be concise and readable on mobile devices without requiring horizontal scrolling
- **FR-010**: The discount calculation MUST be accurate and match any promotional terms

### Key Entities

- **Promotion**: Represents the Black Friday 50% off annual plan offer with properties: discount percentage (50%), applicable plan type (annual), start date, end date, messaging (badge text, banner text)
- **Pricing Card**: Displays pricing information including original price, discounted price, discount badge, and plan features

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of visitors to the pricing page see the discount badge on the annual plan card (no broken images or missing styling)
- **SC-002**: 95% of visitors who land on the site see the sticky banner appear within 1 second of page load
- **SC-003**: Conversion rate on annual plan increases by at least 25% compared to pre-promotion baseline
- **SC-004**: Click-through rate on the banner's CTA link is at least 15% of users who see the banner
- **SC-005**: Users can dismiss the banner and complete their browsing without UI/UX disruptions
- **SC-006**: Pricing page load time remains under 2 seconds with the new badge and styling added
- **SC-007**: No layout shift or visual regression occurs on pricing page when discount elements are displayed

## Assumptions

- The promotion runs for a fixed duration (Black Friday period); no need for dynamic date-based logic during this implementation
- The discount is a flat 50% off the annual plan with no additional conditions or code requirements
- Styling will follow existing site design patterns and color scheme
- Mobile responsiveness uses existing breakpoints defined in site CSS
- Banner dismissal is session-based (reappears on next page load/visit) - no need for persistent cookie storage
- The annual plan exists and is the only plan eligible for this promotion

## Notes

- Ensure the banner doesn't interfere with header navigation or other critical UI elements
- Test banner visibility across different browsers and devices
- Consider accessibility: badge and banner text must meet WCAG contrast and readability standards
