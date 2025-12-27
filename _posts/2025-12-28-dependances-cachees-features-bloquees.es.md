---
layout: post
title: "Dependencias Ocultas: Por Qué Tus Features Siempre Están Bloqueadas"
subtitle: "Entre dependencias invisibles, equipos que se esperan mutuamente y «espera, ¿quién depende de qué?», nada avanza—Sinra hace las dependencias visibles y gestionables"
description: "Las features están constantemente bloqueadas por dependencias descubiertas demasiado tarde. Los equipos se esperan mutuamente. Los releases se retrasan porque una API no está lista. Descubre cómo Sinra hace las dependencias explícitas y rastreables."
date: 2025-12-28 09:00:00 +0100
lang: es
category: Dependencies
excerpt: "El dev pregunta: «¿Por qué mi feature lleva 3 semanas bloqueada?». Descubres que depende del equipo backend, que espera al equipo infra, que espera una decisión del CTO. Nadie lo sabía. Bienvenido al infierno de las dependencias ocultas."
permalink: /dependencies/:year/:month/:day/dependances-cachees-features-bloquees.html
featured_image: /assets/images/blog/2025-12-28-dependances-cachees-featured.png
---

## La Feature Bloqueada Durante 3 Semanas

**Lunes por la mañana. Daily standup.**

Scrum Master: "Dev 1, ¿estado de la feature 'Export PDF'?"

Dev 1: "Sigue bloqueada."

SM: "¿Bloqueada desde cuándo?"

Dev 1: "3 semanas."

SM: "¿¡3 semanas!? ¿Por qué está bloqueada?"

Dev 1: "Estoy esperando la API de generación de PDF del equipo backend."

SM: "OK, y el equipo backend, ¿cómo va?"

**SM va a ver al equipo backend.**

SM: "La API PDF, ¿para cuándo estará lista?"

Backend Dev: "No podemos hacerla ahora. Esperamos que el equipo infra nos dé acceso al servicio de almacenamiento S3."

SM: "¿Y el equipo infra?"

**SM va a ver al equipo infra.**

SM: "El acceso S3, ¿para cuándo?"

Infra Lead: "Esperamos la aprobación del CTO para crear el bucket S3. Por razones de seguridad."

SM: "¿Y el CTO, sabe que estamos esperando eso?"

Infra Lead: "Eh... le envié un email hace 2 semanas. Sin respuesta."

**SM va a ver al CTO.**

SM: "Hay una solicitud de acceso S3 que está bloqueando una feature desde hace 3 semanas. ¿Puedes aprobar?"

CTO: "¿S3? ¿Para qué?"

SM: "Para la API PDF que bloquea la feature 'Export PDF'."

CTO: "Ah. Nadie me explicó el contexto. OK, aprobado. Tardará 2 días en provisionarse."

**Resultado:**
- **Feature bloqueada: 3 semanas**
- **Cadena de dependencias descubierta demasiado tarde:** Frontend → Backend → Infra → CTO
- **Tiempo real necesario tras desbloqueo:** 4 días
- **Tiempo perdido por dependencias ocultas:** 17 días

![Cronología: feature bloqueada 3 semanas, pero solo 4 días de trabajo real](/assets/images/blog/2025-12-28-dependances-cachees-blocked-timeline.svg)

---

## El Problema De Las Dependencias Ocultas

La mayoría de equipos tech viven con dependencias invisibles. Features bloqueadas porque descubren demasiado tarde que dependen de otro equipo, una decisión, una API no lista.

### Los Cinco Síntomas De Las Dependencias Ocultas

#### 1. Features Constantemente Bloqueadas ("Esperamos Al Equipo X")

**El Escenario:**
Tu feature lleva "en progreso" 2 semanas, pero nada se mueve. Cuando preguntas por qué, te dicen: "Esperamos al equipo X."

**Cronología típica:**

**Semana 1:** Feature iniciada. Todo bien.

**Semana 2, Día 1:** "Mierda, necesitamos la API del equipo backend para avanzar."

**Semana 2, Día 3:** Mensaje enviado al equipo backend: "Necesitamos vuestra API."

**Semana 2, Día 5:** Equipo backend responde: "OK, podemos hacerla la próxima semana."

