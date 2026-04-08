---

title: "La tech tendrá que desacelerar: recursos agotados, aplicaciones obesas y el regreso del bajo nivel"
categories: ["Tecnología Futuro"]
featured_image: /assets/images/blog/2026-03-23-tech-slowdown-resources-featured.png
---

Nos han vendido la idea de que la tecnología es infinita. Servidores en todas partes. Aplicaciones más grandes, más ricas, más rápidas. IA para todo. Cloud ilimitado. Añade RAM, añade núcleos, añade centros de datos.

Salvo que los recursos que hacen funcionar todo esto no son infinitos.

Y lo que nadie en la industria tech quiere decir claramente es que vamos a tener que desacelerar. No porque queramos. Porque no tendremos elección.

## El mito del crecimiento infinito

La tech se ha construido sobre un postulado implícito: la potencia de cálculo se duplica cada 18 meses (ley de Moore), los costes bajan, las capacidades aumentan. Podemos permitirnos escribir código cada vez más pesado, más abstracto, más voraz. ¿Para qué optimizar si el hardware de todos modos alcanzará al software?

Este postulado ha producido toda una generación de desarrolladores que nunca han tenido que preocuparse por los recursos. Se lanza un contenedor Docker. Se añade un microservicio. Se usa Electron para una simple aplicación de notas. Se despliega JavaScript en un servidor Node.js que consume 512 MB de RAM para servir a tres usuarios.

Podríamos llamarlo obesidad del software: aplicaciones cada vez más lentas sobre hardware cada vez más potente, porque nadie ha tenido que rendir cuentas sobre el consumo.

Pero los cimientos físicos de todo esto empiezan a resquebrajarse.

## Los recursos que se agotan

### El petróleo y la energía

Los centros de datos consumen hoy entre el 1 y el 2% de la electricidad mundial. Y esa cifra se dispara. Un solo datacenter hyperscale puede consumir tanta electricidad como una ciudad de 50.000 habitantes. La mayor parte de esa electricidad sigue viniendo de fuentes fósiles, directa o indirectamente.

Entrenar un gran modelo de lenguaje como GPT-4 produce emisiones de CO2 equivalentes a varios cientos de vuelos transatlánticos. Una sola consulta a ChatGPT consume aproximadamente 10 veces más energía que una búsqueda estándar en Google. Multiplícalo por miles de millones de consultas al día.

La IA generativa, tal como se despliega hoy, es energéticamente insostenible a escala.

### Las tierras raras

Litio, cobalto, neodimio, indio, galio, germanio: estos materiales están en el corazón de todo dispositivo electrónico moderno: procesadores, baterías, pantallas, sensores. Su extracción está concentrada en unos pocos países (Congo, China, Chile, Australia), sujeta a crecientes tensiones geopolíticas, y produce daños medioambientales masivos.

La demanda de estos materiales se triplicará antes de 2050 según las proyecciones de la Agencia Internacional de Energía, impulsada principalmente por la transición energética y... la tech.

Los semiconductores ya están en el centro de guerras comerciales entre Estados Unidos y China. Taiwán fabrica más del 90% de los chips más avanzados del mundo. La fragilidad de esta cadena de suministro ya no es teórica.

### El agua

Refrigerar un centro de datos requiere cantidades considerables de agua. Algunos grandes datacenters consumen varios millones de litros al día. En regiones ya bajo estrés hídrico, esto genera conflictos directos con las poblaciones locales.

Microsoft, Google y Amazon construyen centros de datos en zonas áridas, intensificando la competencia por un recurso ya escaso.

### La fabricación electrónica

Fabricar un smartphone nuevo genera 70 kg de CO2 equivalente. Fabricar un servidor: varias toneladas. El ciclo de renovación del hardware se ha acelerado dramáticamente, alimentado por aplicaciones cada vez más exigentes que vuelven los dispositivos «obsoletos» al cabo de tres años.

