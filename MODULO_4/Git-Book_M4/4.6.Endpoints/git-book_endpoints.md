# 4.6.1 Endpoints, métodos y cabeceras

En la lección anterior aprendimos cómo crear un servidor de estáticos, el cual es capaz de servir archivos estáticos como HTML, CSS y JavaScript directamente desde una carpeta de ficheros del servidor.

En la lección de hoy abordamos los conceptos relacionados con endpoints. A diferencia de un servidor de estáticos, donde los archivos se entregan tal cual al cliente, un servidor dinámico nos permite crear endpoints que pueden procesar datos y generar respuestas personalizadas. Esto implica entender qué partes tiene una petición y el significado de los métodos, cabeceras y los parámetros `req` y `res`.

### Partes de una petición

Toda petición a un servidor (y toda respuesta de este al navegador) está compuesta de dos partes:

* Cabecera o *header*: contiene información relativa a la petición en sí misma, como la URL, información sobre el navegador y usuaria que hace la petición, tipo de petición (GET, POST, etc.), tipos de datos que se pueden enviar y recibir (texto, HTML, JSON, etc.).
* Cuerpo o *body*: contiene información relativa al contenido o datos que se quiere enviar y recibir. Suelen ser los datos que enviamos al servidor y los datos y ficheros que recibe el navegador.

### ¿Qué son los métodos?

Es el verbo que se indica en una petición que va a pedir, que va a decir o que va indicar que es lo que queremos hacer. De esta manera, se especifica si se requiere obtener, adicionar o actualizar información Los verbos principales que podemos utilizar son `GET`, `PUT`, `DELETE`, `POST`, `PATCH` y `OPTIONS`.

Vamos a ver en detalle cada uno y qué podemos hacer con cada uno:

* **GET**: Utilizaremos el verbo GET para obtener información del servidor, por ejemplo información de un producto, si lo que tenemos es un e-commerce o el listado de elementos, obtener una lista de todos los productos que hay en la tienda, obtener una lista de chats o incluso si queremos ver una página, traer un archivo CSS.
* **POST**: El método POST se utiliza para añadir información al servidor. Por ejemplo, añadir un producto nuevo, enviar un formulario, crear un nuevo chat.
* **PUT**: El método PUT va a reemplazar información en el servidor. Por ejemplo hay un producto que se desea modificar por completo, para cambiar el contenido de una página, editar un mensaje.
* **PATCH**: Utilizaremos el método PATCH para actualizar una parte de la información que hemos enviado. Imagina que del perfil de un usuario solo se quiere modificar la foto o solo modificar de un producto el precio.
* **DELETE**: El método DELETE se utiliza para eliminar totalmente información del servidor. Por ejemplo eliminar un mensaje que se ha enviado o eliminar un producto del carrito.
* **OPTIONS**: Es un método muy especial que sirve para pedir información sobre los métodos.

Seguimos con el ejemplo de la mini lección anterior y definimos algunas rutas simples:

* Responder con el texto Hello World! en la página inicial, sería de esta manera:

  ```jsx
  app.get("/", function (req, res) {
    res.send("Hello World!");
  });
  ```
* Responder a una solicitud de tipo `POST` en la ruta raíz (/) sobre la página de inicio de la aplicación:

  ```jsx
  app.post("/", function (req, res) {
    res.send("Got a POST request");
  });
  ```
* Responder a una solicitud PUT en la ruta /user:

  ```jsx
  app.put("/user", function (req, res) {
    res.send("Got a PUT request at /user");
  });
  ```
* Responder a una solicitud DELETE en la ruta /user:

  ```jsx
  app.delete("/user", function (req, res) {
    res.send("Got a DELETE request at /user");
  });
  ```

