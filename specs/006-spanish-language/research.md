# Research: Add Spanish Language Support

**Feature**: 006-spanish-language
**Date**: 2025-12-10

## Research Summary

This feature requires minimal research as it follows established patterns in the existing codebase. The implementation replicates the existing EN/FR multilingual architecture.

## Technical Decisions

### Decision 1: Jekyll-polyglot Language Configuration

**Decision**: Add "es" to the existing `languages` array in `_config.yml`

**Rationale**:
- Jekyll-polyglot already handles multilingual routing
- The header.html language selector iterates over `site.languages` automatically
- No code changes required to enable Spanish in the UI

**Alternatives considered**:
- Manual language routing: Rejected (duplicates existing functionality)
- Separate Spanish subdomain: Rejected (inconsistent with existing /fr/ pattern)

**Source verification**: Confirmed in `_includes/header.html` lines 101-108 that language selector uses `{% for tongue in site.languages %}`.

### Decision 2: Data File Structure

**Decision**: Create `_data/es/` directory with identical file structure to `_data/en/`

**Rationale**:
- Liquid templates use `site.data[page.lang].section.key` pattern
- All 14 data files must exist to prevent template errors
- Maintains 1:1 parity with EN/FR structure

**Alternatives considered**:
- Shared data with language keys inside files: Rejected (breaks existing template patterns)
- Partial Spanish content with EN fallback: Rejected (complex, inconsistent UX)

**Source verification**: Confirmed in `_includes/header.html` line 11 uses `site.data[site.active_lang].navigation`.

### Decision 3: Page Template Pattern

**Decision**: Create `*.es.html` files in `_pages/` following EN/FR naming convention

**Rationale**:
- Jekyll-polyglot uses language suffix to identify page variants
- `page_id` must match across language variants for language switching
- Existing pattern: `about.en.html`, `about.fr.html` → `about.es.html`

**Alternatives considered**:
- Language-specific directories (`es/about.html`): Rejected (inconsistent with existing structure)
- Single page with language conditionals: Rejected (breaks Jekyll-polyglot routing)

**Source verification**: Confirmed `_pages/about.en.html` and `_pages/about.fr.html` use matching `page_id: about`.

### Decision 4: Blog Post Translation Pattern

**Decision**: Create `*.es.md` files in `_posts/` with matching dates and slugs

**Rationale**:
- Jekyll-polyglot matches blog posts by date and slug prefix
- Language suffix determines which version to show
- Front matter `lang: es` required for correct routing

**Alternatives considered**:
- Language-specific post directories: Rejected (Jekyll doesn't support this)
- Single post with multilingual content blocks: Rejected (not supported by Jekyll)

**Source verification**: Confirmed existing posts use pattern `YYYY-MM-DD-slug.en.md` and `YYYY-MM-DD-slug.fr.md`.

### Decision 5: Translation Methodology

**Decision**: AI-generated translations using Claude, reviewed for quality

**Rationale**:
- Clarified in spec session (2025-12-10)
- Enables rapid implementation
- Content can be refined post-launch
- Marketing content adapted (not literal translation)

**Alternatives considered**:
- Professional human translation: Rejected (cost/time for initial launch)
- Machine translation only (Google): Rejected (lower quality for marketing copy)

## Technical Findings

### Jekyll-polyglot Behavior

1. **URL Generation**: Spanish pages will automatically get `/es/` prefix
2. **Language Selector**: Automatically includes all languages from `site.languages`
3. **Default Language**: English remains default (no `/en/` prefix needed)
4. **404 Handling**: Standard Jekyll 404 behavior for non-existent Spanish pages

### Existing File Counts (to replicate)

| Directory | English Files | French Files | Spanish Files (to create) |
|-----------|---------------|--------------|---------------------------|
| `_data/*/` | 14 | 14 | 14 |
| `_pages/` | 15 | 15 | 15 |
| `_posts/` | 5 | 5 | 5 |

### SINRA Terminology Preservation

Per CLAUDE.md glossary, these terms must NOT be translated:
- issues, capabilities, releases, cycles
- projects, teams, users, roles, labels
- statuses, templates, testings, platforms, categories, pages

## No Unresolved Questions

All technical decisions are finalized based on existing codebase patterns.
