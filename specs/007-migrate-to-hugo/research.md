# Research: Migration Jekyll vers Hugo

**Branch**: `007-migrate-to-hugo` | **Date**: 2026-04-07

---

## Décision 1 : Structure des URLs de blog

**Décision**: Utiliser `url:` par post dans le front matter Hugo pour préserver les URLs exactes de Jekyll.

**Rationale**: Les URLs Jekyll sont de la forme `/{category}/YYYY/MM/DD/{slug}.html` (ex: `/methodology/2025/12/01/release-driven-development.html`). Chaque post a une catégorie différente (Methodology, Planning, Documentation, etc.), rendant une configuration globale de permalink insuffisante. La solution `url:` par post est la plus directe : elle mappe 1:1 depuis le champ `permalink:` Jekyll.

**Comment**: Migration script convertit :
```
permalink: /methodology/:year/:month/:day/release-driven-development.html
```
→ front matter Hugo :
```yaml
url: /methodology/2025/12/01/release-driven-development.html
```

**Alternatives considérées**:
- Sections par catégorie (`content/methodology/`, `content/planning/`, ...) : trop de répertoires (15+), complexifie la navigation.
- `uglyURLs = true` global + sections : fonctionnel mais oblige à organiser les fichiers par catégorie.
- Redirections 301 : implique des URLs différentes, risque SEO.

---

## Décision 2 : Consolidation CSS pour Tailwind v4

**Décision**: Fusionner les 7 fichiers CSS Jekyll (`theme.css`, `blog.css`, `layout.css`, `navbar.css`, `comparison.css`, `contact.css`, `plan.css`) en un seul `assets/css/main.css`.

**Rationale**: Tailwind v4 + DaisyUI v5 via Hugo Pipes exigent un point d'entrée unique. Les variables de thème DaisyUI Dim seront définies via le bloc `@plugin "daisyui" { themes: dim }`, remplaçant la majorité du contenu de `theme.css`. Les styles véritablement personnalisés sont extraits dans des blocs `@layer`.

**Structure `main.css`**:
```css
@import "tailwindcss";
@source "../../layouts/**/*.html";
@source "../../content/**/*.md";

@plugin "daisyui" {
  themes: dim;
  logs: false;
}

/* Custom overrides — uniquement ce que DaisyUI Dim ne couvre pas */
@layer components { ... }
@layer utilities { ... }
```

