---

title: "Microservices : Vous N'Êtes Pas Netflix"
subtitle: "Pourquoi la tendance des microservices cache souvent une mauvaise décision technique déguisée en modernité."
description: "Tout le monde veut des microservices parce que Netflix, GitHub et Airbnb les utilisent. Mais 90% des projets n'ont pas ces problèmes. Un monolithe bien construit est souvent la meilleure architecture - et certainement la plus simple à maintenir."
date: 2026-05-06 10:00:00 +0100
categories: ["Engineering"]
excerpt: "« On va faire des microservices. » Cette phrase est devenue le signal d'une décision technique prise par imitation plutôt que par nécessité. Voici pourquoi, dans la majorité des cas, un monolithe est un meilleur choix."
featured_image: /assets/images/blog/2026-05-06-microservices-monolithe-featured.png
---

## Le Fantasme de l'Architecture Distribuée

Ouvrez une conversation technique dans n'importe quelle startup. Au bout de cinq minutes, quelqu'un dit :

> « On devrait migrer vers les microservices. »

Et là, la salle opine. Les CTO hochen la tête. Les développeurs seniors pensent à leur prochain CV. Les slides PowerPoint mentionnent Netflix. GitHub. Airbnb. Spotify.

**Personne ne pose la vraie question : est-ce qu'on a les mêmes problèmes qu'eux ?**

La réponse, dans 90% des cas, est non.

## Pourquoi Tout le Monde Veut des Microservices

La raison est simple : **l'imitation sans contexte**.

Quand Netflix publie un article de blog expliquant comment ils ont découpé leur monolithe en 700 services indépendants, les ingénieurs du monde entier lisent ça comme une prescription médicale. Comme si Netflix avait trouvé La Vérité Architecturale.

Ce qu'on oublie de lire, c'est le contexte :

- Netflix sert **250 millions d'abonnés** dans 190 pays
- Leur ingénierie emploie des milliers de personnes
- Ils ont des équipes entières dédiées uniquement à la gestion de l'infrastructure distribuée
- Ils ont migré vers les microservices **après** avoir souffert des limites d'un monolithe à cette échelle

GitHub avait le même parcours. Airbnb aussi. Ces entreprises **n'ont pas commencé avec des microservices**. Elles y sont arrivées après des années, une fois que leurs problèmes de scalabilité justifiaient réellement cette complexité.

Votre startup de 5 développeurs qui sert 2000 utilisateurs n'a pas ces problèmes.

## Ce Qu'Est Vraiment un Monolithe Bien Construit

Le mot « monolithe » est devenu une insulte dans notre industrie. On l'associe à du code legacy, à de la dette technique, à des déploiements catastrophiques.

C'est une erreur de perception.

**Un monolithe bien construit, c'est :**

- Un seul déploiement à gérer
- Une seule base de code à comprendre
- Des transactions ACID sans configuration complexe
- Du debugging simple et linéaire
- Des refactorings faciles à faire traverser plusieurs modules
- Une équipe entière qui peut comprendre l'ensemble du système

Ce n'est pas du code spaghetti. C'est de l'architecture modulaire dans un seul processus. La différence entre un monolithe mal conçu et un bon monolithe, c'est la discipline interne, pas l'architecture distribuée.

Stack Overflow fait tourner l'un des sites les plus visités du monde **sur quelques serveurs et un monolithe**. Basecamp a construit une entreprise rentable sur un monolithe Ruby on Rails depuis 20 ans. Shopify aussi.

## Les Avantages Réels des Microservices

Soyons honnêtes : les microservices ont de vraies raisons d'exister. Dans les bons contextes.

**Scalabilité indépendante :** Si votre service de traitement d'images consomme 10 fois plus de ressources que votre API, vous pouvez scaler uniquement ce service. Avec un monolithe, vous scalez tout.

**Déploiements indépendants :** Des équipes de 50 développeurs peuvent déployer leurs services sans coordination avec les autres équipes. À grande échelle, c'est précieux.

**Isolation des pannes :** Un service qui plante n'emporte pas tout le système. Le circuit breaker isole la défaillance.

