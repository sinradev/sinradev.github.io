# QUICK FIXES - SNIPPETS À COPIER-COLLER

## FIX #1: Créer robots.txt (5 min)

```text
# /robots.txt
User-agent: *
Allow: /
Allow: /assets/
Disallow: /_site/
Disallow: /.git/
Disallow: /vendor/

Sitemap: https://sinra.dev/sitemap.xml
```

---

## FIX #2: Ajouter jekyll-sitemap au Gemfile (30 min)

Dans `Gemfile`, ajouter dans le bloc `jekyll_plugins`:
```ruby
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-polyglot"
  gem "jekyll-paginate"
  gem "jekyll-archives"
  gem "jekyll-sitemap"  # AJOUTER CETTE LIGNE
end
```

Puis:
```bash
cd /Users/thomas/Apps/sinra-website
bundle install
bundle exec jekyll build
```

---

## FIX #3: Fixer la page d'accueil (5 min)

Remplacer le contenu de `/index.html` par:

```yaml
---
layout: default
title: "Sinra: V-Model + Agile Project Management Tool | Unified Planning & QA"
description: "Stop shipping delayed. Sinra is the only project management tool combining V-Model and Agile. Real-time capacity planning, integrated QA, and release management in one platform."
lang: en
permalink: /
---
{% include index.html %}
```

---

## FIX #4: Fixer la description de pricing (2 min)

Modifier `/Users/thomas/Apps/sinra-website/_pages/pricing.en.html`:

Remplacer:
```yaml
description: You have a <strong>20% discount</strong> with the year round plan. Enjoy...
```

Par:
```yaml
description: "Sinra pricing plans for all team sizes. From flexible seat-based pricing to unlimited projects, advanced capacity planning, integrated QA, and release management."
```

---

## FIX #5: Corriger le bug Content-Language (1 min)

Modifier ligne 6 de `/Users/thomas/Apps/sinra-website/_layouts/default.html`:

De:
```html
<meta http-equiv="Content-Language" content="{ {site.active_lang }}">
```

À:
```html
<meta http-equiv="Content-Language" content="{{ site.active_lang }}">
```

---

## FIX #6: Ajouter les Canonical URLs (5 min)

Dans `/Users/thomas/Apps/sinra-website/_layouts/default.html`, ajouter après le `<title>`:

```html
<title>{{ page.title }}</title>
<link rel="canonical" href="{% if site.active_lang != 'en' %}{{ site.url }}/{{ site.active_lang }}{% endif %}{{ page.url }}">
```

---

## FIX #7: Ajouter Open Graph + Twitter Tags (10 min)

Ajouter dans `/Users/thomas/Apps/sinra-website/_layouts/default.html` après les favicon (avant `</head>`):

```html
<!-- Open Graph Tags -->
<meta property="og:title" content="{{ page.title | default: site.title }}">
<meta property="og:description" content="{{ page.description | default: site.description }}">
<meta property="og:url" content="{{ site.url }}{{ page.url }}">
<meta property="og:type" content="website">
<meta property="og:image" content="{{ site.url }}/assets/images/sinra-logo.svg">
<meta property="og:site_name" content="Sinra">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{ page.title | default: site.title }}">
<meta name="twitter:description" content="{{ page.description | default: site.description }}">
<meta name="twitter:image" content="{{ site.url }}/assets/images/sinra-logo.svg">
<meta name="twitter:site" content="@sinra">
<meta name="twitter:creator" content="@sinra">
```

---

## FIX #8: Ajouter JSON-LD Organization Schema (15 min)

Créer `/Users/thomas/Apps/sinra-website/_includes/seo-schema.html`:

```liquid
{% raw %}<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sinra",
  "url": "{{ site.url }}",
  "logo": "{{ site.url }}/assets/images/sinra-logo.svg",
  "description": "{{ site.description }}",
  "sameAs": [
    "https://twitter.com/sinra",
    "https://linkedin.com/company/sinra"
  ],
  "contact": {
    "@type": "ContactPoint",
    "email": "contact@sinra.dev",
    "contactType": "Sales",
    "availableLanguage": ["en", "fr"]
  }
}
</script>{% endraw %}
```

Puis ajouter dans `/Users/thomas/Apps/sinra-website/_layouts/default.html` après `</head>`:

```html
{% raw %}  {% include seo-schema.html %}{% endraw %}
```

---

## FIX #9: Ajouter JSON-LD Breadcrumbs (optionnel, 10 min)

Créer `/Users/thomas/Apps/sinra-website/_includes/breadcrumb-schema.html`:

```liquid
{% raw %}{% if page.url != "/" %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "{{ site.url }}"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "{{ page.title }}",
      "item": "{{ site.url }}{{ page.url }}"
    }
  ]
}
</script>
{% endif %}{% endraw %}
```

Utiliser dans la template page:

```html
{% raw %}{% include breadcrumb-schema.html %}{% endraw %}
```

---

## FIX #10: Minifier CSS avec jekyll-minifier (10 min)

Dans `Gemfile`:
```ruby
group :jekyll_plugins do
  # ... autres gems
  gem "jekyll-minifier"
end
```

Puis:
```bash
bundle install
bundle exec jekyll build
```

Le CSS sera automatiquement minifié dans `_site/assets/css/`

---

## FIX #11: Ajouter lien RSS au Footer (5 min)

Modifier `/Users/thomas/Apps/sinra-website/_includes/footer.html`, ajouter avant `</footer>`:

```html
<div class="rss-link">
  <a href="/feed.xml" type="application/rss+xml">
    RSS Feed
  </a>
</div>
```

---

## CHECKLIST RAPIDE

```
[  ] Créer robots.txt
[  ] Ajouter jekyll-sitemap au Gemfile
[  ] Fixer index.html avec title + description
[  ] Fixer pricing.en.html description
[  ] Corriger bug Content-Language
[  ] Ajouter canonical URLs
[  ] Ajouter Open Graph tags
[  ] Ajouter Twitter Card tags
[  ] Créer _includes/seo-schema.html (Organization)
[  ] Tester build: bundle exec jekyll build
[  ] Vérifier SITEMAPE généré: _site/sitemap.xml
[  ] Optionnel: jekyll-minifier
[  ] Optionnel: breadcrumb-schema.html
[  ] Optionnel: convertir images PNG en WebP
```

---

## COMMANDES UTILES

```bash
# Test build local
cd /Users/thomas/Apps/sinra-website
bundle exec jekyll serve

# Vérifier le sitemap généré
cat _site/sitemap.xml

# Vérifier robots.txt
cat robots.txt

# Vérifier hreflang dans la sortie
bundle exec jekyll build
grep "hreflang" _site/index.html

# Minifier CSS manuellement
npx csso assets/css/theme.css -o assets/css/theme.min.css

# Convertir PNG en WebP (require imagemagick)
convert assets/images/kanban-list-view.png assets/images/kanban-list-view.webp
```

---

**Snippet guide complété**
