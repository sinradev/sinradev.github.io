# Implementation Plan: Add Spanish Language Support

**Branch**: `006-spanish-language` | **Date**: 2025-12-10 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/006-spanish-language/spec.md`

## Summary

Add Spanish ("es") as a third supported language for the Sinra website, including all static pages and blog posts. This follows the existing EN/FR multilingual pattern using Jekyll-polyglot. Translations will be AI-generated and reviewed for quality. The implementation requires creating Spanish data files, page templates, and blog post translations.

## Technical Context

**Language/Version**: Ruby 3.4.5, Jekyll 4.3.4
**Primary Dependencies**: jekyll-polyglot (multilingual support), existing YAML/Liquid patterns
**Storage**: N/A (static site, file-based)
**Testing**: Manual browser testing via `bundle exec jekyll serve`
**Target Platform**: Web (static site hosted at sinra.dev)
**Project Type**: Static website (Jekyll)
**Performance Goals**: Lighthouse scores ≥90 (per constitution)
**Constraints**: No new gems, no build tool changes, follow existing EN/FR patterns
**Scale/Scope**: 14 YAML data files, 15 page templates, 5 blog posts

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Gate | Status | Notes |
|------|--------|-------|
| Use DaisyUI Dim theme colors | ✅ Pass | No CSS changes required - using existing templates |
| Plain CSS only (no SCSS) | ✅ Pass | No CSS changes required |
| Multilingual via YAML data files | ✅ Pass | Creating `_data/es/` following EN/FR pattern |
| No hardcoded strings in templates | ✅ Pass | Using Liquid templating `site.data[page.lang]` |
| Test EN/FR/ES rendering | 🔲 Required | Post-implementation verification |
| Lighthouse CI ≥90 scores | 🔲 Required | Post-implementation verification |
| No new gems or build tools | ✅ Pass | Using existing jekyll-polyglot |

**Gate Status**: All pre-implementation gates pass. Post-implementation gates require manual verification.

## Project Structure

### Documentation (this feature)

```text
specs/006-spanish-language/
├── spec.md              # Feature specification
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
└── tasks.md             # Phase 2 output (via /speckit.tasks)
```

### Source Code (repository root)

```text
_config.yml              # Add "es" to languages array

_data/
├── en/                  # Existing English translations (14 files)
├── fr/                  # Existing French translations (14 files)
└── es/                  # NEW: Spanish translations (14 files)
    ├── blog_categories.yml
    ├── case_studies.yml
    ├── comparisons.yml
    ├── contact_faq.yml
    ├── footer.yml
    ├── index_features.yml
    ├── index_sections.yml
    ├── navigation.yml
    ├── pricing.yml
    ├── pricing_faq.yml
    ├── promotion.yml
    ├── strings.yml
    ├── testimonials.yml
    └── trusted_clients.yml

_pages/                  # NEW: Spanish page templates (15 files)
├── about.es.html
├── blog.es.html
├── blog-category-*.es.html (6 files)
├── compare.es.html
├── compare-*.es.html (3 files)
├── contact.es.html
├── contact-success.es.html
└── pricing.es.html

