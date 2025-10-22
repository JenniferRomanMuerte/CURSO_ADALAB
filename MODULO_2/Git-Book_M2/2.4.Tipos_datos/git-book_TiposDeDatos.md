# 2.4 Tipos de datos

Cuando programamos, realizamos operaciones sobre datos para obtener un resultado concreto. Estos datos con los que trabajamos en nuestro código se representan mediante valores. Por tanto un valor no es más que la representación de un dato sobre la que podemos aplicar las reglas comentadas anteriormente.

Si queremos mostrar la temperatura en una pantalla, necesitaremos el valor numérico (por ejemplo, 27) que represente el dato de esa temperatura y sobre ese valor aplicaremos las reglas para obtener el resultado deseado (sacar la media de temperatura, calcular el día que más calor ha hecho, etc.).

Se aprecia con esto que la base de la información de nuestra aplicación reside en los valores. Éstos serán los encargados de representar los datos y serán sobre los que apliquemos las operaciones necesarias.

Durante esta sesión vamos a ver:

* Algunos tipos de datos para poder operar con ellos de manera adecuada, como `string` y `number` y cómo operar con ellos para obtener distintos resultados. Y el valor de una variable vacía, cuyo tipo se llama igual que el valor, `undefined`.
* Cómo trabajar con la consola del navegador, que es una herramienta indispensable a la hora de programar en la web.


# 2.4.1 Consola de JS

A menudo queremos saber **qué valor tiene una constante o una variable** en un momento dado. Ya sabemos ver el valor de dicha variable pintándola en el HTML con `document.querySelector()`. El problema es que es un poco tedioso, porque tenemos que crear una etiqueta en el HTML y modificarla desde JS con `document.querySelector('.selector-de-mi-etiqueta').innerHTML = myVar;`.

No es ni cómodo ni rápido. Además luego tendríamos que borrar la etiqueta del HTML y el código de JS para que no se quedase ahí para siempre, y las usuarias vieran algo que no queremos que vean.

Para saber qué valor tiene una variable, constante o cualquier otra cosa de JS en un momento dado tenemos una herramienta más sencilla. La consola de DevTools.

La consola de DevTools nos permite:

* Ver los errores de sintaxis que tenemos en nuestro código. Un error de sintaxis es que hemos escrito el código mal y el navegador no lo entiende. Por ejemplo se nos ha olvidado un punto y coma.
* Ver los valores de una variable o constante escribiendo el código `console.log(nombreDeMiVariableOConstante);` en nuestro fichero de JS.
* Ejecutar código JS diretamente en la consola para ver el resultado. Es más rápido que escribirlo en el fichero `main.js`, guardarlo y refrescar la página.

En las herramientas para desarrollar de Chrome (las DevTools) hay una pestaña que es una consola JavaScript.

> **Nota:** No siempre vemos todos los mensajes que mostramos en consola con `console.log('...');`. Esto es porque DevTools los está filtrando y solo muestra algunos. Para ver todos los mensajes tenemos que seleccionar la opción **No messages** como se muestra en la siguiente imagen:

![La consola de DevTools](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-266ff57652c5bd46425b929df7864d182fad2c3b%2Fconsole_filter.png?alt=media)

Como hemos dicho, en la consola también podemos interactuar con nuestro programa JavaScript, es decir, desde el código que escribimos en nuestro fichero `main.js`. Una de las cosas que podemos hacer es escribir información, esto se denomina comúnmente *loguear* información. Lo hacemos mediante la función `console.log()`, en la que lo que pongamos entre paréntesis será lo que se escriba en la consola.

```js
console.log('Hola');

const age = 56;
console.log(age);
```

A priori puede parecer que esto no tiene mucha utilidad ya que en nuestra página web no veremos nada, solo si abrimos las herramientas de desarrolladores. Pero vas a ir comprobando lo útil que es, por ejemplo, para depurar (resolver) errores en el código, o para hacer "trazas" de operaciones y asegurarnos de que todo funciona como esperamos antes de, por ejemplo, modificar el HTML.

```js
const welcomeParagraph = document.querySelector('.welcomeText');

// Logueo el contenido de la constante welcomeParagraph en la consola y compruebo que tiene asignado el elemento de HTML que espero antes de cambiar su contenido
console.log('welcomeParagraph: ', welcomeParagraph);

welcomeParagraph.innerHTML = 'Bienvenida Adalaber';
```

