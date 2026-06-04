---

title: "« User story » n'est pas un ticket : pourquoi le mot que vous choisissez structure votre travail"
subtitle: "En tant que… je veux… afin de… Ce format a conquis le monde du développement. Il a aussi produit des backlogs illisibles, des débats sémantiques interminables et des équipes qui ne savent plus ce qu'elles livrent vraiment."
description: "La user story est un outil de conversation, pas un ticket de travail. Confondre les deux produit des backlogs qui ne décrivent pas ce qu'on fait. Les issues, directes et sans format imposé, sont plus honnêtes."
categories: ["Gestion de Projet", "Work Culture"]
excerpt: "« En tant qu'utilisateur, je veux pouvoir me connecter afin de pouvoir accéder à mon compte. » Ce ticket a été écrit des millions de fois. Il ne décrit rien d'utile sur ce que le développeur doit faire. C'est le problème central de la user story comme unité de travail."
date: 2026-05-29 00:00:00 +0100
featured_image: /assets/images/blog/2026-05-29-issues-vs-user-stories-featured.svg

---

Quelque part dans un backlog Jira, il y a un ticket intitulé « En tant qu'utilisateur, je veux pouvoir réinitialiser mon mot de passe afin de récupérer l'accès à mon compte ». Il est estimé à 3 points de story. Il est assigné à un développeur. Il est marqué comme bloqué depuis trois sprints parce que personne n'a défini ce que « récupérer l'accès » implique exactement : est-ce qu'on envoie un email ? Un SMS ? Les deux ? Qu'est-ce qui se passe si l'email n'est plus valide ?

Le ticket a l'air complet. Il respecte le format. Il a un sujet, un verbe, un objectif. Et pourtant, il ne dit rien sur ce que le développeur doit faire.

C'est le problème fondamental de la user story comme unité de travail.

## Ce que la user story était censée être

La user story n'a pas été inventée comme format de ticket. Elle a été inventée par Ron Jeffries et ses collègues dans le contexte d'Extreme Programming, au début des années 2000, comme support à une conversation.

L'idée originale : une carte (physique, en carton) qui contient juste assez d'information pour démarrer une discussion entre le Product Owner et l'équipe technique. Pas plus. La carte n'est pas la spécification. La conversation autour de la carte, oui.

La formulation « en tant que… je veux… afin de… » est venue plus tard, comme aide-mémoire pour structurer cette conversation. Pour s'assurer qu'on pense à qui bénéficie de la fonctionnalité, ce qu'elle permet de faire, et pourquoi.

Ce format avait du sens dans ce contexte. Il en a beaucoup moins quand il devient le champ de titre d'un ticket Jira que quelqu'un lit six semaines après que la conversation a eu lieu, sans avoir assisté à la discussion, sans savoir ce qui a été décidé ensuite.

## Le glissement sémantique

À un moment difficile à dater précisément, quelque chose a changé.

La user story est passée d'outil de conversation à unité de livraison. La carte de discussion est devenue le ticket de travail. Et la formule « en tant que… je veux… afin de… » est devenue un champ à remplir obligatoirement, validé par des plugins Jira qui refusent les titres qui ne commencent pas par « En tant que ».

Ce glissement a produit plusieurs effets pervers.

**Le remplissage mécanique.** Quand le format devient une obligation, les gens le respectent sans y penser. « En tant qu'admin, je veux pouvoir accéder au tableau de bord admin afin d'administrer le système. » Ce ticket ne dit rien. Il respecte la formule. Il est quand même dans le backlog.

**La perte de précision technique.** La user story, par construction, décrit un besoin utilisateur. Elle ne décrit pas une solution technique. C'est son intérêt pour la conversation produit-développement. C'est son défaut comme ticket de travail : le développeur doit deviner ou réinventer à chaque fois ce que ça implique concrètement.

**Le débat sémantique improductif.** « Ce ticket n'est pas vraiment une user story, c'est une tâche technique. » « Les tâches techniques doivent être découpées sous les user stories. » « Mais alors comment on estime les épics ? » Des heures de réunion passées à organiser le backlog plutôt qu'à travailler.

## Ce qu'une issue dit que la user story ne dit pas

Une issue, au sens littéral, est quelque chose qui doit être résolu. Un problème, une amélioration, une tâche, un bug. Le mot est neutre, direct, sans format imposé.

Ce que ça change dans la pratique :

Une issue peut s'appeler « Système de réinitialisation de mot de passe par email ». Elle décrit ce qui doit être fait, pas qui en bénéficie. Elle laisse de la place pour les détails techniques. Elle peut avoir une description qui mélange contexte utilisateur et contraintes d'implémentation.

Elle n'oblige pas à trouver un sujet valide (« en tant qu'administrateur système avec les droits de niveau 3… »). Elle ne force pas à justifier son existence dans le format (« afin de pouvoir gérer les accès… »). Elle dit ce qu'elle est.

Une issue peut aussi décrire quelque chose qui n'a pas d'utilisateur direct : une migration de base de données, une mise à jour de dépendance, la configuration d'un pipeline CI. Tenter de coller ces travaux dans le format user story donne des résultats absurdes. « En tant que développeur, je veux mettre à jour la version de Node.js afin de continuer à recevoir les patches de sécurité. » Oui. Ou on peut juste écrire : « Mettre à jour Node.js vers la version 22 LTS. »

## Le problème des critères d'acceptation

La user story s'accompagne généralement de critères d'acceptation. C'est souvent la partie la plus utile du ticket, et aussi celle que les équipes écrivent le moins bien.

Les critères d'acceptation sont censés définir ce qui constitue une implémentation réussie. Quand c'est bien fait, ils remplacent avantageusement toute la description de la user story. Ils disent ce que le système doit faire dans des conditions spécifiques.

