---
layout: post
title: "De Issue a Release: Cómo Sinra Estructura Su Trabajo"
subtitle: "Una guía práctica a través del viaje de una funcionalidad desde la concepción hasta la entrega"
description: "Siga una funcionalidad a través de la jerarquía de Sinra, desde issues individuales hasta capabilities hasta releases, y descubra cómo la estructura concreta crea claridad en lugar de complejidad."
lang: es
category: Product Guide
excerpt: "Entendiendo cómo fluye el trabajo a través de Sinra: los issues son los bloques de construcción, las capabilities agrupan trabajo relacionado y los releases definen qué se envía. Sin jerga, solo estructura clara."
permalink: /product-guide/:year/:month/:day/from-issue-to-release.html
featured_image: /assets/images/blog/2025-11-26-from-issue-to-release-featured.png
---

## El Problema: Perdido en la Traducción

La mayoría de las herramientas de gestión de proyectos te obligan a pensar en abstracciones:

- "User stories" que no son realmente historias
- "Epics" que no se sienten épicos
- "Backlogs" que se convierten en cementerios
- "Increments" que nadie entiende

**¿El resultado?** Los equipos pasan más tiempo traduciendo conceptos que haciendo trabajo.

Sinra adopta un enfoque diferente: **jerarquía concreta que refleja cómo realmente sucede el trabajo**.

Sigamos una funcionalidad real de principio a fin.

---

## La Funcionalidad: Autenticación de Dos Factores

Su equipo decide agregar autenticación de dos factores (2FA) a su producto SaaS.

En herramientas tradicionales, podría crear:

- Una "user story" para 2FA
- Múltiples "sub-tasks"
- Un "epic" para agruparlas
- Etiquetas para rastrear pruebas
- Campos personalizados para targeting de release

**En Sinra, la estructura es más simple y directa.**

---

## Nivel 1: Issues (Los Bloques de Construcción)

**Los Issues son elementos de trabajo individuales.** Bugs, tareas, funcionalidades: cualquier cosa que una persona hace es un issue.

Para 2FA, crea estos issues:

**Issues de Backend:**

1. "Implementar generación de token TOTP"
2. "Crear endpoint API de inscripción 2FA"
3. "Agregar verificación 2FA al flujo de login"
4. "Generar códigos de respaldo en inscripción"

**Issues de Frontend:**
5. "Construir UI de página de configuración 2FA"
6. "Agregar componente de escáner de código QR"
7. "Crear interfaz de descarga de códigos de respaldo"
8. "Actualizar formulario de login con entrada 2FA"

**Issues de Testing:**
9. "Escribir pruebas unitarias para validación TOTP"
10. "Probar flujo de inscripción 2FA"
11. "Probar verificación de login 2FA"
12. "Probar recuperación de código de respaldo"

Cada issue tiene:

- Un título claro (qué necesita hacerse)
- Una descripción (contexto y requisitos)
- Un asignado (quién lo está haciendo)
- Un status (writing → development → review → testing → done)
- Labels (backend, frontend, security, etc.)

**Los Issues son la unidad atómica de trabajo.** Todo comienza aquí.

![Estructura de Issue](/assets/images/issue-structure.svg "Cómo Funcionan los Issues en Sinra")

---

## Nivel 2: Capabilities (Agrupar Trabajo Relacionado)

**Las Capabilities son funcionalidades o iniciativas rastreadas en sus releases.** Organizan el trabajo a un nivel superior que los issues.

Para 2FA, crea una capability llamada:
**"Autenticación de Dos Factores"**

Esta capability incluye:

- Todos los 12 issues listados arriba
- Criterios de aceptación para la funcionalidad
- Dependencias (ej., requiere integración de proveedor SMS)
- Release objetivo (ej., Release 2.1)

**¿Por qué "capability" en lugar de "epic"?**

Porque es concreto. Una capability describe qué puede hacer su producto. "Capability de 2FA" significa que su producto puede hacer autenticación de dos factores. No se requiere metáfora.

**Las Capabilities le permiten ver:**

- Progreso en todos los issues relacionados
- Quién está trabajando en qué partes
- Cobertura de testing
- Bloqueadores y dependencias
- Preparación para release

![Jerarquía de Capability](/assets/images/capability-hierarchy.svg "Issues Agrupados en Capabilities")

---

## Nivel 3: Releases (Definir Qué Se Envía)

**Los Releases son versiones de su producto.** Son concretos, numerados y enviados.

Asigna la capability de 2FA a **Release 2.1**.

Release 2.1 podría incluir:

- **Autenticación de Dos Factores** (nueva capability)
- **Mejoras de restablecimiento de contraseña** (capability existente)
- **Correcciones de bugs para página de login** (issues individuales)

**Los Releases responden la pregunta crítica: "¿Qué estamos enviando y cuándo?"**

