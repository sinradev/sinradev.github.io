---

title: "Monorepo vs polyrepo: el debate que nadie gana"
subtitle: "Google y Meta usan monorepos gigantescos. Netflix y Spotify usan polyrepos. Ambas empresas entregan software de calidad a gran escala. Lo que eso dice del debate: la respuesta depende del contexto, no de un principio universal."
description: "La elección entre monorepo y polyrepo se presenta a menudo como una decisión arquitectónica fundamental. Es principalmente una decisión organizacional. Cada enfoque resuelve ciertos problemas y crea otros. Entender cuáles ayuda a elegir."
categories: ["Productividad en Desarrollo"]
excerpt: "Si tu equipo pasa más tiempo debatiendo monorepo vs polyrepo que escribiendo código, es señal de que el debate está mal planteado. Ambos enfoques funcionan. La verdadera pregunta es: ¿qué estructura se adapta a tu organización y a tu ciclo de entrega?"
date: 2026-06-08 00:00:00 +0100
featured_image: /assets/images/blog/2026-06-08-monorepo-vs-polyrepo-featured.png

---

Twitter (ahora X) migró de polyrepo a monorepo en 2022. Airbnb mantiene un monorepo. Lyft, Uber y la mayoría de las grandes empresas tecnológicas americanas tienen sus propias arquitecturas de repositorios, ninguna universalmente idéntica.

Del otro lado, el ecosistema open source es casi universalmente polyrepo. Los microservicios de Netflix están en repos separados. La mayoría de las startups comienzan con polyrepo y migran o no según los problemas que encuentran.

Este panorama no lleva a ninguna conclusión universal. Ambos enfoques coexisten en empresas que entregan a gran escala. Eso sugiere que la elección entre los dos es menos crítica de lo que los debates en línea hacen parecer, y que la verdadera pregunta es entender qué problemas resuelve cada enfoque.

## Lo que el monorepo resuelve

**La consistencia de dependencias.** En un monorepo, todos los proyectos usan las mismas versiones de las dependencias compartidas. No es posible que el proyecto A use la versión 3.2 de una librería y el proyecto B use la versión 2.8. Las actualizaciones de dependencias se propagan a todos los proyectos simultáneamente.

Esta consistencia tiene un coste: las actualizaciones de dependencias afectan a todos los proyectos al mismo tiempo. Si la actualización a la versión 4.0 introduce una API incompatible, todos los proyectos que usen esa librería deben migrar simultáneamente. Eso puede ser una operación grande.

**La refactorización entre proyectos.** En un monorepo, renombrar una función o modificar una interfaz compartida puede hacerse en una sola operación sobre todo el código. El compilador o los tests señalan inmediatamente todos los lugares que hay que corregir. La consistencia la garantiza el tooling.

En un polyrepo, la misma operación requiere actualizar varios repos, probablemente en un orden preciso, gestionando las versiones de transición. Es posible, pero más lento y más propenso a errores.

**La visibilidad global.** Un monorepo permite que cualquier desarrollador navegue por todo el código de la organización. Facilita la reutilización de código existente (es descubrible), la comprensión de las dependencias entre proyectos y el onboarding de nuevos desarrolladores que tienen una visión completa del sistema.

**El commit atómico entre proyectos.** Un cambio que toca varios proyectos puede commitearse en una sola operación con un único número de commit. La consistencia entre proyectos queda garantizada en cada estado del código.

## Lo que el polyrepo resuelve

**La autonomía de los equipos.** Equipos diferentes que trabajan en proyectos diferentes pueden tomar sus propias decisiones de stack, proceso y cadencia de release, sin estar restringidos por las convenciones de un monorepo único. Un equipo puede migrar a una nueva versión de un framework sin bloquear a toda la organización.

**El rendimiento de las herramientas.** Herramientas como git, los IDEs y los pipelines CI no están diseñadas para repos de varios terabytes. Google tuvo que construir sus propias herramientas (Piper, CitC) para gestionar su monorepo. La mayoría de las organizaciones no tienen ni los recursos ni la necesidad de hacerlo. Un polyrepo mantiene los repos a tamaños manejables con herramientas estándar.

**La claridad de los perímetros.** Un repo = un servicio o una aplicación = un perímetro de responsabilidad claro. La propiedad es inmediatamente visible: quién posee este repo, quién tiene derechos de merge, quién recibe notificaciones cuando hay un problema. En un monorepo, estos perímetros deben definirse y mantenerse por convención.

