---

title: "Post-mortem blameless : pourquoi c'est rare en Europe"
subtitle: "Le blameless post-mortem est une pratique née dans la culture SRE de Google. L'idée : analyser les incidents sans chercher des coupables, pour comprendre les causes systémiques. En théorie, c'est évident. En pratique, c'est culturellement difficile."
description: "Le post-mortem blameless repose sur un principe simple : les incidents sont des symptômes de failles systémiques, pas des fautes individuelles. Cette pratique est bien documentée et rarement appliquée fidèlement, particulièrement dans les cultures d'entreprise européennes."
categories: ["Work Culture", "Développement Productivité"]
excerpt: "La base de données de production est tombée vendredi à 18h. Le post-mortem a eu lieu lundi. Dans le compte-rendu : cinq points d'amélioration des processus, trois actions de remédiation technique, et une mention discrète que 'l'incident a été causé par une erreur humaine lors de la migration'. Cette phrase est l'opposé d'un blameless post-mortem."
date: 2026-06-09 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-09-post-mortem-blameless-featured.png

---

Il est 18h47 un vendredi. Une alerte remonte : la base de données de production ne répond plus. L'ingénieur d'astreinte ouvre son terminal, commence à investiguer. Quinze minutes plus tard, il a trouvé la cause : une migration automatique déclenchée par une configuration incorrecte a verrouillé la table principale du service. La correction prend vingt minutes. À 19h22, le service est rétabli.

Le lundi suivant, le post-mortem. La timeline est reconstituée. Les actions de remédiation sont listées. Et quelque part dans le document, une phrase : « L'incident a été déclenché par une erreur de configuration de l'ingénieur X lors du déploiement de vendredi. »

Ce document n'est pas un post-mortem blameless. C'est un post-mortem classique avec un coupable désigné.

La différence entre les deux n'est pas cosmétique. Elle détermine si votre organisation est capable d'apprendre de ses incidents, ou si elle est condamnée à les répéter.

## Ce que le blameless signifie vraiment

Le blameless post-mortem ne dit pas que les individus ne font pas d'erreurs. Il dit que quand un individu fait une erreur qui cause un incident, la question pertinente n'est pas « qui a fait l'erreur » mais « pourquoi le système a-t-il permis que cette erreur se produise, et pourquoi n'a-t-il pas limité son impact ».

Cette perspective repose sur un principe cognitif bien documenté : dans un système complexe, les erreurs individuelles sont rarement la cause racine des incidents. Elles en sont le déclencheur. La cause racine est généralement une combinaison de facteurs systémiques : procédures ambiguës, outillage défaillant, manque de visibilité, pression temporelle, dette technique accumulée.

Si on se contente d'identifier l'erreur individuelle, on corrige peut-être le comportement de la personne concernée (qui, sous l'effet du stress de l'incident, avait déjà probablement intégré la leçon). On ne corrige pas les facteurs systémiques qui ont rendu l'erreur possible et probable.

La prochaine fois, ce sera une autre personne. Dans les mêmes conditions systémiques. Avec le même résultat.

## Pourquoi le blame persiste

Si le blameless post-mortem est clairement supérieur, pourquoi est-il si rare en pratique ?

**La psychologie du bouc émissaire.** Trouver un responsable humain d'un incident satisfait un besoin psychologique profond. Il donne l'impression que le problème est résolu (on sait qui a fait quoi) et qu'il ne se reproduira pas (la personne va faire attention). Ces impressions sont confortables et fausses.

**La structure hiérarchique.** Dans une organisation hiérarchique classique, les incidents ont un coût : ils sont remontés aux managers, aux clients, parfois à la direction. Il est naturel que les équipes cherchent à montrer que le problème a été identifié et que des mesures ont été prises. Nommer une personne satisfait cette demande implicite.

**La culture du risque individuel.** Dans beaucoup d'entreprises, faire une erreur qui cause un incident a des conséquences sur l'évaluation individuelle. Même sans processus disciplinaire explicite, il y a une mémoire informelle. Dans ce contexte, les ingénieurs ne signalent pas proactivement les problèmes qu'ils ont détectés avant qu'ils deviennent des incidents. Ils les contournent silencieusement ou espèrent qu'ils ne se matérialisent pas.

**Le légalisme.** Dans certains secteurs (finance, santé, industrie réglementée), la réglementation exige des audits de traçabilité qui identifient les acteurs de chaque opération. Ce cadre légal influence la culture post-mortem même quand il n'y est pas strictement obligatoire.

## La spécificité culturelle européenne

La pratique blameless a émergé principalement dans des entreprises américaines (Google, Etsy, Netflix) avec une culture de management très différente de la culture européenne traditionnelle.

Quelques caractéristiques de la culture d'entreprise européenne qui compliquent l'adoption :

