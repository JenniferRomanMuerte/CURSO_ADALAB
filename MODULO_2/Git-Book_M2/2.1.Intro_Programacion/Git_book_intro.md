# 2.1.1 Intro a la programación

### Nuestro primer código en JavaScript

Vamos a dejar a un lado la explicación y vamos a ponernos manos a la obra. Para ello vamos a crear nuestro primer código JavaScript y este lo que hará será mostrar en la pantalla el mensaje *"¡Hola mundo!"*.

Lo primero que debemos hacer es crear un archivo HTML. Al igual que pasa con CSS, JavaScript solo funciona en un navegador si lo incluimos en nuestro HTML. Como en este caso no queremos ningún estilo, crearemos un html simple:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Mi primer código JavaScript</title>
  </head>
  <body>
    <h1></h1>
  </body>
</html>
```

Hasta aquí todo normal, ahora viene la parte interesante.

¿Cómo utilizamos un código JavaScript dentro de esta página? Por norma general, de momento **enlazamos JavaScript al final de la web, antes del cierre de la etiqueta `body`**. Más adelante veremos el por qué, pero de momento tienes que confiar en nosotros. Al igual que sucedía con CSS, podemos introducir JavaScript de dos formas en nuestra página, escribiendo el código directamente dentro de una etiqueta o escribiendo código en un archivo distinto y enlazándolo.

#### Añadir JS dentro del HTML

Para hacerlo de la primera manera, simplemente creamos una etiqueta `<script>` y metemos el código JavaScript dentro de ella:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Mi primer código JavaScript</title>
  </head>
  <body>
    <h1></h1>
    <!-- De momento, colocaremos la etiqueta script justo antes de cerrar la etiqueta body -->
    <script type="text/javascript">
      // Aquí va el código JavaScript
    </script>
  </body>
</html>
```

> **Nota:** Como puedes ver, dentro del archivo de JavaScript hemos escrito un mensaje precedido del texto `//`. Esta combinación escrita al principio de una línea, marca esa línea como un comentario de JavaScript, esto funciona igual que los comentarios en CSS y HTML. De esta forma podemos ponernos anotaciones sin que se ejecuten o produzca un error en el código. En JavaScript existen también comentarios multilínea, éstos son mensajes envueltos entre `/*` (al comienzo) y `*/` (al final) (ejemplo: `/* Este es un comentario */`). Este tipo de comentarios se utilizan cuando queremos escribir mensajes que ocupen más de una línea dentro de nuestro código.

#### Enlazar un fichero JS dentro del HTML

**En el caso de enlazar un JavaScript externo**, utilizaremos también la etiqueta `<script>` pero esta vez le añadiremos un atributo HTML `src=""` en el que escribiremos como valor la ruta relativa del archivo JavaScript que hemos creado. La etiqueta `<script src="...">` es a JavaScript lo que la etiqueta `<link href="...">` al CSS.

El resultado sería el siguiente (imaginando que el archivo `main.js` está en la misma carpeta que el archivo HTML que hemos creado):

**main.js**

```js
// Aquí va el código JavaScript
```

**index.html**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Mi primer código JavaScript</title>
  </head>
  <body>
    <h1></h1>
    <script type="text/javascript" src="./main.js"></script>
  </body>
</html>
```

Por el momento y como norma general, utilizaremos la opción de enlazar un JavaScript externo en todos los ejercicios que realicemos.

Bien, ya hemos visto cómo enlazar JavaScript en nuestra página, ahora es el momento de ver nuestro primer código JavaScript. Partiendo del código que mostrábamos en el ejemplo anterior con los archivos `main.js` e `index.html`, vamos a añadir el código que aparece a continuación en el archivo `main.js`. Una vez añadido, abre desde tu navegador web el archivo HTML donde has enlazado ese JavaScript y observa qué sucede.

```js
'use strict';

