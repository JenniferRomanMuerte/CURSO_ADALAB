# 2.6.1 Funciones arrow

Las arrow functions ("funciones flecha") de ES6 son una forma simplificada para declarar funciones anónimas. La sintaxis básica es la siguiente:

```javascript
const sum = (a, b) => {
  return a + b;
};

// y la ejecutamos usando la variable a la que la hemos asignado:
sum(2, 3); // devuelve 5;

// Anteriormente vimos esta misma función con la forma "normal"
const sum = function (a, b) {
  return a + b;
};
```

#### Paréntesis opcionales

En las funciones flecha podemos evitar los paréntesis solo cuando la función tenga 1 único parámetro:

```javascript
const getWaitingTime = (minutes) => {
  return `Please, wait ${minutes} minutes`;
};

// equivale a
const getWaitingTime = minutes => {
  return `Please, wait ${minutes} minutes`;
};
```

#### Llaves y return implícito

Escribir o no las llaves del bloque (`{}`) significa dos cosas distintas. Solo podremos no escribirlas cuando la función tenga una sola sentencia; es decir, cuando se ejecute una sola orden dentro (un console.log(), un cambio en un elemento HTML, un incremento en un contador, etc.). Cuando no escribimos las llaves, el valor que devuelve esa sentencia será el return de la función. Eso nos permite escribir en menos líneas funciones muy sencillas:

```javascript
const getWaitingTime = minutes => `Please, wait ${minutes} minutes`;

console.log(getWaitingTime(4));
// devuelve "Please, wait 4 minutes"

// equivale a
const getWaitingTime = minutes => {
  return `Please, wait ${minutes} minutes`;
};

console.log(getWaitingTime(4));
// devuelve "Please, wait 4 minutes"
```

> NOTA RESUMEN:
>
> * Cuando la función arrow solo tiene 1 parámetro, puede (y suele) ir sin paréntesis.
> * Cuando la función arrow solo tiene una instrucción, puede (y suele) ir sin llaves.
> * Una situación no tiene que ver con la otra: pueden haber funciones arrow con llaves y sin paréntesis, sin llaves y con paréntesis, con ambos o sin ninguno.

