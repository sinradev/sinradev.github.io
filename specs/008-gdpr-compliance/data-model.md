# Data Model: GDPR Compliance

**Branch**: `008-gdpr-compliance` | **Date**: 2026-04-27

This feature involves no database or API. Data entities are Hugo content files and configuration.

---

## Entity 1: Font Files

**Type**: Static binary files (woff2)

| File | Path | Description |
|------|------|-------------|
| `inter-variable.woff2` | `static/assets/fonts/inter-variable.woff2` | Inter variable font, normal style, weight 100-900 |
| `inter-variable-italic.woff2` | `static/assets/fonts/inter-variable-italic.woff2` | Inter variable font, italic style, weight 100-900 |

**CSS declaration** added to `assets/css/main.css`:
```css
@font-face {
  font-family: 'Inter';
  src: url('/assets/fonts/inter-variable.woff2') format('woff2');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  src: url('/assets/fonts/inter-variable-italic.woff2') format('woff2');
  font-weight: 100 900;
  font-style: italic;
  font-display: swap;
}
```

---

## Entity 2: Privacy Policy Content

**Type**: Hugo content files (markdown)

| File | Path | Language | URL |
|------|------|----------|-----|
| EN | `content/privacy/_index.md` | English | `/privacy/` |
| FR | `content/privacy/_index.fr.md` | French | `/fr/politique-de-confidentialite/` |
| ES | `content/privacy/_index.es.md` | Spanish | `/es/politica-de-privacidad/` |

**Front matter fields**:
```yaml
title: "Privacy Policy"          # localized
description: "..."               # localized
layout: "legal-prose"            # shared layout
slug: "privacy"                  # EN only; FR/ES use localized slug
```

**Required content sections** (per GDPR Article 13/14):
1. Data controller identity (company name, address, email)
2. Data collected (contact form: name, email, subject, message)
3. Purpose of processing (responding to inquiries)
4. Legal basis (consent - contact form)
5. Retention period (3 years from last contact)
6. Third-party recipients (app.sinra.dev backend)
7. Data subject rights (access, rectification, erasure, portability, objection)
8. Right to lodge complaint with CNIL
9. Contact for data rights: [email to be provided]

---

## Entity 3: Legal Notices Content

**Type**: Hugo content files (markdown)

| File | Path | Language | URL |
|------|------|----------|-----|
| EN | `content/legal/_index.md` | English | `/legal/` |
| FR | `content/legal/_index.fr.md` | French | `/fr/mentions-legales/` |
| ES | `content/legal/_index.es.md` | Spanish | `/es/aviso-legal/` |

**Front matter fields**:
```yaml
title: "Legal Notices"           # localized
description: "..."               # localized
layout: "legal-prose"
```

**Required content fields** (per LCEN):
- Company name: `[A COMPLETER]`
- Legal form: `[A COMPLETER]`
- Registered address: `[A COMPLETER]`
- Share capital: `[A COMPLETER]`
- RCS number: `[A COMPLETER]`
- Publication director: `[A COMPLETER]`
- Hosting provider name: `[A COMPLETER]`
- Hosting provider address: `[A COMPLETER]`
- Contact email: `support@sinra.dev`

---

## Entity 4: i18n Keys (new)

**File**: `i18n/en.yaml`, `i18n/fr.yaml`, `i18n/es.yaml`

| Key | EN | FR | ES |
|-----|----|----|-----|
| `contact_consent_label` | "I agree to my data being processed to respond to my inquiry. See our [Privacy Policy]." | "J'accepte que mes donnees soient traitees pour repondre a ma demande. Voir notre [Politique de confidentialite]." | "Acepto que mis datos sean tratados para responder a mi consulta. Ver nuestra [Politica de privacidad]." |
| `contact_consent_required` | "Please accept the privacy policy before submitting." | "Veuillez accepter la politique de confidentialite avant de soumettre." | "Por favor, acepte la politica de privacidad antes de enviar." |
| `footer_privacy` | "Privacy Policy" | "Politique de confidentialite" | "Politica de privacidad" |
| `footer_legal` | "Legal Notices" | "Mentions legales" | "Aviso legal" |

---

## Entity 5: Footer Data (updated)

**Files**: `data/en/footer.yaml`, `data/fr/footer.yaml`, `data/es/footer.yaml`

New links appended to existing footer structure (3rd column, or new column):

```yaml
# Added to each language footer.yaml
- name: "Privacy Policy"         # localized per lang
  link: privacy/                 # Hugo relLangURL handles prefix
  target: _top
- name: "Legal Notices"          # localized per lang
  link: legal/                   # Hugo relLangURL handles prefix
  target: _top
```

---

## Entity 6: Modified Templates

| File | Change |
|------|--------|
| `layouts/_default/baseof.html` | Remove Cloudflare Analytics script (line 17) |
| `layouts/partials/head.html` | Remove `<link>` preconnect + preload for fonts.googleapis.com (lines 84-88) |
| `layouts/contact/single.html` | Add GDPR consent checkbox before submit button |
| `assets/css/main.css` | Add `@font-face` declarations for Inter variable fonts |
