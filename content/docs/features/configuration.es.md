---
title: "Configuración"
description: "Personaliza Sinra para tu organización: estados de flujo de trabajo, labels, categorías y plataformas. Todo se configura sin código desde el panel de ajustes."
date: 2024-01-01
weight: 90
---

## Resumen

Sinra se adapta a tu proceso, no al revés. La sección Configuración permite a los admins definir los elementos compartidos por toda la organización: flujos de trabajo, etiquetas y contextos.

## Estados

Los estados definen las etapas de tus flujos de trabajo. Sinra distingue dos tipos de estados independientes:

- **Estados de escritura**: progreso de la especificación (ej. Borrador, En revisión, Aprobado)
- **Estados de desarrollo**: progreso de la implementación (ej. Por hacer, En progreso, En pruebas, Terminado)

Para cada estado puedes definir:
- **Nombre** y **emoji** para identificación visual
- **Porcentaje de finalización** para el cálculo de progreso
- **Orden** mediante arrastrar y soltar

Crea tantos estados como requiera tu proceso. Un estado configurado al 100% se trata como terminal.

## Labels

Los labels son etiquetas de colores aplicadas a issues, capabilities y proyectos. Sirven para categorización libre: tipo de trabajo, prioridad funcional, dominio de negocio, etc.

Para cada label:
- Nombre y color
- Alcance: solo issues, capabilities, o ambos

Los labels son filtrables en la lista de issues con los operadores `igual`, `en` y `está vacío`.

## Categorías

Las categorías permiten agrupar issues por dominio funcional o técnico. A diferencia de los labels, están diseñadas para una estructuración más formal.

Ejemplos: Autenticación, Pagos, Notificaciones, Infraestructura.

## Plataformas

Las plataformas indican el contexto técnico de una issue:

- Website
- Mobile (iOS / Android)
- Backend
- Frontend
- Infraestructura

Cada issue puede etiquetarse con una plataforma. Esto permite filtrar y visualizar la carga por contexto técnico, útil para equipos full-stack o multi-producto.

## Buenas Prácticas

**Estados**: mantén la simplicidad. De 4 a 6 estados de desarrollo cubren la mayoría de los flujos de trabajo. Demasiados estados genera fricción.

**Labels**: evita duplicar plataformas o categorías. Usa labels para lo que no encaja en los otros ejes.

**Categorías y plataformas**: defínelas una vez al inicio del proyecto. Cambiarlas a mitad del proyecto implica re-etiquetar las issues existentes.
