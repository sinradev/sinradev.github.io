---

title: "DSDM (Dynamic Systems Development Method) : L'Agilité avec des Garde-Fous"
subtitle: "DSDM : le framework agile britannique qui met le temps et le budget fixes, mais laisse le scope variable"
description: "DSDM (Dynamic Systems Development Method) est un framework agile qui inverse le triangle de gestion de projet : temps et budget sont fixés, c'est le périmètre qui s'adapte. Découvrez ses principes et son application."
categories: ["Méthodologie"]
excerpt: "DSDM renverse la logique traditionnelle : plutôt que de fixer le scope et faire varier le temps, il fixe le temps et le budget, et laisse le scope s'adapter à la réalité. Une approche pragmatique et sous-estimée."
date: 2026-04-25 09:00:00 +0100
featured_image: /assets/images/blog/2026-04-16-dsdm-featured.png
---

## Qu'est-ce que DSDM ?

**DSDM** (Dynamic Systems Development Method) est un framework agile développé au Royaume-Uni en 1994 par le DSDM Consortium, un groupe de praticiens et d'organisations qui cherchaient une alternative structurée au RAD.

Sa proposition de valeur centrale est radicale : **le temps et le budget d'un projet ne devraient pas être des variables, ce sont des constantes**. Ce qui varie en fonction de la réalité, c'est le **périmètre** (scope). Cette inversion du triangle de gestion de projet classique (scope-délai-coût) est le coeur philosophique de DSDM.

DSDM est souvent classé comme méthode agile, mais il se distingue par sa structure formelle et ses processus définis, le rendant plus hybride que purement agile.

## Les Huit Principes de DSDM

DSDM repose sur huit principes non-négociables :

1. **Se concentrer sur les besoins métier** : chaque décision est évaluée selon sa valeur pour le business, pas selon des critères techniques.

2. **Livrer à temps** : les délais sont sacrés. On réduit le scope plutôt que de retarder.

3. **Collaborer** : clients, utilisateurs et développeurs travaillent ensemble en équipe intégrée, pas en silos.

4. **Ne jamais compromettre la qualité** : le niveau de qualité est défini en début de projet et ne baisse jamais, même sous pression.

5. **Construire de façon incrémentale sur des fondations solides** : chaque incrément est stable et utilisable. Pas de dette technique accumulée.

6. **Développer de façon itérative** : le feedback continu permet d'affiner la compréhension et d'améliorer le produit.

7. **Communiquer de façon continue et claire** : l'information circule librement et explicitement, pas par email ou documentation tardive.

8. **Démontrer le contrôle** : le projet est toujours visible et sous contrôle grâce à des indicateurs clairs.

## Le Cycle de Vie DSDM

DSDM définit un cycle de vie structuré en plusieurs phases :

**Pré-projet** : étude de faisabilité initiale, sélection des projets appropriés.

**Fondations** : comprendre les besoins à haut niveau, définir l'architecture de base, planifier le projet.

**Exploration** : affiner et développer les fonctionnalités prioritaires en itérations.

**Ingénierie** : développer, tester et intégrer les fonctionnalités retenues.

**Déploiement** : livrer le système aux utilisateurs, obtenir les approbations formelles.

**Post-projet** : évaluer les bénéfices réalisés et identifier les leçons apprises.

## La Priorité MoSCoW

DSDM popularise la technique **MoSCoW** de priorisation, encore très utilisée aujourd'hui :

- **M**ust have : fonctionnalités non-négociables. Sans elles, le produit ne peut pas fonctionner.
- **S**hould have : importantes mais pas vitales pour la version initiale.
- **C**ould have : souhaitables si le temps le permet.
- **W**on't have (this time) : explicitement hors scope pour cette version.

Cette hiérarchie permet de réduire le scope de façon structurée quand la date limite approche, sans créer de confusion sur les priorités.

## Forces de DSDM

**Prévisibilité** : livrer à temps est une promesse tenue. Les parties prenantes savent quand elles auront quelque chose.

**Gouvernance formelle** : DSDM a des processus définis, des rôles clairement délimités, et des points de contrôle. Il convient aux organisations qui ont besoin de structure.

**Qualité non-négociable** : contrairement à certaines méthodes agiles où la qualité est parfois sacrifiée à la vitesse, DSDM la protège explicitement.

**Gestion des risques** : le principe de livraison incrémentale réduit le risque de tout perdre si le projet dérive.

## Limites de DSDM

**Disponibilité des utilisateurs** : DSDM exige une participation intensive des utilisateurs finaux. Sans eux, le processus s'enraye.

**Complexité de mise en oeuvre** : DSDM est plus structuré que Scrum ou Kanban. La certification AgilePM (basée sur DSDM) témoigne de cette complexité.

**Moins connu** : comparé à Scrum, DSDM est peu répandu hors du Royaume-Uni et des organisations qui ont adopté AgilePM.

**Rigidité des délais** : le principe « livrer à temps ou réduire le scope » peut créer des tensions si le scope minimal viable n'est pas suffisant.

## DSDM et Sinra

Sinra s'inspire de certains principes DSDM : les **cycles** time-boxés, la livraison incrémentale, la collaboration continue. Mais Sinra prend une position différente sur un point fondamental : **la priorisation MoSCoW**.

Dans Sinra, lorsqu'une tâche entre dans un **cycle**, c'est parce qu'elle a été délibérément choisie et planifiée. Par défaut, chaque **issue** a son importance et doit être complétée. Il n'y a pas de place pour du « Should have » ou du « Won't have » au sein d'un cycle : si une tâche n'est pas prioritaire, elle n'intègre pas le cycle en premier lieu.

Cette philosophie évite le piège MoSCoW où des fonctionnalités « Could have » s'accumulent indéfiniment en bas de liste sans jamais être traitées ni abandonnées officiellement. Dans Sinra, la décision se prend **avant** le cycle, pas pendant : soit une capability rejoint la **release**, soit elle attend. Une fois engagée, elle est terminée.

Les **projets** Sinra permettent justement de répondre au besoin de visibilité long terme que MoSCoW tente de satisfaire : en regroupant des **capabilities** futures dans un projet, on obtient une vue type Gantt sur ce qu'on veut développer, sans avoir à hiérarchiser les tâches en cours avec des étiquettes de priorité flottantes.

## Conclusion

DSDM est un framework mature et structuré qui apporte une discipline que certaines méthodes agiles ne fournissent pas. Son principe central, fixer le temps et laisser le scope varier, est une réponse pragmatique à la réalité des projets. En 2026, DSDM est la base de la certification AgilePM, populaire dans les organisations qui cherchent une agilité avec des garde-fous formels.
