# Ejercicio 2: El muro del código minificado. Usando MCP en entornos de producción.

Ahora vamos a usar el **Chrome DevTools MCP** para que el agente analice la demo, pero simularemos un entorno de producción donde el código está minificado.

## Paso 1: Configuración

Asegúrate de tener el MCP configurado (ver [docs/setup.md](../../docs/setup.md)).

## Paso 2: Análisis con MCP

Pide al agente lo siguiente:
> "Abre http://localhost:3000. Inicia una traza de performance, pulsa el botón 'Ejecutar tarea pesada' y detén la traza. Identifica qué función está causando el Long Task."

### El Problema
El agente te dirá algo como: "La función `a()` en `script.min.js` ha tardado 2000ms".

**Reflexión**: 
- ¿Sabes qué hace la función `a()`? No.
- ¿Puedes encontrarla en tu código fuente original? Es difícil.
- En producción, los nombres de variables y funciones se ofuscan para ahorrar espacio.

---

En el siguiente ejercicio, veremos cómo los **Source Maps** eliminan este muro.
