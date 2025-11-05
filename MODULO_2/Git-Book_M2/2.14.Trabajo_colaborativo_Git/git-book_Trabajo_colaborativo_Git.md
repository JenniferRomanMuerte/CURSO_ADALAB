# 2.14.1 Tipos de ramas

### Flujo de trabajo con ramas

Vale, y ahora ¿cómo trabajamos con las ramas? ¿Hacemos las que necesitemos? ¿Las llamamos como queramos? ¿Sin orden? No, claro, que no: sin orden solo hay caos.

Vamos a tener dos tipos de ramas, las de largo recorrido o permanentes y las de corta duración o puntuales.

![Flujo de trabajo](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-f94d93aa7758d405024598ac3c4bacb11066d644%2Fflujo-2.png?alt=media)

### Ramas permanentes

Los equipos suelen tener una o dos ramas permanentes, una donde está la versión estable de nuestro proyecto (suele ser la rama `master`), la que vamos a subir a nuestro servidor (o a GitHub Pages) y una intermedia donde ir fusionando los diferentes cambios/mejoras (nombres comunes para esta rama son `dev`, `develop`...). Esta segunda rama no siempre tiene código estable, pero **solo cuando lo tiene la fusionaremos hacia `master`**.

En el curso vamos a tener dos ramas permanentes: `master` y `dev`. Si se trata de un ejercicio pequeño podemos usar solo `master`.

### Ramas puntuales

Cuando tenemos una tarea nueva (modificar o crear contenido, por ejemplo) crearemos una nueva rama solo para dicha tarea. Trabajaremos sobre ella con normalidad, haciendo los commits necesarios y subiéndola a su correspondiente rama remota como hemos venido haciendo hasta ahora con `master`.

Recordad que usaremos `git push origin nombre-de-la-rama`

Una vez terminada la tarea y comprobado que todo funciona correctamente ya está lista para ser fusionada con `dev`. Pero no lo haremos, todavía.

> 📂 Recursos Externos: [Git feature branch workflow - Atlassian (Inglés)](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)

### Pull Request y revisión de código

Aunque hay diferentes formas de trabajo con ramas en el curso vamos a ver una muy común en las empresas: el equipo que se encarga de una tarea, crea la rama, ejecuta la tarea y la sube a la rama remota, pero no la fusiona todavía, antes crea un **Pull Request**. De esta forma un equipo o algún miembro del equipo se encarga de revisar el código y dar el visto bueno a la fusión.

> A partir de este momento ya no vamos a hacer `$ git merge` desde la consola (salvo en un caso que veremos más adelante)

La mecánica del Pull Request no es propia de git sino de quién da el servicio de git. En este caso GitHub tiene su propio sistema para gestionar los Pull Requests.

