# Sinra-Website Constitution

## Core Principles

### I. Pragmatisme Élégant (Elegant Pragmatism)
All content and design must reflect confidence without aggression, professionalism without stiffness, operational grounding, and implicit rather than explicit communication. Solutions-focused, not problem-focused. Brand voice is our north star—every feature, page, and word should reinforce this positioning. Reference: Notion, Linear, GitLab (NOT Slack, Atlassian, Figma).

### II. Specification-Driven Development
Every feature starts with a clear specification defining WHAT and WHY before discussing HOW. Specs must answer: What problem does this solve? Who benefits? What are acceptance criteria? How does it align with Sinra's V-Model + Agile hybrid positioning? Vague requirements are unacceptable.

### III. Multilingual-First Architecture
All content must support English (en) and French (fr) equally. YAML translations in `_data/en/` and `_data/fr/` must be synchronized and identical in structure. Liquid templating via `{{ site.data[page.lang].section.key }}` is mandatory. No hardcoded strings. Cultural adaptations welcome but functionally equivalent.

### IV. V-Model + Agile Hybrid Methodology
Sinra embodies hybrid methodology in its core. Content and features must reflect this dual approach: structured planning (V-Model discipline) + execution flexibility (Agile responsiveness). Never reduce to pure Agile or pure Waterfall terminology. Use Sinra terminology: issues, capabilities, releases, cycles (NOT user stories, epics, sprints).

### V. Quality Through Manual Testing & Browser Validation
No automated test framework. Validation happens via:
- `jekyll serve` local testing with visual inspection
- Cross-browser compatibility (Chrome, Firefox, Safari)
- Multilingual consistency check (EN/FR side-by-side)
- Git conventions: conventional commits, feature branches, clean PRs
- Tone consistency against TONE_CONSISTENCY_REPORT.md baselines

### VI. Operational Grounding Over Hype
Every feature description, testimonial, case study, and marketing claim must be grounded in operational reality. Avoid: "revolutionary," "game-changing," "disrupt," "kill," "transformative." Embrace: specific benefits, measurable outcomes, real examples, team-focused language. Show confidence through substance, not superlatives.

### VII. Jekyll Static Site Simplicity
Technology stack is minimal by design:
- Jekyll 4.3.4 for static generation
- Ruby 3.4.5 (managed via Mise)
- Plain CSS (no SCSS/preprocessor)
- Vanilla JavaScript (no build tools, transpilation, or frameworks)
- Liquid templating only
- No asset minification or versioning
- YAML for all data and translations

NO linting, NO formatters, NO testing frameworks, NO complex build pipelines.

## Content Standards

### Brand Voice Consistency
- **Tone Baseline:** Pragmatisme Élégant (documented in TONE_CONSISTENCY_REPORT.md)
- **Vocabulary:** Technical but accessible (Kanban, Hotwire, polymorphic comments, stage gates—yes; "disruptive," "innovative," "cutting-edge"—no)
- **Structure:** Problem → Specific Solution → Measurable Result
- **Evidence:** Real examples, specific metrics, grounded testimonials
- **Confidence:** Stated as fact, not aspiration ("Teams ship predictably" not "Teams can ship predictably")

### Multilingual Content Parity
- All pages must exist in EN and FR versions
- YAML keys must match between `/data/en/` and `/data/fr/`
- French translations must maintain English tone/meaning (not literal translation)
- Blog categories, case studies, features—synchronized across languages
- Test: `jekyll serve` with both language parameters; visually inspect both versions

### Feature Requirements
Every feature must include:
1. **Clear specification:** What problem? Who benefits? Why now?
2. **Acceptance criteria:** How will we know it works?
3. **Multilingual plan:** How does this translate to FR?
4. **Tone alignment:** Does this reinforce Pragmatisme Élégant?
5. **Testing approach:** Manual testing steps (via jekyll serve + browser)
6. **Git workflow:** Feature branch, conventional commit, PR

## Development Workflow

