---

title: "Pourquoi les dailies sont souvent inutiles"
subtitle: "Le daily standup est l'un des rituels les plus universellement pratiqués dans les équipes de développement. C'est aussi l'un des rituels les plus souvent mal pratiqués, transformé en réunion de statut dont personne ne sort avec quoi que ce soit d'utile."
description: "Le daily standup Scrum a un objectif précis : synchroniser l'équipe et détecter les blocages. Quand il devient un rapport d'activité individuel, il perd sa valeur et consomme du temps sans rien produire. Voici comment reconnaître et corriger ce glissement."
categories: ["Gestion de Projet", "Work Culture"]
excerpt: "Il est 9h30. L'équipe est réunie. Chacun à son tour répond aux trois questions : « Qu'est-ce que j'ai fait hier, qu'est-ce que je fais aujourd'hui, quels sont mes blocages. » Quinze minutes plus tard, tout le monde repart à son écran sans que rien n'ait changé. Ce daily n'a servi à rien."
date: 2026-06-13 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-13-dailies-inutiles-featured.svg

---

Il y a une asymétrie étrange dans les discussions sur les dailies. La plupart des développeurs, si vous leur demandez en privé, vous diront que leur daily est souvent inutile. Beaucoup de managers vous diront que les dailies sont essentiels. Cette divergence n'est pas un désaccord sur l'outil. C'est un désaccord sur l'usage.

Le développeur qui trouve son daily inutile a souvent raison. Pas parce que les dailies sont intrinsèquement inutiles - ils peuvent l'être - mais parce que le daily dans sa pratique courante est souvent devenu quelque chose de très différent de ce qu'il est censé être.

## Ce que le daily standup est censé accomplir

Le daily standup dans la méthode Scrum a un objectif précis et limité : synchroniser l'équipe autour de sa progression vers l'objectif du sprint, et identifier les obstacles qui empêchent cette progression.

Ce n'est pas une réunion de statut pour le Scrum Master ou le manager. Ce n'est pas un rapport d'activité. Ce n'est pas une session de résolution de problèmes.

Les trois questions classiques (qu'est-ce que j'ai fait hier, qu'est-ce que je fais aujourd'hui, quels sont mes blocages) sont un aide-mémoire pour structurer une synchronisation rapide. Elles ne sont pas une fin en elles-mêmes.

L'intention originale : en quinze minutes, l'équipe a une vue partagée de où elle en est, et chaque membre sait s'il y a quelque chose qui nécessite sa collaboration immédiate.

## Le glissement vers le rapport de statut

Dans la pratique, beaucoup de dailies ont glissé vers quelque chose de différent : un rapport d'activité individuel adressé au Scrum Master ou au manager.

Comment reconnaître ce glissement :

**Les réponses aux trois questions s'adressent à une personne en particulier** (le Scrum Master, le lead, le manager) plutôt qu'à l'équipe. Le regard de la personne qui parle va vers cette personne plutôt que de balayer l'équipe.

**Les blocages ne sont pas mentionnés.** Les membres de l'équipe n'expriment pas leurs vrais blocages parce que déclarer un blocage publiquement est perçu comme un aveu de faiblesse ou de retard. On déclare des blocages propres (« j'attends la validation de l'API ») mais pas les vrais problèmes (« je suis bloqué sur ce problème depuis deux jours et je ne comprends pas pourquoi »).

**Les réponses sont vagues et génériques.** « J'avance sur la feature X » ne dit rien. C'est une réponse pour satisfaire la forme sans exposer d'information réelle.

**Le daily prend plus de quinze minutes.** Pas parce que des sujets importants sont discutés, mais parce que les discussions s'allongent sur des sujets qui intéressent seulement deux personnes sur dix présentes.

**Rien ne change après le daily.** L'équipe repart à son travail dans le même état qu'avant. Personne n'a offert d'aide, personne n'a identifié une dépendance critique, personne n'a décidé de se parler hors de la réunion pour résoudre un problème.

## Pourquoi le rapport de statut remplace la synchronisation

Ce glissement n'est pas accidentel. Il reflète une dynamique de pouvoir réelle dans les équipes.

Quand un manager ou un lead est présent au daily, les membres de l'équipe adaptent leur comportement. Ils parlent de manière à paraître productifs et actifs. Ils minimisent les difficultés. Ils évitent d'exposer des incertitudes qui pourraient être interprétées comme de l'incompétence.

Ce n'est pas de la mauvaise foi. C'est un comportement rationnel dans un contexte où la performance individuelle est évaluée et où les difficultés peuvent avoir des conséquences sur l'évaluation.

Le résultat : le daily devient une performance. Chacun dit ce qu'il est attendu de dire, dans l'ordre attendu, dans le temps attendu. L'information qui serait vraiment utile (les vraies difficultés, les vraies incertitudes, les vrais besoins de collaboration) ne circule pas.

