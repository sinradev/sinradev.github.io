---

title: "Capabilities vs epics: cuando la precisión de la palabra cambia la precisión del trabajo"
subtitle: "Se supone que una epic agrupa las user stories que contribuyen a un mismo objetivo de alto nivel. En la práctica, suele ser un cajón de sastre del que nadie sabe realmente cuándo está terminado."
description: "Una epic de Agile es un concepto difuso que agrupa user stories sin un criterio de completado claro. Una capability es una funcionalidad concreta con un estado definido. La diferencia no es semántica: cambia la forma en que se planifica y cómo se sabe cuándo se ha terminado."
categories: ["Gestión de Proyectos"]
excerpt: "¿Cuándo está terminada una epic? La pregunta debería tener una respuesta simple. En la práctica, en la mayoría de los equipos, es el inicio de una larga conversación. La epic crece, se divide, se reabre, migra de un sprint a otro. No es un problema de implementación de Scrum. Es un problema de definición."
date: 2026-06-01 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-01-capabilities-vs-epics-featured.png

---

Abre el backlog de cualquier equipo Scrum que lleve más de un año trabajando. Busca las epics. Probablemente hay una docena, quizás veinte. Algunas tienen dos años de antigüedad. Varias contienen solo tickets cerrados pero siguen abiertas porque nadie decidió cerrarlas. Otras tienen una mezcla de tickets abiertos y cerrados, sin que se pueda saber si lo terminado representa el 20 % o el 80 % del objetivo inicial.

Si le preguntas al Product Owner cuándo estará terminada la epic, obtendrás una respuesta vacilante. Si le preguntas qué significa que la epic esté terminada, obtendrás una conversación.

Esto no es un problema organizativo. Es un problema de definición.

## Lo que una epic debe ser

La epic, en la terminología extendida de Scrum, es una user story de gran tamaño que debe desglosarse en user stories más pequeñas para poder planificarse y entregarse.

La definición es circular: una epic es una user story demasiado grande. Su tamaño es, por tanto, relativo a lo que el equipo considera planificable en un sprint. Y como las capacidades de los equipos, la complejidad de los proyectos y las definiciones de sprint varían, la definición de epic también varía.

Lo que una epic generalmente no tiene: un criterio de completado definido de antemano. Tiene user stories hijas. Está terminada cuando sus user stories están terminadas. Pero ¿cuáles? ¿Todas las que se crearon bajo ella? ¿Todas las que teóricamente podrían contribuir a ella? ¿Las que existían cuando se creó la epic?

Nadie lo sabe con certeza. Y es precisamente por eso que las epics permanecen abiertas durante meses o años.

## El problema de la epic abierta

Una epic que no se cierra no comunica nada sobre el estado del trabajo.

Cuando un interesado pregunta "¿cómo va la funcionalidad de exportación?", el equipo abre la epic correspondiente y cuenta los tickets. Veinte tickets cerrados, siete abiertos. ¿Es buen avance? Depende del peso relativo de los tickets. Depende de si los siete abiertos son detalles o partes centrales de la funcionalidad. Depende de si se añadieron nuevos tickets desde que se creó la epic.

La respuesta honesta es: "La verdad es que no lo sabemos del todo." Pero eso no es lo que escucha el interesado.

Lo que esto produce en los equipos: una tendencia a crear métricas proxy (porcentaje de tickets cerrados, burndown de la epic) que dan apariencia de seguimiento sin responder realmente a la pregunta. Y una tendencia a declarar menos deuda de trabajo real para mantener esas métricas en una zona cómoda.

## Lo que la capability hace de forma diferente

Una capability es una funcionalidad concreta del producto. Describe lo que el producto será capaz de hacer una vez que la capability esté completa.

La diferencia fundamental con la epic: la capability tiene una definición de completado que puede evaluarse independientemente de los tickets que la componen.

"Exportación CSV de informes" es una capability. Está terminada cuando el usuario puede exportar sus informes en formato CSV desde la interfaz. Ese criterio puede definirse antes incluso de crear el primer ticket. Puede validarse sin abrir el backlog.

"Mejora de la experiencia de usuario de la página de informes" es una epic clásica. ¿Cuándo está terminada? Depende de lo que se decidió, de lo que se entregó, de lo que se considera suficientemente mejorado. La respuesta cambia según quién responda.

## El nivel de abstracción adecuado

