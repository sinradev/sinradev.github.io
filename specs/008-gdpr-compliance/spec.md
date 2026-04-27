# Feature Specification: GDPR Compliance

**Feature Branch**: `008-gdpr-compliance`  
**Created**: 2026-04-27  
**Status**: Draft  
**Input**: User description: "je veux que le site web soit entierement compatible RGPD."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Visitor browses the site with no third-party tracking (Priority: P1)

A first-time visitor lands on sinra.dev. No analytics service, no tracking script, and no third-party font CDN processes their data. The site operates with zero non-essential external data flows.

**Why this priority**: Eliminating analytics entirely is the most privacy-compliant approach - no consent needed, no data processed, no violation risk.

**Independent Test**: Load any page in DevTools Network tab. Verify zero requests to external analytics, tracking, or font CDN domains.

**Acceptance Scenarios**:

1. **Given** a visitor loading any page, **When** the page fully loads, **Then** no requests are made to cloudflareinsights.com, fonts.googleapis.com, or any tracking/analytics endpoint
2. **Given** any page of the site, **When** inspected by a GDPR auditor, **Then** no analytics scripts or cookies are present

---

### User Story 2 - Visitor reads the privacy policy (Priority: P1)

A visitor wants to understand how Sinra handles their data. They find a clear, accessible privacy policy page available in all supported languages (EN, FR, ES). The policy explains what data is collected, why, how long it is kept, and how to exercise their rights.

**Why this priority**: Legally required by GDPR Article 13/14. Mandatory foundation for all other compliance elements.

**Independent Test**: Navigate to the privacy policy page in each language. Verify all required GDPR information sections are present and readable.

**Acceptance Scenarios**:

1. **Given** a visitor on any page, **When** they click the privacy policy link in the footer, **Then** they see the privacy policy in their current language
2. **Given** a visitor reading the privacy policy, **When** they review the content, **Then** it includes: data controller identity, types of data collected, purposes, legal bases, retention periods, third-party recipients, user rights, and contact information
3. **Given** a visitor browsing in French, **When** they access the privacy policy, **Then** it is displayed in French with proper legal terminology

---

### User Story 3 - Visitor reads legal notices / Mentions legales (Priority: P1)

