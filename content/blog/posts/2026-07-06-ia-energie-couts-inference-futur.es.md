---

title: "La IA cuesta una fortuna: ¿y si pudiéramos dividir la factura por 1000?"
subtitle: "El coste oculto de la inteligencia artificial, la crisis energética que se aproxima, y cómo una nueva arquitectura podría cambiarlo todo"
description: "Entender los costes reales de la IA en 2026: inferencia, energía, cómputo. Y por qué la arquitectura de osciladores de Unconventional AI (ex-Databricks) podría democratizar el acceso a la IA reduciendo su consumo en un factor de 1000."
categories: ["Inteligencia Artificial", "Ingeniería"]
excerpt: "Cada vez que haces una pregunta a ChatGPT, un datacenter en algún lugar del mundo consume electricidad por unos céntimos. Multiplica por miles de millones de peticiones al día. La IA, tal como está construida hoy, tiene un problema fundamental que nadie resuelve realmente: consume una cantidad absurda de energía."
date: 2026-07-06 09:00:00 +0200
featured_image: /assets/images/blog/2026-07-06-ia-energie-couts-inference-futur-featured.png

---

Cada vez que haces una pregunta a ChatGPT, un datacenter en algún lugar del mundo enciende miles de GPUs durante una fracción de segundo. El coste para ti: cero. El coste real para la infraestructura: varios céntimos, a veces más, según la complejidad de la petición.

Ahora multiplica por miles de millones de peticiones al día, por cientos de modelos desplegados en producción, por pipelines de agentes que encadenan decenas de llamadas consecutivas para completar una sola tarea.

La IA, tal como está construida hoy, consume una cantidad de energía que pocas industrias pueden igualar. Y nadie ha resuelto realmente este problema. Todavía no.

