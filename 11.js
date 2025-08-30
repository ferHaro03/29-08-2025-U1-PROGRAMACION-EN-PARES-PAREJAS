// Declaración de un arreglo de números
let numeros = [1, 2, 3, 4, 5];

// Usa map() para obtener un nuevo arreglo con los cuadrados de cada número
let cuadrados = numeros.map(function (x) {
  return Math.pow(x, 2); // Eleva cada número al cuadrado
});

// Muestra en consola el resultado
console.log(cuadrados); // [1, 4, 9, 16, 25]
