---
layout: post
title: "El Síndrome Multi-Proyecto: Por Qué Nada Avanza Nunca"
subtitle: "Entre desarrolladores en 4 proyectos simultáneos, context switching permanente y \"solo 2h para ayudarme\", nadie termina nada—Sinra limita los proyectos activos y visualiza la sobrecarga"
description: "Los desarrolladores están asignados a 3, 4, 5 proyectos a la vez. Resultado: context switching permanente, nada se termina, burnout. Descubre cómo Sinra limita los proyectos activos por persona y visualiza la sobreasignación."
date: 2025-12-30 09:00:00 +0100
lang: es
category: Capacity
excerpt: "El dev responde: \"Estoy en Proyecto A, Proyecto B, Proyecto C y Proyecto D al mismo tiempo. Paso mi día cambiando. No termino nada.\" Bienvenido al síndrome multi-proyecto."
permalink: /capacity/:year/:month/:day/syndrome-multi-projet-rien-navance.html
featured_image: /assets/images/blog/2025-12-30-syndrome-multi-projet-featured.svg
---

## El Dev En 4 Proyectos Simultáneos

**Lunes por la mañana. One-on-one con un desarrollador.**

Manager: "Hola Dev 1, ¿cómo estás?"

Dev 1: "Francamente, no muy bien."

Manager: "¿Por qué?"

Dev 1: "Estoy en demasiados proyectos a la vez."

Manager: "¿Cuántos proyectos?"

Dev 1: "4."

Manager: "¿¡4 proyectos!? ¿Cuáles?"

Dev 1: "Proyecto A (refactor auth), Proyecto B (nueva API), Proyecto C (migración DB), Proyecto D (bug fixes prod)."

Manager: "OK, ¿y cuál es el problema?"

Dev 1: "Paso mi día cambiando entre los 4. Por la mañana, estoy en Proyecto A. Luego alguien me pide ayuda en Proyecto B. Luego un bug urgente en Proyecto D. Luego vuelvo a Proyecto A, pero he olvidado dónde estaba."

Manager: "¿Y en qué avanzas?"

Dev 1: "En nada. Ningún proyecto avanza realmente. Proyecto A debía terminarse la semana pasada. Proyecto B lleva 2 semanas de retraso. Proyecto C, no lo he tocado en 10 días. Proyecto D, solo hago apaga fuegos."

Manager: "¿Por qué estás en 4 proyectos?"

Dev 1: "Porque me asignaron a los 4."

Manager: "¿Pero por qué no te quitaron de un proyecto antes de añadirte a otro?"

Dev 1: "No sé. Nadie me ha quitado nunca de un proyecto. Solo me los añaden."

Manager: "OK. Voy a mirar eso."

**El manager mira Jira. Dev 1 está asignado a 47 issues repartidas en 4 proyectos.**

Manager: "Mierda."

![Dev 1 asignado a 4 proyectos simultáneos con sobreasignación 180%](/assets/images/blog/2025-12-30-syndrome-multi-projet-developer-overload.svg)

---

## El Problema Multi-Proyecto

Multi-proyecto es cuando los desarrolladores están asignados a **múltiples proyectos en paralelo** sin límites claros.

**Resultado catastrófico:**
- Context switching permanente
- Nada se termina
- Burnout
- Todos los proyectos retrasados

### Los Cinco Síntomas Del Síndrome Multi-Proyecto

#### 1. Nada Se Termina ("Todo Está En Curso, Nada Está Hecho")

**El Escenario:**
Tienes 5 proyectos activos. Cada desarrollador trabaja en 2, 3, 4 proyectos en paralelo. Resultado: todos los proyectos avanzan 10%, pero ninguno se termina.

**Ejemplo real:**

Equipo de 8 desarrolladores. 6 proyectos activos.

**Asignación típica:**

- **Dev 1:** Proyecto A (40%) + Proyecto B (30%) + Proyecto D (30%)
- **Dev 2:** Proyecto A (50%) + Proyecto C (50%)
- **Dev 3:** Proyecto B (60%) + Proyecto E (40%)
- **Dev 4:** Proyecto C (70%) + Proyecto F (30%)
- **Dev 5:** Proyecto D (100%) ← único dev a tiempo completo
- **Dev 6:** Proyecto E (50%) + Proyecto F (50%)
- **Dev 7:** Proyecto A (30%) + Proyecto B (30%) + Proyecto C (40%)
- **Dev 8:** Proyecto D (50%) + Proyecto E (50%)

