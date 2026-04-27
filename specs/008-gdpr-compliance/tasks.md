# Tasks: GDPR Compliance

**Input**: Design documents from `specs/008-gdpr-compliance/`  
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md  
**Tests**: Not requested - manual verification via browser DevTools + hugo build

**Organization**: Tasks grouped by user story. Each story independently testable.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no shared dependencies)
- **[Story]**: User story from spec.md (US1-US5)

---

## Phase 1: Setup (Download Font Assets)

**Purpose**: Obtain Inter variable font files. Required before Phase 3 (US1) can complete.

**Context**: Inter variable fonts must be downloaded manually and placed in `static/assets/fonts/`. Source: https://github.com/rsms/inter/releases (download `Inter.zip`, extract the woff2 variable fonts), or use Google Fonts Helper at https://gwfh.mranftl.com/fonts/inter to download woff2 files for weight range 100-900.

- [ ] T001 [P] Download Inter variable font (normal) and save as `static/assets/fonts/inter-variable.woff2` (source: Inter GitHub releases or Google Fonts Helper, woff2 format, weight 100-900, normal style) ⚠️ REQUIRES MANUAL DOWNLOAD - directory created, @font-face CSS ready
- [ ] T002 [P] Download Inter variable font (italic) and save as `static/assets/fonts/inter-variable-italic.woff2` (source: Inter GitHub releases or Google Fonts Helper, woff2 format, weight 100-900, italic style) ⚠️ REQUIRES MANUAL DOWNLOAD

---

## Phase 2: Foundational (Legal Prose Layout)

**Purpose**: Shared Hugo layout used by both Privacy Policy (US2) and Legal Notices (US3). MUST be complete before those phases begin.

**⚠️ CRITICAL**: US2 and US3 pages will 404 without these layouts.

- [x] T003 [P] Create `layouts/legal/single.html` - minimal Hugo layout for legal prose pages. Must: extend `baseof.html` via `{{ define "main" }}`, render `{{ .Title }}` as h1, render `{{ .Content }}` (markdown body), use DaisyUI Dim classes: `container mx-auto px-6 max-w-4xl py-16`, `prose` class for content area (or equivalent `text-base-content` styling). No sidebar, no data file dependency.
- [x] T004 [P] Create `layouts/privacy/single.html` - identical to `layouts/legal/single.html` (same template, different layout directory for Hugo routing). Copy the legal layout exactly.

**Checkpoint**: Legal/Privacy layouts exist. Hugo can now resolve those section routes.

---

## Phase 3: User Stories 1 + 5 - Remove Third-Party Data Flows (Priority: P1) 🎯 MVP

**Goal**: Zero HTTP requests to cloudflareinsights.com and fonts.googleapis.com/fonts.gstatic.com. Inter font served from same domain.

**Independent Test**: Open any page in browser DevTools > Network. Filter by "cloudflare" - 0 results. Filter by "googleapis" - 0 results. Filter by "inter" - requests to `/assets/fonts/inter-*.woff2` return 200.

- [x] T005 [US1] Remove Cloudflare Web Analytics script from `layouts/_default/baseof.html` line 17. Delete the entire `<!-- Cloudflare Web Analytics -->` comment block including the `<script defer ...></script>` tag.
- [x] T006 [US1] Remove Google Fonts from `layouts/partials/head.html`: delete the `{{/* Google Fonts - Inter */}}` comment and all three associated tags (preconnect to fonts.googleapis.com, preload link for the CSS, and noscript link fallback) - currently lines 84-88.
- [x] T007 [US1] Add `@font-face` declarations to `assets/css/main.css` (append before closing or at top of file, after any existing @import). Use two declarations: one for normal style (src: `/assets/fonts/inter-variable.woff2`, font-weight: 100 900, font-style: normal, font-display: swap) and one for italic (same src pattern with italic file, font-style: italic). Both use `font-family: 'Inter'`.

**Checkpoint**: `hugo server` running, DevTools shows zero googleapis/cloudflareinsights requests, Inter loads from localhost fonts path.

---

## Phase 4: User Story 2 - Privacy Policy Pages (Priority: P1)

**Goal**: Privacy policy accessible at `/privacy/` (EN), `/fr/politique-de-confidentialite/` (FR), `/es/politica-de-privacidad/` (ES).

**Independent Test**: Visit all 3 URLs. Each page renders with a title and content covering all GDPR Article 13/14 required sections (controller identity, data collected, purpose, legal basis, retention, rights, CNIL complaint).

