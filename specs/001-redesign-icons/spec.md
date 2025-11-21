# Feature Specification: Redesign Sinra Icons

**Feature Branch**: `001-redesign-icons`
**Created**: 2025-11-18
**Status**: Draft
**Input**: User description: "Je veux des icons présentes sur le site qui réprésente le texte associés soient retravailler. Aujourd'hui elles ne sont pas très précises dans le dessin. J'aimerai que ces icons soient design, sobre et représente efficacement le texte associé."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Marketing Team Improves Homepage Visual Clarity (Priority: P1)

When marketing materials promote Sinra's features on the homepage, visitors should immediately understand what each feature does from the icon alone, without needing to read the text. The current feature icons (Rich Text Editor, Progress Tracking, Collaboration, Release Planning, Multi-App Workload, Custom Workflows, Carry-Over Issues) are imprecise and create confusion about what capabilities they represent.

**Why this priority**: These icons appear above the fold on the homepage and are the first visual impression of Sinra's capabilities. Imprecise icons undermine the professional brand positioning and confuse potential customers about core features.

**Independent Test**: Can be fully tested by having 10+ users view the redesigned feature icons without text labels and accurately describe what capability each icon represents (75%+ accuracy target).

**Acceptance Scenarios**:

1. **Given** a visitor lands on the homepage, **When** they see the 7 feature icons, **Then** each icon visually communicates its corresponding feature (Rich Text Editor shows writing/editing, Progress Tracking shows measurement/advancement, etc.)
2. **Given** the feature icons are displayed on mobile, tablet, and desktop, **When** a user views them at any size, **Then** the core concept remains immediately recognizable
3. **Given** the feature section needs to work without JavaScript, **When** icons are loaded, **Then** they render as static SVGs with semantic alt text

---

### User Story 2 - Content Pages Strengthen Value Proposition with Benefit Icons (Priority: P1)

The About page explains Sinra's unique value through three core benefits: Visibility (clear planning), Capacity (global vision/resource allocation), and Quality Control (enhanced deployment confidence). Current benefit icons (Visibility, Capacity, Quality Control, Release Management, Deployment Checklist, Go-Live Confidence) don't clearly represent these abstract concepts, weakening the persuasive impact.

**Why this priority**: These icons support the core value proposition on the About page. Weak visual communication fails to reinforce messaging and reduces conversion effectiveness.

**Independent Test**: Can be fully tested by having 10+ users identify which benefit each redesigned icon represents from visual design alone (75%+ accuracy target).

**Acceptance Scenarios**:

1. **Given** a visitor reads the About page benefits section, **When** they see the benefit icons, **Then** Visibility icon suggests clarity/transparency, Capacity icon suggests scope/expansion, and Quality Control icon suggests confidence/excellence
2. **Given** the benefits are presented side-by-side, **When** a user scans the section, **Then** the icons form a cohesive visual narrative around Sinra's three pillars
3. **Given** a user returns to the site in a week, **When** they see the benefit icons again, **Then** they still recognize them as representing the same concepts

---

### User Story 3 - Technical Differentiation is Clearly Communicated Through Methodology Icons (Priority: P2)

The About page positions Sinra as a fundamentally different approach compared to Agile and Waterfall. Current methodology comparison icons (Agile, Waterfall) don't effectively distinguish how Sinra differs or why this matters.

**Why this priority**: These icons support the brand repositioning narrative. While important for differentiating Sinra, they appear after the hero section and are less critical for initial engagement than homepage features.

**Independent Test**: Can be fully tested by presenting methodology icons to 8+ users familiar with project management and verifying they understand the visual distinction being made (70%+ accuracy target).

**Acceptance Scenarios**:

1. **Given** a visitor views the methodology comparison section, **When** they see icons representing Agile vs Waterfall vs Sinra's approach, **Then** the visual treatment communicates why Sinra is a distinct third way
2. **Given** the methodology comparison discusses challenges, **When** icons are paired with problem statements, **Then** the visual hierarchy makes it clear why Sinra's approach resolves these issues
3. **Given** a user reads the detailed comparison text, **When** icons reinforce the written message, **Then** the visual + text combination creates stronger understanding than text alone

---

### User Story 4 - Interactive Elements Maintain Functionality and Clarity (Priority: P2)

Interactive icons (checkmarks in pricing, chevron dropdowns in FAQ, send button in contact) must remain functionally clear while gaining improved visual precision.

**Why this priority**: These icons support user interactions (pricing selection, FAQ navigation, form submission). While important for usability, their primary function is established and recognizable - improvement is about refinement rather than fundamental redesign.

**Independent Test**: Can be fully tested by users completing interactions (selecting a pricing tier, opening FAQ items, submitting a contact form) without confusion about interactive affordances.

**Acceptance Scenarios**:

1. **Given** a user views a pricing table with checkmarks, **When** they see the redesigned checkmark icon, **Then** it's immediately recognizable as indicating "included feature"
2. **Given** a user encounters a collapsed FAQ item, **When** they see the chevron icon, **Then** it's clear this can be expanded/collapsed
3. **Given** a user hovers over the contact form submit button, **When** they see the send icon, **Then** it clearly indicates form submission action

---

### Edge Cases

