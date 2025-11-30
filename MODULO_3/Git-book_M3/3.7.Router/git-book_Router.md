# 3.7 Router

En esta lección aprenderemos a controlar el Router del navegador desde React y a mostrar unos componentes u otros en función de las rutas.

"¿Qué son las rutas?", te estarás preguntando. Las rutas son esto:

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-c31cde23fcb19516442532634b41a786fc8ee595%2Freact_router.png?alt=media)


# 3.7.1 Intro al router

> El [React Router](https://reactrouter.com/en/main) está en constante cambio, si encuentras algún error en los enlaces y explicaciones de esta lección avisa a las profesoras.

### Introducción al router del navegador

En esta mini lección aprenderemos por qué es importante controlar el router en una aplicación, ya esté hecha en JavaScript, en React o en otra librería.

### El router del navegador

El router del navegador es la parte de la pestaña de Chrome, Safari, Firefox... que gestiona la dirección en la que se encuentra una página.

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-c31cde23fcb19516442532634b41a786fc8ee595%2Freact_router.png?alt=media)

En función de lo exquisitas que seamos con las definiciones, a esta dirección también le podemos llamar [URL](https://es.wikipedia.org/wiki/Localizador_de_recursos_uniforme) o [URI](https://es.wikipedia.org/wiki/Identificador_de_recursos_uniforme). Pero vamos, que todo el mundo nos va a entender si usamos router, enrutador, URL o URI.

### Comportamiento por defecto del router

Hay dos formas de trabajar con el router:

* **Gestionarlo nosotras a través de JavaScript o React** (esto es lo que vamos a aprender hoy).
* **No programar nada** para gestionarlo **y usar el comportamiento por defecto**.

El comportamiento por defecto del router es el que hemos estado usando hasta ahora, que sigue los siguientes pasos:

1. Estamos en la página <https://adalab.es>.
2. En la página hay un enlace del tipo:

   ```html
   <a href="https://adalab.es/contacto/" title="Contacta con nosotras"
     >Contacto</a
   >
   ```
3. La usuaria pulsa en el link.
4. El navegador cambia la dirección de <https://adalab.es> a <https://adalab.es/contacto/>.
5. El navegador se comunica con el servidor <https://adalab.es>.
6. El navegador pide el HTML correspondiente a <https://adalab.es/contacto/> al servidor.
7. El navegador pide todos los recursos que necesita este HTML, como CSS, imágenes o vídeos al servidor.
8. Cuando el servidor devuelve estos ficheros, el navegador pinta la página de Contacto.

En resumen, **el navegador tiene el control de este proceso** de cambio de URL y además **necesita comunicarse con el servidor** para mostrarnos una página u otra.

### Gestión del router desde JavaScript

La otra forma de trabajar es gestionar los cambios de rutas desde nuestro código. Los pasos para hacer esto son:

1. Estamos en la página <https://adalab.es>.
2. En la página hay un enlace del tipo:

   ```html
   <a href="https://adalab.es/contacto/" title="Contacta con nosotras"
     >Contacto</a
   >
   ```
3. La usuaria pulsa en el link.
4. Desde JS escuchamos el evento click en este enlace y hacemos un `ev.preventDefault()` para impedir que el navegador tome el control.
5. Usando [`window.location`](https://developer.mozilla.org/es/docs/Web/API/Window/location) averiguamos cuál es la ruta actual y cambiamos nuestra página para mostrar a la usuaria otros contenidos.

> **Nota:** escribe `window.location` en la consola del navegador y verás qué información te facilita. [Más info aquí](https://developer.mozilla.org/es/docs/Web/API/Window/location).

En realidad los pasos que hay que dar no son tan simples como acabamos de contar. **Son más complejos, pero siempre los mismos.** Por ello hay muchos desarrolladores que han creado librerías tanto para JS como para React, que nos evitan tener que reinventar la rueda en cada proyecto.

### Beneficios de gestionar el router

Nosotras queremos que cuando cambie la ruta del navegador también cambien los contenidos que mostramos a la usuaria. De esta forma, la usuaria puede copiar la ruta actual, mandársela a su amiga por WhatsApp y compartir un contenido concreto de nuestra página. Hasta aquí todo está claro.

Pero, ¿por qué queremos gestionar nosotras el router si ya lo hace el navegador? Porque queremos:

* **Tener más control:** cuantas más cosas controlamos, más cosas chulas podemos hacer. El comportamiento por defecto está muy bien, pero a veces se nos queda corto.
* **Mejorar la experiencia de la usuaria:** con el comportamiento por defecto se refresca toda la página. Si nosotras controlamos el router, podemos hacer que cuando cambie la ruta solo cambie una parte de nuestra página y el resto permanezca intacta.
* **Mejorar el rendimiento:** si al cambiar la ruta solo cambiamos una parte de la página, el proceso es más rápido y las peticiones a Internet son menos y por ello también más rápidas.
* **Trabajar sin conexión a Internet:** como hemos dicho, al gestionar nosotras las rutas lo hacemos desde JS. No necesitamos que el navegador se comunique con el servidor. La usuaria puede seguir usando la página aunque no tenga Internet, al menos parcialmente.
* **Trabajar con SPA:** las Single Page Applications son aplicaciones con un solo fichero HTML. Para poder simular que tenemos múltiples páginas debemos simular que tenemos múltiples direcciones web. **La gestión del router es una de las principales características de las SPA.**

### Problemas de la gestión de rutas

Gestionar las rutas tiene dos problemillas:

#### 1. Navegadores antiguos

Antiguamente, los navegadores no permitían gestionar las rutas. Pero en programación somos gente un poco inquieta y si algo no está permitido nos inventamos una forma para hacerlo.

A alguien se le ocurrió utilizar el hash de las rutas para simular un cambio de página. El hash es la parte de texto que está detrás de la almohadilla `#`. En la dirección <https://books.adalab.es/materiales#intro-a-react> el hash es **intro-a-react**. El cambio de hash en el navegador implica una navegación dentro de la página actual, es decir, no se comunica con el servidor.

La solución es escuchar el cambio de hash, y cuando este cambie, en vez de navegar por una página, cambiar el contenido de la página desde JavaScript.

#### 2. Redirecciones en el servidor

**Los navegadores modernos sí que soportan la gestión de rutas** desde JavaScript, y por ello podemos gestionarlas **sin usar el hash**.

Podemos convertir la dirección <https://books.adalab.es/materiales#intro-a-react> a <https://books.adalab.es/materiales/intro-a-react> para que sea más elegante y legible.

Pero tiene un problema, y es que hay que configurar una opción en el servidor para que funcione correctamente. Cuando trabajes en una empresa el equipo de infraestructura tendrá accesos a vuestros servidores, pero por ejemplo en GitHub Pages no tenemos acceso a dicha configuración.

La conclusión es que vamos a aprender a gestionar las rutas con hash. Cuando en tu futuro trabajo lo quieras gestionar de la forma moderna solo tendrás que cambiar una cosa muy sencilla que te vamos a explicar.


# 3.7.2 React Router Dom

> El [React Router](https://reactrouter.com/en/main) está en constante cambio, si encuentras algún error en los enlaces y explicaciones de esta lección avisa a las profesoras.

### Intro a React Router DOM

[React Router DOM](https://reactrouter.com/) es una librería o [módulo de NPM](https://www.npmjs.com/package/react-router-dom) que un equipo de desarrollo ha creado para facilitarnos la vida a la hora de gestionar las rutas desde React. Vamos a aprender a usarla.

> **Nota:** esta lección es importante.

### Instalación de React Router DOM

Para gestionar las rutas de una web de React lo primero que tenemos que hacer es instalarlo en el proyecto. Ya sabes cómo va esto, ejecuta en la raíz de tu proyecto la línea:

```bash
npm install react-router-dom
```

Verás que esto ha añadido esta dependencia a tu `package.json`. Te recomendamos seguir estos pasos en tu React Starter Kit, para así tenerlo en tu proyecto base.

### Añadir homepage al package.json

Para que nuestra gestión del router funcione bien en cualquier servidor debemos añadir la propiedad `"homepage": "./"` al fichero `package.json`. Nos debe quedar un código como:

```json
{
  "name": "usando-react-router-dom",
  "homepage": "./",
  "version": "0.1.0",
  "dependencies": {
    ...
  },
  "scripts": {
    ...
  }
}
```

### Configuración de React Router DOM en un proyecto

El tercer paso es decirle a tu proyecto de React que quieres gestionar las rutas con React Router DOM. Para ello vamos a cambiar el `index.jsx` de la página, que ahora es algo como:

```jsx
// Fichero src/index.js (código previo)

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

Y lo vamos a cambiar por:

```jsx
// Fichero src/index.jsx (código nuevo)

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
```

Con la línea `import { HashRouter } from 'react-router-dom';` estamos diciendo que vamos a usar las rutas con Browser.

Con las líneas:

```jsx
<HashRouter>
  <App />
</HashRouter>
```

Le indicamos que el componente `HashRouter` es ahora la madre de `App`. Esto hace que tanto `App` como todos sus componentes hijas, nietas... puedan trabajar con las rutas.

> **Nota:** en el futuro cuando tengas acceso a la configuración de tu servidor y puedas usar el sistema moderno de rutas, tienes que cambiar en este fichero la palabra `HashRouter` por `BrowserRouter`. Te quedará el código así:
>
> ```jsx
> // Fichero src/index.jsx
>
> import React from "react";
> import ReactDOM from "react-dom/client";
> import "./styles/index.scss";
> import App from "./components/App";
> import { BrowserRouter } from "react-router-dom";
>
> const root = ReactDOM.createRoot(document.getElementById("root"));
> root.render(
>   <BrowserRouter>
>     <App />
>   </BrowserRouter>
> );
> ```
>
> Todo lo demás funciona exactamente igual.

### Uso básico de React Router DOM

Vamos a empezar por un ejemplo para entender cómo funciona React Router DOM. Además de modificar el `src/index.js`, copia este código en el componente `App` y ejecútalo.

```jsx
// Fichero src/components/App.jsx

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h2>Este título aparece siempre</h2>

      <Routes>
        <Route
          path="/contacto"
          element={
            <h2>
              Este título solo aparece cuando la usuaria entra en la página de
              contacto
            </h2>
          }
        />
      </Routes>

      <nav>
        <ul>
          <li>
            <a href="/#/">Ir al inicio</a>
          </li>
          <li>
            <a href="/#/contacto">Ir a contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
```

Lo segundo es que si pulsas en los links, el contenido cambia pero la página no se refresca.

**¡¡Estas dos características nos indican que estamos controlando las rutas!!**

Analizando el código vemos:

* Con esta línea importamos el componente `Route` para usarlo en el retorno de la función `App`.

  ```jsx
  import { Route, Routes } from "react-router-dom";
  ```
* Usamos el componente `Route` con las líneas:

  ```jsx
  <Routes>
    <Route
      path="/contacto"
      element={
        <h2>
          Este título solo aparece cuando la usuaria entra en la página de
          contacto
        </h2>
      }
    />
  </Routes>
  ```

  * **El componente `Route` está pendiente de cambios en la ruta del navegador.** Cuando la usuaria pulsa en un link la ruta del navegador cambia. `Route` comprueba si la ruta actual del navegador es igual que su prop `path`. Si la ruta del navegador coincide con el valor de `path` el componente `Route` renderiza el componente o el código que se haya especificado en `element`.
  * Explicado con el código de arriba, cuando la usuaria navega a <http://localhost:3000/#/contacto>, el componente Route se da cuenta de que la ruta `/contacto` es igual que su `path="/contacto"`, y por ello muestra el `<h2>Este título solo aparece cuando la usuaria entra en la página de contacto</h2>` en pantalla.
  * Por supuesto, cuando la usuaria navega a otra ruta que no es `/contacto` el componente `Route` elimina el `h2` de la página. Te recomendamos probar este código en Chrome e inspeccionar el HTML generado.

Cuando acabes este módulo sabrás programar un componente exactamente igual al `Route`. Si te das cuenta, lo que este componente hace por dentro es:

* Crea una función manejadora de eventos que se llama, por ejemplo, `handleRouter`.
* Escucha cambios en la ruta del navegador con `window.addEventListener("hashchange", handleRouter)`.
  * El cambio de ruta es un evento al igual que un `click` o un `keyUp`.
* Cada vez que la ruta cambia, el navegador ejecuta `handleRouter`, que:
  * Con `window.location` obtiene la ruta actual.
  * Con un `if` comprueba si la ruta actual es igual que la prop `path`.
  * Si son iguales renderiza el contenido de `props.children`.
  * Si son diferentes no renderiza nada.

### Uso del componente Link

Antes de seguir avanzando con el componente `Route` queremos explicar cómo funciona el componente `Link`.

```jsx
// Fichero src/components/App.jsx

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h2>Este título aparece siempre</h2>
      <Routes>
        <Route
          path="/contacto"
          element={
            <h2>
              Este título solo aparece cuando la usuaria entra en la página de
              contacto
            </h2>
          }
        />
      </Routes>

      <nav>
        <ul>
          <li>
            <Link to="/">Ir al inicio</Link>
          </li>

          <li>
            <a href="/#/contacto">Ir a contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
```

Si el día de mañana dejamos de usar Hash y usamos el sistema moderno, tendremos que cambiar todos los links de la aplicación quitando las `#`.

Te aseguro que si en nuestra aplicación tenemos que cambiar 30 hashs, solo nos acordaremos de cambiar 29. El día que nos vayamos de vacaciones nos llamará nuestra jefa y nos dirá "oye se te olvidó cambiar un hash y hay un fallo en la página y las usuarias no pueden entrar en tal apartado de la web y bla bla bla". Creéme, eso no es una vida digna.

La solución es utilizar el componente `<Link>` que hace este cambio por nosotras. El código bueno sería:

```jsx
// Fichero src/components/App.jsx

import { Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h2>Este título aparece siempre</h2>

      <Routes>
        <Route
          path="/contacto"
          element={
            <h2>
              Este título solo aparece cuando la usuaria entra en la página de
              contacto
            </h2>
          }
        />
      </Routes>

      <nav>
        <ul>
          <li>
            <Link to="/">Ir al inicio</Link>
          </li>
          <li>
            <Link to="/contacto">Ir a contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
```

* Con esta línea, además de importar el componente `Route` estamos importando el componente `Link` para usarlo más abajo.

  ```jsx
  import { Link, Route, Routes } from "react-router-dom";
  ```
* También hemos sustituido la línea:

  ```jsx
  <a href="/#/contacto">Ir a contacto</a>
  ```
* También hemos usado la línea:

  ```jsx
  <Link to="/contacto">Ir a contacto</Link>
  ```

El componente `Link` lo que hace es:

* Renderiza un link `<a />` poniendo en su `href` el valor que le pasamos por la prop `to`.
* Renderiza dentro de las etiquetas de apertura `<a>` y cierre `</a>` las etiquetas que recibe.

El componente `Link` **admite todas las props que quieras y las renderiza como atributos del link**. El código:

```jsx
<Link to="/contacto" className="link" id="contact-link" target="_blank">
  Ir a contacto
</Link>
```

Renderiza el HTML:

```html
<a href="#/contacto" class="link" id="contact-link" target="_blank"
  >Ir a contacto</a
>
```

### Uso del componente NavLink

El componente `<NavLink>` es muy parecido a `<Link>`, pero con alguna funcionalidad extra. La más interesante es que podemos usarlo para pintar un link que se muestre activo si su ruta coincide con la ruta actual del navegador. Para más [info visita la documentación](https://reactrouter.com/en/main/components/nav-link#navlink).

### Conclusiones

Para trabajar con rutas en React tenemos que instalar y configurar React Router DOM:

1. Instalamos la librería en el proyecto: `npm install react-router-dom`.
2. Añadimos `"homepage": "./"` al `package.json`.
3. Añadimos este código al `src/index.js`:

   ```jsx
   <HashRouter>
     <App />
   </HashRouter>
   ```

Para mostrar u ocultar un contenido en función de la ruta debemos usar el componente:

```jsx
<Routes>
  <Route to="/ruta" element={contenido_que_se_quiere_mostrar} />
</Routes>
```

Para crear los links debemos usar los componentes `<Link>` o `<NavLink>`.

Para más información sobre esta librería [consulta su documentación](https://reactrouter.com/en/6.4.4).


# 3.7.3 Rutas estáticas

> El [React Router](https://reactrouter.com/en/main) está en constante cambio, si encuentras algún error en los enlaces y explicaciones de esta lección avisa a las profesoras.

### Rutas estáticas con React Router DOM

Las rutas estáticas son las rutas que no cambian, obviamente. Cuando aprendamos las rutas dinámicas entenderemos mejor la diferencia.

En esta mini lección continuamos aprendiendo sobre React Router DOM.

> **Nota:** esta lección también es importante.

### Componente Routes

Hemos aprendido que el componente `Route` nos sirve para mostrar o no un contenido en función de la ruta actual.\
A menudo queremos que si un componente `Route` se renderiza, el resto se ignoren, con el componente `<Routes />` puedes crear rutas y contenidos excluyentes para que solo se pinte uno de ellos. Veamos el siguiente código:

```jsx
// Fichero src/components/App.jsx

import { Link, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h2>Este título aparece siempre</h2>

      <Routes>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>

      <nav>
        <ul>
          <li>
            <Link to="/">Ir al inicio</Link>
          </li>
          <li>
            <Link to="/contacto">Ir a contacto</Link>
          </li>
          <li>
            <Link to="/contacto/formulario">Ir al formulario de contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
```

Con la línea `import { Link, Route, Routes } from 'react-router-dom';` importamos el componente `Routes` para usarlo más abajo.

Con estas líneas le decimos que si la ruta coincide con el `path` del primer `Route` lo renderice, pero no siga comprobando si debe o no renderizar el segundo `Route`:

```jsx
<Routes>
  <Route path="/contact" element={<ContactPage />} />
  <Route path="/products" element={<ProductsPage />} />
</Routes>
```

Si traducimos el código anterior a JavaScript sería algo como:

```js
if (route empieza por "/contact") {
  renderizarEnLaPagina(<h2>Página del formulario de contacto</h2>);
} else if (route empieza por "/products") {
  renderizarEnLaPagina(<h2>Página de productos</h2>);
}
```

En resumen:

* Sin el componente Routes se comprueban todos los Route.
* **Con el componente Routes se comprueban todos los Route hasta que se renderiza uno.** A partir de ahí ya no se comprueba ni se renderiza ninguno más.

### Ruta no encontrada

Lo más normal es utilizar React Router DOM para renderizar cada una de las páginas de una web. Pero también queremos mostrar un mensaje cuando la usuaria entra en una página que no existe. El código del componente `App` de una página completa podría ser:

```jsx
// Fichero src/components/App.jsx

import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import ProductsPage from './ProductsPage';
import NotFoundPage from './NotFoundPage';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
```

Si traducimos el código anterior a JavaScript sería algo como:

```js
if (route === "/") {
  renderizarEnLaPagina(<HomePage />);
} else if (route empieza por "/contact") {
  renderizarEnLaPagina(<ContactPage />);
} else if (route empieza por "/products") {
  renderizarEnLaPagina(<ProductsPage />);
} else {
  renderizarEnLaPagina(<NotFoundPage />);
}
```

### Ejercicios

#### 1. Copiando GitHub

Queremos replicar el menú de la página de GitHub:

![](https://github.com/Adalab/pw-materiales-del-curso/blob/master/modulo_3/3-8-router/assets/images/react_ejercicio_router_github_01.png)

1. Para ello crea una página que tenga un menú superior con los enlaces:
   * Overview
   * Repositories
   * Packages
   * People
   * Teams
   * Projects
   * Settings
2. Asigna una estática a cada uno de los enlaces.
3. Muestra un contenido diferente (con un lorem ipsum es suficiente) en cada uno de los enlaces.
4. Y solo si te atreves ;) crea una página para cuando la usuaria entre en una ruta que no exista.

#### 2. No apto para manazas

Hasta ahora hemos trabajado con las rutas siempre en el fichero `App`. Esto es así porque normalmente cuando navegamos de una ruta a otra de una página lo que cambia es el contenido principal.

Ahora queremos gestionar contenido a través del router, pero no en `App` si no en otro componente, por ejemplo en `Header`.

El objetivo es que cuando los usuarios entren en la página **Settings** aparezca un mensaje (dentro de la cabecera) que ponga **Zona no apta para manazas**.

![](https://github.com/Adalab/pw-materiales-del-curso/blob/master/modulo_3/3-8-router/assets/images/react_ejercicio_router_github_02.png)

Para ello:

1. Partiendo del ejercicio anterior, crea el componente `Header`.
   1. Mueve el menú dentro de este nuevo componente.
   2. Importa y usa `Header` en `App` para que la página se muestre igual que antes.
2. Añade un `<div />` al `Header` con el mensaje **No apto para manazas**.
3. Con React Router DOM haz que este mensaje solo aparezca cuando estemos en **Settings**.

#### 3. No apto para manzanas (*one more time*)

En este último ejercicio queremos que el mensaje **No apto para manazas** aparezca cuando la usuaria entra en **Settings** y en **Projects**.

Con los conocimientos que ya tienes sobre React Router DOM ya sabes que puedes utilizar dos `<Route>` para conseguirlo.

Pero también queremos que te acostumbres a leer documentación técnica. Por ello:

1. Entra en [la documentación de React Router DOM](https://reactrouter.com/en/6.22.0/start/overview).
2. Busca información sobre el componente `<Route>` y la opción `path` y léela detenidamente.

> **Nota:** es muy buena práctica que, hasta que domines una herramienta, consultes su documentación cada vez que vayas a utilizarla. Cada vez que lees un poco de documentación descubres un truco, una forma nueva de programar, una forma de simplificar tu código...

> **Nota:** te recomendamos que dediques cinco minutos a este ejercicio, si no lo consigues déjalo para cuando te sobre el tiempo, ya que es poco importante.


# 3.7.4 Rutas dinámicas

> El [React Router](https://reactrouter.com/en/main) está en constante cambio, si encuentras algún error en los enlaces y explicaciones de esta lección avisa a las profesoras.

### Rutas dinámicas

Una ruta dinámica es aquella ruta que consideramos única, porque que la queremos gestionar como tal, pero que puede cambiar ligeramente.

### ¿Qué es una ruta dinámica?

Supongamos que estamos programando una tienda de teléfonos móviles. Esta tienda tiene las siguientes rutas / páginas:

* Rutas estáticas:
  * `/`: Inicio.
  * `/contact`: Página de contacto.
  * `/products`: Catálogo de productos
* Rutas dinámicas:
  * `/product/43823`: Página del detalle del producto con id 43823, que es un iPhone.
  * `/product/345565`: Página del detalle del producto con id 345565, que es un Nokia.
  * `/product/9745`: Página del detalle del producto con id 9745, que es un Xiaomi.

**Aunque las 3 últimas rutas muestran información e imágenes diferentes, en el fondo es la misma página.**

No tiene sentido programar y maquetar una por una todas las páginas de detalle de todos los teléfonos móviles de la tienda online. Además, cuando nosotras programamos esta página no sabemos cuáles son los nuevos móviles que van a salir al mercado.

Lo lógico es programar y maquetar una única página de detalle de un móvil genérico y luego pasarle a esta misma página los textos, imágenes y demás contenido necesario para mostrar la información del móvil.

**Una ruta dinámica es una única ruta con la que podemos gestionar todas las rutas que cumplan un patrón.**

En esta tienda virtual el patrón que cumplen las rutas es que todas empiezan por `/product/` y terminan con el id del producto. Esta ruta dinámica la expresamos como `/product/:productId`. Con los dos puntos `:` estamos expresando que `:productId` es algo que puede cambiar.

### ¿Cómo gestionar rutas dinámicas?

Una vez que ya sabemos que podemos utilizar una única ruta dinámica para gestionar todas las rutas que cumplan un patrón, lo que nos interesa son dos cosas:

* Cómo declarar estas rutas para manejarlas.
* Cómo obtener los datos que cambian en las rutas.
  * En la tienda de móviles, si la usuaria entra en la ruta `/product/43823`, necesito obtener el id `43823` para saber qué móvil debo mostrar.

Pues vamos a ello.

### ¿Cómo declarar rutas dinámicas?

Muy sencillo. Así:

```jsx
// Fichero src/components/App.jsx

import { Link, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Tienda virtual de móviles</h1>

      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="/products">Productos</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<h2>Página de inicio</h2>} />
        <Route path="/contact" element={<h2>Página de contacto</h2>} />

        <Route
          path="/products"
          element={
            <>
              <h2>Catálogo de móviles</h2>
              <nav>
                <ul>
                  <li>
                    <Link to="/product/43823">Ver detalle del iPhone</Link>
                  </li>
                  <li>
                    <Link to="/product/345565">Ver detalle del Nokia</Link>
                  </li>
                </ul>
              </nav>
            </>
          }
        />

        {/* Con este path declararmos una ruta dinámica */}
        {/* Cuando la usuaria entre en /product/43823 o en /product/345565 se mostrará este contenido  */}
        <Route
          path="/product/:productId"
          element={<h2>Detalle de un móvil</h2>}
        />
      </Routes>
    </div>
  );
};

export default App;
```

Fácil, ¿verdad?

### ¿Cómo obtener los datos de las rutas dinámicas?

Ahora lo que nos interesa es que si la usuaria entra en la ruta `/product/43823` podamos obtener el número `43823` para saber que ha entrado en la página de detalle del iPhone y no en la del Nokia.

Hay muchas formas de programarlo, vamos a ver las dos más comunes: `useLocation` y `useParams`. Tú debes practicar cada una de estas formas, para entender los pros y contras y en el futuro saber elegir cuál te interesa en cada proyecto.

> **Nota:** es posible que estos ejemplos se te queden un poco cortos, porque para hacer un ejercicio realista tendríamos que combinar un listado de móviles, con su `useState`, su `useEffect`, su pintado de arrays... y por ahora queremos ir a lo simple. En estos ejercicios solo nos preocupa obtener el `productId`.

> **Nota:** como ya sabemos, [el equipo de React ha creado varios hooks](https://es.reactjs.org/docs/hooks-intro.html) como `useState` y `useEffect`. Además ha ideado un sistema para que cualquier persona pueda crear sus propios [custom hooks](https://es.reactjs.org/docs/hooks-custom.html) (o hooks personalizados) que nos facilitan la vida. Esto es muy útil, ya que muchos desarrolladores están publicando sus propios hooks, como el equipo de React Router DOM, que ha creado `useLocation` y `useParams`.

#### Obteniendo los datos de la ruta con useLocation

**El hook** [**useLocation**](https://reactrouter.com/en/main/hooks/use-location) **devuelve un objeto de ubicación que representa la URL actual.** Veamos el siguiente código:

```jsx
// Fichero src/components/App.jsx

import { useLocation, matchPath } from 'react-router';
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
  // Con el hook useLocation primero obtengo la ruta actual
  const { pathname } = useLocation();
  // Con el matchPath compruebo si la ruta actual coincide con /product/:productId
  const routeData = matchPath('product/:productId', pathname);
  // Si no coincide, routeData es null
  // Si sí coincide, routeData es un objeto con mucha información útil
  // La información que me interesa está en routeData.params.productId
  const productId = routeData !== null ? routeData.params.productId : '';
  console.log(routeData);

  return (
    <div>
      <h1>Tienda virtual de móviles</h1>

      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="/products">Productos</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<h2>Página de inicio</h2>} />
        <Route path="/contact" element={<h2>Página de contacto</h2>} />

        <Route
          path="/products"
          element={
            <>
              <h2>Catálogo de móviles</h2>
              <nav>
                <ul>
                  <li>
                    <Link to="/product/43823">Ver detalle del iPhone</Link>
                  </li>
                  <li>
                    <Link to="/product/345565">Ver detalle del Nokia</Link>
                  </li>
                </ul>
              </nav>
            </>
          }
        />

        {/* Con este path declararmos una ruta dinámica */}
        {/* Cuando la usuaria entre en /product/43823 o en /product/345565 se mostrará este contenido  */}
        <Route
          path="/product/:productId"
          element={<h2>Detalle de un móvil</h2>}
        />
      </Routes>
    </div>
  );
};

export default App;
```

¿Cómo funciona este hook?

* Con la línea

  ```js
  import { useLocation, matchPath } from 'react-router';
  ```

  importamos `useLocation` y `matchPath` para usarlo más abajo.
* Con la línea:

  ```js
  const routeData = matchPath('product/:productId', pathname);
  ```

  * Compruebo si la ruta actual coincide con la ruta dinámica `/product/:productId`.
  * Si no coincide, `matchPath` mete en la constante `routeData` un `null`.
  * Si sí coincide, `matchPath` mete en la constante `routeData` un objeto con la info:

    ```js
    {
      isExact: true,
      params: {
        productId: "43823"
      },
      path: "/product/:productId",
      url: "/product/43823"
    }
    ```
  * **Lo que yo haga con esta información ya es problema mío.** En concreto me interesa el dato que está en `routeData.params.productId`.
* Con la línea:

  ```js
  const productId = routeData !== null ? routeData.params.productId : '';
  ```

  * En `productId` meto, o el id del producto sacado de la ruta actual, o un string vacío.
  * A partir de aquí ya uso el `productId` en el retorno o donde quiera.
* Por cierto, el nombre de `productId` en la ruta lo elegimos nosotras, es decir:

  * Si en vez de poner la línea:

  ```js
  const routeData = matchPath('/product/:productId');
  ```

  * Ponemos la línea:

  ```js
  const routeData = matchPath('/product/:id');
  ```

  * El valor de `routeData` es:

    ```js
    {
      isExact: true,
      params: {
        id: "43823" // el nombre de esta propiedad antes era productId y ahora es id
      },
      path: "/product/:id",
      url: "/product/43823"
    }
    ```

#### Obteniendo los datos de la ruta con useParams

**El hook** [**useParams**](https://reactrouter.com/en/main/hooks/use-params) **nos da los parámetros de la ruta dinámica actual.** Pero aquí estamos obligadas a trabajar con varios componentes. Veamos el siguiente código:

```jsx
// Fichero src/components/App.jsx

import { Link, Route, useParams } from 'react-router-dom';
import Product from './Product';

const App = () => {
  return (
    <div>
      <h1>Tienda virtual de móviles</h1>

      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="/products">Productos</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<h2>Página de inicio</h2>} />
        <Route path="/contact" element={<h2>Página de contacto</h2>} />

        <Route
          path="/products"
          element={
            <>
              <h2>Catálogo de móviles</h2>
              <nav>
                <ul>
                  <li>
                    <Link to="/product/43823">Ver detalle del iPhone</Link>
                  </li>
                  <li>
                    <Link to="/product/345565">Ver detalle del Nokia</Link>
                  </li>
                </ul>
              </nav>
            </>
          }
        />
        {/* Creo una ruta dinámica */}
        {/* Cuando la usuaria entre en una ruta que cumpla este patrón se renderizará el componente Product */}
        <Route path="/product/:productId" element={<Product />}></Route>
      </Routes>
    </div>
  );
};

export default App;
```

```jsx
// Fichero src/component/Product.js
import { useParams } from 'react-router-dom';

const Product = () => {
  // Con useParams meto en routeParams los parámetros de la ruta actual
  const { productId } = useParams();
  // La consola muestra un objeto del tipo { productId: "43823" }

  return (
    <div>
      <h2>Detalle del móvil con id: {productId}</h2>
    </div>
  );
};

export default Product;
```

¿Cómo funciona este hook?

* Este hook solo puede ser usado en un componente que **se renderiza dentro de un `<Route>` dinámico**, es decir, en este caso en el componente `Product`:

  ```jsx
  <Route path="/product/:productId" element={<Product />} />
  ```
* Si se usa fuera de un `<Route>` dinámico, el hook `useParams` no puede saber qué patrón tiene que evaluar, no puede obtener los parámetros y por ello siempre retorna un objeto vacío.
* Dentro del componente `Product`:
  * Con esta línea importamos `useParams` para luego usarlo:

    ```js
    import { useParams } from 'react-router-dom';
    ```
  * Con la línea:

    ```jsx
    const { productId } = useParams();
    ```

    Obtenemos el parámetro en `productId` de la ruta y nos da un objeto del tipo:

    ```js
    {
      productId: 123;
    }
    ```
* Por cierto, como ya hemos dicho el nombre de `productId` lo elegimos nosotras. Si en `App` hubiéramos puesto `<Route path="/product/:pepino">` el objeto que nos da `useParams` es `{ pepino: "43823" }`.

### Los datos de las rutas siempre son strings

Ya sabemos que cuando leemos un dato del navegador, como por ejemplo:

* El contenido de una etiqueta con `document.querySelector('.js-item').innerHTML`.
* El contenido de un atributo con `document.querySelector('.js-item').id`.
* El valor de un input (aunque sea de tipo number) con `document.querySelector('.js-input').value` o `ev.target.value`.
* Cualquier otra cosa.

El dato que obtenemos siempre es un string.

Aquí pasa lo mismo. **Los datos que leemos desde la ruta del navegador siempre son de tipo string.**

### Rutas dinámicas múltiples

**Las rutas dinámicas pueden tener varios parámetros dinámicos.**

Pongamos el ejemplo de dos posibles rutas de estos materiales:

* <https://books.adalab.es/curso/javascript/leccion/intro/minileccion/constantes-y-variables>
* <https://books.adalab.es/curso/react/leccion/router/minileccion/rutas-dinamicas>

Viendo estas dos rutas podemos obtener fácilmente el patrón:

* `/curso/:courseSlug/leccion/:lessonSlug/minileccion/:minilessonSlug`

> **Nota:** si quieres saber por qué usamos la palabra slug mira la [documentación de JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/Slug).

#### Declarar múltiples parámetros en una ruta

Para declarar esta ruta dinámica en un componente con `Route` haríamos:

```jsx
<Route path='/curso/:courseSlug/leccion/:lessonSlug/minileccion/:minilessonSlug'  element={} />
```

#### Obtener múltiples parámetros con matchPath

Para obtener los datos con el hook `matchPath` haríamos:

```js
const { pathname } = useLocation();
const routeData = matchPath(
  '/curso/:courseSlug/leccion/:lessonSlug/minileccion/:minilessonSlug',
  pathname
);
```

Y esto metería en `routeData` un null o un objeto del tipo:

```js
{
  isExact: true,
  params: {
    courseSlug: "react",
    lessonSlug: "router",
    minilessonSlug: "rutas-dinamicas"
  },
  path: "/curso/:courseSlug/leccion/:lessonSlug/minileccion/:minilessonSlug",
  url: "/curso/react/leccion/router/minileccion/rutas-dinamicas"
}
```

#### Obtener múltiples parámetros con useParams

Para obtener los parámetros dentro del componente hija con `useParams` haríamos:

```js
const routeParams = useParams();
```

Y esto metería en `routeParams` el objeto:

```js
{
  courseSlug: "react",
  lessonSlug: "router",
  minilessonSlug: "rutas-dinamicas"
}
```

Por cierto, en la [documentación de React Router DOM hay más hooks interesantes](https://reactrouter.com/en/6.4.4). Te recomendamos que los estudies cuando acabes Adalab.

### Conclusiones

Para gestionar rutas dinámicas tenemos que expresar una ruta con un patrón. La parte variable del patrón la expresamos con dos puntos `:`.

Para obtener los parámetros de la ruta dinámica tenemos las opciones:

* [useLocation](https://reactrouter.com/en/main/hooks/use-location), para obtener la ruta actual del navegador y luego compararla con una ruta dada.
* [useParams](https://reactrouter.com/en/main/hooks/use-params), que nos da los parámetros actuales, pero solo se puede ejecutar en un componente hijo de un `<Route>` dinámico.

### Ejercicios

#### 1. La tienda de camisetas

Queremos hacer una tienda de camisetas *to guapas* de programación.

Para ello vamos a pintar un catálogo de camisetas y con un botón **Ver detalle del producto**. Cuando la usuaria pulse en este botón la enviaremos a una página de detalle del producto con un poco más de info sobre la camiseta.

![](https://github.com/Adalab/pw-materiales-del-curso/blob/master/modulo_3/3-8-router/assets/images/react_ejercicio_router_tienda_de_camisetas.gif)

El problema es que toda la información sobre las camisetas la vamos a recibir de una API, es decir, no sabemos cuántas camisetas hay que pintar, ni sus precios ni nada. Por ello estamos obligadas a trabajar con rutas dinámicas.

Sigue los siguientes pasos para conseguirlo:

1. Crea un ejercicio vacío a partir de tu React Starter Kit.
2. Pide los datos de las camisetas a la API en un servicio:
   1. Usa un `fetch` para pedir los datos a esta [API](https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/tshirt-eshop-v1/products.json).
   2. Cuando el servidor responda, limpia los datos antes de retornarlos. No te interesa retornar un objeto con la propiedad `items`, te interesa retornar directamente el array de las camisetas.
3. Guarda las camisetas en el estado:
   1. En `App`, en la respuesta de la llamada a la API guarda los datos en un estado de React llamado `products`.
4. Pinta los productos:
   1. Crea un componente llamado `<Catalog />` y pásale por props el array `products`.
   2. Dentro de `<Catalog />`, recorre el array `products` con un `map` pintando la imagen, nombre y precio de cada camiseta.
   3. Añade un `<Link>` con el texto **Ver detalle del producto** y con la URL `/product-detail/` más el id del producto.
5. Con `<Routes>` y `<Route>` gestiona las rutas dinámicas para que:
   * En la home aparezca el catálogo de productos.
   * En la ruta `/product-detail/...` aparezca el detalle de un producto. Para ello crea el componente `<ProductDetail />`.
6. Para mostrar el detalle del producto:
   1. Obtén el id del producto desde la ruta usando el hook [`useLocation`](https://reactrouter.com/en/main/hooks/use-location).
   2. Busca en el array `products` el producto a través de su id.
   3. Pasa por props el objeto del producto a `<ProductDetail />`.
   4. En `<ProductDetail />` usa los datos que estás recibiendo por props para pintar el detalle del producto.
   5. Añade un `<Link>` con el texto **Volver al listado de productos** debajo del detalle del producto.

> **Nota:** entre los vídeos de Twitter encontrarás uno llamado **Router: Rutas dinámicas** en el que explicamos todos los pasos para hacer este ejercicio. Si lo consigues es que ya dominas React.

> **Nota:** para hacer este ejercicio necesitamos trabajar con fetchs, arrays, estado, eventos... En resumen, este podría ser un ejercicio global de todo el módulo.


# 3.7.5 Loader

### Loader

En esta micro lección os vamos a explicar cómo añadir un loader a vuestras llamadas a la API.

> **Nota:** lee esta lección cuando no tengas nada mejor que hacer.

### Pintando un loader para los fetch

Os pedimos que cuando programéis un `fetch` en React metáis un loader en la página porque queda muy bonito, viste la página y ayuda a la usuaria a saber que se están pidiendo datos al servidor. Nos gustan las usuarias felices.

Os vamos a explicar cómo hacerlo, pero es tan fácil que no os vamos a dar el código.

En un componente de React:

1. Creamos una constante en el estado que se llame por ejemplo `isLoading` y cuyo valor inicial sea `false`.
2. Justo antes de llamar al `fetch` cambiamos el valor de `isLoading` a `true`.
3. Justo después de que el `fetch` responda cambiamos el valor de `isLoading` a `false`.
4. En el retorno del componente mostramos u ocultamos un texto, una etiqueta, una clase CSS o lo que queramos en función del valor de `isLoading`.
5. Ya estaría.

Para trabajar más cómodamente te recomendamos cambiar la configuración de DevTools para forzar que los `fetch` tarden mucho y así poder probar con calma tu código. Investiga estas dos opciones:

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-a1e3226efd06c9b6e3eda72241a8f9f588384b1a%2Freact_devtools_network_speed.png?alt=media)

### Ejercicios

#### 1. Ni una API sin su loader

Queremos añadir un loader a uno de nuestros `fetch`. Para ello elige cualquier ejercicio de este módulo en el que hayas hecho un `fetch`. Te recomendamos el que está en la minilección **Fetch y local storage > Fetch > Buscador de series**, ya que en este ejercicio hacemos una llamada a la API cada vez que la usuaria escribe una letra en un input y por ello es más fácil de probar.

Sigue los siguientes pasos para completarlo:

1. Busca en Google "css loading" e investiga un poco para encontrar un loading que te guste.
   * [Esta](https://www.w3schools.com/howto/howto_css_loader.asp) o [esta](https://loading.io/css/) pueden ser opciones interesantes.
2. Crea un componente `Loader` y añade el HTML y CSS que hayas elegido en el paso anterior.
3. Sigue los pasos de esta lección para mostrar y ocultar tu componente `Loader` cuando la web esté llamando a la API. Ya sabes decide qué valor inicial debe tener la constante de esta `isLoading` y en qué momento ponerla en `true` y en `false`.
