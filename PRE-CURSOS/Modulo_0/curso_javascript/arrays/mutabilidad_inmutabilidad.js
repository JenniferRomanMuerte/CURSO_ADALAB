// Mutabilidad
let array1 = [1, 2, 3];
console.log('Array original:', array1); // [1, 2, 3]
array1.push(4);
console.log('Array modificado:', array1); // [1, 2, 3, 4]
// El array original ha sido modificado

// Inmutabilidad
let array2 = [1, 2, 3];
console.log('Array original:', array2); // [1, 2, 3]
let nuevoArray = [...array2, 4];
console.log('Nuevo array:', nuevoArray); // [1, 2, 3, 4]
console.log('Array original permanece igual:', array2); // [1, 2, 3]

const nuevoArray2 = array2.concat(5);
console.log('Nuevo array usando concat:', nuevoArray2); // [1, 2, 3, 5]
console.log('Array original permanece igual:', array2); // [1, 2, 3]

// ¿Un array es un array?
console.log(Array.isArray(array1)); // true
console.log(Array.isArray(nuevoArray)); // true
console.log(Array.isArray(nuevoArray2)); // true


// Sumar elementos de un array (mutabilidad) con for
let numbers = [10, 20, 30];
let sumaNumbers = 0;

for(let i = 0; i < numbers.length; i++) {
   sumaNumbers += numbers[i];
}

console.log('Suma de numbers:', sumaNumbers); // 60