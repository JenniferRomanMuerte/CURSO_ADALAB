'use strict';

// 1. Generar número aleatorio
function getRandomNumber() {
  fetch('https://api.rand.fun/number/integer?min=1&max=100')
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.randomNumber').innerHTML = data.result;
    });
}

//getRandomNumber();



// 2.Chihuahas, chihuahas por todas partes


const showDogBtn = document.querySelector('.showDog');
const dogImgElement = document.querySelector('.dog');

function getChihuahas() {
  fetch('https://dog.ceo/api/breed/chihuahua/images/random')
    .then((response) => response.json())
    .then((data) => {
      dogImgElement.src = data.message;
    });
}

showDogBtn.addEventListener('click', (ev) => {
  getChihuahas();
});


// 3.API de usuarios de GitHub

const searchBtn = document.querySelector('.search');
const inputNameElement = document.querySelector('.nameInput');
const listResult = document.querySelector('.list-result');

const getInfoUser = (user) => {
  fetch(`https://api.github.com/users/${user}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      listResult.innerHTML +=
      `<li> Nombre: ${data.login}</li>
      <li> Foto:
      <img src="${data. avatar_url}" alt="photo" class="photo">
      </li>
      <li>Número de repositorios: ${data.public_repos}</li>`
    });
}

searchBtn.addEventListener('click', (ev) => {
  ev.preventDefault();
  const user = inputNameElement.value;
  getInfoUser(user);
});


// 4.Pintando varias imágenes a la vez

const jsBtn = document.querySelector('.js-btn');
let  containerImg = document.querySelector('.imgs');

const createPromise = () =>
  fetch('https://dog.ceo/api/breeds/image/random').then((response) =>
    response.json()
  );

  function getBreedImages() {
    console.log('Se ejecuta la función getBreedImages');
  const promises = Array.from({ length: 10 }, () => createPromise()); // Para llamar a la función de crear promesa 10 veces
  console.log('Estas son las promesas recibidas:' + promises);
  Promise.all(promises).then((responses) => {
    for (let i = 0; i < responses.length; i++) {
      containerImg.innerHTML += `
       <img src= "${responses[i].message}" alt="dog" class="dog" />
      `
    }
  });
}

jsBtn.addEventListener('click', (ev) => {
  console.log('Entro al evento de breed');
  ev.preventDefault();
  getBreedImages();
});
