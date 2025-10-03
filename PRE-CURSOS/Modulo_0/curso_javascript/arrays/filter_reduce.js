// Ninguno de estos métodos modifica el array original
// FILTER
// Devuelve un nuevo array con los elementos que cumplan la condición
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]
// En este ejemplo se crea un nuevo array que contiene solo los números pares del array original

// REDUCE
// Devuelve un único valor que es el resultado de aplicar una función a cada elemento del array
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 55
// En este ejemplo se calcula la suma de todos los números en el array original
// El primer argumento de la función es el acumulador (el valor acumulado hasta el momento)
// El segundo argumento es el valor actual del array que se está procesando
// El segundo parámetro de reduce (0 en este caso) es el valor inicial del acumulador