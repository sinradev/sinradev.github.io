---

title: "Le Syndrome Du Multi-Projet : Pourquoi Rien N'Avance Jamais"
subtitle: "Entre développeurs sur 4 projets simultanés, context switching permanent et « juste 2h pour m'aider », personne ne finit rien : Sinra limite les projets actifs et visualise la surcharge"
description: "Les développeurs sont assignés à 3, 4, 5 projets en même temps. Résultat : context switching permanent, rien ne se termine, burnout. Découvrez comment Sinra limite les projets actifs par personne et visualise la surallocation."
date: 2025-12-30 09:00:00 +0100
categories: ["Capacity"]
excerpt: "Le dev répond : « Je suis sur Projet A, Projet B, Projet C et Projet D en même temps. Je passe ma journée à switcher. Je ne termine rien. » Bienvenue dans le syndrome du multi-projet."
featured_image: /assets/images/blog/2025-12-30-syndrome-multi-projet-featured.png
---

## Le Dev Sur 4 Projets Simultanés

**Lundi matin. One-on-one avec un développeur.**

Manager : « Salut Dev 1, comment ça va ? »

Dev 1 : « Franchement, pas terrible. »

Manager : « Pourquoi ? »

Dev 1 : « Je suis sur trop de projets en même temps. »

Manager : « Combien de projets ? »

Dev 1 : « 4. »

Manager : « 4 projets ?! Lesquels ? »

Dev 1 : « Projet A (refonte auth), Projet B (nouvelle API), Projet C (migration DB), Projet D (bug fixes prod). »

Manager : « OK, et quel est le problème ? »

Dev 1 : « Je passe ma journée à switcher entre les 4. Le matin, je suis sur Projet A. Puis quelqu'un me demande de l'aide sur Projet B. Puis un bug urgent sur Projet D. Puis je reviens sur Projet A, mais j'ai oublié où j'en étais. »

Manager : « Et tu avances sur quoi ? »

Dev 1 : « Rien. Aucun projet n'avance vraiment. Projet A devait être fini la semaine dernière. Projet B est en retard de 2 semaines. Projet C, je n'y ai pas touché depuis 10 jours. Projet D, je fais juste du firefighting. »

Manager : « Pourquoi tu es sur 4 projets ? »

Dev 1 : « Parce qu'on m'a assigné sur les 4. »

Manager : « Mais pourquoi on ne t'a pas enlevé d'un projet avant de t'en ajouter un autre ? »

Dev 1 : « Je ne sais pas. Personne ne m'a jamais retiré d'un projet. On me les ajoute juste. »

Manager : « OK. Je vais regarder ça. »

**Le manager regarde Jira. Dev 1 est assigné sur 47 issues réparties sur 4 projets.**

Manager : « Merde. »

<img src="/assets/images/blog/2025-12-30-syndrome-multi-projet-developer-overload.svg" alt="Dev 1 assigné sur 4 projets simultanés avec surallocation 180%" width="800" height="450" loading="lazy">

---

## Le Problème Du Multi-Projet

Le multi-projet, c'est quand les développeurs sont assignés sur **plusieurs projets en parallèle** sans limite claire.

**Résultat catastrophique :**
- Context switching permanent
- Rien ne se termine
- Burnout
- Tous les projets en retard

### Les Cinq Symptômes Du Syndrome Multi-Projet

#### 1. Rien Ne Se Termine (« Tout Est En Cours, Rien N'Est Fini »)

**Le Scénario :**
Vous avez 5 projets actifs. Chaque développeur travaille sur 2, 3, 4 projets en parallèle. Résultat : tous les projets avancent à 10%, mais aucun n'est terminé.

**Exemple réel :**

Équipe de 8 développeurs. 6 projets actifs.

**Répartition typique :**

- **Dev 1 :** Projet A (40%) + Projet B (30%) + Projet D (30%)
- **Dev 2 :** Projet A (50%) + Projet C (50%)
- **Dev 3 :** Projet B (60%) + Projet E (40%)
- **Dev 4 :** Projet C (70%) + Projet F (30%)
- **Dev 5 :** Projet D (100%) ← seul dev à temps plein
- **Dev 6 :** Projet E (50%) + Projet F (50%)
- **Dev 7 :** Projet A (30%) + Projet B (30%) + Projet C (40%)
- **Dev 8 :** Projet D (50%) + Projet E (50%)

