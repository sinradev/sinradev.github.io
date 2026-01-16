---
layout: post
title: "La Falsa Promesa De Las User Stories: Por Qué « Como Usuario » No Dice Qué Hacer"
subtitle: "Entre formato impuesto « Como usuario, quiero... », stories vagas y 3 reuniones para entender qué codificar realmente, nadie sabe qué hacer : Sinra usa issues directas"
description: "Las user stories en formato Agile son demasiado vagas. Resultado: desarrolladores perdidos, 4h de grooming por semana, brecha entre « lo que está escrito » y « lo que hay que hacer ». Descubre cómo Sinra usa issues directas y accionables."
date: 2026-01-02 09:00:00 +0100
lang: es
category: Planning
excerpt: "El dev lee la user story: « Como usuario, quiero desconectarme para asegurar mi cuenta. » Pregunta: « OK pero concretamente, ¿qué hago? » Bienvenido al mundo de las user stories vagas."
permalink: /planning/:year/:month/:day/falsa-promesa-user-stories-como-usuario.html
featured_image: /assets/images/blog/2026-01-02-user-stories-featured.png
---

## La User Story Que No Dice Nada

**Lunes por la mañana. Sprint planning. Equipo de 6 desarrolladores.**

Product Owner: « OK, pasemos a la siguiente story. »

**El PO lee la story:**

```
USER-347: Como usuario, quiero poder desconectarme de la aplicación
para asegurar mi cuenta.

Criterios de aceptación:
- El usuario puede desconectarse
- La sesión termina después de desconectarse
- El usuario es redirigido a la página de login
```

PO: « Ahí está. Es claro. ¿Preguntas? »

Dev 1: « Eh... sí. Concretamente, ¿qué hago? »

PO: « Agregas un botón de desconexión. »

Dev 1: « OK. ¿Pero dónde? ¿En el header? ¿En un menú dropdown? ¿En la configuración del usuario? »

PO: « Ah... buena pregunta. Diría... en el header. »

Dev 2: « ¿Y del lado del backend, cómo lo hacemos? ¿Invalidamos solo el token JWT? ¿Eliminamos el refresh token? ¿Guardamos el historial de sesión? »

PO: « Eh... no sé. Ustedes son los desarrolladores, ¿no? »

Dev 3: « ¿Y si el usuario tiene múltiples sesiones activas? ¿Desconectamos solo la sesión actual o todas las sesiones? »

PO: « Buena pregunta. No sé. »

Dev 1: « ¿Y mostramos una confirmación antes de desconectar? ¿O desconectamos directamente? »

PO: « Debería haber una confirmación, creo. »

Dev 2: « ¿Y si la API está caída durante la desconexión? ¿Desconectamos igual del lado del front? »

PO: « Eh... »

Dev 3: « ¿Y rastreamos el evento de desconexión en Analytics? »

PO: « Probablemente sí. »

Dev 1: « ¿Y a nivel de diseño, tenemos una maqueta? »

PO: « No, todavía no. »

**45 minutos después:**

PO: « OK, voy a aclarar todo esto con el diseñador y el equipo. Volveremos a esta story en el próximo planning. »

**La story vuelve al backlog.**

Dev 1 (aparte): « La story decía "Como usuario, quiero desconectarme". Pero no decía **cómo**, **dónde**, ni **qué hacer exactamente**. »

Dev 2: « Bienvenido al mundo de las user stories. »

<img src="/assets/images/blog/2026-01-02-user-stories-vague-meeting.svg" alt="User story vaga generando 45 minutos de preguntas" width="800" height="400" loading="lazy">

---

## El Problema De Las User Stories

Las **user stories** en formato Agile (« Como X, quiero Y para Z ») se supone que describen la necesidad del usuario.

**Pero nunca dicen qué hacer concretamente.**

**Resultado catastrófico:**
- Stories demasiado vagas para ser desarrolladas
- 3-4 reuniones de aclaración por story
- Sesiones de grooming interminables
- Brecha masiva entre « lo que está escrito » y « lo que hay que codificar realmente »
- Desarrolladores perdidos

### Los Cinco Síntomas Del Síndrome De User Story Vaga

#### 1. « OK Pero Concretamente, ¿Qué Hago? » (La Story No Dice Qué Desarrollar)

**El Escenario:**
Lees una user story. Describe una necesidad del usuario en 2 frases. Pero no sabes qué codificar.

**Ejemplo real:**

**User story típica:**

```
USER-521: Como administrador, quiero gestionar los permisos de usuarios
para asegurar el acceso a datos sensibles.

Criterios de aceptación:
- Los administradores pueden modificar permisos
- Los cambios se guardan
- Los usuarios sin permiso no pueden acceder a los datos
```

**El desarrollador lee la story:**

Dev: « OK... pero concretamente, ¿qué hago? »

**Las preguntas que surgen:**

