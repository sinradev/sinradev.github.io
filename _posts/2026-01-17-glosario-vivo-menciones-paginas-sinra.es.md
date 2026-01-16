---
layout: post
title: "De Notion A Sinra: Cuando Tu Glosario Técnico Cobra Vida Con @Menciones"
subtitle: "Entre definiciones obsoletas, vocabulario disperso y documentación aislada del trabajo, nadie habla el mismo idioma: Sinra conecta glosario y ejecución mediante @pages"
description: "Los equipos crean glosarios técnicos en Notion. Seis meses después, nadie los utiliza y cada uno reinventa las definiciones. Descubre cómo las @menciones de páginas de Sinra transforman tu glosario en una fuente viva integrada con el trabajo."
date: 2026-01-17 09:00:00 +0100
lang: es
category: Documentación
excerpt: "El nuevo desarrollador pregunta: ¿Qué es exactamente una release candidate aquí? Señalas el glosario de Notion creado hace 8 meses. Encuentra 3 definiciones contradictorias. Bienvenido al cementerio de glosarios técnicos."
permalink: /documentacion/:year/:month/:day/glosario-vivo-menciones-paginas-sinra.html
featured_image: /assets/images/blog/2026-01-17-glossaire-vivant-featured.png
---

## "¿Qué Es Una Release Candidate Aquí?"

**Martes por la tarde. Reunión de planificación de release.**

Product Manager: "Vamos a crear una release candidate el viernes para pruebas en staging."

**El nuevo desarrollador (llegó hace 2 semanas) levanta la mano:**

Dev: "Disculpa, ¿qué es exactamente una release candidate en nuestro flujo de trabajo?"

PM: "¡Buena pregunta! Tenemos un glosario en Notion. Consulta la página Vocabulario de Gestión de Releases."

**El desarrollador abre Notion.**

**Búsqueda: "Release Candidate"**

**Resultado 1:** `Glosario Engineering v1` (creado hace 12 meses)
> **Release Candidate (RC):** Versión probada internamente, lista para despliegue en producción sin modificaciones adicionales.

**Resultado 2:** `Vocabulario Producto 2025` (creado hace 6 meses)
> **RC (Release Candidate):** Build estable desplegada en entorno staging para validación QA. Puede recibir hotfixes.

**Resultado 3:** `Guía Onboarding Desarrolladores` (creado hace 3 meses)
> **Release Candidate:** Versión feature-complete desplegada para pruebas de usuarios beta. Code freeze excepto bugs críticos.

**El desarrollador, perplejo:**

> "Eh... tengo tres definiciones diferentes. ¿Cuál es la correcta?"

PM: "Ah sí, el glosario no se ha actualizado desde que cambiamos nuestro proceso."

Dev: "¿Cuándo fue eso?"

PM: "Hace 4 meses."

Dev: "¿Y la definición correcta es cuál?"

PM: "Actualmente, lo llamamos staging release. El término release candidate ya no lo usamos realmente."

**El desarrollador cierra Notion.**

Dev: "¿Entonces su glosario está obsoleto y usan términos que ni siquiera están en él?"

PM: "... Sí."

<img src="/assets/images/blog/2026-01-17-glossaire-contradictoire.svg" alt="Tres definiciones contradictorias en el glosario de Notion" width="800" height="500" loading="lazy">

---

## El Problema De Los Glosarios Muertos

La mayoría de los equipos técnicos crean un glosario o wiki de vocabulario. Notion, Confluence, Google Docs, GitHub Wiki.

**Objetivo noble:** Crear una única fuente de verdad para el vocabulario empresarial y técnico.

**Resultado 6 meses después:** Glosario muerto, obsoleto, que nadie consulta.

### Los Cinco Síntomas Del Glosario Muerto

#### 1. Definiciones Obsoletas (El Vocabulario Evoluciona, El Glosario No)

**El Escenario:**

Creas un glosario con 50 definiciones cuidadosamente redactadas.

**Meses 1-2:** Todos lo consultan. "¡Súper útil!"

**Mes 3:** El equipo cambia de metodología. Los términos evolucionan. El glosario no se actualiza.

