# 3.2.1 JSX

### ¿Qué es JSX?

En esta mini entenderemos esa cosa rara que has visto en los componentes de React: que en un fichero de JavaScript estamos mezclando JS y HTML.

### Partes de un componente de React

Hasta ahora los componentes que hemos visto son algo como:

```jsx
// Fichero src/components/App.jsx
import logo from "../images/logo.svg";
import "../styles/App.scss";

function App() {
  return (
    <div className="app">
      <header>
        <img src={logo} className="logo" alt="logo" />
        <h1>Hola mundo</h1>
      </header>
    </div>
  );
}

export default App;
```

Aquí podemos distinguir cuatro partes principales:

* **Primera parte: importar ficheros**

  ```jsx
  import logo from "../images/logo.svg";
  import "../styles/App.scss";
  ```

  * En las primeras líneas de un componente de React importamos los ficheros que necesitamos usar dentro de este componente. Si no necesitásemos importar nada, pues no las ponemos.
  * Se puede importar tantos ficheros como queramos.
  * Hay dos tipos de importaciones:
    * **Las importaciones que nos devuelven algo que necesitamos usar en una línea concreta del componente.** Cuando hacemos `import logo from '../images/logo.svg';` la ruta del logo se mete en la constante `logo`, para que luego podamos usarla en `<img src={logo} ... />`.
    * **Las importaciones que no necesitamos usar en ninguna línea concreta del componente.** Cuando importamos `import '../styles/App.scss';` no vamos a usar un estilo concreto en el componente, vamos a usar todos los estilos de `App.scss`. Por eso este `import` no tiene una constante delante de `from` ni tiene la palabra `from`.
* **Segunda parte: la función**

  ```jsx
  function App() {
  ```

  * Esta función es la que da nombre al componente.
  * Puede ser cualquier tipo de función, por ejemplo:
    * Función normal: `function App() {`
    * Función arrow: `const App = () => {`
  * Esta es la función que debemos usar al exportar el componente en la última línea del fichero con `export default App;`.
* **Tercera parte: el retorno de la función**

  ```jsx
  return (
    <div className="app">
      <header>
        <img src={logo} className="logo" alt="logo" />
        <h1>Hola mundo</h1>
      </header>
    </div>
  );
  ```

  * React necesita saber qué código HTML queremos pintar en la página. La forma que nos han indicado para ello es que retornemos código HTML en esta función.
  * Lo que retornemos por aquí es lo que React va a mostrar en el navegador. Si arrancas el proyecto e inspeccionas tu página en DevTools, verás que:

    * Tu página tiene la misma estructura que haya en `public/index.html`.
    * Dentro de la etiqueta `<div id="root">` React mete el código que estamos retornando aquí.
    * En este retorno solo podemos exportar una etiqueta HTML principal, que en el ejemplo es el `<div className="app">`. Sí puede tener tantas descendientes como quiera, pero no hermanas. Es decir, esto estaría mal:

    ```jsx
    function App() {
        return (
          <div className="app">Un div</div>
          <div>Otro div</div>
        );
      }
    ```

Este es el código HTML generado por nuestra página:

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-b811e453fe0396158abd8e0e9904f918db1e1493%2Freact_jsx_div_root.png?alt=media)

* **Cuarta parte: el export default**

  ```jsx
  export default App;
  ```

  * React necesita usar este componente fuera de este fichero, por eso lo exportamos.
  * Esto de `import` y `export default` es una funcionalidad nueva de JavaScript, en concreto de ES6.
  * Es un pelín compleja, así que la explicaremos más adelante. Por ahora tú solo necesitas saber que el componente `App` debe exportar el nombre de la función principal con `export default App;`.

Nos falta una **quinta parte** que hasta ahora no hemos visto en ningún ejemplo. **Entre el inicio de la función y su retorno podemos poner todo el JS que queramos**, como declarar constantes y variables, funciones, bucles, poner comentarios... **En esta parte del código olvídate de que estás trabajando con JSX y piensa que este código es simple JS.** Un ejemplo rápido sería:

```jsx
// Fichero src/components/App.jsx
import logo from "../images/logo.svg";
import "../styles/App.scss";

function App() {
  // Aquí puedes meter condicionales, declaración de funciones, bucles...
  const userName = "María";
  // Esto es un comentario de línea
  /*
  Esto es un comentario de bloque
  */
  console.log(userName);
  // Aquí también puedes meter condicionales, declaración de funciones, bucles...

  return (
    <div>
      <h1>Hola {userName}</h1>
    </div>
  );
}

export default App;
```

### ¿Qué es JSX?

**JSX es JavaScript eXtended**. Es un as que se han sacado de la manga los creadores de React **con el objetivo de poder mezclar en un solo fichero JavaScript y HTML**.

¿Y por qué mezclar dos lenguajes en un solo fichero, si siempre decimos que hay que separar el código en cuantos más ficheros mejor? Primero, porque un componente es un conjunto de HTML y JS, y si están juntos se lee mejor lo que hace este componente. Segundo, porque han conseguido una sintaxis que es cómoda, pues **todo lo que va dentro del retorno de la función es HTML y lo demás es JS**.

Debemos avisarte de que JSX no funciona en un navegador. React lo coge, lo convierte o procesa en JS de verdad y eso es lo que se ejecuta en el navegador.

### ¿Qué nos permite hacer JSX?

JSX nos permite tener código HTML dentro de un fichero de JS. También **nos permite meter código JS dentro del HTML**, siempre y cuando lo metamos entre llaves `{ }`.

A continuación vamos a poner unos ejemplos de las cosas que se pueden hacer con JSX:

