# 1.4.1 Visualización

La primera forma que vamos a ver de colocar elementos en la página es usando la propiedad de visualización (*display*).

### Flow layout

En primer lugar vamos a repasar [los modos de visualización que vimos en la sesión 1.2](https://books.adalab.es/materiales-del-curso-pw-ft/modulo-1-html-y-css/maquetacion/1_3_0_intro_a_la_leccion/1_3_1_modelo_de_caja). Constituyen lo que se conoce como [*flow layout*](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout), lo que sería "disposición de flujo" en español: dejar que los elementos fluyan en la página según su propiedad `display`. Si los elementos están dentro de algún elemento contenedor (imagina un documento con texto en columnas), fluirán dentro de este.

* Algunas etiquetas fluyen en horizontal libremente, como una frase en un texto: por ejemplo `<span>`. Es la visualización **en línea**, o `inline`: no alteran la altura de la propia línea, no tienen tamaño propio (sino el del texto que contienen), y por tanto no pueden tener margen vertical.
* Otras son bloques en vertical, como un párrafo de texto o un título: por ejemplo `<div>`. Es la visualización **en bloque**, o `block`: se extienden de un extremo a otro de la línea, y pueden tener margen vertical.
* Y algunas otras son pequeños bloquecitos que fluyen con el texto pero que sí tienen tamaño propio: por ejemplo `<button>`. Podemos pensar en esta visualización como **bloque en línea**, o `inline-block`: tienen tamaño propio y por tanto aceptan margen vertical, pero al mismo tiempo fluyen con el texto.
* Por último, hay etiquetas que no queremos que se muestren en absoluto. Es la visualización **ninguna**, o `none`: el navegador ocultará cualquier etiqueta que la tenga.

En [este Codepen](https://codepen.io/adalab/pen/WNgMGaE?editors=1100) podéis ver un ejemplo de cada *flow layout*. Probad a modificar o quitar el margen de arriba (`margin-top`) en cada etiqueta, a ver qué pasa. Con la propiedad `display` podemos cambiar el valor por defecto de cada etiqueta; probad a cambiarlas siguiendo las instrucciones del CSS. Por ejemplo, para cambiar un `span` de `inline` a `block`, para que se extienda en horizontal:

```css
span {
  display: block;
}
```

Para ver el resultado de cada cambio podéis usar las herramientas de desarrollo de Chrome, combinadas con la función "Inspect" del menú que aparece pulsando el botón derecho sobre cualquier elemento de la página.

![Inspect en Chrome](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-47d1db4468da1a517c1f9f29f163084d18f029a9%2Fcss-inspect.gif?alt=media)

#### Colocando cubos

Puede ser esclarecedor imaginarnos que somos una niña colocando cubos en filas dentro de una caja horizontal (en esencia es así como los impresores antiguos solían maquetar una página impresa para una publicación: cada "bloque" de texto era realmente un bloque de palabras unidas por espacios). La página es la caja donde metemos los cubos; para cada uno podemos elegir la altura a la que lo ponemos dentro de la línea. El resultado será parecido a lo que vimos en [la sesión sobre Flexbox](https://books.adalab.es/materiales-del-curso-pw-ft/modulo-1-html-y-css/maquetacion/1_4_0_intro_a_la_leccion/1_4_1_flexbox). Esta es la visualización `display: inline`.

![Cajas con display: inline](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-535d8f5b03711e95d64143c1bb608fda8aa85e92%2Fcss-display-inline.png?alt=media)

Podéis jugar con el formateo en [este Codepen](https://codepen.io/adalab/pen/WNgMXRq?editors=1100). Observad cómo las etiquetas `inline` no tienen tamaño propio, sino que se ajustan al tamaño del texto o las imágenes que contienen; además "fluyen" dentro de la caja que las contiene.

Ahora llega el momento en el que que la niña ve que la imagen le descuadra toda la caja, así que quiere ponerla en una línea aparte. Lo que estamos haciendo básicamente es crear cajitas más pequeñas para cada párrafo y para la imagen; son `div`, con visualización `display: block`.

![Cajas con display: box](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-a3defe1558e7981f5520ef00119d76b7c7dc29b4%2Fcss-display-box.png?alt=media)

En [este Codepen](https://codepen.io/adalab/pen/JjapBdE?editors=1100) veréis cómo funciona el formateo. Algunas cajas de párrafo (`div`) no se llenan del todo, pero todas llegan hasta la derecha; estas cajas sí tienen tamaño fijo, que se puede cambiar, con independencia de lo que contengan. Fijaos también en cómo para centrar la imagen en su párrafo tenemos que actuar sobre el `div` que la contiene:

```css
.image {
  text-align: center;
}
```

#### Formateo interno y externo

Si nos fijamos bien, veremos que la visualización especificada con `display` puede afectar tanto a elementos contenidos como al elemento contenedor. Normalmente el elemento contenedor se adapta (hasta ciertos límites) a los elementos contenidos; y al revés, el elemento contenido también puede adaptarse al elemento contenedor. Por eso el formateo puede ser complicado, dependiendo del modo de visualización de los elementos.

Las etiquetas con visualización `inline` les dicen a sus hijas (o al texto que contengan): "yo no tengo tamaño, decidme qué tengo que pintar dentro y yo me adapto". Y a su contenedora: "ponme en línea con las demás". Por contra, las etiquetas con visualización `block` les dicen a sus hijas: "mi tamaño es este, colocaos como podáis", aunque si no les imponemos tamaño se adaptan en altura. Y a su contenedora: "hazme hueco en la siguiente línea".

¿Qué pasa si queremos una caja con tamaño fijo, pero que se coloque en línea con las demás? Para eso está la visualización `inline-block`: se puede especificar el tamaño y fluye en la línea. Un ejemplo típico es un botón, donde podemos especificar tamaño pero que se coloca en línea. En [el siguiente Codepen](https://codepen.io/adalab/pen/rNZJZNz?editors=1100) veréis cómo los botones tienen tamaño fijo y se colocan en línea sin ningún problema.

Pero un momento: si las etiquetas con visualización `inline` no tienen tamaño fijo, ¿por qué le podemos poner `width` y `height` a una imagen, que también tiene esta visualización? La respuesta es que la imagen es una etiqueta con truco: por un lado especifica una visualización para la caja, y por otro también indica qué imagen contiene (con el atributo `src`). Cuando le damos tamaño, no se lo estamos dando a la caja contenedora, *sino a la propia imagen que contiene*; recuerda que el tamaño de la caja se adapta al contenido. Sí, es confuso 😅.

### Otras visualizaciones

Hay bastantes más valores para `display` que no son *flow layout*; aquí veremos solo los más comunes.

#### Visualizaciones avanzadas

Algunos valores de `display` son la puerta de entrada a visualizaciones complejas:

* `flex`: define un flexbox, como vimos en [la sesión correspondiente](https://books.adalab.es/materiales-del-curso-pw-ft/modulo-1-html-y-css/maquetacion/1_4_0_intro_a_la_leccion/1_4_1_flexbox).
* `grid`: define una rejilla, como vamos a ver en [una sesión sobre grid](https://books.adalab.es/materiales-del-curso-pw-ft/modulo-1-html-y-css/maquetacion/1_11_0_intro_a_la_leccion/1_11_1_css_grid).

Otros nos permiten hacer que cualquier etiqueta se porte como algunas que ya conocemos:

* `table`: define una tabla sin necesidad de usar `<table>`.

Dentro de la tabla, podemos imitar cada elemento:

* `table-row`: se comporta como `<tr>`.
* `table-cell`: se comporta como `<td>`.
* `table-header-group`: se comporta como `<thead>` y nos permite convertir su contenido en cabeceras `<th>`.
* `table-row-group`: se comporta como `<tbody>`.
* `table-footer-group`: se comporta como `<tfoot>`, de nuevo convirtiendo las celdas en `<th>`.
* `table-caption`: se comporta como `<caption>`.

### 📂 Recursos externos

* [Guía de CSS Tricks](https://css-tricks.com/almanac/properties/d/display/).
* [Referencia en MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/display).



# 1.4.2 Posicionamiento

Antes de que existiera flexbox, el posicionamiento con la propiedad `position` era la principal opción para elaborar diseños complejos. En cualquier caso todavía puede que nos encontremos con soluciones muy elaboradas o código ya resuelto con este sistema, así que vamos a ver cómo funciona.

### Posicionando con `position`

La propiedad `position` nos permite afinar la posición de cada elemento en una página web. Además, con `position` podemos conseguir que los elementos cambien su comportamiento a la hora de hacer *scroll* (desplazamiento) en la página o en su caja contenedora; y que modifiquen la posición de otros objetos al modificar la suya propia. También podemos sacar un elemento del flujo de la página para que el resto de elementos (contenedor y elementos hermanos) no lo tengan en cuenta.

#### Coordenadas de posición

La posición en sí se indica con cuatro propiedades: `top`, `left`, `bottom` y `right`. Nos permiten indicar coordenadas desde la esquina superior izquierda (`top` y `left`), o desde la esquina inferior derecha (`bottom` y `right`). En caso de conflicto, por ejemplo si indicamos a la vez `top` y `bottom` o `left` y `right`, se intentarán respetar todas (modificando la altura o la anchura del elemento), y si no es posible se usarán con preferencia `top` y `left`.

![Coordenadas top, left, bottom y right](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-c800cf250798c4a63e419fc3c63bd2da47db9680%2Fcss-position-coords.svg?alt=media)

Cómo actúen estas coordenadas depende de la posición elegida, como vamos a ver a continuación.

#### Valores de `position`

La propiedad `position` tiene cinco valores posibles:

* `static`: es la posición por defecto en todos los elementos HTML. No le afectan las coordenadas `top`, `left`, etc. aunque las especifiquemos.
* `relative`: permite modificar la posición de un elemento en función de su posición actual en la página. Las coordenadas moverán el elemento respecto a la posición que tenía originalmente. Muy útil para "darle un empujoncito" a una etiqueta y que vaya a la posición deseada.
* `absolute`: saca al elemento del flujo de la página, es decir, hace que su contenedor y los elementos de antes y después no lo tengan en cuenta a la hora de posicionarse y definir su tamaño. Además, posiciona el elemento de forma absoluta en la página según las coordenadas que le demos, usando como referencia el elemento `<body>` o en su defecto del primer elemento contenedor que tenga una posición diferente a static (posición por defecto).
* `fixed`: saca a un elemento del flujo normal de la página y permite colocarlo en función de la ventana del navegador. Además, este tipo de elementos mantienen su posición cuando hacemos *scroll* en la página (como si se mantuviesen anclados en un mismo punto), de ahí su nombre fixed (fijo).
* `sticky`: posiciona el elemento de forma normal (como si fuera `static`), y después lo coloca en la caja con *scroll* más próxima siguiendo las coordenadas especificadas. No afecta si no hay *scroll*.

En [este Codepen](https://codepen.io/adalab/pen/BaOYgQG?editors=1100) vamos a ver cómo funcionan todos los diferentes posicionamientos. Aseguraos de reducir la ventana hasta que aparezca la barra de *scroll* a la derecha. Ahora haced *scroll* hacia abajo, tanto en la página como en el contenedor morado, para ver las diferencias entre `absolute`, `fixed` y `sticky`:

* `absolute` queda fija dentro de la página, y se mueve con la página; usa coordenadas absolutas en la página.
* `fixed` queda fija en la página, y no se mueve aunque hagamos *scroll*; usa también coordenadas absolutas en la página.
* `sticky` queda siempre visible dentro de su contenedor (no de la página), por tanto se comporta igual que `absolute` en este caso; pero requiere coordenadas relativas al contenedor y no a la página.

![Scroll en contenedor y en página](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-0bdb7cb1253e3c83ff44cea97c3cdcceebb51a3c%2Fcss-position-scroll.png?alt=media)

Podéis ver también que si cambiamos el tamaño de la ventana, todos los posicionamientos se descalabran. Por desgracia, la propiedad `position` no es muy "responsive" que digamos; por eso ha caído un tanto en desuso frente a flexbox y a grid. Pero en ciertas circunstancias nos vendrá bien conocerla.

#### Eje Z y `z-index`

¿Qué ocurre cuando dos imágenes ocupan la misma posición? ¡Que se superponen, claro! La última en aparecer en el HTML será la que aparezcan encima. Pero a veces no queremos que se siga este orden; puede que prefiramos cambiarlo. Para eso existe la propiedad `z-index`: un número relativo que indica la cercanía a la observadora: los números más altos aparecerán más cerca. Es como si tuviéramos un eje Z saliendo de la página y apuntando hacia nosotras, como complemento de los ejes X e Y tradicionales. Por defecto el `z-index` valdrá cero, así que podemos mostrar etiquetas por encima con `z-index>0` o dejarlas por debajo con `z-index<0`.

En [este otro Codepen](https://codepen.io/adalab/pen/dyqmbBv?editors=1100) hemos cambiado el orden de aparición de nuestras amigas, pero no queremos que aparezcan de cualquier manera sino apiladas hacia abajo y hacia la derecha. Para ello le hemos asignado una profundidad a cada una. Al generar la página, se tiene en cuenta la profundidad para ir pintando capa tras capa. En la siguiente imagen podéis ver cómo el navegador monta esta "página en profundidad" por capas según los valores asignados para esta coordenada Z imaginaria.

![Humoristas en profundidad](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-1a70273b5adc65f341e91f10cff2941e4b9efeae%2Fcss-position-depth.svg?alt=media)

(A la gran María Antonieta no la hemos podido superponer del todo, porque tiene posición `sticky`: sólo podemos desplazarla a la derecha o hacia abajo de su posición original, pero no a la izquierda o hacia arriba porque la posición `sticky` sólo modifica el comportamiento cuando hay *scroll*.)

### 📂 Recursos externos

* [Referencia MDN de `position`](https://developer.mozilla.org/es/docs/Web/CSS/position).
* [Libro Introducción a CSS - Capítulo 5 Posicionamiento y Visualización](https://librosweb.es/libro/css/capitulo_5/tipos_de_elementos.html).
* Vídeo para entender el [posicionamiento web](https://www.youtube.com/watch?v=13CbCpAnvYI) con Liher Sanchez.
* Entendiendo [Position relative y absolute](https://www.youtube.com/watch?v=lSfKpltbvJs) con Veritechie.
* Vídeo para entender [z-index](https://www.youtube.com/watch?v=u2O_ys4X1cQ) con Wmedia.
* Referencia MDN para [`float`](https://developer.mozilla.org/es/docs/Web/CSS/float) y [`clear`](https://developer.mozilla.org/en-US/docs/Web/CSS/clear) (la segunda en inglés).

### Ejercicios

Esta sesión es breve pero crucial, así que os dejamos aquí estos ejercicios donde practicaremos lo que hemos aprendido. Al final hay un ejercicio opcional; si llegas sería estupendo que intentes completarlo.

**1. Desplazando divs relativamente**

Define un documento HTML con un div madre (`divMadre`), dentro del cual existan otras 3 cajas contenedoras div (`div1`, `div2` y `div3`), cada una de ellas con unas dimensiones de 300x300px, 40 píxeles de margin en todas direcciones, 30 píxeles de padding en todas direcciones y un background color diferente. Usando posicionamiento relativo genera un desplazamiento de los div de la siguiente manera:

1. El div 1 deberá desplazarse 100 píxeles a la derecha y 50 píxeles hacia abajo respecto a lo que sería su posición normal.
2. El div 2 deberá desplazarse 150 píxeles a la izquierda y 320 píxeles hacia arriba respecto a lo que sería su posición normal.
3. El div 3 deberá desplazarse 180 píxeles a la derecha y 240 píxeles hacia arriba respecto a lo que sería su posición normal.

**2. Vente conmigo**

> **Nota:** este ejercicio es importante, intenta hacerlo mientras leas la lección.

El objetivo del ejercicio es tener una cabecera visible siempre, como en una hoja de cálculo.

1. Crea un documento HTML con una cabecera y un contenedor principal.
2. Añade suficiente texto al contenedor principal como para que la página se muestre con *scroll* (barras de desplazamiento). Puedes generar el texto con un tradicional (y aburrido) [Lorem Ipsum](https://loremipsum.io/) o con el magnífico [Chiquito Ipsum](https://www.chiquitoipsum.com/).
3. Añade fondo morado a la cabecera y consigue que se mantenga fija arriba.
4. Haz que la cabecera no tape el contenedor principal cuando no hemos hecho *scroll*, sin utilizar `margin` ni `padding` (PISTA: posiciona el contenedor principal).
5. Haz que cuando la usuaria haga *scroll*, la cabecera se apile o superponga por encima del contenedor principal.

**3. Junta a las humoristas**

> **Nota:** este ejercicio es importante, intenta hacerlo mientras leas la lección.

1. Parte del [Codepen inicial](https://codepen.io/adalab/pen/BaOYgQG?editors=1100).
2. Reduce la distancia entre las humoristas en 10px (es decir, 10px más juntas de lo que están).
3. No cambies los `margin` ni `padding` existentes: modifica solo el posicionamiento con la propiedad `left`.

**4. Mensaje secreto**

1. Parte del [Codepen superpuesto](https://codepen.io/adalab/pen/dyqmbBv?editors=1100).
2. Cambia las coordenadas Z con `z-index` en el CSS.
3. Descubre el mensaje secreto debajo de las imágenes. ¿Qué valores de `z-index` tendrás que poner? Ojo: ten cuidado con el HTML porque las imágenes aparecen un tanto desordenadas, para darle más reto al asunto 😁.
4. Reordena las imágenes para que Lina Morgan aparezca al frente.

**5. Cajas sobre cajas**

Vamos a definir un documento HTML con 3 cajas contenedoras `div` (div1, div2 y div3):

* La primera con unas dimensiones de 500x500px y color de fondo amarillo.
* La segunda con dimensiones 300x300px y color de fondo verde.
* La tercera con dimensiones 150x150px y color de fondo azul.

Usando el posicionamiento absoluto establecemos para el div2 y el div3 el mismo origen que para el div1, de modo que las cajas se superpongan y el efecto generado sea ver un cuadrado azul sobre uno verde que a su vez está sobre uno amarillo.

Ahora tenemos que hacer que las cajas estén centradas vertical y horizontalmente añadiendo:

* 40px de padding y 2px de borde al div1.
* 75px de padding al div2.
* 20px de borde de puntos al div3.

Para esto usa `box-sizing: border-box;`.

**6. Aviso de cookies**

Vamos a definir un documento HTML con varios `div` que contengan suficiente texto como para que la página se muestre con*scroll*(barras de desplazamiento). El último de los `div` debe:

* contener el texto *"Esta página web utiliza cookies. Si continúa navegando acepta el uso de cookies."*.
* un valor `height` (altura) de 100 píxeles y color de fondo amarillo.

Usando el posicionamiento fixed, tenemos que fijar este `div` en la parte inferior de la página de modo que se visualice siempre, aún cuando hagamos scroll.

**7. Ese texto necesita aire**

Crea un texto que ocupe el 86% de la pantalla y esté centrado horizontalmente dentro del body. Usaremos la propiedad `max-width` para dar un ancho máximo de 600px. [Más info acerca de max-width](http://devdocs.io/css/max-width).

**8. Dame PDF**

Crea un enlace de descarga de un archivo (por ejemplo en PDF) con una etiqueta que refleje el tipo del archivo y que siempre esté a la derecha.

![Enlace de descarga de un pdf](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-59e3f3df035b4a4999c8b3735a601ccf75669d36%2F1_5_ejercicio_2_pdf.png?alt=media)

**9. BONUS: Esto es un artículo**

> **Nota:** este ejercicio es opcional, te animamos a hacerlo si tienes tiempo.

Crea una composición similar a la de la imagen.

![Muestra](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-8c68b4f1f437ef7932a754f89276a65797e602f6%2F1_5_ejercicio_12_muestra.png?alt=media)

Las dimensiones de esta composición serían las siguientes:

* El body tendrá un borde de 8px.
* El contenido estará centrado dentro del body e irá dentro de un `div` que tendrá 106px de margen superior.
* En el primer texto irá el nombre del autor con una fuente de 18px y un margen inferior de 40px.
* El titular irá después con un tamaño de fuente de 32px y un margen inferior de 32px.
* Cada párrafo tendrá un tamaño de fuente de 18px y un margen inferior de 27px.
* El enlace tendrá un padding superior e inferior de 8px y otro izquierdo y derecho de 16px y un margen izquierdo de -16px.


# 1.4.3 Transform

> **Nota:** es interesante que conozcas la existencia de la propiedad `transform`, pero puedes profundizar en ella más adelante.

La última manera de modificar la posición de un elemento HTML que vamos a ver es la propiedad `transform`, con la que podemos realizar una serie de ajustes al elemento.

### Transformaciones 2D

En estas transformaciones los elementos cambian y se mueven por la página. Tened en cuenta que `transform` no saca al elemento del flujo de la página como `position: absolute` o `position: fixed`; el resto de elementos de la página se comportan como si no hubiésemos aplicado una transformación a uno de ellos, respetando su "hueco" original.

#### Funciones 2D

* `translate(dx, dy)`: mueve el elemento en el plano las distancias especificadas. También tenemos las funciones individuales `translateX(dx)` y `translateY(dy)`.
* `rotate(ángulo)`: rota el elemento alrededor de un punto del plano. El punto se especifica con la propiedad `transform-origin`.
* `scale(fx, fy)`: nos permite modificar las dimensiones del elemento por los factores dados para X e Y. También tenemos las funciones individuales `scaleX(fx)`, `scaleY(fy)` y `scaleZ(fz)`.
* `skew(ax, ay)`: estira el elemento en ambas direcciones, dándole el ángulo especificado. También tenemos las funciones individuales `skewX(a)` y `skewY(a)`. El efecto es parecido a un rombo.

Vamos a ver un ejemplo sencillo: en [este Codepen](https://codepen.io/adalab/pen/poOVWKV?editors=1100) hay varias cajas que parece que se van cayendo de la fila.

![Cajas cayendo](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-96b7bc29d2e32b98d6a5f8440751faf6dd16b430%2Fcss-transform-boxes-falling.png?alt=media)

Para cada una estamos aplicando varias transformaciones seguidas:

* una traslación hacia abajo, simulando una caída;
* una rotación desde el centro que va incrementándose;
* y un escalado para reducir cada caja, de 0,95 a 0,8.

Por ejemplo para la caja 3, tenemos:

```css
#c3 {
  transform: translateY(30px) rotate(10deg) scale(0.9);
}
```

Primero aplicamos una traslación en píxeles, luego una rotación en grados y finalmente un escalado con un factor absoluto. Para ver cómo funciona la transformación, probad a descomentar las diferentes líneas de `#c1`.

Varias notas más sobre este Codepen:

* Los ejes son simplemente `<div>` con `border-top: # #4a86e8 solid;`. Observad cómo el eje X va hacia la derecha, mientras que el eje Y va hacia abajo, como se muestra en la figura.
* También es interesante ver cómo aplicar una transformación solo afecta al elemento implicado; la caja 5 sigue con su rollo como si nada.

Colocar elementos es más sencillo con posiciones absolutas: de hecho `transform` se usa mucho junto con posiciones fijas o absolutas para centrar elementos horizontal y verticalmente. En [este Codepen](https://codepen.io/adalab/pen/LYJmeQr?editors=1100) podemos ver cómo primero colocamos el elemento que queremos centrar a la mitad de su caja contenedora con `top: 50%; left: 50%;` (flecha azul), y luego con un `transform` lo trasladamos a un 50% de su propia longitud hacia arriba y a la izquierda siguiendo la flecha amarilla:

```css
#centrado {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

El resultado final es un elemento centrado en su caja contenedora. Probad a quitar estas propiedades una a una para ver cómo queda el elemento. Tened en cuenta que cuando se transforma un elemento, no cambian solo los bordes; todo su contenido se distorsiona según le digamos.

![Ejemplo de centrado con position y transform](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-be85bdb760e5d8b93e3b89295fec2ad22589cd37%2Fcss-transform-center.png?alt=media)

#### Otras propiedades

Hay otras propiedades que podemos aplicar para refinar el comportamiento de las funciones:

* `transform-origin`: la más útil, nos permite seleccionar el punto a partir del cual se aplican las transformaciones. Por ejemplo si queremos girar un elemento a partir de su centro (`center`, valor por defecto) o un punto determinado (ejemplo: `transform-origin: 10px -20px`). [Más información](https://developer.mozilla.org/es/docs/Web/CSS/transform-origin).
* `transform-box`: nos permite elegir si transformamos solo el contenido (`content-box`), el borde (`border-box`), el relleno (`fill-box`), el trazo (`stroke-box`) o la vista SVG (`view-box`). Para uso avanzado. [Más información (en inglés)](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-box).
* `transform-style`: selecciona si las transformaciones son planas (`flat`, valor por defecto) o en 3D (`preserve-3d`), ver a continuación.

### Transformaciones 3D

En estas transformaciones permitimos que los elementos se "salgan" de la página a lo largo de un eje Z invisible, hagan piruetas, y luego terminen proyectados sobre la página otra vez. No son para las que se asustan fácilmente, pero una vez que se tiene cierta familiaridad permiten hacer cosas muy chulas.

![Cubo en 3D, CSS puro](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-908722dbfc7a10ca88f683374e89153614cf9625%2Fcss-transform-cube.png?alt=media)

Vamos a empezar con un ejemplo: [un Codepen de un simple cubo](https://codepen.io/adalab/pen/vYzRwBB?editors=1100) hecho con CSS puro (sin JavaScript). Para formar las seis caras del dado partimos siempre de un cuadrado plano sobre la página, lo movemos hacia su posición final y lo giramos según haga falta. Por ejemplo para la cara derecha (con un 2):

```css
#derecha {
  transform: translateX(50px) rotateY(90deg);
}
```

Primero movemos la cara hacia la derecha (eje X en positivo 50 puntos), y luego la giramos 90 grados alrededor del eje vertical Y para dejarla en su sitio. Las funciones 3D se aplican en secuencia; tened en cuenta que los giros no son conmutativos, es decir: no es lo mismo girar sobre el eje X y luego sobre el Y que al revés. Y también: los giros son respecto del centro del elemento, a no ser que digamos lo contrario.

Fijaos que, aunque la representación sea compleja y el CSS no sea trivial, el código HTML está bastante limpio. Hemos mostrado claramente los ejes para entender mejor el sentido de cada giro: el eje X es horizontal hacia la derecha, el eje Y vertical hacia arriba, el eje Z se sale de la página y apunta hacia nosotras. Mientras tengamos claro hacia dónde va cada eje, podremos seguir los giros sin problemas.

#### Funciones 3D

Tenemos a nuestra disposición varias funciones específicas de 3D:

* `rotateX(ángulo)`, `rotateY(ángulo)`, `rotateZ(ángulo)`: rota el elemento alrededor del eje indicado.
* `scale3d(fx, fy, fz)`: nos permite modificar las dimensiones del elemento por los factores dados. También tenemos las funciones individuales `scaleX(fx)`, `scaleY(fy)` y `scaleZ(fz)`.

Para ilustrarlas, volvemos a nuestras amigas las humoristas. En [este Codepen](https://codepen.io/adalab/pen/gOdedKO?editors=1100) replicamos la imagen que ya vimos en [la lección sobre posicionamiento](https://books.adalab.es/materiales-del-curso-pw-ft/modulo-1-html-y-css/maquetacion/1_5_0_intro_a_la_leccion/1_5_2_posicionamiento) para explicar el `z-index`, pero esta vez solo usando HTML y CSS. De nuevo mostramos los ejes para seguir los giros.

![Humoristas transformadas](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-282608a1296be6559a9a40be039c916d07a224b3%2Fcss-transform-humoristas.png?alt=media)

El realismo 3D es apabullante, cuidado que ese eje Z nos pincha un ojo 😉.

#### Funciones 3D avanzadas

Estas funciones se usan menos.

* `perspective(z)`: fija la distancia del punto de perspectiva (ejemplo: `800px`). Como en fotografía, cuanto más cerca hagamos "la foto" más distorsionada saldrá la imagen.
* `rotate3d(x, y, z, ángulo)`: genera una rotación alrededor del punto dado, del ángulo especificado.
* `matrix3d(4x4)`: múltiples transformaciones en una, poco recomendable.

#### Otras propiedades 3D

Las mencionamos solo de pasada, aunque está bien conocerlas.

* `transform-origin`: ya la vimos antes, pero ahora también podemos seleccionar un punto en el espacio 3D: `transform-origin: 10px -20px -30px`. [Más información](https://developer.mozilla.org/es/docs/Web/CSS/transform-origin).
* `perspective`: equivalente a la función `perspective()`, nos permite seleccionar la distancia del punto de perspectiva (ejemplo: `800px`). Como en fotografía, cuanto más cerca hagamos "la foto" más distorsionada saldrá la imagen. [Más información](https://developer.mozilla.org/es/docs/Web/CSS/perspective).
* `perspective-origin`: nos permite seleccionar el punto desde el cual calculamos la perspectiva. [Más información (en inglés)](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin).

### 📂 Recursos externos

* Referencia MDN: [`transform`](https://developer.mozilla.org/es/docs/Web/CSS/transform).
* Referencia MDN: [funciones de transformación](https://developer.mozilla.org/es/docs/Web/CSS/transform-function). No hagáis caso cuando dicen que alguna función es experimental, a menudo se ha quedado la info desfasada en la versión en español; comprobad siempre primero en la [versión en inglés](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function)
* [Guía de transformación](https://css-tricks.com/almanac/properties/t/transform/) en CSS Tricks.
* [Tutorial de DigitalOcean](https://www.digitalocean.com/community/tutorials/css-translatez-and-perspective), interesante para entender cómo funciona `perspective`.

### Ejercicios

Esta sesión también ha sido breve; así que tras los ejercicios de repaso encontrarás un par de ejercicios opcionales donde practicaremos todo el contenido del posicionamiento.

**1. Mueve las cajas**

> **Nota:** este ejercicio es importante, intenta hacerlo mientras leas la lección.

¿Sabrías resolver estos [estos ejercicios de transform en Codepen](https://codepen.io/adalab/pen/YLKaox)?

**2. Transforma las caras**

> **Nota:** este ejercicio es importante, intenta hacerlo mientras leas la lección.

En el [Codepen del cubo](https://codepen.io/adalab/pen/vYzRwBB?editors=1100), cambia los valores indicados en el CSS, para ver cómo está hecho el cubo. En particular, ve cambiando la variable `--angulo` para que veas cómo las caras del cubo se van girando una a una.

**3. Despliega el cubo**

De nuevo partimos del [Codepen del cubo](https://codepen.io/adalab/pen/vYzRwBB?editors=1100). Ahora queremos desplegarlo para que quede igual que la figura de abajo. ¿Sabrías hacerlo? Pista: usa solo transformaciones 2D.

![Cubo desplegado sobre el plano](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-76caaf7ce4e2c17d158b06a8d3e260e3ecb7a482%2Fcss-transform-exercise-cube.png?alt=media)

**4. BONUS: Una web sencilla**

> **Nota:** este ejercicio es opcional, te animamos a hacerlo si tienes tiempo.

Vamos a crear una web sencilla, con las siguientes características:

1. Una cabecera que consta únicamente de un título.
2. Un cuerpo principal que consta de un montón de párrafos, tantos como para que la página tenga scroll.
3. Un pie de página con:
   1. El nombre de la empresa.
   2. Un listado de redes sociales de la empresa (en formato texto o imagen) que aparezcan en línea.
4. Un texto para indicar que el sitio web usa cookies con un enlace para ver más info, que aparece en la esquina inferior derecha de la pantalla y que sigue ahí al hacer scroll.

La web que vamos a crear consta de las siguientes características:

1. Toda la web usa una tipografía sin serifa (`sans-serif`).
2. Tiene como título "Tecnologías web".
3. Tiene un párrafo que describe qué son las tecnologías web.
4. Al final del párrafo, tiene un listado de tecnologías compuesto por: HTML, CSS y JavaScript, cada una de las cuales aparece subrayada para indicar que se puede interactuar.
5. Al poner el ratón sobre cualquiera de ellas:
   1. El cursor cambia para indicar que estamos obteniendo ayuda.
   2. Aparece un tooltip (recuadro flotante de 400px por 200px) de color blanco, con el nombre de la tecnología como título del tooltip y una breve descripción de esta.

**5. BONUS: Con buenos modales**

> **Nota:** este ejercicio es opcional, te animamos a hacerlo si tienes tiempo.

Vamos a continuar desde el ejercicio 8 de la lección de flexbox y vamos a añadir una modal.

Crearemos un elemento que se superponga sobre la página. Ese elemento tendrá un fondo oscuro transparente y un `div` en su interior. Ese `div` entero estará centrado tanto vertical como horizontalmente y contendrá un titular, un texto y un par de botones. El resultado debe ser similar a la siguiente imagen.

![Ejemplo](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-5fff382fd537d70d2acbca01eada3dbf0542bc07%2Fejercicio-8-3.png?alt=media)

En la imagen, es importante observar que la cabecera estará por debajo de la ventana emergente.
