---

title: "Reescribir las herramientas Unix en ensamblador: la idea detrás de UOLT"
subtitle: "Por qué reconstruir cat, ls y sort a mano en ensamblador x86_64, cómo se mantiene todo limpio, y qué nos enseña esa disciplina sobre la eficiencia del software"
description: "UOLT (Ultra Optimised Lightweight Toolset) reescribe las utilidades Unix en ensamblador puro: cero dependencias, syscalls directas, sin heap, binarios estáticos por debajo del kilobyte. La idea, el porqué, el cómo, y el lanzamiento de la colección extras con uolt-column."
categories: ["Ingeniería"]
excerpt: "Un cat moderno pesa decenas de kilobytes y arrastra consigo toda la libc. ¿Tiene que ser así? UOLT dice que no: cada herramienta se reescribe a mano en ensamblador x86_64, sin libc, sin heap, hablando directamente con el núcleo. La suite completa cabe en lo que ocupa un solo binario de coreutils. Esta es la idea."
date: 2026-07-16 09:00:00 +0200
featured_image: /assets/images/blog/2026-07-16-uolt-outils-unix-assembleur-featured.png

---

Abre una terminal y escribe `which cat`. Luego `ls -l` sobre el binario que encuentres. En una máquina Linux típica, `cat` pesa entre 35 y 40 kilobytes. No es mucho a escala de un disco moderno. Pero pregúntate: ¿qué necesita realmente un programa que copia bytes de la entrada a la salida?

La respuesta honesta es: tres llamadas al sistema. `read`, `write`, y una forma de saber cuándo parar. Todo lo demás - las decenas de kilobytes - es la libc, el runtime de C, la maquinaria de opciones de GNU, capas de abstracción apiladas durante décadas. Útil, a menudo. Necesario, rara vez.

**UOLT** (Ultra Optimised Lightweight Toolset) parte de esa observación y la lleva hasta el final: ¿y si reescribiéramos las herramientas Unix fundamentales enteramente a mano, en ensamblador x86_64, sin libc, sin heap, hablando directamente con el núcleo? El resultado no es una curiosidad de laboratorio. Es una suite de 34 herramientas POSIX que funcionan, probadas bit a bit contra las implementaciones de referencia, y cuyo tamaño total cabe en el de un solo binario de coreutils.

Esta es la idea, el razonamiento, y lo que sacamos de ello.

## El porqué: tres convicciones

### El tamaño es una característica, no un detalle

En Linux, la suite UOLT completa - 34 herramientas - pesa unos **44 kilobytes** en binarios estáticos. Las mismas herramientas en la versión estándar del sistema: **2,13 megabytes**. Un factor de aproximadamente **49**.

La herramienta más pequeña, `true`, pesa **384 bytes**, de los cuales 21 son código máquina real. El resto son las cabeceras ELF incompresibles. Un `cat` queda por debajo de 5 KB. Un `ls` por debajo de 12 KB. La media por herramienta en Linux ronda los **1,3 KB**.

Esa compacidad no es gratuita ni decorativa. Un binario diminuto arranca más rápido, cabe entero en caché, no carga ninguna biblioteca dinámica y no presenta ninguna superficie de ataque proveniente de dependencias externas. En un contenedor, en un sistema embebido, en una imagen de recuperación, esa diferencia cuenta.

### Cero dependencias, de verdad cero

En Linux, cada binario UOLT es **totalmente estático**. No carga ninguna libc, ningún runtime, ningún `.so`. Se ejecuta con el núcleo y nada más. Puedes copiarlo en un sistema desnudo, sin ninguna biblioteca instalada, y funciona.

Esa autonomía cambia la naturaleza de la herramienta. No hay versión de glibc que hacer coincidir, ni dependencia que actualizar por una CVE, ni comportamiento que cambie según el entorno. El binario es un artefacto cerrado, predecible, reproducible.

### La legibilidad como exigencia, incluso en ensamblador

El ensamblador tiene mala fama: ilegible, críptico, reservado a los iniciados. UOLT hace lo contrario. El código está escrito en sintaxis Intel, con constantes nombradas en lugar de números mágicos (`mov rax, SYS_WRITE`, nunca `mov rax, 1`), y cada optimización está comentada: por qué este registro, por qué este bucle, por qué esta elección. El proyecto es tan pedagógico como funcional. Una astucia sin explicar se considera un defecto.