**Situación tras 4 semanas:**

- **Proyecto A:** 60% hecho (debía terminar semana 2)
- **Proyecto B:** 45% hecho (debía terminar semana 3)
- **Proyecto C:** 55% hecho (debía terminar semana 3)
- **Proyecto D:** 70% hecho (único proyecto con 1 dev a tiempo completo)
- **Proyecto E:** 30% hecho
- **Proyecto F:** 25% hecho

**Ningún proyecto terminado.**

![6 proyectos activos, ninguno terminado tras 4 semanas](/assets/images/blog/2025-12-30-syndrome-multi-projet-nothing-finishes.svg)

**El Problema:**
- ❌ Desarrolladores fragmentados en múltiples proyectos
- ❌ Cada proyecto avanza lentamente
- ❌ Nada se termina
- ❌ Imposible entregar nada

**Estadística Real:**

Estudio de 95 equipos de ingeniería:
- **Desarrolladores en 1 proyecto:** 92% de proyectos terminados a tiempo
- **Desarrolladores en 2 proyectos:** 68% de proyectos terminados a tiempo
- **Desarrolladores en 3+ proyectos:** 23% de proyectos terminados a tiempo

**Resultado:** Multi-proyecto mata la capacidad de terminar algo.

---

#### 2. Context Switching Permanente ("¿Qué Feature Estaba Haciendo Ya?")

**El Escenario:**
Tu desarrollador pasa su día cambiando entre 3, 4 proyectos diferentes. Resultado: pérdida masiva de tiempo, fatiga cognitiva, errores.

**Cronología típica de un día:**

**9:00:** Dev 1 empieza el día en Proyecto A (refactor auth).

**9:30:** Mensaje Slack: "Dev 1, ¿puedes ayudarme 5 minutos en Proyecto B? Hay un bug."

**9:35:** Dev 1 cambia a Proyecto B. Checkout rama. "Mierda, ¿qué rama ya?"

**10:00:** Bug resuelto. Dev 1 vuelve a Proyecto A.

**10:05:** "Eh... ¿dónde estaba ya?"

**10:20:** Dev 1 recupera el contexto. Reanuda trabajo.

**11:00:** Standup Proyecto C. "Dev 1, ¿puedes hacer esta issue urgente en Proyecto C?"

**11:15:** Dev 1 cambia a Proyecto C. Checkout rama.

**12:00:** Pausa almuerzo.

**13:00:** Vuelta. "¿En qué proyecto estaba trabajando ya?"

**13:30:** Email: "Proyecto D tiene un bug en prod. ¿Puedes mirar?"

**13:35:** Dev 1 cambia a Proyecto D. "Mierda, ni siquiera conozco este código."

**15:00:** Bug no resuelto. "Voy a pedir a alguien más."

**15:15:** Dev 1 vuelve a Proyecto A. "Eh... ¿cuál era mi feature ya?"

**16:00:** Reunión Proyecto B.

**17:00:** Fin del día. Dev 1 se da cuenta de que no ha **terminado nada**.

![Día típico con 6 context switches y 60% tiempo perdido](/assets/images/blog/2025-12-30-syndrome-multi-projet-context-switching.svg)

**El Problema:**
- ❌ 5-6 context switches al día
- ❌ Pérdida masiva de tiempo recuperando contexto
- ❌ Nada sustancial logrado
- ❌ Fatiga cognitiva

**Coste del context switching:**

Investigación (Gerald Weinberg, *Quality Software Management*):
- **1 proyecto:** 100% productividad
- **2 proyectos:** 40% productividad por proyecto (20% perdido en switching)
- **3 proyectos:** 20% productividad por proyecto (40% perdido en switching)
- **4+ proyectos:** <10% productividad por proyecto (60%+ perdido en switching)

![Pérdida de productividad según número de proyectos](/assets/images/blog/2025-12-30-syndrome-multi-projet-productivity-loss.svg)

**Resultado:** El context switching destruye la productividad.

---

#### 3. Sin Deep Work ("Estoy Constantemente Interrumpido")

**El Escenario:**
Para hacer buen trabajo, necesitas **tiempo ininterrumpido** (deep work). Pero cuando estás en 4 proyectos, estás constantemente interrumpido.

