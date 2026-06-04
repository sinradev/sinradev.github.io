---

title: "Capabilities vs epics : quand la précision du mot change la précision du travail"
subtitle: "L'epic est censé regrouper les user stories qui contribuent à un même objectif de haut niveau. En pratique, c'est souvent un fourre-tout dont personne ne sait vraiment quand il est terminé."
description: "L'epic Agile est un concept flou qui regroupe des user stories sans critère de complétion clair. La capability est une fonctionnalité concrète avec un état défini. La différence n'est pas sémantique : elle change la façon dont on planifie et dont on sait si on a fini."
categories: ["Gestion de Projet"]
excerpt: "Quand est-ce qu'une epic est terminée ? La question devrait avoir une réponse simple. En pratique, dans la plupart des équipes, c'est une longue conversation. L'epic grandit, se divise, se réouvre, migre d'un sprint à l'autre. Ce n'est pas un problème d'implémentation Scrum. C'est un problème de définition."
date: 2026-06-01 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-01-capabilities-vs-epics-featured.svg

---

Ouvrez le backlog de n'importe quelle équipe Scrum qui travaille depuis plus d'un an. Cherchez les epics. Il y en a probablement une dizaine, peut-être une vingtaine. Quelques-unes datent d'il y a deux ans. Certaines ne contiennent plus que des tickets fermés mais sont toujours ouvertes, parce que personne n'a décidé de les fermer. D'autres ont des tickets ouverts et des tickets fermés, sans qu'on sache si ce qui est terminé représente 20 % ou 80 % de l'objectif initial.

Si vous demandez au Product Owner quand l'epic sera terminée, vous obtiendrez une réponse hésitante. Si vous demandez ce que ça veut dire que l'epic soit terminée, vous obtiendrez une conversation.

Ce n'est pas un problème organisationnel. C'est un problème de définition.

## Ce qu'une epic est censée être

L'epic, dans la terminologie Scrum étendue, est un récit utilisateur de grande taille qui doit être découpé en user stories plus petites pour pouvoir être planifié et livré.

La définition est circulaire : une epic est une user story trop grande. Sa taille est donc relative à ce que l'équipe considère comme planifiable en un sprint. Et comme les capacités d'équipe, les complexités de projet et les définitions de sprint varient, la définition de l'epic varie aussi.

Ce que l'epic n'a généralement pas : un critère de complétion défini à l'avance. Elle a des user stories enfants. Elle est terminée quand ses user stories sont terminées. Mais quelles user stories ? Toutes celles qui ont été créées sous elle ? Toutes celles qui pourraient théoriquement y contribuer ? Celles qui étaient là au moment de la création de l'epic ?

Personne ne le sait vraiment. Et c'est précisément pourquoi les epics restent ouvertes pendant des mois ou des années.

## Le problème de l'epic ouverte

Une epic qui ne se ferme pas est une epic qui ne communique rien sur l'état du travail.

Quand une partie prenante demande « où en est-on avec la fonctionnalité d'export ? », l'équipe ouvre l'epic correspondante et compte les tickets. Vingt tickets fermés, sept ouverts. Est-ce que c'est bien avancé ? Ça dépend du poids relatif des tickets. Ça dépend si les sept tickets ouverts sont des détails ou des parties centrales de la fonctionnalité. Ça dépend si de nouveaux tickets ont été ajoutés depuis la création de l'epic.

La réponse honnête est : « On ne sait pas vraiment. » Mais ce n'est pas ce que la partie prenante entend.

