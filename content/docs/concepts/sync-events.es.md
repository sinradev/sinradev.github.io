---
title: "Eventos de Sincronización"
description: "Los eventos de sync son los momentos de sincronización estructurada del equipo en Sinra: reuniones de planning, retrospectivas, revisiones de hito y post-mortems. Cada uno tiene un rol preciso en el ciclo de vida del proyecto."
date: 2024-01-01
weight: 50
---

## ¿Qué es un Evento de Sync?

Un **evento de sync** es un momento formal donde el equipo se sincroniza alrededor de una decisión colectiva, un aprendizaje o una validación. Son paradas deliberadas en el flujo de trabajo, distintas de las issues (tareas a ejecutar) y las páginas (documentación de referencia).

Sinra reconoce cuatro tipos de eventos de sync, cada uno posicionado en un punto preciso del ciclo de vida del proyecto:

| Tipo | Momento | Orientación |
|------|---------|-------------|
| **Reunión de Planning** | Antes de un ciclo o release | Hacia adelante: ¿qué vamos a hacer? |
| **Retrospectiva** | Después de una release | Hacia atrás: ¿qué aprendimos? |
| **Revisión de Hito** | Entre las fases del V-Model | Validación: ¿podemos continuar? |
| **Post-mortem** | Después de un incidente | Análisis: ¿qué pasó y por qué? |

## ¿Por Qué Separar los Syncs de las Issues?

Una issue rastrea trabajo a producir. Un evento de sync rastrea una decisión o aprendizaje colectivo. La distinción es estructural:

- Las issues tienen asignados. Los syncs tienen participantes.
- Las issues producen entregables. Los syncs producen decisiones y registros.
- Las issues viven en el backlog. Los syncs viven en el historial del equipo.

Mezclarlos crea un backlog que sirve a la vez como lista de tareas y archivo de reuniones, haciendo ambos más difíciles de leer.

## El Ciclo de Vida de una Release, Contado a Través de los Syncs

```
Release creada
    ↓
Reunión de Planning  →  Definir el scope del ciclo / release
    ↓
[Trabajo: Issues, Ciclos, Testing]
    ↓
Revisión de Hito  →  Go / No-Go en la fase V-Model
    ↓
[Iteraciones siguientes si es necesario]
    ↓
Release entregada
    ↓
Retrospectiva  →  Aprendizajes para la próxima release
    ↓
[Si ocurrió un incidente]
    ↓
Post-mortem  →  Análisis blameless del incidente
```

Los syncs marcan las transiciones entre las grandes etapas. No reemplazan el trabajo: lo enmarcan.

## Reuniones de Planning

La reunión de planning es el sync orientado hacia el futuro. Se realiza antes de un ciclo o release para decidir qué entra.

En Sinra, una reunión de planning puede estar vinculada a un ciclo, una release o una capability. Captura el orden del día, las decisiones tomadas y los participantes. El historial de reuniones de planning se convierte en un registro consultable de las intenciones del equipo, independiente del backlog de trabajo.

## Retrospectivas

La retrospectiva es el sync orientado hacia el pasado. Se realiza después de una release entregada, nunca solo después de un ciclo.

Esto es intencional: lo que se aprende sobre una entrega concierne a lo que fue enviado, no al período de tiempo trabajado. Sinra crea automáticamente la retrospectiva cuando una release se cierra. El equipo registra lo que funcionó bien, lo que no funcionó y las mejoras a intentar.

## Revisiones de Hito (Phase Gate Reviews)

La revisión de hito es el sync de validación propio del V-Model. Ocurre en las transiciones de fase: fin del diseño, fin de la implementación, fin de las pruebas.

Su rol es formal: decidir si el equipo puede pasar a la siguiente fase (go), debe detenerse (no-go) o puede continuar con condiciones. Sinra registra el veredicto, los criterios evaluados y los participantes, creando una pista de auditoría para entornos regulados.

## Post-mortems

El post-mortem es disparado por un incidente, no por el calendario. Sigue una estructura blameless: timeline de eventos, factores sistémicos, impacto medido (MTTR incluido), acciones de remediación.

Su objetivo es construir memoria institucional de los incidentes, no identificar culpables. Los post-mortems permanecen accesibles mucho después del incidente para documentar las decisiones de remediación y evitar regresiones.

## Lo que Sinra No Hace

Sinra no proporciona un tracker de daily standup. Esta es una elección deliberada: los dailies son una mecánica Agile que se adapta mal a la mayoría de los equipos híbridos V-Model + Agile. Un sync útil es un momento de decisión o aprendizaje, no un informe de estado diario.

Los syncs en Sinra existen donde crean valor documental duradero: antes, después o en los hitos clave de una release.
