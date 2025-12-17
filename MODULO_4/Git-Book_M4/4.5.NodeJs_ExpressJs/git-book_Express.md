# 4.5.2 Servidor Express JS

Ya sabemos crear aplicaciones con Node JS, pero todavía no sabemos cómo crear un servidor. Podríamos ponernos a programar un servidor, aunque es algo bastante complejo y seguramente tendríamos que escribir varios miles de líneas de código. Uff, qué pereza.

Por suerte ya hay alguien que ha creado esa programación: los creadores de [Express JS](https://expressjs.com/). Así que vamos a aprender a utilizar el módulo de [NPM de Express JS](https://www.npmjs.com/package/express).

### Qué es Express JS

[Express JS](https://expressjs.com/es/) es un [módulo de NPM](https://www.npmjs.com/package/express) que nos facilita la vida a la hora de programar un servidor, ya que nos ayuda a escuchar las peticiones que se hacen desde el navegador al servidor. También nos ayuda a obtener los datos de dichas peticiones, procesarlos y crear una respuesta que le devolvemos al navegador.

Para iniciar nuestro proyecto **lo primero es ejecutar** `npm init` dentro de la terminal. **A continuación, instalar express** como una dependencia con el siguiente comando `npm install express` .

La estructura de ficheros de un servidor inicialmente esta compuesto por una carpeta `src` que dentro tiene un `index.js` y el fichero `package.json`.

En el fichero `index.js` copia el siguiente código y **ejecútalo en la terminal** con `node index.js`.

```jsx
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});
```

Primero vamos a entender que tiene dentro:

* La aplicación inicia un servidor y escucha las conexiones en el puerto 3000. La aplicación responde con “Hello World!” para las solicitudes al URL raíz (/) o a la ruta raíz. Para cada vía de acceso diferente, responderá con un error 404 Not Found.
* La aplicación declara un endpoint con la siguiente estructura:

  ```jsx
  app.METHOD(PATH, HANDLER);
  ```

  Donde:

  * app es una instancia de express para el servidor.

  * METHOD es un método de solicitud HTTP (GET, POST, etc.).

  * PATH es una vía de acceso en el servidor

  * HANDLER es la función que se ejecuta cuando se ejecuta la ruta.

  > Puedes consultar la documentación oficial de [Express sobre rutas](https://expressjs.com/es/guide/routing.html) si quieres profundizar más en este tema, aunque en este punto con que entiendas la base es suficiente.
* En este código también puedes ver que los endpoints tienen los objetos `req` que representa una solicitud y `res` que es la respuesta. Estos objetos tienen información e funciones que nos permiten trabajar con los solicitudes.
* Cuando programamos una API, a los métodos que utilizamos (GET, POST, etc.) también los llamamos **verbos**. Y a las rutas (`/users`, `/new-user`, etc.) las llamamos endpoints.

Habrás visto que al ejecutar `node index.js` no se te abre el navegador como pasaba con el `npm start` en los módulos anteriores. Si quieres ver como está funcionando mi servidor, puedes abrir en el navegador las siguientes urls:

* <http://localhost:3000/> y el navegador mostrará 'Hello World!'.
* <http://localhost:3000/vcsfc> y el navegador mostrará un página de 404 para notificarnos que no encuentra la página.

### CORS

Cuando hablamos de CORS (Cross-Origin Resource Sharing en inglés) nos referimos a un mecanismo de seguridad que aplican los navegadores cuando estamos haciendo una petición a un recurso que está alojado en otro origen. Si el recurso está en otro origen, el navegador automáticamente comprobará las cabeceras HTTP buscando una autorización expresa por parte del servidor.

Por ejemplo, imagina que estás diseñando una aplicación que está ubicada en dev.adalab.es y las peticiones de datos las realiza a una API, situada en adalab.es. En cuanto vayas a hacer una consulta con el método fetch de JS al dominio te aparecerá un error como el siguiente:

![CORS Error](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-77b1305e2ffe8e1428984fbfedfc536ebcd9c4fe%2Fcors-ejemplo-error.png?alt=media)

Esto no solo ocurre cuando la llamada la hace Javascript. También verás errores de CORS cuando intentes cargar Web Fonts (usando @font-face), vídeos, texturas, etc.

Entonces para solucionar este error en nuestro servidor vamos a instalar `cors` para que el mismo acepte peticiones desde cualquier lugar.

CORS esta incluido como un [módulo de NPM](https://www.npmjs.com/package/cors) y para instalarlo en tu proyecto ejecuta el siguiente comando:

```jsx
npm install cors
```

y agrégalo en el index.js de tu proyecto de la siguiente manera:

```jsx
const cors = require('cors');
app.use(cors());
```

A continuación en el siguiente vídeo puedes ver todo lo anterior: la creación de un servidor de Express JS desde cero.

{% embed url="<https://youtu.be/ajyE9e3YN3c>" %}

### Pasos para crear un servidor con Express JS

1. Crea un proyecto o repo.
2. Crea un `package.json` usando `npm init` o creándolo a mano.
3. Instala el módulo `express` ejecutando en la terminal `npm install express`.
   * Para saber que lo has hecho bien, dentro del fichero `package.json` debe aparecer `express` dentro de `dependencies`.
4. Instala el módulo `cors` ejecutando en la terminal `npm install cors`.
   * Para saber que lo has hecho bien, dentro del fichero `package.json` debe aparecer `cors` dentro de `dependencies`.
5. Crea un fichero `index.js` dentro de la carpeta `src` donde programarás el servidor.
6. Para arrancar, haz una de las siguientes cosas:
   * Ejecuta el comando `node src/index.js` o
   * Añade al `package.json` el script:

     ```js
     "scripts": {
       "start": "node src/index.js"
     }
     ```

     y ejecuta el comando `npm start` para que en consola se ejecute `node src/index.js`. También puedes añadir al `package.json` los scripts:

     ```js
     "scripts": {
       "start": "node src/index.js",
       "dev": "nodemon src/index.js"
     }
     ```

     y ejecutar el comando `npm run dev` para que en consola se ejecute `nodemon src/index.js` y que se reinicie el servidor con cada cambio.

### Errores comunes

**Servidor no responde**

¿Qué pasa cuando hacemos una petición al servidor y este no responde? Lo que sucede es que la petición realizada se queda en estado 'pending'.

Esto error se produce porque generalmente hemos olvidado enviar una respuesta a la petición desde el servidor. Todas nuestros endpoints deben tener una respuesta. Por ejemplo algo como `res.send('Hello World!');`, en la próxima lección veremos en más detalle los tipos respuestas que existen.

**Peticiones grandes**

En express se utiliza el middleware body-parser para analizar los datos de las solicitudes entrantes, y también establece el tamaño predeterminado del cuerpo de la solicitud en 100 kb, de modo que cuando el tamaño del cuerpo de una solicitud exceda los 100 kb, veremos este error `Error: request entity too large`.

Para corregir este error, necesitamos aumentar el tamaño límite para procesar peticiones de esta manera:

```js
server.use(express.json({limit: '25mb'}));
```

**Responder dos veces a la misma petición**

El error "The "Cannot set headers after they are sent to the client" ocurre cuando el servidor envía más de una respuesta para una sola solicitud, por ejemplo llamando a `res.json()` dos veces.

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-b1d679e29a0ed8d5864d40584984e817fd7b3363%2Ferror-cannot-set-headers-after-they-are-sent-to-client.webp?alt=media)

Para solucionar el error, asegúrate de enviar solo una única respuesta para cada solicitud. Otra buena practica para solucionarlo es utilizar [res.headerSent](https://expressjs.com/en/4x/api.html#res.headersSent), que es un propiedad booleana que indica si la aplicación envió encabezados HTTP para la respuesta.

### Conclusiones

Para crear un servidor con Express JS usaremos el siguiente código y debemos **asegurarnos de que en ningún caso estamos respondiendo más de una vez a la misma petición.**

```js
// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({limit: '25mb'}));

// Arrancamos el servidor en el puerto 3000
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos
server.get('/users', (req, res) => {
  const response = {
    users: [{name: 'Sofía'}, {name: 'María'}],
  };
  res.json(response);
});
```

> NOTA: Este servidor sólo atiende a la ruta <http://localhost:3000/users>

### Ejercicios

#### 1. Crea un servidor desde cero

1. Sigue los pasos que hemos visto antes en el apartado: **Pasos para crear un servidor con Express JS**
2. Añade al fichero `index.js` las líneas de código:

   ```js
   const express = require('express');
   const cors = require('cors');

   const server = express();

   server.use(cors());
   server.use(express.json());

   const serverPort = 3000;
   server.listen(serverPort, () => {
     console.log(`Server listening at http://localhost:${serverPort}`);
   });

   server.get('/users', (req, res) => {
     const response = {
       users: [{name: 'Sofía'}, {name: 'María'}],
     };
     res.json(response);
   });
   ```
3. Entra en `http://localhost:3000/users` desde Chrome
4. Verás que el navegador muestra el JSON con la respuesta del servidor `{ users: [...] }`.

> **Nota:** recuerda que cada vez que hagas un cambio en los ficheros de tu servidor, debes parar el servidor con `Ctrl+C` y volver a arrancarlo.
