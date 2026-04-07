---

title: "Los desarrolladores se han convertido en candidatos de The Voice: por qué el reclutamiento tech ha perdido la cabeza"
categories: ["Reclutamiento Cultura"]
featured_image: /assets/images/blog/2026-03-23-developers-the-voice-featured.png
---

Si eres desarrollador, probablemente ya lo hayas sentido: postularte a un puesto es como audicionar para The Voice. Salvo que no tienes una, dos ni tres oportunidades: tienes cinco. Cinco entrevistas. Más pruebas técnicas. Más verificación de referencias. Y al final, aunque llegues a la final, todavía hay rondas eliminatorias que no sabías que existían.

Bienvenido al proceso de reclutamiento tech moderno, donde las empresas han decidido que la confianza es un lujo que no pueden permitirse.

## The Voice del reclutamiento: una analogía que debería incomodarte

Piensa en The Voice. Imagina que para participar en el show:

**Ronda 1 (Las audiciones a ciegas)** = Entrevista de RRHH / llamada telefónica
Grabas un vídeo presentándote. El reclutador lo escucha, te hace preguntas genéricas. «Háblame de ti. ¿Por qué esta empresa?» Sabes que el 90% de los candidatos son eliminados aquí. Tienes que ser perfecto, entusiasta, sonriente, aunque lleves tres meses buscando trabajo y estés agotado por dentro.

**Ronda 2 (Las sillas se giran)** = Entrevista técnica con un ingeniero
Ahora un ingeniero te hace preguntas de verdad. No solo «háblame de ti», sino «implementa una función en O(n log n) para invertir un array de objetos anidados». Tienes 30 minutos. Sin Google. Sin StackOverflow. Solo tú, tu cerebro estresado y un IDE lleno de errores de sintaxis.

Pero espera. Tienes 12 años de experiencia en desarrollo backend en producción. Has diseñado sistemas que sirven a millones de usuarios. Y te piden que implementes manualmente un algoritmo de ordenación que nadie en el equipo ha escrito a mano jamás. La empresa usa Redis, PostgreSQL y frameworks modernos. No hay algoritmos en tiempo lineal implementados a mano por ningún lado.

**Ronda 3 (Las pruebas en camerino)** = Test técnico asíncrono o sesión de live coding
Antes de la siguiente entrevista, te mandan una prueba. O un caso práctico. O una arquitectura para diseñar. A completar en 1-2 horas. En casa. Después de tu jornada laboral. Porque sí, probablemente trabajas en otra empresa y aplicas por las noches, como un fantasma.

**Ronda 4 (Las batallas)** = Entrevista con el manager / tech lead
«Cuéntame un proyecto en el que hayas fallado.» «Descríbeme tus fortalezas y debilidades.» «¿Cómo gestionarías un conflicto dentro de un equipo?» Tienes que ser psicólogo, gestor de proyectos y experto en soft skills al mismo tiempo. No solo evalúan tus habilidades técnicas, sino también tu «culture fit». Ese término vago que a menudo significa «¿me caerías bien en el descanso del café?».

**Ronda 5 (Las finales)** = Entrevista con stakeholders / panel completo
Ahora hay stakeholders. El CTO, el equipo entero, el jefe de producto. Estás sentado frente a cinco personas que te estudian. Es teatro con público. Tienes que actuar. Tienes que ser carismático. Tienes que demostrar que no eres solo un buen desarrollador, sino un líder, un mentor, un comunicador excepcional.

**Ronda 6 (Las referencias)** = Llamadas a antiguos empleadores
Y justo antes de decirte que sí, llaman a tus antiguos jefes. Preguntan si realmente eres tan bueno como afirmaste en las cinco entrevistas anteriores. Como si cinco rondas no hubieran bastado para comprobarlo.

## ¿Todo esto para qué? El déficit de confianza al descubierto

Aquí está la cruda verdad: **ninguno de estos pasos existe porque sea una buena práctica. Existen porque las empresas tech no confían en nada ni en nadie.**

No confían en los candidatos, no confían en sus propios reclutadores, no confían en sus managers. Creen que si no hacen cinco entrevistas más pruebas más referencias, van a contratar a un impostor que lo destruirá todo en una semana.