## Ce qui rend un daily utile

Un daily utile n'est pas défini par sa forme mais par ce qu'il produit.

À la sortie d'un daily utile, au moins une des choses suivantes s'est produite :

**Quelqu'un a proposé son aide à quelqu'un d'autre.** « Tu sembles bloqué sur X - j'ai eu le même problème la semaine dernière, on se parle après ? » C'est la valeur centrale de la synchronisation : permettre à des collègues de se trouver.

**Un risque a été identifié.** « En avançant sur Y hier, j'ai réalisé que ça dépend de Z qui n'est pas encore terminé. Ça risque de bloquer la livraison. » Cette information permet à l'équipe d'adapter son plan.

**Une dépendance a été créée.** « Je vais avoir besoin du endpoint que tu développes en fin de semaine. Est-ce que c'est réaliste ? » La conversation s'organise.

**Un blocage réel a été exprimé.** « Ça fait deux jours que je cherche pourquoi cette fonction ne fonctionne pas comme attendu. J'ai besoin d'aide. » L'équipe peut réagir.

Un daily où aucune de ces choses ne se produit est un daily qui n'a pas rempli sa fonction. Pas parce que la forme était mauvaise, mais parce que l'information qui aurait rendu ces échanges possibles n'a pas circulé.

## Le format alternatif : autour du board

Une pratique qui change la dynamique du daily dans beaucoup d'équipes : tenir le daily autour du tableau de bord (physique ou digital), en passant les tickets plutôt que les personnes.

Au lieu de demander à chaque personne « qu'est-ce que tu as fait », on parcourt le board de droite à gauche (de « terminé » vers « à faire »). Pour chaque ticket en cours, on demande : est-ce que ça avance bien, est-ce qu'il y a un risque, est-ce qu'il y a une dépendance ?

Ce format a plusieurs avantages.

Il centre l'attention sur le flux de travail, pas sur les activités individuelles. La question pertinente n'est pas « que fait chaque personne » mais « les tickets avancent-ils vers la livraison ».

Il révèle les blocages naturellement. Un ticket qui n'a pas bougé depuis deux jours devient visible sans que la personne ait à l'avouer verbalement.

Il réduit la pression de performance individuelle. On parle du ticket, pas de la personne. La distinction est subtile mais réelle dans la dynamique de la réunion.

## Quand supprimer le daily

Il y a des contextes où le daily n'apporte pas de valeur et devrait être supprimé ou remplacé par quelque chose d'autre.

**Les très petites équipes avec une communication continue.** Deux ou trois développeurs qui travaillent dans le même espace et communiquent naturellement n'ont pas besoin d'un rituel de synchronisation quotidien. Leur coordination est permanente.

**Les équipes avec des rythmes très différents.** Un daily à 9h30 qui oblige tous les membres de l'équipe à être synchrones en début de matinée peut être contreproductif pour les membres qui sont plus efficaces l'après-midi, ou qui ont des contraintes personnelles qui ne correspondent pas à ce créneau.

**Quand le daily double d'autres rituels efficaces.** Si une équipe a des stand-ups informels naturels plusieurs fois par jour, un daily formel supplémentaire est redondant.

**Les périodes de travail en profondeur.** Certaines phases de développement nécessitent des blocs de temps long sans interruption. Forcer une synchronisation quotidienne pendant ces phases fragmenté la concentration sans apporter de valeur proportionnelle.

L'alternative au daily supprimé : un canal de communication async où les membres de l'équipe partagent leur statut et leurs blocages à leur rythme, avec la responsabilité de répondre rapidement quand quelqu'un exprime un besoin de collaboration.

## Le signal que le daily envoie sur la culture

La façon dont une équipe pratique ses dailies révèle quelque chose sur sa culture.

Un daily où les blocages sont exprimés librement et rapidement résolus par l'équipe dit : ici, il est safe de demander de l'aide. La vulnérabilité est accueillie, pas sanctionnée.

Un daily où personne n'exprime de blocage et où tout le monde « avance bien » dit : ici, exprimer une difficulté est risqué. Les problèmes sont résolus individuellement ou restent bloqués dans l'ombre.

Le format du daily ne crée pas cette culture. Mais il la reflète et, selon comment il est animé, il peut la renforcer ou la corriger.

---

Le daily standup est un outil. Comme tous les outils, son utilité dépend de la façon dont on l'utilise.

Un daily de quinze minutes où l'équipe se synchronise vraiment, détecte les blocages et s'organise pour s'entraider vaut plus que n'importe quelle réunion de planification.

Un daily de quinze minutes où chacun lit sa liste de tâches à voix haute ne vaut pas les quinze minutes qu'il consomme.

La différence entre les deux n'est pas le format. C'est ce que l'équipe considère comme acceptable de partager, et ce qu'elle fait de ce qui est partagé.
