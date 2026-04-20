# Workshop: Web Performance Debugging with AI Agents + Chrome DevTools MCP

![Build [>] debug & deploy with AI](./assets/image.webp)

<div align="center">

[English](./README.md) · [Español](./README.es.md)

</div>

Aprèn a diagnosticar i resoldre problemes de rendiment web utilitzant agents d'IA i [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp).

## Agenda

- **1**: [Introducció i Anatomia del MCP (Eines exposades al LLM)](docs/anatomy-mcp.cat.md).
- **2**: [Configuració de l'Agent d'IA + Chrome DevTools MCP](docs/setup.cat.md).
- **3**: **Exercici 1**: [Anàlisi Manual. Detectant problemes de rendiment sense ajuda de la IA](exercises/01-manual-analysis/README.cat.md).
- **4**: **Exercici 2**: [El mur del codi minificat. Usant MCP en entorns de producció (sense Source Maps)](exercises/02-mcp-minified/README.cat.md).
- **5**: **Exercici 3**: [Del Trace al Codi. Ús de Source Maps per identificar el problema exacte](exercises/03-sourcemaps/README.cat.md).
- **6**: **Exercici 4**: [Automatització Total. Rama, Commit i PR amb el fix de rendiment](exercises/04-git-workflow/README.cat.md).
- **7**: **Exercici 5**: [Anàlisi Profunda i SKILLs Externes. Coneixement expert i millors pràctiques de Vercel/Next.js](exercises/05-deep-analysis/README.cat.md).
- **8**: Q&A i [Workflows aplicables a projectes reals](docs/workflows.cat.md).

## Estructura del Repositori

- `docs/`: Guies d'instal·lació, conceptes tècnics, glossari (`reference.cat.md`) i fluxos avançats (`workflows.cat.md`).
- `exercises/`: Guies pas a pas per a cadascuna de les fases del workshop.
  - `01-manual-analysis/`: Anàlisi tradicional sense ajuda de IA.
  - `02-mcp-minified/`: Ús de MCP en entorns de producció (codi ofuscat).
  - `03-sourcemaps/`: Mapeig al codi font original.
  - `04-git-workflow/`: Automatització d'arranjaments amb rames i commits.
  - `05-deep-analysis/`: Anàlisi expert amb SKILLs de Vercel en Next.js.
- `demos/`: Projectes d'exemple amb colls d'ampolla intencionats.
  - `performance-lab/`: Projecte HTML/JS bàsic (LCP i Long Tasks).
  - `sourcemaps-app/`: App Vite/React per a debugging amb Source Maps.
  - `nextjs-performance-app/`: App Next.js per a anàlisi estàtica i millors pràctiques.

## Requisits Previs

1. **Un agent d'IA amb suport MCP**: [Gemini CLI](https://geminicli.com/), [Claude Code](https://claude.ai/code), [Codex CLI](https://github.com/openai/codex), o [Cursor](https://cursor.sh/).
2. **Node.js** instal·lat per a executar el servidor MCP i les demos.
3. Coneixements bàsics de **Chrome DevTools** i **Core Web Vitals**.

## Instal·lació i Configuració

Consulta la guia detallada a [docs/setup.md](docs/setup.md) per a començar.

## Sobre mi

[![Joan Leon](./assets/about.webp)](https://slides.com/joanleon/about)
