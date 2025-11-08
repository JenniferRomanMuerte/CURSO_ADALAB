# 2.8.1 Arrays

Un array es la estructura que utilizamos en JavaScript para almacenar listas de datos ordenados.

Un array puede contener cualquier tipo de dato (`string`, `number`, `boolean`, `object` incluso otros `arrays`). De hecho, un mismo array puede contener datos de distinto tipo mezclados, aunque es algo poco recomendable.

Cada elemento dentro de un array irá asociado a un índice, ese índice nos permitirá obtener el dato de una determinada posición del array o modificarlo. Un dato importante a tener en cuenta es que **el índice de los arrays empieza por el número 0**, por lo que el primer elemento tendrá índice 0, el segundo tendrá 1, el tercero 2 y así sucesivamente.

```js
// Array donde el orden es importante
const weekdays = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];
```

En este ejemplo, 'Lunes' está en la posición 0 del array, y 'Domingo' en la posición 6.

> **NOTA:** Por lo general es poco recomendable mezclar varios datos diferentes en un array, en esos casos es mejor usar un objeto.

```js
// Un array con distintos datos (poco recomendable)
const madrid = ["Madrid", 40.4893538, -3.6827461];

// Tiene más sentido como objeto
const madrid = {
  name: "Madrid",
  latitude: 40.4893538,
  longitude: -3.6827461,
};
```

### Declaración de un array

Al igual que las cadenas y los números, podemos usar un `array` sin asignarlo a una variable `[1, 2, 3]`, pero normalmente crearemos una variable o constante para guardar su valor.

La sintaxis para declarar una variable o constante y asignarle como valor un array es la siguiente:

```js
// Crea una variable con un array vacío
const arr1 = [];

// Crea un array con dos números
const arr2 = [1, 2];

// Crea un array con cuatro datos
const arr3 = ["Laura", "Pedro", "Marta", "Diego"];
```

> **NOTA:** Cuando un array contiene varios elementos suele ponerse en cada uno de ellos en una nueva línea como se ve en `arr3`, para facilitar su lectura.

### Obtener información de un array

Bien, ahora que sabemos cómo crear un array, es el momento de descubrir cómo podemos obtener información a partir de él. Como hemos comentado anteriormente, los arrays contienen una lista de datos y cada uno de esos datos va asociado a un número, un índice.

Sabiendo esto, si queremos obtener el valor que hay en una posición concreta de un índice, lo único que deberemos hacer será indicar la variable que contiene el array seguida del índice del valor que buscamos, que irá entre corchetes:

```js
const fruits = ["pera", "manzana", "naranja", "plátano"];
console.log(fruits); // Muestra el array completo: 'pera', 'manzana', 'naranja', 'plátano'
console.log(fruits[1]); // Muestra 'manzana' (recordemos que el primer índice es 0)
console.log(fruits[3]); // Muestra 'plátano'
```

Un dato importante es que para obtener el valor que queremos del array podemos utilizar una variable en vez de un número. Imaginemos que queremos hacer una aplicación que simule el típico sorteo en el que cada uno de los participantes saca un papel de una urna y tiene un premio asociado. Si quisiéramos hacerlo con JavaScript, podríamos hacer algo parecido a lo siguiente:

```html
<label for="lotteryNumber">Introduce un número del 1 al 4</label>
<input id="lotteryNumber" type="text" />
```

```js
const options = ["coche", "viaje", "crucero", "llavero"];
const lotteryNumberInput = document.querySelector("#lotteryNumber");

function handleLotteryNumberChange(event) {
  const input = event.currentTarget;
  const selectedNumber = parseInt(input.value);
  const ind = selectedNumber - 1; // El índice empieza en 0
  const result = options[ind]; // Utilizamos una constante que contiene un número como valor
  console.log("Premio: ", result);
}

lotteryNumberInput.addEventListener("keyup", handleLotteryNumberChange);
```

### Añadir un elemento

Para añadir un elemento simplemente asignaremos un valor a un índice de un array:

```js
const arr = []; // Creamos un array vacío
arr[0] = "Hola"; // Añadimos un elemento en el índice 0, la primera posición del array
arr[1] = "¿qué tal?"; // Añadimos un elemento en el índice 1, la segunda posición del array

// Tras los pasos anteriores arr será igual a  ['Hola', '¿qué tal?']
```

> **NOTA:** Es importante saber que si asignamos un valor a un índice más alto que la longitud del array, se crearán espacios vacíos:

```js
const arr = [1, 2, 3];
arr[8] = 24; // Saltamos del índice 2 al 7 (5 espacios) para añadir un valor en el 8

console.log(arr); // Muestra 1,2,3,,,,,,24 (un array con 5 espacios vacíos)
```

