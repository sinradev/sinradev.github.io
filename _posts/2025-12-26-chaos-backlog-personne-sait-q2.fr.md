---
layout: post
title: "Le Chaos Du Backlog : Quand Personne Ne Sait Ce Qui Est Prévu Pour Q2"
subtitle: "Entre backlog infini, priorités changeantes et « urgent de dernière minute », impossible de planifier—Sinra organise le travail par releases et cycles"
description: "Les équipes accumulent 500+ issues dans un backlog chaotique. Les priorités changent chaque semaine. Personne ne sait ce qui sera livré en Q2. Découvrez comment Sinra structure le travail avec releases, cycles et capacités pour éliminer le chaos."
date: 2025-12-26 09:00:00 +0100
lang: fr
category: Planning
excerpt: "Le Product Manager demande : « Qu'est-ce qu'on livre en Q2 ? ». Vous ouvrez le backlog : 537 issues non triées, 47 marquées « urgent », 12 priorités différentes. Personne n'a de réponse. Bienvenue dans le chaos du backlog."
permalink: /planning/:year/:month/:day/chaos-backlog-personne-sait-q2.html
---

## La Réunion De Planification Q2

**Lundi matin. Réunion de planification trimestrielle.**

CEO : « OK équipe, qu'est-ce qu'on livre en Q2 ? »

Product Manager : « Laisse-moi regarder le backlog... »

**Ouvre Jira.**

**Backlog : 537 issues**

**Filtres disponibles :**
- Priority: P0 (12 issues), P1 (47 issues), P2 (89 issues), P3 (145 issues), P4 (244 issues)
- Status: To Do (412), In Progress (67), Blocked (38), Waiting (20)
- Labels: 87 labels différents (urgent, bug, feature, tech-debt, nice-to-have, critical, MVP, v2, Q1, Q2, maybe, someday, etc.)

**PM, dépassé :**

> « Euh... j'ai 537 issues ici. Je ne sais pas lesquelles sont pour Q2. »

CEO : « Mais on a pas un plan ? »

PM : « On a marqué certaines issues avec le label 'Q2', mais... »

**Filtre par label "Q2" :**

**Résultat : 94 issues**

CEO : « Donc on livre 94 features en Q2 ? »

PM : « Non, certaines sont des bugs, d'autres sont marquées "maybe", d'autres dépendent de features Q3... »

CTO : « En plus, la moitié de ces issues n'ont pas d'estimation. On ne sait pas combien de temps ça prend. »

CEO : « Et les développeurs, sur quoi ils travaillent actuellement ? »

**PM regarde les 67 issues "In Progress" :**

- 23 issues n'ont pas été touchées depuis 2+ semaines
- 15 issues sont marquées "Blocked" mais personne ne sait pourquoi
- 12 issues ont été démarrées mais ne sont pas dans le plan Q1
- 8 issues sont des "urgent" apparus la semaine dernière
- 9 issues... personne ne se souvient pourquoi elles ont été démarrées

**PM :**

> « Honnêtement, je ne sais pas exactement. Le backlog est un bordel. »

CEO : « Donc on ne peut pas dire au board ce qu'on livre en Q2 ? »

**Silence gêné.**

PM : « On va... trier le backlog cette semaine et revenir vers vous. »

**Spoiler :** Le backlog ne sera jamais vraiment trié. Le chaos continuera.

---

## Le Problème Du Chaos Du Backlog

La majorité des équipes tech vivent avec un backlog chaotique. Un tas infini d'issues non structurées, sans plan clair.

### Les Cinq Symptômes Du Backlog Chaotique

#### 1. Backlog Infini (500+ Issues Non Triées)

**Le Scénario :**
Votre backlog Jira contient 500+ issues accumulées sur 2 ans. Personne ne sait ce qui est dedans.

**Comment ça arrive :**

**An 1 :** Backlog démarre avec 20 issues. Manageable.

**An 1, Mois 3 :** « Ajoutons cette idée au backlog. » → 45 issues.

**An 1, Mois 6 :** « Le client a demandé ça, mettons-le dans le backlog. » → 89 issues.

