---
title: "Monolito Modular: La Arquitectura Que Todo el Mundo Redescubre"
subtitle: "Vertical Slice, domain-first, package by feature - cómo una idea antigua se convirtió en la respuesta moderna a la complejidad de los microservicios."
description: "El monolito modular con Vertical Slice Architecture no es una novedad - es un redescubrimiento. Historia, principios, ejemplos de estructura y por qué Sinra eligió este enfoque para construir un producto mantenible."
date: 2026-05-16 10:00:00 +0100
categories: ["Engineering"]
excerpt: "Después de años vendiendo los microservicios como la solución universal, la industria vuelve a una idea más simple: un único despliegue, pero organizado en torno a los dominios de negocio. El monolito modular regresa - y esta vez, es intencional."
featured_image: /assets/images/blog/2026-05-16-modular-monolith-featured.png
---

## El Regreso del Monolito Intencional

Hace algunos años, decir «construimos un monolito» en una conferencia técnica equivalía a admitir una derrota. El monolito era sinónimo de código legacy, deuda técnica acumulada, sistemas imposibles de mantener.

Hoy, algo ha cambiado.

Equipos en Shopify, Stack Overflow, Basecamp y GitHub hablan abiertamente de sus monolitos bien construidos. Ingenieros reconocidos publican artículos sobre los límites de los microservicios. Y una arquitectura particular emerge como alternativa seria:

**El Monolito Modular con Vertical Slice Architecture.**

Esto no es una regresión. Es una evolución.

---

## Historia: Una Idea Con Varias Vidas

### Los Años 2000: El Monolito Sin Estructura

Los primeros frameworks web - Rails, Django, Spring MVC - impusieron una organización **horizontal**: todas las vistas juntas, todos los modelos juntos, todos los controladores juntos.

```
app/
  controllers/   <- toutes les routes
  models/        <- tous les modèles
  views/         <- tous les templates
  services/      <- toute la logique
```

Esto funciona bien hasta unos 20-30 modelos. A partir de ahí, la navegación se convierte en una pesadilla. Un cambio en `UserService` rompe `OrderService`. Las dependencias circulares proliferan. Los nuevos desarrolladores no saben por dónde empezar.

### 2010-2018: La Huida Hacia los Microservicios

Ante esta complejidad, la industria tomó una decisión radical: **distribuir el problema**.

Si un monolito se vuelve inmanejable, dividámoslo en servicios independientes. Cada servicio gestiona su propio dominio, su propia base de datos, su propio despliegue.

¿El problema? La complejidad no desaparece - se desplaza hacia la infraestructura.

- ¿Cómo se comunican los servicios? (¿REST? ¿gRPC? ¿eventos?)
- ¿Cómo gestionar las transacciones distribuidas?
- ¿Cómo depurar una solicitud que atraviesa 12 servicios?
- ¿Cómo mantener la coherencia de los datos entre servicios?

Para los equipos de Netflix, Uber o Amazon, este coste está justificado. Para el resto, suele ser un sobrecoste injustificado.

### 2014: Jimmy Bogard y la Vertical Slice Architecture

En 2014, **Jimmy Bogard** - creador de AutoMapper y MediatR - formuló lo que observaba en las bases de código que auditaba:

> «La organización habitual por capas (Controller → Service → Repository) crea acoplamientos artificiales entre features que no tienen nada que ver entre sí.»

Su propuesta: organizar el código **verticalmente por feature**, no horizontalmente por capa técnica.

Cada feature contiene todo lo que necesita: su solicitud, su validación, su handler, su acceso a los datos, su respuesta.

```
features/
  CreateOrder/
    CreateOrderCommand.cs
    CreateOrderValidator.cs
    CreateOrderHandler.cs
    CreateOrderResponse.cs
  CancelOrder/
    CancelOrderCommand.cs
    CancelOrderHandler.cs
```

Esta es la **Vertical Slice Architecture** - o VSA. Una feature = una rebanada vertical a través de todas las capas.

### 2015-2020: Domain-Driven Design Se Vuelve Mainstream

En paralelo, **Domain-Driven Design** (DDD) de Eric Evans - publicado en 2003 pero durante mucho tiempo reservado a la élite - se volvió más accesible gracias a los trabajos de Vaughn Vernon, Greg Young y Scott Millet.

El concepto central: organizar el código alrededor de los **Bounded Contexts** - fronteras explícitas entre dominios de negocio.

Un sistema de e-commerce no piensa en «usuario» de la misma forma en el contexto de los pedidos, la facturación y el soporte. Son tres contextos distintos, con sus propias reglas, sus propios vocabularios, sus propios modelos.

