---

title: "KISS: El Arte de No Complicar lo que No Necesita Serlo"
subtitle: "MCP, agentes, plugins, orquestadores, RAG, fine-tuning. Cada semana trae una nueva oleada de conceptos. KISS no es una negativa a evolucionar. Es una brújula para no perderse."
description: "KISS - Keep It Simple, Stupid - es un principio de diseño nacido en la ingeniería militar en los años 60. Sesenta años después, en un mundo saturado de nuevas herramientas y conceptos de IA, es más relevante que nunca."
categories: ["Engineering", "Work Culture"]
excerpt: "La complejidad se construye sola. La simplicidad se elige. KISS no es pereza intelectual: es una disciplina que exige resistir el impulso de agregar, integrar y adoptar todo lo que brilla."
date: 2026-05-28 00:00:00 +0100
featured_image: /assets/images/blog/2026-05-28-kiss-principe-simplicite-featured.png

---

Hay una escena que se repite en equipos técnicos de todo el mundo. Un desarrollador abre un proyecto que no ha tocado en seis meses. Intenta entender por qué hay doce microservicios para una aplicación que hace tres cosas. Por qué la configuración está distribuida entre cuatro herramientas distintas. Por qué necesita leer cinco READMEs solo para levantar el proyecto en local.

Alguien, en algún momento, creyó estar haciendo lo correcto. Cada capa de complejidad tenía una razón cuando fue añadida. Y sin embargo el resultado es un sistema que nadie entiende realmente de principio a fin.

KISS habría podido evitar eso. No prohibiendo la complejidad, sino haciéndola deliberada.

## El Origen: una Filosofía Nacida en la Ingeniería Militar

El principio KISS - Keep It Simple, Stupid - se atribuye a Kelly Johnson, ingeniero jefe de Lockheed, en los años 1960. Johnson fue uno de los principales arquitectos del programa Skunk Works, la división secreta de Lockheed que produjo algunos de los aviones más avanzados de la época: el U-2, el SR-71 Blackbird.

La formulación original era directa, casi brutal: un sistema de armas debe poder repararse en el campo, por un mecánico con herramientas básicas, en condiciones difíciles. Si un mecánico ordinario no puede repararlo, el diseño ha fracasado.

No era un principio estético. Era una restricción de supervivencia.

Johnson ilustraba el principio pidiendo a sus ingenieros que diseñaran un avión que pudiera ser reparado con las herramientas que un mecánico pudiera sostener en sus manos. Sin piezas imposibles de encontrar. Sin procedimientos que requirieran un manual de 400 páginas. Un diseño que alguien competente pero no especializado pudiera entender y mantener.

La idea migró después hacia la ingeniería de software en los años 70 y 80, popularizada por figuras como Dennis Ritchie y Ken Thompson durante el diseño de Unix. La filosofía Unix es una expresión directa de ello: escribir programas que hagan una sola cosa, y la hagan bien. Programas que se componen. No monolitos que intentan hacer todo.

## El Concepto: lo que KISS Realmente Dice

KISS se malinterpreta frecuentemente como una llamada a la simplicidad ingenua. No lo es.

KISS dice: **no agregar complejidad que no esté justificada por un problema real y actual.**

La distinción importa. No se trata de escribir código torpe ni de evitar abstracciones por principio. Se trata de no introducir complejidad especulativa, es decir, anticipada para necesidades que quizás nunca llegarán.

Generalmente se distinguen dos tipos de complejidad:

**Complejidad esencial**: la que proviene del problema mismo. Un sistema de procesamiento de pagos tiene complejidad inherente. No puede eliminarse, solo gestionarse.

**Complejidad accidental**: la que se introduce por elecciones de arquitectura, de herramientas, de patrones. Un sistema de procesamiento de pagos que usa doce dependencias para hacer lo que una biblioteca estándar haría en diez líneas.

KISS ataca la complejidad accidental. No afirma que todos los problemas sean simples. Dice que si un problema puede resolverse de forma simple, debe resolverse así.

## Por Qué la Complejidad Nos Atrae

Entender KISS requiere entender por qué hacemos lo contrario por defecto.

La complejidad atrae por varias razones.

**Señala expertise.** Un sistema elaborado, con patrones sofisticados y una arquitectura en capas, da impresión de seriedad. Un script de cien líneas que hace lo mismo parece demasiado simple para ser profesional.

**Anticipa necesidades hipotéticas.** "Quizás necesitemos escalar a un millón de usuarios." Tal vez. Probablemente no. Y aunque así sea, las necesidades reales a esa escala serán distintas de lo que imaginamos ahora.

**Está socialmente valorada.** En muchos equipos, proponer una arquitectura compleja parece haber pensado a fondo el problema. Proponer la solución simple puede parecer que no se ha trabajado suficientemente.

**Es más fácil de construir que la simplicidad.** Esto es paradójico pero cierto. Añadir una capa de abstracción lleva cinco minutos. Decidir que esa capa no es necesaria requiere confianza, experiencia y capacidad para resistir una presión social real.

