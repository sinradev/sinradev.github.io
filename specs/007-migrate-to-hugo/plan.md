# Implementation Plan: Migration Jekyll vers Hugo

**Branch**: `007-migrate-to-hugo` | **Date**: 2026-04-07 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `specs/007-migrate-to-hugo/spec.md`

---

## Summary

Migration complète du site Sinra de Jekyll 4.3.4 vers Hugo Extended, en conservant le thème DaisyUI Dim via Tailwind v4 + PostCSS (pattern `~/Apps/tornade.github.io/`). Le site supporte EN/FR/ES, hébergé sur GitHub Pages. La migration est de type B : remplacement 1:1 du contenu + simplification/refactoring des CSS et templates. Les URLs de blog sont préservées via `url:` par post dans le front matter.

---

## Technical Context

**Language/Version**: Hugo Extended (dernière stable, ex: 0.147.0+), Node.js 20
**Primary Dependencies**: Hugo Extended, Tailwind CSS v4, DaisyUI v5, PostCSS v8, @tailwindcss/postcss
**Storage**: Fichiers statiques (YAML data, Markdown content, HTML templates)
**Testing**: Manuel via `hugo server` + Chrome/Firefox/Safari + Lighthouse CI (GitHub Actions)
**Target Platform**: GitHub Pages (déploiement via `actions/deploy-pages@v4`)
**Performance Goals**: Lighthouse ≥ 90 sur Performance, Accessibility, Best Practices, SEO
**Constraints**: URLs de blog préservées (`/{category}/YYYY/MM/DD/{slug}.html`), zéro perte SEO
**Scale/Scope**: 40+ articles de blog en 3 langues, ~15 pages statiques, 7 CSS consolidés en 1

---

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Règle Constitution | Statut | Note |
|--------------------|--------|------|
| DaisyUI Dim theme obligatoire | PASS | Conservé via `@plugin "daisyui" { themes: dim }` |
| Pas de SCSS / pas de preprocesseurs | PASS | Hugo Pipes + PostCSS uniquement (pas de Sass) |
| DaisyUI classes en HTML (pas de custom classes) | PASS | Templates à ré-écrire doivent respecter cette règle |
| Variables de thème (pas de couleurs hardcodées) | PASS | La consolidation CSS supprime les overrides hardcodés |
| Plain CSS uniquement | PASS | `@layer` dans main.css, pas de SCSS |
| Multilingual EN/FR/ES | PASS | Hugo natif via `[languages.*]` + `i18n/` |
| No em dash dans le contenu | PASS | Les posts existants sont conformes |
| Guillemets FR/ES : `«»`, EN : `""` | PASS | Contenu existant préservé tel quel |
| Lighthouse CI obligatoire après PR | PASS | `lighthouse.yml` mis à jour pour Hugo |
| Tests Cross-browser (Chrome, Firefox, Safari) | PASS | Test manuel maintenu |

**Violation potentielle** : La constitution mentionne "Jekyll 4.3.4" et "Plain CSS (no preprocessors)" dans le Technology Stack. Cette migration remplace Jekyll par Hugo et introduit PostCSS (via Hugo Pipes). PostCSS n'est pas un preprocesseur CSS au sens de Sass/SCSS - il est utilisé uniquement comme runner pour Tailwind v4, ce qui est déjà le cas dans le projet de référence `tornade.github.io`. La constitution sera mise à jour après validation de la migration pour refléter la nouvelle stack.

---

## Project Structure

### Documentation (this feature)

```text
specs/007-migrate-to-hugo/
├── plan.md              # Ce fichier
├── research.md          # Décisions architecturales
├── data-model.md        # Structure fichiers & templates
├── quickstart.md        # Guide développeur
└── tasks.md             # Phase 2 output (/speckit.tasks)
```

### Source Code (repository root - état post-migration)