> 📂 Recursos Externos
>
> * [Ayuda de GitHub sobre los Pull Requests (Inglés)](https://help.github.com/articles/about-pull-requests/)
> * [Creando un pull request en GitHub (Inglés)](https://help.github.com/articles/creating-a-pull-request/)

### Code review

La revisión del código no es un asunto menor sino de los más importantes. Aquí no buscamos decir Ok y a correr, no. Aquí es donde tenemos la oportunidad de, con ojos frescos, revisar el código generado por nuestras compañeras para asegurar unos mínimos de compatibilidad, homogeneidad y calidad.

Cuando creamos una PR (o Pull Request) solemos asignar a alguien que será responsable de revisar nuestro código, un **reviewer**.

Un problema no menor que tenemos en el sector es que cuando nos ponemos a programar nos cuesta detectar una serie de fallos (de código o de estilo) porque estamos centrados en resolver una tarea. Estas revisiones de código permiten compensar eso y asegurar que todos trabajamos a una. Quién revise nuestro código va a poder **mirar y comentar**, en este caso desde GitHub, de manera que si algo no está claro se pueda detectar y hablar en el momento.


# 2.14.2 Flujo de Trabajo

### Vamos a poner todo esto en contexto: Flujo de trabajo

Podríamos decir que a partir de este momento `dev` va a ser nuestra rama máster de desarrollo, y `master` será donde tendremos el código listo para entregar.

Vamos a verlo con un ejemplo: **Web de transportes** En nuestra empresa hay un proyecto de una web de transportes, con sus ramas `master` y `dev`. Nuestro cliente nos pide una serie de cambios (a estas peticiones se les suele llamar *tickets*):

* **Ticket 34**: Añadir Facebook Messenger como método de contacto con la empresa de transportes
* **Ticket 35**: Añadir sombras a los botones de hacer login y de guardar rutas favoritas
* **Ticket 43**: El color de los enlaces en la página de ayuda debe ser del rojo corporativo pero es morado

En nuestro equipo nos organizaremos de la siguiente manera: Desde `dev` creamos nuevas ramas que se llamarán `ticket/34`, `ticket/35`y `ticket/43`, de manera que podamos desarrollar esas funcionalidades por separado.

Si en lugar de usar un servicio de tickets nuestro cliente usase los issues de GitHub podríamos llamar a las ramas `issue/{número del issue}`.

Hay diferentes formas de nombrar las ramas, al igual que los commits, lo haremos en inglés y con un nombre descriptivo o que identifique la tarea.

> No hay una convención de nombrado estándar pero sí que existen muchas propuestas, podéis buscar y usar una o buscar vuestro propio sistema. Si entráis en un equipo nuevo lo normal es que ya tengan un sistema de nombrado de ramas, si no, es súper buen momento para proponer al equipo tener uno que se adapte a vuestro sistema de trabajo.

Ahora ya podemos ponernos a trabajar en nuestras tareas... Parece que la 43 es un error nuestro mientras que la 34 y 35 son funcionalidades nuevas. ¡Empecemos por ella!

Cambiamos a nuestra rama `ticket/43` y resolvemos el problema (esta era fácil). Ahora nos creamos nuestra **pull request** contra `dev` y pedimos que una o varias compañeras la revisen.

En esta PR vamos a incluir la información necesaria para que la persona encargada de la revisión entienda que había que hacer y por qué se ha resuelto de esta manera.

Quien toma el papel de revisora tiene que mirar nuestro código y no solo ver que funciona como debe funcionar sino que, además, cumple con los mínimos que haya marcado el equipo de desarrollo.

¿Cómo hace esto?

1. Pues primero leyendo la PR donde debería haber suficiente información para entender qué había que hacer y cómo se ha hecho.
2. En la propia PR un espacio para revisar qué cambios se han hecho en el código y poder añadir comentarios, aceptar o rechazar la PR...
3. Muy posiblemente quien revise tenga que pasarse a la rama y comprobar que el funcionamiento es el correcto

> 📂 Recursos Externos: [Participando en Proyectos Github](https://git-scm.com/book/es/v2/GitHub-Participando-en-Proyectos)

#### La Pull Request del ejemplo, paso a paso

Tenemos que recordar que las PR no dependen de GIT sino de la plataforma que nos ofrezca el alojamiento de nuestros proyectos usando GIT. En este caso, **GitHub**.

En la home de nuestro proyecto tenemos una pestaña para gestionar las Pull Requests, en esa pestaña tendremos un botón para crear una nueva, un listado de las creadas y, si hemos hecho push de una rama, un modulito resaltado en amarillo para crear una PR directamente desde esa rama. En el ejemplo vamos a usar el botón de "**New pull request**".

![Crear una PR desde cero](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-9edb6ecf6a115457a8c18f44f3b749d9773d1d89%2Fpr-00.png?alt=media)

Hay que definir desde qué rama a qué rama va a ir nuestra PR, en este caso de `ticket/43` a `dev`.

![Ramas de destino y origen de la PR](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-dbb1f7579cc52e664c26ffc82bcae7aa875fe201%2Fpr-01.png?alt=media)

Y ahora a rellenar el título y la descripción de la PR y luego pulsaremos "**Create pull request**". Una vez creada debemos seleccionar quién va a revisarla.

> El ejemplo es muy sencillo pero recordad que podemos escribir tranquilas el texto que necesitemos en nuestra PR porque no nos cobran por palabra)

![Rellenar y seleccionar un reviewer](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-59691a27a1630876ac119c25c2fb0c750dfa98c6%2Fpr-02.png?alt=media)

Dentro de la PR hay una pestaña que nos deja ver desde web los cambios que se han hecho (rojo para los borrados, verde para los añadidos 😉). También nos indica si las dos ramas se pueden mezclar sin conflictos 😉😉.

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-de6010e0840c7229f770ee7831823c312a144424%2Fpr-03.png?alt=media)

Además podremos seleccionar una línea en concreto para comentarla y/o empezar una revisión.

> Podemos añadir comentarios sueltos o agruparlos en una revisión que "terminará" con un comentario general y tres posibles estados: Comentario general, aprobada o solicita cambios.

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-9d46f4705cdf67dc6479112bfe9476158ff75200%2Fpr-04.png?alt=media)

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-b7f95e255f2a1616a09c0ad097fe2fd5b2cbbe97%2Fpr-05.png?alt=media)

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-834da096fc3a8ba7e862e82abc85cb50261656d0%2Fpr-06.png?alt=media)

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-efa755f81c4d6285e72def5b1e9e298078e3aeee%2Fpr-07.png?alt=media)

**Pero si tenemos a quien ha hecho el trabajo en la mesa de al lado, ¿de verdad hay que rellenar todo esto?**

Sí. Todo el sistema del control de versiones es un registro exacto de nuestro trabajo y aunque nos acabemos levantando a proponer o discutir el código debemos dejarlo por escrito porque dentro de 3 meses nadie se acuerda lo que se habló en la mesa tres. O quizás el equipo que venga después quiere saber por qué se hizo tal o tal cosa.

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-ac3c98efffc95eef9d3838e9a54d1cdafcf1b11c%2Fpr-08.png?alt=media)

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-ac47f3988e32d3eed61e9d41e78ca48a6ba588f8%2Fpr-09.png?alt=media)

### Los conflictos

A estas alturas ya habremos solucionado alguno que otro. Recordemos que los conflictos suceden porque se han tocado partes iguales de un archivo y el algoritmo de Git no sabe cómo mezclarlo automáticamente así que nos muestra las opciones para que decidamos nosotras.

En este flujo de trabajo sabremos si hay conflictos cuando creemos la PR.

Siguiendo con el ejemplo (PR de `ticket/43` a `dev`) si al crear el PR nos avisa de que hay conflictos procederemos de la siguiente forma:

1. Salta el conflicto la crear la PR de `ticket/43` a `dev`
2. Nos vamos a nuestro terminal y nos aseguramos de tener las últimas versiones de ambas ramas
3. Invirtiendo el orden nos traemos `dev` a `ticket/43`: Cambiamos a `ticket/43` y lanzamos un `$ git merge dev`
4. Solucionamos los conflictos como haríamos normalmente
5. Hacemos un push de `ticket/43`

Esto actualizará automáticamente nuestra PR y ahora ya sí que podremos irnos a GitHub y ejecutar nuestro PR con éxito :)
