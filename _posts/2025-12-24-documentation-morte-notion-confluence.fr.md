---
layout: post
title: "La Documentation Morte : Pourquoi Vos Confluence/Notion Tombent En Ruine"
subtitle: "Entre specs obsolètes, docs contradictoires et versions multiples, personne ne sait quelle information est fiable—Sinra unifie contexte et travail"
description: "Les équipes créent de magnifiques documentations dans Notion/Confluence. Six mois plus tard, 70% est obsolète et personne ne sait quelle version est correcte. Découvrez comment Sinra intègre documentation et travail dans un système unifié."
date: 2025-12-24 09:00:00 +0100
lang: fr
category: Documentation
excerpt: "Votre nouveau développeur demande : « Comment fonctionne l'authentification ? ». Vous pointez vers 3 docs Notion différentes datant de 6 mois. Aucune ne correspond au code actuel. Bienvenue dans le cimetière de la documentation morte."
permalink: /documentation/:year/:month/:day/documentation-morte-notion-confluence.html
featured_image: /assets/images/blog/2025-12-24-documentation-morte-featured.svg
---

## Le Premier Jour Du Nouveau Développeur

**Lundi 9h00. Alex rejoint l'équipe engineering.**

Lead Developer : « Bienvenue Alex ! Pour comprendre notre architecture, commence par lire la documentation. »

**Alex ouvre Notion.**

**Recherche : "Authentication"**

**Résultats trouvés : 8 documents**

1. `RFC-042 : Architecture Authentification` (créé il y a 8 mois)
2. `Spec Technique : SSO Implementation` (créé il y a 6 mois)
3. `Documentation API Auth v2` (créé il y a 4 mois)
4. `Migration JWT → OAuth2` (créé il y a 3 mois)
5. `Guide: How to authenticate users` (créé il y a 2 mois)
6. `Auth System Overview [DRAFT]` (créé il y a 1 mois)
7. `Authentication Best Practices` (créé il y a 2 semaines)
8. `Auth Quick Start` (créé hier)

**Alex, perplexe :**

> « Lequel je lis ? Lequel est à jour ? »

**Il ouvre RFC-042 (le plus ancien).**

```markdown
# RFC-042 : Architecture Authentification

## Status: Approved ✅

Nous allons implémenter JWT tokens pour l'authentification.

### Architecture:
- Backend: Node.js + Express + JWT
- Tokens stockés en localStorage
- Durée de vie: 24h
- Pas de refresh tokens (pour simplifier)
```

**Alex lit tout le document (30 minutes).**

**Ensuite, il ouvre le code actuel :**

```javascript
// auth.service.ts
export class AuthService {
  // Using OAuth2 with refresh tokens
  async login(provider: 'google' | 'microsoft') {
    return this.oauth2Provider.authenticate(provider);
  }
}
```

**Alex, confus :**

> « Le doc dit JWT, le code fait OAuth2. Le doc dit pas de refresh tokens, le code en a. Le doc dit localStorage, le code utilise httpOnly cookies. Rien ne correspond ! »

**Il demande au Lead Developer :**

Alex : « La doc RFC-042 dit qu'on utilise JWT, mais le code fait OAuth2 ? »

Lead Dev : « Ah oui, on a changé il y a 4 mois. Regarde plutôt le doc 'Migration JWT → OAuth2'. »

Alex : « Mais lequel est la version actuelle ? »

Lead Dev : « Euh... bonne question. Peut-être le 'Auth System Overview' ? Ou le 'Quick Start' ? En fait, je sais pas trop. Lis le code, ce sera plus fiable. »

**Résultat :** Alex a passé 2 heures à lire de la documentation obsolète pour finalement apprendre en lisant le code.

![Versions multiples : Personne ne sait laquelle est correcte](/assets/images/blog/2025-12-24-documentation-morte-multiple-versions.svg)

---

## Le Problème De La Documentation Morte

La majorité des équipes tech créent de la documentation. Puis elle meurt lentement, sans que personne ne s'en rende compte.

