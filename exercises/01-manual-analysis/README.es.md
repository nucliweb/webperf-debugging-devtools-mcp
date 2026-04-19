# Ejercicio 1: Análisis Manual. Detectando problemas sin ayuda de la IA.

En este primer paso, vamos a analizar la demo local utilizando el método tradicional (sin agente de IA ni MCP).

## Paso 1: Levantar la demo

Ejecuta el siguiente comando en la terminal:

```bash
npx -y serve demos/performance-lab
```

_Abre http://localhost:3000_

## Paso 2: Análisis Manual

1. Abre **Chrome DevTools** (F12 o `Cmd+Option+I` en Mac).
2. Ve al panel **Performance**.
3. Inicia la grabación (Shortcuts: `Ctrl+E` en Windows/Linux o `Cmd+E` en Mac).
4. Pulsa el botón "Ejecutar tarea pesada" en la página.
5. Detén la grabación (Shortcuts: `Ctrl+E` o `Cmd+E` de nuevo).
6. **Identifica**:
   - ¿Qué ha pasado en el hilo principal?
   - ¿Cuánto tiempo ha estado bloqueado el navegador?
   - ¿Puedes saber exactamente qué función en el código ha causado esto? (Difícil si no conoces el código de antemano).

> **Reflexión**: Podríamos descargar el **Performance Trace** para pasarlo como contexto al agente, pero el archivo Trace es muy pesado. Ejemplo: `Trace-20260318T095458.json`, **5.5MB** y más de **25K** líneas de código. **Eso puede desbordar nuestra ventana de contexto**.

---

En el siguiente ejercicio, usaremos el MCP para obtener más información, pero veremos un nuevo obstáculo: el código minificado.
