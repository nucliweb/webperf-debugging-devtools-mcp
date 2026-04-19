# Exercici 3: Del Trace al Codi. Ús de Source Maps.

Ara usarem la demo de React (`demos/sourcemaps-app`), que està configurada amb **Source Maps**. Això permet a l'agent mapejar el codi minificat de producció amb el codi font original.

## Pas 1: Aixecar la demo de React

```bash
cd demos/sourcemaps-app && npm install && npm run build && npm run preview
```

_Obre http://localhost:4173_

---

## ⚡ Activar les Regles de l'Agent

Aquest és el moment clau. Fins ara l'agent ha treballat **sense instruccions específiques** — l'has vist operar en brut. Ara li donaràs el context que necessita i observaràs la diferència en el seu comportament.

Executa la comanda de la teva eina des de l'**arrel del projecte**:

| Eina | Acció |
|---|---|
| **Gemini CLI** | `mv _GEMINI.md GEMINI.md` |
| **Claude Code** | `mv _CLAUDE.md CLAUDE.md` |
| **Codex CLI** | `mv _AGENTS.md AGENTS.md` |
| **Cursor** | Cursor Settings → Rules → Activar `_webperf-workshop` |

> **Què canvia a partir d'ara?**
> - L'agent explica quina eina MCP farà servir i per què, abans de cridar-la
> - Els resultats sempre inclouen: arxiu, línia exacta i durada de la tasca
> - L'agent espera una **Directiva** explícita abans de modificar cap arxiu
>
> Compara les respostes d'aquest exercici amb les de l'Exercici 2. La diferència de comportament és la lliçó.

---

## Pas 2: Anàlisi amb Source Maps

Demana a l'agent:

> "Navega a http://localhost:4173. Realitza un perfil de performance. Identifica quin arxiu i línia de codi està bloquejant el fil principal. Usa el MCP per a llegir els Source Maps."

### El Resultat

L'agent ara et dirà:
"El bloqueig està a `App.tsx`, línia 12, dins del `useEffect`."

**Reflexió**:

- Ja no és una funció `a()`. És el codi real.
- L'agent pot llegir el contingut d'aquest arxiu perquè té accés al teu disc.

> ‼️ No és bona idea tenir els Source Maps exposats a producció. Els podem exposar sota VPN, la qual cosa ens facilita la feina, sense exposar el nostre codi font.

---

En el següent pas, no només identificarem el problema, sinó que deixarem que l'agent el **solucioni automàticament** i prepari una PR.
