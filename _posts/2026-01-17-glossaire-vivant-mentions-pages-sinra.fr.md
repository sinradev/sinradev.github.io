---
layout: post
title: "De Notion À Sinra : Quand Votre Glossaire Technique Devient Vivant Grâce Aux @Mentions"
subtitle: "Entre définitions obsolètes, vocabulaire dispersé et documentation isolée du travail, personne ne parle le même langage : Sinra connecte glossaire et exécution via @pages"
description: "Les équipes créent des glossaires techniques dans Notion. Six mois plus tard, personne ne les utilise et chacun réinvente les définitions. Découvrez comment les @mentions de pages Sinra transforment votre glossaire en source vivante intégrée au travail."
date: 2026-01-17 09:00:00 +0100
lang: fr
category: Documentation
excerpt: "Le nouveau développeur demande : « C'est quoi exactement une release candidate chez nous ? ». Vous pointez vers le glossaire Notion créé il y a 8 mois. Il trouve 3 définitions contradictoires. Bienvenue dans le cimetière des glossaires techniques."
permalink: /documentation/:year/:month/:day/glossaire-vivant-mentions-pages-sinra.html
featured_image: /assets/images/blog/2026-01-17-glossaire-vivant-featured.png
---

## « C'est Quoi Une "Release Candidate" Chez Nous ? »

**Mardi après-midi. Réunion de planning release.**

Product Manager : « On va créer une release candidate vendredi pour tester en staging. »

**Nouveau développeur (arrivé il y a 2 semaines) lève la main :**

Dev : « Désolé, c'est quoi exactement une "release candidate" dans notre workflow ? »

PM : « Bonne question ! On a un glossaire dans Notion. Regarde la page "Vocabulaire Release Management". »

**Le développeur ouvre Notion.**

**Recherche : "Release Candidate"**

**Résultat 1 :** `Glossaire Engineering v1` (créé il y a 12 mois)
> **Release Candidate (RC)** : Version testée en interne, prête pour le déploiement production sans modifications supplémentaires.

**Résultat 2 :** `Vocabulaire Produit 2025` (créé il y a 6 mois)
> **RC (Release Candidate)** : Build stable déployée en environnement de staging pour validation QA. Peut encore recevoir des hotfixes.

**Résultat 3 :** `Guide Onboarding Développeurs` (créé il y a 3 mois)
> **Release Candidate** : Version feature-complete déployée pour tests utilisateurs beta. Freeze du code sauf bugs critiques.

**Le développeur, perplexe :**

> « Euh... j'ai trois définitions différentes. Laquelle est la bonne ? »

PM : « Ah oui, le glossaire n'a pas été mis à jour depuis qu'on a changé notre processus. »

Dev : « C'était quand ? »

PM : « Il y a 4 mois. »

Dev : « Et la bonne définition c'est laquelle ? »

PM : « En fait, maintenant on appelle ça une "staging release". Le terme "release candidate" on ne l'utilise plus vraiment. »

**Le développeur referme Notion.**

Dev : « Donc votre glossaire est obsolète et vous utilisez des termes qui ne sont plus dedans ? »

PM : « ... Oui. »

<img src="/assets/images/blog/2026-01-17-glossaire-contradictoire.svg" alt="Trois définitions contradictoires dans le glossaire Notion" width="800" height="500" loading="lazy">

---

## Le Problème Des Glossaires Morts

La majorité des équipes tech créent un glossaire ou un wiki de vocabulaire. Notion, Confluence, Google Docs, GitHub Wiki.

**Objectif noble :** Créer une source de vérité unique pour le vocabulaire métier et technique.

**Résultat 6 mois plus tard :** Glossaire mort, obsolète, que personne ne consulte.

### Les Cinq Symptômes Du Glossaire Mort

#### 1. Définitions Obsolètes (Le Vocabulaire Évolue, Le Glossaire Non)

**Le Scénario :**

Vous créez un glossaire avec 50 définitions soigneusement rédigées.

**Mois 1-2 :** Tout le monde le consulte. « Super utile ! »

**Mois 3 :** L'équipe change de méthodologie. Les termes évoluent. Le glossaire n'est pas mis à jour.

**Mois 6 :** 60% des définitions sont obsolètes ou inexactes.

