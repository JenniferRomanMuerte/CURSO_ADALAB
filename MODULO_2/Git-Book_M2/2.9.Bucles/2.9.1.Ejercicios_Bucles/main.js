'use strict';


// Practicando

for (let i = 1; i < 11; i++){
  console.log("Voy por la vuelta " + i)
}

let acc = 0;
for (let i = 1; i < 11; i++){

  acc += 2;
  console.log("En la vuelta " + i + ", El valor de acc es: " + acc);
}


// La media

const numbers = [2,6,4,8,5,9];

let sumNumbers = 0;

numbers.forEach((number) =>{
  sumNumbers += number;
});

console.log("La suma de los numeros del array es: " + sumNumbers);
console.log("La media de los nº es : " + sumNumbers/numbers.length);

//  Tenemos mucho en común

const button = document.querySelector('.button');
const movie1 = document.querySelector('#movie1');
const movie2 = document.querySelector('#movie2');
const answer = document.querySelector('.answer');

button.addEventListener('click', (ev) => {
  const movies = [movie1.value, movie2.value];
  for(const movie of movies){
      answer.innerHTML += `¡A mí también me encantó ${movie}! Tenemos mucho en común, humana.`;
  }
});


//  Previsión para ver la Luna del cazador

let lastMoon = 2017;

for(let i = 0; i < 15; i++){
  console.log("Las proximas lunas serán en: " + (lastMoon += 3));
}