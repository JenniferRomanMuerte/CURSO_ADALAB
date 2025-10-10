# 1.9 Sistema de Grid

Un sistema de grid o rejilla nos permite disponer los elementos de una página de manera que estén alineados. Con este sistema tendremos una rejilla imaginaria de filas y columnas en la que colocaremos los elementos de nuestra web. El uso de un sistema de grid tiene sentido si le acompaña un diseño que usa también una rejilla.

### ¿Para qué sirve lo que vamos a ver en esta sesión?

Un sistema de grid sirve para colocar alineados los elementos de la página. Se usa en un montón de webs, como en este ejemplo de Google.

![Grid de Google Plus](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-0ebb0b3f089347a23752a0ed130df6ea0aa579a2%2Fgrid-example.png?alt=media)

Podemos ver que los elementos están dispuestos en filas y columnas. Hay 4 columnas que se ven claramente, con un elemento que se expande en dos. Aunque a simple vista parecen no estar alineados en filas, todas las cajas tienen una altura proporcional a una base.


# 1.9.1 CSS Grid

CSS Grid es una nueva característica de CSS que permite tener un sistema de rejilla de forma nativa en CSS. Es una herramienta compleja, así que vamos a ver las bases para usarla.

En primer lugar, existen dos tipos de elementos, el contenedor del grid y los elementos del grid. En este sentido, es similar a algo que ya conocemos: flexbox.

Para comenzar, usaremos en el contenedor la propiedad `display:grid` y definiremos las filas y columnas de nuestro grid con `grid-template`. Vamos a ver un ejemplo con el que podéis [jugar en Codepen](https://codepen.io/adalab/pen/JMXwbL?editors=1100):

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 40px 200px 40px;
}
```

En este grid vamos a tener 4 columnas, cada una de tamaño `1fr`, que es una medida sobre el espacio disponible (*free space*). Por tanto, se divide el espacio disponible en 4 partes, una para cada columna. Por otra parte tendremos 3 filas, de 40, 200 y 40px respectivamente.

A continuación, con las propiedades `grid-column` y `grid-row`, indicaremos en cada elemento cuántas filas o columnas queremos que ocupe.

```css
.item1 {
  grid-column-start: 1;
  grid-column-end: 4;
}
```

Esto indica que el primer elemento del contenedor grid se va a expandir desde la primera línea de de la rejilla hasta la cuarta, es decir, ocupa las 3 primeras columnas.

> **Nota:** si tenemos 4 columnas, tendremos 5 líneas de grid. Es decir, siempre vamos a tener una más que el número de filas o columnas.

Podemos escribir lo anterior de una forma simplificada:

```css
.item1 {
  grid-column: 1 / 4;
}
```

Para las filas funciona exactamente igual:

```css
.item3 {
  grid-row-start: 2;
  grid-row-end: 4;
}
```

También podemos indicar el tamaño del espaciado entre los elementos del contenedor con las propiedades `row-gap` y `column-gap`. Podemos utilizar la propiedad `gap` indicando 2 valores si queremos distinto espaciado entre filas y columnas.

Hasta ahora hemos definido una rejilla fija donde colocar nuestros elementos, pero **¿qué pasa cuando hay más elementos que "huecos"?**

Como en muchas otras ocasiones, el navegador intentará solucionarlo, en este caso va a intentar [ampliar el grid con la configuración que le hemos dado](https://codepen.io/adalab/pen/GdOMvr):

* ¿Qué ha pasado con los tres últimos elementos? Pues que se ha hecho lo que se ha podido.

Sin embargo, tenemos una forma de decirle a nuestro grid cómo comportarse cuando haya más elementos de la cuenta, gracias a `grid-auto-rows` y `grid-auto-columns`. Estas propiedades funcionan como `grid-template-rows/columns`, pero solo se aplican en el caso de que haya más elementos de la cuenta.

[▸ Ejemplo en Codepen de `grid-auto-rows`](https://codepen.io/adalab/pen/YLEYxg)

Y lo podemos usar junto con `grid-auto-flow`, que fuerza una única dirección (columna o fila) para nuestra rejilla :)

[▸ Ejemplo en Codepen de `grid-auto-columns` con `grid-auto-flow`](https://codepen.io/adalab/pen/zjPpma)

Con estas propiedades ya podemos empezar a controlar un poco el comportamiento de nuestra rejilla. Para completar un poco esta introducción a grid faltaría ver la posibilidad de definir áreas con nombres más comprensibles:

![Grid areas](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-0186945ef313d9d832b9cfcf78da8af52ae6d673%2Fgrid-area.png?alt=media)

El grid que hay debajo es de 2x3, y para definirlo usaríamos:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
```