**La consola del navegador es a JavaScript lo que el inspector de elementos a HTML y CSS, es decir, herramientas indispensables para desarrollar.**

A partir de ahora cada vez que escribamos código JavaScript y sirvamos nuestra página en el navegador, siempre abriremos la consola, ya que sin ella estaremos programando **a ciegas**.

### Ejercicios

**1. "Trasteando" la consola**

Abre la consola y haz las siguientes pruebas:

* Realiza una suma sencilla con nuestro número favorito y el de nuestra compañera y pulsa Intro.
* Haz lo mismo, pero guardando los números en constantes y utilizando estas para sumar.

**2. Dayana mola**

Partiendo de este HTML:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Dayana is Cool</title>
  </head>
  <body>
    <main class="main">
      <h1 class="main__title">
        Esa Dayana como mola, se merece una <span class="super-wave">OLA!</span>
      </h1>
    </main>
    <script type="text/javascript" src="main.js"></script>
  </body>
</html>
```

De este CSS:

```css
.main {
  background-color: pink;
}

.main__title {
  color: red;
}
```

Y de este JavaScript:

```js
const superWave = document.querySelector('.super-wave');
```

Crea una clase nueva para destacar el texto `OLA!` y añádela con JavaScript al elemento con clase `super-wave`. Prueba a loguear la constante `superWave`.


# 2.4.2 Tipos de datos Number

En JavaScript existen por defecto siete tipos distintos de datos, casi todos ellos los veremos a lo largo del curso, pero por el momento vamos a centrarnos en cuatro: `string` (cadena de caracteres / texto), `number` (número), boolean (verdadero o falso) y `undefined` (sin definir).

Cada uno de ellos, según sus características, se utilizará para representar un tipo de valor concreto. El tipo `number`, como habrás podido deducir, se utilizará para representar números, el tipo `string` se utilizará para representar texto, compuesto de varios caracteres que unidos entre sí forman una cadena (string), el tipo boolean se utilizará para representar valores lógicos, es decir, verdadero (true) o falso (false); y el tipo `undefined` representa un valor aún sin definir.

### Number

Como su nombre indica, el tipo de valor *number* comprende cualquier tipo de número utilizado en JavaScript. Hay varios subtipos de números en JavaScript pero de momento aprenderemos los más importantes, números enteros o *integers* y números decimales o *floating point numbers (comúnmente llamados float)*.

En JavaScript los números enteros se representan directamente con cifras, por lo que es totalmente válido escribir `14232` o `-42` en nuestro código. Por otro lado, los números decimales se escriben igual que en inglés, es decir, utilizando puntos en vez de comas. Por ejemplo, podemos representar el número *1,32* escribiendo `1.32` (formato inglés).

Las anteriores son las únicas reglas de sintaxis a la hora de escribir números enteros y decimales. Pero escribir números sin hacer nada con ellos no tiene ninguna utilidad, lo que queremos es poder obtener otros números, es decir, poder operar con ellos. Esto lo podemos conseguir mediante los operadores de suma, resta, multiplicación, división y módulo.

#### Suma, resta, multiplicación y división

En JavaScript, los operadores de suma (`+`), resta (`-`), multiplicación (`*`) y división (`/`) se utilizan exactamente igual que en matemáticas.

```js
1 + 2; // Devuelve 3
1.4 - 2.4; // Devuelve -1
30 + 20 - 4; // Devuelve 46
3 + 3 + 3; // Devuelve 9

4 * 4; // Devuelve 16
8 * -7; // Devuelve -56
(4 * 2) / 8; // Devuelve 1
0 / 8; // Devuelve 0
1.6 / 0.2; // Devuelve 8
```

> **Nota:** El espacio entre los números no es necesario, podríamos poner `4+4` y funcionaría perfectamente. La finalidad de ese espacio es ayudar a visualizar mejor el código y la mayoría de los programadores en JavaScript suelen utilizarlos, por tanto, nosotros también lo haremos así.

El orden en el que se ejecutan los operadores también es igual que el utilizado en matemáticas. De izquierda a derecha y evaluándolos en el siguiente orden:

1. Operaciones entre paréntesis.
2. Multiplicación y división.
3. Suma y resta.

Los paréntesis en JavaScript, a la hora de aplicarlos a los números, funcionan igual que en matemáticas.

```js
4 +
  ((((4 * 4) /
    8(
      // Devuelve 6
      4 + 4
    )) *
    4) /
    8(
      // Devuelve 4
      4 + 4
    )) *
    (4 / 8); // Devuelve 4 también