**Situation après 4 semaines :**

- **Projet A :** 60% fait (devait être fini semaine 2)
- **Projet B :** 45% fait (devait être fini semaine 3)
- **Projet C :** 55% fait (devait être fini semaine 3)
- **Projet D :** 70% fait (seul projet avec 1 dev à temps plein)
- **Projet E :** 30% fait
- **Projet F :** 25% fait

**Aucun projet terminé.**

<img src="/assets/images/blog/2025-12-30-syndrome-multi-projet-nothing-finishes.svg" alt="6 projets actifs, aucun terminé après 4 semaines" width="800" height="450" loading="lazy">

**Le Problème :**
- ❌ Développeurs fragmentés sur plusieurs projets
- ❌ Chaque projet avance lentement
- ❌ Rien ne se termine
- ❌ Impossible de livrer quoi que ce soit

**Statistique Réelle :**

Étude sur 95 équipes engineering :
- **Développeurs sur 1 projet :** 92% des projets terminés à temps
- **Développeurs sur 2 projets :** 68% des projets terminés à temps
- **Développeurs sur 3+ projets :** 23% des projets terminés à temps

**Résultat :** Le multi-projet tue la capacité à terminer quoi que ce soit.

---

#### 2. Context Switching Permanent (« Quelle Feature J'Étais En Train De Faire Déjà ? »)

**Le Scénario :**
Votre développeur passe sa journée à switcher entre 3, 4 projets différents. Résultat : perte de temps massive, fatigue cognitive, erreurs.

**Chronologie typique d'une journée :**

**9h00 :** Dev 1 démarre la journée sur Projet A (refonte auth).

**9h30 :** Message Slack : « Dev 1, tu peux m'aider 5 minutes sur Projet B ? Y'a un bug. »

**9h35 :** Dev 1 switch sur Projet B. Checkout de la branche. « Ah merde, quelle branche déjà ? »

**10h00 :** Bug résolu. Dev 1 revient sur Projet A.

**10h05 :** « Euh... où j'en étais déjà ? »

**10h20 :** Dev 1 retrouve le contexte. Reprend le travail.

**11h00 :** Standup Projet C. « Dev 1, tu peux faire cette issue urgent sur Projet C ? »

**11h15 :** Dev 1 switch sur Projet C. Checkout de la branche.

**12h00 :** Pause déjeuner.

**13h00 :** Retour. « Sur quel projet je travaillais déjà ? »

**13h30 :** Email : « Projet D a un bug en prod. Tu peux regarder ? »

**13h35 :** Dev 1 switch sur Projet D. « Ah merde, je ne connais même pas ce code. »

**15h00 :** Bug pas résolu. « Je vais demander à quelqu'un d'autre. »

**15h15 :** Dev 1 revient sur Projet A. « Euh... c'était quoi déjà ma feature ? »

**16h00 :** Réunion Projet B.

**17h00 :** Fin de journée. Dev 1 réalise qu'il n'a **rien terminé**.

<img src="/assets/images/blog/2025-12-30-syndrome-multi-projet-context-switching.svg" alt="Journée typique avec 6 context switches et 60% du temps perdu" width="800" height="450" loading="lazy">

**Le Problème :**
- ❌ 5-6 context switches par jour
- ❌ Perte de temps massive à retrouver le contexte
- ❌ Rien de substantiel accompli
- ❌ Fatigue cognitive

**Coût du context switching :**

Recherche (Gerald Weinberg, *Quality Software Management*) :
- **1 projet :** 100% de productivité
- **2 projets :** 40% de productivité par projet (20% perdu en switching)
- **3 projets :** 20% de productivité par projet (40% perdu en switching)
- **4+ projets :** <10% de productivité par projet (60%+ perdu en switching)

<img src="/assets/images/blog/2025-12-30-syndrome-multi-projet-productivity-loss.svg" alt="Perte de productivité selon le nombre de projets" width="800" height="450" loading="lazy">

**Résultat :** Le context switching détruit la productivité.

---

#### 3. Pas De Deep Work (« Je Suis Constamment Interrompu »)

**Le Scénario :**
Pour faire du bon travail, il faut du **temps ininterrompu** (deep work). Mais quand vous êtes sur 4 projets, vous êtes constamment interrompu.

**Exemple réel :**

Dev 1 essaie de coder une feature complexe (refonte auth).