```text
/ (racine du repo)
├── hugo.toml                       # Config Hugo (remplace _config.yml)
├── package.json                    # Deps Node: Tailwind v4, DaisyUI v5, PostCSS
├── postcss.config.js               # PostCSS runner (pattern tornade.github.io)
│
├── assets/
│   └── css/
│       └── main.css                # CSS unique compilé via Hugo Pipes
│
├── content/                        # Tout le contenu (remplace _pages/ + _posts/)
│   ├── _index.md                   # Homepage EN
│   ├── _index.fr.md
│   ├── _index.es.md
│   ├── about/
│   │   ├── _index.md
│   │   ├── _index.fr.md
│   │   └── _index.es.md
│   ├── pricing/
│   │   ├── _index.md
│   │   ├── _index.fr.md
│   │   └── _index.es.md
│   ├── contact/
│   │   ├── _index.md
│   │   ├── _index.fr.md
│   │   ├── _index.es.md
│   │   └── success/
│   ├── compare/
│   │   ├── _index.md
│   │   ├── _index.fr.md
│   │   ├── _index.es.md
│   │   ├── jira/
│   │   ├── asana/
│   │   └── monday/
│   └── blog/
│       ├── _index.md               # Blog listing EN
│       ├── _index.fr.md
│       ├── _index.es.md
│       └── posts/                  # Articles (flat, url: dans front matter)
│           ├── 2024-11-13-vmodel-vs-agile-choose-both.en.md
│           ├── 2024-11-13-vmodel-vs-agile-choose-both.fr.md
│           └── ... (40+ articles × 3 langues)
│
├── data/                           # Contenu structuré (tableaux YAML)
│   ├── en/
│   │   ├── index_sections.yaml
│   │   ├── index_features.yaml
│   │   ├── pricing.yaml
│   │   ├── pricing_faq.yaml
│   │   ├── testimonials.yaml
│   │   ├── trusted_clients.yaml
│   │   ├── footer.yaml
│   │   ├── contact_faq.yaml
│   │   ├── case_studies.yaml
│   │   ├── comparisons.yaml
│   │   └── blog_categories.yaml
│   ├── fr/
│   │   └── (mêmes fichiers)
│   └── es/
│       └── (mêmes fichiers)
│
├── i18n/                           # Labels courts et strings UI
│   ├── en.yaml                     ← depuis _data/en/strings.yml + navigation.yml
│   ├── fr.yaml
│   └── es.yaml
│
├── layouts/                        # Templates Hugo (remplace _layouts/ + _includes/)
│   ├── _default/
│   │   ├── baseof.html             # Squelette HTML global
│   │   ├── single.html             # Page générique (fallback)
│   │   └── list.html               # Section/liste générique
│   ├── partials/
│   │   ├── head.html               # <head>: SEO, CSS Pipes, hreflang, JSON-LD
│   │   ├── navbar.html             # Navigation + language switcher
│   │   ├── footer.html
│   │   ├── schema-org.html
│   │   └── sections/
│   │       ├── hero.html
│   │       ├── features.html
│   │       ├── pricing.html
│   │       ├── testimonials.html
│   │       ├── trusted_by.html
│   │       ├── contact-faq.html
│   │       └── comparison-table.html
│   ├── index.html                  # Homepage (compose les sections)
│   ├── about/single.html
│   ├── pricing/single.html
│   ├── contact/single.html
│   ├── compare/single.html
│   └── blog/
│       ├── list.html               # Liste des articles
│       └── single.html             # Article individuel
│
├── static/                         # Fichiers servis tels quels
│   ├── CNAME                       ← sinra.dev
│   ├── robots.txt
│   └── assets/
│       ├── images/                 ← Copie depuis assets/images/ (URLs préservées)
│       │   ├── blog/
│       │   └── ...
│       └── js/
│           ├── script.js
│           └── swiper-bundle.min.js
│
└── .github/
    └── workflows/
        ├── hugo.yml                # Remplace jekyll.yml
        └── lighthouse.yml          # Mis à jour pour Hugo (port 1313)
```

