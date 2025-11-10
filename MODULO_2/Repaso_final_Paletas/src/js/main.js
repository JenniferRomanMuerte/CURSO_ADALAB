'use strict';


const shipsListElement = document.querySelector('.js-shipsList');
const shipsListFavorite = document.querySelector('.js-shipsListFavorite');
const favorites = [];
const inputSearch = document.querySelector('.js-inputSearch');
const dataInLocalStorage = JSON.parse(localStorage.getItem('ships'));


// Pinta los datos que llegan del servidor
// Usamos Dom avanzado para crear los elementos del HTML
const renderList = (data) =>{
  shipsListElement.innerHTML = '';

  data.palettes.forEach((ship) => {
  const li = document.createElement('li');
  li.classList.add('li-ship');

  const h3 = document.createElement('h3');
  h3.appendChild(document.createTextNode(ship.name));
  h3.classList.add('h3-ship');

  const ul = document.createElement('ul');
  ul.classList.add('ul-ship');

  li.appendChild(h3);
  li.appendChild(ul);

 ship.colors.forEach((color) =>{
    const liColor = document.createElement('li');
    liColor.setAttribute('style', `background-color: #${color}`);
    liColor.classList.add('liColor');
    ul.appendChild(liColor);
  });

  shipsListElement.appendChild(li);
  });

  // Capturamos todos los li que acabamos de pintar
  const shipsElement =  document.querySelectorAll('.li-ship');

  // Se lo mandamos a la función de añadir fasvoritos
  addingFavorite(shipsElement);
}


// Función para agregar favoritos, recibe la lista de los li con todas las naves
const addingFavorite = (shipsElement) =>{
  // Recorremos la lista de li y le añadimos un evento a cada uno de ellos
  shipsElement.forEach((shipElement) =>{

    shipElement.addEventListener('click', (ev) => {
      // Añadimos a la lista de favoritos un clon del li que ha seleccionado
      // Si añadimos el elemento directamente se borra de la lista para añadirlo aqui.
      shipsListFavorite.appendChild(shipElement.cloneNode(true))
    });
  });
}


inputSearch.addEventListener('input', (ev) => {
  let textInput = (inputSearch.value).toLowerCase();
  // Obtenemos los elementos h3 sólo de la lista de naves, no de los favoritos
  const textH3s = shipsListElement.querySelectorAll('.h3-ship');
  // Vaciamos la lita
  shipsListElement.innerHTML = "";
  // Recorremos el array de elementos
  textH3s.forEach((textH3 => {
    // Capturamos el texto de cada h3 y lo pasamos todo a minúsculas
    const nameShip = textH3.textContent.toLowerCase();
    // Comprobamos si el texto del h3 incluye las letras que hemos puesto en el input
    if((nameShip.includes(textInput))){
      // Si las contiene añadimos el elemento li entero (padre de h3) a la lista de naves
      shipsListElement.appendChild(textH3.parentNode);
    }
  }));
  // Si el input se queda vacio, recuperamos el listado del localStorage y llamamos a la función para pintarlas todas
  if(textInput === ''){
    renderList(JSON.parse(localStorage.getItem('ships')));
  }
});

// CUANDO INCIA LA PÁGINA
if(dataInLocalStorage !== null){
  renderList(dataInLocalStorage);
}
else{
fetch("https://beta.adalab.es/ejercicios-de-los-materiales/js-ejercicio-de-paletas/data/palettes.json", {
}).then((response) => response.json())
.then((data) => {
  localStorage.setItem('ships', JSON.stringify(data));
  renderList(data);
});
}