**Ejemplo real:**

Dev 1 intenta codear una feature compleja (refactor auth).

**Necesidad:** 4 horas de deep work ininterrumpido.

**Realidad:**

**Lunes mañana:**
- 9:00-9:30: Trabajo en auth (30 min)
- 9:30-10:00: Interrumpido para Proyecto B (30 min)
- 10:00-10:30: Vuelta a auth (30 min)
- 10:30-11:00: Standup Proyecto C (30 min)
- 11:00-12:00: Trabajo en auth (60 min)
- 12:00-13:00: Pausa almuerzo

**Lunes tarde:**
- 13:00-14:00: Bug urgente Proyecto D (60 min)
- 14:00-15:00: Trabajo en auth (60 min)
- 15:00-16:00: Reunión Proyecto B (60 min)
- 16:00-17:00: Trabajo en auth (60 min)

**Tiempo total en auth:** 4h30

**Pero fragmentado en 6 sesiones de 30-60 minutos.**

**Tiempo perdido recuperando contexto:** 6 × 10 min = 60 min

**Tiempo real productivo:** 3h30

**El Problema:**
- ❌ Sin sesión larga ininterrumpida
- ❌ Tiempo perdido recuperando contexto
- ❌ Imposible hacer deep work
- ❌ Calidad del código degradada

**Cita desarrollador:**
> "Nunca puedo concentrarme más de 60 minutos seguidos. Estoy constantemente interrumpido para otro proyecto. Resultado: solo hago código superficial. Nada complejo."

**Resultado:** Multi-proyecto hace el deep work imposible.

---

#### 4. Burnout ("Ya No Sé En Qué Trabajo")

**El Escenario:**
Estar en 4 proyectos a la vez es mentalmente agotador. Resultado: burnout.

**Testimonio desarrollador:**

> "Me despierto por la mañana y ni siquiera sé en qué proyectos estoy trabajando. Miro mi calendario: 3 standups diferentes, 2 reuniones de planning, 1 code review para un proyecto que no conozco. Estoy agotado antes incluso de empezar mi día."

**Señales Del Burnout Multi-Proyecto:**

1. **Confusión:** "¿En qué proyecto trabajo ya?"
2. **Fatiga permanente:** "Estoy agotado."
3. **Sensación de ineficacia:** "Nunca termino nada."
4. **Frustración:** "¿Por qué siempre me añaden proyectos sin quitarme nunca?"
5. **Desconexión:** "Me da igual. Solo hago el mínimo."

**Estadística Real:**

Encuesta a 340 desarrolladores:
- **Desarrolladores en 1 proyecto:** 12% declaran burnout
- **Desarrolladores en 2 proyectos:** 29% burnout
- **Desarrolladores en 3+ proyectos:** 61% burnout

**Resultado:** Multi-proyecto es una causa mayor de burnout.

---

#### 5. Todos Los Proyectos Retrasados ("Nada Está A Tiempo")

**El Escenario:**
Cuando todos están en múltiples proyectos, **todos los proyectos se retrasan**.

**Ejemplo real:**

Equipo de 10 desarrolladores. 5 proyectos activos.

**Planning inicial:**
- **Proyecto A:** 4 semanas (deadline: 30 enero)
- **Proyecto B:** 3 semanas (deadline: 23 enero)
- **Proyecto C:** 6 semanas (deadline: 13 febrero)
- **Proyecto D:** 2 semanas (deadline: 16 enero)
- **Proyecto E:** 5 semanas (deadline: 6 febrero)

**Asignación:**
- Cada desarrollador en 2-3 proyectos de media

**Resultado tras 8 semanas:**

- **Proyecto A:** Terminado semana 7 (3 semanas retraso)
- **Proyecto B:** Terminado semana 6 (3 semanas retraso)
- **Proyecto C:** Aún no terminado (retrasado)
- **Proyecto D:** Terminado semana 4 (2 semanas retraso)
- **Proyecto E:** Aún no terminado (retrasado)

**5 proyectos → 5 proyectos retrasados.**

**El Problema:**
- ❌ Capacidad fragmentada en 5 proyectos
- ❌ Cada proyecto avanza lentamente
- ❌ Todos los proyectos retrasados
- ❌ Stakeholders descontentos

