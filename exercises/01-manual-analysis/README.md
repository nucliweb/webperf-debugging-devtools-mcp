# Exercise 1: Manual Analysis. Detecting issues without AI help.

In this first step, we will analyze the local demo using the traditional method (without Gemini or MCP).

## Step 1: Run the demo

Run the following command in the terminal:

```bash
npx -y serve demos/performance-lab
```

_Open http://localhost:3000_

## Step 2: Manual Analysis

1. Open **Chrome DevTools** (F12 or `Cmd+Option+i` on Mac).
2. Go to the **Performance** panel.
3. Start recording (Shortcuts: `Ctrl+E` on Windows/Linux or `Cmd+E` on Mac).
4. Click the "Run heavy task" button on the page.
5. Stop recording (Shortcuts: `Ctrl+E` or `Cmd+E` again).
6. **Identify**:
   - What happened on the main thread?
   - How long was the browser blocked?
   - Can you tell exactly which function in the code caused this? (Difficult if you don't know the code beforehand).

> **Reflection**: We could download the **Performance Trace** to provide it as context to the agent, but the Trace file is very heavy. Example: `Trace-20260318T095458.json`, **5.5MB** and over **25K** lines of code. **This can overflow our context window**.

---

In the next exercise, we will use MCP to get more information, but we will encounter a new obstacle: minified code.
