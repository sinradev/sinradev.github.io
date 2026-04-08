# Feature Specification: Migration Jekyll vers Hugo

**Feature Branch**: `007-migrate-to-hugo`
**Created**: 2026-04-07
**Status**: Draft
**Input**: User description: "Je souhaite transférer le site de jekyll à Hugo, je rappelle que le site utilise DaisyUi (via tailwind) avec le theme Dim, aide toi de la config hugo ~/Apps/tornade.github.io/"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Site fonctionnel sur Hugo (Priority: P1)

Un visiteur accède au site Sinra (sinra.dev) et navigue entre les pages principales (accueil, pricing, blog, contact, comparaisons) dans les trois langues (EN, FR, ES) sans rupture visuelle ni lien cassé.

**Why this priority**: C'est le critère fondamental de la migration : le site doit continuer à fonctionner normalement pour les visiteurs, avec le même contenu et la même apparence qu'avant.

**Independent Test**: Tester en lançant le serveur de développement Hugo et en naviguant sur toutes les pages principales dans les trois langues.

**Acceptance Scenarios**:

1. **Given** le site Hugo est lancé en local, **When** le visiteur accède à la page d'accueil en anglais, **Then** toutes les sections (hero, features, pricing, testimonials, trusted_by, contact FAQ) s'affichent correctement avec le thème DaisyUI Dim.
2. **Given** le site Hugo est lancé en local, **When** le visiteur clique sur un lien de navigation en français, **Then** la page s'affiche en français avec le contenu correspondant.
3. **Given** le site Hugo est lancé en local, **When** le visiteur navigue vers `/es/`, **Then** toutes les pages disponibles en espagnol s'affichent correctement.

---

### User Story 2 - Blog complet migré (Priority: P2)

Un visiteur accède aux articles de blog existants dans les trois langues et peut les lire, naviguer par catégorie, et trouver les articles listés sur la page blog.

**Why this priority**: Le blog représente la majorité du contenu du site (plus de 40 articles en 3 langues). Il est critique pour le SEO et l'engagement des visiteurs.

**Independent Test**: Tester la page listing du blog et l'ouverture d'un article dans chaque langue.

**Acceptance Scenarios**:

1. **Given** le site Hugo est lancé, **When** le visiteur accède à `/blog/`, **Then** la liste de tous les articles en anglais s'affiche avec titre, extrait et image featured.
2. **Given** le visiteur est sur la liste du blog, **When** il clique sur un article, **Then** l'article s'affiche avec le bon contenu, les images, et la mise en forme correcte.
3. **Given** le visiteur est sur la page blog, **When** il filtre par catégorie, **Then** seuls les articles de cette catégorie s'affichent.
4. **Given** un article existe en trois langues, **When** le visiteur change de langue, **Then** la version correspondante de l'article s'affiche.

---

### User Story 3 - URLs préservées (Priority: P3)

Les URLs existantes du site Jekyll fonctionnent toujours sur le site Hugo (ou des redirections appropriées sont en place), évitant toute perte de référencement.

**Why this priority**: La préservation des URLs est importante pour le SEO et pour éviter des liens cassés depuis des sites externes.

**Independent Test**: Vérifier que les URLs des articles de blog et des pages principales restent identiques.

**Acceptance Scenarios**:

1. **Given** une URL de blog Jekyll comme `/blog/2024/11/13/vmodel-vs-agile-choose-both/`, **When** le visiteur y accède sur le site Hugo, **Then** la page s'affiche correctement sans erreur 404 (permalink Hugo configuré identiquement).
2. **Given** les URLs des pages statiques Jekyll (ex: `/pricing/`, `/contact/`), **When** le visiteur y accède, **Then** les pages correspondantes s'affichent sans erreur.

---

### User Story 4 - Pipeline de build et déploiement (Priority: P4)

L'équipe peut construire et déployer le site Hugo via un processus automatisé (CI/CD GitHub Actions), comme c'était le cas avec Jekyll.

**Why this priority**: La continuité du déploiement automatique est nécessaire pour maintenir le flux de travail existant.

**Independent Test**: Déclencher un push sur la branche main et vérifier que le site se déploie correctement.

**Acceptance Scenarios**:

1. **Given** un commit est poussé sur la branche main, **When** le pipeline GitHub Actions s'exécute, **Then** le site Hugo est construit et déployé sur l'hébergement cible sans erreur.
2. **Given** le pipeline de build, **When** il s'exécute, **Then** Tailwind v4 et DaisyUI v5 sont compilés correctement (thème Dim actif).

---

### Edge Cases

