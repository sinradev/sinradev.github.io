---

title: "Microservicios: No Eres Netflix"
subtitle: "Por qué la tendencia de los microservicios suele esconder una mala decisión técnica disfrazada de modernidad."
description: "Todo el mundo quiere microservicios porque Netflix, GitHub y Airbnb los usan. Pero el 90% de los proyectos no tienen esos problemas. Un monolito bien construido es a menudo la mejor arquitectura, y sin duda la más fácil de mantener."
date: 2026-05-06 10:00:00 +0100
categories: ["Engineering"]
excerpt: "«Deberíamos migrar a microservicios.» Esta frase se ha convertido en la señal de una decisión técnica tomada por imitación y no por necesidad. Aquí explicamos por qué, en la mayoría de los casos, un monolito es una mejor elección."
featured_image: /assets/images/blog/2026-05-06-microservices-monolithe-featured.png
---

## La Fantasía de la Arquitectura Distribuida

Abre cualquier conversación técnica en una startup. A los cinco minutos, alguien dice:

> «Deberíamos migrar a microservicios.»

La sala asiente. Los CTOs inclinan la cabeza. Los desarrolladores senior piensan en su próximo currículum. Las diapositivas de PowerPoint mencionan Netflix. GitHub. Airbnb. Spotify.

**Nadie hace la pregunta real: ¿tenemos los mismos problemas que ellos?**

La respuesta, en el 90% de los casos, es no.

## Por Qué Todo el Mundo Quiere Microservicios

La razón es simple: **imitación sin contexto**.

Cuando Netflix publica un artículo explicando cómo dividieron su monolito en 700 servicios independientes, los ingenieros de todo el mundo lo leen como una receta médica. Como si Netflix hubiera encontrado La Verdad Arquitectónica.

Lo que nadie lee es el contexto:

- Netflix atiende a **250 millones de suscriptores** en 190 países
- Su organización de ingeniería emplea a miles de personas
- Tienen equipos enteros dedicados únicamente a gestionar la infraestructura distribuida
- Migraron a microservicios **después** de sufrir los límites de un monolito a esa escala

GitHub siguió el mismo camino. Airbnb también. Estas empresas **no empezaron con microservicios**. Llegaron ahí después de años, cuando sus problemas de escalabilidad justificaban realmente esa complejidad.

Tu startup de 5 desarrolladores que atiende a 2.000 usuarios no tiene esos problemas.

## Qué Es Realmente un Monolito Bien Construido

La palabra «monolito» se ha convertido en un insulto en nuestra industria. La asociamos con código legacy, deuda técnica, despliegues catastróficos.

Ese es un error de percepción.

**Un monolito bien construido es:**

- Un único despliegue que gestionar
- Una única base de código que entender
- Transacciones ACID sin configuración compleja
- Depuración simple y lineal
- Refactorizaciones fáciles que abarcan múltiples módulos
- Un equipo completo que puede entender todo el sistema

No es código espagueti. Es arquitectura modular en un solo proceso. La diferencia entre un monolito mal diseñado y uno bueno es la disciplina interna, no la arquitectura distribuida.

Stack Overflow gestiona uno de los sitios más visitados del mundo **con unos pocos servidores y un monolito**. Basecamp ha construido una empresa rentable sobre un monolito Ruby on Rails durante 20 años. Shopify también.

## Las Ventajas Reales de los Microservicios

Seamos honestos: los microservicios tienen razones genuinas para existir. En los contextos adecuados.

**Escalado independiente:** Si tu servicio de procesamiento de imágenes consume 10 veces más recursos que tu API, puedes escalar solo ese servicio. Con un monolito, escala todo.

**Despliegues independientes:** Equipos de 50 desarrolladores pueden desplegar sus servicios sin coordinarse con otros equipos. A gran escala, eso es valioso.

**Aislamiento de fallos:** Un servicio que falla no arrastra todo el sistema. El circuit breaker aísla el problema.