### Les Cinq Symptômes De La Documentation Morte

#### 1. Documentation Obsolète (Déconnectée Du Code Réel)

**Le Scénario :**
Vous écrivez une magnifique spec technique dans Notion il y a 6 mois. Le code évolue. La spec reste figée.

**Chronologie typique :**

**Mois 1 :** Spec créée, parfaitement alignée avec le code.

**Mois 2 :** Petit changement dans le code (ajout d'un paramètre). Spec pas mise à jour (« je le ferai plus tard »).

**Mois 3 :** Refactoring majeur (changement d'architecture). Spec pas mise à jour (« trop occupé, deadline »).

**Mois 4 :** Nouveau membre lit la spec, ne comprend pas pourquoi le code est différent.

**Mois 6 :** La spec est officiellement obsolète. Personne ne la lit plus. Elle devient un artefact historique.

**Le Problème :**
- ❌ Documentation figée pendant que le code évolue
- ❌ Aucune incitation à maintenir à jour
- ❌ Désynchronisation progressive et silencieuse
- ❌ Personne ne sait quand la doc est devenue obsolète

**Résultat Réel :**
Une étude interne chez une scale-up tech de 50 personnes a révélé que **73% de leur documentation Confluence avait plus de 6 mois et ne correspondait plus au code actuel**.

![Chronologie de l'obsolescence de la documentation sur 6 mois](/assets/images/blog/2025-12-24-documentation-morte-obsolescence-timeline.svg)

---

#### 2. Versions Multiples (Personne Ne Sait Laquelle Est Correcte)

**Le Scénario :**
Vous cherchez « How does authentication work? » dans Notion.

**Vous trouvez :**
- `Auth Architecture v1` (8 mois)
- `Auth Architecture v2 [FINAL]` (6 mois)
- `Auth Architecture v2.1` (4 mois)
- `Auth Overview [Updated]` (2 mois)
- `Authentication Guide` (1 semaine)

**Question :** Laquelle est la bonne ?

**Réponse :** Aucune idée.

**Le Problème :**
- ❌ Personne ne supprime les anciennes versions
- ❌ Aucun système de versioning clair
- ❌ Les titres ne reflètent pas le statut réel (« FINAL » n'est jamais final)
- ❌ Impossible de savoir quelle doc reflète le code actuel

**Scénario Réel :**

**Développeur 1 :** « Lis le doc 'Auth v2 FINAL'. »

**Développeur 2 :** « Non, celui-là est obsolète. Lis 'Auth Overview Updated'. »

**Développeur 3 :** « Attendez, le plus récent c'est 'Authentication Guide' créé la semaine dernière. »

**Lead Developer :** « Honnêtement, lis juste le code. »

---

#### 3. Docs Contradictoires (Chaque Doc Dit Une Chose Différente)

**Le Scénario :**
Trois documents différents décrivent la même feature. Chacun dit quelque chose de légèrement différent.

**Doc A (Notion) :** « Les tokens expirent après 1 heure. »

**Doc B (Confluence) :** « Les tokens expirent après 24 heures. »

**Code actuel :** `TOKEN_EXPIRY = 12 * 60 * 60` (12 heures)

**Aucun n'est correct.**

**Le Problème :**
- ❌ Documentation fragmentée entre outils (Notion + Confluence + GitHub Wiki + Google Docs)
- ❌ Chaque doc créé indépendamment, jamais synchronisé
- ❌ Impossible de savoir quelle info est correcte
- ❌ Les contradictions créent confusion et bugs

**Exemple Réel :**

Un développeur implémente une feature basée sur Doc A (« tokens 1h »). QA teste basé sur Doc B (« tokens 24h »). Le code fait 12h. Tout le monde pense qu'il y a un bug, mais c'est juste la doc qui ment.

---

#### 4. « On Mettra La Doc À Jour Après » (Spoiler: Jamais Fait)

**Le Scénario :**

**Vendredi 17h00, fin de sprint.**

Dev : « J'ai terminé la feature SSO. »

Lead : « Super ! Tu as mis à jour la documentation ? »

Dev : « Euh... non, j'ai pas eu le temps. Je le ferai lundi. »

**Lundi matin.**

Dev : (3 nouvelles issues assignées, 2 bugs urgents, 1 réunion impromptue)

« Merde, j'ai oublié la doc. Je le ferai plus tard. »

**2 semaines plus tard.**

Dev : (a complètement oublié)

**3 mois plus tard.**

Nouveau dev : « Comment fonctionne le SSO ? »

Ancien dev : « Euh... regarde le code, la doc est obsolète. »

**Le Problème :**
- ❌ Documenter n'est jamais urgent
- ❌ Aucune accountability (personne ne vérifie)
- ❌ Workflow séparé (code → commit → ... doc ? peut-être ?)
- ❌ Incitation à documenter = zéro

**Statistique Réelle :**

Dans une enquête auprès de 200 développeurs :
- 92% disent « je mettrai la doc à jour après »
- 8% mettent effectivement à jour
- Délai moyen entre changement code et mise à jour doc : **jamais**

---

#### 5. Onboarding Cauchemardesque (Nouvelle Personne Perdue)

**Le Scénario :**

**Nouveau développeur, Jour 1.**

Lead : « Lis ces 40 documents Notion pour comprendre l'architecture. »

**Nouveau développeur passe 3 jours à lire.**

**Jour 4 :**

Nouveau dev : « J'ai lu toute la doc. Je peux commencer à coder ? »

Lead : « Cool, quelle feature tu veux attaquer ? »

Nouveau dev : « L'API payments. La doc dit qu'on utilise Stripe avec webhooks. »

Lead : « Ah non, on a migré vers Adyen il y a 2 mois. La doc est obsolète. »

Nouveau dev : « ... »

**Le Problème :**
- ❌ Onboarding basé sur docs obsolètes = temps perdu
- ❌ Nouvelle personne ne peut pas distinguer docs valides vs obsolètes
- ❌ Frustration massive (« J'ai lu pendant 3 jours pour rien »)
- ❌ Perte de confiance dans la documentation

**Résultat :** Les nouveaux développeurs abandonnent rapidement la doc et apprennent en demandant 100 questions à leurs collègues.

---

## Pourquoi La Documentation Meurt

### Raison 1 : Documentation Séparée Du Travail

**Le Problème :**

Les équipes utilisent :
- **GitHub** pour le code
- **Jira/Linear** pour les issues
- **Notion/Confluence** pour la documentation

**Workflow typique :**

1. Développeur travaille sur une feature dans Jira
2. Code dans GitHub
3. Merge la PR
4. ✅ Feature terminée !
5. ... Documentation ? « Ah oui, je dois la mettre à jour dans Notion. Plus tard. »

**Résultat :** La documentation est une réflexion après coup (afterthought), déconnectée du workflow naturel.

**Personne ne met à jour parce que :**
- C'est dans un outil séparé (switch de contexte)
- Pas partie du processus de review (PR mergée sans doc)
- Pas de rappel automatique (« Tu as oublié la doc »)

---

### Raison 2 : Aucune Single Source Of Truth

**Le Problème :**

Informations dispersées entre :
- Notion : Specs techniques
- Confluence : Architecture decisions
- GitHub Wiki : Setup guides
- Google Docs : Product requirements
- Slack : Décisions rapides (perdues après 90 jours)
- Email : Approbations stakeholders

**Résultat :** **6 sources de vérité** = **0 source de vérité**.

Personne ne sait où chercher. Personne ne sait quelle info est correcte. Chacun maintient sa propre version mentale de « comment ça marche vraiment ».

![Documentation dispersée entre 6 outils](/assets/images/blog/2025-12-24-documentation-morte-scattered-tools.svg)

---

### Raison 3 : Pas De Propriétaire (Everybody's Responsibility = Nobody's Responsibility)

**Le Problème :**

Lead : « Qui est responsable de maintenir la doc à jour ? »

**Réponse A :** « L'équipe. »

**Réponse B :** « Le développeur qui fait le changement. »

**Réponse C :** « Le tech lead. »

**Réalité :** Personne.

**Pourquoi ?**

Parce que « responsabilité collective » = aucune accountability individuelle.

Développeur : « J'ai oublié de mettre à jour la doc, mais ce n'est pas critique. »

Tech Lead : « Je pensais que le dev mettrait la doc à jour. »

Nouveau dev (6 mois plus tard) : « Pourquoi cette doc est obsolète ? »

Tout le monde : 🤷

---

## L'Approche Sinra : Documentation Vivante Intégrée Au Travail

Sinra élimine la documentation morte en **intégrant contexte et travail dans un système unifié**.

### Le Concept : Pages + Commentary = Documentation Vivante

Dans Sinra, la documentation ne vit pas dans un outil séparé. Elle vit **avec le travail**.

**Trois mécanismes :**

1. **Pages** : Documentation structurée organisée par catégories
2. **Commentary** : Contexte et décisions capturés directement dans les issues et capabilities
3. **Recherche unifiée** : Trouve code, contexte, et documentation en un endroit

**Résultat :** Impossible de désynchroniser (pas de docs externes à maintenir).

---

### Anatomie D'Une Feature Avec Documentation Sinra

Reprenons l'exemple de l'authentification.

#### Approche Traditionnelle (Notion + Code)

**Étape 1 :** Écrire spec dans Notion (« RFC-042 : Architecture Auth »)

**Étape 2 :** Coder dans GitHub

**Étape 3 :** Merger la PR

**Étape 4 :** « Je mettrai la doc Notion à jour plus tard » → jamais fait

**Résultat :** Doc Notion figée, code évolue, désynchronisation totale.

![Approche traditionnelle vs Sinra](/assets/images/blog/2025-12-24-documentation-morte-traditional-vs-sinra.svg)

---

#### Approche Sinra (Documentation Intégrée)

**Étape 1 :** Créer capability « Authentification SSO »

**Description de la capability :**
```markdown
# Authentification SSO

Permettre aux utilisateurs de se connecter via Google et Microsoft OAuth2.

## Architecture
- OAuth2 flow (pas JWT)
- Tokens httpOnly cookies (pas localStorage)
- Refresh tokens avec rotation
- Session duration: 12h

## Décisions clés
[Voir commentary ci-dessous]
```

**Étape 2 :** Commentary de la capability (contexte capturé en temps réel)

```markdown
@lead: Pourquoi OAuth2 et pas JWT ?

@architect: JWT necessite de gérer manuellement la révocation (complexe).
OAuth2 avec refresh tokens offre révocation native via le provider.

@dev1: Et pourquoi httpOnly cookies au lieu de localStorage ?

@architect: localStorage vulnérable aux attaques XSS. httpOnly cookies
protègent mieux contre vol de tokens.

@lead: Validé. On y va.

Décision finale: OAuth2 + refresh tokens + httpOnly cookies.
Raison: Sécurité et simplicité de révocation.
```

**Étape 3 :** Issues créées sous la capability

- `[AUTH-120] Implement Google OAuth2 backend`
- `[AUTH-121] Implement Microsoft OAuth2 backend`
- `[AUTH-122] Setup httpOnly cookie management`
- `[AUTH-123] Implement refresh token rotation`

**Étape 4 :** Développement avec commentary par issue

```markdown
[Issue AUTH-120: Implement Google OAuth2 backend]

@dev1: J'utilise la lib `passport-google-oauth20`. Config:
- Client ID/Secret stockés en env vars
- Redirect URL: `/auth/google/callback`
- Scopes: profile, email

@architect: ✅ Parfait. Assure-toi de valider le state param pour CSRF.

@dev1: ✅ Fait. Code review ready.
```

**Étape 5 :** Code merged → Commentary préservé

**6 mois plus tard**, nouveau développeur :

> « Comment fonctionne l'auth ? »

**Réponse :** Ouvre la capability « Authentification SSO »

**Il voit :**
- ✅ Description actuelle de l'architecture
- ✅ Commentary expliquant **pourquoi** OAuth2 (pas juste **quoi**)
- ✅ Décisions techniques avec justifications
- ✅ Issues liées avec détails d'implémentation
- ✅ Historique complet des discussions

**Temps pour comprendre :** 15 minutes au lieu de 3 jours.

**Fiabilité :** 100% (car contexte capturé au moment du travail, pas après).

---

### Les Trois Piliers De La Documentation Vivante Sinra

#### 1. Pages : Documentation Structurée Par Catégories

**Le Concept :**

Les **pages** Sinra permettent de créer de la documentation structurée, organisée par **catégories**.

**Cas d'usage :**
- Architecture guides
- API documentation
- Setup instructions
- Best practices
- Runbooks

**Différence avec Notion :**

| **Aspect** | **Notion/Confluence** | **Sinra Pages** |
|------------|----------------------|-----------------|
| **Lien avec travail** | ❌ Séparé | ✅ Intégré (peut lier issues, capabilities) |
| **Recherche** | Silotée | Unifiée (trouve pages + issues + commentary) |
| **Mise à jour** | Manuelle (oubliée) | Encouragée (dans le même système) |
| **Versioning** | Confus | Clair (lié aux releases) |

**Exemple : Page « Authentication Setup »**

```markdown
# Authentication Setup

## Overview
Notre système utilise OAuth2 avec Google et Microsoft comme providers.

## Quick Start
[Lien vers issues AUTH-120, AUTH-121]

## Architecture Decisions
[Lien vers commentary de la capability Authentification SSO]

## Common Issues
[Lien vers bugs résolus avec tag #auth]
```

**Bénéfice :** La page n'est pas isolée. Elle **pointe vers le contexte réel** (issues, commentary, bugs).

---

#### 2. Commentary : Contexte Capturé Au Moment Du Travail

**Le Concept :**

Le **commentary** (déjà expliqué dans le post "Communication Dispersée") capture :
- Décisions techniques
- Justifications ("pourquoi")
- Discussions d'équipe
- Changements d'approche

**Différence avec documentation traditionnelle :**

**Doc traditionnelle (Notion) :**
> « Nous utilisons OAuth2. »

**Commentary Sinra :**
> « Nous utilisons OAuth2 au lieu de JWT parce que [raisons détaillées]. Discussion complète : [lien]. Approches alternatives considérées : JWT (rejeté car révocation complexe), Session cookies (rejeté car pas stateless). »

**Résultat :** La doc n'est pas juste **quoi**, mais **pourquoi** et **comment on est arrivé là**.

---

#### 3. Recherche Unifiée : Trouve Tout En Un Endroit

**Le Concept :**

Sinra offre une **recherche unifiée** qui trouve :
- Pages de documentation
- Issues
- Capabilities
- Commentary
- Bugs

**Scénario :**

Développeur cherche : « OAuth2 refresh tokens »

**Résultats :**
1. **Page** : "Authentication Setup" → mentionne refresh tokens
2. **Capability** : "Authentification SSO" → décrit architecture refresh tokens
3. **Issue** : AUTH-123 "Implement refresh token rotation" → implémentation détaillée
4. **Commentary** : Discussion sur pourquoi rotation obligatoire
5. **Bug** : AUTH-247 "Refresh token expiry bug" → cas edge résolu

**Temps pour trouver l'info :** < 1 minute.

**Avec Notion + GitHub + Jira séparés :** 30 minutes (3 recherches dans 3 outils).

![Recherche silotée vs recherche unifiée](/assets/images/blog/2025-12-24-documentation-morte-search-comparison.svg)

---

## Exemple Réel : DataFlow (SaaS Analytics)

**DataFlow (équipe de 15 personnes, plateforme analytics)**

*Note : DataFlow est une entreprise réelle que nous avons anonymisée sous un nom fictif pour protéger leur confidentialité.*

### Avant Sinra : Documentation Morte

**Stack de docs :**
- Notion : Specs techniques (200+ pages)
- Confluence : Architecture decisions (50+ pages)
- GitHub Wiki : Setup guides (30+ pages)
- Google Docs : Product specs (100+ docs)

**Problèmes Rencontrés :**
- **73% de docs obsolètes** (audit interne révélé)
- **Onboarding : 2 semaines** (nouveau dev passe 10 jours à lire docs obsolètes)
- **Versions multiples** : Chaque feature a 3-5 docs contradictoires
- **Aucune mise à jour** : « On mettra la doc à jour après » = jamais fait
- **Frustration équipe** : « Personne ne lit la doc de toute façon »

**Incident Révélateur :**

Nouveau développeur implémente feature « Export CSV » basé sur spec Notion datant de 8 mois.

**Spec disait :** « CSV délimité par virgule, encodage UTF-8 »

**Code actuel faisait :** « CSV délimité par tab, encodage UTF-16 (pour support Excel international) »

**Résultat :** Feature réimplémentée incorrectement. 1 semaine perdue à refaire.

**Pourquoi ?** Spec obsolète, jamais mise à jour après changement d'implémentation 6 mois avant.

---

### Après Sinra : Documentation Vivante

**Workflow :**
1. Chaque feature documentée dans **capability description** + **commentary**
2. Pages Sinra pour guides setup et architecture
3. Recherche unifiée pour trouver contexte
4. Zéro doc externe (tout dans Sinra)

**Résultats (Après 5 Mois) :**
- **0% docs obsolètes** (impossible, car intégré au travail)
- **Onboarding : 3 jours** (lectures ciblées sur capabilities clés)
- **Version unique** : Capability = source de vérité unique
- **Mise à jour automatique** : Commentary capturé pendant le travail (pas après)
- **Moral équipe** : « Enfin de la doc fiable ! »

**Citation Lead Developer :**
> « Avant, je disais aux nouveaux 'oublie la doc, lis le code'. Maintenant, je dis 'lis ces 5 capabilities et leur commentary, tu comprendras tout'. Onboarding divisé par 3. »

**Citation Product Manager :**
> « Fini les 6 versions contradictoires d'une spec. On a une capability avec description + commentary. C'est LA source de vérité. Si ça change, on met à jour la capability. Simple. »

![DataFlow : Avant vs Après Sinra](/assets/images/blog/2025-12-24-documentation-morte-before-after.svg)

---

## Notion + Confluence + GitHub Wiki vs. Sinra : Comparaison

| **Aspect** | **Stack Multi-Docs** | **Sinra Intégré** |
|------------|---------------------|-------------------|
| **Localisation doc** | 4-6 outils séparés | 1 système unifié |
| **Synchronisation code** | ❌ Manuelle (oubliée) | ✅ Intégrée (dans le travail) |
| **Obsolescence** | Fréquente (70%+) | Rare (contexte vivant) |
| **Versions multiples** | Oui (confusion) | Non (source unique) |
| **Recherche** | Silotée par outil | Unifiée (tout) |
| **Onboarding** | 1-2 semaines | 2-3 jours |
| **Mise à jour** | « Plus tard » = jamais | Capturée pendant travail |
| **Propriétaire** | Flou (personne) | Clair (attaché à capability) |
| **Fiabilité** | 30-40% | 90%+ |

---

## Les Cinq Signes Que Votre Documentation Est Morte

### Signe 1 : Vous Dites « Oublie La Doc, Lis Le Code »

Si vous conseillez systématiquement aux nouveaux de ne pas lire la documentation, votre doc est morte.

---

### Signe 2 : Personne Ne Sait Quelle Version Est Correcte

Si vous avez 5 documents pour la même feature et personne ne sait lequel est à jour, votre doc est morte.

---

### Signe 3 : La Doc Dit Une Chose, Le Code Fait Autre Chose

Si votre documentation contredit le code actuel, votre doc est morte (et dangereuse).

---

### Signe 4 : Onboarding Prend 2+ Semaines

Si les nouveaux passent 2 semaines à lire des docs pour ensuite tout réapprendre en lisant le code, votre doc est morte.

---

### Signe 5 : « Je Mettrai La Doc À Jour Après »

Si cette phrase est prononcée après chaque feature, votre doc est condamnée à mourir.

---

## Comment Utiliser Sinra Pour Documentation Vivante

### Étape 1 : Créer Pages Pour Guides Structurés

**Action :**
- Créer pages Sinra pour setup, architecture, best practices
- Organiser par catégories (Setup, Architecture, API, etc.)
- Lier pages aux capabilities et issues concernées

**Résultat :** Documentation structurée accessible et liée au travail.

---

### Étape 2 : Capturer Contexte Dans Commentary

**Action :**
- Discuter décisions techniques dans commentary des capabilities
- Expliquer **pourquoi**, pas juste **quoi**
- Tagger personnes concernées

**Résultat :** Contexte préservé au moment du travail.

---

### Étape 3 : Utiliser Description Capability Comme Spec

**Action :**
- Description capability = spec courte et actuelle
- Lier aux issues d'implémentation
- Mettre à jour description si architecture change

**Résultat :** Source de vérité unique par feature.

---

### Étape 4 : Recherche Unifiée Pour Trouver Info

**Action :**
- Utiliser recherche Sinra au lieu de chercher dans 5 outils
- Trouve pages, capabilities, issues, commentary en un endroit

**Résultat :** Réponses instantanées, pas 30 min de recherche.

---

## Points d'Action : Ressusciter Votre Documentation

1. **Créez vos premières pages Sinra.** Migrez vos 5 guides les plus importants de Notion.
2. **Capturez contexte dans commentary.** Prochaine décision technique → écrivez dans capability, pas Notion.
3. **Utilisez capabilities comme specs.** Description + Commentary = documentation vivante.
4. **Abandonnez Notion pour nouvelles features.** Tout nouveau travail documenté dans Sinra.
5. **Onboardez avec Sinra.** Montrez 5 capabilities clés, pas 40 docs Notion.

---

## Le Point Clé

**La documentation morte tue la productivité.**

Entre **specs obsolètes**, **versions multiples**, **docs contradictoires**, et **onboarding cauchemardesque**, personne ne fait confiance à la documentation.

**Sinra intègre documentation et travail dans un système unifié.**

Les pages structurent, le commentary capture le contexte, la recherche unifie tout.

**Le résultat :**
- ✅ Documentation vivante (mise à jour avec le travail)
- ✅ Source de vérité unique (pas de versions multiples)
- ✅ Contexte préservé (pourquoi, pas juste quoi)
- ✅ Recherche unifiée (trouve tout en un endroit)
- ✅ Onboarding rapide (3 jours au lieu de 2 semaines)

**Vous avez enfin de la documentation fiable.**

**Le futur vous dira merci.**

---

## Découvrez aussi la série « Problèmes Invisibles »

- **[Le QA Invisible](/qa/2025/12/22/qa-invisible-tests-disperses.html)** - 847 tests dans Excel : comment rendre le QA visible avec Sinra Testings
- **[Le Chaos Du Backlog](/planning/2025/12/26/chaos-backlog-personne-sait-q2.html)** - 537 issues chaotiques : comment organiser le travail par releases et cycles
- **[Les Dépendances Cachées](/dependencies/2025/12/28/dependances-cachees-features-bloquees.html)** - 47% des features bloquées : comment rendre les dépendances visibles
- **[Le Syndrome Du Multi-Projet](/capacity/2025/12/30/syndrome-multi-projet-rien-navance.html)** - Développeurs sur 4 projets : comment limiter la surcharge

---

**Prêt à ressusciter votre documentation ?** [Démarrez un essai gratuit de Sinra →](https://app.sinra.dev/users/sign_up)

Découvrez une gestion de projet où la documentation vit avec le travail, pas dans un cimetière Notion.
