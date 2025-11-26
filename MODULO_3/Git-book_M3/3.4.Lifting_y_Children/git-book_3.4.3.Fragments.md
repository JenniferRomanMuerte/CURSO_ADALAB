# 3.4.3 Fragments

### Fragments en React

Los fragments son una herramienta que nos da React para facilitarnos la vida a la hora de crear las etiquetas HTML de una página.

### ¿Cuál es el problema?

Hasta ahora todos los componentes que hemos creado tenían dos limitaciones:

#### 1. Un componente solo puede retornar una etiqueta

**Un componente solo puede retornar una etiqueta HTML principal**, y dentro todas las hijas que quiera.

Esto está bien:

```jsx
function App() {
  return (
    <div>
      <h1>Un título</h1>
      <h2>Un subtítulo</h2>
    </div>
  );
}
```

Esto **no** está bien:

```jsx
function App() {
  return (
    <h1>Un título</h1>
    <h2>Un subtítulo</h2>
  );
}
```

#### 2. Un componente debe retornar una etiqueta de algún tipo

Queremos programar un menú, pero queremos que esté dividido en dos componentes:

* `<Menu />`: que tiene algunos de los links del menú.
* `<MenuUser />`: importado dentro de `<Menu />` y tiene los links del área de usuario.

El código de estos componentes sería:

```jsx
// Fichero src/components/Menu.js

import MenuUser from "./MenuUser";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/home">Inicio</a>
        </li>
        <li>
          <a href="/products">Productos</a>
        </li>
        <MenuUser />
      </ul>
    </nav>
  );
};

export default Menu;
```

```jsx
// Fichero src/components/MenuUser.jsx

const MenuUser = () => {
  return (
    <div>
      <li>
        <a href="/signup">Regístrate</a>
      </li>
      <li>
        <a href="/login">Login</a>
      </li>
    </div>
  );
};

export default MenuUser;
```

Debemos escribir sí o sí el `<div>` principal del fichero `MenuUser.js` porque un componente debe devolver una única etiqueta principal. Pero el código que React genera es una 💩 con unos ojos enormes:

```html
<nav>
  <ul>
    <li><a href="/home">Inicio</a></li>
    <li><a href="/products">Productos</a></li>
    <div>
      <li><a href="/signup">Regístrate</a></li>
      <li><a href="/login">Login</a></li>
    </div>
  </ul>
</nav>
```

Como ves, hemos generado un `<ul>` con un hijo directo que no es un `<li>` sino un `<div>`. Fatal error de semántica HTML, hemos fracasado estrepitosamente como maquetadoras. ¡¡¡Adiós, mundo cruel!!!

React nos obliga a trabajar así y nos genera el problema, **pero también nos da la solución**.

### Fragment

Cuando en el primer nivel del HTML retornado por un componente:

* No queremos usar una etiqueta concreta, o
* Queremos retornar varias etiquetas hermanas

Usamos los [Fragments de React](https://es.reactjs.org/docs/fragments.html).

Cambiaríamos el código:

```jsx
// Fichero src/components/MenuUser.jsx (malo)

const MenuUser = () => {
  return (
    <div>
      <li>
        <a href="/signup">Regístrate</a>
      </li>
      <li>
        <a href="/login">Login</a>
      </li>
    </div>
  );
};

export default MenuUser;
```

Por el código:

```jsx
// Fichero src/components/MenuUser.jsx (bueno)

const MenuUser = () => {
  return (
    <>
      <li>
        <a href="/signup">Regístrate</a>
      </li>
      <li>
        <a href="/login">Login</a>
      </li>
    </>
  );
};

export default MenuUser;
```

Al sustituir el `<div>` de apertura por `<>` y el `</div>` de cierre por `</>`, el código que genera React es canela en rama:

```html
<nav>
  <ul>
    <li><a href="/home">Inicio</a></li>
    <li><a href="/products">Productos</a></li>
    <li><a href="/signup">Regístrate</a></li>
    <li><a href="/login">Login</a></li>
  </ul>
</nav>
```

Las etiquetas vacías `<>` y `</>` se llaman fragments.

### Conclusiones

Cuando no queremos retornar una única etiqueta en un componente debemos usar el fragment de React. Esta **es una pseudo etiqueta HTML que solo existe para React** y que **no genera ninguna etiqueta en el HTML resultante**.
