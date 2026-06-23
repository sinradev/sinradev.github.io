---

title: "Feature flags: potencia real y complejidad oculta"
subtitle: "Los feature flags permiten desplegar código sin activarlo, probar con una fracción de usuarios y hacer rollbacks instantáneos. También introducen una complejidad que se acumula discretamente hasta volverse inmanejable."
description: "Los feature flags son una herramienta poderosa para el despliegue progresivo y la separación entre despliegue y entrega. Su coste oculto es la deuda de flags acumulados, la complejidad del código condicional y la explosión combinatoria de estados a probar."
categories: ["Productividad en Desarrollo"]
excerpt: "Tu codebase tiene 47 feature flags activos. Cinco están documentados. Tres están vinculados a funcionalidades entregadas hace nueve meses y nadie pensó en eliminarlos. Dos son conflictivos: activar ambos al mismo tiempo produce un comportamiento indefinido. Acabas de descubrir por qué los feature flags no son gratuitos."
date: 2026-06-07 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-07-feature-flags-puissance-complexite-featured.png

---

El concepto de feature flag es elegante en su simplicidad: una condición en el código que determina si una funcionalidad está activa o no, controlada desde fuera del código. Despliega el código, activa la funcionalidad cuando estés listo. Desactívala instantáneamente si aparece algún problema.

Esta elegancia oculta una realidad operacional más complicada. Los feature flags son una herramienta poderosa, pero se acumulan, interactúan, crean código condicional que se vuelve difícil de leer y probar, y terminan costando más de lo que aportan si no se gestionan activamente.

## Lo que los feature flags realmente permiten

Los casos de uso legítimos de los feature flags están bien definidos, y distinguirlos de los usos que crean más problemas de los que resuelven es el primer paso hacia un uso razonado.

**La separación despliegue / entrega.** Este es el caso de uso más poderoso. Desplegar código en producción sin activarlo permite validar que el despliegue es sano (sin crashes, sin regresiones de rendimiento) antes de exponer la funcionalidad a los usuarios. Los equipos con pipelines CI/CD maduros usan feature flags para hacer sus despliegues casi continuos.

**El canary release.** Activar una funcionalidad para un subconjunto de usuarios (1%, 10%, 50%) permite medir su impacto real antes de un rollout completo. Si las métricas muestran un problema, se reduce el porcentaje o se desactiva. Es un rollback sin rollback.

**Las pruebas A/B.** Presentar dos versiones de una funcionalidad a dos grupos de usuarios y medir las diferencias de comportamiento. Útil para decisiones de diseño y UX con un volumen de usuarios suficiente para tener significación estadística.

**La configuración por entorno.** Activar ciertas funcionalidades solo en desarrollo o en staging, deshabilitar integraciones externas costosas en local. Es un uso simple y de bajo riesgo.

**Los feature switches para clientes enterprise.** Algunos clientes tienen contratos que incluyen funcionalidades específicas. Los feature flags permiten activar esas funcionalidades por cuenta u organización sin mantener ramas separadas.

## La deuda de flags que se acumula

El problema de los feature flags es que son fáciles de crear y difíciles de eliminar.

Crear un feature flag toma dos minutos. Eliminar un feature flag una vez que la funcionalidad está completamente desplegada requiere: verificar que el flag está activo para el 100% de los usuarios, eliminar todas las ramas condicionales en el código, eliminar la configuración del flag, y probar que el comportamiento sin el flag es idéntico al comportamiento con el flag activado. Es trabajo, y es trabajo que no aporta ninguna funcionalidad visible.

Resultado previsible: los flags se acumulan. Tres meses después de entregar una funcionalidad, el flag correspondiente sigue ahí. Un año después, nadie sabe si es peligroso eliminarlo. Dos años después, el código condicional está tan entrelazado con el resto que nadie toca ese archivo.

Las investigaciones sobre codebases de gran tamaño muestran sistemáticamente que los feature flags obsoletos son una fuente significativa de deuda técnica. Aumentan la superficie de código a mantener, complican la lectura del flujo lógico y crean estados imposibles de probar exhaustivamente.

## La explosión combinatoria de estados

Un feature flag crea dos estados: activado o desactivado. Dos feature flags crean cuatro estados posibles. Diez feature flags crean 1.024 estados posibles. Cincuenta feature flags crean más estados de los que se pueden probar en toda una vida.