**Mes 6:** El 60% de las definiciones están obsoletas o son inexactas.

**Mes 12:** Nadie consulta el glosario. Cada uno tiene su propia interpretación de los términos.

**Ejemplo Real:**

**Término:** "Sprint"

**Definición del glosario (8 meses):**
> Iteración de 2 semanas con objetivos fijos y ceremonias Scrum.

**Realidad actual:**
El equipo abandonó Scrum para adoptar "cycles" de 4 semanas con planificación flexible.

**Resultado:** Nuevo miembro lee "sprint" en el glosario, piensa que el equipo hace Scrum. Confusión total.

<img src="/assets/images/blog/2026-01-17-glossaire-obsolescence.svg" alt="Cronología de obsolescencia del glosario" width="800" height="400" loading="lazy">

**El Problema:**
- ❌ El vocabulario evoluciona con la metodología
- ❌ Glosario congelado, nunca actualizado
- ❌ Desincronización progresiva
- ❌ Pérdida de confianza en el glosario

**Cita Lead Developer:**
> "Creamos un glosario hermoso en Notion. Ahora sirve principalmente para mostrar lo que ya no hacemos."

---

#### 2. Vocabulario Disperso (Cada Herramienta Tiene Su Propia Jerga)

**El Escenario:**

Tu equipo usa múltiples herramientas. Cada herramienta impone su propio vocabulario.

**Stack típico:**
- **Jira:** Epic, Story, Subtask, Sprint, Backlog
- **Notion:** Database, Page, Block, Relation
- **GitHub:** Issue, PR, Project, Milestone
- **Tu glosario empresarial:** Capability, Feature, Task, Release

**Resultado:** 4 vocabularios diferentes describiendo lo mismo.

**Ejemplo Concreto:**

PM escribe en Notion:
> "Vamos a crear una **capability** "Autenticación SSO" con 5 **tasks** asignadas al próximo **release**."

Dev traduce en Jira:
> "Creé un **epic** "Autenticación SSO" con 5 **stories** en el **sprint** 42."

QA traduce en Slack:
> "Estoy probando la **feature** "SSO" para el **milestone** v2.4."

**Nadie habla el mismo idioma.**

<img src="/assets/images/blog/2026-01-17-vocabulaire-disperse.svg" alt="Vocabulario fragmentado entre herramientas" width="800" height="450" loading="lazy">

**El Problema:**
- ❌ Cada herramienta impone su jerga
- ❌ Traducción mental constante (¿capability = epic = feature?)
- ❌ Glosario empresarial desconectado de las herramientas de trabajo
- ❌ Confusión en las conversaciones

**Cita Product Manager:**
> "Cuando digo capability, los devs piensan epic, QA piensa feature, y los stakeholders piensan proyecto. Nunca hablamos de lo mismo."

---

#### 3. Glosario Aislado Del Trabajo (Documentación ≠ Ejecución)

**El Escenario:**

Tienes un glosario hermoso en Notion. Pero está **aislado del trabajo diario**.

**Flujo de trabajo típico:**

1. **Escribir glosario** en Notion (1 día, bien hecho)
2. **Crear issues** en Jira (vocabulario Jira, no vocabulario del glosario)
3. **Discutir features** en Slack (cada uno usa sus propios términos)
4. **Codificar** en GitHub (comentarios con jerga técnica)

**El glosario de Notion nunca aparece en el flujo de trabajo.**

**Resultado:** Glosario = documentación muerta, nunca consultada durante el trabajo.

**Ejemplo Real:**

**Término definido en el glosario de Notion:** "Capability"
> Una funcionalidad de alto nivel que agrupa múltiples issues técnicas.

**Uso en Jira:** "Epic"

**Uso en Slack:** "Feature"

**Uso en GitHub PR:** "Module"

**El glosario no tiene impacto en el vocabulario usado diariamente.**

**El Problema:**
- ❌ Glosario separado de las herramientas de trabajo
- ❌ Sin incentivo para usar el vocabulario definido
- ❌ Cada uno usa sus propios términos
- ❌ El glosario se vuelve obsoleto porque está desconectado de la realidad

