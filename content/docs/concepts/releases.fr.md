---
title: "Releases"
description: "Une release dans Sinra est un engagement de périmètre, pas seulement un événement de déploiement. Découvrez comment les releases définissent ce que vous livrez, se connectent aux cycles et capabilities, et communiquent la progression à toute votre organisation."
date: 2024-01-01
weight: 40
---

## Qu'est-ce qu'une Release ?

Une release représente une version de votre produit. Elle répond à : "que livrons-nous, et quand ?"

Dans Sinra, une release est définie par son périmètre : l'ensemble des capabilities qu'elle inclut. Cela est décidé délibérément au moment de la planification, pas assemblé rétrospectivement à partir de ce qui était terminé avant le déploiement.

## Release vs Cycle

Ces deux concepts sont souvent confondus. Ils sont indépendants :

| | Release | Cycle |
|-|---------|-------|
| Ce que c'est | Un périmètre de livraison | Une période de travail |
| Répond à | Que livrons-nous ? | Quand travaillons-nous dessus ? |
| Durée | Variable, liée aux fonctionnalités | Fixe, typiquement 1 à 4 semaines |
| Contient | Capabilities et issues | Issues de n'importe quelle release |

Un seul cycle peut contenir des issues de plusieurs releases. Cela permet aux équipes de travailler sur un correctif de maintenance pour v1.2 en même temps que de nouvelles fonctionnalités pour v2.0, dans le même cycle.

## Définir une Release

Quand vous créez une release, vous définissez :
- **Nom et numéro de version** : votre schéma de versionnage (sémantique ou basé sur le calendrier)
- **Date de livraison cible** : quand vous prévoyez de livrer
- **Capacité cible** : jours de travail budgétés pour cette release

Ensuite, en utilisant la vue Backlog, vous assignez des capabilities à la release. Chaque capability amène ses issues avec elle. C'est là que se prennent les décisions de périmètre.

## Planification de la Capacité

Sinra calcule si votre release est réalisable en fonction de :
- Temps total estimé des issues pour toutes les issues de la release
- Capacité de l'équipe disponible sur les cycles qui livreront ces issues

Si la release est sur-capacité, Sinra le fait remonter avant que vous vous engagiez. C'est le changement fondamental que Sinra opère : confronter l'ambition à la réalité au moment de la planification, pas au moment de la livraison.

## États des Releases

| État | Signification |
|------|--------------|
| **À venir** | Planifiée, non démarrée |
| **Active** | En cours de travail |
| **Livrée** | Expédiée |

Quand une release est livrée, Sinra crée automatiquement sa rétrospective.

## Communiquer une Release

Un périmètre de release défini en capabilities se traduit directement en communication aux parties prenantes :

> "v2.4 sera livrée en juillet. Elle inclut : notifications email, export CSV et gestion des rôles."

C'est quelque chose que votre équipe commerciale, vos utilisateurs et votre support peuvent comprendre sans ouvrir le backlog.

## Rétrospectives

Chaque release génère automatiquement une rétrospective quand elle se ferme. L'équipe remplit quatre catégories :
- **Bien** : ce qui a bien fonctionné
- **Mal** : ce qui n'a pas fonctionné
- **Améliorations** : changements de processus à essayer la prochaine fois
- **Général** : tout le reste

Les rétrospectives sont liées aux releases, pas aux cycles, parce que ce qu'on apprend concerne ce qu'on a livré, pas la durée pendant laquelle on a travaillé.
