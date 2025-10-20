'use strict';

// Capturamos los elementos que necesarios
const mainElement = document.querySelector('.main');
const buttonElement = document.querySelector('.js-button');


// Creamos el evento, cuando se pasa el ratón por encima de elemento
buttonElement.addEventListener('mouseover', (event) =>{
  //Se añade esta clase al elemento que queremos
  mainElement.classList.add('bk_red');

});

// Creamos el evento, cuando se quita el ratón de encima del elemento
buttonElement.addEventListener('mouseout', (event) =>{
  //Se quita esta clase al elemento que queremos
  mainElement.classList.remove('bk_red');

});

// Recogemos el elemento input
const nameInput = document.querySelector(".js-name");

// Recogemos el elemento span que es el nombre que queremos cambiar
const spanElement = document.querySelector(".js-span");


// Creamos un evento input
nameInput.addEventListener("input", (event)=>{

  // Capturamos lo que escribe la usuaria y se lo asignamos al span
  spanElement.innerHTML = nameInput.value;

});