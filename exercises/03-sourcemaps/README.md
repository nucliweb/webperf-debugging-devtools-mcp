# Exercise 3: From Trace to Code. Using Source Maps.

Now we will use the React demo (`demos/sourcemaps-app`), which is configured with **Source Maps**. This allows the agent to map the minified production code back to the original source code.

## Step 1: Run the React demo

```bash
cd demos/sourcemaps-app && npm install && npm run build && npm run preview
```

_Open http://localhost:4173_

---

## ⚡ Activate the Agent Rules

This is the key moment. Up to now, the agent has been working **without any specific instructions** — you have seen it operate raw. Now you will give it the context it needs and observe the difference in behavior.

Run the command for your tool from the **project root**:

| Tool            | Action                                               |
| --------------- | ---------------------------------------------------- |
| **Gemini CLI**  | `mv _GEMINI.md GEMINI.md`                            |
| **Claude Code** | `mv _CLAUDE.md CLAUDE.md`                            |
| **Codex CLI**   | `mv _AGENTS.md AGENTS.md`                            |
| **Cursor**      | Cursor Settings → Rules → Enable `_webperf-workshop` |

> **What changes from now on?**
>
> - The agent explains which MCP tool it is calling and why, before calling it
> - Findings always include: file, exact line, and task duration
> - The agent waits for an explicit **Directive** before modifying any file
>
> Compare this exercise's responses with those from Exercise 2. The behavior difference is the lesson.

---

## Step 2: Analysis with Source Maps

Ask your agent:

> "Navigate to http://localhost:4173. Perform a performance profile. Identify which file and line of code is blocking the main thread. Use MCP to read the Source Maps."

### The Result

The agent will now tell you:
"The block is in `App.tsx`, line 12, inside the `useEffect`."

**Reflection**:

- It is no longer a function `a()`. It is the actual code.
- The agent can read the content of that file because it has access to your disk.

> ‼️ It is not a good idea to have Source Maps exposed in production. We can expose them behind a VPN, which makes our work easier without exposing our source code.

---

In the next step, we will not only identify the problem but also let the agent **solve it automatically** and prepare a PR.
