// Permite extraer una sección de un array y devolverla como un nuevo array
// No modifica el array original
// Se le pasa el índice de inicio
const array = ['a', 'b', 'c', 'd', 'e'];

console.log(array.slice(2)); // ['c', 'd', 'e']

// Se le pasa el índice de inicio y el índice de fin (este elemento no entra en el nuevo array)
console.log(array.slice(1, 4)); // ['b', 'c', 'd']

// Si se le pasa un índice negativo, empieza a contar desde el final del array
console.log(array.slice(-2)); // ['d', 'e']