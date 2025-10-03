//CONVERSIÓN DE TIPOS EXPLICITA

//Convertir de string a number (integer)
let string = '123';
const integer = parseInt(string); //Convierte a entero
console.log(integer);

//Convertir de string decimal a number (float)
let stringDecimal = '123.45';
const float = parseFloat(stringDecimal); //Convierte a float
console.log(float);

//Convertir de number a string
let number = 456;
const stringNumber = number.toString(); //Convierte a string
console.log(stringNumber);


//CONVERSIÓN DE TIPOS IMPLICITA
// Suma de number + string
const sum = 5 + '3'; //El número 5 se convierte a string y se concatena
console.log(sum); // '53'

//Suma de string + boolean
const sum2 = '5' + true; // El booleano true se convierte a string y se concatena
console.log(sum2); // '5true'

//Suma de number + boolean
const sum3 = 5 + true; // El booleano true se convierte a 1 y se suma
console.log(sum3); // 6