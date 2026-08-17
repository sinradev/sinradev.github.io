---

title: "Integración VCS: el estado de las issues sigue al código, no al revés"
subtitle: "PR abierta, review aprobada, merge: estos eventos ya cuentan el avance real del trabajo. La integración VCS de Sinra los convierte en cambios de estado, sin actualización manual."
description: "La integración VCS de Sinra conecta GitHub, GitLab y Bitbucket con tus issues y capabilities: el nombre de la rama lleva el vínculo, un job de CI notifica a Sinra, y el estado de desarrollo avanza automáticamente con cada evento git."
categories: ["Herramientas", "Gestión de Proyectos"]
excerpt: "Un equipo que programa ya sabe, en cada PR abierta y cada merge, en qué punto está el trabajo. El problema no es la información, es que se queda del lado del repositorio mientras la herramienta de gestión de proyectos espera una actualización manual."
date: 2026-08-17 09:00:00 +0200
featured_image: /assets/images/blog/2026-08-17-integration-vcs-github-gitlab-bitbucket-featured.png

---

Una issue pasa a "en curso" cuando alguien abre una PR. Pasa a "por mergear" cuando una review la aprueba. Pasa a "terminado" cuando esa PR se mergea. Estos tres hechos ya existen, por completo, del lado del repositorio git. Sin embargo, en la mayoría de los equipos, alguien todavía tiene que abrir la herramienta de gestión de proyectos y arrastrar manualmente la tarjeta de una columna a otra - un gesto redundante con lo que el repositorio ya sabe, olvidado un día de cada dos al final de un sprint.

## El desfase entre el código y el tablero

Este desfase no es un problema de disciplina de equipo, es un problema de fuente de verdad duplicada. El desarrollador que acaba de mergear su PR está concentrado en la siguiente PR, no en actualizar un tablero. El resultado: el estado mostrado en la herramienta de gestión de proyectos miente en silencio durante horas, a veces días, hasta que alguien lo nota y lo corrige a mano. Un tablero que no refleja el estado real del código deja de ser una herramienta de pilotaje para convertirse en una fuente más de incertidumbre.

## Qué hace la integración VCS

La integración VCS de Sinra parte de un principio simple: el estado de desarrollo de una issue nunca debería introducirse a mano cuando puede deducirse de un evento git. **GitHub, GitLab y Bitbucket** están soportados de forma estrictamente idéntica - una vez vinculado un repositorio, los tres providers se comportan igual, ninguna funcionalidad está reservada para uno solo de ellos. Un job de CI, añadido al repositorio, notifica a Sinra en cada evento relevante: PR abierta, review aprobada, merge, push. Sinra nunca lee el repositorio directamente ni escribe en él tampoco - el sentido de circulación es unidireccional, **git → Sinra**, lo que descarta cualquier riesgo de una acción automática sorpresa del lado del proveedor.

## El nombre de la rama como único vínculo

Ninguna tabla de correspondencia que mantener, ningún vínculo que crear manualmente entre una rama y una issue: el **número** que lleva el nombre de la rama es la clave. Una rama `feature/123-fix-login` apunta sin ambigüedad a la issue o capability número 123, sea cual sea el tipo de rama (`feature`, `bugfix`, `hotfix`, `chore`) o el slug que la acompañe - ambos pueden cambiar libremente sin romper nunca el vínculo. Desde una issue, un botón **Copiar rama** propone directamente ese nombre canónico, para que el desarrollador nunca tenga que inventarlo.

Dos formas de trabajar coexisten de manera natural. Una rama dedicada a una tarea precisa hace avanzar una **issue**; una rama de feature completa, la que spec-kit ya asocia a una **capability**, hace avanzar en cascada todas las issues de desarrollo de esa capability al mergearse. Sinra nunca escribe un estado directamente sobre una capability - su avance sigue, como en el resto de la herramienta, calculándose a partir de sus issues.

## El mapeo evento → estado queda en tus manos

Ningún comportamiento está fijado del lado de la herramienta. Un administrador de organización configura, evento por evento, qué estado aplicar: PR abierta puede disparar "en curso", review aprobada "por mergear", merge "terminado". Se precargan valores por defecto razonables en la primera visita, pero nada impide desactivar un evento vaciando su estado asociado - a partir de ahí no tendrá ningún efecto, pase lo que pase del lado del repositorio. El mapeo se adapta al workflow del equipo, no al revés.

## Salvaguardas pensadas para no sorprender nunca

Un mecanismo que modifica estados automáticamente debe ganarse la confianza antes que la eficiencia. Varias reglas se encargan de eso:

- **Forward-only**: un evento nunca hace retroceder una entidad ya más avanzada. Un push después de un merge nunca reabre una issue "terminada".
- **No-op silencioso**: una PR cerrada sin mergear, devuelta a borrador o ya en el estado objetivo no dispara ni cambio ni error.
- **Merge es terminado, solo hacia la rama por defecto**: mergear hacia una rama de integración intermedia nunca aplica el estado final.
- **Idempotencia**: cada entrega lleva un identificador único, un retry de CI nunca produce un efecto duplicado.
- **Aislamiento por platform**: un evento solo puede afectar a entidades de la misma platform que el repositorio emisor.
- **Procedencia visible**: un cambio de estado de origen git muestra una insignia dedicada en la issue, para distinguirlo de una actualización manual.

Ninguna correspondencia encontrada nunca se trata como un error: el evento simplemente se ignora y se registra para diagnóstico, sin bloquear jamás una CI.

## Puesta en marcha

Vincular un repositorio se hace desde una **platform**: elegir el provider, conectar la cuenta correspondiente, seleccionar el repositorio de una lista. Cada provider se conecta de forma independiente - una organización puede vincular repositorios de GitHub, GitLab y Bitbucket en paralelo, y revocar uno sin afectar a los demás. Solo queda crear un token de organización y añadir el job de CI correspondiente (workflow de GitHub Actions, job de GitLab CI/CD, o step de Bitbucket Pipelines - el payload enviado a Sinra es estrictamente idéntico en los tres casos). Un equipo que sigue estos pasos ve su primera issue cambiar de estado automáticamente en menos de diez minutos.

## Lo que hay que recordar

El estado de desarrollo de una issue no necesita mantenerse a mano cuando el repositorio git ya sabe exactamente cómo evolucionó, evento por evento. Al convertir PRs, reviews y merges en cambios de estado automáticos - sin escribir nunca del lado del proveedor de hosting, sin imponer nunca un mapeo fijo - la integración VCS de Sinra cierra la brecha entre lo que dice el código y lo que muestra el tablero.