document.querySelector('h1').innerHTML = '¡Hola mundo!';
```

Si has realizado los pasos anteriores y has copiado el código correctamente se mostrará una ventana en tu navegador con el mensaje "¡Hola mundo!". Si es así, ¡enhorabuena! acabas de crear tu primer código JavaScript. Fíjate que en el fichero `index.html` no hay nada dentro de la etiqueta `h1`, pero el navegador sí nos muestra un mensaje.

En este momento estarás pensando «sí, lo he escrito pero no tengo ni idea de cómo funciona». No te preocupes, vamos a entender cómo funciona ahora mismo.

#### use strict

La primera línea del archivo JavaScript (`'use strict';`) sirve para mejorar la rapidez de ejecución del código y hará que el navegador nos muestre errores que, de no ponerla, no lo haría. Por lo tanto esta instrucción al inicio de nuestro código hace que sea más estable o, dicho de otra forma, menos propenso a fallos. Como norma general, **escribiremos SIEMPRE esta línea al comienzo de todos nuestros archivos JavaScript** y para que funcione correctamente deberá ser la primera línea del documento (sin contar los comentarios y las líneas en blanco).

#### Sentencia o statement

La segunda línea (`document.querySelector('h1').innerHTML = '¡Hola mundo!';`) es una sentencia que describe una acción. En programación una sentencia (*statement*) es **la unidad mínima de código que expresa una acción u orden** a llevar a cabo, en este caso, por el navegador. Básicamente le decimos "Hey navegador, te ordeno que hagas esto."

De momento para la sintaxis utilizada en `document.querySelector('h1').innerHTML = '¡Hola mundo!';`, solo comentaremos que permite cambiar el texto de una etiqueta de HTML determinada, en este caso el primer `h1` de nuestro documento HTML.

#### Cada statement en una línea

Otro aspecto a destacar es que escribimos cada orden en una línea y ponemos un punto y coma al final de ésta. En JavaScript se pueden escribir varias sentencias en una misma línea si se separan por un punto y coma (`;`), por ejemplo

```javascript
'use strict';
document.querySelector('h1').innerHTML = '¡Hola mundo!';
```

sería válido. Esto es totalmente desaconsejable y evitaremos hacerlo para que nuestro código sea más fácil de leer. Escribiremos como máximo una orden por línea y **siempre añadiremos el punto y coma al final** de esta para evitar posibles problemas.

Puede que en este punto aún sigas perdida y no te haya quedado muy claro cómo usar realmente JavaScript pero no te preocupes, de momento sólo debes entender que programar **no es otra cosa que pensar en los pasos para resolver un problema** y traducirlo a órdenes con un lenguaje que entienda el navegador (JavaScript). Por tanto, lo que tenemos que hacer es **practicar la lógica, familiarizarnos con la sintaxis de JavaScript y aprender a traducir pasos a este lenguaje** para ir poco a poco mejorando y cogiendo soltura.

### Ejercicios

**1. Mensaje de navegador obsoleto**

En este ejercicio y con lo poquito que hemos visto hasta ahora de JavaScript, vamos a crear un código que muestre un título con el mensaje "Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente". Para ello utilizaremos `document.querySelector('h1').innerHTML` tal y como hemos visto en los ejemplos anteriores.

Una vez que lo hayáis realizado podéis enviárselo a algún amigo o familiar y decirle que os diga que le parecen los colores de vuestra nueva web para que pase un rato divertido intentando actualizar el navegador :).

> **Importante:** después de realizar cualquier ejercicio con JS debemos ir al inspector de Chrome y analizar el código que hemos generado o modificado. Viendo el resultado en el inspector nuestro cerebro asimila mucho mejor lo que estamos programando.

> **Nota:** como no estamos usando el web starter kit, debemos utilizar **Live server / Go live** para visualizar nuestras páginas.


# 2.1.1 Intro a la programación

### Nuestro primer código en JavaScript

Vamos a dejar a un lado la explicación y vamos a ponernos manos a la obra. Para ello vamos a crear nuestro primer código JavaScript y este lo que hará será mostrar en la pantalla el mensaje *"¡Hola mundo!"*.

Lo primero que debemos hacer es crear un archivo HTML. Al igual que pasa con CSS, JavaScript solo funciona en un navegador si lo incluimos en nuestro HTML. Como en este caso no queremos ningún estilo, crearemos un html simple:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Mi primer código JavaScript</title>
  </head>
  <body>
    <h1></h1>
  </body>
</html>
```