**Mois 12 :** Personne ne consulte le glossaire. Chacun a sa propre interprétation des termes.

**Exemple Réel :**

**Terme :** « Sprint »

**Définition glossaire (8 mois) :**
> Itération de 2 semaines avec objectifs fixes et ceremonies Scrum.

**Réalité actuelle :**
L'équipe a abandonné Scrum pour adopter des « cycles » de 4 semaines avec planification flexible.

**Résultat :** Nouveau membre lit « sprint » dans le glossaire, pense que l'équipe fait du Scrum. Confusion totale.

<img src="/assets/images/blog/2026-01-17-glossaire-obsolescence.svg" alt="Chronologie de l'obsolescence d'un glossaire" width="800" height="400" loading="lazy">

**Le Problème :**
- ❌ Vocabulaire évolue avec la méthodologie
- ❌ Glossaire figé, jamais mis à jour
- ❌ Désynchronisation progressive
- ❌ Perte de confiance dans le glossaire

**Citation Lead Developer :**
> « On a créé un magnifique glossaire dans Notion. Maintenant, il sert surtout à montrer ce qu'on ne fait plus. »

---

#### 2. Vocabulaire Dispersé (Chaque Outil A Son Propre Jargon)

**Le Scénario :**

Votre équipe utilise plusieurs outils. Chaque outil impose son propre vocabulaire.

**Stack typique :**
- **Jira** : Epic, Story, Subtask, Sprint, Backlog
- **Notion** : Database, Page, Block, Relation
- **GitHub** : Issue, PR, Project, Milestone
- **Votre glossaire métier** : Capability, Feature, Task, Release

**Résultat :** 4 vocabulaires différents pour décrire la même chose.

**Exemple Concret :**

PM écrit dans Notion :
> « On va créer une **capability** "Authentification SSO" avec 5 **tasks** assignées à la prochaine **release**. »

Dev traduit dans Jira :
> « J'ai créé un **epic** "Authentification SSO" avec 5 **stories** dans le **sprint** 42. »

QA traduit dans Slack :
> « Je teste la **feature** "SSO" pour la **milestone** v2.4. »

**Personne ne parle le même langage.**

<img src="/assets/images/blog/2026-01-17-vocabulaire-disperse.svg" alt="Vocabulaire fragmenté entre outils" width="800" height="450" loading="lazy">

**Le Problème :**
- ❌ Chaque outil impose son jargon
- ❌ Traduction mentale constante (capability = epic = feature ?)
- ❌ Glossaire métier déconnecté des outils de travail
- ❌ Confusion dans les conversations

**Citation Product Manager :**
> « Quand je dis "capability", les devs pensent "epic", les QA pensent "feature", et les stakeholders pensent "projet". On ne parle jamais de la même chose. »

---

#### 3. Glossaire Isolé Du Travail (Documentation ≠ Exécution)

**Le Scénario :**

Vous avez un glossaire magnifique dans Notion. Mais il est **isolé du travail quotidien**.

**Workflow typique :**

1. **Écrire glossaire** dans Notion (1 journée, bien fait)
2. **Créer issues** dans Jira (vocabulaire Jira, pas vocabulaire glossaire)
3. **Discuter features** dans Slack (chacun utilise ses propres termes)
4. **Coder** dans GitHub (commentaires avec jargon technique)

**Le glossaire Notion n'apparaît jamais dans le workflow.**

**Résultat :** Glossaire = documentation morte, jamais consultée pendant le travail.

**Exemple Réel :**

**Terme défini dans glossaire Notion :** « Capability »
> Une fonctionnalité de haut niveau regroupant plusieurs issues techniques.

**Utilisation dans Jira :** « Epic »

**Utilisation dans Slack :** « Feature »

**Utilisation dans GitHub PR :** « Module »

**Le glossaire n'a aucun impact sur le vocabulaire utilisé au quotidien.**

**Le Problème :**
- ❌ Glossaire séparé des outils de travail
- ❌ Aucune incitation à utiliser le vocabulaire défini
- ❌ Chacun utilise ses propres termes
- ❌ Glossaire devient obsolète car déconnecté de la réalité

