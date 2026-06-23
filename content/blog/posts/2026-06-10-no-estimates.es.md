---

title: "#NoEstimates: ¿Buena idea o lujo de las GAFAM?"
subtitle: "El movimiento #NoEstimates propone dejar de estimar el trabajo de desarrollo. Los argumentos son sólidos. Las condiciones en las que funciona son específicas. No es una receta universal."
description: "El movimiento #NoEstimates cuestiona el valor de las estimaciones en el desarrollo de software. Sus argumentos apuntan a problemas reales. Pero eliminar las estimaciones sin reemplazarlas por algo útil crea otros problemas para otras partes interesadas."
categories: ["Gestión de Proyectos", "Work Culture"]
excerpt: "La estimación es a menudo una ficción compartida: los desarrolladores dan cifras que saben imprecisas, la gerencia las toma como compromisos, y cuando las estimaciones se superan, todos se sorprenden de sorprenderse. #NoEstimates dice: pongamos fin a la ficción. La pregunta es: ¿con qué la reemplazamos?"
date: 2026-06-10 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-10-no-estimates-featured.png

---

Una escena familiar. El equipo está en una reunión de planificación. El Product Owner presenta una nueva funcionalidad. Un desarrollador pide aclaraciones. Se abre una discusión. Quince minutos después, alguien dice: "Bueno, ¿en cuánto lo estimamos?" Planning poker. Fibonacci. Debates sobre si son 5 u 8 puntos. Consenso a regañadientes: 8 puntos. La reunión continúa.

Tres semanas después, la funcionalidad sigue en curso. Tomó veinte puntos. Nadie se sorprende.

Este es el contexto en el que surgió el movimiento #NoEstimates. Practicantes de Agile que observaron que las estimaciones consumen tiempo, crean presión artificial, son sistemáticamente inexactas y no aportan realmente el valor que se supone deben aportar.

## Los Argumentos Válidos del Movimiento #NoEstimates

El movimiento #NoEstimates, popularizado principalmente por Woody Zuill y Vasco Duarte, se apoya en varias observaciones bien fundamentadas.

**El costo de estimar es real.** Estimar toma tiempo. Los planning poker, las reuniones de refinamiento, las discusiones sobre la granularidad de los tickets: todo ese tiempo no es tiempo de desarrollo. Para un equipo que practica entrega continua, ese costo puede representar varias horas por semana.

**La precisión de las estimaciones es baja.** Décadas de investigación en ingeniería de software demuestran que las estimaciones de desarrollo son sistemáticamente optimistas, a veces por un factor de dos o tres. La estimación individual es deficiente. La estimación colectiva (planning poker) es ligeramente mejor, pero sigue siendo fundamentalmente imprecisa para los ítems complejos.

**Las estimaciones crean compromisos parásitos.** Cuando un desarrollador estima un ticket en 3 puntos y toma 7, aparece una tensión. No una tensión productiva (el trabajo tomó más tiempo porque era más complejo de lo previsto, eso es información), sino una tensión social (la persona "falló" su estimación). Esta tensión empuja a los equipos a subestimar deliberadamente los ítems difíciles, o a dividirlos para que quepan en cajas cómodas.

**La gestión por estimaciones genera malas dinámicas.** Cuando las estimaciones se usan para medir la productividad de los desarrolladores o para "cumplir plazos," los comportamientos cambian: las estimaciones se inflan para generar comodidad, las historias se fragmentan para maximizar la cantidad de puntos cerrados, y la velocidad se convierte en un juego en lugar de una medida.

## Lo que Propone #NoEstimates en su Lugar

#NoEstimates no dice "no planifiques." Dice "usa indicadores diferentes para planificar."

La principal herramienta propuesta: el throughput, es decir, la cantidad de ítems completados por período. En lugar de estimar el tamaño de cada ítem y sumar las estimaciones para planificar, se mide la tasa histórica de entrega y se predicen las entregas futuras en base a ella.

El argumento: si el equipo ha entregado un promedio de 12 ítems por sprint durante tres meses, se puede predecir que entregará alrededor de 12 ítems en el próximo sprint, independientemente del tamaño estimado de esos ítems. Si los ítems son de tamaño relativamente homogéneo (algo que ciertas prácticas de division hacen posible), esta predicción es al menos tan precisa como la suma de las estimaciones.