**Technologies hétérogènes :** Chaque service peut utiliser la technologie la plus adaptée à son problème. Le service de recommandations en Python, l'API principale en Go, le service de notifications en Node.js.

**Équipes autonomes :** Des équipes organisées autour de services peuvent travailler en parallèle sans friction excessive.

Ces avantages sont réels. Mais ils ont un coût.

## Les Inconvénients Qu'On Ne Mentionne Pas Dans Les Conférences

C'est là que la conversation devient intéressante, parce qu'on n'en parle presque jamais.

### 1. La Complexité Opérationnelle Explose

Avec un monolithe, votre déploiement ressemble à :

```
git push → CI/CD → un binaire → une mise en production
```

Avec 15 microservices, ça ressemble à :

```
Orchestration Kubernetes + Service mesh + API Gateway + Load balancers 
+ Circuit breakers + Distributed tracing + Log aggregation 
+ Health checks par service + Versioning d'API entre services 
+ Gestion des secrets par service + Monitoring indépendant...
```

Ce n'est pas une simplification. C'est une multiplication de la surface de défaillance. Chaque nouveau service ajoute des points de configuration, des certificats à gérer, des pipelines CI/CD distincts.

Netflix a une équipe dédiée rien qu'à l'infrastructure de déploiement. Vous, probablement pas.

### 2. Le Debugging Devient un Exercice de Reconstitution

Dans un monolithe, vous avez un stacktrace. Linéaire. Lisible.

Avec des microservices, vous avez une requête qui passe par 6 services différents. Quand quelque chose plante, vous cherchez dans 6 logs différents, sur 6 machines différentes, avec 6 systèmes de logging potentiellement différents.

Sans distributed tracing (Jaeger, Zipkin, etc.), vous êtes aveugle. Et mettre en place un distributed tracing correct est un projet en soi.

### 3. La Cohérence des Données Devient un Problème Difficile

Les transactions distribuées, c'est l'un des problèmes les plus difficiles en informatique.

Avec un monolithe et une base de données, vous faites :

```sql
BEGIN TRANSACTION;
  UPDATE compte SET solde = solde - 100 WHERE id = 1;
  UPDATE compte SET solde = solde + 100 WHERE id = 2;
COMMIT;
```

Atomique. Soit les deux se font, soit aucun.

Avec deux microservices et deux bases de données, vous avez besoin du pattern Saga, des événements de compensation, de la gestion des états intermédiaires. C'est complexe à écrire, difficile à tester, et très facile à rater.

Combien d'équipes qui adoptent les microservices ont réellement réfléchi à la cohérence des données entre services ? La plupart improvisent et découvrent les problèmes en production.

### 4. Les Appels Réseau Remplacent des Appels de Fonction

Dans un monolithe, vous appelez une fonction. En mémoire. Microseconde.

Avec des microservices, vous faites un appel HTTP ou gRPC. Réseau. Quelques millisecondes. Et ce réseau peut :

- Tomber
- Être lent
- Renvoyer un timeout
- Retourner une réponse corrompue

Vous devez gérer tout ça. Les retries, les timeouts, les fallbacks, les circuit breakers. Chaque appel entre services ajoute de la latence et de la surface de défaillance.

Pour une opération qui touche 5 services en cascade, vous multipliez les points de défaillance par 5.

### 5. La Coordination Entre Équipes Ne Disparaît Pas, Elle Se Déplace

On vous vend les microservices comme la solution aux problèmes de coordination. « Les équipes travaillent de manière indépendante. »

C'est vrai pour les déploiements. Mais pour les fonctionnalités qui traversent plusieurs services ? Vous avez toujours besoin de coordination. Sauf qu'au lieu de coordonner du code dans un même repository, vous coordonnez des contrats d'API entre équipes différentes, avec des versions, des migrations, des dépréciations.

Le versioning d'API inter-services est un problème difficile que personne n'anticipe.

### 6. Le Coût Infrastructure Est Réel

Un monolithe, c'est quelques serveurs.

15 microservices avec leurs bases de données, leurs instances de cache, leurs queues de messages, leur infrastructure Kubernetes... ça coûte. En argent. En temps. En expertise.

Pour une startup qui surveille ses coûts, c'est un argument non-négligeable.

