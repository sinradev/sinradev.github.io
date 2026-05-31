---
title: "Post-mortems"
description: "Sinra propose un workflow de post-mortem blameless structuré. Analysez les incidents systématiquement, identifiez les causes systémiques, assignez des actions de remédiation et construisez une mémoire institutionnelle de ce qui s'est mal passé et comment vous l'avez corrigé."
date: 2024-01-01
weight: 65
---

## Qu'est-ce qu'un Post-mortem ?

Un post-mortem dans Sinra est un enregistrement structuré d'analyse d'incident. Il capture ce qui s'est passé, pourquoi, et ce qui empêchera que cela se reproduise. Il est explicitement **blameless** : l'objectif est d'identifier les défaillances systémiques, pas les erreurs individuelles.

## Créer un Post-mortem

1. Accédez à `/postmortems`
2. Créez un enregistrement avec un titre et la date d'occurrence
3. Définissez la sévérité selon l'impact
4. Renseignez les dates clés : detected_at, resolved_at
5. Rédigez les sections timeline, facteurs contributifs et impact
6. Ajoutez des actions de remédiation avec des responsables

## Niveaux de Sévérité

| Sévérité | Usage |
|----------|-------|
| **low** | Perturbation mineure, impact utilisateur limité |
| **medium** | Dégradation notable, contournement possible |
| **high** | Panne significative ou problème de données, aucun contournement |
| **critical** | Panne totale du service ou perte de données |

## Structure d'un Post-mortem

**Timeline** (texte riche) : reconstitution chronologique de ce qui s'est passé. Les bonnes timelines décrivent ce que chaque intervenant a fait et pourquoi — avec empathie pour les informations dont il disposait à ce moment-là.

**Facteurs Contributifs** (texte riche) : conditions systémiques qui ont rendu l'erreur possible ou amplifié son impact. Pas qui a fait quoi, mais ce qui a rendu le système fragile.

**Impact** (texte riche) : périmètre de l'incident — utilisateurs affectés, revenus perdus, SLA non respecté, données à risque.

**Actions** : tâches de remédiation spécifiques avec un responsable assigné. Chaque action doit traiter un facteur contributif, pas un symptôme.

## Cycle de Vie des Statuts

| Statut | Signification |
|--------|--------------|
| **draft** | En cours de rédaction, pas encore partagé |
| **in_review** | Partagé pour relecture avec l'équipe |
| **published** | Finalisé, partagé avec l'organisation |

## MTTR (Mean Time To Recovery)

Sinra calcule automatiquement le MTTR de `occurred_at` à `resolved_at`. Cette métrique apparaît sur chaque post-mortem et peut être comparée entre incidents pour suivre la capacité de récupération de votre organisation dans le temps.

Si `resolved_at` n'est pas défini, le post-mortem est marqué comme **ongoing** (en cours).

## Lien avec le Contexte

Liez un post-mortem à une release, un cycle ou un projet pour le connecter au contexte de travail où l'incident s'est produit. Cela le rend consultable depuis la vue release et crée une traçabilité entre livraison et incident.

## Participants

Ajoutez les intervenants et relecteurs comme participants. Cela documente l'équipe qui a répondu et crée une liste de personnes à notifier lors de la publication du post-mortem.

## Blameless vs Revues d'Incidents Traditionnelles

Les revues d'incidents traditionnelles demandent : qui a fait l'erreur ? Les post-mortems blameless demandent : qu'est-ce qui a permis à cette erreur d'avoir cet impact ?

La distinction n'est pas cosmétique. Quand les individus craignent d'être blâmés, ils cachent les near-misses, sous-déclarent les incidents et contournent silencieusement les systèmes fragiles. Quand les organisations traitent les incidents comme des opportunités d'apprentissage systémique, les ingénieurs signalent les problèmes tôt, les post-mortems sont lus par d'autres équipes et les améliorations systémiques sont prioritisées.

La structure de post-mortem de Sinra est conçue pour faire émerger les causes systémiques : la section facteurs contributifs se concentre explicitement sur les conditions, pas sur les acteurs.
