# Tasks: Migration Jekyll vers Hugo

**Input**: Design documents from `specs/007-migrate-to-hugo/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md

**Organization**: Tasks groupées par user story pour une implémentation et validation indépendantes.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Peut tourner en parallèle (fichiers différents, pas de dépendance)
- **[Story]**: User story associée (US1, US2, US3, US4)
- Chemins absolus depuis la racine du repo

---

## Phase 1: Setup (Scaffolding Hugo)

**Purpose**: Initialiser le projet Hugo avec la stack technique et compiler le CSS sans erreur.

- [X] T001 Créer `hugo.toml` avec config EN/FR/ES, permalinks, taxonomies catégories, params SEO (baseURL sinra.dev, defaultContentLanguage en, langues + menus)
- [X] T002 Créer `package.json` avec devDependencies : tailwindcss ^4, daisyui ^5, @tailwindcss/postcss ^4, postcss ^8, postcss-cli ^11
- [X] T003 [P] Créer `postcss.config.js` calqué sur `~/Apps/tornade.github.io/postcss.config.js` (setFrom plugin + @tailwindcss/postcss)
- [X] T004 Créer `assets/css/main.css` : `@import "tailwindcss"`, `@source "../../layouts/**/*.html"`, `@source "../../content/**/*.md"`, `@plugin "daisyui" { themes: dim; logs: false; }`
- [X] T005 Exécuter `npm install` pour installer les dépendances Node

**Checkpoint** : `npm install` réussit sans erreur.

---

## Phase 2: Fondation (Prérequis bloquants)

**Purpose**: Layout global, partials et données opérationnels. DOIT être complet avant toute user story.

**⚠️ CRITIQUE** : Aucune user story ne peut commencer avant cette phase.

### Layout global

- [X] T006 Créer `layouts/_default/baseof.html` : `<!DOCTYPE html>`, `<html lang="{{ site.LanguageCode }}" data-theme="dim">`, `{{ partial "head.html" . }}`, `{{ partial "navbar.html" . }}`, `{{ block "main" . }}{{ end }}`, `{{ partial "footer.html" . }}`
- [X] T007 Créer `layouts/partials/head.html` : charset, viewport, title dynamique, canonical, description, hreflang EN/FR/ES + x-default, Open Graph, Twitter Card, JSON-LD SoftwareApplication + Organization, CSS Hugo Pipes (`resources.Get "css/main.css" | css.PostCSS | resources.Minify | resources.Fingerprint`)
- [X] T008 Créer `layouts/partials/navbar.html` depuis `_includes/header.html` Jekyll : logo, menu principal, language switcher (`{{ range .AllTranslations }}`), classes DaisyUI (`navbar`, `dropdown`, `btn-ghost`, `menu`) — supprimer toute dépendance à `navbar.css`
- [X] T009 Créer `layouts/partials/footer.html` depuis `_includes/footer.html` Jekyll : liens, copyright, navigation, strings via `{{ i18n "..." }}`
- [X] T010 Créer `layouts/index.html` stub : `{{ define "main" }}<p>Hugo OK</p>{{ end }}`
- [X] T011 Créer `content/_index.md`, `content/_index.fr.md`, `content/_index.es.md` (front matter minimal : title, description, layout)
- [X] T012 Vérifier que `hugo server` démarre sans erreur sur `http://localhost:1313`, thème Dim actif (`data-theme="dim"` visible dans le HTML), CSS compilé

### Migration des données

- [X] T013 Créer `i18n/en.yaml` depuis `_data/en/strings.yml` + `_data/en/navigation.yml` : extraire les clés courtes (labels, boutons, titres nav) — format `cle: "valeur"`
- [X] T014 [P] Créer `i18n/fr.yaml` depuis `_data/fr/strings.yml` + `_data/fr/navigation.yml`
- [X] T015 [P] Créer `i18n/es.yaml` depuis `_data/es/strings.yml` + `_data/es/navigation.yml`
- [X] T016 Créer `data/en/` : copier et renommer `_data/en/index_sections.yml` → `data/en/index_sections.yaml`, `index_features.yml`, `pricing.yml`, `pricing_faq.yml`, `testimonials.yml`, `trusted_clients.yml`, `footer.yml`, `contact_faq.yml`, `case_studies.yml`, `comparisons.yml`, `blog_categories.yml`
- [X] T017 [P] Créer `data/fr/` : même opération depuis `_data/fr/`
- [X] T018 [P] Créer `data/es/` : même opération depuis `_data/es/`

