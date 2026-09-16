# Plan de refonte du site sinra.dev

> Document destiné à Claude Code. À placer à la racine du repo Hugo, puis lancer :
> `Lis PLAN-refonte-site-sinra.md et exécute la phase 0 uniquement. Arrête-toi et fais-moi ton rapport.`
> Enchaîner ensuite phase par phase, avec une validation humaine entre chaque.

---

## Contexte (à lire avant toute action)

Sinra est un SaaS de gestion de projet logiciel, développé et maintenu par un fondateur seul (Thomas, Tech Lead, ~19 ans d'expérience). Le produit est en ligne (essai gratuit 14 jours, 10 €/siège/mois), **mais n'a encore aucun client**. Le site est un site Hugo multilingue (EN par défaut à la racine, FR sous `/fr/`, ES sous `/es/`).

### Problème du site actuel

- Positionnement dilué : s'adresse à "tous les CTOs", promet de remplacer Slack, Notion, Jira, Toggl, Miro.
- Le vocabulaire mis en avant ("V-Model", "phase gate", "regulated environments") fait fuir la cible startup.
- Chiffres non sourcés ("40 % de temps gagné", "4 outils remplacés") qui nuisent à la crédibilité d'un produit sans clients.
- Jargon d'implémentation sur la landing ("SQL injection safe", "Polymorphic comments", "8 operators").
- Promesses incohérentes avec la réalité d'un fondateur seul ("Dedicated account manager", "call us directly").
- Contradiction : "opinionated" d'un côté, "your process, not ours" de l'autre.

### Nouveau positionnement

**Cible principale : les startups en croissance qui manquent de structure.** Le moment clé est le passage d'une équipe de 3–5 devs à 10–20 : les deadlines glissent, les features "finies" ne sont pas testées, personne ne sait ce qui part dans la prochaine release. Acheteurs : le premier CTO / lead dev, ou le fondateur qui a perdu la visibilité.

**Promesse centrale : "la méthode est incluse".** Sinra est opinionated, et c'est l'argument principal : une façon de travailler prête à l'emploi, sans consultant ni configuration interminable. Le cycle en V reste la mécanique interne (specs avant dev, tests liés aux releases, validation avant mise en production) mais **n'est pas nommé en tête de page d'accueil**.

**Cible secondaire prioritaire : les jeunes medtech, healthtech et fintech.** Elles ont du budget, un besoin réel de traçabilité (audit, certification, clients bancaires ou hospitaliers) et la souplesse d'achat d'une startup. Elles ont leurs propres landing pages où le vocabulaire de rigueur (traçabilité, go/no-go, audit trail) est au contraire mis en avant.

### Règles non négociables

1. **Ne jamais inventer de fonctionnalité.** Si une section du plan décrit une capacité non vérifiable dans le site actuel ou les docs (`/docs/`), la marquer `<!-- TODO THOMAS: vérifier que la feature existe -->` et la lister dans le rapport.
2. **Ne jamais affirmer de conformité ou de certification** (IEC 62304, ISO 13485, HDS, DORA, PCI-DSS, SOC 2…). Formulation autorisée : Sinra *aide à organiser et à retrouver* la documentation attendue. Chaque page verticale contient une mention claire en ce sens.
3. **Aucun chiffre, logo client ou témoignage inventé.**
4. **Ne pas toucher** : blog, docs, brand book, pages légales, liens vers `app.sinra.dev`.
5. **Respecter l'identité visuelle existante** (brand book, couleurs, typographies, logo). Cette refonte porte sur le contenu et la structure, pas sur un redesign visuel.
6. Travailler sur une branche `refonte-positionnement`, **un commit par phase**, message explicite.
7. Le français est la langue source des textes de ce plan. EN et ES sont des **adaptations** (ton naturel, pas de traduction mot à mot).
8. Tout élément nécessitant une décision de Thomas est un placeholder `TODO THOMAS` (voir liste en fin de document).

---

## Phase 0 — Audit du repo (lecture seule)

Ne rien modifier. Produire un rapport contenant :

- Version de Hugo, thème utilisé (thème externe, module ou layouts maison).
- Configuration des langues (`hugo.toml` / `config.*`, `languages`, `defaultContentLanguage`).
- Où vit le contenu de la home : `content/_index.*.md`, `layouts/index.html`, partials, fichiers `data/`, ou textes codés en dur dans les templates.
- Mécanisme i18n : fichiers `i18n/*.yaml|toml`, front matter, ou duplication de templates.
- Structure de la page pricing et de la FAQ.
- Liste des captures d'écran disponibles dans `assets/images/screenshots/` (ou équivalent).
- Présence de balises SEO (meta, OG, hreflang, schema.org, sitemap).
- Liste des features mentionnées sur le site actuel, en distinguant celles documentées dans `/docs/` de celles qui ne le sont pas.
- Recommandation : où placer les nouveaux textes pour que les 3 langues restent maintenables (idéalement contenu dans `content/` ou `data/`, pas dans les templates).

**Livrable :** rapport dans la conversation, rien d'autre.

---

## Phase 1 — Nettoyage (retirer avant d'ajouter)

Sur la home et la page pricing, dans les 3 langues :

- [ ] Supprimer le bloc "Replace your entire toolstack" (Slack, Notion, Toggl, Miro…).
- [ ] Supprimer les statistiques "4 tools", "40 %", "100 %".
- [ ] Supprimer les mentions d'implémentation : "SQL injection safe", "Polymorphic comments", "8 operators", "whitelist-validated", "session-persisted".
- [ ] Supprimer "Dedicated account manager" de l'offre Pro.
- [ ] Retirer la carte "Sinra Specif-AI — Coming Soon" de la page pricing (conserver le code commenté ou dans une branche, Thomas pourra la réactiver).
- [ ] Supprimer de la FAQ : "For urgent matters, please call us directly" et la question "custom solutions for enterprise clients" (remplacée en phase 2).
- [ ] Supprimer la phrase contradictoire "Your Process, Not Ours" / "Sinra adapts to you".

**Commit :** `chore(site): retirer les promesses non tenables et le jargon technique`

---

## Phase 2 — Nouvelle page d'accueil

### Structure cible

Ordre des sections. Chaque section a **un seul rôle**.

1. Hero : cible + problème + CTA
2. Symptômes : la cible se reconnaît
3. La méthode incluse : les 4 concepts de Sinra
4. Trois bénéfices avec captures
5. Les rituels d'une équipe mature
6. Secteurs exigeants : renvoi vers les pages verticales
7. Souveraineté
8. Le fondateur
9. Programme partenaires fondateurs
10. FAQ
11. CTA final

### Consignes de rédaction et de mise en page

- Écrire du point de vue de l'utilisateur, verbes simples, casse de phrase (pas de Title Case sur les titres FR).
- Pas de label en majuscules au-dessus de chaque titre, pas de mot isolé mis en couleur dans les titres.
- Pas de numérotation 01/02/03 sauf si le contenu est une vraie séquence (la section 3 en est une : spec → dev → test → release).
- Les CTA disent exactement ce qui se passe : "Essayer gratuitement 14 jours", "Réserver 20 min avec le fondateur".
- Une seule animation au chargement maximum, respect de `prefers-reduced-motion`.
- Mobile first, focus clavier visible.

### Textes (FR, langue source)

#### 1. Hero

**Titre :** Votre startup grandit. Votre organisation, pas encore.

**Sous-titre :** Sinra vous donne une méthode de travail prête à l'emploi. Specs, développement, tests et releases sont structurés dès le premier jour, sans consultant ni trois mois de configuration.

**CTA principal :** Essayer gratuitement 14 jours
**CTA secondaire :** Réserver 20 min avec le fondateur (`TODO THOMAS: lien de prise de rendez-vous`)
**Mention sous les CTA :** Sans carte bancaire. Hébergé en France.

**Visuel :** capture `02-cycle-current.png` (vue du cycle en cours).

#### 2. Symptômes

**Titre :** Vous reconnaissez votre équipe ?

Trois courts paragraphes, pas de liste à puces décorative :

- Les deadlines glissent à chaque sprint, et personne ne sait vraiment pourquoi.
- Une feature est "terminée" côté dev, mais personne ne l'a testée avant la mise en prod.
- À une semaine de la release, impossible de dire ce qui part vraiment.

**Phrase de conclusion :** Ce n'est pas un problème de talent. C'est un problème de méthode.

#### 3. La méthode incluse

**Titre :** Une méthode claire, intégrée à l'outil

**Intro :** Pas besoin de maîtriser Scrum ou d'embaucher un coach agile. Sinra organise le travail autour de quatre notions simples, et chaque membre de l'équipe sait où aller dès sa première connexion.

Séquence (numérotation justifiée ici) :

1. **Capability** : ce que le produit doit permettre, décrit et validé avant d'être développé.
2. **Issue** : le travail concret, lié à sa spec. On sait quoi construire et pourquoi.
3. **Cycle** : une période de travail dimensionnée selon la capacité réelle de l'équipe.
4. **Release** : ce qui part en production, testé et validé.

`TODO: vérifier que ces définitions correspondent à l'usage réel dans l'app et les docs.`

#### 4. Trois bénéfices

**Bénéfice A : On sait quoi construire**
Chaque issue est reliée à sa spécification. Les specs sont rédigées en parallèle du développement, avec un suivi dédié pour le product owner. Fini les tickets d'une ligne qu'on interprète chacun à sa façon.
Capture : `43-spec-pipeline.png` ou `08-issue-detail.png`.

**Bénéfice B : On sait si l'équipe peut suivre**
Sinra calcule la charge de chaque personne par cycle, en tenant compte de sa disponibilité réelle. Vous voyez les surcharges avant que le cycle commence, pas deux jours avant la deadline. Les tâches inachevées sont automatiquement reportées au cycle suivant.
Capture : `05-cycle-workload.png`.

**Bénéfice C : On livre sans stress**
Les tests font partie du flux de travail, liés directement aux releases. Avant chaque mise en production, vous savez ce qui a été testé, accepté ou rejeté.
Capture : `20-testing-detail.png`.

#### 5. Rituels

**Titre :** Les rituels d'une équipe mature, sans la lourdeur

**Texte :** Planning, rétrospective, revue de validation, analyse d'incident : Sinra les structure pour vous et les relie au cycle ou à la release concernés. Les décisions ne se perdent plus dans Slack.

Quatre éléments courts :
- **Réunions de planning** : ordre du jour, participants, décisions.
- **Rétrospectives** : créées automatiquement à la clôture d'une release.
- **Revues go/no-go** : critères, verdict et historique avant chaque étape clé.
- **Postmortems sans blâme** : chronologie, causes, actions correctives, temps de résolution calculé.

Capture : `22-retro-detail.png`.

#### 6. Secteurs exigeants

**Titre :** Vous développez dans la santé ou la finance ?

**Texte :** Vos clients, vos auditeurs ou vos futurs organismes de certification vous demanderont de prouver ce qui a été spécifié, développé, testé et validé. Sinra relie tout cela nativement, sans tableur de traçabilité à maintenir à la main.

**Deux liens :** Sinra pour les medtech et healthtech → `/medtech/` · Sinra pour les fintech → `/fintech/`

#### 7. Souveraineté

Conserver le bloc actuel, en le raccourcissant à un titre + 2 phrases + 3 points (RGPD, hébergement en France, pas de dépendance aux hyperscalers non européens).

`TODO THOMAS: confirmer le nom de l'hébergeur si tu veux le citer (argument fort pour la santé et la finance).`

#### 8. Le fondateur

**Titre :** Construit par un tech lead, pour les équipes tech

**Texte (brouillon à valider) :** Je m'appelle Thomas. Depuis près de 20 ans, je développe et je dirige des équipes logicielles, de la startup au grand groupe. J'ai vu les mêmes problèmes partout : des specs floues, des tests oubliés, des releases subies. Mes équipes et moi avons construit Sinra pour donner aux équipes qui grandissent la structure que nous aurions aimé trouver toute faite.

`TODO THOMAS: photo, validation du texte, lien LinkedIn.`

#### 9. Programme partenaires fondateurs

**Titre :** Rejoignez les premières équipes Sinra

**Texte :** Nous ouvrons un nombre limité de places à des équipes qui veulent structurer leur façon de travailler et nous aider à façonner le produit.

Contreparties proposées (`TODO THOMAS: valider l'offre`) :
- Onboarding personnalisé avec le fondateur.
- Tarif préférentiel conservé à vie.
- Accès direct à la roadmap et échanges réguliers.

**CTA :** Candidater au programme (lien vers la page contact ou le lien de prise de rendez-vous)

#### 10. FAQ (remplace l'existante)

- **Mon équipe ne connaît aucune méthode agile, est-ce un problème ?** Non, c'est justement le cas prévu. Sinra structure le travail pour vous : vous suivez ses concepts, la méthode suit.
- **Combien de temps faut-il pour démarrer ?** `TODO THOMAS: estimation réaliste.`
- **Peut-on importer notre backlog existant ?** Oui, depuis un fichier CSV ou directement depuis GitHub. L'export CSV est disponible à tout moment.
- **Où sont hébergées nos données ?** En France, sur des serveurs européens, dans le respect du RGPD.
- **L'essai gratuit est-il limité ?** 14 jours, toutes les fonctionnalités, sans carte bancaire.
- **Sinra est-il adapté aux entreprises réglementées ?** Sinra aide à organiser la traçabilité entre specs, développement, tests et releases. Voir nos pages dédiées medtech et fintech.

#### 11. CTA final

**Titre :** Donnez une méthode à votre équipe dès ce sprint.
**CTA :** Essayer gratuitement 14 jours

### Meta (home)

- **title FR :** Sinra, la méthode de travail intégrée pour les startups tech
- **description FR :** Specs, développement, tests et releases structurés dès le premier jour. Outil de gestion de projet pour startups en croissance, hébergé en France.
- Adapter EN et ES dans le même esprit.

**Commit :** `feat(site): nouvelle home orientée startups en croissance`

---

## Phase 3 — Landing page medtech / healthtech

**URL :** `/medtech/` (+ `/fr/medtech/`, `/es/medtech/`). Ajouter un lien dans le footer, pas dans la navigation principale pour l'instant.

Ici, le vocabulaire de rigueur est un atout : traçabilité, validation, audit trail, cycle en V peuvent être nommés.

### Textes (FR)

**Hero, titre :** Structurez votre développement logiciel avant votre premier audit.

**Sous-titre :** Pour les startups medtech et healthtech, Sinra relie exigences, développement, tests et validations de release dans un seul outil. Votre traçabilité se construit pendant que vous développez, pas la veille de l'audit.

**CTA :** Réserver 20 min avec le fondateur · Essayer gratuitement

**Section problème, titre :** Jira pour les devs, Excel pour la traçabilité, Word pour les validations

**Texte :** Dans la santé, un logiciel ne suffit pas : il faut pouvoir démontrer comment il a été spécifié, développé, vérifié et validé. La plupart des jeunes équipes reconstituent ces preuves à la main, avec des tableurs qui ne sont jamais à jour.

**Section solution, 4 blocs :**

1. **Des exigences reliées au code et aux tests.** Chaque spécification est liée aux issues qui l'implémentent et aux tests qui la vérifient. `TODO: vérifier l'existence d'une vue ou d'un export de traçabilité ; sinon ne pas promettre de "matrice".`
2. **Des validations formelles et historisées.** Revues de phase avec critères d'évaluation, verdict go / no-go / conditionnel et historique de chaque décision.
3. **Des incidents documentés.** Postmortems structurés : chronologie, facteurs systémiques, actions correctives, temps de résolution.
4. **Un vocabulaire maîtrisé.** Glossaire métier partagé et réutilisé dans les spécifications, pour éviter les ambiguïtés.

**Section cycle en V + agile, titre :** La rigueur du cycle en V, le rythme de l'agile

**Texte :** Les specs suivent leur propre flux de rédaction et de validation, pendant que les développeurs avancent en cycles courts. Les tests et les revues de phase garantissent que rien ne part en production sans avoir été vérifié.

**Section données :** Hébergement en France, RGPD, données chiffrées. Texte transparent : "Sinra est conçu pour vos données de développement, pas pour des données patients. Comme dans vos environnements de test, utilisez des données fictives ou anonymisées dans vos issues et pièces jointes." Ne jamais mentionner HDS (Sinra n'est pas certifié). `TODO THOMAS: aligner avec les CGU et le DPA une fois rédigés.`

**Mention obligatoire (bas de page, lisible) :** Sinra est un outil d'organisation du développement. Il ne constitue pas une certification et ne garantit pas à lui seul la conformité à une norme (par exemple IEC 62304 ou ISO 13485). Il vous aide à structurer et à retrouver la documentation attendue par vos démarches qualité.

**CTA final :** Parlons de votre démarche qualité. (Réserver 20 min)

### Meta

- **title FR :** Sinra pour les medtech : traçabilité du développement logiciel
- **description FR :** Reliez exigences, code, tests et validations de release. Outil de gestion de projet pour startups medtech et healthtech, hébergé en France.

**Commit :** `feat(site): landing page medtech / healthtech`

---

## Phase 4 — Landing page fintech

**URL :** `/fintech/` (+ FR, ES). Lien footer.

### Textes (FR)

**Hero, titre :** Livrez vite, et prouvez que chaque mise en production était maîtrisée.

**Sous-titre :** Les fintech doivent rassurer leurs partenaires bancaires, leurs clients et leurs régulateurs. Sinra rend votre processus de livraison traçable : ce qui a été spécifié, testé, validé et mis en production, et par qui.

**Section problème, titre :** Vos partenaires vous demandent des preuves, pas des promesses

**Texte :** Due diligence d'une banque partenaire, questionnaire de sécurité d'un grand client, exigences de gestion des incidents : tôt ou tard, il faut montrer comment vous gérez vos changements et vos incidents. Sans outil adapté, ces preuves sont éparpillées entre tickets, messages et documents.

**Section solution, 4 blocs :**

1. **Des releases contrôlées.** Chaque release regroupe ses fonctionnalités, ses tests et sa checklist de mise en production.
2. **Des décisions go / no-go traçables.** Critères, verdict et historique pour chaque étape de validation.
3. **Une gestion d'incident structurée.** Postmortems sans blâme, actions correctives suivies et temps de résolution calculé automatiquement.
4. **Un historique exploitable.** Décisions de planning, validations et incidents restent reliés aux cycles et releases concernés. `TODO: vérifier l'existence d'un audit trail / historique des modifications consultable.`

**Section contexte réglementaire :** une phrase prudente, par exemple : "Avec des cadres comme DORA, les établissements financiers attendent davantage de rigueur de leurs prestataires technologiques sur la gestion des changements et des incidents." Pas d'affirmation de conformité.

**Section données :** hébergement en France, RGPD, pas de dépendance aux hyperscalers non européens.

**Mention obligatoire :** Sinra ne constitue pas une certification et ne garantit pas à lui seul la conformité à une réglementation (par exemple DORA ou PCI DSS). Il vous aide à structurer et à documenter vos processus de développement et de gestion des incidents.

**CTA :** Réserver 20 min avec le fondateur · Essayer gratuitement

### Meta

- **title FR :** Sinra pour les fintech : releases et incidents traçables
- **description FR :** Gestion de projet logiciel avec validations go / no-go, tests liés aux releases et postmortems. Pour les fintech, hébergé en France.

**Commit :** `feat(site): landing page fintech`

---

## Phase 5 — Page pricing

- [ ] Offre **Pro** conservée (10 €/siège/mois, 96 €/an), liste de features réécrite en bénéfices simples, sans "Dedicated account manager".
- [ ] Ajouter une carte **"Équipes medtech, healthtech & fintech"** : prix "Sur devis" ou `TODO THOMAS: prix`, contenu : tout Pro + onboarding accompagné + aide à la mise en place de la traçabilité + échanges prioritaires avec le fondateur. CTA : Réserver 20 min. `TODO THOMAS: valider le contenu ; ne rien promettre que tu ne peux pas tenir seul (SSO, SLA…).`
- [ ] Mentionner le programme partenaires fondateurs sous les offres.
- [ ] FAQ pricing : conserver essai, prix, contenu ; supprimer toute promesse de support téléphonique.

**Commit :** `feat(site): pricing aligné sur le nouveau positionnement`

---

## Phase 6 — Traductions EN et ES

- [ ] Adapter tous les nouveaux textes FR en EN et ES (ton naturel, idiomes locaux, pas de calque).
- [ ] Pour l'EN, garder des titres courts et directs. Proposition de hero EN : "Your startup is growing. Your process isn't." (à adapter si besoin).
- [ ] Vérifier que les slugs `/medtech/` et `/fintech/` existent dans les 3 langues et que le sélecteur de langue pointe vers la bonne page.
- [ ] Conserver les termes produit (Capability, Issue, Cycle, Release) identiques dans les 3 langues s'ils le sont dans l'app.

**Commit :** `feat(i18n): adaptations EN et ES du nouveau contenu`

---

## Phase 7 — SEO technique

- [ ] `title` et `meta description` uniques par page et par langue.
- [ ] Balises `hreflang` correctes entre FR / EN / ES (vérifier la génération Hugo).
- [ ] OG image : conserver l'actuelle, prévoir `TODO THOMAS` pour des images dédiées medtech/fintech.
- [ ] Données structurées `SoftwareApplication` (JSON-LD) sur la home : nom, catégorie `BusinessApplication`, offre (prix Pro, EUR), sans note ni avis inventés.
- [ ] Nouvelles pages présentes dans le sitemap.
- [ ] Un seul `h1` par page, hiérarchie de titres cohérente.
- [ ] Attributs `alt` descriptifs sur toutes les captures.

**Commit :** `chore(seo): meta, hreflang et données structurées`

---

## Phase 8 — Vérification finale

- [ ] `hugo --minify` sans erreur ni warning.
- [ ] `hugo server` : parcourir home, pricing, medtech, fintech dans les 3 langues.
- [ ] Vérifier tous les liens (aucun lien cassé, liens app.sinra.dev intacts).
- [ ] Contrôle mobile (375 px) et desktop.
- [ ] Contraste et focus clavier.
- [ ] Rechercher dans le repo les termes supprimés pour s'assurer qu'ils ne subsistent pas : `SQL injection`, `Polymorphic`, `account manager`, `40%`, `call us directly`, `Your Process, Not Ours`.
- [ ] Lister tous les `TODO THOMAS` restants.

**Livrable :** rapport final avec liste des TODO, captures d'écran si possible.

---

## Récapitulatif des décisions à prendre par Thomas

| Sujet | Décision attendue |
|---|---|
| Prise de rendez-vous | Lien Cal.com, Calendly ou autre |
| Fondateur | Photo, texte, lien LinkedIn |
| Programme partenaires | Nombre de places, remise, engagement demandé |
| Features à confirmer | Définitions des 4 concepts, vue/export de traçabilité, audit trail, historique |
| Hébergeur | Le nommer ou non |
| Offre secteurs réglementés | Prix, contenu réaliste pour un fondateur seul |
| Données de santé | Clause d'interdiction dans CGU/DPA, avertissement dans l'app, politique de suppression ; HDS seulement si la demande le justifie |
| Temps de démarrage | Estimation honnête pour la FAQ |
| Images OG dédiées | À créer ou non |
