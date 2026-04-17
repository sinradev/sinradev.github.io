---

title: "Water-Scrum-Fall : La Réalité des Organisations qui Veulent être Agiles"
subtitle: "Waterfall pour le cadrage et le déploiement, Scrum pour le développement : le modèle hybride dominant en entreprise"
description: "Water-Scrum-Fall est le modèle hybride qui décrit la réalité de nombreuses organisations : processus Waterfall pour le cadrage et la gouvernance, Scrum pour le développement, cascade pour les déploiements et la mise en production."
categories: ["Méthodologie"]
excerpt: "La plupart des grandes entreprises qui pensent pratiquer Scrum font en réalité du Water-Scrum-Fall : Waterfall pour les décisions et les déploiements, Scrum pour le développement au milieu. Comprendre ce modèle, c'est comprendre comment réconcilier agilité et gouvernance."
date: 2026-05-06 09:00:00 +0100
featured_image: /assets/images/blog/2026-04-16-water-scrum-fall-featured.png
---

## Qu'est-ce que le Water-Scrum-Fall ?

**Water-Scrum-Fall** est un terme forgé par Forrester Research en 2011 pour décrire un pattern omniprésent dans les grandes organisations : elles ont adopté Scrum pour le développement, mais ont conservé des processus Waterfall pour le cadrage en amont et les déploiements en aval.

Le modèle ressemble à ceci :

**Phase 1 (Water) : Cadrage et planification Waterfall**
Avant que les équipes développent quoi que ce soit, il y a des mois de cadrage : définition du budget annuel, validation par les comités, rédaction des cahiers des charges, choix des fournisseurs, rédaction des contrats. Ce processus peut prendre 3 à 6 mois.

**Phase 2 (Scrum) : Développement itératif**
Les équipes de développement travaillent en sprints de 2 à 4 semaines. Elles livrent de façon itérative, s'adaptent aux retours, optimisent le backlog. Tout semble agile... jusqu'à la fin.

**Phase 3 (Fall) : Déploiement séquentiel**
Le déploiement en production reste séquentiel et risqué : fenêtres de maintenance, CAB (Change Advisory Board) hebdomadaire, tests de recette formels, validations multiples. Un déploiement peut prendre 4 à 8 semaines de plus après que le développement soit « terminé ».

## Pourquoi le Water-Scrum-Fall est Omniprésent

Ce modèle n'est pas le résultat d'une mauvaise volonté. Il reflète des contraintes réelles :

**Contraintes budgétaires** : les organisations planifient et allouent les budgets annuellement. Pas de budget décidé en cours d'année = planification Waterfall obligatoire.

**Contraintes contractuelles** : les contrats avec des fournisseurs, les appels d'offres, les engagements légaux nécessitent une définition préalable du scope.

**Contraintes réglementaires** : dans les secteurs réglementés (finance, santé, gouvernement), les déploiements en production nécessitent des validations formelles qui ne peuvent pas être compressées.

**Contraintes organisationnelles** : les processus de gouvernance IT (CAB, comité d'architecture, comité de sécurité) fonctionnent en rythme hebdomadaire ou mensuel, pas en rythme Scrum.

## Les Problèmes du Water-Scrum-Fall

Comprendre le modèle, c'est aussi comprendre ses dysfonctionnements :

**La valeur reste bloquée** : même si le développement est terminé, la fonctionnalité n'est pas entre les mains des utilisateurs pendant la phase « Fall ». Les semaines passent sans valeur livrée.

**Le feedback arrive trop tard** : les utilisateurs ne peuvent pas donner de retour sur ce qui est en production. Les équipes développent « dans le vide » pendant les phases intermédiaires.

**Les sprints sont des illusions** : si toutes les décisions importantes sont prises en phase de cadrage et que les déploiements sont séquentiels, les sprints sont en réalité des mini-Waterfall internes.

**La dette de scope s'accumule** : les changements identifiés pendant le développement doivent souvent attendre le prochain cycle annuel de planification.

## Transformer le Water-Scrum-Fall

Pour les organisations qui veulent sortir du Water-Scrum-Fall, les changements les plus impactants sont :

**Budgétisation continue** : passer d'un budget par projet à un budget par équipe produit. Les équipes ont un budget permanent et décident elles-mêmes des priorités.

**Continuous Delivery** : automatiser le pipeline de déploiement pour que les mises en production soient fréquentes, petites et réversibles. Le risque de chaque déploiement diminue.

**CAB allégé** : remplacer le CAB hebdomadaire par des contrôles automatisés et un processus de déploiement à approbation légère pour les changements standards.

**Roadmap rolling** : remplacer la planification annuelle rigide par une roadmap glissante à 3-6 mois révisée trimestriellement.

## Water-Scrum-Fall et Sinra

Sinra s'adapte naturellement au Water-Scrum-Fall. Les **releases** permettent de planifier les livrables en accord avec les cycles de gouvernance. Les **cycles** représentent les sprints de développement. Les **capabilities** tracent les engagements pris lors du cadrage.

Les **statuses** permettent de distinguer les items en phase de développement actif de ceux en attente de validation ou de déploiement, rendant visible la « traîne » Water-Scrum-Fall.

La phase « Water » de cadrage produit naturellement une liste de capabilities à développer sur l'année. C'est exactement ce que représente un **projet** Sinra : un regroupement de capabilities en vue Gantt qui capture la vision long terme issue du cadrage, sans figer les détails d'exécution que les cycles gèrent ensuite de façon agile.

## Conclusion

Le Water-Scrum-Fall n'est ni une honte ni une fatalité. C'est le modèle de transition réaliste que traversent la plupart des grandes organisations en route vers une vraie agilité. Le reconnaître explicitement est la première étape pour l'améliorer. Les équipes qui savent dans quel modèle elles opèrent peuvent identifier les contraintes réelles et travailler à les réduire progressivement.
