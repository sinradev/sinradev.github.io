# Plan d'Action SEO - Sinra Website

**Date:** 2026-01-14
**Score actuel:** 8.5/10
**Objectif:** 9.5/10
**Statut:** ⚠️ Corrections critiques requises avant production

---

## 🔴 PHASE 1: CORRECTIONS CRITIQUES (AVANT PRODUCTION)

**Timeline:** Immédiat (1-2 jours)
**Impact:** Critique - bloque le référencement correct

### 1.1 Corriger les URLs localhost dans les sitemaps

**Problème:** Les sitemaps générés contiennent `http://localhost:4000` au lieu de `https://sinra.dev`

**Fichier:** `_config.yml`

**Action:**
```yaml
# Vérifier que cette ligne est bien présente
url: "https://sinra.dev"

# S'assurer de build en mode production
JEKYLL_ENV=production bundle exec jekyll build
```

**Vérification:**
```bash
# Après build production, vérifier:
grep -r "localhost" _site/sitemap.xml
# Résultat attendu: aucune ligne
```

**Impact SEO:** Très élevé - Google ne peut pas indexer correctement avec des URLs localhost

---

### 1.2 Ajouter sitemap ES dans robots.txt

**Problème:** Le sitemap espagnol existe mais n'est pas déclaré dans robots.txt

**Fichier:** `robots.txt` (ligne 13)

**Action:**
```diff
Sitemap: https://sinra.dev/sitemap.xml
Sitemap: https://sinra.dev/fr/sitemap.xml
+Sitemap: https://sinra.dev/es/sitemap.xml
```

**Vérification:**
```bash
curl https://sinra.dev/robots.txt | grep "es/sitemap"
```

**Impact SEO:** Élevé - pages ES non découvertes par Google

---

### 1.3 Implémenter hreflang complet pour pages statiques

**Problème:** Les pages statiques (pricing, about, contact) n'ont pas de hreflang

**Fichier:** `_layouts/default.html` ou créer `_includes/hreflang.html`

**Action actuelle:**
```liquid
<!-- AVANT: Seulement pour posts blog -->
{% if page.layout == 'post' %}
  <!-- hreflang pour FR seulement -->
{% endif %}
```

**Action requise:**
```liquid
<!-- APRÈS: Pour TOUTES les pages -->
{% assign translations = site.data.page_translations[page.url] %}

<!-- Self-reference -->
<link rel="alternate" hreflang="{{ page.lang }}" href="{{ site.url }}{{ page.url }}" />

<!-- English -->
{% if page.lang != 'en' and translations.en %}
  <link rel="alternate" hreflang="en" href="{{ site.url }}{{ translations.en }}" />
{% endif %}

<!-- French -->
{% if page.lang != 'fr' and translations.fr %}
  <link rel="alternate" hreflang="fr" href="{{ site.url }}{{ translations.fr }}" />
{% endif %}

<!-- Spanish -->
{% if page.lang != 'es' and translations.es %}
  <link rel="alternate" hreflang="es" href="{{ site.url }}{{ translations.es }}" />
{% endif %}

<!-- x-default (fallback to English) -->
<link rel="alternate" hreflang="x-default" href="{{ site.url }}{{ translations.en | default: page.url }}" />
```

**Créer fichier de mapping:**
```yaml
# _data/page_translations.yml
/pricing/:
  en: /pricing/
  fr: /fr/prix/
  es: /es/precios/

/about/:
  en: /about/
  fr: /fr/a-propos/
  es: /es/acerca-de/

/contact/:
  en: /contact/
  fr: /fr/contact/
  es: /es/contacto/
```

**Impact SEO:** Élevé - Google ne sait pas quelle version servir par langue

---

### 1.4 Ajouter hreflang ES pour articles blog

**Problème:** Articles trilingues ont hreflang EN↔FR mais pas ES

**Fichier:** `_includes/language-alternates.html`

