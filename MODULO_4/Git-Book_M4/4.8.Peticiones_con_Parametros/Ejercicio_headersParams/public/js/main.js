'use strict';

// post new user

document.querySelector('.js-btn-header-params').addEventListener('click', () => {
  fetch('http://localhost:3000/user', {
    method: 'POST', // o GET, PUT, PATCH...
    headers: {
      parametro1: true,
      'parametro2string': 'Soy Jennifer Román',
      otroParametroMas: '123',
      otroMas : 123,
      parametroObjeto: {
        name: Jennfier,
        apellido: 'Román'
      }
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
});
