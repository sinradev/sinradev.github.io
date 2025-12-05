---
layout: post
title: "De l'Issue à la Release : Comment Sinra Structure Votre Travail"
subtitle: "Un guide pratique du parcours d'une fonctionnalité de sa conception à sa livraison"
description: "Suivez une fonctionnalité à travers la hiérarchie de Sinra—des issues individuelles aux capabilities jusqu'aux releases—et découvrez comment une structure concrète crée de la clarté au lieu de la complexité."
lang: fr
category: Guide Produit
excerpt: "Comprendre comment le travail circule dans Sinra : les issues sont les blocs de construction, les capabilities regroupent le travail connexe, et les releases définissent ce qui est livré. Pas de jargon, juste une structure claire."
permalink: /guide-produit/:year/:month/:day/from-issue-to-release.html
---

## Le Problème : Perdu en Traduction

La plupart des outils de gestion de projet vous forcent à penser en abstractions :

- Des « user stories » qui ne sont pas vraiment des stories
- Des « epics » qui ne semblent pas épiques
- Des « backlogs » qui deviennent des cimetières
- Des « increments » que personne ne comprend

**Le résultat ?** Les équipes passent plus de temps à traduire des concepts qu'à faire le travail.

Sinra adopte une approche différente : **une hiérarchie concrète qui reflète comment le travail se passe réellement**.

Suivons une vraie fonctionnalité du début à la fin.

---

## La Fonctionnalité : Authentification à Deux Facteurs

Votre équipe décide d'ajouter l'authentification à deux facteurs (2FA) à votre produit SaaS.

Dans les outils traditionnels, vous pourriez créer :
- Une « user story » pour la 2FA
- Plusieurs « sous-tâches »
- Un « epic » pour les regrouper
- Des tags pour suivre les tests
- Des champs personnalisés pour cibler la release

**Dans Sinra, la structure est plus simple et plus directe.**

---

## Niveau 1 : Issues (Les Blocs de Construction)

**Les issues sont des items de travail individuels.** Bugs, tâches, fonctionnalités—tout ce qu'une personne fait est une issue.

Pour la 2FA, vous créez ces issues :

**Issues Backend :**
1. « Implémenter la génération de token TOTP »
2. « Créer l'endpoint API d'enrollment 2FA »
3. « Ajouter la vérification 2FA au flux de login »
4. « Générer des codes de secours lors de l'enrollment »

**Issues Frontend :**
5. « Construire l'UI de la page de configuration 2FA »
6. « Ajouter le composant scanner de code QR »
7. « Créer l'interface de téléchargement des codes de secours »
8. « Mettre à jour le formulaire de login avec l'input 2FA »

**Issues Testing :**
9. « Écrire les tests unitaires pour la validation TOTP »
10. « Tester le flux d'enrollment 2FA »
11. « Tester la vérification de login 2FA »
12. « Tester la récupération par code de secours »

Chaque issue a :
- Un titre clair (ce qui doit être fait)
- Une description (contexte et exigences)
- Un assigné (qui le fait)
- Un statut (writing → development → review → testing → done)
- Des labels (backend, frontend, sécurité, etc.)

**Les issues sont l'unité atomique du travail.** Tout commence ici.

![Structure Issue](/assets/images/issue-structure.svg « Comment Fonctionnent les Issues dans Sinra »)

---

## Niveau 2 : Capabilities (Regrouper le Travail Connexe)

**Les capabilities sont des fonctionnalités ou initiatives suivies dans vos releases.** Elles organisent le travail à un niveau supérieur aux issues.

Pour la 2FA, vous créez une capability appelée :
**« Authentification à Deux Facteurs »**

Cette capability inclut :
- Toutes les 12 issues listées ci-dessus
- Critères d'acceptation pour la fonctionnalité
- Dépendances (ex : nécessite intégration fournisseur SMS)
- Release cible (ex : Release 2.1)

**Pourquoi « capability » au lieu de « epic » ?**

Parce que c'est concret. Une capability décrit ce que votre produit peut faire. « Capability 2FA » signifie que votre produit peut faire de l'authentification à deux facteurs. Pas de métaphore requise.

**Les capabilities vous permettent de voir :**
- La progression à travers toutes les issues connexes
- Qui travaille sur quelles parties
- La couverture de test
- Les blocages et dépendances
- La préparation pour la release

![Hiérarchie Capability](/assets/images/capability-hierarchy.svg « Issues Regroupées dans des Capabilities »)

---

## Niveau 3 : Releases (Définir Ce Qui Est Livré)

**Les releases sont des versions de votre produit.** Elles sont concrètes, numérotées et livrées.

Vous assignez la capability 2FA à la **Release 2.1**.

