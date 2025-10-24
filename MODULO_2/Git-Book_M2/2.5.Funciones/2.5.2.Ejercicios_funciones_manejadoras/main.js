// CONTADOR

const button = document.querySelector(".js-button");

let input = document.querySelector(".contador");


function incremento(){
  console.log('Me estoy ejecutando');
  // Capturamos el valor del input y lo transformamos a number, para poder sumarle 1
  valor = Number(input.value) +1;
  console.log(valor);
   // Asignamos el nuevo valor al input
  input.value = valor;
}

/*
Cuando llamamos a una funcion desde un evento se
pone sólo el nombre de ésta, sin los paréntesis de detrás
*/
button.addEventListener('click', incremento);


// CAMBIAR EL COLOR DE FONDO

// Creamos un array con colores
const colors = ["red", "blue", "yellow", "green"];

// Capturamos los elemenros para trabajar con ellos
const buttonBackground = document.querySelector(".change-background");
const bodyElement = document.querySelector("body");
console.log(bodyElement);

buttonBackground.addEventListener('click', (ev)=>{

/*
   Recorremos el array con mathRandom para obtener un valor aleatorio
   Y mathFloor lo redondea siempre al entero, quita los decimales
*/
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  bodyElement.style.backgroundColor = randomColor;

});