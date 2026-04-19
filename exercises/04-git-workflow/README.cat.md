# Exercici 4: Automatització Total. Rama, Commit i PR.

Ara que l'agent sap exactament què està fallant, li demanarem que ho arregli seguint el nostre flux de treball de Git.

## Requisits

[GitHub CLI](https://cli.github.com/) per a poder crear la Pull Request

## Pas 1: Configuració

Assegura't d'estar en una rama neta (`git checkout -b workshop-start`).

## Pas 2: El Fix Autònom

Demana a l'agent el següent:

> "He vist que l'arxiu `demos/sourcemaps-app/src/App.tsx` té un bloqueig al `useEffect`. Crea una nova rama anomenada `fix/perf-app-lag`, soluciona el problema de rendiment, fes el commit, Pull Request i descriu el canvi. Afegeix una etiqueta `webperf-fix` a la PR."

### El que l'agent farà:

1. Crearà una rama de git.
2. Arreglarà el codi (ex. eliminant el loop innecessari).
3. Farà el `git commit`, `git push` i PR (necessitarà `GitHub CLI`).
4. Et demanarà que revisis la solució.

**Reflexió**:

- Hem passat de detectar el problema a solucionar-lo sense sortir de la terminal.
- Podem usar les Pull Requests per a tenir un històric de les millores de rendiment.

---

En l'últim pas, veurem com fer anàlisi profunda directament sobre el codi.