La Release 2.1 pourrait inclure :
- **Authentification à Deux Facteurs** (nouvelle capability)
- **Améliorations de la réinitialisation de mot de passe** (capability existante)
- **Corrections de bugs pour la page de login** (issues individuelles)

**Les releases répondent à la question critique : « Qu'est-ce qu'on livre, et quand ? »**

Dans la vue Release 2.1, vous voyez :
- Toutes les capabilities assignées à cette release
- Progression sur chaque capability
- Issues individuelles non regroupées dans des capabilities
- Statut des tests
- Préparation du déploiement

![Vue Release](/assets/images/release-view.svg « Capabilities Regroupées dans des Releases »)

---

## La Hiérarchie Complète en Action

Traçons la fonctionnalité 2FA à travers le système :

### Semaine 1-2 : Planification
**Action :** L'équipe produit définit la capability 2FA
- Écrire les exigences dans la description de la capability
- Créer 12 issues (backend, frontend, testing)
- Assigner les issues aux développeurs et ingénieurs QA
- Définir la release cible : 2.1
- Ajouter au cycle actuel

**Visibilité :** Tout le monde voit :
- Quelles issues existent
- Qui est assigné à quoi
- Quels sont les critères d'acceptation
- Quand c'est prévu pour la livraison

### Semaine 3-4 : Développement
**Action :** L'équipe commence à construire
- Le développeur backend marque « Implémenter TOTP » comme in_progress
- Le développeur frontend marque « Construire page setup 2FA » comme in_progress
- Les issues passent de writing → development → review
- Le commentary capture les décisions de design et blocages
- L'ingénieur QA prépare les cas de test

**Visibilité :** La progression en temps réel montre :
- Quelles issues sont en développement vs. terminées
- Pourcentage de complétion global de la capability
- Blocages (ex : « En attente des clés API fournisseur SMS »)
- Capacité vs. charge de travail

### Semaine 5 : Testing
**Action :** QA commence la vérification
- Les issues de test passent à in_progress
- Les bugs trouvés deviennent de nouvelles issues liées à la capability
- Les tests de régression tournent sur staging
- Documentation mise à jour

**Visibilité :** Le tableau de bord testing montre :
- Couverture de test pour la capability 2FA
- Statut pass/fail
- Cas de test restants
- Progression des corrections de bugs

### Semaine 6 : Release
**Action :** Déployer la Release 2.1
- Toutes les issues 2FA marquées complètes
- Capability marquée prête pour release
- Release 2.1 déployée en production
- Monitoring confirme le rollout réussi

**Visibilité :** La vue release confirme :
- Toutes les capabilities planifiées livrées
- Tous les tests passés
- Documentation complète
- Déploiement réussi

