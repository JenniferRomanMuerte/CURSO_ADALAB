"use strict";

//  1. CONTROL DE ACCESO

const inputName = document.querySelector(".name");
const title = document.querySelector(".title");

// Creamos el eveneto para cuando le de a una tecla
inputName.addEventListener("keydown", (event) => {
  // Si la tecla es Enter
  if (event.key === "Enter") {
    // Capturamos lo que ha escrito el usuario en el input
    const username = inputName.value;
    console.log(username);
    // Comprobamos si es uno de estos nombres, nos vale uno u otro
    if (username === "Maria" || username === "Luisa") {
      // Si cumple la condición mostramos este texto
      title.innerHTML = `Bienvenida  ${username}`;
    } else {
      // Si NO cumple la condición mostramos este texto
      title.innerHTML =
        "Lo siento pero el usuario que has introducido no está registrado";
    }
  }
});

// 2.COMPLETA LAS CONDICIONES

const inputNumber = document.querySelector(".input_number");

inputNumber.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const number = Number(inputNumber.value);
    console.log(number);
    if (number === 0) {
      console.log("El número es 0");
    } else if (number < 0) {
      console.log("El número es negativo");
    } else if (number + 2 > 13 && number + 2 <= 20) {
      console.log("El número más 2 es mayor que 13 pero menor o igual que 20");
    } else if (number > 20 && number < 50) {
      console.log("El número es mayor que 20 pero menor que 50");
    } else {
      console.log("el número no es 123123125");
    }
  }
});