En la vista de Release 2.1, ve:

- Todas las capabilities asignadas a este release
- Progreso en cada capability
- Issues individuales no agrupados en capabilities
- Status de testing
- Preparación para despliegue

![Vista de Release](/assets/images/release-view.svg "Capabilities Agrupadas en Releases")

---

## La Jerarquía Completa en Acción

Tracemos la funcionalidad de 2FA a través del sistema:

### Semana 1-2: Planificación

**Acción:** El equipo de producto define la capability de 2FA

- Escribir requisitos en la descripción de capability
- Crear 12 issues (backend, frontend, testing)
- Asignar issues a desarrolladores e ingenieros QA
- Establecer release objetivo: 2.1
- Agregar al cycle actual

**Visibilidad:** Todos ven:

- Qué issues existen
- Quién está asignado a qué
- Cuáles son los criterios de aceptación
- Cuándo se espera que se envíe

### Semana 3-4: Desarrollo

**Acción:** El equipo comienza a construir

- Desarrollador backend marca "Implementar TOTP" como in_progress
- Desarrollador frontend marca "Construir página de configuración 2FA" como in_progress
- Issues se mueven de writing → development → review
- Los comentarios capturan decisiones de diseño y bloqueadores
- Ingeniero QA prepara casos de prueba

**Visibilidad:** El progreso en tiempo real muestra:

- Qué issues están en desarrollo vs. completados
- Porcentaje de finalización general de capability
- Bloqueadores (ej., "Esperando claves API de proveedor SMS")
- Capacidad vs. carga de trabajo

### Semana 5: Testing

**Acción:** QA comienza verificación

- Issues de prueba se mueven a in_progress
- Los bugs encontrados se convierten en nuevos issues vinculados a la capability
- Las pruebas de regresión se ejecutan en staging
- Documentación actualizada

**Visibilidad:** El dashboard de testing muestra:

- Cobertura de pruebas para capability 2FA
- Status de aprobado/reprobado
- Casos de prueba restantes
- Progreso de corrección de bugs

### Semana 6: Release

**Acción:** Desplegar Release 2.1

- Todos los issues de 2FA marcados completos
- Capability marcada lista para release
- Release 2.1 desplegado a producción
- Monitoreo confirma implementación exitosa

**Visibilidad:** La vista de release confirma:

- Todas las capabilities planificadas enviadas
- Todas las pruebas aprobadas
- Documentación completa
- Despliegue exitoso

![Flujo de Trabajo Completo](/assets/images/issue-to-release-workflow.svg "Viaje Completo de Issue a Release")

---

## Por Qué Funciona Esta Jerarquía

### 1. Refleja la Realidad

El trabajo no sucede en "user stories" o "epics". Sucede en tareas (issues), agrupadas en funcionalidades (capabilities), enviadas en versiones (releases).

### 2. No Se Requiere Traducción

Un desarrollador no necesita decodificar qué significa un "epic". Ven una capability llamada "Autenticación de Dos Factores" e inmediatamente entienden qué se está construyendo.

### 3. Visibilidad Multi-Nivel

- **Contribuidores individuales** ven sus issues asignados
- **Líderes de equipo** ven progreso de capability
- **Gerentes de producto** ven preparación de release
- **Ejecutivos** ven cronograma de entrega

Todos obtienen la vista que necesitan sin dashboards personalizados.

### 4. Granularidad Flexible

No todo necesita ser una capability. Las funcionalidades pequeñas pueden ser issues independientes asignados directamente a releases. Las iniciativas grandes pueden tener más de 50 issues agrupados en una capability. La estructura se adapta a su trabajo.

### 5. Testing es de Primera Clase

Los issues de prueba viven junto a los issues de desarrollo. Los ingenieros QA ven qué necesita probarse en tiempo real, no después de que el desarrollo esté "terminado".

---

## Comparación: Sinra vs. Herramientas Tradicionales

| **Concepto**    | **Herramientas Tradicionales**                | **Sinra**                                     |
| --------------- | --------------------------------------------- | --------------------------------------------- |
| **Elemento de trabajo** | User story, task, bug (tipos diferentes) | Issue (unificado)                             |
| **Agrupación**  | Epic, theme, initiative (vago)                | Capability (funcionalidad concreta)           |
| **Versión**     | Increment, sprint goal, milestone (ambiguo)   | Release (versión numerada)                    |
| **Testing**     | Casos de prueba separados o campos personalizados | Test issues (igual que dev issues)         |
| **Visibilidad** | Dashboards personalizados, gráficos de velocidad | Progreso en tiempo real en capabilities y releases |

---

## Ejemplo del Mundo Real: Equipo de E-Commerce

**PayFast (equipo de 8 personas construyendo plataforma de pagos)**

### Antes de Sinra (Usando Jira)

