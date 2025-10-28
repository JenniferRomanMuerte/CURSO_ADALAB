# 2.9 Bucles

En esta sesión nos centraremos en los bucles, estructuras de control que, como su nombre indica, permiten repetir un código un número determinado de veces en función de si se cumple una condición. Esto es muy útil para realizar las tareas repetitivas que de otra forma tendríamos que escribir cientos de veces. Si pensamos en el típico castigo de colegio de "Escribe en una hoja 100 veces no volveré a dejarme los libros en casa", gracias al bucle `for` solo tendríamos que escribirlo una vez y decirle que se repita hasta que llegue a 100 veces. Imagina la cantidad de tiempo y código que permite ahorrarnos este recurso.

### ¿En qué casos se utilizan?

Si pensamos en una web, la mayoría de los datos vienen en una lista (solo hace falta recordar la de `ul`s y `li`s que hemos puesto hasta ahora). Algunas de las aplicaciones más típicas de los arrays son:

* los resultados de búsqueda
* la lista de coordenadas de un mapa
* los artículos de un carrito de la compra
* las tareas de una lista de tareas
* los contactos de una lista de contactos.

Todos estos ejemplos anteriores se suelen almacenar en arrays para poderlos modificar (por ejemplo ordenar por orden alfabético o añadir un nuevo elemento), trabajar con ellos de forma sencilla y mostrarlos en nuestra web.

Los bucles se utilizan para repetir código, por ejemplo:

* Si tenemos 48 contactos, por cada contacto mostrar una tarjeta de contacto en la página
* Mostrar el total de un carrito de la compra sumando todos los precios de los artículos
* Mostrar todas las fechas hasta la actualidad en un select de un formulario


# 2.9.1 Bucles

Sirven para ejecutar un mismo código un número determinado de veces. *Haz esto x veces*.

### Bucle `for`

Tiene la siguiente estructura:

* podemos identificarlo por usar al comienzo la palabra `for`
* después irá la *configuración* del bucle entre paréntesis `( )` que tiene 3 partes, separadas por punto y coma `;`:
  * *inicialización* será una declaración y asignación de variable (ej: `let i = 1`, se suele usar `i` por la palabra index)
  * *condición* será la condición que debe cumplirse para que se ejecute el bloque de código (ej: `i < 20`)
  * *actualización* será la operación que se realizará al final de cada iteración del bucle (ej: `i++`, que es la abreviación de `i = i + 1`)
* al final definimos un *bloque de código* entre llaves `{ }` que se va a ejecutar si se cumple la condición

```js
for (let i = 0; i < 20; i++) {
  console.log("Me encantan los bucles 💪");
}
```

En este ejemplo de código, hacemos aparecer 20 veces en la consola el texto `Me encantan los bucles 💪`. Funciona de la siguiente forma:

1. Se ejecuta el código de inicialización (`let i = 0`)
2. Se comprueba que la condición se cumple (`i < 20`), en este caso el resultado es `true`
3. Como la condición se cumple, se ejecuta el código que hay dentro del bloque entre las llaves (`{}`), es decir el `console.log`
4. Se ejecuta la actualización del bucle (`i++`) y la variable `i` pasa a valer 1
5. Vuelta al paso 2
6. Cuando la variable `i` llega al valor de 20, la condición ya no se cumple (20 no es menor que 20), por lo tanto el bloque que contiene el console log no se ejecuta y el bucle acaba

Otro aspecto interesante de los bucles `for` es que dentro del bloque de código que se repite (el que va entre llaves `{ }`) podemos usar la variable `i`. Por ejemplo:

```js
for (let i = 0; i < 20; i++) {
  console.log("Voy por la vuelta " + i);
}
```

Este ejemplo hará aparecer 20 veces, en la consola, el texto:

* Voy por la vuelta 0
* Voy por la vuelta 1
* Voy por la vuelta 2

...

* Voy por la vuelta 19

#### Iterando sobre los elementos de un array

Cuando trabajamos con arrays es muy común que tengamos que realizar alguna operación sobre todos sus elementos para modificarlos o generar un nuevo array a partir de ellos. Por eso es muy normal que veamos usos de arrays combinados con el uso de bucles `for`. Veamos un ejemplo en el que combinaremos ambos. En este ejemplo, vamos a tener una lista de puntuaciones y vamos a sumarlas para saber cuál será la puntuación final obtenida:

```js
const scores = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];

// Creamos una variable fuera del bucle para que no se sobrescriba en cada iteración
// En esta variable iremos sumando cada una de las puntuaciones
let acc = 0;

// La i empieza en 0 porque el índice de los arrays empieza en 0 también
for (let i = 0; i < scores.length; i++) {
  acc += scores[i];
  // Sumamos a `acc` el valor actual del array en cada iteración del bucle
  // acc += arr[i] es igual a acc = acc + arr[i]
}

console.log("La puntuación final es " + acc);
```

### Bucle `for...of`

El bucle `for...of` de ES6 nos permite recorrer un objeto iterable, como son los arrays, sin tener que escribir las condiciones de un `for`. Además, nos permite usar nombres mucho más reconocibles para los valores dentro del array.

```js
const bestAnimatedFeature2016Nominees = [
  "Zootopia",
  "Kubo and the Two Strings",
  "La tortue rouge",
  "Ma vie de Courgette",
  "Moana",
];

// bucle for
for (let i = 0; i < bestAnimatedFeature2016Nominees.length; i++) {
  console.log(
    `"${bestAnimatedFeature2016Nominees[i]}" was nominated to 89th Academy Awards`
  );
}

// bucle for...of
for (const movie of bestAnimatedFeature2016Nominees) {
  console.log(`"${movie}" was nominated to 89th Academy Awards`);
}
```

> **Nota**: si quisiéramos modificar los valores del array, tendríamos que hacer un bucle `for` como ya sabíamos. `for...of` solo nos permite leer los datos, ya que no nos da información sobre el índice.

### Bucle `forEach`

> **Nota:** No es necesario que estudies ahora este método, lo puedes dejar para más adelante.

El método `forEach` permite ejecutar una función por cada elemento de un array.

Tiene la siguiente estructura:

* Se llama directamente sobre el array que queremos iterar.
* Se le pasa una función que será ejecutada para cada elemento del array.
* Esta función recibe como parámetro el valor actual. De forma opcional, también puede recibir el índice actual.

```js
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log("Número:", number);
});
```

En este ejemplo, el texto "Número: 1", "Número: 2", ..., "Número: 5" aparecerá en la consola. Funciona de la siguiente manera:

El método `forEach` recorre el array numbers. Por cada elemento, ejecuta la función pasada como argumento: `((number) => { console.log('Número:', number); })`. Dentro de la función, `number` representa el valor actual del array en cada iteración.

### Ejercicios

#### 1. **Practicando**

* Crea un bucle que muestre 10 veces, en la consola, el texto `Voy por la vuelta X` siendo el número de vueltas desde 1 hasta 10 (no desde 0 hasta 9).
* Vamos a partir de una variable `acc` con valor 0. Construiremos un bucle que se ejecute 10 veces y sume 2 a la variable `acc` en cada iteración del bucle. Al acabar el bucle, mostraremos en la consola el texto `El resultado es: X`, siendo X el valor de la variable `acc`.

> NOTA: Este tipo de variables como `acc` que se va actualizando y al final tiene el resultado de varias operaciones se llama *acumulador*. Puede ser de tipo numérico pero también de tipo cadena si vamos acumulando una cadena cada vez más larga.

#### 2. **La media**

**a)** Crea un nuevo array `numbers` que contendrá 5 números cualesquiera y recorre el array mediante un bucle para calcular la media de los números (la suma de los números dividido por cuántos hay, es decir, 5). Necesitas una variable (*acumulador*) para ir almacenando la suma de todos los números y después poder hacer la media. Para comprobar si el resultado es correcto, *loguealo* en la consola.

**b)** Añade un nuevo número al array y repetir el cálculo de la media. En este caso, para calcular la media habrá que sumar todos y dividir entre el total, que ahora es 6.

