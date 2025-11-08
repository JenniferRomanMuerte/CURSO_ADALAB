'use strict';

// filter() - BUSCAR

const contacts = [
{
  name: 'Jennifer',
  age: 42,
  ciudad: 'Madrid'
},
{
  name: 'María',
  age: 48,
  ciudad: 'Madrid'
},
{
  name: 'Angel',
  age: 67,
  ciudad: 'Alicante'
},
{
  name: 'Cristhian',
  age: 24,
  ciudad: 'Ávila'
},
{
  name: 'Andoni',
  age: 38,
  ciudad: 'Bilbao'
},
];


const liveInMadrid = contacts.filter((contact) => (contact.ciudad === 'Madrid'));
console.log('Contactos que viven en Madrid' , liveInMadrid);



// find() findIndex() -BUSCAR

const postionliveInMadrid = contacts.findIndex((contact) => (contact.ciudad === 'Madrid'));
console.log('Índice del 1º elemento que vive en Madrid' , postionliveInMadrid);

const userliveInMadrid = contacts.find((contact) => (contact.ciudad === 'Madrid'));
console.log('Índice del 1º elemento que vive en Madrid' , userliveInMadrid);



// map() TRANSFORMAR

const nameUpperCase = contacts.map(contact => contact.name.toLocaleUpperCase());
console.log('Cambiamos los nombres a mnayúsculas', nameUpperCase);

const cityOfContacts =  contacts.map(contact => contact.ciudad);
console.log('Obtenemos sólo las ciudades', cityOfContacts);