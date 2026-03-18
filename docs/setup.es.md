# Guía de Instalación y Configuración

Para utilizar el **Chrome DevTools MCP** con **Google Gemini**, sigue los pasos a continuación.

## 1. Requisitos de Software

- **[Node.js](https://nodejs.org/) v20.19 o superior** (LTS recomendado).
- **[Google Chrome](https://www.google.com/chrome/)** (versión estable o superior).
- **[Google Gemini CLI](https://geminicli.com/)** instalado.

## 2. Instalación de Chrome DevTools MCP

El Chrome DevTools MCP permite que Gemini se comunique con el navegador.

### Instalación y Configuración con Gemini CLI (Recomendado)

Si usas el **Gemini CLI**, puedes instalar y configurar el servidor directamente con este comando:

```bash
gemini mcp add chrome-devtools npx -y chrome-devtools-mcp@latest --autoConnect --port=9222
```

#### ¿Dónde se guarda esta configuración?

El CLI de Gemini almacena esta información en un archivo JSON global. En macOS y Linux, la ruta es:
`~/.gemini/settings.json`

_(Al ejecutar el comando anterior, el CLI actualizará automáticamente la sección `mcpServers` de ese archivo)._

### Configuración manual (Otros clientes)

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["-y", "chrome-devtools-mcp@latest", "--autoConnect", "--port=9222"]
    }
  }
}
```

> **Nota para otros clientes**: Dependiendo de tu editor (Cursor, VS Code, Claude Desktop), el archivo de configuración puede variar (ej. `claude_desktop_config.json`). Consulta la documentación específica de tu herramienta.

### Flags:

- `--autoConnect`: Indica al servidor MCP que intente conectarse automáticamente a una instancia de Chrome que ya esté abierta.
- `--port=9222`: Especifica el puerto de depuración remota (`remote-debugging-port`) en el que Chrome está escuchando. Es el puerto estándar utilizado para la comunicación con herramientas externas.

## 3. Instalación de SKILLs (WebPerf Snippets)

Las [WebPerf SKILLs](https://github.com/nucliweb/webperf-snippets?tab=readme-ov-file#agent-skills-for-ai-coding-assistants) son colecciones de snippets inteligentes que automatizan el análisis.

### Instalación recomendada

Instala el paquete completo de `webperf-snippets` directamente:

```bash
npx skills add nucliweb/webperf-snippets
```

Esto instalará las habilidades en tu directorio de configuración global de IA (normalmente `~/.claude/skills/` o similar para Gemini).

## 4. Modos de Ejecución

El servidor MCP puede funcionar de dos maneras principales:

### Modo Headless (Por defecto)

Si **no** incluyes los flags `--autoConnect` y `--port`, el servidor MCP lanzará su propia instancia de Chrome en segundo plano (invisible).

- **Ideal para:** Automatización, CI/CD y ejecuciones rápidas donde no necesitas ver el navegador.
- **Privacidad:** No utiliza tus cookies ni sesiones abiertas en tu navegador personal.

### Modo Visible (Debugging y Aprendizaje)

Para ver qué está haciendo la IA en el navegador (útil para este workshop), necesitas habilitar el puerto de depuración remota en Chrome.

- **Ideal para:** Aprender cómo interactúa la IA, debuguear visualmente y aprovechar sesiones/cookies ya abiertas.

#### Opción A: Desde la terminal (Recomendado)

Cierra Chrome completamente e inícialo desde la terminal según tu sistema operativo:

- **macOS:**
  ```bash
  /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
  ```
- **Windows:**
  ```powershell
  & "C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222
  ```
- **Linux:**
  ```bash
  google-chrome --remote-debugging-port=9222
  ```

#### Opción B: Desde la interfaz de Chrome (Si tu versión lo permite)

1. Abre Chrome y navega a `chrome://inspect/#remote-debugging`.
2. Marca la casilla **"Allow remote debugging for this browser instance"**.
3. Verás que indica "Server running at: 127.0.0.1:9222".

![chrome://inspect/#remote-debugging](images/chrome-remote-debugging.png)

#### Conexión

El MCP se conectará automáticamente si has añadido los flags `--autoConnect` y `--port=9222` en tu configuración.

## 5. Verificación

Una vez configurado todo, puedes preguntar a Gemini:

> "¿Puedes abrir la web https://web.dev y decirme cuál es el valor de LCP usando tus habilidades de webperf?"

Si la configuración es correcta, Gemini usará el MCP para navegar y los snippets de `webperf-snippets` para darte un diagnóstico técnico.
