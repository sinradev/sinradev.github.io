---

title: "Trunk-based development vs ramas de features: ¿cuál elegir?"
subtitle: "Las ramas de features de larga duración parecen seguras. Permiten trabajar en aislamiento sin molestar a nadie. Hasta el día del merge, cuando todo colapsa. El trunk-based development propone un enfoque diferente: integrar pronto, integrar frecuente, y nunca dejar código dormido demasiado tiempo."
description: "¿Ramas de features o trunk-based development? Este artículo compara ambos enfoques, explica por qué las ramas largas crean más problemas de los que resuelven, y muestra cómo trabajar directamente en el trunk con ciclos cortos."
categories: ["Ingeniería", "Prácticas Dev"]
excerpt: "El lunes creas una rama para tu nueva feature. El viernes intentas mergear. El conflicto tiene 400 líneas. Pasas la tarde desenredando lo que hicieron tus colegas mientras trabajabas en tu rincón. Este escenario tiene un nombre: merge hell. Y tiene una causa identificable."
date: 2026-07-01 00:00:00 +0100
featured_image: /assets/images/blog/2026-07-01-trunk-based-development-feature-branches-featured.png

---

El lunes creas una rama para tu nueva feature. El viernes intentas mergear. El conflicto tiene 400 líneas. Pasas la tarde desenredando lo que hicieron tus colegas mientras trabajabas en tu rincón. El CI está en rojo. La revisión de código toma dos horas porque nadie recuerda lo que explicaste al principio de la semana.

Este escenario tiene un nombre: merge hell. Y tiene una causa identificable: las ramas de features de larga duración.

## El problema de las ramas largas

Una rama de feature de larga duración es una rama que vive varios días o semanas en paralelo con el resto del código. En papel, la intención es buena: aislar el trabajo en curso para no desestabilizar la base de código principal. En la práctica, lo que parece seguro crea exactamente el problema que querías evitar.

Mientras trabajas en tu rama, el resto del equipo avanza en la suya. Las dos bases de código divergen silenciosamente. Nadie ve los conflictos que se acumulan. Cuando llega el momento del merge, no solo estás integrando tu código: estás integrando varios días de divergencia simultánea.

Cuanto más larga es la rama, más doloroso es el merge. Es una regla casi mecánica.

Hay otro efecto menos visible: el código en desarrollo en ramas largas no se prueba en el contexto real de la base de código. Las pruebas de integración corren sobre snapshots que se alejan cada vez más de la realidad. Descubres problemas tarde, cuando son costosos de corregir.

## Qué es el trunk-based development

El trunk-based development es una práctica donde todos los desarrolladores integran su código en la rama principal (el «trunk», frecuentemente `main` o `master`) varias veces al día. Las ramas existen, pero tienen vida corta: máximo uno o dos días.

La idea central: si la integración es dolorosa, la solución no es evitarla sino hacerla más frecuentemente. Cuanto más frecuentemente integras, más pequeños y simples se vuelven los conflictos.

Concretamente, se ve así:
- Trabajas en una pequeña unidad de código (una función, un endpoint, una migración de base de datos).
- Creas una rama, escribes el código, abres un pull request en el día.
- La revisión es rápida porque el diff es pequeño y el contexto está fresco.
- Mergeas en el día o al día siguiente.
- Pasas a la siguiente unidad.

El trunk siempre está en un estado desplegable. La integración continua no es un concepto flotante: es una realidad mecánica.

## El rol de los feature flags

El principal contraargumento al trunk-based development: «¿Y si la feature no está terminada cuando mergeamos?»

Es una pregunta válida. La respuesta son los feature flags.

Un feature flag es un interruptor que activa o desactiva código en producción. Puedes mergear código incompleto en el trunk, envolverlo en un flag desactivado, y exponerlo progresivamente cuando esté listo. Los usuarios no ven nada mientras el flag está cerrado. Tu equipo puede probar en producción sobre un subconjunto. Puedes hacer rollback en un segundo sin redesplegar.

Los feature flags desacoplan el despliegue de la entrega. Desplegar (poner el código en prod) se vuelve distinto de entregar (activar la feature para los usuarios). Esta distinción cambia profundamente la gestión del riesgo.

## Ventajas concretas del trunk-based development

**Los conflictos son pequeños.** Cuando integras varias veces al día, cada integración toca poco código. Los conflictos, cuando los hay, se resuelven en minutos.