## El cómo: una disciplina, no solo código

Escribir ensamblador que funcione es una cosa. Mantener una suite coherente de decenas de herramientas en dos sistemas operativos es otra. La diferencia está en la disciplina.

### Syscalls directas, una abstracción fina

Cada herramienta habla con el núcleo directamente: `open`, `read`, `write`, `close`, `stat`, `getdents`, `mmap`. Ninguna capa intermedia. Pero una herramienta nunca contiene un número de syscall codificado. Esos números difieren entre Linux y macOS, y viven en una capa por sistema operativo (`sys/linux/`, `sys/macos/`). El código de la herramienta llama a puntos de entrada simbólicos como `sys_write`. Esa única frontera es lo que hace posible el porte sin reescribir la lógica de negocio.

Ahí es también donde se esconden las sorpresas. En macOS x86_64, algunas syscalls que Linux expone directamente lanzan un `SIGSYS` y matan el proceso - Apple las filtra. La capa por sistema operativo absorbe esas divergencias: donde Linux usa la syscall `getcwd`, macOS pasa por `open(".")` y luego `fcntl(F_GETPATH)`. La herramienta solo ve un `sys_getcwd` uniforme.

### Sin heap

La regla es estricta: sin `malloc`, sin heap, sin asignación oculta. La memoria viene de la pila, de los registros, o de búferes estáticos. Cuando una herramienta debe mantener una cantidad no acotada de datos en memoria - como `sort`, que tiene que cargarlo todo para ordenar - usa una región `mmap` explícita, cuyo fallo se comprueba, que crece de forma controlada. Es una reserva propiedad de la herramienta, con un camino de error en caso de falta de memoria, no un heap disfrazado. La distinción no es cosmética: garantiza que una herramienta nunca pueda fallar en silencio truncando sus datos.

### POSIX, no GNU

UOLT apunta al comportamiento POSIX, no a la amplitud de opciones de GNU. Una opción se implementa solo si POSIX la especifica para esa herramienta. Sin banderas GNU exóticas, sin doble build «estándar» y «extendido», sin modo en tiempo de ejecución que duplicaría la superficie de pruebas.

Esa elección tiene un efecto secundario elegante: las opciones POSIX son precisamente aquellas en las que las implementaciones GNU (Linux) y BSD (macOS) coinciden. Eso hace que cada herramienta sea **verificable bit a bit** contra la herramienta del sistema en ambas plataformas, sin casos particulares. Cuando un comportamiento obliga a distinguir BSD de GNU, esa es la señal de que nos alejamos de POSIX.

### Una constitución que gobierna

Lo que impide que un proyecto así se desmadre es un documento de gobernanza versionado - una constitución de once principios: solo ensamblador, syscalls directas, cero dependencias, sin heap, abstracción fina de syscalls, tamaño mínimo objetivo, optimización siempre medida nunca supuesta, POSIX-no-GNU, código legible, documentación pedagógica, probado y comparado. Cada cambio pasa esos controles. Cada enmienda se justifica y se versiona semánticamente.

## La prueba por los tests

El ensamblador escrito a mano no tiene red de seguridad: ni compilador que atrape un error de tipo, ni recolector de basura que oculte una fuga. Toda la robustez recae en los tests. Cada herramienta lleva cinco capas:

- **Tests unitarios** y de conformidad POSIX.
- **Tests diferenciales**: para la misma entrada, la salida estándar, la salida de error y el código de retorno deben coincidir bit a bit con la implementación de referencia (GNU en Linux, BSD en macOS).
- **Fuzzing**: entradas aleatorias y malformadas, la herramienta nunca debe fallar ni divergir de la referencia.
- **Verificación por traza de syscalls**: `strace` en Linux, `dtruss` en macOS, para probar que nunca ocurre ninguna syscall oculta ni ninguna asignación de heap.
- **Benchmark** integrado vía `hyperfine`, contra GNU, BSD, BusyBox y Toybox.

Y hay un suelo de rendimiento: cada herramienta debe ser al menos tan rápida como la que reemplaza. En Linux, donde el coste propio de la herramienta es observable, `true` y `false` son cerca de 1,8 veces más rápidas que coreutils, `echo` alrededor de 2 veces. La regla no es «pequeño a cualquier precio»: es «pequeño Y al menos tan rápido, medido cada vez».

## El nuevo capítulo: la colección extras

