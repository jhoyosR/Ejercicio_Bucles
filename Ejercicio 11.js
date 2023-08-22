// Costo del servicio de la pesa electrónica
const costoServicio = 500;

// Inicializar el monto total ingresado por el usuario
let montoTotalIngresado = 0;

// Solicitar al usuario que ingrese el tipo de pago (moneda o billete)
const tipoPago = prompt("Ingrese el tipo de pago (moneda o billete):").toLowerCase();

if (tipoPago === "moneda") {
  // Si el tipo de pago es moneda
  const valorMoneda = parseInt(prompt("Ingrese el valor de la moneda (500 o 1000):"));

  if (valorMoneda === 500 || valorMoneda === 1000) {
    // Sumar al monto total ingresado
    montoTotalIngresado += valorMoneda;
  } else {
    console.log("Valor de moneda no válido.");
  }
} else if (tipoPago === "billete") {
  // Si el tipo de pago es billete
  const valorBillete = parseInt(prompt("Ingrese el valor del billete (2000 o 5000):"));

  if (valorBillete === 2000 || valorBillete === 5000) {
    // Sumar al monto total ingresado
    montoTotalIngresado += valorBillete;
  } else {
    console.log("Valor de billete no válido.");
  }
} else {
  console.log("Tipo de pago no válido.");
}

// Determinar si se necesita devolver cambio o mostrar si falta dinero
if (montoTotalIngresado < costoServicio) {
  console.log("Falta dinero para completar el pago.");
} else {
  // Calcular el cambio
  const cambio = montoTotalIngresado - costoServicio;

  if (cambio === 0) {
    console.log("No se necesita devolver cambio.");
  } else {
    console.log(`Devolución de cambio: $${cambio}`);
  }
}

console.log("¡Vuelve pronto!");
