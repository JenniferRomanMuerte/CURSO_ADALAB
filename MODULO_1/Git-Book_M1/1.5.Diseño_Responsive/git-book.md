# 1.5.2 Elementos flexibles

## Imágenes
En este entorno responsive las imágenes y vídeos tienen su propia forma de afrontarse. Aunque a ambos formatos podemos darles dimensiones por porcentajes, tenemos varios casos en que la imagen o el vídeo queda demasiado grande o demasiado pequeño. Para ello existen unas propiedades que matizan el **width (ancho)** o el **height (alto):**

- `max-width`
- `min-width`
- `max-height`
- `min-height`

De esta manera no solo podemos definir un ancho/alto en porcentajes, sino marcar unos límites.

Por ejemplo: quiero que mi imagen se ajuste al **100% del contenedor** pero solo hasta un máximo de **600px**, controlando de esa manera que no se haga demasiado grande.

En maquetación responsive es muy buena idea meter las imágenes de contenido en un contenedor, dar a la imagen un ancho del **100%** y usar el contenedor para definir el tamaño que debe tener la imagen.
Esto se hace para poder controlar diferentes imágenes cuando no podemos asegurar los tamaños que van a tener sin que interfiera con la estructura.

➡️ *Ejemplo de imagen responsive en [Codepen](https://codepen.io/adalab/pen/XxVGQB)*

---

## Vídeos
Los vídeos son más complicados de controlar, porque la etiqueta `<video>`, al contrario que la `<img>`, no redimensiona proporcionalmente el vídeo. Pero también hay formas de suplir esto, ya sea por CSS o usando librerías en JS.

---

## Tipografía
Para el tema de la tipografía hay varias escuelas y formas de manejarla según el caso:

- **Usar unidades fijas** como los píxeles, e indicarle en cada caso qué tamaño de fuente debe tener cada texto.
  Ejemplo:
  - En móvil mi texto básico será de **18px** porque la pantalla es más pequeña y quiero que se lea mejor.
  - En tablet lo bajo a **16px**.
  - En escritorio lo vuelvo a poner a **18px**.
  - En pantallas muy grandes usaré **20px o 24px**.

- **Usar unidades relativas** como los `rem`.
  `rem` es una unidad relativa al tamaño de texto especificado en el elemento raíz (`<html>`).
  De manera que si `<html>` está a 16px (valor por defecto), `1rem` equivaldrá a 16px.

Esto nos ayuda a poder ajustar todas nuestras medidas de forma proporcional cambiando solo el tamaño de fuente de la etiqueta `<html>`.

➡️ *Ejemplo en [Codepen](https://codepen.io/adalab/pen/WadWay) (Prueba a cambiar el tamaño de fuente de la etiqueta html).*

**¡En el nombre de la diosa frontender!**
¿Cómo vamos a calcular los rems que corresponden a nuestros píxeles?
Pues con una [calculadora de rem](https://nekocalc.com/es/px-a-em-conversor).

---

## Max-width, min-width, max-height, min-height
Estas propiedades que permiten "limitar" anchos y altos se pueden aplicar a casi cualquier contenedor (que admita dimensiones, como aquellos con `display: block` o `inline-block`).
De esta manera podemos tener elementos que se dimensionen a base de porcentajes pero sobre los que tengamos un poco de control, para que en determinados escenarios no se hagan demasiado pequeños ni demasiado grandes.

---

## Ejercicios

### 1. No puedo vivir sin rems
Partiendo de estos documentos:

**index.html**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles/main.css" />
    <title>:)</title>
  </head>
  <body>
    <div class="smiley">:)</div>
  </body>
</html>
```

**main.css**

```css
    html {
  font-size: 16px;
}
.smiley {
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-family: "courier new";
  font-weight: bold;
  font-size: 50px;
  color: #424242;
  background: #ffcc00;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
```

Pasa las medidas en píxeles a rem.
¿Qué tamaño de fuente tengo que poner para que mi careto mida 50x50?
¿Y para que mida 200x200?

### 2. Redimensiona las columnas
Como ya vimos en la sesión de flexbox, en este [Codepen](https://codepen.io/adalab/pen/LORKzX) tenemos dos columnas, una (aside) que ocupa el 50% del ancho hasta 320px y la otra (.main) que ocupa el resto:
- Tirando con el ratón, redimensiona la ventana del navegador haciéndola tan pequeña como para que las dos columnas ocupen lo mismo.
- Agranda hasta que .aside se quede en 320px de ancho mientras .main ocupa el resto del espacio.

### 3. Vamos a pensar
En el siguiente [Codepen](https://codepen.io/adalab/pen/MOjMPr) hay un módulo con una noticia sobre Bill Murray. Nada nuevo, ¿no?
¿Qué pasa si duplico el párrafo de texto?
¿Y si duplico otra vez?


# 1.5.3 Media queries

Ya hemos visto cómo adaptar algunos elementos a diferentes tamaños de pantalla con flexbox. Pero, ¿es posible buscar soluciones adaptadas siempre? ¿Qué podemos hacer para cambiar drásticamente la pinta de una página según el dispositivo?

---

## 🧩 @media al rescate

Es posible que os hayáis encontrado la típica página que cambia los menús según el dispositivo: en la versión de escritorio tenemos un menú superior con varias opciones, mientras que en móvil encontramos un "menú de hamburguesa" (la típica ☰, en teoría similar a una 🍔) que se despliega al pinchar y muestra dos niveles. Sin ir más lejos, en la página de [Adalab](https://adalab.es): tal parece que fueran dos diseños completamente diferentes, ¿no?

> Página de Adalab en escritorio y en tablet: el menú superior se convierte en una hamburguesa desplegable.

¡Pues es que son dos diseños diferentes! Usando **media queries** (o "consultas de medios" en español) podemos aplicar reglas de CSS distintas según las condiciones que especifiquemos. Aplicando unas condiciones sencillas podemos crear diseños que se adaptan perfectamente al tamaño del dispositivo.
Las media queries tienen este aspecto:

```css
@media all and (min-width: 500px) {
  /* Reglas CSS que aplicaremos */
}

@media all and (width > 500px) {
  /* Reglas CSS que aplicaremos */
}
```

# 1.5.3 Media queries

Ya hemos visto cómo adaptar algunos elementos a diferentes tamaños de pantalla con flexbox. Pero, ¿es posible buscar soluciones adaptadas siempre? ¿Qué podemos hacer para cambiar drásticamente la pinta de una página según el dispositivo?

---

## 🧩 @media al rescate

Es posible que os hayáis encontrado la típica página que cambia los menús según el dispositivo: en la versión de escritorio tenemos un menú superior con varias opciones, mientras que en móvil encontramos un "menú de hamburguesa" (la típica ☰, en teoría similar a una 🍔) que se despliega al pinchar y muestra dos niveles. Sin ir más lejos, en la página de [Adalab](https://adalab.es): tal parece que fueran dos diseños completamente diferentes, ¿no?

![Página de Adalab en escritorio y tablet](https://books.adalab.es/materiales-del-curso-pw-ft/~gitbook/image?url=https%3A%2F%2F2908775143-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFeL5m4e6ES4PMjY0BYJw%252Fuploads%252Fgit-blob-fc228399be8d239c8370b1142a2ba9ba18e4f8db%252Fcss-adalab-media.svg%3Falt%3Dmedia&width=768&dpr=4&quality=100&sign=e43a908a&sv=2)

> Página de Adalab en escritorio y en tablet: el menú superior se convierte en una hamburguesa desplegable.

¡Pues es que son dos diseños diferentes! Usando **media queries** (o "consultas de medios" en español) podemos aplicar reglas de CSS distintas según las condiciones que especifiquemos. Aplicando unas condiciones sencillas podemos crear diseños que se adaptan perfectamente al tamaño del dispositivo.
Las media queries tienen este aspecto:

```css
@media all and (min-width: 500px) {
  /* Reglas CSS que aplicaremos */
}
```

Otra forma de escribirlo muy interesante sería así:

```css
@media all and (width > 500px) {
  /* Reglas CSS que aplicaremos */
}
```

---

## 🧠 Tipos de medios

¿Qué son esos "medios" a los que se alude en el nombre? El uso básico que se le daba al principio a este término hacía referencia a la maquetación o layout que se empleaba para un medio impreso o para un medio digital (de pantalla):

```css
@media print {
  /* ... */
}
@media screen {
  /* ... */
}
```

Imaginemos el típico extracto digital del banco donde hay botones de navegación, links y demás. Cuando queramos imprimir el extracto, ¿realmente queremos imprimir todos esos elementos? Probablemente todas hemos imprimido en algún momento una página que no estaba pensada para ello, y el resultado ha sido descorazonador. Pues gracias a una media query podemos mostrar una página en pantalla e imprimir otra diferente.

El [Codepen de AdaBank](https://codepen.io/) muestra un extracto de un banco totalmente ficticio. Partiendo de la vista a tamaño completo, probad a mostrar la vista de impresión del navegador, normalmente con la opción "Imprimir…"; mirad cómo se imprimiría el Codepen (o en este caso, cómo se generaría el PDF).

![Página de AdaBank en vista de impresión](https://books.adalab.es/materiales-del-curso-pw-ft/~gitbook/image?url=https%3A%2F%2F2908775143-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFeL5m4e6ES4PMjY0BYJw%252Fuploads%252Fgit-blob-dfe87cb05e76dce9056e383b109f220b57fd57a9%252Fcss-adabank-print.png%3Falt%3Dmedia&width=400&dpr=3&quality=100&sign=71039780&sv=2)

> Página de AdaBank en vista de impresión.

Hay muchas movidas ahí que no pintan nada en un PDF o en una hoja impresa. Añadiendo una media query para print podemos eliminar botones y enlaces de la vista de impresión:

```css
@media print {
  button,
  a {
    display: none;
  }
}
```

En el ejercicio 3 veremos el resultado.

Hay un valor más aparte de print y screen: el valor all para englobar tanto impresión como pantalla, aunque no es demasiado útil. Como se explica en la [MDN](https://developer.mozilla.org/es/docs/Web/CSS/@media), en CSS2.1 se definieron otros valores adicionales que han caído en desuso.

---

## 💡 Queries comunes

Lo siguiente que queremos hacer es diferenciar visualizaciones según el tamaño de pantalla. Las queries más usuales tienen esta pinta:

```css
@media screen and (min-width: 1024px) {
  /* ... */
}
```

Los elementos indicados se aplicarán solo cuando el contenido se muestre en una pantalla (no en print) de al menos (anchura mínima) 1024 píxeles. También podemos usar max-width, en cuyo caso el ancho deberá tener como mucho 1024 píxeles; y para uso avanzado tenemos a nuestra disposición las propiedades min-height (altura mínima) o max-height (altura máxima).

Tened en cuenta que para calcular esta anchura se toma el marco interior de la ventana donde se muestra la página, lo que se llama el viewport (algo así como vista en español). Hay que restarle tamaño a la ventana porque hay que descontar el borde de la ventana, la barra de título, las barras del navegador y los marcadores. Y por supuesto la ventana puede tener diferente tamaño que el escritorio: normalmente es más pequeña pero también puede ser más grande.

![Cómo calcular el viewport](https://books.adalab.es/materiales-del-curso-pw-ft/~gitbook/image?url=https%3A%2F%2F2908775143-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFeL5m4e6ES4PMjY0BYJw%252Fuploads%252Fgit-blob-64143998221ff26ee94e468ca243d59f1aa0ea32%252Fcss-adalab-viewport.svg%3Falt%3Dmedia&width=400&dpr=3&quality=100&sign=ceeff676&sv=2)

En un móvil es bastante más normal que el viewport tenga el mismo tamaño que la pantalla, aunque tampoco es seguro: el navegador puede estar compartiendo pantalla con otra app, por ejemplo. Y fijaos que solo nos fijamos en el tamaño: no estamos mirando si es móvil o tablet. Si estamos en una ventana estrecha del navegador de escritorio nuestra web se mostrará igual que si fuera un móvil, aunque no lo sea.

Probad ahora a reducir el tamaño de la ventana con el [Codepen de AdaBank](https://codepen.io/): veréis cómo el color de fondo va cambiando, y el logotipo de arriba muestra en qué versión estamos. En este caso no hemos hecho mucho más; en el ejercicio 4 abajo seguiremos con ello.

---

## ⚙️ Queries avanzadas

Existen muchísimas otras media features, como podemos leer en la [referencia de MDN](https://developer.mozilla.org/es/docs/Web/CSS/@media). Podemos destacar:

- `aspect-ratio`: relación de aspecto entre anchura/altura;
- `orientation`: orientación de la pantalla: portrait (vertical) o landscape (horizontal);
- `resolution`: resolución del dispositivo, normalmente en puntos por pulgada (dpi);
- `hover`: hover cuando ocurre algo si el ratón pasa sobre un elemento, none cuando se desactiva este efecto (por ejemplo en un móvil);

Y bastantes otros más esotéricos.

---

## 🎨 Rediseño con media queries

Cuando rediseñamos nuestro sitio para pantallas más pequeñas, tenemos que asegurarnos de que se muestra correctamente en cada caso. Recordad que siempre se aplica el último elemento que se encuentra en el CSS; así que si no colocamos bien los elementos es muy probable que no consigamos lo que queremos.

Hay dos formas de conseguir los diseños adecuados. La primera es empezar con el diseño de escritorio, y luego ir añadiendo features para tamaños más pequeños.

```css
/* Desktop */
@media screen and (max-width: 1024px) {
  /* Tablet */
}
@media screen and (max-width: 736px) {
  /* Mobile+ */
}
@media screen and (max-width: 480px) {
  /* Mobile */
}
```
Nota: a cada una de estas medidas que ponemos en las media queries las llamamos breakpoints, o puntos de ruptura.

Vamos a recorrerlos de arriba abajo para ver cuál será el que se aplique.




- Si tenemos una pantalla de, digamos, **1600px**: se aplica solo el diseño *Desktop*.
- Si tenemos una pantalla de **1000px**: primero se aplica el diseño *Desktop*, pero luego el *Tablet* lo "pisa" y será el que se imponga si hay conflicto. El resto se ignoran porque no se cumple la condición de `max-width: 736` ni `max-width: 480`.
- Si tenemos una pantalla de **600px**: se aplican todos los diseños menos *Mobile*, por lo que "manda" el último válido que es *Mobile+*.
- Si tenemos una pantalla de **300px**: se aplican todos los diseños, por lo que "manda" el último que es el *Mobile*.

Si en nuestro CSS empezamos con el tamaño más pequeño, entonces no conseguiremos lo que queremos: el último en aplicarse será el diseño *Tablet*, que ocultará los diseños *Mobile+* y *Mobile*.
Hay que tener en cuenta también que, si no hay conflicto (es decir, si las propiedades no se pisan unas a otras), pueden tener efecto varios diseños diferentes uno tras otro.

---

## 📱 Mobile first

Más adelante veremos el paradigma de diseño **mobile first**, o "primero en móvil": empezamos con el diseño para las pantallas más pequeñas, y vamos añadiendo visualizaciones más avanzadas para tablet y escritorio. En webs nuevas os recomendamos seguir este modelo: siempre es más fácil añadir que quitar.

En este caso el diseño que aparece al principio (sin media queries) será para móvil, y luego vamos añadiendo en sucesión los tamaños más grandes con `min-width`:

```css
/* Mobile */
@media screen and (min-width: 480px) {
  /* Mobile+ */
}
@media screen and (min-width: 736px) {
  /* Tablet */
}
@media screen and (min-width: 1024px) {
  /* Desktop */
}
```

Vamos a recorrerlos de nuevo:

- Si la pantalla es de, digamos, **300px**: solo se cumple el diseño *Mobile* y el resto se ignora.
- Si la pantalla es de **1000px**: se cumplen *Mobile*, *Mobile+* y *Tablet*, así que en caso de conflicto manda *Tablet*.

Cualquiera de los dos paradigmas es válido, aunque el **mobile first** se use más, y con razón. Lo importante es tener claro cómo se aplican los breakpoints, y no mezclar ambos paradigmas.

---

## 🧰 Otros usos

Podemos también usar **media queries** en otras situaciones que no son el típico `@media`:

- Importar hojas de estilo CSS diferentes con `@use`.
- Usar recursos específicos en algunos elementos HTML como `<style>` o `<link>`, con el atributo `media`.
- Monitorizar medios con las funciones `EventTarget.addEventListener()` o `Window.matchMedia()`.

Aunque es interesante saberlo, no vamos a profundizar más en estos usos.

---

## 📂 Recursos externos

- [CSS: Media queries (vídeo)](https://www.youtube.com/results?search_query=css+media+queries)
- [A Complete Guide to CSS Media Queries – CSS-Tricks](https://css-tricks.com/a-complete-guide-to-css-media-queries/)

---

## 🧪 Ejercicios

### 1️⃣ Trabaja con media queries

> Nota: este ejercicio es importante, intenta hacerlo mientras leas la lección.

Crea un `index.html` que contenga:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Viewport Sample</title>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

Sin que sirva de precedente, incluiremos una etiqueta `<style>` en el `<head>` con:

```css
.box {
  background: red;
  height: 100px;
}
```

Veremos que el div `.box` ocupará el ancho disponible y tendrá 100px de alto, y fondo rojo.

Añadamos nuestra primera media query: vamos a hacer que por encima de 550px el elemento `.box` tenga fondo azul. Para ello el CSS dentro de nuestra etiqueta `<style>` quedará así:

```css
.box {
  background: red;
  height: 100px;
}
@media all and (min-width: 550px) {
  .box {
    background: blue;
  }
}
```

Si ahora redimensionamos la ventana del navegador veremos que a partir de 550px de ancho nuestro elemento `.box` se vuelve azul.

Abramos ahora las herramientas de desarrollo de Chrome y lancemos el simulador de dispositivos móviles. Probemos varios dispositivos o resoluciones. ¿Qué pasa? ¿Cuándo se vuelve azul? ¿Cuándo se vuelve rojo?

---

### 2️⃣ Página que cambia de color

> Nota: este ejercicio es importante, intenta hacerlo mientras leas la lección.

Crea una web que, en función del ancho de la ventana del navegador, cambie su color de fondo:

- Si el tamaño de la ventana es menor de 480px → fondo rojo.
- Si el tamaño de la ventana está entre 480px y 768px → fondo amarillo.
- Si el tamaño de la ventana es mayor de 768px → fondo verde.

---

### 3️⃣ Imprimiendo extractos

> Nota: este ejercicio es importante, intenta hacerlo mientras leas la lección.

Esta será nuestra pequeña venganza a todos esos extractos de banco mal impresos.

Parte del [Codepen de AdaBank](https://codepen.io/).

1. Crea un fork del Codepen (para poder añadirlo a tu cuenta).
2. Descomenta el bloque de `@media print`.
3. Abre la vista de impresión (normalmente con la opción "Imprimir…").
4. Añade fondo blanco al imprimir.

¿A que mejora bastante con solo tres líneas de CSS?

---

### 4️⃣ Diseño responsive

Parte del [Codepen de AdaBank](https://codepen.io/).

Observa que en los diseños *Mobile+* y *Mobile*, las opciones de navegación de arriba (de "El banco" a "Desconecta") no caben bien.

1. Muestra estas opciones debajo del logotipo, en lugar de a la derecha.
2. Haz lo mismo con los enlaces de abajo ("Aviso legal" a "Obra social").
3. Modifica el extracto en sí para ocultar el saldo y reducir los conceptos para que la tabla no se salga de la pantalla.

---

### 5️⃣ Diseño mobile first

Parte del resultado del último ejercicio.

Cambia las visualizaciones para que sea *mobile first*: empieza con el diseño de móvil y luego ve añadiendo *features* para pantallas más grandes.

---

### 6️⃣ Bonus: menú hamburguesa 🥪

> Ejercicio opcional 💪

Parte del resultado del último ejercicio.

Cambia el menú de arriba para que sea un menú hamburguesa en modos *Mobile* y *Mobile+*.

Puedes adaptar el código de este [Codepen](https://codepen.io/).


# 1.5.4 Mobile First

Existen varias formas de afrontar la maquetación de un proyecto responsive. La que nos parece más adecuada es **mobile first**, donde se plantean primero los estilos de la vista de móvil y, a medida que tenemos mayor tamaño de pantalla, sobrescribimos o ajustamos los estilos necesarios.

La maquetación **mobile first** da prioridad a los dispositivos con menos capacidad de pantalla, conexión y batería. De esta forma, por ejemplo, se cargan imágenes más pequeñas que consumen muchos menos datos o se muestra una maquetación más simple y adaptada a usar los dedos como punteros (botones y zonas clicables más grandes). Si luego resulta que estamos viendo la página en una pantalla más grande, gracias a las *media queries* podemos cargar elementos más pesados, mostrar otros que en móvil pueden no tener sentido y adaptarlo todo al manejo con ratón y/o teclado.

Un ejemplo sería la típica página que tiene una primera sección con una imagen de fondo enorme: con la maquetación mobile first colocaríamos primero un fondo adaptado a una pantalla más pequeña, con el consiguiente ahorro en la tarifa de datos de la usuaria. Si alguien la carga desde escritorio, donde suele tener una conexión con tarifa plana, pasaríamos a mostrar una imagen de fondo mucho más grande, acorde a la pantalla que esté usando. Pero nunca obligamos a quien va en el metro a descargarse una imagen descomunal de muchos megapíxeles en su móvil con una tarifa de datos limitada.

En el CSS esto se representa escribiendo primero los CSS que se verán en las pantallas/ventanas de navegador más pequeñas. Posteriormente añadiremos, dentro de *media queries*, los ajustes necesarios para los tamaños mayores de pantalla o ventana.

> **Nota:** el planteamiento responsive no solo tiene que ver con los dispositivos. Claro que hay móviles de 320px, tablets de 768px y pantallas desde 1336px a 2560px de ancho. Pero también implica otros tipos de pantalla, por ejemplo si una usuaria pone el navegador en la mitad de la pantalla mientras trabaja y en la otra pone un reproductor de vídeo porque está enganchada a *Juego de Tronos*.

---

## 🧩 Breakpoints y tamaños

Entonces, ¿cuántos *breakpoints* hay? ¿Hay algunos más utilizados que otros?
Hay una serie de anchos que se tienen más en cuenta que otros. Por ejemplo, una tablet suele tener de 768px (en vertical) a 1024px (en horizontal). Y en los ordenadores de escritorio se suelen repetir algunos anchos en los diseños (1280, 1500, 1600).

Todo esto es muy relativo, pero cuando el equipo de diseño entrega un diseño suele hacer de 2 a 4 vistas. Nosotras tomaremos esas medidas como nuestros *breakpoints* principales. El objetivo es clavar el diseño en esos puntos.

Luego tendremos *breakpoints* menores que vienen dados por el contenido: desde el tamaño más pequeño vamos redimensionando el navegador, y cuando algo "se rompe" (o se descoloca), creamos un *breakpoint* y lo arreglamos.

De esta manera nos aseguramos de que nuestra página se va a ver correctamente en cualquier ventana de navegador. Quizás no se vea de una manera ideal, pero no se descolocará.

---

## 🧱 La columna central

Normalmente, en diseño responsive, tenemos una **columna central** de contenido común a cada sección o módulo que mantiene una estructura a lo largo de los diferentes *breakpoints*.

Para esto no hay unos números estándar, pero es común que nos encontremos unos márgenes para móvil (320px), otros para tablet (768px) y un ancho fijo y centrado para las pantallas mayores:

![Ejemplo de columna central](https://books.adalab.es/materiales-del-curso-pw-ft/~gitbook/image?url=https%3A%2F%2F2908775143-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFeL5m4e6ES4PMjY0BYJw%252Fuploads%252Fgit-blob-19d0e9aa155d6340bcb72e6ad9d9904558537521%252Fcolumna-central.png%3Falt%3Dmedia&width=768&dpr=4&quality=100&sign=70e25360&sv=2)

Esto se consigue con un contenedor que lleva una clase concreta y que va incluido en todos nuestros bloques, de manera que podamos mantener los mismos márgenes en toda la página y tener secciones con fondos de color o imagen que ocupen el 100% del navegador.

Puedes ver un ejemplo en este [Codepen](https://codepen.io/).

Un nuevo ejemplo de cómo maquetar la columna central está en este vídeo:
🎥 [YouTube – Cómo maquetar la columna central](https://youtu.be/LbYSpU5I-9o)

---

## 📂 Recursos externos

- [Por qué mobile first es importante hoy](https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Cómo aplicar el mobile first y el diseño responsive](https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/)
- [Curso en vídeo de diseño responsive](https://www.youtube.com/results?search_query=curso+dise%C3%B1o+responsive)

---

## 🧪 Ejercicios

### 1️⃣ Mi primera web responsive

> Nota: este ejercicio es importante, intenta hacerlo mientras leas la lección.

Dados los siguientes diseños, maqueta la web aplicando las *media queries* necesarias.

**Aspecto de la web en una pantalla de 480px:**

![Ejercicio 9-1](https://books.adalab.es/materiales-del-curso-pw-ft/~gitbook/image?url=https%3A%2F%2F2908775143-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFeL5m4e6ES4PMjY0BYJw%252Fuploads%252Fgit-blob-e41a078f200062cfe46c53cc42f9df885383b7af%252Fejercicio-9-1.png%3Falt%3Dmedia&width=400&dpr=3&quality=100&sign=891456ed&sv=2)

**Aspecto de la web en una pantalla entre 480px y 1000px:**

![Ejercicio 9-2](https://books.adalab.es/materiales-del-curso-pw-ft/~gitbook/image?url=https%3A%2F%2F2908775143-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFeL5m4e6ES4PMjY0BYJw%252Fuploads%252Fgit-blob-9cb25cbb917b4b35b75302de52fbd37003ceda72%252Fejercicio-9-2.png%3Falt%3Dmedia&width=768&dpr=4&quality=100&sign=497a39a8&sv=2)

**Aspecto de la web a pantalla completa (por encima de 1000px):**

![Ejercicio 9-3](https://books.adalab.es/materiales-del-curso-pw-ft/~gitbook/image?url=https%3A%2F%2F2908775143-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFeL5m4e6ES4PMjY0BYJw%252Fuploads%252Fgit-blob-26b38e5ba45fd9d2ace8475fc50261d529be1057%252Fejercicio-9-3.png%3Falt%3Dmedia&width=768&dpr=4&quality=100&sign=e2063a60&sv=2)

---

### 2️⃣ Implementa una columna central

> Nota: este ejercicio es importante, intenta hacerlo mientras leas la lección.

Vamos a hacer algo más "real": implementar esta **columna central**. En un HTML tendremos un contenedor con:

- Un título
- Uno o dos párrafos de texto

Y vamos a plantear 3 escenarios (de pequeño a grande) según esta guía:

![Guía ejercicio 7](https://books.adalab.es/materiales-del-curso-pw-ft/~gitbook/image?url=https%3A%2F%2F2908775143-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFeL5m4e6ES4PMjY0BYJw%252Fuploads%252Fgit-blob-87c46d2f809a05a621a2b382f3061d8c87461554%252Fejercicio-7.png%3Falt%3Dmedia&width=400&dpr=3&quality=100&sign=c34362d4&sv=2)

Vamos a empezar con el CSS de móvil e iremos ajustando los estilos según dispongamos de mayores tamaños de pantalla:

#### 📱 Por defecto:

- Nuestro contenedor tendrá 20px de margen a cada lado.
- El título estará en negrita y a 32px.
- El texto de los párrafos estará a 18px con un interlineado de 24px.

#### 💻 De 768px en adelante:

- Nuestro contenedor tendrá 30px de margen superior y 40px de margen a cada lado.
- El título estará en negrita y a 28px.
- El texto de los párrafos estará a 16px con un interlineado de 20px.

#### 🖥️ De 1140px en adelante:

- Nuestro contenedor tendrá 190px de margen superior y margen automático a cada lado, con un ancho máximo de 750px.
- El título estará en negrita y a 42px.
- El texto de los párrafos estará a 24px con un interlineado de 32px.


# 1.5.5 Viewport

## 🪟 Viewport

> Nota: esta mini lección es corta y rápida.

Aquí es donde entra en juego una etiqueta que conocíamos por otros motivos, pero que ahora tiene un contenido especial: el **viewport**.

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Los dispositivos móviles (teléfonos y tablets) utilizan este **viewport** para mostrar la página de una forma curiosa: salvo que se les indique lo contrario, intentarán mostrarla al máximo tamaño posible, haciendo suficiente *zoom* para permitir que las páginas no adaptadas se puedan ver (aunque diminutas).
Por eso en nuestro ejemplo las *media queries* no "funcionan".

Con la etiqueta `meta viewport` le decimos a estos dispositivos cómo tienen que comportarse.
El ejemplo anterior es el más típico y le dice al *viewport* de un dispositivo móvil que:

- El ancho del viewport debe coincidir con el ancho del dispositivo.
- La escala inicial siempre será el 100%.

---

## 🧪 Ejercicio: Añadiendo la etiqueta meta viewport

Vamos a añadir al `<head>` de nuestra página la etiqueta `meta viewport`, para que toda nuestra página quede así:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Viewport Sample</title>
    <style>
      .box {
        background: red;
        height: 100px;
      }
      @media all and (min-width: 550px) {
        .box {
          background: blue;
        }
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

¿Qué tal ahora?
¿Y si nos vamos a las herramientas de desarrollo, abrimos el simulador y probamos con diferentes dispositivos/anchos?
¿Cambia ahora de rojo a azul?


# 1.5.6 Medidas

## 📏 Medidas vw y vh

> Nota: esta mini lección es poco importante. Puedes leerla cuando necesites aplicarla.

De postre, tenemos unas unidades flexibles que no dependen de un tamaño de fuente como los `rem`, sino que dependen de las **dimensiones del viewport o de la ventana del navegador**.
Son los **vw** y **vh** (*viewport width* y *viewport height*).

A efectos prácticos actúan como un porcentaje en función del ancho/alto del viewport o de la ventana del navegador.
Entonces, el **100% de la altura** de nuestra ventana de navegador sería el **100vh**.

---

## 🔠 Medidas em

`em` es una unidad relativa que depende del tamaño de texto de su elemento padre.
Si el `body` está a **14px** y a una hija inmediata (`<div>`) le especificamos un tamaño de fuente de `1em`, ese `1em` valdrá **14 píxeles**.

El tamaño de fuente por defecto que los navegadores usan antes de aplicar el CSS es de **16 píxeles**, lo que significa que este es el valor asignado por defecto a un elemento (`1em = 16px`).
Ojo: los tamaños de fuente de los elementos **se heredan de los padres**, por lo que si a estos se les aplican otros tamaños de fuente, la equivalencia en píxeles de un `em` puede complicarse.

---

## ⚙️ Cómo funcionan los em

Los `em` son estupendos para modificar un módulo de manera proporcional.
Vamos a ver cómo funcionan en un ejemplo qué pueden hacer por nosotras estas unidades flexibles:

En el siguiente [Codepen](https://codepen.io/) hay un contenedor con clase `.icon`. Él y todas sus hijas están en `em`.
Prueba diferentes valores de píxeles para el `font-size` del elemento `.icon`:

- 10px
- 16px
- 50px
- 100px

![Ejemplo de medidas em](https://books.adalab.es/materiales-del-curso-pw-ft/~gitbook/image?url=https%3A%2F%2F2908775143-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFeL5m4e6ES4PMjY0BYJw%252Fuploads%252Fgit-blob-70359ce2ac6ffbfda7e78ad55b14ed4c2f4a5e86%252Fem.png%3Falt%3Dmedia&width=400&dpr=3&quality=100&sign=3ebde0be&sv=2)

---

## 🧪 Ejercicios

### 1️⃣ Trabajando con medidas

En el siguiente [Codepen](https://codepen.io/), varía las dimensiones en **vw** y **vh** para:

1. Hacer que el contenedor `.box` ocupe el **50% de ancho y el 100% de alto**.
2. Hacer que el contenedor `.box` ocupe el **10% de ancho y el 10% de alto**.
3. Hacer que el contenedor `.box` ocupe el **100% de ancho y el 80% de alto**.
