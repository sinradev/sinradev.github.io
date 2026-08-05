# Audit de code - Sinra Website

Date : 2026-08-05
Périmètre : code source du site (Hugo Extended). Bonnes pratiques, code mort, duplication, sécurité, i18n, performance.
Méthode : lecture statique + vérification empirique (`curl` sur la prod).

---

## Résumé

| Sévérité | Nombre | Thèmes |
|----------|--------|--------|
| Élevée | 2 | En-têtes de sécurité absents en prod, payload mort de 140 KB |
| Moyenne | 6 | Code mort JS, fichiers hérités de Jekyll, `_headers` trompeur |
| Basse | 7 | Duplication de templates, fichiers sources non ignorés, config morte |

Le site est fonctionnel et bien structuré (fingerprint + SRI sur CSS/JS, hreflang, JSON-LD, parité i18n/data complète sur EN/FR/ES). Les problèmes sont surtout des résidus de la migration Jekyll -> Hugo et du code mort accumulé.

---

## 1. Sécurité

### 1.1 [ÉLEVÉ] Aucun en-tête de sécurité appliqué en production

**Constat vérifié empiriquement.** `curl -sI https://sinra.dev/` retourne `server: GitHub.com`, `via: varnish`. Aucun proxy (pas de `cf-ray`). Aucun de ces en-têtes n'est renvoyé :
- `X-Frame-Options` (clickjacking)
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Content-Security-Policy`
- `Strict-Transport-Security`

**Cause.** Le fichier `_headers` définit ces en-têtes, mais **GitHub Pages ne lit pas `_headers`** (format Netlify/Cloudflare uniquement). Le site est déployé sur `sinradev.github.io` (voir `git remote` + `.github/workflows/hugo.yml`). Le fichier est donc mort et donne une fausse impression de protection.

**Contrainte importante.** Sur GitHub Pages nu, la plupart des en-têtes **ne peuvent pas** être posés :
- `X-Frame-Options` : impossible (pas de meta équivalent valide).
- `Strict-Transport-Security`, `frame-ancestors` : **ignorés** en `<meta http-equiv>`.
- Seul un CSP partiel est possible via `<meta http-equiv="Content-Security-Policy">`.

**Options (choix produit) :**
- **A.** Placer le site derrière Cloudflare (Transform Rules) ou migrer vers Cloudflare/Netlify Pages -> tous les en-têtes deviennent possibles. Recommandé si la sécurité compte.
- **B.** Rester sur GitHub Pages + ajouter un CSP via meta (protection partielle : XSS/injection, pas clickjacking ni HSTS). Assumer la limite.
- Dans les deux cas : **supprimer `_headers`** ou le documenter comme non appliqué, pour ne pas induire en erreur.

### 1.2 [MOYEN] `X-XSS-Protection` obsolète

`_headers:31` définit `X-XSS-Protection: 1; mode=block`. En-tête déprécié par tous les navigateurs modernes, peut réintroduire des vulnérabilités. À retirer (moot tant que `_headers` n'est pas servi).

### 1.3 [BAS] `goldmark unsafe = true`

`hugo.toml` autorise le HTML brut dans le Markdown. Acceptable car tout le contenu est first-party. À garder en tête : toute future source de contenu externe (commentaires, UGC) deviendrait vecteur XSS. Pas d'action immédiate.

### 1.4 [BAS] Swiper chargé sans SRI

`baseof.html:13` charge `swiper-bundle.min.js` sans `integrity`, alors que CSS et `script.js` ont fingerprint + SRI. Incohérent. (Voir aussi 3.1 : ce chargement est mort.)

**Point positif.** Tous les `target="_blank"` ont `rel="noopener noreferrer"`. Aucun `innerHTML`/`eval`/`document.write` dans le JS applicatif.

---

## 2. Code mort (résidus migration Jekyll)

### 2.1 [MOYEN] `404.html` à la racine (Jekyll)

`404.html` (racine) contient du front matter Jekyll (`permalink`, `layout: page`) inexploitable par Hugo. Hugo utilise `layouts/404.html`. Fichier mort et trompeur -> supprimer.

### 2.2 [MOYEN] `robots.txt` référence des chemins Jekyll

`robots.txt` fait `Disallow: /_site/`, `/.jekyll-cache/` (répertoires Jekyll inexistants sous Hugo). Nettoyer.

### 2.3 [MOYEN] `solar-system.js` jamais chargé

`assets/js/solar-system.js` (320 lignes, 8 KB) n'est référencé nulle part (ni `baseof`, ni layouts, ni contenu). Fichier mort -> supprimer.

### 2.4 [BAS] `.svgo.config.js` non utilisé

SVGO n'est ni dans `package.json` ni dans la CI. Config morte -> supprimer ou documenter comme outil manuel.

---

## 3. Code mort dans `script.js`

`script.js` contient plusieurs blocs dont les sélecteurs CSS cibles n'existent nulle part dans `layouts/` (vérifié par grep). Attention à la nuance : **certaines fonctions sont partiellement mortes** - retirer seulement les branches mortes, pas la fonction entière.

### Fonctions entièrement mortes (supprimables)
- `createParticles()` -> cible `.hero-particles` : **0 occurrence**.
- `initBlackFridayBanner()` -> cible `#blackfriday-banner` : **0 occurrence**.
- `fixBlogDates()` -> cible `.post-card` + « workaround jekyll-polyglot bug » : **0 occurrence**, et Jekyll n'existe plus.
- `initFloatingElements()` -> placeholder vide déclaré tel quel.
- `createScrollIndicator()` / `initScrollReveal()` -> à vérifier : ciblent `.scroll-reveal`/`.index-section`/`.testimonial-section` (la classe `.scroll-reveal` est ajoutée par le JS, donc à valider sur `.index-section`/`.testimonial-section`, la section testimonials étant désactivée).