Pero si queremos darle nombre a los espacios que estamos definiendo podemos usar, además, `grid-template-areas`:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: "header header" "main aside" "footer footer";
}
```

De esta manera estamos creando distintas áreas con nombre dentro de nuestra rejilla de 2 columnas y 3 filas. Así, la primera fila estará ocupada por el área "header", que ocupará las dos columnas ("header header"). En la segunda fila tendremos dos áreas, "main" y "aside", cada una de las cuales ocupará una columna. Y por último tendremos una tercera fila con el área "footer", que ocupará las dos columnas, como la cabecera.

Si ahora quisiésemos que un elemento en concreto se colocase en una de estas áreas, solo tendríamos que decírselo:

```css
.item--1 {
  grid-area: main;
}
```

Este elemento, por tanto, se colocará en la segunda fila de nuestra rejilla, y ocupará la columna izquierda, que es donde habíamos definido el área "main".

> 📂 Recursos externos
>
> * [Learn CSS grid](http://learncssgrid.com/)
> * [Charla *Rock' n' grid* de Diana Aceves](https://www.youtube.com/watch?v=p7oXrr9yjXY)

### Ejercicios

**1. Maquetando con Grid 1**

1. Partiendo del ejemplo de [Codepen](https://codepen.io/adalab/pen/JMXwbL?editors=1100), consigue una composición como la de la imagen.

![Exercise 1](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-8ff35d75dd90dba225b818246bbb0b37fae9cbfb%2Fexercise-1.png?alt=media)

A la hora de posicionar los elementos en el grid, también podemos usar la palabra `span` para indicar cuánto se expande desde la fila/columna actual. Por ejemplo, para el `item1` que se expande desde la línea 1 a la 3 del grid (o lo que es lo mismo, ocupa 2 columnas), podríamos usar:

```css
.item1 {
  grid-column: span 2;
}
```

2. Modifica lo anterior para usar el punto inicial y final en vez de `span`.

**2. Maquetando con Grid 2**

> **Nota:** este ejercicio es importante, intenta hacerlo mientras leas la lección.

Crea un grid de 12 columnas y 3 filas, la primera y la última ocupan el 20% del alto del viewport. Crea la composición de la siguiente imagen.

![Exercise 2](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-7d9878c53c4ebe7a96a1246b17bca7a0a3fd3675%2Fexercise-3.png?alt=media)

**3. Ajustando la maquetación**

> **Nota:** este ejercicio es importante, intenta hacerlo mientras leas la lección.

¿Serás capaz de [colocar cada elemento en su sitio](https://codepen.io/adalab/pen/zjPjER)? ;)

![Grid areas](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-0186945ef313d9d832b9cfcf78da8af52ae6d673%2Fgrid-area.png?alt=media)


# 1.9.2 Librerías CSS

> **Nota:** este tema es un bonus.

Existen muchas librerías CSS que nos proporcionan estilos y funcionalidades ya implementadas para agilizar el desarrollo de páginas web. El hecho de usar una librería CSS no significa que no necesitas saber CSS, al contrario, debes conocer bien los conceptos iniciales de CSS.

Os vamos a contar solo una pequeña introducción de una de las librerías más populares, y tendréis que enfrentaros con algo muy común como es usar una herramienta nueva y tener que revisar **la documentación** ;)

### Bootstrap

Bootstrap es una librería de grid (solo columnas) y componentes gráficos que creó uno de los desarrolladores de Twitter. La librería ofrece un montón de funcionalidades, desde elementos de UI (botones, dropdowns, menús, etc.), hasta componentes interactivos con JavaScript como un carrusel de fotografías.

Para poder usarla en nuestro proyecto, enlazaremos los CSS alojados en un servidor de Internet, lo que suele llamarse CDN (como hemos hecho con las fuentes de Google Fonts o con Font Awesome).

> Otra forma de usarla sería descargarnos el código CSS y usarlo en nuestro proyecto.

Por ahora vamos a usar el `<link>` que [Bootstrap nos da en su página de inicio](https://getbootstrap.com/docs/5.2/getting-started/introduction/). Si solo queremos usar el CSS usamos esto en nuestro `head`:

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/>
```