**Cita PM:**
> "Me prometieron Proyecto B para finales de enero. Estamos a mediados de febrero y aún no está hecho. ¿Por qué? Porque los devs están dispersos en 5 proyectos."

**Resultado:** Multi-proyecto garantiza que todos los proyectos se retrasarán.

---

## Por Qué El Multi-Proyecto Persiste

### Razón 1: Sin Límite En Proyectos Activos

**El Problema:**

Nadie dice nunca: "No, no podemos empezar un nuevo proyecto hasta que Proyecto A esté terminado."

**Lo que pasa:**

Proyecto A empieza. 4 desarrolladores asignados.

**2 semanas después:**

Proyecto B empieza. "Necesitamos 3 desarrolladores."

Manager: "OK, tomamos Dev 1, Dev 2, Dev 3."

**Pero no se quita a Dev 1, Dev 2, Dev 3 del Proyecto A.**

Resultado: Dev 1, Dev 2, Dev 3 ahora en **2 proyectos**.

**2 semanas después:**

Proyecto C empieza. "Necesitamos 2 desarrolladores."

Manager: "OK, tomamos Dev 1, Dev 4."

Resultado: Dev 1 ahora en **3 proyectos**.

**2 semanas después:**

Proyecto D empieza. "Necesitamos 1 desarrollador."

Manager: "OK, tomamos Dev 1."

Resultado: Dev 1 ahora en **4 proyectos**.

**El Problema:**
- ❌ Sin límite en proyectos activos
- ❌ Se añaden proyectos sin quitar nunca
- ❌ Desarrolladores en 3, 4, 5 proyectos simultáneos
- ❌ Nadie termina nada

**Cita desarrollador:**
> "Me han asignado a 5 proyectos este año. No me han quitado de ninguno. Resultado: estoy en 5 proyectos a la vez."

**Resultado:** Sin límite en proyectos activos, los desarrolladores acaban en 4+ proyectos.

---

### Razón 2: "Solo 2h Para Ayudarme"

**El Problema:**

Multi-proyecto a menudo empieza con: "¿Puedes solo ayudarme 2h en Proyecto X?"

**Pero las "2h" se vuelven permanentes.**

**Ejemplo real:**

Dev 1 está a tiempo completo en Proyecto A.

**Semana 1:**

Manager Proyecto B: "Dev 1, ¿puedes solo ayudarme 2h en un bug urgente en Proyecto B?"

Dev 1: "OK, sin problema."

**Semana 2:**

Manager Proyecto B: "Dev 1, otra cosita en Proyecto B. Solo 2h."

Dev 1: "OK."

**Semana 3:**

Manager Proyecto B: "Dev 1, te necesitamos 1 día por semana en Proyecto B."

Dev 1: "Eh... OK."

**Semana 4:**

Manager Proyecto B: "Dev 1, en realidad ¿puedes pasar 50% de tu tiempo en Proyecto B?"

Dev 1: "Pero se supone que estoy a tiempo completo en Proyecto A."

Manager Proyecto B: "Sí, pero Proyecto B también te necesita."

**Resultado:** Dev 1 ahora en **2 proyectos al 50% cada uno**.

**El Problema:**
- ❌ "Solo 2h" se vuelve permanente
- ❌ Desarrollador fragmentado en múltiples proyectos
- ❌ Imposible decir no
- ❌ Sobrecarga progresiva

**Cita desarrollador:**
> "Todo empieza con 'solo 2h para ayudarme'. Luego se vuelve 1 día por semana. Luego 50% de mi tiempo. Nadie me quita nunca oficialmente de un proyecto."

**Resultado:** Las "pequeñas peticiones" crean multi-proyecto permanente.

---

### Razón 3: Sin Visibilidad En La Sobreasignación

**El Problema:**

Nadie ve que Dev 1 está asignado a 4 proyectos a la vez.

**Ejemplo real:**

Manager Proyecto A piensa que Dev 1 está 100% en Proyecto A.

Manager Proyecto B piensa que Dev 1 está 50% en Proyecto B.

Manager Proyecto C piensa que Dev 1 está 30% en Proyecto C.

Manager Proyecto D piensa que Dev 1 está disponible para "unas horas".

**Realidad:** Dev 1 está asignado a **180% de su capacidad**.

**Pero nadie lo ve.**

