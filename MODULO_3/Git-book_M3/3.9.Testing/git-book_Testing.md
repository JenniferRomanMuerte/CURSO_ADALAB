# 3.9.1 Testing manual

### Testing manual

En esta lección vamos a tener un primer contacto con el testing automático de nuestros proyectos de front end, pero antes vamos a hablar de lo que es el testing manual.

> **Nota:** esta lección es importante pero no urgente.

**Testing es ni más ni menos que probar que una aplicación funciona como se espera**, es decir, **que cumple con los requisitos con los que se definió**.

### ¿Qué es el testing manual?

¿Hasta ahora hemos estado haciendo testing? Pues claro, cada vez que programamos una funcionalidad en una web la testeamos manualmente, es decir, abrimos el navegador y la probamos.

Todas estas pruebas las hacemos de forma manual, es decir, miramos directamente en el navegador si sucede el comportamiento que esperamos. Si no, pues hay un error y toca debuggearlo.

En los trabajos, antes de completar una funcionalidad y marcarla como finalizada, debemos probar manualmente para asegurarnos de que funciona como nos han pedido. Todo el mundo puede cometer errores, pero no es profesional entregar una funcionalidad sin haberla probado concienzudamente.

En algunas empresas también existe el puesto del tester manual, es la compañera que prueba que nuestro código está funcionando correctamente. Su objetivo es someter nuestro trabajo a cierto estrés, por ejemplo probando la página en un móvil antiguo, intentando encontrar errores… Y raro es el día que la tester no encuentra algún errorcillo y nos tira para atrás la tarea hasta que lo solucionamos.