```

A lo mejor te estás preguntando por qué existen los tipos de datos en los lenguajes de programación. O a lo mejor no. Existen porque en una web tenemos que gestionar muchos datos, como el nombre e email de una usuaria, o el precio de la cesta de compra de Amazon. Hay diferentes tipos para JS sepa cómo debe operar los datos. Por ejemplo:

```js
const name = "Paquita";
const surname = " Salas";
console.log(name + surname); // esto pinta en consola 'Paquita Salas'
const price = 10;
const shipping = 3;
console.log(price + shipping); // esto pinta en consola 13
```

Si te das cuenta cuando usamos `+` con textos los concatena. Cuando usamos `+` con números los suma. Esto es gracias a que JS sabe que unas constantes son de tipo texto y otras de tipo número.

### Ejercicios

#### 1. **El precio de la fruta**

Imagina que vamos a la frutería y compramos lo siguiente:

* 2 kilos de kiwis a 5€ / kg
* 3 kilos de peras conferencia (no una cualquiera) a 2€ / kg
* Medio kilo de uvas a 4€ / kg

Calcula el precio total como si lo hiciésemos en una hoja de papel de toda la vida pero de manera mucho más guay. El resultado debe mostrarse en la consola del navegador.

#### 2. **Calcular el número total de horas que hemos vivido**

Crea un programa que nos diga cuántas horas en total hemos vivido. Por ejemplo, si alguien tiene 60 años, este código debería mostrar un mensaje con el número **525600**.


# 2.4.3 Tipos de datos String

### String

*String* traducido al español significa cadena y como su nombre indica es el tipo de valor utilizado para representar cadenas de caracteres, que viene a ser básicamente texto. Cualquier tipo de texto, ya sean caracteres sueltos ("a", "b", "0") o en conjunto ("hola", "las 13:40", "2312312") estará incluido dentro de este tipo de valor.

En los ejercicios anteriores, siempre que hemos escrito entre comillas (`''`) un texto, lo que hemos hecho es incluir en el código un *string*, decirle a JS que eso es un texto y que debe utilizarlo como tal en vez de entenderlo como una orden (como hace con `console.log` o con `document.querySelector()`).

Para representar un string en JavaScript, se puede utilizar tanto texto envuelto entre comillas simples (`''`) como dobles (`""`). Ambas son totalmente válidas y funcionan de la misma manera salvo que las comillas simples no pueden contener dentro otras comillas simples y las dobles no pueden contener dobles. De esta forma, `'Esto es un 'bug''` da error porque el navegador al ejecutar el código entiende que un texto termina antes de `bug` y comienza otro texto después de `bug`. Pasaría lo mismo si usamos `"Esto es un "bug""`.

Para evitar estos errores producidos por el uso de comillas anidadas existen dos soluciones:

* Usar comillas simples siempre que el texto contenga comillas dobles o viceversa
* Usar la barra inclinada (`\`) delante de las comillas anidadas (Ej: `'I\'m a front-end developer'`). De esta forma decimos a JavaScript que esas comillas son texto normal y no van a ser usadas para marcar el final del string y por tanto no se produce el error.

Otra regla es que debe coincidir el estilo de la comilla de apertura con la de cierre:

```
'esto es un texto válido'
'esto no es válido"
```

> **Nota:** como sabemos que os gustan las normas y las cosas claras, a la hora de trabajar con distintos tipos de comillas, la opción recomendable es usar un único tipo a lo largo de todo el código de tu programa y usar `\` para "escapar" (convertir a un carácter normal) las comillas anidadas (ej: `'What\'s up!'`).

Ejemplos de `string`s válidos en JavaScript:

```js
'a'; // Devuelve "a"
'b'; // Devuelve "b"
'Hola'; // Devuelve "Hola"
'¿Qué tal?   '; // Devuelve "¿Qué tal?   " (nótese los espacios)
'%^%&^%Ω'; // Devuelve "%^%&^%Ω"
'Lorem ipsum dolor'; // Devuelve "Lorem ipsum dolor"
'123123'; // Devuelve "123123"
'"Lorem ipsum dolor sit amet..."'; // Devuelve ""Lorem ipsum dolor sit amet...""
"\"Lorem ipsum dolor sit amet...\""; // Devuelve ""Lorem ipsum dolor sit amet...""
'It\'s ok'; // Devuelve "It's ok"
```

### Concatenando cadenas

En el caso de `string`, la única forma de operar con él es usando el operador de concatenación (`+`). Este operador nos permitirá unir (concatenar) dos o más textos para obtener uno nuevo. Algunos ejemplos:

```js
'Fecha de conexión: ' + 'jueves 15'; // Devuelve "Fecha de conexión: jueves 15"
'H' + 'o' + 'l' + 'a'; // Devuelve "Hola"
'Faltan ' + '3' + ' días'; // Devuelve "Faltan 3 días"
```

### Interpolación de cadenas (Template strings)

En casos un poco más elaborados la concatenación hace que el código sea difícil de leer y por lo tanto de manejar. Por suerte esta fue otra de las áreas mejoradas en la última versión de JavaScript (ES6).

La interpolación de cadenas nos facilita insertar variables y operaciones dentro de cadenas de texto. Para eso escribiremos las cadenas entre acentos graves o *backticks* (`` `This is a string` ``), en vez de entre comillas, y los valores entre `${` y `}` (`${expressionOrVariable}`).

```js
const name = 'Ada';
const surname = 'Lovelace';

