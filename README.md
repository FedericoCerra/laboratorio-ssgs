# Labo-String: CLI per Utilità su Stringhe

Questo progetto fornisce una base per una semplice Command-Line Interface (CLI) Node.js che offre diverse utilità per la manipolazione di stringhe.

## Autore
Federico Cerra
https://github.com/FedericoCerra

## Funzionalità Principali (Previste)

* Inversione di una stringa.
* Verifica se una stringa è palindroma.
* Troncamento di una stringa a una lunghezza massima specificata.
* Conteggio delle occorrenze di ciascun carattere in una stringa.

## Requisiti

Node.js >= 18 (si consiglia l'ultima LTS attualmente supportata)

npm (incluso con Node.js)

## Installazione

1. Clona il repository:
   ```bash
   git clone https://github.com/FedericoCerra/laboratorio-ssgs
   ```
2. Naviga nella cartella del progetto:
   ```bash
   cd laboratorio-ssgs
   ```
3. Installa le dipendenze:
   ```bash
   npm install
   ```

## Utilizzo

Per utilizzare il progetto, esegui il file `index.js` nella root con Node.js:

```bash
node bin/index.js
```
Oppure esegui all'interno della repo del progetto

```bash
npm start
```

# Tests

Per eseguire i test:

## setup di Jest

installa Jest con

```bash
npm install --save-dev jest
```
inizializzalo sul tuo progetto con

```bash
npx jest --init
```

## Esecuzione test

Per eseguire i test automatizzati, utilizza il comando:

```bash
npm test
```
# Continuous Integration (CI)

Questo progetto utilizza GitHub Actions per eseguire automaticamente i test e generare un report di code coverage. Il workflow è configurato per attivarsi nei seguenti casi:
- Quando viene effettuato un push sul branch `main`.
- Quando viene aperta una pull request verso il branch `main`.
- Quando il workflow viene avviato manualmente tramite l'interfaccia di GitHub (per comodità).

### Funzionalità del Workflow
1. **Installazione delle dipendenze**: Utilizza il comando `npm ci` per installare le dipendenze del progetto.
2. **Esecuzione dei test**: Esegue i test automatizzati con Jest e genera un report di code coverage.
3. **Caricamento del report di coverage**: Il report di coverage viene caricato come artefatto scaricabile.

### Come visualizzare il report di coverage
1. Vai alla sezione **Actions** del repository su GitHub.
2. Seleziona l'esecuzione del workflow desiderata.
3. Scarica l'artefatto chiamato `coverage-report`.
4. Apri il file `index.html` nella cartella `coverage` per visualizzare il report.
