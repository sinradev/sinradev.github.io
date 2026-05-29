---
title: "Primeros Pasos"
description: "Configura tu organización en Sinra en menos de 30 minutos. Esta guía te lleva por la creación de la organización, configuración del equipo y tu primera release desde cero."
date: 2024-01-01
weight: 10
---

## Antes de Empezar

Necesitarás:
- Una cuenta de Sinra (regístrate en [app.sinra.dev](https://app.sinra.dev/users/sign_up))
- Nombres y emails de los miembros del equipo a invitar
- Una idea aproximada de lo que estás construyendo (con un nombre de release es suficiente)

## Paso 1: Crear tu Organización

Cuando inicias sesión por primera vez, Sinra te pide crear una organización. Este es tu espacio de trabajo aislado. Todos los datos, equipos y proyectos pertenecen a esta organización.

Establece:
- **Nombre de la organización**: el nombre de tu empresa o proyecto
- **Idioma**: Español, Inglés o Francés (establece el predeterminado para todos los miembros)

## Paso 2: Crear Equipos

Ve a **Equipos** y crea al menos un equipo. Los equipos agrupan a las personas que trabajan juntas en el proyecto.

Para cada miembro del equipo:
1. Haz clic en **Invitar miembro**
2. Introduce su email
3. Establece su rol (Desarrollador, Reporter, Manager, Admin)
4. Establece su **tasa de disponibilidad** (0-100%)

La tasa de disponibilidad es importante. Un desarrollador al 100% está a tiempo completo en este proyecto. Un desarrollador al 50% trabaja a media jornada. Esto alimenta todos los cálculos de capacidad en Sinra, así que establécela con precisión desde el inicio.

## Paso 3: Crear un Proyecto

Ve a **Proyectos** y crea tu primer proyecto. Un proyecto agrupa capabilities que comparten un propósito estratégico.

Puedes crear un proyecto para empezar y añadir más después a medida que tu producto crezca.

## Paso 4: Crear Capabilities

Dentro de tu proyecto, crea capabilities para las funcionalidades que planeas construir. Mantenlas concretas: "Autenticación de usuario", "Panel de control", "Exportación CSV" en lugar de "Mejorar la experiencia del producto."

Cada capability debe ser algo que puedas mirar en 3 meses y decir definitivamente: entregado o no entregado.

## Paso 5: Crear una Release

Ve a **Releases** y crea tu primera release. Establece:
- **Nombre**: v1.0, 2024.Q1, o lo que se adapte a tu versioning
- **Fecha objetivo**: cuándo planeas lanzar
- **Capacidad objetivo**: días de trabajo que estás comprometiendo (puedes actualizarlo más tarde)

## Paso 6: Asignar Capabilities a la Release

Ve a la vista **Backlog**. Arrastra las capabilities que creaste a tu release. Observa el indicador de capacidad a medida que añades más. Si se pone rojo, tienes más alcance que capacidad.

Toma las decisiones difíciles aquí, no durante el último sprint.

## Paso 7: Crear tu Primer Ciclo

Ve a **Ciclos** y crea un ciclo con una fecha de inicio y fin. Sinra calcula automáticamente la capacidad del ciclo a partir de los días laborables y la disponibilidad del equipo.

Un ciclo es típicamente de 1 a 4 semanas. Empieza con 2 semanas si no estás seguro.

## Paso 8: Asignar Issues al Ciclo

Abre la lista de issues. Filtra por tu release. Asigna issues a tu ciclo editando el campo **Ciclo** en cada issue.

Observa la vista de carga de trabajo del ciclo para asegurarte de que ningún desarrollador está sobreasignado.

## Estás Listo

Con un equipo, una release, un backlog de capabilities e issues planificadas en un ciclo, Sinra está funcionando. La vista principal muestra tu ciclo actual con indicadores de progreso.

Desde aquí:
- Haz seguimiento del progreso diario en la vista del ciclo
- Registra tiempo en las issues
- Añade casos de prueba QA en las capabilities a medida que se completan las funcionalidades
- Cierra la release cuando se lance y revisa la retrospectiva