**Structure Decision**: Site statique monolihtique (Option 1 adaptée). Pas de backend, pas de frontend séparé. Toute la logique est dans `layouts/` et les données dans `content/`, `data/`, `i18n/`.

---

## Complexity Tracking

Aucune violation de constitution ne nécessite justification. La migration remplace la stack technique obsolète par une stack moderne équivalente, conformément à l'objectif de la feature.

---

## Plan d'implémentation par phases

### Phase A : Fondation Hugo (scaffolding)

**Objectif** : Un site Hugo qui compile et se lance, sans contenu.

1. **Initialiser Hugo** dans le repo existant
   - `hugo new site . --force` (ou créer manuellement `hugo.toml`)
   - Créer `hugo.toml` avec config EN/FR/ES, permalinks, taxonomies
   - Créer `package.json` + `postcss.config.js` (copie de `tornade.github.io`)

2. **Pipeline CSS**
   - Créer `assets/css/main.css` avec `@import "tailwindcss"`, `@source`, `@plugin "daisyui" { themes: dim }`
   - `npm install`
   - Vérifier que `hugo server` compile le CSS sans erreur

3. **Squelette de layout**
   - `layouts/_default/baseof.html` : `<html data-theme="dim">`, `{{ partial "head.html" . }}`, `{{ block "main" . }}{{ end }}`
   - `layouts/partials/head.html` : meta charset, viewport, CSS Pipes, canonical, hreflang
   - `layouts/partials/navbar.html` : stub (navbar vide fonctionnelle)
   - `layouts/partials/footer.html` : stub
   - `layouts/index.html` : `{{ define "main" }}<h1>Hello Hugo</h1>{{ end }}`
   - `content/_index.md` + `_index.fr.md` + `_index.es.md`

**Critère de validation** : `hugo server` lance sans erreur, `http://localhost:1313` affiche une page avec le thème Dim actif.

---

### Phase B : Partials et layout global

**Objectif** : Navbar, footer et head complets, fidèles au design Jekyll.

1. **`layouts/partials/head.html`** complet
   - Title dynamique, description, canonical
   - Hreflang pour EN/FR/ES + x-default
   - Open Graph + Twitter Card (depuis `.Params`)
   - JSON-LD (SoftwareApplication + Organization, depuis `hugo.toml [params.jsonld]`)
   - CSS Hugo Pipes (PostCSS + minify + fingerprint)
   - Référence : `~/Apps/tornade.github.io/layouts/partials/head.html`

2. **`layouts/partials/navbar.html`**
   - Réécriture depuis `_includes/header.html` Jekyll
   - Logo, menus, language switcher (`.AllTranslations`)
   - DaisyUI classes : `navbar`, `dropdown`, `btn-ghost`, etc.
   - CSS simplifié : supprimer `navbar.css` (remplacé par classes DaisyUI)

3. **`layouts/partials/footer.html`**
   - Réécriture depuis `_includes/footer.html`
   - Liens, copyright, navigation
   - Strings via `{{ i18n "..." }}`

**Critère de validation** : Navbar et footer apparaissent correctement en EN, FR et ES.

---

### Phase C : Migration des données

**Objectif** : Toutes les données Jekyll accessibles dans Hugo.

1. **`i18n/` files** : Extraire `strings.yml` + `navigation.yml` de `_data/{lang}/` → `i18n/{lang}.yaml`
   - Adapter les clés (supprimer namespacing si présent)
   - Vérifier `{{ i18n "key" }}` dans un template de test

2. **`data/` files** : Copier les fichiers YAML structurés depuis `_data/{lang}/` vers `data/{lang}/`
   - `index_sections.yml`, `index_features.yml`, `pricing.yml`, `testimonials.yml`, `trusted_clients.yml`, `footer.yml`, `contact_faq.yml`, `case_studies.yml`, `comparisons.yml`, `blog_categories.yml`, `pricing_faq.yml`
   - Vérifier l'accès : `{{ $data := index site.Data .Page.Language.Lang "pricing" }}`