**La seguridad y el control de acceso.** En un polyrepo, el acceso puede controlarse por repo. Un contractor puede tener acceso a ciertos repos pero no a otros. En un monorepo, el control de acceso es más granular y más complejo de mantener.

## Los problemas que ninguno de los dos resuelve

Una confusión frecuente en este debate: creer que la elección de arquitectura de repositorio resuelve problemas organizacionales más profundos.

**La coordinación entre equipos.** Ya sean los servicios en un monorepo o en polyrepos separados, si los equipos que los desarrollan no se comunican, las interfaces serán inconsistentes y las dependencias mal gestionadas. La arquitectura de repo no crea coordinación. Puede facilitarla o complicarla, pero no la reemplaza.

**La calidad del código.** Un monorepo con código malo es código malo en un solo lugar. Un polyrepo con código malo es código malo en varios lugares. La estructura del repo no cambia la calidad de lo que contiene.

**La velocidad de entrega.** Los equipos rápidos son rápidos porque tienen procesos claros, pipelines fiables y una cultura de responsabilidad. No porque hayan elegido el tipo de repo correcto. Los equipos lentos lo son por razones que la elección de repo no cambia.

## El coste de la migración

Un aspecto subestimado del debate: el coste de migrar de un enfoque al otro.

Migrar de polyrepo a monorepo es una operación significativa. Hay que fusionar el historial de git de los distintos repos, reorganizar los pipelines CI/CD, adaptar los derechos de acceso y formar a los equipos en las nuevas herramientas y convenciones. Para una organización de tamaño mediano, son varias semanas o meses de trabajo.

Migrar en el sentido contrario es igualmente costoso. Extraer un servicio de un monorepo hacia su propio repo implica separar el historial, gestionar las dependencias circulares que se habían desarrollado y reconstruir los pipelines independientes.

En ambos casos, la migración tiene un coste directo (el tiempo invertido) y un coste indirecto (la perturbación del trabajo de entrega durante la migración). Este coste debe ponerse en perspectiva con los beneficios esperados.

## Lo que dice el tamaño del equipo

El tamaño y la estructura del equipo es el factor más predictivo de la elección óptima.

**Equipos pequeños (menos de 10 desarrolladores, un solo producto):** el debate es generalmente irrelevante. Ambos enfoques funcionan. Si el producto es un monolito o algunos servicios, un polyrepo simple es suficiente. Si es un proyecto con varios paquetes estrechamente relacionados, un monorepo simplifica la gestión de dependencias.

**Equipos medianos (10-100 desarrolladores, varios servicios):** las tensiones entre consistencia (monorepo) y autonomía (polyrepo) empiezan a manifestarse. La elección depende de la cultura del equipo y del grado de acoplamiento entre los servicios. Los servicios fuertemente acoplados se benefician del monorepo. Los servicios independientes se benefician del polyrepo.

**Equipos grandes (más de 100 desarrolladores, decenas de servicios):** ambos enfoques requieren una inversión significativa en tooling. El monorepo necesita herramientas de build incremental (Bazel, Turborepo, Nx). El polyrepo necesita herramientas de coordinación y gestión de dependencias entre repos (Renovate, sistemas de versionado coordinado).

## El enfoque pragmático

Para la mayoría de los equipos, la decisión práctica es:

Empezar con el enfoque que minimiza la fricción inicial, generalmente un polyrepo simple para proyectos pequeños, o un monorepo si el proyecto tiene desde el principio varios paquetes fuertemente vinculados.

Observar los problemas que emergen realmente, no los que se anticipan. Si los problemas de dependencias divergentes se vuelven frecuentes, el monorepo merece considerarse. Si los pipelines CI se vuelven demasiado lentos y los equipos sufren con las convenciones compartidas, el polyrepo merece considerarse.

Evitar la migración prematura. Los problemas que justifican una migración de repo son generalmente visibles y dolorosos cuando existen. Si no sientes claramente esos dolores, el statu quo probablemente sea correcto.

---

El debate monorepo vs polyrepo es a menudo más ideológico que pragmático. Hay ingenieros con convicciones profundas sobre la superioridad de uno u otro enfoque, generalmente basadas en su experiencia en un contexto particular que no es el tuyo.

La verdadera pregunta no es "¿cuál es la mejor arquitectura de repositorio?". Es "¿qué problemas concretos tengo, y qué arquitectura los resuelve con el menor overhead?"

Eso no es tan satisfactorio como una respuesta universal. Es más honesto.
