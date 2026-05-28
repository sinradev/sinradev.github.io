---

title: "KISS : l'art de ne pas compliquer ce qui n'a pas besoin de l'être"
subtitle: "MCP, agents, plugins, orchestrateurs, RAG, fine-tuning. Chaque semaine apporte son lot de nouveaux concepts. KISS n'est pas un refus d'évoluer. C'est une boussole pour ne pas se perdre."
description: "KISS - Keep It Simple, Stupid - est un principe de conception né dans l'ingénierie militaire dans les années 60. Soixante ans plus tard, dans un monde saturé de nouveaux outils et concepts IA, il est plus pertinent que jamais."
categories: ["Développement Productivité", "Work Culture"]
excerpt: "La complexité se construit facilement. La simplicité se choisit. KISS n'est pas une paresse intellectuelle : c'est une discipline qui exige de résister à l'envie d'ajouter, d'intégrer, d'adopter tout ce qui brille."
date: 2026-05-28 00:00:00 +0100
featured_image: /assets/images/blog/2026-05-28-kiss-principe-simplicite-featured.png

---

Il y a une scène qui se répète dans les équipes techniques du monde entier. Un développeur ouvre un projet qu'il n'a pas touché depuis six mois. Il essaie de comprendre pourquoi il y a douze microservices pour une application qui fait trois choses. Pourquoi la configuration est distribuée entre quatre outils différents. Pourquoi il faut lire cinq README pour savoir comment lancer le projet en local.

Quelqu'un, à un moment, a cru bien faire. Chaque couche de complexité avait une raison au moment où elle a été ajoutée. Et pourtant, le résultat est un système que personne ne comprend vraiment en entier.

KISS aurait pu éviter ça. Pas en interdisant la complexité, mais en la rendant délibérée.

## L'origine : une philosophie née dans l'ingénierie militaire

Le principe KISS - Keep It Simple, Stupid - est attribué à Kelly Johnson, ingénieur en chef chez Lockheed, dans les années 1960. Johnson était l'un des principaux architectes du programme skunk works, la division secrète de Lockheed qui a produit certains des avions les plus avancés de l'époque : le U-2, le SR-71 Blackbird.

La formulation originale était directe, presque brutale : un système d'arme doit pouvoir être réparé sur le terrain, par un mécanicien avec des outils basiques, dans des conditions difficiles. Si un mécanicien ordinaire ne peut pas le réparer, le design a échoué.

Ce n'était pas un principe d'esthétique. C'était une contrainte de survie.

Johnson aurait illustré le principe en demandant à ses ingénieurs de concevoir un avion qui pourrait être réparé avec un jeu d'outils qu'un mécanicien pourrait tenir dans sa main. Pas de pièces introuvables. Pas de procédures qui nécessitent un manuel de 400 pages. Un design que quelqu'un de compétent mais non spécialisé peut comprendre et maintenir.

L'idée a ensuite migré vers l'ingénierie logicielle dans les années 70 et 80, popularisée par des figures comme Dennis Ritchie et Ken Thompson lors de la conception d'Unix. Le principe Unix en est une déclinaison directe : écrire des programmes qui font une seule chose, et la font bien. Des programmes qui s'assemblent. Pas des monolithes qui essaient de tout faire.

## Le concept : ce que KISS dit vraiment

KISS est souvent mal compris comme un appel à la simplicité naïve. Ce n'est pas ça.

KISS dit : **ne pas ajouter de complexité qui n'est pas justifiée par un problème réel et actuel.**

La distinction est importante. Il ne s'agit pas d'écrire du code stupide, ni d'éviter les abstractions par principe. Il s'agit de ne pas introduire de complexité spéculative, c'est-à-dire anticipée pour des besoins qui peut-être n'arriveront jamais.

On distingue généralement deux types de complexité :

**La complexité essentielle** : celle qui vient du problème lui-même. Un système de traitement de paiements a une complexité inhérente. Elle ne peut pas être éliminée, seulement gérée.

