---

title: "DDD en la práctica: cuándo ayuda y cuándo es ruido"
subtitle: "Domain-Driven Design es uno de los conceptos más influyentes de la ingeniería de software de los últimos veinte años. También es uno de los más mal aplicados y sobreutilizados."
description: "Domain-Driven Design aporta valor real en ciertos contextos. En otros, añade complejidad sin ningún beneficio. Entender la diferencia evita años de ceremonia por la ceremonia misma."
categories: ["Productividad en Desarrollo"]
excerpt: "El equipo pasó tres semanas modelando los bounded contexts, los aggregates y los domain events de su aplicación de gestión de contenidos. La aplicación hace CRUD sobre cinco tablas. Esa es la señal de que DDD se está usando como fin en sí mismo, no como herramienta."
date: 2026-06-06 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-06-ddd-quand-ca-aide-featured.png

---

Domain-Driven Design nació del libro de Eric Evans en 2003. Tardó veinte años en convertirse en corriente principal, quizás porque el libro es denso, quizás porque se necesita cierto volumen de complejidad para ver su valor, o quizás porque hizo falta la aparición de los microservicios para que sus conceptos de descomposición de dominio encontraran su contexto de aplicación natural.

Hoy, DDD está en todas las conversaciones de arquitectura. Bounded contexts, aggregates, domain events, ubiquitous language, context maps: estos términos aparecen en los design docs, los READMEs y las ofertas de empleo. Y como todo concepto que se ha vuelto popular, se aplica tanto en contextos donde aporta valor real como en contextos donde solo añade complejidad sin ningún beneficio.

## Lo que DDD resuelve realmente

Para entender cuándo DDD es útil, hay que comprender qué problema intenta resolver.

El problema que DDD aborda: la deriva entre el modelo mental de los expertos de negocio y el modelo técnico implementado por los desarrolladores. Cuando estos dos modelos divergen, la comunicación se vuelve difícil, los malentendidos se multiplican y el código termina implementando reglas de negocio que nadie en la organización reconoce realmente.

DDD propone una solución en varias partes: alinear los términos usados por los desarrolladores y los expertos de negocio (ubiquitous language), descomponer el sistema en dominios coherentes con fronteras explícitas (bounded contexts), y modelar cada dominio reflejando fielmente sus reglas de negocio (domain model).

Esta solución tiene valor real en un contexto específico: cuando el dominio de negocio es complejo, cuando las reglas de negocio son numerosas e interdependientes, y cuando los expertos de negocio desempeñan un papel activo en la definición del sistema.

## Cuándo DDD aporta valor

Los contextos donde DDD ofrece un valor neto claro:

**Los sistemas financieros y de seguros.** Estos dominios tienen reglas de negocio extremadamente complejas: reglas de cálculo que dependen de decenas de variables, invariantes estrictos sobre la consistencia de los datos, procesos secuenciales con estados claramente definidos. El modelado preciso de aggregates y domain events es directamente útil aquí.

**Los sistemas con varios dominios distintos que evolucionan de forma independiente.** Una plataforma de e-commerce tiene un dominio de catálogo (los productos y sus atributos), un dominio de pedidos (el proceso de compra y la gestión de estados), y un dominio de entrega (la logística). Estos dominios tienen reglas diferentes, expertos diferentes y ciclos de evolución diferentes. Separarlos en bounded contexts hace que cada equipo sea más autónomo.

**Los sistemas con múltiples equipos que deben colaborar.** Cuando varios equipos trabajan en partes del mismo sistema, los bounded contexts definen las fronteras de equipo y las interfaces entre ellos. Es una aplicación directa de la Ley de Conway.

**Los dominios donde la semántica es crítica.** En ciertos dominios, una misma palabra tiene significados diferentes según el contexto. "Cliente" significa algo distinto en el dominio comercial (una relación contractual) y en el dominio técnico (una conexión de red). El ubiquitous language obliga a clarificar estas ambigüedades.

## Cuándo DDD crea complejidad innecesaria

Los contextos donde DDD es contraproducente:

**Las aplicaciones CRUD simples.** Una aplicación de gestión de contactos, un blog, una herramienta de facturación simple: estos sistemas tienen dominios poco complejos, reglas de negocio limitadas y equipos a menudo pequeños. Añadir aggregates, repositories y domain events para implementar operaciones básicas de lectura y escritura produce código más verboso sin ninguna ventaja.

**Las startups en fase de descubrimiento.** Cuando el producto cambia radicalmente cada mes, modelar cuidadosamente los bounded contexts es una inversión que caduca antes de amortizarse. La flexibilidad es más valiosa que la precisión del modelo en este contexto.