**Cita QA Engineer:**
> "¿Tenemos un glosario? Ni siquiera lo sabía. Solo uso los términos que veo en los issues."

---

#### 4. Definiciones Contradictorias (Múltiples Versiones, Sin Autoridad)

**El Escenario:**

Tu equipo crece. Varias personas crean definiciones. Resultado: versiones contradictorias.

**Ejemplo:**

**Término:** "Hotfix"

**Definición A (Glosario Engineering):**
> Corrección urgente desplegada en producción sin pasar por el ciclo normal de release.

**Definición B (Guía Ops):**
> Parche crítico desplegado en una rama de mantenimiento para corregir un bug bloqueante.

**Definición C (Proceso QA):**
> Cambio menor desplegado directamente en producción después de validación rápida (< 2h).

**Tres definiciones, tres interpretaciones.**

**Pregunta:** ¿Cuál es correcta?

**Respuesta:** Ni idea. Nadie definió una versión oficial.

**El Problema:**
- ❌ Múltiples fuentes de definiciones
- ❌ Sin versión "oficial"
- ❌ Imposible saber qué definición es correcta
- ❌ Debates estériles sobre el significado "verdadero" de los términos

---

#### 5. Glosario No Utilizado (Demasiada Fricción Para Consultarlo)

**El Escenario:**

Estás trabajando en un issue en Jira. Ves el término "staging release."

**Para consultar el glosario, debes:**

1. Abrir una nueva pestaña
2. Ir a Notion
3. Buscar "Glosario"
4. Encontrar la página correcta (hay 3)
5. Buscar "staging release" en la página
6. Leer la definición
7. Volver a Jira

**Tiempo total:** 2-3 minutos.

**Resultado:** No lo haces. Adivinas o preguntas a un colega.

**El Problema:**
- ❌ Demasiada fricción para consultar el glosario
- ❌ Cambio de contexto (Jira → Notion → Jira)
- ❌ Sin enlace directo desde el trabajo a la definición
- ❌ Nadie consulta el glosario en la práctica

**Cita Desarrollador:**
> "El glosario está en Notion. Trabajo en Jira y GitHub. Nunca voy a buscar en Notion mientras codifico."

**Resultado:** Glosario ignorado, vocabulario fragmentado, confusión permanente.

---

## Por Qué Mueren Los Glosarios

### Razón 1: Glosario Separado Del Flujo De Trabajo

**El Problema:**

El glosario vive en una herramienta (Notion, Confluence).

El trabajo ocurre en otras herramientas (Jira, Linear, GitHub).

**Resultado:** El glosario nunca se usa durante el trabajo diario.

**Flujo de trabajo típico:**

1. PM escribe spec en Notion (con términos del glosario)
2. Dev crea issues en Jira (con jerga Jira)
3. QA prueba feature (con sus propios términos)
4. El glosario nunca aparece

**Nadie consulta el glosario porque está en otro lugar.**

---

### Razón 2: Sin Incentivo Para Mantener El Glosario Actualizado

**El Problema:**

Mantener un glosario = trabajo manual, no urgente, invisible.

**Escenario:**

Tu equipo cambia de proceso. "Ya no hacemos sprints, hacemos cycles."

**¿Quién actualiza el glosario?**

**Respuesta A:** El PM. ("No tengo tiempo.")

**Respuesta B:** El lead dev. ("No es mi trabajo.")

**Respuesta C:** Nadie.

**6 meses después:** El glosario sigue diciendo "sprint". Nuevo miembro piensa que hacen Scrum. Confusión.

**El Problema:**
- ❌ Actualizar el glosario nunca es urgente
- ❌ Sin responsabilidad clara
- ❌ El vocabulario evoluciona más rápido que el glosario
- ❌ Desincronización progresiva

---

### Razón 3: Imposible Vincular Definiciones Y Trabajo Real

**El Problema:**

En Notion, puedes crear un glosario hermoso.

Pero no puedes **vincular directamente una definición a un issue o capability**.

**Ejemplo:**

Creas un issue en Jira: "Implementar staging release para v2.4."

Quieres que el equipo entienda qué es una "staging release" según tu definición.

**En Notion:** Puedes copiar-pegar la definición en la descripción de Jira. (Redundancia, pérdida de sincronización si la definición cambia.)

