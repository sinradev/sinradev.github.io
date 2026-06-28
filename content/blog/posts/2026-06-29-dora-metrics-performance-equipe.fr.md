---

title: "DORA metrics : les 4 métriques qui mesurent vraiment la performance d'une équipe"
subtitle: "Vélocité, story points, tickets fermés : ces chiffres ne disent rien de la santé d'une équipe. Les DORA metrics, elles, sont corrélées aux résultats business réels. Voici pourquoi elles changent la conversation."
description: "Les 4 métriques DORA - Deployment Frequency, Lead Time for Changes, Change Failure Rate et Time to Restore Service - sont les seuls indicateurs prouvés scientifiquement pour mesurer la performance d'une équipe de développement. Découvrez pourquoi ils remplacent avantageusement vélocité et story points."
categories: ["Gestion de Projet", "Ingénierie"]
excerpt: "Votre équipe livre 40 story points par sprint. Le backlog avance. Les tickets se ferment. Et pourtant, les utilisateurs attendent des features depuis six mois. Quelque chose ne tourne pas rond. Le problème : vous mesurez l'activité, pas la livraison de valeur."
date: 2026-06-29 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-29-dora-metrics-performance-equipe-featured.png

---

Votre équipe livre 40 story points par sprint. Le backlog avance. Les tickets se ferment. Et pourtant, les utilisateurs attendent des features depuis six mois, les incidents se multiplient en production, et chaque déploiement est une source d'anxiété collective. Quelque chose ne tourne pas rond.

Le problème n'est pas l'équipe. Le problème, c'est ce que vous mesurez.

La vélocité, les story points, le nombre de tickets fermés : ces métriques mesurent l'activité. Pas la livraison de valeur. Pas la fiabilité du système. Pas la capacité réelle de l'équipe à faire avancer un produit.

Les DORA metrics existent précisément pour corriger ce problème.

## D'où viennent les DORA metrics ?

DORA signifie DevOps Research and Assessment. C'est un programme de recherche lancé par Google qui a analysé pendant plusieurs années les pratiques de milliers d'équipes de développement dans des entreprises de toutes tailles.

L'objectif était simple : trouver quelles pratiques et quelles métriques corrèlent réellement avec la performance organisationnelle. Pas ce que les gens pensent qui marche. Ce qui marche vraiment, mesuré sur des données réelles.

Le résultat : 4 métriques qui se sont révélées être des prédicteurs fiables de la performance business - rentabilité, part de marché, satisfaction client, et capacité à atteindre les objectifs organisationnels.

Ces 4 métriques ne mesurent pas si l'équipe est occupée. Elles mesurent si l'équipe livre.

## Les 4 métriques DORA

### 1. Deployment Frequency : à quelle fréquence déployez-vous ?

La fréquence de déploiement mesure combien de fois l'équipe met du code en production sur une période donnée.

Les équipes performantes déploient plusieurs fois par jour. Les équipes peu performantes déploient une fois par mois, voire moins.

Ce n'est pas une question d'organisation ou de secteur. C'est une question de pratiques : trunk-based development, feature flags, pipelines CI/CD matures. Quand ces pratiques sont en place, déployer devient un acte anodin. Quand elles manquent, chaque déploiement est un événement risqué qu'on reporte.

L'ironie : plus on reporte les déploiements, plus ils deviennent risqués, ce qui pousse à les reporter encore davantage.

### 2. Lead Time for Changes : combien de temps entre le commit et la prod ?

Le lead time for changes mesure le délai entre le moment où un développeur écrit du code et le moment où ce code est en production et utilisable par les utilisateurs.

Ce délai inclut : la revue de code, les tests automatisés, les processus d'approbation, le déploiement lui-même.

Les équipes Elite (la catégorie la plus performante selon DORA) ont un lead time inférieur à une heure. Les équipes peu performantes ont un lead time de plusieurs semaines voire mois.

Un lead time long n'est pas un problème de vitesse de développement. C'est un problème de friction organisationnelle : processus d'approbation trop lourds, branches longues qui divergent, suites de tests qui prennent des heures, environnements de staging instables.

### 3. Change Failure Rate : quel pourcentage de déploiements causent un incident ?

Le taux d'échec des changements mesure quelle proportion de déploiements en production nécessite un correctif urgent, un rollback, ou cause une dégradation de service.

Les équipes Elite ont un taux compris entre 0 % et 15 %. Les équipes peu performantes peuvent dépasser 45 %.

