# 3.1.7 React y las imágenes

### React y las imágenes

En esta mini lección aprenderemos a usar imágenes en React con la etiqueta `<img />`.

Si quieres usar imágenes de `background` en CSS o Sass, lee las lecciones de React y CSS o React y Sass, ya que React no gestiona este tipo de imágenes.

> **Nota:** esta lección es importante.

### Uso de imágenes locales en React

React nos ayuda a trabajar con las imágenes locales, las que tenemos guardadas en nuestro proyecto. Si queremos usarlas tenemos que:

1. Añadir nuestro fichero de imagen a la carpeta `src/images/` por ejemplo en `src/images/logo.jpg`.
2. Importar la imagen en el componente `src/components/x` escribiendo en las primeras líneas del fichero el código `import logo from '../images/logo.jpg';`, donde:
   * `logo` será el nombre de una constante que **contiene la ruta relativa de la imagen**.
   * `'../images/logo.jpg';` es la ruta relativa entre el componente `App.jsx` y el fichero de la imagen.
3. Usar la imagen, es decir, la constante que contiene su ruta relativa, en el HTML de nuestro componente, por ejemplo:
   * `<img src={logo} title="Adalab" alt="Logo de Adalab" />`

Y ya estaría.

#### Cosas que tener en cuenta

* En el componente `App.jsx` la palabra `logo` puede ser la que queramos. Si sustituimos `logo` por `pepino` en todos sitios también funcionará. Nos quedaría el siguiente código:

  ```js
  // Fichero src/components/App.jsx
  import pepino from '../images/logo.jpg';

  ...

  <img src={pepino} title="Adalab" alt="Logo de Adalab" />
  ```
* La palabra `logo`, o `pepino` es una constante que guarda la ruta relativa de la imagen. Es una ruta rara, porque React la gestiona de forma especial. Si después de la línea `import logo from '../images/logo.jpg';` escribes `console.log(logo);` verás la ruta relativa que usa React.
* Normalmente el valor del atributo `src="ruta-relativa-de-la-imagen"` lo poníamos con comillas. Aquí lo ponemos entre llaves y sin comillas: `src={logo}`. Esto se debe a que estamos usando JSX que explicaremos en detalle en las próximas lecciones.
* Si usas la ruta relativa entre comillas, React no gestionará la imagen, es decir, pensará que te estás saltando a React voluntariamente y si da un error, React no te ayudará.
* La etiqueta imagen debe estar cerrada, es decir, podemos escribir:
  * Etiqueta de apertura y cierre: `<img src={logo} title="Adalab" alt="Logo de Adalab"></img>`
  * **O etiqueta autocerrada (recomendada):** `<img src={logo} title="Adalab" alt="Logo de Adalab" />`
  * Pero **no** podemos escribir una etiqueta sin cerrar, esto nos dará error: `<img src={logo} title="Adalab" alt="Logo de Adalab">`

React nos ayuda a escribir un mejor código, por lo que no permite ninguna etiqueta de ningún tipo sin cerrar. Las etiquetas tienen que tener apertura y cierre o estar auto cerradas con el `/>`.

### Uso de imágenes de Internet con React

Si en React quieres utilizar una imagen que está en Internet y no la quieres descargar en la carpeta `src/images/` puedes hacerlo.

Por ejemplo, en uno de nuestros repos de GitHub en Internet tenemos esta imagen:

![](https://beta.adalab.es/resources/images/adalab-logo-128x128.png)

Esta imagen está en la ruta absoluta <https://beta.adalab.es/resources/images/adalab-logo-128x128.png>. Para usar esta ruta en React haríamos:

```html
<img
  src="https://beta.adalab.es/resources/images/adalab-logo-128x128.png"
  title="Página de Adalab"
  alt="Logo de Adalab"
/>
```

En este caso la imagen está en Internet y no en nuestro proyecto, por ello aunque quisiera React no podría gestionarla. **Así que en este caso sí la ponemos entre comillas.**

### Conclusiones

Para usar imágenes de nuestro proyecto y que React nos ayude a gestionarlas tenemos que:

* Importar la imagen con `import logo from '../images/logo.jpg';`.
* Usar la imagen donde queramos con `<img src={logo} title="Adalab" alt="Logo de Adalab" />`.
* Usar llaves en vez de comillas en el atributo `src={logo}`.

Para usar imágenes de Internet y que React no las gestione tenemos que:

* Usar la imagen con comillas en el atributo `src` como por ejemplo:

  ```html
  <img
    src="https://dominio.com/ruta-de-la-imagen.jpg"
    title="Página de Adalab"
    alt="Logo de Adalab"
  />
  ```

Todas las etiquetas de imagen deben estar cerradas o auto cerradas.

### Ejercicios

#### 1. Crea un proyecto en React: Imágenes

Es el momento de meter imágenes locales en tu proyecto de React. Para ello vamos a continuar el ejercicio de la mini lección anterior, el de la evaluación intermedia.

A lo mejor en la evaluación intermedia estás metiendo todas las imágenes a través de un `background` de CSS. En este ejercicio queremos usar imágenes con la etiqueta `<img />`.

Sigue los siguientes pasos:

1. Copia o descarga las imágenes del ejercicio de la evaluación intermedia. Las debes meter en el proyecto de React, en la carpeta `src/images/`.
2. Importálas en las primeras líneas del fichero `src/components/App.js`.
3. Úsalas en el retorno de la función `App` con una etiqueta `<img />`.
4. Cuando las imágenes se muestren bien en tu navegador habrás terminado.
