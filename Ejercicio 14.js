// Solicitar al usuario ingresar un número entero
const numero = parseInt(prompt("Ingrese un número entero para generar su tabla de multiplicar:"));

// Validar si el número es válido
if (!isNaN(numero)) {
  console.log(`Tabla de multiplicar del ${numero}:`);
  
  // Generar y mostrar la tabla de multiplicar
  for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    const resultado = numero * multiplicador;
    console.log(`${numero} x ${multiplicador} = ${resultado}`);
  }
} else {
  console.log("¡El valor ingresado no es un número válido!");
}