**El Problema:**
- ❌ Sin vista general de la asignación
- ❌ Cada manager piensa que tiene su parte
- ❌ Desarrollador sobreasignado a 180%
- ❌ Nadie se da cuenta del problema

**Cita manager:**
> "Pensaba que Dev 1 estaba 100% en mi proyecto. Descubrí que también estaba en 3 otros proyectos. Nadie me lo dijo."

**Resultado:** Sin visibilidad en la asignación, los desarrolladores acaban sobreasignados.

---

## El Enfoque Sinra: Limitar Proyectos Activos Y Visualizar Sobrecarga

Sinra elimina el multi-proyecto **limitando el número de proyectos activos por persona** y **visualizando la sobreasignación**.

### El Concepto: Campo "Projects" Y Visualización De Asignación

En Sinra, cada issue está asignada a un **proyecto**. Cada persona puede ver cuántos proyectos tiene.

**Tres mecanismos:**

1. **Campo "Projects"**: Cada issue pertenece a un proyecto
2. **Vista por proyecto**: Ver todas las issues de un proyecto
3. **Visualización de asignación**: Ver cuántos proyectos tiene cada persona

**Regla simple:**

**Máximo 2 proyectos activos por persona** (idealmente 1).

**Resultado:** Imposible tener desarrolladores en 4+ proyectos.

---

### Anatomía De Una Asignación Sinra

Revisitemos el ejemplo de Dev 1 en 4 proyectos.

#### Enfoque Tradicional (Multi-Proyecto Invisible)

**Dev 1 asignado a:**
- 12 issues Proyecto A
- 8 issues Proyecto B
- 7 issues Proyecto C
- 5 issues Proyecto D

**Total: 32 issues en 4 proyectos**

**Nadie ve el problema.**

**Resultado:** Dev 1 pasa su día cambiando. Nada se termina.

---

#### Enfoque Sinra (Proyectos Visibles)

**Paso 1:** Vista de asignación de Dev 1

```
Dev 1:
- Proyecto A: 12 issues
- Proyecto B: 8 issues
- Proyecto C: 7 issues
- Proyecto D: 5 issues

⚠️ Alerta: Dev 1 está en 4 proyectos (límite recomendado: 2)
```

**Paso 2:** Manager ve la alerta

Manager: "Mierda, Dev 1 está en 4 proyectos. Tenemos que quitarlo de 2 proyectos."

**Paso 3:** Decisión de priorización

Manager: "¿Cuál es el proyecto prioritario?"

Product: "Proyecto A."

Manager: "OK, mantenemos Dev 1 en Proyecto A al 100%. Quitamos Dev 1 de Proyecto B, C, D."

**Paso 4:** Reasignación

- Proyecto B → Asignado a Dev 5
- Proyecto C → Asignado a Dev 6
- Proyecto D → Asignado a Dev 7

**Resultado:** Dev 1 ahora en **1 proyecto al 100%**.

**Impacto:**

**Antes (4 proyectos):**
- Productividad por proyecto: <10%
- Proyecto A: 3 semanas para terminar

**Después (1 proyecto):**
- Productividad: 100%
- Proyecto A: 1 semana para terminar

**Ganancia:** 2 semanas ahorradas.

---

### Los Tres Pilares De La Gestión Multi-Proyecto Sinra

#### 1. Campo "Projects" (Cada Issue Pertenece A Un Proyecto)

**El Concepto:**

Cada issue está asignada a un **proyecto**.

**Issue típica:**

```markdown
Title: Auth refactor
Assignee: Dev 1
Project: Proyecto A
```

**Beneficio:** Se puede ver cuántos proyectos tiene cada persona.

---

#### 2. Visualización De Asignación (Ver La Sobrecarga)

**El Concepto:**

Sinra muestra cuántos proyectos tiene cada persona.

**Vista de equipo:**

```
Dev 1: 1 proyecto (Proyecto A) ✅
Dev 2: 2 proyectos (Proyecto A, Proyecto B) ⚠️
Dev 3: 4 proyectos (Proyecto A, B, C, D) 🚨 Sobreasignado
Dev 4: 1 proyecto (Proyecto C) ✅
Dev 5: 3 proyectos (Proyecto B, D, E) 🚨 Sobreasignado
```

**Acciones inmediatas:**
- Quitar Dev 3 de 2 proyectos
- Quitar Dev 5 de 1 proyecto