console.log(`My name is ${name} ${surname}.`);
// 'My name is Ada Lovelace.'
```

También podemos evaluar operaciones directamente:

```js
const firstItemPrice = 5;
const secondItemPrice = 3;

console.log(`Total amount: ${firstItemPrice + secondItemPrice}€`);
// Total amount: 8€
```

Interpolar cadenas también nos permite escribir cadenas de varias líneas sin escapar los saltos de línea, como era necesario en ES5:

```js
const element = document.querySelector('#element');
const textToShow = 'Hey, this is important.';

// ES5
element.innerHTML =
  '\
<div class="popup">\
  <span>' +
  textToShow +
  '</span>\
</div>';

// ES6
element.innerHTML = `
<div class="popup">
  <span>${textToShow}</span>
</div>`;
```

[▸ Interpolación de cadenas en Codepen](https://codepen.io/adalab/pen/wpPZvN?editors=0010)

### Longitud de string

Toda cadena en JavaScript tiene una longitud, esta se puede consultar mediante la propiedad `length`.

```js
const browserName = 'Mozilla';

console.log('Mozilla is ' + browserName.length + ' code units long');
```

### Cuando string encontró a number

Es importante saber que cualquier número entre comillas, como por ejemplo `"232"`, será considerado como texto (`string`). Por tanto tenemos que estar atentos a las comillas para saber diferenciar entre uno y otro.

Como hemos visto el operador `+` nos permite sumar números y concatenar strings. ¿Pero que ocurre si intentamos sumar número y string? Pues que JavaScript siempre convierte primero el número a string y posteriormente juntará ambos textos (ej: 5 + "5" resuelve "55")

### Convirtiendo strings a números

Cuando recogemos valores de HTML, aunque sean números, (el contenido entre dos etiquetas, el valor de un input...) su tipo será string. Recuérda esto, siempre será un string.

Con `parseInt()` podemos convertir una cadena en un número entero.

```js
const userAge = document.querySelector('.user__age');
console.log(userAge.innerHTML); // esto es un string
const yearsToRetirement = 67 - parseInt(userAge.innerHTML);
console.log(`Te quedan ${yearsToRetirement} años para jubilarte`);
```

### Ejercicios

#### 1. **Lista de perretes**

Pinta tres elementos `li` dentro de una lista `ul` con la información de gatitos: un nombre y una foto, los obtendremos a partir de los siguientes datos:

```js
const firstDogImage =
  'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage =
  'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage =
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';
```

Para añadir cada uno de los elementos utiliza la propiedad `innerHTML` y la interpolación de cadenas.

#### 2. **Cuántas letras tiene tu nombre**

Haz el código necesario para crear un programa que pinte en HTML lo siguiente:

`El nombre de mi compañera es Leticia Fernández Sánchez, y está compuesto por 23 caracteres`,

remplazando `Leticia Fernández Sánchez` por el nombre de nuestra compañera y `23` por la longitud de la cadena con su nombre.

> **Nota**: tendremos que guardar el nombre de nuestra compañera en una constante para poder trabajar con él.

#### 3. **String plus number**

Copia y pega en la consola la siguiente operación:

```js
2 + 3 + '5';
```

Ahora realiza lo mismo con esta otra:

```js
'2' + 3 + 5;
```

Compara y comenta los resultado con tu compañera.

A continuación escribe en consola el número (sin comillas):

```js
123;
```

Y ahora escrib el texto con comillas:

```js
'123';
```

Observa con qué color se muestran en la consola para indicarnos que uno es un número y el otro un texto.


# 2.4.4 Tipos de datos Booleanos

### Booleanos

Los booleanos son tipos de datos de JavaScript que guardan información del tipo verdadero o falso. Solo pueden tener los valores `true` o `false`. Por ejemplo:

```js
const filled = false; // Este booleano es falso
const solved = true; // Este booleano es verdadero
```

Los booleanos son muy útiles para representar valores que solo pueden ser verdadero o falso. Por ejemplo, para representar si un usuario tiene o no avatar. O también para representar el resultado de una comparación. Por ejemplo, el número de tareas que tenemos que completar es menor que 5.

### Truthy y Falsy

En Javascript un **valor verdadero** o `Truthy` es un valor que se considera verdadero aunque su tipo no sea `boolean`. Todos los valores son verdaderos a no ser que estén en la lista de los definidos como "Falsy".

Los valores `Falsy` son aquellos que aun no siendo de tipo booleano, al evaluarse en un contexto booleano, se comportan como los booleanos de valor falso.

Los valores falsy son:

* false
* null
* undefined
* 0
* NaN
* ''
* ""

# 2.4.5 Tipos de datos Undefined

### Undefined

Siempre que definimos una variable y no le asignamos un valor, JavaScript le asigna por defecto el valor `undefined`, cuyo tipo es también `undefined`;

```js
let notDefinedVar;

