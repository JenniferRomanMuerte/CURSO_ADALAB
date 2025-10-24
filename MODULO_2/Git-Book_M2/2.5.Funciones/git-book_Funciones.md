# 2.5 Funciones I

Una función es un bloque de código que definimos una vez y lo reutilizamos las veces que queramos; un conjunto de instrucciones a las que podemos pasar diferentes datos para que nos devuelva resultados distintos.

Durante esta sesión veremos cuáles son las principales características de este recurso de programación y cómo utilizarlo en nuestro código para sacarle el máximo partido.

## ¿En qué casos se utiliza?

Por ejemplo, en los siguientes casos:

* Si tenemos un código que convierte la primera letra de un texto a mayúsculas y vamos a usar ese código en varias partes de nuestro programa, creamos una función y ejecutamos la función en cada uno de los sitios necesarios
* Si queremos añadir varias clases a diferentes elementos HTML en función de la medida de la página web podemos crear una función y utilizarla en cada uno de ellos
* Si queremos enviar datos a un servidor, la mayoría de las veces es muy parecido y sólo cambian unos datos. Podríamos hacer una función y reutilizarla y usar distintos datos en cada una mediante los parámetros de la función (que veremos durante esta sesión)

# 2.5.1 Funciones

Las funciones son muy útiles a la hora de crear un código único para usarlo en distintas partes de nuestro programa. El beneficio de esto es que si en el futuro queremos modificar algo de ese código lo haremos en un único sitio aunque se utilice en decenas de sitios diferentes. Las funciones se ejecutan en distintos momentos y con distintas características gracias a los *parámetros* y a los *argumentos*.

Otra de las ventajas de las funciones es que devuelven un valor, es decir, realizan una operación y pueden devolver un dato. Ese dato podemos asignárselo a una variable o usarlo dentro de otra operación. O incluso podemos prescindir de él si no nos interesa para nada.

Las funciones son una forma de agrupar código que vamos a usar varias veces permitiéndonos además, pasar diferentes valores para obtener diferentes resultados.

Podemos intentar hacer un paralelismo con el café, más o menos todo el mundo sabe hacer un café, desde los ingredientes a los diferentes pasos. Y cada vez que queramos uno seguimos todos los pasos uno a uno, y al final tendremos un café.

Ahora, las funciones serían como estas cafeteras modernas, a las que dependiendo de la cápsula que uses te hace un café diferente. Cuando activo la cafetera (llamo a la función) detecta qué tipo de capsula he introducido (parámetros) y me hace (me devuelve) un café u otro:

* Si utilizo una de estas cápsulas de hipster purista tendré un café de esos que no te dejan tomar si no llevas camisas de cuadros, patinetes y unas gafas de pasta.
* Si utilizo una cápsula más divertida que añada espuma, caramelo y coco pues tendré que huir de los hispters de antes porque para ellos este tipo de café debería ser ilegal.

Un ejemplo de esto sería:

```javascript
function makeMeCoffee(coffeeName) {
  return `Aquí tiene su ${coffeeName}, que lo disfrute`;
}
```

De manera que podemos llamar varias veces a la función y obtener "cafés" diferentes:

```javascript
makeMeCoffee('Café hipster con cuerpo de minotauro y esencia de madera y oro');
// devuelve "Aquí tiene su Café hipster con cuerpo de minotauro y esencia de madera y oro, que lo disfrute"

makeMeCoffee('Café con coco, nata y un toque de menta');
// devuelve "Aquí tiene su Café con coco, nata y un toque de menta, que lo disfrute"
```

### Declaración y uso de funciones

Para utilizar una función debemos declararla en algún sitio de nuestro código.

La estructura para declarar una función es

* primero la palabra reservada `function` seguida del nombre de la función
* después entre paréntesis `( )` los parámetros de la función separados por comas `,`, si no tiene parámetros estará vacío
* un bloque de código entre llaves `{ }` con las instrucciones de código de la función

```javascript
//Función sin parámetros
function hi() {
  return 'Hola';
}

//Función con parámetros
function sum(a, b) {
  return a + b;
}
```

Si añadimos las declaraciones anteriores de funciones a nuestra página, no veremos ningún efecto. Esto es porque solo estamos declarando las funciones, es decir, diciendo que existen pero nada más.