1. **Interfaz:** ¿Tabla con checkboxes? ¿Dropdown? ¿Toggle switches? ¿Modal?
2. **Granularidad:** ¿Permisos por rol? ¿Por usuario? ¿Por grupo? ¿Por recurso?
3. **Backend:** ¿Nuevo modelo de permisos? ¿Migración de BD? ¿API REST o GraphQL?
4. **Validación:** ¿Quién puede modificar qué permisos? ¿Solo super admin?
5. **UI/UX:** ¿Página dedicada? ¿Sección en configuración? ¿Edición inline?
6. **Scope:** ¿Solo lectura/escritura? ¿O permisos granulares (create, read, update, delete, admin)?

**Ninguna de estas preguntas tiene respuesta en la user story.**

**Resultado:** 3 reuniones de aclaración antes de poder empezar a codificar.

<img src="/assets/images/blog/2026-01-02-user-stories-questions-unanswered.svg" alt="User story generando 15 preguntas sin respuestas" width="800" height="450" loading="lazy">

**El Problema:**
- ❌ User story describe el « qué » (necesidad del usuario)
- ❌ Pero no el « cómo » (solución técnica)
- ❌ Brecha masiva entre story y código
- ❌ Desarrolladores bloqueados

**Cita de desarrollador:**
> « Leo la user story. Entiendo la necesidad. Pero no sé qué codificar. La story dice "gestionar permisos", pero no dice si es un CRUD completo, un simple toggle, o una matriz de permisos compleja. »

**Resultado:** Las user stories no son accionables.

---

#### 2. Grooming Interminable (4h Por Semana Para Transformar Stories En Tareas)

**El Escenario:**
Tu equipo pasa 4 horas por semana en « backlog grooming » para transformar las user stories vagas en tareas desarrollables.

**Cronología típica de una sesión de grooming:**

**14h00:** Comienza el grooming. 8 stories para hacer grooming.

**14h05:** Story 1: « Como usuario, quiero buscar productos. »

**Preguntas:**
- ¿Búsqueda de texto completo o por filtros?
- ¿Qué campos son buscables?
- ¿Resultados paginados? ¿Cuántos por página?
- ¿Autocompletado? ¿Sugerencias?
- ¿Búsqueda en tiempo real o con botón submit?

**14h45:** 40 minutos después, story finalmente aclarada. Dividida en 5 sub-tareas.

**14h50:** Story 2: « Como admin, quiero exportar reportes. »

**Preguntas:**
- ¿Formato: CSV? ¿Excel? ¿PDF? ¿JSON?
- ¿Qué reportes? ¿Ventas? ¿Usuarios? ¿Analytics?
- ¿Exportación síncrona o asíncrona?
- ¿Filtros antes de exportar?
- ¿Email con archivo o descarga directa?

**15h30:** Story aclarada. Dividida en 4 sub-tareas.

**15h35:** Story 3: « Como usuario, quiero compartir contenido. »

**Preguntas:**
- ¿Compartir por email? ¿Link público? ¿Redes sociales?
- ¿Permisos: quién puede compartir? ¿Quién puede ver?
- ¿Vista previa del contenido compartido?
- ¿Tracking: saber quién hizo clic en el link?

**16h15:** Story aclarada.

**16h20:** Story 4...

**18h00:** Fin del grooming. **4 horas para hacer grooming de 8 stories.**

**El equipo está agotado.**

<img src="/assets/images/blog/2026-01-02-user-stories-grooming-marathon.svg" alt="4 horas de grooming para 8 user stories" width="800" height="400" loading="lazy">

**El Problema:**
- ❌ 4h de grooming por semana (20% del tiempo del equipo)
- ❌ Las stories deben ser « creadas » luego « refinadas » luego « divididas »
- ❌ Tiempo perdido aclarando lo que debería haber estado claro desde el principio
- ❌ Equipo agotado antes de codificar

**Estadística Real:**

Estudio sobre 67 equipos Agile:
- **Tiempo promedio de grooming:** 4.2h por semana
- **Porcentaje de stories modificadas después del grooming:** 78%
- **Número promedio de aclaraciones por story:** 3.4

**Cita de Scrum Master:**
> « Pasamos nuestros viernes por la tarde haciendo grooming del backlog. Leemos stories vagas, hacemos 15 preguntas, aclaramos, dividimos. Luego la semana siguiente, volvemos a empezar. Es agotador. »

**Resultado:** El grooming consume el 20% del tiempo del equipo.

---

#### 3. La Brecha Entre « Lo Que Está Escrito » Y « Lo Que Hay Que Hacer Realmente »

**El Escenario:**
La user story dice una cosa. Pero lo que realmente hay que desarrollar es completamente diferente.

**Ejemplo real:**

**Lo que está escrito (user story):**

```
USER-892: Como usuario, quiero recibir notificaciones
para estar informado de los nuevos mensajes.
```

**Lo que REALMENTE hay que hacer (después de aclaración):**

