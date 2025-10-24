"use strict";

// El precio de la fruta
const kiwi_kilo = 5;
const pera_kilo = 2;
const uva_kilo = 4;

const gastado = 2 * kiwi_kilo + 3 * pera_kilo + 0.5 * uva_kilo;
console.log(gastado);


// Calcular el número total de horas que hemos vivido
const hours_dia = 24;
const hours_anyo = hours_dia * 365;

const age = document.querySelector(".input-age");
const text = document.querySelector(".text");

age.addEventListener('keydown',(ev)=>{
  if (ev.key === "Enter") {
    const hours_age = age.value * hours_anyo;
    text.innerHTML = hours_age;
  }
});