Contre-intuitivement, les équipes qui déploient le plus souvent ont généralement un meilleur change failure rate. Des déploiements petits et fréquents sont plus faciles à tester, à valider, et à annuler si nécessaire. Les gros déploiements rares sont plus risqués, pas moins.

### 4. Time to Restore Service : combien de temps pour récupérer après un incident ?

Le temps de restauration mesure combien de temps s'écoule entre le début d'un incident en production et son résolution.

Les équipes Elite restaurent le service en moins d'une heure. Les équipes peu performantes mettent entre une semaine et un mois.

Cette métrique reflète la maturité des pratiques d'observabilité (monitoring, alerting, tracing), la qualité de la documentation des systèmes, et la capacité de l'équipe à diagnostiquer et corriger rapidement sous pression.

## Pourquoi ces 4 métriques, et pas d'autres ?

La corrélation avec la performance business a été établie statistiquement sur plusieurs années d'études. Ce n'est pas une théorie. C'est un résultat empirique.

Les équipes qui performent bien sur ces 4 métriques tendent à :
- Livrer des features plus rapidement
- Avoir moins d'incidents
- Rembourser leur dette technique plus facilement
- Avoir des équipes moins en tension

Les autres métriques couramment utilisées - vélocité, story points, nombre de commits, couverture de tests - n'ont pas montré de corrélation claire avec ces résultats. Elles peuvent être utiles localement, pour diagnostiquer un problème spécifique. Elles ne sont pas des indicateurs de santé organisationnelle.

## Le problème des métriques vanité

La vélocité est la métrique vanité par excellence. Elle mesure combien de points une équipe complète par sprint. Le problème : les points ne sont pas étalonnés entre équipes, ils dérivent dans le temps au sein d'une même équipe, et ils récompensent l'estimation haute plutôt que la livraison réelle.

Une équipe peut avoir une vélocité élevée et ne rien livrer d'utile en production. Une équipe peut avoir une vélocité basse et livrer de la valeur chaque jour.

Les story points ont une utilité limitée pour la planification interne. Utilisés comme indicateur de performance, ils créent des comportements contre-productifs : estimation gonflée, découpage artificiel des tickets, optimisation du chiffre plutôt que du résultat.

Le nombre de tickets fermés souffre du même problème. Fermer 20 tickets sans valeur business réelle n'est pas une performance.

## Comment mesurer les DORA metrics concrètement ?

**Deployment Frequency** : loggez chaque déploiement en production avec un timestamp. Calculez la fréquence sur les 30 derniers jours.

**Lead Time for Changes** : mesurez le temps entre le premier commit d'une branche et le merge en production. La plupart des outils CI/CD peuvent l'extraire automatiquement.

**Change Failure Rate** : taggez chaque incident en production avec le déploiement qui l'a causé. Divisez par le nombre total de déploiements.

**Time to Restore** : loggez l'heure de début et de fin de chaque incident. Calculez la moyenne.

Aucune de ces mesures ne nécessite un outil sophistiqué au départ. Un tableur suffit pour commencer.

## Le lien avec l'organisation du travail

Les DORA metrics ne s'améliorent pas en demandant à l'équipe de « faire mieux ». Elles s'améliorent en changeant les structures et les processus.

Un cycle de travail bien découpé dans Sinra - avec des issues claires, des capabilities définies, et une release cible précise - réduit naturellement le lead time. Quand chaque issue a un périmètre clair et une release associée, le code entre plus vite en production parce qu'il n'attend pas d'autres issues pour avoir du sens.

Des releases bien définies permettent aussi de mesurer le change failure rate de façon significative : chaque release est un périmètre de changement documenté, avec des issues et des testings associés.

L'organisation du travail n'est pas séparable de la performance technique. Les DORA metrics le rendent visible.

## Par où commencer ?

Choisissez une métrique. Une seule. Mesurez-la pendant 30 jours sans chercher à l'améliorer. Juste comprendre où vous en êtes.

Ensuite, cherchez les causes racines des mauvais chiffres. Un lead time long vient souvent d'une revue de code lente ou de branches trop longues. Un change failure rate élevé vient souvent de tests insuffisants ou d'un périmètre de déploiement trop large.

Corrigez une cause. Mesurez à nouveau. Itérez.

C'est plus lent que d'implémenter un nouveau framework de performance. Et beaucoup plus efficace.
