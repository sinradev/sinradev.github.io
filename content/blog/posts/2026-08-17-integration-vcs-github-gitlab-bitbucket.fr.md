---

title: "Intégration VCS : le statut des issues suit le code, pas l'inverse"
subtitle: "PR ouverte, review approuvée, merge : ces évènements racontent déjà l'avancement réel du travail. L'intégration VCS de Sinra les transforme en changements de statut, sans mise à jour manuelle."
description: "L'intégration VCS de Sinra relie GitHub, GitLab et Bitbucket à vos issues et capabilities : le nom de la branche porte le lien, un job de CI notifie Sinra, et le statut de développement avance automatiquement au fil des évènements git."
categories: ["Outils", "Gestion de Projet"]
excerpt: "Une équipe qui code sait déjà, à chaque PR ouverte et à chaque merge, où en est le travail. Le problème n'est pas l'information, c'est qu'elle reste côté dépôt pendant que l'outil de gestion de projet, lui, attend une mise à jour manuelle."
date: 2026-08-17 09:00:00 +0200
featured_image: /assets/images/blog/2026-08-17-integration-vcs-github-gitlab-bitbucket-featured.png

---

Une issue passe « en cours » quand quelqu'un ouvre une PR. Elle passe « à merger » quand une review l'approuve. Elle passe « terminé » quand cette PR est mergée. Ces trois faits existent déjà, intégralement, côté dépôt git. Pourtant, dans la plupart des équipes, quelqu'un doit encore ouvrir l'outil de gestion de projet et glisser manuellement la carte d'une colonne à l'autre - un geste redondant avec ce que le dépôt sait déjà, oublié un jour sur deux en fin de sprint.

## Le décalage entre le code et le board

Ce décalage n'est pas un problème de discipline d'équipe, c'est un problème de source de vérité dupliquée. Le développeur qui vient de merger sa PR est concentré sur la PR suivante, pas sur la mise à jour d'un board. Résultat : le statut affiché dans l'outil de gestion de projet ment silencieusement pendant des heures, parfois des jours, jusqu'à ce que quelqu'un le remarque et le corrige à la main. Un board qui ne reflète pas l'état réel du code n'est plus un outil de pilotage, c'est une source d'incertitude de plus.

## Ce que fait l'intégration VCS

L'intégration VCS de Sinra part d'un principe simple : le statut de développement d'une issue ne devrait jamais être saisi à la main quand il peut être déduit d'un évènement git. **GitHub, GitLab et Bitbucket** sont supportés de façon strictement identique - une fois un dépôt lié, les trois providers se comportent pareil, aucune fonctionnalité n'est réservée à l'un d'eux. Un job de CI, ajouté au dépôt, notifie Sinra à chaque évènement pertinent : PR ouverte, review approuvée, merge, push. Sinra ne lit jamais directement le dépôt et n'y écrit jamais non plus - le sens de circulation est unidirectionnel, **git → Sinra**, ce qui évite tout risque d'action automatique surprenante côté hébergeur.

## Le nom de branche comme seul lien

Aucune table de correspondance à maintenir, aucun lien à créer manuellement entre une branche et une issue : le **numéro** porté par le nom de la branche est la clé. Une branche `feature/123-fix-login` cible sans ambiguïté l'issue ou la capability numéro 123, quel que soit le type de branche (`feature`, `bugfix`, `hotfix`, `chore`) ou le slug qui l'accompagne - tous deux peuvent changer librement sans jamais casser le lien. Depuis une issue, un bouton **Copier la branche** propose directement ce nom canonique, pour que le développeur n'ait jamais à l'inventer.

Deux façons de travailler coexistent naturellement. Une branche dédiée à une tâche précise fait avancer une **issue** ; une branche de feature entière, celle que spec-kit associe déjà à une **capability**, fait avancer en cascade toutes les issues de développement de cette capability quand elle est mergée. Sinra n'écrit jamais de statut directement sur une capability - son avancement reste, comme partout ailleurs dans l'outil, calculé à partir de ses issues.

## Le mapping évènement → statut reste entre vos mains

Aucun comportement n'est figé côté outil. Un administrateur d'organisation configure, évènement par évènement, quel statut appliquer : PR ouverte peut déclencher « en cours », review approuvée « à merger », merge « terminé ». Des valeurs par défaut raisonnables sont pré-remplies dès la première visite, mais rien n'empêche de désactiver un évènement en vidant son statut associé - il n'aura alors plus aucun effet, quel que soit ce qui se passe côté dépôt. Le mapping s'adapte au workflow de l'équipe, pas l'inverse.

## Des garde-fous pensés pour ne jamais surprendre

Un mécanisme qui modifie automatiquement des statuts doit inspirer confiance avant d'inspirer de l'efficacité. Plusieurs règles y veillent :

- **Forward-only** : un évènement ne fait jamais reculer une entité déjà plus avancée. Un push après un merge ne réouvre jamais une issue « terminée ».
- **No-op silencieux** : une PR fermée sans merge, repassée en brouillon ou déjà au statut cible ne déclenche ni changement ni erreur.
- **Merge = terminé, uniquement vers la branche par défaut** : merger vers une branche d'intégration intermédiaire n'applique jamais le statut final.
- **Idempotence** : chaque livraison porte un identifiant unique, un retry de CI ne produit jamais un effet en double.
- **Cloisonnement par platform** : un évènement ne peut affecter que les entités de la même platform que le dépôt émetteur.
- **Provenance visible** : un changement de statut d'origine git affiche un badge dédié sur l'issue, pour le distinguer d'une mise à jour manuelle.

Aucune correspondance trouvée n'est jamais une erreur : l'évènement est simplement ignoré et tracé pour diagnostic, sans jamais bloquer une CI.

## Mise en route

Lier un dépôt se fait depuis une **platform** : choisir le provider, connecter le compte correspondant, sélectionner le dépôt dans une liste. Chaque provider se connecte indépendamment - une organisation peut lier des dépôts GitHub, GitLab et Bitbucket en parallèle, et révoquer l'un sans affecter les autres. Il reste ensuite à créer un jeton d'organisation et à ajouter le job de CI correspondant (workflow GitHub Actions, job GitLab CI/CD, ou étape Bitbucket Pipelines - le payload posté vers Sinra est strictement identique pour les trois). Une équipe qui suit ces étapes voit sa première issue changer de statut automatiquement en moins de dix minutes.

## Ce qu'il faut retenir

Le statut de développement d'une issue n'a pas besoin d'être maintenu à la main quand le dépôt git en connaît déjà l'évolution exacte, évènement par évènement. En transformant PR, reviews et merges en changements de statut automatiques - sans jamais écrire côté hébergeur, sans jamais imposer un mapping figé - l'intégration VCS de Sinra referme l'écart entre ce que le code raconte et ce que le board affiche.