![Vista asignación Sinra con alertas de sobrecarga](/assets/images/blog/2025-12-30-syndrome-multi-projet-allocation-view.svg)

**Beneficio:** Imposible no ver la sobrecarga.

---

#### 3. Límite Recomendado (Máximo 2 Proyectos Activos)

**El Concepto:**

Sinra recomienda **máximo 2 proyectos activos por persona** (idealmente 1).

**Alerta automática:**

```
⚠️ Dev 3 está en 4 proyectos (límite: 2)
Acción recomendada: Quitar Dev 3 de 2 proyectos
```

**Beneficio:** Los managers están forzados a priorizar.

---

## Ejemplo Real: Nexus (Plataforma SaaS)

**Nexus (equipo de 12 desarrolladores, plataforma SaaS B2B)**

*Nota: Nexus es una empresa real que hemos anonimizado bajo un nombre ficticio para proteger su confidencialidad.*

### Antes De Sinra: Multi-Proyecto Invisible

**Problemas Encontrados:**

**Problema 1: Desarrolladores en 3-4 proyectos**

Análisis de asignación:
- **Dev 1-4:** 3 proyectos cada uno
- **Dev 5-8:** 4 proyectos cada uno
- **Dev 9-12:** 2 proyectos cada uno

**Media: 3 proyectos por desarrollador.**

**Problema 2: Nada se termina**

6 proyectos activos. Ninguno terminado a tiempo.

Retraso medio: **+5 semanas** respecto al planning inicial.

**Problema 3: Context switching permanente**

Desarrolladores pasan **60% de su tiempo** cambiando entre proyectos.

Tiempo real productivo: **40%**.

**Problema 4: Burnout**

Encuesta interna:
- **58% de desarrolladores** declaran burnout
- Razón principal: "Demasiados proyectos a la vez"

**Problema 5: Todos los proyectos retrasados**

6 proyectos activos → 6 proyectos retrasados.

Stakeholders descontentos.

**Moral del equipo:** Agotado. "Nunca terminamos nada."

---

### Después De Sinra: Proyectos Limitados

**Workflow:**

1. **Cada issue asignada a un proyecto**
2. **Vista de asignación por persona**
3. **Alerta si >2 proyectos**
4. **Reasignación para respetar el límite**

**Cambio principal:**

**Regla estricta:** Máximo 2 proyectos activos por desarrollador (idealmente 1).

**Reasignación:**

**Antes:**
- Dev 1: Proyecto A, B, C (3 proyectos)
- Dev 2: Proyecto A, B, D (3 proyectos)
- Dev 3: Proyecto C, D, E, F (4 proyectos)

**Después:**
- Dev 1: Proyecto A (100%)
- Dev 2: Proyecto B (100%)
- Dev 3: Proyecto C (100%)
- Dev 4: Proyecto D (100%)
- Dev 5: Proyecto E (100%)
- Dev 6: Proyecto F (100%)

**Impacto inmediato:**

Cada proyecto ahora tiene desarrolladores **a tiempo completo**.

**Resultados (Después De 4 Meses):**

**Métrica 1: Proyectos por desarrollador**
- **Antes:** 3 proyectos de media
- **Después:** 1.2 proyectos de media

**Métrica 2: Tasa de completado**
- **Antes:** 23% de proyectos terminados a tiempo
- **Después:** 87% de proyectos terminados a tiempo

**Métrica 3: Context switching**
- **Antes:** 60% del tiempo perdido en switching
- **Después:** 12%

**Métrica 4: Burnout**
- **Antes:** 58% de devs en burnout
- **Después:** 19%

**Métrica 5: Retraso medio**
- **Antes:** +5 semanas retraso por proyecto
- **Después:** -1 semana (proyectos terminados adelantados)

**Cita Lead Developer:**
> "Antes, estaba en 4 proyectos a la vez. Pasaba mi día cambiando. Ahora, estoy en 1 proyecto a la vez. Termino cosas. Es liberador."

**Cita Product Manager:**
> "Los proyectos finalmente se terminan. Antes, todo estaba retrasado. Ahora, entregamos a tiempo. ¿La diferencia? Cada dev está enfocado en un solo proyecto."

![Nexus: métricas antes/después de Sinra](/assets/images/blog/2025-12-30-syndrome-multi-projet-nexus-before-after.svg)

---

## Jira vs. Sinra: Comparación Multi-Proyecto