Bootstrap cuenta con un sistema de grid sencillo de 12 columnas.

> **Nota:** lo llamamos sistema de grid, aunque solo dispone las columnas.

Siempre partimos de la base de 12 columnas para distribuir el espacio disponible en la web. En el CSS que hemos importado tenemos una serie de clases que nos van a permitir construir nuestra web con un grid responsive con unos breakpoints que Bootstrap tiene definidos.

Como base usaremos un elemento `container` que contiene nuestro grid (como el wrapper de CSS grid) o `container-fluid` si queremos que ocupe todo el ancho y sea fluido. Luego usaremos un elemento con la clase `row` para indicar que es una nueva fila y dentro pondremos los elementos correspondientes. En cada fila podremos indicar el número de columnas que ocupará dicha fila con las clases `col-num`, por ejemplo, `col-1`, `col-6`, `col-12`. Veamos un ejemplo.

```html
<div class="container-fluid">
  <div class="row">
    <div class="header col-12">HEADER</div>
  </div>
  <div class="row">
    <div class="header col-12">HERO</div>
  </div>
  <div class="row">
    <div class="menu col-8">CONTENT</div>
    <div class="content col-4">ASIDE</div>
  </div>
  <div class="row">
    <div class="footer col-12">FOOTER</div>
  </div>
</div>
```

#### Accesibilidad en Bootstrap

Existen una serie de [funcionalidades que nos da el propio Bootstrap para que los sitios creados con esta librería sean accesibles](https://getbootstrap.com/docs/5.2/getting-started/accessibility/#content). Por ejemplo, la clase `sr-only` nos permite definir contenido que es invisible para la usuaria pero accesible a los lectores de pantalla (screen readers). Lo mismo sucede con `sr-only-focusable`, que además permite que ese elemento sea visible cuando se seleccione al navegar por la página con el teclado.

### Ejercicios

**1. Mi primera composición con Bootstrap**

Crea la composición de la imagen con Bootstrap para ver las diferencias de uso respecto a CSS grid.

![Exercise 2](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-7d9878c53c4ebe7a96a1246b17bca7a0a3fd3675%2Fexercise-3.png?alt=media)

**2. Distribución en columnas**

Con Bootstrap, crea la típica distribución de columnas que se usa para mostrar cómo funciona un grid:

![Distribución de columnas](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-f53eb87858c0876f491e73712851cf94b37e68ce%2Fgrid-1.png?alt=media)

Con suficientes divs (las cajas verdes) muestra las columnas y opciones que nos ofrece Bootstrap:

1. 12 columnas
2. 6 columnas
3. 3 columnas
4. 2 columnas
5. 1 columna

**3. Diseño responsive**

> **Nota:** este ejercicio es importante, intenta hacerlo mientras leas la lección.

Vamos a acercarnos a algo más real y probemos a usar los breakpoints. Puedes [consultar la documentación de Bootstrap para conocer cuáles son los breakpoints definidos](https://getbootstrap.com/docs/5.2/layout/breakpoints/) ![Distribución de columnas](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-5c055d54ef26f8a88e1ffa19c61c407d15259ce5%2Fgrid-3.png?alt=media)

Usa los breakpoints extra small, medium y large. ;)

> Las imágenes de los gaticos están en [este zip](https://github.com/Adalab/pw-materiales-del-curso/blob/master/modulo_1/assets/images/1-12/cats.zip)

**4. Sección de precios**

Ahora vamos a explorar las posibilidades de Bootstrap que, además del sistema de columnas, nos ofrece una serie de [componentes ya definidos](https://getbootstrap.com/docs/5.2/components/card/) para que apliquemos clases CSS prediseñadas a nuestros elementos. Usa al menos los componentes de botones (buttons) y tarjetas (cards).

![Página de pricing con Bootstrap](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-076b25c655d8e65a5161987355c2bb9db28ed262%2Fbootstrap-pricing.png?alt=media)

**5. Layouts típicos**

Crea el layout para páginas con las que habitualmente trabajaremos, usando CSS Grid y/o el sistema de grid de Bootstrap. Para ello, te proponemos que realices [el experimento de Jo Franchetti de este artículo en Medium](https://medium.com/samsung-internet-dev/common-responsive-layouts-with-css-grid-and-some-without-245a862f48df), donde replica layouts típicos usando CSS Grid. Realiza al menos el primer ejemplo *"Large Image followed by articles"* usando Sass y el sistema de grid que prefieras.
