# 4.5.3 Servidor de estáticos

### Qué es un servidor de estáticos

Un servidor de ficheros estáticos es un servidor que devuelve al navegador que los solicita **ficheros sin modificar, independientemente de quién, cuándo o desde dónde los pida**.

Por ejemplo, si una usuaria entra en la página <https://adalab.es/contacto>, el servidor devolverá el fichero **contacto.html**, independientemente de si la usuaria está logada o no, si se encuentra en Sevilla o en Pekín, o si accede desde un ordenador o un móvil.

Las páginas web que desarrollamos como programadoras front end las subimos a los servidores de estáticos para que las usuarias puedan entrar a ellas. Por ello, normalmente, en un servidor tenemos la programación de back end dentro de la carpeta `src/` y la programación de front end dentro de la carpeta `public/`. Por cierto, un **GitHub Pages es un ejemplo de servidor de ficheros estáticos.**

La diferencia con un servidor de ficheros dinámicos, es que el servidor de dinámicos devolverá los **ficheros modificados al vuelo**, es decir, el servidor cogerá el fichero, lo modificará añadiendo información y después lo devolverá al navegador.

Por ejemplo, si yo entro en <https://www.youtube.com/feed/library>, el servidor de Youtube cogerá el fichero **library.html**, le añadirá mis listas de reproducción en tiempo real y lo devolverá a mi navegador. Si entras tú, el servidor hará lo mismo pero añadiendo tus listas de reproducción. Si entra una usuaria que no esté logada, el servidor añadirá un mensaje del tipo "Identifícate para ver tus listas de reproducción".

