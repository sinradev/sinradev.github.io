# Data Model: Migration Jekyll vers Hugo

**Branch**: `007-migrate-to-hugo` | **Date**: 2026-04-07

---

## Vue d'ensemble

Ce site est un **site statique** : pas de base de données, pas d'API. Le "data model" décrit la structure des fichiers de données, de contenu et de templates qui forment le site Hugo.

---

## 1. Configuration (hugo.toml)

Fichier central remplaçant `_config.yml` + la configuration jekyll-polyglot.

```toml
baseURL = 'https://sinra.dev/'
defaultContentLanguage = 'en'
defaultContentLanguageInSubdir = false
enableRobotsTXT = true
disableKinds = ['taxonomy', 'term']  # ou activer taxonomies pour categories blog

[params]
  author = "Sinra"
  ogImage = "/assets/images/og-image.png"

[permalinks.page]
  # Les posts utilisent url: dans leur front matter — pas de règle globale ici

[languages.en]
  languageCode = 'en'
  languageName = 'English'
  title = 'Sinra'
  weight = 1
  [languages.en.params]
    description = "..."
    locale = "en_US"

[languages.fr]
  languageCode = 'fr'
  languageName = 'Français'
  title = 'Sinra'
  weight = 2

[languages.es]
  languageCode = 'es'
  languageName = 'Español'
  title = 'Sinra'
  weight = 3

[taxonomies]
  category = "categories"

[sitemap]
  changefreq = 'monthly'
  priority = 1.0
```

---

## 2. Données de traduction (i18n/)

### Structure

```
i18n/
├── en.yaml   ← depuis _data/en/strings.yml + navigation.yml
├── fr.yaml   ← depuis _data/fr/strings.yml + navigation.yml
└── es.yaml   ← depuis _data/es/strings.yml + navigation.yml
```

### Schéma YAML (clés représentatives)

```yaml
# Navigation
nav_home: "Home"
nav_pricing: "Pricing"
nav_blog: "Blog"
nav_contact: "Contact"
nav_about: "About"

# CTA communs
cta_start_free: "Start for free"
cta_learn_more: "Learn more"
cta_contact_us: "Contact us"

# Labels génériques
label_read_more: "Read more"
label_published_on: "Published on"
label_category: "Category"
label_back_to_blog: "Back to blog"
```

### Utilisation dans templates

```html
{{ i18n "cta_start_free" }}
{{ i18n "nav_pricing" }}
```

---

## 3. Données de contenu structuré (data/)

### Structure

```
data/
├── en/
│   ├── index_sections.yaml
│   ├── index_features.yaml
│   ├── pricing.yaml
│   ├── pricing_faq.yaml
│   ├── testimonials.yaml
│   ├── trusted_clients.yaml
│   ├── footer.yaml
│   ├── contact_faq.yaml
│   ├── case_studies.yaml
│   ├── comparisons.yaml
│   ├── strings.yaml         ← Sections trop longues pour i18n
│   └── blog_categories.yaml
├── fr/
│   └── (mêmes fichiers)
└── es/
    └── (mêmes fichiers)
```

### Schéma : `pricing.yaml`

```yaml
plans:
  - id: starter
    name: "Starter"
    price: "Free"
    description: "For small teams getting started"
    features:
      - "Up to 5 users"
      - "10 projects"
    cta: "Get started"
    highlighted: false
  - id: pro
    name: "Pro"
    ...
```

### Schéma : `index_sections.yaml`

```yaml
hero:
  title: "..."
  subtitle: "..."
  cta_primary: "..."
  cta_secondary: "..."

features_title: "..."
features_subtitle: "..."
```

### Schéma : `testimonials.yaml`

```yaml
items:
  - author: "Jane Doe"
    role: "Engineering Lead"
    company: "Acme Corp"
    quote: "..."
    avatar: "/assets/images/testimonials/jane.webp"
```

### Utilisation dans templates

```html
{{ $data := index site.Data .Page.Language.Lang "pricing" }}
{{ range $data.plans }}
  <div>{{ .name }}</div>
{{ end }}
```

---

## 4. Contenu (content/)

### Structure complète

```
content/
├── _index.md               ← Homepage EN
├── _index.fr.md
├── _index.es.md
│
├── about/
│   ├── _index.md
│   ├── _index.fr.md
│   └── _index.es.md
│
├── pricing/
│   ├── _index.md
│   ├── _index.fr.md
│   └── _index.es.md
│
├── contact/
│   ├── _index.md
│   ├── _index.fr.md
│   ├── _index.es.md
│   └── success/
│       ├── _index.md
│       ├── _index.fr.md
│       └── _index.es.md
│
├── compare/
│   ├── _index.md            ← Page compare principale
│   ├── _index.fr.md
│   ├── _index.es.md
│   ├── jira/
│   │   ├── _index.md
│   │   ├── _index.fr.md
│   │   └── _index.es.md
│   ├── asana/
│   └── monday/
│
└── blog/
    ├── _index.md            ← Blog listing EN
    ├── _index.fr.md
    ├── _index.es.md
    └── posts/               ← Tous les articles (flat)
        ├── 2024-11-13-vmodel-vs-agile-choose-both.en.md
        ├── 2024-11-13-vmodel-vs-agile-choose-both.fr.md
        ├── 2024-11-13-vmodel-vs-agile-choose-both.es.md
        └── ...
```

### Schéma : Front matter d'un article de blog (Hugo)