**c)** Crea una función `average`, que toma como parámetro un array `numbers`, calcula la media del array (de cualquier longitud) y devuelve la media. Para trabajar con arrays de cualquier longitud, deberemos consultar la longitud del array mediante su propiedad `length`. Para comprobar que la función hace el cálculo correcto, la invocaremos (o ejecutaremos para que no suene tan esotérico) varias veces pasándole como argumento un array con diferente longitud cada vez y mostraremos el resultado en la consola del navegador.

#### 3. **Tenemos mucho en común**

Usando `for...of` haz un pequeño programa que le pregunte a la usuaria cuáles son sus dos películas o libros favoritos mediante un formulario. Cuando pulse el botón `enviar` guardaremos la información en un array, lo recorreremos y mostraremos este mensaje por cada obra: "¡A mí también me encantó "OBRA"! Tenemos mucho en común, humana.", donde OBRA será el nombre de la obra.

![Resultado Visual](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-5be2478dcf9ea4128a0c356233d3af83bd209e3c%2Fmodulo-2-leccion-07-02-exercise-05.gif?alt=media)

#### Ejercicio Extra. **Previsión para ver la&#x20;*****Luna del cazador***

{% hint style="info" %}
**Nota:** Descansa primero y si te queda tiempo haz este ejercicio.
{% endhint %}

Cada 3 años se produce una luna llena completamente iluminada por el Sol durante unos minutos. Esta luna es conocida como la “Luna del cazador”. En el año 2017 se pudo ver esta luna el 5 de octubre y mucha gente se la perdió. Para que no nos pase los siguientes años vamos a crear un código que muestre en consola cuándo serán las 15 próximas lunas.

> NOTA: Vamos a realizar este ejercicio de forma que, antes de programar nada, escribamos el un papel el listado de las acciones (*algoritmo*) que tenemos que realizar para conseguir el resultado que buscamos. Una vez escrito este listado, ya nos pondremos a programarlo en JS.


# 2.9.2 Bucles en arrays con objetos

#### Combinando arrays con objetos

Como comentábamos anteriormente, podemos tener arrays dentro de objetos u objetos dentro de arrays porque ambos pueden ser tratados como un valor más:

```js
// Lista de contactos (array con objetos dentro)
const contacts = [
  {
    name: 'Raquel',
    phone: '915552323',
    email: 'raquel@inbox.com',
  },
  {
    name: 'Pedro',
    phone: '915554564',
    email: 'pedro@inbox.com',
  },
  {
    name: 'Laura',
    phone: '915555656',
    email: 'raquel@inbox.com',
  },
];

console.log(contacts[0].name); // Muestra el nombre del primer contacto (Raquel)
contacts[2].email = 'laura@inbox.com'; // Cambia el email del tercer contacto
console.log(contacts[2].email); // Muestra el email del tercer contacto ('laura@inbox.com')

// Tarea con participantes (objeto con array dentro)
const task = {
  name: 'Crear un repositorio',
  participants: ['Raquel', 'Pedro', 'Laura'],
};

console.log(task.participants[0]); // Muestra el nombre del primer participante (Raquel)
task.participants.push('Diego'); // Añade un nuevo participante a la lista
task.participants[0] = 'Andrea'; // Cambia el nombre del primer participante
console.log(task.participants); // Muestra Andrea, Pedro, Laura, Diego
```

### `querySelectorAll`

Hay muchas funciones nativas de JavaScript que retornan arrays. Son aquellas funciones que devuelven un listado de elementos, propiedades u otras cosas... Una de estas funciones es `querySelectorAll`.

Como hemos visto en sesiones anteriores, para recoger un elemento de HTML utilizamos el método `querySelector`. Pero ¿y si queremos recoger más de uno, por ejemplo todas las etiquetas que tengan una determinada clase? `querySelectorAll` al rescate. Este método devuelve una lista de elementos que funciona de manera similar a un array. Podríamos hacer lo siguiente:

```js
// Guardamos una lista de todos los parrafos de la página
const paragraphs = document.querySelectorAll('p');

// Modificamos el primer párrafo
paragraphs[0].innerHTML = 'Soy el primero';

// Muestra el número de parráfos que hay en nuestra web
console.log(paragraphs.length);

// Iteramos sobre todos los párrafos para asignarles a todos una clase
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].classList.add('highlight');
}
```

### Bonus `for...in`