**Semana 3:** Feature bloqueada. Equipo frontend esperando.

**Semana 4:** API entregada. Feature puede reanudarse. Pero mientras tanto, el dev frontend cambió de contexto a otra cosa.

**El Problema:**
- ❌ Dependencia descubierta tarde (después de empezar la feature)
- ❌ Sin anticipación (pensamos que podíamos hacerlo todo solos)
- ❌ Tiempo perdido esperando (2 semanas bloqueadas)
- ❌ Cambio de contexto (dev pasa a otra cosa, vuelve después)

**Estadística Real:**

En una encuesta a 120 equipos de ingeniería:
- **47% de las features** encuentran al menos una dependencia bloqueante inesperada
- **Retraso medio causado por dependencia oculta:** 12 días
- **% de dependencias identificadas antes de empezar la feature:** 23%

**Resultado:** Las features están constantemente bloqueadas porque las dependencias se descubren demasiado tarde.

---

#### 2. Cadenas De Dependencias Invisibles ("¿De Quién Depende Esto Ya?")

**El Escenario:**
Tu feature depende del equipo A, que depende del equipo B, que depende del equipo C. Nadie ve la cadena completa.

**Ejemplo real:**

Feature: **"Notificaciones push móviles"**

**Dependencias descubiertas progresivamente:**

**Día 1:** Equipo móvil inicia la feature.

**Día 3:** "Necesitamos la API de notificaciones del backend."

**Día 5:** Backend inicia la API. "Necesitamos un servidor Redis para la cola de notificaciones."

**Día 8:** Infra provisiona Redis. "Necesitamos acceso al servicio Firebase Cloud Messaging."

**Día 12:** "Firebase requiere aprobación de seguridad."

**Día 18:** Seguridad aprueba. "Pero primero debéis configurar los certificados APNs para iOS."

**Día 23:** Equipo móvil configura APNs. Feature finalmente puede completarse.

**Cadena de dependencias (descubierta progresivamente):**

Móvil → Backend → Infra (Redis) → Infra (Firebase) → Seguridad → Móvil (APNs)

![Descubrimiento progresivo de la cadena de dependencias durante 23 días](/assets/images/blog/2025-12-28-dependances-cachees-chain-progressive.svg)

**El Problema:**
- ❌ Cadena descubierta progresivamente (no anticipada)
- ❌ Cada dependencia revela una nueva dependencia
- ❌ Imposible planificar (no se ve la cadena completa)
- ❌ Retrasos acumulativos (23 días en lugar de 5 si todo se hubiera anticipado)

**Resultado:** Las features tardan 4x más debido a cadenas de dependencias invisibles.

---

#### 3. Equipos Que Se Esperan Mutuamente ("¿Quién Hace Qué?")

**El Escenario:**
Equipo A piensa que el equipo B hace parte del trabajo. Equipo B piensa que es el equipo A. Resultado: nadie hace nada.

**Ejemplo real:**

Feature: **"Autenticación SSO"**

**Semana 1:**

Equipo frontend: "Esperamos que backend haga la integración OAuth2."

Equipo backend: "Esperamos que frontend nos diga qué proveedor SSO usar (Google, Microsoft, etc.)."

**Semana 2:**

Scrum Master descubre el problema: "Esperad, ¿os estáis esperando mutuamente?"

Frontend: "Pensamos que backend elegiría el proveedor."

Backend: "No, esa es una decisión de producto."

Product Manager: "Ah, nadie me preguntó. OK, haremos Google y Microsoft."

**Semana 3:**

Equipo backend: "Hemos hecho la integración de Google en el lado backend."

Equipo frontend: "Ah, pensamos que también haríais la lib frontend."

Backend: "No, eso es vuestro trabajo. Nosotros solo exponemos la API."

**Semana 4:**

Frontend completa la integración.

**Resultado:**
- **Feature tardó 4 semanas**
- **Tiempo real necesario con coordinación clara:** 1.5 semanas
- **Tiempo perdido por mala coordinación:** 2.5 semanas

![Equipos que se esperan mutuamente: deadlock total](/assets/images/blog/2025-12-28-dependances-cachees-teams-waiting.svg)

