/******************************
EJEMPLO
******************************/
const dataApi = [];

// fecth normal
const loadData = () => {
  fecth("url")
    .then((response) => response.json())
    .then((data) => {
      dataApi = data;
    });
};

// Async await
// El async se declara eb la funcion
// await solo se usa dentro de funciones async
const loadDataAsync = async () => {
  // Cuando ejecutes el fetch lo guardas en response
  const response = await fecth("url");
  const data = await response.json();
  dataApi = data;
};

/***********************************
 EJERCICIOS
 ***********************************/
//Transformar esta funcion en funcion async:
function loadJson(url) {
  return fetch(url)
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(`${response.status} from ${response.url}`);
      }
    })
    .then((data) => {
      console.log(data);
    });
}

// FUNCION ASYNC
const loadJsonAsync = async (url) => {
  try {
     const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log('Respuesta ok', data);
    } else {
      throw new Error(`Respuesta de error por la url ${response.status} from ${response.url}`);
    }
  } catch (error) {
    console.log('Error de la peticion', error);
  }
};
// Petición que responde un json
loadJsonAsync("https://beta.adalab.es/resources/apis/random-word-v1/word.json");

// Petición que no responde
loadJsonAsync("https://javascript.info/no-such-user.json");