**En Jira:** Puedes poner un enlace a la página de Notion. (Pero nadie hace clic.)

**Resultado:** Sin vínculo directo entre vocabulario y trabajo.

<img src="/assets/images/blog/2026-01-17-notion-glossaire-isole.svg" alt="Glosario de Notion aislado del trabajo" width="800" height="450" loading="lazy">

**Cita CTO:**
> "Pasamos 3 días creando un glosario perfecto. Ahora nadie lo usa porque no está integrado con nuestras herramientas de trabajo."

---

## El Enfoque De Sinra: Glosario Vivo Con @Menciones De Páginas

Sinra resuelve el problema del glosario muerto con un mecanismo simple: **@menciones de páginas**.

### El Concepto: Páginas + @Menciones = Glosario Integrado Con El Trabajo

En Sinra, creas tu glosario en **páginas** (equivalente a páginas de Notion, pero integradas con la herramienta).

**Luego, puedes mencionar estas páginas directamente en tus issues y capabilities con @pages.**

**Resultado:** El glosario se convierte en **parte del trabajo**, no documentación externa.

---

### Anatomía De Un Glosario Vivo De Sinra

Así es como funciona en la práctica.

#### Paso 1: Crear Páginas Para Tu Glosario

**En Sinra, creas páginas organizadas por categorías.**

**Ejemplo: Categoría "Vocabulario de Release"**

**Página 1: Staging Release**
```markdown
# Staging Release

**Definición:**
Versión feature-complete desplegada en entorno staging para pruebas QA y validación empresarial antes de producción.

**Criterios:**
- Code freeze (sin nuevas features)
- Todas las pruebas automatizadas pasan
- Validación QA obligatoria
- Duración en staging: 2-3 días mínimo

**Diferencia con Production Release:**
Staging release puede recibir hotfixes para bugs descubiertos en QA.
Production release solo recibe parches críticos.

**Flujo de trabajo:**
1. Merge todas las features en rama `release-staging`
2. Despliegue automático en entorno staging
3. Pruebas QA
4. Si validado → promoción a Production Release
5. Si bugs → hotfixes → volver al paso 3
```

**Página 2: Production Release**
```markdown
# Production Release

**Definición:**
Versión validada en staging, desplegada en producción y accesible a usuarios finales.

**Criterios:**
- Validación QA completa en staging
- Aprobación Product Manager
- Pruebas de regresión pasadas
- Plan de monitoreo y rollback listo

**Flujo de trabajo:**
Staging Release validada → Tag git `v2.4.0` → Despliegue en producción
```

**Página 3: Hotfix**
```markdown
# Hotfix

**Definición:**
Corrección urgente aplicada directamente a una Production Release para corregir un bug crítico sin esperar el próximo ciclo.

**Criterios de hotfix:**
- Bug bloqueante (crash, pérdida de datos, seguridad)
- Impacto significativo en usuarios
- Sin solución alternativa

**Flujo de trabajo:**
1. Crear rama `hotfix/bug-description` desde tag production
2. Fix + tests
3. Review acelerada
4. Despliegue directo en producción
5. Merge en rama main para integración futura
```

**Categoría Sinra:** "Vocabulario de Release"

**Resultado:** Tienes un glosario estructurado, organizado por categorías, en Sinra.

<img src="/assets/images/blog/2026-01-17-sinra-pages-glossaire.svg" alt="Páginas Sinra organizadas por categorías" width="800" height="450" loading="lazy">

---

#### Paso 2: Mencionar Páginas En Issues Y Capabilities Con @pages

**Aquí está la diferencia clave entre Notion y Sinra:**

**En Notion:** Tu glosario está en una página. Tus issues están en Jira. Sin vínculo directo.

**En Sinra:** Tus issues y capabilities pueden **mencionar directamente páginas del glosario con @pages**.

**Ejemplo: Capability "Despliegue v2.4"**

