---

title: "Cómo Saber si una Release Está Lista para Salir: la Checklist"
subtitle: "«Creo que está bien» no es un criterio de release. Estas son las preguntas concretas que hay que hacerse antes de decidir que una versión puede salir."
description: "Saber si una release está lista para salir no debería depender de una impresión colectiva. Checklist concreta: capabilities entregadas, testings validados, dependencias resueltas, antes de decidir que una versión puede ir a producción."
categories: ["Gestión de Proyectos", "Calidad"]
excerpt: "La pregunta «¿podemos lanzar?» recibe demasiado a menudo una respuesta basada en una impresión general en lugar de criterios verificables. Cómo transformar esa impresión en una checklist."
date: 2026-07-27 09:00:00 +0200
featured_image: /assets/images/blog/2026-07-27-release-prete-checklist-featured.png

---

Llega la reunión de fin de ciclo, y aparece la pregunta: «¿podemos lanzar?». Demasiado a menudo, la respuesta se apoya en una impresión colectiva en lugar de criterios verificables. Esta ambigüedad es una fuente directa de regresiones descubiertas en producción.

## El problema de la impresión colectiva

Cuando nadie tiene una lista explícita de lo que debe cumplirse para que una release salga, cada persona en la reunión evalúa según su propio marco de referencia. El desarrollador piensa en su código. El PM piensa en el alcance funcional. QA piensa en los tests que tuvo tiempo de hacer, no los que quería hacer. Estas tres evaluaciones parciales se combinan en un «debería ir bien» que no compromete a nadie con claridad.

## Una checklist en cuatro categorías

**¿Las capabilities previstas están realmente entregadas?** No «casi terminadas», no «al 90 %»: entregadas, con su criterio de completado definido de antemano cumplido. Una capability sin criterio de completado claro no puede evaluarse aquí, lo cual es en sí mismo una señal de alerta sobre cómo se definió el trabajo previamente.

**¿Los testings asociados están validados?** Cada capability crítica debería tener tests asociados, ejecutados, con un resultado registrado. «Parece que funciona» no es una validación de testing.

**¿Están resueltas las dependencias entre capabilities?** Una capability que depende de otra aún no entregada no puede considerarse lista, aunque su propio trabajo esté terminado.

**¿Hay issues bloqueantes aún abiertas?** Un bug crítico abierto en una funcionalidad incluida en la release debe detener la release, independientemente de que todo lo demás vaya bien.

## Por qué el formato checklist cambia el comportamiento

Una checklist explícita cambia la dinámica de la reunión de release. La pregunta ya no es «¿está todo bien en general?» sino «¿es cada punto concreto verdadero o falso?». Este cambio de formato reduce el espacio que deja el optimismo colectivo, que es la fuente más frecuente de releases prematuras.

En Sinra, esta lógica está integrada de forma nativa en la estructura de la **release**: agrupa **capabilities** con un estado binario (entregada o no) y **testings** asociados con un resultado registrado. La pregunta «¿podemos lanzar?» se lee directamente en el estado de estos elementos, en lugar de depender de una reconstrucción manual durante la reunión.

## El verdadero objetivo: hacer visible la duda antes de la release

Una checklist de release nunca garantiza la ausencia de bugs. Su objetivo es distinto: hacer visible, antes del lanzamiento, todo lo que sigue siendo incierto. Una capability sin testing asociado, una dependencia no verificada, un criterio de completado difuso: son señales que una reunión basada en la impresión colectiva deja pasar fácilmente, y que una checklist explícita saca a la luz sistemáticamente.
