---

title: "Seguimiento de QA sin Excel: Organiza tus Testings de Forma Eficiente"
subtitle: "Un archivo Excel de casos de prueba funciona bien para tres personas durante tres meses. Después, se convierte en un archivo que nadie se atreve a tocar por miedo a romper una fórmula."
description: "El seguimiento de QA en Excel o Google Sheets funciona al principio, luego se vuelve inmanejable: versiones múltiples, casos de prueba obsoletos, ningún vínculo con los tickets reales. Cómo estructurar tus testings en una herramienta que se mantenga fiable a medida que el equipo crece."
categories: ["Gestión de Proyectos", "Calidad"]
excerpt: "El archivo «QA_tests_v4_final_de_verdad.xlsx» no es una exageración para muchos equipos. Por qué Excel falla en este caso de uso concreto, y qué cambia realmente un seguimiento estructurado."
date: 2026-07-28 09:00:00 +0200
featured_image: /assets/images/blog/2026-07-28-suivi-qa-sans-excel-featured.png

---

Muchos equipos empiezan su seguimiento de QA en una hoja de cálculo: es rápido de montar, todo el mundo sabe usarla, y para un puñado de casos de prueba, funciona perfectamente. El problema llega más tarde, cuando la hoja ha crecido y la estructura original ya no aguanta.

## Cómo se degrada una hoja de cálculo de QA con el tiempo

Un archivo de seguimiento de QA empieza simple: una fila por caso de prueba, una columna de estado, una columna de fecha. A medida que el producto crece, se añaden nuevas columnas para capturar necesidades imprevistas: entorno probado, versión afectada, persona asignada. El archivo se ensancha, difícil de leer sin desplazarse en ambas direcciones.

El verdadero problema no es el tamaño, es la fiabilidad. Nada impide que dos personas modifiquen la misma fila al mismo tiempo. Nada indica que un caso de prueba no se ha vuelto a ejecutar desde la última versión mayor del producto. Nada vincula automáticamente un caso de prueba con la issue o capability que valida: ese vínculo existe solo en la memoria de quien creó la fila.

## El síntoma más revelador

La señal más fiable de que un seguimiento de QA en hoja de cálculo ha llegado a su límite: alguien pregunta «¿este caso sigue siendo relevante?» sobre una fila creada hace un año, y nadie puede responder con certeza sin volver a probarlo manualmente. En ese punto, la hoja de cálculo ya no ahorra tiempo: lo cuesta, porque hay que verificar su propia fiabilidad antes de confiar en ella.

## Lo que debe aportar un seguimiento estructurado

Un sistema de **testings** estructurado debe cubrir necesidades que la hoja de cálculo no aborda de forma nativa:

**El vínculo directo con el trabajo real.** Un caso de prueba debería estar vinculado a la capability o issue que valida, no referenciado por un identificador que hay que buscar en otro sitio.

**Un estado de vigencia.** Saber cuándo se ejecutó un caso de prueba por última vez, y sobre qué versión, sin tener que recalcular esa información manualmente.

**Una ejecución trazable por release.** Poder responder a «qué tests se ejecutaron y validaron para esta release concreta» con un estado registrado, no una reconstrucción a posteriori.

## Cómo estructura Sinra este seguimiento

En Sinra, los **testings** viven al mismo nivel que las issues y las capabilities, con los mismos mecanismos de vinculación nativos. Un caso de prueba puede vincularse directamente a la capability que cubre, ejecutarse dentro de un cycle o una release, y su resultado queda registrado y consultable sin reconstrucción manual. La pregunta «¿podemos lanzar?» de la checklist de release se apoya directamente en este estado, en lugar de una hoja de cálculo separada que habría que cruzar a mano.

## El momento adecuado para cambiar

No existe un umbral universal de número de filas a partir del cual una hoja de cálculo de QA deja de ser adecuada. El mejor indicador es de comportamiento: en cuanto el equipo empieza a evitar tocar el archivo por miedo a romperlo, o pasa más tiempo verificando su coherencia que probando realmente, la estructura ha dejado de cumplir su propósito original.
