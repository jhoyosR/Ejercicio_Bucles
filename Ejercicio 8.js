// Solicitar al usuario la longitud de los tres lados del triángulo
const lado1 = parseFloat(prompt("Ingrese la longitud del primer lado del triángulo:"));
const lado2 = parseFloat(prompt("Ingrese la longitud del segundo lado del triángulo:"));
const lado3 = parseFloat(prompt("Ingrese la longitud del tercer lado del triángulo:"));

// Verificar si los tres lados son iguales
if (lado1 === lado2 && lado1 === lado3) {
  console.log("El triángulo es equilátero.");
} else {
  console.log("El triángulo no es equilátero.");
}
