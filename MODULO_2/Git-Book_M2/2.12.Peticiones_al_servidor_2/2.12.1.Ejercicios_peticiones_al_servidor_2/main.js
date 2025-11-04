'use strict';

const searchBtn = document.querySelector('.search-btn');
const  inputSearch = document.querySelector('.input-search');
const  starWarsListElement = document.querySelector('.starWars-list');
// Solo crea 'person' si aún no existe en localStorage
if (!localStorage.getItem('person')) {
  localStorage.setItem('person', '');
}

const person = localStorage.getItem('person');


searchBtn.addEventListener('click', (ev) => {
  ev.preventDefault();
  const textSearch = inputSearch.value;

  if(textSearch === person.name){
    console.log('Entro por el if porque estoy en localStorage');
     for(const key in person){
      starWarsListElement.innerHTML +=
      `<li>${key}: ${persondata[key]}</li>`
     }
  }
  else{
  fetch(`https://swapi.py4e.com/api/people?search=${textSearch}`)
  .then((response) => response.json())
  .then((data) => {
    for(const persondata of data.results){
     for(const key in persondata){
      starWarsListElement.innerHTML +=
      `<li>${key}: ${persondata[key]}</li>`
     }
     localStorage.setItem('person', JSON.stringify(persondata));
    }

  });

  }
});