En junio de 2026, Naveen Rao, ex-responsable de IA en Databricks, anunció la creación de **Unconventional AI** con una promesa audaz: dividir por mil el consumo energético de la inferencia de IA, gracias a una arquitectura radicalmente diferente basada en osciladores físicos. ([Fuente: TechCrunch, 25 de junio de 2026](https://techcrunch.com/2026/06/25/databricks-former-ai-chief-thinks-he-can-cut-ais-power-bill-by-1000x/))

Es el tipo de anuncio que se escucha a menudo en tecnología y que se olvida seis meses después. Pero para entender por qué este merece atención, primero hay que comprender la magnitud del problema que pretende resolver.

## El coste real de la IA: lo que nadie pone en primer plano

### El entrenamiento: la parte visible

Cuando los medios hablan del coste de la IA, se centran principalmente en el entrenamiento. Se dice que GPT-4 costó entre 50 y 100 millones de dólares entrenar. Meta habría gastado varios cientos de millones en sus modelos Llama. Estas cifras impresionan, y son reales.

Pero el entrenamiento es un coste puntual. Es visible, cuantificable, y las grandes empresas tienen los medios para absorberlo. El verdadero problema se esconde en otro lugar.

### La inferencia: la parte invisible

La inferencia es lo que ocurre cuando un modelo responde a una petición. Cada pregunta hecha a un LLM, cada imagen generada, cada llamada a la API desencadena un pase forward a través de miles de millones de parámetros. Para un modelo del tamaño de GPT-4, esto moviliza decenas de GPUs durante una fracción de segundo.

Multiplicado por la escala de uso, la inferencia representa la mayoría de los costes operativos de la IA en producción. OpenAI estimó, en el pico de ChatGPT en 2023, costes de inferencia del orden de 700.000 dólares al día. Esta cifra ha evolucionado, pero la mecánica sigue siendo la misma.

Las APIs públicas de modelos ocultan esta realidad detrás de tarifas en dólares por millón de tokens. Es fácil olvidar lo que esos tokens representan físicamente: electricidad, máquinas, refrigeración.

### La energía: el problema sistémico

Los datacenters que ejecutan la IA mundial consumen cantidades de energía comparables a naciones enteras. La Agencia Internacional de Energía estimaba en 2024 que los datacenters consumirían más de 1.000 TWh al año para 2026, una cifra en fuerte alza desde la explosión de las cargas de trabajo de IA.

Microsoft, Google y Amazon invierten masivamente en centrales nucleares y parques solares dedicados a sus datacenters. No es altruismo medioambiental: es una necesidad operativa.

El problema fundamental es arquitectónico. Los GPUs son procesadores masivamente paralelos, excelentes para las multiplicaciones matriciales que están en el núcleo del deep learning. Pero fueron diseñados para videojuegos, no para la inferencia de IA. Su consumo energético es colosal porque su diseño no está optimizado para esta tarea.

## Los costes ocultos que los benchmarks no muestran

### El coste por token en producción real

Los modelos se evalúan a menudo en términos de calidad de respuesta: MMLU, HumanEval, y otros benchmarks técnicos. Lo que estas evaluaciones no capturan es el coste real por inferencia en un contexto de producción.

Un modelo dos veces mejor en un benchmark que cuesta diez veces más ejecutar no es necesariamente la elección correcta. Sin embargo, la competencia en el sector de la IA ha priorizado durante mucho tiempo las métricas de calidad pura sin ponderar suficientemente la eficiencia energética.

### El multiplicador de los agentes

El auge de las arquitecturas agénticas agrava el problema. Un agente que realiza una tarea compleja no hace una sola llamada al LLM: encadena decenas, a veces cientos. Cada decisión, cada verificación, cada iteración genera una petición de inferencia.

Si el coste de una inferencia simple ya es significativo, el coste de un pipeline agéntico completo puede representar decenas o cientos de veces ese importe. Para casos de uso profesionales automatizados a gran escala, los presupuestos de API pueden dispararse en pocos días.

### El coste del contexto largo

Los modelos modernos ofrecen ventanas de contexto de 128.000 a 1 millón de tokens. Técnicamente impresionante. Pero cada token en el contexto tiene un coste: la atención cuadrática significa que procesar un contexto de 100.000 tokens es exponencialmente más caro que procesar un contexto de 1.000 tokens.

Los equipos que inyectan grandes cantidades de documentación en RAGs, que mantienen largos historiales de conversación, o que usan modelos para analizar documentos completos pueden encontrarse con facturas de API sorprendentemente elevadas.

### El coste de la infraestructura propia

Más allá de las APIs, los equipos que despliegan sus propios modelos (open source o fine-tuneados) deben gestionar su propia infraestructura. Un único nodo de inferencia para un modelo de 70.000 millones de parámetros requiere 4 a 8 GPUs A100. Un solo A100 consume 400W. Una hora de cómputo en 8 GPUs A100: aproximadamente 3.200 Wh, sin contar la refrigeración.

Para una startup que quiere desplegar un modelo propio en producción 24h/24, la factura de electricidad e infraestructura puede superar rápidamente el presupuesto del producto.

## Por qué la arquitectura GPU es fundamentalmente limitada para la IA

La razón profunda por la que la inferencia de IA es tan cara radica en la inadecuación entre el hardware utilizado y la tarea realizada.

Un LLM en inferencia realiza esencialmente multiplicaciones de matrices con alta precisión (fp16, bf16, o int8) sobre millones de parámetros, para cada token generado. Los GPUs son excelentes en esta tarea. Pero lo hacen con un consumo energético masivo porque mantienen miles de núcleos activos simultáneamente, cachés de memoria de alto ancho de banda, y un reloj que funciona a frecuencias elevadas de forma continua.

Es un poco como usar un avión a reacción para entregar una carta en la ciudad de al lado. La herramienta funciona. Simplemente no está optimizada para el problema.

Los TPUs de Google, los chips Trainium de Amazon, los Gaudi de Intel representan intentos de optimización en este espectro. Pero permanecen en el mismo paradigma: circuitos electrónicos digitales, cadenciados por un reloj, realizando operaciones discretas paso a paso.

## El enfoque de Unconventional AI: salir del paradigma

Aquí es donde el anuncio de Naveen Rao se vuelve interesante. Su sistema **Un-0** no se basa en transistores cadenciados por un reloj. Utiliza **osciladores**: componentes físicos cuyas frecuencias naturales de oscilación codifican y procesan la información.

La idea no es nueva en la investigación. Los ordenadores neuromórficos y las arquitecturas basadas en osciladores llevan años explorando la posibilidad de calcular con la física en lugar de contra ella. El cerebro humano, al fin y al cabo, es una red de osciladores biológicos que consume unos 20 vatios para realizar tareas cognitivas que ningún LLM moderno puede aún igualar a ese nivel de eficiencia.

Lo que es nuevo es que Unconventional AI afirma haber madurado suficientemente este enfoque para generar imágenes, y apunta a una reducción de 1.000 veces en el consumo energético de inferencia.

Hoy, Un-0 funciona en simulación software. Los chips físicos están en desarrollo. La distancia entre una simulación y un producto comercialmente viable es considerable. Pero el principio, si se valida a escala, sería transformador.

## La ventana de oportunidad: cuando el rendimiento es suficientemente bueno

Hay un punto importante que captar en la dinámica actual del mercado de la IA.

En 2023 y 2024, la carrera era por el rendimiento bruto. ¿Quién responde mejor a un problema de matemáticas? ¿Quién entiende mejor el código? ¿Quién alucina menos? En esa fase, la eficiencia energética era secundaria. Las grandes empresas tenían los medios para ignorar los costes.

Pero en 2025-2026, algo cambió. Los modelos open source alcanzaron a los modelos propietarios en la mayoría de tareas comunes. Llama, Mistral, Qwen alcanzan niveles de rendimiento que satisfacen la mayoría de casos de uso profesionales. La carrera por el rendimiento absoluto se ralentiza en las aplicaciones estándar.

Este momento es precisamente cuando **la eficiencia se convierte en el diferenciador**.

Cuando los modelos son suficientemente buenos para la tarea, y en muchas tareas ya lo son, la pregunta que surge naturalmente es: ¿podemos ejecutarlos más barato? ¿Más rápido? ¿Con menos energía?

Es en esta ventana donde tecnologías como la de Unconventional AI pueden establecerse. No reemplazando los GPUs durante la fase de entrenamiento, donde el rendimiento bruto sigue siendo crítico. Sino para la inferencia, donde un modelo con parámetros fijos simplemente necesita responder eficientemente a peticiones. Una arquitectura menos hambrienta de energía pero suficientemente eficiente cambia completamente el cálculo.

## Lo que esto cambiaría concretamente

### Acceso a la IA para todos

Hoy, desplegar un LLM competitivo en producción está fuera del alcance financiero de la mayoría de startups y equipos independientes. Los costes de infraestructura obligan o bien a pasar por APIs de grandes proveedores (con las restricciones de dependencia y coste que eso implica), o bien a limitar drásticamente los casos de uso.

Si la inferencia costara mil veces menos, este cálculo cambiaría radicalmente. Los modelos actualmente inaccesibles podrían ejecutarse en servidores modestos. La IA integrada en dispositivos locales se convertiría en una realidad comercial para casos de uso mucho más allá de los asistentes de voz básicos.

### El fin del monopolio energético como barrera de entrada

Una de las ventajas competitivas más duraderas de las grandes empresas tecnológicas en IA no es su algoritmo. Es su infraestructura. Google, Microsoft, Amazon tienen acuerdos de energía a largo plazo, datacenters propios, chips personalizados. Esta infraestructura representa miles de millones en inversión que ninguna startup puede replicar.

Una tecnología que reduce radicalmente las necesidades energéticas reduce también esa ventaja. Si la inferencia de un modelo capaz se vuelve alcanzable en hardware ordinario, la concentración del mercado de IA puede redistribuirse.

### La IA en los países emergentes

El acceso a IA de alta calidad está hoy fuertemente correlacionado con el acceso a infraestructura eléctrica e internet de alta calidad. Los países con recursos limitados de energía o conectividad están estructuralmente excluidos de las ganancias de productividad que la IA aporta a las empresas de los países desarrollados.

Una reducción masiva del consumo energético cambiaría también esta realidad. La IA local, de bajo consumo, funcionando en hardware menos sofisticado, abriría el acceso a mercados y poblaciones actualmente fuera de alcance.

### La sostenibilidad como argumento comercial

A medida que la regulación medioambiental se endurece, la huella de carbono de las infraestructuras digitales se convierte en un criterio de selección para las empresas. La IA tiene hoy una mala reputación en este punto, con razón. Una tecnología de inferencia radicalmente menos consumidora es también un argumento comercial ante clientes con compromisos ESG que cumplir.

## Lo que hay que tener en cuenta

Naveen Rao es creíble: su trayectoria en Intel, Nervana Systems (vendida a Intel), luego Databricks muestra una experiencia real en hardware de IA. El enfoque basado en osciladores tiene fundamentos científicos reales.

Pero queda una distancia considerable entre Un-0 en simulación software y un chip físico comercialmente viable. La investigación neuromórfica tiene décadas de promesas parcialmente cumplidas. Y aunque la tecnología funcione, la adopción en un ecosistema dominado por los GPUs llevará tiempo.

Lo que es seguro es que el problema es real, urgente y no resuelto. Rao tiene razón en el diagnóstico: «la energía será el desafío fundamental de los próximos años» para el sector de la IA. Ya sea que la solución venga de los osciladores, la fotónica, la computación analógica, o una combinación de estos enfoques.

## Lo que esto significa para los equipos de producto

Para los equipos que integran IA en su producto hoy, el mensaje práctico es el siguiente.

**Ahora:** pensar en la eficiencia energética desde el diseño. Elegir el modelo menos costoso que satisfaga el caso de uso. Medir los costes de inferencia por funcionalidad. Evitar llamadas redundantes, contextos sobrecargados, pipelines agénticos complejos sin justificación clara.

**En dos a cinco años:** algunas de las restricciones actuales habrán desaparecido. Arquitecturas más eficientes, modelos destilados más pequeños, y quizás tecnologías como la de Unconventional AI harán la inferencia de IA mucho menos costosa. Los casos de uso que parecen económicamente imposibles hoy serán triviales.

La postura correcta es integrar la IA donde aporte valor ahora, manteniendo los ojos abiertos a los desarrollos de hardware que rediseñarán las restricciones en los próximos años.

---

La IA no está desacelerando. Pero el modelo económico y energético sobre el que se basa hoy no es sostenible a la escala de sus ambiciones. Algo debe cambiar. La pregunta no es si llegará una ruptura tecnológica, sino cuál llegará primero.

Unconventional AI es solo uno de los actores que trabajan en esta ruptura. Pero su intuición de fondo, que una vez que los modelos son suficientemente buenos la eficiencia se convierte en el nuevo terreno de competencia, es correcta. Y esa intuición debería también guiar la forma en que los equipos de producto piensan su uso de la IA hoy.
