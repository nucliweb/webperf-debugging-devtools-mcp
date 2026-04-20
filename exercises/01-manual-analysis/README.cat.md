# Exercici 1: Anàlisi Manual. Detectant problemes sense ajuda de la IA.

En aquest primer pas, analitzarem la demo local utilitzant el mètode tradicional (sense agent de IA ni MCP).

## Pas 1: Aixecar la demo

Executa el següent comandament a la terminal:

```bash
npx -y serve demos/performance-lab
```

_Obre http://localhost:3000_

## Pas 2: Anàlisi Manual

1. Obre **Chrome DevTools** (F12 o `Cmd+Option+i` a Mac).
2. Ves al panell **Performance**.
3. Inicia la gravació (Dreceres: `Ctrl+E` a Windows/Linux o `Cmd+E` a Mac).
4. Prem el botó "Executar tasca pesada" a la pàgina.
5. Atura la gravació (Dreceres: `Ctrl+E` o `Cmd+E` de nou).
6. **Identifica**:
   - Què ha passat al fil principal?
   - Quant de temps ha estat bloquejat el navegador?
   - Pots saber exactament quina funció en el codi ha causat això? (Difícil si no coneixes el codi prèviament).

> **Reflexió**: Podríem descarregar el **Performance Trace** per a passar-lo com a context a l'agent, però l'arxiu Trace és molt pesat. Exemple: `Trace-20260318T095458.json`, **5.5MB** i més de **25K** línies de codi. **Això pot desbordar la nostra finestra de context**.

---

En el següent exercici, usarem el MCP per a obtenir més informació, però veurem un nou obstacle: el codi minificat.
