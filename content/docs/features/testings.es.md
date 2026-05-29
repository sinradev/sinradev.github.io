---
title: "Testings (QA)"
description: "Sinra integra los casos de prueba QA directamente en el ciclo de desarrollo. Crea casos de prueba en capabilities, ejecútalos durante el ciclo, y realiza seguimiento de la aceptación sin salir de la plataforma."
date: 2024-01-01
weight: 40
---

## ¿Qué son los Testings?

Los testings son casos de prueba QA vinculados a capabilities. En lugar de mantener una herramienta separada como TestRail, tu equipo de QA crea y ejecuta casos de prueba directamente en Sinra, vinculados a la funcionalidad que validan.

## Crear un Caso de Prueba

Cualquier usuario con acceso Reporter o superior puede crear un testing en una capability:
1. Abrir la capability
2. Hacer clic en "Añadir Testing"
3. Establecer el nombre del test, descripción y resultado esperado
4. Asignar a un usuario de QA

## Ejecutar Pruebas Durante un Ciclo

La vista `/testings/current` muestra todos los casos de prueba en progreso para la release activa. QA ejecuta cada test y lo marca:

| Resultado | Significado |
|-----------|------------|
| **Aceptado** | Prueba superada, la funcionalidad valida |
| **Rechazado** | Prueba fallida, la issue vinculada debe reabrirse o crear un bug |

Los tests rechazados aparecen inmediatamente en la vista de capability, dando a desarrolladores y product owners el estado QA en tiempo real.

## Trazabilidad

Los testings conectan capability con validación:

```
Capability → Testing → Aceptado / Rechazado
```

Cuando una release se entrega, puedes revisar qué capabilities tenían todos los tests aceptados vs cuáles tenían rechazos que fueron ignorados o aplazados. Esta pista de auditoría se preserva en la retrospectiva de la release.

## Por Qué Importa el QA Integrado

Cambiar entre una herramienta de tickets y una herramienta QA separada crea problemas de sincronización: los bugs encontrados en TestRail deben crearse manualmente en Jira. Sinra elimina esta transferencia. Un caso de prueba rechazado está vinculado directamente a la capability y al ciclo donde pertenece la corrección.
