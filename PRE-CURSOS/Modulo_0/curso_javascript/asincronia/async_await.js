/*
Async and await ejecutan una promesa,
es una forma más sencilla de declarar promesas
*/

/* 1º declaramos esta función que es una promesa como ejemplo
function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/posts") // Hacemos petición a la API
        .then((response) => response.json()) // Nos devuelve esto si la respuesta es exitosa y la convertimos a json
        .then((data) => console.log(data))  // Entonces si la respuesta es existosa la sacamos por consola
        .catch((error) => console.log(error));  // Si falla, imprimimos la respuesta por consola
}
*/

/* 2º. Declaramos la misma función con async
    en este tipo de funciones se trabaja con try y catch
    sustituyen: try al  then (si la respuesta es existosa se ejecuta lo que haya dentro de try)
    catch se ejecuta si hay error y recibe el error
*/
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = response.json();
    conmsole.log(data);
  } catch (error) {
    console.log(error);
  }
}

// Para hacer múltiples peticiones a una API, se usa 'for await'
const urls = [
  "https://rickandmortyapi.com/api/character",
  "https://rickandmortyapi.com/api/location",
  "https://rickandmortyapi.com/api/episode",
];

async function fetchNewData() {
  try {
    for await (let url of urls) {
      // Iteremaos por el array de urls para hacer una peticion a cada una de ellas
      let response = await fetch(url); // Hacemos la petición con fetch
      let data = await response.json; // Guardamos la espuesta en una varibale en formato json
      console.log(data); // Imprimimos la respuesta
    }
  } catch (error) {
    console.log(error);
  }
}
