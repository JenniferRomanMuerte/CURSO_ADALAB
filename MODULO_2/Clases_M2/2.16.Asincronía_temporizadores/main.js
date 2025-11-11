"use strict";

// Cronómetro
const display = document.querySelector(".js_display");
const btnStart = document.querySelector(".js_btn_start");
const btnPause = document.querySelector(".js_btn_pause");

/*
Variable para poder parar el setInterval
La hacemos global para poder acceder a ella desde la 2 funciones ( la de setInterval y clearInterval)
*/
let intervalId = 0;

// Función para iniciar el contador
const handleClickStartBtn = (ev) => {
  let contador = 0;

  // Lo inciamos y se ejecuta cada segundo
intervalId = setInterval(() => {
    contador++;
    display.innerHTML = `${contador} seg`;
  }, 1000);

  btnStart.classList.add('hidden');
  btnPause.classList.remove('hidden');
};

// Función para parar el setInterval
const handleClickPauseBtn = () =>{
  // Necesitamos el id del interval que estamos capturando en setInterval para pasarselo a clearInterval
  clearInterval(intervalId);

  btnStart.classList.remove('hidden');
  btnPause.classList.add('hidden');
};


btnStart.addEventListener("click", handleClickStartBtn);

btnPause.addEventListener('click',  handleClickPauseBtn);



// Reloj

const hoursElement = document.querySelector(".js_hours");
const minutsElement = document.querySelector(".js_minuts");
const seconsdsElement = document.querySelector(".js_seconsds");

const refreshClock = () => {
  // Creamos un objeto Date
  const now = new Date();

  // Accedemos a la hora actual
  //.padStart se usa para completar un string con los caracteres que queramos
  // .padStart(nº de caracteres que queremos completar, caracter que queremos que rellene)
  hoursElement.innerHTML = `${now.getHours()}`.padStart(2, 0);
  // Accedemos al mínuto actual
  minutsElement.innerHTML = `${now.getMinutes()}`.padStart(2, 0);
  // Accedemos al segundo actual
  seconsdsElement.innerHTML = `${now.getSeconds()}`.padStart(2, 0);
};

setInterval(refreshClock, 1000);

/* EJEMPLO */

// Se ejecuta 1º
console.log("Antes del setInterval");

setInterval(() => {
  // Se ejecuta la última porque espera a que pase 1 segundo
  console.log("Dentro del setInterval");
}, 1000);

// Se ejecuta 2º
console.log("Después del setInterval");


// SETTIMEOUT

const session = document.querySelector('.session');

const showSession = () =>{
  session.classList.remove('hidden');
}

setTimeout(showSession,2500);