**Las revisiones de código son útiles.** Un diff de 30 líneas en una rama abierta ayer es revisable. Un diff de 800 líneas en una rama abierta hace dos semanas es una formalidad de la que todos quieren deshacerse.

**La integración continua es real.** El CI no valida código aislado: valida el estado actual de todo el sistema. Las regresiones aparecen inmediatamente, no el viernes por la tarde antes de un release.

**Hay menos trabajo en curso.** El WIP disminuye. El equipo trabaja en cosas que avanzan realmente en lugar de en ramas esperando mergear.

**La base de código siempre es desplegable.** Puedes desplegar en cualquier momento. No hay que planificar una «ventana de merge» ni congelar desarrollos antes de un release.

## Cuándo las ramas largas tienen sentido

El trunk-based development no es universal. Hay contextos donde las ramas largas están justificadas, incluso son necesarias.

**Proyectos open source.** Cuando contribuidores externos envían código, no puedes pedirles que integren directamente en el trunk. Los pull requests largos existen para permitir la revisión de contribuciones cuya cadencia no controlas.

**Equipos con un proceso de revisión lento.** Si la revisión de código toma sistemáticamente varios días porque los revisores están saturados, mantener ramas cortas es difícil. Pero en este caso, el problema a resolver no es el branching: es la capacidad de revisión.

**Cambios estructurales mayores.** Una migración de arquitectura, reemplazar una librería fundamental: estos trabajos a veces requieren una rama dedicada. Pero incluso ahí, técnicas como «branch by abstraction» permiten integrar progresivamente en el trunk sin ramas largas.

## La resistencia habitual

«No podemos hacer trunk-based, tenemos demasiadas features en paralelo.»

Frecuentemente es al revés: las features en paralelo en ramas largas crean exactamente la complejidad que hace todo difícil. Menos trabajo en curso simultáneo, con ciclos más cortos, simplifica mecánicamente la integración.

«Los desarrolladores no se sienten cómodos con eso.»

Es una cuestión de hábito. La mayoría de los desarrolladores que han trabajado en trunk-based no quieren volver a las ramas largas. La fricción del cambio es real, pero es temporal.

«Necesitamos las ramas para la revisión de código.»

La revisión de código no requiere ramas largas. Requiere pull requests, que pueden abrirse y mergearse en el día.

## La conexión con ciclos cortos

El trunk-based development funciona naturalmente con ciclos de entrega cortos. Cuando tu equipo trabaja con ciclos bien definidos, con objetivos claros para cada iteración, descomponer el trabajo en pequeñas unidades integrables se convierte en la forma natural de trabajar.

En Sinra, los ciclos permiten definir con precisión qué está en curso en un momento dado. Las issues son las unidades de trabajo. Las capabilities agrupan las features a entregar en un release. Esta estructura favorece naturalmente las ramas cortas: cada issue corresponde a una unidad de trabajo que puede integrarse rápidamente, sin esperar que semanas de desarrollo se acumulen.

Los releases están así compuestos de código que ya ha sido integrado y validado, no de ramas peleando por tener razón en el último momento.

## En la práctica: cómo empezar

Si tu equipo trabaja actualmente con ramas largas, el paso al trunk-based development se hace progresivamente.

Empieza por reducir la duración máxima de vida de las ramas. Establece una regla: ninguna rama puede vivir más de dos días sin ser mergeada o dividida en partes más pequeñas. Esto fuerza a descomponer el trabajo de forma diferente.

A continuación, instala un sistema de feature flags si no tienes uno. Es la red de seguridad que permite integrar código incompleto sin riesgo para los usuarios.

Mejora la velocidad de revisión. Si los PRs esperan dos días antes de ser revisados porque los revisores están saturados, el trunk-based development no funcionará. La revisión debe ser una prioridad, no una interrupción.

Finalmente, mide. El lead time for changes (tiempo entre el primer commit y el despliegue en prod) es una medida directa de la eficiencia de tu proceso de integración. Si este tiempo disminuye, vas en la dirección correcta.

El trunk-based development no es una regla absoluta. Es una dirección: integrar más frecuentemente, mantener las ramas cortas, nunca dejar código dormido. El dolor de los merges no es inevitable. Es el síntoma de una integración demasiado infrecuente.
