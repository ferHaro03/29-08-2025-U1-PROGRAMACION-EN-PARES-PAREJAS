// Importa el módulo 'prompt' para recibir datos del usuario
const prompt = require("prompt");

// Inicia el módulo prompt
prompt.start();

// Solicita la edad al usuario
prompt.get(["edad"], function (err, result) {
  if (err) {
    console.error("Ocurrió un error:", err);
    return; // Detiene la ejecución si ocurre un error
  }

  // Convierte el valor ingresado en número
  const edad = Number(result.edad);

  // Valida la entrada y muestra un mensaje según la edad
  if (isNaN(edad)) {
    console.log("Por favor ingresa un número válido");
  } else if (edad >= 18) {
    console.log("Eres mayor de edad");
  } else {
    console.log("Eres menor de edad");
  }
});