_posts/                  # NEW: Spanish blog posts (5 files)
├── 2024-11-13-vmodel-vs-agile-choose-both.es.md
├── 2025-11-21-why-we-abandoned-sprints-for-cycles.es.md
├── 2025-11-26-from-issue-to-release.es.md
├── 2025-12-01-release-driven-development.es.md
└── 2025-12-03-tools-flexibility-trap.es.md
```

**Structure Decision**: Following existing Jekyll multilingual architecture. No new directories beyond `_data/es/`. Spanish pages use `.es.html` suffix, blog posts use `.es.md` suffix.

## Complexity Tracking

No complexity violations. This feature follows existing patterns exactly.

## Implementation Phases

### Phase 0: Configuration

1. Update `_config.yml` to add "es" to languages array: `languages: ["en", "fr", "es"]`
2. Jekyll-polyglot will automatically:
   - Generate /es/ URL prefix for Spanish pages
   - Include "ES" option in language selector dropdown
   - Route Spanish pages correctly

### Phase 1: Data Files (14 files)

Create `_data/es/` directory with AI-generated Spanish translations of all English YAML files:

| File | Purpose | Approx Size |
|------|---------|-------------|
| strings.yml | UI strings, labels, meta descriptions | ~10KB |
| navigation.yml | Menu items | ~0.4KB |
| index_features.yml | Homepage features section | ~3KB |
| index_sections.yml | Homepage sections | ~4KB |
| pricing.yml | Pricing page content | ~3KB |
| pricing_faq.yml | Pricing FAQ | ~0.4KB |
| testimonials.yml | Customer testimonials | ~3.6KB |
| contact_faq.yml | Contact FAQ | ~0.7KB |
| footer.yml | Footer content | ~0.4KB |
| blog_categories.yml | Blog category names/descriptions | ~1KB |
| case_studies.yml | Case study content | ~6.5KB |
| comparisons.yml | Competitor comparison content | ~4.4KB |
| promotion.yml | Promotional content | ~0.5KB |
| trusted_clients.yml | Client logos/names | ~0.3KB |

### Phase 2: Page Templates (15 files)

Create Spanish page templates in `_pages/` following the EN/FR pattern:

Each Spanish page requires:
- `page_id`: same as EN/FR versions
- `permalink`: same as EN/FR versions
- `layout`: same as EN/FR versions
- `description`: Spanish meta description
- `lang: es`
- Include statement: same as EN/FR versions

### Phase 3: Blog Posts (5 files)

Translate existing blog posts to Spanish:

| Original | Spanish Version |
|----------|-----------------|
| 2024-11-13-vmodel-vs-agile-choose-both.en.md | 2024-11-13-vmodel-vs-agile-choose-both.es.md |
| 2025-11-21-why-we-abandoned-sprints-for-cycles.en.md | 2025-11-21-why-we-abandoned-sprints-for-cycles.es.md |
| 2025-11-26-from-issue-to-release.en.md | 2025-11-26-from-issue-to-release.es.md |
| 2025-12-01-release-driven-development.en.md | 2025-12-01-release-driven-development.es.md |
| 2025-12-03-tools-flexibility-trap.en.md | 2025-12-03-tools-flexibility-trap.es.md |

Each Spanish blog post requires:
- Front matter with `lang: es`
- Translated title, subtitle, description, excerpt
- Full article content translated to Spanish
- Category name in Spanish matching `blog_categories.yml`

### Phase 4: Verification

1. Run `bundle exec jekyll serve`
2. Navigate to /es/ and verify homepage loads in Spanish
3. Test all navigation links
4. Test language switcher between EN/FR/ES
5. Verify all blog posts accessible
6. Check for broken links or missing images
7. Verify Lighthouse scores maintain ≥90

## Translation Guidelines

### SINRA Terminology (Keep in English)

Per CLAUDE.md, maintain these terms without translation:
- **issues** (not "problemas" or "incidencias")
- **capabilities** (not "capacidades")
- **releases** (not "versiones")
- **cycles** (not "ciclos" or "sprints")

### Spanish Localization Standards

- Use neutral Castilian Spanish (avoid regional idioms)
- Formal "usted" form for user-facing content
- Proper Spanish punctuation (¿? ¡!)
- Include accents (á, é, í, ó, ú, ñ, ü)
- Adapt marketing tone for Spanish-speaking audience

## Dependencies

- Existing EN files serve as translation source
- No external API dependencies
- No database changes
- No server configuration changes

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Translation quality issues | Medium | Low | Review AI translations, fix iteratively |
| Missing YAML keys | Low | Medium | Compare ES files against EN structure |
| Broken links after translation | Low | Low | Verify all links post-implementation |
| Lighthouse score degradation | Low | Low | No new assets; same templates |
