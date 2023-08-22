// Crear un objeto para almacenar los equipos y sus resultados
const equipos = {};

// Función para calcular los puntos en base a los resultados
function calcularPuntos(resultado) {
  if (resultado === "victoria") {
    return 3;
  } else if (resultado === "empate") {
    return 1;
  } else {
    return 0;
  }
}

// Iterar tres veces para tres fechas particulares
for (let fecha = 1; fecha <= 3; fecha++) {
  console.log(`Fecha ${fecha}:`);
  
  // Iterar por cada equipo
  for (let i = 1; i <= 3; i++) {
    const nombreEquipo = prompt(`Ingrese el nombre del equipo ${i} en la fecha ${fecha}:`);
    const resultadoEquipo = prompt(`Ingrese el resultado del equipo ${i} (victoria/empate/derrota) en la fecha ${fecha}:`).toLowerCase();

    // Calcular los puntos obtenidos
    const puntos = calcularPuntos(resultadoEquipo);
    
    // Agregar los resultados al objeto equipos
    if (!equipos[nombreEquipo]) {
      equipos[nombreEquipo] = {
        puntos: 0
      };
    }
    equipos[nombreEquipo][`fecha${fecha}`] = {
      resultado: resultadoEquipo,
      puntos: puntos
    };

    // Sumar los puntos al total del equipo
    equipos[nombreEquipo].puntos += puntos;
  }
}

// Ordenar los equipos por puntos en un arreglo
const rankingEquipos = Object.keys(equipos).sort((equipoA, equipoB) => equipos[equipoB].puntos - equipos[equipoA].puntos);

// Mostrar el ranking de equipos y sus puntos
console.log("Ranking de Equipos:");
for (let i = 0; i < rankingEquipos.length; i++) {
  const equipo = rankingEquipos[i];
  console.log(`${i + 1}. ${equipo} - Puntos: ${equipos[equipo].puntos}`);
}

