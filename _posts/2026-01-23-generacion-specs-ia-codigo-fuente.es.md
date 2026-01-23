---
layout: post
title: "Generar Especificaciones Via IA A Partir Del Código Fuente: Cuando La IA Analiza Tu Codebase Para Crear Specs Realistas"
subtitle: "Entre specs desconectadas de la realidad, documentación obsoleta e incomprensión técnica, los PO/PM escriben en el vacío: la IA analiza el código para generar especificaciones alineadas con lo existente"
description: "Los Product Owners crean specs ambiciosas sin conocer las restricciones técnicas. El equipo dev descubre la imposibilidad después de 2 semanas. Descubre cómo la IA genera specs realistas analizando tu código fuente con supervisión humana."
date: 2026-01-23 09:00:00 +0100
lang: es
category: Specifications
excerpt: "El PM escribe: « Añadir autenticación multi-factor ». El equipo dev descubre que la arquitectura actual solo soporta un método de autenticación. Refactorización completa necesaria. 3 semanas perdidas. La IA podría haber analizado el código antes de la spec."
permalink: /specifications/:year/:month/:day/generacion-specs-ia-codigo-fuente.html
featured_image: /assets/images/blog/2026-01-23-specs-ia-featured.svg
---

## "Añadan Autenticación Multi-Factor"

**Lunes por la mañana. Reunión de planificación de release.**

Product Manager: "Para el próximo release, vamos a añadir autenticación multi-factor. Es una solicitud prioritaria de clientes."

**El PM abre Notion y comienza a escribir la spec:**

```markdown
# Capability: Autenticación Multi-Factor (MFA)

**Objetivo:**
Permitir a los usuarios asegurar su cuenta con múltiples métodos de autenticación.

**Métodos soportados:**
- SMS con código de 6 dígitos
- Aplicación authenticator (TOTP)
- Llave de seguridad física (FIDO2)
- Email con enlace de confirmación

**User Stories:**
- Como usuario, quiero activar MFA en mis ajustes
- Como usuario, quiero elegir mi método preferido
- Como usuario, quiero configurar múltiples métodos de respaldo
```

PM: "Spec terminada. ¿Estimación?"

**Lead Developer (que aún no ha leído el código de autenticación actual):**

Dev Lead: "Diría 1 sprint, quizás 2. Voy a asignar al equipo."

**3 días después.**

**Desarrollador abre el código fuente del módulo de autenticación.**

```ruby
# app/models/user.rb
class User < ApplicationRecord
  devise :database_authenticatable, :registerable

  # Autenticación actual: email + password ÚNICAMENTE
  # Arquitectura: 1 solo método de auth soportado por devise
  # No hay sistema de providers múltiples
end
```

**Desarrollador escala al Lead:**

Dev: "Tenemos un problema. Nuestra arquitectura de autenticación actual solo soporta un método: email + password."

Dev Lead: "¿Y qué?"

Dev: "Para soportar MFA, necesitamos refactorizar completamente el sistema de autenticación. Devise no maneja nativamente múltiples métodos simultáneos. Debemos crear un sistema de providers, gestionar estados de autenticación parcial, implementar el flujo MFA..."

Dev Lead: "¿Tiempo estimado?"

Dev: "3 semanas mínimo. Más 1 semana de tests. La spec habla de 4 métodos diferentes. Cada uno requiere integración específica."

**Lead Developer vuelve a ver al PM.**

Dev Lead: "Tu spec de MFA... No podemos hacer esto en 2 sprints."

PM: "¿Por qué? Es solo añadir una opción en los ajustes."

Dev Lead: "No. Es refactorizar toda la arquitectura de autenticación. El código actual solo soporta un método. Tu spec pide 4. Debemos revisar todo."

PM: "Pero... validé esta spec con los clientes. Está prometida para el release."

Dev Lead: "Debías analizar el código antes de escribir la spec."

PM: "No sé programar. ¿Cómo se supone que sepa que su arquitectura no soporta esto?"

**Silencio incómodo.**

<img src="/assets/images/blog/2026-01-23-spec-deconnectee.svg" alt="Spec desconectada de la realidad técnica" width="800" height="500" loading="lazy">

---

## El Problema De Las Specs Desconectadas De La Realidad Técnica