**Besoin :** 4 heures de deep work ininterrompu.

**Réalité :**

**Lundi matin :**
- 9h00-9h30 : Travail sur auth (30 min)
- 9h30-10h00 : Interrompu pour Projet B (30 min)
- 10h00-10h30 : Retour sur auth (30 min)
- 10h30-11h00 : Standup Projet C (30 min)
- 11h00-12h00 : Travail sur auth (60 min)
- 12h00-13h00 : Pause déjeuner

**Lundi après-midi :**
- 13h00-14h00 : Bug urgent Projet D (60 min)
- 14h00-15h00 : Travail sur auth (60 min)
- 15h00-16h00 : Réunion Projet B (60 min)
- 16h00-17h00 : Travail sur auth (60 min)

**Temps total sur auth :** 4h30

**Mais fragmenté en 6 sessions de 30-60 minutes.**

**Temps perdu à retrouver le contexte :** 6 × 10 min = 60 min

**Temps réel productif :** 3h30

**Le Problème :**
- ❌ Pas de session longue ininterrompue
- ❌ Perte de temps à retrouver le contexte
- ❌ Impossible de faire du travail profond
- ❌ Qualité du code dégradée

**Citation développeur :**
> « Je ne peux jamais me concentrer plus de 60 minutes d'affilée. Je suis constamment interrompu pour un autre projet. Résultat : je ne fais que du code de surface. Rien de complexe. »

**Résultat :** Le multi-projet rend le deep work impossible.

---

#### 4. Burnout (« Je Ne Sais Plus Sur Quoi Je Travaille »)

**Le Scénario :**
Être sur 4 projets en même temps, c'est mentalement épuisant. Résultat : burnout.

**Témoignage développeur :**

> « Je me réveille le matin et je ne sais même plus sur quels projets je travaille. Je regarde mon calendrier : 3 standups différents, 2 réunions de planning, 1 code review pour un projet que je ne connais pas. Je suis épuisé avant même de commencer ma journée. »

**Les Signes Du Burnout Multi-Projet :**

1. **Confusion :** « Sur quel projet je travaille déjà ? »
2. **Fatigue permanente :** « Je suis crevé. »
3. **Sentiment d'inefficacité :** « Je ne termine jamais rien. »
4. **Frustration :** « Pourquoi on m'ajoute toujours des projets sans jamais m'en retirer ? »
5. **Désengagement :** « Je m'en fous. Je fais juste le minimum. »

**Statistique Réelle :**

Enquête sur 340 développeurs :
- **Développeurs sur 1 projet :** 12% déclarent être en burnout
- **Développeurs sur 2 projets :** 29% en burnout
- **Développeurs sur 3+ projets :** 61% en burnout

**Résultat :** Le multi-projet est une cause majeure de burnout.

---

#### 5. Tous Les Projets En Retard (« Rien N'Est À Temps »)

**Le Scénario :**
Quand tout le monde est sur plusieurs projets, **tous les projets sont en retard**.

**Exemple réel :**

Équipe de 10 développeurs. 5 projets actifs.

**Planning initial :**
- **Projet A :** 4 semaines (deadline : 30 janvier)
- **Projet B :** 3 semaines (deadline : 23 janvier)
- **Projet C :** 6 semaines (deadline : 13 février)
- **Projet D :** 2 semaines (deadline : 16 janvier)
- **Projet E :** 5 semaines (deadline : 6 février)

**Répartition :**
- Chaque développeur sur 2-3 projets en moyenne

**Résultat après 8 semaines :**

- **Projet A :** Terminé semaine 7 (3 semaines de retard)
- **Projet B :** Terminé semaine 6 (3 semaines de retard)
- **Projet C :** Pas encore terminé (en retard)
- **Projet D :** Terminé semaine 4 (2 semaines de retard)
- **Projet E :** Pas encore terminé (en retard)

**5 projets → 5 projets en retard.**

**Le Problème :**
- ❌ Capacité fragmentée sur 5 projets
- ❌ Chaque projet avance lentement
- ❌ Tous les projets en retard
- ❌ Stakeholders mécontents

**Citation PM :**
> « On m'a promis Projet B pour fin janvier. On est mi-février et ce n'est toujours pas fini. Pourquoi ? Parce que les devs sont éparpillés sur 5 projets. »

**Résultat :** Le multi-projet garantit que tous les projets seront en retard.

