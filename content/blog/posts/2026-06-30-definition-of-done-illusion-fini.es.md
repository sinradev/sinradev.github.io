---

title: "Definition of Done: la ilusión del «ya está terminado»"
subtitle: "«Está hecho» es probablemente la frase más usada y menos fiable en el desarrollo de software. Entre el código mergeado y la funcionalidad verdaderamente entregada al usuario, hay una brecha que muchos equipos nunca miden."
description: "La palabra «terminado» oculta una ambigüedad costosa: código mergeado, desplegado en staging, en producción, testeado, documentado, monitoreado. Sin una definición explícita de «terminado», los equipos acumulan funcionalidades a medias que bloquean, ralentizan y crean deuda invisible."
categories: ["Gestión de Proyectos", "Calidad"]
excerpt: "El ticket pasa a «Done». Todos siguen adelante. Tres semanas después, descubrís que la funcionalidad nunca se desplegó en producción, que los tests de integración no se actualizaron y que nadie configuró el monitoring. Estaba terminado, ¿de verdad?"
date: 2026-06-30 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-30-definition-of-done-illusion-fini-featured.png

---

Hay un momento preciso en que el trabajo se vuelve invisible. No cuando empieza, ni cuando termina. Es en la brecha entre ambos - en todo lo que queda «casi listo» sin llegar a ser verdaderamente entregado.

En muchos equipos, «terminado» significa cosas distintas según a quién le preguntes. Para el desarrollador, a menudo significa «el código está mergeado». Para el lead, «los tests pasan». Para el manager, «el ticket está cerrado». Para el usuario, «la funcionalidad funciona en producción».

Estas definiciones no son incompatibles. Solo son incompletas. Y esta incompatibilidad silenciosa tiene un costo real.

## Por qué «terminado» es la palabra más ambigua del desarrollo

Tomemos un ejemplo concreto. Un equipo trabaja en una funcionalidad de exportación CSV. El desarrollador termina la implementación el jueves. Abre un pull request, se revisa y mergea el viernes. El ticket pasa a «Done».

¿Qué pasó entre el merge y lo que el usuario puede usar?

La funcionalidad todavía no está desplegada en staging para validación. Los tests end-to-end no se actualizaron para cubrir el nuevo comportamiento. No hay alertas de monitoring si la exportación falla silenciosamente en producción. La documentación de usuario no se actualizó. Y el despliegue a producción espera el próximo ciclo.

El ticket está en «Done». La funcionalidad no está entregada.

Esta deriva es normal. No es señal de un equipo malo. Es señal de una definición implícita y compartida de lo que significa «terminado» - una que se detiene demasiado pronto.

## Los estados intermedios cuestan caro

El verdadero problema de las funcionalidades «casi listas» no es cosmético. Es estructural.

**Bloquean otras funcionalidades.** Una funcionalidad mergeada pero no desplegada puede crear conflictos, bloquear ramas paralelas, hacer que los tests sean difíciles de interpretar. Cuanto más tiempo permanece en este estado intermedio, más fricción genera para lo que viene después.

**Generan deuda de terminación invisible.** Tests sin actualizar, documentación faltante, monitoring ausente: todo se acumula. Cada semana que pasa hace la terminación más difícil porque el contexto se olvida y las prioridades cambian.

**Distorsionan la lectura del avance.** Si veinte tickets están en «Done» pero diez de ellos no están en producción, el progreso real de entrega es muy inferior a lo que muestra el tablero. Las decisiones tomadas sobre esta base son decisiones tomadas con información falsa.

**Erosionan la confianza.** Cuando los stakeholders preguntan «¿está disponible?» y la respuesta es «está hecho pero no desplegado aún», la confianza en las estimaciones y compromisos se deteriora.

## Qué contiene una verdadera Definition of Done

Una Definition of Done (DoD) es el acuerdo explícito de un equipo sobre lo que significa «terminado» para cualquier unidad de trabajo - un issue, una capability, una funcionalidad.

No es universal. Cada equipo debe definir la suya según su contexto, prácticas y lo que entrega. Pero una DoD sólida suele cubrir estos niveles:

**Código terminado:**
- El código está escrito y los tests unitarios correspondientes pasan
- El pull request está abierto y revisado por al menos otro desarrollador
- Los comentarios de la review están resueltos y el PR está mergeado

**Calidad validada:**
- Los tests de integración están actualizados para cubrir el nuevo comportamiento
- Los tests de regresión pasan
- Se realizó un test manual de la funcionalidad en el entorno de staging

**Desplegado:**
- La funcionalidad está desplegada en staging y validada
- La funcionalidad está desplegada en producción
- Es posible hacer rollback si es necesario