**Critère de validation** : Un template de debug affiche les données en EN, FR, ES sans erreur.

---

### Phase D : Homepage

**Objectif** : Page d'accueil identique au site Jekyll, avec simplification CSS.

1. **Sections partials** (depuis `_includes/index.html` Jekyll) :
   - `layouts/partials/sections/hero.html` : titre, CTA, illustration
   - `layouts/partials/sections/features.html` : grille de features depuis `data/{lang}/index_features.yaml`
   - `layouts/partials/sections/testimonials.html` : cards depuis `data/{lang}/testimonials.yaml`
   - `layouts/partials/sections/trusted_by.html` : logos clients
   - `layouts/partials/sections/contact-faq.html` : accordéon FAQ

2. **`layouts/index.html`** : Compose les sections dans l'ordre

3. **CSS simplification** : À chaque partial, utiliser les classes DaisyUI maximalement ; migrer les styles custom dans `@layer components` de `main.css` ; supprimer le code mort de `layout.css`

**Critère de validation** : Page d'accueil EN/FR/ES identique visuellement au site Jekyll côte à côte.

---

### Phase E : Pages statiques

**Objectif** : Toutes les pages non-blog migrées.

1. **Pricing** : `layouts/pricing/single.html` + `content/pricing/_index.{lang}.md`
   - Réécriture depuis `_includes/pricing.html` + `_pages/pricing.{lang}.html`
   - Supprimer `plan.css` (remplacer par DaisyUI cards/badges)

2. **Contact** : `layouts/contact/single.html` + page success
   - Réécriture depuis `_includes/contact.html`
   - Formulaire existant (method, action préservés)
   - Supprimer `contact.css`

3. **About** : `layouts/about/single.html`
   - Réécriture depuis `_includes/about.html`

4. **Compare** + pages par outil (Jira, Asana, Monday) :
   - `layouts/compare/single.html` + partiel `comparison-table.html`
   - Données depuis `data/{lang}/comparisons.yaml`
   - Simplifier `comparison.css` vers `@layer`

5. **Blog listing** : `layouts/blog/list.html`
   - Liste paginée des articles, filtrage par catégorie
   - Remplace les pages `blog-category-*.{lang}.html` Jekyll (via taxonomies Hugo)

**Critère de validation** : Toutes les pages s'affichent sans erreur 404 en EN/FR/ES.

---

### Phase F : Migration des articles de blog

**Objectif** : 40+ articles × 3 langues migrés avec URLs préservées.

1. **Script de migration** (bash ou Python) :
   - Entrée : `_posts/YYYY-MM-DD-slug.lang.md`
   - Transformations front matter :
     - `layout: post` → supprimer
     - `permalink: /cat/:year/:month/:day/slug.html` → `url: /cat/YYYY/MM/DD/slug.html` (résolution des placeholders avec la date du post)
     - `category: Foo` → `categories: ["Foo"]`
     - `lang: en` → supprimer (géré par le suffixe fichier)
     - `date: 2026-03-27 09:00:00 +0100` → `date: 2026-03-27T09:00:00+01:00`
   - Sortie : `content/blog/posts/YYYY-MM-DD-slug.en.md`

2. **Template article** : `layouts/blog/single.html`
   - Réécriture depuis `_layouts/post.html` (si existant) ou recréé
   - Featured image, titre, subtitle, date, catégorie, contenu Markdown
   - Navigation précédent/suivant
   - Simplifier `blog.css` → `@layer prose/components` dans `main.css`

3. **Validation URLs** : Vérifier que chaque article est accessible à son URL `.html` d'origine

**Critère de validation** : Les 10 articles les plus récents sont accessibles à leurs URLs Jekyll exactes. La liste blog s'affiche correctement.

---

### Phase G : Assets statiques

**Objectif** : Images, JS et fichiers spéciaux correctement servis.

1. **Images** : Copier `assets/images/` vers `static/assets/images/`
   - Les URLs `/assets/images/...` sont préservées automatiquement