1. **Backend:**
   - Crear tabla `notifications` (id, user_id, message_id, content, read, created_at)
   - Crear API POST `/notifications` para crear una notificación
   - Crear API GET `/notifications` para listar notificaciones
   - Crear API PATCH `/notifications/:id/read` para marcar como leída
   - Agregar trigger en `messages` para crear notificación automáticamente
   - Implementar sistema de batching (máx 1 notif por minuto para evitar spam)

2. **Frontend:**
   - Crear componente NotificationBell con badge de count
   - Crear dropdown NotificationList
   - Implementar polling cada 30s o WebSocket para tiempo real
   - Agregar sonido de notificación (con permiso del navegador)
   - Agregar página /notifications para ver historial completo
   - Implementar « marcar todo como leído »

3. **Diseño:**
   - Maquetas para campana de notificación, dropdown, lista
   - Estados vacío, 1 notif, 10+ notifs
   - Animaciones (pulse del badge, slide-in)

4. **Infraestructura:**
   - Setup Redis para caché de notificaciones
   - Setup job queue para envío asíncrono
   - Monitoreo: tasa de entrega, latencia

5. **Tests:**
   - Tests unitarios backend (7 archivos)
   - Tests E2E frontend (4 escenarios)
   - Tests de rendimiento (10k notificaciones)

**Brecha entre la story (2 líneas) y la implementación real (50+ tareas).**

<img src="/assets/images/blog/2026-01-02-user-stories-gap-reality.svg" alt="User story 2 líneas vs 50 tareas reales" width="800" height="500" loading="lazy">

**El Problema:**
- ❌ User story: 2 líneas vagas
- ❌ Implementación real: 50 tareas concretas
- ❌ Brecha descubierta solo durante el desarrollo
- ❌ Estimaciones completamente equivocadas

**Cita de desarrollador:**
> « La story decía "recibir notificaciones". Parecía simple. Luego nos dimos cuenta de que había que crear toda la infraestructura, el componente UI, los permisos del navegador, el polling, el caching... La story tomó 3 semanas en lugar de 2 días. »

**Resultado:** Las user stories ocultan la complejidad real.

---

#### 4. « Habría Que Re-Groomear Esta Story » (Stories Retrabajadas 3 Veces)

**El Escenario:**
Una story es groomeada. Luego re-groomeada. Luego re-re-groomeada. Porque nunca es lo suficientemente clara.

**Cronología típica de una story:**

**Semana 1: Creación de la story**

PO crea la story:

```
USER-234: Como usuario, quiero filtrar los resultados.
```

**Semana 2: Primer grooming**

Equipo: « ¿Filtrar cómo? ¿Por qué? »

PO: « Ah sí, hay que precisar. »

**Story actualizada:**

```
USER-234: Como usuario, quiero filtrar los resultados
por categoría, precio y fecha para encontrar lo que busco.

Criterios de aceptación:
- Filtros disponibles: categoría, precio, fecha
- Los resultados se actualizan cuando se aplica un filtro
```

**Semana 3: Segundo grooming**

Dev: « OK pero técnicamente, ¿cómo lo hacemos? ¿Dropdown? ¿Checkboxes? ¿Range slider para el precio? »

PO: « Eh... buena pregunta. Le preguntaré al diseñador. »

**Story actualizada:**

```
USER-234: Como usuario, quiero filtrar los resultados
con dropdowns (categoría, fecha) y un range slider (precio).
```

**Semana 4: Tercer grooming**

Dev: « ¿Y los filtros se combinan con AND u OR? »

PO: « ¿Cómo? »

Dev: « Si selecciono Categoría=Electrónica Y Precio=0-100, ¿quiero los productos que son electrónica Y en este rango de precio? ¿O electrónica O en este rango? »

PO: « Ah... AND. »

Dev: « ¿Y cuando cambiamos un filtro, recargamos toda la página o solo los resultados? »

PO: « Solo los resultados. »

Dev: « Entonces hacemos una petición API en cada cambio de filtro? Puede ser muchas peticiones. »

PO: « Pongamos un debounce entonces. »

**Story actualizada por 3ª vez.**

**Semana 5: Story finalmente desarrollable**

**Pero el equipo pasó 3 sesiones de grooming (3h en total) en esta única story.**

<img src="/assets/images/blog/2026-01-02-user-stories-regrooming-loop.svg" alt="Story re-groomeada 3 veces antes de ser desarrollable" width="800" height="450" loading="lazy">

**El Problema:**
- ❌ Story creada demasiado vaga
- ❌ Groomeada 3 veces
- ❌ 3h de reuniones para una story
- ❌ Frustración: « ¿Por qué no está claro desde el principio? »

**Cita de Scrum Master:**
> « Tenemos stories que son groomeadas, luego re-groomeadas en el siguiente sprint porque todavía no son lo suficientemente claras. Luego las re-groomeamos una 3ª vez. En ese momento, hemos pasado más tiempo haciendo grooming que desarrollando. »

