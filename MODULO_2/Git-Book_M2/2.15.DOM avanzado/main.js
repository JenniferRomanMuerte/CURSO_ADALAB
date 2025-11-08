'use strict';


// ACCEDER A ELEMENTOS

const item1 = document.querySelector('.item--1');
console.log(item1); // Devuelve una representación del elemento como HTML
console.dir(item1); // Devuelve una representación del elemento como objeto

//Accedemos al elemento que lo contiene
const mother = item1.parentElement;

console.log(
  `La madre de nuestro elemento es un <${mother.nodeName.toLowerCase()}> y tiene la clase .${
    mother.className
  }`
);
// Devuelve "La madre de nuestro elemento es un <ul> y tiene la clase .items"



// CREAR ELEMENTOS

// Creamos un elemento nuevo, un <li>
const newItem = document.createElement('li');
console.log(newItem); // Devuelve "<li></li>"

// Ahora creamos algo de contenido
const newContent = document.createTextNode('Item nuevo');

// Y se lo añadimos a nuestro <li>
newItem.appendChild(newContent);
console.log(newItem); // Devuelve "<li>Item nuevo</li>"



// AÑADIR EL ELEMENTO CREADO AL DOM

// Capturamos el elemento donde queremos añadir el nuevo que hemos creado
const items = document.querySelector('.items');
// A éste le añadimos el elemento li que habiamos creado
items.appendChild(newItem);



// BORRAR ELEMENTOS DEL DOM

// Si borrasemos un elemento que contiene otros éstos tb desaparecen
// Borramos el ul que contiene los li y borramos todo
// items.remove();

// Para borrar un elemento lo capturamos
const item2 = document.querySelector('.item--2');
// Lo eliminamos
item2.remove();

// También podemos borrar un elemento hijo de un elemento sin tener que capturar éste último
// nombre del elemento padre, sentencia,(elemento hijo que queremos borrar)
// Elimina el elemento item1 que habiamos capturado que está dentro del ul que es el contenedor padre(items)
items.removeChild(item1);