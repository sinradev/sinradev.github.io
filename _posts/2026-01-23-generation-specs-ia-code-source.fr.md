---
layout: post
title: "Générer Des Spécifications Via IA À Partir Du Code Source : Quand L'IA Analyse Votre Codebase Pour Créer Des Specs Réalistes"
subtitle: "Entre specs déconnectées de la réalité, documentation obsolète et incompréhension technique, les PO/PM écrivent dans le vide : l'IA analyse le code pour générer des spécifications alignées avec l'existant"
description: "Les Product Owners créent des specs ambitieuses sans connaître les contraintes techniques. L'équipe dev découvre l'impossibilité après 2 semaines. Découvrez comment l'IA génère des specs réalistes en analysant votre code source avec supervision humaine."
date: 2026-01-23 09:00:00 +0100
lang: fr
category: Specifications
excerpt: "Le PM écrit : « Ajouter l'authentification multi-facteur ». L'équipe dev découvre que l'architecture actuelle ne supporte qu'une seule méthode d'authentification. Refonte complète nécessaire. 3 semaines perdues. L'IA aurait pu analyser le code avant la spec."
permalink: /specifications/:year/:month/:day/generation-specs-ia-code-source.html
featured_image: /assets/images/blog/2026-01-23-specs-ia-featured.svg
---

## « Ajoutez L'Authentification Multi-Facteur »

**Lundi matin. Réunion de planification release.**

Product Manager : « Pour la prochaine release, on va ajouter l'authentification multi-facteur. C'est une demande client prioritaire. »

**Le PM ouvre Notion et commence à écrire la spec :**

```markdown
# Capability: Authentification Multi-Facteur (MFA)

**Objectif :**
Permettre aux utilisateurs de sécuriser leur compte avec plusieurs méthodes d'authentification.

**Méthodes supportées :**
- SMS avec code 6 chiffres
- Application authenticator (TOTP)
- Clé de sécurité matérielle (FIDO2)
- Email avec lien de confirmation

**User Stories :**
- En tant qu'utilisateur, je veux activer MFA dans mes paramètres
- En tant qu'utilisateur, je veux choisir ma méthode préférée
- En tant qu'utilisateur, je veux configurer plusieurs méthodes de backup
```

PM : « Spec terminée. Estimation ? »

**Lead Developer (qui n'a pas encore lu le code d'authentification actuel) :**

Dev Lead : « Je dirais 1 sprint, peut-être 2. Je vais assigner à l'équipe. »

**3 jours plus tard.**

**Développeur ouvre le code source du module d'authentification.**

```ruby
# app/models/user.rb
class User < ApplicationRecord
  devise :database_authenticatable, :registerable

  # Authentification actuelle : email + password UNIQUEMENT
  # Architecture : 1 seule méthode d'auth supportée par devise
  # Pas de système de providers multiples
end
```

**Développeur remonte au Lead :**

Dev : « On a un problème. Notre architecture d'authentification actuelle ne supporte qu'une seule méthode : email + password. »

Dev Lead : « Et alors ? »

Dev : « Pour supporter MFA, il faut refactoriser complètement le système d'authentification. Devise ne gère pas nativement plusieurs méthodes simultanées. On doit créer un système de providers, gérer les états d'authentification partielle, implémenter le flux MFA... »

Dev Lead : « Temps estimé ? »

Dev : « 3 semaines minimum. Plus 1 semaine de tests. La spec parle de 4 méthodes différentes. Chacune nécessite une intégration spécifique. »

**Lead Developer retourne voir le PM.**

Dev Lead : « Votre spec MFA... On ne peut pas faire ça en 2 sprints. »

PM : « Pourquoi ? C'est juste ajouter une option dans les settings. »

Dev Lead : « Non. C'est refactoriser toute l'architecture d'authentification. Le code actuel ne supporte qu'une seule méthode. Votre spec en demande 4. On doit tout revoir. »

PM : « Mais... j'ai validé cette spec avec les clients. C'est promis pour la release. »

Dev Lead : « Fallait analyser le code avant d'écrire la spec. »

PM : « Je ne sais pas coder. Comment je suis censé savoir que votre architecture ne supporte pas ça ? »

**Silence gêné.**

<img src="/assets/images/blog/2026-01-23-spec-deconnectee.svg" alt="Spec déconnectée de la réalité technique" width="800" height="500" loading="lazy">

---

