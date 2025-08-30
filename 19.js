// Realiza una petición HTTP con fetch
fetch('https://jsonplaceholder.typicode.com/todos/1')

// Convierte la respuesta a JSON
  .then(resp => resp.json())

// Muestra los datos en consola
  .then(datos => console.log(datos))

// Captura errores en la petición
  .catch(err => console.error("Error en fetch:", err));
