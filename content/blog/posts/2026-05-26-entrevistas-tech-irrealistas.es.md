---

title: "El gran teatro de las entrevistas técnicas: por qué contratamos en el vacío"
subtitle: "Pruebas para casa que duran un fin de semana, live coding bajo vigilancia, preguntas de Google para un puesto de CRUD developer. El reclutamiento tech está roto. Y todo el mundo lo sabe."
description: "Las entrevistas técnicas se han convertido en una prueba desconectada de la realidad del trabajo. Tests irreales, live coding bajo presión, preguntas fuera de contexto. Por qué bastan dos entrevistas y para qué existe el período de prueba."
categories: ["Work Culture", "Productividad Dev"]
excerpt: "¿Cuántas horas de tu vida has pasado implementando un algoritmo de ordenación de burbuja para un puesto donde vas a pasar tus días haciendo llamadas REST y depurando consultas SQL? El reclutamiento tech se ha convertido en un circuito de obstáculos que no mide nada útil."
date: 2026-05-26 00:00:00 +0100
featured_image: /assets/images/blog/2026-05-26-entretiens-tech-irrealistes-featured.png

---

En algún lugar de una sala de reuniones, un candidato está codificando un árbol binario en una pizarra. Está sudando. Dos reclutadores lo observan en silencio, bolígrafos en alto. El puesto: mantener un back-office de e-commerce en PHP/Symfony. No habrá un solo árbol binario en ese proyecto.

Esta escena se repite miles de veces por semana. Y todo el mundo, tanto candidatos como reclutadores, sabe perfectamente que es absurda.

El reclutamiento técnico está roto. No ligeramente disfuncional: estructuralmente roto. Y la forma en que lo estamos arreglando consiste principalmente en añadir más pasos.

## La prueba técnica para casa: «3 horas, máximo»

La descripción dice tres horas. El proyecto pedido, en cambio, no ha leído la descripción.

«Crea una API REST completa con autenticación JWT, tests unitarios, documentación OpenAPI, gestión de errores, Dockerfile, y si tienes tiempo, una interfaz frontend.»

Tres horas. Claro.

Lo que ocurre realmente: el candidato dedica un fin de semana entero. El viernes por la tarde delimitando el proyecto. El sábado codificando limpiamente porque sabe que van a juzgar la calidad. El domingo limpiando, documentando, preparando el README.

Y si no lo hace, si entrega realmente tres horas de trabajo honesto, será comparado con los candidatos que sacrificaron su fin de semana. Será calificado de «poco implicado». Será eliminado.

La prueba para casa, en su forma actual, no mide competencias técnicas. Mide la disponibilidad para ofrecer tiempo personal sin contrapartida. Es una prueba de precariedad, no de ingeniería.

Algunas empresas van más lejos: así obtienen prototipos funcionales sin contratar jamás a nadie. Es raro, pero ocurre. Y la duda sola es suficiente para hacer el ejercicio tóxico.

## El live coding: programar como si tu vida dependiera de ello

El live coding nació de una buena intención: ver a alguien resolver un problema en tiempo real, observar su forma de pensar, su relación con la incertidumbre, su capacidad para comunicarse bajo esfuerzo.

Lo que da en la práctica: un candidato solo frente a un editor compartido, dos o tres personas leyendo su código en directo, un cronómetro mental corriendo, y un problema algorítmico sacado del manual de preparación para entrevistas de Google.

El tipo de problema que el 99% de los desarrolladores en activo no resolverían de memoria, en veinte minutos, bajo presión, sin documentación.

«Implementa una caché LRU.»
«Encuentra el camino más corto en un grafo ponderado.»
«Invertir una lista enlazada.»

Para un puesto de desarrollador full-stack en una aplicación SaaS B2B.

Lo que se mide: la capacidad de rendir bajo estrés artificial, en un contexto artificial, sobre problemas artificiales.

Lo que no se mide: cómo lee la persona una codebase desconocida, cómo hace preguntas pertinentes, cómo arbitra entre rapidez y calidad, cómo gestiona deuda técnica heredada, cómo se comunica con perfiles no técnicos.

Es decir: todo lo que determina si alguien será bueno en el puesto.

## Las cinco entrevistas en serie: el maratón del agotamiento

Se ha convertido en la norma en las empresas tech que se creen rigurosas: cinco, seis, a veces siete entrevistas para un solo puesto.

Primera entrevista: screening de RRHH, 30 minutos, para verificar que hablas español y que realmente has aplicado.

Segunda entrevista: entrevista técnica introductoria con un lead dev, para verificar que sabes qué es una variable.

