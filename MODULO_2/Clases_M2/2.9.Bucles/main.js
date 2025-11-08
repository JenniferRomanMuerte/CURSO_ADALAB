"use strict";

// Array con nombres
const nombres = [
  "Cris",
  "Maria",
  "Susana",
  "Monica",
  "Jennifer",
  "Mercedes",
  "Ingra",
  "Maria Jose",
];

//Elemento del html para insertar nuestro código de js
const list = document.querySelector(".list");

// Recorremos el array de nombres y cada uno de ellos se le asigna a la variable nombre
for (const nombre of nombres) {
  list.innerHTML += `<li class="item">${nombre}</li>`; // Añadimos a la lista todos los nombres del array
}



/******************************************/

// Array de números
const calificaciones = [5, 8, 7.5, 9];

// Variable externa para acumular el resultado del bucle
let suma = 0;

/* For of: for (variable donde almacenamos los valores del array of nombre del Array)
for(const nota of calificaciones){
  suma += nota;
}
*/

/* ForEach (nombreArray.forEach((variable donde almacenamos los valores) =>{
    código
  })}) */
calificaciones.forEach((nota) => {
  suma += nota;
});

// Dividimos la suma de todos los valores entre el tamaño del array
const promedio = suma / calificaciones.length;
console.log(promedio);



/******************************************/
// For tradicional

for (let i = 0; i < 10; i++) {
  console.log(i);
}



/******************************************/
// Recorrer un array de objetos y mostrar los valores de cada objeto


const objectAdalabers = [
  { name: "Jennifer", promo: 58, age: 42 },
  { name: "Susana", promo: 58, age: 32 },
  { name: "Cristina", promo: 58, age: 34 },
  { name: "Maria", promo: 58, age: 54 },
  { name: "Mariajosé", promo: 58, age: 24 },
  { name: "Mercedes", promo: 58, age: 18 },
  { name: "Ingra", promo: 58, age: 36 },
];


for (const oneObjectAdalaber of objectAdalabers) {
  list.innerHTML += `<li class="item">
    <h3>${oneObjectAdalaber.name}</h3>
    <p>Promo: ${oneObjectAdalaber.promo}</p>
    <p>Edad: ${oneObjectAdalaber.age}</p>
  </li>`;
}
