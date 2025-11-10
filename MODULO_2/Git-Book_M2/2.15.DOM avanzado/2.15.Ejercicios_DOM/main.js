"use strict";

// 1. 1, 2, 3, lo hacemos otra vez

const listContainer = document.querySelector(".list");
const numbers = [1, 2, 3];

for (const number of numbers) {
  let li = document.createElement("li");
  let numberItem = document.createTextNode(`${number}`);
  li.appendChild(numberItem);
  listContainer.appendChild(li);
}

// 2. De viaje

const containerImgs = document.querySelector(".containerImgs");
const selectCity = document.querySelector(".selectCity");
const madrid = [
  "https://www.civitatis.com/f/espana/madrid/guia/que-ver-m.jpg",
  "https://media.istockphoto.com/id/1303417572/es/foto/madrid-espa%C3%B1a-horizonte-de-la-ciudad-al-amanecer-en-la-plaza-de-la-ciudad-de-la-fuente-de.jpg?s=612x612&w=0&k=20&c=DJkcM6PrdfAuJAX6GsOCamwTP_mtPDbp_gurkgRpnuM=",
  "https://img.freepik.com/foto-gratis/puerta-toledo-madrid-espana_1398-4524.jpg?semt=ais_hybrid&w=740&q=80",
];

const paris = [
  "https://cdn2.civitatis.com/francia/paris/galeria/torre-eiffel-altura.jpg",
  "https://www.cia-france.es/media/1803/paris-louvre_1100x700.jpeg",
  "https://www.101viajes.com/sites/default/files/puesta-sol-paris.jpg",
];

const newYork = [
  "https://www.civitatis.com/f/estados-unidos/nueva-york/galeria/carteles-publicitarios-times-square.jpg",
  "https://touridiomas.com/site/wp-content/uploads/nueva-york-tour-idiomas.jpg",
  "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bnVldmElMjB5b3JrfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
];

selectCity.addEventListener("change", (ev) => {
  // Capturamos el valor
  const optionSelect = selectCity.value;
  // Resetamos las imagenes
  containerImgs.innerHTML = "";
  // Llamamos a la funcion pasando la eleccion del usuario
  createImg(optionSelect);
});

const createImg = (optionSelect) => {
  // Creamos 3 div con su elemento img
  for (let i = 0; i < 3; i++) {
    // Creamos el contenedor
    let containerImg = document.createElement("div");
    // Le añadims la clase al contenedor
    containerImg.classList.add("containerImg");
    // Creamos la imagen
    let img = document.createElement("img");
    // Le añadimos la clase a la imagen
    img.classList.add("img");
    // Añadimos la imagen como hija a su contenedor
    containerImg.appendChild(img);
    /*
    Dependiendo de la elección de la ciudad,
    recorremos el array con las imagenes de la ciudad elegida
    */
    if (optionSelect === "Madrid") {
      // Le añadimos la ruta de la imagen de cada posicición en el array
      img.setAttribute("src", madrid[i]);
      img.setAttribute("alt", `Madrid_${i}`);
    } else if (optionSelect === "Paris") {
      // Le añadimos la ruta de la imagen de cada posicición en el array
      img.setAttribute("src", paris[i]);
      img.setAttribute("alt", `París_${i}`);
    } else if (optionSelect === "NewYork") {
      // Le añadimos la ruta de la imagen de cada posicición en el array
      img.setAttribute("src", newYork[i]);
      img.setAttribute("alt", `New_York_${i}`);
    }
    // Añadimos cada contendor con su imagen al contenedor que contiene todas
    containerImgs.appendChild(containerImg);
  }
};

// 3. Autocompletado

const objects = [
  {
    name: "Jennifer",
    lastname: "Román",
    phone: 642206364,
  },
  {
    name: "Maria",
    lastname: "Serna",
    phone: 646783434,
  },
  {
    name: "Puri",
    lastname: "Muerte",
    phone: 678465723,
  },
];

const selectPerson = document.querySelector(".selectPerson");
const autocompletedForm = document.querySelector(".autocompleted__form");

const nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.classList.add("nameInput");
nameInput.setAttribute("placeholder", "Introduce tu nombre");
const lastnameInput = document.createElement("input");
lastnameInput.setAttribute("type", "text");
lastnameInput.setAttribute("placeholder", "Introduce tu apellido");
lastnameInput.classList.add("lastnameInput");
const phoneInput = document.createElement("input");
phoneInput.setAttribute("type", "text");
phoneInput.setAttribute("placeholder", "Introduce tu telefono");
phoneInput.classList.add("phoneInput");

autocompletedForm.appendChild(nameInput);
autocompletedForm.appendChild(lastnameInput);
autocompletedForm.appendChild(phoneInput);

for (const object of objects) {
  const optionPerson = document.createElement("option");
  const textOption = document.createTextNode(object.name);
  optionPerson.setAttribute("value", object.name);
  optionPerson.appendChild(textOption);
  selectPerson.appendChild(optionPerson);
}

const renderPerson = (nameSelected) => {
  for (const object of objects) {
    if (nameSelected === object.name) {
      const textName = object.name;
      const textLastname = object.lastname;
      const textPhone = object.phone;
      nameInput.setAttribute("value", textName);
      lastnameInput.setAttribute("value", textLastname);
      phoneInput.setAttribute("value", textPhone);
    }
  }
};

selectPerson.addEventListener("change", (ev) => {
  const nameSelected = selectPerson.value;
  renderPerson(nameSelected);
});

//  Castigo

const punishment = document.querySelector(".punishment");

// Creamos el titulo
const subtitle = document.createElement("h2");
const textSubtitle = document.createTextNode("Castigo");
subtitle.appendChild(textSubtitle);

punishment.appendChild(subtitle);

// Creamos la pizarra
const board = document.createElement("article");
board.classList.add("board");

punishment.appendChild(board);

// Creamos la frase y la pintamos 100 veces
for (let i = 0; i < 100; i++) {
  const paragraph = document.createElement("p");
  const phrase = document.createTextNode(
    "He aprendido bien cómo funcionan los bucles"
  );
  paragraph.appendChild(phrase);
  board.appendChild(paragraph);

  // Creamos los select con sus opciones
  const selectPhrase = document.createElement('select');
  selectPhrase.classList.add('select');
  const optionWhite = document.createElement('option');
  const optionBlue = document.createElement('option');
  const optionRed = document.createElement('option');

  // Creamos el diseño de la opción blanco
  const textOptionWhite = document.createTextNode('Blanco');
  // Le asignamos el color en string ya que si le asignamos el textOptionWhite no vale porque éste es un nodo
  optionWhite.setAttribute('value', 'white');
  optionWhite.setAttribute('selected', true);
  optionWhite.appendChild(textOptionWhite);

  // Creamos el diseño de la opción azul
  const textOptionBlue = document.createTextNode('Azul');
  // Le asignamos el color en string ya que si le asignamos el textOptionWhite no vale porque éste es un nodo
  optionBlue.setAttribute('value', 'blue');
  optionBlue.appendChild(textOptionBlue);

  // Creamos el diseño de la opción rojo
  const textOptionRed = document.createTextNode('Rojo');
  // Le asignamos el color en string ya que si le asignamos el textOptionWhite no vale porque éste es un nodo
  optionRed.setAttribute('value', 'red');
  optionRed.appendChild(textOptionRed);

  // Le añadimos las opciones al select
  selectPhrase.appendChild(optionWhite);
  selectPhrase.appendChild(optionBlue);
  selectPhrase.appendChild(optionRed);

  //Añadimsos los select a cada Frase
  paragraph.appendChild(selectPhrase);

  // Añadimos el evento a cada select
  selectPhrase.addEventListener('change', (event) => {
  const select = event.currentTarget; // el select que ha cambiado
  const selectedColor = select.value.toLowerCase(); // obtiene el valor seleccionado en el select
  const paragraph = select.parentElement; // Accedemos al párrafo que es el padre de donde está el select
  paragraph.style.color = selectedColor; // Cambiamos el color del texto
});

}


