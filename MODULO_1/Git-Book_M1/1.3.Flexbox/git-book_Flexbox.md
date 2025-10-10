# 1.3.1 Flexbox

Flexbox es una herramienta imprescindible en la maquetación actual, que nos permite tener elementos HTML que se ajusten a las pantallas de los diferentes dispositivos.

## Introducción

A veces necesitamos mostrar varios elementos, en filas o columnas. Piensa en la típica página de JustEat, AirBnB o idealista: cada anuncio es una caja que "fluye" de forma flexible. Eso es un flexbox.

Mira [este Codepen de ejemplo](https://codepen.io/adalab/pen/RwYQaJZ?editors=1100). Intenta eliminar las líneas indicadas en el CSS `.container` y en `.card`, y fíjate cómo cambia la presentación. Abre también el Codepen en tu móvil: ¿ves cómo se distribuyen las fichas? Prueba también el modo móvil en Chrome.

![Modo móvil en Chrome](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-000552b71c8b6b3266e184c86f22a2203cd3d637%2Fcss-mobile.gif?alt=media)

## Elementos básicos

Ten en cuenta que flexbox es una especificación compleja, llena de posibilidades y con muchos detalles. Vamos a ver primero los elementos básicos de flexbox, y luego iremos complicando el tema.

### Caja contenedora y cajas contenidas

El modo flexbox afecta a dos partes: la caja contenedora y las cajas contenidas. La primera es donde se activa el modo, y las segundas son las hijas directas. Flexbox no afecta a las "nietas" o descendientes indirectas.

### Ejes

Cuando usamos el modo flexbox debemos tener en cuenta dos ejes: el principal y el secundario (o eje cruzado). Cuando trabajamos en filas, el eje principal va en horizontal y el secundario en vertical. Es el modo por defecto.

![Flexbox en filas (rows)](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-59505faf9399784429eb0538b96c773ae5abd37a%2Fcss-flexbox-row.png?alt=media)

Pero podemos hacer que flexbox use columnas: eje principal en vertical, y eje secundario en horizontal.

![Flexbox en columnas (columns)](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-e08d62b29a7ad01501d1335f232333c6fd9c2914%2Fcss-flexbox-column.png?alt=media)

Cuál usemos dependerá de cómo queramos organizar nuestra página. En una página tipo Airbnb tendremos una organización en filas, además con desbordamiento hacia la siguiente fila: cuando hay muchos elementos se crean nuevas filas.

![Vista principal de Airbnb, en varias filas](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-3e3989a40ee1af8186349b5fecb929c391da9def%2Fcss-flexbox-airbnb.png?alt=media)

En idealista sin embargo vemos una organización en una columna, sin desbordamiento.

![Vista principal de idealista, en una columna](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-47a85d0d6c4c38ba6a76e3a31d1b83e39f886f26%2Fcss-flexbox-idealista.png?alt=media)

### Flexbox recursivo

Flexbox nos da una gran flexibilidad para maquetar elementos en una página, incluso cuando están dentro de otros elementos.

Fíjate que en [el Codepen de muestra](https://codepen.io/adalab/pen/RwYQaJZ?editors=1100) cada ficha es a su vez una caja contenedora flexbox que contiene varias cajas hija: título, descripción y foto 🤯.

¿Cómo mostrarías las típicas estrellas de valoración: ★★★⯪☆? Una estrategia típica es añadir una línea "Valoración" debajo de la foto de la ficha, que sea un flexbox donde añadir estrellas en fila. Tendremos así un flexbox dentro de otro y a su vez dentro de otro más 🤯🤯🤯.

## Propiedades de la caja contenedora

En la caja contenedora podemos seleccionar varias propiedades para controlar cómo se muestran las cajas hija. Tomando como referencia [el Codepen de arriba](https://codepen.io/adalab/pen/RwYQaJZ?editors=1100), ve modificando las propiedades en la caja contenedora `.container` para comprobar el efecto que tienen.

### `display`

Para marcar la caja contenedora usamos la propiedad `display` que ya hemos visto antes, en este caso con valor `flex`:

```css
.container {
  display: flex;
}
```

Podemos elegir que la caja contenedora se comporte como un bloque `inline`, es decir, que se coloque en la línea:

```css
.container {
  display: inline-flex;
}
```

### `flex-direction`

Elegimos cuál será el eje principal: el horizontal (en filas) o el vertical (en columnas).

```css
.container {
  flex-direction: row;
  flex-direction: column;
}
```

### `flex-wrap`

¿Qué hacemos si hay demasiados elementos para una sola línea? Por defecto se comprimirán hasta que quepan en una sola línea. Si queremos que se desborden y pasen a líneas sucesivas, usaremos esta propiedad:

```css
.container {
  flex-wrap: wrap;
}
```

### `flex-flow`

Propiedad combinada para `flex-direction` y `flex-wrap`, que nos puede ahorrar algunos teclazos:

```css
.container {
  flex-flow: column wrap;
}
```

### `justify-content`

Cuando las cajas hija no llenan la fila (o columna) del todo, ¿cómo las organizamos? En texto es lo que se conoce como "justificar", como ya vimos con la propiedad `text-align`; ahora haremos lo mismo con las hijas de una contenedora. Las opciones más habituales son juntar todo el espacio libre al final:

```css
.container {
  justify-content: flex-start;
}
```

o en ambos lados:

```css
.container {
  justify-content: center;
}
```

### `align-items`

También es posible que todas las cajas hija no tengan el mismo tamaño en el eje secundario: por ejemplo cajas de diferente altura en una misma fila. ¿Cómo preferimos que queden alineadas? ¿Todas las cajas a la misma altura? ¿O quizás centradas en vertical? ¿O incluso estiradas para que todas ocupen la misma altura? (Esta última, por cierto, es la opción por defecto.)

Para ver cómo queda mejor prueba a cambiar la propiedad `align-items` en [el Codepen de personajes](https://codepen.io/adalab/pen/RwYQaJZ?editors=1100):

```css
.container {
  align-items: stretch;
  align-items: flex-start;
  align-items: center;
}
```

Podéis ver en la imagen de abajo las sutiles diferencias en alineación de cajas hija:

![Diferentes opciones para align-items](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-39add4b823c1b8440ff32feb20b59ef21da90173%2Fcss-flexbox-align-items.png?alt=media)

### `gap`

Por defecto todas las cajas hija quedan pegadas unas a otras, y puede que queramos dejar espacio entre ellas. Para eso se usa la propiedad `gap`. Por ejemplo, si queremos dejar 10 píxeles entre cajas hija:

```css
.container {
  gap: 10px;
}
```

También podemos especificar distancias diferentes para el eje primario y secundario:

```css
.container {
  gap: 10px 30px;
}
```

## Propiedades de las cajas hija

En cada caja hija también podemos controlar algunos aspectos de cómo se muestran dentro de la contenedora.

> **Nota:** cada una de estas propiedades se añade en una caja hija determinada, no en todas a la vez.

### `order`

Es la más básica, y controla el orden dentro del flexbox. Por defecto las cajas hija se colocan en orden de llegada; si queremos adelantar o atrasar cajas lo podemos especificar.

```css
.card-5 {
  order: 5;
}
```

Si se repitieran valores de orden, de nuevo colocaríamos las cajas con el mismo valor en orden de llegada.

### `flex-grow`

Cuando hay espacio de sobra, y las cajas hija pueden crecer (no tienen tamaño fijo), esta propiedad individual de cada caja hija nos dice cuánto puede crecer cada una.

```css
.card-3 {
  flex-grow: 2;
}
```

Un ejemplo: si tuviéramos las cajas 1 y 2 con `flex-grow=1` y la 3 con `flex-grow=2`, y no tuvieran tamaño fijo, acabaríamos con una caja 3 de doble tamaño que las otras: `[-1-] [-2-] [--3--]`.

Este [Codepen](https://codepen.io/adalab/pen/xxaYVJV?editors=1100) muestra un ejemplo algo más complejo.

## Propiedades avanzadas

Nos hemos saltado algunos valores de configuración que se usan menos a menudo. En cualquier caso está bien saber que existen por si las necesitamos. En la [guía completa de flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) podéis ver ejemplos de uso de cada uno.

## Valores avanzados de caja contenedora

Para `flex-direction` podemos elegir que los elementos en el eje principal se coloquen en sentido inverso, si nos hiciera falta:

```css
.container {
  flex-direction: row-reverse;
  flex-direction: column-reverse;
}
```

También podemos hacer que las diversas filas o columnas se apilen en sentido inverso, por ejemplo filas de abajo arriba:

```css
.container {
  flex-wrap: wrap-reverse;
}
```

Al justificar la caja contenedora podemos seleccionar que los espacios se agrupen todos entre cajas hija, de diversas maneras:

```css
.container {
  justify-content: space-between;
  justify-content: space-around;
  justify-content: space-evenly;
}
```

Y al alinear cajas hija en el eje secundario (por ejemplo fichas en vertical en una fila), tenemos opciones específicas para alinear por debajo o sobre la línea del texto que contienen:

```css
.container {
  align-items: flex-end;
  align-items: baseline;
}
```

Existen incluso otras opciones más esotéricas `start`, `self-start`, `end` y `self-end` según la dirección de escritura del texto.

## Propiedades avanzadas de caja contenedora

También hemos omitido algunas propiedades avanzadas. Estas propiedades nos permiten hacer ajustes finos sobre la caja contenedora que controla la presentación de flexbox.

### `align-content`

Esta propiedad avanzada nos permite ajustar cómo quedan las filas o columnas en conjunto dentro de la caja contenedora, cuando hay espacio de sobra.

```css
.container {
  align-content: flex-start;
  align-content: center;
  align-content: stretch;
}
```

### `row-gap`, `column-gap`

Permiten especificar de forma aislada la separación entre filas y entre columnas.

```css
.container {
  row-gap: 10px;
}
```

## Propiedades avanzadas de cajas hija

Estas propiedades nos permiten hacer ajustes finos sobre las cajas hija.

### `flex-shrink`

Similar a `flex-grow`, pero en lugar de agrandar la caja hija, la reduce.

### `flex-basis`

Define el tamaño por defecto de un elemento antes de distribuir el espacio. Puede usarse `auto` para que se tome el tamaño intrínseco de la caja.

```css
.card-5 {
  flex-basis: 200px;
}
```

### `flex`

Propiedad combinada de `flex-growth`, `flex-shrink` y `flex-basis`. Solo la primera es obligatoria. Se recomienda usar esta propiedad, porque da valores con sentido a las que no fijemos.

```css
.card-5 {
  flex: 3 1 auto;
}
```

### `align-self`

Permite a una caja hija cambiar la alineación especificada en la caja contenedora. Tiene los mismos valores que `align-items`.

```css
.child-2 {
  align-self: flex-start;
}
```

## Guía para un buen flexbox

Hasta que dominemos flexbox os sugerimos tener siempre a mano esta "chuleta".

#### ¿Dónde debemos aplicar los estilos?

* Los estilos de la caja contenedora (dirección, distribución...) los aplicamos en la caja contenedora.
* Los estilos comunes a todas las hijas los aplicamos a una clase común para todas las hijas, por ejemplo: `.item`.
* Si una de las hijas tiene una disposición o tamaño diferente a la de las demás, se le aplica estilos solo a esa caja con una clase propia, por ejemplo: `.item-x`.

#### Procedimiento normal

1. Se recomienda aplicar `box-sizing` y `border` o `background-color` a la caja contenedora y a las hijas para visualizar cómo se comportan (después se pueden borrar estos estilos).
2. Indica en la contenedora: `display: flex`.
3. Elige dirección del eje principal: filas (`row`) o columnas (`column`). **Hay que tener muy muy claro cuál queremos que sea el eje principal y cuál el secundario.**
4. Indica en la caja contenedora la dirección del eje principal: `flex-direction: row | column`. No hay que confundir eje principal con eje horizontal, ni eje secundario con eje vertical.
5. Indica en la caja contenedora si quieres que los items salten de fila (o columna): `flex-wrap: wrap`, o se mantengan en una sola. A lo mejor es necesario añadir muchas hijas para poder ver el salto de línea.
6. Indica en la caja contenedora cómo se alinean o distribuyen los elementos en el eje principal, en el caso de que sobre o falte espacio: `justify-content: center`.
7. Indica en la caja contenedora cómo se alinean o distribuyen los elementos en el eje secundario: `align-items: center`.
8. **Indica a todos los items el tamaño** que deben tener: ancho si el eje principal es horizontal o alto si el eje principal es vertical.

> **Nota:** alguna vez pensarás que estás utilizando `justify-content` o `align-items` y no funciona. Es posible que sea porque no hay espacio sobrante, y por lo tanto no se puede añadir espacio entre las hijas.

#### Procedimiento avanzado

1. Si queremos indicar un ancho variable en función del espacio sobrante o el espacio faltante, usamos: `flex-grow`, `flex-shrink`.
2. Si queremos indicar un ancho inicial antes de repartir el espacio sobrante o faltante, usamos: `flex-basis`.
3. Si queremos usar un ancho fijo usamos: `width`.
4. Para indicar en un elemento un tamaño especial que debe tener: `flex-grow`, `flex-shrink` y `flex-basis`.
5. Si queremos cambiar el orden de las hijas le aplicamos order a una de ellas, teniendo en cuenta que los órdenes menores de 0 se moverán a la izquierda y mayores de 0 se moverán a la derecha.

> **Nota:** aquí estamos usando los nombres de clase `container` y `item` porque nos apetece. Podríamos haber usado otros nombres de clase según convenga. Por ejemplo en [el primer Codepen](https://codepen.io/adalab/pen/RwYQaJZ?editors=1100) usamos `card` para las fichas.

## 📂 Recursos externos

* Juego para aprender flexbox: [Flexbox froggy - juego](http://flexboxfroggy.com/#es)
* Juego para aprender flexbox: [Flexbox defense - juego (inglés)](http://www.flexboxdefense.com/)
* [Página interactiva para aprender flexbox](http://codepen.io/enxaneta/full/adLPwv/)
* [Guía completa de flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). Por cierto, [css-tricks.com](https://css-tricks.com/) es una página de referencia entre maquetadores por la calidad de sus tutoriales y artículos.
* [Póster de flexbox](https://css-tricks.com/wp-content/uploads/2022/02/css-flexbox-poster.png), también de CSS Tricks. Guía visual imprescindible. Para imprimir en grande y pegar en la pared.



# 1.3.2 Unidades

### Unidades

En la lección anterior vimos los píxeles (`px`), unidades absolutas cuyo tamaño no varía. **Un píxel siempre es un píxel.** Veamos algunas unidades más.

#### Unidad de porcentaje

La unidad de `%` nos permite ajustar tamaños para que sean un porcentaje del tamaño de su etiqueta madre.

```css
.hero {
  height: 33.3%;
}
```

#### Unidades relativas al viewport

El **viewport** es la zona visible en una web. El viewport mide **100vw** (viewport width) de ancho y **100vh** (viewport height) de alto siempre, en la pantalla pequeña de un móvil o en la grande de un portátil.

Las unidades `vw` y `vh` nos permiten ajustar ancho y alto de manera relativa al *viewport*.

```css
.wrapper {
  height: 100vh;
}
```

#### Tamaños mínimos y máximos

Con `max-width`, `min-width`, `max-height` y `min-height` podemos controlar los tamaños de los elemento para que sean fluidos y se comporten como nosotras queremos frente a diferentes tamaños de ventanas del navegador.

```css
.box {
  width: 100%;
  max-width: 400px;
  min-width: 300px;
}
```