**Checkpoint Fondation** : `hugo server` tourne, navbar + footer visibles, `{{ i18n "key" }}` résout une clé EN/FR/ES, `{{ index site.Data "en" "pricing" }}` retourne des données.

---

## Phase 3: User Story 1 - Site fonctionnel sur Hugo (Priority: P1) 🎯 MVP

**Goal**: Toutes les pages principales (accueil, pricing, contact, about, compare) s'affichent en EN/FR/ES avec le thème DaisyUI Dim.

**Independent Test**: Lancer `hugo server`, naviguer sur http://localhost:1313, http://localhost:1313/fr/, http://localhost:1313/es/. Toutes les pages principales retournent HTTP 200 sans erreur de rendu visible.

### Homepage

- [X] T019 [P] [US1] Créer `layouts/partials/sections/hero.html` depuis la section hero de `_includes/index.html` : titre, sous-titre, CTA primaire/secondaire, données depuis `{{ index site.Data .Page.Language.Lang "index_sections" }}.hero`
- [X] T020 [P] [US1] Créer `layouts/partials/sections/features.html` depuis la section features de `_includes/index.html` : grille de features, itération sur `{{ index site.Data .Page.Language.Lang "index_features" }}`
- [X] T021 [P] [US1] Créer `layouts/partials/sections/testimonials.html` depuis `_includes/testimonial.html` : cards témoignages, données depuis `data/{lang}/testimonials.yaml`
- [X] T022 [P] [US1] Créer `layouts/partials/sections/trusted_by.html` depuis `_includes/trusted_by.html` : logos clients, données depuis `data/{lang}/trusted_clients.yaml`
- [X] T023 [P] [US1] Créer `layouts/partials/sections/contact-faq.html` depuis `_includes/index.html` section FAQ : accordéon DaisyUI (`collapse`), données depuis `data/{lang}/contact_faq.yaml`
- [X] T024 [US1] Mettre à jour `layouts/index.html` pour composer toutes les sections : `{{ partial "sections/hero.html" . }}`, features, testimonials, trusted_by, contact-faq (dépend de T019-T023)

### Pages statiques

- [X] T025 [P] [US1] Créer `layouts/pricing/single.html` depuis `_includes/pricing.html` + `_pages/pricing.{lang}.html` : plans tarifaires, FAQ pricing, CTA — données depuis `data/{lang}/pricing.yaml` + `data/{lang}/pricing_faq.yaml`
- [X] T026 [P] [US1] Créer `content/pricing/_index.md`, `_index.fr.md`, `_index.es.md` (front matter : title, description, layout pricing)
- [X] T027 [P] [US1] Créer `layouts/about/single.html` depuis `_includes/about.html`
- [X] T028 [P] [US1] Créer `content/about/_index.md`, `_index.fr.md`, `_index.es.md`
- [X] T029 [P] [US1] Créer `layouts/contact/single.html` depuis `_includes/contact.html` : formulaire, FAQ — préserver l'action/method du form
- [X] T030 [P] [US1] Créer `content/contact/_index.md`, `_index.fr.md`, `_index.es.md` + `content/contact/success/_index.{lang}.md` + `layouts/contact/success/single.html`
- [X] T031 [P] [US1] Créer `layouts/compare/single.html` + `layouts/partials/sections/comparison-table.html` depuis `_includes/comparison.html` et `_includes/comparison-table.html` — données depuis `data/{lang}/comparisons.yaml`
- [X] T032 [P] [US1] Créer `content/compare/_index.{lang}.md` + sous-pages `content/compare/jira/_index.{lang}.md`, `content/compare/asana/_index.{lang}.md`, `content/compare/monday/_index.{lang}.md`

### Consolidation CSS (scope B)

