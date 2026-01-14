# Phase 0: Research & Clarifications

**Feature**: Black Friday 50% Discount Promotion
**Status**: All unknowns resolved; no NEEDS CLARIFICATION markers remain in spec

## Research Findings

### 1. Promotion Messaging & Tone

**Decision**: Messaging follows "Pragmatisme Élégant" brand voice - concrete, solution-focused, no hyperbole

**Rationale**: Feature spec established clear messaging: "50% OFF" on annual plans, "Black Friday: 50% off annual plans" for banner. This is specific, verifiable, and operationally grounded. No marketing superlatives.

**Alternatives Considered**:
- Generic "Special Offer" → Too vague, lacks urgency
- "Limited Time Deal" → Less concrete than "Black Friday"
- "Seasonal Promotion" → Could confuse with other campaigns

### 2. Multilingual Implementation Pattern

**Decision**: Use YAML-based translations in `_data/en/` and `_data/fr/`, accessed via Liquid `{{ site.data[page.lang].promotion.* }}`

**Rationale**: Existing site architecture uses jekyll-polyglot with YAML translations. This feature must follow the same pattern for consistency and maintainability. All site messaging already uses this structure.

**Alternatives Considered**:
- Hardcoded strings in HTML → Violates Constitution Principle III (Multilingual-First)
- Markdown front matter → Harder to reuse across pages
- JavaScript string constants → Loss of Jekyll build-time optimization

### 3. Banner Dismissal Behavior

**Decision**: Session-based dismissal (disappears for current page session, reappears on next visit)

**Rationale**: Spec assumes "no persistent cookie storage." Session-based approach is simplest, meets requirement (banner doesn't nag user during single visit), and aligns with minimal JS footprint constraint.

**Alternatives Considered**:
- Persistent localStorage → Requires cookie consent/privacy notice
- URL parameter tracking → More complex, fragile
- No dismissal option → Poor UX; user can't eliminate banner

### 4. Discount Display on Pricing Page

**Decision**: Original price (strikethrough) + "50% OFF" badge + bold discounted price

**Rationale**: Shows clear value proposition: original amount → reduction → final cost. Strikethrough creates visual hierarchy without needing additional icons or explanations. Matches e-commerce UX best practices.

**Alternatives Considered**:
- Badge only (no strikethrough) → Doesn't communicate original price, harder to assess discount
- Percentage badge only ("Save 50%") → Less concrete than showing both prices
- Tooltip on hover → Accessibility issue on mobile; requires JS

### 5. CSS Implementation (No SCSS)

**Decision**: Plain CSS for banner and badge styling; no preprocessor

**Rationale**: Constitution Principle VII mandates "Plain CSS (no SCSS/preprocessor)." Feature is low-complexity; no nested selectors or mixins needed. Keep build pipeline minimal.

**Alternatives Considered**:
- SCSS/SASS → Violates architecture simplicity; adds gem dependency
- CSS-in-JS → Incompatible with static Jekyll site; no JavaScript runtime

### 6. Banner Positioning & Layout Impact

**Decision**: Fixed positioning at `position: fixed; top: 0; z-index: high` with padding-top adjustment to body content

**Rationale**: "sticky banner MUST remain fixed at the top of the viewport" (FR-004). Fixed positioning ensures consistency across scroll. Z-index prevents overlap with header navigation.

**Alternatives Considered**:
- `position: sticky` → Requires scroll context; less reliable across browsers
- Overlay without body adjustment → Would hide header navigation
- Bottom banner → Conflicts with CTA placement and footer navigation

### 7. Responsive Design Breakpoints

**Decision**: Reuse existing site CSS breakpoints; no new breakpoints introduced

**Rationale**: Site already has established mobile/tablet/desktop breakpoints in theme.css. Feature should inherit these for consistency and simplicity.

**Alternatives Considered**:
- Feature-specific breakpoints → Maintenance burden; CSS fragmentation
- Mobile-first new breakpoints → Duplicate existing infrastructure

## Conclusion

No technical unknowns remain. All design decisions are grounded in:
- Constitution compliance (7/7 principles)
- Existing site architecture (Jekyll, YAML, Liquid)
- UX best practices (visibility, accessibility, simplicity)
- Performance constraints (<2s load, minimal JS)

Ready for Phase 1 Design & Contracts.
