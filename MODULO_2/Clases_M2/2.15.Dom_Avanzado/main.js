'use strict';


const main = document.querySelector('.main');


// Genera un elemento de tipo button
const button = document.createElement('button');

// Creamos un elmento para el texto
const text = document.createTextNode('Soy un butón, Click');

// Se lo añadimos al elemnento donde queramos mostrarlo
button.appendChild(text);

// Para añadirlo al elemento padre(main)
main.appendChild(button);

// Para añadir un atributo al botón
button.setAtrribute('title', 'Soy un botón');

// Para añadir una clase como hasta ahora
button.classList.add('button');