**La hiérarchie plus marquée.** Dans de nombreuses entreprises européennes, la distance managériale est plus grande. Un ingénieur junior signale difficilement un problème qu'il a découvert si cela implique de contredire une décision de son supérieur ou d'exposer une faille dans un process que la hiérarchie a approuvé.

**La culture de la performance individuelle.** L'évaluation annuelle et les bonus individuels sont une forme d'organisation très ancrée en Europe. Dans ce système, les erreurs ont des conséquences individuelles directes. Il est rationnel pour les individus de minimiser leur visibilité dans les incidents.

**Le droit du travail.** La documentation d'une erreur individuelle dans un compte-rendu d'incident peut avoir des implications légales dans certains contextes européens. Les équipes RH et juridiques sont parfois impliquées dans les post-mortems d'incidents sérieux, ce qui crée une prudence naturelle autour de la désignation de responsables.

**La culture de la discrétion.** La tendance à ne pas mettre en défaut ses collègues en public est culturellement forte dans de nombreux pays européens. Le blameless post-mortem suppose une ouverture sur les erreurs commises qui peut heurter cette norme implicite.

## Ce qu'un bon post-mortem blameless contient

Un post-mortem blameless ne dit pas « personne n'est responsable ». Il dit « les actions individuelles s'expliquent par le contexte systémique ». Cette nuance est importante.

La timeline détaillée d'un bon post-mortem décrit ce que les ingénieurs ont fait et pourquoi ils l'ont fait - avec empathie pour le fait qu'au moment de l'incident, avec les informations disponibles et la pression du temps, leurs décisions étaient rationnelles. Ce n'est qu'avec le recul qu'elles apparaissent comme des erreurs.

Cette approche nécessite ce que John Allspaw appelle « assuming competence » : partir du principe que les personnes impliquées dans un incident étaient des professionnels compétents qui ont fait de leur mieux avec ce qu'ils savaient et ce dont ils disposaient.

À partir de cette perspective, les questions utiles deviennent : qu'est-ce qui a rendu cette action risquée sans que ce soit visible ? Qu'est-ce qui aurait pu signaler le danger avant que l'action soit prise ? Qu'est-ce qui a amplifiné l'impact de l'erreur plutôt que de le contenir ?

Les réponses à ces questions mènent à des améliorations systémiques : meilleure observabilité, processus de validation supplémentaires, circuit-breakers, documentation plus claire, formation ciblée.

## L'incident comme apprentissage organisationnel

Le blameless post-mortem repose sur une conviction : les incidents sont des opportunités d'apprentissage organisationnel.

Les organisations qui traitent les incidents comme des fautes individuelles ont un taux d'apprentissage faible. Les informations sur ce qui s'est passé ne circulent pas librement parce que les personnes impliquées ont intérêt à minimiser leur rôle. Les causes systémiques restent en place. Les incidents se répètent.

Les organisations qui traitent les incidents comme des opportunités d'apprentissage ont un taux d'apprentissage élevé. Les ingénieurs signalent proactivement les near-misses (incidents qui auraient pu se produire mais ne se sont pas produits). Les post-mortems sont lus par des équipes en dehors de l'équipe directement impliquée. Les améliorations systémiques sont prioritisées et suivies.

La différence de maturité entre les deux types d'organisation se mesure souvent en termes de mean time to recovery (MTTR) : les organisations qui apprennent de leurs incidents récupèrent plus vite parce qu'elles ont les playbooks, l'observabilité et les automatisations que les incidents précédents ont révélé comme nécessaires.

## Mettre en place la pratique dans une culture défavorable

Il est difficile d'imposer le blameless post-mortem dans une organisation dont la culture est fondamentalement blaming. Mais il est possible de créer des espaces où la pratique peut s'enraciner progressivement.

Commencer par les small incidents, ceux qui n'ont pas de conséquences business sérieuses. Ces incidents ont moins de visibilité managériale et permettent d'expérimenter le format sans enjeu politique.

Séparer clairement le post-mortem (analyse technique et systémique) des processus disciplinaires (s'ils existent). Le post-mortem ne doit jamais être le véhicule d'une sanction.

Modéliser le comportement souhaité. Quand un manager ou un lead partage ses propres erreurs dans un post-mortem, il signale que c'est acceptable de le faire.

Mesurer et partager les améliorations produites par les post-mortems. Quand les équipes voient que les post-mortems produisent des améliorations concrètes (et pas juste de la bureaucratie), leur engagement dans le processus augmente.

---

Le blameless post-mortem n'est pas une technique. C'est une philosophie sur la nature des erreurs dans les systèmes complexes.

La vraie question n'est pas « qui a fait l'erreur ? ». Elle est « pourquoi notre système a-t-il permis que cette erreur devienne un incident, et comment on le change pour que la prochaine erreur - parce qu'il y en aura une - n'ait pas le même impact ? »

Cette question est plus difficile. Elle est aussi plus utile.
