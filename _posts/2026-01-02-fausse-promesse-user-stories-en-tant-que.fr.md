---
layout: post
title: "La Fausse Promesse Des User Stories : Pourquoi « En Tant Que » Ne Dit Pas Quoi Faire"
subtitle: "Entre format imposé « En tant que utilisateur, je veux... », stories trop vagues et 3 réunions pour comprendre ce qu'il faut vraiment coder, personne ne sait quoi faire : Sinra utilise des issues directes"
description: "Les user stories en format Agile sont trop vagues. Résultat : développeurs perdus, 4h de grooming par semaine, écart entre « ce qui est écrit » et « ce qu'il faut faire ». Découvrez comment Sinra utilise des issues directes et actionnables."
date: 2026-01-02 09:00:00 +0100
lang: fr
category: Planning
excerpt: "Le dev lit la user story : « En tant qu'utilisateur, je veux me déconnecter afin de sécuriser mon compte. » Il demande : « OK mais concrètement, je fais quoi ? » Bienvenue dans le monde des user stories vagues."
permalink: /planning/:year/:month/:day/fausse-promesse-user-stories-en-tant-que.html
featured_image: /assets/images/blog/2026-01-02-user-stories-featured.png
---

## La User Story Qui Ne Dit Rien

**Lundi matin. Sprint planning. Équipe de 6 développeurs.**

Product Owner : « OK, on passe à la story suivante. »

**Le PO lit la story :**

```
USER-347: En tant qu'utilisateur, je veux pouvoir me déconnecter
de l'application afin de sécuriser mon compte.

Critères d'acceptation :
- L'utilisateur peut se déconnecter
- La session est terminée après déconnexion
- L'utilisateur est redirigé vers la page de login
```

PO : « Voilà. C'est clair. Questions ? »

Dev 1 : « Euh... oui. Concrètement, je fais quoi ? »

PO : « Tu ajoutes un bouton de déconnexion. »

Dev 1 : « OK. Mais où ? Dans le header ? Dans un menu dropdown ? Dans les paramètres utilisateur ? »

PO : « Ah... bonne question. Je dirais... dans le header. »

Dev 2 : « Et côté backend, on fait comment ? On invalide juste le token JWT ? On supprime le refresh token ? On garde l'historique de session ? »

PO : « Euh... je ne sais pas. C'est vous les développeurs, non ? »

Dev 3 : « Et si l'utilisateur a plusieurs sessions actives ? On déconnecte juste la session en cours ou toutes les sessions ? »

PO : « Bonne question. Je ne sais pas. »

Dev 1 : « Et on affiche une confirmation avant de déconnecter ? Ou on déconnecte directement ? »

PO : « Il faudrait une confirmation, je pense. »

Dev 2 : « Et si l'API est down pendant la déconnexion ? On déconnecte quand même côté front ? »

PO : « Euh... »

Dev 3 : « Et on track l'événement de déconnexion dans Analytics ? »

PO : « Probablement oui. »

Dev 1 : « Et niveau design, on a une maquette ? »

PO : « Non, pas encore. »

**45 minutes après :**

PO : « OK, je vais clarifier tout ça avec le designer et l'équipe. On reviendra sur cette story au prochain planning. »

**La story retourne dans le backlog.**

Dev 1 (en aparté) : « La story disait « En tant qu'utilisateur, je veux me déconnecter ». Mais elle ne disait pas **comment**, **où**, ni **quoi faire exactement**. »

Dev 2 : « Bienvenue dans le monde des user stories. »

![User story vague générant 45 minutes de questions](/assets/images/blog/2026-01-02-user-stories-vague-meeting.svg)

---

## Le Problème Des User Stories

Les **user stories** au format Agile (« En tant que X, je veux Y afin de Z ») sont censées décrire le besoin utilisateur.

**Mais elles ne disent jamais quoi faire concrètement.**

**Résultat catastrophique :**
- Stories trop vagues pour être développées
- 3-4 réunions de clarification par story
- Grooming sessions interminables
- Écart massif entre « ce qui est écrit » et « ce qu'il faut vraiment coder »
- Développeurs perdus

### Les Cinq Symptômes Du Syndrome User Story Vague

#### 1. « OK Mais Concrètement, Je Fais Quoi ? » (La Story Ne Dit Pas Quoi Développer)

**Le Scénario :**
Vous lisez une user story. Elle décrit un besoin utilisateur en 2 phrases. Mais vous ne savez pas quoi coder.

**Exemple réel :**

**User story typique :**

```
USER-521: En tant qu'administrateur, je veux gérer les permissions
des utilisateurs afin de sécuriser l'accès aux données sensibles.

Critères d'acceptation :
- Les administrateurs peuvent modifier les permissions
- Les changements sont sauvegardés
- Les utilisateurs sans permission ne peuvent pas accéder aux données
```

**Le développeur lit la story :**

