---
title: "Exportación CIR/CII y Fichaje"
description: "Genera un extracto justificativo para el Crédito de Impuesto por Investigación (CIR) o Innovación (CII) francés, o un informe simple de horas trabajadas, directamente desde tus issues ya seguidas cada día, sin volver a introducir datos."
date: 2026-08-04
weight: 95
---

## Resumen

La exportación CIR/CII y fichaje reutiliza el mecanismo de exportación existente (issues → CSV/JSON) para producir dos tipos de informe sin desarrollo específico: un extracto justificativo para el Crédito de Impuesto por Investigación o por Innovación, y un informe simple de horas trabajadas por persona y por proyecto.

No se requiere ninguna configuración técnica: el mecanismo se apoya en los **labels**, las **capabilities** y el tiempo dedicado ya registrados en tus issues.

## Generar un Extracto CIR/CII

1. Crea un label dedicado a tus trabajos de investigación, por ejemplo « I+D » o « Investigación » (**Configuración → Labels**). El nombre del label es libre: tú decides qué se considera I+D en tu organización.
2. Aplica este label a las issues correspondientes a medida que avanzan.
3. En la lista de issues, filtra por este label y por el período deseado (**Filtros Avanzados**).
4. Abre la pantalla de exportación y marca « Reutilizar filtros actuales ».
5. Selecciona los campos relevantes: **Proyecto**, **Descripción**, **Horas trabajadas**, **Labels**, **Fecha de inicio del proyecto**, **Fecha de fin del proyecto**.
6. Exporta en CSV o JSON. El archivo contiene una línea por issue, con el detalle necesario para el expediente justificativo.

## Producir un Informe de Fichaje

Para un seguimiento simple de horas, sin filtrar por label: marca **Asignado**, **Proyecto** y **Horas trabajadas**, y exporta. El archivo resultante da, para cada issue, la persona asignada, el proyecto y el tiempo dedicado — para agregar por persona o por proyecto según se necesite.

## Campos Disponibles

| Campo | Descripción |
|-------|-------------|
| **Horas trabajadas** (`time_spent`) | Tiempo acumulado registrado en la issue |
| **Labels** | Labels aplicados a la issue, incluyendo tu label de I+D si se usa |
| **Fecha de inicio del proyecto** | Fecha de inicio de la capability asociada a la issue |
| **Fecha de fin del proyecto** | Fecha de fin de la capability asociada a la issue |
| **Proyecto, Descripción, Asignado, etc.** | Campos estándar ya disponibles en cualquier exportación de issues |

## Puntos a Tener en Cuenta

Las horas exportadas están **acumuladas por issue**, no registradas como un diario de asistencia: no es un sistema de fichaje horario en sentido estricto, sino un informe de actividad basado en el tiempo ya registrado en la herramienta. La exportación no calcula importes en euros, tarifas por hora, ni la calificación investigador/técnico: estos elementos quedan por añadir fuera de Sinra, según tu propio expediente fiscal.

## Casos de Uso

- **Expediente justificativo CIR/CII**: extracto anual de issues de I+D con horas y descripción técnica.
- **Facturación por tiempo dedicado**: exportación filtrada por proyecto en lugar de por label de I+D, para trabajo con clientes.
- **Informe de actividad**: informe mensual por persona o por proyecto para seguimiento interno.
- **Auditoría o cumplimiento**: aislamiento de issues con un label específico seguido en el tiempo.