```markdown
# Capability: Despliegue v2.4

**Objetivo:**
Desplegar versión 2.4 con nuevas features de autenticación y permisos.

**Flujo de trabajo:**
1. Crear una @page:staging-release para pruebas QA
2. Validación QA durante 2-3 días
3. Si validado, promover a @page:production-release
4. En caso de bug crítico post-despliegue, aplicar un @page:hotfix

**Issues asignados:**
- [DEPLOY-120] Preparar staging release v2.4
- [DEPLOY-121] Pruebas QA staging
- [DEPLOY-122] Despliegue producción v2.4
```

**Resultado:**

Cuando un miembro del equipo lee esta capability, ve **@page:staging-release**.

**Al hacer clic en la mención, accede directamente a la página "Staging Release" con la definición completa.**

**No necesita:**
- Abrir otra herramienta
- Buscar en un glosario externo
- Adivinar qué significa "staging release"

**La definición está a un clic.**

<img src="/assets/images/blog/2026-01-17-sinra-mention-pages.svg" alt="Menciones @pages en una capability de Sinra" width="800" height="450" loading="lazy">

---

#### Paso 3: Usar El Glosario En Issues

**Mismo principio para issues.**

**Ejemplo: Issue "Preparar staging release v2.4"**

```markdown
# [DEPLOY-120] Preparar staging release v2.4

**Descripción:**
Crear una @page:staging-release para la versión 2.4 según el flujo de trabajo definido.

**Checklist:**
- [ ] Merge todas las features validadas en rama `release-staging`
- [ ] Verificar que todas las pruebas automatizadas pasan
- [ ] Desplegar en entorno staging
- [ ] Notificar a QA para validación
- [ ] Documentar cambios desde último release

**Referencia vocabulario:**
Ver @page:staging-release para flujo de trabajo completo y criterios de validación.
```

**Resultado:**

Un desarrollador que nunca ha hecho un staging release puede:
1. Leer el issue
2. Ver @page:staging-release
3. Hacer clic para acceder a la definición completa
4. Entender exactamente qué debe hacer

**Sin confusión. Sin preguntas que hacer. Todo está documentado y accesible.**

---

#### Paso 4: El Glosario Evoluciona Con El Trabajo

**Aquí está la magia de las @menciones de páginas:**

Cuando **actualizas una página** del glosario, **todos los enlaces @pages apuntan automáticamente a la versión actualizada**.

**Ejemplo:**

**Mes 1:** Defines "staging release" con un flujo de trabajo de 2 días en staging.

**Mes 6:** Cambias el flujo de trabajo: ahora 3 días mínimo en staging para más pruebas.

**Actualizas la página "Staging Release" en Sinra.**

**Resultado:**

- Todas las capabilities que mencionan @page:staging-release apuntan a la nueva definición
- Todos los issues que mencionan @page:staging-release apuntan a la nueva definición
- No necesitas buscar y actualizar 50 lugares diferentes
- **Única fuente de verdad**

**Diferencia con Notion:**

**En Notion:**
- Actualizas la definición en el glosario
- Pero los enlaces copiados-pegados en Jira/Linear permanecen obsoletos
- Debes actualizar manualmente todos los lugares donde copiaste la definición

**En Sinra:**
- Actualizas la página
- Todos los @pages apuntan automáticamente a la versión actualizada
- Sincronización automática

<img src="/assets/images/blog/2026-01-17-sinra-glossaire-sync.svg" alt="Glosario Sinra sincronizado automáticamente mediante @menciones" width="800" height="400" loading="lazy">

**Cita Lead Developer:**
> "Antes, cuando cambiábamos una definición en nuestro glosario de Notion, teníamos que actualizar 10 lugares diferentes en Jira. Con Sinra, actualizamos la página, y todos los @pages apuntan a la nueva versión. Es automático."

---

### Los Tres Pilares Del Glosario Vivo De Sinra

#### 1. Páginas: Documentación Estructurada Por Categorías

**El Concepto:**

Las **páginas** de Sinra permiten crear tu glosario, organizado por **categorías**.

**Ejemplos de categorías:**
- Vocabulario de Gestión de Releases
- Vocabulario Técnico (API, Arquitectura, etc.)
- Proceso QA
- Flujo de Trabajo de Desarrollo
- Acrónimos Empresariales