Dev : « OK... mais concrètement, je fais quoi ? »

**Les questions qui émergent :**

1. **Interface :** Table avec checkboxes ? Dropdown ? Toggle switches ? Modal ?
2. **Granularité :** Permissions par rôle ? Par utilisateur ? Par groupe ? Par ressource ?
3. **Backend :** Nouveau modèle de permissions ? Migration DB ? API REST ou GraphQL ?
4. **Validation :** Qui peut modifier quelles permissions ? Super admin seulement ?
5. **UI/UX :** Page dédiée ? Section dans paramètres ? Inline editing ?
6. **Scope :** Juste lecture/écriture ? Ou permissions granulaires (create, read, update, delete, admin) ?

**Aucune de ces questions n'a de réponse dans la user story.**

**Résultat :** 3 réunions de clarification avant de pouvoir commencer à coder.

![User story générant 15 questions sans réponses](/assets/images/blog/2026-01-02-user-stories-questions-unanswered.svg)

**Le Problème :**
- ❌ User story décrit le « quoi » (besoin utilisateur)
- ❌ Mais pas le « comment » (solution technique)
- ❌ Écart massif entre story et code
- ❌ Développeurs bloqués

**Citation développeur :**
> « Je lis la user story. Je comprends le besoin. Mais je ne sais pas quoi coder. La story dit "gérer les permissions", mais elle ne dit pas si c'est un CRUD complet, un simple toggle, ou une matrice de permissions complexe. »

**Résultat :** Les user stories ne sont pas actionnables.

---

#### 2. Grooming Interminable (4h Par Semaine Pour Transformer Stories En Tâches)

**Le Scénario :**
Votre équipe passe 4 heures par semaine en « backlog grooming » pour transformer les user stories vagues en tâches développables.

**Chronologie typique d'une session de grooming :**

**14h00 :** Début du grooming. 8 stories à groomer.

**14h05 :** Story 1 : « En tant qu'utilisateur, je veux rechercher des produits. »

**Questions :**
- Recherche full-text ou par filtres ?
- Quels champs sont searchables ?
- Résultats paginés ? Combien par page ?
- Autocomplete ? Suggestions ?
- Recherche en temps réel ou avec bouton submit ?

**14h45 :** 40 minutes après, story enfin clarifiée. On découpe en 5 sous-tâches.

**14h50 :** Story 2 : « En tant qu'admin, je veux exporter des rapports. »

**Questions :**
- Format : CSV ? Excel ? PDF ? JSON ?
- Quels rapports ? Ventes ? Utilisateurs ? Analytics ?
- Export synchrone ou asynchrone ?
- Filtres avant export ?
- Email avec fichier ou download direct ?

**15h30 :** Story clarifiée. Découpée en 4 sous-tâches.

**15h35 :** Story 3 : « En tant qu'utilisateur, je veux partager du contenu. »

**Questions :**
- Partage par email ? Lien public ? Réseaux sociaux ?
- Permissions : qui peut partager ? Qui peut voir ?
- Preview du contenu partagé ?
- Tracking : savoir qui a cliqué sur le lien ?

**16h15 :** Story clarifiée.

**16h20 :** Story 4...

**18h00 :** Fin du grooming. **4 heures pour groomer 8 stories.**

**L'équipe est épuisée.**

![4 heures de grooming pour 8 user stories](/assets/images/blog/2026-01-02-user-stories-grooming-marathon.svg)

