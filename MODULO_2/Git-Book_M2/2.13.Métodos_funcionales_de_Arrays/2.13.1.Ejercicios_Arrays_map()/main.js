'use strict';


// 1. Inflar las notas

const marks = [5, 4, 6, 7, 9];
console.log('Notas originales:' + marks);
const addingOnePoint = note => note + 1;
const inflatedMarks = marks.map(addingOnePoint);
console.log('Notas infladas: ' + inflatedMarks);



// 2. Saludar es de buena educación

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const createGreeting = name => `Bienvenida ${name}`
const greeting = names.map(createGreeting);

console.log('Saludos:', greeting);



// 3. Gracias por confiar en nosotros

const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];

const createGreetingPremium = premium => {
  let userPremium = '';
  let userNoPremium = '';
  if(premium.isPremium === true){
    userPremium = `Bienvenida ${premium.name}. Gracias por confiar en nosotros.'`
  }
  else{
    userNoPremium = `Bienvenida ${premium.name}`;
  }
  const totalSaludos = userPremium + userNoPremium;
  return totalSaludos;
}
const greetingPremium = users.map(createGreetingPremium);
console.log('Todos los saludos según Premiun: ', greetingPremium);
