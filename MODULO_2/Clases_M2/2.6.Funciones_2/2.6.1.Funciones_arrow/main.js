'use strict';

const resultSection  = document.querySelector('.js-resultSection');
const redBtn = document.querySelector('.js-redBtn');
const  yellowBtn= document.querySelector('.js-yellowBtn');

const colorInput  = document.querySelector('.colorSection__input');
const colorBtn = document.querySelector('.js-colorBtn');


const addColor = (color) => {
  if(resultSection.classList.length > 0){
    resultSection.classList = "";
  }
  resultSection.classList.add(color);
}


colorBtn.addEventListener('click', (ev) => {
  ev.preventDefault();
  const color = colorInput.value;
  addColor(color);
});


redBtn.addEventListener('click', (ev) => {
  ev.preventDefault();
  addColor('red');
});
yellowBtn.addEventListener('click', (ev) => {
  ev.preventDefault();
  addColor('yellow');
});

