---

title: "La Communication Dispersée : Pourquoi Vos Décisions Disparaissent Entre Notion, Linear et Discord"
subtitle: "Quand chaque outil capture un fragment de contexte, personne n'a la vue complète : Sinra centralise les discussions là où le travail se passe"
description: "Les équipes utilisent Notion pour les specs, Linear pour les issues, Discord pour les discussions. Résultat : contexte fragmenté, décisions perdues, et synchronisation impossible. Découvrez pourquoi Sinra centralise tout au même endroit."
date: 2025-12-18 09:00:00 +0100
categories: ["Méthodologie"]
excerpt: "Vous discutez d'une feature dans Discord. Vous l'écrivez dans Notion. Vous la trackez dans Linear. Trois mois plus tard, impossible de retrouver pourquoi vous avez pris cette décision. La communication dispersée tue le contexte."
featured_image: /assets/images/blog/2025-12-18-dispersed-communication-featured.png
---

## Le Scénario Familier

**Lundi matin, 10h34.** Un développeur vous demande :

> « Pourquoi on a décidé de changer l'approche d'authentification sur la feature de permissions utilisateur ? »

Vous savez que vous avez eu cette discussion. Mais où ?

**Tentative 1 :** Discord
- Vous cherchez « authentification » dans #engineering
- Vous trouvez 47 mentions sur les 3 derniers mois
- Aucune ne correspond à cette feature spécifique

**Tentative 2 :** Notion
- Vous ouvrez la spec « Permissions Utilisateur v2 »
- La spec décrit le quoi, pas le pourquoi
- Pas de trace de la décision d'architecture

**Tentative 3 :** Linear
- Vous ouvrez l'issue « Implémenter nouveau système auth »
- Les commentaires parlent de bugs et de PRs
- Rien sur la décision initiale

**Tentative 4 :** Slack (peut-être ?)
- Vous cherchez dans les DMs avec le tech lead
- « Authentification » retourne 200+ résultats
- Impossible de retrouver la conversation

**30 minutes plus tard :** Vous abandonnez.

**Réponse finale :**
> « Honnêtement, je ne me souviens plus. On va demander à Sarah. »

**Sarah est en vacances.**

---

## Le Problème de la Communication Dispersée

Voici comment la plupart des équipes tech communiquent aujourd'hui :

### La Stack d'Outils Moderne

**Notion** : Documentation et specs
- « Document de Spec Technique : Permissions Utilisateur »
- « RFC-042 : Migration Architecture Auth »
- « Décisions Produit Q4 2024 »

**Linear** : Suivi des issues et tâches
- « [AUTH-123] Implémenter OAuth2 flow »
- « [AUTH-124] Ajouter gestion refresh tokens »
- Commentaires : liens vers PRs, statuts de bugs

**Discord** : Discussions synchrones
- #engineering : Débats techniques en temps réel
- #product : Discussions fonctionnalités
- #random : Conversations contextuelles importantes... parfois

**Slack** (ou Teams) : Communication d'équipe
- DMs pour décisions rapides
- Channels pour discussions par thème
- Threads pour contexte... qui disparaissent après 90 jours

**GitHub** : Code reviews
- PRs avec discussions techniques
- Issues pour bugs externes
- Discussions pour propositions architecture

**Email** : Formalités et décisions importantes
- Approbations stakeholders
- Décisions budget/timeline
- Échanges avec clients

---

## Ce Qui Se Passe Vraiment

Suivons une feature de sa conception à sa livraison, et voyons où le contexte se perd.

### Semaine 1 : Conception

**Lundi :** Discussion initiale dans Discord
```
@alex : On devrait ajouter un rate limiting sur l'API
@marie : Bonne idée. Par user ou par endpoint ?
@alex : Par user. Sinon un seul user peut DDoS un endpoint.
@thomas : Et pour les webhooks ? On rate limit comment ?
@marie : Ah oui, bon point. Peut-être par IP pour les webhooks ?
```

**Décision importante prise. Capturée : nulle part.**

