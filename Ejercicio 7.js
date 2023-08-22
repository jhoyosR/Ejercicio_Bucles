// Solicitar al usuario si es una devolución o una pérdida
const tipoAccion = prompt("¿Es una devolución o una pérdida? (Devolución/Pérdida)").toLowerCase();

if (tipoAccion === "devolución") {
  // Si es una devolución
  const diasRetraso = parseInt(prompt("Ingrese la cantidad de días de retraso:"));
  const revistasPrestadas = parseInt(prompt("Ingrese la cantidad de revistas prestadas:"));
  const librosPrestados = parseInt(prompt("Ingrese la cantidad de libros prestados:"));

  // Calcular la multa por retraso
  const multaPorRevistas = diasRetraso * revistasPrestadas * 500;
  const multaPorLibros = diasRetraso * librosPrestados * 600;

  // Calcular el monto total de la multa
  const montoTotalMulta = multaPorRevistas + multaPorLibros;

  // Mostrar el monto total de la multa
  console.log(`El monto total de la multa a pagar es: $${montoTotalMulta}`);
} else if (tipoAccion === "pérdida") {
  // Si es una pérdida
  const ejemplaresPerdidos = parseInt(prompt("Ingrese la cantidad de ejemplares perdidos:"));

  // Calcular la multa por pérdida
  const montoMulta = ejemplaresPerdidos * 10000;

  // Mostrar el monto total de la multa
  console.log(`El monto total de la multa a pagar es: $${montoMulta}`);
} else {
  console.log("Tipo de acción no válido.");
}