### Branches mortes à retirer (garder le reste de la fonction)
- `initNavigation()` : branches legacy `#open-nav` / `.nav-open` mortes (0 occurrence). Le reste (dropdown DaisyUI, active-link, smooth-scroll) est **vivant** - à conserver.
- `initImageEffects()` : branche lazy-load `data-src` morte (0 occurrence). Le handler `img.loaded` sur toutes les images reste **vivant**.

### À conserver (vivantes)
`animateStats()` (`.stat-number` dans `features.html`), `initParallax()` (`.screenshot`), `initHeaderEffects`, `initButtonEffects`, `initFormEffects`, `decodeEmails` (protection anti-spam mail).

### 3.1 [ÉLEVÉ] Swiper (140 KB) chargé pour rien sur l'accueil

`content/_index.md:5` a `load_swiper: true`, ce qui charge `swiper-bundle.min.js` (140 KB) sur la home. Or la seule utilisation de Swiper est `layouts/partials/sections/testimonials.html`, **section désactivée** (`layouts/index.html:7`, commit `3bd34d1`). Résultat : 140 KB de JS téléchargés sans usage sur la page la plus visitée.

**Action.** Retirer `load_swiper: true` de `content/_index.md` (et `_index.fr.md`/`_index.es.md`) tant que testimonials est désactivé. À réactiver avec la section.

### 3.2 [BAS] `console.log` en production

`script.js:368` logge le temps de chargement dans `initPerformanceMonitoring`. Bruit console en prod -> retirer ou conditionner.

---

## 4. Duplication

### 4.1 [BAS] Bloc CTA « sign_up » répété

Le même bloc `<a ... /users/sign_up ... btn btn-primary btn-lg>` est dupliqué dans 6 fichiers (`index.html`, `about/single.html`, `blog/single.html`, `pricing/single.html`, `hero.html`, `tools-replaced.html`). Extraire un partial `partials/cta.html` paramétrable (texte + taille).

### 4.2 [BAS] Coque `baseof` dupliquée

`layouts/docs/baseof.html` recopie tout le squelette de `layouts/_default/baseof.html` (head/navbar/footer/script) pour ajouter une sidebar. Duplication acceptable vu les limites d'héritage de baseof dans Hugo, mais la sidebar pourrait devenir un partial pour réduire le risque de dérive (ex. le bloc `<script>` final).

---

## 5. Hygiène du dépôt

### 5.1 [BAS] `sources/` versionné (~2 MB d'artefacts)

`sources/` contient des PNG sources et `_old.png` (259 KB, 447 KB, 297 KB, 342 KB...). Non servis par Hugo (hors `static/`/`assets/`), mais versionnés. Gonfle le dépôt. -> déplacer hors dépôt ou ajouter à `.gitignore`. **Ne pas supprimer sans validation** (fichiers de travail).

### 5.2 [BAS] Répertoires racine `blog/` et `docs/` hors build

`blog/index.html` et `docs/*.md` (ex. `SEO_ACTION_PLAN.md`) sont à la racine, hors des dossiers Hugo (`content/`, `static/`, `assets/`, `layouts/`). Ce sont des docs de travail humaines, pas des sorties de build. À conserver mais à ranger (ex. tout regrouper sous `docs/`) pour clarifier ce qui est buildé.

### 5.3 [INVALIDÉ] `.gitignore` et `CLAUDE.md`

Vérification : `git ls-files --error-unmatch CLAUDE.md` -> non suivi. Le `.gitignore` est cohérent (fichier local, non versionné). Finding retiré.

### 5.4 [BAS] `.DS_Store` présent dans `assets/css/`

`assets/css/.DS_Store` existe sur disque (non suivi par git, ok). S'assurer qu'il reste ignoré.

---

## 6. Points positifs (à préserver)

- Fingerprint + SRI (`integrity`) sur CSS et `script.js`.
- SEO solide : hreflang + x-default, canonical, JSON-LD (SoftwareApplication + Organization), Open Graph, Twitter Card, preload LCP.
- Parité i18n complète (101 lignes EN/FR/ES) et parité `data/` (14 fichiers par langue).
- Multilingue Hugo natif propre, pas de dépendance runtime lourde.
- Honnêteté produit : testimonials et trusted-by fabriqués désactivés avec justification (commits `3bd34d1`, `bd621f4`).

