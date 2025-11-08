'use strict';


// 1. 1, 2, 3, lo hacemos otra vez

const listContainer = document.querySelector('.list');
const numbers = [1, 2, 3];

for(const number of numbers){
  let li = document.createElement('li');
  console.log(li);
  let numberItem = document.createTextNode(`${number}`);
  li.appendChild(numberItem);
  listContainer.appendChild(li);

}



// 2. De viaje

const containerImg = document.querySelector('.containerImg');
const selectCity = document.querySelector('.selectCity');

selectCity.addEventListener('select', (ev) => {
  const optionSelect = selectCity.value;
  console.log(optionSelect);
});