---
title: "Planificar una Release"
description: "Una guía paso a paso para planificar una release en Sinra: definir el alcance, verificar la capacidad, descomponer capabilities en issues y distribuir el trabajo entre ciclos."
date: 2024-01-01
weight: 30
---

## La Secuencia de Planificación

La planificación de releases en Sinra sigue una secuencia descendente:

1. Definir el alcance de la release (capabilities)
2. Verificar la capacidad frente al alcance
3. Descomponer capabilities en issues
4. Asignar issues a ciclos

Cada paso produce información que informa al siguiente. No saltes directamente a crear issues sin haber decidido primero qué contiene la release.

## Paso 1: Definir la Release

Crea una release con una fecha objetivo y una estimación de capacidad objetivo. La estimación de capacidad no necesita ser precisa todavía, un número aproximado es suficiente para verificar tu alcance.

Ejemplo: "v2.0, objetivo fin de T2, 60 días de trabajo presupuestados."

## Paso 2: Asignar Capabilities en el Backlog

Abre la vista Backlog. Arrastra capabilities a la release. Añade las capabilities que crees que deberían estar en esta versión.

A medida que añades capabilities, observa el indicador de capacidad. Si ya estás al 120% antes de añadir las capabilities que más te importan, la conversación sobre el alcance debe suceder ahora, no en la semana 5.

## Paso 3: Priorizar y Recortar

Con una vista de capacidad realista, decide qué se queda y qué pasa a la próxima release. Pregunta por cada capability:
- ¿Es imprescindible para esta versión?
- ¿Qué se rompe si esto se entrega una release más tarde?
- ¿Qué capabilities dependen unas de otras?

Recortar alcance en la planificación es una decisión. Recortar alcance al final de una release porque se acabó el tiempo es un fracaso. El backlog hace ambas cosas visibles, pero solo los recortes en tiempo de planificación son controlados.

## Paso 4: Crear Issues en Cada Capability

Abre cada capability y crea las issues que la implementan. Para cada issue:
- Escribe un nombre claro y directo
- Establece un tiempo estimado en días
- Asigna a un desarrollador o equipo
- Establece la plataforma (Backend, Frontend, etc.)

Mantén las estimaciones honestas. Una estimación de 0,5 días para algo que consistentemente toma 2 días es ruido, no planificación.

## Paso 5: Crear Ciclos para el Calendario de la Release

Crea ciclos que abarquen el período de la release. Si la release va de abril a junio, crea dos o tres ciclos dentro de esa ventana.

La capacidad de cada ciclo se calcula automáticamente a partir de la disponibilidad del equipo y los días laborables.

## Paso 6: Asignar Issues a Ciclos

Distribuye issues entre ciclos. Carga cada ciclo al aproximadamente 70-80% de su capacidad. Deja margen para trabajo no planificado: bugs, problemas de integración, iteraciones de revisión.

Usa la vista de carga de trabajo del ciclo para verificar la carga por desarrollador. Si un desarrollador está al 130% y otro al 40%, redistribuye antes de que comience el ciclo.

## Seguimiento Durante la Release

Una vez que la release está en marcha:
- Verifica el progreso del ciclo diariamente (fecha, estado, indicadores de tiempo)
- Registra tiempo en las issues a medida que se completa el trabajo
- Mueve issues entre ciclos si algo se retrasa
- Mantén los indicadores de capacidad en verde: si un ciclo alcanza 100%+ con trabajo pendiente, escala inmediatamente

## Cerrar la Release

Cuando todas las capabilities están entregadas y probadas, marca la release como entregada. Sinra crea la retrospectiva automáticamente. Rellénala mientras la release está reciente.