La mayoría de Product Owners y Product Managers escriben specs sin conocer el estado real del código.

**Objetivo legítimo:** Definir necesidades de usuarios y funcionalidades a desarrollar.

**Resultado frecuente:** Specs técnicamente imposibles, subestimadas, o que requieren refactorizaciones mayores no anticipadas.

### Los Cinco Síntomas De Las Specs Desconectadas

#### 1. Specs Imposibles (La Arquitectura Actual No Lo Permite)

**El Escenario:**

PM escribe una spec ambiciosa basada en necesidades de usuarios.

**Semana 1:** Spec validada por el negocio. "¡Gran funcionalidad!"

**Semana 2:** El equipo dev comienza análisis técnico. "Esto es imposible con nuestra arquitectura actual."

**Semana 3:** Debate sobre cómo refactorizar el existente. "Tomará 6 semanas, no 2."

**Semana 4:** PM debe anunciar retraso a los clientes. "Disculpas, subestimamos la complejidad."

**Ejemplo Real:**

**Spec PM:** "Permitir a los usuarios exportar sus datos en formatos CSV, JSON y Excel."

**Código actual:**
```ruby
# app/services/export_service.rb
class ExportService
  def export_to_csv(data)
    # Export CSV únicamente
    # No hay gestión multi-formato
    # No hay abstracción para añadir otros formatos
  end
end
```

**Realidad:** El servicio de export está acoplado al formato CSV. Para soportar JSON y Excel, es necesaria refactorización completa del servicio, crear abstracción, implementar cada formatter.

**Tiempo estimado por PM:** 3 días.

**Tiempo real:** 2 semanas (refactorización + 3 formatos + tests).

**El Problema:**
- ❌ PM no conoce la arquitectura actual
- ❌ Spec escrita sin analizar código existente
- ❌ Subestimación masiva
- ❌ Frustración dev ("Otra spec irrealista")

**Cita de Lead Developer:**
> "Los PMs escriben specs como si empezáramos desde cero. Pero tenemos 200,000 líneas de código con una arquitectura específica. Sus specs nunca tienen eso en cuenta."

---

#### 2. Specs Subestimadas ("Es Solo Añadir Un Botón")

**El Escenario:**

PM piensa que una funcionalidad es simple. "Es solo añadir un botón de export."

**Realidad técnica oculta:**
- Permisos: ¿quién puede exportar?
- Límites: exports voluminosos crashean el servidor
- Background jobs: procesamiento asíncrono necesario
- Notificaciones: email cuando el export está listo
- Seguridad: no acceso a datos de otros usuarios
- Tests: 15 casos edge a cubrir

**Estimación PM:** 1 día.

**Estimación Dev después de analizar código:** 1 semana.

**El Problema:**
- ❌ PM ve interfaz de usuario, no complejidad técnica
- ❌ Specs no mencionan restricciones ocultas
- ❌ Desalineación entre expectativas y realidad

**Cita de Product Manager:**
> "Pensé que era simple. ¿Cómo se supone que sepa que debo manejar 15 casos edge si no leo el código?"

---

#### 3. Specs Contradictorias Con El Existente (Conflictos Arquitecturales)

**El Escenario:**

PM escribe una spec que entra en conflicto con la arquitectura actual.

**Ejemplo:**

**Spec PM:** "Los usuarios pueden crear workflows personalizados con condiciones if/else."

**Código actual:**
```ruby
# app/models/workflow.rb
class Workflow < ApplicationRecord
  # Workflows = secuencia lineal de pasos fijos
  # Sin condiciones
  # Sin ramas
  # Arquitectura rígida
end
```

**Resultado:** La spec pide un sistema de workflows condicionales. El código actual solo maneja secuencias lineales. Renovación completa necesaria.

**El Problema:**
- ❌ Spec ignorante de restricciones arquitecturales
- ❌ Conflicto entre visión PM y realidad técnica
- ❌ Refactorizaciones no planificadas

---

#### 4. Specs Vagas ("Mejorar El Rendimiento")

**El Escenario:**

PM escribe spec genérica sin contexto técnico.

**Spec PM:** "Mejorar el rendimiento de la página dashboard."