- What happens when icons are displayed at very small sizes (favicon at 16x16px, PNG icons at 32x32px)?
- How do icons render across different browsers and devices with varying SVG support levels?
- What happens if an icon SVG fails to load - do graceful fallbacks exist (alt text is sufficient)?
- How should icons adapt if Sinra's color scheme changes in the future?
- What happens when icons are printed (grayscale, resolution concerns)?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Each redesigned icon MUST be a clean, precise SVG file that clearly represents its associated concept/feature without ambiguity
- **FR-002**: All 15 icons MUST maintain visual coherence through consistent stroke weight, proportion alignment, and design language while allowing flexibility for concept clarity
- **FR-003**: Feature icons (7 total) MUST be immediately recognizable at sizes from 60px to 300px on desktop, tablet, and mobile
- **FR-004**: Benefit icons (6 total) MUST effectively communicate abstract concepts (Visibility, Capacity, Quality) through visual metaphor and design
- **FR-005**: Methodology icons (2 total) MUST visually distinguish Agile and Waterfall approaches
- **FR-006**: Interactive icons (checkmarks, chevrons, send button) MUST maintain their functional affordances while improving visual precision
- **FR-007**: All icons MUST work with both light and dark backgrounds without modification (use black stroke with transparent fill as default)
- **FR-008**: SVG files MUST be optimized for web (minimal path complexity, no unnecessary groups, proper viewBox attributes)
- **FR-009**: Each icon MUST have appropriate semantic alt text when used with `<img>` tags or aria-labels for inline SVGs
- **FR-010**: Icon naming convention MUST remain consistent with current pattern (feature-name.svg, benefit-concept.svg, etc.)

### Key Entities

- **Feature Icons**: Visual representations of Sinra capabilities (Rich Text Editor, Progress Tracking, Collaboration, Release Planning, Multi-App Workload, Custom Workflows, Carry-Over Issues)
- **Benefit Icons**: Visual representations of value propositions (Visibility, Capacity, Quality Control, Release Management, Deployment Checklist, Go-Live Confidence)
- **Methodology Icons**: Visual representations of project management approaches (Agile, Waterfall)
- **Interactive Icons**: Icons providing affordance for user interactions (Check mark, Chevron, Send/Paper Plane)
- **Icon System**: The unified design language, stroke weights, proportions, and design principles governing all icons

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 75%+ of test users (10+ participants) correctly identify what each feature icon represents without reading text labels
- **SC-002**: 75%+ of test users (10+ participants) correctly identify what each benefit icon represents when given the concept name
- **SC-003**: Icon clarity improves measurably (visual audit confirms: precise geometry, consistent stroke weight, unambiguous representation of concepts)
- **SC-004**: All 15 icons remain recognizable at minimum display size of 60px × 60px with no loss of visual clarity
- **SC-005**: 100% of interactive icons (checkmark, chevron, send) maintain their functional affordances in original context
- **SC-006**: Visual coherence audit confirms consistent stroke weight variance is ≤1.5px across all icons (measuring primary stroke variations)
- **SC-007**: All SVG files are optimized to ≤5KB per file without quality loss (measured post-optimization)
- **SC-008**: Design system documentation is completed listing stroke weight, proportion rules, and design principles for future icon creation

## Design System Requirements

### Style Principles

- **Design Philosophy**: Sobering and professional aesthetic reflecting Sinra's modern, sophisticated positioning
- **Visual Approach**: Combination of clean line work and geometric shapes as preferred by user (flexible complexity based on concept)
- **Stroke Weight Strategy**: Consistent primary stroke weight (2px recommended) with flexible adjustments per icon for visual clarity
- **Proportion Alignment**: Icons designed on consistent 64px canvas with optical centering for visual balance

### Mandatory Features

- **Semantic Accuracy**: Each icon must accurately represent its concept without ambiguity or multiple interpretations
- **Scalability**: Icons must remain clear from 32px (favicon/small) to 300px (hero/large displays)
- **Platform Compatibility**: SVG format compatible with modern browsers; PNG fallbacks available for legacy support
- **Color Flexibility**: Designed to work with dynamic colors (currentColor support) for dark/light theme implementation
- **Accessibility**: All icons include proper alt text and semantic markup for screen readers

## Assumptions

- **Existing Platform**: Icons will maintain same integration approach (external SVGs via `<img>` tags for static content, inline SVGs for interactive elements)
- **User Base**: Target audience understands modern SaaS concepts (features, capabilities, workflows, releases)
- **Tech Stack**: No changes to Jekyll-based static site generation; SVG optimization tools available (SVGO or similar)
- **Timeline**: Icon redesign is non-blocking for other content updates; can be deployed independently
- **Scope**: Interactive icons (checkmark, chevron, send) may require only visual refinement rather than complete redesign, based on their established functionality
- **Testing**: Visual validation through user feedback and expert design review; formal A/B testing not required
- **Backwards Compatibility**: Old icon files can be deprecated; no need to maintain parallel versions

## Out of Scope

- Redesign of brand logo (`sinra-logo.svg`, `sinra-hexa.png`, `sinra-square.png`)
- Changes to competitor logos or client logos in `/assets/images/logos/`
- Favicon redesign (separate icon system requiring multiple formats)
- Custom diagram/workflow SVGs (large educational graphics)
- Product screenshots or UI mockups
- Icon animation or interactivity beyond existing states (open/closed, hover effects)

## Dependencies

- Design tool access (Figma, Adobe XD, or similar) for creating and exporting SVG files
- SVG optimization tooling (SVGO CLI or online optimizer)
- Access to test users or stakeholder feedback for validation
- Current icon files in `/assets/images/` directory for reference during redesign
