# 4.5.1 Node JS y Módulos

![Node JS](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-7e9741a42acea19f430c1216c3d035a2c9cada76%2Fnodejs-logo.jpg?alt=media)

{% hint style="info" %}

> **Nota:** esta mini lección es importante para entender qué cosas podemos hacer con Node.
> {% endhint %}

{% hint style="warning" %}

> **Nota:** Es una lección larga, asi que te recomendamos que te quedes con los conceptos bases y sigas avanzando en el resto de lecciones.
> {% endhint %}

[Node JS](https://nodejs.org) es un lenguaje de programación que nos sirve para **ejecutar JavaScript en la terminal de un ordenador**.

Existen muchísimos lenguajes de programación de back end (como PHP, Java, Python, .NET...). Nosotras vamos a aprender Node JS porque ya sabemos JavaScript y tenemos el 80% de los conocimientos necesarios. Cuando en el futuro quieras aprender otro lenguaje de back end te costará mucho menos.

Hasta ahora estamos acostumbradas a ejecutar nuestro código JavaScript en un navegador como Chrome. Gracias a Node JS podemos ejecutar JavaScript en una terminal y que este haga tareas como leer y escribir en los ficheros del ordenador, o podemos crear una aplicación de servidor.

### Diferencias entre JavaScript y Node JS

Las diferencias entre un código de JavaScript ejecutado en un navegador y en una terminal son las características propias de cada uno de estos dos entornos. Por ejemplo:

* En un navegador las usuarias producen eventos (click, keyUp, scroll...) pero esto no tiene sentido en una terminal. Es decir, **una terminal no tiene una interfaz gráfica que puedan usar las usuarias**.
* **Una terminal tiene muchos más permisos para acceder a servicios del ordenador**, como acceder a los ficheros del ordenador, abrir puertos de Internet, instalar otros programas... Todas estas cosas no se pueden hacer desde un navegador por temas de permisos y seguridad.
* Node JS no va a ejecutar o interpretar HTML, CSS, imágenes... Pero sí los va a gestionar, crear, modificar o servir a las páginas web que los pidan. **En Node JS solo se ejecutan ficheros de JavaScript.**

### Similitudes entre JavaScript y Node JS

Todo lo demás es común entre JavaScript y Node JS. En Node JS también vamos a trabajar con nuestras variables, constantes, `if`, nuestros **amados** arrays y bucles, dividiremos el código en diferentes ficheros para exportar e importar, vamos a poder **depurar** nuestras aplicaciones... También trabajaremos con **asincronía**, que es especialmente útil en un servidor.

En resumen, nos interesa aprender de Node JS los conocimientos que son únicos de Node JS. También nos interesa aprender a pensar en cómo funciona un servidor.

### Qué es Node JS

En este vídeo explicamos qué es Node JS y ejecutamos nuestro primer programa:

{% embed url="<https://www.youtube.com/watch?v=fKQlmJAMdbU>" %}

> [Ejercicio del vídeo](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/node-intro/intro)

### Y tú, ¿has utilizado alguna vez Node JS?

{% embed url="<https://www.youtube.com/watch?v=b5iTitumrro>" %}

Recuerda lo que hemos comentado en este vídeo: pulsando **Ctrl+C** en la terminal, puedes forzar que un programa de Node JS finalice.

### Qué son los módulos

Un módulo (también llamado paquete) **es una librería de código con una funcionalidad concreta**, que han creado otras personas, para que nosotras lo utilicemos dentro de nuestro código. Esas personas pueden ser los creadores de Node JS o cualquier otra programadora.

La funcionalidad que puede tener un módulo es muy diversa, por ejemplo:

* Funcionalidades que nos ayudan a automatizar tareas.
* Funcionalidades que nos ayudan a trabajar más fácilmente con datos complejos.
* Funcionalidades que procesan imágenes y reducen su tamaño para que pesen menos, y así cuando el navegador las carga la usuaria gaste menos datos de su conexión y las imágenes se carguen más rápidamente.
* Funcionalidades que nos ayudan a subir un fichero desde el navegador de la usuaria al servidor.
* Y muchas más.

No tiene sentido que tengamos que volver a programar en nuestras aplicaciones código que ya hemos creado en aplicaciones anteriores, o que ya ha creado otra persona en otro proyecto. **¡¡¡Compartir es vivir!!!**

### Para qué son útiles los módulos

Los módulos son útiles para:

* Separar el código en diferentes partes y ficheros y así organizar la aplicación mejor. Es mejor tener muchos ficheros pequeños que pocos grandes.
* Separar la responsabilidad del código. Cada módulo o fichero se encarga de hacer solo una cosa. Así no mezclamos en un único fichero muchas cosas.
* Tener código privado. Desde fuera de un código solo podemos acceder al código que el módulo publica a través del `export`. El código no publicado es privado.
* Reutilizar código llevándonos el módulo a otro proyecto.

### Módulos antiguos vs. módulos modernos

#### Módulos modernos

En React ya hemos utilizado los módulos. Los utilizamos para crear componentes de React en diferentes ficheros. Si recuerdas, la sintaxis para importar un componente es:

```js
import Header from "./Header.js";
```

Y en el fichero `Header.js` la sintaxis para exportar el componente es:

```js
export default Header;
```

**Esta forma con la sintaxis `import` y `export` es la moderna.** El problema es que Node JS todavía no ha terminado de implementar esta sintaxis en su versión actual. Hasta que Node JS no implemente los módulos modernos no podemos utilizarlos.

#### Módulos antiguos

La forma antigua de hacerlo es cambiando la sintaxis por:

```js
const Header = require("./Header.js"); // que equivale a: import Header from './Header.js';
```

y

```js
module.exports = Header; // que equivale a: export default Header;
```

Como veréis es simplemente un cambio de sintaxis, nada más. **Esta sintaxis antigua es la que debemos usar en Node JS.**

### Qué son y para qué sirven los módulos

{% embed url="<https://www.youtube.com/watch?v=h-K6Ji9tLmc>" %}

> [Ejercicio del vídeo](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/node-modules/intro)

En el video anterior hemos visto que son los módulos y un ejemplo de como usarlos. Podemos crear nuestros propios módulos y luego exportarlos para que sean utilizados en otra parte de nuestro fichero.

1. Para exportar módulos utilizamos `module.exports = {}` y entre las llaves colocamos todo aquello que queramos exportar.

   ```js
   function suma(a, b) {
     return a + b;
   }

   function multiplicar(a, b) {
     return a * b;
   }

   module.exports = {
     suma: suma,
     multiplicar: multiplicar,
   };
   ```
2. Asumiendo que el archivo anterior se llame `operaciones.js`, se puede utilizar el mismo en otro archivo.js de la siguiente manera:

   ```js
   let operaciones = require("./operaciones");
   operaciones.suma(2, 3);
   ```

### Tipos de módulos

Hay 4 tipos de módulos y los vamos a explicar a continuación:

* Mis propios módulos o custom modules
* Módulos nativos de Node JS
* Módulos instalados con NPM
* Módulos especiales de tipo JSON, para datos

### Mis propios módulos

Los módulos propios son módulos que creamos las desarrolladoras , son propios de nuestra aplicación y responden a una funcionalidad de la misma. Y como hemos visto se exportan las funciones con la línea `module.exports = {}` y se utiliza importando en otros ficheros a través de `let nombre_modulo = require('./ruta_al_modulo');`

{% embed url="<https://www.youtube.com/watch?v=4k9_ChCkYCo>" %}

> [Ejercicio del vídeo](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/node-modules/custom)

### Módulos nativos de Node JS

Los módulos nativos son los que vienen instalados por defecto en NodeJS, podemos ver los que existen a través de la [documentación de NodeJS](https://nodejs.org/dist/latest-v16.x/docs/api/). Por ejemplo:

* HTTP: para configurar la comunicación entre servidores y clientes.
* FileSystem: El módulo fs permite interactuar con el sistema de archivos
* DNS: El módulo dns permite la resolución de nombres. Por ejemplo, para buscar direcciones IP de nombres de host.

### Módulos instalados con NPM

**Node Package Module(NPM)** forma parte de Node.js es una herramienta que permite instalar/desinstalar dependencias, gestión de versiones, gestión de dependencias necesarias para ejecutar un proyecto.

**Fichero package.json** Para usar los módulos que instalamos con NPM, el proyecto debe contener un archivo llamado package.json. Dentro de ese archivo se encuentran los metadatos específicos para los proyectos. Los metadatos muestran algunos aspectos del proyecto en el siguiente orden:

* El nombre del proyecto
* La versión inicial
* Descripción
* El punto de entrada
* Comandos de prueba
* El repositorio git
* Palabras clave
* Licencia
* Dependencias
* Dependencias de desarrollo

**Iniciar un proyecto con npm** Para construir un proyecto con node, ejecuta el comando `npm init` que inicializa el proyecto, funciona como una herramienta para crear el archivo `package.json`, solo debemos reponder a las indicaciones del `npm init`

**Instalación de módulos npm** Para instalar los módulos utiliza el siguiente comando, donde es el nombre del módulo que se desea instalar. Este comando instalará el módulo en la carpeta `/node_modules` en el directorio del proyecto. Cada vez que instales un módulo desde el administrador de paquetes Node, este se instalará en la carpeta node\_modules.

```bash
$ npm install <modulo>
$ npm i <modulo>
```

Os contamos en el siguiente video como inicializar un proyecto e instalar módulos a través de un ejemplo.

{% embed url="<https://www.youtube.com/watch?v=1tDri5zJpO8>" %}

> [Ejercicio del vídeo](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/node-modules/npm)

Cuando tengas tiempo puedes echarle un ojo a toda [la configuración que podemos meter en el `package.json`](https://docs.npmjs.com/cli/v6/configuring-npm/package-json).

### Módulos JSON (módulo de datos)

Los módulos de tipo JSON guardan información en este formato, generalmente configuraciones de mi aplicación, credenciales y datos. Se importa y exporta igual que los anteriores. De esta forma se separan en ficheros independientes la lógica de los datos de la aplicación.

Os contamos en el siguiente video a través de un ejemplo utilizando la librería `moment.js`.

{% embed url="<https://www.youtube.com/watch?v=_3dT2jwZrys>" %}

> [Ejercicio del vídeo](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/node-modules/json)

Cuando tengas tiempo puedes echarle un ojo al módulo [Moment JS](https://momentjs.com/) que se puede usar en proyectos de front y de back.

### Conclusiones

La forma actual de importar y exportar un módulo es:

```js
const Header = require("./Header.js"); // que equivale a: import Header from './Header.js';

module.exports = Header; // que equivale a: export default Header;
```

Para importar nuestros propios módulos y los módulos JSON usamos **la ruta relativa**, ya que son ficheros que están en nuestro proyecto.

```js
const Header = require("./rutaRelativaAlModulo.js");
```

Para importar módulos nativos o de NPM utilizamos el nombre del módulo:

```js
const fs = require("fs");
```

### Ejercicios

#### 1. Librería de file system

1. Mira, ejecuta y entiende los ejemplos que están en las carpetas [`node-modules-read-and-write-files-with-one-module`](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/node-modules/read-and-write-files-with-one-module) y [`node-modules-read-and-write-files-with-two-modules`](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/node-modules/read-and-write-files-with-two-modules).
2. Piensa y razona si te gusta más que las dos funciones estén en un solo módulo o separadas en dos módulos.

#### 2. Mi propia librería Math

1. Crea un `math.js` que sea un módulo.
   * Exporta dos funciones, una para sumar y otra para restar.
   * Estas dos funciones deben recibir dos números como parámetros.
   * Estas dos funciones deben retornar el resultado de la operación.
2. Crea un `index.js`. e importa el módulo `math.js`.
   * Usa el módulo importado para hacer una suma y consolea el resultado.
   * Usa el módulo importado para hacer una resta y consolea el resultado.

#### 3. Librería Math avanzada: módulos que usan otros módulos

1. Crea un `math-add.js` que sea un módulo que exporta una función de suma.
2. Crea un `math-sub.js` que sea un módulo que exporta una función de resta.
3. Crea un `math.js` que sea un módulo que importa los dos módulos anteriores y los exporta dentro de un objeto.
4. Crea un `index.js`.
   * Importa en `index.js` el módulo `math.js`.
   * Haz una suma y consolea el resultado.
   * Haz una resta y consolea el resultado.

#### 4. Lodash: obtener la unión

En [NPM](https://www.npmjs.com/package/lodash) hay un módulo que se llama [Lodash](https://lodash.com/) que nos ayuda a trabajar fácilmente con grandes cantidades de datos.

1. Crea un `index.js`.
   1. Importa el módulo `Lodash`. Para ello, antes tienes que instalarlo dentro del `package.json`.
   2. Crea dos constantes para los arrays: `[1, 2, 3]` y `[2, 3, 4]`.
   3. Usa el módulo lodash para hallar la **unión** de estos dos arrays. Para ello necesitas buscar en la [documentación de Lodash](https://lodash.com/docs/4.17.15).
   4. Si consoleas el resultado que te devuelve la función de Lodash el resultado debe ser `[1, 2, 3, 4]`.
