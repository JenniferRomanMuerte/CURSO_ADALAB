# 3.1.6 React y Sass

### React con Sass

### Uso de Sass en un proyecto de React

En esta mini lección vamos a aprender a meter estilos con Sass en un proyecto de React.

Todo lo que has aprendido anteriormente sobre Sass lo vas a poder aplicar a un proyecto de React.

> **Nota:** esta lección es importante.

### Estilos de Sass con React

Por defecto React no trabaja con Sass. Así que lo primero que hay que hacer es instalarlo y cambiar los ficheros CSS por Sass.

1. **Instala Sass:**
   1. Abre en VS Code tu `react-starter-kit`.
   2. Si tu proyecto no tiene la carpeta `node_modules/` ejecuta en la terminal `npm install`.
   3. Ejecuta en la terminal `npm install node-sass` y `npm install sass`.
      1. Esto añadirá al `package.json` de este proyecto la dependencia `node-sass` y `sass`. Abre este fichero y verás qué hay esta nueva dependencia.
   4. A partir de ahora tu proyecto siempre podrá trabajar con Sass.
2. **Cambia el fichero CSS por Sass:**
   1. Cambia la extensión del fichero `src/styles/App.css` por `src/styles/App.scss`.
   2. Edita el fichero `src/components/App.jsx`:
      1. Cambia la línea `import '../styles/App.css';` por `import '../styles/App.scss';`.
3. **Arranca el proyecto para ver que todo sigue funcionando igual.**

Como Sass es más potente que CSS, te recomendamos usar siempre Sass en tus proyectos de React.

### Error: Cannot find module sass

Si en algún proyecto antiguo de React usas Sass y al arrancarlo te da un error del tipo `Cannot find module 'sass'`, debes ejecutar `npm install node-sass` en la terminal y a partir de ese momento React sí arrancará.

### ¿Qué Sass puedo usar en React?

Todo. Puedes usar partials e imports de Sass, variables, anidaciones, mixins, funciones...

Lo único que hace React es importar un fichero de Sass y lo que haga ese fichero es responsabilidad tuya y de Sass.

React entiende tus ficheros Sass y sabe convertirlos a CSS porque le hemos instalado `node-sass`.

Para poner una clase en una etiqueta de HTML en el fichero `src/components/App.jsx` también debes usar `className` como hemos explicado anteriormente.

### Sass en el fichero index.html

En la lección de React y CSS decíamos que sí se podían usar hojas de estilo CSS en el fichero `public/index.html` pero no lo recomendábamos porque React no lo gestionaba. Pues bien, **no podemos usar Sass** en ese fichero porque React no convierte los ficheros Sass de `public/index.html` a CSS y nadie más lo hace. Debemos recordar que Sass no funciona en los navegadores, estos solo entienden CSS o Sass convertido a CSS.

### Conclusiones

Para añadir estilos Sass en React hay que:

1. Instalar en el proyecto Sass con `npm install node-sass`.
2. Importar el fichero de Sass en las primeras líneas del componente `src/components/App.jsx` con la línea `import '../styles/nombre-de-fichero.scss';`
3. Añadir las clases CSS a tus etiquetas HTML con el atributo `className`.

### Ejercicios

#### 1. Crea un proyecto en React: Sass

En este ejercicio queremos usar código Sass en un proyecto de React. Para ello vamos a continuar el ejercicio de la mini lección anterior, el de la evaluación intermedia.

Sigue los siguientes pasos:

1. Instala Sass en tu proyecto, si es que no lo has hecho ya.
2. Cambia la extensión de los ficheros `.css` por `.scss`.
   * Esto te mostrará un error en el navegador. Léelo y soluciona el error.
3. Mejora el código que tienes en `src/styles/App.scss` para usar funcionalidades de Sass como la anidación.
4. Divide el código de `src/styles/App.scss` en ficheros más pequeños para probar a usar los `import` de Sass.
5. Cuando no haya errores en consola y tu página muestre los estilos bien, habrás terminado.