- [X] T033 [US1] Consolider CSS dans `assets/css/main.css` : migrer les styles custom de `assets/css/layout.css`, `navbar.css`, `contact.css` vers `@layer components` et `@layer utilities` — supprimer tout code mort remplacé par classes DaisyUI (dépend de T019-T032 pour savoir quelles classes sont réellement utilisées)

**Checkpoint US1** : Toutes les pages principales EN/FR/ES affichent HTTP 200. Visuellement identiques au site Jekyll sur accueil, pricing, contact. Aucune erreur dans la console hugo.

---

## Phase 4: User Story 2 - Blog complet migré (Priority: P2)

**Goal**: Les 40+ articles de blog en 3 langues sont accessibles avec contenu, images featured et navigation par catégorie.

**Independent Test**: Naviguer sur http://localhost:1313/blog/, ouvrir un article, vérifier le contenu, changer de langue, filtrer par catégorie. Tout fonctionne sans erreur 404.

### Migration des articles

- [X] T034 [US2] Créer `scripts/migrate-posts.sh` : script bash qui pour chaque fichier `_posts/YYYY-MM-DD-slug.lang.md` : (1) copie vers `content/blog/posts/YYYY-MM-DD-slug.{lang}.md`, (2) supprime `layout: post`, (3) convertit `permalink: /cat/:year/:month/:day/slug.html` → `url: /cat/YYYY/MM/DD/slug.html` en résolvant les placeholders avec la date du fichier, (4) convertit `category: Foo` → `categories: ["Foo"]`, (5) supprime `lang:`, (6) formate la date en ISO 8601
- [X] T035 [US2] Exécuter `bash scripts/migrate-posts.sh` : vérifier que `content/blog/posts/` contient les 40+ articles × 3 langues avec front matter Hugo valide (dépend de T034)

### Templates blog

- [X] T036 [P] [US2] Créer `layouts/blog/single.html` : featured image (`.Params.featured_image`), title, subtitle, date formatée, catégorie avec lien, contenu Markdown (`.Content`), navigation article précédent/suivant (`.PrevInSection`, `.NextInSection`)
- [X] T037 [P] [US2] Créer `content/blog/_index.md`, `content/blog/_index.fr.md`, `content/blog/_index.es.md` (front matter : title, description ; les articles non traduits dans cette langue sont masqués automatiquement)
- [X] T038 [US2] Créer `layouts/blog/list.html` : liste paginée des articles (titre, excerpt, image featured, date, catégorie), filtrée par langue — pagination via `{{ .Paginator }}`, uniquement les articles de la langue courante (dépend de T035)
- [X] T039 [US2] Ajouter le support des taxonomies de catégories dans `hugo.toml` (activer `[taxonomies] category = "categories"`) + créer `layouts/taxonomy/category.html` remplaçant les pages `blog-category-*.{lang}.html` Jekyll

### Consolidation CSS blog

- [X] T040 [US2] Migrer `assets/css/blog.css` vers `@layer components` et `@layer utilities` dans `assets/css/main.css` + migrer `assets/css/plan.css` (pricing avancé) + `comparison.css` — supprimer le code mort (dépend de T036, T038)

**Checkpoint US2** : Page blog liste tous les articles EN. Un article s'ouvre correctement avec image, contenu et navigation. Changement de langue fonctionnel. Filtre par catégorie opérationnel.

---

## Phase 5: User Story 3 - URLs préservées (Priority: P3)

**Goal**: Les URLs de blog générées par Hugo sont identiques aux URLs Jekyll. Zéro lien cassé.

**Independent Test**: Construire le site (`hugo`), inspecter `public/` et vérifier que les fichiers `.html` existent aux chemins attendus. Comparer 10 URLs Jekyll avec les fichiers générés.