Hasta aquí todo normal, ahora viene la parte interesante.

¿Cómo utilizamos un código JavaScript dentro de esta página? Por norma general, de momento **enlazamos JavaScript al final de la web, antes del cierre de la etiqueta `body`**. Más adelante veremos el por qué, pero de momento tienes que confiar en nosotros. Al igual que sucedía con CSS, podemos introducir JavaScript de dos formas en nuestra página, escribiendo el código directamente dentro de una etiqueta o escribiendo código en un archivo distinto y enlazándolo.

#### Añadir JS dentro del HTML

Para hacerlo de la primera manera, simplemente creamos una etiqueta `<script>` y metemos el código JavaScript dentro de ella:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Mi primer código JavaScript</title>
  </head>
  <body>
    <h1></h1>
    <!-- De momento, colocaremos la etiqueta script justo antes de cerrar la etiqueta body -->
    <script type="text/javascript">
      // Aquí va el código JavaScript
    </script>
  </body>
</html>
```

> **Nota:** Como puedes ver, dentro del archivo de JavaScript hemos escrito un mensaje precedido del texto `//`. Esta combinación escrita al principio de una línea, marca esa línea como un comentario de JavaScript, esto funciona igual que los comentarios en CSS y HTML. De esta forma podemos ponernos anotaciones sin que se ejecuten o produzca un error en el código. En JavaScript existen también comentarios multilínea, éstos son mensajes envueltos entre `/*` (al comienzo) y `*/` (al final) (ejemplo: `/* Este es un comentario */`). Este tipo de comentarios se utilizan cuando queremos escribir mensajes que ocupen más de una línea dentro de nuestro código.

#### Enlazar un fichero JS dentro del HTML

**En el caso de enlazar un JavaScript externo**, utilizaremos también la etiqueta `<script>` pero esta vez le añadiremos un atributo HTML `src=""` en el que escribiremos como valor la ruta relativa del archivo JavaScript que hemos creado. La etiqueta `<script src="...">` es a JavaScript lo que la etiqueta `<link href="...">` al CSS.

El resultado sería el siguiente (imaginando que el archivo `main.js` está en la misma carpeta que el archivo HTML que hemos creado):

**main.js**

```js
// Aquí va el código JavaScript
```

**index.html**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Mi primer código JavaScript</title>
  </head>
  <body>
    <h1></h1>
    <script type="text/javascript" src="./main.js"></script>
  </body>
</html>
```

Por el momento y como norma general, utilizaremos la opción de enlazar un JavaScript externo en todos los ejercicios que realicemos.

Bien, ya hemos visto cómo enlazar JavaScript en nuestra página, ahora es el momento de ver nuestro primer código JavaScript. Partiendo del código que mostrábamos en el ejemplo anterior con los archivos `main.js` e `index.html`, vamos a añadir el código que aparece a continuación en el archivo `main.js`. Una vez añadido, abre desde tu navegador web el archivo HTML donde has enlazado ese JavaScript y observa qué sucede.

```js
'use strict';