**La complexité accidentelle** : celle qu'on introduit par les choix d'architecture, d'outils, de patterns. Un système de traitement de paiements qui utilise douze dépendances pour faire ce qu'une bibliothèque standard ferait en dix lignes.

KISS s'attaque à la complexité accidentelle. Il ne prétend pas que tous les problèmes sont simples. Il dit que si un problème peut être résolu simplement, il doit l'être.

## Pourquoi la complexité nous attire

Comprendre KISS demande de comprendre pourquoi on fait le contraire par défaut.

La complexité attire pour plusieurs raisons.

**Elle signale l'expertise.** Un système élaboré, avec des patterns sophistiqués et une architecture en couches, donne l'impression de sérieux. Un script de cent lignes qui fait la même chose semble trop simple pour être professionnel.

**Elle anticipe des besoins hypothétiques.** « On va peut-être avoir besoin de scaler à un million d'utilisateurs. » Peut-être. Probablement pas. Et même si c'est le cas, les besoins réels à cette échelle seront différents de ce qu'on imagine maintenant.

**Elle est socialement valorisée.** Dans beaucoup d'équipes, proposer une architecture complexe donne l'air d'avoir réfléchi. Proposer la solution simple peut sembler qu'on n'a pas assez travaillé le sujet.

**Elle est plus facile à construire que la simplicité.** C'est paradoxal mais vrai. Ajouter une couche d'abstraction prend cinq minutes. Décider que cette couche n'est pas nécessaire demande de la confiance, de l'expérience, et de résister à une pression sociale réelle.

## Les exemples concrets

### Stack technique

Une startup qui lance un SaaS B2B n'a probablement pas besoin de Kubernetes. Elle a besoin que son service fonctionne.

La tentation est forte : les tutoriels montrent Kubernetes, les offres d'emploi mentionnent Kubernetes, les conférences parlent de Kubernetes. Ça semble être le bon outil pour une application sérieuse.

Mais Kubernetes résout des problèmes d'orchestration à l'échelle. Pour une startup de cinq personnes avec deux cents clients, c'est une infrastructure qui demande des heures de maintenance, des compétences rares, et qui ajoute des couches entre le code et le serveur. Un VPS avec Docker Compose, ou une plateforme comme Fly.io ou Render, fait le même travail avec une fraction de la complexité.

De la même façon : une API qui fait des opérations CRUD n'a probablement pas besoin d'un système d'événements distribués, d'une file de messages, et d'une architecture CQRS. Elle a besoin d'une base de données et de quelques routes bien écrites.

Rails, Laravel, Django sont des exemples de stacks KISS réussies. Pas parce qu'ils sont simples techniquement, mais parce qu'ils résolvent beaucoup de problèmes courants avec des conventions plutôt qu'avec de la configuration. Moins de décisions à prendre, moins de pièces à assembler, moins de surface d'erreur.

### Infrastructure

L'infrastructure suit le même pattern. Un pipeline CI/CD qui enchaîne vingt étapes, avec des scripts bash de trois cents lignes, des Dockerfiles multi-stage, des configurations Terraform imbriquées, et des secrets distribués entre quatre systèmes différents, c'est une infrastructure que personne ne comprend vraiment et que tout le monde craint de toucher.

KISS en infrastructure, c'est : est-ce qu'on peut déployer avec une seule commande ? Est-ce que quelqu'un qui rejoint l'équipe peut comprendre comment l'infrastructure fonctionne en une heure ? Est-ce qu'on peut restaurer le service rapidement si quelque chose échoue ?

La résilience d'une infrastructure ne vient pas de sa sophistication. Elle vient de sa lisibilité et de sa reproductibilité.

### Intelligence artificielle : le terrain le plus difficile

L'IA est aujourd'hui le domaine où KISS est le plus difficile à appliquer et le plus nécessaire.

En l'espace de deux ans, l'écosystème autour des LLMs a explosé. RAG, fine-tuning, agents, MCP (Model Context Protocol), plugins, orchestrateurs comme LangChain ou LlamaIndex, frameworks d'évaluation, pipelines de données pour l'entraînement, bases vectorielles, etc.

