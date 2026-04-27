# Implementation Plan: GDPR Compliance

**Branch**: `008-gdpr-compliance` | **Date**: 2026-04-27 | **Spec**: [spec.md](./spec.md)  
**Input**: Feature specification from `specs/008-gdpr-compliance/spec.md`

## Summary

Make sinra.dev fully GDPR-compliant by: removing Cloudflare Analytics, self-hosting the Inter font (eliminating Google Fonts IP leak), creating Privacy Policy and Legal Notices pages in 3 languages (EN/FR/ES), adding a consent checkbox to the contact form, and adding legal page links to the footer. No analytics service will remain on the site after this feature.

## Technical Context

**Language/Version**: Hugo Extended 0.160.0+, Node.js 20, Go HTML templates  
**Primary Dependencies**: Tailwind CSS v4 + DaisyUI v5 (Hugo Pipes + PostCSS), Vanilla JavaScript  
**Storage**: YAML data files (`data/{lang}/`), i18n files (`i18n/{lang}.yaml`), Hugo content files (markdown)  
**Testing**: Manual via `hugo server` (localhost:1313) + browser DevTools network inspection  
**Target Platform**: Static site, served via Cloudflare Pages  
**Performance Goals**: Maintain Lighthouse >= 90/90/90/90 (self-hosting fonts may improve performance score)  
**Constraints**: No new build tools, no npm packages, no JS frameworks, plain CSS only  
**Scale/Scope**: 6 template modifications, 6 new content files, 3 i18n files updated, 3 footer YAML files updated, 2 font files downloaded

## Constitution Check

| Gate | Status | Notes |
|------|--------|-------|
| DaisyUI Dim theme only | PASS | Consent checkbox uses `form-control` + `checkbox` DaisyUI classes |
| No new CSS frameworks | PASS | `@font-face` CSS only |
| No hardcoded colors | PASS | Legal pages use `text-base-content`, `bg-base-100` etc. |
| Plain CSS only (no SCSS) | PASS | `@font-face` in existing `assets/css/main.css` |
| Multilingual EN/FR/ES | PASS | All new pages exist in all 3 languages |
| No hardcoded strings in templates | PASS | New i18n keys added for consent text |
| No new build tools or npm packages | PASS | Font files downloaded as static assets |
| Lighthouse performance >= 90 | EXPECTED PASS | Removing external font CDN requests typically improves performance |

## Project Structure

### Documentation (this feature)

```text
specs/008-gdpr-compliance/
├── plan.md              # This file
├── spec.md              # Feature specification
├── research.md          # Phase 0 research decisions
├── data-model.md        # Entities and data flows
├── quickstart.md        # Local testing guide
├── contracts/
│   └── README.md        # N/A (static site)
└── tasks.md             # Phase 2 output (not yet created)
```

### Source Code Changes

```text
# Font files (new)
static/assets/fonts/
├── inter-variable.woff2
└── inter-variable-italic.woff2

# CSS (modified)
assets/css/
└── main.css                         # Add @font-face declarations

# Templates (modified)
layouts/
├── _default/
│   └── baseof.html                  # Remove Cloudflare Analytics script
├── partials/
│   └── head.html                    # Remove Google Fonts <link> tags
├── contact/
│   └── single.html                  # Add GDPR consent checkbox
├── legal/                           # NEW
│   └── single.html                  # Shared prose layout for legal pages
└── privacy/                         # NEW
    └── single.html                  # Same prose layout (symlink or copy)

# Hugo content (new)
content/
├── privacy/
│   ├── _index.md                    # EN privacy policy
│   ├── _index.fr.md                 # FR politique de confidentialite
│   └── _index.es.md                 # ES politica de privacidad
└── legal/
    ├── _index.md                    # EN legal notices
    ├── _index.fr.md                 # FR mentions legales
    └── _index.es.md                 # ES aviso legal

# i18n (modified)
i18n/
├── en.yaml                          # Add consent + footer keys
├── fr.yaml                          # Add consent + footer keys
└── es.yaml                          # Add consent + footer keys

# Footer data (modified)
data/
├── en/footer.yaml                   # Add Privacy Policy + Legal Notices links
├── fr/footer.yaml                   # Add Politique + Mentions legales links
└── es/footer.yaml                   # Add Privacidad + Aviso legal links
```

**Structure Decision**: Standard Hugo multilingual static site pattern. All new pages follow existing conventions (content/ + layouts/ split). No new directories outside established patterns.

## Implementation Phases

### Phase A: Remove Third-Party Data Flows (SC-001, SC-002)

1. **Remove Cloudflare Analytics** - delete script from `layouts/_default/baseof.html:17`
2. **Remove Google Fonts** - delete preconnect + preload link tags from `layouts/partials/head.html:84-88`
3. **Download Inter variable fonts** - 2 woff2 files to `static/assets/fonts/`
4. **Add @font-face CSS** - to `assets/css/main.css`
5. **Verify** - `hugo server` + DevTools: 0 requests to googleapis.com, cloudflareinsights.com

### Phase B: Legal Pages (SC-003, SC-004, SC-006)

6. **Create legal prose layout** - `layouts/legal/single.html` (minimal wrapper: heading + `.prose` content)
7. **Create privacy layout** - `layouts/privacy/single.html` (same template)
8. **Write Privacy Policy content** - EN/FR/ES markdown files in `content/privacy/`
9. **Write Legal Notices content** - EN/FR/ES markdown files in `content/legal/` (with [A COMPLETER] placeholders for company details)
10. **Verify** - All 6 URLs accessible and rendering correctly

### Phase C: Footer Links (SC-006)

11. **Update footer YAML** - add privacy + legal links to `data/en/footer.yaml`, `data/fr/footer.yaml`, `data/es/footer.yaml`
12. **Verify** - Footer links visible and correct on all pages, all languages

### Phase D: Contact Form Consent (SC-005)

13. **Add i18n keys** - `contact_consent_label` and `contact_consent_required` in all 3 i18n files
14. **Add consent checkbox** - to `layouts/contact/single.html` before submit button
15. **Verify** - Form blocked without checkbox, form submits with checkbox

### Phase E: Final Validation

16. `hugo --printPathWarnings` - 0 warnings
17. Lighthouse check on main pages
18. Cross-browser test (Chrome, Firefox, Safari)
