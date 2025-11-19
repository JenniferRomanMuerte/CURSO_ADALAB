# Intro a React JS

### Introducción a React JS

En este módulo aprenderemos a programar con [React JS](https://es.reactjs.org/), que es una **librería de JavaScript para realizar webs y aplicaciones webs** de forma rápida y sencilla.

![React](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-4637b41e80d669621e549e50af942e80c433d740%2Freact_logo.jpg?alt=media)

Los creadores de React se dieron cuenta de que programar páginas grandes o complejas con JavaScript a veces se convertía en un proceso tedioso y repetitivo. Por ello se les ocurrió crear una herramienta para automatizar tareas, simplificar el código y evitar problemas comunes durante el desarrollo de nuestras páginas webs.

### Hace mucho, mucho tiempo, en una galaxia muy lejana...

Como ya te habrás dado cuenta crear páginas web grandes y complejas con JavaScript puede ser un pequeño infierno. Por ello a lo largo de la historia han ido apareciendo varias herramientas para simplificar la programación de webs.

Una de las primeras herramientas que apareció fue [jQuery](https://jquery.com/) que nos permitía acceder al HTML desde JS y modificarlo de una forma sencilla. Era simplemente **una forma de escribir menos código y cometer menos errores**.

Años después apareció [Backbone JS](https://backbonejs.org/). Esta nueva herramienta fue una revolución ya que no solo nos permitía crear webs más fácilmente sino que también nos facilitaba la programación de aplicaciones webs. Backbone JS nos ayudaba a **separar el código en partes más lógicas, más legibles, desarrollar más rápido y con menos errores**... Es decir, a partir de este momento ya no hacíamos cada una lo que nos daba la gana, **sino que todas las programadoras compartíamos una forma de trabajar**.

Pero como pasa a menudo, quien lanza una gran idea primero paga el pato de la falta de experiencia. Después de Backbone JS vinieron otras herramientas que lo dejaron obsoleto en pocos años.

**Hace mucho, mucho tiempo (en 2013), en una galaxia llamada Facebook**, al equipo de programación se le ocurrió una mejor idea para programar la grandísima cantidad de páginas y aplicaciones web de sus productos. **Crearon una librería llamada React JS y la compartieron con el mundo.**

### React: ¿librería o framework?

En el desarrollo de software, las librerías y los frameworks son conjuntos de código reutilizable que facilitan el desarrollo de aplicaciones. Entonces, ¿cuándo hablamos de librería y cuándo de framework? La diferencia es conceptual: mientras que con una librería el control está en manos de la programadora, que es quien decide cuándo y cómo llamar a la librería; con un framework la programadora trabaja dentro del flujo definido por el framework, el cual dicta cómo trabajar.

Los creadores de React, como parte de su filosofía de diseño, lo definen como una librería de JavaScript para construir interfaces de usuario y no como un framework. React se centra exclusivamente en el desarrollo de interfaces de usuario. No ofrece soluciones integradas para tareas como el manejo de rutas, la gestión del estado completo de la aplicación o el acceso a una base de datos. Esto lo diferencia de frameworks más completos como Angular. Además, React no impone una estructura rígida o un patrón específico.

Sin embargo, a pesar de que los creadores lo definan como una librería, hay desarrolladores que argumentan que React funciona como un framework en la práctica porque una vez que empiezas a usar React, es difícil no adoptar otras partes de su ecosistema. El debate está servido. Nosotras en este curso vamos a tomar React como una librería, pero puede ser que encuentres menciones de React como framework. La distinción entre librería y framework puede ser subjetiva y, en el caso de React, esto depende más de cómo lo implementemos que de cómo se defina formalmente.

### Competencia de React JS

En JavaScript hay millones de frameworks y librerías, pero en la actualidad las 3 más importantes y que se usan en la mayoría de los proyectos son:

* [React JS](https://es.reactjs.org): solo nos ayuda con la interfaz de la web. No nos ayuda a enviar datos al servidor, a guardarlos en el `local storage` o a otras tareas.
* [Vue JS](https://vuejs.org/): años después de que apareciera React JS, uno de sus creadores lanzó Vue JS, que es otra herramienta para hacer lo mismo.
* [Angular JS](https://angularjs.org/): creado por el equipo de Google, nos ayuda a trabajar con una interfaz web y también con la comunicación con el servidor y otras tareas. Es más complejo, pues abarca más partes, y tiene algunos inconvenientes, como que de una versión a la siguiente cambian muchas cosas.

Además de estas 3 librerías y frameworks existen otros muchos que sirven para ampliar o extender la funcionalidad. Como programadora, en el futuro aprenderás a decidir qué librería te interesa más a la hora de empezar un proyecto.

Lo mejor de todo es que estos frameworks y librerías comparten muchas características, así que **una vez aprendido uno resulta mucho más fácil aprender el siguiente**.

### Muy usado en las empresas

En Adalab, hemos elegido enseñar React JS porque desde nuestro punto de vista es la mejor librería en la actualidad. **Se usa en millones de proyectos en miles de empresas** y por ello hay muchas ofertas de trabajo en las que se pide. Está muy maduro y es muy robusto, la curva de aprendizaje es muy sencilla, la comunidad que lo usa es enorme, y la cantidad de gente que se dedica a mejorarlo o a crear herramientas con React también es grandísima. Vamos, que es un melocotonazo de miedo.

### Las vidas pasadas de React

En React podemos trabajar con **componentes de clase** y **componentes funcionales** (ya veremos lo que son), que hacen exactamente lo mismo pero con otra sintaxis.

**Cuando React nació solo se podían usar componentes de clase.** Este tipo de componentes tenían algunas deficiencias, **por lo que pasados unos años, React creó los componentes funcionales,** que funcionan mejor y son más simples.

**Como ahora todo el mundo trabaja con componentes funcionales, estos son los que vamos a aprender en este módulo.**

Pero queremos avisarte de que todavía hay ejemplos de componentes de clase en la documentación de React, en artículos de Internet, en las respuestas de [Stack Overflow](https://stackoverflow.com/) y en algunos proyectos de algunas empresas. Por ello, si ves código de React que no entiendes por ahí, no te asustes.

Para que sepas identificar estos componentes de clase, que están obsoletos, mira este código:

```js
class App extends React.Component {
  constructor() {}

  render() {}
}
```

Si en un código de React ves las palabras `class`, `constructor()` y / o `render()` es que son componentes de clase, los antiguos.



# Intro al módulo

### Contenidos del módulo

**React JS es JavaScript con vitaminas.** Por ello en este módulo vamos a afianzar las bases de JavaScript a la vez que aprendemos cosas nuevas. Hemos dividido el módulo en dos partes:

En la **primera parte** aprenderemos:

* Qué es React.
* Cómo crear aplicaciones con React.
* Cómo trabajar con HTML, CSS y Sass en React.
* Cómo usar los eventos y variables de JavaScript en React.
* Cómo trabajar con formularios en React.
* Cómo pintar listados, llamar a la API, guardar datos en el local storage y otras cosas en React.

Como ves, vamos a aprender a **aplicar en React los mismos conocimientos que hemos aprendido en JavaScript**.

En la **segunda parte** del módulo aprenderemos:

* Cómo dividir nuestra aplicación en componentes, para que los ficheros sean más pequeños, fáciles de leer y reutilizables.
* Cómo comunicar los componentes de React entre sí.
* Qué debe hacer cada componente.
* Cómo trabajar con las rutas del navegador, es decir, las URLs de las páginas. Por cierto, esta es una de las principales características de una aplicación web.
* Cómo hacer una buena arquitectura de aplicaciones grandes. Con React todos los proyectos tienen la misma estructura, lo que cambia de uno a otro es la funcionalidad propia de cada aplicación.

En resumen en esta segunda parte haremos aplicaciones web muy limpias y ordenadas, es decir, **vamos a trabajar como se hace en los proyectos reales**.

### Estructura del módulo

En este módulo también aprenderemos cosas nuevas. Casi todas las explicaremos en el orden necesario para aprenderlas. Pero otras las enseñaremos más adelante porque no son tan importantes o urgentes. No queremos darte chapas infinitas.

Con la experiencia de muchas promociones nos hemos dado cuenta de que **algunas cosas es mejor usarlas un par de días y más tarde explicarlas en profundidad**. Así que si no entiendes algo al 100% no te preocupes, en unos días las asimilarás a la perfección.

En cada mini lección te diremos si es importante o si es algo que debes leer por encima y volver a leer en el futuro.

### Ejemplos de código

En las lecciones de este módulo hay muchos ejemplos de código. Para la mayoría de ellos, utilizamos [CodeSandbox](https://codesandbox.io/). Es una herramienta para compartir ejemplos de código y, a diferencia de Codepen, sí permite utilizar librerías como React.

### Ejercicios

En este módulo hemos preparado 3 tipos de ejercicios:

* **Ejercicios normales:** estos son ejercicios pequeños y aislados. Los encontrarás en cada lección y los deberás hacer tú.
* **Ejercicio grabado de Twitter:** para que veas cómo realizar un ejercicio mediano hemos grabado uno sobre Twitter y te lo damos resuelto.
* **Ejercicio para el pair programming "Cuidado con Groku":** os proponemos un ejercicio para que realicéis entre tu compañera y tú en la hora de pair programming. Lo bueno de este ejercicio es que también es de tamaño medio, como los que harás en las evaluaciones, entrevistas de trabajo... Es obligatorio que lo hagas todos los días porque aprenderás cosas que no se explican en el resto de materiales.

Hemos subido los ejercicios de Twitter y del ahorcado a este [repo](https://github.com/adalab/ejercicios-de-los-materiales). Clónalo en tu equipo.

### ¿Qué esperamos de ti?

Te pedimos que durante todo el módulo:

* **Aprendas cada uno de los conceptos aislados que te vamos a enseñar y los compares con los mismos conceptos aislados de JavaScript.** El objetivo es que en tu cerebro esté muy claro qué es un evento, un array, un dato, una función... y para qué se usan y por qué. Si luego lo tienes que programar en JS o en React ese ya es un problema de sintaxis.
* **Aprendas a relacionar los conceptos aislados entre sí.** Nosotras te vamos a seguir ayudando a unir estos conceptos pero queremos que tú seas capaz de coger una web grande, dividirla en partes pequeñas e interrelacionar estas partes o conceptos.
* Leas, además de estos materiales, [documentación oficial de React](https://es.react.dev/learn), ya que está muy bien escrita. **Queremos que te acostumbres a leer documentación técnica por Internet.**
* Te sigas acostumbrando a **buscar en Internet** con [Google](https://google.es) y [StackOverflow](https://es.stackoverflow.com/), donde todas dudas y problemas que tengas ya los ha tenido alguien antes y ha subido la solución.
* **Disfrutes aprendiendo y programando con React.**