Chaque semaine, un nouveau concept s'impose comme « indispensable ». Chaque semaine, une startup lève des millions pour résoudre un problème que la majorité des équipes n'a pas encore.

La tentation est d'adopter tout ça. D'avoir une stack IA complète, avec un orchestrateur, un système de mémoire persistante, plusieurs agents spécialisés, des plugins pour chaque intégration.

Ce que KISS dit ici est net : **commence par l'appel API direct au modèle. Ajoute une couche seulement quand tu as un problème réel que l'appel direct ne résout pas.**

Pour la majorité des cas d'usage IA en production aujourd'hui, un bon prompt et un appel API direct font le travail. LangChain ajoute de l'abstraction. Cette abstraction a un coût : débogage plus difficile, dépendance à un framework qui évolue vite, comportements implicites difficiles à tracer.

Ce n'est pas un argument contre LangChain. C'est un argument pour commencer simple et ajouter de la complexité seulement quand elle est justifiée par un problème concret.

## KISS et la résilience dans un monde qui change vite

KISS n'est pas une résistance au changement. C'est une façon de rester capable de changer.

Un système simple peut être modifié rapidement. Un système complexe accumule de l'inertie. Chaque couche ajoutée rend les couches en dessous plus difficiles à toucher. Chaque dépendance crée un vecteur de changement non maîtrisé.

Dans un contexte qui évolue vite, la résilience vient de la capacité à s'adapter. Et cette capacité est directement corrélée à la simplicité du système.

Les équipes qui s'en sortent le mieux dans les moments de changement - migration de modèle IA, changement d'infrastructure cloud, pivot produit - sont généralement celles dont les systèmes sont les plus lisibles et les moins couplés. Pas parce qu'elles ont anticipé ces changements, mais parce qu'un système simple peut accueillir des changements imprévus sans s'effondrer.

La complexité, elle, accumule de la dette. Chaque niveau d'abstraction qui ne correspond plus au besoin devient un obstacle. Chaque dépendance qui cesse d'être maintenue devient un risque. Un système qui a grandi organiquement pendant cinq ans, sans principes de conception, est souvent un système qu'on réécrit plutôt qu'on fait évoluer.

## L'IA en 2025 : le meilleur cas d'usage pour KISS

Le domaine de l'IA illustre parfaitement pourquoi KISS est une discipline plutôt qu'un principe passif.

**MCP (Model Context Protocol)** : un protocole ouvert lancé par Anthropic pour que les LLMs puissent interagir avec des outils et des sources de données externes. Utile pour des cas d'usage précis. Pas nécessaire pour appeler une API météo dans un agent simple.

**Skills et agents** : des architectures où un LLM principal orchestre des agents spécialisés qui ont chacun un ensemble de compétences définies. Puissant pour des workflows complexes. Souvent sur-dimensionné pour extraire du texte d'un PDF et le reformater.

**Plugins et intégrations** : des connecteurs qui étendent les capacités d'un LLM vers des systèmes externes. Copilot, Cursor, les extensions IDE. Chacun résout un problème réel. Ensemble, ils créent un environnement de travail dont personne ne contrôle vraiment le comportement.

**RAG (Retrieval-Augmented Generation)** : récupérer des documents pertinents avant de générer une réponse. Une solution solide au problème de la fenêtre de contexte limitée et de la connaissance périmée. Mais pour une base de connaissances de vingt documents, mettre tous les documents dans le contexte est plus simple et souvent plus efficace.

La question KISS face à chaque nouveau concept est la même : **est-ce que j'ai un problème que ce concept résout, ou est-ce que je cherche un problème à ce concept ?**

Beaucoup d'architectures IA actuelles répondent à la deuxième question. Elles sont construites avec les outils les plus avancés parce que ces outils existent, pas parce que le problème le requiert.

## Attendre et voir : la discipline de la non-adoption