Vamos a crear un servidor de ficheros estáticos usando [express.static()](http://expressjs.com/en/4x/api.html#express.static).

{% embed url="<https://youtu.be/lqxqDR3YJ2c>" %}

> [Ejercicio del vídeo](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/node-express-static-server)

En el vídeo anterior explicamos **`__dirname` y el módulo `path`**. Vamos a explicarlo un poco más en detalle:

* [`__dirname`](https://nodejs.org/docs/latest/api/globals.html#globals_dirname): es una variable global especial que **contiene en todo momento la ruta del directorio donde está el fichero que se está ejecutando actualmente**. Dicho de otra forma, si en el fichero `src/api/users.js` está escrito el código `__dirname`, esta variable valdrá `src/api/`. Pero si a la vez está escrito en `src/data/info.js`, en el fichero `info.js` valdrá `src/data`.
* [Módulo `path`](https://nodejs.org/api/path.html): este es un módulo nativo de Node JS que contiene un montón de funcionalidades para trabajar con las rutas de tu ordenador, por ejemplo:
  * Si tenemos un string con la ruta de un fichero (incluyendo carpetas, nombre de fichero y extensión) podemos obtener con `path` **la ruta de la carpeta, el nombre del fichero, la extensión del fichero...** y otras cosas.
  * En concreto, la función [`path.join`](https://nodejs.org/api/path.html#path_path_join_paths) nos permite unir dos o más rutas para obtener una ruta completa. Además nos permite hacerlo sin tener que preocuparnos de las barras que separan cada carpeta. Las desarrolladoras de Node JS han creado esta funcionalidad porque gestionar rutas de forma manual no es demasiado fácil. Por ejemplo:

    ```js
    path.join('/foo', 'bar'); // returns '/foo/bar'
    path.join('/foo/', '/bar'); // returns '/foo/bar'
    path.join('/abuela', '/madre', '/hija', '..'); // returns '/abuela/madre'
    ```

En el vídeo hemos visto cómo obtenemos la ruta del servidor de estáticos con estas dos funcionalidades.

### Ficheros por defecto: index.html

Si desde el navegador se hace una petición **sin indicar el fichero**, el servidor de estáticos buscará el fichero `index.html`, **que es el fichero por defecto**, y si existe lo devolverá. En el vídeo hemos visto que:

* Cuando se entra en la página <http://localhost:3000>, no estamos indicando ningún fichero en la URL. Por ello el servidor de estáticos busca en `public/` si existe el fichero `index.html`, lo encuentra y lo devuelve.
* Cuando se entra en la página <http://localhost:3000/blog>, tampoco estamos indicando ningún fichero. Por ello el servidor de estáticos busca en la carpeta `public/blog/` si existe el fichero `index.html`, lo encuentra y lo devuelve.
* Cuando se entra en la página <http://localhost:3000/contact.html> **sí estamos indicando el fichero que queremos**. Por ello el servidor busca exactamente el fichero `contact.html` dentro de la carpeta `public/`. Lo encuentra y lo devuelve.

Esto es útil para poder hacer rutas más sencillas (o rutas amigables, llamadas así por influencia del inglés), pues para la usuaria es más fácil entrar en <http://localhost/blog/> que en <http://localhost:3000/blog/index.html> o en <http://localhost:3000/blog.html>.

En el fichero `public/index.html` hemos puesto el enlace `<a href="./blog/">Ir al blog</a>` para que cuando la usuaria acceda a la página del blog vea en la barra de direcciones del navegador la ruta amigable <http://localhost:3000/blog/>.

### Barra al final del las rutas `/`

A los servidores les da igual si en el navegador ponemos la dirección <https://localhost:3000/blog> o <https://localhost:3000/blog/>.

Los servidores interpretan en los dos casos que `blog` es una carpeta y que queremos obtener el fichero por defecto `index.html` que está dentro de esta carpeta.

### Gestión de ficheros que no existen: error 404

El servidor de estáticos intenta gestionar la petición hecha desde el navegador. Si no encuentra el fichero buscado, Express JS intenta gestionarlo con los endpoints que estén declarados más abajo en el código.

Puesto que más abajo hemos puesto `app.get('*', (req, res) => { ... })`, el servidor intenta gestionarlo con este endpoint. Este endpoint tiene la ruta `'*'`. Como el asterisco significa **cualquier ruta**, el servidor gestionará todas las rutas que no hayan sido gestionadas por un endpoint anterior.

Si la petición es gestionada por `app.get('*', (req, res) => { ... })` significa que el servidor de estáticos no ha encontrado el fichero, es decir, el fichero no existe. Por ello este endpoint devuelve el fichero `404-not-found.html` con un status 404.

Siempre es conveniente poner el código `app.get('*', (req, res) => { ... })` en el `index.js` después del resto de endpoints, para que el servidor intente gestionar cada petición con los `app.get(...)` que hayamos puesto más arriba. En caso de que el servidor no pueda gestionarlo con ningún endpoint específico, lo gestionará con el endpoint genérico `app.get('*', ...)`.

> **Nota:** más info sobre el [status 404](https://developer.mozilla.org/es/docs/Web/HTTP/Status/404).

### Uso de dos servidores de estáticos a la vez

A menudo nos interesa usar dos servidores de estáticos a la vez. ¿Cuándo? Imaginemos que en la web de Adalab hay un servidor que devuelve dos tipos de páginas:

* Páginas públicas para la web normal de Adalab con `index.html`, `contact.html`, etc.
* Páginas con el temario del curso con `intro-a-html.css`, `intro-a-css.html`, `flexbox.html`, etc.

Como son páginas muy diferentes y gestionadas por equipos diferentes, hemos decidido hacer dos proyectos separados.

Para configurar nuestro servidor de forma que sirviera a ambos proyectos haríamos lo siguiente:

1. Crear una carpeta en el servidor con el nombre que queramos, por ejemplo `web/`, donde ponemos los ficheros (HTML, CSS, JS, etc.) de la parte pública.
2. Crear una carpeta en el servidor con el nombre que queramos, por ejemplo `lessons/`, donde ponemos los ficheros (HTML, CSS, JS, etc.) de las lecciones de las alumnas.
3. Añadir a nuestro `index.js`:

   ```js
   // Parte del fichero src/index.js

   // Configuración del primer servidor de estáticos
   const staticServerPathWeb = './web';
   app.use(express.static(staticServerPathWeb));
   // Configuración del segundo servidor de estáticos
   const staticServerPathLessons = './lessons';
   app.use(express.static(staticServerPathLessons));

   // Endpoint para gestionar los errores 404
   app.get('*', (req, res) => {
     // Relativo a este directorio
     const notFoundFileRelativePath = '../web/404-not-found.html';
     const notFoundFileAbsolutePath = path.join(
       __dirname,
       notFoundFileRelativePath
     );
     res.status(404).sendFile(notFoundFileAbsolutePath);
   });
   ```

De esta manera cuando una usuaria entre en <http://adalab.es/contact.html>, el servidor buscará en la carpeta `./web` el fichero `contact.html`. Al encontrarlo, lo devolverá al navegador de la usuaria.

Sin embargo, cuando una usuaria entre en <http://adalab.es/flexbox.html>, el servidor buscará en la carpeta `./web` el fichero `flexbox.html`. Al **no** encontrarlo lo buscará en la carpeta `./lessons`. Ahora **sí** lo encontrará y lo devolverá.

Si la usuaria entra en <http://adalab.es/no-existo.html>, el servidor buscará el fichero `no-existo.html` en las carpetas `./web` y `./lessons`, pero no lo encontrará. En ese momento lo gestionará con el endpoint `app.get('*', ...)` y devolverá la página `web/404-not-found.html`.

#### Dos servidores estáticos con dos index.html

Ahora que ya sabemos crear un servidor con dos servidores estáticos, vamos a pensar qué pasaría si tenemos los siguientes ficheros:

* `./web/index.html` con un texto que pone "Bienvenida a la web de Adalab".
* `./lessons/index.html` con un texto que pone "Bienvenida al temario de Adalab".

¿Qué crees que vería la usuaria al entrar en <https://adalab.es/index.html> ?

¿Qué crees que vería la usuaria al entrar en <https://adalab.es/index.html> si en el código del servidor cambiamos el orden de las carpetas? Como en el siguiente código:

```js
// Parte del fichero src/index.js

// Configuración del primer servidor de estáticos
const staticServerPathLessons = './lessons';
app.use(express.static(staticServerPathLessons));
// Configuración del segundo servidor de estáticos
const staticServerPathWeb = './web';
app.use(express.static(staticServerPathWeb));
```

En ambos casos el servidor siempre responde con el fichero `index.html` de la carpeta que esté declarada antes en el `index.js`.

### Conclusiones

Para crear un servidor de estáticos debemos escribir el siguiente código:

```js
const staticServerPathWeb = './public'; // En esta carpeta ponemos los ficheros estáticos
app.use(express.static(staticServerPathWeb));
```

Este código debe ir después del resto de los endpoints.

Para gestionar errores 404 debemos escribir:

```js
// Endpoint para gestionar los errores 404
app.get('*', (req, res) => {
  // Relativo a este directorio
  const notFoundFileRelativePath = '../public/404-not-found.html';
  const notFoundFileAbsolutePath = path.join(
    __dirname,
    notFoundFileRelativePath
  );
  res.status(404).sendFile(notFoundFileAbsolutePath);
});
```

Este endpoint siempre, siempre, siempre debe ser el último, por detrás del resto de endpoints y de los servidores de estáticos.

### Ejercicios

#### 1. Añade una de tus páginas al servidor de estáticos

Ahora que ya sabemos montar un servidor de estáticos, qué mejor forma de celebrarlo que creando con tus propias páginas:

1. Crea un servidor de estáticos.
   1. Crea un proyecto nuevo con un servidor de Express.
   2. Añade el código de tu servidor de estáticos.
      * Configura el servidor de estáticos para que utilice la carpeta `public/`.
2. Elige una de las páginas que hayas hecho durante el curso:
   * Si eliges una página hecha con el starter kit de Adalab tienes que:
     1. En el proyecto del starter kit crea la carpeta `docs/` con `npm run docs`.
     2. Copia los ficheros de dicha carpeta `docs/`.
     3. Pega los ficheros copias en la carpeta `public/` del servidor.
   * Si eliges una página hecha con React:
     1. Abre el proyecto y ejecuta `npm run build`.
     2. Copia los ficheros de la carpeta `build/`.
     3. Pega los ficheros copiados en la carpeta `public/` del servidor.

#### 2. Dos servidores de estáticos en un solo servidor

Nos interesa tener dos servidores de estáticos en el mismo servidor. Por ejemplo uno para servir las páginas públicas y otro para servir las páginas del área de administración.

> **Nota:** este ejercicio es interesante porque en el proyecto tendrás que hacer algo parecido.

Partiendo del [ejercicio](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/node-express-static-server):

1. Añade una carpeta hermana de `public/` que se llame `admin/`.
2. Añade dentro de `admin/` dos ficheros, un `index.html` y un `admin.html`. Escribe en estos ficheros un texto cualquiera.
3. Añade en `src/index.js` el siguiente código después del servidor de estáticos que ya tenemos:

   ```js
   const staticServerPathAdmin = './admin';
   app.use(express.static(staticServerPathAdmin));
   ```
4. Arranca el servidor y:
   1. Entra en <http://localhost:3000>. ¿Qué fichero te está devolviendo el servidor, el `public/index.html` o el `admin/index.html`? ¿Por qué?
   2. Entra en <http://localhost:3000/admin.html> y mira qué fichero está devolviendo.
