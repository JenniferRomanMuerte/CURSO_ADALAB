# 3.6 Fetch y local storage

Con lo que has aprendido hasta ahora ya solo te faltan dos cosas para poder hacer páginas web completas:

* Pedir y enviar datos a un servidor con `fetch`.
* Utilizar el local storage.

Y para usarlas aprenderemos otro Hook de React llamado `useEffect`.


# 3.6.1 Hook useEffect

### Hook useEffect

En esta mini lección aprenderemos lo que es el `useEffect` que nos sirve para hacer cosas especiales que no son controladas por React.

### ¿Qué es un hook en programación?

Ya hemos hablado del [hook de React `useState`](https://es.reactjs.org/docs/hooks-state.html), pero queremos explicarte qué es un hook en programación.

Los lenguajes de programación, las aplicaciones, los sistemas operativos, etc. tienen sus flujos de trabajo, en los cuales primero ocurre una acción, luego otra, más tarde otra…

Casi siempre que estamos programando necesitamos ejecutar una parte de nuestro código entre dos de estas acciones, **para cambiar o personalizar este flujo, para tener nosotras el control**.

Un [hook](https://es.wikipedia.org/wiki/Hooking) (que significa gancho) en programación **es una funcionalidad para "engancharnos" a un punto del flujo del programa** > tomar el control > ejecutar un código > devolver el control al programa.

### Hook useEffect

El [hook useEffect de React](https://es.reactjs.org/docs/hooks-effect.html) es un hook que nos permite realizar **efectos secundarios**, es decir:

* **Ejecutar** una parte de nuestro **código en momentos especiales**.
* **Ejecutar acciones de las que React no se encarga** como por ejemplo, llamar a un `fetch` y guardar datos en el local storage.

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-09142cbb431470fc663d4ef2547200c30f953242%2Freact_use_effect.png?alt=media)

En el diagrama vemos el flujo normal de React. Con `useEffect` podemos ejecutar código **después de que React renderice** el componente y lo pinte en la página, pero **antes de que la usuaria haga una acción** como pulsar un botón.

React tiene un flujo de acciones muy concreto y estricto. Para evitar que cada programadora ejecute las acciones especiales en un sitio diferente del código, React nos proporciona la herramienta `useEffect` para que todas programemos de la misma manera.

#### ¿Cómo se usa el useEffect?

Veamos [el siguiente ejercicio](https://ln.run/0qRdj) en el que pedimos datos de la API de Star Wars y pintamos los datos de la Princesa Leia.

Para usar `useEffect` tenemos que:

* **Importarlo:**
  * Aquí lo importamos con `import { useEffect, useState } from 'react';` porque también queremos usar `useState`.
  * Si no necesitásemos importar `useState` escribiríamos `import { useEffect } from 'react';`
* **Usarlo:**
  * Aquí lo usamos con `useEffect(...)`.
  * Al igual que `useState`, lo usamos siempre en la raíz de la función App, nunca dentro de un `if`, un `for`, una función dentro de `App`...

`useEffect` recibe dos parámetros: una función sin ejecutar y un array. Vamos a explicarlos:

#### Primer parámetro de useEffect: la función

El primer parámetro que recibe `useEffect` es **una función sin ejecutar**. Este parámetro es **obligatorio**.

En el ejemplo vemos:

```jsx
useEffect(
  // Aquí empieza la función
  () => {
    fetch("https://swapi.dev/api/people/5")
      .then((response) => response.json())
      .then((responseData) => {
        setStarWarsData(responseData);
      });
  }
  // Aquí termina la función
);
```

Esta función puede ser lo que nosotras queramos. Generalmente va a ser una llamada a un `fetch` o una escritura en el local storage.

**Es una función sin ejecutar. React la ejecutará** cuando haya renderizado y pintado el componente en la página.

#### Segundo parámetro: el array

Este segundo parámetro es **opcional** y sirve para indicarle a React **cuándo queremos que se ejecute** el `useEffect`, es decir, cuándo queremos que se ejecute la función que pasamos como primer parámetro, o de qué depende que se ejecute.

Hay tres opciones:

* **No poner el array: la función se ejecutará siempre** que se renderice el componente `App`.
* **Poner un array vacío: solo se ejecutará la primera vez** que se renderice el componente el componente `App`.
* **Poner un array relleno:** si ponemos una constante de estado, **React solo ejecutará la función cuando cambie esta constante de estado**. Esta opción la veremos mejor en la mini lección siguiente con un ejemplo.

### Conclusiones

Para usar useEffect hay que:

* Importarlo con `import { useEffect } from 'react';` o `import { useEffect, useState } from 'react';`.
* Usarlo con: `useEffect(() => { /* código de mi función */ })`.
* Añadir un segundo parámetro opcional:
  * No poner nada si queremos que se ejecute siempre.
  * Con un array vacío si queremos que solo se ejecute la primera vez.
  * Con un array con constantes de estado si queremos que se ejecute cuando estas cambien.


# 3.6.2 Fetch

### Fetch en React

Nosotras ya sabemos cómo hacer un `fetch`. En esta mini lección aprenderemos cuál es la mejor forma de hacerlo en React.

### ¿Qué son los servicios en programación?

Según la [Wikepedia](https://es.wikipedia.org/wiki/Servicio_web), los servicios en programación son **un conjunto de protocolos y estándares que sirven para intercambiar datos entre aplicaciones**.

Los servicios de programación que hemos utilizado durante el curso son:

* `fetch`: para intercambiar datos en una web y un servidor.
* `localStorage`: para intercambiar datos entre nuestra página y el navegador de la usuaria.

### ¿Cómo hacer un fetch en React?

Al aprender `useEffect` hemos visto que podemos hacer una llamada a una API así:

```jsx
// Fichero src/components/App.jsx
// importamos useEffect además de useState
import { useEffect, useState } from "react";

const App = () => {
  useEffect(() => {
    fetch("https://swapi.dev/api/people/5")
      .then((response) => response.json())
      .then((responseData) => {
        setStarWarsData(responseData);
      });
  }, []);

  return <div>...</div>;
};

export default App;
```

Pero esta forma **no es elegante** porque estamos mezclando en el fichero `src/components/App.js` la funcionalidad para llamar a la API con la funcionalidad para renderizar la página. Nos queda un código muy largo que hace demasiadas cosas. Por ello primero vamos a crear un fichero donde haremos las llamadas a la API. Recuerda que somos programadoras limpias y elegantes.

#### Servicio para llamar a la API

En [este ejemplo de CodeSandbox](https://ln.run/lq9-i), hemos creado el fichero `src/services/api.js`, donde escribimos una función que realiza el fetch para llamar a la API. Te recomendamos que hagas tú lo mismo en tu proyecto `react-starter-kit`.

Como puedes ver, lo que estamos haciendo en el fichero `src/services/api.js` es:

* Crear una función llamada `callToApi`. Esta función se puede llamar como quieras, es una función normal y corriente.
* Ejecutar y **retornar** un `fetch`. Es muy importante no olvidarnos de retornar el `fecth`, si no no podremos usarlo en el componente `src/components/App.js`, por eso siempre escribimos `return fetch(...)`.
* Convertimos la respuesta del servidor a JSON con `.then(response => response.json())`.
* Si queremos limpiamos los datos. Esto no es obligatorio.
* Retornamos los datos dentro del último `then` con `return result;`.
* Exportamos la función con `export default callToApi;` para poder importarla en el componente `App`. Si le cambiamos el nombre a la función `callToApi` por `pepino` aquí escribiríamos `export default pepino;`
* Este servicio es únicamente código JS. No debemos poner código JSX porque no queremos usar HTML aquí dentro.
* Este servicio podríamos moverlo a otro proyecto que no sea de React y funcionaría correctamente.
* Como has visto los nombres de los ficheros de los servicios los ponemos con [camelCase](https://es.wikipedia.org/wiki/Camel_case), es decir, con la primera letra en minúsculas. También ponemos en camelCase los nombres de las funciones.

Una vez creado el servicio lo tenemos que usar en el componente `App`. Observa cómo utilizamos la función `callToAPI` en el fichero `src/components/App.jsx`.

De este segundo fichero las cosas importantes son:

* **Importar el servicio que hemos creado.** Como el servicio está en `src/services/api.js` lo importamos con la ruta relativa entre este fichero y el fichero `src/componets/App.js` con el código `import callToApi from '../services/api';`:
  * Cuando importamos un fichero con extensión `.js` no es obligatorio poner la extensión del fichero.
  * Aquí lo estamos haciendo es algo como `const callToApi = lo que exporta el fichero src/services/api.js`.
  * Puesto que la palabra `callToApi` es una constante, la podemos llamar como queramos, podemos escribir `import pepino from '../services/api';`
* Usar la función `callToApi` del servicio `src/services/api.js`:
  * Como `callToApi` es una función, la ejecutamos con `callToApi()`.
  * Como la función `callToApi` retorna una promesa aquí podemos poner `callToApi().then(...)` para que el contenido del `then` sea ejecutado de forma asíncrona cuando la API responda.
  * Como la promesa retornada por `callToApi` retorna los datos de la API, los estamos recibiendo en `response`, por eso ponemos el código `callToApi().then(response => { ... })`.
  * Como `response` tiene los datos que ha respondido la API, los guardamos en el estado de React con `setStarWarsData(response);`.

Y ya estaría. Como ves no te hemos enseñado nada nuevo acerca de los `fetch`. Simplemente te hemos explicado cómo usarlos en React.

Te recomendamos que copies estos dos ficheros en uno de tus proyectos de React y los pruebes.

> **Nota:** te recomendamos que ejecutes estos ficheros en uno de tus proyectos de React y mires DevTools > Network para entender mejor lo que está pasando.

### ¿Cómo pasar datos a un servicio de fetch?

En el [siguiente ejercicio](https://ln.run/_rTZk) hemos creado un input para buscar personajes de Star Wars. Cada vez que la usuaria escriba algo en el input llamaremos a la API para que haga una nueva búsqueda. Cuando la API responda pintaremos el listado de personajes.

En el fichero `src/components/App.js` la parte importante es:

* Llamamos a la API pasando por parámetros el `searchName` para poder enviarlo a la API.
* El `useEffect` depende de `searchName` porque solo queremos llamar al API cuando `searchName` cambie. Por eso hemos puesto en el segundo parámetro del `useEffect` un array con `searchName`:

  ```jsx
  useEffect(() => {
    // ...
  }, [searchName]);
  ```

En el fichero `src/services/api.js` la parte importante es:

* Al declarar la función `callToApi` recibimos por parámetro `searchName` por ello ponemos `const callToApi = (searchName) => {`.
* Interpolamos `searchName` en la URL para enviarlo al API, por ello ponemos ``return fetch(`https://swapi.dev/api/people/?search=${searchName}`)``.

> **Nota:** te recomendamos que ejecutes estos ficheros en uno de tus proyectos de React y mires DevTools > Network para entender mejor lo que está pasando.

### Usando un fetch de tipo POST

Usar un `fetch` de tipo POST no tiene ningún misterio. Recuerda que aquí te hemos enseñado a enviar usar `fetch` en React. Lo que haga el `fetch` es cosa del `fetch`.

### Conclusiones

Para usar un `fetch` en React debemos:

* Crear un servicio:
  * En este servicio debemos crear y exportar una función.
  * Esta función puede recibir parámetros como cualquier otra función de JS.
  * Esta función debe retornar el `fetch`.
  * Todo lo demás es lo que podemos hacer con un `fetch` en React o en JavaScript normal.
* En el componente de React debemos:
  * Importar el servicio.
  * Usar el servicio dentro de un `useEffect`.
  * Si queremos llamar al servicio de la API solo la primera vez ponemos un array vacío como segundo parámetro del useEffect.
  * Si queremos llamar al servicio de la API cada vez que cambie una constante del estado ponemos un array relleno con la constante del estado como segundo parámetro del useEffect.

### Ejercicios

#### 1. Paranormal activity

En la lección en la que explicamos el segundo parámetro (el array) de `useEffect` decíamos: "Si no ponemos el array: la función se ejecutará siempre que se ejecute el componente `App`, es decir, siempre que se renderice".

Vamos a probarlo:

1. Crea un nuevo ejercicio desde tu React Starter Kit.
2. Añade un servicio para trabajar con la API:
   * En este servicio llama a la URL de las series de televisión <https://api.tvmaze.com/search/shows?q=paranormal>.
   * Retorna la respuesta del servidor en el `then` de este servicio.
3. En el componente `App`, en el `useEffect`:
   * Guarda la respuesta del servicio en el estado de React.
   * No pongas ningún array (ni vacío ni relleno) como segundo parámetro del `useEffect`.
   * No hace falta que pintes en pantalla la respuesta de la API porque no nos interesa para este ejercicio.
4. Mira DevTools > Network y verás que hay una actividad paranormal.

¿Sabrías decir por qué se llama repetidas veces a la API? Queremos solucionarlo para que solo se llame a la API una vez. Para ello:

1. Revisa la mini lección en la que explicamos para qué es el segundo parámetro del `useEffect`.
2. Comprueba en DevTools > Network que al refrescar la página solo se llama una vez a la API.
3. Razona por qué se estaba renderizando muchas veces el componente.

#### 2. Buscador de series

Vamos a hacer un buscador de series en React. Los requisitos son:

* Debe haber un campo de texto para que la usuaria busque una serie.
* Cada vez que la usuaria escriba una letra debemos volver a realizar la búsqueda.
* La búsqueda la debemos hacer llamando a la API <https://api.tvmaze.com/search/shows?q=> más la palabra buscada.
* Debemos pintar en pantalla los resultados devueltos por la API.
* La búsqueda la debemos hacer llamando al API <https://api.tvmaze.com/search/shows?q=> más las palabra buscada.
* Debemos pintar en pantalla los resultados devueltos por el API.
