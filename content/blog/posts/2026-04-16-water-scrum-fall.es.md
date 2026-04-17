---

title: "Water-Scrum-Fall: La Realidad de Organizaciones Queriendo Ser Agile"
subtitle: "Waterfall para encuadre y despliegue, Scrum para desarrollo: el modelo híbrido dominante en empresa"
description: "Water-Scrum-Fall es el modelo híbrido describiendo realidad de muchas organizaciones: procesos Waterfall para encuadre y gobernanza, Scrum para desarrollo, cascada para despliegues y rollout a producción."
categories: ["Metodología"]
date: 2026-05-06 09:00:00 +0100
excerpt: "La mayoría de grandes empresas creyendo hacer Scrum en realidad hacen Water-Scrum-Fall: Waterfall para decisiones y despliegues, Scrum para desarrollo en medio. Entender este modelo es entender cómo reconciliar agilidad y gobernanza."
featured_image: /assets/images/blog/2026-04-16-water-scrum-fall-featured.png
---

## Qué es Water-Scrum-Fall?

**Water-Scrum-Fall** es término acuñado por Forrester Research en 2011 para describir patrón omnipresente en grandes organizaciones: adoptaron Scrum para desarrollo, pero retuvieron procesos Waterfall para encuadre aguas arriba y despliegues aguas abajo.

El modelo se ve así:

**Fase 1 (Water): Encuadre y planificación Waterfall**
Antes que equipas desarrollen algo, hay meses de encuadre: definición de presupuesto anual, validación por comités, redacción de especificaciones, selección de proveedores, redacción de contratos. Este proceso puede tomar 3-6 meses.

**Fase 2 (Scrum): Desarrollo iterativo**
Equipas de desarrollo trabajan en sprints de 2-4 semanas. Entregan iterativamente, se adaptan a retroalimentación, optimizan backlog. Todo parece agile... hasta el final.

**Fase 3 (Fall): Despliegue secuencial**
El despliegue en producción permanece secuencial y riesgoso: ventanas de mantenimiento, CAB (Change Advisory Board) semanal, pruebas de aceptación formales, múltiples validaciones. Un despliegue puede tomar 4-8 semanas más después que desarrollo esté "terminado".

## Por Qué Water-Scrum-Fall es Omnipresente

Este modelo no es resultado de mala voluntad. Refleja restricciones reales:

**Restricciones presupuestarias**: las organizaciones planifican y asignan presupuestos anualmente. Sin presupuesto decidido en curso del año = planificación Waterfall obligatoria.

**Restricciones contractuales**: contratos con proveedores, RFPs, compromisos legales requieren definición previa de alcance.

**Restricciones regulatorias**: en sectores regulados (finanzas, salud, gobierno), despliegues a producción requieren validaciones formales que no pueden comprimirse.

**Restricciones organizacionales**: procesos de gobernanza IT (CAB, comité de arquitectura, comité de seguridad) funcionan en ritmo semanal o mensual, no en ritmo Scrum.

## Los Problemas de Water-Scrum-Fall

Entender el modelo también es entender sus disfunciones:

**El valor permanece bloqueado**: incluso si desarrollo está terminado, funcionalidad no está en manos de usuarios durante fase "Fall". Semanas pasan sin valor entregado.

**La retroalimentación llega demasiado tarde**: usuarios no pueden dar retroalimentación sobre qué está en producción. Equipas desarrollan "en el vacío" durante fases intermedias.

**Los sprints son ilusiones**: si todas decisiones importantes se toman en fase de encuadre y despliegues son secuenciales, sprints son realmente mini-Waterfalls internos.

**La deuda de alcance se acumula**: cambios identificados durante desarrollo frecuentemente deben esperar próximo ciclo de planificación anual.

## Transformar Water-Scrum-Fall

Para organizaciones queriendo salir de Water-Scrum-Fall, cambios más impactantes son:

**Presupuestación continua**: pasar de presupuesto por proyecto a presupuesto por equipo de producto. Equipas tienen presupuesto permanente y deciden prioridades ellas mismas.

**Continuous Delivery**: automatizar pipeline de despliegue para que releases a producción sean frecuentes, pequeños y reversibles. Riesgo de cada despliegue disminuye.

**CAB aligerado**: reemplazar CAB semanal con controles automatizados y proceso de despliegue con aprobación ligera para cambios estándares.

**Roadmap rolling**: reemplazar planificación anual rígida con roadmap deslizante a 3-6 meses revisada trimestralmente.

## Water-Scrum-Fall y Sinra

Sinra se adapta naturalmente a Water-Scrum-Fall. Las **releases** permiten planificar entregables alineados con ciclos de gobernanza. Los **ciclos** representan sprints de desarrollo. Las **capabilities** rastrean compromisos hechos durante encuadre.

Los **statuses** permiten distinguir items en desarrollo activo de aquellos en espera de validación o despliegue, haciendo visible la "cola" de Water-Scrum-Fall.

La fase "Water" de encuadre produce naturalmente lista de capabilities a desarrollar sobre el año. Eso es exactamente qué representa un **proyecto** Sinra: conjunto de capabilities en vista Gantt capturando visión largo plazo desde encuadre, sin fijar detalles de ejecución que ciclos gestionan luego de forma agile.

## Conclusión

Water-Scrum-Fall ni es vergüenza ni fatalidad. Es modelo de transición realista que la mayoría de grandes organizaciones atraviesan en camino hacia verdadera agilidad. Reconocerlo explícitamente es primer paso para mejorarlo. Equipas sabiendo en qué modelo operan pueden identificar restricciones reales y trabajar progresivamente a reducirlas.
