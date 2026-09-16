---
title: "Importar issues"
description: "Importa issues a Sinra desde un archivo CSV exportado de cualquier herramienta, con presets de mapeo automático para Jira, Asana, Azure DevOps y Linear, o directamente desde GitHub vía OAuth."
date: 2026-09-16
weight: 36
---

## Dos vías de importación

Sinra ofrece dos formas de traer trabajo existente a una organización: una **importación de archivo CSV** para cualquier herramienta que pueda exportar uno, y una importación de **GitHub Issues** para repositorios conectados vía OAuth.

## Importación de archivo CSV

Importa issues desde un archivo CSV exportado de cualquier herramienta.

- Soporta delimitadores de coma, punto y coma, y tabulación
- Presets de mapeo automático para **Jira**, **Asana**, **Azure DevOps** y **Linear**: los encabezados de columna de estas herramientas se reconocen automáticamente, sin necesidad de mapear los campos a mano
- Otras herramientas también funcionan: mapea las columnas manualmente si ningún preset coincide
- Hasta 5.000 filas por importación

Inicia una importación desde **Import from CSV** en la sección Issues.

## GitHub Issues

Importa issues abiertas o cerradas directamente desde un repositorio de GitHub conectado.

- Conexión por OAuth, sin token personal requerido
- Filtra por label, milestone o estado antes de importar
- Detección automática de duplicados para evitar reimportar issues ya presentes en Sinra

Inicia una importación desde **Connect GitHub** en la sección Issues.

## Diferencia con la integración VCS

Esta importación es una transferencia puntual de issues existentes. Es distinta de la [integración VCS](/docs/features/vcs-integration/), que sincroniza continuamente el estado de desarrollo a partir de eventos git (PR abierta, fusionada, etc.) una vez que las issues ya existen en Sinra.
