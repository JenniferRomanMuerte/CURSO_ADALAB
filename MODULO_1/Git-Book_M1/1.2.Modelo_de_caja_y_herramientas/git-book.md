# 1.2.1 Modelo de caja

En HTML cada etiqueta se representa visualmente como una caja. Lo podemos ver fácilmente añadiendo un borde a un elemento HTML y viendo cómo lo pinta el navegador, por ejemplo:

```html
<h1>Encabezado 1</h1>
```

![Caja básica](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-2123bdc30957ace839a92938e476d8e07719c6cf%2Fcaja-basica.png?alt=media)

El modelo de caja es una especificación que define el comportamiento de una etiqueta o elemento HTML y cómo influye en el resto de elementos de la página; es el que le dice al navegador cómo debe pintar cada elemento.

Antes de entrar en profundidad con los modelos de caja tenemos que ver conceptos básicos (alto, ancho, borde, padding y margen) y las formas básicas de visualización de los elementos HTML (display).

#### Height, width, border, padding y margin

Todos los elementos HTML tienen una **altura** (height) y **anchura** (width). Además, puede tener otros atributos relacionados que influyen en su tamaño y su posición, que son el padding, los márgenes y los bordes:

* El **borde** de un elemento es una línea que puede tener distinto grosor y que enmarca el contenido del elemento.
* El **padding** es la distancia desde el contenido del elemento hasta el borde (podría pensarse como un margen interior).
* El **margen** es la distancia desde borde del elemento hasta los elementos que están a su alrededor (el margen exterior).

