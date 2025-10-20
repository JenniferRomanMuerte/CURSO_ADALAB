// Dime tu nombre
// Cambia el estilo de un botón

// Cogemos los elementos necesarios para havcer la acción
const button = document.querySelector(".button");
const span = document.querySelector(".span");
const input = document.querySelector(".input");

// Creamos el evento (cada vez que se hace click)
button.addEventListener("click", () => {
  // insertamos en el elemento span el txto más el valor del input
  span.innerHTML = "Hola " + input.value;

  // Quitamos o añadimos la clase (ésta va entre comillas)
  button.classList.toggle("button");
});

// Dame ipsum
const parrafo = document.querySelector(".parrafo");
// Creamos el evento (cada vez que se hace click)
parrafo.addEventListener("click", () => {
  // Le decimos que al párrafo le añada el contenido de párrafo
  parrafo.innerHTML += parrafo.innerHTML;
});

// Información instantánea
const inputText = document.querySelector(".input-text");
const parrafoText = document.querySelector(".p-text");

// Evento de tipo input (Cuando pase algo en el input entonces salta el evento)
inputText.addEventListener("input", (event) => {
  // Capturamos lo que se escribe en el input (que es el elemento que le hemos puesto el listener)
  const value = event.currentTarget.value;
  // Le asignamos al parrafo lo que hemos capturado del input
  parrafoText.innerHTML = value;
});

// Estilo para un botón

/*
Con querySelectorAll guardamos todos los elementos que tengan esa clase en un array
asi que aqui estarían los 2 botones que tienen esa clase
Con querySelector recordemo0s que sólo se guarda el 1º elemento con esa clase
*/
const colorsButtons = document.querySelectorAll(".color-button");

// Añadimos el evento a los 2 botones recorriendo el array que contiene los dos:
for (const colorButton of colorsButtons) {
  colorButton.addEventListener("click", (event) => {
    const buttonSelected = event.currentTarget;
    buttonSelected.classList.toggle("color-button");
  });
}