### 7. L'Overhead de Développement

Créer une nouvelle fonctionnalité dans un monolithe : modifier un module, écrire des tests, déployer.

Créer la même fonctionnalité qui touche 3 microservices : modifier 3 repositories, mettre à jour 3 contrats d'API, écrire des tests unitaires dans chaque, écrire des tests d'intégration entre services, coordonner 3 déploiements.

Pour les équipes petites, cet overhead ralentit considérablement la vélocité.

## La Question Qu'Il Faut Se Poser

Avant de décider d'une architecture, une seule question compte :

**Quel problème j'essaie de résoudre ?**

Si la réponse est « on va avoir des millions d'utilisateurs et on a besoin de scaler indépendamment chaque partie du système », les microservices peuvent avoir du sens. Mais seulement si vous avez aussi les équipes pour le maintenir.

Si la réponse est « c'est ce que font les grandes boîtes tech » ou « ça va nous faire une belle architecture », c'est de l'imitation.

**Les vrais signaux que vous avez besoin de microservices :**

- Votre monolithe a des goulots d'étranglement réels et mesurés à des endroits spécifiques
- Vous avez des équipes suffisamment grandes pour posséder chacune leur(s) service(s)
- Votre organisation a la maturité DevOps pour gérer une infrastructure distribuée
- Les parties de votre système ont des besoins de scalabilité vraiment différents
- Vous déployez tellement souvent que la coordination ralentit réellement votre équipe

**Les mauvais signaux pour migrer :**

- « C'est plus moderne »
- « Ça se fait »
- « Ça fera mieux sur mon CV »
- « Netflix le fait »
- « On va avoir besoin de scaler » (sans mesure actuelle du problème)

## Le Parcours Correct

La bonne approche architecturale n'est pas d'opposer monolithe et microservices comme si c'était un choix binaire une fois pour toutes.

C'est de construire le plus simple qui fonctionne d'abord.

**Phase 1 :** Monolithe modulaire. Code bien organisé, modules clairement séparés, avec des frontières explicites. Vous apprenez votre domaine métier.

**Phase 2 :** Si un problème spécifique émerge (une partie du système est trop lente, doit scaler indépendamment, a des besoins techniques radicalement différents), vous extrayez **ce service spécifique**.

**Phase 3 :** Vous continuez d'extraire uniquement ce qui pose réellement problème.

Amazon a suivi ce parcours. GitHub aussi. Shopify a délibérément choisi de ne pas le suivre après l'avoir évalué.

Le bon architecte n'adopte pas les microservices. Il choisit l'architecture adaptée au problème actuel, pas au problème imaginé dans 3 ans.

## Ce Que Ça Dit d'une Organisation

Quand une organisation choisit les microservices par imitation plutôt que par nécessité, elle envoie un signal :

- Elle préfère la complexité technique à la clarté du produit
- Elle optimise pour le CV de ses développeurs, pas pour la livraison de valeur
- Elle n'a pas mesuré ses vrais goulots d'étranglement
- Elle a confondu l'architecture des géants tech avec une bonne pratique universelle

Les organisations les plus efficaces que j'ai vues construisent simple, mesurent, et n'ajoutent de complexité que quand les données l'exigent.

## En Conclusion

Non, vous n'êtes pas Netflix. Vous n'êtes pas GitHub. Et c'est très bien.

Ces entreprises ont des problèmes que vous n'avez pas. Copier leurs solutions sans avoir leurs problèmes, c'est importer leur complexité sans en tirer les bénéfices.

Un monolithe bien construit est maintenable. Compréhensible. Déployable. Testable. Pour 90% des projets, c'est tout ce dont vous avez besoin.

La prochaine fois que quelqu'un dit « on devrait migrer vers les microservices », posez la question simple :

**« Quel problème précis, mesuré, et actuel on résout avec ça ? »**

Si la réponse est vague, vous avez votre réponse.

La mode n'est pas une architecture. La complexité n'est pas un objectif. Et « c'est ce que font les grandes boîtes » n'est pas une justification technique.

Construisez simple. Mesurez. Ajoutez de la complexité uniquement quand les données l'exigent.

---
