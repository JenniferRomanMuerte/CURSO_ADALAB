# 2.2.1 Eventos

Ya hemos aprendido a modificar cosas en nuestra página web mediante JavaScript: cambiar contenidos, estilos, etc. Pero hasta ahora nuestro script (código JavaScript) se ejecutaba al cargar la página. En esta sesión vamos a aprender a hacer nuestra **web interactiva**, es decir, que haya modificaciones también de contenidos o estilos pero en respuesta a la interacción de la usuaria. La forma de modelar esa interacción de la usuaria en la web es mediante *eventos*. Un evento representa una interacción, que normalmente es de la usuaria, tras la cual podemos realizar una acción. Vamos a ver algunos ejemplos de acciones que implican eventos:

* mostrar una alerta cuando la usuaria hace click en un botón
* cambiar el tamaño de una cabecera fija cuando la usuaria llega a un punto de scroll
* abrir una sección oculta de un formulario cuando hago click sobre un botón
* cerrar una ventana modal cuando termina un temporizador de 15 segundos (aquí no hay acción de la usuaria)
* deshabilitar algunos campos de un formulario, cuando la usuaria selecciona una opción de un select
* enviar una petición al servidor para pedir los datos de los artículos que coinciden con la búsqueda, cuando la usuaria pincha en el botón de buscar en Amazon. Y cuando los datos del servidor llegan al navegador, pintarlos en la página

Es importante entender que nosotros no creamos eventos desde JavaScript sino que un evento se genera pero desde JavaScript podemos saber que ha sucedido. Ejemplos de eventos:

* click en un botón
* scroll en la página
* un cambio en el contenido de un input
* expira un temporizador
* llegan los datos del servidor

Lo que podemos hacer desde JavaScript es escuchar y responder a estos eventos. ¿Cómo? Creando el código que se va a ejecutar cuando el evento sucede.

Vamos a entender cómo actuamos en JavaScript con los ejemplos anteriores:

* cuando la usuaria hace click en el botón *más info*, ejecutamos un código que muestra una información que estaba escondida
* cuando el usuario hace scroll en la página, ejecutamos el código que comprueba si la posición de la pantalla es mayor que *x* y en caso afirmativo aplica una clase CSS a la cabecera


# 2.2.2 Escuchando eventos

### Escuchando eventos desde JavaScript

Escuchar un evento es decirle al navegador: vigila un determinado elemento de HTML, y cuando alguien haga `click` sobre él, ejecuta este código que he preparado. Técnicamente, registramos en el navegador un `listener` sobre un elemento para que ejecute un código cuando el evento suceda.

Vamos a ver el ejemplo de mostrar una alerta pulsando un botón.

Dado este HTML:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Ejemplo de alerta</title>
  </head>
  <body>
    <button type="button" name="button" class="alert">Alerta</button>
    <script type="text/javascript" src="js/index.js"></script>
  </body>
</html>
```

Para empezar, tendremos que recoger de HTML el elemento sobre el que queremos escuchar los eventos. Para ello, usaremos nuestro ya habitual `querySelector`.

```js
const button = document.querySelector(".alert");
```

A continuación, vamos a usar el método `addEventListener` de los elementos de HTML para escuchar eventos. Le pasaremos 2 valores: el tipo de evento a escuchar y el código a ejecutarse cuando suceda el evento (ese código se lo pasaremos con un formato un tanto especial):

```js
// elemento de HTML
const button = document.querySelector(".alert");

