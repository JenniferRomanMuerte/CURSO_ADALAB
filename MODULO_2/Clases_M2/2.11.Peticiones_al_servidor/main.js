"use strict";

// SECCION QUERIE SELECTOR
const contactUl = document.querySelector(".js_contactUl");
const saveButton = document.querySelector(".js-saveButton");
const nameInput = document.querySelector(".js-nameInput");

// SECCION DATOS
let contacts = [];

// SECCION FUNCIONES
const renderContact = (oneContact) => {
  contactUl.innerHTML += `<li >
          <article class="contact">
            <h3 class="contact_title">${oneContact.name}</h3>
              <dl class = "contact_data">
                <dt>Relacion:</dt>
                <dd>${oneContact.relationship}</dd>
                <dt>Actriz:</dt>
                <dd>${oneContact.actress}</dd>
              </dl>
          </li>
          </article>
          `;
};


const renderAllContacts = () => {
  contactUl.innerHTML = "";
  for (const oneContact of contacts) {
    renderContact(oneContact);
  }
};


// SECCIONES AL CARGAR LA PÁGINA

fetch("https://beta.adalab.es/resources/apis/wednesday-v1/contact-list.json")
  .then(response=>response.json())
  .then((data)=>{
    contacts = data
    renderAllContacts();
  })
  .catch(() =>{
    contactUl.innerHTML = "En estos momentos no se puede obtyener la info"
  });