**Preguntas sin respuesta:**
- ¿Qué partes de la página son lentas?
- ¿Cuál es el tiempo de carga actual?
- ¿Cuál es el objetivo de rendimiento?
- ¿Qué consultas SQL son problemáticas?

**El equipo dev debe analizar el código para entender:**
- Profiling: identificar cuellos de botella
- Medición: tiempo de carga, número de consultas SQL, tiempo de render
- Hipótesis: ¿caching? ¿Consultas N+1? ¿Lazy loading?

**Tiempo perdido:** 2 días de análisis antes de empezar.

**El Problema:**
- ❌ Spec sin contexto técnico
- ❌ Dev debe hacer análisis que PM podría haber hecho con ayuda
- ❌ Tiempo perdido entendiendo el problema real

---

#### 5. Specs Sin Contexto De Migración ("¿Y Los Datos Existentes?")

**El Escenario:**

PM escribe spec para nueva funcionalidad. Olvida los datos existentes.

**Ejemplo:**

**Spec PM:** "Añadir campo « Estado de pago » en pedidos. Valores posibles: Pagado, Pendiente, Fallido."

**Pregunta olvidada:** ¿Qué hacemos con los 50,000 pedidos existentes en la base de datos?

**Realidad técnica:**
- Migración de datos necesaria
- Lógica de retrocompatibilidad (código antiguo que no maneja el nuevo campo)
- Estrategia de despliegue (¿desplegar código antes o después de migración?)

**Estimación PM:** 1 día (añadir un campo).

**Estimación Dev:** 1 semana (migración + retrocompatibilidad + despliegue seguro).

**El Problema:**
- ❌ Spec ignora lo existente (datos, código legacy)
- ❌ Subestimación de impactos de migración

---

## Por Qué Las Specs Permanecen Desconectadas De La Realidad

### Razón 1: Los PMs No Leen Código (Y Es Normal)

**El Problema:**

Los Product Managers no son desarrolladores. No pueden leer 200,000 líneas de código para entender la arquitectura.

**Resultado:** Escriben specs basadas en comprensión de usuario, no en realidad técnica.

**Cita de Product Manager:**
> "Entiendo las necesidades de usuarios. Pero no sé programar. ¿Cómo se supone que sepa que nuestro sistema de autenticación solo soporta un método?"

---

### Razón 2: Los Devs Descubren Restricciones Demasiado Tarde

**El Problema:**

El equipo dev descubre restricciones técnicas **después** de que la spec esté escrita y validada.

**Workflow típico:**

1. **Semana 1:** PM escribe spec (sin análisis técnico)
2. **Semana 2:** Spec validada por el negocio
3. **Semana 3:** Dev comienza a analizar código ("Ah, esto es imposible")
4. **Semana 4:** Debate sobre cómo refactorizar
5. **Semana 6:** Entrega parcial, lejos de la spec inicial

**Frustración de ambos lados:**
- PM: "¿Por qué me dices esto ahora?"
- Dev: "¿Por qué escribiste esta spec sin consultarnos?"

---

### Razón 3: No Hay Análisis Automatizado Del Código Fuente

**El Problema:**

No existe herramienta para analizar automáticamente el código y generar restricciones técnicas para una spec.

**Workflow actual:**

1. PM escribe spec (visión negocio)
2. Dev lee spec
3. Dev analiza código manualmente
4. Dev reporta restricciones
5. PM adapta spec
6. Vuelta al paso 2 (múltiples iteraciones)

**Tiempo perdido:** 1-2 semanas de idas y venidas.

**Pregunta:** ¿Y si la IA pudiera analizar el código fuente **antes** de escribir la spec?

---

## El Enfoque Por IA: Analizar Código Para Generar Specs Realistas

**El Concepto:**

Usar IA para analizar tu codebase y generar especificaciones alineadas con la arquitectura existente.

### Cómo Funciona

#### Paso 1: La IA Analiza El Código Fuente

**Input:** Tu codebase (archivos, arquitectura, dependencias).

**Análisis IA:**
- Identificar módulos existentes (autenticación, pagos, exports, etc.)
- Mapear arquitectura (servicios, modelos, controladores, jobs)
- Detectar restricciones técnicas (¿un solo formato de export? ¿workflows lineales?)
- Identificar patrones de código (cómo se implementan actualmente las features)