La idea **domain-first** (o **package by feature**) se desprende de forma natural:

```
src/
  ordering/      <- tout ce qui concerne les commandes
  billing/       <- tout ce qui concerne la facturation
  inventory/     <- tout ce qui concerne le stock
  users/         <- tout ce qui concerne les utilisateurs
```

### 2020-2025: La Síntesis - Monolito Modular

La síntesis de estas ideas da lugar al **Monolito Modular**:

- Un único despliegue (monolito)
- Módulos altamente cohesivos y débilmente acoplados (como microservicios, pero en el mismo proceso)
- Fronteras explícitas entre dominios (DDD Bounded Contexts)
- Organización por feature o slice (Vertical Slice Architecture)

Kijana Woodard, Sam Newman, Mauro Servienti y numerosos arquitectos comenzaron a documentar y popularizar este patrón bajo este nombre.

---

## ¿Quién Usa Esta Arquitectura?

### Shopify

Shopify es el ejemplo canónico. Su monolito Rails gestiona miles de millones de transacciones. En lugar de migrar hacia microservicios, invirtieron en la **modularización** de su monolito: módulos con interfaces explícitas, dependencias declaradas, fronteras respetadas.

Su herramienta interna **Packwerk** impone estas fronteras en la compilación - un módulo no puede llamar directamente a las clases de otro sin pasar por su API pública.

### Stack Overflow

Uno de los sitios más consultados del mundo funciona con unos pocos servidores y un monolito .NET. Su enfoque es explícitamente **modular**: proyectos .NET separados por dominio, interfaces claras, disciplina interna estricta.

### Basecamp / Hey

DHH (David Heinemeier Hansson) y el equipo de Basecamp defienden activamente el monolito modular desde hace años. Basecamp y Hey, dos productos distintos, funcionan sobre monolitos Rails organizados por dominio de negocio.

### GitHub (antes de la migración parcial)

GitHub funcionó durante mucho tiempo sobre un monolito Rails. Cuando migraron ciertas partes hacia servicios, fueron explícitos sobre las razones: problemas de escalabilidad muy específicos, no una decisión ideológica.

### Equipos .NET y Java Enterprise

En el ecosistema .NET, el patrón está muy extendido gracias a frameworks como **MediatR** (CQRS + VSA), **Ardalis.Modulith** y los componentes **Aspire** de Microsoft.

En Java, **Spring Modulith** (oficialmente soportado por Spring desde 2023) proporciona las herramientas para construir y verificar la modularidad de una aplicación Spring Boot.

---

## Estructura Concreta: Cómo Se Ve

### Enfoque 1: Package by Feature (la base)

El mínimo viable del monolito modular: organizar por dominio, no por capa técnica.

**Antes (organización horizontal):**
```
src/
  controllers/
    UserController.ts
    OrderController.ts
    ProductController.ts
  services/
    UserService.ts
    OrderService.ts
    ProductService.ts
  repositories/
    UserRepository.ts
    OrderRepository.ts
    ProductRepository.ts
  models/
    User.ts
    Order.ts
    Product.ts
```

**Después (organización vertical):**
```
src/
  users/
    UserController.ts
    UserService.ts
    UserRepository.ts
    User.ts
    index.ts          <- API publique du module
  orders/
    OrderController.ts
    OrderService.ts
    OrderRepository.ts
    Order.ts
    index.ts
  products/
    ProductController.ts
    ProductService.ts
    ProductRepository.ts
    Product.ts
    index.ts
```

### Enfoque 2: Vertical Slice Architecture (VSA)

Llevado más lejos, cada **feature** es una unidad autónoma.

```
src/
  orders/
    create-order/
      CreateOrderRequest.ts
      CreateOrderValidator.ts
      CreateOrderHandler.ts
      CreateOrderResponse.ts
    cancel-order/
      CancelOrderRequest.ts
      CancelOrderHandler.ts
    get-order/
      GetOrderQuery.ts
      GetOrderHandler.ts
      GetOrderResponse.ts
    shared/
      Order.ts              <- modèle partagé dans le module
      OrderRepository.ts
```

Cada slice es independiente. Modificar «cancelar un pedido» no puede romper «crear un pedido» - solo comparten el modelo de dominio.

### Enfoque 3: Monolito Modular con Fronteras Explícitas

El siguiente nivel: módulos como «mini-aplicaciones» con sus propias interfaces.

