# 3.4.5 Children

### Componentes genéricos y props.children

En esta mini lección aprenderemos una prop especial llamada **children**. Es muy útil para hacer componentes genéricos como ventanas modales, popups, desplegables, etc.

> **Nota:** esta mini lección es poco importante. Léela cuando tengas que programar un desplegable o una ventana modal.

### ¿Necesito crear componentes genéricos?

![Ejemplo de ventana modal en Drive](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-7154a63d9920b2f66130b0fc8d0183720f1c63d5%2Freact_props_children_modal_window.png?alt=media)

Crear un componente genérico para una ventana modal parece fácil. A simple vista es crear un par de `<div>` y utilizar el CSS `position: absolute` o algo parecido para que se pinte ocupando toda la ventana del navegador. En total pueden ser un par de etiquetas más en HTML y unas 10 líneas de código CSS.

Cuando tenga que pintar un par de ventanas modales más, no me cuesta nada replicar este código.

¡¡¡Ojo cuidado ahí, eh!!! ¿Y si en vez de pintar un par de ventanas modales más tienes que pintar 30? ¿Y si además tienes que añadir la funcionalidad de que al pulsar en botón de cerrar se cierre, y al pulsar la tecla ESC se cierre? ¿Y si, y si, y si…? La complejidad y el diseño se complican, ¿verdad?. Ya no nos interesa copiar y pegar código de una ventana a otra. **Creo que nos interesa saber hacer componentes genéricos.**

**Un componente genérico es un componente que nos vale para reutilizarlo pasándole el contenido que debe pintar.**

En el caso de las ventanas modales, es **un componente que contiene el HTML, CSS y JS** de la ventana modal **y dentro puede tener diferentes contenidos**, como por ejemplo pedir datos a la usuaria con un formulario, o avisarle de que ha completado el proceso de compra.

Por ello, a la pregunta "¿necesito crear componentes genéricos?", la respuesta es: **Yeaahhh!!!**

React nos facilita una funcionalidad para crear componentes genéricos que son las `props.children`.

### ¿Qué son las props.children?

**Cuando al usar un componente de React, entre su etiqueta de apertura y de cierre metemos etiquetas HTML, React mete ese contenido en la prop especial `children` del componente.**

