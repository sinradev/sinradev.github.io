---
title: "Proyectos"
description: "Los proyectos agrupan capabilities que comparten un propósito estratégico. Son el nivel de planificación más alto en Sinra, por encima de releases y ciclos."
date: 2024-01-01
weight: 5
---

## ¿Qué es un Proyecto?

Un proyecto es un contenedor estratégico que agrupa capabilities relacionadas. Representa una iniciativa, un producto o una dirección de desarrollo a largo plazo.

Ejemplos de proyectos:
- "App móvil v2"
- "Rediseño del motor de facturación"
- "Integraciones de terceros"

## Jerarquía en Sinra

```
Proyecto
  └── Capabilities (funcionalidades concretas)
        └── Issues (tareas de implementación)
```

Un proyecto puede contener capabilities asignadas a diferentes releases. Proporciona una vista transversal del progreso de una iniciativa, independientemente de la planificación de sprints.

## Crear un Proyecto

1. Ve a **Proyectos**
2. Haz clic en **Nuevo Proyecto**
3. Define el nombre y la descripción
4. Añade capabilities existentes o crea nuevas desde el proyecto

## Vista de Proyecto

La vista detalle de un proyecto muestra:
- Todas las capabilities vinculadas con su estado
- Número de issues abiertas por capability
- Release objetivo de cada capability

Esto proporciona una lectura inmediata del estado de avance de una iniciativa completa sin tener que navegar por releases o ciclos individualmente.

## Proyectos vs Releases

Estos dos conceptos son complementarios, no intercambiables:

| | Proyecto | Release |
|-|----------|---------|
| Responde a | ¿En qué trabajamos? | ¿Cuándo entregamos? |
| Duración | Largo plazo, abierto | Limitado en el tiempo |
| Contiene | Capabilities | Capabilities + Issues |
| Eje | Estratégico | Operativo |

Un mismo proyecto puede contribuir a múltiples releases sucesivas. Una release puede incluir capabilities de varios proyectos diferentes.

## Buenas Prácticas

Crea un proyecto por iniciativa o dominio funcional principal. Evita proyectos demasiado amplios ("Todo el producto") o demasiado granulares ("Sprint 12"). Un buen proyecto cabe en una frase: qué busca, no cómo lo hace.