---

## Plan d'action (priorisé)

### Lot 1 - Gains rapides, faible risque (à faire en premier)
1. **Retirer `load_swiper: true`** de `content/_index.md`, `_index.fr.md`, `_index.es.md` -> -140 KB sur l'accueil. (3.1)
2. **Supprimer `404.html`** racine (Jekyll mort). (2.1)
3. **Nettoyer `robots.txt`** : retirer les `Disallow` Jekyll. (2.2)
4. **Supprimer `solar-system.js`**. (2.3)
5. **Supprimer `console.log`** de `initPerformanceMonitoring`. (3.2)

### Lot 2 - Nettoyage `script.js` (risque moyen, tester en local)
6. Supprimer les fonctions entièrement mortes : `createParticles`, `initBlackFridayBanner`, `fixBlogDates`, `initFloatingElements` + leurs appels dans `DOMContentLoaded` et l'export `window.SinraWebsite`. (3)
7. Retirer les branches mortes dans `initNavigation` (legacy `#open-nav`/`.nav-open`) et `initImageEffects` (`data-src`), en gardant le code vivant. (3)
8. Valider `createScrollIndicator`/`initScrollReveal` (sélecteurs `.index-section`/`.testimonial-section`) avant suppression.
9. `hugo server` + revue visuelle des pages (accueil, blog, docs, pricing, contact) pour non-régression.

### Lot 3 - Sécurité (décision produit requise)
10. **Décider A ou B** (voir 1.1) :
    - A. Fronter via Cloudflare/Netlify -> poser tous les en-têtes (CSP, X-Frame-Options, HSTS, Referrer-Policy).
    - B. Rester GitHub Pages -> ajouter un `<meta http-equiv="Content-Security-Policy">` (protection partielle) et **assumer** l'absence de clickjacking/HSTS.
11. Dans tous les cas : **supprimer/documenter `_headers`** (non servi), retirer `X-XSS-Protection`. (1.1, 1.2)
12. Ajouter SRI sur le chargement Swiper si réactivé. (1.4)

### Lot 4 - Refactor & hygiène (non urgent)
13. Extraire `partials/cta.html` et remplacer les 6 duplications. (4.1)
14. Ranger `sources/` (gitignore ou hors dépôt) après validation. (5.1)
15. Clarifier `.gitignore` vs `CLAUDE.md` versionné. (5.3)
16. Regrouper les docs de travail racine sous `docs/`. (5.2)

**Recommandation d'ordre :** Lot 1 (immédiat, sûr) -> Lot 2 (avec test local) -> Lot 3 (attend une décision produit) -> Lot 4 (opportuniste).

---

## Statut d'exécution (2026-08-05)

Décision produit : **rester sur GitHub Pages + Hugo** (option B). Tout corrigé et vérifié par un build de prod (`hugo --minify`, exit 0).

**Fait :**
- Lot 1 : `load_swiper` retiré des 3 `_index` (swiper 140 KB absent de la home, vérifié) ; `404.html` racine, `solar-system.js`, `_headers`, `.svgo.config.js` supprimés ; `robots.txt` nettoyé.
- Lot 2 : `script.js` réécrit 488 -> 155 lignes. Supprimés (no-op sans DOM cible ni CSS) : `createParticles`, `initBlackFridayBanner`, `fixBlogDates`, `initFloatingElements`, `createScrollIndicator`, `initScrollReveal`, `initButtonEffects`, `initFormEffects`, `initImageEffects`, `initPerformanceMonitoring` (+ `console.log`), export `window.SinraWebsite`, `debounce` inutilisé, branche legacy nav. Conservés (vivants) : `animateStats`, `initParallax`, `initHeaderEffects`, `initNavigation` (dropdown/active/smooth-scroll), `decodeEmails`, `throttle`.
- Lot 3 (B) : `_headers` supprimé ; CSP + `Referrer-Policy` ajoutés en `<meta>` dans `head.html` ; SRI ajouté sur le chargement Swiper. `X-XSS-Protection` disparu avec `_headers`.
- Lot 4 : partial `cta-signup.html` créé, 7 CTA dupliqués remplacés ; `sources/` (13 fichiers) sorti du suivi git (`git rm --cached`, fichiers gardés sur disque) + ajouté au `.gitignore` ; finding 5.3 invalidé.

**Limites assumées (GitHub Pages nu, non posables en meta) :** `X-Frame-Options` (clickjacking) et `Strict-Transport-Security` (HSTS) restent absents. Nécessiteraient de fronter le site (Cloudflare/Netlify). CSP `frame-ancestors` idem (ignoré en meta) ; `X-Frame-Options` absent = pas de protection anti-embedding.

**Non fait (organisationnel, hors scope technique) :** 5.2 rangement des docs de travail racine (`blog/`, `docs/*.md`).
