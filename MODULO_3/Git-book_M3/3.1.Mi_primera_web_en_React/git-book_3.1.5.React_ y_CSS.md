# 3.1.5 React y CSS

### React con CSS

### Uso de estilos en un proyecto de React

En esta mini lección vamos a aprender a meter estilos en un proyecto de React, primero con CSS, más adelante con Sass.

Todo lo que has aprendido anteriormente sobre maquetación lo vas a poder aplicar a un proyecto de React.

> **Nota:** esta lección es importante.

### Estilos de CSS con React

Como ya has aprendido en el módulo de maquetación, para dar estilos a una etiqueta HTML hay que hacer dos cosas:

* Crear una clase de CSS en el HTML.
* Crear la misma etiqueta en el fichero de CSS y escribir los estilos que quieras.

Sigue los siguientes pasos para dar estilos a tu página de React:

1. Crea un ejercicio nuevo a partir de tu `react-starter-kit`.
2. Arráncalo con `npm run dev`.
3. Edita el fichero `src/components/App.jsx`.
4. Crea un par de etiquetas con una clase, por ejemplo:

   ```jsx
   // Fichero src/components/App.jsxx
   import '../styles/App.css';

   function App() {
     return (
       <div>
         <header>
           <h1 class='title'>Título de mi página</h1>
         </header>
       </div>
     );
   }

   export default App;
   ```
5. Guarda el fichero y **mira el error que pone en DevTools > Console**.

Como habrás adivinado, en React no podemos usar el atributo `class`, está prohibido. En su lugar **vamos a usar el atributo `className`**.

1. Sustituye el atributo `class` por `className` para que tu código sea:

   ```jsx
   // Fichero src/components/App.jsx
   import '../styles/App.css';

   function App() {
     return (
       <div>
         <header>
           <h1 className='title'>Título de mi página</h1>
         </header>
       </div>
     );
   }

   export default App;
   ```
2. Guarda y refresca la página en tu navegador; verás que el error ha desaparecido.
3. Si inspeccionas el HTML verás que React ha cambiado tu `className` por `class`, ya que el navegador no entiende `className` pero sí `class`.

Ya tienes creada la etiqueta en tu HTML. Ahora nos falta darle estilos.

1. Edita el fichero `src/styles/App.css`. Si este fichero no existía:
   1. Créalo.
   2. Añade a la primera línea de `src/components/App.jsx` la línea `import '../styles/App.css';`.
   3. A esto le llamamos importar estilos. Tenemos que hacerlo con cualquier fichero que creamos en la carpeta `src/styles/`.
2. Añade al fichero `src/styles/App.css` el código:

   ```css
   .title {
     color: red;
   }
   ```
3. Guarda y verás el título en rojo en tu página.

#### ¿Por qué a React no le gusta el atributo class?

En HTML podemos poner muchos atributos a nuestras etiquetas, como los siguientes:

```html
<section class="contact">
  <form id="form">
    <label for="user-email">Email</label>
    <input
      type="text"
      id="user-email"
      name="email"
      value="mari@adalab.es"
      placeholder="Escribe aquí tu email"
    />
    <input type="submit" value="Enviar" />
  </form>
</section>
```

En React estamos escribiendo código HTML dentro de un fichero JS. Los atributos que son palabras reservadas en JS no los podemos poner dentro del código de React.

`class` es una palabra reservada de JS para un concepto que se llama clases, que explicaremos en el futuro. A su vez `for` es otra palabra reservada para hacer nuestros amados bucles.

El resumen es que algunos atributos de HTML no se pueden usar en React. Por suerte son muy pocos y cuando ponemos alguno, **React nos avisa a través de la consola de DevTools de cuál no podemos usar** y por cuál lo debemos sustituir. React es buena gente.

### ¿Qué CSS puedo usar en React?

Todo. Si quieres usar estilos de clase hazlo, si quieres usar estilos de etiqueta o de id hazlo, aunque ya sabes que no lo recomendamos. Si quieres importar fuentes hazlo. Si quieres usar variables de CSS, hazlo también.

Si quieres usar `background-image` hazlo, pero recuerda que la ruta que pongas debe apuntar al fichero de una imagen que exista en tu proyecto, y nos gusta que las imágenes estén en `src/images/`. Un ejemplo sería:

```css
.header {
  background-image: url('../images/header-background.png');
}
```

**React ni se preocupa ni gestiona estilos, eso es responsabilidad tuya como maquetadora.**

### Hojas de estilo en el fichero index.html

Otra forma de añadir estilos a una aplicación de React es añadirlos en el fichero `public/index.html` con la típica línea `<link rel="stylesheet" href="%PUBLIC_URL%/styles.css">` o `<link rel="stylesheet" href="./styles.css">`. Pero estos estilos no los gestionará React. Por ello no recomendamos usarlos. Cuando tengas más experiencia con React entenderás en qué casos sí es buena práctica poner estilos en el `index.html`.

### Conclusiones

Para añadir estilos CSS en React hay que:

1. Importar el fichero de estilos en las primeras líneas del componente `src/components/App.js` con la línea `import '../styles/nombre-del-fichero.css';`
2. Añadir las clases CSS a tus etiquetas HTML con el atributo `className`.

### Ejercicios

#### 1. Crea un proyecto en React: HTML

Empezaremos por crear una página sencilla en React. Para ello elige una de las páginas que hayas maquetado durante el curso (te recomendamos la evaluación intermedia del módulo de HTML y CSS).

> **Nota:** por ahora no vamos a trabajar con CSS ni con las imágenes.

Sigue los siguientes pasos:

1. Crea una copia de tu `react-starter-kit` y arráncala.
2. No hace falta decir que debes abrir DevTools > Console para ver los errores y mensajes que nos muestra React.
3. Abre el fichero `scr/components/App.jsx`:
   1. Copia el código HTML de tu evaluación intermedia.
   2. Pega el código copiado dentro del retorno de la función `App`.
4. Comprueba los cambios en tu navegador.
   * Corrige cada uno de los errores que se muestran en la consola.
   * React refresca la página después de cada cambio, pero no limpia la consola. Te recomendamos que de vez en cuando refresques la página para limpiar la consola.
5. Cuando no haya errores en consola y tu página muestre el contenido HTML, habrás terminado.

#### 2. Crea un proyecto en React: CSS

Partiendo del ejercicio anterior vamos a meter los estilos en el proyecto. Sigue los siguientes pasos:

1. Abre todos los ficheros CSS de tu proyecto de React.
   1. Borra todos los estilos porque no queremos que interfieran con los nuevos estilos que vas a meter.
   2. Copia los estilos del proyecto antiguo.
   3. Pégalos en `src/styles/App.css`.
2. Recuerda que en `src/components/App.jsx` debe estar importada la hoja de estilos con `import '../styles/App.css';`
   * Si hay errores en la consola soluciónalos.
3. Si tu navegador muestra los estilos correctamente, ya has terminado.
