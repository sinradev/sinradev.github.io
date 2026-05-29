---
title: "Gestión de la Capacidad"
description: "El sistema de capacidad de Sinra hace visible la ecuación fundamental del proyecto: lo que quieres entregar vs lo que tu equipo puede realmente hacer. Aprende cómo funcionan las tasas de disponibilidad, la capacidad de los ciclos y los cálculos de carga de trabajo."
date: 2024-01-01
weight: 50
---

## La Idea Central

La mayoría de las herramientas de gestión de proyectos te permiten añadir issues sin límite. Acabas con un backlog más grande de lo que cualquier equipo podría entregar, y la planificación se convierte en una suposición.

Sinra hace lo contrario. Cada elemento de trabajo tiene una estimación de tiempo. Cada miembro del equipo tiene una tasa de disponibilidad. Cada ciclo tiene una capacidad calculada. El sistema hace visible la brecha entre ambición y realidad antes de que te comprometas.

## Tasas de Disponibilidad

Cada miembro del equipo tiene un `target_capacity` entre 1% y 100%.

- 100%: tiempo completo en el proyecto
- 50%: media jornada (tiempo parcial, repartido entre proyectos, etc.)
- 80%: tiene en cuenta reuniones, revisiones de código y tareas generales

Estas tasas se configuran en la configuración del equipo y reflejan la realidad, no las aspiraciones.

## Cálculo de la Capacidad del Ciclo

Cuando se crea un ciclo con fechas de inicio y fin, Sinra calcula automáticamente su capacidad:

```
Capacidad del ciclo = Σ (días_miembro × tasa_disponibilidad)
                      para todos los miembros del equipo
                      durante los días laborables del ciclo
```

Un ciclo de 10 días con:
- Alice al 100%: 10 días
- Bob al 50%: 5 días
- Carol al 80%: 8 días

Da una capacidad total del ciclo de 23 días.

Este número es fijo. No puedes planificar más trabajo en un ciclo del que permite su capacidad sin ver la sobrecarga.

## Seguimiento de la Carga de Trabajo

Dentro de un ciclo, Sinra hace seguimiento de la carga de trabajo por miembro:
- **Estimado**: total de estimaciones de issues asignadas a este miembro
- **Empleado**: tiempo real registrado
- **Restante**: estimado menos empleado

La vista de carga de trabajo del ciclo muestra todos los miembros a la vez, haciendo inmediatamente visible si un desarrollador está sobrecargado mientras otro tiene capacidad disponible.

## Capacidad de la Release

A nivel de release, la planificación de capacidad funciona a través de ciclos:
- Tiempo total estimado para todas las issues de la release
- Distribuido entre los ciclos donde están planificadas esas issues
- Comparado con la capacidad total disponible del equipo en esos ciclos

Esto hace visible el sobrecompromiso a nivel de release, no solo a nivel de ciclo. Puedes ver, antes de comenzar el trabajo, si el alcance de la release es realista.

## Por Qué Esto Importa

El sistema de capacidad es lo que separa la planificación del pensamiento desiderativo.

Sin él, descubres el problema al final del sprint cuando la mitad de los tickets siguen abiertos. Con él, ves el problema durante la planificación y puedes tomar una decisión real: reducir el alcance, añadir capacidad o ampliar el plazo. La elección es explícita en lugar de descubierta bajo presión.