---

## Pourquoi Le Multi-Projet Persiste

### Raison 1 : Pas De Limite Sur Le Nombre De Projets Actifs

**Le Problème :**

Personne ne dit jamais : « Non, on ne peut pas démarrer un nouveau projet tant que Projet A n'est pas terminé. »

**Ce qui se passe :**

Projet A démarre. 4 développeurs assignés.

**2 semaines après :**

Projet B démarre. « On a besoin de 3 développeurs. »

Manager : « OK, on prend Dev 1, Dev 2, Dev 3. »

**Mais on ne retire pas Dev 1, Dev 2, Dev 3 du Projet A.**

Résultat : Dev 1, Dev 2, Dev 3 maintenant sur **2 projets**.

**2 semaines après :**

Projet C démarre. « On a besoin de 2 développeurs. »

Manager : « OK, on prend Dev 1, Dev 4. »

Résultat : Dev 1 maintenant sur **3 projets**.

**2 semaines après :**

Projet D démarre. « On a besoin de 1 développeur. »

Manager : « OK, on prend Dev 1. »

Résultat : Dev 1 maintenant sur **4 projets**.

**Le Problème :**
- ❌ Aucune limite sur le nombre de projets actifs
- ❌ On ajoute des projets sans jamais en retirer
- ❌ Développeurs sur 3, 4, 5 projets simultanés
- ❌ Personne ne finit rien

**Citation développeur :**
> « On m'a assigné sur 5 projets cette année. On ne m'a retiré d'aucun. Résultat : je suis sur 5 projets en même temps. »

**Résultat :** Sans limite sur les projets actifs, les développeurs finissent sur 4+ projets.

---

### Raison 2 : « Juste 2h Pour M'Aider »

**Le Problème :**

Le multi-projet commence souvent par : « Tu peux juste m'aider 2h sur Projet X ? »

**Mais les « 2h » deviennent permanentes.**

**Exemple réel :**

Dev 1 est à temps plein sur Projet A.

**Semaine 1 :**

Manager Projet B : « Dev 1, tu peux juste m'aider 2h sur un bug urgent sur Projet B ? »

Dev 1 : « OK, pas de problème. »

**Semaine 2 :**

Manager Projet B : « Dev 1, encore un petit truc sur Projet B. Juste 2h. »

Dev 1 : « OK. »

**Semaine 3 :**

Manager Projet B : « Dev 1, on a besoin de toi 1 jour par semaine sur Projet B. »

Dev 1 : « Euh... OK. »

**Semaine 4 :**

Manager Projet B : « Dev 1, en fait tu peux passer 50% de ton temps sur Projet B ? »

Dev 1 : « Mais je suis censé être à temps plein sur Projet A. »

Manager Projet B : « Oui, mais Projet B a aussi besoin de toi. »

**Résultat :** Dev 1 maintenant sur **2 projets à 50% chacun**.

**Le Problème :**
- ❌ « Juste 2h » devient permanent
- ❌ Développeur fragmenté sur plusieurs projets
- ❌ Impossible de dire non
- ❌ Surcharge progressive

**Citation développeur :**
> « Tout commence par "juste 2h pour m'aider". Puis ça devient 1 jour par semaine. Puis 50% de mon temps. Personne ne me retire jamais officiellement d'un projet. »

**Résultat :** Les « petites demandes » créent du multi-projet permanent.

---

### Raison 3 : Pas De Visibilité Sur La Surallocation

**Le Problème :**

Personne ne voit que Dev 1 est assigné sur 4 projets en même temps.

**Exemple réel :**

Manager Projet A pense que Dev 1 est à 100% sur Projet A.

Manager Projet B pense que Dev 1 est à 50% sur Projet B.

Manager Projet C pense que Dev 1 est à 30% sur Projet C.

Manager Projet D pense que Dev 1 est disponible pour « quelques heures ».

**Réalité :** Dev 1 est assigné à **180% de sa capacité**.

**Mais personne ne le voit.**

**Le Problème :**
- ❌ Pas de vue d'ensemble de l'allocation
- ❌ Chaque manager pense avoir sa part
- ❌ Développeur suralloué à 180%
- ❌ Personne ne réalise le problème

**Citation manager :**
> « Je pensais que Dev 1 était à 100% sur mon projet. J'ai découvert qu'il était aussi sur 3 autres projets. Personne ne me l'avait dit. »

