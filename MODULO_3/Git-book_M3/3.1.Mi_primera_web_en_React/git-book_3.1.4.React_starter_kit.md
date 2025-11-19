# 3.1.4 React starter kit

### Nuestro propio React Starter Kit

Durante el curso y durante tu vida como programadora de React vas a crear muchos proyectos con `create-vite my-react-app --template react`. Esta herramienta crea una serie de carpetas y ficheros, muchos de ellos están todos mezclados en la carpeta `src/`, y eso no es muy limpio.

**Nosotras somos programadoras limpias y ordenadas.** Por ello vamos a crear nuestro proyecto base, a partir del cual crearemos el resto de proyectos.

> **Nota:** esta mini lección es importante, al menos hasta que hagas funcionar tu react-starter-kit.

### Cómo crear nuestro propio react-starter-kit

Ahora que ya sabemos que al crear un proyecto de React vamos a **crear un proyecto, limpiarlo, ordenarlo y usarlo como plantilla** para futuros proyectos.

Lo primero que debes hacer es abrir una terminal en la carpeta donde tengas tus ejercicios de este módulo, por ejemplo `adalab/mis-ejercicios/modulo-de-react/`, y ejecuta `create-vite my-react-app --template react`.

Vamos a ordenarlo de la siguiente manera, crea dentro de `src` nuevas carpetas para `componets`, `images` y `styles`, quedando una estructura como sigue:

