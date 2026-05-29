---
title: "Configuración de Equipos"
description: "Configura equipos, roles y tasas de disponibilidad con precisión. El sistema de capacidad de Sinra solo es tan bueno como los datos del equipo que lo alimentan."
date: 2024-01-01
weight: 20
---

## Los Equipos en Sinra

Un equipo es un grupo de usuarios que trabajan juntos. Los usuarios pertenecen exactamente a un equipo por organización. Esta restricción mantiene limpios los cálculos de carga de trabajo: no hay doble conteo de capacidad cuando un desarrollador aparece en dos equipos.

## Crear un Equipo

1. Ve a **Equipos**
2. Haz clic en **Nuevo Equipo**
3. Dale un nombre al equipo (Backend, Frontend, QA, etc.)
4. Añade miembros

Cada equipo recibe un avatar autogenerado basado en su nombre.

## Roles

Hay cuatro roles disponibles por organización:

| Rol | Permisos |
|-----|---------|
| **Desarrollador** | Crear y actualizar issues, registrar tiempo |
| **Reporter** | Crear issues, crear testings, comentar |
| **Manager** | Todo lo anterior, más gestionar releases y ciclos |
| **Admin** | Acceso completo a la organización incluyendo facturación y ajustes |

Asigna el rol más bajo que dé a cada miembro lo que necesita. Los reporters que no escriben código no deberían tener acceso de Desarrollador.

## Tipos de Desarrolladores

Los desarrolladores tienen un subtipo que afecta al agrupamiento de la carga de trabajo:
- **Backend**
- **Frontend**
- **Fullstack**

Las vistas de carga de trabajo de los ciclos agrupan por tipo de desarrollador, para que puedas ver la carga de backend vs frontend por separado.

## Tasas de Disponibilidad

Esta es la configuración más importante en Sinra. Todos los cálculos de capacidad dependen de ella.

Establece el `target_capacity` de cada miembro para reflejar su disponibilidad real para este proyecto:

| Situación | Tasa |
|-----------|------|
| Tiempo completo, sin otros proyectos | 80-100% |
| Tiempo parcial o proyectos múltiples | 40-60% |
| Colaborador ocasional | 20-30% |

No establezcas las tasas de forma optimista. Si alguien está genuinamente al 80% pero lo configuras al 100%, cada ciclo parecerá bajo capacidad hasta que veas desviaciones en la entrega.

## Actualizar Tasas Durante el Proyecto

Si un miembro del equipo cambia su disponibilidad (comienza un nuevo proyecto paralelo, se va de vacaciones, regresa de vacaciones), actualiza su tasa en la configuración del equipo. Sinra recalcula inmediatamente la capacidad futura de los ciclos. Los ciclos pasados conservan sus datos históricos.

## Límites de Asientos

El número de miembros que puedes añadir depende de tu plan de suscripción. Sinra muestra los asientos disponibles restantes en la configuración del equipo. Contacta con el soporte si necesitas aumentar tu cantidad de asientos.

## Invitar Miembros

Los miembros reciben una invitación por email cuando se añaden a un equipo. Deben aceptar la invitación y crear su cuenta antes de aparecer como usuarios asignables en issues y ciclos.