// listener sobre el elemento, con tipo de evento y el código a ejecutarse
button.addEventListener("click", () => {
  console.log("Alerta"); //código a ejecutarse
});
```

[Aquí podéis jugar con el ejemplo en codepen](https://codepen.io/adalab/pen/RjvLXe?editors=1010).

De esta forma, cuando hagamos click sobre el botón se ejecutará se mostrará por consola un mensaje. Es importante que os fijéis en algunos detalles:

* la función `addEventListener` la registramos sobre `button` que es un elemento de HTML (en este caso un botón)
* el primer argumento que le pasamos a `addEventListener` es un texto con el nombre del evento, en este caso `click`
* el segundo argumento que le pasamos a `addEventListener` es el código que queremos que se ejecute.

> Es muy importante entender que el código sólo se ejecutará cuando suceda el evento. Si el evento nunca sucede, nunca se ejecutará. Nosotras nunca ejecutamos ese código: es el navegador quien lo ejecuta cuando sucede el evento.

> Vamos a detenernos un momento aquí: **el segundo argumento es una función arrow**. Este concepto de funciones lo veremos en próximas lecciones.

Aparte del evento click, podéis ver [el listado completo de eventos que podemos escuchar en MDN](https://developer.mozilla.org/en-US/docs/Web/Events). Aquí vamos a listar algunos de los más usados:

* Eventos de ratón
  * `click`: botón izquierdo del ratón
  * `mouseover`: pasar el ratón sobre un elemento
  * `mouseout`: sacar el ratón de un elemento
* Eventos de teclado
  * `keydown`: pulsar una tecla
  * `keyup`: soltar una tecla
* Sobre elementos
  * `focus`: poner el foco (seleccionar) sobre un elemento, por ejemplo un input
  * `blur`: quitar el foco de un elemento
  * `change`: al cambiar el contenido de un input (hay que quitar el foco para que se considere un cambio) o de un select
* Formularios
  * `submit`: pulsar el botón submit del formulario
  * `reset`: pulsar el botón reset del formulario
* De la ventana
  * `resize`: se ha cambiado el tamaño de la ventana
  * `scroll`: se ha hecho scroll en la ventana o un elemento

### Ejercicios

**1. ¿Cómo te llamas?**

Crea una página HTML con un input de tipo texto para introducir tu nombre y un botón. Al pinchar sobre el botón, poner en un `<span>` de la página el mensaje 'Hola' más el nombre que aparece en el input de texto.

![Resultado Visual](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-0f7750092cfeafc908347a85f5739722bda036c9%2Fmodulo-2-leccion-04-02-exercise-02.gif?alt=media)

> **Nota**: La etiqueta `input` no tiene apertura y cierre, por lo tanto técnicamente no tiene contenido. Si para leer y modificar el contenido de una etiqueta con apertura y cierre utilizábamos `innerHTML`, en el caso de los inputs utilizaremos `value`.

**2. Cambia el estilo de un botón**

Crea una página HTML con un botón. El objetivo es cambiar el diseño del botón al darle clic, por ejemplo que cambie el color de fondo. Haz que cada vez que la usuaria pulse el botón:

* añade la clase de css que cambia el estilo del botón si no la tiene
* quita la clase de css que cambia el estilo del botón si la tiene

> **Nota**: para facilitar añadir y quitar clases de CSS, os recomendamos usar `classList.toggle`.

![Resultado Visual](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-a85afc2c1929ba3288d9c70b4e01fcff393477db%2Fmodulo-2-leccion-04-02-exercise-03.gif?alt=media)

**3. Dame ipsum**

Crea una página HTML con un párrafo con `lorem ipsum`. Al dar click sobre el párrafo, añade un nuevo párrafo a la página con `lorem ipsum`.

![Resultado Visual](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-efd369d67d725095a6760ebcf06e079144f4cdc1%2Fmodulo-2-leccion-04-02-exercise-04.gif?alt=media)


# 2.2.3 Información de eventos

### Información sobre el evento

Como hemos visto, cuando registramos un listener para escuchar un evento, es el navegador quien ejecuta el código especificado. Al ejecutarse, nos envía información acerca del evento dentro de un objeto que se suele denominar `event`.

> Aún no hemos visto los objetos, pero ahora mismo basta decir que son como una variable con muchas variables dentro.

```js
const buttonElement = document.querySelector('.button');

buttonElement.addEventListener('click', (event) => {
  console.log(event);
});
```

> Recursos Externos: [Introduction to event listeners](https://www.youtube.com/watch?v=EaRrmOtPYTM\&list=PLyuRouwmQCjnEupVi5lpP6VrLg-eO-Zcp\&index=1)

Vamos a ver alguna de la información útil que contiene:

#### event.key

En los eventos de teclado podemos [consultar la propiedad `key`](https://keycode.info/) para saber qué tecla se ha pulsado.

```js
const inputElement = document.querySelector(".input");

inputElement.addEventListener("keyup", (event)=>{
  console.log(event.key);
});
```

La variable `event.key` tomará valores de texto como: 'a', 'A', '1', 'Enter' o 'Shift' (hay muchos más, uno por cada tecla).

#### event.currentTarget

`event.currentTarget` contiene el **elemento sobre el que pusimos el addEventListener**. Es decir, al que asociamos el evento.

```js
const buttonElement = document.querySelector(".button");