```yaml
---
title: "History and Types of Agility: How to Actually Work Better"
subtitle: "..."
description: "..."
date: 2026-03-27T09:00:00+01:00
lang: en
categories: ["Methodology"]
excerpt: "..."
featured_image: /assets/images/blog/2026-03-27-histoire-agilite-featured.png
url: /methodology/2026/03/27/history-types-agility.html
---
```

**Mapping Jekyll → Hugo front matter**:

| Champ Jekyll | Champ Hugo | Notes |
|--------------|-----------|-------|
| `layout: post` | (supprimé) | Déterminé par le type de contenu Hugo |
| `permalink: /cat/:year/:month/:day/slug.html` | `url: /cat/YYYY/MM/DD/slug.html` | Résolution des placeholders |
| `category: Methodology` | `categories: ["Methodology"]` | Jekyll singulier → Hugo tableau |
| `lang: en` | (supprimé) | Géré par le suffixe de fichier `.en.md` |
| `date: 2026-03-27 09:00:00 +0100` | `date: 2026-03-27T09:00:00+01:00` | Format ISO 8601 |
| `excerpt:` | `summary:` (ou garder `excerpt:` via `.Params.excerpt`) | |
| `featured_image:` | `featured_image:` | Conservé dans `.Params` |

### Schéma : Front matter d'une page statique (Hugo)

```yaml
---
title: "Pricing"
description: "..."
layout: pricing
---
```

---

## 5. Templates (layouts/)

### Hiérarchie

```
layouts/
├── _default/
│   ├── baseof.html          ← Squelette HTML (html/head/body)
│   ├── single.html          ← Page générique (fallback)
│   └── list.html            ← Liste de section générique
│
├── partials/
│   ├── head.html            ← <head>: meta, CSS, SEO, JSON-LD, hreflang
│   ├── navbar.html          ← Navigation + language switcher
│   ├── footer.html          ← Footer
│   ├── schema-org.html      ← JSON-LD structuré
│   └── sections/
│       ├── hero.html
│       ├── features.html
│       ├── pricing.html
│       ├── testimonials.html
│       ├── trusted_by.html
│       ├── contact-faq.html
│       └── comparison-table.html
│
├── index.html               ← Homepage (compose les sections)
│
├── about/
│   └── single.html          ← Page about
│
├── pricing/
│   └── single.html          ← Page pricing
│
├── contact/
│   ├── single.html          ← Formulaire contact
│   └── success/
│       └── single.html
│
├── compare/
│   └── single.html          ← Page comparaisons
│
└── blog/
    ├── list.html            ← Liste des articles
    └── single.html          ← Article individuel
```

### Équivalences Jekyll → Hugo

| Jekyll | Hugo |
|--------|------|
| `_layouts/default.html` | `layouts/_default/baseof.html` |
| `_includes/header.html` | `layouts/partials/navbar.html` |
| `_includes/footer.html` | `layouts/partials/footer.html` |
| `_includes/index.html` | `layouts/partials/sections/hero.html` + etc. |
| `_includes/blog.html` | `layouts/blog/list.html` |
| `_includes/pricing.html` | `layouts/partials/sections/pricing.html` |
| `{% include nav.html %}` | `{{ partial "navbar.html" . }}` |
| `{{ site.data[page.lang].pricing }}` | `{{ index site.Data .Page.Language.Lang "pricing" }}` |
| `{{ site.data[page.lang].strings.key }}` | `{{ i18n "key" }}` |

---

## 6. Assets statiques (static/)

```
static/
├── CNAME                    ← sinra.dev
├── robots.txt
└── assets/
    ├── images/              ← Copie depuis assets/images/ Jekyll
    │   ├── blog/            ← Featured images + illustrations
    │   ├── logos/
    │   └── og-image.png
    └── js/
        ├── script.js
        └── swiper-bundle.min.js
```

Les URLs `/assets/images/...` et `/assets/js/...` sont préservées.

---

## 7. CSS (assets/css/main.css)

```
assets/
└── css/
    └── main.css             ← Point d'entrée unique Hugo Pipes
```

**Contenu de `main.css`**:
```css
@import "tailwindcss";

@source "../../layouts/**/*.html";
@source "../../content/**/*.md";

@plugin "daisyui" {
  themes: dim;
  logs: false;
}

/* Overrides spécifiques Sinra — @layer components */
@layer components {
  /* Styles résiduels non couverts par DaisyUI Dim */
  /* Ex: typographie blog, comparaison table, plan de pricing */
}
```

**CSS consolidé depuis Jekyll** (simplification scope B):
- `theme.css` → Variables DaisyUI Dim remplacées par le plugin; overrides custom dans `@layer`
- `blog.css` → `@layer components { .prose ... }` dans main.css
- `layout.css`, `navbar.css`, `comparison.css`, `contact.css`, `plan.css` → sections `@layer` dans main.css

---

## 8. CI/CD (.github/workflows/)

### hugo.yml (remplace jekyll.yml)

Étapes principales (calqué sur `~/Apps/tornade.github.io/.github/workflows/hugo.yml`):
1. Checkout (avec submodules récursifs si nécessaire)
2. Install Hugo Extended (version fixée)
3. Setup Node.js v20 + cache npm
4. `npm ci`
5. `hugo --minify --baseURL "${{ steps.pages.outputs.base_url }}/"`
6. Upload artifact `./public`
7. Deploy via `actions/deploy-pages@v4`

### lighthouse.yml (mis à jour)

- Remplacer le serveur Jekyll (`bundle exec jekyll serve`) par Hugo (`hugo server`)
- URL de test : `http://localhost:1313`