- [x] T008 [P] [US2] Create `content/privacy/_index.md` (English privacy policy). Front matter: `title: "Privacy Policy"`, `description: "How Sinra collects and processes your data."`, `layout: "single"`. Body content (markdown) must include all GDPR Article 13/14 sections: (1) Data Controller - company name and contact `support@sinra.dev`, (2) Data Collected - contact form: name, email, subject, message, (3) Purpose - responding to contact requests, (4) Legal Basis - consent (Article 6(1)(a)), (5) Retention - 3 years from last contact, (6) Recipients - processed via app.sinra.dev, (7) Your Rights - access, rectification, erasure, portability, objection (contact: support@sinra.dev), (8) Right to complain to CNIL (www.cnil.fr), (9) Last updated date.
- [x] T009 [P] [US2] Create `content/privacy/_index.fr.md` (French privacy policy). Front matter: `title: "Politique de confidentialite"`, `slug: "politique-de-confidentialite"`, `description: "Comment Sinra collecte et traite vos donnees."`, `layout: "single"`. Body: French translation of T008 content. Use French punctuation rules (space before `:`, `«guillemets»`). CNIL referenced as autorite de controle francaise.
- [x] T010 [P] [US2] Create `content/privacy/_index.es.md` (Spanish privacy policy). Front matter: `title: "Politica de privacidad"`, `slug: "politica-de-privacidad"`, `description: "Como Sinra recopila y procesa sus datos."`, `layout: "single"`. Body: Spanish translation of T008 content. CNIL referenced as autoridad supervisora francesa competente.

**Checkpoint**: All 3 privacy policy URLs accessible and rendering correct content.

---

## Phase 5: User Story 3 - Legal Notices Pages (Priority: P1)

**Goal**: Legal notices accessible at `/legal/` (EN), `/fr/mentions-legales/` (FR), `/es/aviso-legal/` (ES) with LCEN-required company information (using placeholders where company details not yet available).

**Independent Test**: Visit all 3 URLs. Each page renders all LCEN-required fields (company name, form, address, capital, RCS, director, host) - placeholders `[A COMPLETER]` acceptable for unrevealed details.

- [x] T011 [P] [US3] Create `content/legal/_index.md` (English legal notices). Front matter: `title: "Legal Notices"`, `description: "Legal information about Sinra."`, `layout: "single"`. Body must include all LCEN fields: Company Name: `[A COMPLETER]`, Legal Form: `[A COMPLETER]`, Registered Address: `[A COMPLETER]`, Share Capital: `[A COMPLETER]`, RCS Registration: `[A COMPLETER]`, Publication Director: `[A COMPLETER]`, Contact: `support@sinra.dev`, Hosting Provider: `[A COMPLETER]` (name and address). Include a note that this site uses no analytics or tracking cookies.
- [x] T012 [P] [US3] Create `content/legal/_index.fr.md` (French mentions legales). Front matter: `title: "Mentions legales"`, `slug: "mentions-legales"`, `description: "Informations legales sur Sinra."`, `layout: "single"`. Body: French version of T011. Use French field labels (Denomination sociale, Forme juridique, Siege social, Capital social, Numero RCS, Directeur de la publication, Hebergeur). French punctuation rules apply.
- [x] T013 [P] [US3] Create `content/legal/_index.es.md` (Spanish legal notices). Front matter: `title: "Aviso legal"`, `slug: "aviso-legal"`, `description: "Informacion legal sobre Sinra."`, `layout: "single"`. Body: Spanish version of T011 with Spanish field labels (Razon social, Forma juridica, Domicilio social, Capital social, Registro mercantil, Director de publicacion, Proveedor de alojamiento).

**Checkpoint**: All 3 legal notices URLs accessible. All required LCEN fields present.

---

## Phase 6: User Story 4 - Contact Form Consent (Priority: P2)

**Goal**: Contact form cannot be submitted without GDPR consent checkbox. Checkbox links to privacy policy.

**Independent Test**: Visit `/contact/`. Try submitting without checking the box - browser blocks it. Check the box, fill form, submit - success.

- [x] T014 [P] [US4] Add consent i18n keys to `i18n/en.yaml`. Add two new keys: `contact_consent_label` with value `"I agree that my data will be processed to respond to my inquiry. See our <a href=\"/privacy/\" class=\"link link-primary\">Privacy Policy</a>."` and `contact_consent_required` with value `"Please accept the privacy policy to submit this form."`.
- [x] T015 [P] [US4] Add consent i18n keys to `i18n/fr.yaml`. Keys: `contact_consent_label` value `"J'accepte que mes donnees soient traitees pour repondre a ma demande. Voir notre <a href=\"/fr/politique-de-confidentialite/\" class=\"link link-primary\">Politique de confidentialite</a>."` and `contact_consent_required` value `"Veuillez accepter la politique de confidentialite pour soumettre ce formulaire."`.
- [x] T016 [P] [US4] Add consent i18n keys to `i18n/es.yaml`. Keys: `contact_consent_label` value `"Acepto que mis datos sean tratados para responder a mi consulta. Ver nuestra <a href=\"/es/politica-de-privacidad/\" class=\"link link-primary\">Politica de privacidad</a>."` and `contact_consent_required` value `"Por favor, acepte la politica de privacidad para enviar este formulario."`.
- [x] T017 [US4] Add GDPR consent checkbox to `layouts/contact/single.html` immediately before the submit button. Use DaisyUI form-control structure: `<div class="form-control">`, `<label class="label cursor-pointer gap-3 justify-start">`, `<input type="checkbox" name="gdpr_consent" required aria-required="true" class="checkbox checkbox-primary">`, `<span class="label-text">{{ i18n "contact_consent_label" | safeHTML }}</span>`. The `| safeHTML` pipe is required to render the anchor tag inside the label.