Tercera entrevista: prueba técnica a domicilio, una semana de plazo, tres horas anunciadas, un fin de semana real.

Cuarta entrevista: revisión de código del test en directo, con dos desarrolladores buscando trampas en tu implementación.

Quinta entrevista: entrevista de culture fit con el manager, para verificar que estás «aligned with our values».

Sexta entrevista (bonus en las startups ambiciosas): presentación al equipo, veinte minutos de demo de tu test, preguntas en ráfaga.

Total: entre 15 y 25 horas invertidas por el candidato. Para descubrir, muchas veces, que «han decidido cubrir el puesto internamente».

Este proceso elimina a los candidatos que están en activo y no tienen el lujo de sacrificar sus noches y fines de semana durante un mes. Favorece estructuralmente a quienes tienen tiempo libre, es decir, a los que son muy juniors o están entre dos empleos. No es un filtro de competencia. Es un filtro social.

## Las preguntas de Google para el puesto de la oficina diáfana

Hay un momento particularmente absurdo en algunas entrevistas técnicas: el desfase entre la empresa que contrata y las preguntas que hace.

Una startup de veinte personas que vende una herramienta de facturación online para pymes que pregunta: «Explica cómo funciona el consenso en un sistema distribuido.»

Una agencia web que hace sitios WordPress que pregunta: «¿Cuál es la complejidad temporal de tu algoritmo de búsqueda?»

Un editor de software cuyo producto principal corre en un servidor compartido que pregunta: «¿Cómo optimizarías el rendimiento de una base de datos a escala de miles de millones de entradas?»

Estas preguntas provienen de bancos de preguntas copiadas de guías de preparación para entrevistas FAANG. Fueron diseñadas para contratar ingenieros que van a diseñar sistemas distribuidos a escala mundial.

No tienen nada que ver con el puesto ofrecido. No permiten predecir el rendimiento en ese puesto. Eliminan candidatos perfectamente competentes que no han pasado sus noches memorizando algoritmos que nunca van a utilizar.

## El problema de negocio interno disfrazado de test de entrevista

Hay una variante del live coding particularmente perversa, menos nombrada pero muy extendida: la empresa somete al candidato un problema real que está enfrentando en producción.

No un ejercicio genérico. No un kata algorítmico. Su problema. Aquel sobre el que sus equipos han estado trabajando durante semanas. Aquel para el que ya tienen una solución, refinada, discutida en revisiones de arquitectura, validada por el contexto de negocio y el historial técnico del producto.

Y le piden al candidato que lo resuelva en directo, en treinta minutos, sin ningún contexto.

El desequilibrio es total. Por un lado: un equipo que conoce el dominio, el stack, las restricciones de rendimiento, las decisiones pasadas, las razones por las que ciertos enfoques ya fueron descartados. Por el otro: alguien que leyó la descripción del puesto hace diez días e intenta descifrar un enunciado ambiguo bajo la mirada de tres personas que ya saben la respuesta.

Esto no es una prueba de competencia. Es una prueba de omnisciencia.

Lo peor es cómo se interpretan los resultados. Si el candidato propone una solución diferente a la del equipo, es «poco pragmático» o «no entiende las restricciones reales». Si su solución se parece a la de ellos, es «bien, pero podría haber llegado más lejos». La rúbrica de evaluación es invisible porque en realidad es una comparación con una respuesta que no está permitido conocer.

Algunos reclutadores llaman a esto «evaluar la capacidad para resolver problemas complejos». Lo que están evaluando en realidad es la capacidad de adivinar su contexto interno sin haber estado nunca expuesto a él. Es una habilidad que no existe. Y que no predice nada sobre el rendimiento futuro en el puesto.

## El cuestionario de personalidad online: 90 preguntas sobre tus valores

Antes incluso de hablar con un humano, algunos procesos comienzan con un test de personalidad online.

90 preguntas. A veces 120. Del tipo: «En una escala de 1 a 5, ¿en qué medida estás de acuerdo con la afirmación: "Prefiero trabajar solo que en equipo"?»

Estos tests tienen una validez predictiva débil, documentada durante décadas en la literatura de psicología laboral. Son fáciles de sesgar consciente o inconscientemente. Eliminan perfiles atípicos que podrían ser exactamente lo que el equipo necesita.

Y sobre todo: dan una impresión de rigor científico sin tener sus propiedades. Es teatro de seriedad.

## Lo que realmente predice el rendimiento

Los estudios sobre la validez predictiva de los métodos de selección son claros desde hace tiempo. Las mejores predicciones de rendimiento laboral provienen de:

**La entrevista estructurada**: mismas preguntas para todos los candidatos, rúbrica de evaluación definida de antemano, puntuación independiente. Sin improvisación, sin «corazonadas».

**Las pruebas de trabajo real**: dar un problema genuino del trabajo diario del puesto, en condiciones cercanas a la realidad. No un proyecto de fin de semana. No un algoritmo abstracto. Un bug a corregir en una codebase existente, una feature a diseñar para un sistema descrito, una decisión de arquitectura a justificar en un caso concreto.

**El período de prueba**: es el test más válido que existe. La persona trabaja en el contexto real, con los compañeros reales, en los problemas reales. Ninguna entrevista puede simular eso.

Lo que predice mal: las preguntas de algoritmos bajo presión, los tests de personalidad, las entrevistas no estructuradas basadas en sensaciones, los maratones de entrevistas que agotan a los candidatos antes de su primer día.

## La propuesta: dos entrevistas, un período de prueba

El reclutamiento no necesita diez pasos. Necesita dos.

**Entrevista 1: la técnica**

Una entrevista estructurada de una hora a una hora y media. Un problema concreto del trabajo diario del puesto, no un ejercicio académico. El candidato puede hacer preguntas, usar documentación, trabajar como trabajaría realmente. El objetivo: ver cómo piensa, cómo se comunica, cómo gestiona la incertidumbre. No si ha memorizado quicksort.

Si una prueba para casa es realmente necesaria, debe ser corta, remunerada (sí, remunerada), y representativa del trabajo real. Dos horas máximo, compensada, sobre un tema que corresponda al puesto.

**Entrevista 2: RRHH / cultura**

Una entrevista estructurada de una hora con el manager y potencialmente un futuro compañero. Objetivo: verificar el alineamiento en las condiciones de trabajo, las expectativas mutuas, la forma de colaborar, las restricciones de cada uno. Sin preguntas trampa. Sin «¿Cuál es tu mayor debilidad?» Preguntas reales sobre situaciones reales.

**El período de prueba hace el resto**

Es exactamente para eso que existe. Tres meses para observar cómo trabaja alguien realmente. Cómo se integra. Cómo gestiona los imprevistos. Cómo evoluciona con el feedback. Es el test más rico, más contextual, más honesto que existe.

Ninguna entrevista, por sofisticada que sea, reemplazará jamás tres meses de trabajo real. Dejemos de pretender lo contrario acumulando pasos inútiles antes.

## Por qué nada cambia

Si el problema es conocido, documentado, y existen soluciones, ¿por qué las prácticas siguen siendo tan malas?

Varias razones.

Primero, **la aversión al error asimétrico**: contratar a alguien que no está a la altura es visible, trazable, y costoso socialmente para el reclutador. Rechazar a un buen candidato es invisible. Nadie sabe lo que se pierde. Este sesgo empuja a acumular pasos para cubrirse, no para elegir mejor.

Luego, **el mimetismo**: las empresas copian las prácticas de las empresas que admiran. Las startups copian a las FAANG. Las agencias copian a las startups. Las preguntas de algoritmos de Google acaban en entrevistas para puestos de desarrollador municipal. Nadie se ha preguntado si era apropiado. Es lo que se hace.

Finalmente, **el desequilibrio de poder**: en un mercado laboral tenso, los candidatos aguantan sin quejarse. Negarse a hacer una prueba de cuarenta horas es descalificarse. Expresar incomodidad ante el live coding es mostrar que «falta confianza en uno mismo». El feedback negativo no sube.

## Lo que dice de la cultura

La forma en que una empresa contrata dice algo sobre cómo trata a sus empleados.

Una empresa que pide un fin de semana de trabajo no remunerado antes incluso de hacerte una oferta te dice algo sobre el valor que otorga a tu tiempo.

Una empresa que te hace pasar seis entrevistas te dice algo sobre su relación con la confianza y la eficiencia en la toma de decisiones.

Una empresa que hace preguntas fuera de contexto te dice algo sobre su capacidad para distinguir lo esencial de lo accesorio.

No es universal. Algunos equipos contratan bien a pesar de procesos imperfectos. Pero el proceso de reclutamiento es una señal. Vale la pena leerla.

---

El reclutamiento técnico no es difícil por naturaleza. Se volvió difícil porque apilamos prácticas heredadas, copiadas y nunca cuestionadas. Dos entrevistas bien construidas valen más que seis mal planteadas. Y un período de prueba honesto sigue siendo el mejor instrumento de selección que existe.

El resto es teatro.