![Workflow Complet](/assets/images/issue-to-release-workflow.svg « Parcours Complet d'Issue à Release »)

---

## Pourquoi Cette Hiérarchie Fonctionne

### 1. Reflète la Réalité
Le travail ne se passe pas en « user stories » ou « epics ». Il se passe en tâches (issues), regroupées en fonctionnalités (capabilities), livrées en versions (releases).

### 2. Pas de Traduction Requise
Un développeur n'a pas besoin de décoder ce qu'un « epic » signifie. Il voit une capability appelée « Authentification à Deux Facteurs » et comprend immédiatement ce qui est construit.

### 3. Visibilité Multi-Niveaux
- **Contributeurs individuels** voient leurs issues assignées
- **Leads d'équipe** voient la progression des capabilities
- **Product managers** voient la préparation de release
- **Executives** voient le timeline de livraison

Tout le monde obtient la vue dont il a besoin sans tableaux de bord personnalisés.

### 4. Granularité Flexible
Tout n'a pas besoin d'être une capability. Les petites fonctionnalités peuvent être des issues autonomes assignées directement aux releases. Les grandes initiatives peuvent avoir 50+ issues regroupées dans une capability. La structure s'adapte à votre travail.

### 5. Les Tests Sont de Première Classe
Les issues de test coexistent avec les issues de développement. Les ingénieurs QA voient ce qui doit être testé en temps réel, pas après que le développement soit « terminé ».

---

## Comparaison : Sinra vs. Outils Traditionnels

| **Concept** | **Outils Traditionnels** | **Sinra** |
|-------------|-------------------------|-----------|
| **Item de travail** | User story, task, bug (types différents) | Issue (unifié) |
| **Regroupement** | Epic, theme, initiative (vague) | Capability (fonctionnalité concrète) |
| **Version** | Increment, sprint goal, milestone (ambigu) | Release (version numérotée) |
| **Testing** | Cas de test séparés ou champs personnalisés | Issues de test (comme issues dev) |
| **Visibilité** | Tableaux de bord personnalisés, velocity charts | Progression temps réel sur capabilities & releases |

---

## Exemple Réel : Équipe E-Commerce

**PayFast (équipe de 8 personnes construisant une plateforme de paiement)**

### Avant Sinra (Utilisant Jira)
**Problème :** Suivre une fonctionnalité signifiait :
- Créer un epic
- Écrire 20 user stories
- Lier des sous-tâches
- Tagger pour la release
- Construire un tableau de bord personnalisé pour voir la progression

Résultat : **3+ heures par semaine à maintenir la structure**

### Après Sinra
**Solution :** Suivre la même fonctionnalité :
- Créer 1 capability : « Facturation par Abonnement »
- Créer 18 issues (dev, design, QA)
- Assigner à Release 3.2
- Voir la progression en temps réel

Résultat : **15 minutes pour configurer, zéro maintenance**

**Retour d'équipe :**
> « On a arrêté de passer du temps à gérer Jira et on a commencé à livrer des fonctionnalités. La hiérarchie a du sens. »
> — Lead Developer, PayFast

---

## Comment Structurer Votre Première Fonctionnalité dans Sinra

### Étape 1 : Définir la Capability
Demandez : « Quelle fonctionnalité ou initiative construisons-nous ? »
- Exemple : « Rate Limiting API »
- Écrire une brève description et critères d'acceptation
- Assigner à une release cible

### Étape 2 : Décomposer en Issues
Demandez : « Quelles tâches individuelles sont nécessaires ? »
- Issues backend (implémenter middleware rate limit, ajouter caching Redis)
- Issues frontend (afficher statut rate limit dans dashboard)
- Issues testing (tester enforcement rate limit, tester logique reset)

### Étape 3 : Assigner Propriétaires et Labels
- Assigner les issues aux membres de l'équipe
- Ajouter des labels (backend, frontend, sécurité, etc.)
- Définir les dépendances si nécessaire

### Étape 4 : Suivre la Progression
- Les issues passent à travers les statuts au fur et à mesure du travail
- La complétion de capability se met à jour automatiquement
- La préparation de release devient visible en temps réel

### Étape 5 : Livrer la Release
- Quand toutes les issues de capability sont terminées, marquer capability complète
- Déployer la release
- Examiner ce qui a été livré et planifier la suivante

---

## Questions Courantes

**Q : Ai-je toujours besoin de capabilities ?**
Non. Les petites corrections de bugs ou tâches autonomes peuvent être des issues directement assignées à une release. Les capabilities sont pour regrouper le travail connexe.

**Q : Une issue peut-elle appartenir à plusieurs capabilities ?**
Non. Chaque issue appartient à une capability (ou aucune). Si le travail s'étend sur plusieurs fonctionnalités, considérez si c'est en fait une capability avec une portée plus large.

**Q : Comment gérer les dépendances entre issues ?**
Sinra suit les dépendances entre issues et capabilities. Marquez les dépendances, et le système met en évidence les blocages dans votre workflow.

**Q : Et si les priorités changent en cours de release ?**
Déplacez les issues entre capabilities ou releases selon les besoins. Sinra ne force pas d'engagements de sprint rigides—adaptez-vous quand la réalité change.

**Q : Comment voir sur quoi mon équipe travaille en ce moment ?**
Filtrez par cycle actuel + équipe + statut in_progress. Vous verrez exactement ce qui est actif.

---

## L'Avantage Sinra : Clarté par Design

La plupart des outils héritent du jargon Agile et forcent les équipes à adapter leur pensée.

Sinra fait l'inverse : **la structure reflète comment le travail se passe réellement.**

- **Issues** = items de travail individuels
- **Capabilities** = fonctionnalités regroupées
- **Releases** = versions produit

Pas de métaphores. Pas de traduction. Pas de charge cognitive.

Quand votre outil parle le même langage que votre équipe, le travail circule plus vite.

---

## Points d'Action : Structurer Votre Travail dans Sinra

1. **Identifiez votre prochaine fonctionnalité.** Qu'est-ce que vous construisez ?
2. **Créez une capability.** Nommez-la concrètement (pas « Epic: User Mgmt » mais « Permissions de Rôle Utilisateur »)
3. **Décomposez-la en issues.** Développement, design, testing—tout ce qu'une personne fait
4. **Assignez à une release.** Dans quelle version cela sera-t-il livré ?
5. **Commencez à construire.** Suivez la progression en temps réel, ajustez selon les besoins

---

## Le Point Clé

**Les outils traditionnels vous font penser en abstractions. Sinra vous fait penser en termes concrets.**

Issues → Capabilities → Releases.

C'est tout. C'est la hiérarchie.

Simple, claire, et alignée avec la façon dont les équipes construisent réellement du logiciel.

---

**Prêt à structurer votre travail clairement ?** [Démarrez un essai gratuit de Sinra →](https://app.sinra.dev/users/sign_up)

Découvrez une gestion de projet construite sur une structure concrète, pas du jargon confus.
