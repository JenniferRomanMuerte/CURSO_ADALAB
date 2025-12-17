"use strict";

// post new user

document
  .querySelector(".js-btn-post-new-user")
  .addEventListener("click", () => {
    const inputName = document.querySelector(".js-input-name");
    const inputEmail = document.querySelector(".js-input-email");
    // create query params
    const bodyParams = {
      userName: inputName.value,
      userEmail: inputEmail.value,
    };

    fetch("http://localhost:3000/user", {
      method: "POST",
      body: JSON.stringify(bodyParams),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Server response:", responseData);
        printJson(".js-post-new-user-result", responseData);
      });
  });

// get users data

document.querySelector(".js-btn-get-users").addEventListener("click", () => {
  const inputFilterName = document.querySelector(".js_input-filter-name");
  const inputFilterEmail = document.querySelector(".js_input-filter-email");
  const queryParamsFilter = `?name=${inputFilterName.value}&email=${inputFilterEmail.value}`;

  fetch("http://localhost:3000/users" + queryParamsFilter)
    .then((response) => response.json())
    .then((responseData) => {
      console.log("Server response:", responseData);
      printJson(".js-get-users-result", responseData);
    });
});

// helper

const printJson = (selector, jsonData) => {
  const jsonHtml = JSON.stringify(jsonData, null, 2);
  document.querySelector(selector).innerHTML = jsonHtml;
};
