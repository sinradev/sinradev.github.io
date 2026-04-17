---

title: "KISS : Pourquoi Les Entreprises Tech Abandonnent Le Principe Le Plus Important"
subtitle: "Keep It Simple, Stupid. Un slogan universel oublié par ceux qui l'ont inventé."
description: "Les entreprises tech sont incapables de rester KISS dans leurs choix techniques. Elles empilent les langages, les frameworks, les infra. Analyse des raisons et du coût réel."
date: 2026-04-18 10:00:00 +0100
categories: ["Architecture"]
excerpt: "KISS : Keep It Simple, Stupid. Le principe d'or de l'informatique. Et aussi le premier que les entreprises abandonnent dès qu'elles dépassent dix employés."
featured_image: /assets/images/blog/2026-04-18-kiss-keep-it-simple-stupid-featured.png
---

## KISS : La Définition

**KISS** : Keep It Simple, Stupid.

Trois mots. Inventés par Kelly Johnson, ingénieur à Lockheed Martin, à la fin des années 1960. Le principe est simple (comme il se doit) :

> « Tout système fonctionne mieux si vous le gardez simple plutôt que complexe ; par conséquent, la simplicité devrait être un objectif clé du design, et la complexité inutile devrait être évitée. »

Pas de mystère. Pas d'interprétation complexe.

**Le principe :** Choisissez toujours la solution la plus simple qui répond à vos problèmes.

## Pourquoi KISS Est Fondamental

Avant d'analyser pourquoi tout le monde s'en fout, comprenez d'abord pourquoi ce principe existe.

### 1. Les Systèmes Simples Sont Plus Rapides À Construire

Si vous avez un problème A, vous avez deux solutions :

**Solution 1 (simple)** : 100 lignes de code. Trois jours de dev. Pas de dépendances externes.

**Solution 2 (compliquée)** : Intégrez un framework élégant. Importez cinq libraries. Lisez la doc. 300 lignes de code. Deux semaines.

Vous choisissez laquelle ? KISS dit : la solution 1.

### 2. Les Systèmes Simples Sont Plus Maintenables

Revoyez votre code en 2024. Vous aviez écrit une solution « simple » en 2015 ? Vous la comprenez toujours en deux minutes.

Vous aviez choisi une « solution élégante » avec douze dépendances ? Bonne chance. Trois de ces dépendances n'existent plus. Une a été reprise par une compagnie inconnue. Une autre a changé de major version six fois.

Bon courage.

### 3. Les Systèmes Simples Vous Permettent De Pivoter

Si votre stratégie change, vous pouvez jeter votre code « simple » et en écrire un nouveau en une semaine.

Si votre code est une cathédrale de complexité, vous vous retrouvez bloqué. Vous avez investi trop de temps, trop de dépendances. Pivoter = reconstruire le monde.

### 4. Les Systèmes Simples Ont Moins de Bugs

Moins de code = moins de surface d'attaque. Moins de dépendances = moins de versions cassées. Moins de logique complexe = moins de conditions non testées.

**C'est mathématique.**

Vous avez une chance sur 100 d'avoir un bug dans 100 lignes de code.
Vous avez une chance sur 1000 d'avoir un bug dans 500 lignes de code (si c'est bien écrit).
Vous avez une chance sur 100 dans 500 lignes si vous avez aussi importé Lodash, Moment, Express, et trois libraries customs.

## Le Paradoxe : Pourquoi Les Entreprises Abandonnent KISS

Ici, c'est étrange. Le principe KISS vient des années 1960, de la NASA, de l'aviation militaire. Des domaines où les bugs = morts. Des domaines qui **ont compris** que la simplicité est critique.

Mais les entreprises tech **modernes**, elles, l'ignorent complètement.

Pourquoi ?

### 1. Le Syndrome Du Résumé LinkedIn

Chaque développeur a un problème :

> « Je dois montrer que j'ai appris des technologies modernes. »

Pas : « Je dois construire le meilleur produit. »

Non. C'est : « Je dois pouvoir écrire dans mon LinkedIn : j'ai 3 ans sur Kubernetes, j'ai utilisé 8 langages différents, j'ai déployé sur AWS, GCP, et Azure. »

Alors, quand on lui propose d'ajouter une nouvelle tech au stack, il dit oui. Pas parce que c'est nécessaire. Parce que ça « s'ajoute au CV ».

L'entreprise le sait. Elle fout Rust dans le stack juste pour pouvoir dire « nous utilisons Rust ».

**Résultat :** Stack technique = galerie de CV collectif, pas architecture rationelle.

### 2. Le Cargo Cult Du Design Technique

Quelque part, une grande boîte (Netflix, Spotify, Google) a choisi une architecture complexe.

Pourquoi ? Parce qu'ils ont 50 000 développeurs et besoin de microservices, de load-balancing, de cache distribué, etc.