**Mercredi :** Spec écrite dans Notion
```
# Feature : API Rate Limiting

## Objectif
Implémenter un rate limiting pour protéger l'API contre les abus.

## Spécifications
- 1000 requêtes/heure par user authentifié
- 100 requêtes/heure par IP pour webhooks
- Retourner HTTP 429 quand limite dépassée
```

**Le quoi est documenté. Le pourquoi (user vs endpoint, IP pour webhooks) : disparu.**

**Vendredi :** Issues créées dans Linear
```
[API-045] Implémenter middleware rate limiting
[API-046] Ajouter cache Redis pour compteurs
[API-047] Créer endpoints admin pour monitoring limites
```

**Le lien entre la discussion Discord et ces issues : inexistant.**

---

### Semaine 2 : Développement

**Lundi :** Question du développeur dans Discord
```
@dev1 : Pourquoi on rate limit par user et pas par endpoint ?
@alex : (pas en ligne)
@marie : (en réunion)
```

**Dev1 attend 2 heures. Finalement, décide seul.**

**Mercredi :** Changement d'approche discuté dans un DM Slack
```
@marie → @alex : Les webhooks par IP ça marche pas bien,
plusieurs clients derrière le même proxy CDN
@alex : Ok, on passe à quoi alors ?
@marie : Token dédié pour webhooks avec limite propre ?
@alex : Good. Go.
```

**Décision architecture majeure. Capturée : dans un DM qui disparaîtra dans 3 mois.**

**Vendredi :** Changement reflété... nulle part
- La spec Notion n'est pas mise à jour (« j'oublierai pas de le faire lundi »)
- L'issue Linear dit toujours « rate limit par IP »
- Le code implémente la nouvelle approche (token dédié)

**Résultat : Le code et la documentation divergent. Personne ne sait quelle est la source de vérité.**

---

### Semaine 3 : Review et Questions

**Lundi :** Code review dans GitHub
```
PR #234 : Implement rate limiting middleware

@reviewer : Pourquoi on rate limit par token dédié pour webhooks ?
@dev1 : C'était la décision de Marie, je crois ?
@marie : Oui, parce que les IPs posent problème avec les CDN.
@reviewer : Ok, mais où c'est documenté ?
@dev1 : 🤷
```

**La justification existe... dans les mémoires individuelles.**

**Mercredi :** Nouvelle personne rejoint l'équipe
```
@nouveau : J'ai lu la spec du rate limiting. Question :
pourquoi on traite les webhooks différemment ?

[30 minutes de discussion pour reconstituer le contexte]
```

**Le coût de l'onboarding explose. Chaque nouveau doit réapprendre le contexte dispersé.**

---

### Semaine 4 : Livraison et Aftermath

**Lundi :** La feature est déployée
- Fonctionnalité complète
- Tests passés
- Mais la documentation Notion est obsolète
- Les discussions Discord sont enterrées sous 500+ messages
- Le DM Slack est introuvable
- La PR GitHub est mergée (contexte archivé)

**Mardi :** Question d'un stakeholder
```
@cto : Pourquoi on a changé l'approche de rate limiting
depuis la spec initiale ?

[Personne ne se souvient exactement. On reconstruit
en interrogeant 3 personnes.]
```

---

## Les Coûts Cachés de la Communication Dispersée

### 1. Le Contexte Meurt en Silence

**Le Problème :**
Chaque outil capture un fragment de contexte. Personne n'a la vue complète.

**Conséquences :**
- Les décisions sont prises sans comprendre le pourquoi original
- Les erreurs passées sont répétées (« Pourquoi on avait rejeté cette approche déjà ? »)
- Les débats sont relancés encore et encore (« On avait pas déjà discuté de ça ? »)

**Coût Réel :**
Une équipe de 8 personnes passe **5-8 heures/semaine** à rechercher du contexte perdu.

**Sur un an :** 320 heures = **8 semaines de productivité** perdues juste à chercher.

---

### 2. La Synchronisation Devient Impossible

**Le Problème :**
Quand les discussions sont dispersées, les équipes travaillent avec des versions différentes de la vérité.

