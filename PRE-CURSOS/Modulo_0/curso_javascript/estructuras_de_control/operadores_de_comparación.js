// Operadores de igualdad
console.log(5 == '5'); // true, el operador == convierte el string '5' a number 5 antes de comparar
console.log(5 === '5'); // false, el operador === no convierte tipos, compara tanto valor como tipo

//Operadores de desigualdad
console.log(5 != '5'); // false, el operador != convierte el string '5' a number 5 antes de comparar
console.log(5 !== '5'); // true, el operador !== no convierte tipos, compara tanto valor como tipo

//Operadores mayor que y menor que
console.log(10 > 5); // true
console.log(10 < 5); // false

//Operadores mayor o igual que y menor o igual que
console.log(10 <= 10); // true
console.log(10 >= 10); // true

// Comparaciones con null y undefined
console.log(null == undefined); // true, ambos son considerados iguales en comparación no estricta
console.log(null === undefined); // false, son de tipos diferentes

