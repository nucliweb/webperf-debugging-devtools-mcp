# Ejercicio 3: Del Trace al Código. Uso de Source Maps.

Ahora usaremos la demo de React (`demos/sourcemaps-app`), que está configurada con **Source Maps**. Esto permite a Gemini mapear el código minificado de producción con el código fuente original.

## Paso 1: Levantar la demo de React

```bash
cd demos/sourcemaps-app && npm install && npm run build && npm run preview
```

_Abre http://localhost:4173_

## Paso 2: Análisis con Source Maps

Pide a Gemini:

> "Navega a http://localhost:4173. Realiza un perfil de performance. Identifica qué archivo y línea de código está bloqueando el hilo principal. Usa el MCP para leer los Source Maps."

### El Resultado

Gemini ahora te dirá:
"El bloqueo está en `App.tsx`, línea 12, dentro del `useEffect`."

**Reflexión**:

- Ya no es una función `a()`. Es el código real.
- Gemini puede leer el contenido de ese archivo porque tiene acceso a tu disco.

> ‼️ No es buena idea tener los Source Maps expuestos en producción. Los podemos exponer bajo VPN, lo que nos facilita el trabajo, sin exponer nuestro código fuente.

---

En el siguiente paso, no solo identificaremos el problema, sino que dejaremos que Gemini lo **solucione automáticamente** y prepare una PR.
