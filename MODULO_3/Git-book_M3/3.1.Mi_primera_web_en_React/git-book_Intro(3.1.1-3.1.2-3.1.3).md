# 3.1.1 Intro a React

### Introducción a React

Como ya hemos dicho, React es una librería para construir interfaces de usuario. ¿Pero, **cuáles son las principales características de React?** Las explicamos a continuación:

> **Nota:** esta es una mini lección de introducción. Léela ahora rápidamente y vuelve a leerla dentro de 3 días.

### React sirve para hacer webs y aplicaciones webs (SPA)

Ya sabemos qué es una web. Vamos a explicar lo que es una aplicación web, también llamada [SPA](https://es.wikipedia.org/wiki/Single-page_application).

Una aplicación web o SPA (Single Page Application) **es una web normal y corriente que simula el comportamiento de una aplicación de ordenador o móvil**. Es decir, es una web en la que, cuando se pulsa un enlace, no se refresca toda la página, sino que solo cambia una parte de la web.

Por ejemplo, cuando estamos leyendo un periódico online y pulsamos en el enlace de una noticia, la página navega a una nueva dirección o URL y la página entera se refresca para mostrarte el nuevo contenido. **En un periódico online hay muchísimos ficheros HTML, esto es una web.**

Sin embargo, cuando estamos en Drive y entramos en una carpeta, la URL también cambia, pero la página no se refresca, lo único que pasa es que el listado de carpetas y ficheros de Drive cambia, pero el menú y la cabecera permanecen intactos. El equipo de Drive ha creado **un único fichero HTML que junto con JS va cambiando dinámicamente el contenido que se muestra a la usuaria**. Por eso se llama Single page aplication. Por eso Drive es una SPA.

Hay miles de ejemplos de SPA, como Gmail, Trello, Kahoot o Facebook. Esta página donde estás leyendo estos materiales también es una SPA.

Una web y una SPA utilizan los mismos lenguajes de programación: HTML, CSS, JS... La diferencia entre ambas es más bien el aspecto y la usabilidad, es decir, **se diferencian en el concepto y la forma de programarlas, no en las tecnologías usadas**.

### React utiliza programación declarativa

Hasta ahora hemos estado usando [**el paradigma de programación imperativa**](https://en.wikipedia.org/wiki/Imperative_programming). Cuando programamos en JS en nuestro código escribimos lo que queremos conseguir indicando todas y cada una de las instrucciones, es decir, **programamos cómo y cuándo se tiene que realizar cada acción**.

En React vamos a usar [**el paradigma de programación declarativa**](https://en.wikipedia.org/wiki/Declarative_programming), en el que declaramos (o le decimos a React) qué queremos conseguir, pero **no le decimos ni el cómo ni el cuándo**. React se encarga de tomar estas decisiones por nosotras.

La forma más fácil de comparar estos dos paradigmas es con un ejemplo. Supongamos que queremos coger el listado de Adalabers de una promoción, ordenarlas alfabéticamente y filtrarlas por las que viven en Galicia. **Con la programación imperativa tenemos que decidir** si primero filtramos y luego ordenamos o al revés. Además también tenemos que programar más código. **Con la programación declarativa tenemos que indicar** lo que queremos y **la librería, programa o lenguaje declarativo que estemos usando decide** por nosotras si primero filtra y luego ordena o al revés. Incluso a veces puede primero filtrar y ordenar y otras veces al revés, en función de la cantidad datos y otras decisiones internas.

### React es reactivo

De ahí viene su nombre. Esta es una de las características más interesantes de React. En JS **nosotras tenemos que** escuchar un evento de la usuaria y **actuar en consecuencia** cambiando datos, repintando partes de nuestra página y volviendo a escuchar eventos.

En React **nosotras** vamos a escuchar un evento de la usuaria y **a cambiar los datos** de la aplicación, y **React se va a encargar de reaccionar**, es decir, va a estar observando esos datos y cuando cambien va a actuar en consecuencia, repintando la página, reescuchando los eventos o haciendo lo que tenga que hacer, cuando y como considere. Lo curioso de todo es que React está tan bien programado que nunca falla.

### React tiene una buena arquitectura

**Las creadoras de React nos indican como estructurar nuestra aplicación, nuestros ficheros, datos, eventos, HTML, estilos... de una forma muy concreta.**

En realidad nos están imponiendo una forma de trabajar. A nadie le gusta que le impongan nada. Pero resulta que esta forma de trabajar es tan sencilla y cómoda que a los pocos días piensas "pues no está tan mal". Al cabo de dos semanas piensas "esto es gloria bendita". Y al cabo de un mes te das cuenta de que todos los proyectos de React se parecen mucho y eres capaz de entender código ajeno escrito en React y simplemente se te enamora el alma, se te enamora.

### React está orientado a componentes

¿Qué es un componente en programación web? Definimos **un componente como un elemento o conjunto de elementos que tienen una identidad, finalidad o funcionalidad propia y que se pueden reutilizar**.

Un ejemplo básico de componentes es un input de un formulario o los elementos de un menú. Son piezas que tienen una finalidad y funcionalidad concreta y unos mismos estilos. Podríamos decir que un componente es algo parecido a una función de JS.

En futuras lecciones veremos ejemplos más avanzados.

### React es JavaScript

El corazón de React JS está escrito en JavaScript. Además cuando programemos una aplicación lo vamos a hacer con JS... y un poquito de una sintaxis nueva llamada JSX.

Por ello **React también es un preprocesador.** Nosotras vamos a escribir nuestro código en JS y JSX y React cogerá nuestro código, lo procesará y generará unos ficheros finales en HTML, CSS, JS, que son los que se van a ejecutar en nuestro navegador y los que se van a subir a GitHub Pages.

### Conclusiones

React es una librería de programación que:

* Nos sirve para hacer SPA.
* Usa programación declarativa.
* Está orientado a componentes.
* Es reactivo.
* React es JS.


# 3.1.2 Mi primera web en React

### Nuestra primera página en React

En esta mini lección aprenderemos cómo crear una página web básica y a arrancarla en nuestro ordenador.

> **Nota:** esta lección es importante, léela con detenimiento.

React es muy querido en la comunidad de programación porque además de ser una buena librería **tiene otras muchas funcionalidades extras** como avisarnos de muchos de los errores que cometemos o ayudarnos a arrancar un proyecto desde cero en cuestión de minutos. También permite integrarse con otras herramientas, en nuestro caso utilizaremos [Vite](https://vitejs.dev/) para crear aplicaciones en React.

### Vite + React

Vite es una herramienta de construcción y desarrollo de aplicaciones web extremadamente rápida y versátil creada especialmente para proyectos de JavaScript y TypeScript. A diferencia de algunas otras herramientas de desarrollo como Webpack o Parcel, Vite se enfoca en la velocidad y la simplicidad.

[Vite](https://vitejs.dev/) se integra fácilmente con React y puede utilizarse como un entorno de desarrollo y construcción eficiente para proyectos de React. Aquí te explicamos cómo funciona Vite con React.

**1. Crear un proyecto Vite con plantilla React:**

Para comenzar un proyecto de React con Vite, puedes utilizar la plantilla oficial de Vite que incluye React. Ejecuta los siguientes comandos en tu terminal:

```bash
# Instala Vite de forma global
npm install -g create-vite

# Crea un nuevo proyecto Vite con la plantilla de React
create-vite my-react-app --template react
```

> Reemplaza "my-react-app" con el nombre de tu proyecto.

> Si te da un error de permisos, por ejemplo "permission denied", escribe 'sudo' antes del comando. Ejemplo: `sudo npm install -g create-vite`. Te pedirá la contraseña de ubuntu o la de tu ordenador.

**2. Estructura del proyecto:**

Una vez que hayas creado tu proyecto, verás una estructura similar a la siguiente:

```arduino
my-react-app/
├── node_modules/
├── public/
│   ├── vite.svg
│   └── ...
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── .gitignore
├── package.json
├── README.md
├── vite.config.js
└── ...
```

* public: Contiene archivos estáticos.
* src: Aquí es donde trabajarás en tu código fuente React. El archivo principal de React suele ser `App.js` o `App.jsx`.
* `vite.config.js`: Es el archivo de configuración de Vite donde puedes personalizar la configuración de tu proyecto.

**3. Navegar al proyecto**

Una vez que se haya creado el proyecto, navega al directorio de tu proyecto usando el siguiente comando:

```bash
cd my-react-app
```

**4. Ejecutar la aplicación**

Ejecuta el siguiente comando para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo y abrirá tu aplicación en el navegador. Cualquier cambio que realices en tus archivos se reflejará automáticamente en la aplicación sin necesidad de recargar la página, gracias a la función de Hot Module Replacement (HMR) de Vite.

> Cualquier cambio que hagamos en el código (como modificar un componente, una hoja de estilos, etc.) debería reflejarse automáticamente en el navegador sin necesidad de recargar la página manualmente. A esto se le llama *hot reload* o *auto-refresh*. Si este refresco automático no os está funcionando, podéis solucionarlo añadiendo esta configuración en el archivo *vite.config.js* de vuestro proyecto: `server: { watch: { usePolling: true } },`.

**5. Desarrollar tu aplicación**

Trabaja en tu aplicación React en el directorio `src`. Puedes crear componentes, rutas, estilos y cualquier otra cosa que necesites para tu proyecto React estándar.

**6.Construir tu aplicación**

Cuando estés listo para crear una versión de producción de tu aplicación, puedes ejecutar el siguiente comando:

```bash
npm run build
```

Esto generará una carpeta dist con los archivos optimizados para producción que puedes implementar en un servidor web.

### Conclusiones

Para crar aplicaciones React con Vite primero instala `npm install -g create-vite`, lo tendrás que hacer una sola vez en cada ordenador.

Cada vez que quieras crear un nuevo proyecto de React:

1. Ejecuta `create-vite my-react-app --template react`
2. Abre VS Code en la carpeta creada.
3. Ejecuta `npm run dev` para arrancar el proyecto en <http://localhost:3000>.

### Ejercicios

#### 1. Editando el código HTML

Vamos a crear nuestra primera página web en React y a editarla. El objetivo es entender un poquito sobre dónde escribimos el código HTML en un proyecto de React y comprobar el resultado de nuestros cambios.

Para ello:

1. Crea un nuevo proyecto con `create-vite my-react-app --template react`.
2. Arranca el proyecto.
   * React tiene su propio servidor local (su propio Live Server) que nos abre la página en localhost.
   * También observa los cambios en los ficheros del proyecto y si alguno cambia, **React refresca el navegador para mostrar los últimos cambios**.
3. Edita la parte de código que está en el fichero `src/App.jsx` > función `App` > retorno de la función:
   1. Cambia el texto de la aplicación.
   2. Añade nuevas etiquetas HTML, las que quieras.
4. Guarda y comprueba que tus cambios se visualizan en la página.
   * Si tus cambios se muestran en el navegador es que lo has hecho bien.

#### 2. Editando el código CSS

Partiendo del ejercicio anterior, vamos a probar a meter cambios en el CSS del proyecto:

1. Edita el fichero `src/App.css`:
   * Cambia lo que quieras.
2. Guarda y comprueba que tus cambios se visualizan en la página.
   * Si tus cambios se muestran en el navegador es que lo has hecho bien.


# 3.1.3 Ficheros iniciales

### Ficheros iniciales de un proyecto de React

> **Nota:** esta mini lección es poco importante, léela por encima y vuelve a leerla al final del curso.

Ahora queremos entender los ficheros de un proyecto de React. Crea un proyecto con `create-vite my-react-app --template react`, abre los siguientes ficheros e intenta entender qué hace cada uno. A continuación te vamos a explicar los más importantes, para entender el resto te recomendamos que en el futuro investigues sobre ellos en Internet.

* `public/vite.svg`: es el favicon que aparece en la pestaña del navegador.
* `index.html`: es el HTML principal y único de la página. Recuerda que con React creamos Single Page Applications.
  * Como ves es un HTML normal y corriente.
  * La línea `<div id="root"></div>` es el contenedor donde se meterán todos los componentes que crearemos desde React. Todo lo que está dentro de esta etiqueta lo gestionará React. Todo lo que esté fuera de esta etiqueta lo podremos gestionar nosotras a mano, sin React, con nuestro JS y CSS. Normalmente no ponemos nada fuera de esta etiqueta.
  * No debemos cambiarlo de nombre ni carpeta.
* `src/App.css`: es un partial de estilos del componente `App.js`.
* `src/App.jsx`: es el componente principal de nuestra web:
  * En este fichero vamos a crear el HTML y JS de nuestra web.
  * La línea `import reactLogo from './assets/react.svg';` y `import viteLogo from '/vite.svg'` importa una imagen para luego ser utilizada en el HTML de más abajo.
  * La línea `import './App.css';` importa los estilos de este componente.
  * La función `function App() {...}` retorna el HTML que queremos mostrar en nuestra web. Este HTML es un poco especial, así que hablaremos en detalle sobre él más adelante.
  * No debemos cambiarlo de nombre ni de carpeta.
  * En la primera parte del módulo vamos a trabajar en un solo componente, que será este. En la segunda parte crearemos más componentes.
* `src/index.css`: son los estilos principales de la página. Se importan en el fichero `src/main.jsx`.
* `src/main.jsx`: es el fichero principal en el que arrancamos el proyecto de React.
  * El código:

    ```jsx
      import React from 'react'
    import ReactDOM from 'react-dom/client'
    import App from './App.jsx'
    import './index.css'

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )

    ```

    Lo que hace importar el componente App y decirle a React que lo renderice (o lo que es lo mismo que lo pinte) en la etiqueta `#root` del fichero `index.html`.
* `.gitignore`, `package.json` y `README.md` ya sabes lo que son.

Vaya chapa, ¿no? El resumen de todos estos ficheros es:

* El HTML principal es `index.html`. Es el fichero que React usa para construir el HTML de la web.
* El JS principal es `src/index.jsx`. Es el fichero que React usa para construir el JS y HTML de la SPA.
  * Es el primer fichero que React ejecuta.
  * Desde este fichero le vamos indicando qué componentes de React queremos que renderice y dónde.

### JSX

Si has sido un poco detallista, te habrás dado cuenta que los ficheros ahora tienen una extensión `.jsx`, vamos a ver que es este nuevo formato.

JSX es una extensión de sintaxis que facilita la creación de interfaces de usuario en aplicaciones web React al combinar JavaScript con estructura de marcado similar a HTML, mientras que JavaScript es el lenguaje de programación estándar utilizado en una variedad de aplicaciones y puede ser utilizado junto con JSX en el desarrollo de aplicaciones React.

La principal diferencia entre JavaScript (JS) y JSX es que JSX es una extensión de JavaScript utilizada específicamente en el desarrollo de aplicaciones web con la biblioteca React. Aquí hay algunas diferencias clave:

Sintaxis:

* JavaScript (JS) es un lenguaje de programación estándar que se utiliza en una variedad de aplicaciones, no solo en el desarrollo web. La sintaxis de JS es más genérica y no incluye elementos específicos para la manipulación del DOM (Document Object Model) o la creación de componentes de interfaz de usuario.
* JSX, por otro lado, es una extensión de sintaxis que combina elementos de JavaScript con la estructura de marcado similar a HTML. JSX se utiliza principalmente en el desarrollo de aplicaciones web con React y permite definir componentes de interfaz de usuario de manera más declarativa y legible.

**Uso en React:**

En React, JSX es la forma preferida de definir componentes de interfaz de usuario. Los componentes de React se crean utilizando JSX para describir la estructura de la interfaz de usuario y cómo se debe comportar. JSX se transpila (se convierte) a JavaScript estándar antes de que se ejecute en el navegador.

JavaScript se utiliza en React para la lógica de programación y manipulación del estado. Puedes mezclar JavaScript y JSX en tus componentes de React para lograr la funcionalidad deseada.

**Ejemplo de JSX:**

```jsx
const element = <h1>Hola, mundo!</h1>;
```

**Ejemplo equivalente en JavaScript puro:**

```jsx
const element = document.createElement("h1");
element.textContent = "Hola, mundo!";
```

> NOTA: en la lección de mañana hablaremos de JSX con más detalle.