**Output:** Mapa técnico de tu codebase.

**Ejemplo:**

**IA analiza el módulo de autenticación:**

```
Análisis del código: app/models/user.rb, app/controllers/sessions_controller.rb

Arquitectura detectada:
- Gem usada: Devise
- Método de autenticación: database_authenticatable (email + password únicamente)
- Restricción: Devise no soporta nativamente múltiples métodos de autenticación simultáneos
- Extensiones posibles: devise-two-factor (gem de terceros para MFA básico)

Conclusión:
Para implementar MFA con múltiples métodos (SMS, TOTP, FIDO2), refactorización necesaria:
1. Crear sistema de providers de autenticación
2. Gestionar estados de autenticación parcial (email validado, esperando MFA)
3. Implementar cada provider (SMS, TOTP, FIDO2)
4. Tests de seguridad (bypass MFA, ataques timing, etc.)

Estimación: 3-4 semanas (refactorización + implementación + tests)
```

**Resultado:** La IA comprende la arquitectura actual e identifica restricciones técnicas.

<img src="/assets/images/blog/2026-01-23-ia-analyse-code.svg" alt="IA analiza el código fuente" width="800" height="450" loading="lazy">

---

#### Paso 2: El PM Describe El Objetivo De Negocio

**Input PM:** "Quiero añadir autenticación multi-factor para asegurar las cuentas de usuarios."

**La IA combina:**
- Objetivo de negocio (MFA para seguridad)
- Restricciones técnicas (arquitectura Devise actual)

**La IA genera spec realista:**

```markdown
# Capability: Autenticación Multi-Factor (MFA)

**Objetivo de negocio:**
Asegurar las cuentas de usuarios con MFA.

**Restricción técnica identificada:**
Arquitectura actual (Devise) solo soporta email + password.
Para MFA, refactorización necesaria.

**Enfoque propuesto por IA:**

Opción 1 (Rápido, Limitado):
- Usar gem `devise-two-factor`
- Soporte TOTP únicamente (no SMS, no FIDO2)
- Tiempo: 1 semana
- Limitación: solo 1 método MFA soportado

Opción 2 (Completo, Largo):
- Refactorizar sistema de autenticación
- Crear providers múltiples (SMS, TOTP, FIDO2)
- Soporte métodos de respaldo
- Tiempo: 4 semanas
- Ventaja: Arquitectura flexible para futuros métodos

**Recomendación IA:**
Opción 1 para MVP. Opción 2 para versión completa en siguiente release.

**Issues generadas:**
- [AUTH-101] Analizar seguridad devise-two-factor
- [AUTH-102] Implementar TOTP con devise-two-factor
- [AUTH-103] UI ajustes MFA
- [AUTH-104] Tests seguridad (bypass, timing attacks)
```

**Resultado:** Spec realista, alineada con arquitectura, con opciones y trade-offs explícitos.

---

#### Paso 3: Supervisión Humana (PO/PM/Dev Validan)

**IMPORTANTE:** La IA **no reemplaza** al humano. **Asiste**.

**Workflow de validación:**

1. **IA genera spec** basada en análisis del código
2. **PM lee la spec** ("OK, la IA detectó restricciones técnicas")
3. **Dev valida análisis técnico** ("Sí, correcto. Devise no soporta nativamente MFA multi-método")
4. **PM elige enfoque** ("Haremos Opción 1 para el MVP")
5. **Dev afina estimaciones** ("1 semana confirmada, conozco devise-two-factor")

**El humano mantiene el control:**
- ✅ PM elige enfoque (rápido vs completo)
- ✅ Dev valida análisis técnico
- ✅ Equipo decide prioridades

**La IA aporta:**
- ✅ Análisis automático del código
- ✅ Detección de restricciones técnicas
- ✅ Generación de specs realistas
- ✅ Ahorro de tiempo (2 días análisis → 10 minutos)

**Cita de Product Manager:**
> "La IA analizó el código de autenticación en 2 minutos. Antes, pedía a un dev hacer este análisis, tomaba 2 días. Ahora tengo las restricciones técnicas antes de escribir la spec."