**Ventajas:**
- Glosario estructurado y fácil de navegar
- Categorías personalizables según tu negocio
- Búsqueda unificada (encuentra páginas + issues + capabilities)

---

#### 2. @Menciones: Vínculo Directo Entre Glosario Y Trabajo

**El Concepto:**

Puedes **mencionar una página** directamente en un issue o capability con `@page:nombre-pagina`.

**Resultado:**
- Enlace clicable a la definición
- No necesitas salir de Sinra para consultar el glosario
- Glosario integrado en el flujo de trabajo diario

**Diferencia con Notion:**

| **Aspecto** | **Notion** | **Sinra** |
|------------|-----------|-----------|
| **Glosario** | ✅ Sí (páginas) | ✅ Sí (páginas) |
| **Enlace al glosario desde issue** | ⚠️ Copiar URL de Notion en Jira (fricción) | ✅ @page:termino (integrado) |
| **Sincronización automática** | ❌ No (copiar-pegar) | ✅ Sí (enlace dinámico) |
| **Flujo de trabajo** | Aislado (Notion ≠ Jira) | Unificado (todo en Sinra) |

---

#### 3. Única Fuente De Verdad: Una Página, Una Definición

**El Concepto:**

Cada término tiene **una única página** en el glosario de Sinra.

**Resultado:**
- Sin versiones contradictorias
- Todos apuntan a la misma definición
- Actualizaciones centralizadas

**Ejemplo:**

**Término:** "Hotfix"

**Página Sinra:** `/pages/vocabulario-release/hotfix`

**Mencionada en:**
- Capability "Despliegue Producción v2.4": @page:hotfix
- Issue "Corregir bug crítico auth": @page:hotfix
- Página "Flujo de Trabajo Ops": @page:hotfix

**Todos los enlaces apuntan a la misma página.**

**Si actualizas la definición de "hotfix", todos los @pages reflejan instantáneamente el cambio.**

---

## Ejemplo Real: DevStream (SaaS CI/CD)

**DevStream (equipo de 25 personas, plataforma CI/CD para startups)**

*Nota: DevStream es una empresa real que hemos anonimizado bajo un nombre ficticio para proteger su confidencialidad.*

### Antes De Sinra: Glosario De Notion Muerto

**Configuración:**
- Glosario técnico en Notion (120 términos definidos)
- Issues en Linear
- Discusiones en Discord
- Documentación en Confluence

**Problemas Encontrados:**

**Problema 1: Glosario obsoleto**

60% de las definiciones ya no estaban actualizadas después de 6 meses.

Ejemplo: El glosario definía "pipeline" como "secuencia de jobs ejecutados secuencialmente."

Realidad: Habían pasado a pipelines paralelos 4 meses antes.

**Problema 2: Vocabulario disperso**

Cada herramienta imponía su jerga:
- Notion: Capability, Feature, Task
- Linear: Epic, Issue, Subtask
- Confluence: Requirement, Spec, Deliverable

**Resultado:** Nadie hablaba el mismo idioma.

**Problema 3: Glosario nunca usado**

Estadísticas internas:
- 12% del equipo consultaba el glosario al menos una vez al mes
- 88% nunca lo abría

**Razón:** Demasiada fricción (Notion ≠ Linear).

**Cita Product Manager:**
> "Pasamos una semana creando un glosario perfecto. Ahora sirve de museo mostrando el vocabulario que usábamos hace 8 meses."

---

### Después De Sinra: Glosario Vivo Con @Pages

**Flujo de trabajo:**

1. **Migración del glosario de Notion a páginas Sinra** (2 días)
   - Categoría "Vocabulario Técnico"
   - Categoría "Proceso de Release"
   - Categoría "Flujo de Trabajo CI/CD"

2. **Uso de @pages en issues y capabilities**

**Ejemplo: Capability "Pipeline Multi-Stage"**

```markdown
# Capability: Pipeline Multi-Stage

**Objetivo:**
Permitir a los usuarios definir @page:pipeline con múltiples stages (build, test, deploy) ejecutados en paralelo.

**Arquitectura:**
- Cada @page:stage puede tener múltiples @page:jobs
- Los stages se ejecutan secuencialmente
- Los jobs del mismo stage se ejecutan en paralelo

**Issues:**
- [PIPE-301] Implementar ejecución paralela de jobs
- [PIPE-302] Añadir gestión de dependencias entre stages
- [PIPE-303] UI para visualizar pipeline multi-stage
```

