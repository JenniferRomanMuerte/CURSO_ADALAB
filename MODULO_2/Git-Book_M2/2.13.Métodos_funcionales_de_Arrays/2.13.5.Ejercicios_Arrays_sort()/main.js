'use strict';

// 1. Clasificación de la carrera

const runnersStudent = [
  { name: "Gregory Goyle", time: 56, student: true },
  { name: "Nymphadora Tonks", time: 9, student: false },
  { name: "Luna Lovegood", time: 45, student: true },
  { name: "Cedric Diggory", time: 28, student: true },
  { name: "Cho Chang", time: 35, student: true },
];

const clasification = runnersStudent.sort((a, b) => {
  return a.time - b.time;
});

console.log(clasification);

// 2. Poniendo orden en nuestros usuarios

const users = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

const usersOrdenByName = users.sort((a, b) => {
  return a.name.localeCompare(b.name);
});

console.log('Usuarios colocados alfabéticamente', usersOrdenByName);

const usersOrdenByPin = users.sort((a, b) => {
  return a.pin - b.pin;
});


console.log('Usuarios colocados por nº de pin', usersOrdenByPin);