Ahora que ya sabemos recorrer arrays, seguro que te estás preguntando si se pueden recorrer objetos. La respuesta es: claro que sí!

Imaginemos que tenemos el código HTML de login:

```html
<form>
  <label for="email">Email</label>
  <input type="text" name="email" class="js-email" />
  <label for="password">Contraseña</label>
  <input type="password" name="password" class="js-password" />
  <input type="submit" value="Enviar" />
</form>
```

Podemos prerellenar los campos del formulario con los datos de la usuaria para ella solo tenga que pulsar en el botón **Enviar**. Lo haríamos con el siguiente código:

```javascript
const userData = {
  email: 'info@email.com',
  password: 'mi-contraseña-super-secreta',
};
for (let item in userData) {
  const inputElement = document.querySelector(`.js-${item}`);
  inputElement.value = userData[item];
}
```

En la [documentación oficial](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for...in) podrás averiguar cómo funciona `for...in`.


La instrucción for-in itera sobre todas las propiedades enumerables de un objeto que está codificado por cadenas (ignorando los codificados por Símbolos, incluidas las propiedades enumerables heredadas.

### Ejercicios

#### 1. **A story `of` adalabers**

Estamos en una clase de Adalab, y queremos conocer algunas estadísticas sobre las adalabers de esa clase. Estos son sus datos:

* María, 29 años, diseñadora
* Lucía, 31 años, ingeniera química
* Susana, 34 años, periodista
* Rocío, 25 años, actriz
* Inmaculada, 21 años, diseñadora

1. Crea una estructura de datos en JavaScript para manejar estos datos, usa arrays y objetos para crearla.
2. Crea varias funciones en JavaScript que nos permitan calcular de forma automática estadísticas sobre las adalabers. Todas ellas toman como parámetro un listado de adalabers similar a nuestra estructura de datos anterior.
   * Una función `countAdalabers` que devuelve el número de adalabers en el listado.
   * Una función `averageAge` que devuelve la media de edad de listado.
   * Una función `theYoungest` que devuelve el nombre de la adalaber más joven.
   * Una función `countDesigners` que devuelve el número de adalabers que son diseñadoras.

Según vayáis creando las funciones, debéis ir probando que funcionan invocándolas con nuestra estructura de datos como argumento. Al final, modifica la estructura de datos para añadir, modificar o quitar adalabers. Y prueba que las funciones siguen devolviendo el valor correcto.

**2. Botones de alarma**

Haz un HTML con 3 botones con el texto ALARMA en un fondo blanco. Vamos a hacer que al pulsar en cualquiera de ellos, el fondo de la pantalla se ponga rojo. Si volvemos a pulsar en cualquiera de ellos, el fondo se pondrá blanco. Y así sucesivamente. Vamos a hacer uso de `querySelectorAll` para evitar repetir mucho código.

#### 3. Tipos de dato de un array

Muestra en consola el tipo datos que hay en un array. Dado el siguiente array:

```javascript
const items = [
  'Ada',
  1815,
  ['Informática', 'Matemática', 'Escritora'],
  {
    mother: 'Anna Isabella',
    father: 'Lord Byron',
  },
];
```

Escribe un script que recorra los datos de este array y pinte en consola por cada elemento: "El dato VALOR está en la posición X y es de tipo TIPO".

Por ejemplo "El dato Ada está en la posición 0 y es de tipo string".

#### Ejercicio Extra. Usando la consola

{% hint style="info" %}
**Nota:** Descansa primero y si te queda tiempo haz este ejercicio.
{% endhint %}

Practica un poco más el método `querySelectorAll`:

1. En esta misma página abrimos las herramientas para desarrolladoras de Chrome (DevTools) y seleccionamos la pestaña `Consola`.
2. Escribimos el siguiente código: `document.querySelectorAll('h1')`. ¿Qué está devolviendo este método?
3. Y si escribimos `document.querySelectorAll('h1')[0]` ¿qué está mostrando en consola este código?
4. Ahora escribimos `document.querySelectorAll('h1')[0].className`. ¿qué información nos muestra? ¿Y el código `document.querySelectorAll('h1')[0].innerText`?
5. Y por último ¿qué muestra el código `document.querySelectorAll('asdf')` y por qué?