**Resultado:** Las stories son retrabajadas en bucle.

---

#### 5. El Desarrollador Adivina (« El PO No Está Disponible, Lo Hago A Sentimiento »)

**El Escenario:**
La user story es vaga. El PO no está disponible. El desarrollador adivina y codifica lo que piensa que es correcto.

**Ejemplo real:**

**User story:**

```
USER-445: Como usuario, quiero editar mi perfil.
```

**El desarrollador lee la story:**

Dev: « OK, editar el perfil. ¿Pero qué campos? »

**El dev mira los criterios de aceptación:**

```
Criterios de aceptación:
- El usuario puede editar su perfil
- Los cambios se guardan
```

Dev: « Eso no me ayuda. »

**El dev intenta contactar al PO:**

Slack: « @PO: USER-445, ¿qué campos son editables en el perfil? »

**2 horas después. Sin respuesta.**

Dev: « Bueno, el PO está ocupado. Voy a hacerlo a sentimiento. »

**El dev adivina:**

- Campos editables: Nombre, Email, Foto de perfil, Bio
- Página dedicada /profile/edit con formulario
- Botones « Guardar » y « Cancelar »
- Validación: email válido, nombre no vacío

**El dev codifica durante 2 días.**

**Sprint Review:**

PO: « Ah no, no es eso. La edición debía ser inline, no en una página dedicada. Y también había que poder editar el número de teléfono y la dirección. »

Dev: « Pero la story no lo decía. »

PO: « Era implícito. »

Dev: « ... »

**2 días de desarrollo para rehacer.**

<img src="/assets/images/blog/2026-01-02-user-stories-developer-guesses.svg" alt="Desarrollador adivina, codifica 2 días, todo está por rehacer" width="800" height="400" loading="lazy">

**El Problema:**
- ❌ Story demasiado vaga
- ❌ PO no disponible
- ❌ Desarrollador adivina
- ❌ 2 días de trabajo perdidos
- ❌ Refactorización completa necesaria

**Cita de desarrollador:**
> « Las user stories son tan vagas que a menudo tengo que adivinar qué hacer. Luego en review, me dicen que no es eso. He perdido tiempo codificando algo que nunca se usará. »

**Estadística Real:**

Encuesta sobre 140 desarrolladores:
- **67%** declaran haber tenido que « adivinar » lo que había que desarrollar al menos una vez por sprint
- **42%** han rehecho trabajo porque su interpretación era equivocada

**Resultado:** Las stories vagas crean desperdicio.

---

## Por Qué Las User Stories Persisten

### Razón 1: « Es El Método Agile » (Dogma Scrum)

**El Problema:**

Los equipos usan user stories porque **« así se hace en Agile »**.

**Scrum impone el formato:**

```
Como <rol>, quiero <acción> para <beneficio>.
```

**Pero este formato nunca describe la solución técnica.**

**Ejemplo:**

Story Scrum estándar:

```
Como usuario, quiero restablecer mi contraseña
para recuperar el acceso a mi cuenta.
```

**Lo que no dice:**
- Proceso: ¿Email con link? ¿Código de 6 dígitos? ¿Pregunta secreta?
- UI: ¿Página dedicada? ¿Modal? ¿Flujo en varios pasos?
- Seguridad: ¿El token expira después de cuánto tiempo? ¿Hash de la contraseña?
- Casos especiales: ¿Qué pasa si el email no existe? ¿Si el token expiró?

**El Problema:**
- ❌ Formato impuesto que no conviene a la claridad técnica
- ❌ Equipos siguen el formato por dogmatismo
- ❌ Stories permanecen vagas « porque es Agile »

**Cita de desarrollador:**
> « Nos dijeron que en Agile, se escriben user stories. Entonces las escribimos. Aunque sean vagas. Aunque no nos ayuden. Porque "es el método". »

**Resultado:** El dogma Scrum mantiene las stories vagas.

---

### Razón 2: « Detallaremos Durante El Grooming » (Aclaración Diferida)

**El Problema:**

Los PO escriben stories vagas con la idea de que **« detallaremos durante el grooming »**.

**Pero el grooming se convierte en una sesión de especificación diferida.**

**Lo que pasa:**

**Creación de la story (5 minutos):**

PO escribe:

```
USER-567: Como usuario, quiero ver mi historial de compras.
```

PO piensa: « Detallaremos durante el grooming. »

**Grooming (45 minutos):**

Equipo hace 20 preguntas:
- ¿Qué campos mostrar?
- ¿Orden cronológico?
- ¿Paginación?
- ¿Filtros por fecha?
- ¿Exportación posible?
- ¿Detalles de cada compra clicables?

**El PO responde cada pregunta.**

**¿Pero por qué no escribir todo eso directamente en la story?**

**El Problema:**
- ❌ Story creada voluntariamente vaga
- ❌ Grooming = sesión de especificación
- ❌ Tiempo perdido aclarando lo que debería haber estado claro
- ❌ Equipo entero movilizado (8 personas × 45 min = 6h de tiempo acumulado)