- [X] T041 [US3] Vérifier 10 URLs de blog : extraire les permalinks Jekyll des 10 posts les plus récents (`grep "^permalink:" _posts/*.en.md | head -10`), résoudre les placeholders manuellement, vérifier que les fichiers correspondants existent dans `public/` après `hugo build`
- [X] T042 [US3] Corriger les `url:` incorrects dans les front matters si des écarts sont trouvés lors de T041 (répéter jusqu'à 0 écart)
- [X] T043 [US3] Vérifier les URLs de pages statiques : `hugo build` puis confirmer l'existence de `public/pricing/index.html`, `public/fr/pricing/index.html`, `public/es/pricing/index.html`, `public/contact/`, `public/about/`, `public/compare/` pour EN/FR/ES

**Checkpoint US3** : `hugo build` produit 0 warning d'URL. Les 10 articles vérifiés sont accessibles à leurs URLs Jekyll exactes.

---

## Phase 6: User Story 4 - Pipeline de build et déploiement (Priority: P4)

**Goal**: Le site Hugo se déploie automatiquement sur GitHub Pages via GitHub Actions à chaque push sur main.

**Independent Test**: Push un commit sur main → GitHub Actions réussit → Site accessible sur sinra.dev.

### Assets statiques

- [X] T044 Copier `assets/images/` vers `static/assets/images/` (préserve les URLs `/assets/images/...` dans les blog posts)
- [X] T045 [P] Copier `assets/js/script.js` et `assets/js/swiper-bundle.min.js` vers `static/assets/js/`
- [X] T046 [P] Copier les fichiers racine vers `static/` : `CNAME` → `static/CNAME`, `robots.txt` → `static/robots.txt`
- [X] T047 Créer `layouts/404.html` depuis `404.html` Jekyll : `{{ define "main" }}...{{ end }}` avec message d'erreur et lien vers accueil

### CI/CD

- [X] T048 [US4] Créer `.github/workflows/hugo.yml` calqué sur `~/Apps/tornade.github.io/.github/workflows/hugo.yml` : trigger `push main` + `workflow_dispatch`, install Hugo Extended (version fixée), checkout, setup Node 20 + cache npm, `npm ci`, `hugo --minify --baseURL "${{ steps.pages.outputs.base_url }}/"`, upload artifact `./public`, deploy via `actions/deploy-pages@v4`
- [X] T049 [P] [US4] Mettre à jour `.github/workflows/lighthouse.yml` : remplacer `bundle exec jekyll serve` par `hugo server`, mettre à jour le port de `4000` vers `1313`, retirer les étapes Ruby/Bundler

### Suppression des fichiers Jekyll

- [X] T050 [US4] Supprimer les fichiers de config Jekyll : `_config.yml`, `Gemfile`, `Gemfile.lock`, `.ruby-version`, `.ruby-gemset`, `mise.toml`, `index.html` (racine), `.github/workflows/jekyll.yml`
- [X] T051 [US4] Supprimer les répertoires Jekyll : `_layouts/`, `_includes/`, `_pages/`, `_posts/`, `_drafts/`, `_data/`, `_site/`, `.jekyll-cache/`
- [X] T052 [US4] Supprimer les anciens assets CSS Jekyll : `assets/css/blog.css`, `assets/css/comparison.css`, `assets/css/contact.css`, `assets/css/layout.css`, `assets/css/navbar.css`, `assets/css/plan.css`, `assets/css/theme.css` (tous remplacés par `assets/css/main.css`)

**Checkpoint US4** : GitHub Actions réussit sur un push test. Lighthouse CI passe (scores ≥ 90). Site accessible sur sinra.dev.

---

## Phase 7: Polish et cohérence transversale

**Purpose**: Mises à jour documentaires, nettoyage final, validation Lighthouse.

- [X] T053 Mettre à jour `.specify/memory/constitution.md` : remplacer les références Jekyll (Jekyll 4.3.4, Ruby 3.4.5, Liquid, `bundle exec jekyll serve`) par Hugo (Hugo Extended, Go templates, `hugo server`)
- [X] T054 Mettre à jour `CLAUDE.md` : section "Common Development Commands" remplacer `bundle exec jekyll serve` → `hugo server`, `bundle exec jekyll build` → `hugo`, ajouter `npm install` pour le setup initial
- [X] T055 [P] Créer `scripts/migrate-posts.sh` documentation en commentaires : expliquer chaque transformation front matter pour référence future
- [ ] T056 Test cross-browser final : Chrome, Firefox, Safari — vérifier à 320px, 768px, 1024px, 1440px sur accueil EN, article blog EN, pricing FR
- [X] T057 Vérifier le build `hugo --printPathWarnings` : 0 warning, 0 erreur, toutes les pages générées

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)** : Aucune dépendance - démarrer immédiatement
- **Fondation (Phase 2)** : Dépend de Phase 1 - BLOQUE toutes les user stories
- **US1 (Phase 3)** : Dépend de Phase 2 complète
- **US2 (Phase 4)** : Dépend de Phase 2 + US1 optionnel (blog listing réutilise le layout global)
- **US3 (Phase 5)** : Dépend de US2 (vérifie les URLs générées par les posts migrés)
- **US4 (Phase 6)** : T044-T047 dépendent de US1 complet ; T048-T052 dépendent de US1+US2+US3
- **Polish (Phase 7)** : Dépend de toutes les US