**Los equipos pequeños.** DDD supone una colaboración intensiva entre desarrolladores y expertos de negocio, sesiones de event storming y talleres de modelado. Estas prácticas tienen un coste en tiempo y organización. Para un equipo de tres desarrolladores, ese coste es desproporcionado.

**Los dominios técnicos sin lógica de negocio.** Un servicio de infraestructura, un proxy, un sistema de logging: estos componentes no tienen un "dominio" en el sentido de negocio del término. Aplicar DDD a componentes puramente técnicos es una confusión de categorías.

## El event storming sin las razones

El event storming, la técnica de modelado colaborativo desarrollada por Alberto Brandolini, es una de las prácticas DDD más útiles cuando se aplica correctamente.

Su principio: reunir a desarrolladores y expertos de negocio para modelar los eventos que ocurren en el dominio, comenzando por los resultados (los events) en lugar de por las estructuras (las entidades). Este enfoque revela procesos implícitos, reglas ocultas y ambigüedades de comunicación.

El problema: el event storming se practica a menudo sin los expertos de negocio. El equipo técnico hace un event storming entre sí para "modelar el dominio." Al hacerlo, modela su propia comprensión del dominio, que puede divergir significativamente de la realidad.

Un event storming sin expertos de negocio produce un modelo elaborado de hipótesis. No es inútil, pero está lejos de la promesa original.

## El ubiquitous language en la práctica

Uno de los conceptos más valiosos de DDD es también uno de los más simples: usar los mismos términos en el código y en las conversaciones de negocio.

Este principio tiene valor directo incluso sin adoptar todo lo demás de DDD. Cuando el código usa "Customer" y el negocio habla de "Cliente," cada conversación produce una traducción implícita que crea oportunidades de malentendido.

El ubiquitous language puede adoptarse de forma ligera: mantener un glosario de términos de negocio, verificar que el código utiliza esos términos, corregir las divergencias cuando aparecen. No hace falta tener bounded contexts ni aggregates para beneficiarse de ello.

Esta es quizás la lección más directamente aplicable de DDD para los equipos que no desarrollan sistemas complejos.

## La confusión entre DDD táctico y DDD estratégico

DDD se presenta a menudo como un conjunto coherente de prácticas. En realidad, hay dos niveles que se aplican en contextos diferentes.

El DDD estratégico (bounded contexts, context maps, domain discovery) es útil para cualquier equipo que construya sistemas con varios dominios distintos. Ayuda a descomponer el sistema y a definir las fronteras de responsabilidad. Su coste es moderado y sus beneficios son amplios.

El DDD táctico (aggregates, value objects, domain events, repositories) es un conjunto de patrones de implementación útiles para dominios con reglas de negocio complejas. Su coste es mayor: requiere que los desarrolladores se familiaricen con los patrones y exige una disciplina de implementación significativa. Sus beneficios son reales, pero solo en los dominios que realmente los necesitan.

La mayoría de los equipos que "hacen DDD" aplican los patrones tácticos en todas partes, incluso en las partes del sistema que no los necesitan. Obtienen la complejidad sin los beneficios.

El enfoque razonado: aplicar el DDD estratégico ampliamente para clarificar las fronteras, y reservar el DDD táctico para los bounded contexts donde la complejidad de negocio lo justifica realmente.

## Lo que DDD enseña incluso cuando no se adopta

Incluso para los equipos que no practican DDD formalmente, los conceptos centrales tienen valor pedagógico.

La pregunta "¿cuál es el dominio de este componente?" es una buena pregunta que hacerse sobre cualquier arquitectura. Obliga a pensar en términos de responsabilidad y coherencia, no solo en términos de estructura técnica.

La pregunta "¿usan los desarrolladores y los expertos de negocio las mismas palabras para las mismas cosas?" revela a menudo malentendidos profundos que ninguna revisión de código habría encontrado.

La pregunta "¿cuáles son los eventos importantes en este dominio?" es una forma de pensar el sistema en términos de flujo en lugar de estructuras estáticas, lo que suele estar más cerca de la realidad del negocio.

Estas preguntas tienen valor incluso si no se están construyendo aggregates.

---

DDD es una herramienta poderosa en dominios complejos. Como todas las herramientas poderosas, es contraproducente cuando se aplica sin discernimiento.

El criterio de decisión es simple: ¿justifica la complejidad del dominio la inversión en patrones tácticos? Si el dominio tiene reglas de negocio simples y escasas, la respuesta es no. Si el dominio es complejo, multi-actor y en constante evolución, la respuesta probablemente sea sí.

Todo lo demás es ceremonia por la ceremonia misma.
