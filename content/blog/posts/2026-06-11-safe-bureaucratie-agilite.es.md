---

title: "SAFe: Cuando la agilidad a escala se convierte en burocracia"
subtitle: "Scaled Agile Framework es la respuesta más utilizada a la pregunta 'cómo hacer Agile con 500 desarrolladores.' También es la más criticada por los practicantes que lo han aplicado. Ambas realidades coexisten."
description: "SAFe (Scaled Agile Framework) es adoptado por miles de empresas en el mundo. Sus promotores elogian su estructura y su previsibilidad. Sus detractores ven en él una burocracia Agile que produce los inconvenientes de ambos modelos sin las ventajas de ninguno."
categories: ["Gestión de Proyectos", "Work Culture"]
excerpt: "Tu organización ha implementado SAFe. Ahora tienes ARTs, PI Plannings, System Demos y talleres de Inspect & Adapt. Tu organización también es más lenta, tiene más reuniones y resulta más frustrante para los ingenieros que antes. Esto no es un error en tu implementación de SAFe. Con frecuencia es una característica."
date: 2026-06-11 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-11-safe-bureaucratie-agilite-featured.svg

---

SAFe es el framework más adoptado para Agile a escala. Según los estudios anuales de VersionOne (ahora Digital.ai), representa de manera consistente entre el 30 y el 40 por ciento de las empresas que practican Agile a gran escala. Eso es un hecho.

SAFe también está regularmente clasificado como el framework menos apreciado por los practicantes en esos mismos estudios. Los desarrolladores, Scrum Masters y coaches Agile que lo han aplicado a menudo lo describen con términos como "pesado," "burocrático" y "contrario al espíritu Agile." Eso también es un hecho.

Estos dos hechos coexisten porque SAFe resuelve un problema real (la coordinación a gran escala) con un enfoque que crea sus propios problemas (la complejidad estructural y la centralización).

## Lo que SAFe Busca Resolver

Las grandes organizaciones tienen un problema legítimo: ¿cómo coordinar el trabajo de cientos de desarrolladores en un mismo producto o plataforma?

Los equipos individuales pueden practicar Scrum o Kanban con éxito a su nivel. Pero cuando diez o veinte equipos trabajan en componentes interdependientes, las dependencias entre equipos generan problemas de coordinación que los métodos ágiles a nivel de equipo no resuelven.

Una funcionalidad que requiere contribuciones de tres equipos distintos puede quedar bloqueada porque cada equipo tiene sus propias prioridades, sus propios sprints y sus propias definiciones de "terminado." Sin una coordinación explícita a nivel inter-equipos, los componentes se desarrollan de manera no sincronizada.

SAFe aborda este problema con una estructura de coordinación en varios niveles: el Agile Release Train (ART) agrupa a varios equipos, el Program Increment (PI) define una cadencia común, y el PI Planning sincroniza a los equipos en sus objetivos y dependencias.

La lógica es sólida. La implementación es compleja.

## La Estructura de SAFe y sus Costos

Para describir SAFe, hay que aceptar adentrarse en su terminología.

Un **Agile Release Train** es un grupo de 50 a 125 personas (en términos generales, de 5 a 12 equipos Scrum) que trabajan juntos sobre el mismo alcance de valor. Un ART tiene sus propios rituales, su propia cadencia y sus propios roles específicos (Release Train Engineer, Product Management a nivel ART).

Un **Program Increment** es un período de planificación de 8 a 12 semanas, cuya primera semana se dedica al **PI Planning**: dos días de reuniones intensivas en las que todos los equipos del ART planifican conjuntamente sus próximos sprints, identifican sus dependencias y se comprometen con objetivos colectivos.

En el nivel superior, varios ARTs pueden agruparse en un **Large Solution Train** o en un **Portfolio**, con instancias de gobernanza adicionales.

El costo organizacional de esta estructura es sustancial.

**Los rituales se multiplican.** Cada equipo mantiene sus rituales de Scrum. Además, están los rituales del ART: el PI Planning de dos días dos veces al año, las System Demos cada dos semanas y el Inspect & Adapt al final de cada PI. Para un equipo de diez personas, el tiempo dedicado a rituales puede representar entre el 15 y el 20 por ciento de la capacidad disponible.

**Los roles proliferan.** Release Train Engineer, Product Manager (nivel ART), Solution Architect, Business Owners, System Team. Cada rol tiene responsabilidades definidas y requiere personas capacitadas. Las grandes empresas terminan con equipos enteros dedicados a gestionar el framework SAFe.