**Cita de PO:**
> « Creo stories de alto nivel. Las detallamos en equipo durante el grooming. Es más colaborativo. »

**Realidad:**

Es solo tiempo perdido. El PO podría haber escrito una descripción clara desde el principio.

**Resultado:** La aclaración se difiere al grooming.

---

### Razón 3: Confusión Entre « Necesidad Del Usuario » Y « Tarea Del Desarrollador »

**El Problema:**

Las user stories se supone que describen la **necesidad del usuario**, no la **solución técnica**.

**Pero los desarrolladores necesitan saber qué codificar, no solo la necesidad.**

**Ejemplo:**

**Necesidad del usuario (user story):**

```
Como usuario, quiero ser notificado de los nuevos mensajes.
```

**Lo que el desarrollador necesita (especificación):**

```
Issue: Implementar sistema de notificaciones para mensajes

Backend:
- Crear tabla notifications (id, user_id, message_id, read, created_at)
- API POST /notifications para crear una notificación
- API GET /notifications?user_id=X para listar
- API PATCH /notifications/:id/read para marcar como leída
- Trigger: crear notificación automáticamente cuando nuevo mensaje

Frontend:
- Icono de campana en header con badge count (número de no leídas)
- Dropdown al hacer clic: lista de las 10 últimas notificaciones
- Clic en notificación: marcar como leída + redirección al mensaje
- Polling cada 30s para refresh del count

Diseño:
- Maqueta: /designs/notifications-bell.png
```

**El primero describe el « por qué ». El segundo describe el « qué ».**

**Los desarrolladores necesitan el segundo, no el primero.**

**El Problema:**
- ❌ User story describe la necesidad (para product)
- ❌ Desarrollador necesita la solución (para codificar)
- ❌ Confusión entre los dos
- ❌ Stories vagas porque no apuntan a los desarrolladores

**Cita de desarrollador:**
> « Las user stories están escritas para el product owner, no para mí. Describen la necesidad del usuario, pero no puedo codificar una necesidad. Puedo codificar una solución. »

**Resultado:** Las stories no están escritas para los desarrolladores.

---

## El Enfoque Sinra: Issues Directas Y Accionables

Sinra abandona las user stories a favor de **issues directas** que describen exactamente qué hacer.

### El Concepto: Issue = Descripción Clara De Qué Desarrollar

En Sinra, una **issue** es una tarea accionable que dice exactamente qué hacer.

**Sin formato impuesto. Solo una descripción clara.**

**Ejemplo de issue Sinra:**

```
Título: Agregar botón logout en header con confirmación

Descripción:
Agregar un botón « Desconexión » en el header de la aplicación.

Comportamiento:
- Botón « Desconexión » visible solo para usuarios conectados
- Posición: header, a la derecha, después del icono de notificaciones
- Al hacer clic: mostrar modal de confirmación
  - Mensaje: « ¿Realmente quieres desconectarte? »
  - Botones: « Cancelar » y « Desconexión »
- Si « Desconexión »:
  - Llamada API DELETE /auth/session
  - Eliminación del token JWT de localStorage
  - Redirección a /login

API:
- Endpoint: DELETE /auth/session
- Invalidar el refresh token en BD
- Log del evento (user_id, timestamp)

Diseño:
- Maqueta: /designs/header-logout.png
- Modal: componente existente <ConfirmModal>

Tests:
- Test E2E: clic logout → modal → confirm → redirección /login
- Test unitario: invalidación token

Estimación: 1 día
```

**Diferencia con user story:**

**User story:**
> Como usuario, quiero desconectarme para asegurar mi cuenta.

**Issue Sinra:**
> Describe exactamente **dónde**, **cómo**, **qué**, **con qué diseño**, **qué tests**.

**Resultado:** El desarrollador sabe exactamente qué hacer.

---

### Anatomía De Una Issue Sinra vs. User Story Agile

Retomemos el ejemplo de las notificaciones.

#### User Story Agile (Vaga)

```
USER-892: Como usuario, quiero recibir notificaciones
para estar informado de los nuevos mensajes.

Criterios de aceptación:
- El usuario recibe una notificación cuando hay un nuevo mensaje
- El usuario puede ver sus notificaciones
- El usuario puede marcar una notificación como leída
```

**Problema:** Ningún detalle sobre el « cómo ».

**Resultado:** 45 minutos de grooming + 3 reuniones de aclaración.

---

#### Issue Sinra (Clara)

