---

title: "Una user story no es un ticket: por qué las palabras que eliges estructuran tu trabajo"
subtitle: "Como… quiero… para poder… Este formato conquistó el mundo del desarrollo. También produjo backlogs ilegibles, debates semánticos interminables y equipos que ya no saben qué están entregando realmente."
description: "La user story es una herramienta de conversación, no un ticket de trabajo. Confundirlas produce backlogs que no describen lo que el equipo hace. Las issues, directas y sin formato impuesto, son más honestas."
categories: ["Gestión de Proyectos", "Cultura Laboral"]
excerpt: "\"Como usuario, quiero poder iniciar sesión para poder acceder a mi cuenta.\" Este ticket se ha escrito millones de veces. No describe nada útil sobre lo que el desarrollador debe hacer. Ese es el problema central de la user story como unidad de trabajo."
date: 2026-05-29 00:00:00 +0100
featured_image: /assets/images/blog/2026-05-29-issues-vs-user-stories-featured.svg

---

En algún lugar de un backlog de Jira hay un ticket titulado "Como usuario, quiero poder restablecer mi contraseña para recuperar el acceso a mi cuenta." Está estimado en 3 story points. Está asignado a un desarrollador. Lleva marcado como bloqueado tres sprints porque nadie ha definido qué implica exactamente "recuperar el acceso": ¿se envía un correo electrónico? ¿Un SMS? ¿Ambos? ¿Qué ocurre si el correo ya no es válido?

El ticket parece completo. Respeta el formato. Tiene sujeto, verbo y objetivo. Y sin embargo, no dice nada sobre lo que el desarrollador tiene que hacer.

Ese es el problema fundamental de la user story como unidad de trabajo.

## Lo que la user story debía ser

La user story no fue inventada como formato de ticket. Fue inventada por Ron Jeffries y sus colegas en el contexto de Extreme Programming a principios de los años 2000, como soporte para una conversación.

La idea original: una tarjeta (física, de cartón) que contiene la información justa para iniciar una discusión entre el Product Owner y el equipo técnico. Nada más. La tarjeta no es la especificación. La conversación alrededor de la tarjeta, sí.

La formulación "como… quiero… para poder…" vino después, como ayuda para estructurar esa conversación. Para asegurarse de pensar en quién se beneficia de la funcionalidad, qué permite hacer y por qué.

Este formato tenía sentido en ese contexto. Lo tiene mucho menos cuando se convierte en el campo de título de un ticket de Jira que alguien lee seis semanas después de que tuvo lugar la conversación, sin haber asistido a ella, sin saber qué se decidió.

## La deriva semántica

En un momento difícil de precisar, algo cambió.

La user story pasó de herramienta de conversación a unidad de entrega. La tarjeta de discusión se convirtió en el ticket de trabajo. Y la fórmula "como… quiero… para poder…" se convirtió en un campo obligatorio, validado por plugins de Jira que rechazan títulos que no empiecen por "Como".

Este desplazamiento produjo varios efectos perversos.

**El relleno mecánico.** Cuando el formato se convierte en una obligación, la gente lo cumple sin pensar. "Como administrador, quiero poder acceder al panel de administración para administrar el sistema." Ese ticket no dice nada. Respeta la fórmula. Está en el backlog de todas formas.

**La pérdida de precisión técnica.** La user story, por construcción, describe una necesidad del usuario. No describe una solución técnica. Esa es su virtud para las conversaciones entre producto y desarrollo. Ese es también su defecto como ticket de trabajo: el desarrollador tiene que adivinar o reinventar cada vez lo que implica en la práctica.

**El debate semántico improductivo.** "Este ticket no es realmente una user story, es una tarea técnica." "Las tareas técnicas deben desglosarse bajo las user stories." "Pero entonces, ¿cómo estimamos las epics?" Horas de reuniones dedicadas a organizar el backlog en lugar de trabajar.

## Lo que una issue dice que una user story no dice

Una issue, en sentido literal, es algo que debe resolverse. Un problema, una mejora, una tarea, un bug. La palabra es neutra, directa, sin formato impuesto.

Lo que esto cambia en la práctica:

Una issue puede llamarse "Sistema de restablecimiento de contraseña por correo electrónico." Describe lo que hay que hacer, no quién se beneficia de ello. Deja espacio para los detalles técnicos. Puede tener una descripción que mezcle contexto de usuario y restricciones de implementación.

No obliga a encontrar un sujeto válido ("como administrador del sistema con permisos de nivel 3…"). No fuerza a justificar su existencia en el formato ("para poder gestionar los accesos…"). Dice lo que es.

Una issue también puede describir algo que no tiene un usuario directo: una migración de base de datos, una actualización de dependencias, la configuración de un pipeline de CI. Intentar encajar ese trabajo en el formato de user story produce resultados absurdos. "Como desarrollador, quiero actualizar la versión de Node.js para seguir recibiendo parches de seguridad." Sí. O simplemente se puede escribir: "Actualizar Node.js a la versión 22 LTS."

## El problema de los criterios de aceptación

La user story suele acompañarse de criterios de aceptación. Esta es a menudo la parte más útil del ticket, y también la que los equipos escriben peor.

Los criterios de aceptación deben definir qué constituye una implementación exitosa. Cuando se hace bien, sustituyen con ventaja a toda la descripción de la user story. Dicen lo que el sistema debe hacer en condiciones específicas.

