---
title: "Gestión de Equipos"
description: "Configura equipos, roles y tasas de disponibilidad en Sinra. La precisión de estos datos determina la fiabilidad de todos los cálculos de capacidad."
date: 2024-01-01
weight: 80
---

## Estructura de Equipos

Un usuario pertenece exactamente a un equipo por organización. Esta restricción es intencional: evita el doble conteo de capacidad cuando un desarrollador estaría teóricamente en dos equipos.

Los equipos agrupan a personas que trabajan juntas en las mismas issues y ciclos.

## Crear un Equipo

1. Ve a **Equipos**
2. Haz clic en **Nuevo Equipo**
3. Dale un nombre al equipo (Backend, Frontend, QA, Producto, etc.)
4. Invita miembros por email

Cada equipo recibe un avatar autogenerado basado en su nombre.

## Roles

| Rol | Permisos |
|-----|---------|
| **Desarrollador** | Crear y modificar issues, registrar tiempo |
| **Reporter** | Crear issues, crear testings, comentar |
| **Manager** | Todo lo anterior, más gestionar releases y ciclos |
| **Admin** | Acceso completo: facturación, ajustes, configuración |

Asigna el rol mínimo necesario. Un reporter que no escribe código no necesita el rol de Desarrollador.

## Tipos de Desarrolladores

Los desarrolladores tienen un subtipo que afecta al agrupamiento en las vistas de carga:
- **Backend**
- **Frontend**
- **Fullstack**

La vista de carga de trabajo del ciclo desglosa automáticamente por tipo, para ver si la carga está equilibrada entre frontend y backend.

## Tasas de Disponibilidad

La `tasa de disponibilidad` (0-100%) es la configuración más importante. Todos los cálculos de capacidad dependen de ella.

| Situación | Tasa recomendada |
|-----------|-----------------|
| Tiempo completo, proyecto único | 80-100% |
| Tiempo parcial o multi-proyecto | 40-60% |
| Colaborador ocasional | 20-30% |

No seas optimista. Un desarrollador genuinamente disponible al 80% configurado al 100% hará que cada ciclo parezca alcanzable sobre el papel y deficitario en la práctica.

## Actualizar una Tasa Durante el Proyecto

Si la disponibilidad de un miembro cambia (nuevo proyecto paralelo, baja, vuelta de baja), actualiza su tasa. Sinra recalcula inmediatamente la capacidad de los ciclos futuros. Los ciclos pasados conservan sus datos históricos.

## Invitaciones

Los miembros reciben una invitación por email. Deben aceptarla y crear su cuenta antes de aparecer como usuarios asignables en issues y ciclos.

## Límites de Asientos

El número de miembros depende de tu plan. Los asientos disponibles se muestran en la configuración del equipo.
