'use strict';

const family =[ "Morticia","Cosa","Gomez","Jennifer"];
const highSchoolContacts = ["Enid","Bianca","Eugine"];
const villageContacts = ["Dr. Valerie"];

// Añade al final del array
family.push("Fetido");

// Añade al principio del array
family.unshift("Miercoles");

console.log('Después de añadir elementos' + family);

// Quita el último elemento del array
family.pop();

// Quita el 1º elemento del array
family.shift();


console.log('Después de quitar elementos' + family);

// Obtener ciertos elementos del array
// Desde la posición 5 hasta la 3 sin incluir ésta.
family.slice(1,3);


// Para juntar varios arryas
const contactList = family.concat(highSchoolContacts,villageContacts);

console.log('Arrays concatenados: ' + contactList);


// Para obtener el índice de algún elemento

const Morticia = family.indexOf('Morticia'); // Devolverá 0
console.log(Morticia);

const Gomez = family.indexOf('Gomez'); // Devolverá 2
console.log(Gomez);

const pepita = family.indexOf('pepita'); // Devolverá -1 porque no está en el array
console.log(pepita);


//