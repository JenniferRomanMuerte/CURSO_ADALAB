/*
Estos métodos no modifican el array original.
Nos ayudan a encontrar elementos específicos y sus índices, basándonos en una condición determinada.
*/

// find
// Nos devuelve el primer elemento que cumple con la condición especificada en la función de callback.
const numbers = [1, 2, 3, 4, 5, 6];
const foundNumber = numbers.find(num => num > 3);
console.log(foundNumber); // 4
// En este ejemplo se busca el primer número que sea mayor que 3

// findIndex
// Nos devuelve el índice del primer elemento que cumple con la condición especificada en la función de callback.
const foundIndex = numbers.findIndex(num => num === 3);
console.log(foundIndex); // 2
// En este ejemplo se busca el índice del primer número que sea igual a 3