### Modificar un valor

Para modificar unos de los valores del array utilizaremos la misma sintaxis que para añadir un nuevo elemento. A la hora de escribirlo no habrá diferencia, pero el funcionamiento será distinto ya que en este caso estaremos sobrescribiendo el valor anterior.

```js
const arr = ["plátano", "manzana", "pera"]; // Creamos un array con tres elementos
arr[1] = "limón"; // Sobrescribimos el valor que hay en la segunda posición del array

// Tras los pasos anteriores arr será igual a  ['plátano', 'limón', 'pera']
```

#### Los arrays son un tipo de datos especial

Una cosa importante a tener en cuenta es que cuando asignamos un array a una constante (o variable) realmente no asignamos a la constante ese valor sino un *enlace a ese array*. Es exactamente lo mismo que nos sucedía con los objetos, ¿lo recuerdas? Y es que técnicamente el tipo de dato de los arrays, las funciones y los objetos literales ¡es `object`!

Así en el caso de los arrays creamos un dato y cuando lo asignamos a una constante en lugar de almacenar ese dato almacenará la referencia (enlace) que apunta al dato.

Y te estarás preguntando, ¿y en qué me afecta esto a mí? Imaginemos que creamos un array llamado `arr`:

```js
const arr = [1, 2, 3, 4];
```

En ese caso estaremos creando un array `[1, 2, 3, 4]` y la constante `arr` apuntará a ese array.

Si más tarde guardamos `arr` en otra constante llamada `arr2` de esta forma:

```js
const arr2 = arr;
```

Lo que estamos diciendo es que `arr2` va a guardar la información que tiene `arr` y por tanto, al igual que `arr` apuntará al array que hemos creado anteriormente.

Bien, el problema viene ahora, ambas constantes apuntan al mismo array por lo que si modificamos una estaremos modificando también la otra, ya que lo que va a hacer JavaScript es modificar el array al que apuntan.

```js
const arr = [1, 2, 3, 4];
const arr2 = arr;

arr[4] = 5;

console.log(arr[4]); // Imprime 5 en la consola
console.log(arr2[4]); // Imprime también 5 en la consola
```

Este tipo de comportamiento de guardar un *enlace* a un dato, en lugar del dato como tal, se llama asignación por referencia y así es como almacena JavaScript los arrays. Tener esto en cuenta es muy importante ya que si lo aprendemos evitaremos bastantes problemas en el futuro a la hora de guardar arrays en constantes (o variables) y copiarlos.

### La propiedad length

Como los arrays son un tipo especial de objetos, tienen propiedades y métodos. Gracias a las propiedades podremos obtener información del array y gracias a los métodos podremos generar acciones sobre ellos para modificar sus datos u obtener un nuevo resultado.

La propiedad `length` sirve para obtener la longitud del array o en otras palabras cuántos elementos contiene. Como cualquier otra propiedad, para utilizarla simplemente escribiremos el nombre del array seguido por un punto y a continuación `length`:

```js
const arr = [1, 2, 3];

console.log(arr.length); // Mostrará un mensaje con la longitud del array (3)
```

> **NOTA:** Un error que suele producirse a menudo es que escribimos *lenght* en lugar de *length*. La segunda sería la forma correcta. Es importante tener cuidado, y cuando sea posible utilizar el autocompletado de nuestro editor, porque es un error que es difícil de percibir y bastante molesto.

#### La función isArray

Hasta ahora ya conocíamos la función `typeof()` que nos devolvía el tipo de una variable. Para saber si una variable es un array o no, existe el método `Array.isArray()` que nos devuelve `true` o `false` dependiendo de qué variable le pasemos. Con un ejemplo se entiende mucho mejor:

```javascript
const list = [1, 2, 3];
Array.isArray(list); // true
const name = "Ada";
Array.isArray(name); // false
```

Para más información leed la definción del [método `Array.isArray()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray).

### Ejercicios

#### 1. **Películas**

Haz un array de cadenas (`strings`) `movies` con un listado de 3 películas que te gusten.

* Añade al array anterior otra película más que te guste. No vale modificar la declaración del array, sino que añadiremos la nueva película en la posición 3 del array (recordad que se empiezan a numerar desde el 0). Para comprobar que funciona, tienes que mostrar el array completo en la consola.
* Modifica la película que menos te guste de las que hay en el array por el nombre de otra que te guste más. Para comprobar que funciona, tienes que mostrar el array completo en la consola.
* Para terminar este ejercicio, vamos a encapsula todo el código que hemos creado en una función que no toma parámetros y que llamaremos `workWithMovies`. Ejecuta la función para comprobar que se muestran los mensajes en la consola correspondientes.
