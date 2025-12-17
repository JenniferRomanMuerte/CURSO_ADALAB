# 4.7.1 Async/Await

En esta lección antes de seguir con Express JS , servidores y APIs, vamos a profundizar en algunos conceptos de JavaScript. Hay una sintaxis especial que puedes usar en JavaScript y que te facilita el trabajo con promesas, se llama `async / await`. La finalidad de las funciones `async/await` es simplificar el comportamiento del uso síncrono de promesas y realizar algún comportamiento específico en un grupo de Promises.

### ¿Qué son las funciones asíncronas?

El término asíncrono se refiere a una situación en la que dos o más eventos no ocurren al mismo tiempo. O en términos más sencillos, pueden suceder varias cosas relacionadas sin esperar a que se complete la acción anterior.

En JavaScript, las funciones asíncronas son muy importantes debido a la naturaleza de un solo sub proceso de JavaScript. Con la ayuda de funciones asíncronas, el bucle de eventos de JavaScript puede encargarse de otras cosas cuando la función solicita algún otro recurso.

Usarías un código asíncrono, por ejemplo, en las API que obtienen un archivo de la red, cuando accedes a una base de datos y devuelves datos de ella, cuando accedes a una transmisión de video desde una cámara web, o si estás transmitiendo la pantalla a un headset de realidad virtual.

### Cómo funcionan las promesas en JavaScript

El objeto `promise` en JavaScript representa una operación asíncrona (y su valor resultante) que eventualmente se completará (o fallará).

Una `promise` puede estar en uno de estos estados:

* pending (pendiente): estado inicial, ni cumplida ni rechazada.
* fulfilled (cumplida): significa que la operación se completó con éxito.
* rejected (rechazada): significa que la operación falló.

### Conceptos básicos de Async / Await en JavaScript

Tenemos dos partes cuando usamos async/await en nuestro código.

En primer lugar, tenemos la palabra clave `async` , que se pone delante de una declaración de función para convertirla en una función `async`.

Una función asíncrona es una función que sabe que es posible que se use la palabra clave `await` dentro de ella para invocar código asíncrono.

La palabra clave `async` se añade a las funciones para que devuelvan una promesa en lugar de un valor directamente. `await` hace que JavaScript espere hasta que la promesa responda y devuelve su resultado.

```jsx
const cargarDatos = async () => {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  const res = await fetch(url);
  const datos = await res.json();
  console.log(datos);
};
cargarDatos();
```

Enfaticemos: `await` literalmente suspende la ejecución de la función hasta que se establezca la promesa, y luego la reanuda con el resultado de la promesa. Eso no cuesta ningún recurso de CPU, porque el motor de JavaScript puede hacer otros trabajos mientras tanto: ejecutar otros scripts, manejar eventos, etc.

⚠️ No se puede usar await en funciones comunes Si tratamos de usar await en una función no async, tendremos un error de sintaxis:

```jsx
function f() {
  let promise = Promise.resolve(1);
  let result = await promise; // Syntax error
}
```

Es posible que obtengamos este error **"SyntaxError: await is only valid in async functions and the top level bodies of modules"** si olvidamos poner async antes de una función. Como se dijo, “await” solo funciona dentro de una función async.

Vamos a ver como trabajar con los métodos `async/await`

{% embed url="<https://youtu.be/0yTMXHmaO4c>" %}

### Cómo usar Async/Await con manejo de errores

Podemos manejar errores usando un bloque try catch como este:

```jsx
const cargarDatos = async () => {
  try {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    const res = await fetch(url);
    const datos = await res.json();
    console.log(datos);
  } catch (err) {
    console.log(err);
  }
};

cargarDatos();
```

El try-catch anterior solamente manejará errores al obtener los datos, como una sintaxis incorrecta, nombres de dominio incorrectos, errores de red, etc.

Si quieres manejar un mensaje de error del código de respuesta de la API, puedes usar `res.ok` ( res es la variable en la que se almacena la respuesta). Te dará un Boolean con el valor verdadero si el código de respuesta está entre 200 y 209. Algo así:

```jsx
const cargarDatos = async () => {
  try {
    const url = 'https://jsonplaceholder.typicode.com/todos/qwe1';
    const res = await fetch(url);
    if (res.ok) {
      const datos = await res.json();
      console.log(datos);
    } else {
      console.log(res.status); // 404
    }
  } catch (err) {
    console.log(err);
  }
};

cargarDatos();
```

### Conclusiones

* El comando async antes de una función tiene dos efectos:
  * Hace que siempre devuelva una promesa.
  * Permite que sea usado await dentro de ella.
* En la mayoría de las situaciones, podemos usar async/await con un bloque try catch para manejar tanto los resultados como los errores.
* Await solo lo podemos usar dentro de una función asíncrona (async).

### Ejercicios

#### 1. Usa async/await

Re-escribe este código usando async/await en vez de .then/catch. Ten en cuenta que es normal que salte un error cuando la petición no es capaz de conectarse a esa ruta de "javascript.info".

```js
function loadJson(url) {
  return fetch(url)
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(`${response.status} from ${response.url}`);
      }
    })
    .then((data) => {
      console.log(data);
    })
}

// Petición que responde un json
loadJson('https://beta.adalab.es/resources/apis/random-word-v1/word.json');

// Petición que no responde
loadJson('https://javascript.info/no-such-user.json');
```
