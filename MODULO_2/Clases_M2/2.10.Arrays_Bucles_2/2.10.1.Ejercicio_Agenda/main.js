"use strict";

// SECCION QUERIE SELECTOR
const contactUl = document.querySelector(".js_contactUl");
const saveButton = document.querySelector('.js-saveButton');
const nameInput = document.querySelector('.js-nameInput');

// SECCION DATOS
const contacts = ["Jennifer", "Maria", "Puri", "Iván", "Clara"];
const oneName = contacts[0];


// SECCION FUNCIONES
const renderContacts = () => {
  contactUl.innerHTML = "";
  for (const contact of contacts) {
    contactUl.innerHTML += `<li class="contact">
          <h3 class="contact_title">${contact}</h3>
        </li>`;
  }
};

// SECCION EVENTOS
saveButton.addEventListener('click', (ev) =>{
  ev.preventDefault();

  const newName = nameInput.value;
  contacts.push(newName);
  renderContacts();

});

// SECCIONES AL CARGAR LA PÁGINA
renderContacts();