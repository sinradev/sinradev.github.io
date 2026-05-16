---

title: "Modular Monolith : L'Architecture Que Tout le Monde Redécouvre"
subtitle: "Vertical Slice, domain-first, package by feature - comment une idée ancienne est devenue la réponse moderne à la complexité des microservices."
description: "Le modular monolith avec Vertical Slice Architecture n'est pas une nouveauté - c'est une redécouverte. Historique, principes, exemples de structure et pourquoi Sinra a choisi cette approche pour construire un produit maintenable."
date: 2026-05-16 10:00:00 +0100
categories: ["Engineering"]
excerpt: "Après des années à vendre des microservices comme la solution universelle, l'industrie revient à une idée plus simple : un seul déploiement, mais organisé autour des domaines métier. Le modular monolith fait son retour - et cette fois, il est intentionnel."
featured_image: /assets/images/blog/2026-05-16-modular-monolith-featured.png
---

## Le Retour du Monolithe Intentionnel

Il y a quelques années, dire « on construit un monolithe » dans une conférence technique revenait à admettre une défaite. Le monolithe était synonyme de code legacy, de dette technique accumulée, de systèmes impossibles à maintenir.

Aujourd'hui, quelque chose a changé.

Des équipes chez Shopify, Stack Overflow, Basecamp et GitHub parlent ouvertement de leurs monolithes bien construits. Des ingénieurs reconnus publient des articles sur les limites des microservices. Et une architecture particulière émerge comme alternative sérieuse :

**Le Modular Monolith avec Vertical Slice Architecture.**

Ce n'est pas une régression. C'est une évolution.

---

## Historique : Une Idée Qui a Plusieurs Vies

### Les Années 2000 : Le Monolithe Sans Structure

Les premiers frameworks web - Rails, Django, Spring MVC - ont imposé une organisation **horizontale** : toutes les vues ensemble, tous les modèles ensemble, tous les contrôleurs ensemble.

```
app/
  controllers/   <- toutes les routes
  models/        <- tous les modèles
  views/         <- tous les templates
  services/      <- toute la logique
```

Ça fonctionne bien jusqu'à environ 20-30 modèles. Au-delà, la navigation devient un cauchemar. Un changement dans `UserService` casse `OrderService`. Les dépendances circulaires prolifèrent. Les nouveaux développeurs ne savent pas par où commencer.

### 2010-2018 : La Fuite Vers les Microservices

Face à cette complexité, l'industrie a pris une décision radicale : **distribuer le problème**.

Si un monolithe devient ingérable, découpons-le en services indépendants. Chaque service gère son propre domaine, sa propre base de données, son propre déploiement.

Le problème ? La complexité ne disparaît pas - elle se déplace vers l'infrastructure.

- Comment les services communiquent-ils ? (REST ? gRPC ? événements ?)
- Comment gérer les transactions distribuées ?
- Comment déboguer une requête qui traverse 12 services ?
- Comment maintenir la cohérence des données entre services ?

Pour les équipes de Netflix, Uber ou Amazon, ce coût se justifie. Pour le reste, c'est souvent un surcoût injustifié.

### 2014 : Jimmy Bogard et la Vertical Slice Architecture

En 2014, **Jimmy Bogard** - créateur de AutoMapper et MediatR - formule ce qu'il observe dans les bases de code qu'il audite :

> « L'organisation habituelle par couches (Controller → Service → Repository) crée des couplages artificiels entre des features qui n'ont rien à voir les unes avec les autres. »

Sa proposition : organiser le code **verticalement par feature**, pas horizontalement par couche technique.

Chaque feature contient tout ce dont elle a besoin : sa requête, sa validation, son handler, son accès aux données, sa réponse.

```
features/
  CreateOrder/
    CreateOrderCommand.cs
    CreateOrderValidator.cs
    CreateOrderHandler.cs
    CreateOrderResponse.cs
  CancelOrder/
    CancelOrderCommand.cs
    CancelOrderHandler.cs
```

C'est la **Vertical Slice Architecture** - ou VSA. Une feature = une tranche verticale à travers toutes les couches.

### 2015-2020 : Domain-Driven Design Devient Mainstream

En parallèle, **Domain-Driven Design** (DDD) d'Eric Evans - publié en 2003 mais longtemps réservé à l'élite - devient plus accessible grâce aux travaux de Vaughn Vernon, Greg Young et Scott Millet.

Le concept central : organiser le code autour des **Bounded Contexts** - des frontières explicites entre domaines métier.

