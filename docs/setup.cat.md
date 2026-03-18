# Guia d'Instal·lació i Configuració

Per a utilitzar el **Chrome DevTools MCP** amb **Google Gemini**, segueix els passos a continuació.

## 1. Requisits de Programari

- **[Node.js](https://nodejs.org/) v20.19 o superior** (LTS recomanat).
- **[Google Chrome](https://www.google.com/chrome/)** (versió estable o superior).
- **[Google Gemini CLI](https://geminicli.com/)** instal·lat.

## 2. Instal·lació de Chrome DevTools MCP

El Chrome DevTools MCP permet que Gemini es comuniqui amb el navegador.

### Instal·lació i Configuració amb Gemini CLI (Recomanat)

Si uses el **Gemini CLI**, pots instal·lar i configurar el servidor directament amb aquest comandament:

```bash
gemini mcp add chrome-devtools npx -y chrome-devtools-mcp@latest --autoConnect --port=9222
```

#### On es guarda aquesta configuració?

El CLI de Gemini emmagatzema aquesta informació en un arxiu JSON global. En macOS i Linux, la ruta és:
`~/.gemini/settings.json`

_(En executar el comandament anterior, el CLI actualitzarà automàticament la secció `mcpServers` d'aquest arxiu)._

### Configuració manual (Altres clients)

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

> **Nota per a altres clients**: Depenent del teu editor (Cursor, VS Code, Claude Desktop), l'arxiu de configuració pot variar (ex. `claude_desktop_config.json`). Consulta la documentació específica de la teva eina.

### Flags:

- `--autoConnect`: Indica al servidor MCP que intenti connectar-se automàticament a una instància de Chrome que ja estigui oberta.
- `--port=9222`: Especifica el port de depuració remota (`remote-debugging-port`) en el qual Chrome està escoltant. És el port estàndard utilitzat per a la comunicació amb eines externes.

## 3. Instal·lació de SKILLs (WebPerf Snippets)

Les [WebPerf SKILLs](https://github.com/nucliweb/webperf-snippets?tab=readme-ov-file#agent-skills-for-ai-coding-assistants) són col·leccions de snippets intel·ligents que automatitzen l'anàlisi.

### Instal·lació recomanada

Instal·la el paquet complet de `webperf-snippets` directament:

```bash
npx skills add nucliweb/webperf-snippets
```

Això instal·larà les habilitats en el teu directori de configuració global de IA (normalment `~/.claude/skills/` o similar per a Gemini).

## 4. Modes d'Execució

El servidor MCP pot funcionar de dues maneres principals:

### Mode Headless (Per defecte)

Si **no** inclous els flags `--autoConnect` i `--port`, el servidor MCP llançarà la seva pròpia instància de Chrome en segon pla (invisible).

- **Ideal per a:** Automatització, CI/CD i execucions ràpides on no necessites veure el navegador.
- **Privadesa:** No utilitza les teves cookies ni sessions obertes en el teu navegador personal.

### Mode Visible (Debugging i Aprenentatge)

Per a veure què està fent la IA al navegador (útil per a aquest workshop), necessites habilitar el port de depuració remota a Chrome.

- **Ideal per a:** Aprendre com interactua la IA, fer debugging visualment i aprofitar sessions/cookies ja obertes.

#### Opció A: Des de la terminal (Recomanat)

Tanca Chrome completament i inicia'l des de la terminal segons el teu sistema operatiu:

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

#### Opció B: Des de la interfície de Chrome (Si la teva versió ho permet)

1. Obre Chrome i navega a `chrome://inspect/#remote-debugging`.
2. Marca la casella **"Allow remote debugging for this browser instance"**.
3. Veuràs que indica "Server running at: 127.0.0.1:9222".

![chrome://inspect/#remote-debugging](images/chrome-remote-debugging.png)

#### Connexió

El MCP es connectarà automàticament si has afegit els flags `--autoConnect` i `--port=9222` en la teva configuració.

## 5. Verificació

Una vegada configurat tot, pots preguntar a Gemini:

> "Pots obrir la web https://web.dev i dir-me quin és el valor de LCP usant les teves habilitats de webperf?"

Si la configuració és correcta, Gemini usarà el MCP per a navegar i els snippets de `webperf-snippets` per a donar-te un diagnòstic tècnic.
