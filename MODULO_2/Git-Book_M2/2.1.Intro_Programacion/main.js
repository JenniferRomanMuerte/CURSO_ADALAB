'use strict';

/*Hola mundo*/

const parrafoElement = document.querySelector('p');
console.log(parrafoElement);
parrafoElement.innerHTML = parrafoElement.innerHTML + ' Mundo';


/*Seleccionando Adalabers*/

const titleElement = document.querySelector('h1');
let adalaberElement = document.querySelector('.adalaber_1')
titleElement.innerHTML = titleElement.innerHTML + ' ' + adalaberElement.innerHTML;


/*Lorem Ipsum*/

const divElement = document.querySelector('.lorem__div');
const title = "Lorem Ipsum";
const img = "<img src= 'http://via.placeholder.com/350x150'/>";
const parraf = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

divElement.innerHTML =  title + img + parraf;



/*Deshabilitando botones*/
/*Para añadir una clase a un elemento la clase debe estar definida en el css
y después podemos asignarla al ek¡lemento que queramos*/

const button = document.querySelector(".button_1");
button.classList.add('opacity');
