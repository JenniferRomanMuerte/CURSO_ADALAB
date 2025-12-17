# 4.8.2 Peticiones con body params

En esta lección vamos a explicar cómo enviar datos a través de body params. Es exactamente lo mismo que enviar datos con query params, pero por otro sitio.

Los body params nos sirve para obtener los valores que un formulario envía a nuestra API. Se utilizan para aquellos valores que no queremos que se vean en la URL, por ejemplo contraseñas, correos electrónicos, en general información propia de la aplicación que se esté utilizando.

Para enviar datos a traves de los body params desde la aplicación cliente hay que enviarlos a través del cuerpo de la petición. Para enviar información en una solicitud POST en JavaScript, debemos pasar una propiedad en el cuerpo de la configuración del `fetch`.

```jsx
const bodyParams = {
  userName: 'Maricarmen',
  userEmail: 'mari@gmail.com',
};

fetch('http://localhost:3000/user', {
  method: 'POST',
  body: JSON.stringify(bodyParams),
  headers: {
    'Content-Type': 'application/json',
  },
});
```

Es uy importante que la petición sea de tipo `POST` y que el objeto a enviar debe ser codificado en formato JSON y para ello utilizamos el método `JSON.stringify` para pasar un JSON adecuado.

En nuestro servidor para obtener los datos que vienen por el body accedemos al `body` de la petición con `req.body` y dentro de este a cada propiedad, veamos el ejemplo:

```jsx
app.post('/user', (req, res) => {
  console.log('Body params:', req.body);
  console.log('Body param userName:', req.body.userName);
  console.log('Body param userEmail:', req.body.userEmail);

  // add new user to dababase
  users.push({
    name: req.body.userName,
    email: req.body.userEmail,
  });

  res.json({
    result: 'User created',
  });
});
```

Podéis ver el ejemplo anterior completo [aquí](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/node-express-request-body-param).

En este ejemplo en el endpoint `user` de tipo `post` recibe por el body de la petición el `userName` y el `userEmail`, datos que utiliza para posteriormente añadir al listado de usuarios.

{% embed url="<https://youtu.be/96d4sB5pWI8>" %}

> [Ejercicio del vídeo](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/node-express-request-body-params)

### Conclusiones

Para trabajar con body params debemos saber que:

* Desde el navegador:
  * Se añaden en el cuerpo del fetch.
  * Se pueden utilizar con cualquier verbo (POST, PUT, PATCH...) excepto GET.
  * Se envían en un string que contiene un JSON, por eso usamos `JSON.stringify(...)`.
  * Se envía una cabecera indicando que vamos a enviar los datos en formato JSON `'application/json'`, es decir, con:

    ```jsx
    const bodyParams = {
      userName: 'Maricarmen',
      userEmail: 'mari@gmail.com',
    };
    fetch('http://localhost:3000/user', {
      method: 'POST',
      body: JSON.stringify(bodyParams),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    ```
  * Como lo que estamos enviando es un objeto de JS, este puede ser todo lo complejo que queramos. Puede ser un objeto que dentro tenga un array, y dentro otro objeto y dentro strings, numbers, booleans, etc.
* En el servidor:
  * Los datos que recibimos están en `req` porque son los datos de la petición ("request").
  * Recibimos los datos en `req.body`.
  * Recuerda poner `server.use(express.json());`. Si no, el objeto `req.body` estará vacío.

### Ejercicios

#### 1. Filtrando usuarias por nombre

Vamos a partir de este [ejercicio](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/node-express-request-body-params) y añadir una nueva funcionalidad. Ya sabemos que cuando pulsamos en el segundo botón del ejercicio, estamos llamando al endpoint <http://localhost:3000/users> y el servidor nos devuelve el listado completo de usuarias.

Pues bien, queremos añadir un filtro a la web y al servidor para que el servidor nos devuelva las usuarias filtradas por nombre. Para ello:

1. Añade un campo de filtro a la web:
   1. Edita `public/index.html` para añadir un input de texto en el segundo rectángulo.
   2. Edita `public/js/main.js` para que cuando ejecutamos `fetch('http://localhost:3000/users')` se envíen con el verbo `POST`.
   3. Edita `public/js/main.js` para que se envíe por body params un nuevo dato con el nombre `filterByName`.
   4. Comprueba desde DevTools > Network > Selecciona tu petición > Subpestaña Headers (abajo del todo) que la llamada que estás haciendo tiene el formato correcto, es decir, la URL concatenada con el body param. Si este formato es correcto ya puedes empezar a editar el servidor.
2. Añade el filtro al servidor:
   1. Edita `src/index.js`.
   2. Puesto que en `main.js` has cambiado el verbo del endpoint de `GET` a `POST`, debes cambiar el verbo de `server.get('/users', (req, res) => {...})`.
   3. En el endpoint `server.post('/users', (req, res) => {...})` debes recoger el body param `filterByName` y guardarlo en una constante.
   4. En el ejercicio estamos devolviendo todo el array de usuarias, lo que hacemos con el código:

      ```js
      res.json({
        result: users,
      });
      ```
   5. Filtra el array `users` con el query param `filterByName` y guarda el array filtrado en una constante.
   6. Responde a la petición con el nuevo array filtrado.

Recuerda que para que el array `users` contenga usuarias, hay que añadirlas a través del primer formulario de la web.

#### 2. Filtrando usuarias por nombre e email

Partiendo del ejercicio anterior:

1. Añade un segundo campo de texto a la web para filtrar por email y envíalo también por body params al servidor.
2. Añade un segundo filtro en el servidor en la función `server.post('/users', (req, res) => {...})` para que el servidor solo devuelva las usuarias cuyo nombre contenga el texto del filtro de nombre y cuyo email contenga el texto del filtro de email.