**El Problema:**
- ❌ Suposiciones contradictorias (cada uno piensa que el otro hace el trabajo)
- ❌ Sin clarificación previa ("quién hace qué" no definido)
- ❌ Descubierto tarde (después de esperar varias semanas)
- ❌ Frustración (sensación de tiempo perdido)

**Resultado:** Los equipos se esperan mutuamente porque las responsabilidades no están claras.

---

#### 4. Releases Que Se Retrasan ("Esperamos Una Dependencia Crítica")

**El Escenario:**
Tu release Q2 está planificado para el 30 de junio. El 25 de junio, descubres que una feature crítica depende de una API que no estará lista hasta el 10 de julio.

**Cronología típica:**

**15 mayo:** Release Q2 planificado con 8 features.

**1 junio:** 5 features completadas. 3 en progreso.

**15 junio:** 7 features completadas. 1 feature restante: "Integración Stripe".

**20 junio:** Equipo descubre que la integración Stripe depende de una API backend "Payments" aún no hecha.

**22 junio:** Backend comienza la API Payments. "Terminaremos el 5 de julio."

**25 junio:** PM se da cuenta de que el release del 30 de junio es imposible.

**30 junio:** Release pospuesto al 10 de julio.

**El Problema:**
- ❌ Dependencia crítica descubierta tarde (10 días antes del release)
- ❌ Sin visibilidad previa (pensamos que todo estaba listo)
- ❌ Release se retrasa (imposible entregar a tiempo)
- ❌ Credibilidad destruida (stakeholders decepcionados)

**Estadística Real:**

Análisis de 80 releases tech:
- **34% de los releases** se retrasan por dependencias descubiertas tardíamente
- **Retraso medio:** 11 días
- **% de dependencias identificadas antes del sprint final:** 41%

**Resultado:** Los releases se retrasan constantemente porque las dependencias críticas se descubren demasiado tarde.

---

#### 5. Dependencias Externas Olvidadas ("Esperamos Al Cliente")

**El Escenario:**
Tu feature depende de una acción externa (aprobación cliente, acceso API terceros, decisión legal). Nadie lo rastrea. La feature permanece bloqueada indefinidamente.

**Ejemplo real:**

Feature: **"Integración API terceros"**

**Semana 1:** Equipo inicia la feature.

**Semana 2:** "Necesitamos las credenciales API del cliente."

**Semana 2, Día 3:** Email enviado al cliente: "¿Podéis darnos las credenciales API?"

**Semana 3:** Sin respuesta del cliente. Feature marcada "Blocked".

**Semana 4-8:** Nadie hace seguimiento con el cliente. Feature olvidada.

**Semana 9:** Cliente envía credenciales (se habían olvidado).

**Semana 10:** Feature reanudada. Pero el dev que trabajaba en ella cambió de proyecto.

**El Problema:**
- ❌ Dependencia externa no rastreada (sin seguimiento)
- ❌ Feature olvidada durante 7 semanas
- ❌ Tiempo perdido masivo (cliente podría haber dado credenciales en 2 días si se hubiera hecho seguimiento)
- ❌ Cambio de contexto (dev original ya no disponible)

**Tipos de dependencias externas olvidadas:**
- Aprobación cliente
- Acceso API terceros (claves, credenciales)
- Decisión legal/compliance
- Validación seguridad
- Aprobación presupuesto

**Resultado:** Las dependencias externas se olvidan porque nadie las rastrea activamente.

---

## Por Qué Las Dependencias Permanecen Ocultas

### Razón 1: Dependencias No Documentadas

**El Problema:**

Cuando creas una issue, no documentas sus dependencias.

**Issue típica de Jira:**

```markdown
Title: Implement PDF export

Description:
As a user, I want to export my data as PDF.

Acceptance criteria:
- [ ] Botón "Export PDF" visible
- [ ] PDF generado con datos correctos
- [ ] PDF descargable
```

**Lo que falta:** Ninguna mención de dependencias.

**Dependencias reales (descubiertas después):**
- Depende de la API backend `/generate-pdf`
- Depende del acceso S3 para almacenar los PDFs
- Depende de la lib `pdf-generator` (aún no instalada)
- Depende de aprobación seguridad (PDFs pueden contener datos sensibles)

**Por qué no se documentan:**
- Nadie piensa en listar dependencias al crear la issue
- Sin campo "Dependencies" en Jira por defecto
- Dependencias descubiertas sobre la marcha
- Demasiado tarde para planificar