**Checkpoint**: Contact form submit blocked without consent. Checkbox visible with privacy link in correct language per locale.

---

## Phase 7: Polish - Footer Links + Final Validation

**Purpose**: Add legal page links to footer in all languages. Validate full build passes.

- [x] T018 [P] Add Privacy Policy and Legal Notices links to `data/en/footer.yaml`. Append to existing structure (add to existing column or new column): two entries with `name: "Privacy Policy"` / `link: "privacy/"` and `name: "Legal Notices"` / `link: "legal/"`, both with `target: _top`.
- [x] T019 [P] Add Politique de confidentialite and Mentions legales links to `data/fr/footer.yaml`. Entries: `name: "Politique de confidentialite"` / `link: "politique-de-confidentialite/"` and `name: "Mentions legales"` / `link: "mentions-legales/"`, both `target: _top`.
- [x] T020 [P] Add Politica de privacidad and Aviso legal links to `data/es/footer.yaml`. Entries: `name: "Politica de privacidad"` / `link: "politica-de-privacidad/"` and `name: "Aviso legal"` / `link: "aviso-legal/"`, both `target: _top`.
- [x] T021 Run `hugo --printPathWarnings` from repo root. Fix any path or broken-link warnings before proceeding. Expected: 0 warnings, 0 errors, all 6 legal/privacy pages included in page count.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - start immediately. Fonts needed before T007 completes Phase 3.
- **Foundational (Phase 2)**: No dependencies - start immediately in parallel with Phase 1.
- **Phase 3 (US1+US5)**: Depends on T001+T002 for T007. T005 and T006 have no dependencies.
- **Phase 4 (US2)**: Depends on T003 or T004 (layout must exist). Can start after Phase 2.
- **Phase 5 (US3)**: Depends on T003 (layout must exist). Can start after Phase 2.
- **Phase 6 (US4)**: Depends on T008 (privacy policy must exist for the link in consent label). Can start after Phase 4.
- **Phase 7**: Depends on all content and layout tasks being complete.

### User Story Dependencies

- **US1+US5 (Phase 3)**: Blocked only by T001+T002 for the CSS task. T005+T006 can start immediately.
- **US2 (Phase 4)**: Blocked by Phase 2 (layout). Independent of US1.
- **US3 (Phase 5)**: Blocked by Phase 2 (layout). Independent of US1 and US2.
- **US4 (Phase 6)**: Blocked by Phase 4 (privacy link in consent label). Otherwise independent.

### Within Each Phase

- Tasks marked [P] can execute simultaneously (different files)
- T007 (CSS) must wait for T001+T002 (font files must exist on disk)
- T017 (checkbox template) must wait for T014-T016 (i18n keys must exist)

### Parallel Opportunities

```bash
# Phase 1 + Phase 2 fully parallel (no shared files):
T001 (font normal)  ||  T002 (font italic)  ||  T003 (legal layout)  ||  T004 (privacy layout)

# Phase 3 partial parallel:
T005 (remove analytics)  +  T006 (remove fonts) → then T007 (add @font-face, needs T001+T002)

# Phase 4 fully parallel:
T008 (privacy EN)  ||  T009 (privacy FR)  ||  T010 (privacy ES)

# Phase 5 fully parallel:
T011 (legal EN)  ||  T012 (legal FR)  ||  T013 (legal ES)

# Phase 6 partial parallel:
T014 (i18n EN)  ||  T015 (i18n FR)  ||  T016 (i18n ES)  → then T017 (checkbox template)

# Phase 7 partial parallel:
T018 (footer EN)  ||  T019 (footer FR)  ||  T020 (footer ES)  → then T021 (validation)
```

---

## Implementation Strategy

### MVP First (Phase 1-3 Only)

1. Download font files (T001, T002)
2. Remove analytics + fonts CDN (T005, T006, T007)
3. **STOP and VALIDATE**: DevTools shows 0 external font/analytics requests
4. This alone achieves GDPR compliance for data flows (no tracking, no IP leak)

### Incremental Delivery

1. Phases 1+2 (Setup + Layout) → Foundation ready
2. Phase 3 (US1+US5) → No third-party data flows
3. Phase 4 (US2) → Privacy policy visible
4. Phase 5 (US3) → Legal notices visible
5. Phase 6 (US4) → Contact form compliant
6. Phase 7 → Footer links + final validation → Ship

---

## Notes

- Font files (T001, T002) are binary downloads - cannot be written by code; user must download manually or run a fetch script
- Company details in T011-T013 use `[A COMPLETER]` placeholders - must be filled before production launch
- `| safeHTML` in T017 is required in Go templates to render HTML inside i18n strings
- Footer link slugs in FR/ES must match the `slug:` field in the corresponding content file front matter
- Total tasks: 21
- Parallelizable tasks: 14 marked [P]