**Le Problème :**
- ❌ 4h de grooming par semaine (20% du temps de l'équipe)
- ❌ Stories doivent être « grossies » puis « affinées » puis « découpées »
- ❌ Temps perdu à clarifier ce qui aurait dû être clair dès le départ
- ❌ Équipe épuisée avant même de coder

**Statistique Réelle :**

Étude sur 67 équipes Agile :
- **Temps moyen de grooming :** 4.2h par semaine
- **Pourcentage de stories modifiées après grooming :** 78%
- **Nombre moyen de clarifications par story :** 3.4

**Citation Scrum Master :**
> « On passe nos vendredis après-midi à groomer le backlog. On lit des stories vagues, on pose 15 questions, on clarifie, on découpe. Puis la semaine suivante, on recommence. C'est épuisant. »

**Résultat :** Le grooming consomme 20% du temps de l'équipe.

---

#### 3. L'Écart Entre « Ce Qui Est Écrit » Et « Ce Qu'Il Faut Vraiment Faire »

**Le Scénario :**
La user story dit une chose. Mais ce qu'il faut vraiment développer est complètement différent.

**Exemple réel :**

**Ce qui est écrit (user story) :**

```
USER-892: En tant qu'utilisateur, je veux recevoir des notifications
afin d'être informé des nouveaux messages.
```

**Ce qu'il faut VRAIMENT faire (après clarification) :**

1. **Backend :**
   - Créer table `notifications` (id, user_id, type, content, read, created_at)
   - Créer API POST `/notifications` pour créer une notification
   - Créer API GET `/notifications` pour lister les notifications
   - Créer API PATCH `/notifications/:id/read` pour marquer comme lu
   - Ajouter trigger sur `messages` pour créer notification automatiquement
   - Implémenter system de batching (max 1 notif par minute pour éviter spam)

2. **Frontend :**
   - Créer composant NotificationBell avec badge de count
   - Créer dropdown NotificationList
   - Implémenter polling toutes les 30s ou WebSocket pour real-time
   - Ajouter son de notification (avec permission navigateur)
   - Ajouter page /notifications pour voir historique complet
   - Implémenter "mark all as read"

3. **Design :**
   - Maquettes pour notification bell, dropdown, liste
   - États vide, 1 notif, 10+ notifs
   - Animations (badge pulse, slide-in)

4. **Infrastructure :**
   - Setup Redis pour cache de notifications
   - Setup job queue pour envoi asynchrone
   - Monitoring : taux de livraison, latence

5. **Tests :**
   - Tests unitaires backend (7 fichiers)
   - Tests E2E frontend (4 scénarios)
   - Tests de performance (10k notifications)

**Écart entre la story (2 lignes) et l'implémentation réelle (50+ tâches).**

![User story 2 lignes vs 50 tâches réelles](/assets/images/blog/2026-01-02-user-stories-gap-reality.svg)

**Le Problème :**
- ❌ User story : 2 lignes vagues
- ❌ Implémentation réelle : 50 tâches concrètes
- ❌ Écart découvert seulement pendant le développement
- ❌ Estimations complètement fausses

**Citation développeur :**
> « La story disait "recevoir des notifications". Ça semblait simple. Puis on a réalisé qu'il fallait créer toute l'infrastructure, le composant UI, les permissions navigateur, le polling, le caching... La story a pris 3 semaines au lieu de 2 jours. »

**Résultat :** Les user stories cachent la complexité réelle.

---

#### 4. « Il Faudrait Regroomer Cette Story » (Stories Retravaillées 3 Fois)

**Le Scénario :**
Une story est groomée. Puis regroomée. Puis re-regroomée. Parce qu'elle n'est jamais assez claire.

**Chronologie typique d'une story :**

**Semaine 1 : Création de la story**

PO crée la story :

```
USER-234: En tant qu'utilisateur, je veux filtrer les résultats.
```

**Semaine 2 : Premier grooming**

Équipe : « Filtrer comment ? Par quoi ? »

PO : « Ah oui, il faut préciser. »

**Story mise à jour :**

```
USER-234: En tant qu'utilisateur, je veux filtrer les résultats
par catégorie, prix et date afin de trouver ce que je cherche.

Critères d'acceptation :
- Filtres disponibles : catégorie, prix, date
- Les résultats se mettent à jour quand on applique un filtre
```

**Semaine 3 : Deuxième grooming**

Dev : « OK mais techniquement, on fait comment ? Dropdown ? Checkboxes ? Range slider pour le prix ? »

PO : « Euh... bonne question. Je vais demander au designer. »

**Story mise à jour :**

```
USER-234: En tant qu'utilisateur, je veux filtrer les résultats
avec des dropdowns (catégorie, date) et un range slider (prix).
```

**Semaine 4 : Troisième grooming**

Dev : « Et les filtres sont combinés avec AND ou OR ? »

PO : « Comment ça ? »

Dev : « Si je sélectionne Catégorie=Électronique ET Prix=0-100, est-ce que je veux les produits qui sont électronique ET dans cette gamme de prix ? Ou électronique OU dans cette gamme ? »

PO : « Ah... AND. »

Dev : « Et quand on change un filtre, on recharge toute la page ou juste les résultats ? »

PO : « Juste les résultats. »

Dev : « Donc on fait une requête API à chaque changement de filtre ? Ça peut être beaucoup de requêtes. »

PO : « On met un debounce alors. »

**Story mise à jour pour la 3ème fois.**

**Semaine 5 : Story enfin développable**

**Mais l'équipe a passé 3 sessions de grooming (3h au total) sur cette seule story.**

![Story regroomée 3 fois avant d'être développable](/assets/images/blog/2026-01-02-user-stories-regrooming-loop.svg)

**Le Problème :**
- ❌ Story créée trop vague
- ❌ Groomée 3 fois
- ❌ 3h de réunions pour une story
- ❌ Frustration : « Pourquoi c'est pas clair dès le départ ? »

**Citation Scrum Master :**
> « On a des stories qui sont groomées, puis regroomées au sprint suivant parce qu'elles ne sont toujours pas assez claires. Puis on les regroome une 3ème fois. À ce moment-là, on a passé plus de temps à groomer qu'à développer. »

**Résultat :** Les stories sont retravaillées en boucle.

---

#### 5. Le Développeur Devine (« Le PO N'Est Pas Dispo, Je Fais Au Feeling »)

**Le Scénario :**
La user story est vague. Le PO n'est pas disponible. Le développeur devine et code ce qu'il pense être juste.

**Exemple réel :**

**User story :**

```
USER-445: En tant qu'utilisateur, je veux éditer mon profil.
```

**Le développeur lit la story :**

Dev : « OK, éditer le profil. Mais quels champs ? »

**Le dev regarde les critères d'acceptation :**

```
Critères d'acceptation :
- L'utilisateur peut éditer son profil
- Les changements sont sauvegardés
```

Dev : « Ça ne m'aide pas. »

**Le dev essaie de contacter le PO :**

Slack : « @PO : USER-445, quels champs sont éditables dans le profil ? »

**2 heures après. Pas de réponse.**

Dev : « Bon, le PO est occupé. Je vais faire au feeling. »

**Le dev devine :**

- Champs éditables : Nom, Email, Photo de profil, Bio
- Page dédiée /profile/edit avec formulaire
- Bouton "Sauvegarder" et "Annuler"
- Validation : email valide, nom non vide

**Le dev code pendant 2 jours.**

**Sprint Review :**

PO : « Ah non, ce n'est pas ça. L'édition devait être inline, pas sur une page dédiée. Et il fallait aussi pouvoir éditer le numéro de téléphone et l'adresse. »

Dev : « Mais la story ne le disait pas. »

PO : « C'était implicite. »

Dev : « ... »

**2 jours de développement à refaire.**

![Développeur devine, code 2 jours, tout est à refaire](/assets/images/blog/2026-01-02-user-stories-developer-guesses.svg)

**Le Problème :**
- ❌ Story trop vague
- ❌ PO pas disponible
- ❌ Développeur devine
- ❌ 2 jours de travail perdus
- ❌ Refonte complète nécessaire

**Citation développeur :**
> « Les user stories sont tellement vagues que je dois souvent deviner ce qu'il faut faire. Puis en review, on me dit que ce n'est pas ça. J'ai perdu du temps à coder quelque chose qui ne sera jamais utilisé. »

**Statistique Réelle :**

Enquête sur 140 développeurs :
- **67%** déclarent avoir dû « deviner » ce qu'il fallait développer au moins une fois par sprint
- **42%** ont refait du travail parce que leur interprétation était fausse

**Résultat :** Les stories vagues créent du gaspillage.

---

## Pourquoi Les User Stories Persistent

### Raison 1 : « C'est La Méthode Agile » (Dogme Scrum)

**Le Problème :**

Les équipes utilisent les user stories parce que **« c'est comme ça qu'on fait en Agile »**.

**Scrum impose le format :**

```
En tant que <rôle>, je veux <action> afin de <bénéfice>.
```

**Mais ce format ne décrit jamais la solution technique.**

**Exemple :**

Story Scrum standard :

```
En tant qu'utilisateur, je veux réinitialiser mon mot de passe
afin de récupérer l'accès à mon compte.
```

**Ce que ça ne dit pas :**
- Processus : Email avec lien ? Code à 6 chiffres ? Question secrète ?
- UI : Page dédiée ? Modal ? Workflow en plusieurs étapes ?
- Sécurité : Token expire après combien de temps ? Hash du password ?
- Edge cases : Que se passe-t-il si l'email n'existe pas ? Si le token est expiré ?

**Le Problème :**
- ❌ Format imposé qui ne convient pas à la clarté technique
- ❌ Équipes suivent le format par dogmatisme
- ❌ Stories restent vagues « parce que c'est Agile »

**Citation développeur :**
> « On nous a dit qu'en Agile, on écrit des user stories. Alors on les écrit. Même si elles sont vagues. Même si elles ne nous aident pas. Parce que "c'est la méthode". »

**Résultat :** Le dogme Scrum maintient les stories vagues.

---

### Raison 2 : « On Détaille Pendant Le Grooming » (Clarification Reportée)

**Le Problème :**

Les PO écrivent des stories vagues avec l'idée que **« on détaillera pendant le grooming »**.

**Mais le grooming devient une session de spécification différée.**

**Ce qui se passe :**

**Création de la story (5 minutes) :**

PO écrit :

```
USER-567: En tant qu'utilisateur, je veux voir mon historique d'achats.
```

PO pense : « On détaillera pendant le grooming. »

**Grooming (45 minutes) :**

Équipe pose 20 questions :
- Quels champs afficher ?
- Ordre chronologique ?
- Pagination ?
- Filtres par date ?
- Export possible ?
- Détails de chaque achat cliquables ?

**Le PO répond à chaque question.**

**Mais pourquoi ne pas avoir écrit tout ça directement dans la story ?**

**Le Problème :**
- ❌ Story créée volontairement vague
- ❌ Grooming = session de spécification
- ❌ Temps perdu à clarifier ce qui aurait dû être clair
- ❌ Équipe entière mobilisée (8 personnes × 45 min = 6h de temps cumulé)

**Citation PO :**
> « Je crée des stories hautes-niveaux. On les détaille en équipe pendant le grooming. C'est plus collaboratif. »

**Réalité :**

C'est juste du temps perdu. Le PO aurait pu écrire une description claire dès le départ.

**Résultat :** La clarification est reportée au grooming.

---

### Raison 3 : Confusion Entre « Besoin Utilisateur » Et « Tâche Développeur »

**Le Problème :**

Les user stories sont censées décrire le **besoin utilisateur**, pas la **solution technique**.

**Mais les développeurs ont besoin de savoir quoi coder, pas juste le besoin.**

**Exemple :**

**Besoin utilisateur (user story) :**

```
En tant qu'utilisateur, je veux être notifié des nouveaux messages.
```

**Ce dont le développeur a besoin (spécification) :**

```
Issue : Implémenter système de notifications pour messages

Backend :
- Créer table notifications (id, user_id, message_id, read, created_at)
- API POST /notifications pour créer une notification
- API GET /notifications?user_id=X pour lister
- API PATCH /notifications/:id/read pour marquer comme lu
- Trigger : créer notification automatiquement quand nouveau message

Frontend :
- Icône cloche dans header avec badge count (nombre de non-lues)
- Dropdown au clic : liste des 10 dernières notifications
- Clic sur notification : marquer comme lue + redirection vers message
- Polling toutes les 30s pour refresh du count

Design :
- Maquette : /designs/notifications-bell.png
```

**Le premier décrit le « pourquoi ». Le second décrit le « quoi ».**

**Les développeurs ont besoin du second, pas du premier.**

**Le Problème :**
- ❌ User story décrit le besoin (pour le product)
- ❌ Développeur a besoin de la solution (pour coder)
- ❌ Confusion entre les deux
- ❌ Stories vagues car elles ne visent pas les développeurs

**Citation développeur :**
> « Les user stories sont écrites pour le product owner, pas pour moi. Elles décrivent le besoin utilisateur, mais je ne peux pas coder un besoin. Je peux coder une solution. »

**Résultat :** Les stories ne sont pas écrites pour les développeurs.

---

## L'Approche Sinra : Issues Directes Et Actionnables

Sinra abandonne les user stories au profit d'**issues directes** qui décrivent exactement ce qu'il faut faire.

### Le Concept : Issue = Description Claire De Ce Qu'Il Faut Développer

Dans Sinra, une **issue** est une tâche actionnable qui dit exactement quoi faire.

**Pas de format imposé. Juste une description claire.**

**Exemple d'issue Sinra :**

```
Titre : Ajouter bouton logout dans header avec confirmation

Description :
Ajouter un bouton "Déconnexion" dans le header de l'application.

Comportement :
- Bouton "Déconnexion" visible uniquement pour utilisateurs connectés
- Position : header, à droite, après l'icône notifications
- Au clic : afficher modal de confirmation
  - Message : "Voulez-vous vraiment vous déconnecter ?"
  - Boutons : "Annuler" et "Déconnexion"
- Si "Déconnexion" :
  - Appel API DELETE /auth/session
  - Suppression du token JWT localStorage
  - Redirection vers /login

API :
- Endpoint : DELETE /auth/session
- Invalider le refresh token en DB
- Log de l'événement (user_id, timestamp)

Design :
- Maquette : /designs/header-logout.png
- Modal : composant existant <ConfirmModal>

Tests :
- Test E2E : clic logout → modal → confirm → redirection /login
- Test unitaire : invalidation token

Estimation : 1 jour
```

**Différence avec user story :**

**User story :**
> En tant qu'utilisateur, je veux me déconnecter afin de sécuriser mon compte.

**Issue Sinra :**
> Décrit exactement **où**, **comment**, **quoi**, **avec quel design**, **quels tests**.

**Résultat :** Le développeur sait exactement quoi faire.

---

### Anatomie D'Une Issue Sinra vs. User Story Agile

Reprenons l'exemple des notifications.

#### User Story Agile (Vague)

```
USER-892: En tant qu'utilisateur, je veux recevoir des notifications
afin d'être informé des nouveaux messages.

Critères d'acceptation :
- L'utilisateur reçoit une notification quand nouveau message
- L'utilisateur peut voir ses notifications
- L'utilisateur peut marquer une notification comme lue
```

**Problème :** Aucun détail sur le « comment ».

**Résultat :** 45 minutes de grooming + 3 réunions de clarification.

---

#### Issue Sinra (Claire)

```
Titre : Système de notifications pour nouveaux messages

Description :
Implémenter un système de notifications qui alerte l'utilisateur
quand il reçoit un nouveau message.

Backend :
- Créer table `notifications`
  - Champs : id, user_id, message_id, content, read (boolean), created_at
- Créer API :
  - POST /notifications (admin only, pour création manuelle si besoin)
  - GET /notifications?user_id=X&read=false (liste non-lues)
  - PATCH /notifications/:id/read (marquer comme lue)
  - GET /notifications/count?user_id=X (count non-lues)
- Trigger automatique :
  - Quand message créé → créer notification pour destinataire
  - Batching : max 1 notification par minute par utilisateur (éviter spam)
- Indexer : user_id, read, created_at

Frontend :
- Icône cloche dans header (composant <NotificationBell>)
  - Badge rouge avec count de non-lues
  - Afficher badge seulement si count > 0
- Au clic : dropdown avec liste notifications
  - Afficher 10 dernières notifications
  - Format : "[Sender] vous a envoyé un message" + timestamp relatif
  - Clic sur notification :
    - Marquer comme lue (PATCH /notifications/:id/read)
    - Redirection vers /messages/:message_id
  - Lien "Voir tout" → /notifications
- Polling :
  - Fetch count toutes les 30 secondes
  - Update badge si count change
- Page /notifications :
  - Liste complète des notifications (paginée, 20 par page)
  - Bouton "Marquer tout comme lu"

Design :
- Maquette : /designs/notifications-ui.fig
- Icône : Bell icon (Heroicons)
- Couleur badge : red-500
- Animation : pulse sur nouveau count

Tests :
- Backend :
  - Test création notification automatique quand message envoyé
  - Test batching (pas de spam)
  - Test API GET/PATCH
- Frontend :
  - Test E2E : nouveau message → badge apparaît → clic → modal → clic notif → redirection
  - Test polling (mock API)

Dépendances :
- Require : API /messages fonctionnelle
- Bloque : Notification push (future issue)

Estimation : 3 jours (1 backend, 1.5 frontend, 0.5 tests)

Assigné : Dev 2
Projet : Messaging V2
Release : Q1 2026
```

**Différence :**

**User story :** 5 lignes vagues.

**Issue Sinra :** Spécification complète. Actionnable immédiatement.

**Résultat :**

- ✅ Développeur sait exactement quoi faire
- ✅ Pas de grooming nécessaire
- ✅ Pas de questions
- ✅ Code directement

![User story vague vs issue Sinra détaillée](/assets/images/blog/2026-01-02-user-stories-vs-sinra-issue.svg)

---

### Les Trois Piliers Des Issues Sinra

#### 1. Pas De Format Imposé (Description Claire, C'Est Tout)

**Le Concept :**

Sinra n'impose pas de format « En tant que... je veux... afin de... ».

**Juste une règle : la description doit être claire et actionnable.**

**Bénéfice :** Flexibilité pour écrire ce qui est utile, pas ce qui est dogmatique.

---

#### 2. Issues Techniques, Pas Besoins Utilisateurs (Dire Exactement Quoi Faire)

**Le Concept :**

Une issue Sinra décrit **la solution technique**, pas le besoin utilisateur.

**Exemple :**

**Mauvais (besoin) :**
> L'utilisateur veut voir son historique.

**Bon (solution) :**
> Créer page /history avec table paginée (20 par page) affichant : date, action, user. API GET /history?user_id=X. Filtres par date (date picker). Design : /designs/history.png.

**Bénéfice :** Le développeur sait exactement quoi coder.

---

#### 3. Capabilities Pour Regrouper Les Issues (Organiser Sans Perdre En Clarté)

**Le Concept :**

Sinra utilise **capabilities** pour regrouper des issues liées.

**Exemple :**

**Capability :** Système de notifications

**Issues associées :**
1. Créer table et API notifications (3j)
2. Ajouter icône cloche dans header avec badge (1.5j)
3. Implémenter page /notifications (2j)
4. Ajouter polling pour refresh auto (0.5j)
5. Tests E2E notifications (1j)

**Total : 8 jours**

**Bénéfice :**
- Voir la « big picture » (capability)
- Travailler sur des tâches claires (issues)

![Capability regroupant 5 issues actionnables](/assets/images/blog/2026-01-02-user-stories-capability-breakdown.svg)

---

## Exemple Réel : Lumio (Application Mobile)

**Lumio (équipe de 8 développeurs, app mobile B2C)**

*Note : Lumio est une entreprise réelle que nous avons anonymisée sous un nom fictif pour protéger leur confidentialité.*

### Avant Sinra : User Stories Vagues

**Problèmes Rencontrés :**

**Problème 1 : Grooming interminable**

Équipe passe **4h30 par semaine** en backlog grooming.

**Déroulement typique :**
- Lire story vague
- Poser 15 questions
- Clarifier
- Découper en sous-tâches

**Problème 2 : Écart story / réalité**

**Exemple :**

Story :
> En tant qu'utilisateur, je veux partager du contenu.

**Réalité (après clarification) :**
- Partage par : Email, SMS, Facebook, Twitter, Instagram, Copier lien
- Avec preview card (image + titre + description)
- Tracking : qui a cliqué sur le lien
- Deep linking pour ouvrir dans l'app
- 12 jours de développement au lieu des 2 estimés

**Problème 3 : Développeurs devinent**

**64% des développeurs** déclarent avoir dû « deviner » au moins une fois par sprint.

**Résultat :** Refonte de 30% du code en review.

**Problème 4 : Stories regroomées**

**38% des stories** sont regroomées au moins une fois.

Certaines stories groomées 3 fois avant d'être développables.

**Problème 5 : Frustration**

Enquête interne :
- **72% des devs** frustrés par les stories vagues
- **« Pourquoi on ne peut pas juste dire clairement ce qu'il faut faire ? »**

**Moral de l'équipe :** Épuisé par les réunions de clarification.

---

### Après Sinra : Issues Directes

**Workflow :**

1. **Product écrit une issue claire** (pas user story)
   - Titre explicite
   - Description détaillée : quoi, où, comment
   - Référence au design si besoin
   - Critères de test

2. **Développeur lit l'issue** → sait exactement quoi faire

3. **Pas de grooming nécessaire** (issue déjà claire)

4. **Développement direct**

**Changement principal :**

**Avant (user story vague) :**

```
En tant qu'utilisateur, je veux filtrer les restaurants.
```

**Après (issue Sinra claire) :**

```
Titre : Ajouter filtres restaurants (cuisine, prix, distance)

Description :
Ajouter 3 filtres sur /restaurants :
- Cuisine : dropdown avec options (Française, Italienne, Japonaise, Autre)
- Prix : range slider (€-€€€€, valeurs 1-4)
- Distance : range slider (0-10km)

Comportement :
- Filtres en sidebar gauche
- Au changement : requête API GET /restaurants?cuisine=X&price=Y&distance=Z
- Résultats mis à jour en temps réel (debounce 300ms)
- Afficher count résultats : "24 restaurants trouvés"
- Reset button pour clear tous les filtres

API :
- Endpoint existant : GET /restaurants supporte déjà query params
- Pas de changement backend nécessaire

Design :
- Maquette : /designs/filters.fig
- Composants : <Dropdown>, <RangeSlider> (existants)

Tests :
- Test E2E : sélectionner filtre → résultats mis à jour
- Test debounce

Estimation : 1.5 jours
Assigné : Dev 3
```

**Résultats (Après 3 Mois) :**

**Métrique 1 : Temps de grooming**
- **Avant :** 4.5h par semaine
- **Après :** 0.5h par semaine (90% de réduction)

**Métrique 2 : Stories regroomées**
- **Avant :** 38% des stories
- **Après :** 3% des issues (seulement en cas de changement de scope)

**Métrique 3 : Développeurs qui devinent**
- **Avant :** 64% devinent au moins 1 fois par sprint
- **Après :** 8%

**Métrique 4 : Code refait en review**
- **Avant :** 30% du code
- **Après :** 5%

**Métrique 5 : Temps de développement**
- **Avant :** 15% plus lent (à cause des clarifications)
- **Après :** Baseline (pas de temps perdu)

**Citation Lead Developer :**
> « Avant, on passait nos vendredis à groomer le backlog. On lisait des stories vagues, on posait 20 questions, on découpait. Maintenant, les issues sont claires dès le départ. On code directement. »

**Citation Product Manager :**
> « Au début, j'ai trouvé fastidieux d'écrire des issues détaillées. Puis j'ai réalisé : je passais le même temps en grooming à répondre aux questions. Maintenant, je documente une fois, clairement, et l'équipe développe sans questions. »

![Lumio : métriques avant/après Sinra](/assets/images/blog/2026-01-02-user-stories-lumio-before-after.svg)

---

## Jira vs. Sinra : Comparaison User Stories

| **Aspect** | **Jira (User Stories)** | **Sinra (Issues Directes)** |
|------------|-------------------------|------------------------------|
| **Format** | ❌ Imposé (En tant que...) | ✅ Libre (description claire) |
| **Clarté** | ❌ Vague (besoin, pas solution) | ✅ Précise (quoi, où, comment) |
| **Grooming** | ❌ 4h+ par semaine | ✅ Minimal (<1h) |
| **Actionnable** | ❌ Nécessite clarification | ✅ Développable immédiatement |
| **Écart story/code** | ❌ Massif (2 lignes → 50 tâches) | ✅ Minimal (issue = spec) |
| **Développeurs devinent** | ❌ 64% devinent | ✅ 8% devinent |
| **Refonte en review** | ❌ 30% du code | ✅ 5% |

---

## Les Cinq Signes Que Vos User Stories Sont Trop Vagues

### Signe 1 : Vous Passez 4h+ Par Semaine En Grooming

Si vous passez 4 heures ou plus chaque semaine à clarifier des stories, c'est qu'elles sont trop vagues.

---

### Signe 2 : « OK Mais Concrètement, Je Fais Quoi ? » Est Une Phrase Récurrente

Si vos développeurs posent cette question à chaque story, c'est que les stories ne disent pas quoi faire.

---

### Signe 3 : Vous Regroomez Les Mêmes Stories Plusieurs Fois

Si 30%+ de vos stories sont groomées 2-3 fois avant d'être développables, c'est un problème de clarté.

---

### Signe 4 : Les Développeurs Devinent Et Le Code Est Refait En Review

Si 30%+ du code est refait parce que les devs ont deviné faux, c'est que les stories manquent de détails.

---

### Signe 5 : L'Écart Entre Estimation Et Réalité Est Massif

Si vos stories estimées à 2 jours prennent régulièrement 10 jours, c'est que la complexité réelle était cachée.

---

## Comment Utiliser Sinra Pour Écrire Des Issues Claires

### Étape 1 : Abandonner Le Format « En Tant Que »

**Action :**
- Ne plus imposer le format user story
- Écrire une description claire et libre
- Focus : dire exactement ce qu'il faut développer

---

### Étape 2 : Décrire La Solution, Pas Le Besoin

**Action :**
- Ne pas écrire : « L'utilisateur veut X »
- Écrire : « Créer page Y avec comportement Z, design W, API V »
- Résultat : Issue actionnable

---

### Étape 3 : Inclure Tous Les Détails Techniques

**Action :**
- Backend : API, DB, modèles
- Frontend : Composants, comportement, UX
- Design : Maquette, assets
- Tests : Scénarios E2E, tests unitaires
- Résultat : Développeur sait exactement quoi faire

---

### Étape 4 : Utiliser Capabilities Pour Regrouper

**Action :**
- Créer capability pour grande feature
- Découper en issues techniques claires
- Chaque issue : actionnable individuellement
- Résultat : Vision globale + tâches précises

---

### Étape 5 : Éliminer Le Grooming (Ou Le Réduire À <1h)

**Action :**
- Si issue claire dès le départ → pas de grooming
- Grooming uniquement pour questions exceptionnelles
- Résultat : 90% de réduction du temps de grooming

---

## Points d'Action : Éliminer Les User Stories Vagues

1. **Auditez vos stories actuelles.** Combien nécessitent >30 min de clarification ?
2. **Mesurez le temps de grooming.** Combien d'heures par semaine ?
3. **Testez les issues Sinra.** Écrivez 5 issues détaillées au lieu de user stories.
4. **Comparez.** Grooming nécessaire ? Développeur bloqué ?
5. **Adoptez Sinra.** Issues directes, capabilities pour regrouper.

---

## Le Point Clé

**Les user stories au format Agile sont trop vagues.**

Entre **format imposé**, **description du besoin au lieu de la solution**, **grooming interminable**, et **développeurs qui devinent**, personne ne sait vraiment quoi faire.

**Sinra utilise des issues directes et actionnables.**

Pas de format imposé. Description claire : quoi, où, comment, design, tests.

**Le résultat :**
- ✅ Grooming réduit de 90% (4.5h → 0.5h)
- ✅ Issues actionnables immédiatement (pas de clarification)
- ✅ Développeurs ne devinent plus (8% au lieu de 64%)
- ✅ Code refait réduit (5% au lieu de 30%)
- ✅ Estimation juste (complexité visible dès le départ)

**Vos développeurs savent exactement quoi faire.**

**Votre backlog est actionnable.**

---

## Découvrez aussi la série « Problèmes Invisibles »

- **[Le QA Invisible](/qa/2025/12/22/qa-invisible-tests-disperses.html)** - 847 tests dans Excel : comment rendre le QA visible avec Sinra Testings
- **[La Documentation Morte](/documentation/2025/12/24/documentation-morte-notion-confluence.html)** - 127 pages Confluence obsolètes : comment rendre la documentation vivante
- **[Le Chaos Du Backlog](/planning/2025/12/26/chaos-backlog-personne-sait-q2.html)** - 537 issues chaotiques : comment organiser le travail par releases et cycles
- **[Les Dépendances Cachées](/dependencies/2025/12/28/dependances-cachees-features-bloquees.html)** - 47% des features bloquées : comment rendre les dépendances visibles
- **[Le Syndrome Du Multi-Projet](/capacity/2025/12/30/syndrome-multi-projet-rien-navance.html)** - Développeurs sur 4 projets simultanés : comment limiter les projets actifs

---

**Prêt à abandonner les user stories vagues ?** [Démarrez un essai gratuit de Sinra →](https://app.sinra.dev/users/sign_up)

Découvrez une gestion de projet où les issues disent exactement quoi faire, pas juste le besoin utilisateur.
