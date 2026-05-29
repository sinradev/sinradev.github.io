---
title: "Filtros Avanzados"
description: "El sistema de filtros de Sinra soporta más de 40 campos filtrables con grupos de reglas Y/O. Los filtros persisten en tu sesión para que nunca pierdas tu vista. Aprende a construir consultas precisas en tu backlog de issues."
date: 2024-01-01
weight: 10
---

## Resumen

La lista de issues soporta filtrado dinámico con grupos de reglas Y/O. En lugar de un conjunto fijo de desplegables, construyes reglas de filtro que combinan cualquiera de los 40+ campos usando 8 operadores.

El estado de los filtros persiste en tu sesión: cierra la pestaña, vuelve, y tus filtros siguen activos.

## Construir un Filtro

Cada regla de filtro tiene tres partes:
1. **Campo**: sobre qué filtrar (asignado, estado, release, label, prioridad, tiempo estimado, etc.)
2. **Operador**: cómo comparar (igual, distinto, contiene, mayor que, menor que, está vacío, no está vacío)
3. **Valor**: contra qué comparar

## Grupos de Reglas Y / O

Las reglas se combinan en grupos. Dentro de un grupo, las reglas usan lógica Y. Múltiples grupos usan lógica O.

**Ejemplo:** issues que están (En Progreso Y asignadas a Alice) O (Bug Y prioridad Alta)

Grupo 1:
- Estado = En Progreso
- Asignado = Alice

Grupo 2:
- Tipo = Bug
- Prioridad = Alta

Esto devuelve issues que coincidan completamente con cualquiera de los grupos.

## Campos Filtrables (selección)

| Categoría | Campos |
|-----------|--------|
| Asignación | Asignado, Equipo |
| Estado | Estado de desarrollo, Estado de escritura |
| Alcance | Release, Ciclo, Capability, Proyecto |
| Clasificación | Tipo, Prioridad, Label, Plataforma |
| Tiempo | Tiempo estimado, Tiempo empleado, Creado el, Actualizado el |
| Contenido | Título (contiene) |

## Operadores

| Operador | Descripción |
|----------|-------------|
| `igual` | Coincidencia exacta |
| `distinto` | Excluye la coincidencia exacta |
| `contiene` | Coincidencia de subcadena (campos de texto) |
| `mayor que` | Comparación numérica |
| `menor que` | Comparación numérica |
| `está vacío` | El campo no tiene valor |
| `no está vacío` | El campo tiene algún valor |
| `en` | Coincide con cualquiera de una lista |

## Persistencia de Sesión

Sinra almacena tus filtros activos en la sesión, no en un parámetro de URL ni en una vista guardada. Esto significa:
- Tus filtros sobreviven a la navegación dentro de la app
- Cada sesión de navegador comienza sin filtros
- Los filtros son por usuario, no compartidos

Si quieres compartir una vista filtrada específica con un compañero, usa la URL (que refleja los filtros actuales) o describe directamente las reglas de filtro.

## Ordenación

La lista de issues soporta ordenación por cualquier columna. El orden de ordenación también persiste en la sesión junto con los filtros. Combinaciones de ordenación habituales:
- Prioridad descendente + Tiempo estimado descendente (los más grandes y críticos primero)
- Actualizado el descendente (el más recientemente modificado primero)
- Asignado + Estado (efecto de vista agrupada)
