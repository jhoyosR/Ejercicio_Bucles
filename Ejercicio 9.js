// Inicializar variables de conteo para cada candidato
let votosAnaMaria = 0;
let votosDiego = 0;

// Repetir 10 veces para 10 votantes
for (let i = 1; i <= 10; i++) {
  console.log(`Votante ${i}:`);
  console.log("1. Ana Maria Suarez");
  console.log("2. Diego Acero");
  
  // Solicitar al votante que elija una opción de voto
  const opcionVoto = parseInt(prompt("Ingrese el número de su opción de voto:"));
  
  if (opcionVoto === 1) {
    // Si elige a Ana Maria Suarez
    votosAnaMaria++;
  } else if (opcionVoto === 2) {
    // Si elige a Diego Acero
    votosDiego++;
  } else {
    console.log("Opción inválida. El voto no será contado.");
  }
}

// Determinar quién es el ganador y quién es el perdedor
if (votosAnaMaria > votosDiego) {
  console.log("El ganador es Ana Maria Suarez.");
  console.log("El perdedor es Diego Acero.");
} else if (votosDiego > votosAnaMaria) {
  console.log("El ganador es Diego Acero.");
  console.log("El perdedor es Ana Maria Suarez.");
} else {
  console.log("La votación terminó en empate.");
}

// Mostrar los resultados de la votación
console.log(`Resultados:`);
console.log(`Ana Maria Suarez: ${votosAnaMaria} votos`);
console.log(`Diego Acero: ${votosDiego} votos`);
