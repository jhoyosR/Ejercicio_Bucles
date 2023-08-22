// Mostrar menú de opciones
console.log("Menú de opciones:");
console.log("1. Pizza");
console.log("2. Sándwiches");
console.log("3. Ensaladas");

// Solicitar al usuario que elija una opción
const opcion = parseInt(prompt("Seleccione una opción del menú (1-3):"));

let costoPorUnidad;
let descripcionProducto;

// Determinar el costo y descripción del producto según la opción seleccionada
if (opcion === 1) {
  costoPorUnidad = 7000;
  descripcionProducto = "Pizza";
} else if (opcion === 2) {
  costoPorUnidad = 5000;
  descripcionProducto = "Sándwich";
} else if (opcion === 3) {
  costoPorUnidad = 15000;
  descripcionProducto = "Ensalada";
} else {
  console.log("Opción inválida.");
}

// Solicitar la cantidad de porciones
const cantidadPorciones = parseInt(prompt(`Ingrese la cantidad de porciones de ${descripcionProducto} que desea:`));

// Calcular el costo base del pedido
const costoPedido = costoPorUnidad * cantidadPorciones;

// Preguntar si desea agregar salsa adicional
const deseaSalsa = prompt("¿Desea agregar salsa adicional por $500? (Sí/No)").toLowerCase();

// Calcular el costo total con salsa adicional si corresponde
let costoTotal;
if (deseaSalsa === "sí") {
  costoTotal = costoPedido + 500;
} else {
  costoTotal = costoPedido;
}

// Mostrar el costo total al usuario
console.log(`El costo total de su pedido de ${cantidadPorciones} porciones de ${descripcionProducto} es: $${costoTotal}`);
