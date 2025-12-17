# 4.8.1 Peticiones con query params

Las query params es una de las formas que tenemos para enviar parámetros al API REST, las cuales son una serie de clave-valor que se agregan al final de la URL, justo después del signo de interrogación (?), por ejemplo `?answer=42`. Si tenemos un url con múltiples parámetros, estos son separados por `&`, por ejemplo como `?a=1&b=2`.

Para comprender mejor que es una query param a analizar la siguiente URL:

```jsx
https://randomuser.me/api/?gender=female
```

El query param es la clave valor `gender=female` que vemos al final de la URL, y como regla, siempre deberán estar después del símbolo de interrogación. Además, una URL puede tener N query params, cómo el siguiente ejemplo:

```jsx
https://randomuser.me/api/?gender=female&results=500

```

Esta URL la podemos utilizar para buscar a todos los usuarios del genero femenino y que los resultados no superen 500. Cuando utilizamos más de un query param, es importante separar cada uno mediante el símbolo `&`.

![URL Query String Examples by Semrush](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-7b1abc69d933ff68692afa25e46afb4209edc3b6%2Fexpress_query_params_example.png?alt=media)

### Recuperar query params

En Express.js se puede usar directamente el método `req.query()` para acceder a las variables de la url.

Veamos un ejemplo de como acceder las query params desde un endpoint.

```jsx
/ req.query() Demo Example
// Importing the express module
const express = require('express');

// Initializing the express and port number
const app = express();
const PORT = 3000;

// Getting the request query string
app.get('/api', function(req, res){
   console.log('id: ' + req.query.id)
   res.send('id: ' + req.query.id);
});

// Listening to the port
app.listen(PORT, function(err){
   if (err) console.log(err);
   console.log("Server listening on PORT", PORT);
});
```

Si iniciamos el servidor y probamos el endpoint <http://localhost:3000/api?id=21>en el navegador o en el postman, en la terminal la salida sería:

```bash
>> npm start
Server listening on PORT 3000
id: 21
```

{% embed url="<https://youtu.be/WGp6rECy_rM>" %}

> [Ejercicio del vídeo](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/node-express-request-query-params)

### URL compartible

Puesto que los query params van al final de la URL, podemos crear una URL con query params y compartirla con quien queramos. Por ejemplo, si envías por Slack o Whatsapp la URL <https://twitter.com/search?q=oidoEnAdalab\\&f=live>, la persona que la reciba puede acceder directamente a Twitter con la búsqueda ya hecha.

### Conclusiones

Para trabajar con query params debemos saber que:

* Desde el navegador:
  * Se añaden al final de la URL.
  * Empiezan con el símbolo `?`: <http://localhost:3000/user?userName=maricarmen>
  * Si queremos enviar varios query params los separamos con `&`: <http://localhost:3000/user?userName=maricarmen\\&userEmail=mari@gmail.com>
  * Se pueden utilizar con cualquier verbo (GET, POST, PUT, PATCH...) ya que todas las peticiones tienen URL.
* En el servidor:
  * Los datos que recibimos están en `req` porque son los datos de la petición ("request").
  * Recibimos los datos en `req.query`.
  * Todos los datos enviados por query param se reciben en el servidor como **string**.

### Ejercicios

#### 1. Filtrando usuarias por nombre

Vamos a partir de este [ejercicio](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/node-express-request-query-params) y a añadir una nueva funcionalidad. En el segundo botón de la página, se llama al endpoint <http://localhost:3000/users> y el servidor nos devuelve el listado completo de usuarias.

Pues bien, queremos añadir un filtro a la web y al servidor para que este nos devuelva las usuarias filtradas por nombre. Para ello:

1. Añade un campo de filtro a la web:
   1. Edita `public/index.html` para añadir un input de texto en el segundo rectángulo.
   2. Edita `public/js/main.js` para que cuando ejecutamos `fetch('http://localhost:3000/users')` se envíe por query params un nuevo dato con el nombre `filterByName` añadiéndolo al final de la URL.
   3. Comprueba desde DevTools > Network que la llamada que estás haciendo tiene el formato correcto, es decir, la URL concatenada con el query param. Si este formato es correcto ya puedes empezar a editar el servidor.
2. Añade el filtro al servidor:
   1. Edita `src/index.js`.
   2. En el endpoint `server.get('/users', (req, res) => {...})` debes recoger el query param `filterByName` y guardarlo en una constante.
   3. En el ejercicio del vídeo estamos devolviendo todo el array de usuarias, que lo hacemos con el código:

      ```js
      res.json({
        result: users,
      });
      ```
   4. Filtra el array `users` con el query param `filterByName` y guarda el array filtrado en una constante.
   5. Responde a la petición con el nuevo array filtrado.

> Recuerda que para que el array `users` contenga usuarias, hay que añadirlas a través del primer formulario de la web.

#### 2. Filtrando usuarias por nombre e email

Partiendo del ejercicio anterior:

1. Añade un segundo campo de texto a la web para filtrar por email y envíalo también por query params al servidor.
2. Añade un segundo filtro en el servidor en la función `server.get('/users', (req, res) => {...})` para que el servidor solo devuelva las usuarias cuyo nombre contenga el texto del filtro de nombre y cuyo email contenga el texto del filtro de email.
