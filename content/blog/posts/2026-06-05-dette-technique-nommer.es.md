---

title: "Deuda técnica: nombrar las deudas en lugar de \"pagarlas\""
subtitle: "Todos los equipos de tecnología hablan de saldar su deuda técnica. Pocos equipos saben exactamente de qué deudas están hablando. Esa imprecisión es el primer obstáculo para una gestión seria."
description: "La deuda técnica se trata a menudo como una masa indistinta que hay que reducir. Gestionarla en serio exige nombrarla con precisión: qué deuda, creada cuándo, por qué razón, con qué impacto actual."
categories: ["Productividad en Desarrollo", "Gestión de Proyectos"]
excerpt: "\"Necesitamos un sprint de deuda técnica.\" Esta frase se pronuncia en cientos de equipos cada trimestre. Lo que ocurre a continuación: dos semanas de refactorización sin dirección clara, cuyo valor es imposible de comunicar a la dirección, y que no cambia fundamentalmente los problemas más dolorosos."
date: 2026-06-05 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-05-dette-technique-nommer-featured.png

---

La deuda técnica es una metáfora financiera. Ward Cunningham la introdujo para explicar que ciertas decisiones de implementación rápidas pero imperfectas crean una obligación futura: o se corrigen más adelante, o se pagan intereses en forma de ralentización y complejidad creciente.

La metáfora es útil. Pero tiene un problema: como muchas buenas metáforas, se ha convertido en una categoría comodín que designa cosas muy distintas a la vez, lo que hace su uso preciso casi imposible.

Cuando un desarrollador dice "hay deuda técnica", ¿qué quiere decir exactamente? ¿El código es antiguo? ¿Está mal estructurado? ¿Es difícil de entender? ¿Es frágil ante los cambios? ¿Usa dependencias obsoletas? ¿No tiene tests? ¿Tiene tests pero son malos? ¿Funciona pero nadie sabe realmente cómo?

Todas estas realidades se agrupan bajo el mismo término. Y porque se agrupan, se gestionan de la misma forma: con sprints de "pago" que lo tratan todo a la vez y no abordan nada concreto.

## Las distintas formas de deuda

Distinguir los tipos de deuda es el primer paso hacia una gestión útil.

**Deuda deliberada.** Decisión tomada conscientemente: "Lo implementamos así, de forma rápida, para entregar a tiempo, y lo generalizaremos cuando lo necesitemos." Esta es deuda verdadera en el sentido financiero: un préstamo con intención de devolución. Debería documentarse en el momento en que se contrae.

**Deuda accidental.** Código escrito de buena fe en un momento en que las restricciones no estaban claras, o las mejores prácticas aún no eran conocidas por el equipo. No es deliberada, pero tampoco es negligencia. Se descubre trabajando en la codebase.

**Deuda de contexto.** Código perfectamente correcto en su momento, que se ha vuelto problemático porque el contexto cambió: la arquitectura evolucionó, los requisitos de rendimiento cambiaron, una nueva normativa impone restricciones que no existían antes. No es código malo - es buen código que ya no se corresponde con la realidad actual.

**Deuda de obsolescencia.** Dependencias que ya no reciben actualizaciones de seguridad, lenguajes o frameworks cuyo ecosistema se está reduciendo, patrones que ya no son mantenibles con las herramientas disponibles. Esta deuda tiene un componente de riesgo de seguridad distinto al de las demás.

**Deuda de comprensión.** Código funcional que nadie entiende del todo. Quizás fue escrito por alguien que ya no está en el equipo, o con un estilo inusual, o con suposiciones implícitas que no están documentadas en ninguna parte. Mantener este código es peligroso no porque sea malo, sino porque nadie sabe qué está tocando.

Estos cinco tipos de deuda tienen impactos diferentes, orígenes diferentes y soluciones diferentes. Tratarlos de la misma forma es ineficiente.

## El registro de deuda

La práctica más directamente útil para gestionar la deuda técnica es también la menos aplicada: mantener un registro.

Un registro de deuda es simplemente una lista de las deudas conocidas con, para cada una, información mínima: una descripción precisa, el impacto actual sobre la productividad o la fiabilidad, la razón por la que existe y una estimación del esfuerzo para resolverla.

El esfuerzo de crear este registro revela de inmediato dos cosas.

Primero: las deudas que "todo el mundo sabe" que existen pero que nadie ha escrito nunca. La verbalización fuerza la precisión. "Hay deuda en el módulo de autenticación" se convierte en "El módulo de autenticación usa una gestión de sesión con estado que hace imposible el escalado horizontal. Origen: decisión inicial por falta de tiempo. Impacto: imposibilidad de añadir instancias sin trabajo previo. Esfuerzo estimado: 2 semanas."