**Citation QA Engineer :**
> « On a un glossaire ? Je ne savais même pas. J'utilise juste les termes que je vois dans les issues. »

---

#### 4. Définitions Contradictoires (Plusieurs Versions, Aucune Autorité)

**Le Scénario :**

Votre équipe grandit. Plusieurs personnes créent des définitions. Résultat : versions contradictoires.

**Exemple :**

**Terme :** « Hotfix »

**Définition A (Glossaire Engineering) :**
> Correctif urgent déployé en production sans passer par le cycle de release normal.

**Définition B (Guide Ops) :**
> Patch critique déployé sur une branche de maintenance pour corriger un bug bloquant.

**Définition C (Process QA) :**
> Modification mineure déployée directement en production après validation rapide (< 2h).

**Trois définitions, trois interprétations.**

**Question :** Laquelle est correcte ?

**Réponse :** Aucune idée. Personne n'a défini de version officielle.

**Le Problème :**
- ❌ Plusieurs sources de définitions
- ❌ Aucune version « officielle »
- ❌ Impossible de savoir quelle définition est correcte
- ❌ Débats stériles sur la « vraie » signification des termes

---

#### 5. Glossaire Non Utilisé (Trop De Friction Pour Le Consulter)

**Le Scénario :**

Vous travaillez sur une issue dans Jira. Vous voyez le terme « staging release ».

**Pour consulter le glossaire, vous devez :**

1. Ouvrir un nouvel onglet
2. Aller sur Notion
3. Chercher « Glossaire »
4. Trouver la bonne page (il y en a 3)
5. Chercher « staging release » dans la page
6. Lire la définition
7. Revenir à Jira

**Temps total :** 2-3 minutes.

**Résultat :** Vous ne le faites pas. Vous devinez ou demandez à un collègue.

**Le Problème :**
- ❌ Trop de friction pour consulter le glossaire
- ❌ Contexte switching (Jira → Notion → Jira)
- ❌ Pas de lien direct depuis le travail vers la définition
- ❌ Personne ne consulte le glossaire en pratique

**Citation Développeur :**
> « Le glossaire est dans Notion. Je travaille dans Jira et GitHub. Je ne vais jamais chercher dans Notion pendant que je code. »

**Résultat :** Glossaire ignoré, vocabulaire fragmenté, confusion permanente.

---

## Pourquoi Les Glossaires Meurent

### Raison 1 : Glossaire Séparé Du Workflow De Travail

**Le Problème :**

Le glossaire vit dans un outil (Notion, Confluence).

Le travail se fait dans d'autres outils (Jira, Linear, GitHub).

**Résultat :** Le glossaire n'est jamais utilisé pendant le travail quotidien.

**Workflow typique :**

1. PM écrit spec dans Notion (avec termes du glossaire)
2. Dev crée issues dans Jira (avec jargon Jira)
3. QA teste feature (avec ses propres termes)
4. Le glossaire n'apparaît jamais

**Personne ne consulte le glossaire parce qu'il est ailleurs.**

---

### Raison 2 : Aucune Incitation À Maintenir Le Glossaire À Jour

**Le Problème :**

Maintenir un glossaire = travail manuel, non urgent, invisible.

**Scénario :**

Votre équipe change de processus. « On ne fait plus de sprints, on fait des cycles. »

**Qui met à jour le glossaire ?**