Votre startup de 6 personnes regarder ça et pense : « On va faire pareil. »

**Spoiler :** Vous ne faites pas pareil. Vous copiez la architecture sans comprendre pourquoi elle existe.

Netflix a besoin de 3000 microservices parce qu'il y a 10 000 requêtes par seconde. Votre startup en a 10 par jour. Vous n'avez pas besoin de Kubernetes. Vous avez besoin d'un serveur.

Mais non. Tout le monde utilise Kubernetes maintenant. C'est cool. C'est dans les confs. C'est sur les CV.

Et plouf, vous avez un système infra qui demande 40% de votre bande passante intellectuelle juste pour « le tenir debout ». Pendant ce temps, aucun feature ne sort.

### 3. L'Apothéose De L'Ingénieur Qui Veut Bien Faire

Vous avez un bon ingénieur. Il arrive chez vous. Il regarde votre code.

> « C'est... trop simple. On devrait refactoriser. On pourrait utiliser un pattern de design ici. On pourrait utiliser un framework ORM. Et oh, regardez, on pourrait diviser les services, utiliser des queues, ajouter un cache... »

C'est un bon ingénieur. Il a raison sur beaucoup de points. Mais il applique une maxime : « Plus c'est bon, plus c'est mieux. »

KISS dit : « Non. Assez bon = assez bon. »

Lui, il voit chaque simplification comme une « dette technique ». Une chose à corriger. Un problème.

Trois ans plus tard, vous avez une infra qui demande 5 développeurs juste pour la maintenance. Vos vraies priorités ? Pas faites.

### 4. La Peur Du Changement d'Échelle

Le CTO: « Et si on grossit ? On fait quoi ? »

C'est une vraie question. Mais voici la vraie réponse :

**Vous refactorisez quand vous avez besoin.**

Pas avant. Pas « au cas où ». Pas prophétiquement.

KISS dit : « Construisez pour aujourd'hui. Refactorisez demain si nécessaire. »

Mais non. Tout le monde veut « scaler from day one ». Vous construisez une architecture capable de supporter 1 million d'utilisateurs quand vous en avez 100.

Résultat ? Complexité gratuite, bénéfice zéro, jusqu'au jour où vous en avez réellement 1 million. Et à ce moment, votre architecture a 5 ans et elle est périmée de toute façon.

### 5. L'Obsession De « Modern Stack »

Il y a une mode en 2026 : utiliser plein de langages différents parce que « chacun est bon pour quelque chose ».

Python pour les ML/data. Go pour l'API. Rust pour la performance critique. JavaScript pour le frontend. TypeScript parce que pourquoi pas. SQL, GraphQL, Redis, Message Queues... tout.

Une équipe de six personnes. Six langages.

Vous savez ce que ça veut dire ?
- Personne ne maîtrise vraiment quelque chose
- Si quelqu'un part, personne n'a suivi la partie Rust
- La doc est dispersée (Python doc, Go doc, Rust doc, GraphQL doc...)
- Les tests sont inconsistants
- Le déploiement devient un cauchemar

KISS dirait : « Choisissez un langage. Maîtrisez-le. Utilisez-le pour 90% des choses. Seulement dans les 10% où ça devient réellement critique, alors dérogez. »

Mais non. « Moderne » = plein de langages = on a une advanced tech stack.

## Le Coût Réel De La Complexité

Vous avez une simple question API à résoudre.

**Avec KISS :** 
- Écrivez une fonction. 50 lignes. Tests fournis. Ça marche.

**Sans KISS (realité 2026) :**
- Créez un microservice en Go
- Configurez Kubernetes pour l'orchestrer
- Mettez en place monitoring avec Prometheus
- Versionnez l'API avec OpenAPI/Swagger
- Documentez ça sur Notion
- Créez des tests avec testcontainers
- Mettez en place CI/CD pour le déployer
- Créez des alertes Slack
- Documentez le runbook

Félicitations, vous avez 2000 lignes de configuration pour une simple fonction API.

**Et maintenant ?** Si vous devez changer cette API, vous devez toucher à :
- Le code Go
- La config Kubernetes
- Le schéma OpenAPI
- Les tests
- La doc Notion
- Les alertes
- Les runbooks

Combien de personnes peuvent faire ça ? Deux, peut-être trois. Si une part, c'est le bordel.

Avec KISS ? Vous aviez une fonction. Quelqu'un la change. Done.

## Les Arguments CONTRE KISS (Et Pourquoi Ils Sont Faux)

Laissez-moi vous présenter les arguments qu'on vous fera pour justifier la complexité. Et pourquoi chacun est une excuse.

### « Nous Devons Scaler »

Quand ? Maintenant ? Non.

KISS dit : « Vous avez une base de données PostgreSQL. Ça support 100 000 requêtes par seconde. Vous en avez 100 par seconde. Vous n'avez pas besoin de scaler. »

