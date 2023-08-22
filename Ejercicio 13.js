// Base de datos simulada de información de carros
const carros = {
    chevrolet: {
      captiva: {
        marca: "Chevrolet",
        referencia: "Captiva",
        caracteristicas: "SUV de lujo, motor potente, amplio espacio interior",
        precio: 35000
      },
      tracker: {
        marca: "Chevrolet",
        referencia: "Tracker",
        caracteristicas: "SUV compacto, eficiente en combustible, tecnología avanzada",
        precio: 25000
      }
    },
    mazda: {
      modeloA: {
        marca: "Mazda",
        referencia: "Modelo A",
        caracteristicas: "Sedán elegante, rendimiento deportivo, alta seguridad",
        precio: 30000
      },
      modeloB: {
        marca: "Mazda",
        referencia: "Modelo B",
        caracteristicas: "Hatchback versátil, tecnología innovadora, diseño moderno",
        precio: 28000
      }
    },
    renault: {
      referenciaX: {
        marca: "Renault",
        referencia: "Referencia X",
        caracteristicas: "Compacto urbano, económico en combustible, fácil manejo",
        precio: 20000
      },
      referenciaY: {
        marca: "Renault",
        referencia: "Referencia Y",
        caracteristicas: "Familiar espacioso, comodidad para viajes largos, seguridad",
        precio: 32000
      }
    }
  };
  
  // Solicitar al usuario que ingrese la marca de carros
  const marca = prompt("Ingrese la marca de carros (Chevrolet, Mazda o Renault):").toLowerCase();
  
  // Validar marca ingresada
  if (marca === "chevrolet" || marca === "mazda" || marca === "renault") {
    // Solicitar al usuario que seleccione una referencia por marca
    const referencia = prompt(`Seleccione una referencia para la marca ${marca}:\n${Object.keys(carros[marca]).join(", ")}`).toLowerCase();
    
    // Validar referencia ingresada
    if (carros[marca][referencia]) {
      // Mostrar información de la referencia seleccionada
      console.log("Información del carro:");
      console.log(`Marca: ${carros[marca][referencia].marca}`);
      console.log(`Referencia: ${carros[marca][referencia].referencia}`);
      console.log(`Características: ${carros[marca][referencia].caracteristicas}`);
      console.log(`Precio: $${carros[marca][referencia].precio}`);
    } else {
      console.log("Referencia no válida.");
    }
  } else {
    console.log("Marca no válida.");
  }
  