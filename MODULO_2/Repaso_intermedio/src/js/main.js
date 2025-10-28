'use strict';

const main = document.querySelector('.main');
const title = document.querySelector('.main__title');
const selectElement = document.querySelector('.main__options--select');
const buttonElement = document.querySelector('.main__options--button');


const isPar =()=>{

  const randomNumber = Math.floor (Math.random()*101);

  if(randomNumber%2 === 0){
    return true;
  }
  else{
    return false;
  }
}

buttonElement.addEventListener('click', (ev)=>{
  console.log('Entro al evento');
  const option = selectElement.value;
  console.log(option);
  title.innerHTML = option;
  const numberRandom = isPar();
  if(numberRandom === true){
    main.style.backgroundColor =' #ffcc00';
  }
  else{
     main.style.backgroundColor =' #ff9900';
  }

});