Es un círculo vicioso perfecto: el software engorda, el hardware tiene que seguirle el ritmo, se consumen más recursos, se producen más residuos electrónicos.

## La IA lo empeora todo, masivamente

La inteligencia artificial generativa es la mayor aceleración del consumo de recursos que la industria tech haya conocido jamás.

Goldman Sachs estimaba en 2024 que los centros de datos de IA podrían representar hasta el 8% del consumo eléctrico estadounidense en 2030. Las proyecciones de otros analistas van aún más lejos.

Y lo peor: la mayoría de estos recursos se consumen en tareas que no necesitamos realmente. Resúmenes automáticos de emails. Imágenes generadas para ilustrar presentaciones. Chatbots que responden preguntas que una búsqueda en Google habría resuelto.

Estamos quemando recursos escasos y finitos por una comodidad marginal.

## Las aplicaciones obesas: un problema estructural

Miremos los números. Un navegador web moderno como Chrome puede consumir fácilmente 2 GB de RAM en un ordenador de escritorio. Una aplicación Electron como Slack o VSCode incluye un motor Chromium completo solo para mostrar texto e imágenes.

Una aplicación móvil «sencilla» pesa a menudo entre 200 y 500 MB. Las aplicaciones de mensajería consumen constantemente CPU y batería en segundo plano. Sitios web que deberían pesar 200 KB sirven 10 MB de JavaScript para mostrar un artículo.

La tendencia es clara: con cada nueva generación de frameworks, con cada nueva capa de abstracción, las aplicaciones se vuelven más lentas y pesadas, aunque las funcionalidades reales no hayan cambiado.

No es un problema de mala voluntad de los desarrolladores. Es un problema estructural: las herramientas modernas optimizan para la velocidad de desarrollo, no para la eficiencia en tiempo de ejecución. Y nadie paga el coste real de los recursos consumidos.

## El regreso inevitable del bajo nivel

Frente a estas restricciones, algo está cambiando en la industria. Gradualmente, luego rápidamente.

Los lenguajes de bajo nivel vuelven con fuerza. No por nostalgia. Por necesidad.

### Rust

Rust es el lenguaje que mejor encarna este retorno. Diseñado para ser tan eficiente como C, pero sin las trampas de gestión de memoria que han causado décadas de bugs y vulnerabilidades de seguridad. Rust no tiene recolector de basura: gestiona la memoria en tiempo de compilación, lo que lo hace extremadamente eficiente en ejecución.

Microsoft, Google, Amazon y el kernel de Linux lo han adoptado. La NSA recomienda oficialmente migrar hacia lenguajes «memory-safe» como Rust. Android reescribe componentes críticos en Rust. Las razones: seguridad, rendimiento, consumo de recursos.

Un servidor web escrito en Rust puede gestionar miles de veces más peticiones por segundo que un equivalente en Node.js, con una fracción del consumo de memoria.

### Zig

Zig es más reciente, más radical. Diseñado por Andrew Kelley como sucesor espiritual de C, pero con una filosofía clara: ninguna magia oculta, control total sobre lo que hace realmente el compilador, consumo de recursos perfectamente predecible.

Zig empieza a atraer atención para sistemas embebidos, aplicaciones críticas y cualquier contexto donde cada byte y cada ciclo de CPU cuenta. Bun, el nuevo runtime de JavaScript ultrarrápido, está escrito en Zig.

### Go, C, C++

Go no es nuevo, pero su eficiente modelo de concurrencia y su sobria gestión de memoria lo convierten en una opción cada vez más popular para servicios backend que deben funcionar con pocos recursos. C y C++ siguen siendo imprescindibles en sistemas embebidos, equipos de red y sistemas en tiempo real.

### WebAssembly

WebAssembly (WASM) es otra tendencia de fondo: ejecutar código compilado desde lenguajes de bajo nivel directamente en el navegador o del lado del servidor, con un rendimiento cercano al nativo y una huella de memoria mucho menor que JavaScript.

