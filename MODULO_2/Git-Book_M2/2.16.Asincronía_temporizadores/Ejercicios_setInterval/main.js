"use strict";

// Temporazor
const time = document.querySelector(".time");

let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  time.innerHTML = counter;
};
setInterval(incrementAndShowCounter, 2000);

// Contador de uvas
const timeGrapes = document.querySelector(".timeGrapes");

let counterGrapes = 0;

const incrementGrapes = () => {
  if (counterGrapes < 12) {
    counterGrapes++;
    timeGrapes.innerHTML = `Llevas ${counterGrapes}`;
  }else{
    timeGrapes.innerHTML = 'Ya te has comido las 12 Uvas'
  }
};
setInterval(incrementGrapes, 1000);


// Información de los post

const timePost = document.querySelector(".timePost");

let counterPost = 0;
let minutPost = 0;

const incrementPost = () => {
  // Aumentamos en 1 el contador de segundos
  counterPost++;
  // Cuando llegue a 60
  if (counterPost === 60) {
    // Reiniciamos el contador de segundos
    counterPost = 0;
    // Sumamos 1 a los minutos
    minutPost ++;
  }

  // Construimos el texto dinámicamente
  let text = "Escrito hace ";

  // Si minútos es más que 0 le añadimos el texto de los minutos
  if (minutPost > 0) {
    text += `${minutPost} min`;
  }

  // Cuando los segundos sean más que 0 los añadimos al texto
  if (counterPost > 0) {
    // Añadimos separación solo si hay minutos y segundos
    if (minutPost > 0) text += ", ";
    text += `${counterPost} seg`;
  }

  // Pintamos el texto pertinente
  timePost.textContent = text;

};
setInterval(incrementPost, 1000);