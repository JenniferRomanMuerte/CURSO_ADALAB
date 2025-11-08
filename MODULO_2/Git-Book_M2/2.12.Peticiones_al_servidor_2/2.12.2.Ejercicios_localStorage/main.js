"use strict";

// 1. Conociendo Local Storage
const nameElement = document.querySelector(".input-name");
const lastnameElement = document.querySelector(".input-lastname");
const textElement = document.querySelector(".text");

nameElement.addEventListener("keyup", (ev) => {
  textElement.innerHTML += nameElement.value;
  localStorage.setItem("text", textElement);
});

lastnameElement.addEventListener("keyup", (ev) => {
  textElement.innerHTML += lastnameElement.value;
  console.log("que voy a guardar" + textElement.textContent);
  localStorage.setItem("text", textElement.textContent);
});

// 2. Mi tema preferido
// Buenas prácticas trabajando con LS

const sectionElement = document.querySelector(".theme");
const radios = document.querySelectorAll('input[name="theme"]');
const classSelect = localStorage.getItem('class');

radios.forEach((radio) => {
  radio.addEventListener("change", (ev) => {
    console.log("Seleccionado:", ev.target.value);
    if (ev.target.value === "light") {
      if(sectionElement.classList.contains('dark')){
        sectionElement.classList.remove('dark');
      }
      sectionElement.classList.add("light");
      localStorage.setItem("class", "light");
    } else if (ev.target.value === "dark") {
      if(sectionElement.classList.contains('light')){
        sectionElement.classList.remove('light');
      }
      sectionElement.classList.add("dark");
      localStorage.setItem("class", "dark");
    }
  });
});

console.log(classSelect);
sectionElement.classList.add(classSelect);

// 3. Cachear la búsqueda (En la carpeta de los ejercicios anteriores)