**Action:**
```liquid
<!-- AVANT: -->
{% if page.layout == 'post' %}
  {% assign alternate_posts = site.posts | where: "lang", "fr" %}
  <link rel="alternate" hreflang="fr" href="{{ alternate_post.url }}" />
{% endif %}

<!-- APRÈS: Ajouter ES -->
{% if page.layout == 'post' %}
  {% for lang in site.languages %}
    {% if lang != page.lang %}
      {% assign alternate = site.posts | where: "lang", lang | where_exp: "item", "item.slug == page.slug" | first %}
      {% if alternate %}
        <link rel="alternate" hreflang="{{ lang }}" href="{{ site.url }}{{ alternate.url }}" />
      {% endif %}
    {% endif %}
  {% endfor %}

  <!-- x-default vers version anglaise -->
  {% assign en_version = site.posts | where: "lang", "en" | where_exp: "item", "item.slug == page.slug" | first %}
  {% if en_version %}
    <link rel="alternate" hreflang="x-default" href="{{ site.url }}{{ en_version.url }}" />
  {% endif %}
{% endif %}
```

**Impact SEO:** Moyen-élevé - meilleure indexation multilingue

---

### 1.5 Créer/vérifier OG image par défaut

**Problème:** `og-image.png` référencée mais doit exister

**Fichier:** `assets/images/og-image.png`

**Action:**
1. Créer image 1200x630px avec:
   - Logo Sinra
   - Tagline: "Organize. Prioritize. Deliver."
   - Fond DaisyUI Dim theme

2. Vérifier que le fallback existe:
```html
<meta property="og:image" content="{{ site.url }}/assets/images/og-image.png">
```

**Outils:**
- Canva (template Open Graph)
- Figma (design custom)
- ImageMagick (conversion SVG→PNG)

**Vérification:**
```bash
# Tester avec Facebook Debugger
https://developers.facebook.com/tools/debug/

# URL: https://sinra.dev/pricing/
# Vérifier que og:image s'affiche
```

**Impact SEO:** Moyen - impact social media partage

---

## 🟡 PHASE 2: OPTIMISATIONS IMPORTANTES (POST-DÉPLOIEMENT)

**Timeline:** 1 semaine
**Impact:** Important - améliore performance et expérience

### 2.1 Compresser images PNG lourdes

**Problème:** `collaboration.png` (425 KB) ralentit le chargement

**Fichiers:**
- `assets/images/collaboration.png` (425 KB → cible 150 KB)
- `assets/images/customization.png` (152 KB → cible 100 KB)

**Action:**
```bash
# Avec ImageOptim (Mac)
open -a ImageOptim assets/images/*.png

# Ou TinyPNG CLI
npm install -g tinypng-cli
tinypng assets/images/*.png -k YOUR_API_KEY

# Ou ImageMagick
for img in assets/images/*.png; do
  magick "$img" -quality 85 -strip "${img%.png}-optimized.png"
done
```

**Impact SEO:** Élevé - améliore Core Web Vitals (LCP)

---

### 2.2 Ajouter alt text manquant sur SVG blog

**Problème:** 70+ SVG images blog sans vérification alt text

**Fichiers:** `_posts/*.md` (tous les posts)

**Action:**
```bash
# Trouver images sans alt
grep -r "!\[.*\](" _posts/ | grep ".svg" | grep -v "alt="

# Exemple de correction:
# AVANT:
![](/assets/images/blog/2026-01-13-cloud-act-flow.svg)

# APRÈS:
![Diagramme flux Cloud Act](/assets/images/blog/2026-01-13-cloud-act-flow.svg "Le Cloud Act permet aux autorités US d'accéder aux données européennes")
```

**Script automatisation:**
```bash
# Créer script: scripts/check-missing-alts.sh
#!/bin/bash
find _posts -name "*.md" -exec grep -l '!\[\]' {} \;
```

**Impact SEO:** Moyen - accessibilité et SEO images

---

### 2.3 Vérifier canonical URLs

**Problème:** S'assurer que canonical pointe vers la bonne version (https://)

**Fichier:** `_layouts/default.html` (ligne 5)

**Action:**
```liquid
<!-- Vérifier que: -->
<link rel="canonical" href="{{ site.url }}{{ page.url }}" />

<!-- Pas de http:// ou localhost -->
```

**Vérification:**
```bash
# Après build production
grep -r "canonical" _site/ | grep "localhost"
# Résultat attendu: aucune ligne
```

**Impact SEO:** Élevé - évite duplicate content

---

### 2.4 Tester performance avec Lighthouse

**Action:**
1. Déployer sur `sinra.dev`
2. Tester avec Lighthouse CI (déjà configuré dans `.github/workflows/`)
3. Analyser scores:
   - Performance: ≥90
   - Accessibility: ≥95
   - Best Practices: ≥90
   - SEO: ≥90