Un système de e-commerce ne pense pas « utilisateur » de la même façon dans le contexte des commandes, de la facturation et du support. Ce sont trois contextes distincts, avec leurs propres règles, leurs propres vocabulaires, leurs propres modèles.

L'idée **domain-first** (ou **package by feature**) en découle naturellement :

```
src/
  ordering/      <- tout ce qui concerne les commandes
  billing/       <- tout ce qui concerne la facturation
  inventory/     <- tout ce qui concerne le stock
  users/         <- tout ce qui concerne les utilisateurs
```

### 2020-2025 : La Synthèse - Modular Monolith

La synthèse de ces idées donne le **Modular Monolith** :

- Un seul déploiement (monolithe)
- Des modules fortement cohésifs et faiblement couplés (comme des microservices, mais dans le même processus)
- Des frontières explicites entre domaines (DDD Bounded Contexts)
- Organisation par feature ou slice (Vertical Slice Architecture)

Kijana Woodard, Sam Newman, Mauro Servienti et de nombreux architectes commencent à documenter et populariser ce pattern sous ce nom.

---

## Qui Utilise Cette Architecture ?

### Shopify

Shopify est l'exemple canonique. Leur monolithe Rails gère des milliards de transactions. Plutôt que de migrer vers des microservices, ils ont investi dans la **modularisation** de leur monolithe : des modules avec des interfaces explicites, des dépendances déclarées, des frontières respectées.

Leur outil interne **Packwerk** impose ces frontières à la compilation - un module ne peut pas appeler directement les classes d'un autre sans passer par son API publique.

### Stack Overflow

L'un des sites les plus consultés du monde tourne sur quelques serveurs et un monolithe .NET. Leur approche est explicitement **modular** : des projets .NET séparés par domaine, des interfaces claires, une discipline interne stricte.

### Basecamp / Hey

DHH (David Heinemeier Hansson) et l'équipe de Basecamp défendent activement le monolithe modulaire depuis des années. Basecamp et Hey, deux produits distincts, tournent sur des monolithes Rails organisés par domaine métier.

### GitHub (avant la migration partielle)

GitHub a longtemps fonctionné sur un monolithe Rails. Quand ils ont migré certaines parties vers des services, ils ont été explicites sur les raisons : des problèmes de scalabilité très spécifiques, pas une décision idéologique.

### Équipes .NET et Java Enterprise

Dans l'écosystème .NET, le pattern est très répandu grâce à des frameworks comme **MediatR** (CQRS + VSA), **Ardalis.Modulith** et les **Aspire** components de Microsoft.

En Java, **Spring Modulith** (officiellement supporté par Spring depuis 2023) fournit les outils pour construire et vérifier la modularité d'une application Spring Boot.

---

## Structure Concrète : À Quoi Ça Ressemble

### Approche 1 : Package by Feature (la base)

Le minimum viable du modular monolith : organiser par domaine, pas par couche technique.

**Avant (organisation horizontale) :**
```
src/
  controllers/
    UserController.ts
    OrderController.ts
    ProductController.ts
  services/
    UserService.ts
    OrderService.ts
    ProductService.ts
  repositories/
    UserRepository.ts
    OrderRepository.ts
    ProductRepository.ts
  models/
    User.ts
    Order.ts
    Product.ts
```

**Après (organisation verticale) :**
```
src/
  users/
    UserController.ts
    UserService.ts
    UserRepository.ts
    User.ts
    index.ts          <- API publique du module
  orders/
    OrderController.ts
    OrderService.ts
    OrderRepository.ts
    Order.ts
    index.ts
  products/
    ProductController.ts
    ProductService.ts
    ProductRepository.ts
    Product.ts
    index.ts
```

### Approche 2 : Vertical Slice Architecture (VSA)

Poussée plus loin, chaque **feature** est une unité autonome.

```
src/
  orders/
    create-order/
      CreateOrderRequest.ts
      CreateOrderValidator.ts
      CreateOrderHandler.ts
      CreateOrderResponse.ts
    cancel-order/
      CancelOrderRequest.ts
      CancelOrderHandler.ts
    get-order/
      GetOrderQuery.ts
      GetOrderHandler.ts
      GetOrderResponse.ts
    shared/
      Order.ts              <- modèle partagé dans le module
      OrderRepository.ts
```

Chaque slice est indépendante. Modifier « annuler une commande » ne peut pas casser « créer une commande » - elles ne partagent que le modèle de domaine.

### Approche 3 : Modular Monolith avec Frontières Explicites

Le niveau suivant : des modules comme des « mini-applications » avec leurs propres interfaces.