## Esto no es un paso atrás: es una evolución

Se oye a menudo la objeción: «volver al bajo nivel significa sacrificar la productividad de los desarrolladores».

Es una visión a corto plazo.

Rust hoy no es el C de los años 70. Las herramientas modernas, los gestores de paquetes (Cargo para Rust), los entornos de desarrollo y las comunidades activas hacen estos lenguajes mucho más accesibles de lo que eran. La curva de aprendizaje es real, pero las ganancias son estructurales.

Además, no todas las capas de la stack tienen que reescribirse en bajo nivel. La clave es identificar las capas críticas: los servicios que funcionan permanentemente, las aplicaciones móviles que vacían las baterías, los algoritmos que se ejecutan millones de veces al día. Ahí es donde la eficiencia del bajo nivel lo cambia todo.

La industria del automóvil atravesó exactamente esta transición. Durante décadas, la potencia primó sobre la eficiencia. Luego las restricciones de recursos (petróleo, regulaciones, coste) forzaron una revolución: motores de inyección directa, hibridación, electrificación. Los coches modernos son mucho más complejos técnicamente que los de los años 70, pero consumen dos o tres veces menos combustible.

La tech atravesará la misma transición. Herramientas más complejas de diseñar, pero que consumen infinitamente menos.

## Las señales ya están ahí

No es prospectiva lejana. Las señales ya son visibles.

**Los costes del cloud se disparan.** Muchas startups que lo apostaron todo a AWS o GCP descubren facturas mensuales de varios cientos de miles de euros. El movimiento de «repatriación del cloud» crece: empresas que traen de vuelta sus cargas de trabajo a hardware propio para recuperar el control de los costes.

**Los reguladores se mueven.** La Unión Europea impulsa directivas sobre el consumo energético de los centros de datos. La taxonomía verde europea empieza a clasificar las inversiones tech según su impacto medioambiental. Las empresas tendrán que rendir cuentas sobre sus emisiones digitales.

**Los fabricantes de chips se estancan.** La ley de Moore está oficialmente muerta según la mayoría de expertos. Las ganancias de rendimiento ya no llegan automáticamente: hay que conseguirlas en el software, no esperarlas del hardware.

**Los dispositivos duran más.** La presión regulatoria (derecho a la reparación, obsolescencia programada) y económica empuja a los usuarios a conservar sus dispositivos más tiempo. Las aplicaciones demasiado voraces que ralentizan dispositivos de tres años se convierten en un problema de mercado, no solo ético.

## Qué significa esto para los desarrolladores

Esta transición remodelará las competencias valoradas en la industria tech.

Saber escribir código funcional en un framework de moda seguirá siendo útil. Pero saber medir el consumo real de una aplicación, identificar cuellos de botella, elegir el nivel de abstracción adecuado para cada problema y dominar al menos un lenguaje de bajo nivel: esas son las competencias que se volverán diferenciadoras.

Los desarrolladores que han aprendido únicamente en entornos altamente abstraídos (React, Rails, Django, Node.js) tendrán que ampliar su paleta. No para abandonar estas herramientas. Para saber cuándo usarlas y cuándo no.

La próxima década pertenece a los desarrolladores que comprenden lo que ocurre realmente bajo las capas de abstracción.

## Conclusión

La tech no va a detenerse. Pero va a tener que madurar.

Madurar significa aceptar que el crecimiento infinito es una ficción. Que los recursos tienen un coste real. Que la eficiencia no es una restricción anticuada: es una virtud de ingeniería.

Los lenguajes de bajo nivel como Rust y Zig no son un paso atrás nostálgico. Son la respuesta racional de una industria que empieza a medir las consecuencias de sus excesos. Una respuesta entre otras, pero importante.

La era del software obeso tuvo su década. La era del software sobrio empieza ahora.