```
Título: Sistema de notificaciones para nuevos mensajes

Descripción:
Implementar un sistema de notificaciones que alerte al usuario
cuando recibe un nuevo mensaje.

Backend:
- Crear tabla `notifications`
  - Campos: id, user_id, message_id, content, read (boolean), created_at
- Crear API:
  - POST /notifications (admin only, para creación manual si es necesario)
  - GET /notifications?user_id=X&read=false (listar no leídas)
  - PATCH /notifications/:id/read (marcar como leída)
  - GET /notifications/count?user_id=X (count no leídas)
- Trigger automático:
  - Cuando mensaje creado → crear notificación para destinatario
  - Batching: máx 1 notificación por minuto por usuario (evitar spam)
- Indexar: user_id, read, created_at

Frontend:
- Icono de campana en header (componente <NotificationBell>)
  - Badge rojo con count de no leídas
  - Mostrar badge solo si count > 0
- Al hacer clic: dropdown con lista de notificaciones
  - Mostrar 10 últimas notificaciones
  - Formato: « [Remitente] te envió un mensaje » + timestamp relativo
  - Clic en notificación:
    - Marcar como leída (PATCH /notifications/:id/read)
    - Redirección a /messages/:message_id
  - Link « Ver todo » → /notifications
- Polling:
  - Fetch count cada 30 segundos
  - Update badge si count cambia
- Página /notifications:
  - Lista completa de notificaciones (paginada, 20 por página)
  - Botón « Marcar todo como leído »

Diseño:
- Maqueta: /designs/notifications-ui.fig
- Icono: Bell icon (Heroicons)
- Color badge: red-500
- Animación: pulse en nuevo count

Tests:
- Backend:
  - Test creación notificación automática cuando mensaje enviado
  - Test batching (sin spam)
  - Test API GET/PATCH
- Frontend:
  - Test E2E: nuevo mensaje → badge aparece → clic → modal → clic notif → redirección
  - Test polling (mock API)

Dependencias:
- Require: API /messages funcional
- Bloquea: Notificación push (future issue)

Estimación: 3 días (1 backend, 1.5 frontend, 0.5 tests)

Asignado: Dev 2
Proyecto: Messaging V2
Release: Q1 2026
```

**Diferencia:**

**User story:** 5 líneas vagas.

**Issue Sinra:** Especificación completa. Accionable inmediatamente.

**Resultado:**

- ✅ Desarrollador sabe exactamente qué hacer
- ✅ No se necesita grooming
- ✅ Sin preguntas
- ✅ Codificar directamente

<img src="/assets/images/blog/2026-01-02-user-stories-vs-sinra-issue.svg" alt="User story vaga vs issue Sinra detallada" width="800" height="450" loading="lazy">

---

### Los Tres Pilares De Las Issues Sinra

#### 1. Sin Formato Impuesto (Descripción Clara, Eso Es Todo)

**El Concepto:**

Sinra no impone un formato « Como... quiero... para... ».

**Solo una regla: la descripción debe ser clara y accionable.**

**Beneficio:** Flexibilidad para escribir lo que es útil, no lo que es dogmático.

---

#### 2. Issues Técnicas, No Necesidades De Usuario (Decir Exactamente Qué Hacer)

**El Concepto:**

Una issue Sinra describe **la solución técnica**, no la necesidad del usuario.

**Ejemplo:**

**Malo (necesidad):**
> El usuario quiere ver su historial.

**Bueno (solución):**
> Crear página /history con tabla paginada (20 por página) mostrando: fecha, acción, usuario. API GET /history?user_id=X. Filtros por fecha (date picker). Diseño: /designs/history.png.

**Beneficio:** El desarrollador sabe exactamente qué codificar.

---

#### 3. Capabilities Para Agrupar Las Issues (Organizar Sin Perder Claridad)

**El Concepto:**

Sinra usa **capabilities** para agrupar issues relacionadas.

**Ejemplo:**

**Capability:** Sistema de notificaciones

**Issues asociadas:**
1. Crear tabla y API notifications (3d)
2. Agregar icono de campana en header con badge (1.5d)
3. Implementar página /notifications (2d)
4. Agregar polling para refresh auto (0.5d)
5. Tests E2E notificaciones (1d)

**Total: 8 días**

**Beneficio:**
- Ver el « big picture » (capability)
- Trabajar en tareas claras (issues)

<img src="/assets/images/blog/2026-01-02-user-stories-capability-breakdown.svg" alt="Capability agrupando 5 issues accionables" width="800" height="450" loading="lazy">

---

## Ejemplo Real: Lumio (Aplicación Móvil)

**Lumio (equipo de 8 desarrolladores, app móvil B2C)**

*Nota: Lumio es una empresa real que hemos anonimizado bajo un nombre ficticio para proteger su confidencialidad.*

### Antes De Sinra: User Stories Vagas

**Problemas Encontrados:**

**Problema 1: Grooming interminable**

Equipo pasa **4h30 por semana** en backlog grooming.

**Flujo típico:**
- Leer story vaga
- Hacer 15 preguntas
- Aclarar
- Dividir en sub-tareas

**Problema 2: Brecha story / realidad**

**Ejemplo:**

Story:
> Como usuario, quiero compartir contenido.

