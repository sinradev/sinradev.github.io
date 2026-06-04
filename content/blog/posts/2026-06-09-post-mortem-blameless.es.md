---

title: "Post-mortem blameless: por qué es raro en Europa"
subtitle: "El post-mortem blameless es una práctica nacida en la cultura SRE de Google. La idea: analizar los incidentes sin buscar culpables, para comprender las causas sistémicas. En teoría, es obvio. En la práctica, es culturalmente difícil."
description: "El post-mortem blameless se basa en un principio simple: los incidentes son síntomas de fallos sistémicos, no errores individuales. Esta práctica está bien documentada y rara vez se aplica fielmente, especialmente en las culturas empresariales europeas."
categories: ["Cultura Laboral", "Productividad en Desarrollo"]
excerpt: "La base de datos de producción cayó el viernes a las 18h. El post-mortem tuvo lugar el lunes. En el informe: cinco puntos de mejora de procesos, tres acciones de remediación técnica y una mención discreta de que 'el incidente fue causado por un error humano durante la migración.' Esa frase es lo contrario de un post-mortem blameless."
date: 2026-06-09 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-09-post-mortem-blameless-featured.svg

---

Son las 18:47 de un viernes. Una alerta salta: la base de datos de producción ya no responde. El ingeniero de guardia abre su terminal y empieza a investigar. Quince minutos después, ha encontrado la causa: una migración automática disparada por una configuración incorrecta ha bloqueado la tabla principal del servicio. La corrección tarda veinte minutos. A las 19:22, el servicio se restaura.

El lunes siguiente, el post-mortem. Se reconstruye la línea temporal. Se listan las acciones de remediación. Y en algún lugar del documento, una frase: "El incidente fue desencadenado por un error de configuración del ingeniero X durante el despliegue del viernes."

Ese documento no es un post-mortem blameless. Es un post-mortem clásico con un culpable designado.

La diferencia entre los dos no es cosmética. Determina si tu organización es capaz de aprender de sus incidentes, o si está condenada a repetirlos.

## Lo que "blameless" significa realmente

El post-mortem blameless no dice que los individuos no cometan errores. Dice que cuando un individuo comete un error que causa un incidente, la pregunta relevante no es "quién cometió el error" sino "por qué el sistema permitió que ese error ocurriera, y por qué no limitó su impacto."

Esta perspectiva se apoya en un principio cognitivo bien documentado: en un sistema complejo, los errores individuales raramente son la causa raíz de los incidentes. Son el detonante. La causa raíz es generalmente una combinación de factores sistémicos: procedimientos ambiguos, herramientas deficientes, falta de visibilidad, presión temporal, deuda técnica acumulada.

Si uno se limita a identificar el error individual, quizás corrige el comportamiento de la persona implicada (que, bajo el estrés del incidente, probablemente ya había interiorizado la lección). No corrige los factores sistémicos que hicieron posible y probable el error.

La próxima vez, será otra persona. En las mismas condiciones sistémicas. Con el mismo resultado.

## Por qué persiste la culpa

Si el post-mortem blameless es claramente superior, ¿por qué es tan raro en la práctica?

**La psicología del chivo expiatorio.** Encontrar un responsable humano de un incidente satisface una necesidad psicológica profunda. Da la impresión de que el problema está resuelto (sabemos quién hizo qué) y de que no se repetirá (la persona tendrá más cuidado). Estas impresiones son reconfortantes y falsas.

**La estructura jerárquica.** En una organización jerárquica clásica, los incidentes tienen un coste: se elevan a los managers, a los clientes, a veces a la dirección. Es natural que los equipos quieran demostrar que el problema ha sido identificado y que se han tomado medidas. Nombrar a una persona satisface esta demanda implícita.

**La cultura del riesgo individual.** En muchas empresas, cometer un error que causa un incidente tiene consecuencias en la evaluación individual. Incluso sin un proceso disciplinario explícito, existe una memoria informal. En este contexto, los ingenieros no reportan proactivamente los problemas que han detectado antes de que se conviertan en incidentes. Los rodean en silencio o esperan que no lleguen a materializarse.

**El legalismo.** En ciertos sectores (finanzas, sanidad, industria regulada), la regulación exige auditorías de trazabilidad que identifican a los actores de cada operación. Este marco legal influye en la cultura post-mortem incluso cuando no es estrictamente obligatorio.

## La especificidad cultural europea

La práctica blameless emergió principalmente de empresas americanas (Google, Etsy, Netflix) con una cultura de gestión muy diferente a la cultura empresarial europea tradicional.

Algunas características de la cultura empresarial europea que complican su adopción:

**Una jerarquía más marcada.** En muchas empresas europeas, la distancia de gestión es mayor. A un ingeniero junior le resulta difícil señalar un problema que ha descubierto si eso implica contradecir una decisión de su superior o exponer un fallo en un proceso que la jerarquía ha aprobado.

**La cultura de la performance individual.** La evaluación anual y los bonos individuales son una forma de organización muy arraigada en Europa. En este sistema, los errores tienen consecuencias individuales directas. Es racional para los individuos minimizar su visibilidad en los incidentes.

**El derecho laboral.** Documentar un error individual en un informe de incidente puede tener implicaciones legales en ciertos contextos europeos. Los equipos de RRHH y legales se involucran a veces en los post-mortems de incidentes serios, lo que genera una cautela natural en torno a la designación de responsables.

**La cultura de la discreción.** La tendencia a no señalar públicamente a los colegas es culturalmente fuerte en muchos países europeos. El post-mortem blameless exige una apertura sobre los errores cometidos que puede chocar con esta norma implícita.

## Lo que contiene un buen post-mortem blameless

Un post-mortem blameless no dice "nadie es responsable." Dice "las acciones individuales se explican por el contexto sistémico." Este matiz es importante.

La línea temporal detallada de un buen post-mortem describe lo que hicieron los ingenieros y por qué lo hicieron, con empatía hacia el hecho de que en el momento del incidente, con la información disponible y la presión del tiempo, sus decisiones eran racionales. Solo con la perspectiva del tiempo atrás aparecen como errores.

Este enfoque requiere lo que John Allspaw llama "assuming competence": partir del principio de que las personas implicadas en un incidente eran profesionales competentes que hicieron lo mejor que pudieron con lo que sabían y con lo que tenían disponible.

Desde esta perspectiva, las preguntas útiles son: ¿qué hizo que esta acción fuera arriesgada sin que eso fuera visible? ¿Qué podría haber señalado el peligro antes de que se tomara la acción? ¿Qué amplificó el impacto del error en lugar de contenerlo?

Las respuestas a estas preguntas llevan a mejoras sistémicas: mejor observabilidad, procesos de validación adicionales, circuit-breakers, documentación más clara, formación específica.

## El incidente como aprendizaje organizacional

El post-mortem blameless se basa en una convicción: los incidentes son oportunidades de aprendizaje organizacional.

Las organizaciones que tratan los incidentes como errores individuales tienen una tasa de aprendizaje baja. La información sobre lo que ocurrió no circula libremente porque las personas implicadas tienen interés en minimizar su papel. Las causas sistémicas permanecen en su lugar. Los incidentes se repiten.

Las organizaciones que tratan los incidentes como oportunidades de aprendizaje tienen una tasa de aprendizaje alta. Los ingenieros reportan proactivamente los near-misses (incidentes que podrían haber ocurrido pero no ocurrieron). Los post-mortems son leídos por equipos fuera del equipo directamente implicado. Las mejoras sistémicas se priorizan y se siguen.

La diferencia de madurez entre los dos tipos de organización se mide a menudo en términos de mean time to recovery (MTTR): las organizaciones que aprenden de sus incidentes se recuperan más rápido porque tienen los playbooks, la observabilidad y las automatizaciones que los incidentes anteriores revelaron como necesarios.

## Implantar la práctica en una cultura desfavorable

Es difícil imponer el post-mortem blameless en una organización cuya cultura es fundamentalmente culpabilizadora. Pero es posible crear espacios donde la práctica pueda arraigarse progresivamente.

Empezar con los incidentes pequeños, aquellos sin consecuencias serias para el negocio. Estos incidentes tienen menos visibilidad gerencial y permiten experimentar con el formato sin riesgo político.

Separar claramente el post-mortem (análisis técnico y sistémico) de los procesos disciplinarios (si existen). El post-mortem nunca debe ser el vehículo de una sanción.

Modelar el comportamiento deseado. Cuando un manager o un lead comparte sus propios errores en un post-mortem, señala que es aceptable hacerlo.

Medir y compartir las mejoras producidas por los post-mortems. Cuando los equipos ven que los post-mortems producen mejoras concretas (y no solo burocracia), su implicación en el proceso aumenta.

---

El post-mortem blameless no es una técnica. Es una filosofía sobre la naturaleza de los errores en los sistemas complejos.

La verdadera pregunta no es "¿quién cometió el error?". Es "¿por qué nuestro sistema permitió que ese error se convirtiera en un incidente, y cómo lo cambiamos para que el próximo error, porque habrá uno, no tenga el mismo impacto?"

Esa pregunta es más difícil. También es más útil.
