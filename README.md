# SSGS Calc

SSGS Calc è un progetto JavaScript che implementa una calcolatrice semplice. L'applicazione può essere avviata tramite CLI per eseguire operazioni matematiche di base. Include una pipeline CI configurata con GitHub Actions per l'esecuzione dei test e la generazione del report di code coverage.

## Funzionalità principali

- **Operazioni base**: Supporta somma, sottrazione, moltiplicazione e divisione.
- **CLI**: Avvio dell'applicazione tramite CLI con `calc.js`.
- **Test automatici**: Utilizzo di Jest per garantire la qualità del codice.
- **Code coverage**: Generazione automatica del report di coverage.
- **CI**: Pipeline GitHub Actions per l'automazione dei test e la gestione degli artefatti.

---

## Prerequisiti

Prima di iniziare, assicurati di avere installato:

- **Node.js**: Versione **18** o successiva.
- **npm**: Incluso con l'installazione di Node.js.

---

## Istruzioni di installazione

   **Clona il repository**:
   bash
   git clone https://github.com/DiegoVerrina/ssgs-calc.git

  **Accedi alla directory del progetto**:

  bash
  cd ssgs-calc
  Installa le dipendenze:
  
  bash
  npm ci
  
  **Istruzioni di utilizzo**:
  Per avviare l'applicazione con calc.js, utilizza il comando:
  
  bash
  npm start
  
  L'applicazione verrà eseguita in modalità CLI e ti permetterà di eseguire operazioni matematiche.
  
  **Istruzioni per eseguire i test**:
  Per eseguire i test automatici e generare il report di coverage, utilizza il comando:
  
  bash
  npm test
  
  Il report di coverage verrà generato automaticamente nella directory coverage.
  
   ## CI/Pipeline
  Il progetto utilizza GitHub Actions per automatizzare i test e il caricamento del report di coverage. La pipeline viene eseguita automaticamente nei seguenti casi:
  
  Push: Ogni modifica al branch main.
  
  Pull Request: Ogni pull request verso il branch main.
  
  Passaggi della pipeline
  
  Checkout del codice dal repository.
  
  Setup di Node.js con caching delle dipendenze.
  
  Installazione delle dipendenze con npm ci.
  
  Esecuzione dei test con Jest.
  
  Generazione e caricamento del report di code coverage come artefatto.
  
  Puoi trovare il file di configurazione della pipeline nel percorso .github/workflows/main.yml.