KISS implique une posture active face aux nouveaux outils : **attendre de voir ce qui reste.**

L'écosystème IA en 2024 et 2025 a vu émerger des dizaines de frameworks, de protocoles, d'outils qui étaient présentés comme incontournables. Certains ont tenu. Beaucoup ont disparu ou ont été absorbés par d'autres projets.

LangChain a été présenté comme le framework standard pour les agents LLM. Il est aujourd'hui concurrencé par LlamaIndex, CrewAI, AutoGen, LangGraph, DSPy, et une dizaine d'autres projets. La plupart des équipes qui ont investi tôt dans LangChain ont dû réécrire des parties significatives de leur code à mesure que le framework évoluait.

Les équipes qui ont attendu six mois, observé ce qui se stabilisait, et choisi au moment où les options étaient mieux définies, ont généralement fait de meilleurs choix avec moins de refactoring.

Ce n'est pas de la frilosité. C'est de l'ingénierie. On ne construit pas une maison avec des matériaux dont on ne sait pas encore s'ils résistent à la pluie.

KISS appliqué aux nouveaux outils : utiliser le plus simple qui résout le problème maintenant. Adopter un outil plus sophistiqué seulement quand le problème plus simple a démontré ses limites.

## La maîtrise comme objectif

Ce qui distingue KISS de la paresse, c'est la maîtrise.

Un système simple que son équipe comprend entièrement est plus fiable qu'un système sophistiqué que personne ne maîtrise vraiment. La maîtrise permet de diagnostiquer rapidement. Elle permet de faire confiance au comportement du système. Elle permet de former des nouveaux membres sans leur demander six mois d'immersion.

Maîtriser un outil, c'est savoir ce qu'il fait quand ça ne marche pas. C'est connaître ses limites autant que ses capacités. C'est être capable de l'expliquer à quelqu'un qui ne l'a jamais vu.

Dans l'écosystème IA actuel, peu d'équipes maîtrisent vraiment leurs stacks. Elles les utilisent. Elles font confiance aux abstractions. Elles espèrent que les comportements implicites ne créent pas de problèmes en production.

KISS force à se demander : est-ce que je comprends vraiment ce que fait ce système ? Est-ce que je pourrais le reconstruire si nécessaire ? Est-ce que je pourrais expliquer son comportement à quelqu'un d'autre ?

Si la réponse est non, c'est un signal que la complexité a dépassé la maîtrise.

## KISS ne signifie pas ne jamais évoluer

Un dernier point, important.

KISS n'est pas un argument pour ne jamais adopter de nouveaux outils ou de nouvelles architectures. C'est un argument pour les adopter au bon moment, pour les bonnes raisons.

Quand un problème réel dépasse les capacités d'une solution simple, il faut évoluer. La question KISS n'est pas « est-ce que ce nouvel outil est intéressant ? » mais « est-ce que mon problème actuel justifie ce niveau de complexité ? ».

Un système de recommandations qui doit gérer un million d'utilisateurs avec des contraintes de latence strictes a probablement besoin d'une architecture plus sophistiquée qu'un appel API direct. Mais il n'en a pas besoin avant d'avoir ce problème. Et quand ce problème arrive, les besoins réels seront plus clairs qu'ils ne l'auraient été au moment de l'architecture initiale.

C'est le paradoxe de KISS : en commençant simple, on apprend plus vite ce dont on a vraiment besoin. Et on construit des choses meilleures, pas des choses qui anticipent des besoins imaginaires.

---

La simplicité n'est pas un point de départ. C'est une destination qu'on choisit, délibérément, contre la pression constante d'ajouter, d'intégrer, d'adopter. Dans un écosystème qui produit de nouveaux concepts chaque semaine, KISS est moins un principe technique qu'une posture : regarder les nouvelles pièces arriver, attendre de voir lesquelles restent sur le terrain, et ne prendre que celles qui résolvent un problème qu'on a vraiment.

Le reste, on peut le laisser passer.
