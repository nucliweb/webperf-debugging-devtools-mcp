# Ejercicio 3: Del Trace al Código. Uso de Source Maps.

Ahora usaremos la demo de React (`demos/sourcemaps-app`), que está configurada con **Source Maps**. Esto permite al agente mapear el código minificado de producción con el código fuente original.

## Paso 1: Levantar la demo de React

```bash
cd demos/sourcemaps-app && npm install && npm run build && npm run preview
```

_Abre http://localhost:4173_

---

## ⚡ Activar las Reglas del Agente

Este es el momento clave. Hasta ahora el agente ha trabajado **sin instrucciones específicas** — lo has visto operar en bruto. Ahora le darás el contexto que necesita y observarás la diferencia en su comportamiento.

Ejecuta el comando de tu herramienta desde la **raíz del proyecto**:

| Herramienta | Acción |
|---|---|
| **Gemini CLI** | `mv _GEMINI.md GEMINI.md` |
| **Claude Code** | `mv _CLAUDE.md CLAUDE.md` |
| **Codex CLI** | `mv _AGENTS.md AGENTS.md` |
| **Cursor** | Cursor Settings → Rules → Activar `_webperf-workshop` |

> **¿Qué cambia a partir de ahora?**
> - El agente explica qué herramienta MCP va a usar y por qué, antes de llamarla
> - Los hallazgos siempre incluyen: archivo, línea exacta y duración de la tarea
> - El agente espera una **Directiva** explícita antes de modificar cualquier archivo
>
> Compara las respuestas de este ejercicio con las del Ejercicio 2. La diferencia de comportamiento es la lección.

---

## Paso 2: Análisis con Source Maps

Pide al agente:

> "Navega a http://localhost:4173. Realiza un perfil de performance. Identifica qué archivo y línea de código está bloqueando el hilo principal. Usa el MCP para leer los Source Maps."

### El Resultado

El agente ahora te dirá:
"El bloqueo está en `App.tsx`, línea 12, dentro del `useEffect`."

**Reflexión**:

- Ya no es una función `a()`. Es el código real.
- El agente puede leer el contenido de ese archivo porque tiene acceso a tu disco.

> ‼️ No es buena idea tener los Source Maps expuestos en producción. Los podemos exponer bajo VPN, lo que nos facilita el trabajo, sin exponer nuestro código fuente.

---

En el siguiente paso, no solo identificaremos el problema, sino que dejaremos que el agente lo **solucione automáticamente** y prepare una PR.
