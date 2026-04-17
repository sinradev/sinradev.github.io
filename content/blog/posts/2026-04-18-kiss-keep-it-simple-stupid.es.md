---

title: "KISS: Por Qué Las Empresas Tech Abandonan El Principio Más Importante"
subtitle: "Keep It Simple, Stupid. Un lema universal olvidado por quienes lo inventaron."
description: "Las empresas tech no pueden mantenerse KISS en sus decisiones técnicas. Apilan lenguajes, frameworks, infraestructura. Análisis de razones y costos reales."
date: 2026-04-18 10:00:00 +0100
categories: ["Architecture"]
excerpt: "KISS: Keep It Simple, Stupid. El principio de oro de la informática. Y también el primero que las empresas abandonan una vez superan diez empleados."
featured_image: /assets/images/blog/2026-04-18-kiss-keep-it-simple-stupid-featured.png
---

## KISS: La Definición

**KISS**: Keep It Simple, Stupid.

Tres palabras. Inventadas por Kelly Johnson, ingeniero en Lockheed Martin, a finales de los años 60. El principio es sencillo (como debe ser):

> "Todos los sistemas funcionan mejor si los mantienes simples en lugar de complejos; por lo tanto, la simplicidad debería ser un objetivo clave del diseño, y la complejidad innecesaria debería evitarse."

Sin misterio. Sin interpretación compleja.

**El principio:** Elige siempre la solución más simple que resuelva tus problemas.

## Por Qué KISS Es Fundamental

Antes de analizar por qué todos lo ignoran, primero entiende por qué existe este principio.

### 1. Los Sistemas Simples Se Construyen Más Rápido

Si tienes un problema A, tienes dos soluciones:

**Solución 1 (simple)**: 100 líneas de código. Tres días de desarrollo. Sin dependencias externas.

**Solución 2 (complicada)**: Integra un framework elegante. Importa cinco librerías. Lee la documentación. 300 líneas de código. Dos semanas.

¿Cuál eliges? KISS dice: la solución 1.

### 2. Los Sistemas Simples Son Más Mantenibles

Revisa tu código en 2024. Escribiste una solución "simple" en 2015. ¿Todavía la entiendes en dos minutos?

¿Elegiste una solución "elegante" con doce dependencias? Buena suerte. Tres de esas dependencias ya no existen. Una fue comprada por una compañía desconocida. Otra cambió de versión mayor seis veces.

Estás en problemas.

### 3. Los Sistemas Simples Te Permiten Pivotar

Si tu estrategia cambia, puedes descartar tu código "simple" y escribir uno nuevo en una semana.

Si tu código es una catedral de complejidad, estás atrapado. Invertiste demasiado tiempo, demasiadas dependencias. Pivotar significa reconstruir el mundo.

### 4. Los Sistemas Simples Tienen Menos Bugs

Menos código equivale a menor superficie de ataque. Menos dependencias equivalen a menos versiones rotas. Menos lógica compleja equivalen a menos condiciones sin probar.

**Es matemático.**

Tienes una oportunidad de uno en 100 de tener un bug en 100 líneas de código.
Tienes una oportunidad de uno en 1000 de tener un bug en 500 líneas de código (si está bien escrito).
Tienes una oportunidad de uno en 100 en 500 líneas si también importaste Lodash, Moment, Express y tres librerías personalizadas.

## La Paradoja: Por Qué Las Empresas Abandonan KISS

Aquí está lo raro. KISS vino de los años 60, de la NASA, de la aviación militar. Campos donde los bugs equivalen a muertes. Campos que **entendieron** que la simplicidad es crítica.

Pero las empresas tech modernas, ¿ellas? La ignoran completamente.

¿Por qué?

### 1. El Síndrome del CV en LinkedIn

Cada desarrollador tiene un problema:

> "Necesito demostrar que aprendí tecnologías modernas."

No: "Necesito construir el mejor producto."

No. Es: "Necesito escribir en mi LinkedIn: 3 años en Kubernetes, usé 8 lenguajes diferentes, desplegué en AWS, GCP y Azure."

Entonces, cuando alguien sugiere añadir una nueva tecnología al stack, dice que sí. No porque sea necesaria. Porque se "suma al CV."

La empresa lo sabe. Mete Rust en el stack solo para poder decir "usamos Rust."

**Resultado:** Stack técnico equivale a galería de CVs colectivos, no a arquitectura racional.

### 2. El Culto de Carga del Diseño Técnico

En algún lugar, una gran empresa (Netflix, Spotify, Google) eligió una arquitectura compleja.

