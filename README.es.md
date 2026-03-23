# Workshop: Web Performance Debugging with Gemini + Chrome DevTools MCP

![Build [>] debug & deploy with AI](./assets/geminicli.png)

<div align="center">

[English](./README.md) · [Català](./README.cat.md)

</div>

Aprende a diagnosticar y resolver problemas de rendimiento web utilizando [Google Gemini](https://geminicli.com/) y [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp).

## Agenda

- **1**: Introducción y Anatomía del MCP (Herramientas expuestas al LLM).
- **2**: Configuración de Gemini + Chrome DevTools MCP.
- **3**: **Ejercicio 1**: Análisis Manual. Detectando problemas de rendimiento sin ayuda de la IA.
- **4**: **Ejercicio 2**: El muro del código minificado. Usando MCP en entornos de producción (sin Source Maps).
- **5**: **Ejercicio 3**: Del Trace al Código. Uso de Source Maps para identificar el problema exacto.
- **6**: **Ejercicio 4**: Automatización Total. Rama, Commit y PR con el fix de rendimiento.
- **7**: **Ejercicio 5**: Análisis Profundo y SKILLs Externas. Conocimiento experto y mejores prácticas de Vercel/Next.js.
- **8**: Q&A y Workflows aplicables a proyectos reales.

## Estructura del Repositorio

- `docs/`: Guías de instalación, conceptos técnicos, glosario (`reference.es.md`) y flujos avanzados (`workflows.es.md`).
- `exercises/`: Guías paso a paso para cada una de las fases del workshop.
  - `01-manual-analysis/`: Análisis tradicional sin ayuda de IA.
  - `02-mcp-minified/`: Uso de MCP en entornos de producción (código ofuscado).
  - `03-sourcemaps/`: Mapeo al código fuente original.
  - `04-git-workflow/`: Automatización de arreglos con ramas y commits.
  - `05-deep-analysis/`: Análisis experto con SKILLs de Vercel en Next.js.
- `demos/`: Proyectos de ejemplo con cuellos de botella intencionados.
  - `performance-lab/`: Proyecto HTML/JS básico (LCP y Long Tasks).
  - `sourcemaps-app/`: App Vite/React para debugging con Source Maps.
  - `nextjs-performance-app/`: App Next.js para análisis estático y mejores prácticas.

## Requisitos Previos

1.  **Google Gemini** (o un cliente compatible con MCP).
2.  **Node.js** instalado para ejecutar el servidor MCP y las demos.
3.  Conocimientos básicos de **Chrome DevTools** y **Core Web Vitals**.

## Instalación y Configuración

Consulta la guía detallada en [docs/setup.md](docs/setup.md) para comenzar.

## Sobre mí

[![Joan Leon](./assets/about.webp)](https://slides.com/joanleon/about)