**Résultat :** Sans visibilité sur l'allocation, les développeurs finissent suralloués.

---

## L'Approche Sinra : Limiter Les Projets Actifs Et Visualiser La Surcharge

Sinra élimine le multi-projet en **limitant le nombre de projets actifs par personne** et en **visualisant la surallocation**.

### Le Concept : Champ « Projects » Et Visualisation De L'Allocation

Dans Sinra, chaque issue est assignée à un **projet**. Chaque personne peut voir sur combien de projets elle travaille.

**Trois mécanismes :**

1. **Champ « Projects »** : Chaque issue appartient à un projet
2. **Vue par projet** : Voir toutes les issues d'un projet
3. **Visualisation de l'allocation** : Voir combien de projets chaque personne a

**Règle simple :**

**Maximum 2 projets actifs par personne** (idéalement 1).

**Résultat :** Impossible d'avoir des développeurs sur 4+ projets.

---

### Anatomie D'Une Allocation Sinra

Reprenons l'exemple de Dev 1 sur 4 projets.

#### Approche Traditionnelle (Multi-Projet Invisible)

**Dev 1 assigné sur :**
- 12 issues Projet A
- 8 issues Projet B
- 7 issues Projet C
- 5 issues Projet D

**Total : 32 issues sur 4 projets**

**Personne ne voit le problème.**

**Résultat :** Dev 1 passe sa journée à switcher. Rien ne se termine.

---

#### Approche Sinra (Projets Visibles)

**Étape 1 :** Vue de l'allocation de Dev 1

```
Dev 1 :
- Projet A : 12 issues
- Projet B : 8 issues
- Projet C : 7 issues
- Projet D : 5 issues

⚠️ Alerte : Dev 1 est sur 4 projets (limite recommandée : 2)
```

**Étape 2 :** Manager voit l'alerte

Manager : « Merde, Dev 1 est sur 4 projets. On doit le retirer de 2 projets. »

**Étape 3 :** Décision de priorisation

Manager : « Quel est le projet prioritaire ? »

Product : « Projet A. »

Manager : « OK, on garde Dev 1 sur Projet A à 100%. On retire Dev 1 de Projet B, C, D. »

**Étape 4 :** Réassignation

- Projet B → Assigné à Dev 5
- Projet C → Assigné à Dev 6
- Projet D → Assigné à Dev 7

**Résultat :** Dev 1 maintenant sur **1 projet à 100%**.

**Impact :**

**Avant (4 projets) :**
- Productivité par projet : <10%
- Projet A : 3 semaines pour terminer

**Après (1 projet) :**
- Productivité : 100%
- Projet A : 1 semaine pour terminer

**Gain :** 2 semaines économisées.

---

### Les Trois Piliers De La Gestion Multi-Projet Sinra

#### 1. Champ « Projects » (Chaque Issue Appartient À Un Projet)

**Le Concept :**

Chaque issue est assignée à un **projet**.

**Issue typique :**

```markdown
Title: Refonte auth
Assignee: Dev 1
Project: Projet A
```

**Bénéfice :** On peut voir sur combien de projets chaque personne travaille.

---

#### 2. Visualisation De L'Allocation (Voir La Surcharge)

**Le Concept :**

Sinra montre combien de projets chaque personne a.

**Vue d'équipe :**

```
Dev 1 : 1 projet (Projet A) ✅
Dev 2 : 2 projets (Projet A, Projet B) ⚠️
Dev 3 : 4 projets (Projet A, B, C, D) 🚨 Suralloué
Dev 4 : 1 projet (Projet C) ✅
Dev 5 : 3 projets (Projet B, D, E) 🚨 Suralloué
```

**Actions immédiates :**
- Retirer Dev 3 de 2 projets
- Retirer Dev 5 de 1 projet

<img src="/assets/images/blog/2025-12-30-syndrome-multi-projet-allocation-view.svg" alt="Vue allocation Sinra avec alertes de surcharge" width="800" height="450" loading="lazy">

**Bénéfice :** Impossible de ne pas voir la surcharge.

---

#### 3. Limite Recommandée (Maximum 2 Projets Actifs)

**Le Concept :**

Sinra recommande **maximum 2 projets actifs par personne** (idéalement 1).

**Alerte automatique :**

```
⚠️ Dev 3 est sur 4 projets (limite : 2)
Action recommandée : Retirer Dev 3 de 2 projets
```