Para utilizar (también se le puede llamar *ejecutar* o *invocar*) una función simplemente usamos el nombre de la función seguida de paréntesis donde pasaremos los argumentos separados por comas `,`.

```javascript
console.log(hi());
//Muestra en la consola la palabra 'Hola'

console.log(sum(1, 4));
//Muestra en la consola un 5
```

> NOTA: Esta sintaxis para utilizar funciones te suena, ¿verdad? Hasta ahora hemos estado ejecutando algunas funciones ya declaradas en el navegador como `querySelector('.title')` a la que le pasamos por parámetro una cadena con el selector que buscamos y nos devuelve la referencia a dicho elemento en nuestro HTML.

Así, una función es como una máquina:

* Se construye una vez (declarando la función)
* Se utiliza muchas veces (ejecutando la función)

Se pueden crear funciones sin nombre, estas funciones se llaman *funciones anónimas*. Estas funciones se suelen emplear para cosas que veremos en el curso más adelante, como asignarlas a una propiedad de un objeto o pasarlas como un callback. Un ejemplos de función anónima:

```javascript
const sum = function (a, b) {
  return a + b;
};

// La llamamos con el nombre de la variable
sum(2, 3); // devuelve 5
```

> **NOTA:** os acordáis que hasta ahora hemos estudiado 3 tipos de variables: number, string y undefined. Pues aquí estamos asignando a la variable `sum` un valor que es una función. Así que aquí tenemos un cuarto tipo de variable. Si ejecutamos el código `console.log('El tipo de sum es: ' + typeof(sum));` se mostrará en la consola `"El tipo de sum es: function"`.

### Parámetros y valores de retorno

Los *parámetros* son los datos que definimos en una función y que, a la hora de ejecutarla, serán sustituidos por los *argumentos* que le pasemos. Por tanto, en la declaración de la función le llamamos parámetros y en la ejecución le llamamos argumentos. Las funciones pueden tener 0, 1 o más parámetros separados por comas `,`.

Una función puede devolver un valor utilizando la palabra clave `return` seguida del valor que queremos devolver. Para devolver una variable `result`, utilizaremos `return result;` en el código.

```javascript
function sum(a, b) {
  const result = a + b;

  return result;
}

const sumResult = sum(3, 4); //sumResult vale 7
```

En este ejemplo, la función `sum` tiene 2 parámetros, a los que damos como nombre `a` al primero y `b` al segundo. Al ejecutarla en `sum(3, 4)` le pasamos los argumentos 3 y 4, que se asignan a los parámetros de forma que `a = 3` y `b = 4`. El valor de retorno es la variable `result` que contiene la suma de a y b, es decir, 7 en este caso. Este valor de retorno se asigna a la variable `sumResult` que recoge el resultado de la ejecución de la función.

Por defecto, si en una función no indicamos un valor de retorno usando `return`, la función devolverá el valor `undefined`. El valor *undefined* en JavaScript indica que una variable ha sido declarada pero no posee ningún valor, en este caso determina que la función no tiene asignado ningún valor de retorno y por eso devuelve `undefined`.

```javascript
function sum(a, b) {
  const result = a + b;
}

const sumResult = sum(3, 4); //sumResult vale undefined
```

Cuando ejecutamos una instrucción `return` dentro de una función, termina la ejecución de la función. Todo el código que se fuese a ejecutar después de ese `return` será ignorado, como si no existiese. Por tanto, debemos evitar escribir líneas de código después de un `return` y normalmente será la última línea de código de una función.

```javascript
function sayHi(name) {
  return 'Hi ' + name;

  return 'En un lugar de la Mancha'; //Esta línea nunca se llega a ejecutar
}

const result = sayHi('Ashley'); //result vale 'Hi Ashley'
```

Observa la siguiente imagen:

![Máquina funciones](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-82f2367bcee76f21c1868224792e7550be96a161%2Fmaquina-funciones.png?alt=media)

* Al crear la máquina sum le hemos puestos tres tubos llamados a, b y c, estos son los **parámetros**.

```js
function sum(a, b, c) {
  return a + b + c;
}
```

* Cada vez que la usamos pasamos valores por los tubos, por ejemplo 3, 56, 12, estos son los **argumentos**, y la maquina nos devuelve un resultado.

