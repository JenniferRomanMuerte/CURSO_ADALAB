// Lista de perretes

const firstDogImage =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const secondDogImage =
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const thirdDogImage =
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";

const listElement = document.querySelector(".js-list");

listElement.innerHTML =
  `<li>${firstDogName}
<img src = ${firstDogImage} alt=${firstDogName}/>
</li>` +
  `<li>${secondDogName}
<img src = ${secondDogImage} alt=${secondDogName}/>
</li>` +
  `<li>${thirdDogName}
<img src = ${thirdDogImage} alt=${thirdDogName}/>
</li>`;

// Cuántas letras tiene tu nombre

const letterElement = document.querySelector(".letter");
const nameElement = document.querySelector(".input_name");

nameElement.addEventListener("keydown", (ev) => {
  if ((ev.key === "Enter")) {
    username = nameElement.value;
    letterElement.innerHTML = `El nombre de mi compñaera es ${nameElement.value}, y está compuesto por
  ${username.length} caracteres`;
  }
});