#### Pintar los valores de una constante o variable dentro del HTML

```jsx
// Fichero src/components/App.jsx
function App() {
  const userName = "María";
  return (
    <div>
      <h1>Hola {userName}</h1>
    </div>
  );
}
export default App;
```

#### Pintar los valores de una constante o variable dentro de una clase

```jsx
// Fichero src/components/App.jsx
function App() {
  const titleClass = "title";
  return (
    <div className={titleClass}>
      <h1>Hola mundo</h1>
    </div>
  );
}
export default App;
```

Fíjate que cuando usamos las llaves en un atributo de una etiqueta HTML no ponemos las comillas.

#### Ejecutar código JS dentro del HTML

```jsx
// Fichero src/components/App.jsx
function App() {
  const one = 1;
  const two = 2;
  return (
    <div>
      <h1>Uno más dos más es: {one + two}</h1>
    </div>
  );
}
export default App;
```

```jsx
// Fichero src/components/App.jsx
function App() {
  const titleClass = "title";
  return (
    <div>
      <h1 className={`header__${titleClass}`}>Hola mundo</h1>
    </div>
  );
}
export default App;
```

Para programar o leer el código de los dos ejemplos anteriores, olvídate de que es código JSX. Céntrate solo en **lo que hay entre llaves es JS**.

En el primer ejemplo, piensa que lo que hay entre llaves es la suma de `one + two`. Por ello el resultado de este JS será 3.

En el segundo ejemplo debes pensar que lo que está entre llaves es la interpolación de un string `header__${titleClass}`, por lo que el resultado será `header__title`.

#### Guardar HTML en constantes o variables de JS

```jsx
// Fichero src/components/App.jsx
function App() {
  const title = <h1>Hola mundo</h1>;
  return <div>{title}</div>;
}
export default App;
```

Esto dará como resultado:

```html
<div>
  <h1>Hola mundo</h1>
</div>
```

#### Usar funciones para retornar HTML

El ejemplo anterior sería igual que este:

```jsx
// Fichero src/components/App.jsx
function App() {
  function getTitle() {
    return <h1>Hola mundo</h1>;
  }
  return <div>{getTitle()}</div>;
}
export default App;
```

En el retorno del componente estamos ejecutando una función que a su vez retorna un `<h1>`.

En el código `{getTitle()}` lo que hay entre llaves es `getTitle()`, es decir, la ejecución de una función.

En React todo el mundo usa funciones arrow, así que acostúmbrate a ellas. El ejemplo anterior con arrow sería:

```jsx
// Fichero src/components/App.jsx
const App = () => {
  const getTitle = () => {
    return <h1>Hola mundo</h1>;
  };
  return <div>{getTitle()}</div>;
};
export default App;
```

Estas son funciones normales, así que pueden hacer todo lo que hace una función. Por ejemplo, recibir parámetros:

```jsx
const App = () => {
  // Fichero src/components/App.jsx
  const getTitle = (text) => {
    return <h1>{text}</h1>;
  };
  return <div>{getTitle("Hola mundo")}</div>;
};
export default App;
```

En las próximas lecciones verás que vamos a ir creando funciones dentro de un componente de React. **Todas estas funciones las debemos declarar dentro de la función `App`.** Esto estaría mal:

```jsx
// Fichero src/components/App.jsx
const getTitle = (text) => {
  return <h1>{text}</h1>;
};
function App() {
  return <div>{getTitle("Hola mundo")}</div>;
}
export default App;
```

**Como ves, React trata el HTML como un dato más**, por eso podemos guardarlo en constantes, retornarlo en una función, pasarlo por parámetros a una función, meterlo en un array...

### ¿Qué no podemos hacer en JSX?

Hace tiempo aprendimos que en JS:

* **Una expresión es aquel código que produce un valor o resultado**, por ejemplo una suma, una interpolación, la ejecución de una función, un operador ternario, etc.
* **• Una sentencia es el código que realiza una o varias acciones**, por ejemplo un if, un for, crear una constante, declarar una función, etc.

Dentro de las llaves de JSX solo podemos usar expresiones y no sentencias. Dicho de otra forma, **dentro de las llaves solo podemos poner código que produzca un valor**, porque es lo que queremos pintar en la web.

Por ejemplo, este código estaría mal:

```jsx
// Fichero src/components/App.jsx
function App() {
  return (
    <div>
      <h1>{const one = 1;}</h1>
      <h2>{if (one % 2 === 0) { console.log('Es par'); } else { console.log('Es impar') } }</h2>
      <h3>{for (let index = 0; index < array.length; index++) {...}</h3>
      <h4>{function add (a, b) { return a + b;} }</h4>
    </div>
  );
}
export default App;
```

### Conclusiones

* El código JSX es HTML dentro de un fichero de JS.
* JSX trata el código HTML como un dato más, por ello podemos:
  * Guardarlo en una constante o variable.
  * Retornarlo en una función.
  * Pasarlo como parámetros a una función.
* Dentro de las llaves `{}` ejecutamos código JS, por ello podemos:
  * Hacer sumas, interpolaciones, llamar a funciones.
  * Ejecutar cualquier expresión de JS que genere un valor.


# 3.2.2 Eventos

### Eventos en React

En esta mini lección aprenderemos cuál es la sintaxis para declarar un evento en React. Ya conoces perfectamente lo que es un evento de JS y cómo funciona, así que lo único que debes aprender es a escribirlo.

> **Nota:** esta mini lección es poco importante, porque explicar los eventos sin explicar los datos no nos vale para mucho.

### ¿Cómo escribir un evento en React?

