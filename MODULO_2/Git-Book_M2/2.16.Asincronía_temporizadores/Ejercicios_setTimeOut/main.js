"use strict";

// Sesión expirada

const sessionExpired = document.querySelector(".session_expired");

const divContainer = document.createElement("div");
divContainer.classList.add("divContainer");
divContainer.classList.add("hidden");
const textDiv = document.createTextNode("su sesión ha expirado");
divContainer.appendChild(textDiv);

sessionExpired.appendChild(divContainer);

const showMesagge = () => {
  divContainer.classList.remove("hidden");
};

setTimeout(showMesagge, 15000);

// Cronómetro

let counterSeg = 0;
let temp;
const chronometerSection = document.querySelector(".chronometer_section");

// Elemento del cronómetro
const chronometer = document.createElement("p");
chronometer.classList.add("chronometer");
let numberChronometer = document.createTextNode(counterSeg);
chronometer.appendChild(numberChronometer);

// Elemento del botón parar
const btnReset = document.createElement("button");
const textButton = document.createTextNode("Parar");
btnReset.appendChild(textButton);

// Elemento del botón parar
const btnContinue = document.createElement("button");
const textButtonContinue = document.createTextNode("Continuar");
btnContinue.appendChild(textButtonContinue);

chronometerSection.appendChild(chronometer);
chronometerSection.appendChild(btnReset);
chronometerSection.appendChild(btnContinue);

const AddingSeg = () => {
  counterSeg++;
  chronometer.removeChild(numberChronometer);
  numberChronometer = document.createTextNode(counterSeg);
  chronometer.appendChild(numberChronometer);
};

btnReset.addEventListener("click", (ev) => {
  clearInterval(temp);
});

btnContinue.addEventListener("click", (ev) => {
  counterSeg = 0;
  temp = setInterval(AddingSeg, 1000);
});

temp = setInterval(AddingSeg, 1000);

// ¿Te has dormido?

const asleep = document.querySelector(".asleep");
let tempAsleep;


const btnAsleep = document.createElement("button");
btnAsleep.classList.add("btnAsleep");
btnAsleep.classList.add("hidden");
const textBtnAsleep = document.createTextNode("¿Te has dormido?");
btnAsleep.appendChild(textBtnAsleep);


asleep.appendChild(btnAsleep);

const showBtn = () =>{
  btnAsleep.classList.remove("hidden");
}


btnAsleep.addEventListener('click', (ev) => {
   clearTimeout(tempAsleep);
   btnAsleep.classList.add("hidden");
   tempAsleep = setTimeout(showBtn, 10000);
});

tempAsleep = setTimeout(showBtn, 10000);