buttonElement.addEventListener("click", (event)=>{
  console.log(event.currentTarget);
});
```

Prueba el ejemplo de código anterior y observa en la consola el valor de `event.currentTarget`. Contiene exactamente el mismo elemento que la constante `buttonElement`, a la que le pusimos el listener.

`event.currentTarget` es muy útil cuando queremos que se ejecute el mismo código para varios elementos. Por ejemplo, pensemos en un listado en el cual al pinchar sobre un elemento este cambia de estilo indicando que ha sido seleccionado.

Vamos a verlo con un ejemplo:

```html
<ul class="fruits">
  <li class="fruit fruit-strawberry">Fresa</li>
  <li class="fruit fruit-banana">Plátano</li>
  <li class="fruit fruit-kiwi">Kiwi</li>
</ul>
```

```css
.fruit {
  padding: 6px;
  cursor: pointer;
  border-bottom: 3px solid #b9b8ba; /* grey */
}
.fruit--selected {
  border-bottom: 3px solid #64dac4; /* green */
}
```

```js
const strawberry = document.querySelector(".fruit-strawberry");
const banana = document.querySelector(".fruit-banana");
const kiwi = document.querySelector(".fruit-kiwi");

strawberry.addEventListener("click", ()=>{
  // Asignamos a una constante el elemento
  // sobre el que pusimos el `listener`
  // para trabajar cómodamente con él
  const selectedFruit = event.currentTarget;
  selectedFruit.classList.toggle("fruit--selected");
});
banana.addEventListener("click", ()=>{
  const selectedFruit = event.currentTarget;
  selectedFruit.classList.toggle("fruit--selected");
});
kiwi.addEventListener("click", ()=>{
  const selectedFruit = event.currentTarget;
  selectedFruit.classList.toggle("fruit--selected");
});
```

> Si se fijáis en cada evento de los elementos del listado se repite el mismo código, ¿estaría bien que nuestro código se repitan tantas líneas de código? ¿existe alguna manera de solucionar esto? La respuesta es si, lo veremos en próximas lecciones encapsulando el código en funciones.

> 📂 Recursos Externos: [currentTarget vs target](http://joequery.me/code/event-target-vs-event-currenttarget-30-seconds/)

### event.preventDefault()

Algunos elementos de HTML tienen comportamientos por defecto ante eventos, por ejemplo:

* al hacer click en un input de tipo checkbox este se marca/desmarca.
* al hacer click en un botón o un input de tipo submit que se encuentra en un formulario el navegador intenta enviar los datos al servidor.
* al hacer click en un enlace navegamos al mismo.

El método **`event.preventDefault()` nos permite prevenir** estos **comportamientos por defecto** desde JavaScript.

Uno de los casos más comunes es prevenir el envío de un formulario.

Aunque aún no hemos visto cómo enviar un formulario desde JavaScript, prevenir que lo envíe el navegador sería el primer paso para poder controlarlo, validando sus datos, enviándolos al servidor desde JavaScript y mostrando *feedback* a la usuaria sobre el proceso.

* [Ejemplo de botón submit en un formulario](https://codepen.io/adalab/pen/bjwJGv)

### Dejando de escuchar eventos

Puede llegar un punto en que queramos dejar de escuchar eventos sobre un elemento. Para eso usaremos la función `removeEventListener` pasándole los mismos argumentos que al registrarlo.

```js
const buttonElement = document.querySelector('.alert');
buttonElement.removeEventListener('click', () => {
  //..código
});
```

### Ejercicios

#### 1. **Información instantánea**

Crea una página con un input de texto y un párrafo vacío. Cada vez que la usuaria escriba una letra tenemos que recoger el valor del input al que le pusimos el listener y escribirlo en el párrafo.

> **Nota**: el objetivo es hacerlo utilizando `event.currentTarget`.

![Resultado Visual](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-26d73ecb1fface57f0c2752b2c199561d7d18101%2Fmodulo-2-leccion-04-03-exercise-01.gif?alt=media)

#### 2. **Estilo para un botón**

Crea una página con dos botones. Cada vez que la usuaria haga click en un botón debe cambiar el estilo solo del botón pulsado. Pero utiliza una única función manejadora para el evento `click` de los dos botones.

![Resultado Visual](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-66e7cd04aee06d4c39cec1616c3b8e1e89b2adf4%2Fmodulo-2-leccion-04-03-exercise-02.gif?alt=media)

#### 3. **¿Qué vemos esta noche?**

Vamos a partir de un HTML con un botón 'Empezar'. Al hacer click, vamos a pintar en el HTML un listado de películas que tenemos en JavaScript:

```js
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
```

Después vamos a escuchar eventos sobre cada elemento de la lista, de forma que al hacer click sobre el nombre de una película aparezca el nombre de esa película.

![Resultado Visual](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-98356af88dc75d8f799e222368097a591a876714%2Fmodulo-2-leccion-04-03-exercise-04-pelis.gif?alt=media)