## Le Problème Des Specs Déconnectées De La Réalité Technique

La majorité des Product Owners et Product Managers écrivent des specs sans connaître l'état réel du code.

**Objectif légitime :** Définir les besoins utilisateurs et les fonctionnalités à développer.

**Résultat fréquent :** Specs techniquement impossibles, sous-estimées, ou nécessitant des refactorisations majeures non anticipées.

### Les Cinq Symptômes Des Specs Déconnectées

#### 1. Specs Impossibles (L'Architecture Actuelle Ne Le Permet Pas)

**Le Scénario :**

PM écrit une spec ambitieuse basée sur les besoins utilisateurs.

**Semaine 1 :** Spec validée par le business. « Super fonctionnalité ! »

**Semaine 2 :** L'équipe dev commence l'analyse technique. « C'est impossible avec notre architecture actuelle. »

**Semaine 3 :** Débat sur comment refactoriser l'existant. « Ça va prendre 6 semaines, pas 2. »

**Semaine 4 :** PM doit annoncer le retard aux clients. « Désolé, on a sous-estimé la complexité. »

**Exemple Réel :**

**Spec PM :** « Permettre aux utilisateurs d'exporter leurs données au format CSV, JSON, et Excel. »

**Code actuel :**
```ruby
# app/services/export_service.rb
class ExportService
  def export_to_csv(data)
    # Export CSV uniquement
    # Pas de gestion multi-format
    # Pas d'abstraction pour ajouter d'autres formats
  end
end
```

**Réalité :** Le service d'export est couplé au format CSV. Pour supporter JSON et Excel, il faut refactoriser complètement le service, créer une abstraction, implémenter chaque formatter.

**Temps estimé par PM :** 3 jours.

**Temps réel :** 2 semaines (refactorisation + 3 formats + tests).

**Le Problème :**
- ❌ PM ne connaît pas l'architecture actuelle
- ❌ Spec écrite sans analyse du code existant
- ❌ Sous-estimation massive
- ❌ Frustration dev (« Encore une spec irréaliste »)

**Citation Lead Developer :**
> « Les PMs écrivent des specs comme si on partait d'une page blanche. Mais on a 200 000 lignes de code avec une architecture spécifique. Leurs specs ne tiennent jamais compte de ça. »

---

#### 2. Specs Sous-Estimées (« C'est Juste Ajouter Un Bouton »)

**Le Scénario :**

PM pense qu'une fonctionnalité est simple. « C'est juste ajouter un bouton d'export. »

**Réalité technique cachée :**
- Permissions : qui peut exporter ?
- Limites : exports volumineux crashent le serveur
- Background jobs : traitement asynchrone nécessaire
- Notifications : email quand l'export est prêt
- Sécurité : pas d'accès aux données d'autres utilisateurs
- Tests : 15 cas edge à couvrir

**Estimation PM :** 1 jour.

**Estimation Dev après analyse du code :** 1 semaine.

**Le Problème :**
- ❌ PM voit l'interface utilisateur, pas la complexité technique
- ❌ Specs ne mentionnent pas les contraintes cachées
- ❌ Désalignement entre attentes et réalité

**Citation Product Manager :**
> « Je pensais que c'était simple. Comment je suis censé savoir qu'il faut gérer 15 cas edge si je ne lis pas le code ? »

---

#### 3. Specs Contradictoires Avec L'Existant (Conflits Architecturaux)

**Le Scénario :**

PM écrit une spec qui entre en conflit avec l'architecture actuelle.

**Exemple :**

**Spec PM :** « Les utilisateurs peuvent créer des workflows personnalisés avec conditions if/else. »

**Code actuel :**
```ruby
# app/models/workflow.rb
class Workflow < ApplicationRecord
  # Workflows = séquence linéaire d'étapes fixes
  # Pas de conditions
  # Pas de branches
  # Architecture rigide
end
```

**Résultat :** La spec demande un système de workflows conditionnels. Le code actuel ne gère que des séquences linéaires. Refonte complète nécessaire.

**Le Problème :**
- ❌ Spec ignorante des contraintes architecturales
- ❌ Conflit entre vision PM et réalité technique
- ❌ Refactorisations non planifiées

---

#### 4. Specs Vagues (« Améliorer Les Performances »)

**Le Scénario :**

PM écrit une spec générique sans contexte technique.

**Spec PM :** « Améliorer les performances de la page dashboard. »