Puedes especificar el padding para cada lado del elemento de manera individual utilizando `padding-top`, `padding-right`, `padding-bottom` y `padding-left`. También puedes usar la propiedad `padding` para establecer todos estos valores en una sola declaración. Por ejemplo, `padding: 10px` aplica 10 píxeles de padding a todos los lados del elemento. Además, también puedes utilizar [`padding-inline`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline) (afecta a los lados "inline") y [`padding-block`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block) (afecta a los lados "block"). Todo esto aplica también para la propiedad[ `margin`](https://developer.mozilla.org/es/docs/Web/CSS/margin).

### Visualización (display)

La propiedad CSS `display`, se encarga de definir cómo se va a visualizar un elemento HTML, cómo va a colocarse en la página y cómo se colocarán el resto de elementos respecto a este. Según el valor que tenga asignado `display`, un elemento puede ocupar el ancho entero de su contenedor, ocupar solo el espacio que necesite para mostrar su contenido, mostrarse como si fuese una casilla de una tabla o directamente ocultarse.

Todas las etiquetas HTML tienen un valor `display` por defecto, pero por supuesto, podemos alterarlo para ajustarlo a nuestra maquetación.

Hay muchos valores distintos para `display` pero, por el momento, nosotras solo veremos estos cuatro:

* **block**: los elementos ocuparán el ancho completo del contenedor y se colocarán unos debajo de otros.
* **inline**: ocuparán el ancho de su contenido, por lo que se pueden alinear unos al lado de otros.
* **inline-block**: es un híbrido de las dos opciones anteriores.
* **none**: oculta el elemento, no lo muestra.

#### Block

Los elementos **en bloque** se muestran ocupando el ancho completo de su contenedor. En otras palabras, si tenemos un elemento en bloque dentro de una etiqueta `<aside>`, este ocupará el ancho completo del `<aside>`; si por lo contrario el elemento está directamente dentro del `<body>`, este ocupará el ancho del `<body>`, y así siempre. Los elementos en bloque siempre empiezan en una nueva línea y nunca van a tener más elementos a su misma altura dentro del mismo contenedor, estarán más arriba o más abajo.

Como hemos comentado antes, los navegadores asignan automáticamente un modo de visualización por defecto a todos los elementos HTML. Algunos elementos, como los párrafos `<p>`, los `<div>` o las listas (`<ol>` y `ul>`), por defecto se muestran en bloque debido a esos estilos que aplica el navegador.

[▸ Elementos en bloque en Codepen](https://codepen.io/adalab/pen/WXQgrq)

Este Codepen representa cómo funcionan los elementos en bloque. En el resultado se ha puesto un fondo azul para que se vea el ancho total de cada elemento. Como se puede ver, en el caso del enlace, este ocupa el ancho de su contenido (del texto) mientras que los párrafos ocupan el ancho total del contenedor. El texto de los párrafos cabría perfectamente uno al lado del otro pero al ser bloques y ocupar ambos todo el ancho del contenedor, se muestran cada uno en una línea.

Usando CSS podemos hacer que un elemento que no se muestra en bloque cambie y se muestre de esta manera. Para ello aplicaremos `display: block` en el elemento. De esta forma, si queremos hacer que un elemento con la clase `block` se muestre en bloque, utilizaremos el siguiente código:

```css
.block {
  display: block;
}
```

A continuación se muestra la lista completa de elementos HTML que, por defecto, los navegadores web muestran en bloque:

`<address>`, `<article>`, `<aside>`, `<blockquote>`, `<canvas>`, `<dd>`, `<div>`, `<dl>`, `<dt>`, `<fieldset>`, `<figcaption>`, `<figure>`, `<footer>`, `<form>`, `<h1>-<h6>`, `<header>`, `<hr>`, `<li>`, `<main>`, `<nav>`, `<noscript>`, `<ol>`, `<output>`, `<p>`, `<pre>`, `<section>`, `<table>`, `<tfoot>`, `<ul>` y `<video>`.

> **Nota:** como es difícil memorizar la lista completa de elementos que se muestran en bloque, podemos hacernos la siguiente pregunta para saber si un elemento se mostrará en bloque o no: **"¿Tendría sentido meter este elemento dentro de un párrafo?"**. Si la respuesta es **no, es muy probable que el elemento sea un bloque**; si por lo contrario, la respuesta es **sí, probablemente sea un elemento en línea**. Por ejemplo, no tendría sentido meter una lista, un `<aside>` o un `<div>` dentro de un párrafo y por eso los navegadores muestran estos como bloques.

#### Inline

Los elementos en línea o **inline** son aquellos que ocupan lo que ocupa su contenido, toman solo el espacio que necesitan. En estos, el tamaño será exactamente el tamaño de su contenido. Por ejemplo, si tenemos un enlace con el texto "púlsame", por defecto el ancho de ese enlace será el mismo ancho que el texto.

Debido a que los elementos en línea solo ocupan el ancho de su contenido, estos pueden colocarse uno al lado del otro hasta que no quede más espacio restante en la fila, en cuyo caso se colocarán en la fila siguiente. Cuando un elemento es muy largo y no cabe completamente en una línea, la parte que no cabe se baja a la línea siguiente. Por poner un ejemplo claro, un elemento en línea se comportaría como una letra más dentro de un texto; de hecho, estos elementos también respetan los espacios entre ellos, como se puede comprobar en el siguiente ejemplo.

[▸ Elementos en línea en Codepen](https://codepen.io/adalab/pen/vWNzLj)

Como norma general, los elementos `inline` no deberían contener elementos de bloque.

Una regla muy importante que se aplica sobre los elementos en línea es que estos no pueden cambiar su ancho ni su alto, no pueden tener márgenes verticales y se puede aplicar margen y padding horizontal pero este no se tiene en cuenta a la hora de definir su altura y su posición vertical. Esto los diferencia de los elementos en bloque, que permiten tener un ancho y un alto específico y márgenes y padding tanto verticales como horizontales. Veremos la importancia de esto en esta misma sesión, cuando hablemos del modelo de cajas.

> **Nota:** las imágenes son un tipo especial de elemento en línea que, por sus características, actúa como una mezcla de elemento en línea y elemento en bloque, ya que pueden tener márgenes y padding verticales y se les pueden asignar un ancho y un alto.

Usando CSS podemos cambiar la visualización de un elemento para hacer que se muestre en línea. Para ello aplicaremos `display: inline` en el elemento. Si quisiéramos hacer que un elemento con la clase `inline` se muestre en línea, utilizaríamos el siguiente código:

```css
.inline {
  display: inline;
}
```

A continuación se muestra la lista completa de elementos HTML que, por defecto, los navegadores web muestran en línea:

`<a>`, `<b>`, `<big>`, `<i>`, `<small>`, `<tt>`, `<abbr>`, `<acronym>`, `<cite>`, `<code>`, `<dfn>`, `<em>`, `<kbd>`, `<strong>`, `<samp>`, `<time>`, `<var>`, `<bdo>`, `<br>`, `<img>`, `<map>`, `<object>`, `<q>`, `<script>`, `<span>`, `<sub>`, `<sup>`, `<button>`, `<input>`, `<label>`, `<select>` y `<textarea>`

> **Nota:** aquí podemos usar la misma pregunta que comentamos en la sección de elementos en bloque para deducir si un elemento está en línea: *"¿Tendría sentido meter este elemento dentro de un párrafo?"*. Si la respuesta es *sí*, es muy probable que sea un elemento en línea.

#### Inline-block

En este caso y como su nombre indica, el comportamiento de los elementos `inline-block` es una mezcla entre el comportamiento de los elementos en línea y los elementos en bloque.

Los elementos `inline-block` ocupan por defecto el ancho de su contenido y se comportan como si se tratase de una palabra más dentro de un texto, al igual que los elementos en línea, pero permiten tener un ancho, un alto, padding y márgenes verticales, como sucede con los elementos en bloque.

[▸ Elementos inline-block en Codepen](https://codepen.io/adalab/pen/KydxdP)

Para hacer que un elemento se comporte como `inline-block`, utilizaremos `display: inline-block;`, como hemos visto en los ejemplos con `inline` y `block`.

### Elementos ocultos

A veces queremos que un elemento esté oculto: por ejemplo, el típico mensaje de aviso de cookies que aparece cada vez que entramos en una página. Con JavaScript, haremos que este mensaje se muestre o se oculte dependiendo si hemos visitado antes la página o no. Pero lo que haremos desde JavaScript será añadir o quitar una clase CSS, pues los estilos los gestionaremos siempre desde el CSS.

Entonces, para poder ocultar un elemento (imaginemos que tiene una clase llamada `hidden`) lo haremos desde el CSS.

```css
.hidden {
  display: none;
}
```

Lo que hace este código es ocultar por completo cualquier elemento al que le añadamos la clase `hidden`. Será como si ese elemento no existiese, ya que no se mostrará, y el resto de elementos de la página lo ignorarán.

Puedes ver un ejemplo en el siguiente Codepen:

[▸ Elementos ocultos](https://codepen.io/adalab/pen/GOpXmw)

Por último, aquí tenemos un Codepen con la recopilación de los distintos tipos de visualización que hemos visto hasta ahora.

[▸ Elementos inline, inline-block y block en Codepen](https://codepen.io/adalab/pen/QOjVye)

### Dimensiones y box-sizing

Una vez vistos los modos principales de visualización, ya podemos entrar al modelo de caja. Recordemos que el modelo de caja es el que le dice al navegador cómo debe pintar cada caja.

Si pensamos en el conjunto global, una página sería como un conjunto de cajas, una dentro de otra. Por lo tanto, si a partir de ahora pensamos en cada elemento como un rectángulo, nos será mucho más fácil visualizar cómo se compone la estructura de una web y cómo podemos pensar en ella combinando elementos que contienen otros elementos a su vez.

Puedes leer una [explicación más completa sobre el modelo de caja en la documentación de la MDN](https://developer.mozilla.org/es/docs/Learn/CSS/Introduction_to_CSS/Modelo_cajas).

Pongamos un ejemplo con un modelo de caja `content-box`: si tengo una caja de 100x100px, con un borde de 2px y con un padding de 16px, tendría una caja de **2+16+100+16+2: 136x136px**.

Por defecto los elementos tienen el modelo de caja `content-box`. Con la propiedad CSS `box-sizing` podemos cambiarlo asignando el valor `border-box`, que es el otro modelo existente. En `border-box` tanto el borde como padding están incluidos en el ancho/alto del elemento, de manera que en el caso anterior nuestra caja tendría 100x100px pero el espacio para el contenido de nuestra caja no sería de 100x100 sino de 100-(2+2+16+16): 64x64px. Mira y entiende el siguiente ejemplo.

[▸ Ejemplo de modelo de caja en Codepen](https://codepen.io/adalab/pen/qoJNyN).

Si quisiéramos cambiar el modelo de caja para todos los elementos, podríamos usar el selector `*`, que modifica todos los elementos de la página, y por lo tanto debemos de usarlo con mucho tiento.

```css
* {
  box-sizing: border-box;
}
```

### Overflow

Por defecto, nuestros contenedores tomarán el tamaño del contenido, pero desde el momento en que definimos un tamaño para el contenedor puede pasar que el contenido no quepa. Y entonces, ¿qué?

Pueden pasar dos cosas: que el contenido se pueda adaptar, como pasa con el texto, o que el contenido simplemente se salga de nuestro contenedor (también puede pasar con el texto):

![Overflow básico](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-a99c0086104c6bb94f54f7b058df146ef293603d%2Foverflow-basico.png?alt=media)

[▸ Mira este ejemplo en Codepen](https://codepen.io/adalab/pen/WzLBwq)

Podemos controlar cómo se comporta un contenedor en los casos en que el contenido se salga, y para ello tenemos 3 opciones:

1. No hacer nada y lidiar con las consecuencias
2. Ocultar todo lo que se salga
3. Incluir\_scroll\_en el contenedor

Podéis leer sobre la propiedad *overflow*:

* [overflow](http://devdocs.io/css/overflow)
* [overflow-x](http://devdocs.io/css/overflow-x)
* [overflow-y](http://devdocs.io/css/overflow-y)

### Alineando elementos en línea

`text-align` nos permite alinear horizontalmente texto y elementos en línea con los valores `right`, `left`, `center` y `justify`. De esta manera, cuando lo aplicamos sobre una etiqueta podemos modificar la alineación horizontal de todas sus hijas cuyo display sea *inline*.

> 📂 Recursos externos sobre el modelo de caja:
>
> * [Libro de Introducción a CSS - 4. Modelo de cajas](https://librosweb.es/libro/css/capitulo_4.html)
> * [Libro de Introducción a CSS - 4.1. Anchura y altura](https://librosweb.es/libro/css/capitulo_4/anchura_y_altura.html)




# 1.2.2 Variables

¿Te has parado a pensar lo que supone mantener un proyecto con muchas líneas de CSS? Imagínate que empiezas con un proyecto que tiene una gama de colores en azul a lo largo de toda la web. Seis meses más tarde, la diseñadora decide que sería genial darle un nuevo aire a la web y quiere que toda la gama de colores sea en naranja. ¿Te imaginas en cuántos sitios distintos tendrías que cambiar la propiedad color? ¿O el tamaño de una fuente?

Pues gracias a las variables CSS podemos hacer esa tarea más fácil. El nombre exacto es Custom Properties, y aunque no está mal llamarlas variables (hasta la W3C las llama así), su comportamiento no es como el de las variables en los lenguajes de programación.

#### ¿Cómo se usan?

Podríamos indagar mucho más en las variables CSS, pero por el momento os enseñaremos el uso más común y práctico. Llamaremos a la pseudo-clase `:root` de CSS, que selecciona la raíz de nuestro documento (sería el equivalente a nuestra etiqueta HTML). Dentro de `:root`, definiremos las propiedades que van a ser personalizadas, por ejemplo `--brand-color`.

Cuando queramos llamar a esa propiedad, utilizaremos la función `var()` con el nombre de la propiedad que queremos pasarle dentro de la clase CSS que va a verse afectada. Os enseñamos cómo quedaría.

```css
:root {
  --brand-color: orange;
}

header {
  color: var(--brand-color);
}
```

De esta manera, cuando la diseñadora decida que nuestro color base pasará de azul a naranja, solamente tendríamos que cambiar la propiedad brand-color dentro de :root.

### Cómo cambiar el tipo de fuente

Como habéis visto en los ejemplos hasta ahora, todas las páginas web que hemos hecho tienen el mismo tipo de fuente, la que está definida en las propiedades CSS por defecto de cada navegador. Normalmente suele ser una fuente de la familia Sans-Serif (como Arial o Verdana). Se puede cambiar la fuente de un elemento (o de toda la página usando el elemento body) con la propiedad `font-family` de CSS:

```css
body {
  font-family: 'Rubik', sans-serif;
}
```

El valor de `font-family` es una lista, separada por comas, de nombres de fuentes (como los nombres de las que escoges en Word o TextEdit) o de nombres de fuentes genéricas, como:

* **serif** (como "Times New Roman", "Georgia")
* **sans-serif** (como "Arial", "Verdana")
* **cursive**
* **fantasy** (como "Comic Sans", "Impact")
* **monospace** (como "Courier New", "Monaco")

### Buenas prácticas

Lo habitual es poner uno o varios nombres de familia de fuentes (por ejemplo `"Rubik"`) y al final poner un nombre de fuente genérico. Esto se hace porque el navegador debe tener esa fuente en el ordenador de la usuaria o tener acceso a la misma a través de Internet (veremos ahora cómo se hace con `@font-face`). Por ejemplo:

```css
h1 {
  font-family: 'Rubik', 'Arial', 'Roboto', sans-serif;
}
```

Si el navegador no encuentra la fuente `"Rubik"` en el ordenador de la usuaria ni se ha especificado en ningún `@font-face`, pasará a buscar y usar la siguiente, en este caso `"Arial"` (la fuente Arial suele estar en todos los ordenadores Windows, pero no en Linux. Roboto es típica de Android, pero no de Windows, MacOS o Linux).

Usaremos una o dos fuentes distintas como **máximo** en nuestras páginas web para obtener una mejor legibilidad (salvo que sea una página personal muy artística). También definiremos un buen contraste entre el color del texto (`color`) y el color de fondo (`background-color`).

### Cómo cambiar el tamaño del texto

¡Esto lo vimos en el tema 1! De recuerdo, se hace con la propiedad `font-size`:

```css
main {
  font-size: 14pt;
}
```

Las unidades pueden ser `pt` (como en Word o TextEdit) o, preferiblemente, en `px`. En etiquetas o elementos distintos de body, también puede ponerse como porcentaje.

```css
body {
  font-family: 'Rubik', 'Arial', 'Roboto', sans-serif;
  font-size: 16px;
}
h2 {
  font-size: 175%;
}
```

#### Cómo declarar una nueva familia de fuentes

Podemos decirle al navegador que tiene disponible en el servidor o en Internet una fuente que no está instalada en su ordenador. Esto se hace con el pseudo-elemento `@font-face`, donde le indicaremos un nombre y la URL al fichero que contiene la fuente. Los ficheros de fuentes pueden ser ficheros ttf (TrueType) o woff.

```css
@font-face {
  font-family: 'Mi fuente';
  src: url('assets/FicheroFuente.woff');
}

body {
  font-family: 'Mi fuente', sans-serif;
}
```

Además de escribir esta declaración CSS, habrá que copiar el fichero `FicheroFuente.woff` que contiene la fuente en el directorio `assets`.

> **Nota:** no podemos poner una URL a otro servidor en la propiedad src de `@font-face`. Pero, al final del tema, veremos cómo usar fuentes desde Google Fonts sin tener que encargarnos de los ficheros ttf o woff.

> **Nota:** `@font-face` es un pseudo-elemento de CSS. Esto quiere decir que no se puede colocar dentro de las reglas de otro elmento, sino que tiene que estar en el primer nivel de jerarquía.



# 1.2.2 Variables

¿Te has parado a pensar lo que supone mantener un proyecto con muchas líneas de CSS? Imagínate que empiezas con un proyecto que tiene una gama de colores en azul a lo largo de toda la web. Seis meses más tarde, la diseñadora decide que sería genial darle un nuevo aire a la web y quiere que toda la gama de colores sea en naranja. ¿Te imaginas en cuántos sitios distintos tendrías que cambiar la propiedad color? ¿O el tamaño de una fuente?

Pues gracias a las variables CSS podemos hacer esa tarea más fácil. El nombre exacto es Custom Properties, y aunque no está mal llamarlas variables (hasta la W3C las llama así), su comportamiento no es como el de las variables en los lenguajes de programación.

#### ¿Cómo se usan?

Podríamos indagar mucho más en las variables CSS, pero por el momento os enseñaremos el uso más común y práctico. Llamaremos a la pseudo-clase `:root` de CSS, que selecciona la raíz de nuestro documento (sería el equivalente a nuestra etiqueta HTML). Dentro de `:root`, definiremos las propiedades que van a ser personalizadas, por ejemplo `--brand-color`.

Cuando queramos llamar a esa propiedad, utilizaremos la función `var()` con el nombre de la propiedad que queremos pasarle dentro de la clase CSS que va a verse afectada. Os enseñamos cómo quedaría.

```css
:root {
  --brand-color: orange;
}

header {
  color: var(--brand-color);
}
```

De esta manera, cuando la diseñadora decida que nuestro color base pasará de azul a naranja, solamente tendríamos que cambiar la propiedad brand-color dentro de :root.

### Cómo cambiar el tipo de fuente

Como habéis visto en los ejemplos hasta ahora, todas las páginas web que hemos hecho tienen el mismo tipo de fuente, la que está definida en las propiedades CSS por defecto de cada navegador. Normalmente suele ser una fuente de la familia Sans-Serif (como Arial o Verdana). Se puede cambiar la fuente de un elemento (o de toda la página usando el elemento body) con la propiedad `font-family` de CSS:

```css
body {
  font-family: 'Rubik', sans-serif;
}
```

El valor de `font-family` es una lista, separada por comas, de nombres de fuentes (como los nombres de las que escoges en Word o TextEdit) o de nombres de fuentes genéricas, como:

* **serif** (como "Times New Roman", "Georgia")
* **sans-serif** (como "Arial", "Verdana")
* **cursive**
* **fantasy** (como "Comic Sans", "Impact")
* **monospace** (como "Courier New", "Monaco")

### Buenas prácticas

Lo habitual es poner uno o varios nombres de familia de fuentes (por ejemplo `"Rubik"`) y al final poner un nombre de fuente genérico. Esto se hace porque el navegador debe tener esa fuente en el ordenador de la usuaria o tener acceso a la misma a través de Internet (veremos ahora cómo se hace con `@font-face`). Por ejemplo:

```css
h1 {
  font-family: 'Rubik', 'Arial', 'Roboto', sans-serif;
}
```

Si el navegador no encuentra la fuente `"Rubik"` en el ordenador de la usuaria ni se ha especificado en ningún `@font-face`, pasará a buscar y usar la siguiente, en este caso `"Arial"` (la fuente Arial suele estar en todos los ordenadores Windows, pero no en Linux. Roboto es típica de Android, pero no de Windows, MacOS o Linux).

Usaremos una o dos fuentes distintas como **máximo** en nuestras páginas web para obtener una mejor legibilidad (salvo que sea una página personal muy artística). También definiremos un buen contraste entre el color del texto (`color`) y el color de fondo (`background-color`).

### Cómo cambiar el tamaño del texto

¡Esto lo vimos en el tema 1! De recuerdo, se hace con la propiedad `font-size`:

```css
main {
  font-size: 14pt;
}
```

Las unidades pueden ser `pt` (como en Word o TextEdit) o, preferiblemente, en `px`. En etiquetas o elementos distintos de body, también puede ponerse como porcentaje.

```css
body {
  font-family: 'Rubik', 'Arial', 'Roboto', sans-serif;
  font-size: 16px;
}
h2 {
  font-size: 175%;
}
```

#### Cómo declarar una nueva familia de fuentes

Podemos decirle al navegador que tiene disponible en el servidor o en Internet una fuente que no está instalada en su ordenador. Esto se hace con el pseudo-elemento `@font-face`, donde le indicaremos un nombre y la URL al fichero que contiene la fuente. Los ficheros de fuentes pueden ser ficheros ttf (TrueType) o woff.

```css
@font-face {
  font-family: 'Mi fuente';
  src: url('assets/FicheroFuente.woff');
}

body {
  font-family: 'Mi fuente', sans-serif;
}
```

Además de escribir esta declaración CSS, habrá que copiar el fichero `FicheroFuente.woff` que contiene la fuente en el directorio `assets`.

> **Nota:** no podemos poner una URL a otro servidor en la propiedad src de `@font-face`. Pero, al final del tema, veremos cómo usar fuentes desde Google Fonts sin tener que encargarnos de los ficheros ttf o woff.

> **Nota:** `@font-face` es un pseudo-elemento de CSS. Esto quiere decir que no se puede colocar dentro de las reglas de otro elmento, sino que tiene que estar en el primer nivel de jerarquía.

### EJERCICIOS

**1. Extraer variables**

> **Nota:** este ejercicio es importante, intenta hacerlo mientras leas la lección.

Partimos de una web con un montón de propiedades CSS repetidas por nuestra hoja de estilos. Saca todas las que puedas a variables CSS y aplícalas en los lugares donde ahora aparece la propiedad escrita directamente. La diseñadora nos ha pasado el proyecto en este [Codepen](https://codepen.io/pixelmary/pen/KKdxdre)



# 1.2.4 Fuentes

### Usando fuentes de Google Fonts

> **Nota:** esta mini lección es un bonus. Puedes leerla cuando necesites aplicarla en el proyecto.

Para utilizar fuentes tipográficas de un sitio externo como Google Fonts, tenemos que seguir dos sencillos pasos:

1. Añadir una etiqueta link a nuestro `head` con un enlace que cargue la fuente:

   ```html
   <link
     rel="stylesheet"
     href="https://fonts.googleapis.com/css?family=Font+Name"
   />
   ```
2. Usar esta fuente desde nuestro CSS:

   ```css
   p {
     font-family: "Font Name", serif;
   }
   ```

### Enlazando la fuente

¿Cómo construimos la URL para enlazar la tipografía?

En la propia URL añadimos `family=` y escribimos el nombre de la tipografía que queremos usar. Si tiene espacios, los sustituimos por `+`. Si queremos importar varias fuentes, podemos cargar todas en el mismo enlace a Google Fonts poniendo los nombres separados por `|`.

`https://fonts.googleapis.com/css?family=Tangerine|Inconsolata|Droid+Sans`

Para cada tipo de fuente se importa por defecto la fuente normal, pero puede que queramos usar la fuente con otro peso (como negrita) o estilo (como cursiva). Para esto, añadimos al final del nombre de la fuente `:` y separados por `,` los estilos o pesos extra que necesitemos. El peso puede expresarse también como valor numérico que indica el grosor (400 es normal, 700 es negrita).

```
https://fonts.googleapis.com/css?family=Tangerine:bold
https://fonts.googleapis.com/css?family=Tangerine:bold,italic
https://fonts.googleapis.com/css?family=Tangerine:400,700
```

Para más información, consulta la [guía de inicio de Google Fonts](https://developers.google.com/fonts/docs/getting_started).