```
src/
  modules/
    ordering/
      api/              <- ce que les autres modules peuvent utiliser
        IOrderingModule.ts
        OrderDto.ts
      internal/         <- implémentation privée
        domain/
          Order.ts
          OrderItem.ts
        application/
          CreateOrderUseCase.ts
          CancelOrderUseCase.ts
        infrastructure/
          OrderRepository.ts
          OrderMapper.ts
      OrderingModule.ts  <- registre et bootstrap du module
    billing/
      api/
        IBillingModule.ts
        InvoiceDto.ts
      internal/
        ...
      BillingModule.ts
    inventory/
      api/
        IInventoryModule.ts
      internal/
        ...
      InventoryModule.ts
  app.ts                <- assemble les modules
```

**La règle fondamentale :** un module ne peut jamais importer directement depuis `internal/` d'un autre module. Il passe uniquement par `api/`.

### Exemple en Python (Django Modular)

```
myapp/
  core/             <- infrastructure partagée
  ordering/
    __init__.py     <- expose l'API publique
    models.py
    views.py
    urls.py
    services.py
    tests.py
  billing/
    __init__.py
    models.py
    views.py
    urls.py
    services.py
    tests.py
  inventory/
    __init__.py
    models.py
    views.py
    urls.py
    services.py
    tests.py
```

### Exemple en Java (Spring Modulith)

```java
// Spring Modulith impose la structure de packages
com.example.shop/
  ordering/          <- module Ordering
    OrderingModule.java
    Order.java
    OrderService.java
    internal/
      OrderRepository.java   <- inaccessible aux autres modules
  billing/           <- module Billing
    BillingModule.java
    Invoice.java
    BillingService.java
    internal/
      InvoiceRepository.java
```

```java
// Spring Modulith vérifie les dépendances à la compilation
@ApplicationModuleTest
class OrderingModuleTests {
    // Si Billing accède à OrderRepository (internal), le test échoue
}
```

---

## Les Principes Clés

### 1. Cohésion Forte, Couplage Faible

Ce qui change ensemble doit être ensemble. La page de création d'une commande, la logique de validation, l'accès aux données et la réponse HTTP forment une unité cohésive. Les séparer dans des couches différentes crée un couplage artificiel.

### 2. Frontières Explicites

Chaque module expose une **API publique** et cache son implémentation. Les autres modules n'accèdent qu'à cette API. C'est la même règle qu'entre microservices - mais sans le réseau.

### 3. Autonomie des Features

Une feature doit pouvoir être comprise, modifiée et testée sans toucher à d'autres features. Si changer « annuler une commande » nécessite de comprendre « créer une commande », la séparation est incorrecte.

### 4. Communication par Événements Entre Modules

Quand un module a besoin d'informer un autre d'un événement, il publie un événement de domaine - il ne l'appelle pas directement.

```typescript
// Ordering publie un événement
eventBus.publish(new OrderCreatedEvent(orderId, customerId, total));

// Billing s'abonne à cet événement
eventBus.subscribe(OrderCreatedEvent, (event) => {
  billingService.createInvoice(event.orderId, event.total);
});
```

Les modules restent découplés. Si Billing n'existe pas, Ordering fonctionne quand même.

---

## Modular Monolith vs Microservices : Le Vrai Comparatif

| Aspect | Monolithe traditionnel | Modular Monolith | Microservices |
|--------|----------------------|------------------|---------------|
| Déploiement | 1 unité | 1 unité | N unités |
| Complexité opérationnelle | Faible | Faible | Haute |
| Frontières de modules | Informelles | Explicites et vérifiées | Réseau + API |
| Transaction ACID | Native | Native | Saga pattern requis |
| Debugging | Simple | Simple | Distribué, complexe |
| Scalabilité | Tout ou rien | Tout ou rien | Indépendante par service |
| Migration vers microservices | Difficile | Naturelle | Déjà distribué |

Le modular monolith occupe une position stratégique : il donne les bénéfices de séparation des microservices (isolation, cohésion, frontières) sans le coût opérationnel.

Et si demain un module doit être extrait en service indépendant ? Les frontières sont déjà définies. La migration est une opération chirurgicale, pas une réécriture.

---

## Sinra et le Modular Monolith

Chez Sinra, cette architecture n'est pas théorique - c'est le fondement de notre base de code.

Sinra est un outil de gestion de projet. Il gère des **issues**, des **capabilities**, des **releases**, des **cycles**, des **projets**, des **équipes**, des **testings**, des **pages**. Autant de domaines distincts, avec leurs propres règles métier, leurs propres workflows, leurs propres représentations.

### Pourquoi le Modular Monolith s'imposait