Ce que ça produit dans les équipes : une tendance à créer des métriques proxy (pourcentage de tickets fermés, burndown de l'epic) qui donnent une apparence de suivi sans vraiment répondre à la question. Et une tendance à sous-déclarer la dette de travail réelle pour maintenir ces métriques dans une zone confortable.

## Ce que la capability fait différemment

Une capability est une fonctionnalité concrète du produit. Elle décrit ce que le produit sera capable de faire une fois que la capability est complète.

La différence fondamentale avec l'epic : la capability a une définition de complétion qui peut être évaluée indépendamment des tickets qui la composent.

« Export CSV des rapports » est une capability. Elle est terminée quand l'utilisateur peut exporter ses rapports au format CSV depuis l'interface. Ce critère est définissable avant même de créer le premier ticket. Il peut être validé sans ouvrir le backlog.

« Amélioration de l'expérience utilisateur de la page rapport » est une epic classique. Quand est-elle terminée ? Ça dépend de ce qui a été décidé, de ce qui a été livré, de ce qu'on considère comme suffisamment amélioré. La réponse change selon qui répond.

## Le niveau d'abstraction juste

La capability vit à un niveau d'abstraction qui correspond à la façon dont les utilisateurs et les parties prenantes pensent le produit. Pas au niveau du ticket technique, pas au niveau de l'objectif stratégique pluriannuel - au niveau de la fonctionnalité visible et utilisable.

Ce niveau est plus utile pour la planification que l'epic pour plusieurs raisons.

**Elle est estimable de façon significative.** « Combien de temps pour livrer l'export CSV ? » est une question à laquelle une équipe peut répondre avec une fourchette raisonnée. « Combien de temps pour l'epic Amélioration des rapports ? » produit une réponse qui varie selon ce qu'on inclut dans l'epic.

**Elle est communiquable vers l'extérieur.** « La prochaine release inclut l'export CSV, les notifications par email et la gestion des rôles » est une phrase que le management, les sales et les utilisateurs peuvent comprendre. Les epics ne se prêtent généralement pas à ce niveau de communication.

**Elle a un état binaire.** Une capability est soit livrée, soit pas livrée. Elle peut avoir des sous-states (en développement, en review, en test), mais son état final est binaire. Une epic peut être « partiellement terminée » indéfiniment.

## L'impact sur la planification

Dans la planification à moyen terme - roadmap, vision produit sur deux à quatre trimestres - les capabilities sont l'unité naturelle de travail.

« Au T3, on livre les capabilities X, Y, Z. Au T4, on commence W et V. » Cette phrase est concrète, communicable, et permet de gérer les dépendances et les priorités.

La même planification avec des epics produit soit un niveau d'abstraction trop haut (des epics géantes qui couvrent des mois de travail sans définition précise), soit un niveau trop bas (des dizaines d'epics qui nécessitent une taxonomie complexe pour être comprises comme un plan cohérent).

La granularité des capabilities correspond au niveau de granularité des décisions de planification. C'est pour ça que ce niveau est utile.

## Ce que la capability révèle sur les dépendances

Une propriété importante des capabilities bien définies : elles rendent les dépendances visibles.

« L'export CSV dépend de la capability Gestion des rapports, qui doit être livrée en premier. » Cette dépendance est claire parce que les capabilities sont des fonctionnalités concrètes avec des interfaces définies.

Les dépendances entre epics sont souvent implicites et découvertes trop tard. On réalise en cours de sprint que les user stories de l'epic B supposent que les user stories de l'epic A sont terminées, ce qui n'est pas le cas.

Quand les capabilities sont définies avec un critère de complétion clair, les dépendances émergent naturellement lors de la planification, pas lors de l'implémentation.

## Le piège de la renommée

Il serait tentant de conclure : on va juste renommer nos epics en capabilities et tout ira bien.

Ce n'est pas ça. Le nom change quelque chose dans la façon de penser l'objet, mais seulement si la définition change avec.

Une epic renommée capability mais qui reste définie vaguement, sans critère de complétion, sans périmètre stable, n'est qu'une epic avec un nouveau nom.

Ce qui change vraiment quand on passe d'epics à capabilities :

La question posée lors de la création change. « Cette epic, c'est quoi la fonctionnalité au niveau utilisateur que ça représente ? Comment on sait quand c'est terminé ? » Ces questions, posées systématiquement, changent la nature des objets créés.

Le critère de fermeture change. Une capability se ferme quand la fonctionnalité est livrée et validée, pas quand tous ses tickets sont fermés. La distinction est importante : on peut avoir des tickets fermés et une fonctionnalité pas encore validée, et des tickets ouverts pour des améliorations futures qui ne bloquent pas la livraison de la fonctionnalité principale.

Le lien avec la release change. Une capability est soit dans la release, soit pas. Les epics se retrouvent souvent partiellement dans plusieurs releases, ce qui rend le suivi ambigu.

## La dimension organisationnelle

Le passage d'epics à capabilities dit quelque chose sur la relation entre le produit et l'ingénierie.

L'epic, dans sa conception originale, est un artefact du Product Owner. Les user stories sont découpées par l'équipe. L'epic reste souvent du côté produit.

La capability est un artefact partagé. Elle doit être compréhensible par le produit (c'est une fonctionnalité utilisateur), par l'ingénierie (c'est un périmètre technique avec des implications d'implémentation) et par les parties prenantes (c'est quelque chose que le produit va savoir faire).

Cette propriété partagée force une collaboration plus étroite lors de la définition. Elle produit des artefacts plus précis parce qu'ils ont été challengés depuis plusieurs perspectives avant d'être planifiés.

---

Le vocabulaire que vous utilisez pour décrire votre travail structure la façon dont vous planifiez, dont vous communiquez et dont vous savez quand vous avez fini. 

Capability n'est pas juste un autre mot pour epic. C'est une promesse de précision : savoir ce que le produit va pouvoir faire, et savoir quand c'est vrai.
