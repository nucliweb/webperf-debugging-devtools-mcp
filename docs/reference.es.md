# Referencia Rápida: Conceptos de Ecosistema de IA

En el mundo de los Agentes de IA y el desarrollo asistido, a menudo se confunden varios términos. Esta guía sirve como referencia rápida para el workshop.

## Glosario de Conceptos

### 1. Model Context Protocol (MCP)

Es la **capa de transporte** o conexión. Define cómo una IA puede hablar con una herramienta externa (como Chrome, una base de datos o el sistema de archivos).

- **Enfoque:** Conectividad y seguridad.
- **Link Oficial:** [modelcontextprotocol.io](https://modelcontextprotocol.io/)

### 2. Agent Skills

Es el **conocimiento experto** o "saber hacer". Son paquetes que contienen código (scripts), instrucciones de flujo de trabajo y lógica de decisión para resolver problemas específicos.

- **Enfoque:** Capacidades y lógica de negocio.
- **Link Oficial:** [agentskills.io](https://agentskills.io/)

### 3. Rules (Project / Global Rules)

Son **instrucciones de comportamiento** y estilo. Archivos como `_GEMINI.md`, `_CLAUDE.md`, `_AGENTS.md` o `.cursor/rules/` que dictan cómo debe responder el agente, qué estándares de código seguir o qué evitar.

- **Enfoque:** Guías de estilo, normas de seguridad y contexto local.

### 4. Agents (Custom / Sub-agents)

Son las **entidades ejecutoras**. Un agente es la IA configurada con acceso a herramientas y reglas para realizar tareas. Los "Sub-agentes" son agentes especializados a los que el agente principal delega trabajo (ej. un agente experto en testing).

- **Enfoque:** Ejecución de tareas y autonomía.

### 5. Plugins / Extensions

A menudo se usan de forma intercambiable con "MCP Servers". Son complementos que añaden capacidades específicas a una plataforma (como Gemini CLI, Claude Code o Cursor).

- **Enfoque:** Extensibilidad de la plataforma.

### 6. Commands

Son las **instrucciones directas** que el usuario da a la CLI o al Agente (ej. `/help`, `/plugin`, `/mcp`). Son acciones predefinidas que no requieren razonamiento de IA para ejecutarse.

- **Enfoque:** Control directo y utilidades.

### 7. Tools / Function Calling

Son las **capacidades atómicas** que el LLM puede invocar. Un MCP Server expone "Tools" (herramientas) como `evaluate_script` o `take_screenshot`.

- **Enfoque:** Capacidades de acción del modelo.

### 8. Hooks

Son **fuentes de contexto automático**. Permiten inyectar información externa (como el estado de un servidor, logs de errores o datos de métricas en tiempo real) directamente en la ventana de contexto de la IA sin intervención del usuario.

- **Enfoque:** Enriquecimiento automático del contexto.

## Jerarquía del Ecosistema

```mermaid
mindmap
  root((Agente de IA))
    Conectividad
      MCP Server
      Tools/Function Calling
    Conocimiento
      Agent Skills
      Snippets JS
      Workflows
    Comportamiento
      Project Rules
      Global Rules
    Interfaz
      Commands
      Extensions
    Contexto
      Hook Context
      User Prompt
```

---

## Tabla Comparativa Ampliada

| Concepto     | ¿Qué es?                 | Ejemplo Real                                  |
| :----------- | :----------------------- | :-------------------------------------------- |
| **MCP**      | El "cable" de conexión   | `chrome-devtools-mcp`                         |
| **Skills**   | La "titulación experta"  | `webperf-snippets`                            |
| **Rules**    | El "manual de conducta"  | `_GEMINI.md`, `_CLAUDE.md`, `_AGENTS.md`      |
| **Agents**   | El "trabajador"          | Gemini / Claude / Codex / Cursor              |
| **Hooks**    | "Datos automáticos"      | Contexto de métricas                          |
| **Plugins**  | El "accesorio"           | Extensiones MCP                               |
| **Commands** | La "orden directa"       | `/help`, `/mcp add`                           |
| **Tools**    | El "destornillador"      | `evaluate_script`                             |

---

## ¿Cómo interactúan en este Workshop?

1.  Usamos el **MCP** para que el agente pueda "ver" y "utilizar" Chrome DevTools.
2.  Instalamos las **Skills** de `webperf-snippets` para que el agente sepa _qué buscar_ y _cómo analizar_ el rendimiento web.
3.  Definimos **Reglas** para que el agente siempre reporte el LCP con archivo, línea y duración — y espere una Directiva antes de modificar archivos.
4.  El **Agente** (Gemini, Claude, Codex o Cursor) orquestará todo lo anterior para darnos la solución.
