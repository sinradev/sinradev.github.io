---

title: "DDD en pratique : quand ça aide, quand c'est du bruit"
subtitle: "Domain-Driven Design est l'un des concepts les plus influents de l'ingénierie logicielle des vingt dernières années. C'est aussi l'un des plus souvent mal appliqués et sur-utilisés."
description: "Le Domain-Driven Design apporte une valeur réelle dans certains contextes. Dans d'autres, il ajoute de la complexité sans bénéfice. Comprendre la différence évite des années de ceremony pour ceremony."
categories: ["Développement Productivité"]
excerpt: "L'équipe a passé trois semaines à modéliser les bounded contexts, les aggregates et les domain events de son application de gestion de contenu. L'application fait du CRUD sur cinq tables. C'est le signe que DDD est utilisé comme fin en soi, pas comme outil."
date: 2026-06-06 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-06-ddd-quand-ca-aide-featured.svg

---

Domain-Driven Design est sorti du livre d'Eric Evans en 2003. Il a pris vingt ans à devenir mainstream - peut-être parce que le livre est dense, peut-être parce qu'il faut un certain volume de complexité pour en voir la valeur, peut-être parce qu'il a fallu l'émergence des microservices pour que ses concepts de découpe de domaine trouvent leur contexte d'application naturel.

Aujourd'hui, DDD est partout dans les conversations d'architecture. Bounded contexts, aggregates, domain events, ubiquitous language, context maps - ces termes apparaissent dans les designs docs, les READMEs, les offres d'emploi. Et comme tout concept devenu populaire, il est appliqué aussi bien dans des contextes où il apporte une valeur réelle que dans des contextes où il ne fait qu'ajouter de la complexité sans bénéfice.

## Ce que DDD résout vraiment

Pour comprendre quand DDD est utile, il faut comprendre quel problème il cherche à résoudre.

Le problème que DDD adresse : la dérive entre le modèle mental des experts métier et le modèle technique implémenté par les développeurs. Quand ces deux modèles divergent, la communication devient difficile, les malentendus se multiplient, et le code finit par implémenter des règles métier que personne dans l'organisation ne reconnaît vraiment.

DDD propose une solution en plusieurs parties : aligner les termes utilisés par les développeurs et par les experts métier (ubiquitous language), découper le système en domaines cohérents avec des frontières explicites (bounded contexts), et modéliser chaque domaine en reflétant fidèlement ses règles métier (domain model).

Cette solution a une vraie valeur dans un contexte spécifique : quand le domaine métier est complexe, quand les règles métier sont nombreuses et interdépendantes, et quand les experts métier jouent un rôle actif dans la définition du système.

## Quand DDD apporte de la valeur

Les contextes où DDD apporte une valeur nette :

**Les systèmes financiers et d'assurance.** Ces domaines ont des règles métier extrêmement complexes : des règles de calcul qui dépendent de dizaines de variables, des invariants stricts sur la cohérence des données, des processus séquentiels avec des états clairement définis. La modélisation précise des aggregates et des domain events est directement utile ici.