```
src/
  modules/
    ordering/
      api/              <- ce que les autres modules peuvent utiliser
        IOrderingModule.ts
        OrderDto.ts
      internal/         <- implémentation privée
        domain/
          Order.ts
          OrderItem.ts
        application/
          CreateOrderUseCase.ts
          CancelOrderUseCase.ts
        infrastructure/
          OrderRepository.ts
          OrderMapper.ts
      OrderingModule.ts  <- registre et bootstrap du module
    billing/
      api/
        IBillingModule.ts
        InvoiceDto.ts
      internal/
        ...
      BillingModule.ts
    inventory/
      api/
        IInventoryModule.ts
      internal/
        ...
      InventoryModule.ts
  app.ts                <- assemble les modules
```

**La regla fundamental:** un módulo nunca puede importar directamente desde `internal/` de otro módulo. Solo accede a través de `api/`.

### Ejemplo en Python (Django Modular)

```
myapp/
  core/             <- infrastructure partagée
  ordering/
    __init__.py     <- expose l'API publique
    models.py
    views.py
    urls.py
    services.py
    tests.py
  billing/
    __init__.py
    models.py
    views.py
    urls.py
    services.py
    tests.py
  inventory/
    __init__.py
    models.py
    views.py
    urls.py
    services.py
    tests.py
```

### Ejemplo en Java (Spring Modulith)

```java
// Spring Modulith impose la structure de packages
com.example.shop/
  ordering/          <- module Ordering
    OrderingModule.java
    Order.java
    OrderService.java
    internal/
      OrderRepository.java   <- inaccessible aux autres modules
  billing/           <- module Billing
    BillingModule.java
    Invoice.java
    BillingService.java
    internal/
      InvoiceRepository.java
```

```java
// Spring Modulith vérifie les dépendances à la compilation
@ApplicationModuleTest
class OrderingModuleTests {
    // Si Billing accède à OrderRepository (internal), le test échoue
}
```

---

## Los Principios Clave

### 1. Alta Cohesión, Bajo Acoplamiento

Lo que cambia junto debe estar junto. La página de creación de un pedido, la lógica de validación, el acceso a los datos y la respuesta HTTP forman una unidad cohesiva. Separarlos en distintas capas crea un acoplamiento artificial.

### 2. Fronteras Explícitas

Cada módulo expone una **API pública** y oculta su implementación. Los demás módulos solo acceden a esta API. Es la misma regla que entre microservicios - pero sin la red.

### 3. Autonomía de las Features

Una feature debe poder entenderse, modificarse y probarse sin tocar otras features. Si cambiar «cancelar un pedido» requiere entender «crear un pedido», la separación es incorrecta.

### 4. Comunicación por Eventos Entre Módulos

Cuando un módulo necesita informar a otro de un evento, publica un evento de dominio - no lo llama directamente.

```typescript
// Ordering publie un événement
eventBus.publish(new OrderCreatedEvent(orderId, customerId, total));

// Billing s'abonne à cet événement
eventBus.subscribe(OrderCreatedEvent, (event) => {
  billingService.createInvoice(event.orderId, event.total);
});
```

Los módulos permanecen desacoplados. Si Billing no existe, Ordering funciona igualmente.

---

## Monolito Modular vs Microservicios: La Comparación Real

| Aspecto | Monolito tradicional | Monolito Modular | Microservicios |
|---------|----------------------|------------------|----------------|
| Despliegue | 1 unidad | 1 unidad | N unidades |
| Complejidad operacional | Baja | Baja | Alta |
| Fronteras de módulos | Informales | Explícitas y verificadas | Red + API |
| Transacción ACID | Nativa | Nativa | Patrón Saga requerido |
| Depuración | Simple | Simple | Distribuida, compleja |
| Escalabilidad | Todo o nada | Todo o nada | Independiente por servicio |
| Migración a microservicios | Difícil | Natural | Ya distribuido |

El monolito modular ocupa una posición estratégica: ofrece los beneficios de separación de los microservicios (aislamiento, cohesión, fronteras) sin el coste operacional.

¿Y si mañana un módulo necesita extraerse como servicio independiente? Las fronteras ya están definidas. La migración es una operación quirúrgica, no una reescritura.

---

## Sinra y el Monolito Modular

En Sinra, esta arquitectura no es teórica - es el fundamento de nuestra base de código.

Sinra es una herramienta de gestión de proyectos. Gestiona **issues**, **capabilities**, **releases**, **cycles**, **projects**, **teams**, **testings**, **pages**. Cada uno de estos es un dominio distinto, con sus propias reglas de negocio, sus propios flujos de trabajo, sus propias representaciones.

### Por Qué el Monolito Modular Era la Elección Correcta

**Nuestros dominios tienen ciclos de vida diferentes.** La lógica de creación de una release es independiente de la lógica de gestión de los cycles. Un cambio en los testings no debería impactar los issues.

