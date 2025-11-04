'use strict';

// 1. Solo los premium

const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];

const premiumUsers = users.filter((user) => {
if (user.isPremium){
  return user;
}
})

console.log('Solo los usuarios Premium', premiumUsers);



// 2. Los pares pueden entrar

const pins = [2389, 2384, 2837, 5232, 8998];

const isPar = pins.filter((pin) => {
if (pin%2 === 0){
  return pin;
}
})

console.log('Solo lospin que son pares', isPar);


// 3. Los usuarios que pueden entrar

const usersPins = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

const PinUserisPar = usersPins.filter((userPin) => {
if (userPin.pin % 2 === 0){
  return userPin;
}
})

console.log('Solo usuarios que tiene pin par', PinUserisPar);