'use strict';

const  inputNumber = document.querySelector('.js-inputNumber');
const  btn= document.querySelector('.js-btn');
const resultElement = document.querySelector('.js-resultElement');

// Solo crea 'person' si aún no existe en localStorage
if (!localStorage.getItem('persistentNum')) {
  localStorage.setItem('persistentNum', '0');
}

const numInLocalStorage = parseInt(localStorage.getItem('persistentNum'));

let sumResult = numInLocalStorage;
resultElement.innerHTML = sumResult;

const handleClickBtn = (ev) =>{
  ev.preventDefault();

  const num = parseInt(inputNumber.value);
  sumResult = sumResult + num;
  resultElement.innerHTML = sumResult;
  localStorage.setItem('persistentNum', JSON.stringify(sumResult));
}

btn.addEventListener('click', handleClickBtn);