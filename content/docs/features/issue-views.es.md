---
title: "Vistas de Issues"
description: "Sinra ofrece dos formas de ver tus issues: una lista en tabla para análisis detallado y un tablero kanban para el flujo de trabajo basado en estados. Cambia entre ellas al instante sin perder los filtros."
date: 2024-01-01
weight: 30
---

## Vista Lista (Tabla)

La vista por defecto muestra issues en una tabla paginada con columnas ordenables:

| Columna | Descripción |
|---------|-------------|
| Prioridad | Indicador codificado por colores (Baja, Media, Alta) |
| Título | Nombre de la issue, clicable para abrir |
| Asignado | Avatar con tooltip del nombre |
| Release | Versión a la que apunta esta issue |
| Ciclo | Asignación de ciclo actual |
| Estado | Distintivo del estado de desarrollo |
| Labels | Todos los labels aplicados |
| Plataforma | Backend, Frontend, etc. |
| Estimado | Estimación de tiempo en días |
| Empleado | Tiempo registrado en días |

Haz clic en cualquier encabezado de columna para ordenar. Haz clic de nuevo para invertir. El estado de ordenación persiste en la sesión.

La lista es ideal para:
- Explorar un backlog grande con filtros aplicados
- Comparar estimaciones entre issues
- Seleccionar issues en masa para actualizaciones por lote

## Vista Kanban (Tablero)

El tablero agrupa issues por estado de desarrollo en columnas. Cada tarjeta muestra:
- Título
- Indicador de prioridad
- Labels
- Avatar del asignado

Arrastra tarjetas entre columnas para actualizar el estado de desarrollo directamente en el tablero.

El tablero es ideal para:
- Reuniones diarias ("¿qué está en progreso?")
- Visualizar el flujo a través del pipeline de estados
- Actualizaciones rápidas de estado sin abrir issues

## Cambiar de Vista

Un botón de alternancia en la parte superior derecha de la lista de issues cambia entre Lista y Kanban. Tus filtros activos, ordenación y búsqueda se aplican a ambas vistas. Cambiar de vista no reinicia tus filtros.

## Operaciones en Masa (Vista Lista)

En la vista lista, marca la casilla en cualquier issue para seleccionarla. Selecciona varias issues para activar acciones en masa:

| Acción | Descripción |
|--------|-------------|
| Establecer estado | Actualizar el estado de desarrollo para todas las seleccionadas |
| Asignar | Reasignar todas las seleccionadas a un usuario o equipo |
| Establecer release | Mover las issues seleccionadas a una release diferente |
| Establecer ciclo | Reasignar las seleccionadas a un ciclo diferente |
| Añadir label | Añadir un label a todas las issues seleccionadas |
| Establecer plataforma | Actualizar la plataforma para todas las seleccionadas |

Las operaciones en masa son irreversibles en una sola acción, así que confirma antes de aplicarlas a grandes selecciones.
