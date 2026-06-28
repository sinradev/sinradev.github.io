---

title: "Conway's Law : pourquoi ton architecture ressemble à ton org chart"
subtitle: "Il y a une loi dans le monde du logiciel qui prédit avec une précision déconcertante la forme de tes systèmes. Elle ne parle pas de code, pas de patterns techniques. Elle parle de la façon dont tes équipes communiquent."
description: "Conway's Law affirme que les systèmes produits par une organisation reflètent sa structure de communication. Comprendre cette loi change la façon d'aborder l'architecture logicielle : avant de changer le code, il faut parfois changer l'organisation."
categories: ["Architecture", "Organisation"]
excerpt: "Trois équipes travaillent sur le même produit : une équipe frontend, une équipe backend, une équipe mobile. Six mois plus tard, le système a exactement trois couches bien distinctes avec des interfaces définies entre chacune. Personne n'a conçu ça explicitement. C'est Conway's Law."
date: 2026-06-28 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-28-conways-law-architecture-org-featured.png

---

En 1967, Melvin Conway publie un article dans le magazine Datamation. Il y formule une observation qui ressemble presque à une loi de la physique appliquée aux organisations :

« Les organisations qui conçoivent des systèmes sont contraintes de produire des designs qui sont des copies de leurs structures de communication. »

À l'époque, l'article est refusé par la Harvard Business Review, jugé trop évident. Fred Brooks le cite ensuite dans *The Mythical Man-Month* et lui donne le nom de Conway's Law. Depuis, des décennies d'expérience dans l'industrie ont confirmé son exactitude troublante.

## Ce que la loi dit vraiment

Conway's Law n'est pas une métaphore. C'est une contrainte structurelle.

Quand une équipe conçoit une interface entre deux composants, elle reflète implicitement la frontière entre deux groupes de personnes. Si ces deux groupes ne se parlent pas souvent, l'interface sera rigide, mal définie, ou surchargée de paramètres pour gérer tous les cas que personne n'a eu le temps de se synchroniser. Si ces deux groupes travaillent côte à côte, l'interface sera fluide, bien ajustée, évolutive.

La structure de communication d'une organisation se grave dans l'architecture des systèmes qu'elle produit. Pas intentionnellement. Naturellement.

## Des exemples concrets

Prenons une équipe divisée par couche technique : une équipe frontend, une équipe backend, une équipe base de données. Dans six mois, le système aura une architecture en trois couches bien distinctes, avec des APIs entre chaque couche définies par les points de contact entre les équipes. Ce n'est pas un hasard. C'est la traduction directe de qui parle à qui.

Autre exemple : une entreprise avec une équipe iOS, une équipe Android et une équipe Web va produire trois applications distinctes avec des expériences utilisateur divergentes et des APIs backend qui reflètent les besoins de chaque plateforme séparément. Même si le produit est censé être cohérent.

À l'inverse, une entreprise qui organise ses équipes par domaine métier - une équipe paiement, une équipe catalogue, une équipe livraison - va naturellement produire une architecture qui reflète ces domaines. Chaque équipe possède son service, ses données, son déploiement. L'architecture emerge de l'organisation.

## Le piège des microservices

Conway's Law explique l'un des échecs les plus fréquents dans l'adoption des microservices.

Des organisations décident de migrer vers une architecture microservices parce que c'est la bonne pratique, la scalabilité, la flexibilité. Elles découpent leur monolithe en dizaines de services. Mais elles ne changent pas leur organisation. Les mêmes équipes, organisées de la même façon, continuent à travailler ensemble de la même façon.

Le résultat : un monolithe distribué. Les services s'appellent les uns les autres de façon synchrone, les changements nécessitent de coordonner plusieurs équipes, les déploiements sont couplés. Tout le coût opérationnel des microservices, aucun des bénéfices.

Le problème n'est pas technique. C'est Conway's Law qui s'exprime : l'architecture reflète toujours la structure de communication réelle, pas celle que le schéma d'architecture voudrait montrer.

## L'Inverse Conway Maneuver

Si Conway's Law dit que l'organisation détermine l'architecture, alors la réciproque est utilisable : pour obtenir une architecture cible, changer l'organisation en premier.

C'est ce que Martin Fowler et d'autres ont appelé l'Inverse Conway Maneuver. Au lieu de concevoir l'architecture et d'espérer que l'organisation va s'y adapter, on structure les équipes pour qu'elles correspondent aux frontières architecturales voulues, et on laisse l'architecture émerger naturellement.

Si tu veux une architecture orientée domaines métier, forme des équipes autour de ces domaines. Donne-leur la pleine propriété de leur périmètre - code, données, déploiement, on-call. Ne les fais pas dépendre d'autres équipes pour déployer leur travail. L'architecture qui en résultera reflètera exactement ces frontières.

C'est contre-intuitif. On a tendance à penser qu'on dessine l'architecture d'abord, puis qu'on organise les gens pour l'implémenter. Conway's Law dit que c'est dans le mauvais ordre.

## La taille des équipes compte aussi

Conway's Law s'applique aussi à la granularité. Une équipe de trois personnes ne peut pas maintenir vingt services indépendants. Le nombre de services qu'une organisation peut maintenir sainement est contraint par le nombre de silos de communication distincts.

Jeff Bezos avec sa règle des deux pizzas (une équipe ne devrait pas nécessiter plus de deux pizzas pour être nourrie) touchait intuitivement à ce principe : des équipes petites avec des périmètres clairs produisent des composants avec des périmètres clairs.

Les organisations qui créent trop de services par rapport à leur taille d'équipe finissent avec des services que personne ne possède vraiment, des frontières floues, et des problèmes de coordination qui grèvent la vitesse de livraison.

## Ce que ça change dans la pratique

Quand un problème d'architecture se pose - couplage excessif entre services, interfaces mal définies, coordination permanente entre équipes pour livrer une feature - la première question à poser n'est pas technique. C'est : « Quelles équipes doivent se parler pour que ce changement arrive ? »

Si la réponse est « trois équipes différentes doivent se coordonner pour chaque déploiement », le problème n'est pas dans le code. Il est dans la structure organisationnelle.

La solution durable passe par une réorganisation des périmètres de responsabilité, pas par de nouveaux patterns d'architecture.

## Conway's Law et Sinra

Pour les équipes qui utilisent Sinra, Conway's Law a une implication directe sur la façon d'organiser le travail.

Les capabilities et les releases ont plus de sens quand elles correspondent à des périmètres d'équipe réels. Une capability qui nécessite de coordonner cinq équipes pour être livrée est souvent le signe que les frontières organisationnelles ne correspondent pas aux frontières fonctionnelles du produit.

Organiser les cycles par équipe - chaque équipe gère ses propres issues, ses propres testings, ses propres releases dans son domaine - produit un système où la vélocité est réelle et mesurable. Pas diluée dans des dépendances inter-équipes qui ralentissent tout le monde.

Conway's Law n'est pas une fatalité. C'est un diagnostic. Quand l'architecture pose problème, regarder la structure des équipes est souvent le point de départ le plus honnête.

---

La loi de Conway a été formulée il y a presque soixante ans. Elle reste l'une des observations les plus utiles sur la façon dont les organisations produisent du logiciel. Pas parce qu'elle est pessimiste sur les capacités humaines - mais parce qu'elle reconnaît que la communication a un coût, et que ce coût se retrouve toujours quelque part dans le système.
