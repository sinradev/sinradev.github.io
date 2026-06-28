---

title: "La Ley de Conway: por qué tu arquitectura se parece a tu organigrama"
subtitle: "Existe una ley en el mundo del software que predice la forma de tus sistemas con una precisión desconcertante. No habla de código ni de patrones técnicos. Habla de cómo se comunican tus equipos."
description: "La Ley de Conway afirma que los sistemas producidos por una organización reflejan su estructura de comunicación. Entender esta ley cambia la manera de abordar la arquitectura de software: antes de cambiar el código, a veces hay que cambiar la organización."
categories: ["Architecture", "Organisation"]
excerpt: "Tres equipos trabajan en el mismo producto: un equipo frontend, un equipo backend, un equipo móvil. Seis meses después, el sistema tiene exactamente tres capas bien diferenciadas con interfaces definidas entre cada una. Nadie lo diseñó así explícitamente. Eso es la Ley de Conway."
date: 2026-06-28 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-28-conways-law-architecture-org-featured.png

---

En 1967, Melvin Conway publicó un artículo en la revista Datamation. Formuló una observación que parece casi una ley de la física aplicada a las organizaciones:

«Las organizaciones que diseñan sistemas están constreñidas a producir diseños que son copias de sus estructuras de comunicación.»

En su momento, el artículo fue rechazado por la Harvard Business Review por considerarlo demasiado obvio. Fred Brooks lo citó después en *The Mythical Man-Month* y le dio el nombre de Ley de Conway. Décadas de experiencia en la industria desde entonces han confirmado su perturbadora exactitud.

## Lo que la ley dice realmente

La Ley de Conway no es una metáfora. Es una restricción estructural.

Cuando un equipo diseña una interfaz entre dos componentes, refleja implícitamente la frontera entre dos grupos de personas. Si esos dos grupos no se comunican frecuentemente, la interfaz será rígida, mal definida, o sobrecargada de parámetros para gestionar todos los casos que nadie tuvo tiempo de sincronizar. Si esos dos grupos trabajan codo a codo, la interfaz será fluida, bien ajustada y fácil de evolucionar.

La estructura de comunicación de una organización queda grabada en la arquitectura de los sistemas que produce. No intencionalmente. Naturalmente.

## Ejemplos concretos

Tomemos un equipo dividido por capa técnica: un equipo frontend, un equipo backend, un equipo de base de datos. En seis meses, el sistema tendrá una arquitectura de tres capas bien diferenciadas, con APIs entre cada capa definidas por los puntos de contacto entre los equipos. No es una coincidencia. Es la traducción directa de quién habla con quién.

Otro ejemplo: una empresa con un equipo iOS, un equipo Android y un equipo Web producirá tres aplicaciones separadas con experiencias de usuario divergentes y APIs backend que reflejan las necesidades de cada plataforma por separado, aunque el producto se suponga coherente.

A la inversa, una empresa que organiza sus equipos por dominio de negocio - un equipo de pagos, un equipo de catálogo, un equipo de entrega - producirá naturalmente una arquitectura que refleja esos dominios. Cada equipo posee su servicio, sus datos, su despliegue. La arquitectura emerge de la organización.

## La trampa de los microservicios

La Ley de Conway explica uno de los fracasos más frecuentes en la adopción de microservicios.

Las organizaciones deciden migrar a una arquitectura de microservicios porque es la mejor práctica, la escalabilidad, la flexibilidad. Dividen su monolito en decenas de servicios. Pero no cambian su organización. Los mismos equipos, organizados de la misma manera, siguen trabajando juntos de la misma manera.

El resultado: un monolito distribuido. Los servicios se llaman entre sí de forma síncrona, los cambios requieren coordinar múltiples equipos, los despliegues están acoplados. Todo el coste operativo de los microservicios, ninguno de los beneficios.

El problema no es técnico. Es la Ley de Conway expresándose: la arquitectura siempre refleja la estructura de comunicación real, no la que el diagrama de arquitectura querría mostrar.

## La Maniobra Inversa de Conway

Si la Ley de Conway dice que la organización determina la arquitectura, entonces lo recíproco es accionable: para obtener una arquitectura objetivo, cambiar la organización primero.

Esto es lo que Martin Fowler y otros han llamado la Maniobra Inversa de Conway. En lugar de diseñar la arquitectura y esperar que la organización se adapte, se estructuran los equipos para que correspondan a las fronteras arquitectónicas deseadas, y se deja que la arquitectura emerja naturalmente.

Si quieres una arquitectura orientada a dominios de negocio, forma equipos alrededor de esos dominios. Dales plena propiedad de su ámbito: código, datos, despliegue, guardia. No los hagas depender de otros equipos para desplegar su trabajo. La arquitectura resultante reflejará exactamente esas fronteras.

Esto es contraintuitivo. Tendemos a pensar que primero dibujamos la arquitectura y luego organizamos a las personas para implementarla. La Ley de Conway dice que ese orden es el incorrecto.

## El tamaño de los equipos también importa

La Ley de Conway también se aplica a la granularidad. Un equipo de tres personas no puede mantener veinte servicios independientes. El número de servicios que una organización puede mantener de forma saludable está limitado por el número de silos de comunicación distintos que tiene.

Jeff Bezos con su regla de las dos pizzas (un equipo no debería necesitar más de dos pizzas para ser alimentado) tocaba intuitivamente este principio: equipos pequeños con ámbitos claros producen componentes con ámbitos claros.

Las organizaciones que crean demasiados servicios en relación con el tamaño de sus equipos acaban con servicios que nadie posee realmente, fronteras difusas y una coordinación que merma la velocidad de entrega.

## Lo que cambia en la práctica

Cuando surge un problema de arquitectura - acoplamiento excesivo entre servicios, interfaces mal definidas, coordinación permanente entre equipos para entregar una funcionalidad - la primera pregunta que hay que hacerse no es técnica. Es: «¿Qué equipos necesitan hablar entre sí para que este cambio ocurra?»

Si la respuesta es «tres equipos diferentes tienen que coordinarse para cada despliegue», el problema no está en el código. Está en la estructura organizativa.

La solución duradera pasa por una reorganización de los ámbitos de responsabilidad, no por nuevos patrones de arquitectura.

## La Ley de Conway y Sinra

Para los equipos que usan Sinra, la Ley de Conway tiene una implicación directa en cómo se organiza el trabajo.

Las capabilities y los releases tienen más sentido cuando corresponden a ámbitos de equipo reales. Una capability que requiere coordinar cinco equipos para ser entregada es a menudo una señal de que las fronteras organizativas no coinciden con las fronteras funcionales del producto.

Organizar los ciclos por equipo - cada equipo gestiona sus propias issues, sus propios testings, sus propias releases dentro de su dominio - produce un sistema donde la velocidad es real y medible. No diluida en dependencias entre equipos que frenan a todo el mundo.

La Ley de Conway no es una fatalidad. Es un diagnóstico. Cuando la arquitectura se convierte en un problema, mirar la estructura de los equipos es a menudo el punto de partida más honesto.

---

La Ley de Conway fue formulada hace casi sesenta años. Sigue siendo una de las observaciones más útiles sobre cómo las organizaciones producen software. No porque sea pesimista sobre las capacidades humanas - sino porque reconoce que la comunicación tiene un coste, y ese coste siempre aparece en algún lugar del sistema.