<img src="/assets/images/blog/2026-01-23-supervision-humaine.svg" alt="Supervisión humana de la IA" width="800" height="400" loading="lazy">

---

### Los Tres Pilares De La Generación De Specs Via IA

#### 1. Análisis Automático Del Código Fuente

**El Concepto:**

La IA recorre tu codebase para identificar:
- Arquitectura actual (patrones, frameworks, gems/packages)
- Restricciones técnicas (¿un solo formato? ¿workflows lineales?)
- Dependencias (qué partes del código son impactadas por un cambio)
- Complejidad (tiempo estimado según estructura existente)

**Ventajas:**
- No necesitas leer 200,000 líneas de código manualmente
- Detección automática de restricciones ocultas
- Mapeo técnico en minutos

---

#### 2. Generación De Specs Alineadas Con El Existente

**El Concepto:**

La IA genera una spec que:
- Respeta arquitectura actual (o propone refactorización si necesario)
- Identifica impactos (qué archivos modificar, qué dependencias verificar)
- Propone múltiples enfoques (rápido vs completo, MVP vs versión final)

**Resultado:**
- Specs realistas (sin promesas imposibles)
- Trade-offs explícitos (tiempo vs funcionalidades)
- Estimaciones basadas en código real (no intuiciones)

---

#### 3. Supervisión Humana Obligatoria

**El Concepto:**

La IA asiste. El humano decide.

**La IA no hace:**
- ❌ Elegir enfoque técnico por ti
- ❌ Escribir código automáticamente sin validación
- ❌ Tomar decisiones de negocio (MVP vs completo)

**El humano mantiene control:**
- ✅ Validar análisis técnico de la IA
- ✅ Elegir enfoque (rápido, completo, híbrido)
- ✅ Ajustar prioridades según negocio
- ✅ Revisar spec generada si necesario

**Principio clave:**
> **Dominar la IA y nunca ser pasivo.**

Usas la IA para ahorrar tiempo en análisis técnico. Permaneces maestro de las decisiones.

---

## Ejemplo Real: TechOps Platform (SaaS Monitoring)

**TechOps Platform (equipo de 30 personas, plataforma de monitoring de infraestructura)**

*Nota: TechOps Platform es una empresa real que hemos anonimizado con nombre ficticio para proteger su confidencialidad.*

### Antes De IA: Specs Desconectadas, Idas Y Venidas Interminables

**Configuración:**
- Specs escritas en Notion por PMs
- Análisis técnico manual por lead devs
- Idas y venidas: 1-2 semanas por spec

**Problema Encontrado:**

**Spec PM:** "Permitir a usuarios exportar métricas en formatos Prometheus, Grafana JSON y CSV."

**Análisis dev (después de 3 días):**
```ruby
# app/services/metrics_exporter.rb
class MetricsExporter
  def export(metrics)
    # Export CSV únicamente
    # Sin abstracción para multi-formato
    # Prometheus y Grafana JSON = formatos complejos (time series, labels, metadata)
  end
end
```

**Conclusión dev:** "Necesitamos refactorizar servicio, crear sistema de formatters, implementar Prometheus y Grafana JSON. 3 semanas mínimo."

**PM:** "Pero prometí esto a los clientes para el release en 2 semanas."

**Resultado:** Release retrasado 4 semanas.

**Cita de Product Manager TechOps:**
> "Escribíamos specs ambiciosas sin saber si eran técnicamente factibles. El equipo dev descubría imposibilidades después de validación. Era frustrante para todos."

---

### Después De IA: Análisis Del Código Antes De La Spec

**Workflow con IA:**

1. **PM describe objetivo:** "Quiero permitir export de métricas hacia Prometheus y Grafana."

2. **IA analiza código:**

```
Análisis: app/services/metrics_exporter.rb

Arquitectura detectada:
- Export CSV únicamente
- Sin abstracción para multi-formato
- Métricas almacenadas en time series en PostgreSQL

Restricción:
Prometheus y Grafana JSON requieren:
- Conversión time series → formato específico
- Gestión labels y metadata
- Refactorización del servicio de export

Enfoques posibles:

Opción 1 (Rápido):
- Usar gem `prometheus-client` para export Prometheus
- Implementar Grafana JSON manualmente (formato simple)
- Mantener export CSV existente
- Tiempo: 1 semana

Opción 2 (Completo):
- Refactorizar `MetricsExporter` en sistema de formatters
- Implementar Prometheus, Grafana JSON, CSV como formatters
- Arquitectura extensible para futuros formatos
- Tiempo: 3 semanas
```

