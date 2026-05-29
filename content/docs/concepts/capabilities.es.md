---
title: "Capabilities"
description: "Las capabilities son el equivalente de los epics en Sinra, con una diferencia clave: una capability tiene un estado de finalización claro. Aprende cómo las capabilities conectan releases, issues y QA en una unidad de entrega trazable."
date: 2024-01-01
weight: 30
---

## ¿Qué es una Capability?

Una capability es una funcionalidad de producto concreta: algo que tu producto será capaz de hacer una vez entregado. Se sitúa en el nivel de abstracción que product managers, desarrolladores y stakeholders pueden entender.

"Exportación CSV de informes" es una capability. O está entregada o no lo está. No existe un estado ambiguo de "parcialmente terminado".

## Capabilities vs Epics

La diferencia clave está en los criterios de finalización:

| | Epic | Capability |
|-|------|-----------|
| Definido por | User stories agrupadas | Una funcionalidad de producto concreta |
| Terminado cuando | Todos los tickets hijos están cerrados | La funcionalidad funciona como se definió |
| Estado | A menudo permanece abierto indefinidamente | Binario: entregado o no |
| Comunicable a stakeholders | Raramente | Sí, directamente |

Un epic puede permanecer abierto meses a medida que se añaden nuevos tickets. Una capability tiene una decisión de alcance al inicio: cuando esta funcionalidad se entrega, la capability se cierra.

## Las Capabilities en la Planificación

Las capabilities son la unidad de planificación a nivel de release. Cuando defines una release, le asignas capabilities. Esto responde a "¿qué incluirá la versión 2.4?" a nivel de funcionalidades, no a nivel de tickets.

Esto hace que la planificación de releases sea comunicable:

> "La versión 2.4 incluye: exportación CSV, notificaciones por email y gestión de roles."

Esa frase funciona en una reunión diaria, en una reunión con stakeholders y en un changelog de producto.

## Vincular Capabilities

Cada capability se conecta a:
- **Proyecto**: la iniciativa de alto nivel a la que pertenece
- **Release**: qué versión entregará esta funcionalidad
- **Issues**: las tareas individuales que la implementan
- **Testings**: los casos de prueba QA que la validan

Esta cadena proporciona trazabilidad completa desde el objetivo estratégico (proyecto) hasta las tareas individuales (issues) y la validación (testings).

## Cuerpo de la Capability

El cuerpo de la capability utiliza un editor enriquecido. Los equipos suelen escribir:
- Descripción de la funcionalidad orientada al usuario
- Criterios de aceptación
- Notas técnicas y restricciones
- Enlaces a recursos de diseño

Dado que las capabilities son compartidas entre producto e ingeniería, este cuerpo se convierte en la especificación viva de la funcionalidad.

## Seguimiento del Progreso

El progreso de una capability es visible a través de:
- Recuento de issues (abiertas vs cerradas)
- Tiempo estimado vs. tiempo empleado
- Estado de aceptación de los testings

Esto proporciona una lectura rápida y honesta sobre si la capability está realmente cerca de completarse o si simplemente tiene la mayoría de tickets cerrados.