**Realidad (después de aclaración):**
- Compartir por: Email, SMS, Facebook, Twitter, Instagram, Copiar link
- Con preview card (imagen + título + descripción)
- Tracking: quién hizo clic en el link
- Deep linking para abrir en la app
- 12 días de desarrollo en lugar de los 2 estimados

**Problema 3: Desarrolladores adivinan**

**64% de los desarrolladores** declaran haber tenido que « adivinar » al menos una vez por sprint.

**Resultado:** Refactorización del 30% del código en review.

**Problema 4: Stories re-groomeadas**

**38% de las stories** son re-groomeadas al menos una vez.

Algunas stories groomeadas 3 veces antes de ser desarrollables.

**Problema 5: Frustración**

Encuesta interna:
- **72% de los devs** frustrados por las stories vagas
- **« ¿Por qué no podemos simplemente decir claramente qué hay que hacer? »**

**Moral del equipo:** Agotado por las reuniones de aclaración.

---

### Después De Sinra: Issues Directas

**Flujo de trabajo:**

1. **Product escribe una issue clara** (no user story)
   - Título explícito
   - Descripción detallada: qué, dónde, cómo
   - Referencia al diseño si es necesario
   - Criterios de test

2. **Desarrollador lee la issue** → sabe exactamente qué hacer

3. **No se necesita grooming** (issue ya clara)

4. **Desarrollo directo**

**Cambio principal:**

**Antes (user story vaga):**

```
Como usuario, quiero filtrar los restaurantes.
```

**Después (issue Sinra clara):**

```
Título: Agregar filtros de restaurantes (cocina, precio, distancia)

Descripción:
Agregar 3 filtros en /restaurants:
- Cocina: dropdown con opciones (Francesa, Italiana, Japonesa, Otra)
- Precio: range slider (€-€€€€, valores 1-4)
- Distancia: range slider (0-10km)

Comportamiento:
- Filtros en sidebar izquierda
- Al cambiar: petición API GET /restaurants?cuisine=X&price=Y&distance=Z
- Resultados actualizados en tiempo real (debounce 300ms)
- Mostrar count resultados: « 24 restaurantes encontrados »
- Botón reset para limpiar todos los filtros

API:
- Endpoint existente: GET /restaurants ya soporta query params
- No se necesitan cambios en backend

Diseño:
- Maqueta: /designs/filters.fig
- Componentes: <Dropdown>, <RangeSlider> (existentes)

Tests:
- Test E2E: seleccionar filtro → resultados actualizados
- Test debounce

Estimación: 1.5 días
Asignado: Dev 3
```

**Resultados (Después De 3 Meses):**

**Métrica 1: Tiempo de grooming**
- **Antes:** 4.5h por semana
- **Después:** 0.5h por semana (90% de reducción)

**Métrica 2: Stories re-groomeadas**
- **Antes:** 38% de las stories
- **Después:** 3% de las issues (solo en caso de cambio de scope)

**Métrica 3: Desarrolladores que adivinan**
- **Antes:** 64% adivina al menos 1 vez por sprint
- **Después:** 8%

**Métrica 4: Código rehecho**
- **Antes:** 30% del código
- **Después:** 5%

**Métrica 5: Tiempo de desarrollo**
- **Antes:** 15% más lento (debido a aclaraciones)
- **Después:** Baseline (sin tiempo perdido)

**Cita de Lead Developer:**
> « Antes, pasábamos nuestros viernes haciendo grooming del backlog. Leíamos stories vagas, hacíamos 20 preguntas, dividíamos. Ahora, las issues están claras desde el principio. Codificamos directamente. »

**Cita de Product Manager:**
> « Al principio, encontré tedioso escribir issues detalladas. Luego me di cuenta: pasaba el mismo tiempo en grooming respondiendo preguntas. Ahora, documento una vez, claramente, y el equipo desarrolla sin preguntas. »

<img src="/assets/images/blog/2026-01-02-user-stories-lumio-before-after.svg" alt="Lumio: métricas antes/después Sinra" width="800" height="500" loading="lazy">

---

## Jira vs. Sinra: Comparación User Stories

| **Aspecto** | **Jira (User Stories)** | **Sinra (Issues Directas)** |
|------------|-------------------------|------------------------------|
| **Formato** | ❌ Impuesto (Como...) | ✅ Libre (descripción clara) |
| **Claridad** | ❌ Vaga (necesidad, no solución) | ✅ Precisa (qué, dónde, cómo) |
| **Grooming** | ❌ 4h+ por semana | ✅ Mínimo (<1h) |
| **Accionable** | ❌ Requiere aclaración | ✅ Desarrollable inmediatamente |
| **Brecha story/código** | ❌ Masiva (2 líneas → 50 tareas) | ✅ Mínima (issue = spec) |
| **Desarrolladores adivinan** | ❌ 64% adivinan | ✅ 8% adivinan |
| **Refactorización en review** | ❌ 30% del código | ✅ 5% |

---

## Las Cinco Señales De Que Tus User Stories Son Demasiado Vagas

