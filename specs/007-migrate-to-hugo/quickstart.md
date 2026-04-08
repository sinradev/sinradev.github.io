# Quickstart: Migration Jekyll vers Hugo

**Branch**: `007-migrate-to-hugo` | **Date**: 2026-04-07

---

## Prérequis

```bash
# Vérifier Hugo Extended (requis pour Hugo Pipes)
hugo version   # doit afficher "extended"

# Installer Hugo Extended si nécessaire (macOS)
brew install hugo

# Vérifier Node.js >= 20
node --version

# Se placer sur la branche de migration
git checkout 007-migrate-to-hugo
```

---

## Lancer le site Hugo en développement

```bash
# 1. Installer les dépendances Node (Tailwind v4 + DaisyUI v5 + PostCSS)
npm install

# 2. Lancer le serveur Hugo avec live reload
hugo server

# Le site est accessible sur http://localhost:1313
# Hugo rebuild automatique à chaque modification
```

---

## Build de production

```bash
# Build statique dans ./public/
hugo --minify

# Vérifier le résultat
ls public/
```

---

## Structure des commandes Hugo utiles

```bash
# Lancer avec brouillons visibles
hugo server --buildDrafts

# Lancer avec un port différent
hugo server --port 1314

# Build avec baseURL custom
hugo --minify --baseURL "https://sinra.dev/"

# Vérifier les pages générées
hugo --printPathWarnings

# Lister toutes les pages (debug)
hugo list all
```

---

## Ajouter un nouvel article de blog

Créer le fichier dans `content/blog/posts/` :

```bash
# EN
touch content/blog/posts/2026-04-07-mon-article.en.md
```

Front matter minimal :

```yaml
---
title: "Titre de l'article"
subtitle: "Sous-titre"
description: "Description SEO (150-160 caractères)"
date: 2026-04-07T09:00:00+02:00
categories: ["Methodology"]
excerpt: "Introduction courte visible dans la liste du blog."
featured_image: /assets/images/blog/2026-04-07-mon-article-featured.png
url: /methodology/2026/04/07/mon-article.html
---

Contenu de l'article en Markdown...
```

---

## Ajouter une traduction

Pour chaque fichier `.en.md`, créer le `.fr.md` et `.es.md` correspondants :

```bash
cp content/blog/posts/2026-04-07-mon-article.en.md \
   content/blog/posts/2026-04-07-mon-article.fr.md
```

Modifier les champs de contenu (title, description, excerpt, body) et adapter l'`url:` si le slug diffère entre langues.

---

## Ajouter une string de traduction

Dans `i18n/en.yaml`, `fr.yaml`, `es.yaml` :

```yaml
# i18n/en.yaml
ma_nouvelle_cle: "My new label"

# i18n/fr.yaml
ma_nouvelle_cle: "Mon nouveau libellé"

# i18n/es.yaml
ma_nouvelle_cle: "Mi nueva etiqueta"
```

Utilisation dans un template Hugo :

```html
<span>{{ i18n "ma_nouvelle_cle" }}</span>
```

---

## Modifier le contenu structuré

Modifier les fichiers dans `data/{lang}/` :

```bash
# Exemple : modifier le pricing en anglais
nano data/en/pricing.yaml

# Même modification en français
nano data/fr/pricing.yaml
```

---

## Vérification des URLs de blog

Pour vérifier que les URLs sont correctement préservées :

```bash
# Lancer Hugo et lister les URLs générées
hugo --printPathWarnings 2>&1 | grep -E "methodology|planning|documentation"

# Ou construire et inspecter public/
hugo && find public/ -name "*.html" | grep -v "index" | head -20
```

---

## Déploiement (GitHub Actions)

Le déploiement est automatique sur push vers `main` :

```bash
git add .
git commit -m "Votre message"
git push origin main
# → GitHub Actions lance hugo.yml → build → deploy sur GitHub Pages
```

Pour vérifier le pipeline :
```
GitHub → Repository → Actions → "Deploy Hugo site to Pages"
```

---

## Variables de thème DaisyUI Dim

Toutes les couleurs disponibles via CSS variables (définies par le plugin DaisyUI) :

```css
/* Dans les templates HTML (classes DaisyUI) */
bg-base-100        /* Fond principal */
bg-base-200        /* Fond secondaire */
text-base-content  /* Texte principal */
btn-primary        /* Bouton accent vert */
btn-secondary      /* Bouton orange */
badge-accent       /* Badge violet */
```

Pour des overrides custom, modifier le bloc `@layer components` dans `assets/css/main.css`.
