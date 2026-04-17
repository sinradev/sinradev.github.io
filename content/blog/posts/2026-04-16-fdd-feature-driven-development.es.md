---

title: "FDD (Feature Driven Development): Entregar Funcionalidades, No Procesos"
subtitle: "Feature Driven Development: el método agile centrado en funcionalidades para equipas grandes"
description: "FDD (Feature Driven Development) es un método agile que organiza desarrollo alrededor de funcionalidades cortas y entregables. Descubre sus 5 procesos, mejores prácticas y por qué destaca para equipas grandes."
categories: ["Metodología"]
date: 2026-05-08 09:00:00 +0100
excerpt: "Mientras Scrum organiza trabajo en sprints, FDD lo organiza en features. Una feature = 2 días máximo. Esta restricción simple transforma cómo equipas piensan y entregan."
featured_image: /assets/images/blog/2026-04-16-fdd-feature-driven-development-featured.png
---

## Qué es FDD?

**FDD** (Feature Driven Development) es método de desarrollo agile creado por Jeff De Luca y Peter Coad en 1997 para proyecto bancario en Singapur (150 desarrolladores). Se describe en "Java Modeling in Color with UML" (1999) y se populariza en "A Practical Guide to Feature-Driven Development" (2002).

Su proposición central es simple pero poderosa: **organizar todo desarrollo alrededor de funcionalidades (features) cortas y entregables**. Una feature se define como "acción de valor para cliente, tan pequeña como sea posible". Regla de oro: **una feature debe poder desarrollarse en 2 semanas máximo** (idealmente 2-5 días).

## Los 5 Procesos de FDD

**Proceso 1: Desarrollar un Modelo Global**
Un equipo de expertos de dominio y arquitectos desarrolla modelo de objeto de alto nivel del sistema. Este modelo orienta todas decisiones de diseño futuras. Se construye en talleres colaborativos en 1-2 semanas.

**Proceso 2: Construir la Lista de Features**
El modelo global se descompone en lista de features organizada según jerarquía:
- **Dominio**: área comercial principal (p.ej. "Gestión de Clientes")
- **Activity Set**: grupo de funcionalidades (p.ej. "Crear un Cliente")
- **Feature**: funcionalidad individual (p.ej. "Crear cuenta cliente particular")

**Proceso 3: Planificar por Feature**
Las features se priorizan y asignan a equipas. Se designan Feature Owners y Class Owners.

**Proceso 4: Diseñar por Feature**
Para cada grupo de features, Chef Programmer planifica iteración de diseño. Equipo crea diagramas de secuencia, artefactos de diseño detallado.

**Proceso 5: Construir por Feature**
Los desarrolladores implementan features según designs creados. Cada feature pasa inspección de código, pruebas unitarias e integración antes ser marcada como completa.

## Las Mejores Prácticas de FDD

FDD define 6 "best practices" que le son propias:

1. **Domain Object Modeling**: modelar dominio comercial vía objetos coloreados (notación específica FDD)
2. **Developing by Feature**: todo desarrollo se hace en contexto de feature
3. **Individual Class (Code) Ownership**: cada clase de código tiene propietario responsable
4. **Feature Teams**: pequeños equipas dinámicos formados para cada feature
5. **Inspections**: revisiones de código formales según proceso Fagan
6. **Regular Builds**: compilaciones regulares con versión de referencia siempre disponible
7. **Configuration Management**: gestión de versión rigurosa
8. **Reporting/Visibility**: reportaje de progreso claro y regular

## FDD vs Scrum: Qué Diferencia?

| Criterio | FDD | Scrum |
|---------|-----|-------|
| Unidad de trabajo | Feature (2 semanas máx) | User story / Sprint |
| Roles | Arquitecto, Dev Manager, Class Owner, Feature Owner, Domain Expert | Product Owner, Scrum Master, Dev Team |
| Planificación | Largo plazo posible (lista features completa) | Backlog progresivo |
| Tamaño equipo | Adaptable (equipas grandes) | Pequeños equipas (5-9) |
| Modelado | UML + Domain Modeling | Raro, frecuentemente informal |
| Documentación | Modelo de dominio | User stories |

## FDD para Equipas Grandes

FDD es una de las pocas metodologías agiles explícitamente diseñadas para **equipas grandes** (50-200+ desarrolladores). Donde Scrum recomienda equipas de 5-9 personas (y usa Scrum of Scrums para escalar), FDD organiza nativatamente trabajo para equipas importantes vía su jerarquía dominio/activity set/feature.

## FDD y Sinra

La jerarquía de FDD (dominio, activity set, feature) se mapea naturalmente a estructura Sinra. Las **capabilities** corresponden a Activity Sets de FDD, los **issues** a features individuales. Las **releases** agrupan features completadas, y los **ciclos** corresponden a iteraciones de Design y Build por feature.

La noción de "Class Owner" de FDD resena con los **roles** y asignaciones en Sinra, donde cada issue puede tener propietario claramente designado.

La Feature List de FDD, construida en fase 2 como catálogo completo de todas features a desarrollar, corresponde precisamente a un **proyecto** Sinra: conjunto de capabilities organizadas en vista Gantt que da visibilidad largo plazo sobre todo qué equipo quiere construir, antes incluso que ciclos de desarrollo comiencen.

## Conclusión

FDD es método agile subestimado, particularmente para organizaciones gestionando equipas grandes y necesitando más estructura que Scrum sin peso del RUP. Su definición estricta de feature (entregable en 2 semanas máximo) es disciplina saludable que fuerza equipas a descomponer trabajo en unidades tangibles y medibles.
