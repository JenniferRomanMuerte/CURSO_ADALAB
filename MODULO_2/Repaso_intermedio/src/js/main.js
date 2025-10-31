'use strict';

const main = document.querySelector('.main');
const title = document.querySelector('.main__title');
const selectElement = document.querySelector('.main__form--select');
const buttonElement = document.querySelector('.main__form--button');


const isPar =()=>{
  const randomNumber = Math.round (Math.random()*101);
  if(randomNumber % 2 === 0){
    return true;
  }
  else{
    return false;
  }
}


buttonElement.addEventListener('click', (ev)=>{
  ev.preventDefault();

  const option = selectElement.value;
  title.innerHTML = option;

  const numberRandom = isPar();
  
  if(numberRandom === true){
    main.style.backgroundColor =' #ffcc00';
  }
  else{
     main.style.backgroundColor =' #ff9900';
  }

});