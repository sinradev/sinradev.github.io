---
name: daily-post-linkedin
description: Créer des posts LinkedIn pour les articles français publiés aujourd'hui sur sinra.dev
---

# Tâche automatisée : Posting LinkedIn journalier

## Objectif
Créer et poster des posts LinkedIn pour chaque article français publié le jour même sur sinra.dev.

## Processus

### 1. Trouver les articles français du jour
- Chercher tous les fichiers `.fr.md` dans `/Users/thomas/Apps/sinra-website/content/blog/posts/`
- Vérifier la date de publication dans le frontmatter YAML (champ `date`)
- Filtrer ceux publiés aujourd'hui (date: YYYY-MM-JJ)

### 2. Extraire les informations
- Lire le titre (`title`)
- Lire l'excerpt (`excerpt`)
- Extraire le slug du nom de fichier avec la regex : `^(.+)\.fr\.md$`

### 3. Construire l'URL
- Format : `https://sinra.dev/fr/blog/posts/{slug}/`
- Exemple : `https://sinra.dev/fr/blog/posts/2026-04-16-cycle-en-cascade-waterfall/`

### 4. Créer le post LinkedIn (VERSION LONGUE - OBLIGATOIRE)
Structure obligatoire :
- Emoji pertinent + titre accrocheur
- Paragraphe d'introduction
- 4-5 points clés en format bullet (✓ ou •)
- Paragraphe de conclusion
- Fin : "Vous pouvez retrouver cet article ici: " + URL

Exemple de structure :
```
⏳ [Titre attractif]

[Intro paragraph explaining why this matters]

Points clés :
✓ Point 1
✓ Point 2
✓ Point 3
✓ Point 4
✓ Point 5

[Conclusion paragraph]

Vous pouvez retrouver cet article ici: https://sinra.dev/fr/blog/posts/...
```

### 5. Poster via Chrome
- Ouvrir LinkedIn via Chrome
- Utiliser le champ "Commencer un post"
- Copier-coller le contenu préparé (version longue complète)
- Cliquer sur "Publier"
- Confirmer la publication

## Préférences critiques
✅ **TOUJOURS VERSION LONGUE** - Pas de version courte
✅ **POSTER VIA CHROME** - Utiliser Claude in Chrome
✅ **EMOJIS** - Utiliser des emojis pertinents pour l'engagement
✅ **TON** - Professionnel mais engageant
✅ **VÉRIFICATION** - Vérifier que le contenu complet est capturé

## Points importants
- La date de publication dans le frontmatter prime sur la date de modification du fichier
- Généralement 1 article français par jour
- Si plusieurs articles français le même jour → créer un post pour chacun
- Chaque post doit avoir son propre contenu unique adapté à l'article
- Les URLs doivent être cliquables et correctes

## Exemple réalisé (2026-04-17)
- Article: `2026-04-16-cycle-en-cascade-waterfall.fr.md`
- Titre: "Cycle en Cascade (Waterfall) : La Méthode Séquentielle qui a Bâti l'Industrie"
- URL: `https://sinra.dev/fr/blog/posts/2026-04-16-cycle-en-cascade-waterfall/`
- Post: Version longue publiée le 2026-04-17 ✅