**Tecnologías heterogéneas:** Cada servicio puede usar la tecnología más adecuada a su problema. Recomendaciones en Python, API principal en Go, notificaciones en Node.js.

**Equipos autónomos:** Los equipos organizados en torno a servicios pueden trabajar en paralelo sin fricción excesiva.

Estas ventajas son reales. Pero tienen un coste.

## Los Inconvenientes Que Nadie Menciona en las Conferencias

Aquí es donde la conversación se pone interesante, porque casi nunca se habla de esto.

### 1. La Complejidad Operacional se Dispara

Con un monolito, tu despliegue se parece a:

```
git push → CI/CD → un binario → un despliegue en producción
```

Con 15 microservicios, se parece a:

```
Orquestación Kubernetes + Service mesh + API Gateway + Load balancers 
+ Circuit breakers + Distributed tracing + Agregación de logs 
+ Health checks por servicio + Versionado de API entre servicios 
+ Gestión de secretos por servicio + Monitorización independiente...
```

Eso no es una simplificación. Es una multiplicación de superficies de fallo. Cada nuevo servicio añade puntos de configuración, certificados que gestionar, pipelines de CI/CD separados.

Netflix tiene un equipo dedicado solo a la infraestructura de despliegue. Tú probablemente no.

### 2. La Depuración se Convierte en un Ejercicio de Reconstrucción

En un monolito, tienes un stacktrace. Lineal. Legible.

Con microservicios, tienes una solicitud que pasa por 6 servicios diferentes. Cuando algo falla, buscas en 6 logs diferentes, en 6 máquinas distintas, con potencialmente 6 sistemas de logging diferentes.

Sin distributed tracing (Jaeger, Zipkin, etc.), estás ciego. Y configurar un distributed tracing correcto es un proyecto en sí mismo.

### 3. La Consistencia de los Datos se Convierte en un Problema Difícil

Las transacciones distribuidas son uno de los problemas más difíciles en informática.

Con un monolito y una sola base de datos, haces:

```sql
BEGIN TRANSACTION;
  UPDATE cuenta SET saldo = saldo - 100 WHERE id = 1;
  UPDATE cuenta SET saldo = saldo + 100 WHERE id = 2;
COMMIT;
```

Atómico. O ambas operaciones ocurren, o ninguna.

Con dos microservicios y dos bases de datos, necesitas el patrón Saga, eventos de compensación, gestión de estados intermedios. Complejo de escribir, difícil de probar, muy fácil de hacer mal.

¿Cuántos equipos que adoptan microservicios han pensado realmente en la consistencia de los datos entre servicios? La mayoría improvisa y descubre los problemas en producción.

### 4. Las Llamadas de Red Reemplazan a las Llamadas de Función

En un monolito, llamas a una función. En memoria. Microsegundos.

Con microservicios, haces una llamada HTTP o gRPC. Red. Unos pocos milisegundos. Y esa red puede:

- Caerse
- Ser lenta
- Devolver un timeout
- Devolver una respuesta corrupta

Tienes que gestionar todo eso. Reintentos, timeouts, fallbacks, circuit breakers. Cada llamada entre servicios añade latencia y superficie de fallo.

Para una operación que toca 5 servicios en cascada, multiplicas los puntos de fallo por 5.

### 5. La Coordinación Entre Equipos No Desaparece, se Desplaza

Los microservicios se venden como la solución a los problemas de coordinación. «Los equipos trabajan de forma independiente.»

Eso es cierto para los despliegues. Pero para las funcionalidades que abarcan varios servicios, ¿sigue siendo necesaria la coordinación? Excepto que en lugar de coordinar código en el mismo repositorio, coordinas contratos de API entre equipos diferentes, con versiones, migraciones, deprecaciones.

El versionado de API entre servicios es un problema difícil que nadie anticipa.

### 6. El Coste de Infraestructura Es Real

Un monolito significa unos pocos servidores.

15 microservicios con sus bases de datos, instancias de caché, colas de mensajes, infraestructura Kubernetes... eso cuesta. Dinero. Tiempo. Experiencia.

