# Exercici 3: Del Trace al Codi. Ús de Source Maps.

Ara usarem la demo de React (`demos/sourcemaps-app`), que està configurada amb **Source Maps**. Això permet a Gemini mapejar el codi minificat de producció amb el codi font original.

## Pas 1: Aixecar la demo de React

```bash
cd demos/sourcemaps-app && npm install && npm run build && npm run preview
```

_Obre http://localhost:4173_

## Pas 2: Anàlisi amb Source Maps

Demana a Gemini:

> "Navega a http://localhost:4173. Realitza un perfil de performance. Identifica quin arxiu i línia de codi està bloquejant el fil principal. Usa el MCP per a llegir els Source Maps."

### El Resultat

Gemini ara et dirà:
"El bloqueig està a `App.tsx`, línia 12, dins del `useEffect`."

**Reflexió**:

- Ja no és una funció `a()`. És el codi real.
- Gemini pot llegir el contingut d'aquest arxiu perquè té accés al teu disc.

> ‼️ No és bona idea tenir els Source Maps exposats a producció. Els podem exposar sota VPN. la qual cosa ens facilita la feina, sense exposar el nostre codi font.

---

En el següent pas, no només identificarem el problema, sinó que deixarem que Gemini el **solucioni automàticament** i prepari una PR.
