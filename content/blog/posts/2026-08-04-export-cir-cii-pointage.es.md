---

title: "Exportación CIR/CII y Fichaje: Automatizar la Parte Administrativa de la Investigación"
subtitle: "Reconstruir a mano un expediente justificativo CIR/CII significa volver a buscar en una hoja de cálculo horas y descripciones que la herramienta de gestión de proyectos ya conoce. Una exportación bien pensada convierte ese trabajo de varios días en unos pocos clics."
description: "La exportación CIR/CII y fichaje de Sinra permite generar un extracto justificativo para el Crédito de Impuesto por Investigación (CIR) o Innovación (CII) francés, así como un informe simple de horas trabajadas, directamente desde las issues ya seguidas cada día, sin volver a introducir datos."
categories: ["Gestión de Proyectos", "Herramientas"]
excerpt: "El expediente CIR/CII se suele construir a posteriori, reconstruyendo en una hoja de cálculo horas y descripciones que ya existen en la herramienta de seguimiento. La exportación CIR/CII evita esa reconstrucción: el justificativo parte directamente de las issues reales."
date: 2026-08-04 09:00:00 +0200
featured_image: /assets/images/blog/2026-08-04-export-cir-cii-pointage-featured.png

---

Cada año, las empresas que se benefician del **Crédito de Impuesto por Investigación (CIR)** o del **Crédito de Impuesto por Innovación (CII)** franceses deben presentar un expediente justificativo que detalle los trabajos de investigación realizados, el tiempo dedicado a ellos y el período correspondiente. En la práctica, este expediente se construye demasiado a menudo a posteriori: alguien reabre los tickets del año, copia horas en una hoja de cálculo, intenta averiguar qué tareas eran realmente I+D. Este trabajo de reconstrucción es lento, propenso a errores y depende por completo de la memoria del equipo.

## El problema no es el seguimiento, es la reconstrucción

Un equipo que usa una herramienta de gestión de proyectos ya registra, día a día, todo lo que importa para el expediente CIR/CII: las **issues** trabajadas, el tiempo dedicado a cada una, la **capability** o proyecto al que pertenecen, su descripción técnica. Esa información existe. El problema no es su ausencia, sino que no está disponible en ningún sitio en un formato utilizable para un expediente fiscal. Reconstruir un justificativo equivale entonces a rehacer, meses después, un trabajo de recopilación que la herramienta podría haber producido directamente.

## Qué hace la exportación CIR/CII

La exportación CIR/CII de Sinra parte de esta observación simple: el justificativo no necesita ser reconstruido, necesita ser **extraído**. En concreto, el usuario filtra sus issues por un **label** que él mismo ha creado — « I+D », « Investigación », o cualquier nombre relevante para su organización — y por el período correspondiente, y luego selecciona los campos a incluir: proyecto, descripción técnica, horas trabajadas, fechas de la capability asociada. La exportación genera un archivo con una línea por issue, listo para servir de base al expediente justificativo.

Elegir un **label** en lugar de un campo técnico fijo es la decisión clave: es el usuario quien decide qué se considera I+D en su organización, no la herramienta la que impone una clasificación rígida. Un label se crea, se renombra, se aplica y se retira con la misma facilidad que una etiqueta, lo que deja al equipo el control total sobre cómo califica su propio trabajo, año tras año.

## Una exportación de fichaje, para una necesidad diferente

El mismo mecanismo de exportación cubre una segunda necesidad, más general: producir un informe simple de horas trabajadas, por persona y por proyecto, sin filtrar por ningún label en particular. Este formato encaja con un seguimiento de fichaje clásico, una facturación basada en el tiempo dedicado, o un informe de actividad interno. Las horas exportadas están acumuladas por issue, no registradas como un diario de asistencia: el archivo sigue siendo un informe de actividad, no un fichaje horario en sentido estricto.

## Qué cambia en la práctica

La ganancia más visible es el tiempo: lo que antes suponía varios días de reconstrucción manual a fin de año se convierte en una exportación de unos minutos, disponible en cualquier momento del año. Pero la ganancia más importante está en otro sitio. Un expediente reconstruido a mano depende de lo que el equipo todavía recuerda; un expediente extraído directamente del seguimiento real refleja lo que realmente ocurrió, con descripciones y fechas tal como se introdujeron en el momento del trabajo, no tal como se reconstruyen seis meses después. Esa trazabilidad continua es exactamente lo que una inspección fiscal o una auditoría interna busca verificar.

## Otros usos del mismo mecanismo

La misma exportación, aplicada a otros labels o filtros, cubre necesidades que van más allá del CIR/CII:

- **Facturación por tiempo dedicado** para trabajo con clientes, filtrando las issues por proyecto en lugar de por un label de I+D.
- **Informe mensual** para un comité de dirección, combinando un filtro por período con una selección de campos orientada a la síntesis más que al detalle técnico.
- **Auditoría de calidad o cumplimiento**, aislando las issues con un label específico vinculado a una norma o certificación seguida en el tiempo.
- **Reparto presupuestario entre varios proyectos**, cruzando la exportación con las horas por capability para justificar una decisión de asignación de recursos.

En todos los casos, el principio es el mismo: en lugar de construir un informe específico para cada necesidad administrativa, un único mecanismo de exportación, combinado con los filtros y labels que el equipo define por sí mismo, se adapta a la necesidad del momento sin desarrollo adicional.

## Lo que hay que recordar

El expediente CIR/CII, como la mayoría de los informes administrativos recurrentes, no tiene por qué reconstruirse a mano en cada plazo. Si una herramienta de gestión de proyectos ya registra lo que importa — issues, horas, proyectos, labels —, la pregunta correcta no es « cómo reconstruyo este informe » sino « por qué no está ya disponible como una exportación ». Esa es la pregunta que la exportación CIR/CII y fichaje de Sinra fue pensada para resolver.