Salvo que... también tienen un período de prueba. En Francia llega hasta ocho meses. En EE.UU. es «at-will»: pueden echarte el mismo día si quieren. Pero al parecer, eso no es suficiente. También hay que evitar que el impostor entre por la puerta.

¿Resultado? Un filtrado paranoico: «Vamos a eliminar al 95% de los candidatos antes de contratar a uno, para estar seguros.»

## La sobrevaloración sistemática: preguntas de CTO para un puesto de Senior Dev

Aquí es donde el sistema se vuelve verdaderamente absurdo: **cada empresa infla las exigencias del puesto**.

Una oferta de «Desarrollador Senior» acaba requiriendo competencias que deberían corresponder a un **CTO o Principal Engineer**. ¿Por qué?

### Preguntas de dirección para un puesto de IC

Te sientas frente a un ingeniero senior que te pregunta:

- «¿Cómo arquitectarías un sistema para 100 millones de usuarios?»
- «Explícame los trade-offs entre arquitectura monolítica y microservicios»
- «¿Cómo harías el despliegue en 3 continentes con una latencia < 100ms?»
- «¿Cómo has tomado decisiones de tech stack en tus proyectos anteriores?»

¿Pero el puesto? Es un puesto de desarrollador normal. Vas a programar features. Integrar APIs. Mantener código. Escribir tests.

La persona que te entrevista imagina inconscientemente que está contratando a su propio sustituto. Impone sus propios estándares. Quiere un CTO, pero solo puede pagar un sueldo de Senior Dev.

Resultado: tienes que fingir que sabes cosas que nunca usarás. Improvisan respuestas a preguntas irrelevantes para el trabajo real. Y te juzgan con criterios que no aparecen en ningún lugar de la descripción del puesto.

### Tests de algoritmos que no existen en ningún trabajo real

Y luego están las pruebas. Los famosos tests de algoritmos.

«Implementa un BFS para encontrar el camino más corto en un grafo no ponderado.»

«Resuelve el problema del vendedor de periódicos con complejidad O(n) en espacio y O(n log n) en tiempo.»

«Implementa una estructura de datos Union-Find con compresión de camino.»

¿Sinceramente? El 99% de los desarrolladores que programan cada día no escribirán nada de esto jamás.

Tu stack diario: JavaScript/TypeScript/Python. Usas librerías existentes. Llamas a `Array.sort()` o `sorted()`. ¿Algoritmos de ordenación? Implementados en O(n log n) por la stdlib. ¿Union-Find? Nunca utilizado.

Pero te evalúan sobre eso. ¿Por qué? Porque se confunde «alguien que puede aprender» con «alguien que domina las estructuras de datos clásicas». Es como testar a un ingeniero electricista en la construcción de un transistor a partir de silicio en bruto, solo para verificar que entiende cómo funcionan los circuitos.

Y lo peor: **es un test que premia la preparación, no la inteligencia**. Alguien que ha hecho 100 problemas de LeetCode el mes pasado pasará. Un desarrollador brillante que no ha tenido tiempo de prepararse, fallará. Se evalúa la capacidad de memorización, no la competencia real.

### Sobrevaloración progresiva: cada ronda sube el listón

Lo más insidioso es la inflación progresiva de expectativas.

**Ronda 2:** «¿Tienes O(n log n)? Bien, pero explícame también la complejidad espacial y demuestra que es óptimo.»

**Ronda 3:** «Vale, dominas los algoritmos. Pero ahora te damos un caso práctico. No solo codifiques: piensa en escalabilidad, mantenibilidad, testabilidad, y diseña una arquitectura que soporte 10.000 peticiones por segundo.»

**Ronda 4:** «Genial, tienes la arquitectura. Ahora dime cómo llegarías a producción. ¿Monitoring? ¿Logging? ¿Alertas? ¿Cómo depuras un incidente en producción a las 3am?»

**Ronda 5:** «Excelente. Ahora dime cómo liderarías un equipo. Tienes 3 juniors y un becario, y tienes que entregar una feature complicada en 2 semanas. Cuéntame tu enfoque.»

En cada paso, las exigencias suben. Y en cada paso, se evalúa un perfil completamente distinto:

- Ronda 2 = Un senior individual contributor
- Ronda 3 = Un Solutions Architect
- Ronda 4 = Un Ops/SRE
- Ronda 5 = Un CTO / Tech Lead

¡Pero es un solo puesto! ¿Te imaginas que a un candidato a enfermero se le pidiera poner inyecciones (Ronda 2), diagnosticar enfermedades (Ronda 3), gestionar un servicio hospitalario (Ronda 4) y definir la política sanitaria nacional (Ronda 5)?

Es una locura. Y es exactamente lo que ocurre en el reclutamiento tech.

## El coste humano: el atleta agotado

Volvamos a The Voice. Eres un candidato con talento. Músico, cantante, compositor. Audicionas porque es una oportunidad increíble.

Pero el proceso exige que:

1. **Te entregues al 1000% cada vez.** Sin «a ver qué pasa en esta». En cada etapa tienes que estar al máximo. Sintetizar tus mejores proyectos. Ensayar respuestas a preguntas trampa. Prepararte mentalmente. Es agotador.

2. **Mantengas una actitud positiva.** Porque el mínimo rastro de frustración, cualquier momento en que dejes entrever que el proceso te desgasta, y estás fuera. Los reclutadores buscan gente «motivada». Alguien que haga que parecer normal dedicar 8 horas a entrevistas por un salario de 40.000€ al año.

3. **Repitas esto para cada empresa.** Cada semana, una nueva empresa, una nueva serie de cinco entrevistas. Estás en una competición permanente. Postulando en todas partes, preparándote en todas partes, fallando en todas partes. Y cada vez tienes que volver a reunir energías.

Es inhumano. Es lo que le pedimos a un atleta olímpico, no a alguien que solo quiere programar y ganarse la vida.

## Los defectos del proceso: The Voice nos lo muestra

The Voice al menos tiene la honestidad de ser un espectáculo. Todo el mundo sabe que está dramatizado, que hay cámaras, que es entretenimiento. Los concursantes saben a qué se apuntan.

¿Pero el reclutamiento tech? Pretende ser objetivo. Racional. Basado en competencias.

Salvo que en realidad:

**1. La objetividad es una ilusión**
Los tests técnicos supuestamente «objetivos» miden en realidad tu capacidad de hacer un test técnico bajo presión, no tu capacidad de programar en el día a día. Un desarrollador brillante que se bloquea bajo presión fallará. Un desarrollador mediocre que memorizó patrones de LeetCode pasará. ¿Dónde está la objetividad?

**2. El «culture fit» es a menudo código para «parécete a mí»**
Cuando una entrevista evalúa el «culture fit», en realidad suele estar preguntando: «¿seríamos amigos?», «¿vendrías al after-work?», «¿te harían gracia los mismos memes?». Es sesgo de confirmación disfrazado de competencia. Y filtra sistemáticamente a introvertidos, personas neurodivergentes, inmigrantes, mujeres y padres.

**3. La fatiga de rendimiento genera subrepresentación**
Cuanto más largo es el proceso, más favorece a los candidatos con tiempo y energía para prepararse. ¿Los padres en solitario que trabajan a jornada completa y no pueden hacer LeetCode por las noches? Eliminados. ¿Las personas en reconversión que tienen que justificar cada decisión de carrera? Eliminadas. ¿Las personas que han tenido éxito en pequeñas empresas sin gran notoriedad? Eliminadas.

**4. Las referencias son una cadena de privilegios**
Si necesitas llamar a mi antiguo jefe para verificar que soy bueno, asumes que he tenido jefes anteriores en empresas «buenas». ¿Un recién graduado? Sin referencias. ¿Un inmigrante que trabajó en el extranjero? Sus referencias no hablan el idioma. ¿Un autodidacta que acaba de terminar un bootcamp? Sin historial. El proceso filtra estructuralmente los perfiles no convencionales.

**5. La sobrevaloración del perfil**
Cada empresa recluta para el perfil que le habría gustado tener, no para el que realmente necesita. Un puesto de Senior Dev acaba exigiendo experiencia de Principal Engineer. Tests de algoritmos complejos para un puesto que nunca los usará. Preguntas de diseño de sistemas de nivel CTO para un puesto donde simplemente programarás features. ¿Resultado? El 90% de los candidatos están sobrecualificados o son rechazados por no tener «experiencia de CTO». Y los pocos que son contratados acaban frustrados: han sobreactuado un papel durante el proceso que la realidad no puede igualar.