**Outils:**
```bash
# Local
npm install -g @lhci/cli
lhci autorun --config=.lighthouserc.json

# Ou PageSpeed Insights
https://pagespeed.web.dev/
# Tester: https://sinra.dev
```

**Métriques à surveiller:**
- LCP (Largest Contentful Paint): <2.5s
- FID (First Input Delay): <100ms
- CLS (Cumulative Layout Shift): <0.1

**Impact SEO:** Très élevé - Core Web Vitals = ranking factor

---

## 🟢 PHASE 3: AMÉLIORATIONS CONTINUES (1 MOIS)

**Timeline:** Mensuel
**Impact:** Progressif - optimisation long terme

### 3.1 Enrichir les featured images de tous les posts

**Objectif:** Tous les articles blog doivent avoir une featured_image unique

**Action:**
```bash
# Vérifier posts sans featured_image
grep -L "featured_image:" _posts/*.md

# Créer images manquantes (1200x630px PNG)
# Naming: assets/images/blog/YYYY-MM-DD-slug-featured.png
```

**Template Figma/Canva:**
- Taille: 1200x630px
- Fond: DaisyUI Dim theme colors
- Titre article (court)
- Logo Sinra
- Catégorie (badge)

**Impact SEO:** Moyen - améliore partage social

---

### 3.2 Ajouter données structurées FAQ sur pages

**Objectif:** Enrichir les pages avec FAQ Schema

**Fichiers:** `_pages/pricing.html`, `_pages/about.html`

**Action:**
```liquid
<!-- Dans pricing.html après content -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Sinra?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sinra is a modern project management tool..."
      }
    },
    {
      "@type": "Question",
      "name": "How much does Sinra cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sinra offers flexible pricing..."
      }
    }
  ]
}
</script>
```

**Impact SEO:** Moyen - rich snippets dans Google

---

### 3.3 Implémenter breadcrumbs visuels

**Objectif:** Ajouter breadcrumbs HTML en plus de Schema.org

**Fichier:** Créer `_includes/breadcrumbs.html`

**Action:**
```liquid
<!-- _includes/breadcrumbs.html -->
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li><a href="/">Home</a></li>
    {% if page.category %}
      <li><a href="/{{ page.category | downcase }}/">{{ page.category }}</a></li>
    {% endif %}
    <li aria-current="page">{{ page.title }}</li>
  </ol>
</nav>
```

**CSS:**
```css
/* assets/css/layout.css */
.breadcrumb {
  display: flex;
  list-style: none;
  padding: 1rem 0;
  font-size: 0.875rem;
}
.breadcrumb li + li::before {
  content: "›";
  padding: 0 0.5rem;
  color: var(--color-base-content);
}
```

**Impact SEO:** Faible - améliore navigation et UX

---

### 3.4 Surveiller Search Console

**Objectif:** Monitoring continu après déploiement

**Outils:**
- Google Search Console: https://search.google.com/search-console
- Bing Webmaster Tools: https://www.bing.com/webmasters

**Métriques à surveiller:**
1. **Couverture:**
   - Pages indexées: 206+ (EN + FR + ES)
   - Erreurs 404: 0
   - Pages exclues: vérifier robots.txt

2. **Hreflang:**
   - Erreurs de correspondance
   - Langues détectées: EN, FR, ES
   - x-default correctement défini

3. **Core Web Vitals:**
   - LCP: <2.5s (bon)
   - FID: <100ms (bon)
   - CLS: <0.1 (bon)

4. **Sitemaps:**
   - Soumettre: `sitemap.xml`, `fr/sitemap.xml`, `es/sitemap.xml`
   - Pages découvertes: 206+

**Actions hebdomadaires:**
```bash
# Vérifier nouveaux articles indexés
# Corriger erreurs hreflang si détectées
# Analyser requêtes de recherche (opportunités SEO)
```

**Impact SEO:** Très élevé - détection problèmes proactive

---

## 📊 MÉTRIQUES DE SUCCÈS

### KPIs à suivre (3 mois)

