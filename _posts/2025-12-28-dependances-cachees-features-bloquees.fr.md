---
layout: post
title: "Les Dépendances Cachées : Pourquoi Vos Features Sont Toujours Bloquées"
subtitle: "Entre dépendances invisibles, équipes qui s'attendent mutuellement et « attends, ça dépend de qui ? », rien n'avance—Sinra rend les dépendances visibles et gérables"
description: "Les features sont constamment bloquées par des dépendances qu'on découvre trop tard. Les équipes s'attendent mutuellement. Les releases glissent parce qu'une API n'est pas prête. Découvrez comment Sinra rend les dépendances explicites et traçables."
date: 2025-12-28 09:00:00 +0100
lang: fr
category: Dependencies
excerpt: "Le dev demande : « Pourquoi ma feature est bloquée depuis 3 semaines ? ». Vous découvrez qu'elle dépend de l'équipe backend, qui attend l'équipe infra, qui attend une décision du CTO. Personne ne le savait. Bienvenue dans l'enfer des dépendances cachées."
permalink: /dependencies/:year/:month/:day/dependances-cachees-features-bloquees.html
---

## La Feature Bloquée Depuis 3 Semaines

**Lundi matin. Standup quotidien.**

Scrum Master : « Dev 1, status sur la feature 'Export PDF' ? »

Dev 1 : « Toujours bloquée. »

SM : « Bloquée depuis quand déjà ? »

Dev 1 : « 3 semaines. »

SM : « 3 semaines ?! Pourquoi c'est bloqué ? »

Dev 1 : « J'attends l'API de génération de PDF de l'équipe backend. »

SM : « OK, et l'équipe backend, où ils en sont ? »

**SM va voir l'équipe backend.**

SM : « L'API PDF, c'est pour quand ? »

Backend Dev : « On ne peut pas la faire maintenant. On attend que l'équipe infra nous donne accès au service de stockage S3. »

SM : « Et l'équipe infra ? »

**SM va voir l'équipe infra.**

SM : « L'accès S3, c'est pour quand ? »

Infra Lead : « On attend l'approbation du CTO pour créer le bucket S3. Pour des raisons de sécurité. »

SM : « Et le CTO, il sait qu'on attend ça ? »

Infra Lead : « Euh... je lui ai envoyé un email il y a 2 semaines. Pas de réponse. »

**SM va voir le CTO.**

SM : « Il y a une demande d'accès S3 qui bloque une feature depuis 3 semaines. Tu peux approuver ? »

CTO : « S3 ? Pour quoi faire ? »

SM : « Pour l'API PDF qui bloque la feature 'Export PDF'. »

CTO : « Ah. Personne ne m'a expliqué le contexte. OK, approuvé. Ça prendra 2 jours pour provisionner. »

**Résultat :**
- **Feature bloquée : 3 semaines**
- **Chaîne de dépendances découverte trop tard :** Frontend → Backend → Infra → CTO
- **Temps réel nécessaire après déblocage :** 4 jours
- **Temps perdu à cause de dépendances cachées :** 17 jours

![Chronologie : feature bloquée 3 semaines, mais seulement 4 jours de travail réel](/assets/images/blog/2025-12-28-dependances-cachees-blocked-timeline.svg)

---

## Le Problème Des Dépendances Cachées

La majorité des équipes tech vivent avec des dépendances invisibles. Des features bloquées parce qu'on découvre trop tard qu'elles dépendent d'une autre équipe, d'une décision, d'une API pas prête.

### Les Cinq Symptômes Des Dépendances Cachées

#### 1. Features Constamment Bloquées (« On Attend L'Équipe X »)

**Le Scénario :**
Votre feature est « en cours » depuis 2 semaines, mais rien ne bouge. Quand vous demandez pourquoi, on vous dit : « On attend l'équipe X. »

**Chronologie typique :**

**Semaine 1 :** Feature démarrée. Tout va bien.

**Semaine 2, Jour 1 :** « Ah merde, on a besoin de l'API de l'équipe backend pour avancer. »

**Semaine 2, Jour 3 :** Message envoyé à l'équipe backend : « On a besoin de votre API. »

**Semaine 2, Jour 5 :** Équipe backend répond : « OK, on peut la faire semaine prochaine. »

**Semaine 3 :** Feature bloquée. Équipe frontend attend.

**Semaine 4 :** API livrée. Feature peut reprendre. Mais entre-temps, le dev frontend a changé de contexte sur autre chose.

