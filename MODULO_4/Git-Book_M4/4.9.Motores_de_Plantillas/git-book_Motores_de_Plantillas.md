# 4.9.1 Motores de plantillas

### Qué es un servidor de ficheros dinámicos

Un servidor de dinámicos es un servidor que devuelve al navegador **el mismo fichero pero personalizado, con pequeñas modificaciones, con diferentes datos** en función de qué usuaria lo está pidiendo o en función de a qué página se está accediendo.

Si entramos en <https://www.filmaffinity.com/es/film999902.html> y en <https://www.filmaffinity.com/es/film942734.html>, vemos que la página es la misma pero cambian los datos e imágenes que se muestran.

No tiene sentido que las maquetadoras de FilmAffinity maqueten una a una todas las películas del mundo. Lo que se hace es maquetar una sola película y convertirla en una plantilla. Cuando el servidor tiene que devolver una película, coge la plantilla, le mete sus datos y la devuelve. Esto es una tarea del motor de plantillas.

### Qué es un motor de plantillas

Un motor de plantillas, en inglés **template engines**, es la funcionalidad que:

1. Está **esperando** a que desde el navegador se le solicite un fichero (con un endpoint). Cuando esto sucede, el endpoint:
   1. Coge una plantilla.
   2. Obtiene los datos, generalmente desde una base de datos. En esta lección todavía no sabemos cómo trabajar con bases de datos, así que vamos a obtenerlos de un JSON.
   3. Mete los datos en la plantilla. A este proceso se le llama **renderizado**.
   4. Y devuelve la plantilla personalizada al navegador para que la usuaria la visualice.

Generalmente los ficheros que servimos desde un servidor de dinámicos son HTMLs y PDF, es decir, ficheros que tienen contenido para una usuaria. No es habitual servir ficheros CSS diferentes para cada usuaria.

### Motores de plantillas en Express JS

Express JS divide la funcionalidad de los motores de plantillas en **dos partes**:

1. Escuchar la petición desde el servidor y responderla. Esta es una tarea de Express JS, que:
   * Escucha la petición con un endpoint del tipo `app.get('/ruta-del-endpoint, (res, req) => { ... })`.
   * Responde a la petición con `res.render(template, data);`.
   * Más información sobre el método [res.render aquí](https://expressjs.com/es/api.html#res.render).
2. Renderizar de la plantilla:
   * Este es el proceso que hay entre el escuchado de la petición y la respuesta.
   * Express JS **no** se encarga del renderizado.
   * Existen muchos motores de plantillas que funcionan sobre Express JS y que se encargan del renderizado.
     * Estos motores de plantillas los crean grupos de desarrolladoras y los suben a NPM para que el resto los usemos.
     * Nosotras debemos elegir uno, instalarlo en nuestro proyecto, configurarlo y usarlo.
     * En este módulo vamos a usar [EJS](https://ejs.co/).

#### Ejemplo básico

{% embed url="<https://youtu.be/Jh5YY_Bb9l0>" %}

> [Ejercicio del vídeo](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/node-express-template-engine/template-basic)

En el vídeo hemos visto:

* Para instalar EJS: `npm install ejs`.
* Para configurar EJS: `app.set('view engine', 'ejs');`.
* Tenemos que crear nuestras plantillas en la raíz del proyecto, en la carpeta `views/`, porque así nos lo pide EJS.
* Podemos crear las carpetas que queramos dentro de `views/`.
* Es nuestra responsabilidad poner bien la ruta de las carpetas en `res.render('pages/film', filmData)`. No hace falta poner la extensión `.ejs`.
* Es nuestra responsabilidad poner bien la ruta de los partials dentro de las plantillas, escribiendo `<%- include('../partials/header'); %>`.
* La sintaxis para añadir un partial es `<%- include('ruta-relativa-del-partial'); %>`. No hace falta poner la extensión `.ejs`.
* La sintaxis para añadir un dato a la plantilla es `<%= nombreDeMiVariableOPropiedad %>`.

#### Estilos CSS en los motores de plantilla

De igual manera podemos incluir estilos CSS en nuestras plantillas, para ello podemos crear un servidor de estáticos para los estilos css e incluirlos en nuestra plantilla.

1. Crea un servidor de estáticos para los estilos en tu servidor:
   * Crea el fichero `main.css` de estilos en la carpeta src del servidor `src/public-css/`.
   * Configura el servidor de estáticos en `index.js` para que esté disponible el archivo css.

     ```js
     const pathServerPublicStyles = './src/public-css';
     server.use(express.static(pathServerPublicStyles));
     ```
2. Incluye el fichero `main.css` en la plantilla, presta mucha atención a la ruta del css. En la plantilla de la carpeta de views, quedaría asi:

   ```html
   <link rel="stylesheet" href="/main.css" />
   ```

#### Ejemplo con condicionales

{% embed url="<https://youtu.be/PXvpPEtol2k>" %}

> [Ejercicio del vídeo](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/node-express-template-engine/template-if)

En el vídeo hemos visto que:

* La sintaxis para añadir JS que no sea un partial o para pintar en la plantilla es con `<% ... %>`. Por ejemplo:

  ```js
  <% if (country !== "") { %>
  <li>País: <%= country %></li>
  <% } %>
  ```
* A EJS no le gustan las comparaciones con `undefined`, por lo que `<% if (country !== undefined) { %>` no le gusta.
* Es mejor asegurarnos de que existen todas las variables que va a utilizar EJS antes de llamar al renderizado. Por ello en `src/index.js` nos aseguramos de que la variable existe, poniendo `filmData.country = filmData.country || '';`

#### Ejemplo con bucles

{% embed url="<https://youtu.be/ToSVv7Mj8eY>" %}

> [Ejercicio del vídeo](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/node-express-template-engine/template-for)

En el vídeo hemos visto que:

* La sintaxis para añadir JS que no sea un partial o para pintar en la plantilla es con `<% ... %>`. Por ejemplo:

  ```js
  <% awards.forEach(function(award) { %>
  <li><%= award.year %>: <%= award.info %>.</li>
  <% }) %>
  ```
* Dentro del bucle tenemos disponibles las variables que estamos creando en el bucle. Como aquí hemos creado la variable `award` en `<% awards.forEach(function(award) { %>`, dentro podemos usarla poniendo `<%= award.info %>`.
* Es mejor pasarle los datos limpios a la plantilla para que esta se lo más sencilla posible. Por ejemplo, si queremos pintar el listado de premios, pero filtrándo por los premios Goya, tendríamos dos opciones:
  * Pasar a la plantilla el listado completo de premios y el criterio de filtrado, y que sea la plantilla la que primero filtre y luego itere para pintar, o
  * Filtrar en `src/index.js` y pasarle el array de premios ya filtrados a la plantilla. Esto es mucho más limpio y legible. Es lo que preferimos.

### Múltiples plantillas

En un motor de plantillas puede haber muchas plantillas. En FilmAffinity tienen plantillas para las películas, dirección, actrices y actores, géneros...

Para crear una nueva plantilla, por ejemplo de directoras, en nuestro servidor lo único que habría que hacer es:

1. Crear una plantilla en `views/pages/director.ejs`.
2. Crear un endpoint para escuchar una petición desde el navegador, por ejemplo: `app.get('/es/director/:directorName)` y dentro de este endpoint:
   1. Obtener los datos de la directora, por ejemplo `const directorData = ...;`.
   2. Renderizar y responder con `res.render('director', directorData);`.

### Conclusiones

Para crear un servidor de ficheros dinámicos necesitamos crear un endpoint con Express JS y dentro utilizar un motor de plantillas.

Para utilizar un motor de plantillas necesitamos:

1. Instalarlo:

   ```bash
   npm install ejs
   ```
2. Configurarlo:

   ```js
   app.set('view engine', 'ejs');
   ```
3. Crear las plantillas en la carpeta `views/`.
4. Usar las plantillas dentro de un endpoint con:

   ```js
   res.render(
     'rutaDeLaPlantillaDentroDeLaCarpetaViews',
     datosQueLePasamosALaPlantilla
   );
   ```
5. Usar condicionales y bucles dentro de la plantilla, si es lo que necesitamos.

### Ejercicios

#### 1. Crea una plantilla para directoras

Partiendo del [ejercicio básico del vídeo](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/node-express-template-engine/template-basic):

1. Añade un fichero en `src/directors-data.json` con datos sobre dos directoras.
2. Añade a `src/index.js` un nuevo endpoint del tipo `app.get('/es/directora/:directorId', ...)` para gestionar peticiones del tipo <http://localhost:3000/es/directora/iciar-bollain>.
3. Obtén los datos de la directora que nos llegan por `req.params`.
4. Crea una plantilla en `views/pages/director.ejs` con el HTML que quieras.
5. Usa los datos de la directora para pintarlos en la plantilla.

#### 2. Filtra por el año de los premios

Partiendo del [ejercicio de bucles del vídeo](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/node-express-template-engine/template-for):

1. Añade un filtro en `src/index.js` para que solo se pinten los premios del año 2004.

Una vez lo hayas conseguido, obtén el año de filtrado de los query params, es decir:

* Si entras a la página <http://localhost:3000/es/film942734.html?adwarsYear=2003> se deben pintar solo los premios de 2003.
* Si entras a la página <http://localhost:3000/es/film942734.html?adwarsYear=2004> se deben pintar solo los premios de 2004.

#### 3. Plantillas dentro de plantillas

Partiendo del [ejercicio básico del vídeo](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/node-express-template-engine/template-basic):

1. Crea una nueva plantilla en `views/partials/search.ejs` que sea un formulario de búsqueda. Cualquier código HTML vale, ya que no vamos a crear la funcionalidad del formulario. Como si pones un "hola mundo".
2. Añade este partial a los partials de la cabecera y el footer. Para ello elige bien la ruta relativa.

Si consigues que se vea el formulario en la página, el ejercicio estará bien.