**Nuestro equipo tiene un tamaño razonable.** Los microservicios optimizan para equipos de 50+ desarrolladores que necesitan desplegar de forma independiente. A nuestro tamaño, esa complejidad sería un overhead puro.

**Nuestras transacciones son frecuentemente cross-dominio.** Cerrar un cycle implica actualizar los issues no terminados, notificar las capabilities impactadas y actualizar la release asociada. Con microservicios, cada operación de este tipo se convertiría en un Saga distribuido. Con un monolito modular, es una simple transacción ACID.

**La trazabilidad está en el núcleo del producto.** Sinra permite ver el estado exacto de un proyecto en cualquier momento. La depuración de un estado inconsistente es incomparablemente más simple cuando todo ocurre en el mismo proceso.

### Nuestra Organización

```
app/
  domains/
    project_management/   <- issues, capabilities, cycles, releases
      issues/             <- décorateurs, extensions de collection
      capabilities/       <- services d'assignation, queries
      cycles/             <- value objects, queries
      releases/           <- calculateurs de capacité, value objects
    table_filtering/      <- commandes, queries, stratégies, opérateurs
    tenancy/              <- lifecycle organisation (setup, destroy)
  shared/
    sorting/              <- services et stratégies de tri
    mentions/             <- extraction et traitement des mentions
  models/                 <- modèles Rails (issues, teams, testings, pages...)
  controllers/            <- controllers minces, logique dans les domaines
```

Los dominios de negocio agrupan la lógica compleja por contexto: `project_management` concentra todo lo relacionado con el trabajo planificado, `table_filtering` aísla el motor de filtrado avanzado, `tenancy` gestiona el ciclo de vida de las organizaciones. Los modelos Rails siguen siendo el núcleo del acceso a los datos - los dominios se añaden encima para encapsular la lógica que va más allá del modelo solo.

### Lo Que Esto Cambia Concretamente Para Nuestros Usuarios

**La coherencia de los datos está garantizada.** Cuando asignas una capability a una release, el vínculo entre los issues subyacentes y esa release es siempre coherente - sin sincronización asíncrona, sin estado intermedio.

**El rendimiento es predecible.** Sin latencia de red entre módulos, sin timeouts entre servicios, sin retry storms que gestionar.

**El desarrollo es rápido.** Añadir una feature en el módulo `testings` no implica desplegar un nuevo servicio, configurar un contrato de API ni gestionar la compatibilidad entre versiones.

---

## Cuándo Usar el Monolito Modular

Esta arquitectura es la elección correcta cuando:

- **Tu dominio es complejo** pero tu equipo no es todavía una organización de 200 desarrolladores
- **Necesitas coherencia transaccional** entre varios dominios
- **Tu superficie de despliegue debe permanecer simple**: un equipo DevOps limitado, un presupuesto de infraestructura ajustado
- **Estás construyendo un producto en fase de exploración**: las fronteras de dominio evolucionan rápido al inicio del proyecto
- **Quieres la posibilidad de migrar a microservicios más adelante** sin reescribir

No es la elección correcta si:
- Tienes partes del sistema con necesidades de escalabilidad radicalmente diferentes (el procesamiento de vídeo de Netflix no tiene las mismas necesidades que la API de recomendaciones)
- Tus equipos deben desplegar de forma independiente a alta frecuencia
- Ya tienes restricciones técnicas que imponen tecnologías diferentes por dominio

---

## Conclusión

El monolito modular no es una arquitectura de compromiso. Es una arquitectura adaptada a un contexto preciso: dominios complejos, equipos de tamaño razonable, necesidades de coherencia transaccional, voluntad de permanecer operacionalmente simples.

La industria pasó diez años creyendo que la complejidad del sistema debía gestionarse mediante la distribución. Redescubrimos progresivamente que puede gestionarse mediante la estructura interna.

Vertical Slice Architecture, domain-first, package by feature: estos términos diferentes describen la misma idea fundamental. **El código debe organizarse en torno a lo que hace, no a cómo está estructurado técnicamente.**

En Sinra, esta elección no es nostálgica. Es deliberada, justificada y asumida. Y nos permite entregar features coherentes, fiables y trazables - que es precisamente lo que Sinra promete a sus usuarios para gestionar sus propios proyectos.

---

*Sinra organiza el trabajo en equipo alrededor de issues, capabilities, releases y cycles - conceptos concretos en lugar de jerga abstracta. La arquitectura de Sinra sigue el mismo principio: módulos concretos, fronteras explícitas, una organización que refleja el negocio.*