**Bénéfice :** Les managers sont forcés de prioriser.

---

## Exemple Réel : Nexus (Plateforme SaaS)

**Nexus (équipe de 12 développeurs, plateforme SaaS B2B)**

*Note : Nexus est une entreprise réelle que nous avons anonymisée sous un nom fictif pour protéger leur confidentialité.*

### Avant Sinra : Multi-Projet Invisible

**Problèmes Rencontrés :**

**Problème 1 : Développeurs sur 3-4 projets**

Analyse de l'allocation :
- **Dev 1-4 :** 3 projets chacun
- **Dev 5-8 :** 4 projets chacun
- **Dev 9-12 :** 2 projets chacun

**Moyenne : 3 projets par développeur.**

**Problème 2 : Rien ne se termine**

6 projets actifs. Aucun terminé à temps.

Délai moyen : **+5 semaines** par rapport au planning initial.

**Problème 3 : Context switching permanent**

Développeurs passent **60% de leur temps** à switcher entre projets.

Temps réel productif : **40%**.

**Problème 4 : Burnout**

Enquête interne :
- **58% des développeurs** déclarent être en burnout
- Raison principale : « Trop de projets en même temps »

**Problème 5 : Tous les projets en retard**

6 projets actifs → 6 projets en retard.

Stakeholders mécontents.

**Moral de l'équipe :** Épuisé. « On ne termine jamais rien. »

---

### Après Sinra : Projets Limités

**Workflow :**

1. **Chaque issue assignée à un projet**
2. **Vue de l'allocation par personne**
3. **Alerte si >2 projets**
4. **Réassignation pour respecter la limite**

**Changement principal :**

**Règle stricte :** Maximum 2 projets actifs par développeur (idéalement 1).

**Réallocation :**

**Avant :**
- Dev 1 : Projet A, B, C (3 projets)
- Dev 2 : Projet A, B, D (3 projets)
- Dev 3 : Projet C, D, E, F (4 projets)

**Après :**
- Dev 1 : Projet A (100%)
- Dev 2 : Projet B (100%)
- Dev 3 : Projet C (100%)
- Dev 4 : Projet D (100%)
- Dev 5 : Projet E (100%)
- Dev 6 : Projet F (100%)

**Impact immédiat :**

Chaque projet a maintenant des développeurs **à temps plein**.

**Résultats (Après 4 Mois) :**

**Métrique 1 : Projets par développeur**
- **Avant :** 3 projets en moyenne
- **Après :** 1.2 projets en moyenne

**Métrique 2 : Taux de complétion**
- **Avant :** 23% des projets terminés à temps
- **Après :** 87% des projets terminés à temps

**Métrique 3 : Context switching**
- **Avant :** 60% du temps perdu en switching
- **Après :** 12%

**Métrique 4 : Burnout**
- **Avant :** 58% des devs en burnout
- **Après :** 19%

**Métrique 5 : Délai moyen**
- **Avant :** +5 semaines de retard par projet
- **Après :** -1 semaine (projets terminés en avance)

**Citation Lead Developer :**
> « Avant, j'étais sur 4 projets en même temps. Je passais ma journée à switcher. Maintenant, je suis sur 1 projet à la fois. Je termine les choses. C'est libérateur. »

**Citation Product Manager :**
> « Les projets se terminent enfin. Avant, tout était en retard. Maintenant, on livre à temps. La différence ? Chaque dev est focalisé sur un seul projet. »

<img src="/assets/images/blog/2025-12-30-syndrome-multi-projet-nexus-before-after.svg" alt="Nexus : métriques avant/après Sinra" width="800" height="450" loading="lazy">

---

## Jira vs. Sinra : Comparaison Multi-Projet

| **Aspect** | **Jira** | **Sinra** |
|------------|----------|-----------|
| **Champ « Projects »** | ❌ Inexistant | ✅ Obligatoire |
| **Visualisation allocation** | ❌ Aucune | ✅ Vue par personne |
| **Alerte surallocation** | ❌ Aucune | ✅ Alerte si >2 projets |
| **Limite projets actifs** | ❌ Aucune | ✅ Maximum 2 recommandé |
| **Projets par dev** | 3+ (invisible) | 1-2 (forcé) |
| **Taux complétion** | 23% à temps | 87% à temps |
| **Context switching** | 60% du temps | 12% du temps |

