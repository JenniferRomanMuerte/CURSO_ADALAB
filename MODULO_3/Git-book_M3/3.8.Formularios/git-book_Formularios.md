# 3.8 Formularios

En la lección de hoy vamos a aprender todo lo necesario para trabajar con **formularios en React** y para publicar tu página en GitHub Pages.

Tu objetivo es entender a rasgos generales lo que explicamos en esta lección y seguir asentando lo aprendido en las anteriores.


# 3.8.1 Formularios

### Formularios en React

En esta mini lección aprenderemos cómo crear formularios en React.

### Crear formularios en React

Crear formularios en React, añadir eventos y guardar los valores del formulario en el estado es muy sencillo. Vamos a ver un ejemplo para cada tipo de input. Te recomendamos que copies los ejemplos en uno de tus proyectos de React para probar cómo funciona.

#### Pintar labels

Vamos a empezar por pintar las `labels`, ya que **tienen un truco**. Copia este componente en `src/components/App.js` de uno de tus proyectos de React y mira en DevTools > Console el error que muestra.

```jsx
// Fichero src/components/App.jsx
const App = () => {
  return (
    <div>
      <form>
        <label for="name">Escribe un nombre:</label>
        <input type="name" name="name" id="name" placeholder="María García" />
      </form>
    </div>
  );
};

export default App;
```

¿Eres capaz de cambiar este código para que el error no aparezca?

> **Nota:** React nos pinta los errores de nuestro código en la consola de DevTools. Cada vez que cambiamos un fichero de nuestro proyecto, React intenta refrescar la página, pero no refresca el navegador del todo, por lo que la consola no se limpia. Esto lo hace con el objetivo de ahorrar tiempo. Por ello, si quieres ver si has solucionado un error en la consola tienes que refrescar manualmente la página en tu navegador.

#### Gestionar input de texto, email, number...

Ahora vamos a ver cómo escuchar los cambios en un input de texto, guardar su valor en el estado y pintarlo.

