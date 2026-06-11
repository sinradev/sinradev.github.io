---
title: "Spec Pipeline"
description: "El Spec Pipeline es un tablero Kanban dedicado a los flujos de trabajo PO/PM. Visualiza todas las issues de redacción de specs agrupadas por capability y organizadas en columnas según su estado de redacción. Arrastra las tarjetas entre columnas para actualizar el estado al instante."
date: 2026-06-11
weight: 25
---

## Resumen

El Spec Pipeline ofrece a los product owners y jefes de proyecto una vista dedicada para seguir el avance de la redacción de specs en todas las capabilities. En lugar de navegar issue por issue, el pipeline muestra el panorama completo: qué capabilities tienen specs en progreso, bloqueadas en revisión o listas.

Accede desde la barra lateral en el menú desplegable **Capabilities**.

## Columnas

Cada columna corresponde a un estado de redacción configurado para tu organización. Los estados se ordenan de izquierda a derecha siguiendo el flujo de redacción:

| Columna | Significado |
|---------|------------|
| **Por redactar** | Specs no iniciadas |
| **En progreso** | Specs en proceso de redacción |
| **En revisión** | Specs en espera de validación |
| **Validado** | Specs validadas |

Los nombres de las columnas coinciden con los estados de redacción configurados en tu organización. Solo aparecen en el pipeline las issues que tienen un estado de redacción asignado.

## Agrupación de tarjetas

Dentro de cada columna, las tarjetas se agrupan por capability. Cada grupo muestra el nombre de la capability como encabezado, seguido de las issues que le pertenecen.

Las issues sin capability vinculada aparecen en un grupo **"Sin capability"** al final de cada columna.

Hacer clic en una tarjeta navega a la página de detalle de la issue existente.

## Filtros

Filtra el pipeline por **release** y **proyecto** para centrarte en lo que importa ahora:

- Selecciona una release para ver solo las issues vinculadas a esa release o deseada
- Selecciona un proyecto para afinar aún más
- Combina ambos filtros, se aplican de forma acumulativa
- Usa **Restablecer** para borrar todos los filtros activos

Los filtros persisten durante la duración de tu sesión.

## Arrastrar y soltar

Mueve una tarjeta de una columna a otra para actualizar su estado de redacción al instante. El cambio se guarda de inmediato sin recargar la página completa.

- Solo se admiten movimientos entre columnas (sin reordenamiento dentro de la misma columna)
- El drag and drop respeta tus permisos de acceso existentes sobre las issues
- Si no tienes permiso para editar una issue, la tarjeta no se puede arrastrar

## Acceso

El Spec Pipeline es accesible para todos los miembros de tu organización. Se aplican las mismas reglas de acceso que en el índice de Capabilities.

## Estados vacíos

| Situación | Lo que ves |
|-----------|-----------|
| Ningún filtro coincide | Mensaje "Sin specs correspondientes" |
| Sin estados de redacción configurados | Invitación a configurar los estados en Ajustes |
