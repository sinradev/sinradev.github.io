---

title: "Monorepo vs polyrepo : le débat que personne ne gagne"
subtitle: "Google et Meta utilisent des monorepos gigantesques. Netflix et Spotify utilisent des polyrepos. Les deux entreprises livrent du logiciel de qualité à grande échelle. Ce que ça dit du débat : la réponse dépend du contexte, pas d'un principe universel."
description: "Le choix entre monorepo et polyrepo est souvent présenté comme un choix architectural fondamental. C'est surtout un choix organisationnel. Chaque approche résout certains problèmes et en crée d'autres. Comprendre lesquels aide à choisir."
categories: ["Développement Productivité"]
excerpt: "Si votre équipe passe plus de temps à débattre de monorepo vs polyrepo qu'à écrire du code, c'est le signe que le débat est mal posé. Les deux approches fonctionnent. La vraie question est : quelle structure correspond à votre organisation et à votre cycle de livraison ?"
date: 2026-06-08 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-08-monorepo-vs-polyrepo-featured.svg

---

Twitter (maintenant X) a migré de polyrepo à monorepo en 2022. Airbnb maintient un monorepo. Lyft, Uber, et la plupart des grandes entreprises tech américaines ont leurs propres architectures de repos, aucune universellement identique.

De l'autre côté, l'écosystème open source est quasi-universellement en polyrepo. Les microservices de Netflix sont dans des repos séparés. La plupart des startups commencent en polyrepo et migrent ou non selon les problèmes qu'elles rencontrent.

Ce panorama ne mène à aucune conclusion universelle. Les deux approches coexistent dans des entreprises qui livrent à grande échelle. Ce qui suggère que le choix entre les deux est moins critique que le débat en ligne le laisse paraître - et que la vraie question est de comprendre quels problèmes chaque approche résout.

## Ce que le monorepo résout

**La cohérence des dépendances.** Dans un monorepo, tous les projets utilisent les mêmes versions des dépendances partagées. Il n'y a pas de divergence possible entre le projet A qui utilise la version 3.2 d'une bibliothèque et le projet B qui utilise la version 2.8. Les mises à jour de dépendances se propagent à tous les projets simultanément.

Cette cohérence a un coût : les mises à jour de dépendances affectent tous les projets en même temps. Si la mise à jour de la version 4.0 introduit une API incompatible, tous les projets qui utilisent cette bibliothèque doivent migrer simultanément. C'est potentiellement une grande opération.

**La refactorisation cross-projet.** Dans un monorepo, renommer une fonction ou modifier une interface partagée peut être fait en une seule opération sur l'ensemble du code. Le compilateur ou les tests signalent immédiatement tous les endroits à corriger. La cohérence est garantie par l'outillage.

Dans un polyrepo, la même opération requiert de mettre à jour plusieurs repos, probablement dans un ordre précis, en gérant les versions de transition. C'est possible, mais plus lent et plus propice aux erreurs.

**La visibilité globale.** Un monorepo permet à n'importe quel développeur de naviguer dans tout le code de l'organisation. Il facilite la réutilisation de code existant (il est découvrable), la compréhension des dépendances entre projets, et l'onboarding des nouveaux développeurs qui ont une vue complète du système.

**L'atomic commit cross-projet.** Un changement qui touche plusieurs projets peut être committé en une seule opération avec un seul numéro de commit. La cohérence entre les projets est garantie à chaque état du code.

## Ce que le polyrepo résout

**L'autonomie des équipes.** Des équipes différentes qui travaillent sur des projets différents peuvent faire leurs propres choix de stack, de process, de rythme de release, sans être contraintes par les conventions d'un monorepo unique. Une équipe peut migrer vers une nouvelle version d'un framework sans bloquer toute l'organisation.

**La performance des outils.** Les outils comme git, les IDE et les pipelines CI ne sont pas conçus pour des repos de plusieurs téraoctets. Google a dû construire ses propres outils (Piper, CitC) pour gérer son monorepo. La plupart des organisations n'ont ni les ressources ni le besoin de le faire. Un polyrepo garde les repos à des tailles gérables par les outils standard.

**La clarté des périmètres.** Un repo = un service ou une application = un périmètre de responsabilité clair. L'ownership est immédiatement visible : qui possède ce repo, qui a les droits de merge, qui est notifié en cas de problème. Dans un monorepo, ces périmètres doivent être définis et maintenus par convention.