« Oui mais si on grossit ? »

Réponse : Vous refactorisez. À ce moment. Pas avant.

Netflix a refactorisé leurs monolithe en microservices après 5 ans et 10 millions d'utilisateurs. Pas avant.

### « C'est Plus Élégant »

Élégant selon qui ? L'ingénieur qui l'a conçu ?

KISS dit : « Élégance = votre code disparaît. Quelqu'un le modifie six mois plus tard en 10 minutes. Ça, c'est élégant. »

Un code « élégant » avec 5 frameworks imbriqués ? C'est l'opposé.

### « Nous Utilisons Les Meilleures Pratiques »

Les meilleures pratiques **pour Netflix**, pas pour vous.

KISS dit : « Les meilleures pratiques = ce qui marche pour votre contexte. »

Si vous avez 6 personnes et un problème simple, la « meilleure pratique » c'est une solution simple.

### « Tout Le Monde Utilise Ça »

Argument le plus faible.

Tout le monde saute d'une falaise ? Non.

Mais tout le monde utilise Kubernetes ? Presque. Et 90% de ceux qui l'utilisent pourraient utiliser un simple VPS.

### « Nous Voulons Être Modernes »

La vraie modernité ? Avoir un produit qui marche, sans debt technique, avec une équipe heureuse.

Une infra compliquée que personne ne comprend ? C'est le contraire de moderne.

## Comment Revenir À KISS

Si vous êtes dans une boîte où c'est devenu du chaos, voici la recette.

### 1. Dressez L'Inventaire

Listez chaque technologie que vous utilisez.
- Python ? Check.
- Go ? Check.
- Rust ? Check.
- Kubernetes ? Check.
- Redis ? Check.
- MongoDB ? Check.
- PostgreSQL ? Check.
- Elasticsearch ? Check.
- Et j'en passe.

Honnêtement : **Combien de ces outils pourraient disparaitre demain sans casser le produit ?**

Je parie 50%.

### 2. Questionnez Chaque Choix

Pour chaque technologie, posez-vous :
- **Avons-nous vraiment besoin de ça ?**
- **Est-ce que c'était nécessaire il y a six mois ?**
- **Qui l'a choisi, et pourquoi ?**
- **Combien de personnes le maîtrisent ?**
- **Combien de temps passe-t-on juste à la maintenir ?**

Si la réponse à « combien de temps de maintenance » est plus que « 20% du temps », c'est un problème.

### 3. Votez Pour La Simplification

Apprenez à dire : « On enlève ça. »

Kubernetes ? Enlevez-le. Utilisez Docker directement sur un VPS. Ça suffit pour 99% des boîtes.

MongoDB AND PostgreSQL ? Enlevez MongoDB. PostgreSQL le peut tout faire.

Python ET Go ? Gardez un langage principal. Les 5% de cas qui demandent Go ? Vous les traiterez si ça devient réellement un problème.

Cela vide pas le CV ? Bien. Vous cherchez un vrai développeur. Un qui construit des produits, pas un qui collectionne les langages.

### 4. Documentez Les Raisons

Quand vous avez décidé de simplifier, documentez pourquoi. Pas dans Notion (trop de docs tue la doc). Juste dans un simple fichier `ARCHITECTURE.md`.

> « Nous utilisons PostgreSQL parce que c'est suffisant. Si quelqu'un pense qu'on a besoin de MongoDB, allez lui parler, on discute. »

Ça empêche les gens de rajouter des couches sans penser.

## Le Paradoxe Final

Vous savez ce qui est ironique ?

Les gens qui prêchent KISS ce sont les vraiment bons ingénieurs. Les gens qui construisent les vraies choses. Les gens chez des compagnies qui marchent.

Et les gens qui l'ignorent ? Souvent, ce sont les développeurs juniors ou les CTOs qui paniquent.

Les VRAIS seniors, ceux qui ont vu des produits mourir à cause de la complexité, ils reviennent toujours à KISS.

## En Conclusion

« Keep It Simple, Stupid » c'est pas un slogan cute. C'est pas un tweet motivationnel.

C'est le principe qui a guidé la NASA dans les années 1960. C'est ce qui a permis aux premiers pionniers du code de construire l'internet qu'on utilise aujourd'hui.

Votre startup moderne qui empile Kubernetes, Microservices, GraphQL, et 7 langages différents ? Elle n'est pas plus avancée que ceux qui ont dit « utilisons un serveur, une base de données, et une API simple ».

Elle est juste plus compliquée.

Et une jour, quand votre équipe est épuisée à maintenir l'infra, que personne ne peut plus bouger sans casser quelque chose, que les bugs se multiplient, qu'il faut deux semaines pour déployer un changement simple...

À ce moment-là, vous réaliserez : Kelly Johnson avait raison.

Voilà KISS.

---
