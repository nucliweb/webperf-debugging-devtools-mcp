# Ejercicio 4: Automatización Total. Rama, Commit y PR.

Ahora que el agente sabe exactamente qué está fallando, vamos a pedirle que lo arregle siguiendo nuestro flujo de trabajo de Git.

## Requisitos

[GitHub CLI](https://cli.github.com/) para poder crear la Pull Request

## Paso 1: Configuración

Asegúrate de estar en una rama limpia (`git checkout -b workshop-start`).

## Paso 2: El Fix Autónomo

Pide al agente lo siguiente:

> "He visto que el archivo `demos/sourcemaps-app/src/App.tsx` tiene un bloqueo en el `useEffect`. Crea una nueva rama llamada `fix/perf-app-lag`, soluciona el problema de rendimiento, haz el commit, Pull Request y describe el cambio. Añade una etiqueta `webperf-fix` a la PR."

### Lo que el agente hará:

1. Creará una rama de git.
2. Arreglará el código (ej. eliminando el loop innecesario).
3. Hará el `git commit`, `git push` y PR (necesitará `GitHub CLI`).
4. Te pedirá que revises la solución.

**Reflexión**:

- Hemos pasado de detectar el problema a solucionarlo sin salir de la terminal.
- Podemos usar las Pull Requests para tener un histórico de las mejoras de rendimiento.

---

En el último paso, veremos cómo hacer análisis profundo directamente sobre el código.