Se ve mejor con un ejemplo. En [este CodeSandbox](https://ln.run/gtStI) tenemos dos componentes: `App` y `ModalWindow`. Fíjate que entre las etiquetas de apertura y cierre del componente `ModalWindow` hemos metido un `h1`. Y React mete este `h1` en una prop especial llamada `children` del componente `ModalWindow`. Como `props.children` ahora contiene el `h1`, **podemos pintarlo donde queramos en el HTML retornado** por `ModalWindow`.

Estos dos componentes generan el HTML:

```html
<div>
  <h1>Jugando con ventanas modales</h1>
  <section class="modal-window">
    <p>Esto es una ventana modal</p>
    <h1>Contenido de una ventana modal</h1>
    <!-- React ha sustituido {props.children} por este h1 -->
  </section>
</div>
```

> **Nota:** una ventana modal es un componente complejo. En este ejemplo lo hemos simplificado al máximo para que se entienda fácilmente. Lo único que nos importa aquí es el HTML generado por React. Falta mucha funcionalidad y muchos estilos.

### Con props.children creamos componentes genéricos

Ampliando el ejemplo anterior podemos usar tantas veces como queramos el componente `ModalWindow` de la siguiente forma:

```jsx
// Fichero src/components/App.jsx

import ModalWindow from "./ModalWindow";

const App = () => {
  return (
    <div>
      <h1>Jugando con ventanas modales</h1>

      <ModalWindow>
        <h1>Contenido de una ventana modal</h1>
      </ModalWindow>

      <ModalWindow>
        <h2>Contenido de la segunda ventana modal</h2>
        <h3>Hola mundo</h3>
      </ModalWindow>
    </div>
  );
};

export default App;
```

Y este fichero genera el HTML:

```html
<div>
  <h1>Jugando con ventanas modales</h1>
  <section class="modal-window">
    <p>Esto es una ventana modal</p>
    <h1>Contenido de una ventana modal</h1>
  </section>
  <section class="modal-window">
    <p>Esto es una ventana modal</p>
    <h2>Contenido de la segunda ventana modal</h2>
    <h3>Hola mundo</h3>
  </section>
</div>
```

### ¿Qué otras cosas podemos pasar por props.children?

**Cualquier código JSX.** Por ejemplo:

Todo tipo de etiquetas HTML:

```jsx
// Parte del fichero src/components/App.js

<ModalWindow>
  <h1>Hola</h1>
  <h2>mundo</h2>
  <p>Esto es un <span>ejemplo</span>
</ModalWindow>
```

Otros componentes de React:

```jsx
// Parte del fichero src/components/App.js

<ModalWindow>
  <h1>Detalle del producto</h1>
  <Product name="Camiseta de React" />
</ModalWindow>
```

Texto plano:

```jsx
// Parte del fichero src/components/App.js

<ModalWindow>Lorem ipsum</ModalWindow>
```

### Props normales junto a prop children

**Todo lo que ya sabíamos de las props se puede combinar con la prop `children`.** En el siguiente ejemplo:

```jsx
// Parte del fichero src/components/App.js

<ModalWindow showCloseButton title="Detalle del producto">
  <Product name="Camiseta de React" />
</ModalWindow>
```

El componente `ModalWindow` recibirá por props un objeto del tipo:

```js
{
  showCloseButton: true, // para que aparezca el botón de cerrar la ventana modal
  title: 'Detalle del producto', // para pintarlo en alguna etiqueta dentro de ModalWindow
  children: <Product name="Camiseta de React" /> // para pintarlo donde queramos dentro de ModalWindow
}
```

> **Nota:** ahora solo faltaría maquetar esta funcionalidad claro.

### Jerarquía y responsabilidad de los componentes genéricos

Como ya sabemos, estamos generando un HTML a partir de dos componentes. Partiendo del siguiente código vamos a analizar la responsabilidad y la jerarquía de cada uno de los componentes:

```jsx
// Fichero src/components/App.jsx

import { useState } from "react";
import ModalWindow from "./ModalWindow";

const App = () => {
  const [email, setEmail] = useState("");

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };

  return (
    <div>
      <h1>Jugando con ventanas modales</h1>
      <ModalWindow>
        <form>
          <label htmlFor="email">Por favor, escribe tu email:</label>
          <input type="text" id="email" value={email} onChange={handleEmail} />
        </form>
      </ModalWindow>
      Tu email es: {email}.
    </div>
  );
};

export default App;
```

#### Responsabilidad

Todo lo relativo a la **ventana modal** en lo que se refiere a:

* **Código HTML generado y semántica:** contenedores de la ventana, `div` gris que aparece por detrás de la ventana...
* **Funcionalidad JS:** botones para cerrar la ventana, si la tecla ESC cierra o no la ventana...
* **Estilos:** que la capa gris de atrás ocupe toda la ventana del navegador, que aparezca centrada en cualquier media query...

Tiene que estar programado dentro del componente `ModalWindow` y es su responsabilidad que funcione bien. De esta manera este componente lo podemos reutilizar tantas veces como queramos.

Para saber si un componente genérico está bien hecho, piensa si te lo podrías llevar a otro proyecto y seguiría funcionando bien.

Por otro lado, todo lo relativo al **contenido que mostramos dentro de la ventana modal** en lo que se refiere a:

* **Código HTML generado y semántica:** que la semántica del formulario sea correcta.
* **Funcionalidad JS:** qué eventos escuchamos sobre los inputs.
* **Estilos:** estilos del formulario.

Tiene que estar dentro del **componente madre** de `ModalWindow` y es su responsabilidad que funcione bien. En este ejemplo es `App`.

#### Jerarquía de componentes

El HTML que genera el ejemplo anterior cuando la usuaria escribe `lucia@gmail.com` en el input es:

```html
<div>
  <h1>Jugando con ventanas modales</h1>
  <section class="modal-window">
    <p>Esto es una ventana modal</p>
    <form>
      <label for="email">Por favor, escribe tu email:</label>
      <input type="text" id="email" value="lucia@gmail.com" />
    </form>
  </section>
  Tu email es: lucia@gmail.com.
</div>
```

**La jerarquía del HTML generado es:**

* App con un `<div>` que dentro tiene un
  * ModalWindow con un `<section class="modal-window">` que dentro tiene un
    * Formulario con un `<form>`

**Pero la jerarquía de componentes es:**

* **App con un formulario** que dentro tiene un
  * ModalWindow

Puesto que el formulario pertenece a `App`, podemos usar en el input la constante del estado `email` y escuchar los cambios con la función manejadora `handleEmail`.

### Conclusiones

El código JSX que escribimos dentro de las etiquetas de apertura y cierre de un componente lo recibimos en `props.children` dentro de dicho componente.

### Ejercicios

#### 1. Crear un componente Tooltip

En este ejercicio queremos crear un componente Tooltip como el de la siguiente imagen. Un Tooltip son esas ventanitas que muestran ayuda cuando te posas sobre un elemento.

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-6bc7b147f4cebcd23d0e0e53d2711d8c77a9b7a0%2Freact_ejercicio_children_tooltip.gif?alt=media)