## La trampa de las cinco entrevistas

Esto es lo que no entiendo: **si ya puedes identificar a un buen candidato en tres entrevistas bien estructuradas, ¿por qué hacer cinco?**

La respuesta revela la verdadera enfermedad: el **miedo a equivocarse**. Las empresas tech, que se suponen vanguardistas en innovación y asunción de riesgos, están absolutamente aterradas ante la idea de contratar a la persona equivocada.

Y aquí reside la ironía final: al intentar evitar el riesgo de contratar «a la persona equivocada», garantizan equipos homogéneos, sin diversidad, sin perspectivas nuevas, sin creatividad. Eliminan el ruido que podría convertirse en señal. Matan la innovación antes de que empiece.

## ¿Qué has creado en realidad?

Con este proceso, las empresas tech han creado un mercado laboral que:

- **Agota a los buenos candidatos.** Las personas brillantes se cansan tras tres o cuatro procesos eliminatorios y dejan de postularse.
- **Favorece a los supervivientes del sistema.** Los que ya lo tienen todo: red de contactos, marca personal, confianza innata. ¿Los demás? Desanimados.
- **Se pierde talentos ocultos.** Todos los desarrolladores brillantes que podrían haber sido excelentes con un poco de formación, un buen onboarding y apoyo. Jamás contratados.
- **Crea una cultura de desconfianza.** Si el proceso de contratación es una batalla, la cultura interna también lo será.

## La pregunta sencilla que debes hacerte

Antes de añadir esa quinta entrevista, hazte una pregunta sencilla: **«¿Este paso me ayuda realmente a tomar una mejor decisión, o es solo paranoia institucionalizada?»**

Porque si tienes un período de prueba, un onboarding sólido, y eres capaz de invertir en el crecimiento de tu equipo, no necesitas cinco entrevistas. Necesitas suficientes entrevistas para verificar que la persona:
- Sabe programar (o puede aprender)
- No es un sociópata
- Siente pasión por el área
- Sabe comunicarse

Eso es todo. Las tres primeras rondas lo comprueban. La cuarta empieza a ser paranoia. ¿La quinta? Es solo teatro.

## La conversación real que hay que tener

La verdadera pregunta para las empresas: **¿queréis contratar al mejor candidato, o al candidato que tiene más tiempo para dedicar a vuestras pruebas?**

Porque son dos cosas muy distintas.

Cuando haces cinco entrevistas, no estás optimizando por competencia. Estás optimizando por disponibilidad, autoconfianza y acceso a recursos para prepararse. Y eliminas sistemáticamente a las personas que tienen demasiadas responsabilidades, demasiado poco privilegio o demasiado poca energía para jugar a ese juego.

## Conclusión: es hora de cambiar

Solo hace falta una cosa: **confianza**.

No en la contratación perfecta (no existe). No en la ausencia de riesgo (siempre lo habrá). Sino en tu capacidad para **acoger a alguien, formarlo y dejar que se vuelva excelente**.

Las empresas tech pasan 40 horas filtrando a un candidato. Luego 0 horas integrándolo, haciendo onboarding, dándole las herramientas para triunfar. Deberían invertirlo.

En lugar de hacer preguntas de CTO a un Senior Dev, haz las que realmente importan:

- «¿Puedes aprender rápido?»
- «¿Sabes cómo aprendes mejor?»
- «¿Qué es lo que de verdad te motiva?»
- «¿Estás dispuesto a ser honesto cuando no sabes algo?»

Sin BFS, sin Union-Find, sin cinco rondas. Solo una conversación honesta con alguien a quien tienes intención de formar y desarrollar.

¿Y después? Dale una oportunidad real. No un período de prueba donde todo el mundo espera en secreto que se vaya. Un onboarding auténtico, ciclos claros, objetivos alcanzables y tiempo.

Los mejores equipos del mundo no están formados por personas que ya lo sabían todo al llegar. Están formados por personas a las que alguien se tomó el tiempo de desarrollar.

El reclutamiento tech tiene que dejar de imitar a The Voice y empezar a imitar cómo las organizaciones de verdad construyen talento.