¿Por qué? Porque tienen 50,000 desarrolladores y necesitan microservicios, balanceo de carga, caché distribuido, etc.

Tu startup de 6 personas lo ve y piensa: "Haremos lo mismo."

**Spoiler:** No lo haces igual. Copias la arquitectura sin entender por qué existe.

Netflix necesita 3000 microservicios porque hay 10,000 solicitudes por segundo. Tu startup tiene 10 por día. No necesitas Kubernetes. Necesitas un servidor.

Pero no. Todo el mundo usa Kubernetes ahora. Es cool. Está en las conferencias. Está en los CVs.

Y boom, tienes infraestructura que consume el 40% de tu ancho de banda intelectual solo para "mantenerla en funcionamiento." Mientras tanto, ninguna funcionalidad se lanza.

### 3. La Apoteosis Del Ingeniero Que Quiere Hacer Bien

Contratas a un buen ingeniero. Llega. Mira tu código.

> "Es... demasiado simple. Deberíamos refactorizar. Podríamos usar un patrón de diseño aquí. Podríamos usar un framework ORM. Y oh, mira, podríamos dividir servicios, añadir colas, añadir un caché..."

Es un buen ingeniero. Tiene razón en muchos puntos. Pero sigue una máxima: "Más es mejor."

KISS dice: "Lo suficientemente bueno es lo suficientemente bueno."

Él ve cada simplificación como "deuda técnica." Algo a arreglar. Un problema.

Tres años después, tienes infraestructura que requiere cinco desarrolladores solo para mantenimiento. ¿Tus prioridades reales? No hechas.

### 4. Miedo Al Cambio De Escala

El CTO: "¿Y si crecemos? ¿Qué hacemos entonces?"

Esa es una pregunta real. Pero aquí está la respuesta real:

**Refactorizas cuando lo necesitas.**

No antes. No "por si acaso." No proféticamente.

KISS dice: "Construye para hoy. Refactoriza mañana si es necesario."

Pero no. Todo el mundo quiere "escalar desde el primer día." Construyes arquitectura capaz de soportar 1 millón de usuarios cuando tienes 100.

¿Resultado? Complejidad gratis, beneficio cero, hasta el día que realmente tienes 1 millón. Y para entonces, tu arquitectura tiene 5 años y es obsoleta de todas formas.

### 5. Obsesión Por El "Stack Moderno"

Hay una tendencia en 2026: usar muchos lenguajes diferentes porque "cada uno es bueno para algo."

Python para ML/datos. Go para la API. Rust para código crítico. JavaScript para el frontend. TypeScript porque por qué no. SQL, GraphQL, Redis, Message Queues... todo.

Un equipo de seis personas. Seis lenguajes.

¿Sabes lo que eso significa?
- Nadie domina realmente nada
- Si alguien se va, nadie siguió la parte de Rust
- Los documentos están dispersos (docs de Python, docs de Go, docs de Rust, docs de GraphQL...)
- Las pruebas son inconsistentes
- El despliegue se convierte en una pesadilla

KISS diría: "Elige un lenguaje. Domínalo. Úsalo para el 90% de las cosas. Solo en el 10% donde se vuelve realmente crítico, entonces desviarte."

Pero no. "Moderno" equivale a muchos lenguajes equivale a tenemos un stack tech avanzado.

## El Costo Real De La Complejidad

Tienes una pregunta simple de API que resolver.

**Con KISS:**
- Escribe una función. 50 líneas. Pruebas incluidas. Funciona.

**Sin KISS (realidad 2026):**
- Crea un microservicio en Go
- Configura Kubernetes para orquestarlo
- Configura monitoreo con Prometheus
- Versionea la API con OpenAPI/Swagger
- Documéntalo en Notion
- Crea pruebas con testcontainers
- Configura CI/CD para desplegarlo
- Crea alertas en Slack
- Documenta el runbook

Felicidades, tienes 2000 líneas de configuración para una función simple.

**¿Y ahora?** Si necesitas cambiar esa API, debes tocar:
- El código Go
- La configuración de Kubernetes
- El esquema OpenAPI
- Las pruebas
- Los docs de Notion
- Las alertas
- Los runbooks

¿Cuántas personas pueden hacer eso? Dos, tal vez tres. Si uno se va, es un desastre.

¿Con KISS? Tenías una función. Alguien la cambia. Listo.

## Argumentos CONTRA KISS (Y Por Qué Están Equivocados)

Déjame presentarte los argumentos que escucharás para justificar la complejidad. Y por qué cada uno es una excusa.

### "Debemos Escalar"

¿Cuándo? ¿Ahora? No.