| Métrique | Actuel | Objectif 3M | Outil |
|----------|---------|-------------|-------|
| Pages indexées | 0 (pas en prod) | 206+ | Search Console |
| Score Lighthouse SEO | ? | 95+ | Lighthouse CI |
| Core Web Vitals (LCP) | ? | <2.5s | PageSpeed Insights |
| Trafic organique | ? | +50%/mois | Google Analytics |
| Positions moyennes | ? | Top 20 (mots-clés cibles) | Search Console |
| Backlinks | ? | 10+ | Ahrefs/SEMrush |

### Requêtes cibles prioritaires

**EN:**
- "project management tool" (très compétitif)
- "release-driven development" (niche)
- "v-model agile hybrid" (niche)
- "sinra project management" (brand)

**FR:**
- "outil gestion projet" (compétitif)
- "release-driven développement" (niche)
- "méthodologie hybride v-model agile" (niche)
- "sinra gestion projet" (brand)

**ES:**
- "herramienta gestión proyectos" (compétitif)
- "desarrollo orientado releases" (niche)
- "metodología híbrida" (niche)

---

## 🛠️ OUTILS RECOMMANDÉS

### Gratuits
- **Google Search Console** (monitoring indexation)
- **Google PageSpeed Insights** (performance)
- **Bing Webmaster Tools** (Bing SEO)
- **Screaming Frog SEO Spider** (crawl local, 500 URLs free)
- **Lighthouse CI** (déjà configuré)

### Payants (optionnels)
- **Ahrefs** ($99/mois - backlinks, keywords)
- **SEMrush** ($119/mois - audit complet)
- **Cloudflare Pro** ($20/mois - CDN + analytics)

### Build/Deploy
```bash
# Build production avec SEO optimal
JEKYLL_ENV=production bundle exec jekyll build

# Vérifier sitemaps générés
ls -la _site/sitemap.xml _site/fr/sitemap.xml _site/es/sitemap.xml

# Vérifier pas de localhost
grep -r "localhost" _site/*.html _site/*.xml
```

---

## 📋 CHECKLIST FINALE AVANT PRODUCTION

### Configuration
- [ ] `_config.yml`: `url: "https://sinra.dev"`
- [ ] `JEKYLL_ENV=production` pour build
- [ ] Sitemaps générés sans localhost
- [ ] robots.txt avec 3 sitemaps (EN, FR, ES)

### Contenu
- [ ] Tous les posts ont `featured_image`
- [ ] Toutes les images ont `alt` text
- [ ] Meta descriptions 120-160 caractères
- [ ] Titles uniques <60 caractères

### Technique
- [ ] hreflang complet (EN/FR/ES + x-default)
- [ ] Canonical URLs correctes (https://)
- [ ] OG image par défaut existe
- [ ] Images PNG compressées
- [ ] Lazy loading activé

### Multilinguisme
- [ ] 3 sitemaps déclarés robots.txt
- [ ] hreflang sur toutes pages (statiques + blog)
- [ ] URLs cohérentes par langue
- [ ] Traductions complètes (_data/)

### Post-déploiement
- [ ] Soumettre sitemaps Search Console
- [ ] Tester hreflang (Search Console > Couverture)
- [ ] Lighthouse audit (score SEO ≥90)
- [ ] PageSpeed Insights (Core Web Vitals)

---

## 🎯 SCORE ATTENDU POST-CORRECTIONS

| Catégorie | Avant | Après Phase 1 | Après Phase 2 | Après Phase 3 |
|-----------|-------|---------------|---------------|---------------|
| Structure HTML | 9/10 | 10/10 | 10/10 | 10/10 |
| Métadonnées | 8.5/10 | 9.5/10 | 10/10 | 10/10 |
| Contenu SEO | 9/10 | 9/10 | 9.5/10 | 10/10 |
| Technique | 8/10 | 9/10 | 9.5/10 | 10/10 |
| Multilinguisme | 7/10 | 9/10 | 9/10 | 9.5/10 |
| Performance | 8.5/10 | 8.5/10 | 9.5/10 | 10/10 |
| **TOTAL** | **8.5/10** | **9.2/10** | **9.6/10** | **9.9/10** |

---

## 📞 CONTACT ET SUPPORT

**Questions SEO:**
- Documentation Jekyll: https://jekyllrb.com/docs/
- Google Search Central: https://developers.google.com/search
- Schema.org: https://schema.org/

**Prochaines révisions:**
- Mensuel: Audit Lighthouse + Search Console
- Trimestriel: Revue complète + ajustements stratégie
