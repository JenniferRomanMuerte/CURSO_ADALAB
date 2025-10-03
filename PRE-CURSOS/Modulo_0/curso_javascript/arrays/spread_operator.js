// Para manipular arrays de forma más sencilla, podemos usar el operador de propagación (spread operator) `...`
// Copiar arrays
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // [1, 2, 3]

// Concatenar arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = [...array1, ...array2];
console.log(concatenatedArray); // [1, 2, 3, 4, 5, 6]

// Pasar elementos de un array como argumentos a una función
const numbers = [1, 2, 3];
const sum = (a, b, c) => a + b + c;
console.log(sum(...numbers)); // 6

// Convertir una cadena en un array de caracteres
const str = "hello";
const charArray = [...str];
console.log(charArray); // ['h', 'e', 'l', 'l', 'o']

// Crear un nuevo array con elementos adicionales
const baseArray = [1, 2, 3];
const newArray = [0, ...baseArray, 4];
console.log(newArray); // [0, 1, 2, 3, 4]