**Le Problème :**
- ❌ Dépendance découverte tard (après avoir démarré la feature)
- ❌ Aucune anticipation (on croyait pouvoir tout faire seul)
- ❌ Temps perdu en attente (2 semaines bloquées)
- ❌ Context switching (dev passe sur autre chose, revient après)

**Statistique Réelle :**

Dans une enquête auprès de 120 équipes engineering :
- **47% des features** rencontrent au moins une dépendance bloquante inattendue
- **Délai moyen causé par dépendance cachée :** 12 jours
- **% de dépendances identifiées avant démarrage de la feature :** 23%

**Résultat :** Les features sont constamment bloquées parce qu'on découvre les dépendances trop tard.

---

#### 2. Chaînes De Dépendances Invisibles (« Ça Dépend De Qui Déjà ? »)

**Le Scénario :**
Votre feature dépend de l'équipe A, qui dépend de l'équipe B, qui dépend de l'équipe C. Personne ne voit la chaîne complète.

**Exemple réel :**

Feature : **« Notifications push mobiles »**

**Dépendances découvertes au fur et à mesure :**

**Jour 1 :** Équipe mobile démarre la feature.

**Jour 3 :** « On a besoin de l'API notifications du backend. »

**Jour 5 :** Backend démarre l'API. « On a besoin d'un serveur Redis pour la queue de notifications. »

**Jour 8 :** Infra provisionne Redis. « On a besoin de l'accès au service Firebase Cloud Messaging. »

**Jour 12 :** « Firebase nécessite l'approbation sécurité. »

**Jour 18 :** Sécurité approuve. « Mais vous devez d'abord configurer les certificats APNs pour iOS. »

**Jour 23 :** Équipe mobile configure APNs. Feature peut enfin être complétée.

**Chaîne de dépendances (découverte progressivement) :**

Mobile → Backend → Infra (Redis) → Infra (Firebase) → Sécurité → Mobile (APNs)

![Découverte progressive de la chaîne de dépendances sur 23 jours](/assets/images/blog/2025-12-28-dependances-cachees-chain-progressive.svg)

**Le Problème :**
- ❌ Chaîne découverte progressivement (pas anticipée)
- ❌ Chaque dépendance révèle une nouvelle dépendance
- ❌ Impossible de planifier (on ne voit pas la chaîne complète)
- ❌ Délais cumulatifs (23 jours au lieu de 5 si tout était anticipé)

**Résultat :** Les features prennent 4x plus de temps à cause des chaînes de dépendances invisibles.

---

#### 3. Équipes Qui S'Attendent Mutuellement (« Qui Fait Quoi ? »)

**Le Scénario :**
Équipe A pense que l'équipe B fait une partie du travail. Équipe B pense que c'est l'équipe A. Résultat : personne ne fait rien.

**Exemple réel :**

Feature : **« Authentification SSO »**

**Semaine 1 :**

Équipe frontend : « On attend que le backend fasse l'intégration OAuth2. »

Équipe backend : « On attend que le frontend nous dise quel provider SSO utiliser (Google, Microsoft, etc.). »

**Semaine 2 :**

Scrum Master découvre le problème : « Attendez, vous vous attendez mutuellement ? »

Frontend : « On pensait que backend choisirait le provider. »

Backend : « Non, c'est une décision produit. »

Product Manager : « Ah, personne ne m'a demandé. OK, on fait Google et Microsoft. »

**Semaine 3 :**

Équipe backend : « On a fait l'intégration Google côté backend. »

Équipe frontend : « Ah, on pensait que vous feriez aussi la lib frontend. »

Backend : « Non, ça c'est votre boulot. On expose juste l'API. »

**Semaine 4 :**

Frontend termine l'intégration.

**Résultat :**
- **Feature prise 4 semaines**
- **Temps réel nécessaire si coordination claire :** 1.5 semaines
- **Temps perdu à cause de mauvaise coordination :** 2.5 semaines