**Alternatives considérées**:
- Garder les fichiers CSS séparés et les importer : non compatible avec Hugo Pipes (un seul point d'entrée PostCSS).
- Utiliser un thème DaisyUI custom séparé : complexité inutile, Dim est un thème officiel.

---

## Décision 3 : Stratégie de données i18n vs data/

**Décision**: Split selon le type de contenu.

| Fichier Jekyll (`_data/{lang}/`) | Destination Hugo | Accès dans template |
|----------------------------------|-----------------|---------------------|
| `strings.yml`, `navigation.yml` | `i18n/{lang}.yaml` | `{{ i18n "key" }}` |
| `index_sections.yml`, `index_features.yml` | `data/{lang}/index_sections.yaml` | `{{ site.Data.en.index_sections }}` |
| `pricing.yml`, `testimonials.yml` | `data/{lang}/pricing.yaml` | `{{ site.Data.fr.pricing }}` |
| `footer.yml`, `contact_faq.yml` | `data/{lang}/footer.yaml` | `{{ site.Data.es.footer }}` |
| `case_studies.yml`, `comparisons.yml` | `data/{lang}/case_studies.yaml` | idem |

**Rationale**: Convention Hugo standard. `i18n/` pour les labels courts et boutons (scalable, clé par clé). `data/` pour les tableaux de contenu structuré (sections, items, features).

**Alternatives considérées**:
- Tout dans `data/` : fonctionne mais perd le raccourci `i18n "key"` pour les strings simples.
- Tout dans `i18n/` : inadapté pour les tableaux YAML (listes de features, pricing tiers).

---

## Décision 4 : Emplacement des images

**Décision**: `static/assets/images/` → servi à `/assets/images/` (chemin identique à Jekyll).

**Rationale**: Préserve toutes les références d'images dans les blog posts front matter (`featured_image: /assets/images/blog/...`) sans migration. Zéro modification des 40+ posts.

**Alternatives considérées**:
- `static/images/` → URLs changent, nécessite de mettre à jour 40+ posts.
- `assets/images/` via Hugo Pipes → surcharge inutile pour des images statiques.

---

## Décision 5 : Workflow GitHub Actions

**Décision**: Remplacer `jekyll.yml` par `hugo.yml` calqué sur `~/Apps/tornade.github.io/.github/workflows/hugo.yml`.

**Étapes clés**:
1. Install Hugo Extended (version fixée, ex: 0.147.0)
2. Checkout + submodules
3. Setup Node.js v20 + npm cache
4. `npm ci` (install Tailwind v4 + DaisyUI v5 + PostCSS)
5. `hugo --minify --baseURL "${{ steps.pages.outputs.base_url }}/"`
6. Upload `./public` artifact
7. Deploy via `actions/deploy-pages@v4`

**Lighthouse CI** (`lighthouse.yml`) : mettre à jour l'URL de base depuis `http://localhost:4000` (Jekyll) vers `http://localhost:1313` (Hugo dev server), ou tester sur l'URL GitHub Pages déployée.

---

## Décision 6 : Gestion des pages statiques (non-blog)

**Décision**: Pages dans `content/`, templates dans `layouts/`.

| Page Jekyll (`_pages/`) | Contenu Hugo | Template Hugo |
|-------------------------|--------------|---------------|
| `index.html` | `content/_index.{lang}.md` | `layouts/index.html` |
| `about.{lang}.html` | `content/about/_index.{lang}.md` | `layouts/about/single.html` ou partials |
| `pricing.{lang}.html` | `content/pricing/_index.{lang}.md` | `layouts/pricing/single.html` |
| `contact.{lang}.html` | `content/contact/_index.{lang}.md` | `layouts/contact/single.html` |
| `compare.{lang}.html` | `content/compare/_index.{lang}.md` | `layouts/compare/single.html` |
| `compare-jira.{lang}.html` | `content/compare/jira/_index.{lang}.md` | `layouts/compare/jira/single.html` |
| `blog.{lang}.html` | `content/blog/_index.{lang}.md` | `layouts/blog/list.html` |

Les pages de catégories de blog (actuellement `blog-category-methodology.{lang}.html`) sont remplacées par les **taxonomies Hugo** (`layouts/taxonomy/category.html`).

---

## Décision 7 : Suppression de Jekyll

**Fichiers à supprimer après migration validée**:
- `_config.yml`, `Gemfile`, `Gemfile.lock`, `.ruby-version`, `.ruby-gemset`, `mise.toml`
- `_layouts/`, `_includes/`, `_pages/`, `_posts/`, `_drafts/`
- `_data/`, `_site/`, `.jekyll-cache/`
- `assets/css/` (remplacé par Hugo Pipes)
- `.github/workflows/jekyll.yml`
- `index.html` (racine Jekyll)

**Fichiers Jekyll conservés temporairement** (double-run possible) : aucun, la migration est un remplacement complet sur la branche dédiée.

---

## Références

- Pattern Hugo + Tailwind v4 + DaisyUI v5 : `~/Apps/tornade.github.io/`
- Workflow GitHub Actions Hugo : `~/Apps/tornade.github.io/.github/workflows/hugo.yml`
- Template head.html (SEO, hreflang, JSON-LD, CSS Pipes) : `~/Apps/tornade.github.io/layouts/partials/head.html`
- i18n pattern : `~/Apps/tornade.github.io/i18n/en.yaml`