**La rigidez aumenta.** La cadencia del PI Planning, fijada a intervalos regulares (generalmente cada 10 a 12 semanas), crea ventanas de planificación rígidas. Si surge una prioridad urgente entre dos PI Plannings, integrarla en el plan requiere una excepción formal (un "IP Sprint" o una "Innovation Iteration").

## Lo que Sienten los Ingenieros en SAFe

La crítica más recurrente de los ingenieros que trabajan en organizaciones SAFe es la sensación de estar dentro de una burocracia Agile: todos los inconvenientes de la burocracia (complejidad, reuniones, sobrecarga de coordinación) sin los beneficios de la agilidad (flexibilidad, feedback rápido, autonomía).

**El PI Planning se vive frecuentemente como opresivo.** Dos días de reuniones intensivas con 100 personas para planificar en detalle las próximas diez semanas, sobre la base de información que inevitablemente cambiará. La mayoría de los planes elaborados durante el PI Planning están parcialmente obsoletos al finalizar el primer sprint.

**Las dependencias entre equipos son visibles pero no se resuelven.** El PI Planning revela las dependencias. Pero resolverlas requiere modificar los planes de equipos que tienen sus propias prioridades y sus propias restricciones. En la práctica, muchas dependencias se marcan como "riesgo aceptado" y generan retrasos que no fueron anticipados.

**Las métricas de SAFe son fácilmente manipulables.** Las Program Predictability Measures, los PI Objectives, los Business Value scores: métricas que los equipos aprenden rápidamente a optimizar en su propio beneficio en lugar de enfocarse en el valor real. Un objetivo de PI bien formulado pero poco ambicioso favorece las métricas más que un objetivo ambicioso que falla parcialmente.

## Los Casos en que SAFe Aporta Valor Real

A pesar de sus defectos, SAFe no es universalmente inútil.

**Las organizaciones muy grandes con fuertes restricciones regulatorias.** En sectores donde la trazabilidad, la gobernanza y el cumplimiento normativo son requisitos legales, SAFe proporciona una estructura que puede satisfacer esos requisitos manteniendo al mismo tiempo una forma de práctica ágil. Es imperfecto, pero a menudo es la única opción realista.

**Las organizaciones en transición desde Waterfall.** SAFe es frecuentemente criticado como un Waterfall disfrazado de Agile. Esta crítica es parcialmente válida y parcialmente injusta: para organizaciones que vienen del Waterfall, SAFe puede representar un paso de transición hacia prácticas más ligeras. El PI Planning dos veces al año es menos rígido que el plan anual de Waterfall.

**Los contextos con fuertes dependencias de hardware.** En el desarrollo de sistemas embebidos o de hardware físico, los ciclos de desarrollo son intrínsecamente más largos y las dependencias más rígidas. SAFe con su cadencia de 10 a 12 semanas es más adecuado para este contexto que un Scrum de dos semanas.

## Las Alternativas que Funcionan Mejor para la Mayoría de los Equipos

Si el objetivo es coordinar varios equipos Agile sin los costos de SAFe, otros enfoques han demostrado mejores resultados en organizaciones de tamaño mediano.

**Modelo Spotify (con precauciones).** El modelo Spotify con sus Tribes, Squads, Chapters y Guilds se cita a menudo como alternativa a SAFe. Atención: el propio Spotify abandonó su "modelo" tal como había sido descrito en los artículos de 2012-2013. Aplicarlo como plantilla organizacional sin entender su evolución es un error frecuente.

**Team Topologies.** El framework Team Topologies de Matthew Skelton y Manuel Pais ofrece un enfoque de organización de equipos basado en flujos de valor y tipos de interacción (colaboración, facilitación, X-as-a-service). Es menos prescriptivo que SAFe y más adaptable a contextos específicos.

**El enfoque de producto autónomo.** En lugar de coordinar equipos en torno a componentes técnicos, estructurar los equipos alrededor de ámbitos de producto autónomos que pueden entregar valor de forma independiente, minimizando las dependencias entre equipos. Este enfoque resuelve el problema de coordinación desde la raíz reduciendo la coordinación necesaria.

---

SAFe es la consultora de transformación Agile más eficaz jamás creada. Encontró el mercado perfecto: grandes empresas que quieren "hacer Agile" con su estructura jerárquica existente, sus procesos de gobernanza actuales y sus equipos tal como están.

La promesa implícita de SAFe es seductora: agilidad sin una transformación organizacional profunda. Esa promesa explica su adopción masiva. Y es también la razón por la que decepciona tan a menudo a quienes lo aplican.