### Spec-Kit Integration
This project uses Spec-Kit for spec-driven development:
1. `/speckit.specify` - Define requirements (WHAT + WHY)
2. `/speckit.plan` - Architecture and approach (HOW + STRUCTURE)
3. `/speckit.clarify` - Resolve ambiguities before planning (optional but recommended)
4. `/speckit.tasks` - Break into actionable steps
5. `/speckit.implement` - Execute with Claude Code

### Git Conventions
- **Branches:** `feature/[feature-name]`, `fix/[bug-name]`, `docs/[doc-name]`
- **Commits:** Conventional format with emoji (🎨 styling, 🐛 fix, ✨ feature, 📝 docs, etc.)
- **Messages:** Clear, descriptive, reference Sinra terminology when applicable
- **PRs:** Describe changes, link to spec if available, note multilingual updates
- **Merges:** Squash for cleanliness; keep main branch production-ready

### Testing & Validation
1. **Local Build:** `bundle exec jekyll build` → no errors
2. **Development Server:** `bundle exec jekyll serve` → visual inspection
3. **Multilingual Check:** Test both `/en/` and `/fr/` routes
4. **Tone Review:** Does this match TONE_CONSISTENCY_REPORT.md?
5. **Cross-Browser:** Chrome, Firefox, Safari (at minimum)
6. **Mobile Responsiveness:** Test on mobile viewport (if applicable)
7. **Links & Assets:** All internal links working, images loading

### Common Commands
```bash
mise use ruby@3.4.5           # Activate Ruby version
bundle install               # Install dependencies (after Gemfile changes)
bundle exec jekyll serve     # Development server (http://localhost:4000)
bundle exec jekyll serve --drafts  # Include draft posts
bundle exec jekyll build     # Production build → _site/
```

## Dependencies & Tools

### Ruby Stack (REQUIRED)
- Ruby 3.4.5 (via Mise)
- Jekyll 4.3.4
- Gems: jekyll-polyglot, jekyll-feed, jekyll-paginate, jekyll-archives, jekyll-sitemap
- Bundle for dependency management

### External Tools (OPTIONAL)
- Spec-Kit (specify-cli) for spec-driven workflow
- Git for version control
- Browser dev tools for testing

### NO Additional Tools
- No ESLint, Prettier, RuboCop, StyleLint
- No build tools (webpack, rollup, parcel)
- No test frameworks (RSpec, Jasmine, Jest)
- No CI/CD pipelines (this is manual)

## Sinra Terminology

When discussing Sinra features or concepts, use ONLY Sinra terminology:
- **Issues** — Individual work items, bugs, tasks (NOT "user stories")
- **Capabilities** — Higher-level features/initiatives (NOT "epics")
- **Releases** — Product versions (NOT "increments")
- **Cycles** — Time-boxed work periods (NOT "sprints")
- **Pages** — Documentation and knowledge base
- **Projects, Teams, Roles, Labels** — Organization structures
- **Tests/Testings** — Quality assurance and testing management

## Governance

This Constitution supersedes all other development practices and guidelines. All features, content, and code changes must comply with these principles.

**Amendments** require:
1. Documentation of rationale
2. Impact assessment (scope of change)
3. Migration plan if existing work needs updating
4. Team acknowledgment

**Compliance Verification:**
- Every PR includes a checklist: "Constitution compliance verified?"
- Code reviews assess adherence to principles
- Tone consistency against TONE_CONSISTENCY_REPORT.md
- Multilingual parity verified before merge

**When in Doubt:**
- Refer to TONE_CONSISTENCY_REPORT.md for brand voice
- Refer to CLAUDE.md for development guidance
- Refer to V-Model vs Agile blog post for methodology examples
- Ask in `/speckit.clarify` before planning

---

**Version**: 1.0 | **Ratified**: 2025-11-14 | **Last Amended**: 2025-11-14

This Constitution was established as the foundational governance document for Sinra-website development with Spec-Kit, ensuring consistent, high-quality, operationally-grounded development aligned with Sinra's brand and methodology.
