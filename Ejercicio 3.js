// Mostrar mensaje de bienvenida
console.log("Bienvenido al programa de cálculo de valores de inmuebles");

// Solicitar costo del apartamento al usuario
const costoApartamento = parseFloat(prompt("Por favor, ingrese el costo del apartamento:"));

// Mostrar opciones de tipo de inmueble
console.log("Opciones de tipo de inmueble:");
console.log("1. Usado");
console.log("2. Nuevo");

// Solicitar tipo de inmueble al usuario y validar
let tipoInmueble;
do {
  tipoInmueble = parseInt(prompt("Ingrese el tipo de inmueble (1 para Usado, 2 para Nuevo):"));
  if (tipoInmueble !== 1 && tipoInmueble !== 2) {
    console.log("Opción inválida. Por favor, ingrese 1 para Usado o 2 para Nuevo.");
  }
} while (tipoInmueble !== 1 && tipoInmueble !== 2);

// Calcular comisión de la inmobiliaria
let comisionInmobiliaria;
if (tipoInmueble === 1) {
  comisionInmobiliaria = costoApartamento * 0.1;
} else if (tipoInmueble === 2) {
  comisionInmobiliaria = costoApartamento * 0.2;
}

// Calcular valores para el propietario y la inmobiliaria
const valorPropietario = costoApartamento - comisionInmobiliaria;
const valorInmobiliaria = comisionInmobiliaria;

// Mostrar resultados
console.log("Resultados:");
console.log(`Valor que recibe el propietario: ${valorPropietario}`);
console.log(`Valor recibido por la inmobiliaria: ${valorInmobiliaria}`);

// Mostrar mensaje de despedida
console.log("¡Gracias por utilizar el programa!");

// Fin del programa