document.querySelector('h1').innerHTML = '¡Hola mundo!';
```

Si has realizado los pasos anteriores y has copiado el código correctamente se mostrará una ventana en tu navegador con el mensaje "¡Hola mundo!". Si es así, ¡enhorabuena! acabas de crear tu primer código JavaScript. Fíjate que en el fichero `index.html` no hay nada dentro de la etiqueta `h1`, pero el navegador sí nos muestra un mensaje.

En este momento estarás pensando «sí, lo he escrito pero no tengo ni idea de cómo funciona». No te preocupes, vamos a entender cómo funciona ahora mismo.

#### use strict

La primera línea del archivo JavaScript (`'use strict';`) sirve para mejorar la rapidez de ejecución del código y hará que el navegador nos muestre errores que, de no ponerla, no lo haría. Por lo tanto esta instrucción al inicio de nuestro código hace que sea más estable o, dicho de otra forma, menos propenso a fallos. Como norma general, **escribiremos SIEMPRE esta línea al comienzo de todos nuestros archivos JavaScript** y para que funcione correctamente deberá ser la primera línea del documento (sin contar los comentarios y las líneas en blanco).

#### Sentencia o statement

La segunda línea (`document.querySelector('h1').innerHTML = '¡Hola mundo!';`) es una sentencia que describe una acción. En programación una sentencia (*statement*) es **la unidad mínima de código que expresa una acción u orden** a llevar a cabo, en este caso, por el navegador. Básicamente le decimos "Hey navegador, te ordeno que hagas esto."

De momento para la sintaxis utilizada en `document.querySelector('h1').innerHTML = '¡Hola mundo!';`, solo comentaremos que permite cambiar el texto de una etiqueta de HTML determinada, en este caso el primer `h1` de nuestro documento HTML.

#### Cada statement en una línea

Otro aspecto a destacar es que escribimos cada orden en una línea y ponemos un punto y coma al final de ésta. En JavaScript se pueden escribir varias sentencias en una misma línea si se separan por un punto y coma (`;`), por ejemplo

```javascript
'use strict';
document.querySelector('h1').innerHTML = '¡Hola mundo!';
```

sería válido. Esto es totalmente desaconsejable y evitaremos hacerlo para que nuestro código sea más fácil de leer. Escribiremos como máximo una orden por línea y **siempre añadiremos el punto y coma al final** de esta para evitar posibles problemas.

Puede que en este punto aún sigas perdida y no te haya quedado muy claro cómo usar realmente JavaScript pero no te preocupes, de momento sólo debes entender que programar **no es otra cosa que pensar en los pasos para resolver un problema** y traducirlo a órdenes con un lenguaje que entienda el navegador (JavaScript). Por tanto, lo que tenemos que hacer es **practicar la lógica, familiarizarnos con la sintaxis de JavaScript y aprender a traducir pasos a este lenguaje** para ir poco a poco mejorando y cogiendo soltura.

### Ejercicios

**1. Mensaje de navegador obsoleto**

En este ejercicio y con lo poquito que hemos visto hasta ahora de JavaScript, vamos a crear un código que muestre un título con el mensaje "Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente". Para ello utilizaremos `document.querySelector('h1').innerHTML` tal y como hemos visto en los ejemplos anteriores.

Una vez que lo hayáis realizado podéis enviárselo a algún amigo o familiar y decirle que os diga que le parecen los colores de vuestra nueva web para que pase un rato divertido intentando actualizar el navegador :).

> **Importante:** después de realizar cualquier ejercicio con JS debemos ir al inspector de Chrome y analizar el código que hemos generado o modificado. Viendo el resultado en el inspector nuestro cerebro asimila mucho mejor lo que estamos programando.

> **Nota:** como no estamos usando el web starter kit, debemos utilizar **Live server / Go live** para visualizar nuestras páginas.


# 2.1.3 Modificar contenido de elementos HTML

La operación más básica a la hora de trabajar con nuestra página web es obtener información acerca de una etiqueta, bien sea para añadir algo a su contenido, modificarlo o eliminarlo directamente. En JavaScript nos referimos a las etiquetas de HTML como elementos (en futuras lecciones veremos el porqué de esto).

Como vimos al principio de la lección con `document.querySelector('h1').innerHTML = '¡Hola Mundo!'` cambiábamos el texto de la etiqueta `h1` del documento HTML. Vamos a desgranar esto un poco para entenderlo mejor.

#### Obtener una etiqueta o elemento de HTML

Con `document.querySelector('h1')` **obtenemos el primer elemento** `h1` que hayamos escrito en nuestro HTML. Podemos usar esta sentencia para recoger un elemento de HTML y asignarlo a una constante.

Como sucedía en las hojas de estilo, acceder a las etiquetas por su nombre puede ser problemático y no es la mejor práctica. Lo bueno es que `document.querySelector()` nos permite acceder a los elementos de HTML utilizando los selectores de CSS:

**Selector de etiqueta:**

```js
const mainTitle = document.querySelector('h1');
```

**Selector de id:**

```js
const mainTitle = document.querySelector('#mainTitle');
```

**Selector de clase:**

```js
const mainTitle = document.querySelector('.mainTitle');
```

#### Modificar el contenido de una etiqueta o elemento de HTML

Cuando hablamos de modificar el contenido de un elemento HTML, nos referimos a cambiar lo que hay entre la etiqueta de apertura y la de cierre. Para realizar este tipo de operaciones utilizaremos la propiedad `innerHTML`.

Imaginemos que tenemos el siguiente código HTML con un `h1` para el título y este contiene el texto "Binvenida" (sí, con una errata).

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>
  <body>
    <h1 class="title">Binvenida</h1>
  </body>
</html>
```