Este razonamiento es fundamentalmente estadístico. Funciona cuando se cumplen las condiciones: un historial suficientemente largo para que el throughput sea estable, ítems de tamaño razonablemente homogéneo, y confianza en la regularidad futura del ritmo.

## Las Condiciones que Hacen Viable #NoEstimates

#NoEstimates funciona bien en contextos específicos que sus promotores no siempre destacan con suficiente claridad.

**Un producto en desarrollo continuo sin restricciones externas de fecha fuertes.** Si un equipo desarrolla un producto SaaS con un flujo de entrega continua y sin compromisos contractuales sobre funcionalidades específicas en fechas concretas, el throughput es una buena herramienta de planificación. Las partes interesadas pueden ver el ritmo de entrega y deducir cuándo se entregará algo.

**Ítems de granularidad controlada.** Para que el throughput sea una medida significativa, los ítems deben ser de tamaño similar. Si algunos ítems toman una hora y otros tres semanas, contar el número de ítems completados no dice nada útil. #NoEstimates a menudo asume implícitamente una disciplina de division de ítems que los equipos que hacen muchas estimaciones no necesariamente tienen.

**Una relación de confianza con las partes interesadas.** Si las partes interesadas (gerencia, clientes, inversores) necesitan predicciones precisas sobre funcionalidades específicas en fechas concretas, el throughput por sí solo no alcanza para satisfacer esa necesidad. O bien las partes interesadas confían en el equipo para entregar lo más valioso al ritmo que mantiene, o se necesita otro mecanismo de predicción.

**Un equipo estable.** El throughput histórico solo es predictivo si el equipo es estable. Las incorporaciones y salidas, los cambios de stack, los períodos de alta deuda técnica: todos estos factores hacen variar el throughput de maneras que el historial pasado no predice.

## Cuándo las Estimaciones Aún Tienen Valor

Hay contextos en los que las estimaciones aportan un valor real que el throughput no reemplaza.

**Los proyectos a precio fijo o con alcance fijo.** Si te comprometes a entregar un conjunto definido de funcionalidades para una fecha y un presupuesto fijos, necesitas una estimación previa. El throughput histórico de otro equipo u otro proyecto no te dice cuánto costará este proyecto específico.

**La priorización de inversiones.** Cuando un equipo debe decidir entre dos funcionalidades candidatas, una estimación del esfuerzo relativo (aunque sea imprecisa) combinada con una estimación del valor aporta información útil. "Esta funcionalidad vale el doble pero toma diez veces más tiempo" es información de priorización que el throughput solo no produce.

**La detección de anomalías.** Si un ticket tarda mucho más de lo esperado, eso es información. Quizás estaba mal entendido, quizás hay un problema técnico subyacente, quizás la complejidad fue estructuralmente subestimada. La estimación como punto de referencia permite detectar estas anomalías.

**La comunicación externa.** "Esta funcionalidad estará lista en unas tres semanas" es una comunicación útil para clientes o equipos posteriores. Producirla a partir del throughput requiere una conversión que no todos en la organización realizan de forma natural.

## El Verdadero Problema que Identifica #NoEstimates

El valor duradero del movimiento #NoEstimates está menos en eliminar las estimaciones que en el diagnóstico que ofrece sobre cómo se usan las estimaciones en las organizaciones.

Cuando las estimaciones se usan para evaluar la productividad de los desarrolladores: eso es un mal uso de las estimaciones, y #NoEstimates tiene razón en criticarlo.

Cuando las estimaciones crean compromisos que ignoran la incertidumbre: eso es un mal uso de las estimaciones, y #NoEstimates tiene razón en criticarlo.

Cuando las estimaciones consumen más energía de la que aportan en valor: eso es un mal uso de las estimaciones, y #NoEstimates tiene razón en criticarlo.

Pero este diagnóstico no implica que eliminar las estimaciones sea la única respuesta posible. Mejorar la forma en que se usan las estimaciones, tratarlas como predicciones probabilísticas con rangos de incertidumbre, no usarlas para evaluar individuos, revisarlas cuando cambia la información disponible, aborda el mismo problema.

---

#NoEstimates es una respuesta radical a un problema real. Como todas las respuestas radicales, funciona perfectamente en algunos contextos y mal en otros.

El verdadero progreso no está en elegir entre "estimar" y "no estimar." Está en ser honesto sobre lo que las estimaciones pueden y no pueden hacer, y en adaptar su uso al contexto real.