Le problème : les équipes qui utilisent le format user story ont souvent un rapport inversé à ces deux éléments. Le titre au format « en tant que… » reçoit beaucoup d'attention lors de la création du ticket. Les critères d'acceptation sont ajoutés rapidement, vaguement, ou pas du tout.

Ce qu'on retrouve souvent : un titre au format impeccable, et des critères du type « L'utilisateur peut réinitialiser son mot de passe » - qui ne dit rien de plus que le titre.

## Le naming comme outil de précision

Il y a quelque chose de non trivial dans le fait de nommer correctement les unités de travail.

Un backlog composé d'issues clairement nommées permet à quelqu'un qui n'a pas assisté aux conversations de comprendre ce qui a été livré, ce qui est en cours, et ce qui reste à faire. Il permet de chercher des tickets sans se souvenir du sujet exact. Il permet à un nouveau membre de l'équipe de se repérer.

Un backlog composé de user stories avec pour titre « En tant qu'utilisateur, je veux… » n'offre pas ces propriétés. Il faut ouvrir chaque ticket pour comprendre de quoi il s'agit. Il faut connaître le contexte de la conversation pour interpréter ce qui était prévu.

Le naming, c'est de la documentation implicite. Un ticket bien nommé documente en lui-même ce qu'il contient. Un ticket mal nommé demande à être ouvert et lu en entier à chaque fois.

## La question du niveau de granularité

Une des confusions fréquentes dans les équipes qui utilisent les user stories est la question du niveau d'abstraction.

La user story est censée vivre à un niveau de granularité moyen : assez précis pour être estimé et planifié, assez abstrait pour rester centré sur la valeur utilisateur. Au-dessus, on trouve les épics. En dessous, les tâches.

En pratique, cette hiérarchie crée plus de problèmes qu'elle n'en résout.

Les épics sont souvent trop grands pour être planifiés mais trop petits pour être des objectifs stratégiques. Les tâches sont souvent redondantes avec les critères d'acceptation des user stories. Et les user stories elles-mêmes oscillent entre des niveaux de granularité très différents selon les équipes et les moments.

Une hiérarchie plus directe : des capabilities pour les fonctionnalités de haut niveau, des issues pour le travail quotidien. Pas de format imposé, pas de règle de granularité abstraite. La granularité se définit par ce qui est utile à planifier et à suivre, pas par une convention de nommage.

## Ce que ça dit de l'organisation

La façon dont une équipe nomme et structure son backlog dit quelque chose sur comment elle pense son travail.

Une équipe qui use de user stories comme tickets est souvent une équipe où la responsabilité produit et la responsabilité technique sont fortement séparées. Le Product Owner crée des user stories centrées sur le besoin utilisateur. Les développeurs les décomposent en tâches techniques. Les testeurs vérifient les critères d'acceptation.

Ce modèle a ses vertus dans des organisations très larges. Il a ses défauts dans des équipes où product et technique travaillent en étroite collaboration : il crée des artefacts intermédiaires qui n'ont pas de valeur en eux-mêmes.

Une équipe qui utilise des issues directes est souvent une équipe où la responsabilité est plus fluide : les développeurs comprennent le besoin utilisateur, le Product Owner comprend les contraintes techniques, et le ticket n'a pas besoin de jouer un rôle de traducteur entre deux mondes.

## Garder la conversation, enlever le format

Ce que la user story avait de bon, c'était l'insistance sur le pourquoi. Sur la valeur pour l'utilisateur. Sur le fait que chaque item de backlog devrait avoir un bénéficiaire et un objectif.

Cette insistance est précieuse. Elle évite de construire des fonctionnalités orphelines, des optimisations sans impact, des tickets qui existent parce que quelqu'un a eu une idée un mardi.

Ce qu'il faut garder : la discipline du « pourquoi ». Chaque issue devrait pouvoir répondre à la question : à qui ça sert, et pour quoi faire ?

Ce qu'il faut abandonner : le format rigide « en tant que… je veux… afin de… » comme structure obligatoire du titre. Ce format contraint la pensée dans un moule qui ne correspond pas à la diversité du travail réel.

Écrire « Système d'authentification SSO avec Google » et noter dans la description « Context : les utilisateurs doivent pouvoir se connecter avec leur compte Google professionnel, réduction du mot de passe interne à gérer » est infiniment plus utile qu'un titre au format parfait qui ne dit pas ce qu'il y a à faire.

## Le signal que les mots envoient

Il y a un dernier aspect souvent sous-estimé : le signal que le vocabulaire envoie à l'équipe.

« User story » dit : ce ticket existe pour servir un utilisateur. C'est un rappel constant que le travail a un sens externe à l'équipe technique.

« Issue » dit : il y a quelque chose à résoudre. C'est plus neutre, mais aussi plus honnête sur la diversité du travail réel : toutes les choses qu'une équipe technique doit faire ne servent pas directement un utilisateur final, et prétendre le contraire crée des contorsions intellectuelles inutiles.

Les deux approches ont un fond de sagesse. Ce qui ne fonctionne pas, c'est d'imposer l'un des deux formats à tout le travail de l'équipe, comme si la réalité du développement logiciel pouvait tenir dans une seule structure narrative.

---

Le mot que vous choisissez pour décrire votre travail n'est pas un détail cosmétique. Il structure la façon dont vous pensez ce que vous faites, dont vous communiquez avec les autres, dont vous retrouvez l'information six mois plus tard.

Une user story est une conversation. Une issue est un travail à faire. Confondre les deux ne produit pas de meilleur logiciel. Ça produit juste des backlogs plus difficiles à lire.