La capability vive en un nivel de abstracción que corresponde a la forma en que los usuarios y los interesados piensan el producto. No al nivel del ticket técnico, ni al nivel del objetivo estratégico plurianual, sino al nivel de la funcionalidad visible y utilizable.

Este nivel es más útil para la planificación que la epic, por varias razones.

**Es estimable de forma significativa.** "¿Cuánto tiempo para entregar la exportación CSV?" es una pregunta a la que un equipo puede responder con una horquilla razonada. "¿Cuánto tiempo para la epic Mejora de informes?" produce una respuesta que varía según lo que se incluya en la epic.

**Es comunicable hacia el exterior.** "La próxima release incluye la exportación CSV, las notificaciones por correo y la gestión de roles" es una frase que la dirección, las ventas y los usuarios pueden entender. Las epics generalmente no se prestan a este nivel de comunicación.

**Tiene un estado binario.** Una capability está entregada o no. Puede tener sub-estados (en desarrollo, en revisión, en pruebas), pero su estado final es binario. Una epic puede estar "parcialmente terminada" indefinidamente.

## El impacto en la planificación

En la planificación a medio plazo - roadmap, visión de producto a dos o cuatro trimestres - las capabilities son la unidad natural de trabajo.

"En el T3 entregamos las capabilities X, Y, Z. En el T4 empezamos W y V." Esa frase es concreta, comunicable y permite gestionar las dependencias y las prioridades.

La misma planificación con epics produce o un nivel de abstracción demasiado alto (epics gigantes que cubren meses de trabajo sin definición precisa) o demasiado bajo (decenas de epics que requieren una taxonomía compleja para entenderse como un plan coherente).

La granularidad de las capabilities corresponde al nivel de granularidad de las decisiones de planificación. Por eso este nivel es útil.

## Lo que las capabilities revelan sobre las dependencias

Una propiedad importante de las capabilities bien definidas: hacen visibles las dependencias.

"La exportación CSV depende de la capability Gestión de informes, que debe entregarse primero." Esta dependencia es clara porque las capabilities son funcionalidades concretas con interfaces definidas.

Las dependencias entre epics suelen ser implícitas y se descubren demasiado tarde. Se constata a mitad de un sprint que las user stories de la epic B suponen que las de la epic A están terminadas, lo cual no es el caso.

Cuando las capabilities se definen con un criterio de completado claro, las dependencias emergen naturalmente durante la planificación, no durante la implementación.

## La trampa del renombrado

Sería tentador concluir: simplemente renombramos nuestras epics como capabilities y todo irá bien.

No es así. El nombre cambia algo en la forma de pensar el objeto, pero solo si la definición cambia con él.

Una epic renombrada capability pero que sigue definida de forma vaga, sin criterio de completado, sin un perímetro estable, no es más que una epic con un nombre nuevo.

Lo que realmente cambia cuando se pasa de epics a capabilities:

La pregunta que se formula en el momento de la creación cambia. "¿Qué funcionalidad a nivel de usuario representa esto? ¿Cómo sabemos cuándo está terminado?" Estas preguntas, formuladas sistemáticamente, cambian la naturaleza de los objetos creados.

El criterio de cierre cambia. Una capability se cierra cuando la funcionalidad está entregada y validada, no cuando todos sus tickets están cerrados. La distinción es importante: puede haber tickets cerrados y una funcionalidad aún no validada, y tickets abiertos para mejoras futuras que no bloquean la entrega de la funcionalidad principal.

El vínculo con la release cambia. Una capability está en la release o no lo está. Las epics suelen aparecer parcialmente en varias releases, lo que hace ambiguo el seguimiento.

## La dimensión organizativa

El paso de epics a capabilities dice algo sobre la relación entre producto e ingeniería.

La epic, en su concepción original, es un artefacto del Product Owner. Las user stories las desglosa el equipo. La epic suele quedarse del lado del producto.

La capability es un artefacto compartido. Debe ser comprensible para el producto (es una funcionalidad de usuario), para la ingeniería (es un perímetro técnico con implicaciones de implementación) y para los interesados (es algo que el producto va a ser capaz de hacer).

Esta propiedad compartida obliga a una colaboración más estrecha durante la definición. Produce artefactos más precisos porque han sido cuestionados desde múltiples perspectivas antes de ser planificados.

---

El vocabulario que usas para describir tu trabajo estructura la forma en que planificas, cómo te comunicas y cómo sabes cuándo has terminado.

Capability no es solo otra palabra para epic. Es una promesa de precisión: saber qué va a poder hacer el producto, y saber cuándo eso es real.