KISS dice: "Tienes una base de datos PostgreSQL. Soporta 100,000 solicitudes por segundo. Tienes 100 por segundo. No necesitas escalar."

"Sí pero ¿y si crecemos?"

Respuesta: Refactorizas. En ese momento. No antes.

Netflix refactorizó su monolito en microservicios después de 5 años y 10 millones de usuarios. No antes.

### "Es Más Elegante"

¿Elegante según quién? ¿El ingeniero que lo diseñó?

KISS dice: "Elegancia equivale a tu código desapareciendo. Alguien lo modifica seis meses después en 10 minutos. Eso es elegante."

¿Código que es "elegante" con 5 frameworks anidados? Eso es lo opuesto.

### "Usamos Las Mejores Prácticas"

Las mejores prácticas **para Netflix**, no para ti.

KISS dice: "Las mejores prácticas equivalen a lo que funciona para tu contexto."

Si tienes 6 personas y un problema simple, la "mejor práctica" es una solución simple.

### "Todos Los Demás Lo Usan"

El argumento más débil.

¿Todos se tiran de un acantilado? No.

¿Pero todos usan Kubernetes ahora? Casi. Y el 90% de los que lo usan podrían usar un simple VPS.

### "Queremos Ser Modernos"

¿Modernidad real? Tener un producto que funciona, sin deuda técnica, con un equipo feliz.

¿Infraestructura complicada que nadie entiende? Eso es lo opuesto de moderno.

## Cómo Volver A KISS

Si estás en una empresa donde esto se convirtió en caos, aquí está la receta.

### 1. Haz Un Inventario

Lista cada tecnología que usas.
- ¿Python? Sí.
- ¿Go? Sí.
- ¿Rust? Sí.
- ¿Kubernetes? Sí.
- ¿Redis? Sí.
- ¿MongoDB? Sí.
- ¿PostgreSQL? Sí.
- ¿Elasticsearch? Sí.
- Y más.

Honestamente: **¿Cuántas de estas herramientas podrían desaparecer mañana sin romper el producto?**

Apostaría al 50%.

### 2. Cuestiona Cada Decisión

Para cada tecnología, pregúntate:
- **¿Realmente la necesitamos?**
- **¿Era necesaria hace seis meses?**
- **¿Quién la eligió, y por qué?**
- **¿Cuántas personas la dominan?**
- **¿Cuánto tiempo pasamos solo manteniéndola?**

Si la respuesta a "cuánto tiempo de mantenimiento" es más que "20% del tiempo," eso es un problema.

### 3. Vota Por La Simplificación

Aprende a decir: "Eliminamos esto."

¿Kubernetes? Elimínalo. Usa Docker directamente en un VPS. Eso es suficiente para el 99% de las empresas.

¿MongoDB Y PostgreSQL? Elimina MongoDB. PostgreSQL puede hacer todo.

¿Python Y Go? Mantén un lenguaje. El 5% de casos que necesitan Go, ¿los manejarás si se convierte en un problema real?

¿Eso no rellena el CV? Bien. Buscas un desarrollador real. Uno que construya productos, no uno que coleccione lenguajes.

### 4. Documenta Las Razones

Cuando decidas simplificar, documenta por qué. No en Notion (demasiados docs matan los docs). Solo en un simple archivo `ARCHITECTURE.md`.

> "Usamos PostgreSQL porque es suficiente. Si alguien cree que necesitamos MongoDB, que venga a hablar, discutimos."

Eso impide que la gente añada capas sin pensar.

## La Paradoja Final

¿Sabes lo irónico?

La gente que predica KISS son los ingenieros realmente buenos. La gente que construye cosas reales. La gente en empresas que funcionan.

¿Y la gente que la ignora? A menudo desarrolladores junior o CTOs que entran en pánico.

Los VERDADEROS seniors, los que han visto productos morir por complejidad, siempre vuelven a KISS.

## En Conclusión

"Keep It Simple, Stupid" no es un lema bonito. No es motivacional de Twitter.

Es el principio que guió a la NASA en los años 60. Es lo que permitió a los primeros pioneros construir el internet que usamos hoy.

¿Tu startup moderna que apila Kubernetes, Microservicios, GraphQL y 7 lenguajes diferentes? No es más avanzada que aquellos que dijeron "usa un servidor, una base de datos y una API simple."

Solo es más complicada.

Y un día, cuando tu equipo esté agotado manteniendo la infraestructura, cuando nadie pueda moverse sin romper algo, cuando los bugs se multipliquen, cuando tarden dos semanas en desplegar un cambio simple...

En ese momento, te darás cuenta: Kelly Johnson tenía razón.

Eso es KISS.

---