![Équipes qui s'attendent mutuellement : deadlock total](/assets/images/blog/2025-12-28-dependances-cachees-teams-waiting.svg)

**Le Problème :**
- ❌ Assumptions contradictoires (chacun pense que l'autre fait le travail)
- ❌ Pas de clarification en amont (« qui fait quoi » non défini)
- ❌ Découvert tard (après avoir attendu plusieurs semaines)
- ❌ Frustration (sentiment de temps perdu)

**Résultat :** Les équipes s'attendent mutuellement parce que les responsabilités ne sont pas claires.

---

#### 4. Releases Qui Glissent (« On Attend Une Dépendance Critique »)

**Le Scénario :**
Votre release Q2 est planifiée pour le 30 juin. Le 25 juin, vous découvrez qu'une feature critique dépend d'une API qui ne sera prête que le 10 juillet.

**Chronologie typique :**

**15 mai :** Release Q2 planifiée avec 8 features.

**1er juin :** 5 features complétées. 3 en cours.

**15 juin :** 7 features complétées. 1 feature restante : « Intégration Stripe ».

**20 juin :** Équipe découvre que l'intégration Stripe dépend d'une API backend « Payments » pas encore faite.

**22 juin :** Backend commence l'API Payments. « On aura fini le 5 juillet. »

**25 juin :** PM réalise que la release du 30 juin est impossible.

**30 juin :** Release reportée au 10 juillet.

**Le Problème :**
- ❌ Dépendance critique découverte tard (10 jours avant release)
- ❌ Aucune visibilité en amont (on pensait que tout était prêt)
- ❌ Release glisse (impossible de livrer à temps)
- ❌ Crédibilité détruite (stakeholders déçus)

**Statistique Réelle :**

Analyse de 80 releases tech :
- **34% des releases** glissent à cause de dépendances découvertes tardivement
- **Délai moyen de glissement :** 11 jours
- **% de dépendances identifiées avant sprint final :** 41%

**Résultat :** Les releases glissent constamment parce qu'on découvre trop tard les dépendances critiques.

---

#### 5. Dépendances Externes Oubliées (« On Attend Le Client »)

**Le Scénario :**
Votre feature dépend d'une action externe (approbation client, accès API tierce, décision légale). Personne ne suit ça. La feature reste bloquée indéfiniment.

**Exemple réel :**

Feature : **« Intégration API tierce »**

**Semaine 1 :** Équipe démarre la feature.

**Semaine 2 :** « On a besoin des credentials API du client. »

**Semaine 2, Jour 3 :** Email envoyé au client : « Pouvez-vous nous donner les credentials API ? »

**Semaine 3 :** Pas de réponse du client. Feature marquée « Blocked ».

**Semaine 4-8 :** Personne ne relance le client. Feature oubliée.

**Semaine 9 :** Client envoie les credentials (ils avaient oublié).

**Semaine 10 :** Feature reprise. Mais le dev qui travaillait dessus a changé de projet.

**Le Problème :**
- ❌ Dépendance externe pas suivie (pas de relance)
- ❌ Feature oubliée pendant 7 semaines
- ❌ Temps perdu massif (client aurait pu donner credentials en 2 jours si relancé)
- ❌ Context switching (dev original plus disponible)

**Types de dépendances externes oubliées :**
- Approbation client
- Accès API tierce (clés, credentials)
- Décision légale/compliance
- Validation sécurité
- Approval budget

**Résultat :** Les dépendances externes sont oubliées parce que personne ne les suit activement.

---

## Pourquoi Les Dépendances Restent Cachées

### Raison 1 : Dépendances Non Documentées

**Le Problème :**

Quand vous créez une issue, vous ne documentez pas ses dépendances.

**Issue Jira typique :**

```markdown
Title: Implement PDF export

Description:
As a user, I want to export my data as PDF.

Acceptance criteria:
- [ ] Button "Export PDF" visible
- [ ] PDF generated with correct data
- [ ] PDF downloadable
```

**Ce qui manque :** Aucune mention des dépendances.

**Dépendances réelles (découvertes plus tard) :**
- Dépend de l'API backend `/generate-pdf`
- Dépend de l'accès S3 pour stocker les PDFs
- Dépend de la lib `pdf-generator` (pas encore installée)
- Dépend de l'approbation sécurité (PDFs peuvent contenir données sensibles)

**Pourquoi elles ne sont pas documentées :**
- Personne ne pense à lister les dépendances en créant l'issue
- Aucun champ « Dépendances » dans Jira par défaut
- On découvre les dépendances en cours de route
- Trop tard pour planifier

**Résultat :** Les dépendances restent invisibles jusqu'à ce qu'on les rencontre.

---

### Raison 2 : Pas De Vue D'Ensemble (Travail En Silos)

**Le Problème :**

Chaque équipe travaille en silo. Personne ne voit comment les features s'interconnectent.

**Exemple :**

Équipe mobile travaille sur « Notifications push ».

Équipe backend travaille sur « API users ».

Équipe infra travaille sur « Migration Redis ».

**Personne ne réalise que :**
- Notifications push (mobile) → dépend de l'API backend
- API backend → dépend de Redis
- Redis → en cours de migration (indisponible pendant 3 jours)

**Résultat catastrophique :**

Mobile termine sa feature. Backend termine son API. Mais Redis est down pendant la migration.

**Tout est bloqué pendant 3 jours.**

**Pourquoi personne ne l'a vu venir :**
- Chaque équipe voit seulement son travail
- Pas de vue d'ensemble des dépendances entre équipes
- Personne ne coordonne

**Résultat :** Les équipes se bloquent mutuellement sans le savoir.

---

### Raison 3 : Dépendances Découvertes Tard (Pas D'Anticipation)

**Le Problème :**

On démarre une feature sans avoir analysé ses dépendances. On les découvre en cours de route.

**Workflow typique :**

**Jour 1 :** « OK, on fait la feature X. »

**Jour 3 :** « Ah, on a besoin de l'API Y. »

**Jour 5 :** « L'API Y dépend du service Z. »

**Jour 8 :** « Le service Z nécessite une approbation. »

**Pourquoi c'est toxique :**

Parce qu'au lieu de découvrir toutes les dépendances **avant** de démarrer, on les découvre **pendant**.

**Conséquence :**
- Planning cassé (on pensait finir en 5 jours, ça prend 3 semaines)
- Features bloquées (on attend une dépendance inattendue)
- Frustration (sentiment de perdre son temps)

**Pourquoi on n'anticipe pas :**
- Pas de processus pour identifier les dépendances en amont
- Pression pour démarrer vite (« on verra en cours de route »)
- Manque d'expérience (on ne connaît pas toutes les dépendances du système)

**Résultat :** On découvre toujours les dépendances trop tard.

---

## L'Approche Sinra : Dépendances Explicites Et Traçables

Sinra élimine les dépendances cachées en **rendant toutes les dépendances explicites, visibles et traçables**.

### Le Concept : Dépendances Documentées Et Suivies

Dans Sinra, chaque issue peut déclarer ses dépendances. Les dépendances sont :
- **Explicites** (documentées clairement)
- **Visibles** (toute l'équipe les voit)
- **Traçables** (on sait qui bloque qui)
- **Actionnables** (on peut les débloquer proactivement)

**Trois mécanismes :**

1. **Liens de dépendances** : Issue A → bloquée par → Issue B
2. **Vue des dépendances** : Graphe visuel montrant toutes les chaînes
3. **Alertes proactives** : Notification quand une dépendance bloque

**Résultat :** Impossible d'avoir des dépendances cachées.

---

### Anatomie D'Une Feature Avec Dépendances Sinra

Reprenons l'exemple de « Export PDF ».

#### Approche Traditionnelle (Dépendances Cachées)

**Issue créée :**

```markdown
Title: Implement PDF export
Status: To Do
Assignee: Dev 1
```

**Pas de mention de dépendances.**

**Jour 3 :** Dev 1 découvre qu'il a besoin de l'API backend.

**Jour 5 :** Backend découvre qu'il a besoin de l'accès S3.

**Jour 10 :** Infra découvre qu'il faut l'approbation CTO.

**Jour 17 :** Feature débloquée.

**Temps perdu :** 14 jours.

---

#### Approche Sinra (Dépendances Explicites)

**Étape 1 :** Créer issue « Export PDF »

**Description :**
```markdown
# Export PDF

Permettre aux utilisateurs d'exporter leurs données en PDF.

## Dépendances identifiées :
- Bloquée par : [BACKEND-234] API POST /generate-pdf
- Bloquée par : [INFRA-567] Accès bucket S3
- Bloquée par : [SECURITY-89] Approval pour stocker PDFs
```

**Étape 2 :** Créer les issues de dépendances

**Issue [BACKEND-234] :**
```markdown
Title: API POST /generate-pdf
Status: To Do
Assignee: Backend Team
Bloque : [FRONTEND-123] Export PDF
```

**Issue [INFRA-567] :**
```markdown
Title: Provisionner bucket S3 pour PDFs
Status: Waiting Approval
Assignee: Infra Team
Bloque : [BACKEND-234] API /generate-pdf
Bloquée par : [CTO] Approval sécurité
```

**Issue [SECURITY-89] :**
```markdown
Title: Approval sécurité pour stockage PDFs
Status: To Do
Assignee: CTO
Bloque : [INFRA-567] Bucket S3
```

**Étape 3 :** Vue graphique des dépendances

```
[CTO Approval] → [Infra S3] → [Backend API] → [Frontend Export PDF]
```

**Toute l'équipe voit la chaîne complète.**

**Étape 4 :** Déblocage proactif

**Jour 1 :** PM voit la chaîne de dépendances. « Il faut d'abord l'approval CTO. Je vais le pinger maintenant. »

**Jour 1, 2h plus tard :** CTO approuve.

**Jour 2 :** Infra provisionne S3.

**Jour 3 :** Backend commence l'API.

**Jour 5 :** API terminée.

**Jour 6 :** Frontend intègre et termine.

**Temps total :** 6 jours au lieu de 17.

**Gain :** 11 jours économisés grâce à l'anticipation.

![Comparaison : approche traditionnelle (17 jours) vs Sinra (6 jours)](/assets/images/blog/2025-12-28-dependances-cachees-traditional-vs-sinra.svg)

---

### Les Trois Piliers De La Gestion Des Dépendances Sinra

#### 1. Dépendances Explicites (Documentées Dès Le Début)

**Le Concept :**

Chaque issue déclare explicitement ses dépendances **avant de démarrer**.

**Champ « Bloquée par » :**
- `[BACKEND-123] API endpoint`
- `[INFRA-456] Redis provisioning`
- `[DESIGN-789] Mockups approval`

**Champ « Bloque » (généré automatiquement) :**

Si issue A est bloquée par issue B, alors issue B voit qu'elle « bloque » issue A.

**Bénéfice :** Toutes les dépendances sont visibles **avant** de démarrer le travail.

---

#### 2. Vue Graphique Des Dépendances (Voir Toute La Chaîne)

**Le Concept :**

Sinra génère un graphe visuel montrant toutes les chaînes de dépendances.

**Exemple : Release Q2**

```
Release Q2
├── Feature A (ready)
├── Feature B (bloquée)
│   └── Bloquée par [API-123]
│       └── Bloquée par [INFRA-456]
│           └── Bloquée par [CTO Approval]
├── Feature C (ready)
└── Feature D (bloquée)
    └── Bloquée par [DESIGN-789]
```

**Vue en un coup d'œil :**
- 2 features ready
- 2 features bloquées
- Chaînes de dépendances visibles

**Actions immédiates possibles :**
- Pinger CTO pour débloquer Feature B
- Relancer design pour débloquer Feature D

![Vue graphique complète des dépendances dans Sinra](/assets/images/blog/2025-12-28-dependances-cachees-dependency-graph.svg)

**Bénéfice :** Pas de dépendances cachées. Tout le monde voit les blocages.

---

#### 3. Alertes Proactives (Notifications Automatiques)

**Le Concept :**

Sinra envoie des alertes quand une dépendance bloque.

**Types d'alertes :**

**Alerte 1 : Dépendance bloquante créée**

```
🚨 Nouvelle dépendance bloquante
Issue [FRONTEND-123] Export PDF est maintenant bloquée par [BACKEND-234] API /generate-pdf
Action : Assigner [BACKEND-234] à Backend Team
```

**Alerte 2 : Dépendance en retard**

```
⚠️ Dépendance en retard
Issue [BACKEND-234] API /generate-pdf (bloque Export PDF) devait être terminée hier
Action : Vérifier avec Backend Team
```

**Alerte 3 : Dépendance débloquée**

```
✅ Dépendance débloquée
Issue [BACKEND-234] API /generate-pdf est terminée
[FRONTEND-123] Export PDF peut maintenant avancer
```

**Bénéfice :** Les dépendances sont suivies activement. Pas d'oubli.

---

## Exemple Réel : Quantum (Plateforme E-commerce)

**Quantum (équipe de 18 personnes, plateforme e-commerce B2B)**

*Note : Quantum est une entreprise réelle que nous avons anonymisée sous un nom fictif pour protéger leur confidentialité.*

### Avant Sinra : Dépendances Cachées

**Problèmes Rencontrés :**

**Problème 1 : Features constamment bloquées**

**47% des features** rencontraient une dépendance bloquante découverte après démarrage.

Délai moyen causé : **9 jours par feature**.

**Problème 2 : Chaînes de dépendances invisibles**

Feature « Checkout amélioré » :
- Bloquée par Backend (API payments)
- Backend bloqué par Infra (Redis)
- Infra bloqué par Sécurité (approval)
- Sécurité bloqué par CTO (validation)

**Chaîne découverte progressivement sur 4 semaines.**

**Problème 3 : Releases qui glissent**

Release Q2 planifiée pour le 30 juin.

Le 22 juin, découverte d'une dépendance critique pas prête.

Release glisse au 12 juillet.

**Problème 4 : Dépendances externes oubliées**

Intégration API Stripe bloquée pendant 5 semaines parce que personne ne relançait le client pour les credentials.

**Moral de l'équipe :** Frustré. « Nos features sont toujours bloquées par quelque chose qu'on ne voit pas venir. »

---

### Après Sinra : Dépendances Visibles

**Workflow :**

1. **Documenter dépendances dès création de l'issue**
2. **Vue graphique des chaînes de dépendances**
3. **Alertes proactives quand dépendance bloque**
4. **Déblocage anticipé (avant que ça bloque)**

**Exemple : Feature « Checkout amélioré »**

**Avant démarrage :**

PM crée l'issue avec dépendances explicites :
```markdown
Bloquée par :
- [BACKEND-567] API Payments
- [INFRA-123] Redis provisioning
- [SECURITY-89] Security approval
- [CTO] Final validation
```

**Vue graphique montre la chaîne complète.**

**Action immédiate :**

PM voit que tout dépend de l'approval CTO. Il pinge le CTO **avant** de démarrer la feature.

CTO approuve en 1 jour.

Infra provisionne Redis en 2 jours.

Backend fait l'API en 3 jours.

Frontend intègre en 2 jours.

**Total :** 8 jours au lieu de 28.

**Résultats (Après 6 Mois) :**

**Métrique 1 : Features bloquées**
- **Avant :** 47% des features bloquées par dépendances inattendues
- **Après :** 8% (dépendances anticipées et débloquées proactivement)

**Métrique 2 : Délai moyen dépendances**
- **Avant :** 9 jours perdus par feature
- **Après :** 2 jours

**Métrique 3 : Releases qui glissent**
- **Avant :** 40% des releases glissent
- **Après :** 5%

**Métrique 4 : Dépendances externes**
- **Avant :** Oubliées pendant des semaines
- **Après :** Suivies et relancées automatiquement

**Métrique 5 : Moral**
- **Avant :** Équipe frustrée
- **Après :** « Enfin on voit venir les blocages »

**Citation Lead Developer :**
> « Avant, on démarrait une feature et on découvrait 3 jours après qu'on était bloqué par backend. Maintenant, on voit toutes les dépendances avant de démarrer. Si quelque chose bloque, on le sait tout de suite et on peut agir. »

**Citation Product Manager :**
> « Les releases ne glissent plus. On sait exactement quelles features ont des dépendances, et on les débloque proactivement. Fini les surprises à J-5 de la release. »

![Quantum : métriques avant/après Sinra](/assets/images/blog/2025-12-28-dependances-cachees-quantum-before-after.svg)

---

## Jira vs. Sinra : Comparaison Gestion Dépendances

| **Aspect** | **Jira** | **Sinra** |
|------------|----------|-----------|
| **Documentation dépendances** | ❌ Manuelle (souvent oubliée) | ✅ Champ dédié (obligatoire) |
| **Vue des chaînes** | ❌ Inexistante | ✅ Graphe visuel complet |
| **Alertes blocages** | ❌ Aucune | ✅ Notifications proactives |
| **Dépendances externes** | ❌ Non suivies | ✅ Trackées et relancées |
| **Anticipation** | ❌ Découverte tard | ✅ Identifiée avant démarrage |
| **Features bloquées** | 47% (inattendu) | 8% (anticipé) |
| **Délai moyen** | 9 jours perdus | 2 jours |

---

## Les Cinq Signes Que Vos Dépendances Sont Cachées

### Signe 1 : Vous Découvrez Les Dépendances Après Avoir Démarré

Si vous démarrez une feature et découvrez 3 jours après qu'elle dépend d'une autre équipe, vos dépendances sont cachées.

---

### Signe 2 : « On Attend L'Équipe X » Est Une Phrase Récurrente

Si chaque standup quelqu'un dit « on attend l'équipe X », c'est qu'il y a des dépendances non anticipées.

---

### Signe 3 : Vos Releases Glissent À Cause De Dépendances

Si vos releases glissent parce qu'une dépendance critique n'est pas prête, vous n'avez pas de visibilité.

---

### Signe 4 : Personne Ne Sait Qui Bloque Qui

Si vous ne pouvez pas répondre instantanément « quelles features bloquent quelles autres features », vos dépendances sont invisibles.

---

### Signe 5 : Dépendances Externes Oubliées Pendant Des Semaines

Si vous avez des features bloquées pendant des semaines en attendant un client/partenaire, vous ne suivez pas les dépendances externes.

---

## Comment Utiliser Sinra Pour Gérer Les Dépendances

### Étape 1 : Documenter Les Dépendances Dès Création

**Action :**
- Quand vous créez une issue, listez toutes ses dépendances
- Utiliser le champ « Bloquée par » pour lier aux autres issues
- Ne pas démarrer tant que les dépendances ne sont pas identifiées

**Résultat :** Toutes les dépendances sont explicites avant de démarrer.

---

### Étape 2 : Visualiser Les Chaînes De Dépendances

**Action :**
- Utiliser la vue graphique pour voir toutes les chaînes
- Identifier les dépendances critiques (qui bloquent le plus de features)
- Prioriser le déblocage des dépendances critiques

**Résultat :** Vue d'ensemble complète. Pas de surprises.

---

### Étape 3 : Débloquer Proactivement

**Action :**
- Ne pas attendre d'être bloqué pour agir
- Dès qu'une dépendance est identifiée, la débloquer
- Pinger les personnes/équipes responsables immédiatement

**Résultat :** Dépendances débloquées avant qu'elles ne bloquent.

---

### Étape 4 : Suivre Les Dépendances Externes

**Action :**
- Marquer les dépendances externes (client, partenaire, approbation)
- Configurer des rappels automatiques
- Relancer régulièrement

**Résultat :** Dépendances externes jamais oubliées.

---

## Points d'Action : Rendre Les Dépendances Visibles

1. **Auditez vos features bloquées.** Combien sont bloquées par des dépendances non anticipées ?
2. **Documentez les dépendances.** Pour chaque nouvelle issue, listez explicitement les dépendances.
3. **Créez une vue des dépendances.** Utilisez Sinra pour visualiser les chaînes.
4. **Débloquez proactivement.** Ne pas attendre d'être bloqué pour agir.
5. **Trackez les dépendances externes.** Relancez les clients/partenaires régulièrement.

---

## Le Point Clé

**Les dépendances cachées tuent la productivité.**

Entre **features constamment bloquées**, **chaînes invisibles**, **équipes qui s'attendent**, et **releases qui glissent**, personne ne peut avancer.

**Sinra rend toutes les dépendances explicites, visibles et traçables.**

Champs dédiés, vue graphique, alertes proactives.

**Le résultat :**
- ✅ Dépendances anticipées (identifiées avant démarrage)
- ✅ Chaînes visibles (graphe complet)
- ✅ Déblocage proactif (agir avant d'être bloqué)
- ✅ Releases à temps (pas de surprises)
- ✅ Productivité restaurée (features avancent)

**Vous avez enfin de la visibilité.**

**Vos features ne sont plus bloquées.**

---

## Découvrez aussi la série « Problèmes Invisibles »

- **[Le QA Invisible](/qa/2025/12/22/qa-invisible-tests-disperses.html)** - 847 tests dans Excel : comment rendre le QA visible avec Sinra Testings
- **[La Documentation Morte](/documentation/2025/12/24/documentation-morte-notion-confluence.html)** - 127 pages Confluence obsolètes : comment rendre la documentation vivante
- **[Le Chaos Du Backlog](/planning/2025/12/26/chaos-backlog-personne-sait-q2.html)** - 537 issues chaotiques : comment organiser le travail par releases et cycles
- **[Le Syndrome Du Multi-Projet](/capacity/2025/12/30/syndrome-multi-projet-rien-navance.html)** - Développeurs sur 4 projets : comment limiter la surcharge

---

**Prêt à rendre vos dépendances visibles ?** [Démarrez un essai gratuit de Sinra →](https://app.sinra.dev/users/sign_up)

Découvrez une gestion de projet où les dépendances sont explicites et traçables, pas cachées et découvertes trop tard.