**Réponse A :** Le PM. (« J'ai pas le temps. »)

**Réponse B :** Le lead dev. (« C'est pas mon job. »)

**Réponse C :** Personne.

**6 mois plus tard :** Le glossaire dit toujours « sprint ». Nouveau membre pense que vous faites du Scrum. Confusion.

**Le Problème :**
- ❌ Mettre à jour le glossaire n'est jamais urgent
- ❌ Aucune accountability
- ❌ Vocabulaire évolue plus vite que le glossaire
- ❌ Désynchronisation progressive

---

### Raison 3 : Impossibilité De Lier Définitions Et Travail Réel

**Le Problème :**

Dans Notion, vous pouvez créer un glossaire magnifique.

Mais vous ne pouvez pas **lier directement une définition à une issue ou une capability**.

**Exemple :**

Vous créez une issue dans Jira : « Implémenter staging release pour v2.4 ».

Vous voulez que l'équipe comprenne ce qu'est une « staging release » selon votre définition.

**Dans Notion :** Vous pouvez copier-coller la définition dans la description Jira. (Redondance, perte de synchronisation si la définition change.)

**Dans Jira :** Vous pouvez mettre un lien vers la page Notion. (Mais personne ne clique.)

**Résultat :** Aucun lien direct entre vocabulaire et travail.

<img src="/assets/images/blog/2026-01-17-notion-glossaire-isole.svg" alt="Glossaire Notion isolé du travail" width="800" height="450" loading="lazy">

**Citation CTO :**
> « On a passé 3 jours à créer un glossaire parfait. Maintenant, personne ne l'utilise parce qu'il n'est pas intégré à nos outils de travail. »

---

## L'Approche Sinra : Glossaire Vivant Avec @Mentions De Pages

Sinra résout le problème du glossaire mort avec un mécanisme simple : **@mentions de pages**.

### Le Concept : Pages + @Mentions = Glossaire Intégré Au Travail

Dans Sinra, vous créez votre glossaire dans des **pages** (équivalent de pages Notion, mais intégrées à l'outil).

**Ensuite, vous pouvez mentionner ces pages directement dans vos issues et capabilities avec @pages.**

**Résultat :** Le glossaire devient **partie intégrante du travail**, pas une documentation externe.

---

### Anatomie D'Un Glossaire Vivant Sinra

Voici comment ça fonctionne en pratique.

#### Étape 1 : Créer Des Pages Pour Votre Glossaire

**Dans Sinra, vous créez des pages organisées par catégories.**

**Exemple : Catégorie "Vocabulaire Release"**

**Page 1 : Staging Release**
```markdown
# Staging Release

**Définition :**
Version feature-complete déployée en environnement de staging pour tests QA et validation métier avant production.

**Critères :**
- Code freeze (pas de nouvelles features)
- Tous les tests automatisés passent
- Validation QA obligatoire
- Durée en staging : 2-3 jours minimum

**Différence avec Production Release :**
Staging release peut encore recevoir des hotfixes pour bugs découverts en QA.
Production release ne reçoit que des patches critiques.

**Workflow :**
1. Merge toutes les features dans branche `release-staging`
2. Déploiement automatique en environnement staging
3. Tests QA
4. Si validé → promotion en Production Release
5. Si bugs → hotfixes → retour étape 3
```

**Page 2 : Production Release**
```markdown
# Production Release

**Définition :**
Version validée en staging, déployée en production et accessible aux utilisateurs finaux.

**Critères :**
- Validation QA complète en staging
- Approbation Product Manager
- Tests de régression passés
- Monitoring et rollback plan ready

**Workflow :**
Staging Release validée → Tag git `v2.4.0` → Déploiement production
```

**Page 3 : Hotfix**
```markdown
# Hotfix

**Définition :**
Correctif urgent appliqué directement sur une Production Release pour corriger un bug critique sans attendre le prochain cycle.

**Critères de hotfix :**
- Bug bloquant (crash, perte de données, sécurité)
- Impact utilisateurs significatif
- Pas de solution de contournement

**Workflow :**
1. Créer branche `hotfix/bug-description` depuis tag production
2. Fix + tests
3. Review accélérée
4. Déploiement direct en production
5. Merge dans branche main pour intégration future
```

**Catégorie Sinra :** « Vocabulaire Release »

**Résultat :** Vous avez un glossaire structuré, organisé par catégories, dans Sinra.

<img src="/assets/images/blog/2026-01-17-sinra-pages-glossaire.svg" alt="Pages Sinra organisées par catégories" width="800" height="450" loading="lazy">

---

#### Étape 2 : Mentionner Les Pages Dans Issues Et Capabilities Avec @pages

**Voici la différence clé entre Notion et Sinra :**

**Dans Notion :** Votre glossaire est dans une page. Vos issues sont dans Jira. Pas de lien direct.

**Dans Sinra :** Vos issues et capabilities peuvent **mentionner directement les pages du glossaire avec @pages**.

**Exemple : Capability "Déploiement v2.4"**

```markdown
# Capability: Déploiement v2.4

**Objectif :**
Déployer la version 2.4 avec les nouvelles features authentification et permissions.

**Workflow :**
1. Créer une @page:staging-release pour tests QA
2. Validation QA pendant 2-3 jours
3. Si validé, promouvoir en @page:production-release
4. En cas de bug critique post-déploiement, appliquer un @page:hotfix

**Issues assignées :**
- [DEPLOY-120] Préparer staging release v2.4
- [DEPLOY-121] Tests QA staging
- [DEPLOY-122] Déploiement production v2.4
```

**Résultat :**

Quand un membre de l'équipe lit cette capability, il voit **@page:staging-release**.

**En cliquant sur la mention, il accède directement à la page "Staging Release" avec la définition complète.**

**Pas besoin de :**
- Ouvrir un autre outil
- Chercher dans un glossaire externe
- Deviner ce que signifie « staging release »

**La définition est à un clic.**

<img src="/assets/images/blog/2026-01-17-sinra-mention-pages.svg" alt="Mentions @pages dans une capability Sinra" width="800" height="450" loading="lazy">

---

#### Étape 3 : Utiliser Le Glossaire Dans Issues

**Même principe pour les issues.**

**Exemple : Issue "Préparer staging release v2.4"**

```markdown
# [DEPLOY-120] Préparer staging release v2.4

**Description :**
Créer une @page:staging-release pour la version 2.4 selon le workflow défini.

**Checklist :**
- [ ] Merge toutes les features validées dans branche `release-staging`
- [ ] Vérifier que tous les tests automatisés passent
- [ ] Déployer en environnement staging
- [ ] Notifier QA pour validation
- [ ] Documenter les changements depuis dernière release

**Référence vocabulaire :**
Voir @page:staging-release pour le workflow complet et critères de validation.
```

**Résultat :**

Un développeur qui n'a jamais fait de staging release peut :
1. Lire l'issue
2. Voir @page:staging-release
3. Cliquer pour accéder à la définition complète
4. Comprendre exactement ce qu'il doit faire

**Pas de confusion. Pas de questions à poser. Tout est documenté et accessible.**

---

#### Étape 4 : Le Glossaire Évolue Avec Le Travail

**Voici la magie des @mentions de pages :**

Quand vous **mettez à jour une page** du glossaire, **tous les liens @pages pointent automatiquement vers la version à jour**.

**Exemple :**

**Mois 1 :** Vous définissez « staging release » avec un workflow de 2 jours en staging.

**Mois 6 :** Vous changez le workflow : désormais 3 jours minimum en staging pour plus de tests.

**Vous mettez à jour la page "Staging Release" dans Sinra.**

**Résultat :**

- Toutes les capabilities qui mentionnent @page:staging-release pointent vers la nouvelle définition
- Toutes les issues qui mentionnent @page:staging-release pointent vers la nouvelle définition
- Pas besoin de chercher et mettre à jour 50 endroits différents
- **Source de vérité unique**

**Différence avec Notion :**

**Dans Notion :**
- Vous mettez à jour la définition dans le glossaire
- Mais les liens copiés-collés dans Jira/Linear restent obsolètes
- Il faut manuellement mettre à jour tous les endroits où vous avez copié la définition

**Dans Sinra :**
- Vous mettez à jour la page
- Tous les @pages pointent automatiquement vers la version à jour
- Synchronisation automatique

<img src="/assets/images/blog/2026-01-17-sinra-glossaire-sync.svg" alt="Glossaire Sinra synchronisé automatiquement via @mentions" width="800" height="400" loading="lazy">

**Citation Lead Developer :**
> « Avant, quand on changeait une définition dans notre glossaire Notion, il fallait mettre à jour 10 endroits différents dans Jira. Avec Sinra, on met à jour la page, et tous les @pages pointent vers la nouvelle version. C'est automatique. »

---

### Les Trois Piliers Du Glossaire Vivant Sinra

#### 1. Pages : Documentation Structurée Par Catégories

**Le Concept :**

Les **pages** Sinra permettent de créer votre glossaire, organisé par **catégories**.

**Exemples de catégories :**
- Vocabulaire Release Management
- Vocabulaire Technique (API, Architecture, etc.)
- Processus QA
- Workflow Développement
- Acronymes Métier

**Avantages :**
- Glossaire structuré et facile à naviguer
- Catégories personnalisables selon votre métier
- Recherche unifiée (trouve pages + issues + capabilities)

---

#### 2. @Mentions : Lien Direct Entre Glossaire Et Travail

**Le Concept :**

Vous pouvez **mentionner une page** directement dans une issue ou capability avec `@page:nom-de-la-page`.

**Résultat :**
- Lien cliquable vers la définition
- Pas besoin de quitter Sinra pour consulter le glossaire
- Glossaire intégré au workflow quotidien

**Différence avec Notion :**

| **Aspect** | **Notion** | **Sinra** |
|------------|-----------|-----------|
| **Glossaire** | ✅ Oui (pages) | ✅ Oui (pages) |
| **Lien vers glossaire depuis issue** | ⚠️ Copier URL Notion dans Jira (friction) | ✅ @page:terme (intégré) |
| **Synchronisation auto** | ❌ Non (copier-coller) | ✅ Oui (lien dynamique) |
| **Workflow** | Silotée (Notion ≠ Jira) | Unifiée (tout dans Sinra) |

---

#### 3. Source De Vérité Unique : Une Page, Une Définition

**Le Concept :**

Chaque terme a **une seule page** dans le glossaire Sinra.

**Résultat :**
- Pas de versions contradictoires
- Tout le monde pointe vers la même définition
- Mise à jour centralisée

**Exemple :**

**Terme :** « Hotfix »

**Page Sinra :** `/pages/vocabulaire-release/hotfix`

**Mentionnée dans :**
- Capability « Déploiement Production v2.4 » : @page:hotfix
- Issue « Corriger bug critique auth » : @page:hotfix
- Page « Workflow Ops » : @page:hotfix

**Tous les liens pointent vers la même page.**

**Si vous mettez à jour la définition de "hotfix", tous les @pages reflètent instantanément le changement.**

---

## Exemple Réel : DevStream (SaaS CI/CD)

**DevStream (équipe de 25 personnes, plateforme CI/CD pour startups)**

*Note : DevStream est une entreprise réelle que nous avons anonymisée sous un nom fictif pour protéger leur confidentialité.*

### Avant Sinra : Glossaire Notion Mort

**Configuration :**
- Glossaire technique dans Notion (120 termes définis)
- Issues dans Linear
- Discussions dans Discord
- Documentation dans Confluence

**Problèmes Rencontrés :**

**Problème 1 : Glossaire obsolète**

60% des définitions n'étaient plus à jour après 6 mois.

Exemple : Le glossaire définissait « pipeline » comme « séquence de jobs exécutés séquentiellement ».

Réalité : Ils étaient passés à des pipelines parallèles 4 mois avant.

**Problème 2 : Vocabulaire dispersé**

Chaque outil imposait son jargon :
- Notion : Capability, Feature, Task
- Linear : Epic, Issue, Subtask
- Confluence : Requirement, Spec, Deliverable

**Résultat :** Personne ne parlait le même langage.

**Problème 3 : Glossaire jamais utilisé**

Statistiques internes :
- 12% de l'équipe consultait le glossaire au moins une fois par mois
- 88% ne l'ouvrait jamais

**Raison :** Trop de friction (Notion ≠ Linear).

**Citation Product Manager :**
> « On a passé une semaine à créer un glossaire parfait. Maintenant, il sert de musée pour montrer le vocabulaire qu'on utilisait il y a 8 mois. »

---

### Après Sinra : Glossaire Vivant Avec @Pages

**Workflow :**

1. **Migration du glossaire Notion vers pages Sinra** (2 jours)
   - Catégorie « Vocabulaire Technique »
   - Catégorie « Processus Release »
   - Catégorie « Workflow CI/CD »

2. **Utilisation de @pages dans issues et capabilities**

**Exemple : Capability "Pipeline Multi-Stage"**

```markdown
# Capability: Pipeline Multi-Stage

**Objectif :**
Permettre aux utilisateurs de définir des @page:pipeline avec plusieurs stages (build, test, deploy) exécutés en parallèle.

**Architecture :**
- Chaque @page:stage peut avoir plusieurs @page:jobs
- Les stages s'exécutent séquentiellement
- Les jobs d'un même stage s'exécutent en parallèle

**Issues :**
- [PIPE-301] Implémenter exécution parallèle des jobs
- [PIPE-302] Ajouter gestion dépendances entre stages
- [PIPE-303] UI pour visualiser pipeline multi-stage
```

**Résultat :**

Développeur qui implémente PIPE-301 :
1. Lit la capability
2. Voit @page:pipeline, @page:stage, @page:jobs
3. Clique pour accéder aux définitions exactes
4. Comprend l'architecture sans poser de questions

**Temps pour comprendre :** 10 minutes (au lieu de 1 heure de questions à l'équipe).

---

**Résultats (Après 4 Mois) :**

**Métrique 1 : Utilisation du glossaire**
- **Avant :** 12% de l'équipe consultait le glossaire
- **Après :** 89% de l'équipe utilise les @pages régulièrement
- **Raison :** Intégré au workflow (pas besoin de quitter Sinra)

**Métrique 2 : Vocabulaire unifié**
- **Avant :** 3 termes différents pour la même chose (capability = epic = requirement)
- **Après :** 1 seul vocabulaire (celui défini dans les pages Sinra)

**Métrique 3 : Définitions obsolètes**
- **Avant :** 60% de définitions obsolètes après 6 mois
- **Après :** 5% seulement (mise à jour facile car intégrée au travail)

**Métrique 4 : Onboarding**
- **Avant :** 2 semaines pour qu'un nouveau dev comprenne le vocabulaire
- **Après :** 3 jours (lecture ciblée sur pages clés via @mentions dans capabilities)

**Citation Lead Developer DevStream :**
> « Avant, notre glossaire Notion était mort. Maintenant, avec les @pages Sinra, le glossaire est vivant. Quand on crée une issue, on mentionne les termes techniques avec @page. Tout le monde a la même définition. »

**Citation Nouveau Développeur :**
> « Quand j'ai rejoint DevStream, j'ai lu 5 capabilities principales. Chaque terme technique avait un @page. J'ai cliqué, j'ai lu les définitions, j'ai tout compris en 2 jours. Dans mon ancienne boîte, il m'aurait fallu 2 semaines. »

<img src="/assets/images/blog/2026-01-17-devstream-before-after.svg" alt="DevStream : Avant vs Après Sinra" width="800" height="450" loading="lazy">

---

## Notion vs Sinra : Comparaison Glossaire

| **Aspect** | **Glossaire Notion** | **Glossaire Sinra (Pages + @Mentions)** |
|------------|---------------------|----------------------------------------|
| **Création glossaire** | ✅ Oui (pages) | ✅ Oui (pages par catégories) |
| **Lien depuis issue** | ⚠️ URL externe (friction) | ✅ @page:terme (intégré) |
| **Synchronisation auto** | ❌ Non (copier-coller statique) | ✅ Oui (lien dynamique) |
| **Intégration workflow** | ❌ Séparé (Notion ≠ Jira/Linear) | ✅ Unifié (tout dans Sinra) |
| **Recherche unifiée** | ❌ Silotée | ✅ Trouve pages + issues + capabilities |
| **Mise à jour définition** | ⚠️ Manuelle partout où copiée | ✅ Automatique (tous les @pages à jour) |
| **Utilisation réelle** | ⚠️ 10-20% équipe | ✅ 80-90% équipe |
| **Vocabulaire unifié** | ❌ Chaque outil impose son jargon | ✅ Vocabulaire défini dans pages Sinra |

---

## Les Cinq Signes Que Votre Glossaire Est Mort

### Signe 1 : Personne Ne Le Consulte Pendant Le Travail

Si votre équipe travaille sans jamais ouvrir le glossaire, il est mort.

---

### Signe 2 : Chacun Utilise Ses Propres Termes

Si PM dit « capability », dev dit « epic », et QA dit « feature », votre glossaire n'a aucun impact.

---

### Signe 3 : Les Définitions Sont Obsolètes

Si votre glossaire décrit un workflow que vous ne suivez plus, il est obsolète.

---

### Signe 4 : Nouveaux Membres Posent 100 Questions Sur Le Vocabulaire

Si l'onboarding consiste à expliquer oralement les termes métier parce que le glossaire n'est pas fiable, il est mort.

---

### Signe 5 : Le Glossaire Est Dans Un Outil Différent Du Travail

Si votre glossaire est dans Notion/Confluence et votre travail dans Jira/Linear/GitHub, il est déconnecté.

---

## Comment Utiliser Sinra Pour Créer Un Glossaire Vivant

### Étape 1 : Créer Pages Par Catégories

**Action :**
- Créer catégories (Vocabulaire Technique, Processus Release, Workflow QA, etc.)
- Créer une page par terme important
- Définir clairement : définition, critères, workflow, exemples

**Résultat :** Glossaire structuré dans Sinra.

---

### Étape 2 : Utiliser @Pages Dans Issues Et Capabilities

**Action :**
- Quand vous créez une issue ou capability, mentionner les termes techniques avec @page:terme
- Lien cliquable vers la définition complète

**Résultat :** Glossaire intégré au travail quotidien.

---

### Étape 3 : Mettre À Jour Les Pages Quand Le Vocabulaire Évolue

**Action :**
- Vocabulaire change ? Mettez à jour la page concernée
- Tous les @pages pointent automatiquement vers la version à jour

**Résultat :** Source de vérité unique, toujours à jour.

---

### Étape 4 : Utiliser Recherche Unifiée Pour Trouver Définitions

**Action :**
- Chercher un terme dans Sinra
- Résultats : page glossaire + issues qui l'utilisent + capabilities liées

**Résultat :** Contexte complet en un endroit.

---

## Points d'Action : Transformer Votre Glossaire Mort En Glossaire Vivant

1. **Auditez votre glossaire actuel.** Combien de définitions sont obsolètes ? Combien de personnes le consultent ?
2. **Migrez les 10 termes les plus importants dans pages Sinra.** Catégorie « Vocabulaire Métier ».
3. **Utilisez @pages dans vos prochaines capabilities.** Mentionnez les termes techniques avec @page.
4. **Mesurez l'utilisation.** Combien de personnes cliquent sur les @pages ?
5. **Étendez progressivement.** Ajoutez d'autres termes au fur et à mesure.

---

## Le Point Clé

**Les glossaires meurent parce qu'ils sont séparés du travail.**

Entre **définitions obsolètes**, **vocabulaire dispersé**, **documentation isolée**, et **friction pour consulter**, personne ne parle le même langage.

**Sinra transforme votre glossaire en documentation vivante avec @mentions de pages.**

**Le résultat :**
- ✅ Glossaire intégré au workflow (pas dans un outil séparé)
- ✅ @pages créent des liens directs entre définitions et travail
- ✅ Source de vérité unique (une page, une définition)
- ✅ Synchronisation automatique (mise à jour = tous les @pages à jour)
- ✅ Vocabulaire unifié (toute l'équipe parle le même langage)

**Votre glossaire devient enfin utile.**

**Votre équipe parle enfin le même langage.**

---

## Découvrez aussi la série « Problèmes Invisibles »

- **[La Documentation Morte](/documentation/2025/12/24/documentation-morte-notion-confluence.html)** - 127 pages Confluence obsolètes : comment rendre la documentation vivante
- **[Le QA Invisible](/qa/2025/12/22/qa-invisible-tests-disperses.html)** - 847 tests dans Excel : comment rendre le QA visible avec Sinra Testings
- **[Le Chaos Du Backlog](/planning/2025/12/26/chaos-backlog-personne-sait-q2.html)** - 537 issues chaotiques : comment organiser le travail par releases et cycles
- **[Les Dépendances Cachées](/dependencies/2025/12/28/dependances-cachees-features-bloquees.html)** - 47% des features bloquées : comment rendre les dépendances visibles
- **[Le Syndrome Du Multi-Projet](/capacity/2025/12/30/syndrome-multi-projet-rien-navance.html)** - Développeurs sur 4 projets simultanés : comment limiter les projets actifs

---

**Prêt à créer un glossaire vivant ?** [Démarrez un essai gratuit de Sinra →](https://app.sinra.dev/users/sign_up)

Découvrez une gestion de projet où votre vocabulaire métier est intégré au travail, pas isolé dans un wiki mort.