A visitor (or regulatory authority) wants to know who operates the website. They find a "Mentions legales" / "Legal Notices" page containing all information required by French law (LCEN - Loi pour la Confiance dans l'Economie Numerique).

**Why this priority**: Mandatory under French law for any website operated by a French company. Sinra is a French product.

**Independent Test**: Navigate to the legal notices page. Verify all legally required fields are present (company name, address, director, hosting provider, etc.).

**Acceptance Scenarios**:

1. **Given** a visitor on any page, **When** they click the legal notices link in the footer, **Then** they see the legal notices page in their current language
2. **Given** a regulatory authority reviewing the site, **When** they check legal notices, **Then** all LCEN-required information is present: company name, legal form, registered address, capital, RCS number, director name, hosting provider details

---

### User Story 4 - Visitor submits contact form with informed consent (Priority: P2)

A visitor wants to contact Sinra via the contact form. Before submitting personal data (name, email, message), they are informed about how this data will be processed and must actively consent.

**Why this priority**: Contact form collects personal data directly. GDPR requires informed, explicit consent for data collection.

**Independent Test**: Fill and submit the contact form. Verify consent checkbox is required, privacy policy link is visible, and form cannot be submitted without consent.

**Acceptance Scenarios**:

1. **Given** a visitor on the contact page, **When** they view the form, **Then** a consent checkbox with a link to the privacy policy is visible
2. **Given** a visitor who has not checked the consent box, **When** they try to submit the form, **Then** submission is blocked with a clear message
3. **Given** a visitor who checks consent and fills all required fields, **When** they submit, **Then** the form is sent successfully

---

### User Story 5 - Website does not leak visitor IP to third-party services unnecessarily (Priority: P2)

A visitor browses the site. Their IP address is not sent to non-essential third-party services (like Google) without consent. Fonts and other assets that can be self-hosted are served from the same domain.

**Why this priority**: Loading Google Fonts from googleapis.com sends visitor IPs to Google servers. EU courts (notably Austrian DPA, German courts 2022) have ruled this violates GDPR when done without consent.

**Independent Test**: Load any page with browser DevTools Network tab. Verify no requests to fonts.googleapis.com or fonts.gstatic.com. All font files served from the site domain.

**Acceptance Scenarios**:

1. **Given** a visitor loading any page, **When** the page renders, **Then** no HTTP requests are made to fonts.googleapis.com or fonts.gstatic.com
2. **Given** a visitor loading any page, **When** fonts are rendered, **Then** the Inter font is loaded from the same domain as the website

---

### Edge Cases

- What happens when a visitor has JavaScript disabled? Privacy policy and legal pages remain accessible as static content. No tracking or analytics exists to block.
- What happens when contact form backend (app.sinra.dev) is unavailable? Form submission fails gracefully with a user-visible error message.
- How does the consent checkbox on the contact form behave on mobile? It must be tappable and clearly labeled on small screens.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Site MUST remove the Cloudflare Web Analytics script entirely from all pages
- **FR-002**: Site MUST self-host all font files instead of loading from third-party CDNs (Google Fonts)
- **FR-003**: Site MUST include a Privacy Policy page available in EN, FR, and ES
- **FR-004**: Privacy Policy MUST contain all GDPR Article 13/14 required information: data controller identity, data types collected, processing purposes, legal bases, retention periods (contact form data: 3 years from last contact), third-party recipients, data subject rights (access, rectification, erasure, portability, objection), DPA complaint procedure, and contact details
- **FR-005**: Site MUST include a Legal Notices (Mentions legales) page available in EN, FR, and ES
- **FR-006**: Legal Notices MUST contain all LCEN-required information: company identity, legal form, registered address, share capital, RCS registration, publication director, and hosting provider details [NEEDS CLARIFICATION: company legal details needed - registered name, address, RCS number, capital, director name, hosting provider name and address]
- **FR-007**: Contact form MUST include a consent checkbox linked to the privacy policy, required before submission
- **FR-008**: Footer MUST include links to Privacy Policy and Legal Notices pages in all languages

### Key Entities

- **Consent Preference**: Visitor choice (accept/refuse analytics), storage mechanism, expiration period
- **Privacy Policy**: Multilingual legal document describing data processing practices
- **Legal Notices**: Multilingual legal document with company/operator identification
- **Contact Form Submission**: Name, email, subject, message - processed by app.sinra.dev, retained 3 years from last contact

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Zero HTTP requests to any analytics or third-party tracking endpoint on any page
- **SC-002**: Zero HTTP requests to third-party font services (fonts.googleapis.com, fonts.gstatic.com) on any page
- **SC-003**: Privacy Policy page accessible and complete in all 3 languages (EN, FR, ES)
- **SC-004**: Legal Notices page accessible and complete in all 3 languages (EN, FR, ES)
- **SC-005**: Contact form cannot be submitted without consent checkbox checked
- **SC-006**: All legal pages reachable from footer on every page of the site

## Assumptions

- No analytics service will be present on the site after this feature (Cloudflare Web Analytics removed)
- The privacy policy and legal notices will be created as Hugo content pages, following existing multilingual patterns
- Font files (Inter) will be downloaded and placed in the static assets directory
- The contact form backend (app.sinra.dev) already handles data appropriately server-side; this spec covers the frontend consent UX only
- Sinra operates as a French company (SAS/SARL) - exact legal details to be provided by the user

## Clarifications

### Session 2026-04-27

- Q: Should Cloudflare Web Analytics require consent or run under legitimate interest? → A: Remove Cloudflare Analytics entirely - no analytics on the site
- Q: Company legal details for Mentions legales (name, address, RCS, capital, director, host) → A: Deferred - placeholders to be filled during implementation
- Q: Data retention period for contact form submissions → A: 3 years from last contact (French commercial correspondence standard)
