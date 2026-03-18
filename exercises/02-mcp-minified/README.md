# Exercise 2: The Minified Code Wall. Using MCP in production environments.

Now we are going to use the **Chrome DevTools MCP** for Gemini to analyze the demo, but we will simulate a production environment where the code is minified.

## Step 1: Configuration

Make sure you have MCP configured (see [docs/setup.md](../../docs/setup.md)).

## Step 2: Analysis with MCP

Ask Gemini the following:
> "Open http://localhost:3000. Start a performance trace, click the 'Run heavy task' button, and stop the trace. Identify which function is causing the Long Task."

### The Problem
Gemini will tell you something like: "The function `a()` in `script.min.js` took 2000ms."

**Reflection**: 
- Do you know what function `a()` does? No.
- Can you find it in your original source code? It's difficult.
- In production, variable and function names are obfuscated to save space.

---

In the next exercise, we will see how **Source Maps** remove this wall.