**Resultado:**

Desarrollador implementando PIPE-301:
1. Lee la capability
2. Ve @page:pipeline, @page:stage, @page:jobs
3. Hace clic para acceder a las definiciones exactas
4. Entiende la arquitectura sin hacer preguntas

**Tiempo para entender:** 10 minutos (en lugar de 1 hora de preguntas al equipo).

---

**Resultados (Después De 4 Meses):**

**Métrica 1: Uso del glosario**
- **Antes:** 12% del equipo consultaba el glosario
- **Después:** 89% del equipo usa @pages regularmente
- **Razón:** Integrado en el flujo de trabajo (no necesitas salir de Sinra)

**Métrica 2: Vocabulario unificado**
- **Antes:** 3 términos diferentes para lo mismo (capability = epic = requirement)
- **Después:** 1 solo vocabulario (definido en páginas de Sinra)

**Métrica 3: Definiciones obsoletas**
- **Antes:** 60% de definiciones obsoletas después de 6 meses
- **Después:** Solo 5% (actualización fácil porque está integrada con el trabajo)

**Métrica 4: Onboarding**
- **Antes:** 2 semanas para que un nuevo dev entienda el vocabulario
- **Después:** 3 días (lectura dirigida en páginas clave mediante @menciones en capabilities)

**Cita Lead Developer DevStream:**
> "Antes, nuestro glosario de Notion estaba muerto. Ahora, con @pages de Sinra, el glosario está vivo. Cuando creamos un issue, mencionamos términos técnicos con @page. Todos tienen la misma definición."

**Cita Nuevo Desarrollador:**
> "Cuando me uní a DevStream, leí 5 capabilities principales. Cada término técnico tenía un @page. Hice clic, leí las definiciones, entendí todo en 2 días. En mi antigua empresa, habría tardado 2 semanas."

<img src="/assets/images/blog/2026-01-17-devstream-before-after.svg" alt="DevStream: Antes vs Después de Sinra" width="800" height="450" loading="lazy">

---

## Notion vs Sinra: Comparación De Glosarios

| **Aspecto** | **Glosario Notion** | **Glosario Sinra (Páginas + @Menciones)** |
|------------|---------------------|----------------------------------------|
| **Crear glosario** | ✅ Sí (páginas) | ✅ Sí (páginas por categorías) |
| **Enlace desde issue** | ⚠️ URL externa (fricción) | ✅ @page:termino (integrado) |
| **Sincronización automática** | ❌ No (copiar-pegar estático) | ✅ Sí (enlace dinámico) |
| **Integración flujo de trabajo** | ❌ Separado (Notion ≠ Jira/Linear) | ✅ Unificado (todo en Sinra) |
| **Búsqueda unificada** | ❌ Aislada | ✅ Encuentra páginas + issues + capabilities |
| **Actualizar definición** | ⚠️ Manual en todos los lugares copiados | ✅ Automático (todos los @pages actualizados) |
| **Uso real** | ⚠️ 10-20% del equipo | ✅ 80-90% del equipo |
| **Vocabulario unificado** | ❌ Cada herramienta impone su jerga | ✅ Vocabulario definido en páginas Sinra |

---

## Los Cinco Signos De Que Tu Glosario Está Muerto

### Signo 1: Nadie Lo Consulta Durante El Trabajo

Si tu equipo trabaja sin abrir nunca el glosario, está muerto.

---

### Signo 2: Cada Uno Usa Sus Propios Términos

Si PM dice "capability," dev dice "epic," y QA dice "feature," tu glosario no tiene impacto.

---

### Signo 3: Las Definiciones Están Obsoletas

Si tu glosario describe un flujo de trabajo que ya no sigues, está obsoleto.

---

### Signo 4: Los Nuevos Miembros Hacen 100 Preguntas Sobre Vocabulario

Si el onboarding consiste en explicar oralmente los términos empresariales porque el glosario no es confiable, está muerto.