console.log(notDefinedVar); // undefined
```

### Type of

En JavaScript existe una función muy útil para saber de qué tipo es una variable en cada momento. Se llama `typeof`. Y se puede usar con o sin paréntesis:

```javascript
const text = "¿De qué tipo soy?";
console.log("Soy de tipo:", typeof text); // con paréntesis
console.log("Soy de tipo:", typeof text); // sin paréntesis
```

Vamos a copiar y pegar este código en la consola del navegador a ver qué pasa:

```javascript
let text = "¿De qué tipo soy?";
console.log(text + " es del tipo " + typeof text);
text = 123;
console.log("ahora " + text + " es del tipo " + typeof text);
text = undefined;
console.log("y ahora " + text + " es del tipo " + typeof text);
```

### NaN

Es un valor de tipo numérico un poco especial, ya que su nombre lo describe como Not-a-Number. `NaN` es el valor que JavaScript devuelve cuando intentamos realizar operaciones matemáticas con valores no numéricos o que no se pueden convertir a número. Veamos ejemplos:

```js
`mango` -
  2 // NaN
  `JavaScript loves HTML` *
    100; // NaN

64 * undefined; // NaN
```

Para saber si podemos hacer operaciones matemáticas con las variables adecuadas existe una función que se llama `isNaN` que nos indica si una variable es `NaN` o no.

Imaginemos que en un formulario tenemos un input para que la usuaria introduzca su edad y en vez de escribir "65" escribe "¡¡A una dama no se le pregunta la edad!!". No vamos a poder trabajar con ese valor, pero gracias a `isNaN` vamos a saber que no podemos trabajar con ese valor.

Haríamos lo siguiente:

```javascript
let userAge = document.querySelector(".user__age");
userAge = parseInt(userAge.value);
console.log("La usuaria no ha introducido una edad válida:", isNaN(userAge));
```