![Estructura de un proyecto en React](https://github.com/Adalab/pw-materiales-del-curso/blob/master/modulo_3/3-1-mi-primera-web-react/assets/images/react_structure_project_vite.png)

Las carpetas y ficheros que queremos tener al final son:

* `index.html`
* `src/components/App.jsx`: que debe tener el siguiente código:

  ```jsx
  // Fichero src/components/App.jsx
  import '../styles/App.css';

  function App() {
    return (
      <div>
        <h1>Hola mundo</h1>
      </div>
    );
  }

  export default App;
  ```
* `src/images/`
* `src/styles/App.css`: que debe contener los estilos que tú quieras.
* `src/main.jsx`: que debe tener el siguiente código:

  ```jsx
  // Fichero src/main.jsx
    import React from 'react'
    import ReactDOM from 'react-dom/client'
    import App from './components/App.jsx'
    import './index.css'

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )

  ```
* `.gitignore`
* `README.md`
* `package.json`
* `vite.config.js`

Esta estructura de proyectos es la que nos gusta enseñaros en Adalab. Es posible que cuando trabajes en otra empresa tengan otra estructura diferente. Lo importante es que sea una estructura cómoda para trabajar. Nos gusta pensar que una buena estructura es aquella que cuando llega una programadora nueva al proyecto no hace falta explicársela, porque se explica sola.

Guarda este `react-starter-kit` como oro en paño, lo usarás mucho. En próximas lecciones, cuando aprendamos más cosas, las añadiremos a este proyecto base.

### Reutilizando nuestro React Starter Kit

Ahora vamos a hacer una prueba para crear un nuevo proyecto a partir del `react-starter-kit`. Te vamos a enseñar la forma normal, que puede ser un poco lenta. Más tarde te enseñaremos la forma rápida.

1. Desde el explorador de carpetas de tu sistema operativo, crea una nueva carpeta vacía en tu carpeta de ejercicios, por ejemplo `adalab/mis-ejercicios/modulo-de-react/leccion-1-ejercicio-1`.
2. Entra en tu React Starter Kit, por ejemplo `adalab/mis-ejercicios/modulo-de-react/react-starter-kit`:
   1. Copia todos los ficheros y carpetas **excepto la carpeta `node_modules/`**.
3. Vuelve a la carpeta `adalab/mis-ejercicios/modulo-de-react/leccion-1-ejercicio-1`:
   1. Pega los ficheros que has copiado. Esto debería tardar apenas unos segundos.
4. Abre VS Code en la nueva carpeta, por ejemplo `adalab/mis-ejercicios/modulo-de-react/leccion-1-ejercicio-1`:
   1. Ejecuta en la terminal `npm install` para instalar las dependencias. Esto tardar un ratito.
   2. Ejecuta `npm run dev` y ponte a programar.

Si eres una usuaria de Linux con Ubuntu o te has gastado los dineros en un Mac, y si encima tienes un ordenador potente este proceso tardará poco tiempo, como mucho uno o dos minutos.

### Reutilizando rápidamente nuestro React Starter Kit

Si por el contrario tienes un Windows, aunque sea un pepinazo de ordenador, o un Ubuntu o Mac de la época en la que Ada Lovelace estaba en la guardería, ejecutar `npm install` tardará varios minutos. [Demasiados para mi gusto](https://twitter.com/migueldelmazo/status/1362834270520299520). Vamos a aprender un truco para ahorrar tiempo:

1. Desde el explorador de ficheros de tu sistema operativo, crea una nueva carpeta vacía en tu carpeta de ejercicios, por ejemplo `adalab/mis-ejercicios/modulo-de-react/leccion-1-ejercicio-1`.
2. Entra en tu React Starter Kit, por ejemplo `adalab/mis-ejercicios/modulo-de-react/react-starter-kit`:
   1. **Copia** todos los ficheros y carpetas **excepto la carpeta `node_modules/`**.
3. Vuelve a la carpeta `adalab/mis-ejercicios/modulo-de-react/leccion-1-ejercicio-1`:
   1. Pega los ficheros que has copiado. Esto debería tardar apenas unos segundos.
4. Vuelve a tu React Starter Kit:
   1. **Corta la carpeta `node_modules/`**.
5. Vuelve a la carpeta `adalab/mis-ejercicios/modulo-de-react/leccion-1-ejercicio-1`:
   1. Pega la carpeta `node_modules/`. Esto debería tardar apenas unos segundos.
6. Abre VS Code en la nueva carpeta, por ejemplo `adalab/mis-ejercicios/modulo-de-react/leccion-1-ejercicio-1`:
   1. Ejecuta en la terminal `npm run dev` y ponte a programar.

Como habrás visto, el problema era que `node_modules/` pesa mucho y tarda mucho en copiarse. Lo que hemos hecho ahora es copiar los ficheros pequeños que tardan poco y mover de una carpeta a otra la carpeta que pesa mucho. Lo importante para React es que **el proyecto contenga los ficheros de programación y una carpeta con las dependencias** instaladas en `node_modules/`. A React le da igual si esta carpeta la hemos creado haciendo `npm install` o copiándola desde otro proyecto.

> **Nota:** copiar la carpeta `node_modules/` de un proyecto a otro lo podemos hacer siempre que las dependencias de ambos proyectos sean las mismas. Por ejemplo, esto no nos funcionará si copiamos la carpeta `node_modules/` desde un proyecto de React a un proyecto con el Adalab Starter Kit.

Si al finalizar este proceso ejecutas `npm run dev` para arrancar el proyecto y falla, cosa que pasa muy pocas veces, siempre puedes hacerlo de forma manual:

* Borra a mano la carpeta `node_modules/`.
* Ejecuta `npm install` en la raíz del proyecto.
* Ejecuta `npm run dev` y seguro que funcionará.

### Haz varias copias de tu react-starter-kit

Ya sabes que si tienes Windows o Ubuntu o Mac antiguos, ejecutar `npm install` tarda mucho. Te recomendamos que todos los días, antes de irte a cenar, crees varias copias de tu React Starter Kit para que cuando hagas ejercicios al día siguiente ya las tengas listas. Para ello sigue los siguientes pasos:

1. Desde VS Code entra en tu starter kit, por ejemplo `adalab/mis-ejercicios/modulo-de-react/react-starter-kit`.
2. Si este proyecto no tiene la carpeta `node_modules/`, ejecuta `npm install` para instalar las dependencias. Si sí la tiene no hagas nada.
3. Desde el explorador de ficheros de tu sistema operativo entra en la carpeta de tus ejercicios y duplica varias veces la carpeta `react-starter-kit`.
   1. Esto creará las carpetas `Copia 1 de react-starter-kit`, `Copia 2 de react-starter-kit`.
   2. Tardará mucho pero lo hará mientras tú estés cenando croquetas.
4. A la mañana siguiente utiliza estas carpetas creadas para tus ejercicios.

> **Nota:** esta lección ha sido creada desde un Windows.

### Muerte por falta de espacio

Gracias por haber leído hasta aquí; prometemos que esta es la última chapa que damos con el tema de `node_modules/`.

QUE SÍÍÍÍÍ, que `node_modules/` ocupa mucho espacio, lo sabemos.

Es más que probable que durante el curso tu ordenador se quede sin espacio, porque habrás creado muchos ejercicios de React con sus correspondientes `node_modules/`. Te recomendamos que de vez en cuando busques en tus ejercicios antiguos de React y borres sus carpetas `node_modules/` para liberar espacio. Si en algún momento necesitas volver a arrancarlos solo tendrás que ejecutar `npm install` en ellos.

### Ejercicios

#### 1. Crea tu propio react-starter-kit

Durante este módulo vamos a crear muchos proyectos en React, por lo que es importante que tengas tu propio react-starter-kit. Si todavía no lo tienes,créalo.
