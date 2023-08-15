let saldo = 1000; // Saldo inicial

function realizarRetiro(monto) {
  if (monto <= saldo && monto > 0) {
    saldo -= monto;
    console.log(`Retiro exitoso. Saldo actual: ${saldo}`);
  } else {
    console.log("Fondos insuficientes o monto inválido.");
  }
}

function realizarConsignacion(monto) {
  if (monto > 0) {
    saldo += monto;
    console.log(`Consignación exitosa. Saldo actual: ${saldo}`);
  } else {
    console.log("Monto inválido para consignación.");
  }
}

function consultarSaldo() {
  console.log(`Saldo disponible: ${saldo}`);
}

// Ejemplos de uso
realizarRetiro(500); // Intento de retiro
realizarRetiro(200); // Retiro exitoso
realizarConsignacion(300); // Consignación exitosa
consultarSaldo(); // Consulta de saldo