**Les systèmes avec plusieurs domaines distincts qui évoluent indépendamment.** Une plateforme e-commerce a un domaine de catalogue (les produits et leurs attributs), un domaine de commandes (le processus d'achat et la gestion des états), un domaine de livraison (la logistique). Ces domaines ont des règles différentes, des experts différents, des cycles d'évolution différents. Les séparer en bounded contexts rend chaque équipe plus autonome.

**Les systèmes avec des équipes multiples qui doivent collaborer.** Quand plusieurs équipes travaillent sur des parties d'un même système, les bounded contexts définissent les frontières d'équipe et les interfaces entre elles. C'est une utilisation directe de Conway's Law.

**Les domaines où la sémantique est critique.** Dans certains domaines, un même mot a des sens différents selon le contexte. « Client » signifie quelque chose différent dans le domaine commercial (une relation contractuelle) et dans le domaine technique (une connexion réseau). L'ubiquitous language force à clarifier ces ambiguïtés.

## Quand DDD crée de la complexité inutile

Les contextes où DDD est contre-productif :

**Les applications CRUD simples.** Une application de gestion de contacts, un blog, un outil de facturation simple - ces systèmes ont des domaines peu complexes, des règles métier limitées et des équipes souvent petites. Ajouter des aggregates, des repositories et des domain events pour implémenter des opérations de lecture et d'écriture basiques produit un code plus verbeux sans aucun avantage.

**Les startups en phase de découverte.** Quand le produit change radicalement tous les mois, modéliser soigneusement les bounded contexts est un investissement qui se périme avant d'être amorti. La flexibilité est plus précieuse que la précision du modèle dans ce contexte.

**Les petites équipes.** DDD suppose une collaboration intensive entre développeurs et experts métier, des sessions d'event storming, des ateliers de modélisation. Ces pratiques ont un coût en temps et en organisation. Pour une équipe de trois développeurs, ce coût est disproportionné.

**Les domaines techniques sans logique métier.** Un service d'infrastructure, un proxy, un système de logging - ces composants n'ont pas de « domaine » au sens métier du terme. Appliquer DDD à des composants purement techniques est une confusion de catégories.

## L'event storming sans les raisons

L'event storming - la technique de modélisation collaborative développée par Alberto Brandolini - est l'une des pratiques DDD les plus utiles quand elle est appliquée correctement.

Son principe : réunir développeurs et experts métier pour modéliser les événements qui se produisent dans le domaine, en commençant par les résultats (les events) plutôt que par les structures (les entités). Cette approche révèle les processus implicites, les règles cachées et les ambiguïtés de la communication.

Le problème : l'event storming se pratique souvent sans les experts métier. L'équipe technique fait un event storming entre elle pour « modéliser le domaine ». Ce faisant, elle modélise sa propre compréhension du domaine - qui peut diverger significativement de la réalité.

Un event storming sans experts métier produit un modèle élaboré d'hypothèses. Ce n'est pas inutile, mais c'est loin de la promesse originale.

## L'ubiquitous language en pratique

L'un des concepts les plus précieux de DDD est aussi l'un des plus simples : utiliser les mêmes termes dans le code et dans les conversations métier.

Ce principe a une valeur directe même sans adopter tout le reste de DDD. Quand le code utilise « Customer » et que le métier parle de « Client », chaque conversation produit une traduction implicite qui crée des opportunités de malentendu.

L'ubiquitous language peut être adopté de manière légère : tenir un glossaire des termes métier, vérifier que le code utilise ces termes, corriger les divergences quand elles apparaissent. Pas besoin de bounded contexts ou d'aggregates pour en bénéficier.

C'est peut-être la leçon la plus directement applicable de DDD pour les équipes qui ne font pas de développement de systèmes complexes.

## La confusion entre DDD tactique et DDD stratégique

DDD est souvent présenté comme un ensemble cohérent de pratiques. En réalité, il y a deux niveaux qui s'appliquent dans des contextes différents.

Le DDD stratégique (bounded contexts, context maps, domain discovery) est utile pour toutes les équipes qui construisent des systèmes avec plusieurs domaines distincts. Il aide à découper le système et à définir les frontières de responsabilité. Son coût est modéré et ses bénéfices sont larges.

Le DDD tactique (aggregates, value objects, domain events, repositories) est un ensemble de patterns d'implémentation qui est utile pour les domaines avec des règles métier complexes. Son coût est plus élevé : il demande une familiarisation des développeurs avec les patterns et une discipline d'implémentation significative. Ses bénéfices sont réels mais seulement dans les domaines qui en ont besoin.

La plupart des équipes qui « font DDD » appliquent les patterns tactiques partout, y compris dans les parties du système qui n'en ont pas besoin. Elles obtiennent la complexité sans les bénéfices.

La pratique raisonnée : appliquer le DDD stratégique largement pour clarifier les frontières, et réserver le DDD tactique aux bounded contexts où la complexité métier le justifie vraiment.

## Ce que DDD enseigne même quand on ne l'adopte pas

Même pour les équipes qui ne pratiquent pas DDD formellement, les concepts centraux ont une valeur pédagogique.

La question « quel est le domaine de ce composant ? » est une bonne question à se poser sur n'importe quelle architecture. Elle force à penser en termes de responsabilité et de cohérence, pas juste en termes de structure technique.

La question « est-ce que les développeurs et les experts métier utilisent les mêmes mots pour les mêmes choses ? » révèle souvent des malentendus profonds qu'aucune revue de code n'aurait trouvés.

La question « quels sont les événements importants dans ce domaine ? » est une façon de penser le système en termes de flux plutôt que de structures statiques, ce qui est souvent plus proche de la réalité métier.

Ces questions valent même si on ne construit pas d'aggregates.

---

DDD est un outil puissant dans les domaines complexes. Comme tous les outils puissants, il est contre-productif quand on l'applique sans discernement.

Le critère de décision est simple : est-ce que la complexité du domaine justifie l'investissement des patterns tactiques ? Si le domaine a des règles métier simples et peu nombreuses, la réponse est non. Si le domaine est complexe, multi-acteur et en évolution constante, la réponse est probablement oui.

Tout le reste est ceremony pour ceremony.