Recordemos cómo se escribe un evento en JS:

```js
// Creamos una función manejadora para el botón
function handleButton(ev) {
  console.log("El botón ha sido pulsado");
  console.log("El evento lanzado es: ", ev);
}

// Con esta línea buscamos el botón en el HTML
const buttonElement = document.querySelector(".js-button");

// Con esta línea escuchamos un evento de tipo click en el botón y le decimos que será gestionado por handleButton
buttonElement.addEventListener("click", handleButton);
```

Todo esto lo hacemos así porque el botón está en un fichero HTML y este código está en otro fichero, un JS. Y la forma de relacionar ambos es con `document.querySelector('.js-button');`.

En un componente de React tenemos el HTML y el JS juntos en el mismo fichero, por lo que todo se simplifica. Mira el siguiente ejemplo:

```jsx
// Fichero src/components/App.jsx
const App = () => {
  const handleButton = (ev) => {
    console.log("El botón ha sido pulsado");
    console.log("El evento lanzado es: ", ev);
  };

  return (
    <div>
      <button onClick={handleButton}>Púlsame</button>
    </div>
  );
};

export default App;
```

Puedes ver este [ejemplo en CodeSandbox](https://ln.run/jVG7H). El archivo en el que debes fijarte es `src/components/App.jsx` y puedes ver la consola haciendo click en el botón correspondiente del panel de la derecha de la previsualización.

**La función manejadora del evento es exactamente igual que como la escribíamos en JS normal.** En el ejemplo anterior la hemos pasado a arrow function, pero es lo mismo.

En el código de JS normal, teníamos que seleccionar el botón y añadirle el evento:

```js
const buttonElement = document.querySelector(".js-button");
buttonElement.addEventListener("click", handleButton);
```

En un componente de React con JSX lo escribimos así:

```jsx
<button onClick={handleButton}>Púlsame</button>
```

En una sola línea indicamos cuál es la etiqueta HTML sobre la que estamos escuchando el evento. Además con el `onClick` indicamos el tipo de evento.

En JS normal la función `handleButton` no lleva paréntesis porque no queremos ejecutarla nosotras, queremos que la ejecute el navegador cuando la usuaria pulse en el botón. En React es igual, el código `onClick={handleButton}` no lleva paréntesis. Que no se te olvide.

### ¿Qué más hay que saber sobre los eventos?

Ya está, nada más. Todo lo demás que sabes sobre eventos funciona exactamente igual en JS normal que en React.

La función manejadora también recibe como primer y único parámetro el evento, por ello podemos hacer:

```js
const handleButton = (ev) => {
  ev.preventDefault(); // para parar la acción por defecto del evento
  console.log("El evento lanzado es: ", ev);
  console.log("El evento lo ha lanzado la etiqueta: ", ev.target);
};
```

### ¿Qué eventos podemos usar en React?

Casi todos los que ya conocemos, [aquí tienes una lista completa](https://es.reactjs.org/docs/events.html#supported-events). Por ejemplo, para escuchar el evento `keyUp` en un input haremos:

```jsx
// Fichero src/components/App.jsx
function App() {
  const handleInput = (ev) => {
    console.log("El botón ha sido pulsado");
    console.log("El evento lanzado es: ", ev);
    console.log("La tecla pulsada es: ", ev.key);
    console.log("El valor del input es: ", ev.target.value);
  };

  return (
    <div>
      <input type="text" name="email" id="email" onKeyUp={handleInput} />
    </div>
  );
}
export default App;
```

[Ejemplo en CodeSandbox](https://ln.run/RGA48).

### ¿Qué eventos no podemos usar en React?

**Los eventos que no podemos usar en React son los que escapan al control de React.**

Hemos aprendido que React pinta dentro del `<div id="root">...</div>` del `public/index.html` lo que devolvamos en el retorno de la función `App` . El evento scroll que se lanza cuando hacemos scroll en la página se lanza sobre la etiqueta `<body>` que está por fuera de la etiqueta `<div id="root">...</div>`.

**Por ello React no puede escuchar el scroll de la página.**

> **Nota:** te recomendamos que cuando acabes el curso te leas [la documentación de React sobre eventos](https://es.reactjs.org/docs/events.html), en la que se explican con mayor detalle.

### Target *vs.* currentTarget

Tú ya sabes que la diferencia entre estas propiedades del evento:

* `target` es el elemento que lanza el evento, es decir, donde hace clic o actúa la usuaria.
* `currentTarget` es el elemento que escucha el evento, es decir, donde ponemos el `onClick` o el `onLoQueSea`.

En React funciona exactamente igual que en JS. React pocas veces da problemas con este tema. Pero es tu responsabilidad saber cuándo usar uno u otro, o al menos acordarte de que si estás teniendo un problema con uno de ellos probar el otro.

### Conclusiones

Los eventos en React se declaran con `on`, seguido del **tipo de evento** seguido de la **función manejadora sin paréntesis y entre llaves**:

* `onClick={handleClick}`
* `onKeyUp={handleInput}`
* `onChange={handleInput}`

La función manejadora:

* Tiene que estar declarada dentro de la función `App`.
* Todo lo demás funciona exactamente igual que en JS.

### Ejercicios

#### 1. Muestra la tecla pulsada en la consola

Para familiarizarte con la sintaxis de los eventos en React te proponemos que hagas el siguiente ejercicio:

1. Crea un proyecto a partir de tu React Starter Kit.
2. Crea un formulario con un input de tipo texto.
3. Crea la funcionalidad para que cuando la usuaria escriba un algo en el input, se muestre en la consola cuál ha sido la última tecla pulsada.
4. Si pulsas intro la página se refrescará. Crea la funcionalidad para evitar que esto pase.


# 3.2.3 Estado

### Los datos y el estado en React

En JS usamos variables y constantes para almacenar datos. En React algunos de estos datos se llaman **estado de la aplicación**. Vamos a aprender a usarlos.

> **Nota:** esta mini lección es poco importante, ya que explicar datos sin eventos tampoco tiene mucho sentido.

### ¿Qué es el estado de una aplicación?

El estado o estado de la aplicación son los datos actuales, por ejemplo:

* Los datos que nos hemos traído del servidor con un `fetch`.
* Los datos que han introducido las usuarias en los formularios.
* Los datos que queremos guardar porque una usuaria ha pulsado en algún sitio de la página, como por ejemplo para desplegar o abrir un menú.

### ¿Cómo funciona el estado en React?

Recordemos que en JS normal, cuando la usuaria hacía una acción como clicar en un botón para marcar una serie como favorita o escribir en un campo de texto, nosotras teníamos que hacer tres cosas:

1. Escuchar el evento y **guardar** esos datos en alguna constante o variable global.
2. **Repintar** la página para que se muestre la información actualizada en función de la acción que haya hecho la usuaria.
3. **Volver a escuchar los eventos** en el nuevo HTML recién pintado.

Sabemos que React es reactivo, en concreto reacciona a los cambios de datos o cambios de estado. Cuando una usuaria haga una acción:

1. **Nosotras nos vamos a encargar de actualizar los datos**, o lo que es lo mismo, el estado de la aplicación.
2. **React se va a encargar de estar vigilando esos datos** y cuando un dato cambie:
   1. **Reaccionará**, es decir, repintará la página. A este proceso se le llama **renderizar**.
   2. **Volverá a escuchar los eventos** en las etiquetas HTML que le hayamos indicado.

En JS normal nosotras repintábamos un montón de etiquetas, un proceso lento que a veces producía parpadeos, sobre todo al repintar imágenes. Por el contrario, **React es ultra óptimo al realizar esta acción, ya que solo repinta las etiquetas que han cambiado.**

### ¿Cómo escribimos los estados?

En React existen los [hooks](https://es.reactjs.org/docs/hooks-intro.html), que son funcionalidades extra que podemos usar o no.

El más importante es el hook [useState](https://es.reactjs.org/docs/hooks-state.html), que nos ayuda a usar el estado. **Todos los datos que programemos con `useState`, React los observará y cuando cambien, re-renderizará la página** para que siempre esté actualizada.

Veamos un ejemplo en el que trabajamos con el nombre de la usuaria:

```jsx
// Fichero src/components/App.jsx
import {useState} from 'react';

function App() {
  const [name, setName] = useState('');

  return <div>El nombre de la usuaria es: {name}</div>;
}

export default App;
```

En este código hay dos líneas importantes:

La primera es `import { useState } from 'react';`. Con esta línea importamos la funcionalidad `useState` desde la librería `react`. **Siempre que tengas que usar el estado de React pon esta línea al principio de tu código.**

La segunda línea importante es `const [name, setName] = useState('');`. Que vamos a explicar en detalle.

> **Nota:** esta explicación se te va a quedar coja hasta que leas la siguiente mini lección en la que explicamos como trabajan juntos el estado y los eventos. Cuando leas la siguiente mini lección vuelve a leer esta para asentar los conocimientos.

#### Declaración de una constante y una función

Lo primero, ¿qué es eso de `const [...]`? ¿Acaso estamos declarando una constante, pero con corchetes? ¿Estamos declarando un array? ¡¡¡Córcholis!!!

Esta forma de declarar constantes es nueva en JS y se llama [destructuring](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). Es una de esas cosas que se entiende mejor usándola que explicándola. Así que te la explicaremos más adelante cuando entiendas mejor cómo funciona el estado.

Un resumen rápido es que `useState` es una función que retorna un array con dos datos. El primero se va a guardar en la primera constante, es decir, en `name`. El segundo valor del array devuelto por `useState` se va a guardar en la segunda constante declarada, es decir, en `setName`.

**Aquí lo importante es:**

* `name` es la constante que guarda el nombre de la usuaria:
  * Por ello lo estamos pintando dentro del `<div>`.
  * Se puede llamar como queramos, `name`, `userName`, `pepino`...
* `setName` es la función que React ha creado para nosotras:
  * Esta función es la que ejecutaremos para cambiar el nombre de la usuaria.
  * Lo normal es ejecutar esta función cuando la usuaria cambie su nombre en un input de un formulario.
  * Si dentro de la función manejadora del evento ejecutamos `setName('Maricarmen')`, React cambiará el nombre de la constante `name`, renderizará la página y nos mostrará el nombre actualizado.
  * La función `setName` la podemos llamar como queramos, pero siempre empezando por `set`. React además de ser majete es un poco exquisito con la sintaxis y nos obliga a hacer estas cosas. Lo bueno que como todo el mundo lo hace, leer y entender código ajeno en React es muy fácil.

#### Hook useState('')

Al hacer `import { useState } from 'react';` estamos importando la función `useState` desde la librería de React.

Lo interesante es que lo que ponemos dentro de los paréntesis de `useState()` es el **valor inicial** con el queremos arrancar la aplicación. **Solo se usa la primera vez que el componente se renderiza.** Las siguientes veces que se renderiza este valor se ignora.

En el ejemplo hemos puesto `useState('')` por ello la constante `name` tiene como valor inicial un string vacío. Si hubiéramos puesto `useState('Lola')` el valor inicial de `name` sería "Lola". Si hubiéramos puesto `useState()`, el valor inicial de `name` sería `undefined`. **Siempre le debemos poner un valor inicial al `useState`**.

### Uso de otras variables o constantes

Dentro la función `App` podemos crear otras variables y constantes como siempre hemos hecho, por ejemplo con `const email = 'maricarmen@gmail.com'`. Si al crear estas variables no usamos `useState` React no las vigilará y no re-rendizará el componente cuando cambien. Por ello es tu responsabilidad saber qué datos pones dentro del estado y cuáles no.

### Uso de varios estados de React

Para guardar en el estado de React varios datos es tan fácil como duplicar la línea `const [name, setName] = useState('');`. Veamos un ejemplo en el que trabajamos con el nombre y el email de una usuaria:

```jsx
// Fichero src/components/App.jsx
import {useState} from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      El nombre de la usuaria es {name} y su email es {email}.
    </div>
  );
}

export default App;
```

Si te has quedado un poco a medias con esta mini lección, no te preocupes, en la siguiente todo cobra sentido.

### Restricciones de useState

Hay dos restricciones para usar el estado de React:

* La declaración del estado `const [name, setName] = useState('');` debe escribirse siempre **en la raíz de la función `App`**. No podemos meterla dentro de un `if`, un `for`, una función que esté dentro de `App`... Si lo hacemos React nos mostrará un error en la consola. Esto estaría mal:

  ```jsx
  // Fichero src/components/App.jsx
  import {useState} from 'react';

  function App() {
    if (loQueSea) {
      const [name, setName] = useState(''); // Esto está mal, es caca
    }

    return <div>El nombre de la usuaria es {name}.</div>;
  }

  export default App;
  ```
* **Las funciones para modificar el estado** `setName` solo **las podemos ejecutar dentro de las funciones manejadoras** (y dentro del useEffect que veremos en el futuro). Por ello **no** podemos ejecutarlas en la raíz de la función. Esto estaría mal:

  ```jsx
  // Fichero src/components/App.jsx
  import {useState} from 'react';

  function App() {
    const [name, setName] = useState('');

    setName('Maricarmen');

    return <div>El nombre de la usuaria es {name}.</div>;
  }

  export default App;
  ```

  * Esto genera el error `Error: Too many re-renders. React limits the number of renders to prevent an infinite loop` porque al renderizar se está actualizando el estado, lo que provoca un nuevo renderizado, que provoca una actualización del estado y así hasta el infinito y más allá.

### Conclusiones

Para crear una constante de estado y que React renderice el componente cada vez que este dato cambie tenemos que hacer 3 cosas:

* Importar `useState` en las primeras líneas del fichero con `import { useState } from 'react'`.
* Crear la constante, la función para modificar esta constante y asignar el valor inicial con `const [name, setName] = useState('')`;
* La función modificadora tiene que empezar siempre por `setLoQueSea`.
* Podemos usar y pintar la constante del estado donde queramos.
* Para modificar la constante tenemos que usar la función manejadora con `setName('Mi nuevo valor')`.


# 3.2.3 Estado

### Los datos y el estado en React

En JS usamos variables y constantes para almacenar datos. En React algunos de estos datos se llaman **estado de la aplicación**. Vamos a aprender a usarlos.

> **Nota:** esta mini lección es poco importante, ya que explicar datos sin eventos tampoco tiene mucho sentido.

### ¿Qué es el estado de una aplicación?

El estado o estado de la aplicación son los datos actuales, por ejemplo:

* Los datos que nos hemos traído del servidor con un `fetch`.
* Los datos que han introducido las usuarias en los formularios.
* Los datos que queremos guardar porque una usuaria ha pulsado en algún sitio de la página, como por ejemplo para desplegar o abrir un menú.

### ¿Cómo funciona el estado en React?

Recordemos que en JS normal, cuando la usuaria hacía una acción como clicar en un botón para marcar una serie como favorita o escribir en un campo de texto, nosotras teníamos que hacer tres cosas:

1. Escuchar el evento y **guardar** esos datos en alguna constante o variable global.
2. **Repintar** la página para que se muestre la información actualizada en función de la acción que haya hecho la usuaria.
3. **Volver a escuchar los eventos** en el nuevo HTML recién pintado.

Sabemos que React es reactivo, en concreto reacciona a los cambios de datos o cambios de estado. Cuando una usuaria haga una acción:

1. **Nosotras nos vamos a encargar de actualizar los datos**, o lo que es lo mismo, el estado de la aplicación.
2. **React se va a encargar de estar vigilando esos datos** y cuando un dato cambie:
   1. **Reaccionará**, es decir, repintará la página. A este proceso se le llama **renderizar**.
   2. **Volverá a escuchar los eventos** en las etiquetas HTML que le hayamos indicado.

En JS normal nosotras repintábamos un montón de etiquetas, un proceso lento que a veces producía parpadeos, sobre todo al repintar imágenes. Por el contrario, **React es ultra óptimo al realizar esta acción, ya que solo repinta las etiquetas que han cambiado.**

### ¿Cómo escribimos los estados?

En React existen los [hooks](https://es.reactjs.org/docs/hooks-intro.html), que son funcionalidades extra que podemos usar o no.

El más importante es el hook [useState](https://es.reactjs.org/docs/hooks-state.html), que nos ayuda a usar el estado. **Todos los datos que programemos con `useState`, React los observará y cuando cambien, re-renderizará la página** para que siempre esté actualizada.

Veamos un ejemplo en el que trabajamos con el nombre de la usuaria:

```jsx
// Fichero src/components/App.jsx
import {useState} from 'react';

function App() {
  const [name, setName] = useState('');

  return <div>El nombre de la usuaria es: {name}</div>;
}

export default App;
```

En este código hay dos líneas importantes:

La primera es `import { useState } from 'react';`. Con esta línea importamos la funcionalidad `useState` desde la librería `react`. **Siempre que tengas que usar el estado de React pon esta línea al principio de tu código.**

La segunda línea importante es `const [name, setName] = useState('');`. Que vamos a explicar en detalle.

> **Nota:** esta explicación se te va a quedar coja hasta que leas la siguiente mini lección en la que explicamos como trabajan juntos el estado y los eventos. Cuando leas la siguiente mini lección vuelve a leer esta para asentar los conocimientos.

#### Declaración de una constante y una función

Lo primero, ¿qué es eso de `const [...]`? ¿Acaso estamos declarando una constante, pero con corchetes? ¿Estamos declarando un array? ¡¡¡Córcholis!!!

Esta forma de declarar constantes es nueva en JS y se llama [destructuring](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). Es una de esas cosas que se entiende mejor usándola que explicándola. Así que te la explicaremos más adelante cuando entiendas mejor cómo funciona el estado.

Un resumen rápido es que `useState` es una función que retorna un array con dos datos. El primero se va a guardar en la primera constante, es decir, en `name`. El segundo valor del array devuelto por `useState` se va a guardar en la segunda constante declarada, es decir, en `setName`.

**Aquí lo importante es:**

* `name` es la constante que guarda el nombre de la usuaria:
  * Por ello lo estamos pintando dentro del `<div>`.
  * Se puede llamar como queramos, `name`, `userName`, `pepino`...
* `setName` es la función que React ha creado para nosotras:
  * Esta función es la que ejecutaremos para cambiar el nombre de la usuaria.
  * Lo normal es ejecutar esta función cuando la usuaria cambie su nombre en un input de un formulario.
  * Si dentro de la función manejadora del evento ejecutamos `setName('Maricarmen')`, React cambiará el nombre de la constante `name`, renderizará la página y nos mostrará el nombre actualizado.
  * La función `setName` la podemos llamar como queramos, pero siempre empezando por `set`. React además de ser majete es un poco exquisito con la sintaxis y nos obliga a hacer estas cosas. Lo bueno que como todo el mundo lo hace, leer y entender código ajeno en React es muy fácil.

#### Hook useState('')

Al hacer `import { useState } from 'react';` estamos importando la función `useState` desde la librería de React.

Lo interesante es que lo que ponemos dentro de los paréntesis de `useState()` es el **valor inicial** con el queremos arrancar la aplicación. **Solo se usa la primera vez que el componente se renderiza.** Las siguientes veces que se renderiza este valor se ignora.

En el ejemplo hemos puesto `useState('')` por ello la constante `name` tiene como valor inicial un string vacío. Si hubiéramos puesto `useState('Lola')` el valor inicial de `name` sería "Lola". Si hubiéramos puesto `useState()`, el valor inicial de `name` sería `undefined`. **Siempre le debemos poner un valor inicial al `useState`**.

### Uso de otras variables o constantes

Dentro la función `App` podemos crear otras variables y constantes como siempre hemos hecho, por ejemplo con `const email = 'maricarmen@gmail.com'`. Si al crear estas variables no usamos `useState` React no las vigilará y no re-rendizará el componente cuando cambien. Por ello es tu responsabilidad saber qué datos pones dentro del estado y cuáles no.

### Uso de varios estados de React

Para guardar en el estado de React varios datos es tan fácil como duplicar la línea `const [name, setName] = useState('');`. Veamos un ejemplo en el que trabajamos con el nombre y el email de una usuaria:

```jsx
// Fichero src/components/App.jsx
import {useState} from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      El nombre de la usuaria es {name} y su email es {email}.
    </div>
  );
}

export default App;
```

Si te has quedado un poco a medias con esta mini lección, no te preocupes, en la siguiente todo cobra sentido.

### Restricciones de useState

Hay dos restricciones para usar el estado de React:

* La declaración del estado `const [name, setName] = useState('');` debe escribirse siempre **en la raíz de la función `App`**. No podemos meterla dentro de un `if`, un `for`, una función que esté dentro de `App`... Si lo hacemos React nos mostrará un error en la consola. Esto estaría mal:

  ```jsx
  // Fichero src/components/App.jsx
  import {useState} from 'react';

  function App() {
    if (loQueSea) {
      const [name, setName] = useState(''); // Esto está mal, es caca
    }

    return <div>El nombre de la usuaria es {name}.</div>;
  }

  export default App;
  ```
* **Las funciones para modificar el estado** `setName` solo **las podemos ejecutar dentro de las funciones manejadoras** (y dentro del useEffect que veremos en el futuro). Por ello **no** podemos ejecutarlas en la raíz de la función. Esto estaría mal:

  ```jsx
  // Fichero src/components/App.jsx
  import {useState} from 'react';

  function App() {
    const [name, setName] = useState('');

    setName('Maricarmen');

    return <div>El nombre de la usuaria es {name}.</div>;
  }

  export default App;
  ```

  * Esto genera el error `Error: Too many re-renders. React limits the number of renders to prevent an infinite loop` porque al renderizar se está actualizando el estado, lo que provoca un nuevo renderizado, que provoca una actualización del estado y así hasta el infinito y más allá.

### Conclusiones

Para crear una constante de estado y que React renderice el componente cada vez que este dato cambie tenemos que hacer 3 cosas:

* Importar `useState` en las primeras líneas del fichero con `import { useState } from 'react'`.
* Crear la constante, la función para modificar esta constante y asignar el valor inicial con `const [name, setName] = useState('')`;
* La función modificadora tiene que empezar siempre por `setLoQueSea`.
* Podemos usar y pintar la constante del estado donde queramos.
* Para modificar la constante tenemos que usar la función manejadora con `setName('Mi nuevo valor')`.


# 3.2.4 Estado y eventos

### Estado y eventos en React

En esta mini lección aprenderemos cómo combinar lo que hemos aprendido en las dos anteriores. El estado y los eventos no tienen sentido por separado, así que los vamos a unir.

> **Nota:** esta mini lección es la más importante de hoy.

### Estado y eventos trabajando mano a mano

Veamos dos ejemplos explicados. Te recomendamos que copies el código de estos ejemplos en un proyecto de React y trastees para ver cómo funcionan.

#### Ejemplo de formulario y visualización

En este [ejemplo de Codepen](https://ln.run/MjhND) vamos a pedir a la usuaria que escriba su email. Cada vez que la usuaria escriba una letra, se lo vamos a mostrar en formato texto y en formato link, como vemos en la imagen:

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-a1899797f918d90c06e160c2476db864091d8f6f%2Freact_ejercicio_generador_de_email.jpg?alt=media)

#### Ejemplo: la calculadora

[En este otro ejemplo](https://ln.run/RyEWU) programamos una calculadora que suma dos números como en la imagen:

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-0bd5b2e96811d12f878caa69757adfcb44449ed9%2Freact_ejercicio_calculadora.jpg?alt=media)

### ¿Cómo funciona React?

Estos son los pasos que sigue React en el ejercicio de la calculadora:

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-0ec804e912e169b2f4d264e4b844d399f4013196%2Freact_ejercicio_calculadora_diagrama_de_flujo.png?alt=media)

Como ves hay 3 flujos. El primero es el **inicial** que se ejecuta cuando se arranca la página. **Los otros dos flujos se ejecutan cuando la usuaria cambia uno de los dos inputs**.

Lo interesante es lo que hace React cuando la usuaria cambia uno de los inputs. En el diagrama vemos que está dividido en dos fases. Vamos a entenderlas.

#### Fase 1: escuchar evento y cambiar datos

1. La usuaria escribe en el `numberA` (o el `numberB`).
   1. Se ejecuta la función manejadora del evento.
   2. En ella guardamos en el estado el nuevo valor del `numberA`.

**Aquí nuestra única preocupación como programadoras debería ser guardar el dato en el estado de la forma correcta.**

Por ejemplo, el dato `ev.target.value` siempre es un string. Debemos decidir si lo guardamos en string o hacemos un `parseInt` antes de guardarlo. Esto es algo que tú debes decidir en cada proyecto.

#### Fase 2: React re-ejecuta la función App entera

Si te fijas en el diagrama, **los tres cuadros grises inferiores son iguales**, hacen lo mismo: **renderizar el componente entero**.

> **Nota:** recuerda que el valor inicial de `useState('')` solo lo utiliza React en el primer renderizado, no en los siguientes.

**Como programadora te tienes que preocupar de que la función App retorne el HTML correcto en función de los datos que haya en ese momento en tu estado.**

Te tiene que dar igual:

* Si es el primer renderizado, el segundo, el tercero...
* Si los datos son 0 porque es la primera vez que se ejecuta la función App o porque la usuaria ha escrito 0 en los dos campos.
* Si la usuaria ha modificado primero el `numberA` y luego el `numberB` o al revés.

**Insistimos en que lo único que te debe importar es retornar el HTML correspondiente a los datos que haya en tu estado.**

De aquí viene la palabra estado. Hace referencia al estado o situación o momento actual de mi aplicación, sin importar cómo hemos llegado a esta situación.

### ¿Qué datos guardamos en el estado?

Los datos que debemos guardar en el estado son:

* Los datos que recibimos de un servidor con un `fetch`. Más adelante veremos cómo.
* Los datos que se producen tras una acción de la usuaria, como escribir en un input.

No debemos guardar en el estado los datos que podemos calcular al vuelo. En el ejemplo de la calculadora la constante `total` la podemos calcular cada vez que se ejecuta la función App, es decir, cada vez que se renderiza el componente.

### Conclusiones

Los eventos y el estado de React funcionan muy bien juntos.

Cuando programes debes dividir tu proceso mental en dos fases:

1. Escuchar el evento y modificar los datos del estado de React.
2. Retornar el código HTML que quieras en función de los valores actuales que haya en el estado, independientemente de cómo hayan llegado esos valores al estado.

### Ejercicios

#### 1. El contador

Vamos a crear un contador incremental. Para ello necesitamos combinar lo que hemos aprendido sobre el estado y los eventos de React. Sigue los siguientes pasos:

1. Crea un nuevo proyecto a partir de tu React Starter Kit.
2. Añade el texto: **Contador: 0**.
3. Añade un botón a tu página que al pulsarlo incremente el valor del texto para que ponga **Contador: 1**.
4. Añade otra funcionalidad que quieras como por ejemplo:
   * Un botón para reducir el contador.
   * Un botón para resetear el contador.

¿Cómo vas a guardar el valor actual del contador en el estado: como un string o un number? Se puede hacer de las dos formas, así que te recomendamos que inicies un apasionado debate con tu compañera de pair sobre qué ventajas y desventajas tiene guardarlo como string *vs.* number.

#### 2. Dark mode

Ahora vamos a programar la típica funcionalidad del dark mode. Para ello:

1. Crea un proyecto con los siguientes contenidos:
   * Un **botón** con el texto "Des/activar el dark mode".
   * Un **párrafo** con el texto "Tienes activado el dark mode".
   * Un texto cualquiera de relleno con lorem ipsum.
2. Añade la funcionalidad para que toda la página funcione correctamente. Cada vez que la usuaria pulse en el botón "Des/activar el dark mode" debes:
   * Invertir el valor de una constante del estado de React.
   * Repintar la página añadiendo una clase CSS en el `<div />` principal del componente:
     * Añade estilos en tu CSS/Sass que cambien los colores de la página.
     * Si quieres puedes utilizar los estilos [`filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert) para invertir los colores de la página.
   * Repintar el párrafo "Tienes activado el dark mode" para que des / aparezca:
     * Crea una función que se llame `renderDarkModeText()`.
     * Esta función debe comprobar el valor del estado de React.
     * Esta función debe retornar un párrafo en JSX si el dark mode está activo.
     * Esta función debe retornar un `null` si el dark mode no está activo.
     * Debes llamar a esta función desde el retorno de tu componente.

#### 3. El menú de hamburguesa

En este ejercicio vamos a programar el típico menú de hamburguesa que se despliega desde la izquierda de la página.

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-8673daf4e99b35302eaf17442b57fd547987a166%2Freact_ejercicio_menu_hamburguesa.gif?alt=media)

Para ello necesitaremos:

1. Crea un nuevo ejercicio desde tu React Starter Kit.
2. Empieza por crear el HTML dentro de tu componente `App`. Debemos añadir:
   * Un icono que al pulsarlo abra el menú.
   * Un contenedor del menú.
   * Un icono que al pulsarlo cierre el menú. Este icono lo meteremos dentro del contenedor del menú.
3. A continuación debemos crear los estilos que nos permitan que, añadiendo y quitando una clase al contenedor del menú, este aparezca y desaparezca.
4. Por último tenemos que gestionar el estado del menú con React. Para ello:
   * Crearemos un estado para guardar si el menú está abierto o cerrado. ¿Qué tipo de dato crees que debe ser?
   * Crear una función manejadora que cada vez que se ejecute invierta el valor del estado.
   * Añadir esta única función manejadora a los dos iconos.

Como ves, aquí estamos trabajando con contenidos (HTML), estilos (CSS o Sass) y funcionalidad (React y JS). Mientras programamos este menú puede haber varios fallos. Para saber dónde está fallando debes inspeccionar el HTML generado con DevTools para saber si los fallos son de HTML o de estilos.


# 3.2.5 Depurar React

### Depurando React

Una vez que hemos empezado a trabajar con JS dentro de React es el momento perfecto para aprender las herramientas de depuración.

> **Nota:** esta mini lección es importante pero no urgente. Cuanto antes aprendas a depurar, antes le sacarás partido.

### Console y debugger en React

Recordemos que React es JS, por lo que podemos usar nuestro amado `console.log` y nuestro *crush* `debugger;`.

#### ¿Dónde podemos usar console y debugger?

Pues en cualquier sitio donde también lo usaríamos en JS. Es decir, siempre antes o después de una sentencia o una expresión de JS.

Por ejemplo, si usamos un `if`:

```js
// Aquí sí
if (userName === '' /* Aquí no */) {
  // Aquí sí
} else {
  // Aquí sí
}
// Aquí sí
```

Por ejemplo si usamos un estado podemos:

```js
// Fichero src/components/App.jsx
const App = () => {
  const [userName, setUserName] = useState('');
  debugger;
  console.log(userName); // esto muestra en consola el valor actual del estado
  console.log(setUserName); // esto muestra en consola una función, cosa que no nos vale de mucho

  return <h1>Hola {userName}</h1>;
};
```

Por cierto, has aprendido el `console.log()` pero, ¿sabes que `console` tiene [muchas más opciones](https://developer.mozilla.org/es/docs/Web/API/Console#m%C3%A9todos)?

#### ¿Dónde no podemos usar console y debugger?

Dentro del retorno de un componente de React **no podemos usarlos** porque el retorno es una única expresión y no se puede dividir en partes más pequeñas.

### Extensión React DevTools

El equipo de React ha creado **una extensión de Chrome para facilitarnos la vida cuando estamos programando**. Sigue los siguientes pasos:

1. Instala en tu Chrome la [extensión React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es).
2. Arranca un proyecto de React.
3. Abre tu DevTools.
4. **Si la web está hecha con React, aparecerá la pestaña `Components`.**
5. Al pinchar en el componente App podremos ver los datos que tenemos en el estado en este momento.
   * Si la usuaria cambia el valor de input y nosotras cambiamos el valor del estado, podemos ver el valor actual que hemos guardado en el estado.
   * Si hay varios estados aquí aparecerán todos.

![](https://github.com/Adalab/pw-materiales-del-curso/blob/master/modulo_3/3-2-estado/assets/images/react_devtools_components.png)

**Happy debugging ;)**

### Conclusiones

* React es JavaScript. Por ello podemos usar `console` y `debugger` en cualquier línea que nos permita JavaScript.
* La [extensión React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es) nos permite depurar fácilmente una aplicación.
* Depurar es una herramienta básica de programación.

### Ejercicios

#### 1. Depura tu código

Arranca cualquiera de los ejercicios que has hecho hoy y prueba:

* Qué valores aparecen en DevTools > Componentes > App > State.
* Muestra en la consola los valores del estado.
* Añade un `debugger` dentro de las funciones manejadoras de eventos.
* Añade un `debugger` justo antes del retorno del componente.
