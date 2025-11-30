# 3.6.3 Local storage

### React y el local storage

En esta mini lección aprenderemos dónde debemos llamar a la escritura y lectura del local storage en React.

### El servicio del local storage

Con el objetivo de ser personas exquisitas también vamos a crear un servicio para el Local Storage y así no mezclarlo con el código del componente `App`.

[Observa este ejemplo](https://ln.run/Z_HpQ), concretamente el fichero que hemos creado en `src/services/localStorage.js` es:

Como ves, en este servicio hemos creado 4 funciones y **las hemos exportado todas para que puedan ser usadas desde otros ficheros**. De las 4 funciones, es posible que solo necesites usar `get` y `set`. Si no usas `remove` y `clear` no pasa nada.

En módulos anteriores habíamos aprendido a usar el `localStorage.getItem` y el `localStorage.setItem`. Quizás no conocías las funciones `localStorage.removeItem` y `localStorage.clear`. En todo caso, **lo que ya supieras sobre el local storage lo vamos a seguir usando igual en React**, ya que React no se preocupa de esto.

> **Nota:** este fichero te puede valer para cualquier proyecto de React.

> **Nota:** si quieres saber más sobre [Local Storage visita su documentación](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage).

Observa también cómo usamos este servicio en el componente `App` (fichero `src/components/App.jsx`).

Prueba a copiar estos dos ficheros en uno de tus proyectos de React. Lo importante de estos códigos es:

* Hemos creado un servicio para el local storage y evitar meter tanto código en `App.js`.
* Lo que empleamos del local storage es lo mismo que ya sabíamos, no hemos aprendido nada nuevo.
* Debemos leer los datos del local storage y pasárselos a la función `useState` para que el estado tenga estos valores al arrancar la página.
* Debemos guardar los datos en el local storage en un `useEffect` para que después de cambiar el local storage esté actualizado.

### Otra forma de guardar en el local storage

En el ejercicio anterior estamos guardando los datos en el local storage en dos propiedades diferentes, como se ve en la imagen:

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-de00eaff6bc06459b8077f83173e166e68b64dcf%2Freact_local_storage_1.png?alt=media)

Vamos a enseñarte otra forma alternativa para guardar ambos datos en una sola propiedad de tipo objeto. El fichero `src/services/localStorage.js` no cambia. Solo cambia un poco el fichero `src/components/App.js`. [Mira este ejemplo](https://ln.run/Z-pbf).

Y el resultado en el local storage es:

![localstorage](https://github.com/Adalab/pw-materiales-del-curso/blob/master/modulo_3/3-7-fetch/assets/images/react_local_storage_2.png)

Entre esta forma de trabajar y la anterior elige la que más te guste.

### Conclusiones

Para guardar en el local storage desde React:

* Crea un servicio con las funciones del local storage.
  * Puedes copiar el código de esta mini lección, siempre que entiendas bien lo que hace.
* En el componente de React:
  * Importa el servicio.
  * Lee del local storage los datos y guárdalos en el `useState` para que estén disponibles al arrancar la página.
  * Usa un `useEffect` para guardar en el local storage.
  * En el array de dependencias del `useEffect` pon las variables de estado que quieras guardar.

### Ejercicios

#### 1. Guarda tu ToDo list en el local storage

Partiendo de la última versión del ejercicio del ToDo list, queremos que cuando la usuaria refresque la página, las tareas se muestren como antes de refrescar, es decir, que conserven los últimos cambios que hizo la usuaria.

#### 2. Añadir nuevas tareas al ToDo list

> **Nota:** este ejercicio no tiene nada que ver con el local storage, pero es interesante porque mezcla `useState`, `useEffect`, formularios y arrays. Si quieres hazlo en otro momento.

Queremos que la usuaria pueda añadir nuevas tareas a su listado. Partiendo de la última versión del Todo list queremos:

1. Añadir un input de texto en algún sitio de la página.
   1. Cuando este input cambie debemos guardarlo en el estado de React, por ejemplo en `newTaskInput`.
2. Añadir un botón con el texto "Crear nueva tarea".
   1. Cuando la usuaria pulse en este botón debemos pushear al array de tareas un nuevo objeto.
   2. El objeto debe tener la propiedad `task`, cuyo valo es lo que haya en ese momento en `newTaskInput`.
   3. El objeto debe tener la propiedad `completed` con valor `false`.
3. Si todo está bien hecho React renderizará el componente y aparecerá en pantalla la nueva tarea.

También puedes hacer que cuando la usuaria pulse en el botón "Crear nueva tarea", el valor del input de texto se limpie. Para ello debes:

1. Modificar el estado de `newTaskInput`.
2. Controlar el input de texto.

#### 3. Borrar tareas del ToDo list

Supongamos que la usuaria quiere borrar alguna de las tareas del ToDo list. Para ello debemos poner un botón de borrar (o un icono) a la derecha de cada tarea. Sigamos los siguientes pasos:

1. Añadir un botón, icono o lo que queramos dentro de cada `<li />`.
   * A este botón hay que añadirle una función manejadora.
   * A este botón hay que añadirle también un `id` con el índice de la tarea, para luego identificarla dentro de la función manejadora.
2. Crear la función manejadora, en ella:
   * Obtenemos el índice de la tarea clickada.
   * Borramos la tarea del array.
   * Guardamos el array en el estado de React.
