'use strict';

const adalaber1 = {
  name: 'Susana',
  age: 34,
  profession: 'periodista',
  run:() => 'Estoy corriendo', // Declarar métodos dentro de un objeto
  /*
  Funcion del objeto para poder acceder a sus propiedades con this
  se debe declarar asi, (no como arrow)
  */
  showBio() {
    console.log('Mostrando la funcion showBio')
    console.log('Mi nombre es ' + this.name + ', tengo ' + this.age + ' años y soy ' + this.profession);
  }
}

console.log(`Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.profession}`);
console.log(adalaber1.run()); // Llamada al método del objeto
adalaber1.showBio();// Llamada a la funcion que obtiene los datos con this

const adalaber2 = {
  name: 'Rocio',
  age: 25,
  profession: 'actriz',
  runAMarathon :(distance ) => `Estoy corriendo un maratón de ${distance} kilómetros`,
}

console.log(`Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.profession}`);
console.log(adalaber2.runAMarathon(50));

// Crear una cesta de peras
const peras =  {
  num_max: 10,
  num_min: 1,
  num_current: 5,
  num_start: 2,
  addPera(){
    return this.num_current + 1;
  },
  removePera(){
    return this.num_current - 1;
  },
  restorePera(){
    return this.num_start;
  },
}

console.log(peras.addPera());
console.log(peras.removePera());
console.log(peras.restorePera());



// Estructura de datos para un usuario

const job =  'developer';
const user = {

}

user.firstName = 'Jennifer';
user.lastName = 'Román';
user.age = 42;
user.job = job;

console.log('Primer usuario creado: '+ user.firstName + ' ' + user.lastName + ' '  + user.age  + ' ' + user.job);

user.firstName = 'Maria';
const  newUserAge = user.age + 1;

console.log('Machacamos valores usuario: ' + user.firstName + ' ' +  newUserAge);

// Investigando
//Mirar que es typre dentro del evento
const button = document.querySelector('.button');
button.addEventListener('click', (ev) => {
  console.log(ev);  //Es una propiedad
});

// Mirar el input de tipo texto
const inputText = document.querySelector('.input_text');
console.dir(inputText);