2. **JavaScript** : Copier `assets/js/script.js` + `assets/js/swiper-bundle.min.js` vers `static/assets/js/`
   - Mettre à jour les `<script src="...">` dans les templates si nécessaire

3. **Fichiers racine** : Copier vers `static/`
   - `CNAME` → `static/CNAME`
   - `robots.txt` → `static/robots.txt`
   - `404.html` → à recréer comme layout Hugo (`layouts/404.html`)

**Critère de validation** : Images chargées, JS fonctionnel, CNAME présent dans `public/`.

---

### Phase H : CI/CD et nettoyage

**Objectif** : Pipeline de déploiement opérationnel, fichiers Jekyll supprimés.

1. **`.github/workflows/hugo.yml`** : Nouveau workflow
   - Calqué sur `~/Apps/tornade.github.io/.github/workflows/hugo.yml`
   - Hugo Extended + Node 20 + npm ci + hugo --minify + deploy-pages

2. **`.github/workflows/lighthouse.yml`** : Mise à jour
   - Remplacer `jekyll serve` par `hugo server`
   - Mettre à jour le port de test : `http://localhost:1313`

3. **Suppression des fichiers Jekyll** :
   - `_config.yml`, `Gemfile`, `Gemfile.lock`, `.ruby-version`, `.ruby-gemset`, `mise.toml`
   - `_layouts/`, `_includes/`, `_pages/`, `_posts/`, `_drafts/`
   - `_data/` (migré vers `data/` et `i18n/`)
   - `assets/css/` (remplacé par `assets/css/main.css` Hugo Pipes)
   - `.github/workflows/jekyll.yml`
   - `index.html` (racine Jekyll)
   - `_site/`, `.jekyll-cache/`, `.jekyll-metadata`

4. **Mise à jour CLAUDE.md + constitution.md** : Refléter la nouvelle stack Hugo

**Critère de validation** :
- `hugo build` réussit sans erreurs
- GitHub Actions déploie sur GitHub Pages sans intervention manuelle
- Lighthouse CI valide les scores ≥ 90 sur les pages principales

---

## Post-Constitution Check

Après Phase 1 (design), re-vérification :

| Règle | Statut post-design |
|-------|--------------------|
| DaisyUI Dim | PASS - `@plugin "daisyui" { themes: dim }` |
| Plain CSS / pas de SCSS | PASS - PostCSS uniquement, `@layer` CSS natif |
| DaisyUI classes en HTML | PASS - Templates ré-écrits utilisent `btn`, `card`, `navbar`, etc. |
| Pas de couleurs hardcodées | PASS - Toutes les couleurs via variables DaisyUI |
| Multilingual EN/FR/ES | PASS - Hugo natif `[languages.*]` + `i18n/` |
| URLs préservées | PASS - `url:` front matter par post |
| Lighthouse ≥ 90 | À valider - CSS unique + minify Hugo devraient améliorer les scores |

---

## Risques et mitigations

| Risque | Impact | Mitigation |
|--------|--------|------------|
| CSS custom non couvert par DaisyUI Dim | Moyen | Audit `theme.css` avant migration - identifier les overrides réels |
| Script de migration des permalinks raté | Haut | Valider sur 5 posts avant de lancer en batch; test URL par URL |
| Lighthouse CI échoue (port 1313 vs 4000) | Faible | Mettre à jour `lighthouse.yml` en Phase H |
| Images référencées en `/assets/images/` non trouvées | Moyen | Copier dans `static/assets/images/` (pas `static/images/`) |
| Front matter Hugo invalide (dates, arrays) | Moyen | Le script de migration gère la conversion de format |

---

## Artifacts générés

| Fichier | Description |
|---------|-------------|
| [research.md](research.md) | Décisions architecturales + rationale |
| [data-model.md](data-model.md) | Structure complète fichiers, templates, données |
| [quickstart.md](quickstart.md) | Guide développeur pour lancer et contribuer |
| tasks.md | À générer via `/speckit.tasks` |