> NOTA: Si has copiado y pegado esos fragmentos de código en tu fichero `index.js`, tienes que parar el comando `node index.js` que ejecutaste previamente (debes pararlo pulsando Ctrl+C en la terminal) y volver a lanzar el comando `node index.js`. Cada vez que hacemos un cambio en nuestro fichero de código de node debemos ejecutar de nuevo el comando. -> ¿Te parece un rollo? [Recuerda que puedes utilizar el comando `nodemon`](https://github.com/Adalab/pw-materiales-del-curso/blob/master/modulo_4/modulo_4/_node_nodemon.md) para que este proceso sea automático.

> OTRA NOTA: Para comprobar que funciona el código de estos fragmentos, debemos de hacer un `fetch()` especificando el `method` en el segundo parámetro -> ¿También te parece un rollo? Pronto veremos la aplicación Postman que sirve para probar estas rutas con esos verbos.

### Endpoints

El concepto de **endpoint** es justo lo que acabamos de ver: es una ruta o *path* a la que atiende una aplicación servidor para un verbo o *method* determinado.

La aplicación programada con Express recibirá peticiones de Internet (normalmente de los navegadores de nuestras usuarias) y cada petición irá a una ruta determinada (por ejemplo: `/` o `/index.html` o `/assets/css/main.css` o `/api/movies/`) y con un verbo determinado.

En el ejemplo anterior, nuestro servidor atiende las peticiones:

* A la ruta `/` con el verbo `GET`.
* A la ruta `/` con el verbo `POST`.
* A la ruta `/user` con el verbo `PUT`.
* A la ruta `/user` con el verbo `DELETE`.

Para el resto, devolverá un error "Not found".

### ¿Qué son res y req?

En los ejemplos que hemos visto anteriormente vemos que la función de un endpoint tienen los parámetros `req` y `res`.

```jsx
app.get("/", function (req, res) {
  res.send("Hello World!");
});
```

Podemos definir `req` como un objeto que contiene información sobre la petición HTTP que ha provocado el evento. En respuesta a req , se utiliza `res` para devolver la respuesta HTTP deseada.

Fuente: <https://www.iteramos.com/pregunta/16631/nodejs-que-es-res-y-req-en-expressjs>

### ¿Qué son las cabeceras?

Las cabeceras (en inglés headers) HTTP permiten al cliente y al servidor enviar información adicional junto a una petición o respuesta. Una cabecera de petición esta compuesta por su nombre (no sensible a las mayúsculas) seguido de dos puntos ':', y a continuación su valor (sin saltos de línea). Los espacios en blanco a la izquierda del valor son ignorados

Las cabeceras van a darnos información contextual de la petición. ¿Qué es esto de información contextual? No es lo que quiero hacer, sino cómo quiero hacerlo.

¿Qué tipo de información se puede ver en las cabeceras? Pues por ejemplo, en REQUEST, en POST, PUT, PATCH, podemos tener cabeceras de autenticación para decir quién soy o cabeceras de caché. En la cabeceras se especifica indicaciones especiales que queremos darle al servidor.

Si quieres conocer que información puede estar en una cabecera consulta la [MDN Headers](https://developer.mozilla.org/es/docs/Web/HTTP/Headers).

Luego de haber léido la lección vamos a crear nuestro primer endpoint en el servidor.

{% embed url="<https://youtu.be/oaO5MJ94QDw>" %}

### Ejercicios

#### 1. Cambio de endpoints y verbos

1. Descarga este [ejercicio](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/node-express-basic).
2. Haz `npm install` para que NPM instale Express JS dentro de `node_modules/`.
3. Haz `npm start` para arrancar (o levantar) el servidor.
4. En el fichero `src/index.js`:
   1. Cambia la ruta `app.post('/new-user', (req, res) => {` por `app.post('/users/add', (req, res) => {`
      * ¿Qué debes cambiar en `public/main.js` para que la web siga funcionando?
   2. Cambia la ruta `app.get('/users', (req, res) => {` por `app.post('/users', (req, res) => {`
      * ¿Qué debes cambiar en `public/main.js` para que la web siga funcionando?
   3. Cambia el puerto `const serverPort = 3000;` por `const serverPort = 3500;`
      * ¿Qué debes cambiar en `public/main.js` para que la web siga funcionando?

#### 2. Rutas amigables

Partiendo de este [ejercicio](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/node-express-static-server) cambia el código que necesites en `src/index.js` y `public/index.html` para que las usuarias puedan entrar en la dirección <http://localhost:3000/contact> y así hacerles la vida más cómoda.


# 4.6.2 Tipos de respuestas

En la [documentación de Express JS](https://expressjs.com/en/4x/api.html#res) podemos ver las diferentes formas de responder a una petición. La respuesta de un endpoint se envía a través de uno de estos métodos, y si ninguno de estos métodos se invoca desde un endpoint, la solicitud de cliente se quedará colgada. Hay muchos tipos de respuesta, pero en esta lección solo vamos a ver las más utilizadas.

### [res.json](https://expressjs.com/en/4x/api.html#res.json):

Envía una respuesta JSON, el método envía una respuesta (con el tipo de contenido correcto) que es un parámetro convertido a una cadena JSON usando `JSON.stringify()`. El parámetro a enviar puede ser de cualquier tipo `JSON`, incluidos objetos, listas, cadenas, booleanos, número o nulo.

```jsx
res.json(null);
res.json({ user: "tobi" });
res.status(500).json({ error: "message" });
```

### [res.render](https://expressjs.com/es/4x/api.html#res.render)

Representa una vista y envía la cadena HTML representada al cliente. Tiene tres parámetros:

* El argumento de la vista es una cadena con la ruta del archivo vista para representar. Puede ser una ruta absoluta o una ruta relativa a la configuración de vistas.
* locals: un objeto cuyas propiedades definen variables locales para la vista.
* callbacks: una función callback. Si se proporciona, el método devuelve tanto el posible error como la cadena procesada, pero no realiza una respuesta automática. Cuando ocurre un error, el método invoca next(err) internamente.

```jsx
// send the rendered view to the client
res.render("index");

// if a callback is specified, the rendered HTML string has to be sent explicitly
res.render("index", function (err, html) {
  res.send(html);
});

// pass a local variable to the view
res.render("user", { name: "Tobi" }, function (err, html) {
  // ...
});
```

### [res.send](https://expressjs.com/en/4x/api.html#res.send):

Envía una respuesta de varios tipos. El parámetro del `body` puede ser una cadena, un objeto, un booleano o una lista. Por ejemplo:

```jsx
res.send(Buffer.from("whoop"));
res.send({ some: "json" });
res.send("<p>some html</p>");
res.status(404).send("Sorry, we cannot find that!");
res.status(500).send({ error: "something blew up" });
```

### [res.status(code)](https://expressjs.com/en/4x/api.html#res.status)

Establece el estado HTTP para la respuesta.

```jsx
res.status(403).end();
res.status(400).send("Bad Request");
res.status(404).sendFile("/absolute/path/to/404.png");
```

### Conclusiones

Desde el servidor nos debemos preocupar de:

1. **Responder con los datos en el formato correcto:**
   * [res.json](https://expressjs.com/en/4x/api.html#res.json): para responder con un JSON.
   * [res.send](https://expressjs.com/en/4x/api.html#res.send): para responder con un string.
   * Visita la [documentación de Express JS](https://expressjs.com/en/4x/api.html#res) para aprender más métodos de respuesta.
2. **Responder con el código de respuesta correcto:**
   * Con la función [res.status](https://expressjs.com/en/4x/api.html#res.status) indicamos el código de respuesta que queremos.
   * Si no usamos `res.status`, el código por defecto con el que contestamos es el **200**.

### Ejercicios

#### 1. Respondiendo muchas cosas

Vamos a crear un servidor para diferentes tipos de respuesta:

* Cuando la usuaria haga un GET a `/response-a` debemos responder `{ result: 'ok' }`.
* Cuando la usuaria haga un GET a `/response-b` debemos responder con una página HTML en la que el `h1` ponga **Esta es una página de prueba**.
* Cuando la usuaria haga un GET a /response-c debemos responder con un objeto JSON { message: "Operación exitosa", code: 201 } y establecer el código de estado HTTP a 201 para indicar que un recurso fue creado exitosamente.

# 4.6.3 Códigos de respuesta

> **Nota:** esta mini lección es importante pero no urgente. Puedes profundizar en ella más adelante.

En esta mini lección vamos a ver cuáles son los códigos de estado que podemos enviar cuando construimos un endpoint.

### Códigos de respuesta HTTP

El código de estado de una respuesta es un número que nos va a indicar lo que ha pasado con la petición: sí, fue bien, si fue mal, si se ha redirigido. Las respuestas se agrupan en cinco clases:

* Respuestas informativas (100–199),
* Respuestas satisfactorias (200–299),
* Redirecciones (300–399),
* Errores de los clientes (400–499),
* Errores de los servidores (500–599).

Generalmente siempre es un número de tres cifras, por ejemplo:

* Todos los estados que empiecen con dos especifica que todo ha ido bien:
  * 200 será 'Ok, todo fue genial'.
  * 201, ha creado un recurso nuevo y todo ha ido bien.
* Todos los estados que empiecen con un tres, 300, 301, 303, 304, significa que la petición se ha redirigido a otro sitio, por ejemplo:
  * 301 se utilizar mucho cuando un recurso se mueve permanentemente de una URL a otra, de un servidor a otro.
  * 304 cuando no ha habido ningún tipo de modificación en un recurso.
* Los errores del cliente se identifican con el código 400:
  * 400 significa que el usuario ha enviado algo mal
  * 401 significa que el cliente que está haciendo la petición no está autorizado.
  * 403 Forbidden es prohibido, significa uqe un cliente está haciendo una petición pero no tiene permisos.
  * 404, súper típico que seguro que habéis visto en un millón de sitios, significa no se ha encontrado el recurso que se está pidiendo.
* Los errores de servidor principalmente se trabaja con el error 500, que es que ha habido un problema interno y no se ofrece muchísima más información al cliente.

Y para cambiar el código de estado de la respuesta usamos [res.status](https://expressjs.com/en/4x/api.html#res.status).

```jsx
app.post("/newItem", function (req, res) {
  res.status(201).json({ success: true });
});
```

También te recomendamos leer más información sobre [los códigos HTTP de respuesta](https://developer.mozilla.org/es/docs/Web/HTTP/Status). Y qué mejor que [aprender los códigos de estado que con gatitos](https://http.cat/).

### Ejercicios

#### 1. Todo el mundo usa códigos HTTP para informar sobre errores

Entra en esta [página que no existe](https://www.google.es/pagina-que-no-existe) y:

* Mira qué información nos muestra la página
* Abre devtools > network, refresca la página y mira qué código de respuesta está devolviendo el servidor de Google.

Entra en esta [otra página que tampoco existe](https://github.com/otra-pagina-que-no-existe) y repite los pasos anteriores.
