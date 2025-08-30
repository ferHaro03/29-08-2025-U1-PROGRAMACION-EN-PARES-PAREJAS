// Función que valida un correo electrónico con una expresión regular
function esCorreoValido(correo) {
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexCorreo.test(correo);
}

// Prueba de la función con un correo válido
console.log(esCorreoValido("ejemplo@email.com"));

// Prueba de la función con un correo inválido
console.log(esCorreoValido("correo@dominio"));