**Resultado:** Las dependencias permanecen invisibles hasta que se encuentran.

---

### Razón 2: Sin Vista General (Trabajo En Silos)

**El Problema:**

Cada equipo trabaja en un silo. Nadie ve cómo se interconectan las features.

**Ejemplo:**

Equipo móvil trabaja en "Notificaciones push".

Equipo backend trabaja en "API users".

Equipo infra trabaja en "Migración Redis".

**Nadie se da cuenta de que:**
- Notificaciones push (móvil) → depende de API backend
- API backend → depende de Redis
- Redis → en migración (no disponible durante 3 días)

**Resultado catastrófico:**

Móvil completa su feature. Backend completa su API. Pero Redis está caído durante la migración.

**Todo está bloqueado durante 3 días.**

**Por qué nadie lo vio venir:**
- Cada equipo solo ve su trabajo
- Sin vista general de dependencias entre equipos
- Nadie coordina

**Resultado:** Los equipos se bloquean mutuamente sin saberlo.

---

### Razón 3: Dependencias Descubiertas Tarde (Sin Anticipación)

**El Problema:**

Iniciamos una feature sin analizar sus dependencias. Las descubrimos sobre la marcha.

**Workflow típico:**

**Día 1:** "OK, hacemos la feature X."

**Día 3:** "Ah, necesitamos la API Y."

**Día 5:** "La API Y depende del servicio Z."

**Día 8:** "El servicio Z requiere aprobación."

**Por qué es tóxico:**

Porque en lugar de descubrir todas las dependencias **antes** de empezar, las descubrimos **durante**.

**Consecuencia:**
- Planning roto (pensamos terminar en 5 días, tarda 3 semanas)
- Features bloqueadas (esperamos una dependencia inesperada)
- Frustración (sensación de perder el tiempo)

**Por qué no anticipamos:**
- Sin proceso para identificar dependencias por adelantado
- Presión para empezar rápido ("ya veremos sobre la marcha")
- Falta de experiencia (no conocemos todas las dependencias del sistema)

**Resultado:** Siempre descubrimos las dependencias demasiado tarde.

---

## El Enfoque Sinra: Dependencias Explícitas Y Rastreables

Sinra elimina las dependencias ocultas **haciendo todas las dependencias explícitas, visibles y rastreables**.

### El Concepto: Dependencias Documentadas Y Rastreadas

En Sinra, cada issue puede declarar sus dependencias. Las dependencias son:
- **Explícitas** (documentadas claramente)
- **Visibles** (todo el equipo las ve)
- **Rastreables** (sabemos quién bloquea a quién)
- **Accionables** (podemos desbloquear proactivamente)

**Tres mecanismos:**

1. **Enlaces de dependencias**: Issue A → bloqueada por → Issue B
2. **Vista de dependencias**: Grafo visual mostrando todas las cadenas
3. **Alertas proactivas**: Notificación cuando una dependencia bloquea

**Resultado:** Imposible tener dependencias ocultas.

---

### Anatomía De Una Feature Con Dependencias Sinra

Revisitemos el ejemplo de "Export PDF".

#### Enfoque Tradicional (Dependencias Ocultas)

**Issue creada:**

```markdown
Title: Implement PDF export
Status: To Do
Assignee: Dev 1
```

**Sin mención de dependencias.**

**Día 3:** Dev 1 descubre que necesita la API backend.

**Día 5:** Backend descubre que necesita acceso S3.

**Día 10:** Infra descubre que necesita aprobación CTO.

**Día 17:** Feature desbloqueada.

**Tiempo perdido:** 14 días.

---

#### Enfoque Sinra (Dependencias Explícitas)

**Paso 1:** Crear issue "Export PDF"

**Descripción:**
```markdown
# Export PDF

Permitir a usuarios exportar sus datos en PDF.

## Dependencias identificadas:
- Bloqueada por: [BACKEND-234] API POST /generate-pdf
- Bloqueada por: [INFRA-567] Acceso bucket S3
- Bloqueada por: [SECURITY-89] Aprobación para almacenar PDFs
```

**Paso 2:** Crear issues de dependencias

