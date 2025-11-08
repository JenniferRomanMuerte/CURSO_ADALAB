'use strict';

// EV.TARGET, EV.CURRENTTARGET


// Capturamos toda la sección donde están los elementos
const sectionElement = document.querySelector('.section-btn');

/*
Función para aadir un evento al elemento clicado,
accedemos a él a través de ev.target
*/
const clickButton = (ev) => {
  ev.target.addEventListener('click',(ev)=>{
    console.log('Has clicado en botón', ev.target)
  })
};

/*
Creamos en evento en toda la sección,
llamamos a la función que asigna el evento al elemento clicado
*/
sectionElement.addEventListener('click', (clickButton));



// DIFERENCIAS ENTRE FOR


// for clasico
for(let i=0; i < 10; i++){
    console.log(`Hola soy el nº ${i+1}`)
}


// for of
const nombresGatos = ['Nala', 'Atreyu', 'Fuyur', 'Miku'];
  for(const gato of nombresGatos){
    console.log(gato);
  }


// forEach
nombresGatos.forEach(gato =>{
  console.log(gato);
});

//for in
const persona = {
    nombre: 'Jennifer',
    edad: 42,
    ciudad: 'Madrid',
  }

  for (const propiedad in persona){

    console.log('Nombre de la propiedad: ', propiedad); // Esto nos saca un listado de las propiedades
    console.log('Valor de la propiedad: ', persona[propiedad]); // Esto nos saca el valor de las propiedades

  }