Imaginemos que queremos cambiar ese texto por otro sin la errata usando JavaScript. Lo haríamos de la siguiente manera:

```js
// Obtenemos el elemento con el que queremos trabajar usando document.querySelector()
const titleElement = document.querySelector('.title');

// Cambiamos su contenido con innerHTML
titleElement.innerHTML = 'Bienvenida';
```

De esta forma el contenido de h1 pasaría de ser *"Binvenida"* a *"Bienvenida"*. Al cambiar el contenido de ese elemento (`.title`) el navegador automáticamente actualizará la vista de la página mostrando el texto nuevo. Esto sucede tan rápido que ni siquiera nos dará tiempo a ver la página con el texto anterior, sino que directamente aparecerá con el texto que hemos introducido mediante JavaScript.

> NOTA: Debemos dejar claro que la utilidad de JavaScript no es la de solucionar erratas en nuestro código. Esto lo modificaremos directamente en el HTML para corregirlo, pero creemos que este ejercicio ilustra bien cómo funciona `innerHTML` y para qué sirve.

Ahora supongamos que tras cambiar con JavaScript el texto de *"Binvenida"* a *"Bienvenida"* queremos hacerlo más personal y queremos que ponga *"Bienvenida adalaber"* en vez de un soso *"Bienvenida"*.

En este caso deberemos coger el contenido actual del elemento y añadirle "adalaber". Aquí viene un concepto interesante, `innerHTML` no solo nos permite cambiar el contenido de una etiqueta, también podemos recoger el valor actual, vamos a verlo:

```js
// Obtenemos el elemento con el que queremos trabajar usando document.querySelector()
const titleElement = document.querySelector('.title');

// Cambiamos el contenido del elemento, indicando que sea igual al actual, más una nueva palabra añadida
titleElement.innerHTML = titleElement.innerHTML + ' adalaber';
```

Una cosa importante de `innerHTML` es que nos permite cambiar el contenido de un elemento y como en JavaScript podemos meter HTML dentro de HTML, `innerHTML` también nos va a permitir hacer esto, por lo que, si tuviésemos un HTML con una lista vacía (`<ul class="list"></ul>`) y quisiéramos introducir dos `li`s cada uno con un enlace, podríamos hacerlo de la siguiente manera:

```js
const listElement = document.querySelector('.list');

const content = '<li><a href="#">Home</a></li><li><a href="#">Contact</a></li>';

listElement.innerHTML = content;
```

Esto añadirá dos `li`s a la lista y la página los mostrará automáticamente.

Con esto ya podemos trabajar editando el contenido de nuestra página. A partir de ahora podremos añadir contenido a nuestra web o modificarlo y por tanto hacer nuestra web dinámica de verdad, genial ¿no? :).

### Ejercicios

**1. Hola Mundo**

Crea una página HTML con un párrafo en el que ponga *Hola* y, usando JavaScript, vamos a cambiar ese texto por *Hola Mundo*.

**2. Seleccionando Adalabers**

Crea una página HTML que contenga un listado con tu nombre y el de tu compañera, y un título que diga "La Adalaber seleccionada es: ". Usando JavaScript, tenemos que cambiar el título añadiendo el nombre del primer `li`.

```
La Adalaber seleccionada es: Lola
```

Una vez hecho esto, cambia el código para que el nombre sea el del segundo `li`.

**3. Lorem ipsum**

Crea una página HTML con un solo div, y usando JavaScript, añadir un h1 con el texto "Lorem ipsum", una imagen con el src `http://via.placeholder.com/350x150` y un párrafo con el texto "Lorem ipsum dolor sit amet, consectetur adipisicing elit".


