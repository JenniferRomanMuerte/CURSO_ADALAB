"use strict";

const ageCanElement = document.querySelector(".ageCan");
const textElement = document.querySelector(".text")

ageCanElement.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") {
    let ageCan = Number(ageCanElement.value);
    if(ageCan === 1){
      ageCan = 15;
      textElement.innerHTML = `Tu perro tiene ${ageCan} años de humano`;
    }
    else if(ageCan === 2){
      ageCan = 24;
      textElement.innerHTML = `Tu perro tiene ${ageCan} años de humano`;
    }
    else if(ageCan > 2){
      /*
      Si tiene más de 2 años hacemos el calculo:
      24 años que tendría con 2
      como apartir de entonces 1 equivale a 5, el 1º valor válido es 3,
      le restamos 2 a la edad introducida para que concuerde con la multiplicacion de 5 que es el incremento por año
      */
      ageCan = 24 + ((ageCan -2) *5) ;
      textElement.innerHTML = `Tu perro tiene ${ageCan} años de humano`;
    }
    else {
      textElement.innerHTML = "Introduce una edad válida";
      return;
    }
  }
});
