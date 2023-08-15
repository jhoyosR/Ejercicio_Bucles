const maquinaEncendida = true;
const producto1Nombre = "Papas fritas";
const producto1Precio = 1.5;
const producto2Nombre = "Chicles";
const producto2Precio = 2.0;
const dineroIngresado = 2.5;
const productoElegido = producto1Nombre; // Cambia a producto2Nombre si quieres chicles

if (maquinaEncendida) {
  if (productoElegido === producto1Nombre && dineroIngresado >= producto1Precio) {
    const cambio = dineroIngresado - producto1Precio;
    console.log(`¡${producto1Nombre} entregado! Tu cambio es: ${cambio.toFixed(2)}`);
  } else if (productoElegido === producto2Nombre && dineroIngresado >= producto2Precio) {
    const cambio = dineroIngresado - producto2Precio;
    console.log(`¡${producto2Nombre} entregado! Tu cambio es: ${cambio.toFixed(2)}`);
  } else {
    console.log("Dinero insuficiente para el producto seleccionado.");
  }
} else {
  console.log("La máquina está apagada. Enciéndela para usarla.");
}

