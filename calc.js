
const readline = require("readline");
const math = require("./math");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Benvenuto nella calcolatrice!");
console.log("Operazioni disponibili:");
console.log("1. Addizione");
console.log("2. Sottrazione");
console.log("3. Moltiplicazione");
console.log("4. Divisione");
console.log("5. Potenza");

rl.question("Seleziona un'operazione (1-5): ", (choice) => {
  if (!["1", "2", "3", "4", "5"].includes(choice)) {
    console.log("Scelta non valida. Uscita dal programma.");
    rl.close();
    return;
  }

  rl.question("Inserisci il primo numero: ", (inputA) => {
    rl.question("Inserisci il secondo numero: ", (inputB) => {
      const a = parseFloat(inputA);
      const b = parseFloat(inputB);

      if (isNaN(a) || isNaN(b)) {
        console.log("Errore: uno o entrambi i parametri non sono numeri validi.");
        rl.close();
        return;
      }

      try {
        let result;
        switch (choice) {
          case "1":
            result = math.add(a, b);
            break;
          case "2":
            result = math.subtract(a, b);
            break;
          case "3":
            result = math.multiply(a, b);
            break;
          case "4":
            result = math.divide(a, b);
            break;
          case "5":
            result = math.power(a, b);
            break;
        }
        console.log(`Risultato: ${result}`);
      } catch (error) {
        console.log("Errore:", error.message);
      }

      console.log("Grazie per aver utilizzato la calcolatrice!");
      rl.close();
    });
  });
});