**Nos domaines ont des cycles de vie différents.** La logique de création d'une release est indépendante de la logique de gestion des cycles. Un changement dans les testings ne devrait pas impacter les issues.

**Notre équipe est de taille raisonnée.** Les microservices optimisent pour des équipes de 50+ développeurs qui doivent déployer indépendamment. À notre taille, cette complexité serait un overhead pur.

**Nos transactions sont fréquemment cross-domaine.** Fermer un cycle implique de mettre à jour les issues non terminées, de notifier les capabilities impactées, de mettre à jour la release associée. Avec des microservices, chaque opération de ce type deviendrait un Saga distribué. Avec un modular monolith, c'est une transaction ACID simple.

**La traçabilité est au cœur du produit.** Sinra permet de voir l'état exact d'un projet à n'importe quel moment. Le debugging d'un état incohérent est incomparablement plus simple quand tout se passe dans le même processus.

### Notre Organisation

```
app/
  domains/
    project_management/   <- issues, capabilities, cycles, releases
      issues/             <- décorateurs, extensions de collection
      capabilities/       <- services d'assignation, queries
      cycles/             <- value objects, queries
      releases/           <- calculateurs de capacité, value objects
    table_filtering/      <- commandes, queries, stratégies, opérateurs
    tenancy/              <- lifecycle organisation (setup, destroy)
  shared/
    sorting/              <- services et stratégies de tri
    mentions/             <- extraction et traitement des mentions
  models/                 <- modèles Rails (issues, teams, testings, pages...)
  controllers/            <- controllers minces, logique dans les domaines
```

Les domaines métier regroupent la logique complexe par contexte : `project_management` concentre tout ce qui touche au travail planifié, `table_filtering` isole le moteur de filtrage avancé, `tenancy` gère le cycle de vie des organisations. Les modèles Rails restent le cœur de l'accès aux données - les domaines viennent se greffer pour encapsuler la logique qui dépasse le modèle seul.

### Ce que ça change concrètement pour nos utilisateurs

**La cohérence des données est garantie.** Quand vous assignez une capability à une release, le lien entre les issues sous-jacentes et cette release est toujours cohérent - pas de synchronisation asynchrone, pas d'état intermédiaire.

**Les performances sont prévisibles.** Pas de latence réseau entre modules, pas de timeout inter-services, pas de retry storms à gérer.

**Le développement est rapide.** Ajouter une feature dans le module `testings` n'implique pas de déployer un nouveau service, de configurer un contrat d'API, de gérer la compatibilité entre versions.

---

## Quand Utiliser le Modular Monolith

Cette architecture est le bon choix quand :

- **Votre domaine est complexe** mais votre équipe n'est pas encore une organisation de 200 développeurs
- **Vous avez besoin de cohérence transactionnelle** entre plusieurs domaines
- **Votre surface de déploiement doit rester simple** : une équipe DevOps limitée, un budget infrastructure contraint
- **Vous construisez un produit en phase d'exploration** : les frontières de domaine évoluent vite en début de projet
- **Vous voulez la possibilité de migrer vers des microservices plus tard** sans réécrire

Ce n'est pas le bon choix si :
- Vous avez des parties du système avec des besoins de scalabilité radicalement différents (le traitement vidéo de Netflix n'a pas les mêmes besoins que l'API de recommandations)
- Vos équipes doivent déployer indépendamment à haute fréquence
- Vous avez déjà des contraintes techniques qui imposent des technologies différentes par domaine

---

## Conclusion

Le modular monolith n'est pas une architecture de compromis. C'est une architecture adaptée à un contexte précis : des domaines complexes, des équipes de taille raisonnée, des besoins de cohérence transactionnelle, une volonté de rester opérationnellement simple.

L'industrie a passé dix ans à croire que la complexité du système devait être gérée par la distribution. On redécouvre progressivement qu'elle peut être gérée par la structure interne.

Vertical Slice Architecture, domain-first, package by feature : ces termes différents décrivent la même idée fondamentale. **Le code doit être organisé autour de ce qu'il fait, pas de comment il est techniquement structuré.**

Chez Sinra, ce choix n'est pas nostalgique. C'est délibéré, justifié et assumé. Et il nous permet de livrer des features cohérentes, fiables, et traçables - ce qui est précisément ce que Sinra promet à ses utilisateurs pour gérer leurs propres projets.

---

*Sinra organise le travail d'équipe autour d'issues, de capabilities, de releases et de cycles - des concepts concrets plutôt que du jargon abstrait. L'architecture de Sinra suit le même principe : des modules concrets, des frontières explicites, une organisation qui reflète le métier.*
