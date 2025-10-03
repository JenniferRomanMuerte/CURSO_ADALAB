// Permiten almacenar múltiples valores dentro de una sola variable.

// Cómo crear un array
//1. Usando corchetes []
let frutas = ['manzana', 'banana', 'cereza'];
console.log(frutas); // ['manzana', 'banana', 'cereza']

//2. Usando el constructor Array
let verduras = new Array('zanahoria', 'brócoli', 'espinaca');
console.log(verduras); // ['zanahoria', 'brócoli', 'espinaca']

// Acceso a elementos
console.log(frutas[0]); // 'manzana'
console.log(verduras[1]); // 'brócoli'

// Propiedades importantes
console.log(frutas.length); // 3
console.log(verduras.length); // 3

// Pueden almacenar diferentes tipos de datos
let mixto = [42, 'texto', true, null, { clave: 'valor' }, [1, 2, 3]];
console.log(mixto); // [42, 'texto', true, null, { clave: 'valor' }, [1, 2, 3]]