> Recursos Externos: [Funciones anónimas](https://www.youtube.com/watch?v=GstPXAffmmI\&index=17\&list=PLI7nHlOIIPOJtTDs1HVJABswW-xJcA7_o)

### Ejercicios

#### 1. **Calculador de modelo de caja**

Como hemos visto en las clases anteriores, en CSS tenemos dos tipos de cálculo para las dimensiones de un elemento: `border-box` y `content-box`.

Realiza una calculadora al que le pasaremos 4 parámetros y nos devolverá el ancho del contenido, y el ancho total de la caja en una cadena como esta: `El ancho del contenido es: 30px y el ancho total de la caja es: 34px`.

La función tendrá 4 parámetros:

* el primero será un booleano para especificar si es `border-box` o no.
* el segundo será un número con el `width` de la caja.
* el tercero será un número con el `padding`.
* el cuarto será un número con el `border-size`.

Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola.


# 2.6.2 Funciones callback

Las funciones de devolución de llamada (callbacks en inglés) son una parte fundamental del manejo de eventos en JavaScript. Un callback es simplemente una función que se pasa como argumento a otra función y se ejecuta después de que ocurra cierto evento o se complete una tarea asincrónica. Los callbacks son especialmente útiles en el contexto de manejo de eventos, ya que te permiten especificar qué acción tomar después de que ocurra un evento.

### Funciones callback

En JavaScript podemos pasar el nombre de una función como argumento de otra. Es esta función que recibe el argumento la que se encarga de ejecutarla. Podéis ver un ejemplo en este [pen](https://codepen.io/adalab/pen/xyZexZ?editors=1011).

Observa la diferencia entre la ejecución de una función

* `logError()`

y el nombre de una función

* `logError`

Esto os puede parecer un poco raro y complejo al principio, pero iremos descubriendo en el curso que es muy útil. A este tipo de funciones que se pasan como argumentos a otras, se les llama **callbacks**.

### Callbacks en los eventos

A continuación, te explicaré cómo funcionan las funciones de devolución de llamada en el contexto de manejo de eventos:

1. **Asignación de un Callback a un Evento:**

Supongamos que tienes un elemento HTML, como un botón, y deseas ejecutar una función cuando se haga clic en él. Puedes asignar un callback a este evento utilizando addEventListener. Por ejemplo:

```jsx
const miBoton = document.querySelector('.js-btn');

function miCallback() {
    // Este es el callback que se ejecutará cuando se haga clic en el botón
    console.log('Se hizo clic en el botón');
}

miBoton.addEventListener('click', miCallback);

```

En este caso, `miCallback` es la función de devolución de llamada que se ejecutará cuando se haga clic en el botón.

2. **Ejecución del Callback:**

Cuando el evento (en este caso, el clic en el botón) ocurre, el navegador llama automáticamente al `callback` asociado (en este caso, miCallback). Esto permite que el código que defines en el callback se ejecute en respuesta al evento.

Por lo tanto la función que le pasamos a `addEventListener` como segundo argumento es un `callback`, no la ejecutamos nosotras, es ejecutada por el navegador cuando sucede el evento.

Para pasar un `callback` como argumento, podemos utilizar el nombre de una función ya declarada (como vimos en el ejemplo anterior), o podemos declararla directamente. Son dos maneras diferentes de hacer lo mismo. Vamos a ver el ejemplo anterior, pero declarando la función cuando la pasamos como argumento.

```js
const button = document.querySelector('.alert');
button.addEventListener('click', function showAlert() {
  console.log('alerta');
});
```

Esta versión tiene sólo 2 líneas y es un poco más enrevesada, pero funciona igual que la anterior. Vamos a verla con una arrow function:

```js
const button = document.querySelector('.alert');
button.addEventListener('click', () => console.log('alerta'));
```

**3. Parámetros de los Callbacks:** Los callbacks pueden recibir argumentos, como información sobre el evento que ocurrió. Por ejemplo:

```jsx
const miBoton = document.getElementById('miBoton');

function miCallback(event) {
    // Acceder a la información del evento, por ejemplo, la posición del puntero
    console.log('Clic en el botón en coordenadas X:', event.clientX, 'Y:', event.clientY);
}

miBoton.addEventListener('click', miCallback);

```

En este caso, el parámetro event contiene información sobre el evento de clic, como las coordenadas del puntero.

Las funciones de devolución de llamada son esenciales para crear comportamientos interactivos en una página web. Puedes usar callbacks para responder a eventos de usuario, realizar solicitudes AJAX asincrónicas, gestionar temporizadores y mucho más. Permiten que tu código sea más modular y extensible, ya que puedes reutilizar las funciones de devolución de llamada en diferentes partes de tu aplicación.
# 2.6.2 Funciones callback

Las funciones de devolución de llamada (callbacks en inglés) son una parte fundamental del manejo de eventos en JavaScript. Un callback es simplemente una función que se pasa como argumento a otra función y se ejecuta después de que ocurra cierto evento o se complete una tarea asincrónica. Los callbacks son especialmente útiles en el contexto de manejo de eventos, ya que te permiten especificar qué acción tomar después de que ocurra un evento.

### Funciones callback

En JavaScript podemos pasar el nombre de una función como argumento de otra. Es esta función que recibe el argumento la que se encarga de ejecutarla. Podéis ver un ejemplo en este [pen](https://codepen.io/adalab/pen/xyZexZ?editors=1011).

Observa la diferencia entre la ejecución de una función

* `logError()`

y el nombre de una función

* `logError`

Esto os puede parecer un poco raro y complejo al principio, pero iremos descubriendo en el curso que es muy útil. A este tipo de funciones que se pasan como argumentos a otras, se les llama **callbacks**.

### Callbacks en los eventos

A continuación, te explicaré cómo funcionan las funciones de devolución de llamada en el contexto de manejo de eventos:

1. **Asignación de un Callback a un Evento:**

Supongamos que tienes un elemento HTML, como un botón, y deseas ejecutar una función cuando se haga clic en él. Puedes asignar un callback a este evento utilizando addEventListener. Por ejemplo:

```jsx
const miBoton = document.querySelector('.js-btn');

function miCallback() {
    // Este es el callback que se ejecutará cuando se haga clic en el botón
    console.log('Se hizo clic en el botón');
}

miBoton.addEventListener('click', miCallback);

```

En este caso, `miCallback` es la función de devolución de llamada que se ejecutará cuando se haga clic en el botón.

2. **Ejecución del Callback:**

Cuando el evento (en este caso, el clic en el botón) ocurre, el navegador llama automáticamente al `callback` asociado (en este caso, miCallback). Esto permite que el código que defines en el callback se ejecute en respuesta al evento.

Por lo tanto la función que le pasamos a `addEventListener` como segundo argumento es un `callback`, no la ejecutamos nosotras, es ejecutada por el navegador cuando sucede el evento.

Para pasar un `callback` como argumento, podemos utilizar el nombre de una función ya declarada (como vimos en el ejemplo anterior), o podemos declararla directamente. Son dos maneras diferentes de hacer lo mismo. Vamos a ver el ejemplo anterior, pero declarando la función cuando la pasamos como argumento.

```js
const button = document.querySelector('.alert');
button.addEventListener('click', function showAlert() {
  console.log('alerta');
});
```

Esta versión tiene sólo 2 líneas y es un poco más enrevesada, pero funciona igual que la anterior. Vamos a verla con una arrow function:

```js
const button = document.querySelector('.alert');
button.addEventListener('click', () => console.log('alerta'));
```

**3. Parámetros de los Callbacks:** Los callbacks pueden recibir argumentos, como información sobre el evento que ocurrió. Por ejemplo:

```jsx
const miBoton = document.getElementById('miBoton');

function miCallback(event) {
    // Acceder a la información del evento, por ejemplo, la posición del puntero
    console.log('Clic en el botón en coordenadas X:', event.clientX, 'Y:', event.clientY);
}

miBoton.addEventListener('click', miCallback);

```

En este caso, el parámetro event contiene información sobre el evento de clic, como las coordenadas del puntero.

Las funciones de devolución de llamada son esenciales para crear comportamientos interactivos en una página web. Puedes usar callbacks para responder a eventos de usuario, realizar solicitudes AJAX asincrónicas, gestionar temporizadores y mucho más. Permiten que tu código sea más modular y extensible, ya que puedes reutilizar las funciones de devolución de llamada en diferentes partes de tu aplicación.

Para poner un punto de ruptura para ejecutar el debuug se pone en el código 'debugger', en la linea que queramos.
O en el inspect en la linea del código que queramos a la izquiera se le puede añadir un punto rojo.
En ese punto la ejecución se para, si queremos reanudar la ejecución le damos al play y se parará en el siguiente punto de ruptura.

En el panel de debug hay varias pestañas:
- Scope:
  Contiene las variables accesibles desde la línea de código donde estamos situadas.

- Call stack:
  Es la pila de funciones que se han ejecutado, nos sirve por ejemplo para ver desde que parte del código se llama a una funcion.