Como vemos [en el ejemplo](https://ln.run/h7XRM), si queremos gestionar el valor de un input tenemos que hacer siempre lo mismo:

1. Crear la constante en el estado.
2. Crear una función manejadora de evento asociado al input.
   * Guardar en esta función manejadora el valor del input en el estado.
   * Como siempre el valor del input está en `ev.target.value`. También está en `ev.currentTarget.value`.
3. Usar la constante del estado para pintarla donde queramos.

Para otros inputs de tipo email, number, etc., el funcionamiento es exactamente igual.

#### Gestionar input de tipo select

Trabajar con select es igual que con un input de tipo texto, pero hay algunos detalles especiales que tienen que ver más con la usabilidad del formulario que con temas de React. [Aquí tienes un ejemplo](https://ln.run/LSLJv).

Los detalles especiales son:

* El select muestra por defecto la primera opción que tiene. En el ejemplo es`<option>S</option>`. Para que al arrancar la página haya coherencia entre la opción que está mostrando el select y el texto **"Tu talla de camiseta es: S"** tenemos que iniciar el estado de `size` con el string 'S'. Por eso hemos puesto la línea de código `const [size, setSize] = useState('S');`. Si no hacemos esto el select mostrará la opción S y la página pintará el texto **"Tu talla de camiseta es: "**.
* El evento se lo ponemos siempre a la etiqueta select, por ello hemos puesto `<select name="size" id="size" onChange={handleSize}>`. El `onChange` no debemos ponerlo en las etiquetas `<option>` porque en realidad estas nunca cambian, lo que cambia de valor es el `<select>`.

#### Gestionar input de tipo checkbox

Con los inputs de tipo checkbox nos pasa un poco lo mismo que con los select. El funcionamiento de React es exactamente igual, pero cambia un detalle.

En [este ejemplo](https://ln.run/tsqjz) vamos a ver la típica pregunta de las tiendas online en la que nos dan la opción de envolver para regalo el producto que estamos comprando:

Aquí estamos haciendo las mismas tres operaciones de siempre: **escuchar el evento, actualizar el estado dentro del evento y repintar**.

Lo especial de **los checkboxes es que cuando los marcamos o desmarcamos no cambian su valor**, es decir, su propiedad `value`. Por lo tanto para qué queremos gestionar un dato que nunca cambia.

Lo que **sí que cambia en los inputs de tipo checkbox es su propiedad `checked`**, que es un booleano: `true` si está marcado y `false` si no lo está. Por ese motivo debemos:

* Inicializar su estado con un booleano, el que consideremos: `const [giftWrap, setGiftWrap] = useState(false);`.
* Guardar en el estado la propiedad checked: `setGiftWrap(ev.target.checked);`.

Por cierto, en el código hemos puesto la línea `{giftWrap === true ? 'Sí' : 'No'}`. Estamos usando un operador ternario que en función del valor `giftWrap` pinta en el HTML un Sí o un No. Recordemos que dentro del HTML de React no podemos poner un `if` porque es una sentencia que no genera un valor, pero **un ternario es una expresión, es decir, un `if` especial que sí genera un valor**.

#### Gestionar input de tipo radio

Veamos el mismo ejemplo de las tallas de las camisetas de antes, pero en vez de usar un select, vamos a usar tres radios. [Aquí tienes el CodeSandbox](https://ln.run/EXIqP).

Al arrancar la página, ninguno de los radios está marcado por defecto, por eso al iniciar el estado usamos un string vacío: `const [size, setSize] = useState('');`. Si queremos marca uno por defecto, hay varias formas de hacerlo. La mejor forma la aprenderemos en la próxima mini lección.

#### Gestionar input de tipo file

En la documentación de React hay un gran [Hasta luego Maricarmen](https://gph.is/g/4bq1loZ), cuando explica cómo gestionar inputs de tipo file. Es decir, los inputs de tipo file son un poco complejos y React no los gestiona.

Para todas las cosas que React no puede o no sabe gestionar, nos ofrece una herramienta que nos ayuda un poco. La herramienta es otro hook llamado [`useRef`](https://es.reactjs.org/docs/hooks-reference.html#useref) y que explicaremos en el futuro.

### Gestionar el envío del formulario

Ya sabes que cuando le damos al botón de enviar de un formulario que no está gestionado por JS, el navegador se refresca o es redireccionado a otra URL (normalmente del tipo <http://midominio.com/mipagina?name=Maricarmen\\&email=maricarmen@gmail.com>).

Cuando programamos un formulario que sí tiene código JS y queremos evitar ese comportamiento por defecto, tenemos que ejecutar dentro del evento la instrucción `ev.preventDefault()`.

Pues bien, para evitar que el navegador gestione el envío del formulario y poder hacer nosotras lo que queramos, debemos usar el siguiente código:

```jsx
// Fichero src/components/App.jsx
const App = () => {
  const handleSubmit = (ev) => {
    // Aquí detenemos el envío del formulario
    ev.preventDefault();
    // Aquí enviamos los datos al servidor con un fetch o lo que sea
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Escribe un nombre:</label>
        <input type="name" name="name" id="name" placeholder="María García" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default App;
```

Es decir, ponemos un evento de tipo `submit` al formulario con el código `<form onSubmit={handleSubmit}>` y en la función manejadora de este evento ejecutamos `ev.preventDefault();`

### Evento onChange

Habrás visto que **en todos los eventos de formulario estamos usando el de tipo `onChange`**. Te estarás preguntando por qué no usamos un `onClick` para los select, checkbox y radios o un `onKeyUp` para los inputs de tipo texto.

Cuando una usuaria pulsa con el ratón en un select el navegador lanza varios eventos:

* `click` porque la usuaria ha utilizado el ratón.
* `change` si la usuaria ha seleccionado una opción diferente.

Pero seleccionar una opción de un select también se puede hacer con el teclado. La usuaria puede usar el tabulador del teclado para moverse entre los links e inputs de una página. Si se pone sobre un select y pulsa la tecla espacio, el select se despliega. A continuación puede usar las flechas del teclado para subir y bajar por las opciones. Si por último pulsa intro, seleccionará una opción. En ese caso el navegador lanza los eventos:

* `keyDown` cuando la usuaria pulsa el intro.
* `keyUp` cuando la usuaria levanta el dedo del intro.
* `change` si la usuaria ha elegido una opción diferente.

La conclusión es que el **único evento que siempre, siempre, siempre se lanza**, independientemente de si se usa el teclado, el ratón u otra cosa **es el evento `change`**.

Por ello siempre debemos usar `onChange` en React para escuchar eventos en etiquetas de un formulario.

Solo debemos usar otros eventos en situaciones especiales y si estamos muy seguras de lo que estamos haciendo.

### Conclusiones

Para enlazar una label con un input debemos usar el atributo `htmlFor` en vez del clásico `for`.

La gestión de formularios en React es sencilla. Debemos añadir el evento `onChange` a los inputs.

La mejor forma de evitar el envío del formulario es añadir el evento `onSubmit` al formulario.

### Ejercicios

#### 1. Traductor MIMIMI

¿No te ha pasado nunca que has dicho algo y se han burlado de vosotras con un MIMIMI?

* "Al final de esa línea te falta un punto y coma."
* "Il finil di isi linii ti filti in pinti y cimi."

Pues es hora de contraatacar y crear nuestro propio traductor MIMIMI con React. Debes:

1. Crear un nuevo ejercicio.
2. Añadir un párrafo.
3. Añadir un textarea. Cuando la usuaria escriba algo en este campo de texto debemos pintar en el párrafo el mismo texto pero traducido a MIMIMI.

> **Pista:** para realizar la traducción basta con buscar [una expresión regular (RegExp)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) y el método `replace` de las cadenas. Si buscas "javascript regex replace vowels" en Google va a ser fácil de encontrar.


# 3.8.2 Formularios controlados

### Formularios controlados en React

En esta mini lección seguiremos aprendiendo un poco más sobre cómo trabajar con los formularios en React y cómo tener el máximo control sobre ellos para que no se produzcan incoherencias en los datos y la usabilidad.

> **Nota:** esta mini lección es importante para evitar katakrokers en la página.

### ¡¡¡Qué descontrol de formularios!!!

Hasta ahora hemos aprendido cómo escuchar cambios en los inputs de un formulario y guardar sus valores en el estado de React para luego poder pintar esos datos en pantalla.

**Los ejercicios que hemos hecho hasta ahora funcionan bien** porque los datos que pintamos en pantalla **cambiaban desde un solo input**.

Pero a veces se produce un problema, un descontrol: **cuando los datos que guardamos en el estado se modifican desde dos o más acciones** de la usuaria el dato pintado cambia pero el valor del input se desfasa, se queda obsoleto.

### Ejemplo del contador

Si analizas [el siguiente código](https://ln.run/weGLf) verás que la constante de estado `counter` **se modifica desde dos funciones** manejadoras:

* `handleCounterInput` que se ejecuta cuando la usuaria cambia el input.
* `handleResetCounter` que se ejecuta cuando la usuaria pulsa en el botón de resetear.

En la siguiente imagen podemos ver la incoherencia en la usabilidad de este.

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-8d4810aa01ad10c4f91966efe94d0ddfdd1503c7%2Freact_ejercicio_counter_formularios_controlados.gif?alt=media)

Cuando el valor del contador se cambia desde el input, el contador y el input sí están sincronizados. Cuando la usuaria pulsa en el botón de resetear, el valor del contador se pone en 0, **pero el valor del input no cambia**. Esta es la incoherencia.

Y tiene sentido, ya que al pulsar el reset nadie avisa al input de que el valor del contador ahora es 0.

### Solución: controlar la propiedad value del input

La solución es tan simple como añadir una línea de código. Fíjate bien en [este ejemplo](https://ln.run/HkCJf) la línea que hemos añadido.

Al input le hemos añadido el atributo `value={counter}`.

Si pensamos en JS normal, lo que estaríamos haciendo es:

```js
const inputElement = document.querySelector("input");
inputElement.value = counter;
```

Como se muestra en el siguiente diagrama de flujo, cuando cambia el `counter`, sea desde donde sea, React renderiza otra vez todo el componente y todas las etiquetas que usan la constante `counter`.

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-9d7fa73f2fc88beccc56bf09f34d07b866042aac%2Freact_ejercicio_counter_diagrama.png?alt=media)

Tenemos que hacer esto con todos los inputs, o al menos con todos aquellos cuyo valor guardemos en el estado.

### ¿En qué otras ocasiones pasa?

Ya sabemos que esto ocurre cuando un valor del estado cambia desde varias acciones de la usuaria.

También pasa cuando al arrancar la página recuperamos los datos desde el `local storage`. Si guardásemos el dato del contador en el `local storage`, al refrescar la página querremos mostrar el último valor que tuvo el contador tanto en el input como en el texto de abajo.

Y también nos puede pasar cuando traemos datos desde un servidor con un `fetch`.

### Controlar inputs de tipo checkbox y radio

En la mini lección de React y los formularios y en el módulo de maquetación vimos que el atributo value de los checkboxes y los radios nunca cambia. Por ello, no nos interesa controlar este atributo. Lo que sí cambia es su propiedad `checked`, que si está activa es `true` y si está inactiva es `false`. Fíjate en [este ejemplo](https://ln.run/EK3bE).

En este ejercicio hemos añadido `checked={giftWrapper}` para controlar un input de tipo checkbox.

### La cesta de la compra de una tienda online

A continuación os mostramos un componente de una cesta de la compra de una tienda online con todos los tipos de inputs que se nos han ocurrido. También se des/habilita el botón de enviar si el formulario no está completamente rellenado.

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-b65273381e581a77287e48b7a1f52765ebf0e261%2Freact_ejercicio_cesta_de_la_compra.png?alt=media)

[Puedes verlo implementado aquí](https://ln.run/iCKxc). Presta especial atención a cómo estamos controlando los inputs de radio y checkbox.

### Conclusiones

Para controlar inputs de texto, number, email... y select debemos igualar su atributo `value` a la constante del estado de React:

```jsx
const [email, setEmail] = useState(''):

...

<input name="email" value={email} />
```

Para controlar inputs de radio y checkbox debemos igualar su atributo `checked` a la constante del estado de React, asegurando que sea de tipo booleano:

```jsx
const [paymentType, setPaymentType] = useState('');
const [legalTerms, setLegalTerms] = useState(false);

...

<input type="radio" value="cashOnDelivery" checked={paymentType === 'cashOnDelivery'} />
<input type="checkbox" name="legalTerms" checked={legalTerms} />
```

### Ejercicios

#### 1. Concebollistas controlados

Partiendo del ejercicio de bot vs persona concebollista vamos a controlar los inputs del componente.

1. Edita el ejercicio **"Eres un bot o una persona"**.
2. Añade un botón con el texto **"Marcar todos"** y otro con el texto **"Desmarcar todos"**. Cuando la usuaria pulse en uno de estos dos botones deben pasar dos cosas:
   * Los checkboxes deben des / activarse.
   * Se debe mostrar el texto que corresponda, **"Eres una persona concebollista"** o **"Eres un robot sin paladar"**.
3. Por supuesto, si la usuaria des / activa un solo checkbox la aplicación debe seguir funcionando bien.

#### 2. La calculadora

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-0bd5b2e96811d12f878caa69757adfcb44449ed9%2Freact_ejercicio_calculadora.jpg?alt=media)

Ya hemos visto cómo crear una calculadora básica como esta cuyo código es:

```jsx
// Fichero src/components/App.jsx
import { useState } from "react";

const App = () => {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);

  const handleNumberA = (ev) => {
    setNumberA(ev.target.value);
  };

  const handleNumberB = (ev) => {
    setNumberB(ev.target.value);
  };

  const total = parseInt(numberA) + parseInt(numberB);

  return (
    <div>
      <h1>La calculadora:</h1>
      <form>
        <label>
          Escribe un número:
          <input
            type="number"
            name="name"
            onChange={handleNumberA}
            value={numberA}
          />
        </label>
        <label>
          Escribe otro número:
          <input
            type="number"
            name="email"
            onChange={handleNumberB}
            value={numberB}
          />
        </label>
      </form>
      <p>
        La suma de <strong>{numberA}</strong> y <strong>{numberB}</strong> es
        <strong> {total}</strong>.
      </p>
    </div>
  );
};

export default App;
```

Partiendo de este código queremos mejorar su funcionalidad. Para ello:

1. Añade al principio del formulario un input select con las opciones: Sumar, Restar, Multiplicar y Dividir.
   * Cuando la usuaria elija una operación en este select debes guardar su valor en el estado de React.
   * También debes cambiar el retorno de esta función para que el último párrafo y el total sean coherentes con los datos de los inputs.
2. Añade un botón Reset que al pulsarlo:
   * Los inputs se pongan a 0.
   * El select se ponga con su primer valor que es Sumar.
