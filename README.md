# Workshop: Web Performance Debugging with Gemini + Chrome DevTools MCP

![Build [>] debug & deploy with AI](./assets/geminicli.png)

<div align="center">

[Español](./README.es.md) · [Català](./README.cat.md)

</div>

Learn to diagnose and resolve web performance issues using [Google Gemini](https://geminicli.com/) and [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp).

## Agenda

- **1**: Introduction and Anatomy of the MCP (Tools exposed to the LLM).
- **2**: Gemini + Chrome DevTools MCP Configuration.
- **3**: **Exercise 1**: Manual Analysis. Detecting performance problems without AI help.
- **4**: **Exercise 2**: The Minified Code Wall. Using MCP in production environments (without Source Maps).
- **5**: **Exercise 3**: From Trace to Code. Using Source Maps to identify the exact problem.
- **6**: **Exercise 4**: Total Automation. Branch, Commit, and PR with the performance fix.
- **7**: **Exercise 5**: Deep Analysis and External SKILLs. Expert knowledge and best practices from Vercel/Next.js.
- **8**: Q&A and Workflows applicable to real projects.

## Repository Structure

- `docs/`: Installation guides, technical concepts, glossary (`reference.md`), and advanced workflows (`workflows.md`).
- `exercises/`: Step-by-step guides for each of the workshop phases.
  - `01-manual-analysis/`: Traditional analysis without AI help.
  - `02-mcp-minified/`: Using MCP in production environments (obfuscated code).
  - `03-sourcemaps/`: Mapping to the original source code.
  - `04-git-workflow/`: Automating fixes with branches and commits.
  - `05-deep-analysis/`: Expert analysis with Vercel SKILLs in Next.js.
- `demos/`: Example projects with intentional bottlenecks.
  - `performance-lab/`: Basic HTML/JS project (LCP and Long Tasks).
  - `sourcemaps-app/`: Vite/React app for debugging with Source Maps.
  - `nextjs-performance-app/`: Next.js app for static analysis and best practices.

## Prerequisites

1.  **Google Gemini** (or an MCP-compatible client).
2.  **Node.js** installed to run the MCP server and demos.
3.  Basic knowledge of **Chrome DevTools** and **Core Web Vitals**.

## Installation and Configuration

Check the detailed guide at [docs/setup.md](docs/setup.md) to get started.

## About me

[![Joan Leon](./assets/about.webp)](https://slides.com/joanleon/about)
