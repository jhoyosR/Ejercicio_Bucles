// Solicitar al usuario que elija el tamaño de los stickers
const tamaño = prompt("Elija el tamaño de los stickers: pequeño o grande");

// Asignar el costo según el tamaño elegido
let costoUnitario;
if (tamaño === "pequeño") {
  costoUnitario = 4000;
} else if (tamaño === "grande") {
  costoUnitario = 6000;
} else {
  console.log("Tamaño de stickers no válido.");
}

// Solicitar al usuario la cantidad de stickers
let cantidad = parseInt(prompt("Ingrese la cantidad de stickers que desea comprar (mínimo 10):"));

// Verificar si la cantidad ingresada es menor que 10
while (cantidad < 10) {
  console.log("La cantidad mínima permitida es 10. Por favor, ingrese un número correcto.");
  cantidad = parseInt(prompt("Ingrese la cantidad de stickers que desea comprar (mínimo 10):"));
}

// Calcular el costo total
const costoTotal = costoUnitario * cantidad;

// Mostrar el costo total al usuario
console.log(`El costo total a pagar por ${cantidad} stickers ${tamaño}s es: $${costoTotal}`);
