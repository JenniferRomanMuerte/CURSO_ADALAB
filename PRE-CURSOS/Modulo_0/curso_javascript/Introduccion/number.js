// ENTERO Y DECIMAL
let entero = 1000; // Entero
let decimal = 1000.5; // Decimal o Float

console.log(typeof entero, typeof decimal);


// NOTACIÓN CIENTÍFICA
let cientifico = 1.5e5; // 1.5 * 10^5 = 150000
console.log(cientifico);

// INFINITOS y NaN
let infinito = Infinity;
let negativoInfinito = -Infinity;
let noNumero = NaN;

console.log(infinito, negativoInfinito, noNumero);


//OPERACIONES BÁSICAS
// Suma, Resta, Multiplicación, División
let suma = 10 + 5;  // 15
let resta = 10 - 5; // 5
let multiplicacion = 10 * 5; // 50
let division = 10 / 5; // 2

console.log(suma, resta, multiplicacion, division);



// OPERACIONES AVANZADAS
// Módulo (Resto de una división)
let modulo = 10 % 3; // 1
// Potenciación
let potencia = 2 ** 3; // 8 (2 * 2 * 2)
console.log( modulo, potencia);



// PRECISIÓN DE NÚMEROS
let numeroLargo = 0.1 + 0.2; // 0.30000000000000004
console.log(numeroLargo);
let numeroCorto = numeroLargo.toFixed(1);
console.log(numeroCorto); // 0.3


// OPERACIONES CON MATH
// Raíz cuadrada
let raizCuadrada = Math.sqrt(16); // 4
console.log(raizCuadrada);
//Valor absoluto
let valorAbsoluto = Math.abs(-10); // 10
console.log(valorAbsoluto);
// Aleatorio
let aleatorio = Math.random(); // Entre 0 y 1
console.log(aleatorio); // Entre 0 y 1
