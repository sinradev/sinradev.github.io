---
title: "Gestion de la Capacité"
description: "Le système de capacité de Sinra rend visible l'équation fondamentale du projet : ce que vous voulez livrer vs ce que votre équipe peut réellement faire. Découvrez comment fonctionnent les taux de disponibilité, la capacité des cycles et les calculs de charge de travail."
date: 2024-01-01
weight: 50
---

## L'idée Centrale

La plupart des outils de gestion de projet vous permettent d'ajouter des issues sans limite. Vous vous retrouvez avec un backlog plus grand qu'une équipe ne pourrait jamais livrer, et la planification devient du hasard.

Sinra fait le contraire. Chaque élément de travail a une estimation de temps. Chaque membre de l'équipe a un taux de disponibilité. Chaque cycle a une capacité calculée. Le système rend visible l'écart entre l'ambition et la réalité avant que vous vous engagiez.

## Taux de Disponibilité

Chaque membre de l'équipe a un `target_capacity` entre 1% et 100%.

- 100% : temps plein sur le projet
- 50% : mi-temps (temps partiel, réparti sur plusieurs projets, etc.)
- 80% : prend en compte les réunions, revues de code et la surcharge

Ces taux sont définis dans la configuration de l'équipe et reflètent la réalité, pas les aspirations.

## Calcul de la Capacité du Cycle

Quand un cycle est créé avec des dates de début et de fin, Sinra calcule automatiquement sa capacité :

```
Capacité du cycle = Σ (jours_membre × taux_disponibilité)
                    pour tous les membres de l'équipe
                    sur les jours ouvrés du cycle
```

Un cycle de 10 jours avec :
- Alice à 100% : 10 jours
- Bob à 50% : 5 jours
- Carol à 80% : 8 jours

Donne une capacité totale du cycle de 23 jours.

Ce nombre est fixe. Vous ne pouvez pas planifier plus de travail dans un cycle que sa capacité ne le permet sans voir la surcharge.

## Suivi de la Charge de Travail

Dans un cycle, Sinra suit la charge de travail par membre :
- **Estimé** : total des estimations d'issues assignées à ce membre
- **Passé** : temps réel enregistré
- **Restant** : estimé moins passé

La vue de charge de travail du cycle montre tous les membres simultanément, rendant immédiatement visible si un développeur est surchargé pendant qu'un autre a de la capacité.

## Capacité de la Release

Au niveau de la release, la planification de la capacité fonctionne sur plusieurs cycles :
- Temps total estimé pour toutes les issues de la release
- Réparti sur les cycles où ces issues sont planifiées
- Comparé à la capacité totale disponible de l'équipe dans ces cycles

Cela fait remonter la surcharge au niveau de la release, pas seulement au niveau du cycle. Vous pouvez voir, avant de commencer le travail, si le périmètre de la release est réaliste.

## Pourquoi C'est Important

Le système de capacité est ce qui sépare la planification des vœux pieux.

Sans lui, vous découvrez le problème à la fin du sprint quand la moitié des tickets sont encore ouverts. Avec lui, vous voyez le problème pendant la planification et pouvez prendre une vraie décision : réduire le périmètre, ajouter de la capacité ou prolonger le délai. Le choix est explicite plutôt que découvert sous pression.