El núcleo de UOLT es deliberadamente estricto: solo POSIX, nada más. Pero algunas herramientas realmente útiles no forman parte del núcleo POSIX. En lugar de contaminar el núcleo o forzar la constitución, esas herramientas viven en una colección aparte: **extras**.

Los extras reutilizan exactamente la misma infraestructura de ensamblador - la capa de syscalls, la biblioteca interna compartida, el script de enlace estático - y obedecen todos los principios del proyecto **excepto** la restricción POSIX. Cada uno sigue siendo ensamblador x86_64 escrito a mano, syscalls directas, sin dependencia, sin heap, con un objetivo de tamaño y una batería completa de tests.

El primer miembro de esa colección es **`uolt-column`**.

### uolt-column: tus pipes alineados en columnas

La idea es sencilla. Muchos comandos Unix producen columnas separadas por espacios, ilegibles cuando los anchos varían. La herramienta `column -t` de util-linux/BSD existe precisamente para alinearlas - pero arrastra la libc y pesa decenas de kilobytes. `uolt-column` hace lo mismo en **1552 bytes**:

```console
$ printf 'nombre tam fecha\nfoo 1024 jul16\nbar 42 jul15\n' | uolt-column -t
nombre  tam   fecha
foo     1024  jul16
bar     42    jul15
```

Los campos se separan en secuencias de espacios, cada uno se rellena con espacios hasta el ancho máximo de su columna, las columnas se separan por dos espacios, y el último campo de cada línea no se rellena. Es **exactamente** la salida de `column -t` sobre una entrada rectangular - verificado por un test diferencial que compara byte a byte con el `column` del sistema, tanto en Linux (util-linux) como en macOS (BSD). Los anchos se miden en **puntos de código UTF-8**, así que el texto acentuado se mantiene alineado.

Aquí es donde elegir `column` en vez de un objeto decorativo cobra sentido. Una herramienta UOLT se define por ese test diferencial bit a bit contra una referencia: `column` tiene dos implementaciones de referencia, así que `uolt-column` encaja en el molde igual que las otras 34. Y su salida sigue siendo **componible** - texto alineado que aún puedes pasar a `grep`, `cut` o `awk` aguas abajo, a diferencia de una representación con recuadros que sería un callejón sin salida en un pipe.

Solo se implementa el modo `-t` (tabla): el modo determinista y útil. El modo «columnas» por defecto de `column` depende del ancho del terminal y no es reproducible, así que queda fuera del alcance. El argumento `-t` se acepta para que las invocaciones `column -t` existentes funcionen sin cambios. La entrada se carga en una región `mmap` que crece a demanda: cualquier tamaño se alinea sin truncamiento silencioso.

## Lo que nos enseña este enfoque

Podrías ver UOLT como un ejercicio de estilo, una proeza técnica sin alcance práctico. Sería no ver lo esencial.

Durante años, el software creció sin que a nadie le importara de verdad. La potencia de las máquinas aumentaba más rápido que la negligencia, y la ineficiencia permanecía invisible. Ya no es el caso. En servidores facturados por segundo de cómputo, en contenedores desplegados por millones, en dispositivos embebidos limitados en energía, cada kilobyte y cada milisegundo vuelven a ser visibles.

La verdadera lección de UOLT no es «reescríbelo todo en ensamblador». Casi nadie debería hacerlo. La lección es la **disciplina**: saber qué necesita realmente un programa, medir antes de afirmar, rechazar la complejidad que no se justifica, tratar el tamaño y el rendimiento como características de primer orden y no como variables de ajuste.

Es una postura que va mucho más allá del ensamblador. Un equipo que conoce el coste real de cada dependencia que añade, que mide en vez de suponer, que documenta el porqué de sus decisiones, produce software más sólido - sea cual sea el lenguaje. UOLT es su demostración extrema, llevada hasta el bit.

---

UOLT es de código abierto bajo licencia MIT, escrito en ensamblador comentado pensado para leerse tanto como para ejecutarse. Las herramientas se reescriben a partir de las especificaciones POSIX, no derivadas de coreutils - código limpio, tan pedagógico como práctico.

La próxima vez que incorpores una dependencia de varios megabytes para una función que tres llamadas al sistema cubrirían, piénsalo de nuevo. El software no necesita ser pesado para ser bueno. La mayoría de las veces, es lo contrario.