**Issue [BACKEND-234]:**
```markdown
Title: API POST /generate-pdf
Status: To Do
Assignee: Backend Team
Bloquea: [FRONTEND-123] Export PDF
```

**Issue [INFRA-567]:**
```markdown
Title: Provisionar bucket S3 para PDFs
Status: Waiting Approval
Assignee: Infra Team
Bloquea: [BACKEND-234] API /generate-pdf
Bloqueada por: [CTO] Aprobación seguridad
```

**Issue [SECURITY-89]:**
```markdown
Title: Aprobación seguridad para almacenamiento PDFs
Status: To Do
Assignee: CTO
Bloquea: [INFRA-567] Bucket S3
```

**Paso 3:** Vista gráfica de dependencias

```
[CTO Approval] → [Infra S3] → [Backend API] → [Frontend Export PDF]
```

**Todo el equipo ve la cadena completa.**

**Paso 4:** Desbloqueo proactivo

**Día 1:** PM ve la cadena de dependencias. "Necesitamos primero la aprobación CTO. Le voy a contactar ahora."

**Día 1, 2h después:** CTO aprueba.

**Día 2:** Infra provisiona S3.

**Día 3:** Backend empieza la API.

**Día 5:** API completada.

**Día 6:** Frontend integra y completa.

**Tiempo total:** 6 días en lugar de 17.

**Ganancia:** 11 días ahorrados gracias a la anticipación.

![Comparación: enfoque tradicional (17 días) vs Sinra (6 días)](/assets/images/blog/2025-12-28-dependances-cachees-traditional-vs-sinra.svg)

---

### Los Tres Pilares De La Gestión De Dependencias Sinra

#### 1. Dependencias Explícitas (Documentadas Desde El Inicio)

**El Concepto:**

Cada issue declara explícitamente sus dependencias **antes de empezar**.

**Campo "Bloqueada por":**
- `[BACKEND-123] API endpoint`
- `[INFRA-456] Redis provisioning`
- `[DESIGN-789] Mockups approval`

**Campo "Bloquea" (generado automáticamente):**

Si issue A está bloqueada por issue B, entonces issue B ve que "bloquea" issue A.

**Beneficio:** Todas las dependencias son visibles **antes** de empezar el trabajo.

---

#### 2. Vista Gráfica De Dependencias (Ver Toda La Cadena)

**El Concepto:**

Sinra genera un grafo visual mostrando todas las cadenas de dependencias.

**Ejemplo: Release Q2**

```
Release Q2
├── Feature A (ready)
├── Feature B (bloqueada)
│   └── Bloqueada por [API-123]
│       └── Bloqueada por [INFRA-456]
│           └── Bloqueada por [CTO Approval]
├── Feature C (ready)
└── Feature D (bloqueada)
    └── Bloqueada por [DESIGN-789]
```

**Vista de un vistazo:**
- 2 features listas
- 2 features bloqueadas
- Cadenas de dependencias visibles

**Acciones inmediatas posibles:**
- Contactar CTO para desbloquear Feature B
- Hacer seguimiento con diseño para desbloquear Feature D

![Vista gráfica completa de dependencias en Sinra](/assets/images/blog/2025-12-28-dependances-cachees-dependency-graph.svg)

**Beneficio:** Sin dependencias ocultas. Todo el mundo ve los bloqueos.

---

#### 3. Alertas Proactivas (Notificaciones Automáticas)

**El Concepto:**

Sinra envía alertas cuando una dependencia bloquea.

**Tipos de alertas:**

**Alerta 1: Dependencia bloqueante creada**

```
🚨 Nueva dependencia bloqueante
Issue [FRONTEND-123] Export PDF ahora bloqueada por [BACKEND-234] API /generate-pdf
Acción: Asignar [BACKEND-234] a Backend Team
```

**Alerta 2: Dependencia retrasada**

```
⚠️ Dependencia retrasada
Issue [BACKEND-234] API /generate-pdf (bloquea Export PDF) debería haberse completado ayer
Acción: Verificar con Backend Team
```

**Alerta 3: Dependencia desbloqueada**

```
✅ Dependencia desbloqueada
Issue [BACKEND-234] API /generate-pdf completada
[FRONTEND-123] Export PDF ahora puede avanzar
```

