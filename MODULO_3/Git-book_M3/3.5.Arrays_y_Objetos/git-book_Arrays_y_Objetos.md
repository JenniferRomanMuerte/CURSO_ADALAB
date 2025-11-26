# 3.5 Arrays y objetos

Hoy aprenderemos todo lo necesario para trabajar con arrays y objetos en React con el objetivo de saber pintarlos y gestionarlos a través del estado.

Hoy aprenderás a:

* Pintar arrays.
* Modificar arrays del estado.
* Buscar y filtrar arrays.
* Trabajar con objetos.


# 3.5.1 Arrays

### Pintar arrays en React

En esta mini lección aprenderemos lo fácil que es pintar listados en React.

> **Nota:** Esta mini lección es importante pero sencilla.

### ¿Cómo trabaja React con los arrays?

{% embed url="<https://www.youtube.com/watch?v=a8exGqn85iY>" %}

El código de este vídeo es [el siguiente](https://ln.run/Jq2Aq).

### Pintar listados con un map

Ahora que ya sabemos que lo que necesita React para pintar un listado es un array de etiquetas HTML, veamos **la mejor forma de programarlo**. Vamos a utilizar el [método funcional de array map](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

{% embed url="<https://www.youtube.com/watch?v=kaQmEgpic50>" %}

El código del este vídeo es [el siguiente](https://ln.run/BnO8k).

Debemos saber que dentro de las etiquetas que devuelve **map podemos meter todas las etiquetas HTML que queramos** con los atributos que queramos, como [en este ejemplo](https://ln.run/eZ50m).

Si te das cuenta, **lo que retorna el map es código JSX normal y corriente**, como el que hemos utilizado en lecciones anteriores. Incluso podríamos poner un `if` o lo que queramos antes del `return`. En definitiva, podemos usar todo lo aprendido hasta ahora en este módulo.

### Pintar un array de objetos

Muy a menudo el array que vamos a pintar va a ser un array de objetos del tipo:

```js
const adalabers = [
  { id: "8341", name: "María" },
  { id: "2676", name: "Lucía" },
  { id: "1004", name: "Sofía" },
];
```

Para pintar este listado usamos el mismo razonamiento que hemos aprendido, pero usando los objetos del array. Mira [este ejemplo](https://ln.run/pfIfa).

### La propiedad especial key

Si ejecutas cualquiera de los ejemplos anteriores en uno de tus proyectos de React verás que en DevTools > Console aparece el error `index.js:1 Warning: Each child in a list should have a unique "key" prop.` El propio error nos dice [dónde encontrar la solución](https://es.reactjs.org/docs/lists-and-keys.html#keys). Vamos a explicar qué está pasando:

{% embed url="<https://www.youtube.com/watch?v=5kPR85x4z2w>" %}

Como hemos visto en el vídeo, siempre que pintamos listados con React:

* Debemos poner el atributo especial `key` **en la primera etiqueta que retornamos en el map** para ayudar a React a optimizar el renderizado.
* El valor de `key` **debe ser único**.
* Si no lo ponemos o ponemos un valor que se repite, **nos aparecerá un error en DevTools > Console**.

#### Cuando no tenemos un id

Cuando dentro del array **no tenemos un id, usamos el index que nos da el map**. Este index es la posición de cada uno de los elementos del array, por ello **siempre es único**. Lo usamos [de esta manera](https://ln.run/P88KK).

#### Cuando sí tenemos un id

Cuando dentro del array **sí tenemos un id, lo usamos como valor de key**. Tenemos que suponer que este id será único, porque para eso es un id, para identificar de manera única los datos. [Mira este ejemplo](https://ln.run/Ja2vR).

Importante: si dentro del array tenemos un id, **preferimos usar este id antes que el index que nos da el map**.

### Conclusiones

Para pintar un array en React:

* Usamos el método funcional de array map.
* Metemos el map en una función para tener un código más limpio.
  * La función debe retornar el map.
  * El map debe retornar una o varias etiqueta HTML.
* **En la primera etiqueta** retornada en el map **debemos poner la propiedad key**, que debe tener un valor único.
  * Si los objetos del array tienen un id preferimos usar este id en la key.
  * Si los elementos del array ni tienen un id, usamos el index que obtenemos a partir de map.

### Ejercicios

#### 1. Lista de tareas con array de strings

Vamos a empezar una serie de ejercicios sobre una lista de tareas (o *To-Do list* en inglés). Para ello:

1. Crea un ejercicio nuevo a partir de tu React stater kit.
2. Añade en la primera línea de tu componente `App` el array:

   ```js
   const tasks = [
     "Comprar harina, jamón y pan rallado",
     "Hacer croquetas ricas",
     "Ir a la puerta de un gimnasio",
     "Comerme las croquetas mirando a la gente que entra en el gimnasio",
   ];
   ```
3. Renderiza un título que sea **"Mi lista de tareas"**.
4. Renderiza un `<ol />` con sus `<li />` pintando las 4 tareas del array.

> **Por cierto:** vamos a trabajar varios días sobre este ejercicio.

#### 2. Lista de tareas con array de objetos

Ahora vamos a mejorar el ejercicio anterior sustituyendo el array de strings por un array de objetos.

1. Sustituye el array de tareas por:

   ```js
   const tasks = [
     { task: "Comprar harina, jamón y pan rallado", completed: true },
     { task: "Hacer croquetas ricas", completed: true },
     { task: "Ir a la puerta de un gimnasio", completed: false },
     {
       task: "Comerme las croquetas mirando a la gente que entra en el gimnasio",
       completed: false,
     },
   ];
   ```
2. Refactoriza la función en la que pintas el listado de tareas para que se vuelva a pintar el listado correctamente.
3. Añade una clase CSS a cada `<li />` para que si la tarea está completada se pinte tachada.
   * Esta lógica la debes hacer dentro del `map`.
   * Para saber si lo estás haciendo bien debes inspeccionar el HTML generado por React y comprobar que solo los dos primeros `<li />` tienen la clase CSS.
   * Cuando el HTML generado sea correcto debes meter la correspondiente clase CSS en tus estilos para que los `<li />` se muestren bien.

#### 3. ¿Eres un bot o una persona?

Te habrá pasado muchas veces que cuando te registras en una página te aparece un componente para comprobar si eres una persona o un bot. Ese componente nos hace una pregunta que en teoría solo un ser humano podría responder bien. Vamos a programarlo:

1. Crea un nuevo ejercicio desde tu React Starter Kit.
2. Crea el HTML de la página con:
   * Un título que sea **"Selecciona los ingredientes de la tortilla de patatas"**.
   * Y un formulario con checkboxes para des / marcar estos ingredientes: - Macarrones - Patatas - Nueces - Huevos - Cebolla - Cerveza
3. A continuación programa la funcionalidad que haga que si la usuaria selecciona solo los ingredientes Patatas, Huevos y Cebolla aparezca un párrafo con el texto **"Eres una persona concebollista"**. En cualquier otro caso el texto de este párrafo debe ser **"Eres un robot sin paladar"**.

Cada vez que vayas a hacer un ejercicio lo primero que debes pensar es:

* Qué datos necesito guardar en el estado de React y cuáles no.
* Qué tipo de datos son.

Pista: en este caso los datos que debemos guardar en el estado son solo los datos que la usuaria puede cambiar.


# 3.5.2 Arrays y estado

### Arrays en el estado de React

En esta mini lección vamos a trabajar con arrays gestionados a través del estado de React.

> **Nota:** esta mini lección también es importante pero sencilla, porque solo tenemos que unir los conceptos que hemos aprendido hasta ahora del estado y de los arrays.

### Modificar arrays del estado

Como ya sabemos, en el estado metemos datos que pueden ser modificados por la usuaria. Así, cuando la usuaria los cambie, React detectará el cambio y volverá a renderizar la página con los datos actualizados.

En [el siguiente ejemplo](https://ln.run/Ajbtj) pintamos un listado de series. Cuando la usuaria pulse en una serie, la marcamos como favorita o no favorita.

Como ves, hemos seguido los mismos pasos que explicábamos en la lección de **Eventos y estado**:

1. **Escuchamos un evento:**
   * En este caso lo escuchamos en el `<li key={serie.id} id={serie.id} onClick={handleFavorite}>`: - Cuando la usuaria haga `click` se ejecutará la función manejadora `handleFavorite`.
   * Hemos añadido el `id={serie.id}` porque en la función manejadora necesitamos saber qué serie ha sido clickada.
2. Dentro de la función manejadora `handleFavorite` **modificamos el estado**:
   * Modificamos los datos del array.
   * Y guardamos el array modificado en el estado usando la función `setSeries`.
3. **React renderiza otra vez** la página:
   * Pintando las series desde la función `renderSeries` con un map.

Así vamos a trabajar siempre con las constantes del estado que sean de tipo array. Cuando tengas que hacer otro ejercicio tú código será prácticamente igual a este. **Lo único que cambiará será lo que hagas dentro de la función manejadora**, ya que aquí ponemos la funcionalidad propia de nuestra aplicación: añadir un elemento, borrarlo, marcarlo como favorito…

### Spread en JavaScript

La única línea de código que no habrás entendido es:

```jsx
setSeries([...series]);
```

Para entender qué estamos haciendo aquí necesitamos darte una explicación un poco compleja y larga. Una chapa en toda regla. Por eso preferimos explicártelo al final del módulo.

Lo que tienes que saber es que cuando quieras guardar un array en el estado de React debes:

* Modificar el array que ya tienes, en este caso `series`, añadiendo, borrando o modificando elementos.
* Y ejecutar la función para modificar el estado, en este caso `setSeries()`.
* Pasando como parámetro a esta función el código `[...series]`, es decir, corchete de apertura, 3 puntos, el nombre del array del estado y corchete de cierre.

Los tres puntos en JavaScrit se llaman [Spread](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

### Conclusiones

Para crear un array en el estado:

* Para iniciar el componente con un array vacío: `const [series, setSeries] = useState([]);`.
* Para iniciar el componente con un array relleno: `const [series, setSeries] = useState([{}, {}]);`.

Para modificar un array del estado:

* Modificamos el array en la función manejadora.
* Ejecutamos la función para modificar el estado con la sintaxis de Spread `setSeries([...series]);`.

### Ejercicios

#### 1. Lista de tareas con los datos en el estado

Partiendo del ejercicio anterior de la lista de tareas, vamos a programar su interacción: queremos que cuando la usuaria pulse en una tarea se des/marque como tachada. Para ello:

1. Mete el array de objetos de las tareas en el estado con:

   ```js
   const [tasks, setTasks] = useState([
     { task: "Comprar harina, jamón y pan rallado", completed: true },
     { task: "Hacer croquetas ricas", completed: true },
     { task: "Ir a la puerta de un gimnasio", completed: false },
     {
       task: "Comerme las croquetas mirando a la gente que entra en el gimnasio",
       completed: false,
     },
   ]);
   ```
2. Añade a cada `<li />` un evento de tipo click con una función manejadora.
3. Añade a cada `<li />` un `id` con un índice para identificar de manera única cada tarea.
4. Crea la función manejadora en la que:
   1. Obtener el índice de la tarea sobre la que se haya hecho clic.
   2. Invertir la propiedad `completed` de la tarea sobre la que se haya hecho clic.
   3. Guardar en el estado el array modificado.

Te recomendamos que uses `debugger` dentro de la función manejadora para facilitarte la vida.


updatedTasks[selectedIndex].completed =
    !updatedTasks[selectedIndex].completed;

  setTasks(updatedTasks);


  # 3.5.3 Filtrar arrays

### Filtrar y buscar arrays en React

En esta mini lección no aprenderemos a buscar datos en un array, porque eso ya lo sabemos. Tampoco a filtrar. Aquí vamos a aprender dónde y cómo hacerlo en React.

### ¿Dónde debemos filtrar un array del estado?

En el siguiente ejercicio mostramos un listado de series con estas funcionalidades:

* Al pulsar una serie se des / marca como favorita.
* Hay un input de texto para filtrar por el nombre de la serie.
* Hay un filtro de checkbox para mostrar solo las favoritas.

[Mira el siguiente ejemplo](https://ln.run/yPazO).

Como ves, los dos `filter` los hacemos en la función `renderSeries`, es decir, **en el momento de pintar o renderizar las series**.

En otras lecciones hemos comentado que **en el estado de React debemos guardar los datos que cambian**, en este caso el array de series, y también **los datos originales que la usuaria introduce desde un formulario**.

Este código va a ser igual en todas las aplicaciones de React en las que tengas que filtrar. Lo único que cambiará será el código que haya dentro de los filter, ya que esto depende de la funcionalidad propia de tu aplicación.

#### ¿Qué no debemos guardar en el estado?

Filtrar las series por nombre y favoritas es algo que podemos hacer al vuelo en el momento de renderizar. Por ello no debemos guardar en el estado las series ya filtradas.

Guardar en el estado las series filtradas es un error típico que cometemos cuando estamos aprendiendo React. Pero si guardamos las series filtradas en la constante de estado `series` estaremos borrando para siempre las series que no pasen el filtro. Cuando limpiemos los filtros ya no podremos recuperar todas las series originales.

Si creásemos una constante de estado llamada `filteredSeries` y guardásemos ahí las series filtradas, la página funcionaría bien, pero tendríamos que filtrar dentro de las funciones `handleSearchName` y `handleSearchIsFavorite`. Estaríamos duplicando el código y por ello duplicando los posibles errores.

### Conclusiones

El filtrado de arrays lo debemos hacer en el momento de renderizar.

En el estado de React solo debemos guardar los datos originales que no podamos calcular al vuelo, es decir, lo que no son el resultado de otros datos.

### Ejercicios

#### 1. Lista de tareas filtrando por nombre

Partiendo de la última versión del ejercicio de la lista de tareas debemos:

1. Añadir un input de texto.
2. Cuando la usuaria cambie el input se debe guardar su valor en el estado.
3. Al renderizar se deben mostrar las tareas filtradas por nombre.

#### 2. Lista de tareas con recuento de tareas

Partiendo del ejercicio anterior queremos mostrar un recuento de las tareas. Añade tres párrafos al componente que indiquen:

* Tareas totales: 4
* Tareas completadas: 3
* Tareas pendientes: 1

#### 3. Mis series favoritas

A continuación te proponemos un ejercicio un poco más complejo. No hace falta que lo hagas ahora, hazlo otro día cuando estés descansada.

En esta lección tenemos un ejemplo de cómo trabajar con las series favoritas pero con un solo array. Queremos practicar el trabajo con diferentes. Para ello:

1. Crea un ejercicio nuevo con tu React Starter Kit.
2. Copia el código del ejercicio de las series favoritas.
3. En este ejercicio ya hay un estado con las series que es:

   ```jsx
   const [series, setSeries] = useState([
     { id: "123", isFavorite: false, name: "Juego de tronos" },
     { id: "456", isFavorite: false, name: "Las chicas Gilmore" },
     { id: "678", isFavorite: false, name: "Gambita de Dama" },
   ]);
   ```

   Este array guarda las series y si son favoritas o no. Queremos cambiarlo para que la gestión de una serie favorita se haga en otro array. Para ello sustituye el código anterior por:

   ```jsx
   const [series, setSeries] = useState([
     { id: "123", name: "Juego de tronos" },
     { id: "456", name: "Las chicas Gilmore" },
     { id: "678", name: "Gambita de Dama" },
   ]);
   const [favorites, setFavorites] = useState([]);
   ```
4. Refactoriza el código del componente para que cuando la usuaria marque una serie como favorita no se modifique el array `series`. En vez de esto, debemos añadir y sacar del array `favorites` las series que la usuaria ha marcado como favoritas.

   ```jsx
   {id: '123', name: 'Juego de tronos'},
   {id: '456', name: 'Las chicas Gilmore'},
   {id: '678', name: 'Gambita de Dama'},
   ]);
   const [favorites, setFavorites] = useState([]);
   ```

# 3.5.4 Objetos

### Objetos en React

En esta mini lección aprenderemos cómo trabajar con los objetos dentro del estado de React.

### Cómo trabajar con los objetos en React

Trabajar con objetos en React es igual que trabajar con arrays. [Veamos el siguiente código](https://ln.run/eZMDV) en el que le pedimos a la usuaria que rellene sus datos postales para enviarle un pedido.

Como ves, al arrancar estamos declarando la constante de estado con un objeto vacío:

```jsx
const [shipping, setShipping] = useState({});
```

También podríamos haberla declarado con sus propiedades:

```jsx
const [shipping, setShipping] = useState({ address: "", city: "" });
```

En las funciones manejadoras hacemos lo de siempre, modificar el objeto y luego guardarlo en el estado con la función `setShipping()` para que React renderice la página.

Recuerdas que cuando guardamos un array en el estado usamos [spread](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax), por ejemplo `setSeries([...series])`. Aquí utilizamos lo mismo, pero como es un objeto usamos las llaves: `setShipping({ ...shipping });`.

### ¿Por qué usamos un objeto en el estado pudiendo usar varios estados?

Para programar el ejercicio anterior podríamos haber usado dos estados de tipo string en vez de un objeto con dos propiedades strings, como hacemos en [este ejemplo](https://ln.run/fIDb_).

Ambos ejemplos funcionan exactamente igual. ¿Cuál te gusta más? Pues usa ese.

No podemos decirte cuál es mejor de los dos porque depende mucho del tipo de proyecto, de la cantidad de datos que tengas que guardar en el estado, de si te gustan más los objetos o los strings...

En cada proyecto deberás decidir si usar [datos primitivos](https://developer.mozilla.org/es/docs/Glossary/Primitive) u objetos. Los datos susurran al oído de las buenas programadoras lo que quieren ser.

### Conclusiones

Para trabajar con objetos en el estado de React crea un objeto, vacío o relleno: `const [shipping, setShipping] = useState({});`

En las funciones manejadoras modifica el objeto del estado y guárdalo usando el **operador spread**:

```jsx
shipping.city = ev.target.value;
setShipping({ ...shipping });
```


# 3.5.5 Spread

### Spread en JavaScript

Igual que con el destructuring, a lo largo de este módulo hemos utilizado la sintaxis de spread haciendo un pequeño acto de fé. Ahora vamos a explicar cómo funciona y lo útil que es.

> **Nota:** esta mini lección tiene una importancia media y no es urgente. Si no la estudias ahora hazlo justo al acabar el curso.

### Spread es sintaxis

Con esta afirmación queremos explicar que todo lo que se puede hacer con spread se puede hacer también sin spread, pero con más líneas de código. No es una funcionalidad, es solo una manera de escribir menos.

La sintaxis para usar spread son los 3 puntos `...` delante del nombre de una variable o constante. Por ejemplo `...fish`.

### Spread es cosa de JavaScript

Efectivamente, esta sintaxis la podemos usar en cualquier fichero de JavaScript. Por ello también la podemos usar en cualquier fichero de React.

### ¿Qué es spread?

Spread se traduce como extender o expandir.

**Spread nos sirve para expandir un dato que contenga otros datos**, por ejemplo un array o un objeto. **Pero hay que expandirlo en un sitio que pueda ser "recogido" por otros datos.**

Por ejemplo, supongamos que hemos comprado dos peces en una tienda de mascotas. La dependienta nos ha dado los peces en una bolsita con agua. Nosotras tenemos que sacar a los peces de la bolsa y ponerlos en un buen sitio, como el mar o una pecera. Si los sacamos a otro lugar los probecitos peces morirán sin remedio.

Pues bien, la bolsa es un array, los peces son los elementos del array y la pecera es un sitio donde puedan vivir estos elementos, como otro array o una función.

### Spread entre arrays

Vamos a ver un ejemplo **erróneo**:

```jsx
const fishes = ['Nemo', 'Dory'];
...fishes;
```

En el código anterior estamos expandiendo los elementos del array pero no los estamos guardando en ningún otro sitio. Esto produce un error. Vamos a corregirlo:

```jsx
const fishes = ["Nemo", "Dory"];
const newFishes = [...fishes];
```

También estamos expandiendo los elementos del array pero los estamos guardando en un nuevo array llamado `newFishes`.

Este ejemplo no nos aporta mucho, veamos un ejemplo para añadir elementos a un array:

```jsx
const fishes = ["Nemo", "Dory"];
const newFishes = ["Mody Dick", ...fishes, "Willy", "Flipper"]; // ['Mody Dick', 'Nemo', 'Dory', 'Willy', 'Flipper']
```

Esta sintaxis es más cómoda que estar añadiendo elementos al final del array con [`array.push()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push) y añadiéndolos al principio con [`array.unshift()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

### Spread en funciones

Aquí vamos a ver un ejemplo que nos va a gustar más. A menudo queremos crear funciones con un número variable de parámetros, por ejemplo la función de sumatorio:

```js
const sum = (numberA, numberB) => {
  return numberA + numberB;
};
```

Pero si quiero hacer una función para sumar N números, es decir, declarar una función que no sabe cuántos argumentos va a recibir… ¿Cómo podría hacer? Veamos este ejemplo:

```js
const sum = (...numbers) => {
  let total = 0;
  for (const number of numbers) {
    total = total + number;
  }
  return total;
};

console.log(sum(1, 2, 3)); // 6
```

En la función anterior, **JavaScript mete todos los parámetros que recibe la función en el array** `numbers`. A partir de ahí ya podemos hacer lo que queramos.

También podemos combinar el spread de funciones con los parámetros normales:

```js
function sum(roundNumbers, ...numbers) {
  let total = 0;
  for (const number of numbers) {
    if (roundNumbers === true) {
      total = total + Math.round(number);
    } else {
      total = total + number;
    }
  }
  return total;
}

console.log(sum(true, 1.1, 2, 3)); // 6
console.log(sum(false, 1.1, 2, 3)); // 6.1
```

Esta función recibe un primer parámetro para indicar si antes de sumar hay que redondear el valor de los números. El primer parámetro recibido se mete en `roundNumber`, los restantes en `numbers`.

### Copia vs. referencia

En JavaScript los datos que son conjuntos de datos, como el array y los objetos, funcionan de una forma especial.

Lo explicaremos con el siguiente código:

```js
const namesA = ["María", "Lucía"];
const namesB = namesA;
namesA.push("Sofía");
console.log(namesA); // ['María', 'Lucía', 'Sofía']
console.log(namesB); // ['María', 'Lucía', 'Sofía']
```

Con la línea `const namesB = namesA;` **no estamos copiando el contenido** de `namesA` en `namesB`, **estamos referenciando** o copiando la referencia.

Tenemos que ver la referencia como una caja. `namesA` es una caja con unos elementos dentro. Si ejecutamos `const namesB = namesA;` estamos diciendo que la caja `namesB` es la misma caja que `namesA`. Si metemos un elemento nuevo en una de las cajas, también se mete en la otra porque son la misma.

Por ello cuando hacemos `const namesB = namesA;` no estamos copiando sino referenciando.

Y te preguntarás: madre mía, ¿para qué me están contando esto ahora? Por dos motivos:

* El primero, para que cuando manipules arrays y estos hagan cosas raras como cambiar su contenido cuando no lo esperas, es probable que otra referencia a tu array haya modificado el contenido.
* El segundo, porque **hemos estado usando spread y copia de arrays en el estado de React** sin saberlo.

> **Nota:** lo que acabamos de explicar se aplica exactamente igual a los objetos.

### Copia de arrays en el estado de React

Recordarás que cuando manejamos arrays en el estado de React hacemos algo como:

```jsx
// Parte del fichero src/components/App.js
import { useState } from "react";

const App = () => {
  // Creamos las series en el estado
  const [series, setSeries] = useState([
    { id: "123", isFavorite: false, name: "Juego de tronos" },
    { id: "456", isFavorite: false, name: "Las chicas Gilmore" },
    { id: "678", isFavorite: false, name: "Gambita de Dama" },
  ]);

  const handleFavorite = (ev) => {
    // Aquí manipulamos de alguna forma el array series
    series[0].isFavorite = true;

    // A continuación guardamos el array series en el estado de React
    setSeries([...series]);
  };

  return <div>...</div>;
};

export default App;
```

Para guardar las series en el estado, primero modificamos el array con:

```js
series[0].isFavorite = true;
```

Y luego lo guardamos en el estado.

```js
setSeries([...series]);
```

Vamos a explicar por qué lo hacemos así. Cuando guardamos un dato en el estado con la función `setSeries`, React ejecuta el código de esta función que es algo como:

```js
const setSeries = (newSeries) => {
  if (previousSeries === newSeries) {
    // Los datos previos y los nuevos son los mismos, y como nada ha cambiado, no haga nada
    // No me gusta perder el tiempo en hacer cosas que no valen para nada
  } else {
    // Los datos previos y los nuevos son diferentes, por ello React actualiza el estado y vuelve a renderizar
  }
};
```

Si desde el componente ejecutamos:

```js
setSeries(series);
```

React no hará nada, porque aunque hemos cambiado las series, solo hemos cambiado su contenido, no su referencia. **No hemos cambiado la caja de las series.** React solo comprueba si la referencia ha cambiado, no comprueba si el contenido ha cambiado.

Para que todo funcione bien tenemos que escribir:

```js
setSeries([...series]);
```

Lo que estamos haciendo con `...series` es hacer spread del array de series, es decir, expandir los elementos del array. Con los corchetes `[` `]` creamos un array nuevo. Con `[...series]` combinamos las dos acciones, es decir, metemos los elementos expandidos en un nuevo array. En definitiva estamos **creando un nuevo array** con los mismos elementos, creando una nueva caja **y copiando sus elementos dentro**.

### Spread en objetos

Lo que hemos explicado sobre el spread de arrays nos vale igual para los objetos. Por ejemplo, para copiar un objeto en otro diferente podemos usar `{ ...myObject }`:

```js
const personA = {
  name: "María",
  lastName: "García",
  age: 39,
};
const personB = personA;
const personC = { ...personA };
console.log(personA === personB); // true
console.log(personA === personC); // false
```

También podemos combinar spread de objetos con lo que ya sabíamos de objetos:

```js
const personA = {
  name: "María",
  lastName: "García",
  age: 39,
};
const personB = {
  ...personA,
  lastName: "Pérez",
};
console.log(personA); // { name: 'María', lastName: 'García', age: 39 }
console.log(personB); // { name: 'María', lastName: 'Pérez', age: 39 }
```

Lo que está haciendo JS por detrás es:

```js
const personB = {
  name: "María",
  lastName: "García",
  age: 39,
  lastName: "Pérez",
};
```

Como tenemos dos propiedades `lastName`, JS se queda con la última declarada.


# 3.5.6 GitHub Pages

### Publicar un proyecto de React en GitHub Pages

En esta mini lección aprenderemos a publicar un proyecto de React con Vite que ya tengamos creado.

> **Nota:** esta mini lección es importante pero no urgente. Si quieres la puedes leer cuando tengas que subir tu primer proyecto a GitHub Pages.

### Versión de desarrollo VS versión de producción

Cuando arrancamos un proyecto de React **con `npm run dev` estamos arrancando la versión de desarrollo**. Se llama así porque aún lo estamos desarrollando.

Cuando terminamos el proyecto y queremos publicarlo para que las usuarias de todo el mundo lo usen tenemos que crear **la versión de producción.** Esta **es una versión del código optimizada**, comprimida para que pese menos y se descargue más rápidamente.

### Crear la versión de producción de un proyecto de React con Vite

Para crear la versión de producción de un proyecto de React vamos a usar una módulo de npm llamado `gh-pages` que ***permite automatizar la publicación de tu web en un rama llamada gh-pages*** :

1. Instalar el módulo **gh-pages**

   ```
   npm i gh-pages -D
   ```
2. Ir al fichero de configuración de vite `vite.config.js` , se encuentra en la raíz de tu proyecto, y define la propiedad base con el nombre de tu repositorio, te dejo aquí el detalle de la documentación [Vite GitHub Pages](https://vitejs.dev/guide/static-deploy.html#github-pages).

   ```js
   export default defineConfig({
     plugins: [react()],
     base: "/nombre-repo/",
   });
   ```
3. Añade al `package.json` la línea `"deploy": "gh-pages -d dist"` dentro de las llaves de tus scripts. Al ejecutar `npm run lo-que-sea`, **npm** busca en el `package.json` el script llamado `lo-que-sea` y lo ejecuta en la terminal. Te ponemos un ejemplo de como debe quedar:

   ```json
   "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist"
   }
   ```
4. Ejecuta `npm run build`. Esto nos genera la carpeta `dist` en la raíz del proyecto con los ficheros optimizados.

   ```
      npm run build
   ```
5. Ejecuta `npm run deploy`. Esto nos genera la rama `gh-pages` en el repositorio. Con los ficheros optimizados para ser publicados

   ```
      npm run deploy
   ```
6. Entra en tu repo y configura GitHub Pages:
   1. Entra en las **Settings**.
   2. Entra en **Pages**, en el menú de la izquierda.
   3. Elige la rama de tu repo: `gh-pages` .
   4. Elige la carpeta `/root`.
   5. Y guarda.

Esperar :) y listo

### Ejercicios

#### 1. Publicando en GitHub Pages

Este ejercicio es sencillo. Elige cualquier ejercicio que hayas hecho y publicalo en un repo con GitHub Pages.

Y ya estaría.