**Observable:**
- Métricas o logs permiten verificar que la funcionalidad funciona como se espera en producción
- Existe una alerta si la funcionalidad falla silenciosamente

**Documentado:**
- La documentación de usuario está actualizada si la funcionalidad es visible para el usuario
- La documentación técnica está actualizada si cambia el comportamiento de la API o del sistema

Puede parecer mucho. Ese es precisamente el objetivo: hacer visible todo lo que era invisible en un simple «está mergeado».

## La tentación de suavizar

Cuando un equipo establece una DoD, la presión para suavizarla comienza casi de inmediato.

«No tenemos tiempo de actualizar la documentación para esta funcionalidad.» «El monitoring lo configuramos después.» «Los tests end-to-end los hacemos en la próxima iteración.»

Estos compromisos puntuales se convierten en hábitos. El hábito se convierte en la nueva norma implícita. Y la DoD inicial, cuidadosamente definida, se convierte en un documento que rara vez se consulta y se sigue aún menos.

El problema no es suavizar la DoD en casos excepcionales. Es hacerlo sin reconocerlo explícitamente.

Cuando un equipo decide entregar algo que no satisface completamente su DoD, debería hacerlo conscientemente: crear explícitamente los issues correspondientes para la deuda de terminación, integrarlos en el próximo ciclo y comunicar claramente qué está entregado y qué no lo está todavía.

La diferencia entre una excepción gestionada y un hábito que se instala es la trazabilidad y la consciencia.

## DoD en diferentes niveles

La Definition of Done no solo aplica a issues individuales. Puede y debe aplicarse en diferentes niveles del trabajo.

**A nivel de issue:** los criterios listados arriba. La unidad de trabajo está terminada cuando todas las casillas están marcadas.

**A nivel de capability:** una capability está terminada cuando todos sus issues satisfacen su DoD individual y cuando la capability como conjunto ha sido validada end-to-end en el entorno de producción.

**A nivel de release:** una release está terminada cuando todas las capabilities previstas satisfacen su DoD, cuando las notas de release están publicadas y cuando los stakeholders han sido informados de lo que está disponible.

Esta cascada de definiciones da a cada nivel una visión clara y honesta del avance real.

## El vínculo entre DoD y ciclos de trabajo

La Definition of Done tiene una relación directa con cómo un equipo estructura sus ciclos de trabajo.

Un equipo que trabaja en ciclos cortos - dos semanas o menos - tiene un imperativo natural de DoD estricta. Si cada ciclo debe producir algo entregable, es imposible terminar un ciclo con funcionalidades a medio terminar. La presión del ciclo fuerza la completitud.

Un equipo que trabaja en horizontes más largos puede acumular más trabajo en curso antes de finalizarlo. Esto no es necesariamente malo, pero requiere mayor disciplina para evitar que el «casi listo» se acumule.

En Sinra, los issues tienen estados explícitos que reflejan su progresión real - no solo «en curso» y «terminado», sino los pasos intermedios que corresponden a la realidad del trabajo. Las releases definen lo que está efectivamente entregado en una versión. Las capabilities permiten seguir si una funcionalidad de alto nivel está realmente completa o todavía espera partes.

Esta claridad de estados en cada nivel es la DoD en práctica: un acuerdo sobre lo que significa cada estado, visible para todo el equipo.

## Cómo establecer una DoD en un equipo

La DoD no debe imponerse desde afuera. Debe construirla el equipo que la va a seguir, porque es el equipo quien mejor sabe lo que «terminado» debe significar en su contexto.

Un taller simple es suficiente. El equipo lista todo lo que debe ser verdad para que una funcionalidad se considere verdaderamente entregada. Los items se debaten, consolidan y priorizan. El resultado es un documento corto - una lista de criterios - que se convierte en la referencia compartida.

La DoD debe revisarse regularmente. Lo que constituye «terminado» evoluciona con las prácticas del equipo, las herramientas y los requisitos del producto. Una DoD escrita hace seis meses puede no reflejar la realidad de hoy.

---

La palabra «terminado» merece precisión. No por burocracia, sino porque la precisión sobre qué significa «terminado» es una condición de la confianza: confianza del equipo en su progreso real, confianza de los stakeholders en las entregas, confianza en las decisiones tomadas sobre la base del estado del trabajo.

Un ticket en «Done» que no está en producción no está terminado. Una exportación CSV que funciona en staging pero sin monitoring en producción no está terminada. Una funcionalidad sin documentación actualizada no está terminada.

Definir qué significa «terminado», explícita y colectivamente, es una de las inversiones más rentables que puede hacer un equipo.