Queremos crear un componente `Tooltip` al que le pases el código HTML con la información de la ayuda desde el componente superior `App`. Es decir, el componente `App` contiene los textos de la ayuda y, para que sea reutilizable, el componente `Tooltip` tiene todo lo demás:

* El icono de la interrogación.
* El contenedor HTML que recubre la ayuda.
* La lógica que hace que el contenedor se muestre y oculte cuando el ratón se posa sobre la interrogación.

La forma más fácil de crear este componente es usando `props.children`. Para crearlo te damos el código del componente `App` y tú debes crear el código del componente `Tooltip`:

```jsx
// Fichero src/component/App.js
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      <h1>Practicando con tooltips y children</h1>

      <p>
        Blanditiis illo facilis incidunt numquam laborum, dolore quod
        consequuntur aliquam a!
      </p>
      <Tooltip>
        <h4>Este es el título de la ayuda</h4>
        <p>Y esta es la descripción de la ayuda.</p>
      </Tooltip>

      <p>
        Quam eligendi, ut rem eos, quae ab maxime ea quia repudiandae cumque?
        Ducimus iste amet beatae ipsa ab!
      </p>
      <Tooltip>
        <p>Esta ayuda no tiene título, solo descripción.</p>
      </Tooltip>
    </div>
  );
};

export default App;
```

Para conseguirlo te damos unas pistas:

1. La complejidad de este ejercicio está en encontrar la solución. Para ello tienes que pensar en el HTML y Sass que debes crear, es decir, cuáles son las etiquetas `Tooltip`.
2. Solo con HTML y Sass (usando el pseudoselector `:hover`) se puede conseguir, no necesitas nada más.
3. El icono con la interrogación no está en el componente `App`, por ello deberá estar en `Tooltip`.
4. La info que aparece dentro de los Tooltips sí está en `App`, pero quien decide cuándo se muestra es el componente `Tooltip`.

Te recomendamos seguir los siguientes pasos:

1. Crea el HTML y Sass del `Tooltip` para que cuando el ratón se pose sobre la interrogación se muestre la ayuda.
2. Después piensa tranquilamente en las propiedades CSS que conoces, como `position`, `transform`... y elige la que más te guste para maquetar y conseguir que la ayuda aparezca al lado del icono.
3. Cuando termines revisa que los estilos que corresponden al `Tooltip` estén en el fichero `./src/styles/Tooltip.scss` y el resto en `./src/styles/App.scss`.
