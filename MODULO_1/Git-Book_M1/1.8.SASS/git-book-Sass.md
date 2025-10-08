# 1.8.1 Sass

Con CSS podemos personalizar al píxel el aspecto de nuestra página y, como hemos visto, para ello existe una serie de reglas y prácticas. Sin embargo, el sector ha ido madurando y nos encontramos con que necesitaríamos poder trabajar con las hojas de estilos de una manera más ágil: permitiendo el uso de variables, pudiendo dividir los archivos en bloques más pequeños, pudiendo crear bloques de estilos que se repitan o incluso pequeñas funciones simples. Esto es posible con los **preprocesadores de CSS**.

---

## 🧩 ¿Qué es un preprocesador de CSS?

Un preprocesador de CSS es un lenguaje parecido al CSS pero que nos permite tener acceso a funcionalidades que no tiene el CSS y, tras el procesado, generar un CSS válido.

De esta manera ya no trabajaremos directamente con CSS sino con este preprocesador que, automáticamente, generará nuestros CSS finales.

Actualmente existen varios preprocesadores, que son muy parecidos y que solo se diferencian en la sintaxis de cada uno. Los más conocidos son:

- **Sass** (el que vamos a ver en Adalab)
- **LESS**
- **Stylus**

Nosotras vamos a usar **Sass**, concretamente **SCSS**, que es la sintaxis nueva :)

---

## ⚙️ ¿Cómo funciona?

Esto se instala y se ejecuta por la terminal, pero para no sufrir ya lo tenemos integrado en el **Starter Kit de Adalab**. Yay!
Al arrancar el Kit, todo el SCSS de la carpeta `_src/assets/scss` se procesará automáticamente en la carpeta `public/assets/css` y se recargará el navegador.

---

## 🧠 ¿Sass o SCSS?

El preprocesador se llama **Sass (Syntactically Awesome StyleSheets)**, pero tiene dos sintaxis: **Sass** y **SCSS**.
Usaremos **SCSS** porque es más parecida a CSS y no depende tanto de la indentación, ya que usa las mismas llaves y punto y coma.

Así que diremos "Sass", pero en realidad usaremos **SCSS** 😉

---

## ✨ ¿Qué puedo hacer con Sass/SCSS?

Con Sass se pueden hacer auténticas maravillas.
Hoy veremos:

- Variables
- Anidación (nesting)
- El símbolo `&`
- Media queries
- Imports
- Mixins y funciones

---

## 🎨 Variables

Se usan de forma parecida a JavaScript, precedidas por `$`.
Además, tenemos que importar el archivo donde se definan.

Por ejemplo:

```scss
// core/variables.scss
$colorLink: blue;
```

Y en otro archivo:

```scss
@use "../core/variables" as vars;

a {
  color: vars.$colorLink;
}
```

Esto permite definir valores reutilizables y cambiar todo el diseño modificando una sola variable.

---

### 🧩 Ejemplo de variables

```scss
$headerHeight: 100px;
$fontText: "Roboto", arial, sans-serif;
$pathImages: "../images/";

body {
  font: 16px $fontText;
}

.header {
  background: url($pathImages + "imagen.png") left top no-repeat;
  height: $headerHeight;
}
```

### 💡 Cuándo crear variables

Usa variables **solo para valores reutilizados** (colores, alturas, márgenes...).
No es necesario crear variables para todo.

---

### 🎨 Buenas prácticas para colores

Usa nombres semánticos, no cromáticos.
Por ejemplo:

```scss
$colorBlue: blue;
$colorDarkRed: #800;

$colorLink: $colorDarkRed;

a {
  color: $colorLink;
}
```

👉 Así sabrás para qué sirve cada color, no solo su tono.

---

## 🪆 Nesting (anidado) y el símbolo `&`

Una maravilla de Sass es la **anidación** de estilos, que permite estructurar el CSS igual que el HTML.

```scss
.content {
  p {
    color: blue;
    a {
      color: red;
    }
  }
}
```

Esto genera:

```css
.content p {
  color: blue;
}
.content p a {
  color: red;
}
```

⚠️ **Cuidado:** anidar demasiado genera reglas muy específicas.
Evita pasar de 3 niveles de anidación.