## Ejemplos Concretos

### El Stack Técnico

Una startup que lanza un SaaS B2B probablemente no necesita Kubernetes. Necesita que su servicio funcione.

La tentación es fuerte: los tutoriales muestran Kubernetes, las ofertas de trabajo mencionan Kubernetes, las charlas en conferencias tratan sobre Kubernetes. Parece la herramienta correcta para una aplicación seria.

Pero Kubernetes resuelve problemas de orquestación a escala. Para una startup de cinco personas con doscientos clientes, es infraestructura que exige horas de mantenimiento, habilidades escasas, y añade capas entre el código y el servidor. Un VPS con Docker Compose, o una plataforma como Fly.io o Render, hace el mismo trabajo con una fracción de la complejidad.

Del mismo modo: una API que hace operaciones CRUD probablemente no necesita un sistema de eventos distribuidos, una cola de mensajes y una arquitectura CQRS. Necesita una base de datos y unas pocas rutas bien escritas.

Rails, Laravel, Django son ejemplos exitosos de stacks KISS. No porque sean técnicamente simples, sino porque resuelven muchos problemas comunes con convenciones en lugar de configuración. Menos decisiones que tomar, menos piezas que ensamblar, menos superficie de error.

### Infraestructura

La infraestructura sigue el mismo patrón. Un pipeline CI/CD que encadena veinte pasos, con scripts bash de trescientas líneas, Dockerfiles multi-stage, configuraciones Terraform anidadas y secretos distribuidos entre cuatro sistemas distintos es infraestructura que nadie entiende realmente y todos temen tocar.

KISS en infraestructura pregunta: ¿podemos desplegar con un solo comando? ¿Puede alguien que se une al equipo entender cómo funciona la infraestructura en una hora? ¿Podemos restaurar el servicio rápidamente si algo falla?

La resiliencia de una infraestructura no viene de su sofisticación. Viene de su legibilidad y reproducibilidad.

### Inteligencia Artificial: el Terreno más Difícil

La IA es hoy el dominio donde KISS es más difícil de aplicar y más necesario.

En el espacio de dos años, el ecosistema alrededor de los LLMs ha explotado. RAG, fine-tuning, agentes, MCP (Model Context Protocol), plugins, orquestadores como LangChain o LlamaIndex, frameworks de evaluación, pipelines de datos para entrenamiento, bases de datos vectoriales.

Cada semana, un nuevo concepto se presenta como "indispensable". Cada semana, una startup levanta millones para resolver un problema que la mayoría de los equipos aún no tiene.

La tentación es adoptarlo todo. Tener un stack de IA completo, con un orquestador, un sistema de memoria persistente, varios agentes especializados, plugins para cada integración.

Lo que KISS dice aquí es claro: **empieza con la llamada directa a la API del modelo. Añade una capa solo cuando tengas un problema real que la llamada directa no resuelva.**

Para la mayoría de los casos de uso de IA en producción hoy, un buen prompt y una llamada directa a la API hacen el trabajo. LangChain añade abstracción. Esa abstracción tiene un coste: depuración más difícil, dependencia de un framework que evoluciona rápido, comportamientos implícitos difíciles de trazar.

Eso no es un argumento contra LangChain. Es un argumento para empezar simple y añadir complejidad solo cuando esté justificada por un problema concreto.

## KISS y la Resiliencia en un Mundo que Cambia Rápido

KISS no es resistencia al cambio. Es una forma de seguir siendo capaz de cambiar.

Un sistema simple puede modificarse rápidamente. Un sistema complejo acumula inercia. Cada capa añadida hace las capas de abajo más difíciles de tocar. Cada dependencia crea un vector de cambio no controlado.

En un contexto que evoluciona rápido, la resiliencia viene de la capacidad de adaptarse. Y esa capacidad está directamente correlacionada con la simplicidad del sistema.

Los equipos que mejor sobrellevan los momentos de cambio - migración de modelo de IA, cambio de infraestructura cloud, pivote de producto - son generalmente los que tienen sistemas más legibles y menos acoplados. No porque anticiparon estos cambios, sino porque un sistema simple puede absorber cambios imprevistos sin colapsar.

La complejidad acumula deuda. Cada capa de abstracción que ya no corresponde a la necesidad se convierte en un obstáculo. Cada dependencia que deja de mantenerse se convierte en un riesgo. Un sistema que ha crecido orgánicamente durante cinco años, sin principios de diseño, es frecuentemente un sistema que se reescribe en lugar de evolucionar.

## La IA en 2025: el Mejor Caso de Uso para KISS

El dominio de la IA ilustra perfectamente por qué KISS es una disciplina más que un principio pasivo.

**MCP (Model Context Protocol)**: un protocolo abierto lanzado por Anthropic para que los LLMs puedan interactuar con herramientas y fuentes de datos externas. Útil para casos de uso específicos. No necesario para llamar a una API del tiempo en un agente simple.

