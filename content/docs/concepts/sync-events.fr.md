---
title: "Événements de Sync"
description: "Les événements de sync sont les moments de synchronisation structurée de l'équipe dans Sinra : réunions de planning, rétrospectives, revues de jalon et post-mortems. Chacun a un rôle précis dans le cycle de vie du projet."
date: 2024-01-01
weight: 50
---

## Qu'est-ce qu'un Événement de Sync ?

Un **événement de sync** est un moment formel où l'équipe se synchronise autour d'une décision collective, d'un apprentissage ou d'une validation. Ce sont des points d'arrêt délibérés dans le flux de travail, distincts des issues (tâches à exécuter) et des pages (documentation de référence).

Sinra reconnaît quatre types d'événements de sync, chacun positionné à un endroit précis du cycle de vie projet :

| Type | Moment | Orientation |
|------|--------|-------------|
| **Réunion de Planning** | Avant un cycle ou une release | Vers l'avant : que va-t-on faire ? |
| **Rétrospective** | Après une release | Vers l'arrière : qu'avons-nous appris ? |
| **Revue de Jalon** | Entre les phases du V-Model | Validation : peut-on passer à la suite ? |
| **Post-mortem** | Après un incident | Analyse : que s'est-il passé et pourquoi ? |

## Pourquoi Séparer les Sync des Issues ?

Une issue suit du travail à produire. Un événement de sync suit une décision ou un apprentissage collectif. La distinction est structurelle :

- Les issues ont des assignés. Les syncs ont des participants.
- Les issues produisent des livrables. Les syncs produisent des décisions et des comptes-rendus.
- Les issues vivent dans le backlog. Les syncs vivent dans l'historique de l'équipe.

Mélanger les deux crée un backlog qui sert à la fois de to-do list et d'archive de réunions, ce qui rend les deux moins lisibles.

## Le Cycle de Vie d'une Release, Raconté par les Syncs

```
Release créée
    ↓
Réunion de Planning  →  Définir le scope du cycle / de la release
    ↓
[Travail : Issues, Cycles, Testing]
    ↓
Revue de Jalon  →  Go / No-Go sur la phase V-Model
    ↓
[Itérations suivantes si nécessaire]
    ↓
Release livrée
    ↓
Rétrospective  →  Apprentissages pour la prochaine release
    ↓
[Si incident survenu]
    ↓
Post-mortem  →  Analyse blameless de l'incident
```

Les syncs balisent les transitions entre les grandes étapes. Ils ne remplacent pas le travail : ils le cadrent.

## Réunions de Planning

La réunion de planning est le sync orienté vers l'avenir. Elle se tient avant un cycle ou une release pour décider ce qui y entre.

Dans Sinra, une réunion de planning peut être liée à un cycle, une release ou une capability. Elle capture l'ordre du jour, les décisions prises et les participants. L'historique des réunions de planning devient une trace des intentions de l'équipe, consultable indépendamment du backlog.

## Rétrospectives

La rétrospective est le sync orienté vers le passé. Elle se tient après une release livrée, jamais après un cycle seulement.

C'est intentionnel : ce qu'on apprend sur une livraison concerne ce qui a été expédié, pas la période de temps travaillée. Sinra crée automatiquement la rétrospective quand une release se ferme. L'équipe y consigne ce qui a bien fonctionné, ce qui a moins bien fonctionné et les améliorations à tenter.

## Revues de Jalon (Phase Gate Reviews)

La revue de jalon est le sync de validation propre au V-Model. Elle intervient aux transitions de phase : fin de conception, fin d'implémentation, fin de tests.

Son rôle est formel : statuer si l'équipe peut passer à la phase suivante (go), doit s'arrêter (no-go) ou peut continuer sous conditions. Sinra enregistre le verdict, les critères évalués et les participants, créant un audit trail pour les environnements régulés.

## Post-mortems

Le post-mortem est le sync déclenché par un incident, pas par le calendrier. Il suit une structure blameless : timeline des événements, facteurs systémiques, impact mesuré (MTTR inclus), actions de remédiation.

Son objectif est de construire une mémoire institutionnelle des incidents, pas d'identifier des coupables. Les post-mortems restent accessibles longtemps après l'incident pour documenter les décisions de remédiation et éviter les régressions.

## Ce que Sinra ne Fait Pas

Sinra ne fournit pas de daily standup tracker. Le positionnement est délibéré : les dailies sont une mécanique Agile qui convient mal à la plupart des équipes hybrides V-Model + Agile. Un sync utile est un moment de décision ou d'apprentissage, pas un rapport de statut quotidien.

Les syncs dans Sinra existent là où ils créent de la valeur documentaire durable : avant, après ou aux jalons clés d'une release.
