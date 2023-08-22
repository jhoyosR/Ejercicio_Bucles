// Inicializar la variable para el puntaje total
let puntajeTotal = 0;

// Repetir 5 veces para las 5 preguntas
for (let i = 1; i <= 5; i++) {
  console.log(`Pregunta ${i}:`);
  
  // Presentar la pregunta al usuario
  switch (i) {
    case 1:
      console.log("¿Cuál es la capital de Francia?");
      break;
    case 2:
      console.log("¿La Tierra gira alrededor del Sol?");
      break;
    case 3:
      console.log("¿Quién escribió 'Romeo y Julieta'?");
      break;
    case 4:
      console.log("¿Cuántos continentes hay en el mundo?");
      break;
    case 5:
      console.log("¿Cuál es el símbolo químico del oro?");
      break;
  }
  
  // Leer la respuesta proporcionada por el usuario
  const respuesta = prompt("Ingrese su respuesta:").toLowerCase();

  // Evaluar si la respuesta es correcta y sumar puntos
  switch (i) {
    case 1:
      if (respuesta === "parís") {
        puntajeTotal += 10;
      }
      break;
    case 2:
      if (respuesta === "verdadero") {
        puntajeTotal += 10;
      }
      break;
    case 3:
      if (respuesta === "shakespeare") {
        puntajeTotal += 10;
      }
      break;
    case 4:
      if (respuesta === "7") {
        puntajeTotal += 10;
      }
      break;
    case 5:
      if (respuesta === "au") {
        puntajeTotal += 10;
      }
      break;
  }
}

// Mostrar los resultados del examen
console.log(`Respuestas correctas: ${puntajeTotal / 10}`);
console.log(`Puntaje total obtenido: ${puntajeTotal}`);
