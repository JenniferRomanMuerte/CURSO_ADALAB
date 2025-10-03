// Declaramos los elementos del DOM
const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("#posts-container");

/* Función para hacer las peticiones
   esta función recibe:
  - Método que vamos a usar para hacer la petición
  - Url donde hacemos la petición
  - Tipo de dato qeu vamos a enviar
*/
function sendHTTPRequest(method, url, data) {
  return fetch(url, { // Hacemos una petición a la url
    method: method, // El tipo de método que vamos a hacer la petición
    body: JSON.stringify(data), // Cuando hacemos un post es la información qeu enviamos al servidor en formato json
    headers: {
      "Content-Type": "application/json", // Tipo de información que mandamos
    },
  }).then((response) => { // Si la respuesta es existosa nos devuelve la respuesta
    return response.json();
  });
}

/* Función para recibir datos
   Usamos una función async
*/
async function fecthPosts() {
  const responseData = await sendHTTPRequest( // Llamamos a la función anterior pasando el método y la url
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(responseData);
  const listOfPosts = responseData; // Guardamos la respuesta en una variable

  // Iteramos por la respuesta, para obtener la info de cada objeto y poder imprimirla en el DOM
  for (const post of listOfPosts) { // Por cada elemento tienes que generar esto:

    const postContainer = document.createElement("article");

    // Obtenemos el datto del post y lo creamos en el DOM
    postContainer.id = post.id;
    postContainer.classList.add("post-item");

    const title = document.createElement("h2");
    title.textContent = post.title;

    const body = document.createElement("p");
    body.textContent = post.body;

    const button = document.createElement("button");
    button.textContent = "DELETE Content";

    postContainer.append(title);
    postContainer.append(body);
    postContainer.append(button);

    listElement.append(postContainer);
  }
}

fetchButton.addEventListener("click", fecthPosts); // Botón pque llama a la función para hacer la petición


/* Función async para crear un elemento nuevo
  Tiene 2 parametro:
  -Titulo
  -Contenido
  -Creamos un id de usuario aleatorio (Es necesario para crear el onjeto )
*/
async function createPost(title, content) {
  const userId = Math.random(); // Id random
  // Varibale para mandar los datos necesarios juntos
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  // Llamamos a la 1º función pasandole el método, la url y el contendido
  sendHTTPRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

// Generamos un evento para obtener los datos de los input y poder mandarlos
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = event.currentTarget.querySelector("#title").value;
  const content = event.currentTarget.querySelector("#content").value;

  createPost(title, content); // Llamamos a la función para crear el objeto
});

/* Función  para eliminar un elemento
   Creamos un evento para eliminar el elemento,
   se lo asignamos al padre de las tarjetas, NO al botón,
   necesitamos saber el id del elemento a eliminar
*/
postList.addEventListener("click", (event) => {
  console.log(event);
  // Si el target del elementop es un botón entonces:
  if (event.target.tagName === "BUTTON") {
    // Guardamos el id, del elemento con target aricle
    const postId = event.target.closest("article").id;
    console.log(postId);
    /*
    Mandamos a la 1º función el método,
    la url, y dentro de la url al final el id que qeremos borrar
    */
    sendHTTPRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});