- Si un article de blog n'existe pas dans une langue donnée, il est masqué de la liste et du menu de navigation de cette langue (pas de fallback vers EN, pas de redirection).
- Comment gérer les images featured de blog (SVG + PNG + WebP) dans la structure Hugo ?
- Que faire des fichiers spéciaux Jekyll : `_headers`, `CNAME`, `robots.txt` ?
- Les permalinks personnalisés définis dans le front matter Jekyll sont-ils préservés ?
- Comment migrer les pages de catégories de blog (actuellement des pages Jekyll dédiées) ?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Le site DOIT afficher toutes les pages existantes (accueil, pricing, blog, contact, about, compare, pages de comparaison) dans les trois langues (EN, FR, ES).
- **FR-002**: Le système DOIT utiliser Hugo avec Tailwind v4 et DaisyUI v5, thème Dim, en suivant le pattern établi dans `~/Apps/tornade.github.io/`.
- **FR-003**: Le système DOIT supporter la multilinguisation EN/FR/ES via le système natif de Hugo (hugo.toml avec blocs `[languages.*]` et fichiers i18n YAML).
- **FR-004**: Tous les articles de blog existants (plus de 40 articles en 3 langues) DOIVENT être migrés avec leur contenu, front matter, images featured et catégories.
- **FR-005**: Le système DOIT reproduire fidèlement le visuel actuel du site avec le thème DaisyUI Dim (couleurs, typographie, composants). Le portage des CSS et templates est l'occasion de supprimer le code mort et de refactorer, sans introduire de nouveau design.
- **FR-006**: Les données de contenu Jekyll DOIVENT être migrées selon leur type : les chaînes courtes et labels (`strings.yml`, `navigation.yml`) vers `i18n/{lang}.yaml` ; le contenu structuré en tableaux (`index_sections.yml`, `pricing.yml`, `testimonials.yml`, etc.) vers `data/{lang}/`.
- **FR-007**: Les templates Jekyll (`_layouts/`, `_includes/`) DOIVENT être réécrits en templates Hugo (`layouts/`, `layouts/partials/`).
- **FR-008**: Les URLs des pages et articles de blog DOIVENT être préservées ou des redirections DOIVENT être configurées.
- **FR-009**: Le site DOIT inclure un sitemap XML et le support robots.txt.
- **FR-010**: Le fichier CNAME DOIT être conservé dans `static/` Hugo pour le déploiement sur GitHub Pages. Le fichier `_headers` (format Netlify) est abandonné.
- **FR-011**: Le pipeline de build DOIT compiler Tailwind/DaisyUI via PostCSS (pattern `postcss.config.js` de tornade.github.io).
- **FR-012**: Le fichier GitHub Actions de déploiement DOIT être mis à jour pour utiliser Hugo au lieu de Jekyll, en ciblant GitHub Pages (action `actions/deploy-pages` ou `peaceiris/actions-gh-pages`).

### Key Entities

- **Page statique**: Toute page non-blog (accueil, pricing, contact, about, compare, comparaisons par outil). Migre de `_pages/*.lang.html` vers `content/*.lang.md` ou `layouts/` Hugo.
- **Article de blog**: Document Markdown avec front matter (title, date, lang, category, featured_image, excerpt, description). Migre de `_posts/YYYY-MM-DD-slug.lang.md` vers `content/blog/YYYY-MM-DD-slug.lang.md`.
- **Données de traduction courtes**: Labels, boutons, titres de navigation (`strings.yml`, `navigation.yml`). Migrent vers `i18n/{lang}.yaml` (accès via `i18n "key"` dans Hugo).
- **Données de contenu structuré**: Tableaux de sections, features, pricing, testimonials (`index_sections.yml`, `pricing.yml`, etc.). Migrent vers `data/{lang}/` (accès via `site.Data.lang.file` dans Hugo).
- **Asset CSS**: Feuille de style principale compilée avec Tailwind v4/DaisyUI. Migre de `assets/css/` vers `assets/css/main.css` traité par Hugo Pipes.
- **Template de mise en page**: Structure HTML des pages. Migre de `_layouts/default.html` vers `layouts/_default/baseof.html` Hugo.
- **Partiel HTML**: Composant réutilisable (header, footer, sections). Migre de `_includes/*.html` vers `layouts/partials/*.html` Hugo.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Toutes les pages visitées sur le site Hugo local retournent un code HTTP 200 sans erreur de rendu visible (0 page cassée sur les pages principales EN/FR/ES).
- **SC-002**: Les 40+ articles de blog existants sont tous accessibles dans leurs trois versions linguistiques.
- **SC-003**: Le temps de build du site Hugo est inférieur à 30 secondes en local.
- **SC-004**: Le visuel du site est identique à l'original Jekyll sur au moins 5 pages clés vérifiées côte à côte (accueil, pricing, blog, un article, contact).
- **SC-005**: Les URLs des 10 articles de blog les plus récents sont identiques entre Jekyll et Hugo (ou des redirections 301 sont configurées).
- **SC-006**: Le pipeline CI/CD déploie le site avec succès sans intervention manuelle lors d'un push sur main.
- **SC-007**: Le thème DaisyUI Dim est correctement appliqué : les couleurs de fond, textes, boutons et composants correspondent au design actuel.

## Clarifications

### Session 2026-04-07

- Q: Quel est l'hébergeur de déploiement cible ? → A: GitHub Pages
- Q: Quelle structure d'URL pour les articles de blog ? → A: `/blog/YYYY/MM/DD/slug/` (identique à Jekyll)
- Q: Quel est le scope de la migration ? → A: Migration + simplification CSS/templates (supprimer code mort, refactorer)
- Q: Comportement de fallback de langue pour les articles de blog ? → A: Masquer l'article de la liste si la traduction n'existe pas
- Q: Stratégie de migration des données Jekyll `_data/` ? → A: Split : strings/navigation → `i18n/{lang}.yaml`, contenu structuré → `data/{lang}/`

## Assumptions

- Le déploiement cible est **GitHub Pages**. Le fichier `_headers` (format Netlify) ne sera pas porté sur Hugo : les règles de headers devront être gérées autrement si nécessaire.
- Le pattern technique de référence pour Hugo+Tailwind+DaisyUI est `~/Apps/tornade.github.io/` (Tailwind v4, DaisyUI v5, PostCSS via Hugo Pipes).
- La version Hugo à utiliser est compatible avec le pattern tornade.github.io (Hugo Extended pour le support Hugo Pipes).
- Les images existantes dans `assets/images/` peuvent être copiées telles quelles dans le répertoire `static/` ou `assets/` Hugo.
- Le JavaScript existant (`script.js`, `swiper-bundle.min.js`) est conservé sans modification.
- Les URLs de blog utilisent le format `/blog/YYYY/MM/DD/slug/`, identique à Jekyll, configuré via `permalinks` dans `hugo.toml`. Aucune redirection requise.
