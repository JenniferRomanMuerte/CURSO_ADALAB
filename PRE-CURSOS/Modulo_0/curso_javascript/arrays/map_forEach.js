// map()
// Crea un nuevo array con los resultados de la función aplicada a cada elemento del array original
let array = [1, 2, 3];
let nuevoArray = array.map(elemento => elemento * 2);
console.log('Array original:', array); // [1, 2, 3]
console.log('Nuevo array con map:', nuevoArray); // [2, 4, 6]

// forEach()
// Itera sobre cada elemento del array y ejecuta una función, no crea un nuevo array
array.forEach((elemento, indice) => {
  console.log(`Elemento en el índice ${indice}:`, elemento);
});