---

title: "FDD (Feature Driven Development) : Livrer des Fonctionnalités, Pas des Processus"
subtitle: "Feature Driven Development : la méthode agile centrée sur les fonctionnalités pour les équipes de grande taille"
description: "Le FDD (Feature Driven Development) est une méthode agile qui organise le développement autour de fonctionnalités courtes et livrable. Découvrez ses 5 processus, ses bonnes pratiques et pourquoi il excelle pour les grandes équipes."
categories: ["Méthodologie"]
excerpt: "Pendant que Scrum organise le travail en sprints, FDD l'organise en features. Une feature = 2 jours de travail maximum. Cette contrainte simple transforme la façon dont les équipes pensent et livrent."
date: 2026-05-08 09:00:00 +0100
featured_image: /assets/images/blog/2026-04-16-fdd-feature-driven-development-featured.png
---

## Qu'est-ce que FDD ?

**FDD** (Feature Driven Development) est une méthode de développement agile créée par Jeff De Luca et Peter Coad en 1997 pour un projet bancaire à Singapour (150 développeurs). Elle est décrite dans le livre « Java Modeling in Color with UML » (1999) et popularisée dans « A Practical Guide to Feature-Driven Development » (2002).

Sa proposition centrale est simple mais puissante : **organiser tout le développement autour de fonctionnalités (features) courtes et livrable**. Une feature est définie comme « une action valorisée par le client, aussi petite que possible ». La règle d'or : **une feature doit pouvoir être développée en 2 semaines maximum** (et idéalement en 2 à 5 jours).

## Les 5 Processus FDD

**Processus 1 : Développer un modèle global (Develop an Overall Model)**
Une équipe d'experts du domaine et d'architectes développe un modèle objet de haut niveau du système. Ce modèle oriente toutes les décisions de conception futures. Il est construit en ateliers collaboratifs en 1 à 2 semaines.

**Processus 2 : Construire la liste des features (Build a Feature List)**
Le modèle global est décomposé en liste de features organisées selon une hiérarchie :
- **Domaine** : zone métier principale (ex : « Gestion des Clients »)
- **Activity Set** : groupe de fonctionnalités (ex : « Créer un Client »)
- **Feature** : fonctionnalité individuelle (ex : « Créer un compte client particulier »)

**Processus 3 : Planifier par feature (Plan by Feature)**
Les features sont priorisées et assignées aux équipes. Les propriétaires de features (Feature Owners) et les classes (Class Owners) sont désignés.

**Processus 4 : Concevoir par feature (Design by Feature)**
Pour chaque groupe de features, un Chef Programmeur planifie une itération de conception. L'équipe crée des diagrammes de séquence, des artefacts de conception détaillée.

**Processus 5 : Construire par feature (Build by Feature)**
Les développeurs implémentent les features selon les designs créés. Chaque feature passe par inspection de code, tests unitaires, et intégration avant d'être marquée comme complète.

## Les Meilleures Pratiques FDD

FDD définit 6 « best practices » qui lui sont propres :

1. **Domain Object Modeling** : modéliser le domaine métier via des objets colorés (notation spécifique FDD)
2. **Developing by Feature** : tout développement se fait dans le contexte d'une feature
3. **Individual Class (Code) Ownership** : chaque classe de code a un propriétaire responsable
4. **Feature Teams** : petites équipes dynamiques formées pour chaque feature
5. **Inspections** : revues de code formelles selon le processus Fagan
6. **Regular Builds** : builds réguliers avec une version de référence toujours disponible
7. **Configuration Management** : gestion de version rigoureuse
8. **Reporting/Visibility** : reporting de progression clair et régulier

## FDD vs Scrum : Quelle Différence ?

| Critère | FDD | Scrum |
|---------|-----|-------|
| Unité de travail | Feature (2 semaines max) | User story / Sprint |
| Rôles | Architecte, Dev Manager, Class Owner, Feature Owner, Expert Domaine | Product Owner, Scrum Master, Dev Team |
| Planification | Long terme possible (liste features complète) | Backlog progressif |
| Taille équipe | Adaptable (grandes équipes) | Petites équipes (5-9) |
| Modélisation | UML + Domain Modeling | Rare, souvent informelle |
| Documentation | Modèle de domaine | User stories |

## FDD pour les Grandes Équipes

FDD est l'une des rares méthodes agiles explicitement conçues pour **les grandes équipes** (50-200+ développeurs). Là où Scrum recommande des équipes de 5-9 personnes (et utilise des Scrum of Scrums pour la mise à l'échelle), FDD organise nativement le travail pour des équipes importantes via sa hiérarchie domaine/activity set/feature.

## FDD et Sinra

La hiérarchie FDD (domaine, activity set, feature) se mappe naturellement sur la structure Sinra. Les **capabilities** correspondent aux Activity Sets FDD, les **issues** aux features individuelles. Les **releases** regroupent les features complétées, et les **cycles** correspondent aux itérations de Design et Build par feature.

La notion de « Class Owner » FDD résonne avec les **rôles** et assignations dans Sinra, où chaque issue peut avoir un responsable clairement désigné.

La Feature List FDD, construite en phase 2 comme catalogue complet de toutes les features à développer, correspond précisément à un **projet** Sinra : un ensemble de capabilities organisées en vue Gantt qui donne la visibilité long terme sur tout ce que l'équipe veut construire, avant même que les cycles de développement ne commencent.

## Conclusion

FDD est une méthode agile sous-estimée, particulièrement pour les organisations qui gèrent de grandes équipes et qui ont besoin d'une structure plus rigoureuse que Scrum sans la lourdeur du RUP. Sa définition stricte de la feature (livrable en 2 semaines maximum) est une discipline salutaire qui force les équipes à décomposer le travail en unités tangibles et mesurables.
