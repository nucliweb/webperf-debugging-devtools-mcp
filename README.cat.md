# Workshop: Web Performance Debugging with Gemini + Chrome DevTools MCP

![Build [>] debug & deploy with AI](./assets/geminicli.png)

Aprèn a diagnosticar i resoldre problemes de rendiment web utilitzant [Google Gemini](https://geminicli.com/) i [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp).

## Agenda

- **1**: Introducció i Anatomia del MCP (Eines exposades al LLM).
- **2**: Configuració de Gemini + Chrome DevTools MCP.
- **3**: **Exercici 1**: Anàlisi Manual. Detectant problemes de rendiment sense ajuda de la IA.
- **4**: **Exercici 2**: El mur del codi minificat. Usant MCP en entorns de producció (sense Source Maps).
- **5**: **Exercici 3**: Del Trace al Codi. Ús de Source Maps per identificar el problema exacte.
- **6**: **Exercici 4**: Automatització Total. Rama, Commit i PR amb el fix de rendiment.
- **7**: **Exercici 5**: Anàlisi Profunda i SKILLs Externes. Coneixement expert i millors pràctiques de Vercel/Next.js.
- **8**: Q&A i Workflows aplicables a projectes reals.

## Estructura del Repositori

- `docs/`: Guies d'instal·lació, conceptes tècnics, glossari (`reference.md`) i fluxos avançats (`workflows.md`).
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

1.  **Google Gemini** (o un client compatible amb MCP).
2.  **Node.js** instal·lat per a executar el servidor MCP i les demos.
3.  Coneixements bàsics de **Chrome DevTools** i **Core Web Vitals**.

## Instal·lació i Configuració

Consulta la guia detallada a [docs/setup.md](docs/setup.md) per a començar.
