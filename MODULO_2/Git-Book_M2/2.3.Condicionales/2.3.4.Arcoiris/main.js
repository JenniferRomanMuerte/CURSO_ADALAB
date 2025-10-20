'use strict';

// Capturamos el main que es el contenedor
const mainElement = document.querySelector(".js-main");
// Capturamos los elementos a modificar
const title =  document.querySelector(".title");
const text = document.querySelector(".text");

// Comprobamos que la clase que queremos está dentro de las clases del elemento
if (mainElement.classList.contains("success")){
  title.innerHTML = "CORRECTO";
  text.innerHTML = "Los datos son correctos";
}
else if (mainElement.classList.contains("error")){
  title.innerHTML = "ERROR";
  text.innerHTML = "Ha surgido un error";
}
else if (mainElement.classList.contains("warning")){
  title.innerHTML = "AVISO";
  text.innerHTML = "Tenga cuidado";
}