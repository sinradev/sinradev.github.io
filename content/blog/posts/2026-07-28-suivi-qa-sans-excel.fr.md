---

title: "Suivi QA sans Excel : Organiser ses Testings Efficacement"
subtitle: "Un fichier Excel de cas de tests fonctionne pour trois personnes pendant trois mois. Après, il devient un fichier que plus personne n'ose modifier de peur de casser une formule."
description: "Le suivi QA sur Excel ou Google Sheets fonctionne au début, puis devient ingérable : versions multiples, cas de test obsolètes, aucun lien avec les tickets réels. Comment structurer ses testings dans un outil qui reste fiable à mesure que l'équipe grandit."
categories: ["Gestion de Projet", "Qualité"]
excerpt: "Le fichier « QA_tests_v4_final_vraiment_final.xlsx » n'est pas une exagération pour beaucoup d'équipes. Voici pourquoi Excel craque sur ce cas d'usage précis, et ce qu'un suivi structuré change concrètement."
date: 2026-07-28 09:00:00 +0200
featured_image: /assets/images/blog/2026-07-28-suivi-qa-sans-excel-featured.png

---

Beaucoup d'équipes démarrent leur suivi QA sur un tableur : c'est rapide à mettre en place, tout le monde sait l'utiliser, et pour une poignée de cas de tests, ça suffit largement. Le problème arrive plus tard, quand le tableur a grossi et que la structure d'origine ne tient plus.

## Comment un tableur QA se dégrade avec le temps

Un fichier de suivi QA commence simple : une ligne par cas de test, une colonne statut, une colonne date. À mesure que le produit grandit, de nouvelles colonnes s'ajoutent pour capturer des besoins imprévus : environnement testé, version concernée, personne assignée. Le fichier devient large, difficile à lire sans défiler dans les deux sens.

Le vrai problème n'est pas la taille, c'est la fiabilité. Rien n'empêche deux personnes de modifier la même ligne en même temps. Rien ne signale qu'un cas de test n'a pas été rejoué depuis la dernière version majeure du produit. Rien ne relie automatiquement un cas de test à l'issue ou à la capability qu'il valide : ce lien existe seulement dans la mémoire de la personne qui a créé la ligne.

## Le symptôme le plus révélateur

Le signal le plus fiable qu'un suivi QA sur tableur a atteint sa limite : quelqu'un demande « est-ce que ce cas est encore pertinent ? » à propos d'une ligne créée un an plus tôt, et personne ne peut répondre avec certitude sans retester manuellement. À ce stade, le tableur ne fait plus gagner de temps : il en coûte, parce qu'il faut vérifier sa propre fiabilité avant de lui faire confiance.

## Ce qu'un suivi structuré doit apporter

Un système de **testings** structuré doit répondre à des besoins que le tableur ne couvre pas nativement :

**Le lien direct avec le travail réel.** Un cas de test devrait être rattaché à la capability ou à l'issue qu'il valide, pas référencé par un identifiant qu'il faut chercher ailleurs.

**Un état de fraîcheur.** Savoir quand un cas de test a été exécuté pour la dernière fois, et sur quelle version, sans devoir recalculer cette information manuellement.

**Une exécution traçable par release.** Pouvoir répondre à « quels tests ont été exécutés et validés pour cette release précise » avec un état consigné, pas une reconstruction a posteriori.

## Comment Sinra structure ce suivi

Dans Sinra, les **testings** vivent au même niveau que les issues et les capabilities, avec les mêmes mécanismes de liaison natifs. Un cas de test peut être directement rattaché à la capability qu'il couvre, exécuté dans le cadre d'un cycle ou d'une release, et son résultat reste consigné et consultable sans reconstruction manuelle. La question « peut-on releaser » évoquée dans la checklist de release s'appuie directement sur cet état, plutôt que sur un tableur séparé qu'il faudrait croiser à la main.

## Le bon moment pour changer

Il n'y a pas de seuil universel de nombre de lignes à partir duquel un tableur QA devient inadapté. Le bon indicateur est comportemental : dès que l'équipe commence à éviter de toucher au fichier par crainte de le casser, ou passe plus de temps à vérifier sa cohérence qu'à réellement tester, la structure a cessé de servir son objectif premier.