En la práctica, la mayoría de estas combinaciones no se producen. Pero algunas sí, y las interacciones entre flags pueden producir comportamientos inesperados que solo se manifiestan en configuraciones específicas.

Los tests automatizados generalmente cubren los estados principales (todo activado, todo desactivado) y quizás algunas combinaciones importantes. Raramente cubren el espacio combinatorio completo. Los bugs que viven en combinaciones específicas de flags son difíciles de encontrar y de reproducir.

## La legibilidad del código condicional

Un código sin feature flags tiene un flujo lógico legible: la funcionalidad está ahí, funciona de determinada manera.

Un código con varios feature flags sobre los mismos caminos de código se vuelve difícil de leer. Cada rama condicional interrumpe el flujo narrativo. Los desarrolladores que leen el código deben tener en mente el estado de los flags para entender qué se ejecuta realmente en cada configuración.

Este problema empeora con el tiempo porque los desarrolladores que crearon los flags entienden su significado, pero los que llegan después deben reconstruir ese contexto en cada lectura.

## Las reglas que limitan la deuda

Los equipos que usan feature flags con éxito a gran escala generalmente tienen reglas explícitas para limitar su acumulación.

**Fecha de expiración obligatoria.** Cada feature flag creado tiene una fecha de expiración. Pasada esa fecha, o el flag se elimina o la fecha se pospone explícitamente con una justificación. Este proceso obliga a tomar una decisión consciente sobre la vida útil del flag.

**Propietario asignado.** Cada feature flag tiene un propietario responsable de eliminarlo una vez desplegada la funcionalidad. Sin propietario, los flags quedan huérfanos desde el momento de su creación.

**Inventario regular.** Una revisión periódica (mensual o trimestral) de todos los flags activos, preguntando por cada flag: ¿sigue siendo necesario? Si no, ¿cuándo se elimina?

**Límite sobre el número total.** Algunos equipos se fijan un límite absoluto: no más de X flags activos al mismo tiempo. Crear un nuevo flag requiere eliminar uno antiguo. Esta restricción obliga a tratar los flags como un recurso que hay que gestionar activamente.

## Las alternativas infrautilizadas

Los feature flags se usan a veces para resolver problemas que tienen mejores soluciones.

**Feature flags para evitar ramas de git.** Algunos equipos usan feature flags para permitir que varios desarrolladores trabajen en funcionalidades interdependientes sin usar ramas de larga duración. Es una solución que desplaza la complejidad de git al código de la aplicación. Las técnicas de trunk-based development combinadas con commits pequeños son a menudo una mejor respuesta.

**Feature flags para la configuración de entorno.** Las variables de entorno son a menudo más apropiadas para las diferencias entre desarrollo, staging y producción. Los feature flags añaden una capa de gestión innecesaria para este caso de uso.

**Feature flags como sustituto de una gestión de versiones real.** Si una API cambia de forma incompatible, la respuesta correcta es el versionado (v1, v2), no un feature flag. Los feature flags para cambios de API crean una proliferación de condiciones en las capas de servicio.

## Cuándo no usar feature flags

Hay contextos donde los feature flags no son la herramienta adecuada a pesar de su popularidad.

**Proyectos pequeños con baja frecuencia de despliegue.** Si despliegas una vez al mes y tu equipo es pequeño, el valor de los feature flags no justifica el coste de su gestión. Un despliegue limpio con rollback manual es más sencillo.

**Funcionalidades con fuertes restricciones de consistencia.** Si una funcionalidad requiere migraciones de base de datos o cambios de API que no pueden coexistir con la versión antigua, un feature flag no te protege realmente. El rollback sigue siendo complejo incluso con el flag.

**Dominios donde el estado parcial es peligroso.** En sistemas financieros o de cumplimiento normativo, exponer una funcionalidad parcialmente implementada a algunos usuarios puede crear inconsistencias de datos difíciles de corregir. La precaución adicional de los feature flags no compensa el riesgo de estados parciales.

---

Los feature flags son una herramienta valiosa para equipos con pipelines de despliegue maduros, equipos grandes y necesidades de despliegue progresivo. Su valor es real y medible.

Su coste es igualmente real. Tratarlo como tal, con reglas explícitas de eliminación, propietarios asignados e inventarios regulares, es la diferencia entre una herramienta que acelera el trabajo y una deuda de complejidad que termina por frenarlo.