3. **IA genera spec:**

```markdown
# Capability: Export Multi-Formato (Prometheus, Grafana JSON, CSV)

**Objetivo:**
Permitir export métricas hacia Prometheus y Grafana.

**Restricción técnica:**
Export actual = CSV únicamente. Refactorización necesaria.

**Enfoque recomendado (Opción 1 - MVP):**
- Export Prometheus via gem `prometheus-client`
- Export Grafana JSON (formato simple)
- Conservar export CSV existente
- Tiempo: 1 semana

**Issues:**
- [EXPORT-201] Implementar export Prometheus
- [EXPORT-202] Implementar export Grafana JSON
- [EXPORT-203] UI selección formato export
- [EXPORT-204] Tests formatos (Prometheus, Grafana, CSV)

**Enfoque futuro (Opción 2 - Arquitectura extensible):**
Refactorizar en sistema de formatters para facilitar añadir nuevos formatos.
Planificado para release Q2.
```

4. **PM valida spec** ("OK, MVP en 1 semana, versión completa después")

5. **Dev confirma estimación** ("1 semana confirmada")

**Tiempo total:** 30 minutos (en lugar de 2 semanas de idas y venidas).

---

**Resultados (Después De 6 Meses):**

**Métrica 1: Tiempo de análisis técnico**
- **Antes:** 2 semanas idas y venidas PM ↔ Dev para entender restricciones
- **Después:** 30 minutos (IA analiza código automáticamente)

**Métrica 2: Specs irrealistas**
- **Antes:** 40% de specs requerían refactorizaciones no anticipadas
- **Después:** 5% (IA detecta restricciones técnicas por adelantado)

**Métrica 3: Satisfacción equipo dev**
- **Antes:** Frustración constante ("Los PMs escriben specs imposibles")
- **Después:** Colaboración fluida ("Las specs son realistas")

**Métrica 4: Time-to-market**
- **Antes:** Releases retrasados 30% en promedio (sorpresas técnicas)
- **Después:** 95% de releases entregados a tiempo

**Cita de Lead Developer TechOps:**
> "Antes, perdíamos 2 semanas por spec explicando por qué era imposible. Ahora la IA analiza código en 5 minutos y genera una spec realista. Pasamos directamente a implementación."

**Cita de Product Manager TechOps:**
> "No sé programar. Pero con IA, puedo escribir specs técnicas realistas. La IA analiza código, me dice qué es factible, y yo elijo el enfoque. Es revolucionario."

<img src="/assets/images/blog/2026-01-23-techops-before-after.svg" alt="TechOps: Antes vs Después IA" width="800" height="450" loading="lazy">

---

## Dominar La IA, Nunca Ser Pasivo

**Principio fundamental:**

La IA es un **asistente**, no un **decisor**.

### Lo Que La IA Hace Bien

✅ **Analizar 200,000 líneas de código en minutos**
- Identificar arquitectura actual
- Detectar restricciones técnicas
- Mapear dependencias

✅ **Generar specs realistas basadas en código**
- Proponer múltiples enfoques (rápido vs completo)
- Estimar complejidad según estructura existente
- Identificar impactos (qué archivos modificar)

✅ **Ahorrar tiempo en análisis técnico**
- 2 semanas idas y venidas → 30 minutos
- No necesitas leer código manualmente
- Detección automática de restricciones ocultas

### Lo Que La IA No Puede Hacer (Y No Debe Hacer)

❌ **Tomar decisiones de negocio por ti**
- Elegir entre MVP rápido o versión completa
- Definir prioridades de negocio
- Decidir trade-offs (tiempo vs funcionalidades)

❌ **Escribir código sin supervisión**
- La IA puede generar código, pero humano debe validar
- Riesgos: bugs, fallas de seguridad, código no mantenible
- Principio: IA propone, humano valida y ajusta