**Scénario Réel :**
- Le Product pense que la feature X fonctionne d'une certaine façon (basé sur une discussion Discord)
- L'Engineering implémente différemment (basé sur une discussion Slack)
- QA teste selon la spec Notion (qui n'a jamais été mise à jour)
- Le Customer Success vend une fonctionnalité qui n'existe pas (basé sur un email de roadmap)

**Résultat :** Quatre versions de la vérité coexistent. Personne ne sait laquelle est correcte.

---

### 3. Les Nouvelles Personnes Sont Perdues

**Le Problème :**
L'onboarding nécessite de reconstituer le contexte à partir de 6 sources différentes.

**Processus d'Onboarding Typique :**
```
Nouveau Dev : « Comment fonctionne l'architecture du rate limiting ? »

Mentor : « Ok, lis d'abord la spec Notion. Ensuite cherche
'rate limiting' dans Discord, channel #engineering.
Regarde aussi la PR #234 sur GitHub. Ah, et demande à Marie
pourquoi on a changé l'approche webhooks - je crois qu'elle
en a parlé dans un Slack mais je sais plus où. »

Nouveau Dev : « ... Ok. »
```

**Temps d'onboarding typique sur une feature moyenne : 3-5 jours.**

**Pourquoi ?** Parce que le contexte n'est pas accessible - il est dispersé et enfoui.

---

### 4. Les Décisions Ne Sont Pas Traçables

**Le Problème :**
Impossible de répondre à « Pourquoi on a fait ce choix ? » trois mois après.

**Questions Sans Réponse :**
- « Pourquoi on a choisi PostgreSQL plutôt que MySQL ? »
- « Pourquoi on rate limit par token au lieu de par IP ? »
- « Pourquoi on a refusé d'ajouter l'export PDF à cette release ? »

**Réponse Standard :** « Je crois qu'on en a parlé, mais j'arrive pas à retrouver où. »

**Conséquence :**
- Les mêmes débats reviennent tous les 6 mois
- Les erreurs historiques sont répétées
- Les nouvelles personnes ne comprennent pas les contraintes

---

### 5. La Documentation Ment

**Le Problème :**
La documentation (Notion, Confluence) se désynchronise du code réel.

**Ce Qui Se Passe :**
1. Une décision est prise dans Discord
2. Le code est modifié pour refléter la décision
3. La spec Notion n'est jamais mise à jour
4. 3 mois plus tard, quelqu'un lit la spec et implémente... la mauvaise chose

**Exemple Réel :**
Une équipe a passé 2 semaines à réimplémenter une fonctionnalité selon une spec Notion obsolète - parce que personne ne savait que l'approche avait changé dans un Slack thread 4 mois plus tôt.

---

## Pourquoi Ça Arrive : L'Anatomie de la Dispersion

### Raison 1 : Chaque Outil Optimise Pour Un Usage

**Notion** → Documentation longue
- Pas conçu pour discussions temps réel
- Les commentaires sont cachés et peu visibles
- Mauvais pour le suivi de décisions

**Linear** → Suivi de tâches
- Pas conçu pour débats techniques
- Les commentaires se concentrent sur le statut (« Blocker », « Ready for review »)
- Pas d'espace pour le contexte riche

**Discord** → Communication rapide
- Messages défilent trop vite
- Recherche médiocre
- Impossible de retrouver les discussions importantes 2 semaines après

**Résultat :** Chaque outil fait une chose bien, mais **aucun ne relie le travail au contexte**.

<img src="/assets/images/dispersed-communication.svg" alt="Communication Dispersée" width="800" height="500" loading="lazy">

---

### Raison 2 : Les Discussions Vivent Dans Le Moment

**Le Problème :**
Les outils de chat (Discord, Slack) optimisent pour le présent. Le passé disparaît.

**Cycle de Vie d'une Discussion Discord :**
- **Jour 1 :** Discussion active, décisions prises
- **Jour 7 :** Discussion enterrée sous 300 nouveaux messages
- **Jour 30 :** Discussion accessible uniquement par recherche (si vous savez quoi chercher)
- **Jour 90 :** Discussion archivée (Slack) ou noyée dans 2000+ messages (Discord)

**Résultat :** Le contexte a une durée de vie de 7 jours.

---

### Raison 3 : Personne N'a Le Temps De Synchroniser

**La Théorie :**
« Après chaque décision importante, on mettra à jour la spec Notion et on ajoutera un commentaire dans l'issue Linear. »

**La Réalité :**
```
[Décision prise dans Discord à 16h47 un vendredi]

@alex : « Ok je mettrai à jour la spec lundi. »

[Lundi 9h]

@alex : (8 nouveaux messages Slack, 3 réunions, 2 urgences)
« Merde, j'ai oublié de mettre à jour la spec. »

[La spec n'est jamais mise à jour.]
```

**Pourquoi ?** Parce que synchroniser manuellement entre outils **n'est pas un workflow naturel**.

Les gens n'oublient pas par paresse - ils oublient parce que **le système ne supporte pas la synchronisation**.

---

## L'Approche Sinra : Centraliser Le Contexte Là Où Le Travail Se Passe

### Le Principe : Une Source De Vérité

Au lieu de disperser les discussions entre 6 outils, Sinra centralise **tout le contexte au même endroit que le travail**.

**Comment ?** Via le **commentary**.

---

### Le Commentary : Discussions Liées au Travail

**Qu'est-ce que c'est ?**
Le commentary est un espace de discussion riche attaché à chaque issue et fonctionnalité dans Sinra.

**Caractéristiques :**
- Markdown complet (formatage, code blocks, images)
- Mentions (@user)
- Notifications temps réel
- Historique complet préservé
- Lié directement à l'issue ou fonctionnalité

**Différence Clé :** Les discussions ne flottent pas dans Discord - elles **vivent avec le travail**.

<img src="/assets/images/centralized-commentary.svg" alt="Commentary Centralisé" width="800" height="500" loading="lazy">

---

### Anatomie d'une Feature Avec Commentary Centralisé

Reprenons la feature de rate limiting, cette fois avec Sinra.

#### Semaine 1 : Conception

**Étape 1 :** Créer la fonctionnalité « API Rate Limiting » dans Sinra

**Étape 2 :** Discuter directement dans le commentary de la fonctionnalité

```markdown
@alex : On devrait rate limit par user ou par endpoint ?

@marie : Par user. Sinon un seul user malveillant peut DDoS
un endpoint critique et impacter tout le monde.

@thomas : Et pour les webhooks ? On rate limit comment ?

@alex : Les webhooks sont appelés par nos clients depuis
leurs serveurs. Par user ne marche pas ici.

@marie : Par IP alors ?

@thomas : Attention, beaucoup de clients sont derrière des
CDN (Cloudflare, etc.). Une seule IP peut représenter 100+ clients.

@marie : Ok, token dédié pour webhooks alors. Chaque client
a un token webhook avec limite séparée. Ça règle le problème CDN.

@alex : ✅ Parfait. Je résume dans la description.
```

**Résultat :**
- ✅ La décision est capturée **dans le contexte de la feature**
- ✅ Le raisonnement (pourquoi token plutôt qu'IP) est préservé
- ✅ Tout est searchable
- ✅ Aucune étape de synchronisation manuelle

---

#### Semaine 2 : Développement

**Étape 3 :** Créer les issues sous la fonctionnalité

- [API-045] Implémenter middleware rate limiting
- [API-046] Ajouter cache Redis pour compteurs
- [API-047] Créer endpoints admin pour monitoring limites

**Étape 4 :** Discussions techniques dans le commentary des issues

```markdown
[Issue API-045 : Implémenter middleware rate limiting]

@dev1 : Je commence l'implémentation. Question : on stocke
les compteurs en Redis avec quelle clé ?

@alex : Utilise `rate_limit:{user_id}:{hour_timestamp}`
pour les users. Pour les webhooks : `rate_limit:webhook:{token}:{hour_timestamp}`.

@dev1 : TTL de 2 heures sur les clés ?

@alex : Oui, largement suffisant. Et ça économise la RAM.

@dev1 : ✅ Merci, c'est parti.
```

**Résultat :**
- Les décisions techniques sont capturées **dans l'issue concernée**
- Le futur vous (ou un collègue) comprendra pourquoi cette structure de clé Redis

---

#### Semaine 3 : Changement d'Approche

**Étape 5 :** Découverte d'un problème avec l'approche par IP

```markdown
[Fonctionnalité : API Rate Limiting - Commentary]

@marie : Problème avec le rate limiting par IP pour webhooks.
On a 3 clients derrière le même IP Cloudflare qui se plaignent
de rate limiting injuste.

@alex : Ah, le scénario que Thomas avait mentionné. Ok, on
passe au token dédié webhook comme discuté.

@dev1 : Je mets à jour l'implémentation. Ça change quoi
concrètement ?

@marie : Au lieu de rate limit par IP, chaque client webhook
obtient un token unique avec limite propre. Ça isole les clients.

@dev1 : ✅ Compris. Je crée une issue pour ça.
```

**Nouvelle issue créée :**
```markdown
[API-048] Implémenter token dédié pour webhooks

Description (auto-générée depuis commentary) :
Remplacer le rate limiting par IP par un système de token
dédié pour les webhooks. Raison : plusieurs clients peuvent
partager la même IP via CDN, causant des rate limits injustes.

Approche : Générer un token webhook unique par client avec
limite configurée séparément.

Référence discussion : [Lien vers commentary de la fonctionnalité]
```

**Résultat :**
- Le changement d'approche est documenté **dans le contexte**
- L'issue nouvellement créée **hérite du contexte**
- Pas de désynchronisation entre code et documentation

---

#### Semaine 4 : Review et Onboarding

**Étape 6 :** Code review

```markdown
[PR #234 : Implement rate limiting middleware]

@reviewer : Pourquoi on rate limit par token pour webhooks
et par user pour l'API normale ?

@dev1 : [Lien vers commentary de la fonctionnalité API Rate Limiting]
Tout le raisonnement est là, semaine 1-2.

@reviewer : Ah parfait, je vois. Approuvé.
```

**Étape 7 :** Nouveau membre d'équipe

```markdown
[Fonctionnalité : API Rate Limiting - Commentary]

@nouveau : Salut, je viens d'arriver. J'essaie de comprendre
le rate limiting. Question : pourquoi token pour webhooks ?

@marie : Lis le commentary au-dessus, on a toute la discussion
initiale + le changement d'approche avec justification.

@nouveau : Parfait, c'est super clair. Merci !

[Temps écoulé : 5 minutes.]
```

---

### Les Trois Bénéfices de la Centralisation

#### 1. Le Contexte Est Préservé

**Avant (Communication Dispersée) :**
- Discussion dans Discord (perdue après 2 semaines)
- Décision dans Slack DM (disparue après 90 jours)
- Spec Notion (obsolète après 1 changement)
- Code sans contexte

**Après (Sinra Commentary) :**
- Discussion dans le commentary de la fonctionnalité
- Décision visible 3 mois, 1 an, 5 ans après
- Spec synchronisée avec les discussions
- Code lié au contexte

**Résultat :** Le futur vous peut comprendre **pourquoi**, pas seulement **quoi**.

---

#### 2. Les Décisions Sont Traçables

**Question :** « Pourquoi on utilise des tokens webhook au lieu de rate limiter par IP ? »

**Avant :** 30 minutes de recherche dans 4 outils, demander à 2 personnes, espérer que quelqu'un se souvienne.

**Après :** Ouvrir la fonctionnalité « API Rate Limiting », lire le commentary. **2 minutes.**

**Avantage :**
- ✅ Réponses instantanées
- ✅ Nouvelles personnes autonomes
- ✅ Débats historiques ne sont pas relancés
- ✅ Erreurs passées ne sont pas répétées

---

#### 3. La Synchronisation Est Automatique

**Avant (Workflow Manuel) :**
1. Discuter dans Discord
2. Prendre une décision
3. « Je vais mettre à jour la spec Notion »
4. Oublier
5. Désynchronisation

**Après (Workflow Naturel) :**
1. Discuter dans le commentary de la fonctionnalité
2. Prendre une décision
3. ✅ C'est déjà synchronisé (pas d'étape 3-5)

**Pourquoi ça marche ?**
Parce que **la discussion et la documentation sont au même endroit**.

Vous ne synchronisez pas - vous discutez **dans le contexte du travail**.

<img src="/assets/images/centralized-workflow.svg" alt="Workflow Centralisé" width="900" height="500" loading="lazy">

---

## Exemple Réel : CloudBridge (SaaS Infrastructure)

**CloudBridge (équipe de 12 personnes, plateforme d'infrastructure cloud)**

*Note : CloudBridge est une entreprise réelle que nous avons anonymisée sous un nom fictif pour protéger leur confidentialité.*

### Avant Sinra : Communication Dispersée

**Stack d'outils :**
- Notion : Specs et documentation
- Linear : Issues et tâches
- Discord : Discussions engineering
- Slack : Communication Product + Business
- Email : Décisions stakeholders

**Problèmes Rencontrés :**
- **Temps de recherche :** 6-8 heures/semaine par personne pour retrouver contexte
- **Onboarding :** 2 semaines pour qu'un nouveau dev soit productif
- **Décisions répétées :** 3 fois le même débat « PostgreSQL vs MySQL » en 6 mois (personne ne se souvenait du premier)
- **Désynchronisation :** La spec Notion de la feature « Multi-region Deployment » était obsolète de 3 mois
- **Frustration équipe :** « J'ai l'impression de passer plus de temps à chercher qu'à coder »

**Incident Révélateur :**
Un dev a réimplémenté une fonctionnalité mal selon une spec Notion obsolète. La vraie approche avait été décidée dans un Slack thread 4 mois avant, mais :
- Le thread Slack était archivé
- La spec Notion n'avait jamais été mise à jour
- L'issue Linear ne contenait aucun contexte

**Temps perdu :** 3 semaines de développement inutile.

---

### Après Sinra : Commentary Centralisé

**Workflow :**
- Toutes les discussions techniques dans le commentary des fonctionnalités
- Toutes les décisions capturées au même endroit que le travail
- Zéro synchronisation manuelle entre outils

**Résultats (Après 3 Mois) :**
- **Temps de recherche :** Réduit de 85% (6-8h/semaine → 1h/semaine)
- **Onboarding :** 3 jours pour nouvelle personne (vs 2 semaines)
- **Décisions répétées :** 0 (l'historique est accessible)
- **Désynchronisation :** 0 (pas de docs externes à maintenir)
- **Moral équipe :** Amélioré significativement

**Citation Lead Developer :**
> « Avant, je passais 30% de mon temps à chercher pourquoi on avait fait tel choix. Maintenant, j'ouvre la fonctionnalité, je lis le commentary, j'ai ma réponse en 2 minutes. Ça change tout. »

**Citation Product Manager :**
> « Fini le 'je crois qu'on en a parlé dans Discord mais je sais plus où'. Tout est là, avec le contexte. Je peux onboard des nouveaux en leur montrant 3-4 fonctionnalités clés et ils comprennent tout. »

<img src="/assets/images/before-after-sinra-communication.svg" alt="Avant Après Sinra" width="900" height="550" loading="lazy">

---

## Notion + Linear + Discord vs. Sinra : Comparaison

| **Aspect** | **Stack Multi-Outils** | **Sinra avec Commentary** |
|------------|------------------------|---------------------------|
| **Discussion initiale** | Discord (#engineering) | Commentary de la fonctionnalité |
| **Décisions capturées** | Oubliées ou dispersées | Préservées dans commentary |
| **Synchronisation** | Manuelle (souvent oubliée) | Automatique (même endroit) |
| **Recherche contexte** | 4-6 outils à fouiller | 1 outil, 1 endroit |
| **Temps recherche** | 6-8h/semaine | <1h/semaine |
| **Onboarding nouveau** | 1-2 semaines | 2-3 jours |
| **Documentation obsolète** | Fréquent | Impossible (pas de docs externes) |
| **Traçabilité décisions** | ❌ | ✅ |
| **Visibilité temps réel** | ❌ (dispersé) | ✅ (centralisé) |

---

## Les Cinq Signes Que Votre Communication Est Dispersée

### Signe 1 : « Je Crois Qu'On En A Parlé Mais Je Sais Plus Où »

Si cette phrase revient plusieurs fois par semaine, votre contexte est fragmenté.

### Signe 2 : L'Onboarding Prend 2+ Semaines

Si les nouvelles personnes passent leur première semaine à « lire les docs Notion, fouiller Discord, et poser 100 questions », votre contexte n'est pas accessible.

### Signe 3 : Vous Relancez Les Mêmes Débats Tous Les 6 Mois

« Pourquoi on a choisi PostgreSQL déjà ? » (pour la 3ème fois)

Si les décisions historiques ne sont pas traçables, vous perdez du temps à redébattre.

### Signe 4 : Votre Documentation Ment

Si la spec Notion dit une chose mais le code fait autre chose, vos outils ne sont pas synchronisés.

### Signe 5 : Vous Dites « Faudrait Mettre À Jour La Doc »

Si vous finissez régulièrement des discussions par « je mettrais la doc à jour » (mais vous ne le faites jamais), votre workflow de synchronisation est cassé.

---

## Comment Implémenter La Centralisation Dans Sinra

### Étape 1 : Créer Fonctionnalités Pour Vos Features

Au lieu de specs Notion séparées, chaque feature devient une fonctionnalité dans Sinra.

**Exemple :**
- Fonctionnalité : « Authentification à Deux Facteurs »
- Description : Objectif, exigences, critères d'acceptation
- Issues : Tâches dev, design, QA
- Commentary : Toutes les discussions techniques

---

### Étape 2 : Discuter Dans Le Commentary, Pas Discord

**Règle Simple :**
- ❌ Discussion technique dans Discord
- ✅ Discussion technique dans le commentary de la fonctionnalité/issue

**Pourquoi ?**
Discord = synchrone, éphémère, non lié au travail
Commentary = asynchrone, permanent, lié au travail

**Note :** Discord reste utile pour le social, l'urgence, le random. Mais **pas pour les décisions techniques**.

---

### Étape 3 : Capturer Les Décisions Dans Le Commentary

Quand vous prenez une décision importante :
- Écrivez-la dans le commentary
- Taguez les personnes concernées
- Expliquez le **pourquoi**, pas juste le **quoi**

**Mauvais Exemple :**
> « On va utiliser Redis. »

**Bon Exemple :**
> « On va utiliser Redis pour les compteurs de rate limiting parce que :
> 1. Besoin de TTL automatique (expire après 2h)
> 2. Besoin de performance (<10ms latence)
> 3. Pas besoin de persistence (ok si reboot)
> Alternatives considérées : PostgreSQL (trop lent), in-memory (pas partagé entre serveurs). »

**Résultat :** Le futur vous (ou un collègue) comprend pourquoi Redis, pas juste qu'on utilise Redis.

---

### Étape 4 : Lier Les PRs Au Commentary

Quand vous créez une PR, liez-la à l'issue Sinra.

**Dans la description de PR :**
```markdown
Implémente le rate limiting pour webhooks avec token dédié.

Contexte et décisions : [Lien vers fonctionnalité API Rate Limiting]
```

**Résultat :** Les reviewers ont le contexte complet sans chercher.

---

### Étape 5 : Onboarder En Montrant Le Commentary

Quand un nouveau rejoint, au lieu de dire « lis les 40 docs Notion », montrez 5-6 fonctionnalités clés et dites :

> « Lis le commentary de ces fonctionnalités. Tu comprendras comment on travaille, comment on prend des décisions, et pourquoi on a fait les choix architecturaux. »

**Temps d'onboarding :** Réduit de 70%.

---

## Objections Courantes (Et Réponses)

### Objection 1 : « Mais Discord est plus rapide pour discuter en temps réel »

**Réponse :** Oui, Discord est plus rapide **dans l'instant**. Mais les discussions importantes ont besoin de **durabilité**, pas de rapidité.

**Compromis :**
- Discussions rapides / urgentes → Discord ok
- Décisions techniques / architecture → Commentary Sinra

Si c'est important enough pour impacter le code, c'est important enough pour être dans Sinra.

---

### Objection 2 : « Les commentaires Linear/GitHub marchent bien pour nous »

**Réponse :** Les commentaires Linear/GitHub sont bons pour le suivi de statut (« Blocker », « Ready for review »).

Ils sont **mauvais pour le contexte riche** :
- Formatage limité
- Pas de visibilité multi-issues
- Pas de lien fonctionnalité → issues
- Pas de vue unifiée

Sinra commentary offre un espace de discussion riche **intégré à la structure du travail**.

---

### Objection 3 : « Notre équipe aime Discord, on veut pas changer »

**Réponse :** Gardez Discord pour le social, les blagues, les questions rapides.

Mais **capturez les décisions importantes dans Sinra**.

**Workflow Hybride :**
1. Discussion rapide dans Discord
2. Résumé + décision dans Sinra commentary
3. Lien Discord → Sinra pour traçabilité

**Temps requis :** 2 minutes pour résumer. Économise 30 minutes de recherche future.

---

### Objection 4 : « Ça fait Un Outil De Plus À Apprendre »

**Réponse :** Non, ça fait **5 outils de moins**.

**Avant :**
- Notion (specs)
- Linear (issues)
- Discord (discussions)
- Slack (communications)
- GitHub (code + discussions)
- Email (décisions formelles)

**Après :**
- Sinra (issues + fonctionnalités + discussions + releases)
- GitHub (code uniquement)
- Slack/Discord (social + urgent)

**Résultat :** Moins d'outils, pas plus.

---

## Le Changement Culturel : De La Dispersion À La Centralisation

Passer à Sinra commentary nécessite un changement d'habitude :

### Ancienne Habitude (Communication Dispersée)
- Discuter dans Discord
- Documenter dans Notion (parfois)
- Tracker dans Linear
- Espérer que tout soit synchronisé

### Nouvelle Habitude (Centralisation)
- Créer fonctionnalité dans Sinra
- Discuter dans commentary
- Capturer décisions dans commentary
- Tout est déjà synchronisé

**Ce qui aide le changement :**
- Notifications temps réel (comme Discord)
- Markdown riche (comme Notion)
- Lié au travail (comme Linear)
- Une seule source de vérité

---

## Points d'Action : Centraliser Votre Communication

1. **Identifiez vos 3 prochaines features.** Créez des fonctionnalités dans Sinra.
2. **Déplacez les discussions techniques dans le commentary.** Arrêtez de perdre le contexte dans Discord.
3. **Capturez les décisions importantes.** Écrivez le pourquoi, pas juste le quoi.
4. **Liez tout.** PRs → Issues → Fonctionnalités. Le contexte doit être accessible.
5. **Onboardez en montrant le commentary.** Les nouvelles personnes apprennent en lisant, pas en demandant 100 questions.

---

## Le Point Clé

**La communication dispersée tue le contexte.**

Quand vos discussions sont dans Discord, vos specs dans Notion, et vos issues dans Linear, **personne n'a la vue complète**.

**Le résultat :**
- Contexte perdu
- Décisions non traçables
- Synchronisation impossible
- Onboarding cauchemardesque

**Sinra centralise tout au même endroit que le travail.**

Les discussions, les décisions, les issues, les fonctionnalités, les releases - **une source de vérité**.

**Le futur vous dira merci.**

---

**Prêt à arrêter de chercher votre contexte dans 6 outils différents ?** [Démarrez un essai gratuit de Sinra →](https://app.sinra.dev/users/sign_up)

Découvrez une gestion de projet où les discussions vivent avec le travail, pas dans des channels Discord enfouis.