Para una startup que vigila su gasto, ese es un argumento no trivial.

### 7. El Overhead de Desarrollo

Añadir una nueva funcionalidad en un monolito: modificar un módulo, escribir tests, desplegar.

Añadir la misma funcionalidad tocando 3 microservicios: modificar 3 repositorios, actualizar 3 contratos de API, escribir tests unitarios en cada uno, escribir tests de integración entre servicios, coordinar 3 despliegues.

Para equipos pequeños, ese overhead ralentiza considerablemente la velocidad.

## La Única Pregunta Que Importa

Antes de decidir una arquitectura, solo importa una pregunta:

**¿Qué problema estoy intentando resolver?**

Si la respuesta es «vamos a tener millones de usuarios y necesitamos escalar cada parte del sistema de forma independiente», los microservicios pueden tener sentido. Pero solo si también tienes los equipos para mantenerlos.

Si la respuesta es «es lo que hacen las grandes empresas tech» o «nos va a dar una arquitectura bonita», eso es imitación.

**Señales reales de que necesitas microservicios:**

- Tu monolito tiene cuellos de botella reales y medidos en puntos específicos
- Tienes equipos suficientemente grandes como para que cada uno sea dueño de su(s) servicio(s)
- Tu organización tiene la madurez DevOps para gestionar infraestructura distribuida
- Diferentes partes de tu sistema tienen requisitos de escalado genuinamente distintos
- Despliegas con tanta frecuencia que la coordinación está ralentizando realmente a tu equipo

**Malas señales para migrar:**

- «Es más moderno»
- «Todo el mundo lo hace»
- «Quedará bien en mi currículum»
- «Netflix lo hace»
- «Vamos a necesitar escalar» (sin mediciones actuales del problema)

## El Camino Correcto

El enfoque arquitectónico correcto no es tratar monolito vs. microservicios como una elección binaria y definitiva.

Es construir lo más simple que funcione primero.

**Fase 1:** Monolito modular. Código bien organizado, módulos claramente separados, con fronteras explícitas. Estás aprendiendo tu dominio de negocio.

**Fase 2:** Si surge un problema específico (una parte del sistema es demasiado lenta, necesita escalar de forma independiente, tiene requisitos técnicos radicalmente diferentes), extraes **ese servicio específico**.

**Fase 3:** Continúas extrayendo solo lo que realmente causa problemas.

Amazon siguió este camino. GitHub también. Shopify deliberadamente eligió no seguirlo después de evaluarlo.

El buen arquitecto no adopta microservicios. Elige la arquitectura adecuada al problema actual, no al problema imaginado dentro de 3 años.

## Lo Que Dice de Una Organización

Cuando una organización elige microservicios por imitación y no por necesidad, envía una señal:

- Prefiere la complejidad técnica sobre la claridad del producto
- Optimiza para el currículum de sus desarrolladores, no para la entrega de valor
- No ha medido sus cuellos de botella reales
- Confundió la arquitectura de los gigantes tech con una buena práctica universal

Las organizaciones más efectivas que he visto construyen simple, miden, y solo añaden complejidad cuando los datos lo exigen.

## En Conclusión

No, no eres Netflix. No eres GitHub. Y está perfectamente bien.

Estas empresas tienen problemas que tú no tienes. Copiar sus soluciones sin tener sus problemas significa importar su complejidad sin obtener los beneficios.

Un monolito bien construido es mantenible. Comprensible. Desplegable. Testeable. Para el 90% de los proyectos, eso es todo lo que necesitas.

La próxima vez que alguien diga «deberíamos migrar a microservicios», haz la pregunta simple:

**«¿Qué problema específico, medido y actual estamos resolviendo con esto?»**

Si la respuesta es vaga, ya tienes tu respuesta.

La moda no es arquitectura. La complejidad no es un objetivo. Y «es lo que hacen las grandes empresas» no es una justificación técnica.

Construye simple. Mide. Añade complejidad solo cuando los datos lo exijan.

---