**Questions sans réponse :**
- Quelles parties de la page sont lentes ?
- Quel est le temps de chargement actuel ?
- Quel est l'objectif de performance ?
- Quelles requêtes SQL posent problème ?

**L'équipe dev doit analyser le code pour comprendre :**
- Profiling : identifier les bottlenecks
- Mesure : temps de chargement, nombre de requêtes SQL, temps de rendu
- Hypothèses : caching ? Requêtes N+1 ? Lazy loading ?

**Temps perdu :** 2 jours d'analyse technique avant même de commencer.

**Le Problème :**
- ❌ Spec sans contexte technique
- ❌ Dev doit faire l'analyse que le PM aurait pu faire avec de l'aide
- ❌ Temps perdu à comprendre le problème réel

---

#### 5. Specs Sans Contexte De Migration (« Et Les Données Existantes ? »)

**Le Scénario :**

PM écrit une spec pour une nouvelle fonctionnalité. Oublie les données existantes.

**Exemple :**

**Spec PM :** « Ajouter un champ "Statut de paiement" sur les commandes. Valeurs possibles : Payé, En attente, Échoué. »

**Question oubliée :** Qu'est-ce qu'on fait des 50 000 commandes existantes dans la base de données ?

**Réalité technique :**
- Migration de données nécessaire
- Logique de rétrocompatibilité (ancien code qui ne gère pas le nouveau champ)
- Stratégie de déploiement (déployer le code avant ou après la migration ?)

**Estimation PM :** 1 jour (ajouter un champ).

**Estimation Dev :** 1 semaine (migration + rétrocompatibilité + déploiement safe).

**Le Problème :**
- ❌ Spec ignore l'existant (données, code legacy)
- ❌ Sous-estimation des impacts de migration

---

## Pourquoi Les Specs Restent Déconnectées De La Réalité

### Raison 1 : Les PMs Ne Lisent Pas Le Code (Et C'est Normal)

**Le Problème :**

Les Product Managers ne sont pas développeurs. Ils ne peuvent pas lire 200 000 lignes de code pour comprendre l'architecture.

**Résultat :** Ils écrivent des specs basées sur leur compréhension utilisateur, pas sur la réalité technique.

**Citation Product Manager :**
> « Je comprends les besoins utilisateurs. Mais je ne sais pas coder. Comment je suis censé savoir que notre système d'authentification ne supporte qu'une seule méthode ? »

---

### Raison 2 : Les Devs Découvrent Les Contraintes Trop Tard

**Le Problème :**

L'équipe dev découvre les contraintes techniques **après** que la spec soit écrite et validée.

**Workflow typique :**