**Beneficio:** Las dependencias se rastrean activamente. Nada olvidado.

---

## Ejemplo Real: Quantum (Plataforma E-commerce)

**Quantum (equipo de 18 personas, plataforma e-commerce B2B)**

*Nota: Quantum es una empresa real que hemos anonimizado bajo un nombre ficticio para proteger su confidencialidad.*

### Antes De Sinra: Dependencias Ocultas

**Problemas Encontrados:**

**Problema 1: Features constantemente bloqueadas**

**47% de las features** encontraban una dependencia bloqueante descubierta después de empezar.

Retraso medio causado: **9 días por feature**.

**Problema 2: Cadenas de dependencias invisibles**

Feature "Checkout mejorado":
- Bloqueada por Backend (API payments)
- Backend bloqueado por Infra (Redis)
- Infra bloqueado por Seguridad (approval)
- Seguridad bloqueado por CTO (validation)

**Cadena descubierta progresivamente durante 4 semanas.**

**Problema 3: Releases que se retrasan**

Release Q2 planificado para 30 junio.

El 22 de junio, descubrimiento de una dependencia crítica no lista.

Release se retrasa al 12 de julio.

**Problema 4: Dependencias externas olvidadas**

Integración API Stripe bloqueada durante 5 semanas porque nadie hizo seguimiento con el cliente para las credenciales.

**Moral del equipo:** Frustrado. "Nuestras features siempre están bloqueadas por algo que no vemos venir."

---

### Después De Sinra: Dependencias Visibles

**Workflow:**

1. **Documentar dependencias al crear la issue**
2. **Vista gráfica de cadenas de dependencias**
3. **Alertas proactivas cuando dependencia bloquea**
4. **Desbloqueo anticipado (antes de que bloquee)**

**Ejemplo: Feature "Checkout mejorado"**

**Antes de empezar:**

PM crea la issue con dependencias explícitas:
```markdown
Bloqueada por:
- [BACKEND-567] API Payments
- [INFRA-123] Redis provisioning
- [SECURITY-89] Security approval
- [CTO] Final validation
```

**Vista gráfica muestra la cadena completa.**

**Acción inmediata:**

PM ve que todo depende de aprobación CTO. Contacta al CTO **antes** de empezar la feature.

CTO aprueba en 1 día.

Infra provisiona Redis en 2 días.

Backend hace la API en 3 días.

Frontend integra en 2 días.

**Total:** 8 días en lugar de 28.

**Resultados (Después De 6 Meses):**

**Métrica 1: Features bloqueadas**
- **Antes:** 47% de features bloqueadas por dependencias inesperadas
- **Después:** 8% (dependencias anticipadas y desbloqueadas proactivamente)

**Métrica 2: Retraso medio dependencias**
- **Antes:** 9 días perdidos por feature
- **Después:** 2 días

**Métrica 3: Releases que se retrasan**
- **Antes:** 40% de releases se retrasan
- **Después:** 5%

**Métrica 4: Dependencias externas**
- **Antes:** Olvidadas durante semanas
- **Después:** Rastreadas y seguimiento automático

**Métrica 5: Moral**
- **Antes:** Equipo frustrado
- **Después:** "Por fin vemos venir los bloqueos"

**Cita Lead Developer:**
> "Antes, empezábamos una feature y descubríamos 3 días después que estábamos bloqueados por backend. Ahora, vemos todas las dependencias antes de empezar. Si algo bloquea, lo sabemos inmediatamente y podemos actuar."

**Cita Product Manager:**
> "Los releases ya no se retrasan. Sabemos exactamente qué features tienen dependencias, y las desbloqueamos proactivamente. Se acabaron las sorpresas 5 días antes del release."

![Quantum: métricas antes/después de Sinra](/assets/images/blog/2025-12-28-dependances-cachees-quantum-before-after.svg)

---

## Jira vs. Sinra: Comparación Gestión Dependencias