Segundo: los desacuerdos sobre qué es deuda y qué no. La deuda está a menudo en los ojos de quien mira. Lo que para un desarrollador es "sucio" puede ser "pragmático" para otro. El registro obliga a un consenso sobre lo que se reconoce como problema.

## Comunicar la deuda a la dirección

Una de las dificultades recurrentes en la gestión de la deuda técnica es la comunicación con las partes interesadas no técnicas.

La dirección escucha "deuda técnica" como "un problema vago que los desarrolladores quieren corregir" y no tiene base para evaluar si es urgente o cosmético. Frente a un backlog de funcionalidades claramente vinculadas a necesidades de los usuarios, la deuda técnica pierde sistemáticamente.

Un registro de deuda bien mantenido cambia esta dinámica. Permite traducir la deuda en términos de impacto en el negocio:

"El módulo de informes tarda 45 segundos en generarse porque las consultas no están optimizadas. Cada semana, el equipo de soporte recibe 15 tickets de usuarios frustrados por este retraso. Resolver este problema lleva 5 días y elimina estos tickets de soporte."

Esta formulación es comunicable. Tiene un impacto medible, un coste de inacción y un coste de resolución. Permite a la dirección tomar una decisión informada, en lugar de confiar ciegamente en los desarrolladores que dicen que es importante.

## La deuda intencional como herramienta de entrega

Hay una posición defensiva frecuente en las discusiones sobre deuda técnica: los desarrolladores quieren código perfecto, la dirección quiere entregar rápido, y la deuda siempre es culpa de la dirección.

Esta posición es demasiado simple.

La deuda intencional es a veces la decisión correcta. Entregar una implementación imperfecta para validar una necesidad del usuario antes de invertir en una versión robusta es una decisión comercial sensata. Evitar un problema de rendimiento para cumplir con una fecha límite crítica puede estar justificado si la deuda está documentada y planificada para su resolución.

Lo que distingue una buena deuda intencional de una mala deuda accidental: la documentación en el momento de su creación y la intención explícita de resolución.

Una buena deuda intencional se parece a esto: "Hardcodeamos la configuración del servicio de pagos porque necesitamos entregar antes de fin de mes. Ticket de deuda creado: generalizar la configuración del servicio de pagos. Priorizado para el siguiente cycle."

Una mala deuda accidental se parece a esto: "Entregamos rápido. El código funciona. Ya lo veremos más adelante." No hay ticket, no hay documentación, no hay intención explícita. "Más adelante" nunca llega.

## La trampa del sprint de deuda

El sprint enteramente dedicado a la deuda técnica es una práctica común y a menudo ineficaz.

Es común porque es visible. "Este sprint, hacemos deuda" es una comunicación sencilla. Tranquiliza a los desarrolladores que ven valorado su trabajo de mantenimiento.

Es a menudo ineficaz por varias razones.

La urgencia de las funcionalidades recupera su lugar en el sprint siguiente. Si la deuda no se reduce de forma continua, las ganancias del sprint dedicado se erosionan rápidamente por las decisiones del sprint posterior.

Sin un registro preciso, el sprint de deuda carece de dirección. Los desarrolladores atacan lo que personalmente les molesta, no necesariamente lo que tiene más impacto. El módulo que un desarrollador encuentra "sucio" pero que no causa ningún problema operativo recibe atención. El verdadero cuello de botella que nadie ha querido tocar permanece intacto.

La alternativa que funciona mejor en la mayoría de los equipos: asignar un porcentaje constante del tiempo del equipo a la deuda en cada cycle (habitualmente entre el 15 % y el 25 %), seleccionando los elementos del registro de deuda según su impacto.

No es tan espectacular como un sprint dedicado. Es más eficaz a largo plazo.

## Lo que la deuda revela sobre las decisiones pasadas

Un registro de deuda bien mantenido tiene una propiedad inesperada: se convierte en un historial de las decisiones del equipo.

Cada deuda documentada con su razón de origen dice algo sobre el contexto en el que fue creada. Las presiones de los plazos. Las suposiciones sobre el crecimiento que no se materializaron. Las tecnologías que parecían prometedoras y no lo fueron. Las prioridades de la época.

Este historial es valioso por dos razones. Evita repetir los mismos errores sin haber aprendido de la primera vez. Y ayuda a los nuevos miembros del equipo a entender por qué el código es como es, en lugar de pasar tiempo "corrigiendo" decisiones que tenían sentido en su contexto.

---

La deuda técnica no es un problema que se resuelva de una vez por todas. Es una realidad permanente del desarrollo de software, que debe gestionarse de forma continua y con claridad.

Esa claridad empieza por nombrar con precisión lo que se debe. Una deuda que se puede describir, medir y explicar es una deuda que se puede gestionar. Una masa indistinta de "código legacy" no lo es.
