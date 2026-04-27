# Research: GDPR Compliance

**Branch**: `008-gdpr-compliance` | **Date**: 2026-04-27

## Decision 1: Self-hosting Inter Font

**Decision**: Use Inter variable font woff2 files downloaded directly to `static/assets/fonts/`

**Rationale**:
- 2 woff2 files cover all weights (100-900) and both normal + italic - replaces what was loaded from googleapis.com
- `static/` directory is served as-is by Hugo, no build step required
- No npm package needed (avoids build tool additions prohibited by constitution)
- woff2 is supported by 97%+ of browsers; no other format needed

**Implementation**:
- Download `inter-variable.woff2` (normal, opsz 14-32, weight 100-900)
- Download `inter-variable-italic.woff2` (italic, same range)
- Source: https://github.com/rsms/inter (or Google Fonts Helper)
- Add `@font-face` declarations to `assets/css/main.css`
- Remove all `<link>` tags pointing to fonts.googleapis.com from `layouts/partials/head.html`

**Alternatives considered**:
- `@fontsource/inter` npm package: rejected - adds npm dependency and build step
- Static fonts per weight: rejected - 18+ files vs 2 variable files, harder to maintain
- System font stack fallback only: rejected - breaks visual design consistency

---

## Decision 2: Legal Pages Architecture

**Decision**: Content-driven Hugo pages (`content/{section}/`) with a shared `layouts/legal/single.html` layout

**Rationale**:
- Legal text is long-form prose - markdown in content files is the right tool
- Matches existing Hugo multilingual pattern (content files with lang suffix or per-directory)
- Privacy Policy and Legal Notices share the same simple layout (heading + prose content)
- Data-driven approach (like about page) suits structured/dynamic data, not long legal text

**Implementation**:
- `content/privacy/_index.md` (EN), `content/privacy/_index.fr.md`, `content/privacy/_index.es.md`
- `content/legal/_index.md` (EN), `content/legal/_index.fr.md`, `content/legal/_index.es.md`
- `layouts/legal/single.html` - shared prose layout for both sections
- Symlink or duplicate: privacy also uses `layouts/privacy/single.html` pointing to same template

**Hugo multilingual routing result**:
- EN: `/privacy/` and `/legal/`
- FR: `/fr/politique-de-confidentialite/` and `/fr/mentions-legales/`
- ES: `/es/politica-de-privacidad/` and `/es/aviso-legal/`

**Alternatives considered**:
- data/{lang}/ YAML: rejected - not appropriate for prose legal text
- Single content file with i18n: rejected - Hugo multilingual requires separate content files per language

---

## Decision 3: Contact Form Consent Checkbox

**Decision**: Add HTML checkbox in `layouts/contact/single.html` with i18n key for label text, using DaisyUI form-control classes

**Rationale**:
- No JS needed - standard HTML required checkbox blocks form submission natively
- i18n key keeps all text in `i18n/{lang}.yaml` (constitution requirement: no hardcoded strings)
- DaisyUI `form-control` + `checkbox` classes - consistent with existing form elements

**Implementation**:
- Add `<div class="form-control">` block before submit button
- `<input type="checkbox" name="gdpr_consent" required>` 
- Label links to `/privacy/` (or language-relative equivalent)
- New i18n keys: `contact_consent_label`, `contact_consent_link_text`

**Alternatives considered**:
- JavaScript validation only: rejected - not accessible, fails without JS
- Server-side validation only: rejected - frontend UX expectation, not just backend concern

---

## Decision 4: Cloudflare Analytics Removal

**Decision**: Delete the `<script>` tag from `layouts/_default/baseof.html` line 17

**Rationale**: Simplest possible change. No data processing = no consent needed = full GDPR compliance for analytics.

**Implementation**: Remove single line from baseof.html

---

## Decision 5: Footer Legal Links

**Decision**: Add Privacy Policy and Legal Notices links to `data/{lang}/footer.yaml` for all 3 languages

**Rationale**: Matches existing footer data pattern. Footer partial already renders all links from YAML. No template changes needed.

**New links per language**:

EN:
- Privacy Policy → `/privacy/`
- Legal Notices → `/legal/`

FR:
- Politique de confidentialite → `/fr/politique-de-confidentialite/`
- Mentions legales → `/fr/mentions-legales/`

ES:
- Politica de privacidad → `/es/politica-de-privacidad/`
- Aviso legal → `/es/aviso-legal/`