**Skills y agentes**: arquitecturas donde un LLM principal orquesta agentes especializados con un conjunto definido de capacidades cada uno. Potente para flujos de trabajo complejos. Frecuentemente sobredimensionado para extraer texto de un PDF y reformatearlo.

**Plugins e integraciones**: conectores que extienden las capacidades de un LLM hacia sistemas externos. Copilot, Cursor, extensiones de IDE. Cada uno resuelve un problema real. Juntos, crean un entorno de trabajo cuyo comportamiento nadie controla completamente.

**RAG (Retrieval-Augmented Generation)**: recuperar documentos relevantes antes de generar una respuesta. Una solución sólida al problema de las ventanas de contexto limitadas y el conocimiento desactualizado. Pero para una base de conocimiento de veinte documentos, poner todos los documentos en el contexto es más simple y frecuentemente más efectivo.

La pregunta KISS ante cada nuevo concepto es la misma: **¿tengo un problema que este concepto resuelve, o estoy buscando un problema para este concepto?**

Muchas arquitecturas de IA actuales responden a la segunda pregunta. Se construyen con las herramientas más avanzadas porque esas herramientas existen, no porque el problema las requiera.

## Esperar y Ver: la Disciplina de la No-Adopción

KISS implica una postura activa frente a las nuevas herramientas: **esperar a ver qué permanece.**

El ecosistema de IA en 2024 y 2025 vio emerger docenas de frameworks, protocolos y herramientas que se presentaban como imprescindibles. Algunos resistieron. Muchos desaparecieron o fueron absorbidos por otros proyectos.

LangChain se presentó como el framework estándar para agentes LLM. Hoy compite con LlamaIndex, CrewAI, AutoGen, LangGraph, DSPy y una docena de otros proyectos. La mayoría de los equipos que invirtieron pronto en LangChain tuvieron que reescribir partes significativas de su código a medida que el framework evolucionaba.

Los equipos que esperaron seis meses, observaron lo que se estabilizaba, y eligieron cuando las opciones estaban mejor definidas, generalmente tomaron mejores decisiones con menos refactoring.

Eso no es timidez. Es ingeniería. No construyes una casa con materiales de los que aún no sabes si aguantarán la lluvia.

KISS aplicado a las nuevas herramientas: usar la más simple que resuelve el problema ahora. Adoptar algo más sofisticado solo cuando el enfoque más simple haya demostrado sus límites.

## El Dominio como Objetivo

Lo que distingue KISS de la pereza es el dominio.

Un sistema simple que el equipo entiende completamente es más fiable que un sistema sofisticado que nadie domina realmente. El dominio permite diagnosticar rápidamente. Permite confiar en el comportamiento del sistema. Permite incorporar nuevos miembros sin pedirles seis meses de inmersión.

Dominar una herramienta significa saber qué hace cuando falla. Significa conocer sus límites tanto como sus capacidades. Significa poder explicar su comportamiento a alguien que nunca la ha visto.

En el ecosistema de IA actual, pocos equipos dominan realmente sus stacks. Los utilizan. Confían en las abstracciones. Esperan que los comportamientos implícitos no creen problemas en producción.

KISS obliga a preguntarse: ¿entiendo realmente lo que hace este sistema? ¿Podría reconstruirlo si fuera necesario? ¿Podría explicar su comportamiento a otra persona?

Si la respuesta es no, es una señal de que la complejidad ha superado al dominio.

## KISS No Significa Nunca Evolucionar

Un último punto, importante.

KISS no es un argumento para no adoptar nunca nuevas herramientas o nuevas arquitecturas. Es un argumento para adoptarlas en el momento correcto, por las razones correctas.

Cuando un problema real supera las capacidades de una solución simple, hay que evolucionar. La pregunta KISS no es "¿es interesante esta nueva herramienta?" sino "¿justifica mi problema actual este nivel de complejidad?"

Un sistema de recomendaciones que debe gestionar un millón de usuarios con restricciones estrictas de latencia probablemente necesita una arquitectura más sofisticada que una llamada directa a la API. Pero no la necesita antes de tener ese problema. Y cuando ese problema llega, las necesidades reales serán más claras de lo que habrían sido en el momento de la arquitectura inicial.

Ese es la paradoja de KISS: empezando simple, aprendes más rápido lo que realmente necesitas. Y construyes cosas mejores, no cosas que anticipan necesidades imaginarias.

---

La simplicidad no es un punto de partida. Es un destino que se elige deliberadamente, contra la presión constante de agregar, integrar, adoptar. En un ecosistema que produce nuevos conceptos cada semana, KISS es menos un principio técnico que una postura: observar cómo llegan las nuevas piezas, esperar a ver cuáles permanecen en el campo, y tomar solo las que resuelven un problema que realmente tienes.

El resto, puedes dejarlo pasar.