Hay gente, generalmente [gañanes intelectuales](https://www.youtube.com/watch?v=0s133HqAOzw), que cree que las compañeras del equipo de testing (también llamado QA, quality assurance) tienen el objetivo de demostrar lo malas que somos programando. No es así, su trabajo es ayudarnos a que nuestro código no tenga errores que perjudiquen a las usuarias y conseguir que seamos mejores programadoras.

**¡¡¡Amiga Adalaber, hazte amiga de tu tester!!!**

Por cierto, que una tester vaya a comprobar tu código no quiere decir que tú no lo tengas que hacer.


# 3.9.2 Testing automático

### Testing automático

¿Existen otras formas de hacer testing? Sí, por ejemplo, los tests de usuario se hacen para que una potencial usuaria de nuestra web pruebe nuestro producto y nos dé feedback. Pero aquí no hemos venido a hablar de estos tests de usuario, sino de los tests automáticos.

> **Nota:** esta lección es importante pero no urgente.

### ¿Qué es el testing automático?

**El testing automático consiste en ejecutar tareas que prueban nuestras aplicaciones comprobando si tienen el comportamiento esperado.**

¿Y cómo saben estas tareas que la aplicación está funcionando como se espera? Pues porque estas tareas también las vamos a programar nosotras.

Antes de continuar debemos saber diferenciar entre el código de producción y el código de testing.

#### Código de producción vs. código de testing

**El código de producción es** el código "normal" de nuestra aplicación, es decir, el código que programamos para que la aplicación cumpla con los requisitos esperados, **el código que subimos a los servidores de producción** como GitHub Pages, el código que los navegadores de las usuarias se descargan para mostrarles la página, etc.

En cambio, **el código de testing es el código** que nosotras programamos **con el objetivo de comprobar que el código de producción funciona bien**.

El código de testing también lo subimos al repo del proyecto, pero no lo subimos a los servidores de producción, porque es algo que solo nos interesa a las programadoras de la empresa.

Un ejemplo de código de testing es un fichero de JavaScript que tenga las siguientes órdenes:

1. Abre mi web de React en un navegador.
2. Comprueba que mi web tiene una etiqueta `<header>`.
   * Si lo tiene pasa al siguiente paso.
   * Si no la tiene muéstrame un error y para el test.
3. Comprueba que dentro de la etiqueta `<header>` hay un `<h1>` que contiene el texto "Bienvenida a mi web" y que tiene la clase `header__title`.
   * Si lo tiene pasa al siguiente paso.
   * Si no la tiene muéstrame un error y para el test.
4. ...

### Beneficios del testing automático

Desarrollar tests automáticos para un proyecto de software sirve principalmente para garantizar su calidad. A simple vista puede parecer poco, pero es demostrar que nuestro producto funciona como se espera y que no va a tener fallos (o al menos una serie determinada de fallos).

Siendo la calidad el principal objetivo de desarrollar tests automáticos, existen otras consecuencias positivas.

**Una de ellas es mejorar la documentación del proyecto.** Es decir, si entra una compañera nueva al proyecto puede leer los tests y aprender que es importante que en la cabecera haya `<h1>` con la clase `header__title` para que la web se vea bien.

**Otra ventaja** de tener tests automáticos relacionada con la calidad **es evitar los errores de regresión**. A menudo pasa que en un proyecto hacemos un cambio que creemos que solo afecta a un lugar concreto de la página y resulta que también está afectando a otras partes. Si al terminar ese cambio ejecutamos los tests y estos nos dicen que han fallado porque hemos eliminado la clase `header__title`, sabremos que la hemos liado parda antes de dar por terminada la tarea. Los tests nos avisan cuando nos equivocamos.

Otra ventaja más es que, como los tests son código, los podemos ejecutar en nuestro ordenador pero también en otros sitios, por ejemplo en los servidores de GitHub. Un repo de GitHub se puede configurar fácilmente para que no permita mergear una pull request si los tests están fallando. Lo que hace GitHub es ejecutar los tests en sus servidores internos antes de mergear la rama y en función del resultado permite el merge o no.

### ¿Qué cosas nos interesa testear?

No solemos testear el 100% de nuestro código porque eso nos llevaría muchísimo trabajo y porque además cada vez que cambiamos nuestro código tenemos que cambiar los tests que vigilan esa parte del código.

Se debe testear la parte más importante del código, que según el proyecto podemos considerar que es el 25, el 50 o el 75%. Y, ¿cuál es la parte más importante del código? pues en cada proyecto cambia, pero generalizando un poco podemos decir que es la parte con la que la empresa gana dinero.

Por ejemplo, en la página de Amazon ¿qué código crees que es más importante, la parte que permite a las usuarias comprar un producto o la parte en la que las compradoras pueden poner comentarios sobre un producto que ya han comprado?

### Tipos de tests automáticos

Existen muchas clasificaciones de testing, pero aquí hemos elegido una de las más aceptadas que clasifica los tests por su nivel de granularidad en:

* **Tests unitarios**: prueban un trozo o pieza de código que solo hace una cosa (unidad), por ejemplo, una función.
* **Tests de regresión**: son un tipo de test que comprueba que las nuevas funcionalidades desarrolladas no rompen las funcionalidades anteriores.
* **Tests de integración**: prueban que varias piezas de código funcionan bien juntas, que se integran bien las unas con las otras. Por ejemplo, una función que llama a otras funciones o un componente que le pasa props a otro componente. Podemos juntar tantas piezas como queramos hasta llegar a la aplicación completa.
* **Tests de aceptación o end-to-end**: también llamados e2e, son un tipo especial de tests de integración que están relacionados con los criterios de aceptación definidos por el cliente, es decir, que prueban algo que tiene valor a nivel de negocio y suele ser una funcionalidad completa. Por ejemplo, que un usuario puede crear una tarea nueva en nuestra aplicación de gestión de tareas.

Aunque hay estos cuatro tipos en programación casi siempre realizamos tests unitarios y por ello son los que vamos a aprender hoy.


# 3.9.2 Testing automático

### Testing automático

¿Existen otras formas de hacer testing? Sí, por ejemplo, los tests de usuario se hacen para que una potencial usuaria de nuestra web pruebe nuestro producto y nos dé feedback. Pero aquí no hemos venido a hablar de estos tests de usuario, sino de los tests automáticos.

> **Nota:** esta lección es importante pero no urgente.

### ¿Qué es el testing automático?

**El testing automático consiste en ejecutar tareas que prueban nuestras aplicaciones comprobando si tienen el comportamiento esperado.**

¿Y cómo saben estas tareas que la aplicación está funcionando como se espera? Pues porque estas tareas también las vamos a programar nosotras.

Antes de continuar debemos saber diferenciar entre el código de producción y el código de testing.

#### Código de producción vs. código de testing

**El código de producción es** el código "normal" de nuestra aplicación, es decir, el código que programamos para que la aplicación cumpla con los requisitos esperados, **el código que subimos a los servidores de producción** como GitHub Pages, el código que los navegadores de las usuarias se descargan para mostrarles la página, etc.

En cambio, **el código de testing es el código** que nosotras programamos **con el objetivo de comprobar que el código de producción funciona bien**.

El código de testing también lo subimos al repo del proyecto, pero no lo subimos a los servidores de producción, porque es algo que solo nos interesa a las programadoras de la empresa.

Un ejemplo de código de testing es un fichero de JavaScript que tenga las siguientes órdenes:

1. Abre mi web de React en un navegador.
2. Comprueba que mi web tiene una etiqueta `<header>`.
   * Si lo tiene pasa al siguiente paso.
   * Si no la tiene muéstrame un error y para el test.
3. Comprueba que dentro de la etiqueta `<header>` hay un `<h1>` que contiene el texto "Bienvenida a mi web" y que tiene la clase `header__title`.
   * Si lo tiene pasa al siguiente paso.
   * Si no la tiene muéstrame un error y para el test.
4. ...

### Beneficios del testing automático

Desarrollar tests automáticos para un proyecto de software sirve principalmente para garantizar su calidad. A simple vista puede parecer poco, pero es demostrar que nuestro producto funciona como se espera y que no va a tener fallos (o al menos una serie determinada de fallos).

Siendo la calidad el principal objetivo de desarrollar tests automáticos, existen otras consecuencias positivas.

**Una de ellas es mejorar la documentación del proyecto.** Es decir, si entra una compañera nueva al proyecto puede leer los tests y aprender que es importante que en la cabecera haya `<h1>` con la clase `header__title` para que la web se vea bien.

**Otra ventaja** de tener tests automáticos relacionada con la calidad **es evitar los errores de regresión**. A menudo pasa que en un proyecto hacemos un cambio que creemos que solo afecta a un lugar concreto de la página y resulta que también está afectando a otras partes. Si al terminar ese cambio ejecutamos los tests y estos nos dicen que han fallado porque hemos eliminado la clase `header__title`, sabremos que la hemos liado parda antes de dar por terminada la tarea. Los tests nos avisan cuando nos equivocamos.

Otra ventaja más es que, como los tests son código, los podemos ejecutar en nuestro ordenador pero también en otros sitios, por ejemplo en los servidores de GitHub. Un repo de GitHub se puede configurar fácilmente para que no permita mergear una pull request si los tests están fallando. Lo que hace GitHub es ejecutar los tests en sus servidores internos antes de mergear la rama y en función del resultado permite el merge o no.

### ¿Qué cosas nos interesa testear?

No solemos testear el 100% de nuestro código porque eso nos llevaría muchísimo trabajo y porque además cada vez que cambiamos nuestro código tenemos que cambiar los tests que vigilan esa parte del código.

Se debe testear la parte más importante del código, que según el proyecto podemos considerar que es el 25, el 50 o el 75%. Y, ¿cuál es la parte más importante del código? pues en cada proyecto cambia, pero generalizando un poco podemos decir que es la parte con la que la empresa gana dinero.

Por ejemplo, en la página de Amazon ¿qué código crees que es más importante, la parte que permite a las usuarias comprar un producto o la parte en la que las compradoras pueden poner comentarios sobre un producto que ya han comprado?

### Tipos de tests automáticos

Existen muchas clasificaciones de testing, pero aquí hemos elegido una de las más aceptadas que clasifica los tests por su nivel de granularidad en:

* **Tests unitarios**: prueban un trozo o pieza de código que solo hace una cosa (unidad), por ejemplo, una función.
* **Tests de regresión**: son un tipo de test que comprueba que las nuevas funcionalidades desarrolladas no rompen las funcionalidades anteriores.
* **Tests de integración**: prueban que varias piezas de código funcionan bien juntas, que se integran bien las unas con las otras. Por ejemplo, una función que llama a otras funciones o un componente que le pasa props a otro componente. Podemos juntar tantas piezas como queramos hasta llegar a la aplicación completa.
* **Tests de aceptación o end-to-end**: también llamados e2e, son un tipo especial de tests de integración que están relacionados con los criterios de aceptación definidos por el cliente, es decir, que prueban algo que tiene valor a nivel de negocio y suele ser una funcionalidad completa. Por ejemplo, que un usuario puede crear una tarea nueva en nuestra aplicación de gestión de tareas.

Aunque hay estos cuatro tipos en programación casi siempre realizamos tests unitarios y por ello son los que vamos a aprender hoy.


# 3.9.4 Testing en JavaScript y React

### Testing en JavaScript y React

Ahora que ya tenemos unos conocimientos básicos de testing, vamos a ver qué herramientas tenemos para poder hacer testing de nuestra aplicación en JavaScript. Hay montones de herramientas disponibles, pero vamos a centrarnos en dos que son las que más se usan en React: [Jest](https://jestjs.io/es-ES/) y [Testing library](https://testing-library.com/).

> **Nota:** esta lección es importante.

### Arrancar un proyecto con testing

[Jest](https://jestjs.io/es-ES/) y [Testing library](https://testing-library.com/) son dos librerías de testing para proyectos de JavaScript.

1. Para ello vamos a crear un proyecto de React desde cero ejecuta el comando

```bash
# Crea un nuevo proyecto Vite con la plantilla de React
create-vite my-react-app --template react
```

Esto creará una nueva carpeta llamada my-react-app con una estructura de proyecto inicial de React y Vite.

2. Instalar Jest y configurar las pruebas: Dirígete a la carpeta de tu aplicación recién creada:

```bash
cd my-react-app
```

Luego, instala Jest y algunas dependencias relacionadas:

```bash
npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
npm install --save-dev @testing-library/react
npm install jest-environment-jsdom --save-dev
```

3. Configurar Jest: babel preset lo usamos para transformar nuestro código dentro del entorno de prueba para ello crea un archivo de configuración de Babel llamado babel.config.cjs en la raíz de tu proyecto:

```jsx
module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
```

4. Configuramos nuestro script en el fichero package.json para ejecutar los test, se debe ser como lo siguiente:

```json
 "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test": "jest"
  },
```

Adicionalmente se añade la configuración de `jest`, con esto nos aseguramos de que vite-jest esté configurado como el preset y que está utilizando el entorno de prueba jsdom para simular un navegador en el entorno de pruebas.

```json
 "scripts": {
   ...
  },
 "jest": {
    "testEnvironment": "jsdom"
  },
```

5. Escribir pruebas: Crea una carpeta para tus pruebas, por ejemplo, tests, en carpeta src de tu proyecto \`src/tests/App.test.js\`\`. Dentro de esta carpeta, puedes crear archivos de prueba que sigan la convención de nombres \_.test.js o \_.spec.js. Aquí tienes un ejemplo de una prueba simple para un componente React:

```jsx
// tests/App.test.js
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders learn react link", () => {
  render(<App />);
  const elements = screen.getAllByText(/learn react/i);
  expect(elements.length).toBe(1);
});
```

6. Ejecutar pruebas:

```jsx
npm test
```

Jest ejecutará todas las pruebas encontradas en la carpeta de pruebas y mostrará los resultados en la consola.

7. Automatizar pruebas: Para ejecutar pruebas automáticamente cuando se realizan cambios en los archivos, puedes agregar un script en el archivo package.json:

```json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch"
}

