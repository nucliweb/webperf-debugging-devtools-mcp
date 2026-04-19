# Exercici 2: El mur del codi minificat. Usant MCP en entorns de producció.

Ara usarem el **Chrome DevTools MCP** perquè l'agent analitzi la demo, però simularem un entorn de producció on el codi està minificat.

## Pas 1: Configuració

Assegura't de tenir el MCP configurat (veure [docs/setup.md](../../docs/setup.md)).

## Pas 2: Anàlisi amb MCP

Demana a l'agent el següent:
> "Obre http://localhost:3000. Inicia una traça de performance, prem el botó 'Executar tasca pesada' i atura la traça. Identifica quina funció està causant el Long Task."

### El Problema
L'agent et dirà alguna cosa com: "La funció `a()` a `script.min.js` ha trigat 2000ms".

**Reflexió**: 
- Saps què fa la funció `a()`? No.
- Pots trobar-la en el teu codi font original? És difícil.
- En producció, els noms de variables i funcions s'ofusquen per a estalviar espai.

---

En el següent exercici, veurem com els **Source Maps** eliminen aquest mur.