---

### Signo 5: El Glosario Está En Una Herramienta Diferente Al Trabajo

Si tu glosario está en Notion/Confluence y tu trabajo en Jira/Linear/GitHub, está desconectado.

---

## Cómo Usar Sinra Para Crear Un Glosario Vivo

### Paso 1: Crear Páginas Por Categorías

**Acción:**
- Crear categorías (Vocabulario Técnico, Proceso de Release, Flujo de Trabajo QA, etc.)
- Crear una página por término importante
- Definir claramente: definición, criterios, flujo de trabajo, ejemplos

**Resultado:** Glosario estructurado en Sinra.

---

### Paso 2: Usar @Pages En Issues Y Capabilities

**Acción:**
- Cuando creas un issue o capability, menciona términos técnicos con @page:termino
- Enlace clicable a la definición completa

**Resultado:** Glosario integrado en el trabajo diario.

---

### Paso 3: Actualizar Páginas Cuando El Vocabulario Evoluciona

**Acción:**
- ¿El vocabulario cambia? Actualiza la página correspondiente
- Todos los @pages apuntan automáticamente a la versión actualizada

**Resultado:** Única fuente de verdad, siempre actualizada.

---

### Paso 4: Usar Búsqueda Unificada Para Encontrar Definiciones

**Acción:**
- Buscar un término en Sinra
- Resultados: página del glosario + issues que lo usan + capabilities relacionadas

**Resultado:** Contexto completo en un solo lugar.

---

## Puntos De Acción: Transforma Tu Glosario Muerto En Glosario Vivo

1. **Audita tu glosario actual.** ¿Cuántas definiciones están obsoletas? ¿Cuántas personas lo consultan?
2. **Migra los 10 términos más importantes a páginas de Sinra.** Categoría "Vocabulario Empresarial."
3. **Usa @pages en tus próximas capabilities.** Menciona términos técnicos con @page.
4. **Mide el uso.** ¿Cuántas personas hacen clic en los @pages?
5. **Expande progresivamente.** Añade otros términos a medida que avanzas.

---

## El Punto Clave

**Los glosarios mueren porque están separados del trabajo.**

Entre **definiciones obsoletas**, **vocabulario disperso**, **documentación aislada**, y **fricción para consultar**, nadie habla el mismo idioma.

**Sinra transforma tu glosario en documentación viva con @menciones de páginas.**

**El resultado:**
- ✅ Glosario integrado en el flujo de trabajo (no en herramienta separada)
- ✅ @pages crean vínculos directos entre definiciones y trabajo
- ✅ Única fuente de verdad (una página, una definición)
- ✅ Sincronización automática (actualización = todos los @pages actualizados)
- ✅ Vocabulario unificado (todo el equipo habla el mismo idioma)

**Tu glosario finalmente se vuelve útil.**

**Tu equipo finalmente habla el mismo idioma.**

---

## Descubre también la serie "Problemas Invisibles"

- **[Documentación Muerta](/documentation/2025/12/24/documentation-morte-notion-confluence.html)** - 127 páginas obsoletas de Confluence: cómo hacer la documentación viva
- **[QA Invisible](/qa/2025/12/22/qa-invisible-tests-disperses.html)** - 847 tests en Excel: cómo hacer el QA visible con Sinra Testings
- **[Caos Del Backlog](/planning/2025/12/26/chaos-backlog-personne-sait-q2.html)** - 537 issues caóticos: cómo organizar el trabajo por releases y cycles
- **[Dependencias Ocultas](/dependencies/2025/12/28/dependances-cachees-features-bloquees.html)** - 47% de features bloqueadas: cómo hacer visibles las dependencias
- **[Síndrome Multi-Proyecto](/capacity/2025/12/30/syndrome-multi-projet-rien-navance.html)** - Desarrolladores en 4 proyectos simultáneos: cómo limitar proyectos activos

---

**¿Listo para crear un glosario vivo?** [Comienza una prueba gratuita de Sinra →](https://app.sinra.dev/users/sign_up)

Descubre gestión de proyectos donde tu vocabulario empresarial está integrado con el trabajo, no aislado en un wiki muerto.