**Problema:** Rastrear una funcionalidad significaba:

- Crear un epic
- Escribir 20 user stories
- Vincular sub-tasks
- Etiquetar para release
- Construir dashboard personalizado para ver progreso

Resultado: **Más de 3 horas por semana manteniendo estructura**

### Después de Sinra

**Solución:** Rastreando la misma funcionalidad:

- Crear 1 capability: "Facturación de Suscripciones"
- Crear 18 issues (dev, diseño, QA)
- Asignar a Release 3.2
- Ver progreso en tiempo real

Resultado: **15 minutos para configurar, cero mantenimiento**

**Retroalimentación del equipo:**

> "Dejamos de pasar tiempo gestionando Jira y comenzamos a enviar funcionalidades. La jerarquía simplemente tiene sentido."
>  -  Desarrollador Líder, PayFast

---

## Cómo Estructurar Su Primera Funcionalidad en Sinra

### Paso 1: Definir la Capability

Pregunte: "¿Qué funcionalidad o iniciativa estamos construyendo?"

- Ejemplo: "Limitación de Tasa de API"
- Escribir una breve descripción y criterios de aceptación
- Asignar a un release objetivo

### Paso 2: Desglosar en Issues

Pregunte: "¿Qué tareas individuales se necesitan?"

- Issues de backend (implementar middleware de límite de tasa, agregar caché Redis)
- Issues de frontend (mostrar status de límite de tasa en dashboard)
- Issues de testing (probar aplicación de límite de tasa, probar lógica de reinicio)

### Paso 3: Asignar Propietarios y Labels

- Asignar issues a miembros del equipo
- Agregar labels (backend, frontend, security, etc.)
- Establecer dependencias si es necesario

### Paso 4: Rastrear Progreso

- Los issues se mueven a través de statuses a medida que avanza el trabajo
- La finalización de capability se actualiza automáticamente
- La preparación para release se vuelve visible en tiempo real

### Paso 5: Enviar el Release

- Cuando todos los issues de capability estén terminados, marcar capability completa
- Desplegar el release
- Revisar qué se envió y planificar el siguiente

---

## Preguntas Comunes

**P: ¿Siempre necesito capabilities?**
No. Correcciones de bugs pequeñas o tareas independientes pueden ser issues asignados directamente a un release. Las capabilities son para agrupar trabajo relacionado.

**P: ¿Puede un issue pertenecer a múltiples capabilities?**
No. Cada issue pertenece a una capability (o ninguna). Si el trabajo abarca múltiples funcionalidades, considere si es realmente una capability con alcance más amplio.

**P: ¿Cómo manejo dependencias entre issues?**
Sinra rastrea dependencias entre issues y capabilities. Marque dependencias y el sistema resalta bloqueadores en su flujo de trabajo.

**P: ¿Qué pasa si las prioridades cambian a mitad del release?**
Mueva issues entre capabilities o releases según sea necesario. Sinra no fuerza compromisos de sprint rígidos: adáptese cuando la realidad cambie.

**P: ¿Cómo veo en qué está trabajando mi equipo ahora mismo?**
Filtre por cycle actual + equipo + status in_progress. Verá exactamente qué está activo.

---

## La Ventaja de Sinra: Claridad por Diseño

La mayoría de las herramientas heredan la jerga Agile y obligan a los equipos a adaptar su pensamiento.

Sinra hace lo contrario: **la estructura refleja cómo realmente sucede el trabajo.**

- **Issues** = elementos de trabajo individuales
- **Capabilities** = funcionalidades agrupadas
- **Releases** = versiones del producto

Sin metáforas. Sin traducción. Sin sobrecarga cognitiva.

Cuando su herramienta habla el mismo lenguaje que su equipo, el trabajo fluye más rápido.

---

## Elementos de Acción: Estructurar Su Trabajo en Sinra

1. **Identifique su próxima funcionalidad.** ¿Qué está construyendo?
2. **Cree una capability.** Nómbrela concretamente (no "Epic: User Mgmt" sino "Permisos de Rol de Usuario")
3. **Desglose en issues.** Desarrollo, diseño, testing: todo lo que hace una persona
4. **Asigne a un release.** ¿En qué versión se enviará esto?
5. **Comience a construir.** Rastree el progreso en tiempo real, ajuste según sea necesario

---

## La Conclusión

**Las herramientas tradicionales te hacen pensar en abstracciones. Sinra te hace pensar en términos concretos.**

Issues → Capabilities → Releases.

Eso es todo. Esa es la jerarquía.

Simple, clara y alineada con cómo los equipos realmente construyen software.

---

**¿Listo para estructurar su trabajo claramente?** [Inicie una prueba gratuita de Sinra →](https://app.sinra.dev/users/sign_up)

Experimente la gestión de proyectos construida sobre estructura concreta, no jerga confusa.
