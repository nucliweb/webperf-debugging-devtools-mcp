# Exercise 3: From Trace to Code. Using Source Maps.

Now we will use the React demo (`demos/sourcemaps-app`), which is configured with **Source Maps**. This allows Gemini to map the minified production code back to the original source code.

## Step 1: Run the React demo

```bash
cd demos/sourcemaps-app && npm install && npm run build && npm run preview
```

_Open http://localhost:4173_

## Step 2: Analysis with Source Maps

Ask Gemini:

> "Navigate to http://localhost:4173. Perform a performance profile. Identify which file and line of code is blocking the main thread. Use MCP to read the Source Maps."

### The Result

Gemini will now tell you:
"The block is in `App.tsx`, line 12, inside the `useEffect`."

**Reflection**:

- It's no longer a function `a()`. It's the actual code.
- Gemini can read the content of that file because it has access to your disk.

> ‼️ It is not a good idea to have Source Maps exposed in production. We can expose them behind a VPN, which makes our work easier without exposing our source code.

---

In the next step, we will not only identify the problem but also let Gemini **solve it automatically** and prepare a PR.