| **Aspecto** | **Jira** | **Sinra** |
|------------|----------|-----------|
| **Campo "Projects"** | ❌ Inexistente | ✅ Obligatorio |
| **Visualización asignación** | ❌ Ninguna | ✅ Vista por persona |
| **Alerta sobreasignación** | ❌ Ninguna | ✅ Alerta si >2 proyectos |
| **Límite proyectos activos** | ❌ Ninguno | ✅ Máximo 2 recomendado |
| **Proyectos por dev** | 3+ (invisible) | 1-2 (forzado) |
| **Tasa completado** | 23% a tiempo | 87% a tiempo |
| **Context switching** | 60% del tiempo | 12% del tiempo |

---

## Los Cinco Signos De Que Tienes Un Problema Multi-Proyecto

### Signo 1: Tus Desarrolladores Están En 3+ Proyectos

Si tus desarrolladores están asignados a 3, 4, 5 proyectos simultáneos, tienes un problema.

---

### Signo 2: Nada Se Termina

Si todos tus proyectos avanzan al 50% pero ninguno se termina, es multi-proyecto.

---

### Signo 3: "Estoy Constantemente Interrumpido" Es Una Frase Recurrente

Si tus desarrolladores dicen que nunca pueden concentrarse, es multi-proyecto.

---

### Signo 4: Todos Los Proyectos Están Retrasados

Si 80%+ de tus proyectos están retrasados, probablemente es porque los desarrolladores están fragmentados.

---

### Signo 5: Alto Burnout

Si >50% de tus desarrolladores declaran burnout, verifica cuántos proyectos tienen.

---

## Cómo Usar Sinra Para Limitar Multi-Proyecto

### Paso 1: Asignar Cada Issue A Un Proyecto

**Acción:**
- Crear un campo "Project" obligatorio
- Asignar cada issue a un proyecto
- Resultado: Visibilidad en cuántos proyectos tiene cada persona

---

### Paso 2: Visualizar Asignación

**Acción:**
- Usar vista "Asignación por persona"
- Identificar quién está en 3+ proyectos
- Acciones: Reasignar para respetar el límite

---

### Paso 3: Aplicar La Regla "Máximo 2 Proyectos"

**Acción:**
- Regla estricta: Máximo 2 proyectos activos por persona (idealmente 1)
- Antes de empezar un nuevo proyecto, quitar desarrolladores de un proyecto existente
- Resultado: Desarrolladores enfocados, proyectos terminados

---

### Paso 4: Decir No A "Solo 2h"

**Acción:**
- Rechazar "solo 2h para ayudarme" si añade un proyecto
- Si ayuda necesaria, quitar oficialmente a la persona de otro proyecto
- Resultado: Sin sobreasignación invisible

---

## Puntos De Acción: Eliminar Multi-Proyecto

1. **Audita asignación actual.** ¿Cuántos proyectos tiene cada desarrollador?
2. **Identifica sobreasignados.** ¿Quién está en 3+ proyectos?
3. **Reasigna.** Quita desarrolladores de proyectos no prioritarios.
4. **Aplica la regla.** Máximo 2 proyectos por persona.
5. **Visualiza.** Usa Sinra para ver asignación en tiempo real.

---

## El Punto Clave

**Multi-proyecto mata la productividad.**

Entre **context switching permanente**, **nada que se termina**, **burnout**, y **todos los proyectos retrasados**, nadie puede avanzar.

**Sinra limita proyectos activos y visualiza sobrecarga.**

Campo "Projects", vista de asignación, alertas automáticas.

**El resultado:**
- ✅ Desarrolladores en 1-2 proyectos máx (enfoque restaurado)
- ✅ Proyectos terminados a tiempo (87% en lugar de 23%)
- ✅ Context switching reducido (12% en lugar de 60%)
- ✅ Burnout dividido por 3 (19% en lugar de 58%)
- ✅ Productividad restaurada (100% en lugar de <10%)

**Tus desarrolladores finalmente pueden enfocarse.**

**Tus proyectos se terminan.**

---

**¿Listo para eliminar multi-proyecto?** [Empieza una prueba gratuita de Sinra →](https://app.sinra.dev/users/sign_up)

Descubre una gestión de proyectos donde los desarrolladores están enfocados en 1-2 proyectos máx, no dispersos en 4+.
