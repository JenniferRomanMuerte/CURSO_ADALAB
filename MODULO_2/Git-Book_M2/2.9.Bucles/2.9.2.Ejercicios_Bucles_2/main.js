'use strict';


//  A story of adalabers
let  adalabers = [

  {
    name: 'Maria',
    age: 29,
    profession: 'diseñadora',
  },
  {
    name: 'Lucía',
    age: 31,
    profession: 'ingeniera quimica',
  },
  {
    name: 'Susana',
    age: 34,
    profession: 'periodista ',
  },
  {
    name: 'Rocio',
    age: 25,
    profession: 'actriz',
  },
  {
    name: 'Inmaculada',
    age: 21,
    profession: 'diseñadora',
  },
];

const countAdalabers =  () => {
  adalabers.length;
  console.log('El nº de adalabers es: '+ adalabers.length);
}

countAdalabers();


const averageAge  =  () => {

  let averageAge = 0;
  for(let i = 0; i < adalabers.length; i++){
    averageAge += adalabers[i].age;
  }
  console.log('La edad media de nuestras adalabers es: '+ (averageAge/adalabers.length));
}

averageAge();


const theYoungest  =  () => {
  let age = adalabers[0].age; // Guardamos la edad de la 1º adalaber
  let indexYoungest = 0; // Variable para almacenar el íncide
  for(let i = 0; i < adalabers.length; i++){ // Recorremos el array de adalabers
    if(adalabers[i].age < age){ // Si la edad de alguna adalaber es menor que la 1º
      age = adalabers[i].age; // Actualizamos la edad
      indexYoungest = i; // Guardamos el índice de la adalabers con menor edad
    }
  }
  // Accedemos al nombre de la más joven a través del índice que hemos guardado
  console.log('La adalaber más joven es: ' + adalabers[indexYoungest].name);
}

theYoungest();



const countDesigners  =  () => {
  let isDesigner = 0;
  for(let i = 0; i < adalabers.length; i++){
    if (adalabers[i].profession === 'diseñadora'){
      isDesigner ++;
    }
  }
  console.log('El nº de adalabers diseñadoras es: ' + isDesigner);
}
countDesigners();

// Botones de alarma

const section = document.querySelector('.alarm');
const buttons = document.querySelectorAll('.button_alarm'); // Esto es un array que contiene todos los botones


// Con este for recorremos todos los elementos botones
buttons.forEach((btn) =>{
  btn.addEventListener('click', (ev) => { // A cada botón ya le añadimos el evento
    if(section.style.backgroundColor == 'white'){ // Si el background de section es blanco se lo ponemos rojo
      section.style.backgroundColor = 'red';
    }
    else{ // Si no es blanco se lo ponemos blanco
       section.style.backgroundColor = 'white';
    }
  });
});


//  Tipos de dato de un array

const items = [
  'Ada',
  1815,
  ['Informática', 'Matemática', 'Escritora'],
  {
    mother: 'Anna Isabella',
    father: 'Lord Byron',
  },
];

items.forEach((item, index) => { // Recorremos el array obteniendo cada elemento en item y su index
  // Mostramos el nombre del elemento que es el item, su posición que es el index, y el typeof del elemento
  console.log(`El dato ${item} está en la posición ${index} y es de tipo ${typeof item}`);
});