---

### 🔗 Referenciando al selector padre (`&`)

El `&` permite hacer referencia al selector padre. Por ejemplo:

```scss
a {
  color: red;
  &:hover {
    color: blue;
  }
  .footer & {
    color: orange;
    &:hover {
      color: green;
    }
  }
}
```

Genera el siguiente CSS:

```css
a {
  color: red;
}
a:hover {
  color: blue;
}
.footer a {
  color: orange;
}
.footer a:hover {
  color: green;
}
```

---

## 📂 Recursos externos

- [Editor online para hacer pequeñas pruebas](https://sass-lang.com/try/)
- [Guía de estilo para escribir Sass sostenible](https://sass-guidelin.es/)

---

## 🧠 Ejercicios

### 1️⃣ Variables, variables everywhere


En el siguiente [Codepen](https://codepen.io/adalab/pen/aVrxYY) tenemos un ejemplo en CSS que vamos a reescribir en SCSS y modificar un poco.

1. Configura el Codepen para usar **SCSS** (en el icono de la rueda de CSS).
2. Convierte a variables los valores de las líneas indicadas.
3. Cambia los valores de las variables:

- Color del texto: `#010101`
- Tamaño de fuente: `18px`
- Margen de `.wrapper`: `0 60px`
- Fondo de `header` y `footer`: `yellow`
- Alto de `header` y `footer`: `50px`
- Fondo de `.main`: `cyan`

# 1.8.2 BEM

Seguro que a estas alturas del temario ya habéis visto todas las ventajas que ofrece **Sass** para trabajar con CSS, y por eso, podéis imaginaros cómo era el mundo antes de Sass si no escribías tus hojas de estilo de manera ordenada… **CAÓTICO**.

Al afrontar proyectos grandes, las hojas de estilo crecían sin parar, repitiendo nombres de clases, usando `!important` por todas partes… en fin, convirtiendo los estilos en algo difícil de mantener.

Para resolver esto aparecieron algunas **convenciones de trabajo** con CSS:
**OOCSS (Object Oriented CSS)**, **SMACSS (Scalable and Modular Architecture CSS)** y **BEM (Block Element Modifier)**.
Esta última es la que explicaremos, ya que encaja perfectamente con Sass y es una de las más extendidas.

---

## 🧩 ¿Qué es BEM?

**BEM** es un marco de trabajo con CSS que permite mantener el código limpio, ordenado y fácil de entender.
La idea principal es **nombrar las clases** según tres componentes:

- **B** → *Block* (bloque): el contenedor principal.
- **E** → *Element* (elemento): parte interna del bloque.
- **M** → *Modifier* (modificador): variación del elemento o bloque.

---

## 💡 Ejemplo práctico

Supongamos que tenemos tres botones en el header:

```html
<header class="header">
  <button class="header__button"></button>
  <button class="header__button--success"></button>
  <button class="header__button--small"></button>
</header>
```

En este caso:

- `.header` → **Block**
- `__button` → **Element**
- `--success` / `--small` → **Modifier**

Como convención, se usan **doble guion bajo `__`** y **doble guion medio `--`**:

```scss
.header__button--small {
}
```

---

## 🧠 BEM + Sass = ❤️

Gracias a la **anidación (nesting)** y al **selector padre `&`**, Sass facilita escribir estilos BEM de forma limpia:

```scss
/*** SCSS ***/
.header {
  &__button {
    &--success {
    }
  }
}

/*** CSS compilado ***/
.header {
}
.header__button {
}
.header__button--success {
}
```

El selector `&` se refiere al **selector padre**, lo que permite construir clases hijas o modificadores sin repetir el nombre completo.
Esto hace que **BEM + Sass** sea una combinación ideal para proyectos organizados y escalables.

---

## 📚 Documentación recomendada

- [Documentación oficial de BEM](https://en.bem.info/methodology/)
- [BEM 101 — CSS-Tricks](https://css-tricks.com/bem-101/)

---

## 🧠 Ejercicio: *“Sass y BEM, cuanto más primo más me arrimo”*

> Nota: este ejercicio es importante, intenta hacerlo mientras lees la lección.

Usando el editor online [https://sass.js.org/](https://sass.js.org/) y el operador `&`, reescribe el siguiente código con Sass.
El reto está en escribir la palabra `card` **solo una vez**.

```scss
.card {
  width: 100px;
  height: 100px;
  margin: 10px;
}
.card:hover {
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}
.card--dark {
  background-color: #000;
  color: #fff;
}
.card--light {
  background-color: #fff;
  color: #000;
}
```

# 1.8.3 Mediaqueries en SASS

La posibilidad de anidar selectores nos da una flexibilidad extra. Hasta ahora solo podíamos meter selectores completos dentro de nuestras media queries, pero con Sass podemos incluir media queries en nuestros selectores y hacer cosas como esta:

```scss
.wrapper {
  margin: 0 25px;
  @media all and (min-width: 768px) {
    margin: 0 40px;
  }
  @media all and (min-width: 1280px) {
    margin: 0 auto;
    max-width: 1200px;
  }
}
```

Y que generaría el siguiente CSS:

```css
.wrapper {
  margin: 0 25px;
}
@media all and (min-width: 768px) {
  .wrapper {
    margin: 0 40px;
  }
}
@media all and (min-width: 1280px) {
  .wrapper {
    margin: 0 auto;
    max-width: 1200px;
  }
}
```

### Imports y cómo organizar nuestro proyecto

Bueno, ¿qué más podemos hacer con Sass? Importar archivos. Esta es otra ventaja importante, ya que nos permite modularizar nuestros estilos y trabajar en pequeñas partes que luego se unirán en el archivo final. Esto es gracias al `@use`.

Espera, CSS ya tiene un sistema de ´@import y todas sabemos que se colocan al principio del archivo CSS, ¿no? Pues sí, pero el ´@use´ de Sass se puedes poner en cualquier parte del documento, lo que nos permite plantear una estructura de componentes para llevar un orden en nuestros desarrollos. Hay muchas maneras de plantearlo, así que os vamos a proponer una.

```
scss
	├─ main.scss o index.scss (archivo principal)
  ├─ core
  │  ├─ _functions.scss
  │  ├─ _mixins.scss
  │  └─ _variables.scss
  ├─ components
  │  ├─ _buttons.scss
  │  ├─ _forms.scss
  │  ├─ _hero.scss
  │  ├─ _newsletter.scss
  │  └─ _typography.scss
  ├─ layout
  │  ├─ _header.scss
  │  ├─ _footer.scss
  │  └─ _grid.scss
  └─ pages
     ├─ _about-us.scss
     ├─ _contact.scss
     └─ _home.scss
```

Tendríamos cuatro bloques de archivos: los de **core** como son las variables, nuestros mixins y funciones; el bloque principal de **layout** con la estructura de la web y los componentes principales como header y footer; los diferentes **componentes**, como puede ser un bloque de noticias, el formulario de contacto o los botones; y por último el bloque de **páginas**, donde tendríamos los ajustes particulares de cada página.

En nuestro `main.scss` llamaríamos a todos estos archivos en orden:

```scss
// Core
@use "core/functions";

// Layout
@use "layout/header";
@use "layout/footer";
@use "layout/grid";

// Components
@use "components/buttons";
@use "components/forms";
@use "components/hero";
@use "components/newsletter";
@use "components/typography";

// Pages
@use "pages/about-us";
@use "pages/contact";
@use "pages/home";
```

> **Nota 1:** recuerda que el archivo de las variables y los mixins no los importamos aquí porque es necesario importarlos en cada archivo que vaya a utilizar sus contenidos.

> **Nota 2:** si ponemos un archivo con un guión bajo delante, Sass no lo convertirá a CSS. La idea es que todos los nombres de archivos que vayamos a importar los escribamos con un guión bajo delante. Estos archivos a menudo se suelen llamar `parciales`, porque son partes del código final.

> **Nota 3:** es importante saber que el orden de los imports es importante y que tal como se carguen será como se importen y como se ejecuten para convertirse a CSS. ¡Recordad la cascada de CSS!

Una ventaja directa de trabajar con parciales es la cantidad de conflictos de Git que nos vamos a ahorrar, porque no estaremos modificando el mismo fichero.

### Ejercicios

**1. ¡Medias a mí!**

> **Nota:** este ejercicio es importante, intenta hacerlo mientras leas la lección.

Seguimos con el editor online <https://sass.js.org/>. Reescribe el siguiente código con Sass. ¡Al turrón!

```css
.title {
  font-size: 16px;
}

@media (min-width: 768px) {
  .title {
    font-size: 18px;
  }
}

@media (min-width: 1024px) {
  .title {
    font-size: 20px;
  }
}
```

**2. Cada mochuelo a su olivo**


Vamos a crear un proyecto con nuestra estructura de imports de Sass. Usa el Kit de Adalab. Recuerda **ir haciendo parciales a medida que los vayas necesitando** y que **en cada carpeta estarán solo los que necesites**. Para el ejercicio, crea:

* Un header de 75px de alto en móvil, 100px en tablet (768px) y 110px en desktop (1280px)
* Una home con 2 bloques:
  * Una sección principal que ocupe la mitad del alto de la pantalla con un texto en el centro
  * Una sección con un título y un botón rojo, con bordes de 5px de radio y 45px de altura

> Por ejemplo: en la carpeta `core` siempre tendremos nuestras variables, pero si no tenemos mixins o funciones pues no existirán esos parciales.


# 1.8.4 Mixins y funciones

> **Nota:** esta mini lección es un bonus

### Mixins

Los **mixins** son bloques de código para reutilizar y/o personalizar. Veamos un ejemplo.

```scss
@mixin absoluteCentered() {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.container {
  position: relative;
}

.content {
  @include absoluteCentered();
}
```

Esto generará:

```css
.container {
  position: relative;
}
.content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

También podemos crear mixins personalizados con parámetros. Otro ejemplo:

```scss
@mixin t($fontSize, $lineHeight) {
  font-size: $fontSize;
  line-height: $lineHeight;
}
.main__title {
  @include t(32px, 40px);
}
.main__content p {
  @include t(18px, 24px);
}
```

Que generará el siguiente CSS:

```css
.main__title {
  font-size: 32px;
  line-height: 40px;
}
.main__content p {
  font-size: 18px;
  line-height: 24px;
}
```

### Funciones

Sass viene con un [juego de funciones](http://sass-lang.com/documentation/Sass/Script/Functions.html), pero además podemos crear las nuestras propias. Por ejemplo, vamos a crear una función para poder escribir nuestras unidades en rem, pero con elegancia. ¿O qué?

Recordemos que `rem` es una medida relativa al tamaño de fuente especificado en nuestra etiqueta `<html>`, por defecto 16px.

Vamos a crear una función a la que le pasemos los píxeles que queremos y que ella se busque la vida para transformarlo a los `rem` correctos.

```scss
// Esta es la variable que usaremos como tamaño por defecto
$defaultFontSize: 16;

// La función acepta un número de píxeles (los que vayamos a usar). Y nos devuelve el cálculo en unidades `rem` :)
@function rem($pixels) {
  @return ($pixels / $defaultFontSize * 1rem);
}
// Esta función iría en su archivo dentro de la carpeta core/, que luego podríamos usar así:

p {
  font-size: rem(18);
  margin: 0 rem(10);
}
```

Y generará:

```css
p {
  font-size: 1.125rem;
  margin: 0 0.625rem;
}
```

Mola, ¿verdad?

### Ejercicios

**1. A mezclar**

Crea 3 mixins con tu compañera. Pensad en casos de uso comunes, como: propiedades de background, estilos de texto o media queries.

**2. Media Mixins**

Rehaz el ejercicio *1. ¡Medias a mí!* para poder escribir el código así:

```scss
.title {
  font-size: 16px;

  @include tablet {
    font-size: 18px;
  }

  @include desktop {
    font-size: 20px;
  }
}
```

¿Te animas a hacer los mixins 'tablet' y 'desktop' para que funcione?

**Pista**: investiga la directiva `@content`

**3. Hágase la luz**

Investigad la función `lighten` en la documentación de Sass, comentadla y probadla para ver su utilidad.