**An 1, Mois 12 :** « On ne peut pas faire ça maintenant, backlog. » → 156 issues.

**An 2, Mois 6 :** « Le backlog est rendu à 347 issues. On devrait le nettoyer. »

**Personne ne nettoie.**

**An 2, Mois 12 :** **537 issues.**

**Le Problème :**
- ❌ Backlog devient une décharge (tout y va, rien n'en sort)
- ❌ 80% des issues ne seront jamais faites
- ❌ Impossible de distinguer "vraiment important" vs "idée random de 2022"
- ❌ Coût cognitif : impossible de naviguer 537 issues

**Statistique Réelle :**

Dans une enquête auprès de 150 équipes tech :
- Taille moyenne du backlog : **423 issues**
- % d'issues vieilles de 12+ mois : **62%**
- % d'issues qui seront effectivement faites : **18%**

**Résultat :** Le backlog est un cimetière d'idées mortes que personne n'ose supprimer.

![Croissance infinie du backlog sur 2 ans](/assets/images/blog/2025-12-26-chaos-backlog-infinite-growth.svg)

---

#### 2. Personne Ne Sait Ce Qui Est Prévu (« C'est Pour Quand ? »)

**Le Scénario :**

Stakeholder : « La feature X, c'est pour quand ? »

PM : « Euh... laisse-moi vérifier. »

**Cherche dans le backlog.**

**Issue trouvée :**
- Title: "Implement feature X"
- Priority: P2
- Labels: feature, maybe, Q2, nice-to-have
- Assignee: None
- Sprint: None
- Estimation: None

PM : « C'est... dans le backlog. Marqué Q2. Mais je ne sais pas exactement quand. »

Stakeholder : « Q2 commence dans 3 semaines. C'est dans le prochain release ? »

PM : « Euh... peut-être ? Je dois vérifier avec l'équipe. »

**1 semaine plus tard.**

PM (après discussion avec l'équipe) : « Finalement, feature X est repoussée à Q3. On n'a pas de capacité en Q2. »

Stakeholder : « Mais le label disait Q2 ! »

PM : « Oui, mais... les priorités ont changé. »

**Le Problème :**
- ❌ Aucun plan concret (juste des labels flous)
- ❌ Impossible de savoir quand une issue sera faite
- ❌ Promesses implicites jamais tenues (label "Q2" ≠ engagement)
- ❌ Frustration des stakeholders (« Vous dites toujours Q2, mais ça n'arrive jamais »)

**Résultat :** Personne ne fait confiance au backlog. On vit sprint par sprint, sans visibilité.

---

#### 3. Priorités Changeantes (« Urgent » Chaque Semaine)

**Le Scénario :**

**Lundi, sprint planning.**

PM : « Cette semaine, priorité absolue : feature A. »

Équipe : « OK, on commence. »

**Mercredi.**

PM : « Le CEO veut feature B en urgence. Arrêtez feature A, faites B. »

Équipe : « Mais... on est au milieu de A. »

PM : « Désolé, B est critique. On reprendra A après. »

**Vendredi.**

PM : « Finalement, client VIP demande feature C immédiatement. Mettez B en pause, faites C. »

Équipe : « Sérieusement ? »

PM : « C'est urgent. »

**Semaine suivante, retrospective.**

Dev 1 : « On a commencé 3 features, terminé 0. »

Dev 2 : « Parce que les priorités changent tous les 2 jours. »

PM : « Oui, mais... tout est urgent. »

**Le Problème :**
- ❌ « Urgent » perd son sens (si tout est urgent, rien n'est urgent)
- ❌ Context switching permanent (démarrer sans finir)
- ❌ Aucune feature terminée (tout est « en cours »)
- ❌ Moral de l'équipe en chute libre (frustration de ne jamais finir)

**Statistique Réelle :**

Équipe analysée pendant 1 mois :
- **17 « urgent » reçus**
- **4 « urgent » réellement traités**
- **0 « urgent » terminés dans le sprint annoncé**
- **13 « urgent » oubliés ou requalifiés après 1 semaine**

**Résultat :** « Urgent » devient du bruit. L'équipe ignore les demandes urgentes parce qu'elles changent trop vite.

![Priorités changeantes : Une semaine typique](/assets/images/blog/2025-12-26-chaos-backlog-priority-chaos.svg)

---

#### 4. Issues Bloquées Oubliées (« Blocked » = Cimetière)

**Le Scénario :**

Dev : « Je ne peux pas avancer sur cette issue. Elle est bloquée par une dépendance externe. »

PM : « OK, marque-la "Blocked". On y reviendra. »

**L'issue est marquée "Blocked".**

**3 semaines plus tard.**

Personne ne se souvient de l'issue bloquée.

**3 mois plus tard.**

**Quelqu'un filtre par "Blocked" dans le backlog :**

**Résultat : 38 issues bloquées**

- 12 bloquées par des dépendances qui n'existent plus
- 9 bloquées par des personnes qui ont quitté l'entreprise
- 7 bloquées par des décisions qui ont été prises (mais personne n'a débloqué l'issue)
- 10 bloquées pour des raisons floues ("waiting for clarification" depuis 4 mois)

**PM :**

> « On a 38 issues bloquées et personne ne les suit. La moitié pourraient être débloquées maintenant. »

**Le Problème :**
- ❌ « Blocked » = oubliette (marqué et oublié)
- ❌ Pas de suivi systématique des blocages
- ❌ Travail perdu (issues qui pourraient être débloquées restent en stase)
- ❌ Gaspillage (effort investi puis abandonné)

**Résultat :** Les issues bloquées meurent lentement, sans que personne ne s'en rende compte.

![38 issues bloquées oubliées](/assets/images/blog/2025-12-26-chaos-backlog-blocked-forgotten.svg)

---

#### 5. Backlog Grooming = Perte De Temps (« On Va Trier Ça... Un Jour »)

**Le Scénario :**

PM : « Il faut qu'on fasse du backlog grooming. Le backlog est un bordel. »

**Réunion de backlog grooming programmée : 2 heures.**

**Début de la réunion.**

PM : « OK, on a 537 issues. Commençons par les plus anciennes. »

**Issue #1 (créée il y a 18 mois) :**

Title: "Add dark mode"

PM : « Est-ce qu'on veut encore ça ? »

Designer : « Peut-être. Mais pas prioritaire. »

PM : « OK, on garde dans le backlog. »

**Issue #2 (créée il y a 16 mois) :**

Title: "Improve search performance"

PM : « C'est toujours pertinent ? »

Dev : « Oui, mais ça demande un gros refactoring. »

PM : « On le fait quand ? »

Dev : « Pas maintenant. Peut-être Q3 ? »

PM : « OK, on garde. »

**Après 2 heures :**
- **Issues triées : 23 sur 537**
- **Issues supprimées : 2**
- **Issues priorisées clairement : 0**

**Dev :**

> « On vient de passer 2 heures pour rien. Le backlog est toujours aussi chaotique. »

**Le Problème :**
- ❌ Backlog grooming inefficace (tri sans décisions)
- ❌ Peur de supprimer (« on pourrait en avoir besoin un jour »)
- ❌ Pas de critères clairs (on garde tout « au cas où »)
- ❌ Triage ne résout rien (backlog reste ingérable)

**Résultat :** Backlog grooming devient une corvée inutile que tout le monde évite.

---

## Pourquoi Les Backlogs Deviennent Chaotiques

### Raison 1 : Backlog = Liste Infinie Sans Structure

**Le Problème :**

Les backlogs traditionnels (Jira, Linear, etc.) sont des **listes plates** :
- Une colonne de 500+ issues
- Quelques filtres (priorité, labels, sprints)
- Aucun regroupement par objectif ou release

**Résultat :** Impossible de répondre à :
- « Qu'est-ce qu'on livre en Q2 ? »
- « Quelles features sont liées ? »
- « Quand cette issue sera-t-elle faite ? »

**Pourquoi ça ne fonctionne pas :**

Parce qu'une liste plate ne reflète pas la réalité du travail :
- Le travail s'organise par **releases** (versions livrables)
- Les issues se regroupent par **capabilities** (features de haut niveau)
- Le planning se fait par **cycles** (périodes de temps définies)

**Mais Jira/Linear ne modélisent pas ça.**

**Résultat :** Tout devient une soupe d'issues déconnectées.

![Backlog plat vs structure par releases](/assets/images/blog/2025-12-26-chaos-backlog-flat-vs-structured.svg)

---

### Raison 2 : « Tout Au Backlog » = Décharge Sans Fin

**Le Problème :**

Mentalité typique :
- Idée du CEO → backlog
- Demande client → backlog
- Bug trouvé → backlog
- Amélioration technique → backlog
- Idée random du dev → backlog

**Résultat :** **Tout** va dans le backlog. Rien n'en sort (sauf ce qui est fait).

**Pourquoi c'est toxique :**

Parce que 80% des issues ne seront **jamais** faites. Mais elles restent là, créant :
- **Bruit cognitif** (impossible de trouver l'important dans le tas)
- **Fausses promesses** (stakeholders pensent que « dans le backlog » = « sera fait »)
- **Culpabilité** (« On devrait faire toutes ces issues mais on n'a jamais le temps »)

**Analogie :**

Le backlog est comme un garage où on entasse tout « au cas où ». Après 2 ans, c'est tellement plein qu'on ne peut plus y rentrer. Mais personne ne jette rien.

**Résultat :** Le backlog devient une charge mentale permanente.

---

### Raison 3 : Pas De Capacité Définie = Promesses Infinies

**Le Problème :**

PM : « On va faire feature X en Q2. »

**Arrive Q2.**

PM : « Finalement, on n'a pas eu le temps. On la repousse à Q3. »

**Pourquoi ?**

Parce que **personne n'a calculé la capacité réelle de l'équipe**.

**Scénario typique :**

**Q2 = 12 semaines**

**Capacité réelle de l'équipe :** 10 semaines de travail effectif
- 2 semaines perdues : jours fériés, congés, réunions, bugs urgents, interruptions

**Issues planifiées pour Q2 :** 15 semaines de travail estimé

**Résultat mathématique :** **Impossible de tout finir.**

**Le Problème :**
- ❌ Planning basé sur l'espoir (« on fera tout »), pas la réalité
- ❌ Aucune limite de capacité (on accepte plus de travail qu'on peut faire)
- ❌ Déception garantie (on livre toujours moins que promis)
- ❌ Crédibilité détruite (stakeholders ne croient plus aux deadlines)

**Résultat :** L'équipe promet trop, livre peu, et perd la confiance.

---

## L'Approche Sinra : Releases, Cycles Et Capacités

Sinra élimine le chaos du backlog en **structurant le travail par releases, cycles et capacités** au lieu d'une liste plate infinie.

### Le Concept : Releases → Capabilities → Issues

Dans Sinra, le travail ne vit pas dans un backlog chaotique. Il est **organisé par releases**.

**Trois niveaux de structure :**

1. **Releases** : Versions livrables du produit (v1.5, Q2 2025, etc.)
2. **Capabilities** : Features de haut niveau regroupées dans une release
3. **Issues** : Tâches individuelles sous chaque capability

**Résultat :** Réponse claire à « Qu'est-ce qu'on livre en Q2 ? » → « Release Q2 avec ces 8 capabilities. »

---

### Anatomie D'Une Release Sinra

Reprenons l'exemple du début.

#### Approche Traditionnelle (Backlog Jira Chaotique)

**Q2 planning :**
- 537 issues dans le backlog
- 94 issues marquées label "Q2"
- Aucune idée de la capacité réelle
- Impossible de savoir ce qui sera livré

**Résultat :** Chaos total.

---

#### Approche Sinra (Release Structurée)

**Étape 1 :** Créer release "Q2 2025"

**Description de la release :**
```markdown
# Release Q2 2025

Objectif : Améliorer l'onboarding utilisateur et l'export de données.

## Capacité de l'équipe
- 12 semaines (avril-juin)
- 3 développeurs full-time
- Capacité réelle : 10 semaines de travail effectif (buffer 2 semaines pour imprévus)

## Date de livraison cible
30 juin 2025
```

**Étape 2 :** Définir capabilities pour Q2

Au lieu d'une liste de 94 issues, **8 capabilities claires** :

1. **Onboarding interactif** (3 semaines estimées)
2. **Export CSV amélioré** (1.5 semaines)
3. **Authentification SSO Google** (2 semaines)
4. **Dashboard analytics** (2.5 semaines)
5. **Notifications email** (1 semaine)
6. **API webhooks** (2 semaines)
7. **Mobile responsive** (2 semaines)
8. **Performance database** (1.5 semaines)

**Total estimé :** 15.5 semaines de travail

**Capacité disponible :** 10 semaines

**Problème immédiat visible :** **Surchargé de 5.5 semaines.**

**Décision :** Retirer 3 capabilities (les moins prioritaires) pour Q3.

**Capabilities gardées pour Q2 (après ajustement) :**

1. **Onboarding interactif** (3 sem)
2. **Export CSV amélioré** (1.5 sem)
3. **Authentification SSO Google** (2 sem)
4. **Dashboard analytics** (2.5 sem)
5. **Notifications email** (1 sem)

**Total :** 10 semaines → **Parfaitement aligné avec capacité réelle**.

![Planification de capacité : Réalité vs Espoir](/assets/images/blog/2025-12-26-chaos-backlog-capacity-planning.svg)

**Étape 3 :** Créer issues sous chaque capability

**Capability "Onboarding interactif" :**
- `[ONBOARD-10] Design onboarding flow (3 jours)`
- `[ONBOARD-11] Implement step 1: Welcome screen (2 jours)`
- `[ONBOARD-12] Implement step 2: Profile setup (3 jours)`
- `[ONBOARD-13] Implement step 3: First project (2 jours)`
- `[ONBOARD-14] Add progress indicators (1 jour)`
- `[ONBOARD-15] Analytics tracking (1 jour)`
- `[ONBOARD-16] Tests E2E (2 jours)`

**Total :** 14 jours de travail (≈ 3 semaines avec buffer)

**Étape 4 :** Planifier par cycles (sprints de 2 semaines)

**Cycle 1 (sem 1-2 avril) :**
- Capability : Onboarding interactif (phase 1)
- Capability : Export CSV (démarrage)

**Cycle 2 (sem 3-4 avril) :**
- Capability : Onboarding interactif (fin)
- Capability : Export CSV (fin)

**Cycle 3 (sem 1-2 mai) :**
- Capability : Authentification SSO Google

**Cycle 4 (sem 3-4 mai) :**
- Capability : Dashboard analytics (phase 1)

**Cycle 5 (sem 1-2 juin) :**
- Capability : Dashboard analytics (fin)
- Capability : Notifications email

**Cycle 6 (sem 3-4 juin) :**
- Buffer / polish / bugs

**Résultat :**
- ✅ Plan clair pour Q2 (5 capabilities précises)
- ✅ Capacité respectée (10 semaines de travail pour 10 semaines disponibles)
- ✅ Visibilité totale (chaque stakeholder sait ce qui sera livré)
- ✅ Réaliste (pas de surcharge, pas de promesses impossibles)

---

### Les Trois Piliers De La Planification Sinra

#### 1. Releases : Regrouper Par Versions Livrables

**Le Concept :**

Une **release** Sinra est une version livrable du produit avec :
- Date cible de livraison
- Capabilities incluses (features de haut niveau)
- Capacité de l'équipe définie

**Différence avec backlog Jira :**

| **Aspect** | **Backlog Jira** | **Release Sinra** |
|------------|------------------|-------------------|
| **Structure** | Liste plate infinie | Groupé par version livrable |
| **Visibilité** | ❌ « On verra » | ✅ « On livre ça le 30 juin » |
| **Capacité** | Ignorée | Calculée et respectée |
| **Promesses** | Floues | Claires et tenables |

**Exemple : Release "Mobile App v2.0"**

```markdown
# Release: Mobile App v2.0

Objectif : Lancer l'app mobile avec features core.

## Capabilities incluses
1. Authentification mobile
2. Sync offline
3. Push notifications
4. Profil utilisateur
5. Search

## Date de livraison
15 août 2025

## Capacité
2 devs mobile × 8 semaines = 16 semaines disponibles
Estimé : 14 semaines de travail
Buffer : 2 semaines
```

**Bénéfice :** Tout le monde sait exactement ce qui sera livré et quand.

---

#### 2. Capabilities : Features De Haut Niveau (Pas Des Micro-Tâches)

**Le Concept :**

Au lieu de 94 issues disparates, regrouper le travail en **capabilities** (features compréhensibles).

**Capabilities = Ce que l'utilisateur voit**, pas les détails techniques.

**Exemples :**

**❌ Mauvais (issues plates) :**
- "Add login button"
- "Create user table"
- "Implement JWT tokens"
- "Add password reset flow"
- "Design login screen"

**✅ Bon (capability) :**

**Capability : Authentification Utilisateur**
- Description : Permettre aux utilisateurs de créer un compte et se connecter.
- Issues : Les 5 tâches techniques ci-dessus.

**Pourquoi c'est mieux :**

Parce que les stakeholders ne pensent pas en termes de "JWT tokens". Ils pensent en termes de "Authentification".

**Résultat :** Communication claire avec les stakeholders.

---

#### 3. Cycles : Temps Définis (Pas De Sprints Infinis)

**Le Concept :**

Sinra utilise **cycles** pour organiser le travail en périodes définies (2 semaines, 3 semaines, etc.).

**Différence avec sprints Jira :**

| **Aspect** | **Sprints Jira** | **Cycles Sinra** |
|------------|------------------|------------------|
| **Planning** | Sprint par sprint | Plusieurs cycles d'avance visibles |
| **Lien avec releases** | ❌ Déconnecté | ✅ Lié (cycle X livre capability Y de release Z) |
| **Visibilité long-terme** | Nulle | Clara (on voit Q2 entier) |

**Exemple : Cycles pour Release Q2**

```markdown
Cycle 1 (1-14 avril) : Onboarding capability (phase 1)
Cycle 2 (15-28 avril) : Onboarding capability (fin) + Export CSV
Cycle 3 (1-14 mai) : SSO Google
Cycle 4 (15-28 mai) : Dashboard analytics (phase 1)
Cycle 5 (1-14 juin) : Dashboard analytics (fin) + Notifications
Cycle 6 (15-28 juin) : Buffer / polish
```

**Bénéfice :** Visibilité totale sur les 3 prochains mois (pas juste les 2 prochaines semaines).

---

## Exemple Réel : Vertigo (SaaS Project Management)

**Vertigo (équipe de 12 personnes, outil de gestion de projets)**

*Note : Vertigo est une entreprise réelle que nous avons anonymisée sous un nom fictif pour protéger leur confidentialité.*

### Avant Sinra : Backlog Chaotique

**État du backlog Jira :**
- **487 issues** accumulées
- **73 issues** marquées "Q2" (mais personne ne sait vraiment ce qui sera fait)
- **12 priorités** différentes (P0 à P4, urgent, critical, high, medium, low, etc.)
- **0 visibilité** sur ce qui sera livré et quand

**Problèmes Rencontrés :**

**Problème 1 : Personne ne sait ce qu'on livre**

CEO : « Qu'est-ce qu'on livre en Q2 ? »

PM : « Euh... on a 73 issues marquées Q2, mais je ne sais pas combien on peut vraiment faire. »

CEO : « Donc on ne peut rien promettre au board ? »

PM : « Pas vraiment, non. »

**Problème 2 : Priorités changeantes chaque semaine**

**Lundi :** « Feature A est priorité absolue. »

**Mercredi :** « Finalement, faites feature B en urgence. »

**Vendredi :** « Client VIP veut feature C immédiatement. »

**Résultat :** Équipe démarrait 3 features par semaine, finissait 0.

**Problème 3 : Issues bloquées oubliées**

**41 issues marquées "Blocked"**, dont :
- 15 bloquées depuis 3+ mois
- 9 bloquées pour des raisons qui n'existent plus
- 12 bloquées sans raison documentée

Personne ne les suivait. Elles mouraient lentement.

**Problème 4 : Backlog grooming inutile**

**2 heures de backlog grooming par semaine.**

**Résultat :** Tri de 20 issues sur 487. Aucune décision prise. Backlog toujours chaotique.

**Moral de l'équipe :** Épuisé. « On ne sait jamais ce qu'on fait ni pourquoi. »

---

### Après Sinra : Releases Structurées

**Workflow :**

1. **Créer releases par trimestre** (Q2, Q3, etc.)
2. **Définir 6-8 capabilities par release** (pas 73 issues)
3. **Calculer capacité réelle** (10 semaines effectives par trimestre)
4. **Planifier cycles d'avance** (visibilité 3 mois)
5. **Abandonner 80% du backlog** (garder seulement ce qui sera fait dans les 6 prochains mois)

**Release Q2 2025 (exemple) :**

```markdown
# Release Q2 2025

Objectif : Améliorer collaboration et notifications.

## Capabilities (6)
1. Real-time collaboration
2. Email notifications améliorées
3. Export PDF rapports
4. Mobile responsive
5. Intégration Slack
6. Performance dashboard

## Capacité
3 devs × 10 semaines effectives = 30 semaines disponibles
Estimé : 28 semaines de travail
Buffer : 2 semaines

## Date de livraison
28 juin 2025
```

**Résultats (Après 6 Mois) :**

**Métrique 1 : Visibilité**
- **Avant :** « Je ne sais pas ce qu'on livre en Q2 »
- **Après :** « On livre 6 capabilities précises le 28 juin »

**Métrique 2 : Crédibilité**
- **Avant :** 30% des promesses tenues
- **Après :** 95% des capabilities livrées à temps

**Métrique 3 : Focus**
- **Avant :** 3 features démarrées par semaine, 0 terminée
- **Après :** 1 capability à la fois, terminée avant de passer à la suivante

**Métrique 4 : Moral**
- **Avant :** Équipe épuisée, frustrée
- **Après :** « Enfin on sait où on va »

**Métrique 5 : Backlog**
- **Avant :** 487 issues chaotiques
- **Après :** 47 issues (ce qui sera fait dans les 6 prochains mois), le reste archivé

**Citation Lead Developer :**
> « Avant, chaque lundi on se demandait 'c'est quoi la priorité cette semaine ?'. Maintenant, on sait exactement ce qu'on livre en Q2, Q3. On peut enfin planifier et finir ce qu'on commence. »

**Citation Product Manager :**
> « Je peux enfin répondre au CEO quand il demande 'qu'est-ce qu'on livre en Q2'. Avant, je bafouillais. Maintenant, je lui montre la release avec 6 capabilities claires. Il est ravi. »

![Vertigo : Avant vs Après Sinra](/assets/images/blog/2025-12-26-chaos-backlog-vertigo-before-after.svg)

---

## Backlog Jira vs. Releases Sinra : Comparaison

| **Aspect** | **Backlog Jira** | **Releases Sinra** |
|------------|------------------|---------------------|
| **Structure** | Liste plate infinie | Groupé par releases livrables |
| **Visibilité Q2** | ❌ Floue (labels approximatifs) | ✅ Claire (capabilities définies) |
| **Capacité** | Ignorée | Calculée et respectée |
| **Priorités** | Changeantes chaque semaine | Stables (définies par release) |
| **Issues bloquées** | Oubliées | Suivies et résolues |
| **Backlog grooming** | Inefficace (tri sans décisions) | Inutile (pas de backlog infini) |
| **Promesses** | Non tenues (surcharge) | Tenues (planning réaliste) |
| **Moral équipe** | Frustré | Motivé |

---

## Les Cinq Signes Que Votre Backlog Est Chaotique

### Signe 1 : Vous Ne Pouvez Pas Répondre À « Qu'est-ce Qu'on Livre En Q2 ? »

Si vous devez filtrer 500 issues pendant 30 minutes pour trouver une réponse floue, votre backlog est chaotique.

---

### Signe 2 : Backlog > 300 Issues

Si votre backlog contient 300+ issues, 80% ne seront jamais faites. C'est un cimetière déguisé.

---

### Signe 3 : « Urgent » Chaque Semaine

Si vous recevez 3+ « urgent » par semaine qui changent les priorités, personne ne contrôle le chaos.

---

### Signe 4 : Issues Bloquées Oubliées

Si vous avez 20+ issues marquées "Blocked" depuis des mois, votre backlog est une décharge.

---

### Signe 5 : Backlog Grooming = Perte De Temps

Si vos sessions de backlog grooming ne réduisent jamais la taille du backlog, arrêtez de perdre votre temps.

---

## Comment Utiliser Sinra Pour Éliminer Le Chaos

### Étape 1 : Créer Releases Par Trimestre

**Action :**
- Créer release Q2, Q3, Q4
- Définir date cible de livraison
- Calculer capacité réelle de l'équipe

**Résultat :** Structure claire (releases livrables, pas backlog infini).

---

### Étape 2 : Définir 6-8 Capabilities Par Release

**Action :**
- Identifier les 6-8 capabilities les plus importantes pour chaque release
- Estimer chaque capability
- Vérifier que le total respecte la capacité

**Résultat :** Plan réaliste et tenable.

---

### Étape 3 : Planifier Cycles D'Avance

**Action :**
- Organiser capabilities par cycles (2-3 semaines)
- Assigner capabilities aux cycles
- Voir visibilité 3 mois d'avance

**Résultat :** Équipe sait quoi faire pendant 3 mois (pas juste 2 semaines).

---

### Étape 4 : Abandonner Le Backlog Infini

**Action :**
- Garder seulement issues pour les 6 prochains mois
- Archiver le reste (« maybe someday » → poubelle)
- Accepter que 80% des idées ne seront jamais faites

**Résultat :** Backlog gérable, pas une décharge.

---

## Points d'Action : Sortir Du Chaos

1. **Créez votre première release Q2.** Définissez 6-8 capabilities claires.
2. **Calculez votre capacité réelle.** Combien de semaines de travail effectif avez-vous ?
3. **Planifiez cycles d'avance.** Organisez capabilities par cycles de 2-3 semaines.
4. **Archivez 80% du backlog.** Gardez seulement ce qui sera fait dans 6 mois.
5. **Communiquez le plan.** Montrez releases et capabilities aux stakeholders.

---

## Le Point Clé

**Le chaos du backlog tue la productivité.**

Entre **500+ issues non triées**, **priorités changeantes**, **issues bloquées oubliées**, et **promesses impossibles**, personne ne sait ce qui sera livré.

**Sinra structure le travail par releases, cycles et capacités.**

Les releases regroupent, les capabilities clarifient, les cycles planifient.

**Le résultat :**
- ✅ Visibilité totale (on sait ce qu'on livre en Q2)
- ✅ Promesses tenues (capacité respectée)
- ✅ Priorités stables (pas de changements chaque semaine)
- ✅ Focus (finir ce qu'on commence)
- ✅ Moral retrouvé (l'équipe sait où elle va)

**Vous avez enfin un plan clair.**

**Vos stakeholders vous remercient.**

---

## Découvrez aussi la série « Problèmes Invisibles »

- **[Le QA Invisible](/qa/2025/12/22/qa-invisible-tests-disperses.html)** - 847 tests dans Excel : comment rendre le QA visible avec Sinra Testings
- **[La Documentation Morte](/documentation/2025/12/24/documentation-morte-notion-confluence.html)** - 127 pages Confluence obsolètes : comment rendre la documentation vivante
- **[Les Dépendances Cachées](/dependencies/2025/12/28/dependances-cachees-features-bloquees.html)** - 47% des features bloquées : comment rendre les dépendances visibles
- **[Le Syndrome Du Multi-Projet](/capacity/2025/12/30/syndrome-multi-projet-rien-navance.html)** - Développeurs sur 4 projets : comment limiter la surcharge

---

**Prêt à éliminer le chaos ?** [Démarrez un essai gratuit de Sinra →](https://app.sinra.dev/users/sign_up)

Découvrez une gestion de projet où le travail est structuré par releases, pas enterré dans un backlog chaotique.
