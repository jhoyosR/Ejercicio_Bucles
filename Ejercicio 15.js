const numRows = 17;
const numCols = 43;

// Generar la parte superior del patrón
for (let i = 1; i <= numRows; i++) {
  if (i % 2 !== 0) {
    console.log("* ".repeat(6) + "=".repeat((numCols - 8)));
  }
}

// Generar la línea de igual
console.log("=".repeat(numCols / 1)); 