El problema: los equipos que usan el formato user story suelen tener una relación invertida con estos dos elementos. El título en formato "como…" recibe mucha atención cuando se crea el ticket. Los criterios de aceptación se añaden deprisa, de forma vaga o no se añaden en absoluto.

Lo que se encuentra habitualmente: un título con formato impecable y criterios del tipo "El usuario puede restablecer su contraseña", que no añade nada respecto al título.

## El naming como herramienta de precisión

Hay algo no trivial en nombrar correctamente las unidades de trabajo.

Un backlog compuesto por issues con nombres claros permite a alguien que no asistió a las conversaciones entender qué se ha entregado, qué está en curso y qué queda por hacer. Permite buscar tickets sin recordar el asunto exacto. Permite a un nuevo miembro del equipo orientarse.

Un backlog compuesto por user stories tituladas "Como usuario, quiero…" no ofrece esas propiedades. Hay que abrir cada ticket para entender de qué trata. Hay que conocer el contexto de la conversación para interpretar lo que se planeaba.

El naming es documentación implícita. Un ticket bien nombrado documenta por sí mismo lo que contiene. Un ticket mal nombrado hay que abrirlo y leerlo completo cada vez.

## La cuestión de la granularidad

Una de las confusiones frecuentes en los equipos que usan user stories es la cuestión del nivel de abstracción.

Se supone que la user story vive en un nivel de granularidad medio: suficientemente precisa para ser estimada y planificada, suficientemente abstracta para mantenerse centrada en el valor para el usuario. Por encima están las epics. Por debajo, las tareas.

En la práctica, esta jerarquía crea más problemas de los que resuelve.

Las epics son a menudo demasiado grandes para planificarse pero demasiado pequeñas para ser objetivos estratégicos. Las tareas son a menudo redundantes con los criterios de aceptación de las user stories. Y las propias user stories oscilan entre niveles de granularidad muy distintos según el equipo y el momento.

Una jerarquía más directa: capabilities para las funcionalidades de alto nivel, issues para el trabajo cotidiano. Sin formato impuesto, sin regla de granularidad abstracta. La granularidad se define por lo que es útil planificar y seguir, no por una convención de naming.

## Lo que esto dice de la organización

La forma en que un equipo nombra y estructura su backlog dice algo sobre cómo piensa su trabajo.

Un equipo que usa user stories como tickets es a menudo uno en el que la responsabilidad de producto y la responsabilidad técnica están fuertemente separadas. El Product Owner crea user stories centradas en la necesidad del usuario. Los desarrolladores las desglosan en tareas técnicas. Los testers verifican los criterios de aceptación.

Este modelo tiene sus virtudes en organizaciones muy grandes. Tiene sus defectos en equipos donde producto y técnica trabajan en estrecha colaboración: crea artefactos intermedios que no tienen valor en sí mismos.

Un equipo que usa issues directas es a menudo uno en el que la responsabilidad es más fluida: los desarrolladores entienden la necesidad del usuario, el Product Owner entiende las restricciones técnicas, y el ticket no necesita hacer de traductor entre dos mundos.

## Conservar la conversación, eliminar el formato

Lo que tenía de bueno la user story era la insistencia en el "por qué." En el valor para el usuario. En que cada ítem del backlog debería tener un beneficiario y un objetivo.

Esa insistencia es valiosa. Evita construir funcionalidades huérfanas, optimizaciones sin impacto, tickets que existen porque a alguien se le ocurrió una idea un martes.

Lo que hay que conservar: la disciplina del "por qué." Cada issue debería poder responder a la pregunta: ¿a quién sirve esto, y para qué?

Lo que hay que abandonar: el formato rígido "como… quiero… para poder…" como estructura obligatoria del título. Este formato restringe el pensamiento a un molde que no corresponde a la diversidad del trabajo real.

Escribir "Sistema de autenticación SSO con Google" y anotar en la descripción "Contexto: los usuarios deben poder iniciar sesión con su cuenta de Google profesional, reduciendo las contraseñas internas a gestionar" es infinitamente más útil que un título con formato perfecto que no dice lo que hay que hacer.

## La señal que envían las palabras

Hay un último aspecto a menudo subestimado: la señal que envía el vocabulario al equipo.

"User story" dice: este ticket existe para servir a un usuario. Es un recordatorio constante de que el trabajo tiene un significado externo al equipo técnico.

"Issue" dice: hay algo que resolver. Es más neutral, pero también más honesto sobre la diversidad del trabajo real: no todo lo que un equipo técnico debe hacer sirve directamente a un usuario final, y pretender lo contrario crea contorsiones intelectuales innecesarias.

Ambos enfoques tienen su fondo de sabiduría. Lo que no funciona es imponer uno de los dos formatos a todo el trabajo del equipo, como si la realidad del desarrollo de software pudiera caber en una única estructura narrativa.

---

La palabra que eliges para describir tu trabajo no es un detalle cosmético. Estructura la forma en que piensas lo que haces, cómo te comunicas con los demás, cómo encuentras la información seis meses después.

Una user story es una conversación. Una issue es un trabajo por hacer. Confundirlas no produce mejor software. Solo produce backlogs más difíciles de leer.
