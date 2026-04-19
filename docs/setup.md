# Installation and Configuration Guide

To use **Chrome DevTools MCP** with your AI agent, follow the steps below.

## 1. Software Requirements

- **[Node.js](https://nodejs.org/) v20.19 or higher** (LTS recommended).
- **[Google Chrome](https://www.google.com/chrome/)** (stable version or higher).
- **Your AI agent** — install one of the following:

| Agent | Install |
|---|---|
| [Gemini CLI](https://geminicli.com/) | `npm install -g @google/gemini-cli` |
| [Claude Code](https://claude.ai/code) | `npm install -g @anthropic-ai/claude-code` |
| [Codex CLI](https://github.com/openai/codex) | `npm install -g @openai/codex` |
| [Cursor](https://cursor.sh/) | Download and install the desktop app |

## 2. Chrome DevTools MCP Installation

The Chrome DevTools MCP allows your agent to communicate with the browser. Choose the method for your tool.

### Gemini CLI

```bash
gemini mcp add chrome-devtools npx -y chrome-devtools-mcp@latest --autoConnect --port=9222
```

Configuration saved to `~/.gemini/settings.json`.

### Claude Code

```bash
claude mcp add chrome-devtools -- npx -y chrome-devtools-mcp@latest --autoConnect --port=9222
```

To install globally (available in all projects):

```bash
claude mcp add --scope user chrome-devtools -- npx -y chrome-devtools-mcp@latest --autoConnect --port=9222
```

Configuration saved to `.mcp.json` (project) or `~/.claude/settings.json` (user).

### Cursor

Go to **Settings → MCP** and add a new server, or edit `~/.cursor/mcp.json` directly:

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

### Codex CLI

Edit your Codex configuration file (see [Codex CLI documentation](https://github.com/openai/codex) for the exact path):

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

### Manual configuration (any other MCP-compatible client)

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

> **Note**: Depending on your editor or client, the configuration file path may vary. Consult your tool's specific documentation.

### Flags

- `--autoConnect`: Tells the MCP server to automatically connect to an already open Chrome instance.
- `--port=9222`: Specifies the remote debugging port that Chrome is listening on. This is the standard port used for communication with external tools.

## 3. SKILLs Installation (WebPerf Snippets)

[WebPerf SKILLs](https://github.com/nucliweb/webperf-snippets?tab=readme-ov-file#agent-skills-for-ai-coding-assistants) are collections of smart snippets that automate analysis.

### Recommended installation

Install the full `webperf-snippets` package directly:

```bash
npx skills add nucliweb/webperf-snippets
```

This will install the skills in your global AI configuration directory (usually `~/.claude/skills/`, `~/.gemini/skills/`, or similar depending on your agent).

## 4. Execution Modes

The MCP server can work in two main ways:

### Headless Mode (Default)

If you **don't** include the `--autoConnect` and `--port` flags, the MCP server will launch its own Chrome instance in the background (invisible).

- **Ideal for:** Automation, CI/CD, and fast executions where you don't need to see the browser.
- **Privacy:** Does not use your cookies or open sessions in your personal browser.

### Visible Mode (Debugging and Learning)

To see what the agent is doing in the browser (useful for this workshop), you need to enable the remote debugging port in Chrome.

- **Ideal for:** Learning how the agent interacts, visual debugging, and taking advantage of already open sessions/cookies.

#### Option A: From the terminal (Recommended)

Close Chrome completely and start it from the terminal according to your operating system:

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

#### Option B: From the Chrome interface (If your version allows it)

1. Open Chrome and navigate to `chrome://inspect/#remote-debugging`.
2. Check the box **"Allow remote debugging for this browser instance"**.
3. You will see it indicates "Server running at: 127.0.0.1:9222".

![chrome://inspect/#remote-debugging](images/chrome-remote-debugging.png)

#### Connection

The MCP will automatically connect if you have added the `--autoConnect` and `--port=9222` flags in your configuration.

## 5. Verification

Once everything is configured, ask your agent:

> "Can you open the website https://web.dev and tell me what the LCP value is using your webperf skills?"

If the configuration is correct, the agent will use the MCP to navigate and the `webperf-snippets` snippets to give you a technical diagnosis.