```js
const amount = sum(3, 56, 12);
console.log('Cantidad', amount);

const totalAges = sum(35, 26, 30);
console.log('totalAges', totalAges);

console.log('Exercises completed', sum(2, 6, 9));
```

Ahora que ya hemos visto bastante teoría sobre funciones vamos a ver un poco de práctica. Os hemos preparado un [ejercicio global grabado](https://books.adalab.es/materiales-del-curso-pw-ft/modulo-2-js/javascript/2_ejercicio_global_tienda_de_camisetas) donde cada día vamos a ir aplicando los conocimientos que vamos aprendiendo.

> 📂 Recursos Externos
>
> * [Video tutorial Introducción a Funciones](https://www.youtube.com/watch?v=PEfw6xuj8Y0\&list=PLI7nHlOIIPOJtTDs1HVJABswW-xJcA7_o\&index=16)
> * [Funciones. Parámetros y argumentos](https://www.youtube.com/watch?v=5VVBrfWQ2Wk\&index=18\&list=PLI7nHlOIIPOJtTDs1HVJABswW-xJcA7_o)
> * [Funciones](http://librosweb.es/libro/javascript/capitulo_4/funciones.html)

### Ejercicios

#### 1. **Multiplicación, Media y Pares**

* Crea una función que reciba como argumentos dos valores y devuelva como valor de retorno la multiplicación de ambos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola usando `console.log()`.
* Crea una función con 4 parámetros numéricos que devuelva como valor la media de todos ellos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola.
* Crear una función que reciba por parámetro un número y devuelva `true` si es par y `false` si es impar. Ejecútala e imprime el resultado para comprobar que funciona.

#### 2. **Ticket con IVA**

Crea una función que reciba por parámetro un número, que representará un precio, y devuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total. Por ejemplo, si pasamos por parámetro un 10, la función pintará en la consola `"Precio sin IVA: 10, IVA: 2,1 y Total: 12,1"`.

Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola para comprobarlo.

#### Ejercicio Extra. **`querySelector` para todas**

{% hint style="info" %}
**Nota:** Descansa primero y si te queda tiempo haz este ejercicio.
{% endhint %}

Estamos trabajando en un proyecto bastante grande, donde hay que recoger muchos elementos de HTML desde JavaScript para interaccionar con ellos. Para no tener que escribir `document.querySelector(...)` tantas veces una compañera ha sugerido hacer una función llamada `getEl`.

Esta función debe recibir por parámetro un selector de css y retornará el elemento de HTML correspondiente. Hemos quedado en que cuando llamemos a la función la sintaxis será tal que así:

```js
const btnEl = getEl('.btn');
```

> **Nota**: Prepara un HTML con varios elementos para poder probarla.

#### Ejercicio Extra. **Logueando errores**

{% hint style="info" %}
**Nota:** Descansa primero y si te queda tiempo haz este ejercicio.
{% endhint %}

Nos hemos dado cuenta de que cuando llamamos a `getEl` a veces nos equivocamos escribiendo el selector (se nos olvida el punto de la clase, nos comemos una letra...), a partir de ahí todo falla y nos cuesta encontrar dónde está el error.

Vamos a mejorar nuestra función para que nos avise cuando esto ocurre. Dentro de ella:

* Al recoger el elemento de HTML vamos a guardarlo en una constante.
* Con un condicional vamos a comprobar si la constante no tiene ningún valor, y en ese caso vamos a imprimir un error en la consola que diga `No existe ningún elemento con clase, id o tag llamado {aquí-el-nombre-del-selector}`
* Finalmente tras nuestro condicional retornaremos la constante con el elemento.

> **Nota**: podemos imprimir/loguear errores con `console.error()`.

#### Ejercicio Extra. **Combinando funciones**

{% hint style="info" %}
**Nota:** Descansa primero y si te queda tiempo haz este ejercicio.
{% endhint %}

Partimos de un HTML con un párrafo que contiene un número. En nuestro fichero JavaScript nos copiamos la declaración de las funciones `getEl` y la que comprueba si un número es par o impar (ejercicio 5).

*Sin modificar estas dos funciones*, vamos a hacer lo siguiente:

* usando nuestra función `getEl` accedemos al párrafo, y recogemos su valor (con `innerHTML`)
* convertimos ese valor a número y lo asignamos a una constante
* usamos nuestra función del ejercicio 4 para saber si es par o impar
* escribimos en la consola 'Este número es PAR: ...' o 'Este número es IMPAR: ...'


# 2.5.2 Funciones manejadoras

Una función manejadora de eventos es una función en JavaScript que se utiliza para manejar o responder a eventos que ocurren en una página web. Los eventos pueden ser desencadenados por la interacción del usuario, como hacer clic en un botón, mover el mouse sobre un elemento o presionar una tecla en el teclado.

La función manejadora se asocia generalmente a un evento específico y se ejecuta cuando ese evento ocurre. Su propósito principal es definir qué acción o comportamiento debe tomar el programa en respuesta al evento.

Aquí hay algunos ejemplos comunes de eventos y funciones manejadoras correspondientes:

**Evento de clic en un botón**

```jsx
function handleClick() {
  // Código a ejecutar cuando se hace clic en el botón
}

const miBoton = document.querySelector(".js-btn");
miBoton.addEventListener("click", handleClick);
```

**Evento de envío de formulario**

```jsx
function handleSubmit(event) {
  event.preventDefault(); // Evita que se recargue la página
  // Código para procesar los datos del formulario
}

const miFormulario = document.querySelector(".js-form");
miFormulario.addEventListener("submit", handleSubmit);
```

**Evento de cambio en un input**

```jsx
function handleChange() {
  // Código a ejecutar cuando cambia el valor del campo de entrada
}

const miInput = document.querySelector(".js-input");
miInput.addEventListener("change", handleChange);
```

En cada uno de estos ejemplos, la función manejadora (`handleClick`, `handleSubmit`, `handleChange`) se define para manejar un evento específico (`click`, `submit`, `change`) y se asocia al elemento HTML correspondiente usando `addEventListener`. Cuando ocurre el evento, la función se ejecuta y realiza acciones específicas basadas en la lógica que has definido en la función.

\## Ejemplo de un handle clic Ahora vamos a ver un ejemplo práctico de cómo manejar eventos de clic en elementos HTML utilizando JavaScrip con una explicación más detallada. En este caso, vamos a crear una página HTML simple con un botón y utilizaremos JavaScript para manejar el evento de clic del botón.

**HTML:**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Manejo de Eventos de Clic en JavaScript</title>
  </head>
  <body>
    <button id="miBoton">Haz clic</button>

    <script src="tu_archivo_js.js"></script>
  </body>
</html>
```

1. **Obtener una referencia al elemento HTML**

Para interactuar con un elemento HTML y manejar eventos en él, primero debes obtener una referencia a ese elemento en JavaScript. Esto se hace generalmente utilizando el método `document.getElementById()` o `document.querySelector()` para seleccionar el elemento por su ID o selector CSS.

```jsx
const miBoton = document.querySelector(".js-btn");
```

En este ejemplo, estamos obteniendo una referencia al botón con la clase "js-btn" y asignándola a la variable miBoton. Ahora podemos utilizar miBoton para acceder y manipular este botón en el DOM.

2. **Definir la función manejadora del evento de clic**

Una vez que tienes una referencia al elemento, debes definir una función que se ejecutará cuando ocurra el evento de clic en ese elemento. Esta función se llama "función manejadora del evento". Aquí tienes un ejemplo de cómo definir una función manejadora:

```jsx
function handleClick() {
  // Código que deseas ejecutar cuando se haga clic en el botón
  console.log("¡Has hecho clic en el botón!");
}
```

En este caso, la función handleClick simplemente muestra un mensaje en la consola cuando se llama.

**3. Asociar la función manejadora al evento de clic**

Una vez que has definido la función manejadora, debes asociarla al evento de clic del elemento HTML que obtuviste en el Paso 1. Esto se hace utilizando el método `addEventListener()` en el elemento.

```jsx
miBoton.addEventListener("click", handleClick);
```

* `click` es el tipo de evento que estamos escuchando, en este caso, el evento de clic del botón.
* `handleClick` es la función que se ejecutará cuando ocurra el evento de clic. Con esta línea de código, hemos registrado la función handleClick para que se ejecute cuando se haga clic en el botón. Cuando alguien hace clic en el botón, se llama a la función handleClick, y la alerta se muestra en la pantalla.

Este proceso se encarga de manejar eventos de clic en elementos HTML utilizando JavaScript. Puedes personalizar la función handleClick para realizar cualquier acción que desees en respuesta al evento de clic, como cambiar el contenido de la página, enviar datos al servidor o realizar operaciones más complejas.

### Ejercicios

#### Ejercicio 1: Contador

Crea una página web con un botón y un contador que se incremente cada vez que hagas clic en el botón.

#### Ejercicio 2: Cambiar el Color de Fondo

Crea una página web con un botón que, al hacer clic en él, cambie el color de fondo de la página a un color aleatorio. Debes utilizar JavaScript para lograr esto.

> Pista: para este ejercicio crea varios constantes con colores y utiliza la función `Math.random()` para elegir una de esas constantes.


# 2.5.3 Ámbito de variables

Por defecto, una variable definida con `let` o `const` tiene un ámbito (en inglés, *scope*) que corresponde a su bloque, es decir, van a existir dentro de su bloque.

**¿Y qué es un bloque?** Un bloque es cualquier expresión con llaves `{}` como puede ser un `if` o una función :)

Por ejemplo:

```javascript
const globalVar = "Ey, I'm global";

if (2 === 2) {
  // ejemplo para asegurarnos de que entra en el bloque if
  const globalVar = "Ey, I'm not really global";
  const notGlobalVar = "Shirt, I'm not global :(";

  console.log(globalVar); // devuelve "Ey, I'm not really global"
  console.log(notGlobalVar); // devuelve "Shirt, I'm not global :("
}

console.log(globalVar); // devuelve "Ey, I'm global"
console.log(notGlobalVar); // da un error porque no está definida
```

Por supuesto, podemos acceder a las variables del ámbito superior:

```javascript
let globalVar = "Ey, I'm global";
if (2 === 2) {
  globalVar = "Ey, I'm STILL global";
  console.log(globalVar); // devuelve "Ey, I'm STILL global"
}
console.log(globalVar); // devuelve "Ey, I'm STILL global" que se cambió en el bloque if
```

De esta manera, una variable creada dentro del cuerpo de una función sólo será accesible desde dentro de esa función.

Desde dentro de una función podemos utilizar las variables que se hayan definido fuera de cualquier función, y gracias al ámbito de cada función también podemos crear, sin generar conflicto, nuevas variables que se llamen como variables de otras funciones.

Por ejemplo:

```javascript
function f1() {
  const item = 1;
  return item;
}

function f2() {
  const item = 2;
  return item;
}

console.log(f2()); // devuelve 2;
console.log(f1()); // devuelve 1;
```

Comprueba cuál será el resultado de las siguiente operaciones:

```javascript
// Usamos una variable de ámbito global

const secretLetter = 'y';
function mySecretLetter() {
  return secretLetter;
}
console.log(mySecretLetter()); // devuelve "y"
console.log(secretLetter); // devuelve "y"
```

```javascript
// modificamos una variable de ámbito global
let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}
console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "x"
```

```javascript
// Usamos una variable de ámbito local que se llama igual que la global
const secretLetter = 'y';
function mySecretLetter() {
  const secretLetter = 'x';
  return secretLetter;
}
console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "y"
```

```javascript
// intentamos usar una variable local fuera de su ámbito
function mySecretLetter() {
  const secretLetter = 'x';
  return secretLetter;
}
console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // da un error porque la variable solo está definida dentro del bloque de la función
```

> Recursos Externos:
>
> * [Ámbito de las variables](http://librosweb.es/libro/javascript/capitulo_4/ambito_de_las_variables.html)
> * [Video Tutorial Ámbito de variables](https://www.youtube.com/watch?v=HlY2jF74s_c\&list=PLI7nHlOIIPOJtTDs1HVJABswW-xJcA7_o\&index=19)

#### Ejercicios

**1. Variables globales**

Analiza el siguiente código:

```javascript
// modificamos una variable de ámbito global
let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}
console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "x"
```

* Prueba a cambiar el orden del los `console.log`. ¿Qué está pasando? ¿Por qué no se imprime en la consola 2 veces "x"?