❌ **Entender contexto de negocio completo**
- IA analiza código, no restricciones de negocio
- Ejemplo: "Debemos entregar en 2 semanas para cliente prioritario"
- Solo humano conoce estas restricciones

### Reglas De Oro Para Dominar La IA

#### Regla 1: Siempre Validar Análisis Técnico

**Nunca aceptar ciegamente conclusiones de la IA.**

**Workflow:**
1. IA analiza código y genera spec
2. **Dev valida análisis técnico** ("¿La IA entendió correctamente la arquitectura?")
3. Si validación ✅ → continuar
4. Si error ❌ → corregir análisis IA

**Ejemplo:**

IA dice: "Tu sistema ya soporta MFA via Devise."

Dev verifica: "No, Devise está configurado en modo básico. Sin MFA."

**Corrección necesaria.**

---

#### Regla 2: El Humano Elige El Enfoque

**La IA propone múltiples opciones. El humano decide.**

**Ejemplo:**

IA propone:
- Opción 1: MVP rápido (1 semana)
- Opción 2: Versión completa (4 semanas)

**PM decide:** "Haremos Opción 1 ahora, Opción 2 en próximo release."

**La IA no elige. Tú eliges.**

---

#### Regla 3: Nunca Código En Producción Sin Revisión Humana

**Si la IA genera código, humano debe revisarlo.**

**Riesgos del código IA no revisado:**
- Bugs sutiles
- Fallas de seguridad (inyección, XSS, etc.)
- Código no mantenible
- No respeto de convenciones del equipo

**Regla:** IA acelera. Humano garantiza calidad.

---

#### Regla 4: Supervisar, No Sufrir

**Tú dominas la IA. La IA no te domina.**

**Mindset incorrecto:**
> "La IA dijo que hay que refactorizar. Así que refactorizamos."

**Mindset correcto:**
> "La IA identificó que refactorización sería necesaria para esta feature. Analicemos si es prioritario. Quizás un MVP sin refactorización sea suficiente."

**El humano mantiene control estratégico.**

<img src="/assets/images/blog/2026-01-23-maitriser-ia.svg" alt="Dominar la IA, no ser pasivo" width="800" height="400" loading="lazy">

---

## Sinra Integra IA Para Facilitar La Creación De Specs

**En Sinra, estamos integrando IA para asistir a PO/PM/Dev en la creación de especificaciones realistas.**

### Objetivo: Specs Alineadas Con Código Real

**El Concepto:**

Cuando creas una capability o issue en Sinra, la IA puede:
1. **Analizar tu codebase** (arquitectura, restricciones, dependencias)
2. **Generar spec realista** (alineada con existente)
3. **Proponer múltiples enfoques** (MVP vs completo)
4. **Identificar impactos** (qué archivos modificar, qué dependencias verificar)

**Resultado:** Specs técnicas realistas, incluso si no sabes programar.

---

### Funcionalidades IA En Integración

#### Funcionalidad 1: Análisis Automático Del Código Para Capabilities

**Use Case:**

Creas una capability "Añadir export Prometheus".

**La IA:**
1. Analiza tu código de export actual
2. Detecta restricciones ("Export CSV únicamente, refactorización necesaria")
3. Genera spec con enfoques posibles (rápido vs completo)

**Tú validas y ajustas.**

---

#### Funcionalidad 2: Generación De Issues Técnicas A Partir De Capability

**Use Case:**

Tienes una capability "Autenticación Multi-Factor".

**La IA:**
1. Analiza código de autenticación actual
2. Genera issues técnicas necesarias:
   - [AUTH-101] Refactorizar sistema autenticación para providers múltiples
   - [AUTH-102] Implementar provider TOTP
   - [AUTH-103] Implementar provider SMS
   - [AUTH-104] UI ajustes MFA
   - [AUTH-105] Tests seguridad

**Tú validas y asignas.**

---

#### Funcionalidad 3: Detección De Impactos Y Dependencias

**Use Case:**

Modificas módulo "Pagos".

**La IA:**
1. Detecta todas partes del código que dependen del módulo Pagos
2. Identifica impactos potenciales ("Modificar este servicio impacta 12 archivos")
3. Genera issues para gestionar impactos

**Evitas regresiones.**

---

### Supervisión Humana Siempre Presente

