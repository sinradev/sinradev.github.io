---
title: "Releases"
description: "Una release en Sinra es un compromiso de alcance, no solo un evento de despliegue. Aprende cómo las releases definen lo que entregas, se conectan a ciclos y capabilities, y comunican el progreso a toda tu organización."
date: 2024-01-01
weight: 40
---

## ¿Qué es una Release?

Una release representa una versión de tu producto. Responde a: "¿qué estamos entregando y cuándo?"

En Sinra, una release se define por su alcance: el conjunto de capabilities que incluye. Esto se decide deliberadamente en el momento de la planificación, no se ensambla retroactivamente a partir de lo que estaba terminado antes del despliegue.

## Release vs Ciclo

Estos dos conceptos se confunden con frecuencia. Son independientes:

| | Release | Ciclo |
|-|---------|-------|
| Qué es | Un alcance de entrega | Un período de trabajo |
| Responde a | ¿Qué estamos enviando? | ¿Cuándo trabajamos en ello? |
| Duración | Variable, ligada a funcionalidades | Fija, típicamente 1-4 semanas |
| Contiene | Capabilities e issues | Issues de cualquier release |

Un único ciclo puede contener issues de múltiples releases. Esto permite a los equipos trabajar en una corrección de mantenimiento para v1.2 al mismo tiempo que nuevas funcionalidades para v2.0, dentro del mismo ciclo.

## Definir una Release

Cuando creas una release, estableces:
- **Nombre y número de versión**: tu esquema de versioning (semántico o basado en calendario)
- **Fecha de entrega objetivo**: cuándo planeas lanzar
- **Capacidad objetivo**: días de trabajo presupuestados para esta release

Luego, usando la vista Backlog, asignas capabilities a la release. Cada capability trae sus issues consigo. Aquí es donde ocurren las decisiones de alcance.

## Planificación de la Capacidad

Sinra calcula si tu release es alcanzable basándose en:
- Tiempo total estimado de issues para todas las issues de la release
- Capacidad del equipo disponible en los ciclos que entregarán esas issues

Si la release está sobre capacidad, Sinra lo hace visible antes de que te comprometas. Este es el cambio fundamental que hace Sinra: confrontar la ambición con la realidad en el momento de la planificación, no en el momento de la entrega.

## Estados de las Releases

| Estado | Significado |
|--------|------------|
| **Próxima** | Planificada, no iniciada |
| **Activa** | Actualmente en trabajo |
| **Entregada** | Enviada |

Cuando una release se marca como entregada, Sinra crea automáticamente su retrospectiva.

## Comunicar una Release

Un alcance de release definido en capabilities se traduce directamente en comunicación a stakeholders:

> "v2.4 se lanza en julio. Incluye: notificaciones por email, exportación CSV y gestión de roles."

Esto es algo que tu equipo de ventas, tus usuarios y tu soporte pueden entender sin abrir el backlog.

## Retrospectivas

Cada release genera una retrospectiva automáticamente cuando se cierra. El equipo rellena cuatro categorías:
- **Bien**: qué funcionó bien
- **Mal**: qué no funcionó
- **Mejoras**: cambios de proceso a intentar la próxima vez
- **General**: cualquier otra cosa

Las retrospectivas están vinculadas a releases, no a ciclos, porque lo que aprendes es sobre lo que entregaste, no sobre cuánto tiempo trabajaste.