### User Story Dependencies

- **US1 (P1)** : Démarre après Phase 2 - aucune dépendance sur les autres US
- **US2 (P2)** : Démarre après Phase 2 - nécessite le layout global de US1 (baseof, navbar, footer)
- **US3 (P3)** : Démarre après US2 - vérifie les URLs produites par la migration de blog
- **US4 (P4)** : Peut démarrer les assets (T044-T047) après US1 ; CI/CD (T048-T052) après US1+US2+US3

### Parallelisme intra-phase

- **Phase 2 données** : T013, T014, T015 (i18n 3 langues) en parallèle ; T016, T017, T018 (data 3 langues) en parallèle
- **Phase 3 pages** : T019-T023 (sections homepage) en parallèle ; T025-T032 (pages statiques) en parallèle
- **Phase 4 templates** : T036 et T037 en parallèle (avant T038 qui dépend de T035)
- **Phase 6** : T044, T045, T046 en parallèle ; T048 et T049 en parallèle

---

## Parallel Example: US1 (Phase 3)

```text
# Lancer en parallèle (fichiers différents) :
T019 — layouts/partials/sections/hero.html
T020 — layouts/partials/sections/features.html
T021 — layouts/partials/sections/testimonials.html
T022 — layouts/partials/sections/trusted_by.html
T023 — layouts/partials/sections/contact-faq.html

# Puis lancer T024 (dépend de T019-T023) :
T024 — layouts/index.html (compose les sections)

# En parallèle avec les sections, lancer les pages statiques :
T025 — layouts/pricing/single.html
T027 — layouts/about/single.html
T029 — layouts/contact/single.html
T031 — layouts/compare/single.html
T026, T028, T030, T032 — content pages (front matter uniquement)
```

## Parallel Example: Phase 2 Données

```text
# i18n — 3 langues en parallèle :
T013 — i18n/en.yaml
T014 — i18n/fr.yaml
T015 — i18n/es.yaml

# data/ — 3 langues en parallèle :
T016 — data/en/ (11 fichiers)
T017 — data/fr/ (11 fichiers)
T018 — data/es/ (11 fichiers)
```

---

## Implementation Strategy

### MVP (US1 uniquement)

1. Compléter Phase 1 : Setup
2. Compléter Phase 2 : Fondation (CRITIQUE)
3. Compléter Phase 3 : US1
4. **STOP et VALIDER** : `hugo server` — naviguer sur toutes les pages principales EN/FR/ES
5. Optionnel : déployer en preview pour valider visuellement

### Livraison incrémentale

1. Phase 1 + 2 → Fondation prête
2. Phase 3 (US1) → Site principal fonctionnel → **Démo/deploy possible**
3. Phase 4 (US2) → Blog migré → **Démo/deploy**
4. Phase 5 (US3) → URLs vérifiées → **Démo/deploy**
5. Phase 6 (US4) → CI/CD opérationnel → **Production**
6. Phase 7 → Polish → **Merge final**

---

## Notes

- `[P]` = fichiers différents, aucune dépendance entre les tâches concernées
- `[USn]` = traceabilité vers la user story n du spec.md
- T034/T035 (script de migration) sont les tâches les plus risquées : valider sur 5 posts avant de lancer en batch
- T033 et T040 (consolidation CSS) doivent se faire APRÈS les templates pour auditer le code mort réel
- Committer après chaque checkpoint pour faciliter le retour arrière si nécessaire
- Garder `_posts/` et `_data/` jusqu'à validation complète de US2 et US3 avant T051