**IMPORTANTE:** La IA Sinra **asiste**. Tú **decides**.

**Workflow Sinra con IA:**

1. **Tú creas capability** ("Export Prometheus")
2. **IA analiza código** (detecta restricciones técnicas)
3. **IA genera spec** (con opciones y estimaciones)
4. **Tú lees y validas** ("OK, elijo Opción 1")
5. **Dev revisa análisis técnico** ("Correcto")
6. **Tú creas issues** (manualmente o via IA)
7. **Equipo implementa** (código revisado por humanos)

**IA acelera. Tú dominas.**

**Cita de Product Manager:**
> "Sinra + IA es como tener un desarrollador que analiza código por mí y me dice qué es factible. Pero permanezco maestro de mis decisiones."

---

## Los Cinco Signos De Que Tus Specs Están Desconectadas Del Código

### Signo 1: Los Devs Dicen A Menudo "Es Imposible"

Si equipo dev responde frecuentemente "Es técnicamente imposible con nuestra arquitectura", tus specs ignoran código real.

---

### Signo 2: Estimaciones Sistemáticamente Duplicadas

Si tus estimaciones iniciales son siempre duplicadas después de análisis técnico, tus specs subestiman complejidad.

---

### Signo 3: Descubrimiento De Refactorizaciones Después De Validación

Si descubres necesidades de refactorización después de validar spec, analizas demasiado tarde.

---

### Signo 4: Idas Y Venidas PM ↔ Dev Interminables

Si pasas 2 semanas discutiendo factibilidad técnica, careces de análisis automatizado.

---

### Signo 5: Releases Retrasados Por "Sorpresas Técnicas"

Si tus releases son retrasados por restricciones técnicas no anticipadas, tus specs están desconectadas del código.

---

## Puntos De Acción: Generar Specs Realistas Via IA

1. **Identifica una capability a especificar.** Elige una funcionalidad compleja.
2. **Pide a la IA analizar código relacionado.** (Con Sinra o asistente IA de tu elección)
3. **Lee análisis técnico generado.** Verifica con dev que es correcto.
4. **Elige enfoque.** ¿MVP rápido o versión completa? Tú decides.
5. **Genera issues técnicas.** Manualmente o via IA.
6. **Implementa con supervisión humana.** Código revisado por equipo.

---

## El Punto Clave

**Las specs desconectadas del código generan frustración, retrasos y desperdicio.**

Entre **specs imposibles**, **subestimaciones**, **refactorizaciones sorpresa** e **idas y venidas interminables**, PO/PM y Dev no hablan el mismo lenguaje técnico.

**La IA analiza código fuente para generar specs realistas alineadas con arquitectura existente.**

**El resultado:**
- ✅ Análisis automático del código (arquitectura, restricciones, dependencias)
- ✅ Specs realistas (sin promesas imposibles)
- ✅ Trade-offs explícitos (rápido vs completo)
- ✅ Supervisión humana (tú dominas IA, nunca pasivo)
- ✅ Ahorro de tiempo (2 semanas → 30 minutos)

**Sinra integra IA para facilitar creación de specs técnicas realistas.**

**Con supervisión humana. Siempre.**

**Dominar la IA y nunca ser pasivo ante ella.**

---

## Descubre también la serie "Problemas Invisibles"

- **[Documentación Muerta](/documentation/2025/12/24/documentation-morte-notion-confluence.html)** - 127 páginas Confluence obsoletas: cómo hacer documentación viva
- **[Glossario Viviente](/documentation/2026/01/17/glossaire-vivant-mentions-pages-sinra.html)** - Glossarios muertos en Notion: cómo usar @pages para vocabulario unificado
- **[QA Invisible](/qa/2025/12/22/qa-invisible-tests-disperses.html)** - 847 tests en Excel: cómo hacer QA visible con Sinra Testings
- **[Caos Del Backlog](/planning/2025/12/26/chaos-backlog-personne-sait-q2.html)** - 537 issues caóticas: cómo organizar trabajo por releases y cycles

---

**¿Listo para crear specs realistas con IA?** [Descubre Sinra →](https://app.sinra.dev/users/sign_up)

Descubre gestión de proyectos donde tus especificaciones están alineadas con tu código, no desconectadas de la realidad.