1. **Semaine 1 :** PM écrit spec (sans analyse technique)
2. **Semaine 2 :** Spec validée par le business
3. **Semaine 3 :** Dev commence à analyser le code (« Ah, c'est impossible »)
4. **Semaine 4 :** Débat sur comment refactoriser
5. **Semaine 6 :** Livraison partielle, loin de la spec initiale

**Frustration des deux côtés :**
- PM : « Pourquoi vous me dites ça maintenant ? »
- Dev : « Pourquoi tu as écrit cette spec sans nous consulter ? »

---

### Raison 3 : Pas D'Analyse Automatisée Du Code Source

**Le Problème :**

Il n'existe pas d'outil pour analyser automatiquement le code et générer des contraintes techniques pour une spec.

**Workflow actuel :**

1. PM écrit spec (vision business)
2. Dev lit spec
3. Dev analyse code manuellement
4. Dev remonte contraintes
5. PM adapte spec
6. Retour étape 2 (itérations multiples)

**Temps perdu :** 1-2 semaines d'allers-retours.

**Question :** Et si l'IA pouvait analyser le code source **avant** d'écrire la spec ?

---

## L'Approche Par IA : Analyser Le Code Pour Générer Des Specs Réalistes

**Le Concept :**

Utiliser l'IA pour analyser votre codebase et générer des spécifications alignées avec l'architecture existante.

### Comment Ça Fonctionne

#### Étape 1 : L'IA Analyse Le Code Source

**Input :** Votre codebase (fichiers, architecture, dépendances).

**Analyse IA :**
- Identifier les modules existants (authentification, paiements, exports, etc.)
- Cartographier l'architecture (services, modèles, contrôleurs, jobs)
- Détecter les contraintes techniques (un seul format d'export ? workflows linéaires ?)
- Identifier les patterns de code (comment les features sont implémentées actuellement)

**Output :** Carte technique de votre codebase.

**Exemple :**

**IA analyse le module d'authentification :**

```
Analyse du code : app/models/user.rb, app/controllers/sessions_controller.rb

Architecture détectée :
- Gem utilisée : Devise
- Méthode d'authentification : database_authenticatable (email + password uniquement)
- Contrainte : Devise ne supporte pas nativement plusieurs méthodes d'authentification simultanées
- Extensions possibles : devise-two-factor (gem tierce pour MFA basique)

Conclusion :
Pour implémenter MFA avec plusieurs méthodes (SMS, TOTP, FIDO2), refactorisation nécessaire :
1. Créer un système de providers d'authentification
2. Gérer états d'authentification partielle (email validé, en attente MFA)
3. Implémenter chaque provider (SMS, TOTP, FIDO2)
4. Tests de sécurité (bypass MFA, attaques timing, etc.)

Estimation : 3-4 semaines (refactorisation + implémentation + tests)
```

**Résultat :** L'IA comprend l'architecture actuelle et identifie les contraintes techniques.

<img src="/assets/images/blog/2026-01-23-ia-analyse-code.svg" alt="IA analyse le code source" width="800" height="450" loading="lazy">

---

#### Étape 2 : Le PM Décrit L'Objectif Métier

**Input PM :** « Je veux ajouter l'authentification multi-facteur pour sécuriser les comptes utilisateurs. »

**L'IA combine :**
- Objectif métier (MFA pour sécurité)
- Contraintes techniques (architecture Devise actuelle)

**L'IA génère une spec réaliste :**

```markdown
# Capability: Authentification Multi-Facteur (MFA)

**Objectif métier :**
Sécuriser les comptes utilisateurs avec MFA.

**Contrainte technique identifiée :**
Architecture actuelle (Devise) ne supporte qu'email + password.
Pour MFA, refactorisation nécessaire.

**Approche proposée par IA :**

Option 1 (Rapide, Limité) :
- Utiliser gem `devise-two-factor`
- Support TOTP uniquement (pas SMS, pas FIDO2)
- Temps : 1 semaine
- Limitation : 1 seule méthode MFA supportée

Option 2 (Complet, Long) :
- Refactoriser système d'authentification
- Créer providers multiples (SMS, TOTP, FIDO2)
- Support méthodes de backup
- Temps : 4 semaines
- Avantage : Architecture flexible pour futures méthodes

**Recommandation IA :**
Option 1 pour MVP. Option 2 pour version complète dans release suivante.

**Issues générées :**
- [AUTH-101] Analyser sécurité devise-two-factor
- [AUTH-102] Implémenter TOTP avec devise-two-factor
- [AUTH-103] UI paramètres MFA
- [AUTH-104] Tests sécurité (bypass, timing attacks)
```

**Résultat :** Spec réaliste, alignée avec l'architecture, avec options et trade-offs explicites.

---

#### Étape 3 : Supervision Humaine (PO/PM/Dev Valident)

**IMPORTANT :** L'IA **ne remplace pas** l'humain. Elle **assiste**.

**Workflow de validation :**

1. **IA génère spec** basée sur analyse du code
2. **PM lit la spec** (« Ok, l'IA a détecté les contraintes techniques »)
3. **Dev valide l'analyse technique** (« Oui, c'est correct. Devise ne supporte pas nativement MFA multi-méthodes »)
4. **PM choisit l'approche** (« On va faire Option 1 pour le MVP »)
5. **Dev affine estimations** (« 1 semaine confirmée, je connais devise-two-factor »)

**L'humain garde le contrôle :**
- ✅ PM choisit l'approche (rapide vs complète)
- ✅ Dev valide l'analyse technique
- ✅ Équipe décide des priorités

**L'IA apporte :**
- ✅ Analyse automatique du code
- ✅ Détection des contraintes techniques
- ✅ Génération de specs réalistes
- ✅ Gain de temps (2 jours d'analyse → 10 minutes)

**Citation Product Manager :**
> « L'IA a analysé le code d'authentification en 2 minutes. Avant, je demandais à un dev de faire cette analyse, ça prenait 2 jours. Maintenant, j'ai les contraintes techniques avant d'écrire la spec. »

<img src="/assets/images/blog/2026-01-23-supervision-humaine.svg" alt="Supervision humaine de l'IA" width="800" height="400" loading="lazy">

---

### Les Trois Piliers De La Génération De Specs Via IA

#### 1. Analyse Automatique Du Code Source

**Le Concept :**

L'IA parcourt votre codebase pour identifier :
- Architecture actuelle (patterns, frameworks, gems/packages)
- Contraintes techniques (un seul format ? workflows linéaires ?)
- Dépendances (quelles parties du code sont impactées par un changement)
- Complexité (temps estimé selon la structure existante)

**Avantages :**
- Pas besoin de lire 200 000 lignes de code manuellement
- Détection automatique des contraintes cachées
- Cartographie technique en quelques minutes

---

#### 2. Génération De Specs Alignées Avec L'Existant

**Le Concept :**

L'IA génère une spec qui :
- Respecte l'architecture actuelle (ou propose une refactorisation si nécessaire)
- Identifie les impacts (quels fichiers modifier, quelles dépendances vérifier)
- Propose plusieurs approches (rapide vs complète, MVP vs version finale)

**Résultat :**
- Specs réalistes (pas de promesses impossibles)
- Trade-offs explicites (temps vs fonctionnalités)
- Estimations basées sur le code réel (pas sur des intuitions)

---

#### 3. Supervision Humaine Obligatoire

**Le Concept :**

L'IA assiste. L'humain décide.

**L'IA ne fait pas :**
- ❌ Choisir l'approche technique à votre place
- ❌ Écrire du code automatiquement sans validation
- ❌ Prendre des décisions métier (MVP vs complet)

**L'humain garde le contrôle :**
- ✅ Valider l'analyse technique de l'IA
- ✅ Choisir l'approche (rapide, complète, hybride)
- ✅ Ajuster les priorités selon le business
- ✅ Réviser la spec générée si nécessaire

**Principe clé :**
> **Maîtriser l'IA et jamais être passif devant elle.**

Vous utilisez l'IA pour gagner du temps sur l'analyse technique. Vous restez maître des décisions.

---

## Exemple Réel : TechOps Platform (SaaS Monitoring)

**TechOps Platform (équipe de 30 personnes, plateforme de monitoring infrastructure)**

*Note : TechOps Platform est une entreprise réelle que nous avons anonymisée sous un nom fictif pour protéger leur confidentialité.*

### Avant IA : Specs Déconnectées, Allers-Retours Interminables

**Configuration :**
- Specs écrites dans Notion par PMs
- Analyse technique manuelle par lead devs
- Allers-retours : 1-2 semaines par spec

**Problème Rencontré :**

**Spec PM :** « Permettre aux utilisateurs d'exporter les métriques au format Prometheus, Grafana JSON, et CSV. »

**Analyse dev (après 3 jours) :**
```ruby
# app/services/metrics_exporter.rb
class MetricsExporter
  def export(metrics)
    # Export CSV uniquement
    # Pas d'abstraction pour multi-formats
    # Prometheus et Grafana JSON = formats complexes (time series, labels, metadata)
  end
end
```

**Conclusion dev :** « Il faut refactoriser le service, créer un système de formatters, implémenter Prometheus et Grafana JSON. 3 semaines minimum. »

**PM :** « Mais j'ai promis ça aux clients pour la release dans 2 semaines. »

**Résultat :** Release retardée de 4 semaines.

**Citation Product Manager TechOps :**
> « On écrivait des specs ambitieuses sans savoir si c'était techniquement faisable. L'équipe dev découvrait les impossibilités après validation. C'était frustrant pour tout le monde. »

---

### Après IA : Analyse Du Code Avant La Spec

**Workflow avec IA :**

1. **PM décrit l'objectif :** « Je veux permettre l'export de métriques vers Prometheus et Grafana. »

2. **IA analyse le code :**

```
Analyse : app/services/metrics_exporter.rb

Architecture détectée :
- Export CSV uniquement
- Pas d'abstraction pour multi-formats
- Métriques stockées en time series dans PostgreSQL

Contrainte :
Prometheus et Grafana JSON nécessitent :
- Conversion time series → format spécifique
- Gestion labels et metadata
- Refactorisation du service d'export

Approches possibles :

Option 1 (Rapide) :
- Utiliser gem `prometheus-client` pour export Prometheus
- Implémenter Grafana JSON manuellement (format simple)
- Garder export CSV existant
- Temps : 1 semaine

Option 2 (Complet) :
- Refactoriser `MetricsExporter` en système de formatters
- Implémenter Prometheus, Grafana JSON, CSV comme formatters
- Architecture extensible pour futurs formats
- Temps : 3 semaines
```

3. **IA génère la spec :**

```markdown
# Capability: Export Multi-Format (Prometheus, Grafana JSON, CSV)

**Objectif :**
Permettre export métriques vers Prometheus et Grafana.

**Contrainte technique :**
Export actuel = CSV uniquement. Refactorisation nécessaire.

**Approche recommandée (Option 1 - MVP) :**
- Export Prometheus via gem `prometheus-client`
- Export Grafana JSON (format simple)
- Conserver export CSV existant
- Temps : 1 semaine

**Issues :**
- [EXPORT-201] Implémenter export Prometheus
- [EXPORT-202] Implémenter export Grafana JSON
- [EXPORT-203] UI sélection format d'export
- [EXPORT-204] Tests formats (Prometheus, Grafana, CSV)

**Approche future (Option 2 - Architecture extensible) :**
Refactoriser en système de formatters pour faciliter ajout de nouveaux formats.
Planifié pour release Q2.
```

4. **PM valide la spec** (« Ok, MVP en 1 semaine, version complète plus tard »)

5. **Dev confirme estimation** (« 1 semaine confirmée »)

**Temps total :** 30 minutes (au lieu de 2 semaines d'allers-retours).

---

**Résultats (Après 6 Mois) :**

**Métrique 1 : Temps d'analyse technique**
- **Avant :** 2 semaines d'allers-retours PM ↔ Dev pour comprendre les contraintes
- **Après :** 30 minutes (IA analyse le code automatiquement)

**Métrique 2 : Specs irréalistes**
- **Avant :** 40% des specs nécessitaient refactorisations non anticipées
- **Après :** 5% (IA détecte les contraintes techniques en amont)

**Métrique 3 : Satisfaction équipe dev**
- **Avant :** Frustration constante (« Les PMs écrivent des specs impossibles »)
- **Après :** Collaboration fluide (« Les specs sont réalistes »)

**Métrique 4 : Time-to-market**
- **Avant :** Releases retardées de 30% en moyenne (surprises techniques)
- **Après :** 95% des releases livrées à temps

**Citation Lead Developer TechOps :**
> « Avant, on perdait 2 semaines par spec à expliquer pourquoi c'était impossible. Maintenant, l'IA analyse le code en 5 minutes et génère une spec réaliste. On passe directement à l'implémentation. »

**Citation Product Manager TechOps :**
> « Je ne sais pas coder. Mais avec l'IA, je peux écrire des specs techniques réalistes. L'IA analyse le code, me dit ce qui est faisable, et je choisis l'approche. C'est révolutionnaire. »

<img src="/assets/images/blog/2026-01-23-techops-before-after.svg" alt="TechOps : Avant vs Après IA" width="800" height="450" loading="lazy">

---

## Maîtriser L'IA, Jamais Être Passif

**Principe fondamental :**

L'IA est un **assistant**, pas un **décideur**.

### Ce Que L'IA Fait Bien

✅ **Analyser 200 000 lignes de code en quelques minutes**
- Identifier architecture actuelle
- Détecter contraintes techniques
- Cartographier dépendances

✅ **Générer des specs réalistes basées sur le code**
- Proposer plusieurs approches (rapide vs complète)
- Estimer complexité selon structure existante
- Identifier impacts (quels fichiers modifier)

✅ **Gagner du temps sur l'analyse technique**
- 2 semaines d'allers-retours → 30 minutes
- Pas besoin de lire le code manuellement
- Détection automatique des contraintes cachées

### Ce Que L'IA Ne Peut Pas Faire (Et Ne Doit Pas Faire)

❌ **Prendre des décisions métier à votre place**
- Choisir entre MVP rapide ou version complète
- Définir les priorités business
- Décider des trade-offs (temps vs fonctionnalités)

❌ **Écrire du code sans supervision**
- L'IA peut générer du code, mais l'humain doit le valider
- Risques : bugs, failles de sécurité, code non maintenable
- Principe : L'IA propose, l'humain valide et ajuste

❌ **Comprendre le contexte métier complet**
- L'IA analyse le code, pas les contraintes business
- Exemple : « On doit livrer en 2 semaines pour un client prioritaire »
- Seul l'humain connaît ces contraintes

### Règles D'Or Pour Maîtriser L'IA

#### Règle 1 : Toujours Valider L'Analyse Technique

**Ne jamais accepter aveuglément les conclusions de l'IA.**

**Workflow :**
1. IA analyse le code et génère une spec
2. **Dev valide l'analyse technique** (« Est-ce que l'IA a bien compris l'architecture ? »)
3. Si validation ✅ → continuer
4. Si erreur ❌ → corriger l'analyse IA

**Exemple :**

IA dit : « Votre système supporte déjà MFA via Devise. »

Dev vérifie : « Non, Devise est configuré en mode basique. Pas de MFA. »

**Correction nécessaire.**

---

#### Règle 2 : L'Humain Choisit L'Approche

**L'IA propose plusieurs options. L'humain décide.**

**Exemple :**

IA propose :
- Option 1 : MVP rapide (1 semaine)
- Option 2 : Version complète (4 semaines)

**PM décide :** « On fait Option 1 maintenant, Option 2 dans la prochaine release. »

**L'IA ne choisit pas. Vous choisissez.**

---

#### Règle 3 : Jamais De Code En Production Sans Review Humaine

**Si l'IA génère du code, l'humain doit le réviser.**

**Risques du code IA non révisé :**
- Bugs subtils
- Failles de sécurité (injection, XSS, etc.)
- Code non maintenable
- Non-respect des conventions de l'équipe

**Règle :** L'IA accélère. L'humain garantit la qualité.

---

#### Règle 4 : Superviser, Pas Subir

**Vous maîtrisez l'IA. L'IA ne vous maîtrise pas.**

**Mindset incorrect :**
> « L'IA a dit qu'il faut refactoriser. Donc on refactorise. »

**Mindset correct :**
> « L'IA a identifié qu'une refactorisation serait nécessaire pour cette feature. Analysons si c'est prioritaire. Peut-être qu'un MVP sans refactorisation suffit. »

**L'humain garde le contrôle stratégique.**

<img src="/assets/images/blog/2026-01-23-maitriser-ia.svg" alt="Maîtriser l'IA, ne pas être passif" width="800" height="400" loading="lazy">

---

## Sinra Intègre L'IA Pour Faciliter La Création De Specs

**Chez Sinra, nous sommes en cours d'intégration d'IA pour assister PO/PM/Dev dans la création de spécifications réalistes.**

### Objectif : Specs Alignées Avec Le Code Réel

**Le Concept :**

Lorsque vous créez une capability ou une issue dans Sinra, l'IA peut :
1. **Analyser votre codebase** (architecture, contraintes, dépendances)
2. **Générer une spec réaliste** (alignée avec l'existant)
3. **Proposer plusieurs approches** (MVP vs complet)
4. **Identifier les impacts** (quels fichiers modifier, quelles dépendances vérifier)

**Résultat :** Specs techniques réalistes, même si vous ne savez pas coder.

---

### Fonctionnalités IA En Cours D'Intégration

#### Fonctionnalité 1 : Analyse Automatique Du Code Pour Capabilities

**Use Case :**

Vous créez une capability « Ajouter export Prometheus ».

**L'IA :**
1. Analyse votre code d'export actuel
2. Détecte les contraintes (« Export CSV uniquement, refactorisation nécessaire »)
3. Génère la spec avec approches possibles (rapide vs complète)

**Vous validez et ajustez.**

---

#### Fonctionnalité 2 : Génération D'Issues Techniques À Partir D'Une Capability

**Use Case :**

Vous avez une capability « Authentification Multi-Facteur ».

**L'IA :**
1. Analyse le code d'authentification actuel
2. Génère les issues techniques nécessaires :
   - [AUTH-101] Refactoriser système d'authentification pour providers multiples
   - [AUTH-102] Implémenter provider TOTP
   - [AUTH-103] Implémenter provider SMS
   - [AUTH-104] UI paramètres MFA
   - [AUTH-105] Tests sécurité

**Vous validez et assignez.**

---

#### Fonctionnalité 3 : Détection Des Impacts Et Dépendances

**Use Case :**

Vous modifiez un module « Paiements ».

**L'IA :**
1. Détecte toutes les parties du code qui dépendent du module Paiements
2. Identifie les impacts potentiels (« Modifier ce service impacte 12 fichiers »)
3. Génère des issues pour gérer les impacts

**Vous évitez les régressions.**

---

### Supervision Humaine Toujours Présente

**IMPORTANT :** L'IA Sinra **assiste**. Vous **décidez**.

**Workflow Sinra avec IA :**

1. **Vous créez une capability** (« Export Prometheus »)
2. **IA analyse le code** (détecte contraintes techniques)
3. **IA génère une spec** (avec options et estimations)
4. **Vous lisez et validez** (« Ok, je choisis Option 1 »)
5. **Dev révise l'analyse technique** (« Correct »)
6. **Vous créez les issues** (manuellement ou via IA)
7. **Équipe implémente** (code révisé par humains)

**L'IA accélère. Vous maîtrisez.**

**Citation Product Manager :**
> « Sinra + IA, c'est comme avoir un développeur qui analyse le code pour moi et me dit ce qui est faisable. Mais je reste maître de mes décisions. »

---

## Les Cinq Signes Que Vos Specs Sont Déconnectées Du Code

### Signe 1 : Les Devs Disent Souvent « C'est Impossible »

Si l'équipe dev répond fréquemment « C'est techniquement impossible avec notre architecture », vos specs ignorent le code réel.

---

### Signe 2 : Estimations Systématiquement Doublées

Si vos estimations initiales sont toujours doublées après analyse technique, vos specs sous-estiment la complexité.

---

### Signe 3 : Découverte De Refactorisations Après Validation

Si vous découvrez des besoins de refactorisation après avoir validé la spec, vous analysez trop tard.

---

### Signe 4 : Allers-Retours PM ↔ Dev Interminables

Si vous passez 2 semaines à discuter de la faisabilité technique, vous manquez d'analyse automatisée.

---

### Signe 5 : Releases Retardées Par « Surprises Techniques »

Si vos releases sont retardées par des contraintes techniques non anticipées, vos specs sont déconnectées du code.

---

## Points D'Action : Générer Des Specs Réalistes Via IA

1. **Identifiez une capability à spécifier.** Choisissez une fonctionnalité complexe.
2. **Demandez à l'IA d'analyser le code concerné.** (Avec Sinra ou un assistant IA de votre choix)
3. **Lisez l'analyse technique générée.** Vérifiez avec un dev que c'est correct.
4. **Choisissez l'approche.** MVP rapide ou version complète ? Vous décidez.
5. **Générez les issues techniques.** Manuellement ou via IA.
6. **Implémentez avec supervision humaine.** Code révisé par l'équipe.

---

## Le Point Clé

**Les specs déconnectées du code génèrent frustration, retards, et gaspillage.**

Entre **specs impossibles**, **sous-estimations**, **refactorisations surprises**, et **allers-retours interminables**, PO/PM et Dev ne parlent pas le même langage technique.

**L'IA analyse le code source pour générer des specs réalistes alignées avec l'architecture existante.**

**Le résultat :**
- ✅ Analyse automatique du code (architecture, contraintes, dépendances)
- ✅ Specs réalistes (pas de promesses impossibles)
- ✅ Trade-offs explicites (rapide vs complet)
- ✅ Supervision humaine (vous maîtrisez l'IA, jamais passif)
- ✅ Gain de temps (2 semaines → 30 minutes)

**Sinra intègre l'IA pour faciliter la création de specs techniques réalistes.**

**Avec supervision humaine. Toujours.**

**Maîtriser l'IA et jamais être passif devant elle.**

---

## Découvrez aussi la série « Problèmes Invisibles »

- **[La Documentation Morte](/documentation/2025/12/24/documentation-morte-notion-confluence.html)** - 127 pages Confluence obsolètes : comment rendre la documentation vivante
- **[Le Glossaire Vivant](/documentation/2026/01/17/glossaire-vivant-mentions-pages-sinra.html)** - Glossaires morts dans Notion : comment utiliser @pages pour un vocabulaire unifié
- **[Le QA Invisible](/qa/2025/12/22/qa-invisible-tests-disperses.html)** - 847 tests dans Excel : comment rendre le QA visible avec Sinra Testings
- **[Le Chaos Du Backlog](/planning/2025/12/26/chaos-backlog-personne-sait-q2.html)** - 537 issues chaotiques : comment organiser le travail par releases et cycles

---

**Prêt à créer des specs réalistes avec l'IA ?** [Découvrez Sinra →](https://app.sinra.dev/users/sign_up)

Découvrez une gestion de projet où vos spécifications sont alignées avec votre code, pas déconnectées de la réalité.
