"use strict";

const dateBtn = document.querySelector(".js_dateBtn");
const dayInput = document.querySelector(".js_dayInput");
const monthInput = document.querySelector(".js_monthInput");
const dateOutput = document.querySelector(".js_dateOutput");

dateBtn.addEventListener("click", (ev) => {
  ev.preventDefault();

  /*
  Operador AND (&&)

    if (Number(monthInput.value) == 12 && Number(dayInput.value) == 25) {
      dateOutput.innerHTML = "Es festivo";
    }
    else {
      dateOutput.innerHTML = "No es festivo, a currar";
    }

  */

  /* If anidados

  if (Number(monthInput.value) == 12) {
    if (Number(dayInput.value) == 25) {
      dateOutput.innerHTML = "Es festivo";
    }
    if (Number(dayInput.value) == 6) {
      dateOutput.innerHTML = "Es festivo";
    }
    if (Number(dayInput.value) == 8) {
      dateOutput.innerHTML = "Es festivo";
    }
    else {
      dateOutput.innerHTML = "No es festivo, a currar";
    }
  }
  */

  /* Operador OR (||)

  if (Number(monthInput.value) == 12) {
    if (Number(dayInput.value) == 25 || Number(dayInput.value) == 6) || Number(dayInput.value) == 8) {
      dateOutput.innerHTML = "Es festivo";
    }
    else {
      dateOutput.innerHTML = "No es festivo, a currar";
    }
  }
  */

  // If encadenados, en cuanto se cumple una condición no comprueba las demás.

  if (Number(monthInput.value) == 12 && Number(dayInput.value) == 25) {
    dateOutput.innerHTML = "Es festivo";
  } else if (Number(monthInput.value) == 12 && Number(dayInput.value) == 6) {
    dateOutput.innerHTML = "Es festivo";
  } else if (Number(monthInput.value) == 7 && Number(dayInput.value) == 15) {
    dateOutput.innerHTML = "Es festivo";
  } else {
    dateOutput.innerHTML = "No es festivo, a currar";
  }
});
