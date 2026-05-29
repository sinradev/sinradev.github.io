---
title: "Issues"
description: "Las issues son la unidad fundamental de trabajo en Sinra. Cada tarea, bug y especificación es una issue. Aprende cómo funcionan, qué campos llevan y cómo el flujo de trabajo de doble estado realiza un seguimiento separado de la escritura y el desarrollo."
date: 2024-01-01
weight: 20
---

## ¿Qué es una Issue?

Una issue representa un elemento de trabajo concreto: un bug a corregir, una funcionalidad a construir, una especificación a redactar. Cada entregable en Sinra se rastrea hasta una issue.

A diferencia de los formatos tradicionales de "user story" con estructura rígida, las issues de Sinra usan nombres directos y descriptivos. "Exportación CSV de informes" es más útil que "Como usuario, quiero exportar informes para poder analizar datos."

## Tipos de Issues

| Tipo | Cuándo usarlo |
|------|--------------|
| **Bug** | Un defecto a corregir |
| **Especificación** | Un documento de spec que pasa por el flujo de escritura |
| **Funcionalidad** | Una nueva capability a construir |
| **Tarea** | Cualquier otra unidad de trabajo |

## Campos Principales

- **Nombre**: título conciso y descriptivo
- **Cuerpo**: texto enriquecido con imágenes y `@mentions`
- **Prioridad**: Baja, Media, Alta
- **Tiempo estimado**: en días, alimenta los cálculos de capacidad
- **Labels**: etiquetas personalizadas por organización
- **Plataforma**: Backend, Frontend, Mobile, etc.

## Asignación

Las issues pueden asignarse a un usuario específico o a un equipo completo. Cuando se asigna a un equipo, cualquier miembro del equipo puede tomarla.

## Flujo de Trabajo de Doble Estado

Cada issue lleva dos estados independientes:

| Tipo de estado | Propósito |
|---------------|-----------|
| **Estado de escritura** | Realiza seguimiento del progreso de spec/planificación |
| **Estado de desarrollo** | Realiza seguimiento del progreso de implementación |

Esto significa que una especificación puede estar "En revisión" para escritura mientras el desarrollador todavía no ha empezado. Ambos ejes progresan independientemente, dando al equipo visibilidad precisa sobre dónde se encuentra realmente el trabajo.

## Vincular Issues

Las issues se conectan hacia arriba a:
- **Release**: qué versión apunta esta issue
- **Ciclo**: en qué período de trabajo está planificada esta issue
- **Capability**: a qué epic de funcionalidad contribuye esta issue

Una issue pertenece a una release y un ciclo, pero estos dos ejes son independientes. Un ciclo puede contener issues de múltiples releases, lo que permite trabajo en paralelo entre versiones.

## Seguimiento del Tiempo

Registra el tiempo empleado directamente en una issue. Sinra compara el tiempo empleado con la estimación, haciendo visibles las desviaciones antes de que se conviertan en sorpresas. Estos números alimentan el cálculo de carga de trabajo del ciclo.

## Comentarios y Menciones

Cada issue tiene una sección de comentarios con hilos de discusión, texto enriquecido y `@mentions`. Mencionar a un usuario dispara una notificación por email con contexto completo. La discusión permanece vinculada al trabajo, no se pierde en Slack.