```

Ahora puedes ejecutar pruebas en modo de observación con el siguiente comando:

```bash
npm run test:watch

```

Esto permitirá que Jest observe los cambios en los archivos y vuelva a ejecutar automáticamente las pruebas cuando sea necesario.

¡Eso es todo! Ahora tienes una aplicación de React creada con Vite y configurada para realizar pruebas con Jest. Puedes continuar escribiendo pruebas para tus componentes y asegurarte de que tu aplicación funcione correctamente.

Si todo ha ido bien en la terminal te mostrará algo como:

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-62480cea40afb18b5697ee2a2109c52bd7f74038%2Freact_testing_success.png?alt=media)

Y si algo ha fallado verás algo como:

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-99b4cc687a20b2d4c10a0e9cf1fd5aecd016cca4%2Freact_testing_error.png?alt=media)

### ¿Cómo funcionan los tests?

En el apartado anterior hemos añadido el fichero `src/tests/App.test.js`, que es un test. Cuando ejecutamos los tests con `npm test` lo que está haciendo es **buscar entre todos los ficheros del proyecto los que terminan en `test.js`**. Si encuentra algún fichero con esta extensión lo considera un test y lo ejecuta.

Analicemos en detalle el contenido del fichero `src/App.test.js`:

* Con la primera línea `import { render, screen } from '@testing-library/react';` estamos importando las funciones `render` y `screen` de la librería de testing para React para usarlas más abajo.
* Con la segunda línea `import App from '../components/App';` estamos importando el componente que queremos testear.
* Con la función `test('renders learn react link', () => { ... });` estamos declarando un test. Si queremos crear un segundo test para testear `App.js` podemos añadir otra línea similar como `test('Este es otro test', () => { ... });`.
* El texto \*\*renders learn react link \*\* es una descripción de lo que hace el test. Es útil solo para humanos (y no para ordenadores), ya que si el test falla la terminal nos dirá que ha fallado el test que tiene esta descripción.
* Con la función `render(<App />);` le estamos diciendo que nos renderice el componente `App`. Como ves, dentro de la función `render` podemos poner código JSX.
* Con la línea `const elements = screen.getAllByText(/learn react/i);` estamos buscando dentro `App` todos les textos que contienen "learn react". En la constante `elements` se guarda una lista de elementos con el texto dado, es decir, `learn react`.
* Con la línea `expect(elements.length).toBe(1);;` indicamos que esperamos que la longitud del array`elements` sea 1.

Por cierto **en los ficheros de tests podemos poner los `console.log()` que queramos** para saber por qué un test está fallando.

### Tests en funciones de JavaScript vs. tests en componentes de React

Testear funciones de JavaScript es muy sencillo ya que lo único que debemos hacer es:

1. Importar el fichero que contiene la función.
2. Ejecutar la función.
3. Comprobar si la función retorna lo que queremos.

En cambio, testear componentes de React es bastante más complejo, ya que lo que debe hacer la librería de testing es renderizar un componente como si se estuviera ejecutando en un navegador de verdad. Al renderizar el componente de React implícitamente se están renderizando sus hijos, aplicando el Sass que use el componente, ejecutando el código JavaScript del fichero, haciendo llamadas a la API, guardando datos en el local storage... Vamos, un jaleo.

Y para colmo, **a veces queremos testear lo que renderiza el componente después de que la usuaria realice algún evento**. El problema es que no hay ninguna usuaria realizando eventos. La solución pasa por simular eventos desde el test. A veces nos toca indicar que se lance un clic sobre un botón o que se escriba un texto en un input, para después comprobar cómo reacciona el componente.

Con esto ya tienes la base para testear aplicaciones de JavaScript y de React. Ahora te faltan dos cosas: adquirir práctica testeando y leer la documentación de Jest.

Para testear componentes de React es importante que leas las documentaciones, aunque sea por encima, de Jest y Testing library. Por ejemplo:

* [Documentación de Testing library para buscar etiquetas en el componente renderizado.](https://testing-library.com/docs/queries/about)
* [Documentación de Testing library para lanzar eventos en el componente renderizado.](https://testing-library.com/docs/dom-testing-library/api-events)
* [Documentación de Jest para los expect](https://jestjs.io/es-ES/docs/expect). Aquí tenemos un montón de expect, como por ejemplo:
  * [.toBe()](https://jestjs.io/es-ES/docs/expect#tobevalue)
  * [.toBeGreaterThan()](https://jestjs.io/es-ES/docs/expect#tobegreaterthannumber--bigint)
  * [.toBeTruthy()](https://jestjs.io/es-ES/docs/expect#tobetruthy)
  * Y muchos más

### Ejercicios

#### 1. Testeando los atributos HTML

Hemos programado una aplicación con estos dos componentes:

```jsx
// Fichero src/components/App.jsx

