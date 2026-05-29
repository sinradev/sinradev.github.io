---
title: "Capabilities"
description: "Les capabilities sont l'équivalent des epics dans Sinra, avec une différence clé : une capability a un état de complétion clair. Découvrez comment les capabilities relient releases, issues et QA en une unité de livraison traçable."
date: 2024-01-01
weight: 30
---

## Qu'est-ce qu'une Capability ?

Une capability est une fonctionnalité produit concrète : quelque chose que votre produit sera capable de faire une fois livré. Elle se situe au niveau d'abstraction que les product managers, développeurs et parties prenantes peuvent tous comprendre.

"Export CSV des rapports" est une capability. Soit elle est livrée, soit elle ne l'est pas. Il n'y a pas d'état ambigu "partiellement terminé".

## Capabilities vs Epics

La différence clé réside dans les critères de complétion :

| | Epic | Capability |
|-|------|-----------|
| Défini par | Des user stories regroupées | Une fonctionnalité produit concrète |
| Terminé quand | Tous les tickets enfants sont fermés | La fonctionnalité fonctionne comme défini |
| État | Reste souvent ouvert indéfiniment | Binaire : livré ou non |
| Communicable aux parties prenantes | Rarement | Oui, directement |

Un epic peut rester ouvert des mois au fur et à mesure que de nouveaux tickets s'ajoutent. Une capability a une décision de périmètre au départ : quand cette fonctionnalité est livrée, la capability se ferme.

## Les Capabilities dans la Planification

Les capabilities sont l'unité de planification au niveau de la release. Quand vous définissez une release, vous lui assignez des capabilities. Cela répond à "que contiendra la version 2.4 ?" au niveau des fonctionnalités, pas au niveau des tickets.

Cela rend la planification des releases communicable :

> "La version 2.4 inclut : export CSV, notifications email et gestion des rôles."

Cette phrase fonctionne dans un standup d'équipe, une réunion avec les parties prenantes et un changelog produit.

## Lier des Capabilities

Chaque capability se connecte à :
- **Projet** : l'initiative de haut niveau à laquelle elle appartient
- **Release** : quelle version livrera cette fonctionnalité
- **Issues** : les tâches individuelles qui l'implémentent
- **Testings** : les cas de test QA qui la valident

Cette chaîne assure une traçabilité complète depuis l'objectif stratégique (projet) jusqu'aux tâches individuelles (issues) et la validation (testings).

## Corps de la Capability

Le corps de la capability utilise un éditeur riche. Les équipes écrivent généralement :
- Description de la fonctionnalité destinée aux utilisateurs
- Critères d'acceptation
- Notes techniques et contraintes
- Liens vers les ressources de design

Comme les capabilities sont partagées entre le produit et l'ingénierie, ce corps devient la spécification vivante de la fonctionnalité.

## Suivi de Progression

La progression d'une capability est visible via :
- Nombre d'issues (ouvertes vs fermées)
- Temps estimé vs passé
- Statut d'acceptation des testings

Cela donne une lecture rapide et honnête pour savoir si la capability est vraiment proche de la complétion ou si la plupart des tickets sont juste fermés.