### Señal 1: Pasas 4h+ Por Semana En Grooming

Si pasas 4 horas o más cada semana aclarando stories, son demasiado vagas.

---

### Señal 2: « OK Pero Concretamente, ¿Qué Hago? » Es Una Frase Recurrente

Si tus desarrolladores hacen esta pregunta en cada story, es porque las stories no dicen qué hacer.

---

### Señal 3: Re-Groomeas Las Mismas Stories Varias Veces

Si el 30%+ de tus stories son groomeadas 2-3 veces antes de ser desarrollables, es un problema de claridad.

---

### Señal 4: Los Desarrolladores Adivinan Y El Código Se Rehace En Review

Si el 30%+ del código se rehace porque los devs adivinaron mal, es porque las stories carecen de detalles.

---

### Señal 5: La Brecha Entre Estimación Y Realidad Es Masiva

Si tus stories estimadas en 2 días toman regularmente 10 días, es porque la complejidad real estaba oculta.

---

## Cómo Usar Sinra Para Escribir Issues Claras

### Paso 1: Abandonar El Formato « Como »

**Acción:**
- Dejar de imponer el formato user story
- Escribir una descripción clara y libre
- Foco: decir exactamente qué hay que desarrollar

---

### Paso 2: Describir La Solución, No La Necesidad

**Acción:**
- No escribir: « El usuario quiere X »
- Escribir: « Crear página Y con comportamiento Z, diseño W, API V »
- Resultado: Issue accionable

---

### Paso 3: Incluir Todos Los Detalles Técnicos

**Acción:**
- Backend: API, BD, modelos
- Frontend: Componentes, comportamiento, UX
- Diseño: Maqueta, assets
- Tests: Escenarios E2E, tests unitarios
- Resultado: Desarrollador sabe exactamente qué hacer

---

### Paso 4: Usar Capabilities Para Agrupar

**Acción:**
- Crear capability para feature grande
- Dividir en issues técnicas claras
- Cada issue: individualmente accionable
- Resultado: Visión global + tareas precisas

---

### Paso 5: Eliminar El Grooming (O Reducirlo A <1h)

**Acción:**
- Si issue clara desde el principio → sin grooming
- Grooming solo para preguntas excepcionales
- Resultado: 90% de reducción del tiempo de grooming

---

## Puntos De Acción: Eliminar Las User Stories Vagas

1. **Audita tus stories actuales.** ¿Cuántas requieren >30 min de aclaración?
2. **Mide el tiempo de grooming.** ¿Cuántas horas por semana?
3. **Prueba las issues Sinra.** Escribe 5 issues detalladas en lugar de user stories.
4. **Compara.** ¿Se necesita grooming? ¿Desarrollador bloqueado?
5. **Adopta Sinra.** Issues directas, capabilities para agrupar.

---

## El Punto Clave

**Las user stories en formato Agile son demasiado vagas.**

Entre **formato impuesto**, **descripción de la necesidad en lugar de la solución**, **grooming interminable**, y **desarrolladores que adivinan**, nadie sabe realmente qué hacer.

**Sinra usa issues directas y accionables.**

Sin formato impuesto. Descripción clara: qué, dónde, cómo, diseño, tests.

**El resultado:**
- ✅ Grooming reducido en 90% (4.5h → 0.5h)
- ✅ Issues accionables inmediatamente (sin aclaración)
- ✅ Desarrolladores ya no adivinan (8% en lugar de 64%)
- ✅ Refactorización reducida (5% en lugar de 30%)
- ✅ Estimaciones precisas (complejidad visible desde el principio)

**Tus desarrolladores saben exactamente qué hacer.**

**Tu backlog es accionable.**

---

## Descubre también la serie « Problemas Invisibles »

- **[El QA Invisible](/qa/2025/12/22/qa-invisible-tests-disperses.html)** - 847 tests en Excel: cómo hacer el QA visible con Sinra Testings
- **[La Documentación Muerta](/documentation/2025/12/24/documentation-morte-notion-confluence.html)** - 127 páginas Confluence obsoletas: cómo hacer la documentación viva
- **[El Caos Del Backlog](/planning/2025/12/26/chaos-backlog-personne-sait-q2.html)** - 537 issues caóticas: cómo organizar el trabajo por releases y cycles
- **[Las Dependencias Ocultas](/dependencies/2025/12/28/dependances-cachees-features-bloquees.html)** - 47% de las features bloqueadas: cómo hacer las dependencias visibles
- **[El Síndrome Multi-Proyecto](/capacity/2025/12/30/syndrome-multi-projet-rien-navance.html)** - Desarrolladores en 4 proyectos simultáneos: cómo limitar los proyectos activos

---

**¿Listo para abandonar las user stories vagas?** [Inicia una prueba gratuita de Sinra →](https://app.sinra.dev/users/sign_up)

Descubre una gestión de proyectos donde las issues dicen exactamente qué hacer, no solo la necesidad del usuario.
