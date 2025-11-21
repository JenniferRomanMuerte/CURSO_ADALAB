# 3.3.1 Componentes

### Componentes en React

En esta mini lección aprenderás a crear componentes con el objetivo de simplificar tu código.

> **Nota:** esta lección es importante.

### ¿Qué es un componente web?

Un componente es elemento o conjunto de elementos visuales que:

* Tienen una finalidad o funcionalidad propia.
* Tiene un diseño propio.
* Se pueden reutilizar.
* Se pueden personalizar.

¿Sabrías decir qué es un componente en la página de Instagram?

![](https://github.com/Adalab/pw-materiales-del-curso/blob/master/modulo_3/3-3-comp/assets/images/react_componentes_instagram.png)

De un vistazo rápido identificamos los siguientes componentes:

* **Cabecera:** la cabecera es un componente que a su vez tiene otros componentes dentro. No se reutiliza en esta página pero sí en otras. Tiene un diseño concreto y una funcionalidad concreta, por ejemplo, se queda fija cuando se hace scroll.
* **Logotipo de Instagram:** también se reutiliza en otras páginas de Instagram. Al pulsarlo nos envía al inicio de la página.
* **Buscador:** tiene la funcionalidad de buscar.
* **Botones de Iniciar sesión y Seguir:** el componente botón azul se está reutilizando dos veces en esta página, y al pulsarlo hace algo. Es personalizable, ya que el mismo botón aparece dos veces en esta página con diferentes textos.
* **El logo de Adalab, el nombre, el número de publicaciones, seguidores y seguidos, la descripción...** también son componentes.
* **Las historias:** son un componente compuesto de una imagen redonda y un texto debajo (o emojis, que es lo mismo). Tiene un borde que cambia de color en función de si ya has visto las historias o no.
* **El menú de Publicaciones, IGTV y Etiquetadas:** es un menú con una funcionalidad concreta, que muestra la opción activa en negro y las no activas en gris.
* **El botón Publicaciones (al igual que IGTV y Etiquetadas):** es un botón que está dentro del componente del menú superior.
* **Las imágenes cuadradas inferiores:** son las publicaciones de Adalab. Al posar el ratón encima aparece el número de Me gusta y el número de comentarios.
* **Los iconos de Me gusta y de comentarios:** son componentes compuestos de un icono y un número. Al pulsarlos hacen cosas. Se han personalizado, ya que el mismo componente en un sitio lo han mostrado con un corazón y en otro con el icono de una conversación.

En resumen todos o casi todos los elementos de esta página son componentes, algunos reutilizados o no, pero todos tienen un diseño y una funcionalidad. Algunos se pueden personalizar tanto en su estética como en su funcionalidad.

### Características de los componentes en React

Hasta ahora, en el módulo hemos trabajado con un solo componente: `src/components/App.jsx`. A partir de ahora **vamos a dividir este componente en componentes más pequeños** o en pequeñas partes, dividiendo a su vez su código en ficheros.

Por ahora diferenciamos los componentes de React entre los que tienen las siguientes características:

* **Componente principal:** es el componente principal de React, el que contiene el resto de componentes. Siempre va a ser `src/components/App.jsx`.
* **Componentes simples no personalizables:** el logo de Instagram es un componente que siempre se muestra igual y siempre hace lo mismo. No está pensado para que se muestre de forma diferente en diferentes sitios.
* **Componentes simples sí personalizables:** los botones de **Iniciar sesión** y **Seguir** es un mismo componente pero que cambia su texto en función de donde se está mostrando.

### ¿Cómo crear un componente simple no personalizable?

Supongamos que hemos programado toda esta página de Instagram en un único componente `App`. Su código podría ser algo como:

```jsx
// Fichero src/componentes/App.jsx (código original)

const App = () => {
  return (
    <div>
      <header>
        {/* Logo */}
        <div className="logo">
          <a href="http://isntagram.com" title="Ir al inicio">
            <img
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt="Instagram"
            />
          </a>
        </div>

        {/* Buscador */}
        <form>
          <input type="search" name="search" placesholder="Buscar" />
        </form>

        {/* Botones de login y signup */}
        <nav>
          <ul>
            <li>
              <button className="bg_blue">Iniciar sesión</button>
            </li>
            <li>
              <button className="bg_white">Registrarse</button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="profile_info">
          {/* Esta es la sección con el logo y la info de Adalab */}
        </section>

        <section className="stories">
          {/* Esta es la sección con el logo y la info de Adalab */}
        </section>

        <section className="publications">
          {/* Esta es la sección con el logo y la info de Adalab */}
        </section>
      </main>
    </div>
  );
};

export default App;
```

Pues bien, vamos a mover el logo de Instagram a otro componente. Seguiremos estos pasos:

1. Creamos el fichero `src/componentes/Logo.jsx`, que es un nuevo componente.
2. Cortamos el código HTML del logo de `src/components/App.jsx`.
3. Pegamos el código cortado en el componente `src/componentes/Logo.jsx`.
4. Usamos el componente `src/componentes/Logo.jsx` dentro del componente `src/componentes/App.jsx`.

El código de `src/componentes/Logo.jsx` nos quedaría:

```jsx
// Fichero src/components/Logo.jsx (nuevo código)

const Logo = () => {
  return (
    <div className="logo">
      <a href="http://isntagram.com" title="Ir al inicio">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram"
        />
      </a>
    </div>
  );
};

export default Logo;
```

En este fichero hemos creado la función Logo con `const Logo = () => {`. Al final del fichero exportamos esta función con `export default Logo;` para poder importar este componente en `App.jsx`.

Como ves, la función logo retorna código JSX. Es lo mismo que ha hecho siempre el componente `App`.

Ahora cambiamos el código de `App.jsx` que nos queda así:

```jsx
// Fichero src/components/App.jsx (nuevo código)

import Logo from "./Logo"; // Importamos el logo

const App = () => {
  return (
    <div>
      <header>
        {/* Aquí usamos el componente logo */}
        <Logo />

        {/* Buscador */}
        <form>
          <input type="search" name="search" placesholder="Buscar" />
        </form>

        {/* Botones de login y signup */}
        <nav>
          <ul>
            <li>
              <button className="bg_blue">Iniciar sesión</button>
            </li>
            <li>
              <button className="bg_white">Registrarse</button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="profile_info">
          {/* Esta es la sección con el logo y la info de Adalab */}
        </section>

        <section className="stories">
          {/* Esta es la sección con el logo y la info de Adalab */}
        </section>

        <section className="publications">
          {/* Esta es la sección con el logo y la info de Adalab */}
        </section>
      </main>
    </div>
  );
};

export default App;
```

En la primera línea de este fichero estamos importando el componente `Logo.js` con `import Logo from './Logo';`. Con `import Logo` le estamos diciendo que lo que exporta `src/componentes/Logo.jsx` lo meta en la constante `Logo`. La ruta `'./Logo'` es la ruta relativa entre ambos ficheros.

En la línea 11 de `App.js` hemos puesto `<Logo />` expresando así que queremos usar el logo en esta parte del componente `App`.

El código generado por React es el mismo que el original: hemos cambiado el código pero no el resultado:

![](https://github.com/Adalab/pw-materiales-del-curso/blob/master/modulo_3/3-3-comp/assets/images/react_componentes_instagram_html.png)

### Cosas que debemos tener en cuenta

* El componente `src/components/Logo.jsx` es un componente normal y corriente. Por tanto:
  * Puede contener todo tipo de código JSX y JS.
  * Puede contener hooks, como `useState`.
  * Debe retornar código HTML.
  * Si quisiéramos reutilizar el componente Logo en el footer de la página, solo tendríamos que volver a escribir `<Logo />` en `App.jsx`.
* El componente `src/components/App.jsx` importa y usa el componente `Logo`.
  * **– Para usarlo, empleamos** la misma sintaxis que si fuera **una etiqueta auto cerrada de HTML**: símbolo menor que `<` para abrir la etiqueta y barra más el símbolo mayor que `/>` para auto cerrar la etiqueta, es decir, `<Logo />`.
* React nos pide que, para diferenciar más fácilmente una etiqueta normal de HTML de un componente:
  * Las etiquetas HTML, por ejemplo un `<div>`, se escriben en minúsculas.
  * Las etiquetas de componente `<Logo />`, **se escriben en camelCase, pero con la primera letra en mayúscula**.
  * El nombre del fichero `Logo.jsx` también **se escribe en camelCase, pero con la primera letra en mayúscula**.
* Con estos cambios hemos conseguido dividir el código de `App.jsx` en dos ficheros. Si hacemos esto con todo el HTML de `App.jsx`, nos quedará un proyecto con muchos ficheros pequeños en vez de uno grande. Cuando tengas que modificar tu página o hagas merges lo agradecerás.
* Puesto que `App` está por encima de `Logo` decimos que `App` es el componente madre y `Logo` el componente hija.

### Conclusiones

Para crear un componente hay que:

* Crear un nuevo fichero en `src/components/NombreDeMiComponente.jsx`.
* Crear el código del componente:
  * Creando una función: `const NombreDeMiComponente = () => { ... };`.
  * Exportando la función al final del fichero `export default NombreDeMiComponente;`.
  * El retorno de la función debe ser código HTML.
* Usando el componente en el componente `App`:
  * Importando el componente con `import NombreDeMiComponente from './NombreDeMiComponente';`.
  * Usando el componente tantas veces como queramos con el código `<NombreDeMiComponente />`

### Ejercicios

#### 1. Crear componentes sencillos

En los primeros días de este módulo migramos a React la web de la evaluación del módulo 1. Pues vamos a dividirla en componentes más pequeños.

> **Nota:** si es su momento no migraste la evaluación, puedes hacerlo ahora, ya que la vamos a usar en varios ejercicios.

Cuando migraste esta página pusiste todo el código HTML dentro del componente `App.jsx`. Pues ahora:

1. Crea un componente `Header.jsx` y mueve ahí el HTML de la cabecera. Haz todos los cambios necesarios en tu código para que la página se siga viendo bien.
2. Haz lo mismo moviendo el `<main />` al componente `Main.jsx`.
3. Si al finalizar tienes los componentes `App`, `Header` y `Main` y la página se sigue viendo igual, es que lo has hecho todo bien.
4. Si quieres puedes seguir dividiendo tu código en componentes más pequeños. Puedes hacer que el componente `Header` importe a su vez los componentes `Logo` y `Menu`.

# 3.3.2 Componentes personalizados

### Personalizar componentes en React

En esta mini lección seguiremos aprendiendo a crear componentes en React, pero también aprenderemos a personalizarlos:

### ¿Qué son las props?

Las **props** (diminutivo de *properties*) en React son **las propiedades, datos o información que un componente madre le pasa a su componente hija para personalizarlo**, ya sea en su aspecto o su funcionalidad. **Es una forma de comunicar dos componentes**.

### ¿Cómo se usan las props?

Sigamos refactorizando el ejemplo de Instagram. Partiendo de este código vamos a crear un único componente para los dos botones azules de **Iniciar sesión** y **Seguir**, pero los vamos a personalizar para que cada uno muestre su propio texto. El código actual es:

```jsx
// Fichero src/components/App.jsx (código original)

import Logo from "./Logo";

const App = () => {
  return (
    <div>
      <header>
        <Logo />

        {/* Buscador */}
        <form>
          <input type="search" name="search" placeholder="Buscar" />
        </form>

        <nav>
          <ul>
            <li>
              {/* Botones  Iniciar sesión */}
              <button className="bg_blue">Iniciar sesión</button>
            </li>
            <li>
              <button className="bg_white">Registrarse</button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="profile_info">
          <img
            src="https://instagram.com/profile-images/adalab.png"
            title="Adalab"
            alt="Adalab"
          />
          <h1>adalab_digital</h1>

          {/* Botones de Seguir */}
          <button className="bg_blue">Seguir</button>

          {/* Esta es la sección con el logo y la info de Adalab */}
        </section>

        <section className="stories">
          {/* Esta es la sección con el logo y la info de Adalab */}
        </section>

        <section className="publications">
          {/* Esta es la sección con el logo y la info de Adalab */}
        </section>
      </main>
    </div>
  );
};

export default App;
```

Y el código refactorizado del componente `App.jsx` es:

```jsx
// Fichero src/components/App.jsx (código nuevo)

import Logo from "./Logo";
import ButtonBlue from "./ButtonBlue"; // Aquí importamos el nuevo componente

const App = () => {
  return (
    <div>
      <header>
        <Logo />

        {/* Buscador */}
        <form>
          <input type="search" name="search" placeholder="Buscar" />
        </form>

        <nav>
          <ul>
            <li>
              {/* Botón Iniciar sesión con la prop text */}
              <ButtonBlue text="Iniciar sesión" />
            </li>
            <li>
              <button className="bg_white">Registrarse</button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="profile_info">
          <img
            src="https://instagram.com/profile-images/adalab.png"
            title="Adalab"
            alt="Adalab"
          />
          <h1>adalab_digital</h1>

          {/* Botón Seguir con la prop text */}
          <ButtonBlue text="Seguir" />

          {/* Esta es la sección con el logo y la info de Adalab */}
        </section>

        <section className="stories">
          {/* Esta es la sección con el logo y la info de Adalab */}
        </section>

        <section className="publications">
          {/* Esta es la sección con el logo y la info de Adalab */}
        </section>
      </main>
    </div>
  );
};

export default App;
```

En `App.jsx` también estamos importando el componente `ButtonBlue` al principio del fichero. Pero lo que nos interesa de `App.jsx` aquí son los datos que estamos pasando a `ButtonBlue`.

Con la siguiente línea estamos usando el componente `ButtonBlue`, pasándole una `prop` cuyo nombre es `text` y cuyo valor es **Iniciar sesión**.

```jsx
<ButtonBlue text="Iniciar sesión" />
```

Con la siguiente línea estamos usando el componente `ButtonBlue` pasándole una `prop` cuyo nombre es `text` y cuyo valor es **Seguir**.

```jsx
<ButtonBlue text="Seguir" />
```

Ahora debemos crear el componente hija `ButtonBlue.jsx`, que tiene el siguiente código:

```jsx
// Fichero src/components/ButtonBlue.jsx (código nuevo)

const ButtonBlue = (props) => {
  return <button className="bg_blue">{props.text}</button>;
};

export default ButtonBlue;
```

Como ves, este componente es igual que `<Logo />`, es una función que exportamos y que retorna código HTML. Pero hay una cosa nueva. **Esta función recibe un único parámetro** llamado `props`. Por aquí el componente hija recibe un objeto con las propiedades que le pasa su madre. Es decir:

* Cuando en `App.jsx` escribimos `<ButtonBlue text="Iniciar sesión" />` en `ButtonBlue` el parámetro `props` es:

  ```js
  {
    text: "Iniciar sesión";
  }
  ```
* Cuando en `App.jsx` escribimos `<ButtonBlue text="Seguir" />` en `ButtonBlue` el parámetro `props` es:

  ```js
  {
    text: "Seguir";
  }
  ```
* Para usar la prop `text` escribimos:

  ```jsx
  <button className="bg_blue">{props.text}</button>
  ```

Si te das cuenta, el equipo de React ha reutilizado el concepto de función de JavaScript para el concepto de componente reutilizable. **Un componente es una función**, **que puede recibir props** para cambiar su comportamiento y **que retorna un código HTML diferente** en función de los parámetros que reciba.

### Características de las props

#### ¿Cuántas props puede recibir un componente?

**Todas las que quiera.** Con el código:

```jsx
<ButtonBlue text="Seguir" icon="follow" title="Seguir a Adalab" />
```

El componente `ButtonBlue` recibe por `props` el objeto:

```js
{
  text: 'Seguir',
  icon: 'follow',
  title: 'Seguir a Adalab'
}
```

#### ¿Qué tipos de props hay?

Muchos, **tantos como tipos de datos en JavaScript**. Si creamos el componente `Icon.jsx` para los iconos de esta imagen:

![](https://github.com/Adalab/pw-materiales-del-curso/blob/master/modulo_3/3-3-comp/assets/images/react_componentes_instagram_icon.png)

El código sería:

```jsx
<Icon icon="heart" number={23} />
<Icon icon="comments" number={0} />
```

El primer componente `Icon` recibe por `props` el objeto:

```js
{
  icon: 'heart', // de tipo string
  number: 23 // de tipo número entero
}
```

Y el segundo recibe por `props` el objeto:

```js
{
  icon: 'comments', // de tipo string
  number: 0 // de tipo número entero
}
```

Veamos un ejemplo con muchos tipos de props:

```jsx
// Fichero src/components/App.jsx

import MiSuperComponente from "./MiSuperComponente";
import OtroComponente from "./OtroComponente";

const App = () => {
  const miTexto = "Hola mundo";
  const miNumeroFavorito = 8;
  const miArray = [1, 2, 3];
  const miObjeto = { uno: 1, dos: 2 };

  const miFuncion = () => {
    console.log("Hola mundo");
  };

  return (
    <div>
      <MiSuperComponente
        unTexto="Lorem ipsum"
        otroTexto={miTexto}
        unNumero={123}
        otroNumero={miNumeroFavorito}
        unArray={miArray}
        unObjeto={miObjeto}
        unBooleanoFalso={false}
        unBooleanoVerdadero={true}
        otroBooleanoVerdadero
        otroBooleanoMas={miNumeroFavorito === 8}
        unaFuncion={miFuncion}
        unComponenteDeReact={OtroComponente}
      />
    </div>
  );
};

export default App;
```

En este ejemplo el componente `MiSuperComponente` recibirá por **props el objeto**:

```jsx
{
  unTexto: "Lorem ipsum",
  otroTexto: "Hola mundo",

  unNumero: 123,
  otroNumero: 8,

  unArray: [1, 2, 3],

  unObjeto: { uno: 1, dos: 2 },

  unBooleanoFalso: false,
  unBooleanoVerdadero: true,
  otroBooleanoVerdadero: true,
  otroBooleanoMas: true,

  unaFuncion: () => { // función que podemos ejecutar dentro de la hija
    console.log('Hola mundo')
  },

  unComponenteDeReact: const OtroComponente = () => { ... } // componente que podemos usar dentro de la hija
}
```

#### ¿Cómo se escriben las props en el componente madre?

Las props de tipo string que no guardamos en una variable o constante las ponemos entre comillas, por ejemplo `<MiSuperComponente unTexto="Lorem ipsum" />`.

Todo lo demás lo ponemos entre llaves de JSX: `<MiSuperComponente otroTexto={miTexto} />`.

#### ¿Cómo se escriben las props de tipo booleano?

Como curiosidad, en el ejemplo con `otroBooleanoVerdadero` vemos que **cuando desde el componente madre pasamos una prop sin valor, la hija recibe esta prop como un `true`**.

Los siguientes códigos son equivalentes:

```jsx
<MiSuperComponente otroBooleanoVerdadero />
```

```jsx
<MiSuperComponente otroBooleanoVerdadero={true} />
```

```jsx
<MiSuperComponente otroBooleanoVerdadero={miNumeroFavorito === 8} />
```

#### ¿Qué pasa si la madre no pasa una prop que la hija quiere usar?

Si en el componente madre no escribimos la prop `text` con el código:

```jsx
<ButtonBlue />
```

Y el componente hija quiere usar la prop `text` así:

```jsx
// Fichero src/components/ButtonBlue.jsx

const ButtonBlue = (props) => {
  return <button className="bg_blue">{props.text}</button>;
};

export default ButtonBlue;
```

Pasa lo que siempre pasa cuando una función espera un dato y no lo recibe: `props.text` será `undefined`.

Cuando React intenta pintar un dato y este es `undefined` o `null` lo sustituye por un string vacío porque asume que no queremos mostrar a la usuaria la palabra `undefined` en pantalla.

#### ¿Qué pasa si la madre pasa una prop a la hija que no espera?

Si en el componente madre escribimos una prop que no existe en la hija, como:

```jsx
<ButtonBlue text="Iniciar sesión" unTextito="Holi" />
```

El componente `ButtonBlue` recibirá el objeto `props` con

```js
{
  text: 'Iniciar sesión',
  unTextito: 'Holi'
}
```

pero en `ButtonBlue` no usaremos la `props.unTextito`.

Dicho de otra forma, desde la madre podemos pasar todas las props que queramos, pero es la hija la que decide qué props usa y cuáles ignora.

#### ¿Cómo usar las props en el componente hija?

**La responsabilidad de dónde y cómo usar las props es del componente hija** y debe decidir si usarlos para pintar un dato, calcular un valor, usarlo como clase de CSS... Un ejemplo más complejo del componente `ButtonBlue` sería así:

```jsx
<ButtonBlue
  text="Iniciar sesión"
  title="Pulsa aquí para iniciar sesión en Instagram"
  type="xl"
/>
```

Y el código de este componente podría ser:

```jsx
// Fichero src/components/ButtonBlue.jsx

const ButtonBlue = (props) => {
  // Comprobamos si nos pasan la prop type
  // - Si nos la pasan, typeClassName será button-type-xl
  // - Si no nos la pasan, typeClassName será un string vacío
  const typeClassName = props.type === undefined ? '' : `button-type-${props.type}`;

  // Usamos typeClassName para añadir otra clase al botón
  return <button className={`bg_blue ${typeClassName}`}
    {/* Usamos la prop title para ponerle el atributo título al botón */}
      title={props.title}>
      {/* Usamos la prop text para pintar el contenido del botón*/}
      {props.text}
    </button>;
};

export default ButtonBlue;
```

#### ¿Cómo es la comunicación entre un componente madre y una hija?

**El flujo de** información, datos o **props es unidireccional, de arriba hacia abajo**. La madre es la única que puede pasar información a la hija.

En próximas lecciones veremos una forma de hacer que el componente hija pase información a la madre, que se llama **lifting**.

### Conclusiones

Para pasar datos desde un componente madre a un componente hija con el objetivo de personalizarlo usamos las **props**.

* Desde el componente madre escribimos:

  ```jsx
  <NombreDelComponente
    nombreDeUnaProp="Valor de una prop de string"
    nombreDeOtraProp={valorDeLaProp}
  />
  ```
* En el componente hija **recibimos las props por el único parámetro de la función del componente; este parámetro es de tipo objeto**:

  ```js
  {
    nombreDeUnaProp: 'Valor de una prop de string',
    nombreDeOtraProp: valorDeLaProp // valor del tipo que sea, string, number, boolean...
  }
  ```

  * En la hija debemos indicar las props en la declaración del componente: `const miComponente = (props) => {...}`.
  * En la hija debemos usar las props con `props.nombreDeLaProp`.

### Ejercicios

#### 1. Personalizando componentes

Continuando con el ejercicio de la evaluación del módulo 1, vamos a crear un componente personalizable para los enlaces del menú. En el componente `Header` de tu ejercicio debes tener un código como el siguiente:

```html
<nav>
  <ul>
    <li class="menu-item">
      <a title="Blog" class="menu-link" href="https://adalab.es/blog/">
        Blog
      </a>
    </li>
    <li class="menu-item">
      <a title="Contacto" class="menu-link" href="https://adalab.es/contacto/">
        Contacto
      </a>
    </li>
  </ul>
</nav>
```

1. Debes crear un componente `Link.jsx` que contenga un `<li>` como los del código anterior.
   * Este componente debe recibir por props todo lo que sea personalizable.
2. A continuación debes importar y usar este componente en el componente `Header`.
3. Si consigues que tu página se siga viendo correctamente habrás *componentizado* bien tu proyecto.

#### 2. Abriendo enlaces en otra pestaña

Continuando el ejercicio anterior, queremos hacer que el link del blog se abra en una pestaña nueva, pero el link de contacto se abra en la pestaña actual. Para ello:

1. En el componente `Header` pasa una nueva prop a los componentes `Link`.
   * Llama a esta nueva prop `openInNewTab`.
   * Solo hay dos opciones: el link se puede abrir en una nueva pestaña o en la misma, por ello esta prop debe ser de tipo `boolean`.
2. Modifica el código del componente `Link` para que si recibe la prop `openInNewTab` a `true`, el link se renderice con el atributo `target="_blank"`.
3. Sabrás que has hecho bien el ejercicio si un enlace se abre en una pestaña nueva y el otro no.


# 3.3.4 Jerarquía y responsabilidad

### Jerarquía y responsabilidad de componentes

En esta mini lección te contamos las buenas prácticas en el funcionamiento los componentes hijas.

### Jerarquía de componentes

Cuando tengas que programar una página en React, lo primero que debes hacer es pintar en un papel la jerarquía de componentes, es decir, qué componentes debes crear y cuáles son los superiores e inferiores (quién es madre e hija de quién).

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-e681f777cb88ef092f4653f15a1d6498bc4201b1%2Freact_componentes_instagram.png?alt=media)

Para el ejemplo de Instagram podemos crear los siguientes componentes:

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-9ae07a90237f2568fec85c72acc81f69bb1bb85b%2Freact_jerarquia_de_componentes_instagram.png?alt=media)

Obviamente, esta es una propuesta que tú podrías hacer de otra forma. Incluso es posible que si lo programamos tengamos que cambiar esta jerarquía sobre la marcha porque se nos ha olvidado algo.

Lo importante es:

* Identificar todos los componentes.
* Identificar los componentes reutilizables y personalizables:
  * Definiendo cuáles son sus props.
  * – En este ejemplo hemos considerado que los botones **Iniciar sesión**, **Registrarse** y **Seguir** son el mismo componente al que se le pasa un **texto** y un **tipo** para personalizar su aspecto.
* Identificar cuáles son los componentes superiores o madre y cuáles los inferiores o hija.
* **Pensar, razonar y dibujar antes de ponernos a programar.**
  * Recuerda que programamos en el cerebro, en VS Code escribimos el código.

### ¿Cómo se relacionan los componentes?

* **Un componente nunca sabe quién es su madre:**
  * Por ejemplo en el diagrama, diferentes componentes `Button` tiene diferentes madres. Para los `Button` de la cabecera su madre es `Menu`. Para el `Button` de **Seguir** su madre es `ProfileInfo`.
* **Un componente nunca sabe quiénes son sus hermanas.**
* **Un componente sí sabe quiénes son sus hijas directas:**
  * Ya que en el componente madre debes importar los componentes hijas que vas a usar.
  * Ya que el componente madre debe saber qué props le debe pasar a sus hijas.
* **Un componente nunca sabe quiénes son sus nietas:**
  * Solo su hija sabe quiénes son sus nietas.

### ¿De qué es responsable un componente?

Cada componente es responsable solo de dos cosas:

* De renderizar bien su propio HTML.
* De pasar a sus hijas las props que estas necesitan.

**La responsabilidad de que una hija renderice el HTML correcto es cosa de la hija.** Por eso cuando hay un fallo es muy fácil saber quién está fallando y si el problema es que el componente está recibiendo mal las props desde su madre o si está renderizando mal su HTML.

### ¿Cómo funciona el estado en los componentes?

Cada componente puede usar el Hook `useState` y guardar su propio estado. Los datos que hay en el estado de un componente **no se comparten con el componente madre ni con los componentes hijas**.

Si queremos pasar un dato del estado de un componente madre a su hija tenemos que pasarlo por props. Puedes ver cómo funciona en este [ejemplo de CodeSandbox](https://ln.run/DX7GC).

### ¿Cuándo se renderiza cada componente?

Un componente se renderiza solo en tres momentos:

* Cuando arranca la página se renderizan todos los componentes.
* Cuando desde dentro de un componente cambia el estado usando el hook `useState`, ese componente se renderiza.
* Cuando un componente madre se renderiza y cambia las props que le pasa a una de sus hijas, esta hija se vuelve a renderizar usando las nuevas props.
  * Este ejemplo lo podemos ver con el código del apartado anterior.

### ¿Qué componente maneja la aplicación?

¿A qué nos referimos con manejar la aplicación? **El componente que maneja la aplicación es el que tiene todos los datos y decide a qué hijas les pasa por props cada dato.**

En casi todas las aplicaciones **el componente App es el que maneja la aplicación**, es la madre de dragones, la matriarca, la que parte y reparte, a la que todas escuchan y obedecen, la Rocío Jurado, la más grande...

Por ello casi siempre tenemos un componente App muy inteligente que sabe cómo debe funcionar la aplicación y un montón de componentes hijas que solo reciben datos y los pintan.

Solo hay una excepción a esta regla. **Si unos datos solo se tienen que compartir entre unos pocos componentes, no sería necesario que el componente App tuviera esos datos.**

Por ejemplo, si los datos del perfil de la usuaria solo se van a usar y pintar en el componente `<ProfileInfo />` y en sus descendientes, podríamos:

* Crear en `ProfileInfo` un `useEffect` para pedir los datos del perfil a una API.
* Guardar estos datos en un `useState` de `ProfileInfo`.
* `ProfileInfo` pasaría a cada hija las props que cada una necesitase.

Pero casi siempre acaba pasando que nos viene la diseñadora a mitad proyecto y nos pide que también se pinte en `Header` un dato de ese API. Y al final tenemos que agarrar el `useEffect` y el `useState` de `ProfileInfo` y moverlo a `App`.


# 3.3.5 Arquitectura

### Arquitectura de React

> **Nota:** esta mini lección es importante, os recomendamos leerla antes de hacer una prueba técnica para una empresa para comprobar si vuestro código cumple las buenas prácticas de arquitectura.

### ¿Qué es una arquitectura de software?

[Ana](https://twitter.com/nuskapi), una arquitecta y alumna de la Promo Hamilton definió en clase la arquitectura como **"el conjunto de normas, reglas, estructura y disposiciones que conforman un espacio... Vamos, lo que le da sentido a un lugar"**.

Pues eso mismo es la [arquitectura del software](https://es.wikipedia.org/wiki/Arquitectura_de_software), pero aplicado a la programación.

Cuando estamos aprendiendo a programar nuestra preocupación es que la página funcione tal y como se espera. Pero en el momento en el que tenemos un poco de experiencia y hacemos proyectos un poco más grandes nos empezamos a preocupar por cosas como:

* **Legibilidad o claridad:** que una nueva compañera (o nosotras mismas al cabo de unos meses) podamos leer el código de una aplicación y entender fácilmente lo que hace.
* **Mantenibilidad:** que podamos evolucionar el código y añadir nueva funcionalidad sin sufrir más que Frodo de vacaciones en Mordor.
* **Robustez:** que nuestra aplicación no falle. Y que al hacer un cambio en una punta de la página no se rompa algo en la otra punta.

Para ello, **las programadoras de un proyecto crean una convención de normas de código y se comprometen a cumplirlas**. Esto es la arquitectura.

Existen muchos tipos de arquitecturas de software y en el futuro tú podrás crear la tuya.

En el caso de React, han sido sus creadores quienes han definido unas normas que nosotras debemos seguir. En esta lección vamos a explicar cuáles son las principales normas de un proyecto en React.

### Jerarquía de componentes en React

Todo proyecto está dividido en ficheros y todo proyecto tiene un fichero principal que es el primero que se ejecuta. A partir de ahí los proyectos pueden tener o no una jerarquía, aunque casi siempre la tienen.

Y, "¿qué es una jerarquía?", te preguntarás. Pues la forma en la que unos ficheros usan y dependen de otros.

**La jerarquía de componentes en React es de árbol:**

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-c6f59ae8ee91c947ad220fc4be6cc2e8bc608eee%2Freact_arquitectura_jerarquia_de_componentes.png?alt=media)

En este ejemplo vemos que el fichero principal de la aplicación es `src/index.jsx`, que no es un componente de React, por eso no lo escribimos en mayúsculas y no exporta nada. Lo único que hace es arrancar la aplicación y añadirla al fichero `src/public/index.html`.

`src/index.jsx` importa y usa `src/components/App.jsx` que sí es un componente de React. `App` importa y usa otros componentes que a su vez importan y usan otros componentes.

Esta jerarquía implica que los ficheros que importan y usan otros ficheros son sus responsables, puesto que han decidido usarlos. En el ejemplo anterior es `Header` quien usa a `Logo` y a `Menu`.

Los componentes de React saben quiénes son sus hijas pero no quién es su madre. `Header` sabe que sus hijas son `Logo` y `Menu`, pero ni `Logo` ni `Menu` saben que su madre es `Header`.

**Esta jerarquía de árbol es la base de la arquitectura de React.**

### Flujo de datos en React

Una característica muy importante de cualquier proyecto es cómo fluyen los datos o cómo se comunican unos ficheros o componentes con otros. Hay muchos tipos de flujos.

Toda comunicación lleva implícita una responsabilidad. Y aquí surge la pregunta: ¿quién puede y tiene la responsabilidad de comunicarse con otros componentes?

En React **los datos fluyen a través de las ramas de este árbol** (las líneas moradas del siguiente dibujo).

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-7134fe4104a851008acf538f73c4b373a078db5f%2Freact_arquitectura_flujo_de_datos_de_react.png?alt=media)

Ya hemos dicho que un componente sabe quiénes son sus hijas, pero no su madre. Por eso **solo se puede comunicar voluntariamente con sus hijas dándoles información a través de las props**. Para que una hija se comunique con su madre, debe ser la madre la que también le facilite una función para hacer lifting.

Para que conozcas cómo funciona otra librería y lo puedas comparar con React, te mostramos a continuación el flujo de datos de Redux:

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-de362f2c2e6b980dc21ecfed5af43376a65f0244%2Freact_arquitectura_flujo_de_datos_de_redux.png?alt=media)

[Redux](https://es.redux.js.org/) es una librería que amplía las funcionalidades de React y que tiene tres tipos de ficheros: las Views (que son los componentes de React), las Actions (que se parecen un poco a los servicios) y los State (que son los que manejan los datos).

En un proyecto de Redux los datos, en vez de fluir a través de las ramas del árbol de componentes, fluyen en círculo. Es decir, cuando la usuaria rellena un input en una `View`, ésta le pasa el dato a un `Action` que los procesa y después de lo envía a un `State` para que se almacene.

Lo que queremos explicar es que cada arquitectura tiene sus características y dichas características se adaptan bien a un tipo de aplicación y mal a otro tipo de aplicación. No existe la arquitectura perfecta para todas las aplicaciones como no existe la casa perfecta para todas las personas.

### ¿Dónde guardamos los datos de React?

Ya sabemos que los datos de React los guardamos en el estado. Pero, ¿de qué componente?

Por definición debemos poner los estados de React en el **componente superior común** a los sub-componentes que necesitan dicho dato.

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-60286497dcfa7f5182613c124eaf09ed1a797679%2Freact_arquitectura_donde_guardar_los_datos.png?alt=media)

Por ejemplo, en una aplicación como la del diagrama:

* Si necesitamos un dato solo en `Menu` lo guardaremos en el estado de `Menu`.
* Si necesitamos un dato en `Menu` y en `Logo` lo guardaremos en el estado de `Header`, ya que es el ancestro común.

Lo que suele ocurrir es que al final guardamos todos los datos en `App`, que es el ancestro común a todos los componentes.

Te recomendamos que cada vez que tengas que añadir un estado a tu aplicación pienses qué componentes lo necesitan.

### Tipos de componentes en React

En React hablamos de dos tipos de componentes: los listos y los... menos listos.

Como hemos comentado, la jerarquía de componentes es en forma de árbol y al igual que pasa en una gran familia, la matriarca es la más sabia. En React el componente más listo de todos es `App` porque guarda toda (o casi toda) la información.

`App` es la que tiene toda la información en sus estados y la que recibe toda la información de sus descendientes a través de lifting, por lo tanto también conoce todas las acciones que hace la usuaria. Es en `App` donde solemos colocar toda la [lógica de negocio](https://es.wikipedia.org/wiki/L%C3%B3gica_de_negocio), es decir, todo el código que realiza las funcionalidades propias de la web. `App` es la más lista.

El resto de componentes son... cómo lo podemos decir sin ofender... un poco tontos de más. Normalmente les llamamos componentes **dummies**, ya que los insultos en inglés duelen menos.

Estos componentes suelen realizar funciones muy sencillas, como pintar cosas y escuchar eventos de la usuaria. Se encargan de funcionalidades muy concretas y aisladas. **No tienen la visión global de la aplicación.**

### Servicios en React

Existen servicios para atacar a la API y para almacenar datos en el local storage, asi como otros más. Los servicios son como ficheros para agrupar funcionalidad que tienen características comunes. ¿Cuáles son estas características?

* **Aislar código:** nos llevamos los `fetch` a los servicios de la API porque no nos aporta nada que estén en `App`. Añaden complejidad al fichero `App.jsx` y complican la lectura.
* **Reutilizar código:** si tuviéramos que almacenar datos en el local storage desde varios componentes, no sería lógico repetir el código `localStorage.setItem('data', JSON.stringify(data))` en varios sitios. Es mejor guardarlo en un servicio y reutilizarlo en varios componentes. De esta forma o falla siempre (y nos damos cuenta en seguida) o no falla nunca. Un código que solo falla algunas veces es muy molesto.

En tus proyectos puedes crear tantos servicios como quieras. Por ejemplo, es muy normal crear servicios para guardar el código que nos ayuda a manipular fechas o gestionar las traducciones de una página multiidioma.

**Cualquier componente de React puede utilizar cualquier servicio.**

### Arquitectura en proyectos grandes

Supongamos que tenemos que programar un proyecto grande como la web de GitHub, que tiene muchísima funcionalidad relativa a repositorios, proyectos, usuarios... Tendríamos una jerarquía de componentes parecida a esta:

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-189f4c4e109fb861f282d4169cac0db92b8e601b%2Freact_arquitectura_proyectos_grandes.png?alt=media)

El problema de un proyecto como GitHub es la ingente cantidad de datos y funcionalidades que maneja. Si tuviéramos que meter todos estos datos únicamente en `App` nos quedaría un fichero de varios miles de líneas muy difícil de leer.

¿En estos casos qué hacemos? Pues varias cosas:

* Usamos el componente `App` para:
  * Almacenar la poca información que se comparte entre los componentes que son `Repos`, `Projects` y `User`.
* Considerar a los componentes `Repos`, `Projects` y `User` como pseudo principales, es decir, como sub aplicaciones dentro de una aplicación mayor.
  * Por ello el componente `Repos` almacenará todos los datos relativos a los repositorios, tendrá la lógica de negocio sobre cómo se comportan los repositorios, tendrá un montón de hijas, nietas...
  * Y lo mismo para los componentes `Projects` y `User`.


# 3.3.6 Sass de los componentes

### Sass en los componentes de React

En esta mini lección aprenderemos cómo añadir estilos Sass a cada componente de React.

> **Nota:** esta lección es fácil, léela en el momento que vayas a meter estilos en tus componentes.

### Cada componente debe tener su fichero de estilos Sass

**En un proyecto normal de JavaScript solemos meter todo el código Sass en el fichero principal de Sass `main.scss`.** Este fichero es el que se encarga de importar el resto de partials de Sass: `_variables.scss`, `_reset.scss`, `_header.scss`, `_footer.scss`...

En React no trabajamos así. **En React cada componente debe importar su propio fichero Sass.** Por ello:

* El componente `App.jsx` debe importar el fichero `App.scss` que debe tener los estilos que solo afectan a las etiquetas HTML escritas en el componente `App.jsx`.
* El componente `Header.jsx` debe importar el fichero `Header.scss` que debe tener los estilos que solo afectan a las etiquetas HTML escritas en el componente `Header.jsx`.
* Y así sucesivamente.

**De esta forma cada componente importa o usa solo los estilos que necesita.**

La mejor forma de razonarlo es: si yo me llevara el componente `Header.js` con su respectivo `Header.scss` a otro proyecto, ¿se seguiría viendo igual la cabecera de la página? Si la respuesta es sí es que lo estás haciendo bien.

Por ello en un proyecto de React no solemos tener el fichero principal de Sass `main.scss`.

### ¿Qué hacemos con los ficheros comunes como variables.scss?

Si un fichero Sass, por ejemplo `Header.scss` necesita usar una de las variables que están en `variables.scss`, lo importamos dentro de `Header.scss`. Y ya estaría.

Si otro fichero por ejemplo `Footer.scss` necesita usar una de las variables que están en `variables.scss`, lo importamos dentro de `Footer.scss`. **Podemos importar un fichero Sass desde varios ficheros Sass.**

### ¿Y si no lo hacemos así?

Si no sigues esta forma de trabajar y por ejemplo solo importas el `App.scss` en `App.jsx`, y este `App.scss` importa el resto de partials, no pasa nada. Los estilos se van a seguir viendo bien siempre que estén importados todos los Sass que necesitas.

Pero siento decirte que entonces ya no te condecoraremos con la medalla de **exquisite programmer** y te compararán con [esta persona](https://github.com/Adalab/curso-intensivo-fullstack-recursos/blob/main/images-materiales/react_donald_trump_frog.png).

### Nomenclatura de los ficheros

Ya que los componentes de React usan la nomenclatura camelCase con la primera en mayúscula, **debemos usar la misma nomenclatura para los ficheros de Sass**.

Si el componente es `src/components/HeaderSearch.jsx`, su correspondiente Sass será `src/styles/HeaderSearch.scss`. Así es muy fácil leer el código.

> **Nota:** la nomenclatura camelCase con la primera en mayúscula se llama [PascalCase](https://es.wikipedia.org/wiki/Camel_case), en honor al lenguaje Pascal para aprender a programar. Más info en <https://es.wikipedia.org/wiki/Pascal\\_(lenguaje\\_de\\_programación)>.

Y por último, en React no hace falta poner el guión bajo `_` delante de los ficheros de Sass, así que no lo pongas.

### ¿Y si no usamos Sass y solo usamos CSS?

Pues más de lo mismo. Te recomendamos dividir tu código en pequeños ficheros de CSS e importarlos en su correspondiente componente de React. Por ello el componente `src/components/HeaderSearch.jsx` debería importar los estilos de `src/styles/HeaderSearch.css`.

### Conclusiones

Para utilizar Sass en tus componentes lo único que debes hacer es importar cada partial de Sass en su correspondiente componente de React.

Lo demás es todo igual.


# 3.3.7 Depurar props

### Depurar props en React

En esta mini lección explicamos cómo saber qué props está recibiendo una hija.

### Debugger y console

Te recomendamos que si quieres saber qué props está recibiendo un componente pongas un `debugger` o un `console` en la primera línea del componente hija. Por ejemplo:

```jsx
// Fichero src/components/ButtonBlue.jsx

const ButtonBlue = (props) => {
  debugger;
  console.log(props);
  return <button className="bg_blue">{props.text}</button>;
};

export default ButtonBlue;
```

### Extensión React DevTools

Como ya sabemos, el equipo de React ha creado [**una extensión de Chrome**](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es) **para facilitarnos la vida cuando estamos programando**.

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-38ba73a5d012fbf8cc5afd916560164b56b0ef52%2Freact_devtools_components_props.png?alt=media)

En DevTools > Components vemos:

* La jerarquía de componentes de nuestra aplicación.
* Si pinchas en un componente (ButtonBlue en la imagen) ves las props que está recibiendo este componente.
  * Incluso puedes cambiar a mano desde aquí las props y verás que tu pagina se actualiza.

### Ejercicios

#### 1. Cambiando las props desde DevTools

Con este ejercicio queremos que te acostumbres a usar DevTools > Componentes para ver qué información está recibiendo cada componente.

1. Abre cualquier ejercicio de clase a e inspecciona la jerarquía de componentes que has creado.
2. Inspecciona las props de los componentes.
   1. Desde el propio DevTools > Components cambia la prop de un componente.


# 3.3.8 Prop types

### Prop types

En esta mini lección aprenderemos a añadir a nuestros componentes una herramienta de calidad de código que nos permite comprobar si los tipos de props son correctos.

### ¿Para qué sirven las prop types?

Ya sabemos que un componente puede recibir props. También sabemos que **la madre de dicho componente es quien decide qué props pasar** y también decide qué valores pasar por props a su hija.

Imaginemos que tenemos el componente `Input`:

```jsx
// Fichero src/components/Input.jsx

const Input = (props) => {
  const handleInput = (ev) => {
    props.handleChange({
      name: props.inputName,
      value: ev.target.value,
    });
  };

  return (
    <>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input
        id={props.id}
        type={props.inputType}
        name={props.inputName}
        placeholder={props.inputPlaceholder}
        value={props.inputValue}
        onChange={handleInput}
      />
    </>
  );
};

export default Input;
```

Como ves, en este componente estamos esperando las props:

* `id`, `type`, `name`, `placeholder`, `value` de tipo string.
* `onChange` de tipo función.

¿Qué pasaría si la madre decide pasar datos erróneos? Como por ejemplo:

```jsx
// Parte del fichero scr/components/App.jsx

<Input
  id={123}
  labelText={false}
  inputName={handleChange}
  handleChange="Calle Gran Vía"
/>
```

O ¿qué pasaría si a la madre se le olvida pasar alguna prop que es importante?

Pues que la página fallará estrepitosamente. ¡¡¡Caos y destrucción!!!

Para evitar esto tenemos las prop types. **Las prop types son una herramienta que nos permite comprobar y validar, mientras estamos programando, si las pros que recibe un componente son correctas. Si no lo son, nos muestra un error en consola.**

Hay que tener en cuenta que a menudo una programadora desarrolla un componente y otra programadora distinta lo usa en ese o en otro proyecto. Por eso **es muy útil una herramienta que nos ayuda a saber cómo debemos usar un componente**. Si no tuviéramos esta herramienta, nos veríamos obligadas a leer el código del componente o preguntar a su creadora para saber cómo usarlo.

### ¿Cómo usar las prop types?

El primer paso para usarlas en un proyecto de React es instalarlas con:

```bash
npm install prop-types
```

> **Nota:** recuerda instalar este paquete de NPM también en tu React Starter Kit.

El segundo paso es importarlas en los componentes que las quieras usar, con:

```jsx
import PropTypes from "prop-types";
```

El último paso es usarlas con el código:

```jsx
NombreDeMiComponente.propTypes = {
  nombreDeMiPropDeTipoStringOpcional: PropTypes.string,
  nombreDeMiPropDeTipoStringObligatoria: PropTypes.string.isRequired,
};
```

Veamos el ejemplo del componente Input con sus prop types:

```jsx
// Fichero src/components/Input.js

// Que no se te olvide importar las prop types
import PropTypes from "prop-types";

const Input = (props) => {
  const handleInput = (ev) => {
    props.handleChange({
      name: props.inputName,
      value: ev.target.value,
    });
  };

  return (
    <>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input
        id={props.id}
        type={props.inputType}
        name={props.inputName}
        placeholder={props.inputPlaceholder}
        value={props.inputValue}
        onChange={handleInput}
      />
    </>
  );
};

// Estas son las prop types
// Fíjate en los tipos de las props y si son o no obligatorias
Input.propTypes = {
  id: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string,
  inputValue: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
```

En la [documentación de React](https://es.reactjs.org/docs/typechecking-with-proptypes.html#proptypes) verás que podemos especificar un montón de tipos de props, como `string`, `number`, `boolean`, `any` (que significa que puede ser de cualquier tipo), función, `array`, `object`, un componente de React... Y también si son obligatorias o no.

Hasta que domines las prop types te recomendamos que mires esta documentación con frecuencia, sobre todo cuando tengas que comprobar tipos complejos de props, como objetos o arrays que dentro tienen un string, un number, una función...

### ¿Cómo funcionan las prop types?

Cuando desde el componente madre **no nos pasan una prop que hemos marcado como obligatoria o nos pasan una prop de un tipo erróneo,** React muestra un aviso en DevTools > Console que empieza con el texto **Failed prop type**:

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-033e82e55a7d693fd5069a885ae0a0323b9c3729%2Freact_prop_types_error_1.png?alt=media)

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-3e226d918c39170a545a0157b1930de754f2a4ce%2Freact_prop_types_error_2.png?alt=media)

Este mensaje es un warning, esto quiere decir que no es un error. React no parará la ejecución de la aplicación. Cuando lo corrijas el aviso desaparecerá.

Algo importante es que **este aviso solo aparece en el entorno de desarrollo**. Es decir, solo aparece cuando estamos trabajando en nuestro ordenador. Si **no** lo solucionamos y publicamos la página en GitHub Pages, el aviso no aparecerá. React no quiere que las usuarias de todo el mundo abran el DevTools de nuestra página y vean que no somos programadoras elegantes.

Te recomendamos que poco a poco vayas configurando las prop types dentro de todos tus componentes que reciban props. Y por su puesto, cuando hagas una prueba técnica para una empresa no entregues ningún componente sin sus prop types.

Pensar en facilitarle la vida a tus compañeras te ayuda a ser mejor programadora, te ayuda a anticiparte a futuros errores.

### Conclusiones

Para usar prop types hay que:

1. Instalar la dependencia prop-types:

   ```bash
   npm install prop-types
   ```
2. Importar prop types en un componente:

   ```jsx
   import PropTypes from "prop-types";
   ```
3. Configurar las prop types:

   ```jsx
   NombreDelComponente.propTypes = {
     nombreDeLaPropOpcional: PropTypes.string,
     nombreDeLaPropObligatoria: PropTypes.string.isRequired,
   };
   ```
4. Leer la [documentación de React sobre las prop types](https://es.reactjs.org/docs/typechecking-with-proptypes.html#proptypes).
