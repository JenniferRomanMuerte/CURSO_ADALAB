# 1.1.1 HTML

### HTML

HTML es un lenguaje de marcado, una forma de codificar un documento que, junto con el texto, incorpora etiquetas o marcas que contienen información adicional acerca de su estructura: qué es un título, un enlace o un párrafo, por ejemplo.

Un elemento HTML suele estar formado por dos etiquetas, una de apertura y una de cierre. Entre esas etiquetas colocaremos el contenido, que podrá ser texto u otra/s etiquetas HTML. Las etiquetas de apertura pueden incluir unos modificadores que se llaman atributos y que modifican el comportamiento por defecto del elemento o aportan información extra:

Con el atributo "lang" indicamos que este párrafo está en español:

```html
<p lang="es">Párrafo</p>
```

> **Nota:** Hay una serie de elementos HTML que no necesitan etiqueta de cierre, los veremos más adelante.

A los elementos HTML los vamos a llamar "etiquetas", para abreviar. Podríamos decir que hay dos tipos de etiquetas: las que definen el documento y las que definen el contenido.

Puedes consultar más información sobre la [lista de elementos html en la página de la MDN](https://developer.mozilla.org/es/docs/Web/HTML/Element)

### Etiquetas de página

Una página web empieza con una etiqueta que indica que es una página HTML, `<html>`. Dentro va una cabecera o `<head>` (donde se definen aspectos relativos al contenido, metainformación como el título, la descripción o palabras clave) y un cuerpo o `<body>` (donde incluiremos el contenido de nuestra página).

Esto es una página HTML con cabecera y cuerpo:

```html
<!DOCTYPE html>
<html>
  <head> </head>

  <body></body>
</html>
```

Justo antes de la etiqueta `<html>` se debe añadir una etiqueta especial que indica qué tipo de documento HTML es: [doctype](https://es.wikipedia.org/wiki/Declaraci%C3%B3n_de_tipo_de_documento).

En el siguiente ejemplo vemos la misma página, un poco más definida, con su doctype, un atributo en el `<html>` que indica que está en español y dos etiquetas en la cabecera: una que indica la codificación del texto y otra que indica el título del documento.

> **Nota:** Es importante acostumbrarnos a usar el atributo "lang" en nuestras etiquetas `<html>` para indicar el idioma en el que está escrito nuestro contenido.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Mi página</title>
  </head>
  <body></body>
</html>
```

> **Nota:** `<meta>` es una de esas etiquetas que no necesita cerrarse.

### Etiquetas de contenido

El navegador lee las etiquetas en orden de escritura, de arriba a abajo, y va a intentar mostrarlas en ese orden.

El buen uso de estas etiquetas hace que se añada al contenido una valoración semántica. La semántica es importante para:

* Accesibilidad (abreviado, *a11y*): ayudará, por ejemplo, cuando se consulta la página usando algún sistema de ayuda, como lectores de pantalla.
* SEO: posicionamiento en buscadores o motores de búsqueda, como Google, Bing o DuckDuckGo; el SEO facilitará que nuestra página aparezca en las búsquedas.

  EJEMPLO: Si marcamos un texto como encabezado le estamos asignando una importancia diferente a cuando lo marcamos como párrafo o como elemento de una lista.

### Codificación de una página HTML

Vamos a detenernos un momento en este punto: podemos usar varios juegos de caracteres al crear nuestra página; cada juego tiene más o menos caracteres, así que podría pasar que nuestras tildes o caracteres especiales no estén disponibles. Por eso usaremos [`utf-8`](https://es.wikipedia.org/wiki/UTF-8), que hoy en día es el más completo.

La codificación de un documento se indica en dos pasos:

1. El archivo se guarda usando una codificación.
2. En el `<head>` de la página se incluye una etiqueta `<meta charset="">` que indica al navegador qué juego de caracteres hemos usado al guardar el archivo.

> **Nota:** VS Code (y la mayoría de editores de código) ya guardan los documentos en `utf-8` por defecto. Esto es más algo que debemos simplemente comprobar ;).

### Elementos en HTML

#### Títulos o encabezados

Vamos a ver nuestros primeros elementos en HTML: los títulos o encabezados. Estos se indican con las etiquetas `<h1>` a `<h6>`, de más relevancia a menos.

```html
<h1>Encabezado de nivel 1</h1>
<h2>Encabezado de nivel 2</h2>
<h3>Encabezado de nivel 3</h3>
<h4>Encabezado de nivel 4</h4>
<h5>Encabezado de nivel 5</h5>
<h6>Encabezado de nivel 6</h6>
```

#### Párrafo

Con la etiqueta `<p>` definiremos una etiqueta del tipo párrafo e indicaremos que su contenido va a ser un párrafo de texto.

```html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
```

#### Lista de elementos

En algún momento vamos a necesitar añadir una serie de elementos e indicar que están relacionados entre sí: para ello tenemos las listas ordenadas (*ordered*) `<ol>` y las no ordenadas (*unordered*) `<ul>`. En ambas usamos `<li>` para marcar cada elemento de la lista.

```html
<ol>
  <li>Elemento de la lista</li>
  <li>Elemento de la lista</li>
  <li>Elemento de la lista</li>
</ol>

<ul>
  <li>Elemento de la lista</li>
  <li>Elemento de la lista</li>
  <li>Elemento de la lista</li>
</ul>
```

La lista ordenada produce una lista numerando cada elemento por orden de escritura, y la no ordenada añade un símbolo (que por defecto es un círculo) delante de cada elemento de la lista, también por orden de escritura.



# 1.1.2 CSS

### CSS

La maquetación web tiene mucha relación con la maquetación en papel de toda la vida, donde se utilizan los estilos para definir la apariencia que tendrá un cierto contenido.

En la web tenemos CSS (del inglés "Cascading Style Sheets" o, en español, "hojas de estilo en cascada"), que es un lenguaje de estilos para definir la presentación visual de un documento escrito en un lenguaje de marcado, como HTML.

CSS tiene una sintaxis simple y usa un conjunto de palabras clave en inglés para especificar los nombres de varias propiedades de estilo.

**¿Y lo de "en cascada"?** Esto hace referencia al proceso de combinación y aplicación de estilos en CSS y cómo se resuelven los conflictos entre ellos, pero eso lo veremos más adelante.

### Hoja de estilos CSS

Entonces, en una hoja de estilos CSS tendremos un conjunto de reglas que dirán cómo se tienen que mostrar nuestros elementos. Supongamos que partimos de nuestro ejercicio anterior, donde tenemos maquetado un documento simple, y queremos cambiar el color y el tamaño de letra o el color de fondo de nuestra página.

Para esto tenemos las propiedades:

* `color: green` -> pone el color del texto a verde
* `font-size: 18px` -> pone el tamaño de letra a 18px
* `background-color: yellow` -> pone el color de fondo de color amarillo

Vamos a decirle a nuestro encabezado `<h1>` que se muestre de color azul y a 20px de tamaño.

```css
h1 {
    color: blue;
    font-size: 20px;
}
```

Para aplicar estilos a uno o varios elementos de nuestra web, la estructura que debemos utilizar es la siguiente:

* Escribiremos el nombre de un selector, que es un texto que hace referencia a un elemento HTML, como por ejemplo, `h1` (que hace referencia a la etiqueta `h1`).
* A continuación añadiremos unas llaves.
* Dentro de esas llaves escribiremos los atributos CSS, que son un conjunto de reglas formadas por una clave y un valor, separados por `:` y acabados en `;`. Estas reglas son las que definirán los estilos que aplicaremos al selector que hemos definido previamente.

> **Nota:** Como norma general escribiremos un espacio después de los dos puntos `:` en cada atributo CSS para facilitar la lectura del código. Esta es una práctica muy típica y se lleva a cabo en muchas de las empresas de programación.

Para el selector se puede usar:

* La etiqueta del elemento HTML (`h1`, `p`, `ul`, etc.)
* Un atributo del elemento HTML. Hay dos especiales que se usan para esto: el *id* y la clase (los veremos más adelante).
* Otros selectores más avanzados que iremos viendo poco a poco.

Dentro de nuestra página esto quedaría así:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Mi página</title>
    <style>
      h1 {
        color: blue;
        font-family: Arial, sans-serif;
        font-size: 20px;
      }
    </style>
  </head>
  <body>
    <h1>Título de mi página</h1>
    <p>Contenido de prueba de mi página web.</p>
  </body>
</html>
```

### Declaración de estilos

Una forma de añadir estilos a una página es a través de la etiqueta `<style>` que, como aplica ajustes visuales sobre la página, iría dentro de la cabecera de mi documento. Resulta cómoda para manejar un único archivo.

Desde hace unos años intentamos separar el contenido de la presentación guardando nuestros estilos siempre en un archivo aparte, que estará enlazado desde nuestra página HTML. Esta opción es mucho más limpia para el desarrollo web en general. Lo haremos con la etiqueta `<link>`, que es una de esas etiquetas que no necesita cerrarse. Esta etiqueta lleva dos atributos, uno que dice el tipo de archivo que va enlazado `rel="stylesheet"` y otro diciendo dónde está el archivo `href="style.css"`.

**index.html**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Mi página</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Título de mi página</h1>
    <p>Contenido de prueba de mi página web.</p>
  </body>
</html>
```

**style.css**

```css
h1 {
    color: blue;
    font-family: Arial, sans-serif;
    font-size: 20px;
}
```

Al abrir nuestra web en un navegador, la etiqueta link indica al navegador que debe buscar y aplicar los estilos de la hoja de estilos enlazada, en este caso `style.css`.

Existe una tercera opción que son los estilos "en línea" (*online styles*): declarar el estilo dentro del propio elemento HTML dentro del atributo `styles`. Puede ser útil en una emergencia (por ejemplo para depurar un problema), pero no debe usarse en código de producción.

```html
  <body>
    <h1>Título de mi página</h1>
    <p style="border: solid red">Contenido de prueba de mi página web.</p>
  </body>
```

En este ejemplo le ponemos un borde rojo al párrafo interior, lo que nos puede ayudar a localizarlo en la página.




# 1.1.3 Estándar de HTML5

### Estándar HTML

> **Nota:** esta mini lección es menos importante.

El estándar de HTML5 define las propiedades y comportamientos del contenido de una web, como texto, imágenes, videos o juegos, entre otros. Los siguientes grupos son reconocidos por crear las recomendaciones y estándares que aseguran el crecimiento de la web:

* [**W3C**](https://www.w3.org/) **World Wide Web Consortium**: Fundado en 1994, el Consorcio WWW se ha encargado de generar recomendaciones y estándares que aseguran el crecimiento de la web.
* [**WHATWG**](https://whatwg.org/) **(Web Hypertext Application Technology Working Group)**: Creado en 2004 por miembros de Apple, Mozilla y Opera (más tarde se unirían Microsoft y Google) en respuesta al lento ritmo del W3C a la hora de desarrollar estándares modernos de HTML.

Estos grupos impulsaron y desarrollaron gran parte del estándar de HTML5 y colaboraron a lo largo de los años, aunque en muchos casos los navegadores incluían los estándares propuestos por WHATWG antes de que fueran aprobados por W3C, convirtiendo este paso en una mera formalidad.

En 2018 los intereses de ambas organizaciones se separaron generándose dos estándares divergentes. Recientemente se ha llegado a un nuevo acuerdo en el cual WHATWG es el responsable de mantener el estándar de HTML con la colaboración de W3C.

### Validadores de HTML5

Para validar que nuestro código HTML5 cumple con el estándar, asegurando unos mínimos de calidad técnica, podemos utilizar diferentes validadores, como:

* [https://validator.w3.org/](https://validator.w3.org/#validate_by_input)
* <https://whatwg.org/validator/>

### BONUS: Accesibilidad

Os dejamos un par de enlaces muy interesantes sobre accesibilidad web:

* [Introduction to Web Accessibility and W3C Standards (vídeo: 4:07)](https://www.w3.org/WAI/videos/standards-and-benefits/es)
* [Introducción a la accesibilidad web (charla)](https://es.slideshare.net/tayzee/11-introduccin-a-la-accesibilidad-web)



# 1.1.4 Etiquetas de HTML

### Etiquetas con semántica

Las etiquetas HTML nos permiten estructurar nuestro contenido según su función o carga semántica. Vamos a ver más etiquetas:

* para **definir nuestra página**
* para agrupar en **secciones**
* para identificar semánticamente el **contenido**
* para crear **tablas de datos**

> **Nota:** Todavía no lo hemos dicho expresamente, pero lo normal es anidar las etiquetas, o lo que es lo mismo, meter unas dentro de otras.

```html
<html>
  <body>
    <header>
      <h1>Título</h1>
    </header>
    <main>
      <section>
        <h2>Subtítulo</h2>
        <p>Contenido y más contenido</p>
        <p>Contenido con <a href="">enlaces</a></p>
        <ul>
          <li>lista</li>
          <li>de</li>
          <li>cosas</li>
        </ul>
      </section>
    </main>
  </body>
</html>
```

### Secciones

Normalmente no solo vamos a querer meter nuestro contenido en la página y ya está, sino que querremos darle una estructura y agruparlo en bloques. Para ello tenemos la etiqueta `<section>`. Usaremos una sección para agrupar contenidos por temática.

Por ejemplo, en la página de un producto agruparemos la descripción del producto por un lado y los comentarios de las compradoras/usuarias por otro.

Hay una serie de secciones especiales que tienen asignado un significado semántico predeterminado:

* `<header>`: cabecera o sección de presentación de un bloque.
* `<main>`: indica la sección principal de contenido.
* `<footer>`: un pie o sección final de un bloque.
* `<nav>`: un bloque de navegación, para un menú.
* `<aside>`: un bloque de contenido de menor importancia o con contenido relacionado.
* `<article>`: un artículo, que aunque elimináramos el resto de contenido seguiría teniendo sentido por sí mismo.

Estos bloques especiales se pueden usar unos dentro de otros según tenga sentido: por ejemplo, un `<article>` puede tener cabecera y pie, mientras que una cabecera no debería tener pie.

> **Nota:** Si usamos mal estos elementos el navegador no va a dar error, pero estaremos haciendo un favor muy pobre a quienes necesiten este extra de semántica para navegar (por ejemplo, una usuaria ciega).

### Contenido

Dentro de estas secciones querremos incluir nuestros contenidos. Además de los encabezados, párrafos y listas, tenemos un juego importante de etiquetas.

### Enlaces

Uno de los conceptos básicos de HTML es el enlace que nos permite vincular páginas o partes de ellas de manera que la información no quede como algo aislado sino conectado.

Un ejemplo es Wikipedia, donde en cada artículo se añaden enlaces relacionados que hacen que puedas se pueda completar la información a medida que se va consultando.

El enlace se escribe con la etiqueta `<a>` y con un atributo `href=""` que indica adónde enlaza.

Podemos enlazar a:

* una página o un archivo
* un punto de la misma o de otra página

El primer enlace es muy fácil, simplemente pondremos la dirección de nuestra página o archivo como valor del atributo `href`:

```html
<a href="https://www.wikipedia.org">Wikipedia</a>
```

El segundo tipo de enlace necesita de un atributo especial que es el `id=""`. Cualquier elemento de nuestra página puede llevar este atributo, pero al tratarse de un identificador no debe haber dos elementos con el mismo id en la misma página.

En nuestra página, vamos a identificar la cabecera y el contenido principal:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Mi página</title>
  </head>
  <body>
    <header id="top">
      <h1>Título de mi página</h1>
    </header>
    <main id="main">
      <h2>Texto en latín</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </main>
  </body>
</html>
```

Ahora podría añadir un enlace debajo del todo para ahorrarle el *scroll* a las usuarias poniendo en el `href` el símbolo `#` seguido del id que quiero enlazar:

**index.html**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Mi página</title>
  </head>
  <body>
    <header id="top">
      <h1>Título de mi página</h1>
    </header>
    <main id="main">
      <h2>Texto en latín</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </main>
    <footer>
      <a href="#top">Volver arriba</a>
    </footer>
  </body>
</html>
```

Si quisiese enlazar al contenido principal de mi página desde otra página usaría:

**product.html**

```html
<a href="index.html#top">Volver al principio de la página principal</a>
```

En estos dos casos se dice que las rutas son **relativas**, porque apuntan dentro de nuestro proyecto. Si incluimos el dominio donde está alojada la página o archivo, aunque sea en nuestro dominio, diremos que la ruta es **absoluta**.

Si conocemos una página que use id, podemos enlazar directamente a esa parte del contenido. Vamos a enlazar a la Wikipedia, justo a la parte donde se habla de la piratería en la Edad Media:

```html
<a href="https://es.wikipedia.org/wiki/Piratería#La_Edad_Media"
  >La piratería en la Edad Media</a
>
```

Aquí el atributo `href` lleva la dirección de la página de la Wikipedia sobre la piratería y el `id` de la sección que se refiere a la Edad Media.

> **Nota:** Si quieres ver los enlaces relativos que estamos utilizando en esta página, ve arriba del todo y pulsa en los enlaces de cada uno de los ejercicios.

La etiqueta `<a>` tiene otros atributos que debemos conocer:

* `title=""`: donde podemos añadir un texto complementario que el navegador mostrará en un pequeño *tooltip* cuando pongamos el cursor sobre el enlace. Nos interesará usarlo cuando tengamos un enlace tipo "descargar" y queramos asociarle un texto explicativo, como "Descargar archivo PDF". **Ejemplo:** ![Ejemplo de title=""](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-efd6c97fb557fd8d54caf7fe959c919532569d32%2Ftitle.png?alt=media)
* `target=""`: aquí podemos especificar dónde se abre el enlace. Por ejemplo, con el valor `_blank`, indicamos que se abra en una nueva pestaña, lo cual nos interesa cuando en nuestra página enlazamos a páginas externas y no queremos que la usuaria "pierda" nuestra página al hacer clic en esos enlaces.

### Negritas, cursivas

Tradicionalmente se usaban las etiquetas `<b>` e `<i>` para poner un texto en negrita (*bold*) o en cursivas o itálicas (*italic*) respectivamente. Estas etiquetas todavía se utilizan, aunque no tienen carga semántica, simplemente muestran el texto visualmente en negrita o cursiva.

Existen unas etiquetas más recientes, `<strong>` y `<em>`, que aunque visualmente hacen lo mismo (*strong* muestra el texto en negrita y *em*, en cursiva) sí que tienen una carga semántica, que sirve para indicar el nivel de énfasis o de importancia. La etiqueta `<em>` indica un primer nivel de importancia del texto, y `<strong>` indica una importancia mayor.

```html
<p>
  Dentro de este párrafo tenemos <em>un texto importante</em> y
  <strong>otro más importante</strong>
</p>
```

> **Nota:** El aspecto visual de estas etiquetas es una convención entre los diferentes navegadores y, como veremos, se puede cambiar.

### Imágenes

Muchas veces querremos acompañar nuestro contenido con imágenes, ya sea con fines ilustrativos (p. ej., imágenes de una noticia), o como motivo principal (p. ej., una galería de ilustraciones).

Para ello tenemos la etiqueta `<img>`, que tiene varios atributos:

* `src=""`: aquí indicamos la ruta de nuestro archivo de imagen.
* `alt=""`: el atributo *alt* es el texto que va a mostrar el navegador en caso de que la imagen no se pueda cargar. También es muy importante para la accesibilidad, ya que será el texto que lean los dispositivos de apoyo como lectores de pantalla. Cuando la imagen sea parte del contenido debemos usarlo añadiendo un texto descriptivo. Cuando la imagen sea meramente decorativa, se recomienda dejar el valor vacío, pero no omitirlo. **Ejemplo:** ![Ejemplo de alt=""](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-1dc9023ac8fa2435c9862ffc4901f09edd81bb42%2Falt.png?alt=media)

### Saltos de línea

Aunque es recomendable usarla con tiento, tenemos una etiqueta que fuerza un salto de línea: `<br>`. Desde que empezamos a separar el contenido y el diseño de las páginas web, esta etiqueta ha quedado relegada a un lugar muy secundario, pero todavía hay veces en los que tendremos que forzar una línea nueva en mitad de un texto y está bien conocerla.

```html
<h1>Mi título genial <br />en dos líneas</h1>
```

### Contenedores generales

Aparte de las secciones tenemos un par de contenedores sin propósito específico que nos sirven para hacer agrupaciones sin carga semántica. Son el `<div>` y el `<span>`. Mientras que el **div** es para bloques de contenido, el **span** está indicado para partes del texto o elementos en línea. Los iremos viendo más adelante.

### Tablas

Hubo un tiempo en el que las tablas eran la base sobre la que se maquetaba cualquier página web. Hoy se utilizan para lo que son: presentar datos tabulados.

La tabla básica tiene una estructura bastante simple y tres etiquetas principales:

* una etiqueta que indica que se va a escribir una tabla
* una etiqueta para las filas
* una etiqueta para las celdas

En una imagen, una tabla de 3 filas y 3 columnas sería algo así: ![Tabla de 3x3](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-b116469a5c2a5843cf305e0585820b0cdcdb618d%2Ftable.png?alt=media)

Y en código quedaría así:

```html
<table>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
```

En principio, en las tablas siempre tiene que haber un número de celdas igual en cada fila.




# 1.1.5 Selectores de CSS

Los navegadores ofrecen un cierto aspecto por defecto para todas las páginas. Nosotras lo podemos cambiar con CSS, creando estilos para definir la apariencia de nuestras páginas.

Para cambiar el aspecto de un elemento usamos un selector. Un selector hace referencia a las distintas formas que tenemos de especificar qué elemento vamos a seleccionar para cambiar su aspecto. Existen varios tipos de selectores:

* La propia etiqueta del elemento: `h1`, `a`, `p`, etc.
* Una clase que hayamos incluido con el atributo `class=""`.
* Un identificador en el atributo `id=""`.
* Una pseudo clase, que son unas palabras clave que, añadidas al selector, especifican un estado especial del elemento.
* Una mezcla de los anteriores.

Vamos a ver cada uno de los casos.

### El propio elemento como selector

El estilo puede especificarse para cada etiqueta. Por ejemplo, si utilizamos el selector `p`, cambiaremos el estilo de todos los párrafos. No es lo ideal porque aplicaría a todos los elementos con esa etiqueta de la página, así que hay que usarlo con prudencia.

Podemos, por ejemplo, hacer que todos nuestros enlaces sean rojos.

```css
a {
  color: red;
}
```

### Clases como selectores

Las clases son palabras clave que asignamos a elementos HTML para agruparlos por función o apariencia, y diferenciarlos del resto de elementos de su mismo tipo. Por ejemplo: la clase "text-link" nos permite aplicar estilos particulares a los enlaces que lleven dicha clase sin afectar al resto de etiquetas.

```html
<a href="#" class="text-link">Enlace de texto</a>
```

En CSS creamos clases para aplicarlas a grupos de elementos, como pueden ser todos los enlaces de texto, los elementos del listado de ingredientes o a los párrafos del pie de página. La manera de indicar en CSS que se trata de una clase es escribiendo primero un `.`:

```css
.text-link {
  color: red;
}
```

### *id* como selector

Ya habíamos visto que los *id* eran una palabra clave que usábamos como identificador para un único elemento de la página. En CSS también los podemos usar como selector, pero como no puede haber más de uno por página, no es recomendable usarlo salvo en casos especiales.

En una lista de acciones, por ejemplo, podemos tener unas clases para añadir estilos a los elementos del bloque y, además, añadir un identificador único para cada elemento.

```html
<ul class="actions">
  <li class="action">
    <a id="add-user" href="" class="button">Nuevo usuario</a>
  </li>
  <li class="action">
    <a id="rename-user" href="" class="button">Renombrar usuario</a>
  </li>
  <li class="action">
    <a id="delete-user" href="" class="button">Eliminar usuario</a>
  </li>
</ul>
```

Y ahora podríamos usar el *id* para cambiar el tamaño del texto de uno de los elementos. Para ello, usamos la `#` seguida de la id como selector.

```css
#add-user {
  font-size: 24px;
}
```

### Pseudo clase como selector

Las pseudo clases son palabras clave que, añadidas a alguno de los selectores anteriores, especifican un estado concreto del elemento. El más usado es el estado de `hover`, que ocurre cuando colocamos el ratón encima del elemento.

Las pseudo clases se escriben usando el selector, seguido de `:` y la palabra clave para el estado.

Por ejemplo, como en uno de los ejemplos anteriores, tenemos un enlace al cual le vamos a poner el texto de color rojo, pero al pasar el cursor encima invertiremos los colores y lo mostraremos con fondo rojo y color blanco. Partimos del mismo `html` que anteriormente.

```html
<a href="#" class="text-link">Enlace de texto</a>
```

Y el css sería:

```css
.text-link {
  color: red;
}
.text-link:hover {
  background-color: red;
  color: white;
}
```

[▸ Codepen con ejemplo de hover](https://codepen.io/adalab/pen/QZmVjK)

### Los selectores se pueden mezclar

En el ejemplo que acabamos de ver hay múltiples selectores. Mezclar selectores nos puede ayudar a contemplar casos particulares sin tener que usar identificadores.

Un elemento HTML puede tener tantas clases como queramos: las indicamos en su atributo `class` separadas cada una por un espacio.

Por ejemplo, si tenemos una lista de botones como la anterior:

```html
<ul class="actions">
  <li class="action">
    <a href="" class="button button--new">Nuevo usuario</a>
  </li>
  <li class="action">
    <a href="" class="button button--rename">Renombrar usuario</a>
  </li>
  <li class="action">
    <a href="" class="button button--delete">Eliminar usuario</a>
  </li>
</ul>
```

Hemos eliminado el atributo `id` y hemos añadido una clase extra para cada tipo de botón. De esta manera tenemos por cada "botón" una clase general `.button` donde colocaremos los estilos comunes a todos los botones, y luego una particular (`.button--new`, `.button--rename` y `.button--delete`) donde solo pondremos los ajustes particulares.

Digamos que queremos que los botones tengan una caja con bordes redondeados, pero que el de Nuevo usuario tenga fondo verde, el de Renombrar azul y el de Eliminar, claramente, rojo muerte.

```css
.button {
  background-color: grey;
  border-radius: 20px;
  color: white;
  display: inline-block;
  margin-bottom: 1em;
  padding: 10px 20px;
  text-decoration: none;
}

.button--new {
  background-color: green;
}

.button--rename {
  background-color: blue;
}

.button--delete {
  background-color: red;
}
```

[▸ Codepen de ejemplo de composición de clases](https://codepen.io/adalab/pen/KGoxam)

### Selectores combinados

En un mismo selector podemos combinar varios elementos, lo que se conoce como "selector combinado" o "combinador" (*combinator*). En la práctica se suelen usar dos tipos de combinadores: madre (o hija) y descendiente.

El selector madre `>` se usa cuando una etiqueta es la madre de otra:

```css
article > p {
  color: blue;
}
```

En este caso solo seleccionaremos los párrafos que están incluidos directamente en un artículo, pero no cuando aparezcan dentro de otros elementos intermedios:

```html
<article>
  <p>Esta etiqueta es hija directa y por tanto aparece en azul.</p>
  <div>
    <p>Esta etiqueta no es hija directa y aparece en negro.</p>
  </div>
</article>
```

Cuando nos vale cualquier descendiente, sea directa o no, nos basta combinar con un espacio :

```css
.action button {
  color: green;
}
```

En este caso, la regla se aplicará a cualquier etiqueta `button` que esté dentro de una etiqueta con clase `action`, aunque haya etiquetas intermedias.

```html
<form class="action">
  <button>Botón hija directa, en verde</button>
  <div>
    Valores
    <button>Botón descendiente, también en verde</button>
  </div>
</form>
```

Puedes ver ambos ejemplos en [este Codepen](https://codepen.io/adalab/pen/bGxLpWv?editors=1100). Podemos combinar selectores de clase, de etiqueta o incluso de identificador. Os preguntaréis: ¿qué pasa si varios selectores entran en conflicto? ¿Cuál se aplica en este caso? Lo veremos en la siguiente lección.



# 1.1.5 Selectores de CSS

Los navegadores ofrecen un cierto aspecto por defecto para todas las páginas. Nosotras lo podemos cambiar con CSS, creando estilos para definir la apariencia de nuestras páginas.

Para cambiar el aspecto de un elemento usamos un selector. Un selector hace referencia a las distintas formas que tenemos de especificar qué elemento vamos a seleccionar para cambiar su aspecto. Existen varios tipos de selectores:

* La propia etiqueta del elemento: `h1`, `a`, `p`, etc.
* Una clase que hayamos incluido con el atributo `class=""`.
* Un identificador en el atributo `id=""`.
* Una pseudo clase, que son unas palabras clave que, añadidas al selector, especifican un estado especial del elemento.
* Una mezcla de los anteriores.

Vamos a ver cada uno de los casos.

### El propio elemento como selector

El estilo puede especificarse para cada etiqueta. Por ejemplo, si utilizamos el selector `p`, cambiaremos el estilo de todos los párrafos. No es lo ideal porque aplicaría a todos los elementos con esa etiqueta de la página, así que hay que usarlo con prudencia.

Podemos, por ejemplo, hacer que todos nuestros enlaces sean rojos.

```css
a {
  color: red;
}
```

### Clases como selectores

Las clases son palabras clave que asignamos a elementos HTML para agruparlos por función o apariencia, y diferenciarlos del resto de elementos de su mismo tipo. Por ejemplo: la clase "text-link" nos permite aplicar estilos particulares a los enlaces que lleven dicha clase sin afectar al resto de etiquetas.

```html
<a href="#" class="text-link">Enlace de texto</a>
```

En CSS creamos clases para aplicarlas a grupos de elementos, como pueden ser todos los enlaces de texto, los elementos del listado de ingredientes o a los párrafos del pie de página. La manera de indicar en CSS que se trata de una clase es escribiendo primero un `.`:

```css
.text-link {
  color: red;
}
```

### *id* como selector

Ya habíamos visto que los *id* eran una palabra clave que usábamos como identificador para un único elemento de la página. En CSS también los podemos usar como selector, pero como no puede haber más de uno por página, no es recomendable usarlo salvo en casos especiales.

En una lista de acciones, por ejemplo, podemos tener unas clases para añadir estilos a los elementos del bloque y, además, añadir un identificador único para cada elemento.

```html
<ul class="actions">
  <li class="action">
    <a id="add-user" href="" class="button">Nuevo usuario</a>
  </li>
  <li class="action">
    <a id="rename-user" href="" class="button">Renombrar usuario</a>
  </li>
  <li class="action">
    <a id="delete-user" href="" class="button">Eliminar usuario</a>
  </li>
</ul>
```

Y ahora podríamos usar el *id* para cambiar el tamaño del texto de uno de los elementos. Para ello, usamos la `#` seguida de la id como selector.

```css
#add-user {
  font-size: 24px;
}
```

### Pseudo clase como selector

Las pseudo clases son palabras clave que, añadidas a alguno de los selectores anteriores, especifican un estado concreto del elemento. El más usado es el estado de `hover`, que ocurre cuando colocamos el ratón encima del elemento.

Las pseudo clases se escriben usando el selector, seguido de `:` y la palabra clave para el estado.

Por ejemplo, como en uno de los ejemplos anteriores, tenemos un enlace al cual le vamos a poner el texto de color rojo, pero al pasar el cursor encima invertiremos los colores y lo mostraremos con fondo rojo y color blanco. Partimos del mismo `html` que anteriormente.

```html
<a href="#" class="text-link">Enlace de texto</a>
```

Y el css sería:

```css
.text-link {
  color: red;
}
.text-link:hover {
  background-color: red;
  color: white;
}
```

[▸ Codepen con ejemplo de hover](https://codepen.io/adalab/pen/QZmVjK)

### Los selectores se pueden mezclar

En el ejemplo que acabamos de ver hay múltiples selectores. Mezclar selectores nos puede ayudar a contemplar casos particulares sin tener que usar identificadores.

Un elemento HTML puede tener tantas clases como queramos: las indicamos en su atributo `class` separadas cada una por un espacio.

Por ejemplo, si tenemos una lista de botones como la anterior:

```html
<ul class="actions">
  <li class="action">
    <a href="" class="button button--new">Nuevo usuario</a>
  </li>
  <li class="action">
    <a href="" class="button button--rename">Renombrar usuario</a>
  </li>
  <li class="action">
    <a href="" class="button button--delete">Eliminar usuario</a>
  </li>
</ul>
```

Hemos eliminado el atributo `id` y hemos añadido una clase extra para cada tipo de botón. De esta manera tenemos por cada "botón" una clase general `.button` donde colocaremos los estilos comunes a todos los botones, y luego una particular (`.button--new`, `.button--rename` y `.button--delete`) donde solo pondremos los ajustes particulares.

Digamos que queremos que los botones tengan una caja con bordes redondeados, pero que el de Nuevo usuario tenga fondo verde, el de Renombrar azul y el de Eliminar, claramente, rojo muerte.

```css
.button {
  background-color: grey;
  border-radius: 20px;
  color: white;
  display: inline-block;
  margin-bottom: 1em;
  padding: 10px 20px;
  text-decoration: none;
}

.button--new {
  background-color: green;
}

.button--rename {
  background-color: blue;
}

.button--delete {
  background-color: red;
}
```

[▸ Codepen de ejemplo de composición de clases](https://codepen.io/adalab/pen/KGoxam)

### Selectores combinados

En un mismo selector podemos combinar varios elementos, lo que se conoce como "selector combinado" o "combinador" (*combinator*). En la práctica se suelen usar dos tipos de combinadores: madre (o hija) y descendiente.

El selector madre `>` se usa cuando una etiqueta es la madre de otra:

```css
article > p {
  color: blue;
}
```

En este caso solo seleccionaremos los párrafos que están incluidos directamente en un artículo, pero no cuando aparezcan dentro de otros elementos intermedios:

```html
<article>
  <p>Esta etiqueta es hija directa y por tanto aparece en azul.</p>
  <div>
    <p>Esta etiqueta no es hija directa y aparece en negro.</p>
  </div>
</article>
```

Cuando nos vale cualquier descendiente, sea directa o no, nos basta combinar con un espacio :

```css
.action button {
  color: green;
}
```

En este caso, la regla se aplicará a cualquier etiqueta `button` que esté dentro de una etiqueta con clase `action`, aunque haya etiquetas intermedias.

```html
<form class="action">
  <button>Botón hija directa, en verde</button>
  <div>
    Valores
    <button>Botón descendiente, también en verde</button>
  </div>
</form>
```

Puedes ver ambos ejemplos en [este Codepen](https://codepen.io/adalab/pen/bGxLpWv?editors=1100). Podemos combinar selectores de clase, de etiqueta o incluso de identificador. Os preguntaréis: ¿qué pasa si varios selectores entran en conflicto? ¿Cuál se aplica en este caso? Lo veremos en la siguiente lección.



# 1.1.7 Colores y fondos

### Valores de los colores

Para empezar, vamos a ver los distintos formatos que podemos usar para indicar colores, por ejemplo como valor de nuestra querida propiedad CSS `color`.

#### Colores por nombre

La primera forma de indicar un color es mediante la palabra clave que indica el nombre del color. Podemos usar un montón de palabras clave para colores que podéis ver en [la última especificación del consorcio W3](https://www.w3.org/TR/css-color-4/#valdef-color-fuchsia). Nosotras nos quedaremos por ahora con los [colores básicos](https://www.w3.org/TR/css-color-3/#valuea-def-color).

![Colores básicos en la especificación del W3C.](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-d3401654caf0f96f3f80e92143c3363cbcc78dff%2Fcss-colors-w3c.png?alt=media)

Ejemplo: el [rosa fucsia](https://es.wikipedia.org/wiki/Fucsia).

```css
p {
  color: fuchsia;
}
```

#### Colores en hexadecimal

¿Qué son esos valores misteriosos a la derecha de cada color de la tabla? De forma equivalente a las palabras clave, podemos expresar un color con formato hexadecimal. En este formato declaramos un color con una almohadilla `#` y sus 3 componentes RGB - R (rojo), G (verde), B (azul). Cada uno de los componentes se representa con 2 dígitos en hexadecimal, es decir, cada dígito puede tener 16 valores, entre 0 - 9 y A (10) - F (15). Podemos usar mayúsculas o minúsculas a nuestra elección. Por ejemplo, el color fucsia se compone de una componente máxima de rojo (ff), nada de verde (00) y máxima de azul (ff).

```css
p {
  color: #ff00ff;
}
```

Suele ser habitual expresar algunos colores comunes de forma simplificada. Si los dígitos de cada componente son iguales (por ejemplo, `ff`) puede escribirse el color de una forma simplificada escribiendo solo una vez el dígito repetido. De esta forma el fucsia puede simplificarse porque todos los componentes tienen el dígito repetido.

```css
p {
  color: #f0f;
}
```

#### RGB y RGBA

Como hemos visto podemos expresar los colores con sus componentes RGB (Red, Green, Blue). Si no nos queremos calentar la cabeza con valores hexadecimales, podemos también expresar el color usando el valor decimal de cada componente RGB, que tendrá un valor entre 0 y 255. Es el mismo rango que en hexadecimal, con 0 = `00` y 255 = `ff`.

```css
p {
  color: rgb(255, 0, 255);
}
```

Existe además la posibilidad de indicar un nivel de opacidad al color con el formato RGBA que añade transparencia (también llamada "canal alfa"). Este último componente tiene valores decimales entre 0 (totalmente transparente) y 1 (totalmente opaco).

```css
p {
  color: rgba(255, 0, 255, 0.7);
}
```

> Notas: desde hace tiempo se puede usar `rgb()` o `rgba()` indistintamente para especificar un color con RGB, tenga o no canal alfa. También pueden usarse porcentajes para el valor de alfa, entre 0% y 100%. Las comas son opcionales: podemos usar `rgb(255 0 255)`.

Puedes comparar las diversas formas en [este Codepen](https://codepen.io/adalab/pen/YzOeqEZ?editors=1100).

#### HSL

Igual que el RGB nos permite expresar colores a partir de sus componentes de color rojo/verde/azul, existe otro sistema, HSL, que nos permite expresarlos a través de tres componentes diferentes:

* H: *hue* o matiz, expresado como valor numérico entre 0 y 360. Representa los grados en un círculo de una rueda de color, con el rojo en el 0, el verde en 120 y el azul en 240. Si recuerdas las matemáticas de la secundaria, también pueden usarse radianes con el sufijo `rad`.
* S: *saturation* o saturación, entre 0% y 100%.
* L: *lightness* o luminosidad, también entre 0% y 100%.

Curiosamente, usando estos tres valores tenemos acceso a la misma gama de colores que con los componentes RGB. También podemos añadir un valor A *alpha channel* o canal alfa, entre 0 y 1 (o entre 0% y 100%).

```css
p {
  color: hsl(300, 100%, 50%);
}
```

> **Nota:** también podemos usar la función `hsla()`, aunque oficialmente está desaconsejada o en desuso(*deprecated*).

Hay otros modos de color menos usados: HWB, lab, etc. No vamos a verlos en detalle pero está bien saber que existen.

#### *Color picker*

Para seleccionar un color en Chrome, o para jugar con la gama de colores, puedes inspeccionar un elemento con el botón derecho, y luego pinchar en cualquier color No es el mejor selector de color del mundo, pero a menudo es el que tenemos más cerca.

![Cómo abrir color picker en Chrome.](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-d66458605fe83a8eba42e22e4354878350c4adb7%2Fcss-color-picker.gif?alt=media)

Puedes usar también el [Google color picker](https://g.co/kgs/qU8oT6).

### Fondos

Como veremos más adelante, cada elemento se puede ver como una caja. ¿Cómo le podemos añadir un fondo a esta "caja"?

Gracias a la propiedad `background` podemos rellenar el fondo de nuestro contenedor con una imagen, con un color, o ambos:

![Ejemplos de background](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-00ca811047960cc42bd85cc797e21aa97ab43efd%2Fejemplos-de-background.png?alt=media)

La propiedad `background` puede contener estos valores:

* Url de una imagen
* Posición de la imagen dentro del contenedor (horizontal y vertical)
* Modo de repetición de la imagen
* Color de fondo

```css
.box {
  background: url('url-de-la-imagen') left top no-repeat #ffcc00;
}
```

> **Nota:** el orden no tiene que ser necesariamente el de arriba, pero os proponemos usarlo para tener una estructura uniforme.

### Propiedades sueltas o combinadas

Realmente, la propiedad `background` es una versión acortada de estas propiedades, que se pueden usar por separado:

* `background-color`: fija el color del fondo, con los mismos valores que la propiedad `color` que hemos visto en detalle.
* `background-image`: carga una imagen para usar como fondo del elemento. Normalmente se usa con una URL: `url('https://servidor.com/ruta/imagen.jpg')`.
* `background-position`: especifica la posición de la imagen en el fondo, relativa al origen de la capa. Valores posibles: `top`, `bottom`, `left`, `right`, `center`. También se pueden combinar los dos valores, vertical y horizontal: `top right`.
* `background-repeat`: especifica cómo se repite la imagen si hay espacio de sobra. Valores posibles: `repeat` repite la imagen, `no-repeat` no la repite, `space` deja espacio entre repeticiones.
* `background-size`: fija el tamaño de la imagen de fondo respecto al elemento contenedor. Valores posibles: `contain` fuerza a que la imagen esté dentro del elemento, `cover` estira la imagen hasta que esté completamente incluida en el elemento.
* `background-attachment`: especifica cómo se comporta la imagen de fondo cuando el texto no cabe en la ventana y hay que hacer *scroll*. Valores posibles: `scroll` hace que el fondo no se mueva, `fixed` hace que se quede clavado en la esquina, y `local` hace que el fondo se mueva con el resto del contenido.
* `background-clip`: especifica si el fondo se extiende por debajo del borde (`border-box`), del relleno (*padding*) (`padding-box`) o solo del contenido (`content-box`). El modo `text` nos permite también fijar el fondo únicamente en el texto.
* `background-origin`: fija el origen de la capa que puede tener los siguientes valores:
  * border-box: El fondo se coloca en relación con el borde del cuadro.
  * padding-box: El fondo está colocado en relación con el relleno del cuadro.
  * content-box: El fondo se coloca en relación con el contenido del cuadro.

En [este Codepen](https://codepen.io/adalab/pen/WNgMwXg?editors=1100) puedes ver varios ejemplos de propiedades sueltas y combinadas.

Usar la propiedad combinada `background` o las propiedades sueltas puede producir el mismo resultado, pero en general no son lo mismo:

```css
.box {
  background-color: green;
}
.box {
  background: green;
}
```

Mientras que en el primer caso estamos diciendo solamente que el color de fondo sea `green`, en el segundo estamos diciendo eso y además que el resto de valores (`background-image`, `background-position` y demás) pasen a su valor por defecto.

¿Sabrías adelantar el resultado de aplicar esta clase?:

```css
.box {
  background-image: url("https://www.fillmurray.com/150/1500");
  background: red;
}
```

* [ ] Se verá a Bill Murray de fondo.
* [ ] Se verá a Bill Murray de fondo pero lo que no rellene la imagen será de color rojo.
* [ ] Solamente se verá un color rojo de fondo.
* [ ] Otra.

Cuando usamos un atajo estamos definiendo TODAS las opciones, aunque no las usemos; por eso siempre deberíamos especificar las propiedades que necesitemos, y solo usar los atajos cuando realmente estemos usando la mayoría de las propiedades :)

Si únicamente queremos cambiar el color de fondo deberíamos usar `background-color`. Si por el contrario queremos poner una imagen, en una posición y con una repetición, deberíamos usar el atajo `background`, ya que realmente se escribe menos:

```css
.box {
  background-image: url("https://www.fillmurray.com/150/150");
  background-position: left top;
  background-repeat: no-repeat;
}
```

```css
.box {
  background: url("https://www.fillmurray.com/150/150") left top no-repeat;
}
```

#### Composición de imágenes

Hay una propiedad que solo se puede usar por separado:

* `background-blend-mode`: modo de mezclar imágenes. Es posible cargar varias imágenes con un modo de mezcla diferente cada una.

Ya hemos visto en [este Codepen](https://codepen.io/adalab/pen/WNgMwXg?editors=1100) cómo combinar imágenes. Es un concepto avanzado que no se usa mucho, pero está bien saber que existe.

#### Background-size

Desde hace un tiempo hay una propiedad nueva que nos permite redimensionar la imagen de fondo y hasta definir cómo se debe ajustar a nuestro contenedor: `background-size`.

Nosotras vamos a ver cómo ajustar el fondo a nuestro contenedor, pero puedes consultar la [documentación completa](http://devdocs.io/css/background-size).

El tamaño se puede especificar en píxeles (`px`), tanto por ciento `50%`, etc. Podemos usar dos tamaños, horizontal y vertical: `100px 50%` ajustaría el tamaño de la imagen a 100 píxeles en horizontal y un 50% en vertical del tamaño del contenedor.

También hay dos valores especialmente interesantes ya que permiten definir cómo se ajustará nuestra imagen de fondo al contenedor: **`contain`** y **`cover`**.

**`contain`**

Aumenta o reduce la imagen proporcionalmente todo lo que pueda sin deformarla para que quepa en nuestro contenedor.

**`cover`**

Aumenta o reduce la imagen proporcionalmente para asegurarse que siempre cubre todo el área de nuestro contenedor, aunque eso signifique que parte de la imagen pueda quedar oculta.

[Ejemplos de uso de `contain` y `cover`](https://codepen.io/adalab/pen/aGojMd)

#### Combinación de tamaño y posición

Ten en cuenta que para especificar `background-size` dentro de la propiedad global hay que usarlo combinado con un `background-position` como `position/size`, como en el [Codepen de arriba](https://codepen.io/adalab/pen/WNgMwXg?editors=1100):

```css
.second {
  background: url('https://upload.wikimedia.org/wikipedia/commons/0/0a/Bill_Murray%2C_Monuments_Men_premiere.jpg') top/cover;
}
```

> Recursos Externos
>
> [Guía de colores de MDN](http://devdocs.io/css/color_value).\
> [Guía de fondos de MDN](http://devdocs.io/css/background-image).




# 1.1.8 Hojas de Normalización y Reset

Todos los elementos HTML tienen una apariencia que comparte cada navegador, con pequeñas variaciones. Por defecto, el tamaño de texto es de 16px, con un interlineado de 1,15. Los encabezados y párrafos tienen un margen superior e inferior relacionado con el tamaño de texto: el `<h1>` se muestra con un tamaño de 32px y tiene 22px de margen. El fondo de la página es blanco y el color del texto es negro, etc.

> **Nota:** la medida básica en web es el píxel o px; cada dispositivo tiene su pantalla con unas dimensiones definidas en píxeles. Por ejemplo, la pantalla de móvil más pequeña tiene 320x480px (si no se indica lo contrario siempre es "alto por ancho").

### Hojas de reset

Debido a las pequeñas variaciones de la apariencia por defecto de los diferentes elementos HTML en cada navegador existen unas hojas de estilos más o menos estándar y más o menos completas que se llaman [hojas de *reset* o normalización de CSS](https://es.wikipedia.org/wiki/Reset_CSS).

Se trata de una hoja de estilos que intenta que todos los elementos se muestren igual en todos los navegadores. No hay un estándar para esta normalización.

Ahora mismo parte de la comunidad de desarrollo no considera que estas hojas de reset sean necesarias porque:

* Las páginas deben verse bien en todos los navegadores, pero no necesariamente igual.
* Las últimas versiones de los navegadores son bastante decentes y la época dura de los navegadores antiguos, ya pasó.
* No hay un método estándar de reseteo de CSS.

> **Nota:** aún así, en algunos casos puede interesar usar una o incluso hacerse una propia, así que conocerlas es importante.