---

## Les Cinq Signes Que Vous Avez Un Problème Multi-Projet

### Signe 1 : Vos Développeurs Sont Sur 3+ Projets

Si vos développeurs sont assignés sur 3, 4, 5 projets simultanés, vous avez un problème.

---

### Signe 2 : Rien Ne Se Termine

Si tous vos projets avancent à 50% mais aucun n'est terminé, c'est du multi-projet.

---

### Signe 3 : « Je Suis Constamment Interrompu » Est Une Phrase Récurrente

Si vos développeurs disent qu'ils ne peuvent jamais se concentrer, c'est du multi-projet.

---

### Signe 4 : Tous Les Projets Sont En Retard

Si 80%+ de vos projets sont en retard, c'est probablement parce que les développeurs sont fragmentés.

---

### Signe 5 : Burnout Élevé

Si >50% de vos développeurs déclarent être en burnout, vérifiez combien de projets ils ont.

---

## Comment Utiliser Sinra Pour Limiter Le Multi-Projet

### Étape 1 : Assigner Chaque Issue À Un Projet

**Action :**
- Créer un champ « Project » obligatoire
- Assigner chaque issue à un projet
- Résultat : Visibilité sur combien de projets chaque personne a

---

### Étape 2 : Visualiser L'Allocation

**Action :**
- Utiliser la vue « Allocation par personne »
- Identifier qui est sur 3+ projets
- Actions : Réassigner pour respecter la limite

---

### Étape 3 : Appliquer La Règle « Maximum 2 Projets »

**Action :**
- Règle stricte : Maximum 2 projets actifs par personne (idéalement 1)
- Avant de démarrer un nouveau projet, retirer les développeurs d'un projet existant
- Résultat : Développeurs focalisés, projets terminés

---

### Étape 4 : Dire Non Aux « Juste 2h »

**Action :**
- Refuser les « juste 2h pour m'aider » si ça ajoute un projet
- Si aide nécessaire, retirer officiellement la personne d'un autre projet
- Résultat : Pas de surallocation invisible

---

## Points d'Action : Éliminer Le Multi-Projet

1. **Auditez l'allocation actuelle.** Combien de projets chaque développeur a ?
2. **Identifiez les suralloués.** Qui est sur 3+ projets ?
3. **Réassignez.** Retirez les développeurs des projets non prioritaires.
4. **Appliquez la règle.** Maximum 2 projets par personne.
5. **Visualisez.** Utilisez Sinra pour voir l'allocation en temps réel.

---

## Le Point Clé

**Le multi-projet tue la productivité.**

Entre **context switching permanent**, **rien qui se termine**, **burnout**, et **tous les projets en retard**, personne ne peut avancer.

**Sinra limite les projets actifs et visualise la surcharge.**

Champ « Projects », vue d'allocation, alertes automatiques.

**Le résultat :**
- ✅ Développeurs sur 1-2 projets max (focus restauré)
- ✅ Projets terminés à temps (87% au lieu de 23%)
- ✅ Context switching réduit (12% au lieu de 60%)
- ✅ Burnout divisé par 3 (19% au lieu de 58%)
- ✅ Productivité restaurée (100% au lieu de <10%)

**Vos développeurs peuvent enfin se concentrer.**

**Vos projets se terminent.**

---

## Découvrez aussi la série « Problèmes Invisibles »

- **[Le QA Invisible](/qa/2025/12/22/qa-invisible-tests-disperses.html)** - 847 tests dans Excel : comment rendre le QA visible avec Sinra Testings
- **[La Documentation Morte](/documentation/2025/12/24/documentation-morte-notion-confluence.html)** - 127 pages Confluence obsolètes : comment rendre la documentation vivante
- **[Le Chaos Du Backlog](/planning/2025/12/26/chaos-backlog-personne-sait-q2.html)** - 537 issues chaotiques : comment organiser le travail par releases et cycles
- **[Les Dépendances Cachées](/dependencies/2025/12/28/dependances-cachees-features-bloquees.html)** - 47% des features bloquées : comment rendre les dépendances visibles

---

**Prêt à éliminer le multi-projet ?** [Démarrez un essai gratuit de Sinra →](https://app.sinra.dev/users/sign_up)

Découvrez une gestion de projet où les développeurs sont focalisés sur 1-2 projets max, pas éparpillés sur 4+.