**La sécurité et le contrôle d'accès.** Dans un polyrepo, l'accès peut être contrôlé par repo. Un contractor peut avoir accès à certains repos mais pas à d'autres. Dans un monorepo, le contrôle d'accès est plus granulaire et plus complexe à maintenir.

## Les problèmes que ni l'un ni l'autre ne résout

Une confusion fréquente dans ce débat : croire que le choix d'architecture de repo résout des problèmes organisationnels plus profonds.

**La coordination entre équipes.** Que les services soient dans un monorepo ou des polyrepos séparés, si les équipes qui les développent ne se parlent pas, les interfaces seront incohérentes et les dépendances mal gérées. L'architecture de repo ne crée pas la coordination. Elle peut la faciliter ou la compliquer, mais elle ne la remplace pas.

**La qualité du code.** Un monorepo avec du mauvais code est du mauvais code dans un seul endroit. Un polyrepo avec du mauvais code est du mauvais code dans plusieurs endroits. La structure du repo ne change pas la qualité de ce qui est dedans.

**La vitesse de livraison.** Les équipes rapides sont rapides parce qu'elles ont des process clairs, des pipelines fiables, et une culture de responsabilité. Pas parce qu'elles ont choisi le bon type de repo. Les équipes lentes le sont pour des raisons que le choix de repo ne change pas.

## Le coût de la migration

Un aspect sous-estimé du débat : le coût de migrer d'une approche à l'autre.

Migrer d'un polyrepo vers un monorepo est une opération significative. Il faut fusionner l'historique git des différents repos, réorganiser les pipelines CI/CD, adapter les droits d'accès, former les équipes aux nouveaux outils et conventions. Pour une organisation de taille moyenne, c'est plusieurs semaines ou mois de travail.

Migrer dans l'autre sens est aussi coûteux. Extraire un service d'un monorepo vers son propre repo implique de séparer l'historique, de gérer les dépendances circulaires qui s'étaient développées, et de reconstituer les pipelines indépendants.

Dans les deux cas, la migration a un coût direct (le temps passé) et un coût indirect (la perturbation du travail de livraison pendant la migration). Ce coût doit être mis en balance avec les bénéfices attendus.

## Ce que dit la taille de l'équipe

La taille et la structure de l'équipe est le facteur le plus prédictif du choix optimal.

**Équipes petites (moins de 10 développeurs, un seul produit)** : le débat est généralement sans enjeu. Les deux approches fonctionnent. Si le produit est un monolithe ou quelques services, un polyrepo simple suffit. Si c'est un projet avec plusieurs packages liés, un monorepo simplifie la gestion des dépendances.

**Équipes moyennes (10-100 développeurs, plusieurs services)** : les tensions entre cohérence (monorepo) et autonomie (polyrepo) commencent à se manifester. Le choix dépend de la culture de l'équipe et du degré de couplage entre les services. Des services fortement couplés bénéficient du monorepo. Des services indépendants bénéficient du polyrepo.

**Grandes équipes (100+ développeurs, dizaines de services)** : les deux approches nécessitent un investissement outillage significatif. Le monorepo demande des outils de build incrémentaux (Bazel, Turborepo, Nx). Le polyrepo demande des outils de coordination et de gestion des dépendances inter-repos (Renovate, des systèmes de versioning coordonné).

## L'approche pragmatique

Pour la plupart des équipes, la décision pratique est :

Commencer avec l'approche qui minimise la friction initiale - généralement un polyrepo simple pour les petits projets ou un monorepo si le projet a dès le départ plusieurs packages fortement liés.

Observer les problèmes qui émergent réellement, pas ceux qu'on anticipe. Si les problèmes de dépendances divergentes deviennent fréquents, le monorepo est à considérer. Si les pipelines CI deviennent trop lents et que les équipes souffrent des conventions partagées, le polyrepo est à considérer.

Éviter la migration prématurée. Les problèmes qui justifient une migration de repo sont généralement visibles et douloureux quand ils existent. Si vous ne ressentez pas clairement ces douleurs, le statu quo est probablement correct.

---

Le débat monorepo vs polyrepo est souvent plus idéologique que pragmatique. Il y a des ingénieurs qui ont des convictions profondes sur la supériorité de l'une ou l'autre approche, généralement basées sur leur expérience dans un contexte particulier qui n'est pas le vôtre.

La vraie question n'est pas « quelle est la meilleure architecture de repo ? » Elle est « quels problèmes ai-je concrètement, et quelle architecture les résout avec le moins d'overhead ? »

Ce n'est pas aussi satisfaisant qu'une réponse universelle. C'est plus honnête.