import MenuItem from "./MenuItem";

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <MenuItem text="Blog" href="https://adalab.es/blog" openInNewTab />
            <MenuItem text="Contacto" href="https://adalab.es/contacto" />
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default App;
```

```jsx
// Fichero src/components/MenuItem.js

const MenuItem = (props) => {
  return (
    <li>
      <a
        href={props.href}
        title={`Ir a: ${props.text}`}
        target={props.openInNewTab ? "_blank" : ""}
        rel="noreferrer"
      >
        {props.text}
      </a>
    </li>
  );
};

export default MenuItem;
```

Y queremos testear si el atributo `target` es correcto en los dos links. Empezamos creando un test para testear el componente cuando **recibe la prop `openInNewTab` a `true`**. Para ello:

1. Crea un proyecto con estos dos componentes.
2. Arranca los tests con `npm test`.
3. Crea el fichero `src/tests/MenuItem.tests.js` y en él:
   1. Importa las funciones necesarias con `import { render, screen } from '@testing-library/react';`.
   2. Importa el componente `MenuItem`.
   3. Crea la función `test` con una buena descripción que indique que queremos comprobar que el valor de `target` es `_blank` cuando el componente recibe la prop `openInNewTab` a `true`.
   4. En la parte de preparación o arranque usa la función `render` para renderizar el código `<MenuItem text="Blog" href="https://adalab.es/blog" openInNewTab />`.
   5. En la parte de actuación o act busca la etiqueta que tenga el texto "Blog".
      * Aquí te recomendamos consolear el retorno para saber qué estás haciendo. Si todo ha ido bien verás en consola la info relativa al link que ha sido renderizado `<a href="...">...</a>`.
   6. En la parte de aserción o assert debes:
      1. Obtener el valor del atributo `target` del link. Consolea este valor y si todo ha ido bien debería ser `_blank`.
      2. Utiliza el matcher [.toBe()](https://jestjs.io/es-ES/docs/expect#tobevalue) para comprobar que el valor del `target` es `_blank`.
4. Para saber que lo has hecho todo bien el test debería estar en verde.

A continuación queremos probar que el componente `MenuLink` renderiza un link con `target=""` cuando no recibe la prop `openInNewTab`. Vamos a seguir trabajando en el fichero `src/tests/MenuItem.tests.js`:

1. Crea otra función `test` debajo de la anterior con una buena descripción.
2. En la parte de preparación renderizar el componente `<MenuItem text="Contacto" href="https://adalab.es/contacto" />`.
3. En la parte de actuación busca la etiqueta HTML que tenga el texto "Contacto".
4. En la parte de aserción obtén el valor del atributo `target` y comprueba con un `expect` y el matcher [.toBe()](https://jestjs.io/es-ES/docs/expect#tobevalue) que es un string vacío. También puedes utilizar el matcher [.toBeFalsy()](https://jestjs.io/es-ES/docs/expect#tobefalsy).

#### 2. Testeando trigonometría con JavaScript

Ahora vamos a testear código JS puro y duro. Sobre el ejercicio anterior:

1. Crea el fichero en `src/services/area.js`:
   1. Este fichero debe tener una función llamada `getSquareArea()` que recibe un número que indica el lado del cuadrado y retorna su área.
   2. Este fichero debe tener otra función llamada `getSquareTriangle()` que recibe un número con la base y otro con la altura del triángulo y retorna su área.
   3. Este fichero debe exportar un objeto con las dos funciones dentro.
2. Crea el fichero en `src/tests/area.test.js`:
   1. En este fichero debes importar el fichero a testear con `import area from '../services/area';`.
   2. Crea un test que compruebe que si le pasamos a la función `getSquareArea()` un 3 esta nos devuelve un 9.
   3. Crea otro test que compruebe que si le pasamos a la función `getSquareTriangle()` un 3 y un 4 esta nos devuelve un 6.

Por cierto, como aquí estamos testeando un fichero de JavaScript y no un componente de React, no es necesario escribir `import { render, screen } from '@testing-library/react';`.

#### 3. Testeando los casos de error con JavaScript

Continuamos el ejercicio anterior. Ahora mismo se me pasa por la cabeza una pregunta: ¿Qué debe hacer la función `getSquareArea()` si no le pasamos ningún argumento? ¿Debería dar un katakroker? Debería devolver `undefined`, `null`, `false`...? ¿Debería devolver `0`?

Si da un katakroker mal asunto. Cuando terminemos de programar una aplicación, nunca debería haber katakrokers en la terminal.

Estas preguntas nos surgen cuando testeamos nuestro código, antes no habíamos pensado en ello. Es decir, **el testing nos ayuda a replantearnos nuestro código desde otro punto de vista**. Nos ayuda a pensar en todos los posibles errores que se pueden producir.

Pues ahora que te has hecho estas preguntas, haz lo siguiente:

1. Edita la función `getSquareArea()` para que si uno de los parámetros que recibe es `undefined` devuelva algo.
   1. Si recuerdas, cuando una función espera un parámetro y al ejecutarla no se le pasa ese parámetro, dentro de la función recibimos el parámetro como `undefined`.
   2. ¿Qué debería devolver la función en este caso? Un `undefined`, `null`, `false`, `NaN` o `0`, lo que tú quieras, lo que consideres que es el comportamiento adecuado de esta función.
2. Añade un test más a `src/area.test.js` para que también comprobemos que cuando ejecutemos la función `getSquareArea()` sin argumentos, esta devuelva lo que tú hayas decidido que devuelva.
3. En este test puedes usar matchers específicos. Mira todos los que hay [en está página](https://jestjs.io/es-ES/docs/expect) y usa el que más te guste.

Y así hasta el infinito, nos debemos preguntar: ¿qué pasa si la función recibe parámetros pero no son números sino arrays, objetos, textos, booleanos…?

Siempre que programemos una función debemos hacernos estas preguntas, entre otras:

* ¿Quiero hacer un código tan robusto que la función `getSquareArea()` pueda recibir cualquier cosa?
* ¿Voy a ejecutar yo esa función siempre? ¿O la va a ejecutar alguien que no la ha programado y puede ejecutarla mal?
* ¿Desde donde se ejecuta la función hay posibilidad de pasar como argumentos algo que no sea un número?
* ¿La función va a ser ejecutada tras un evento de la usuaria y esta no tiene ni idea de si en el campo de texto tiene que poner un número u otra cosa?
* ¿Tendría que hacer estas comprobaciones dentro de mi función o en el manejador del evento que es desde donde ejecutando mi función?

Según lo que respondas a esto deberemos hacer más o menos robusto nuestro código. Y según añadas más funcionalidad a tu código más código deberías testear.

#### 5. Kata padding

A los ejercicios de programación que se usan para practicar testing muchas veces se les llama katas. Esta kata consiste en crear una función `paddingLeft` que se encarga de meter caracteres de relleno en un cadena por el lado izquierdo hasta llegar a un tamaño deseado. Recibe 3 parámetros:

* La cadena inicial.
* Un tamaño final.
* Un valor del padding, por defecto es un espacio.

Si el tamaño final es menor o igual que la cadena inicial, se devuelve sin tocar la inicial.

Ejemplos:

* `paddingLeft('hola', 6, 'x')` devuelve `'xxhola'`
* `paddingLeft('hola', 6, 'a')` devuelve `'aahola'`
* `paddingLeft('ee', 4, 'aa')` devuelve `'aaee'`
* `paddingLeft('xxxx', 6, 'x')` devuelve `'xxxxxx'`
* `paddingLeft('', 6, 'x')` devuelve `'xxxxxx'`
* `paddingLeft('hola mi amigo', 6, 'x')` devuelve `'hola mi amigo'`
* `paddingLeft('xxxx', 0, 'x')` devuelve `'xxxx'`

En primer lugar, desarrolla el código de la función `paddingLeft` en el fichero `src/services/utils.js`. Cuando lo tengas, crea un fichero de tests y crea un test para cada uno de los ejemplos anteriores. Así estamos comprobando que la función hace lo que se ha pedido que haga.


# 3.9.5 Tdd

### TDD

Y para terminar con la lección de testing vamos a explicar en qué consiste el TDD o Test-Driven Development.

> **Nota:** esta lección es importante pero no urgente.

[**TDD**](https://es.wikipedia.org/wiki/Desarrollo_guiado_por_pruebas) es una metodología de programación dentro de una metodología de trabajo denominada [**eXtreme Programming o XP**](https://es.wikipedia.org/wiki/Programaci%C3%B3n_extrema). Define una serie de técnicas para mejorar los procesos de desarrollo de productos digitales, dentro de un marco de trabajo ágil. Algunas técnicas de XP son:

* Pair programming: tiene toda una metodología de trabajo que ya conoces.
* Code reviews o revisiones de código: antes de integrar un código es mejor que lo revisen programadoras que no lo han hecho.
* Integración continua: consiste en integrar continuamente (diariamente) el código de todas las programadoras del proyecto.
* Despliegue continuo: consiste en desplegar a producción continuamente nuevas versiones de nuestra aplicación.
* Refactoring: pone de relieve la importancia de la calidad interna del código.
* TDD o Test-Driven Development, que es desarrollo dirigido por tests, es decir, que los tests son los que dirigen cómo programamos.

Estas técnicas tienen dependencias entre ellas. Por ejemplo, no podré hacer despliegue continuo si antes no tengo integración continua de código. Y no podré tener integración continua (sin errores) si no tengo tests. También es mucho más difícil realizar refactorizaciones sin tener tests.

En esta lección vamos a aprender TDD, que consiste en **escribir los tests antes que el código**. Simplemente eso :) 🔥 (Acabo de oír cómo te explota la cabeza).

Al principio suena a locura el pensar que vamos a escribir algo que prueba un código sin tener ese código que queremos probar, pero si nos paramos a pensar un momento, siempre que empezamos a programar un código lo primero que necesitamos saber son los requisitos que debe tener ese código para que funcione correctamente.

Pensemos en una función `isOdd` que comprueba si un número es impar o no. A menudo la reacción básica es ponernos a escribir el código, probar mil variaciones distintas y escribir, en muchas ocasiones, más código del que necesitamos. Pero lo lógico es empezar pensando qué queremos que haga esa función y, por tanto, cuáles son los requisitos o las reglas que debe pasar para que consideremos que funciona correctamente. En este caso sería:

* Si es un número par devuelve `true`.
* Si es número impar devuelve `false`.
* Si lo que me pasan no es un número devuelve un error.

Estos son los requisitos, simples y claros. De haber empezado por el código estaríamos pensando en `if`s y `else`s en vez de definir qué es lo que queremos. Una vez hecho esto, el siguiente paso sería pasar esos requisitos a reglas, uno a uno, usando tests. Por tanto, la clave de TDD es que pensamos en qué queremos y cuáles son los criterios claros y tangibles para que eso funcione correctamente y, a partir de ahí, implementamos el código que cumplirá esas reglas.

### El ciclo de TDD

La metodología de TDD se basa en un proceso cíclico de 3 pasos:

1. Escribo un test definiendo qué tiene que hacer mi aplicación y lo veo fallar (se dice que el test está en rojo).
2. Escribo el código de producción un poco guarrete para que ese test pase y lo veo pasar (se dice que el test está en verde).
3. A continuación refactorizo un poco mi código para dejarlo más limpio. Pero en el proceso la lío un poco y rompo el test. Entonces el test se pone en rojo otra vez.
4. Mejoro mi código para que pase el test y se ponga en verde.
5. Repito los pasos 3 y 4 hasta que considero que mi código es inmejorable.

En inglés el ciclo de TDD se suele describir brevemente como Red - Green - Refactor.

La mejor forma de aprender a usar esta metodología es, como casi todo en programación, practicándola. Hemos preparado algunos ejercicios para practicarlo juntos.

Parece un poco freak pero mucha gente dice que cuando pruebas TDD ya no quieres nada más.


# 3.9.6 Testing para juniors

> **Nota:** esta lección es importante pero no urgente.

Hoy os hemos enseñado introducción al **testing porque es una parte muy, muy importante del desarrollo de software**.

Os queremos comentar que en las empresas a las desarrolladoras juniors no se les suele pedir que hagan testing desde el primer día, pero sí que os van a preguntar en las entrevistas técnicas qué sabéis sobre este tema.

Desde nuestro punto de vista la respuesta ideal sería: **solo he hecho unos pocos tests unitarios en el bootcamp pero estoy muy interesada porque me preocupa la calidad del código. ¿En vuestra empresa podré aprender a testear a fondo?**

Y también os recomendamos que en las pruebas técnicas que hagáis en vuestros próximos procesos de selección intentéis meter al menos un test, que se note que a las Adalabers les mola hacer las cosas bien.
