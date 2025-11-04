'use strict';

// 1. Encuentra el usuario

const users = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];


const userError = users.find((user) => {
  return user.pin === 5232;
});

console.log('El usuario que tiene la incidencia es: ', userError);

const userErrorIndex = users.findIndex((user) => {
  return user.pin === 5232;
});

console.log(userErrorIndex);
users.splice(userErrorIndex,1);

console.log('Usuarios después de eliminar al usuario con error', users);