| **Aspecto** | **Jira** | **Sinra** |
|------------|----------|-----------|
| **Documentación dependencias** | ❌ Manual (a menudo olvidada) | ✅ Campo dedicado (obligatorio) |
| **Vista de cadenas** | ❌ Inexistente | ✅ Grafo visual completo |
| **Alertas bloqueos** | ❌ Ninguna | ✅ Notificaciones proactivas |
| **Dependencias externas** | ❌ No rastreadas | ✅ Rastreadas y seguimiento |
| **Anticipación** | ❌ Descubierta tarde | ✅ Identificada antes de empezar |
| **Features bloqueadas** | 47% (inesperado) | 8% (anticipado) |
| **Retraso medio** | 9 días perdidos | 2 días |

---

## Los Cinco Signos De Que Tus Dependencias Están Ocultas

### Signo 1: Descubres Dependencias Después De Empezar

Si empiezas una feature y descubres 3 días después que depende de otro equipo, tus dependencias están ocultas.

---

### Signo 2: "Esperamos Al Equipo X" Es Una Frase Recurrente

Si en cada standup alguien dice "esperamos al equipo X", hay dependencias no anticipadas.

---

### Signo 3: Tus Releases Se Retrasan Por Dependencias

Si tus releases se retrasan porque una dependencia crítica no está lista, no tienes visibilidad.

---

### Signo 4: Nadie Sabe Quién Bloquea A Quién

Si no puedes responder instantáneamente "qué features bloquean qué otras features", tus dependencias son invisibles.

---

### Signo 5: Dependencias Externas Olvidadas Durante Semanas

Si tienes features bloqueadas durante semanas esperando un cliente/partner, no estás rastreando dependencias externas.

---

## Cómo Usar Sinra Para Gestionar Dependencias

### Paso 1: Documentar Dependencias Al Crear

**Acción:**
- Cuando creas una issue, lista todas sus dependencias
- Usar el campo "Bloqueada por" para enlazar a otras issues
- No empezar hasta que las dependencias estén identificadas

**Resultado:** Todas las dependencias son explícitas antes de empezar.

---

### Paso 2: Visualizar Cadenas De Dependencias

**Acción:**
- Usar la vista gráfica para ver todas las cadenas
- Identificar dependencias críticas (que bloquean más features)
- Priorizar el desbloqueo de dependencias críticas

**Resultado:** Vista general completa. Sin sorpresas.

---

### Paso 3: Desbloquear Proactivamente

**Acción:**
- No esperar a estar bloqueado para actuar
- En cuanto se identifica una dependencia, desbloquearla
- Contactar personas/equipos responsables inmediatamente

**Resultado:** Dependencias desbloqueadas antes de que bloqueen.

---

### Paso 4: Rastrear Dependencias Externas

**Acción:**
- Marcar dependencias externas (cliente, partner, aprobación)
- Configurar recordatorios automáticos
- Hacer seguimiento regularmente

**Resultado:** Dependencias externas nunca olvidadas.

---

## Puntos De Acción: Hacer Dependencias Visibles

1. **Audita tus features bloqueadas.** ¿Cuántas están bloqueadas por dependencias no anticipadas?
2. **Documenta dependencias.** Para cada nueva issue, lista explícitamente las dependencias.
3. **Crea una vista de dependencias.** Usa Sinra para visualizar cadenas.
4. **Desbloquea proactivamente.** No esperes estar bloqueado para actuar.
5. **Rastrea dependencias externas.** Haz seguimiento con clientes/partners regularmente.

---

## El Punto Clave

**Las dependencias ocultas matan la productividad.**

Entre **features constantemente bloqueadas**, **cadenas invisibles**, **equipos que se esperan**, y **releases que se retrasan**, nadie puede avanzar.

**Sinra hace todas las dependencias explícitas, visibles y rastreables.**

Campos dedicados, vista gráfica, alertas proactivas.

**El resultado:**
- ✅ Dependencias anticipadas (identificadas antes de empezar)
- ✅ Cadenas visibles (grafo completo)
- ✅ Desbloqueo proactivo (actuar antes de estar bloqueado)
- ✅ Releases a tiempo (sin sorpresas)
- ✅ Productividad restaurada (features avanzan)

**Finalmente tienes visibilidad.**

**Tus features ya no están bloqueadas.**

---

**¿Listo para hacer tus dependencias visibles?** [Empieza una prueba gratuita de Sinra →](https://app.sinra.dev/users/sign_up)

Descubre una gestión de proyectos donde las dependencias son explícitas y rastreables, no ocultas y descubiertas demasiado tarde.
