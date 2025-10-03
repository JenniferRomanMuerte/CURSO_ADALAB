// Cómo definirlos
let string1 = 'Hola Mundo';
let string2 = "Jennifer es genial";
let string3 = `${string1} feliz`;

// Cómo concatenarlos
let string4 = string1 + " " + string2;
console.log(string4); // Hola Mundo Jennifer es genial
let string5 = `${string1} ${string2}`;
console.log(string5); // Hola Mundo Jennifer es genial

// MANIPULACIÓN BÁSICA

// Longitud
console.log(string1.length); // 10
console.log(string2.length); // 22

// Mayúsculas y minúsculas
console.log(string1.toUpperCase()); // HOLA MUNDO
console.log(string2.toLowerCase()); // jennifer es genial

// Substring
console.log(string1.substring(0, 4)); // Hola
console.log(string2.substring(10)); // es genial
