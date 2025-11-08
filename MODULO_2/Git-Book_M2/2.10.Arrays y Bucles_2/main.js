'use strict';

// Numeritos
let Numbers = [];
const get100Numbers = () =>{

  for(let i = 1; i <= 100; i++){
    Numbers.push(i);
  }
  console.log(Numbers);
}

get100Numbers();


// The numbers

const lostNumbers = [4, 8, 15, 16, 23, 42];
let parNumbers = [];
let threeNumbers = [];
let newArrayNumbers = [];

const bestLostNomber  = () =>{
  for(const number of lostNumbers){
    if((number % 2) === 0){
      parNumbers.push(number);
    }
    if((number % 3) === 0){
      threeNumbers.push(number);
    }
  }
  console.log('Array de nº pares: ' + parNumbers);
  console.log('Array de nº multiplos de 3: ' + threeNumbers);
}

bestLostNomber();

console.log(
  'Array concatenado de nº pares y múltiplos de 3: ' + (newArrayNumbers = parNumbers.concat(threeNumbers)));