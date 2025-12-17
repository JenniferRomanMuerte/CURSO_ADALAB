# 4.7.4 Aplicación Postman

{% hint style="info" %}

> **Nota:** esta mini lección es la menos importante de hoy. Puedes simplemente leerla por encima.
> {% endhint %}

Es muy frecuente que cuando programamos un servidor no tengamos programada la correspondiente web que va a comunicarse con este servidor.

Se nos plantea el problema de no tener una web para probar que lo que estamos haciendo funciona bien.

Para solucionar esto existe una herramienta muy útil que nos permite hacer cualquier petición a un servidor. Es como si fuera una web universal que se puede comunicar con cualquier servidor del mundo.

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-3df649399b3951c1e5121254832fbbfad66ba9a8%2Fpostman.png?alt=media)

Esa herramienta se llama **Postman** y es muy muy útil mientras estamos programando.

### Instalación de Postman

Para instalar Postman en tu ordenador:

1. Descarga e instala Postman en tu ordenador:
   * Desde Windows o Mac entra en la [página de descargas de Postman](https://www.postman.com/downloads/).
   * Desde Ubuntu accede al instalador de aplicaciones desde el menú, busca **Postman** e instálalo.
2. Ábrelo:
   * Si al abrirlo te pide que te registres, debes saber que no hace falta. Sáltate este paso pulsando en **Skip signing in and take me straight to the app**.
3. Abre una nueva pestaña pulsando en el icono +.
4. Empieza a hacer peticiones a un servidor como no si hubiera un mañana. Recuerda que el servidor debe estar arrancado para que conteste a las peticiones.

### Cómo obtener datos en una petición con Postman

Cuando queremos **obtener datos** de un servidor, normalmente utilizamos el método **GET**, que es el verbo HTTP estándar para este tipo de operación. Los pasos son los siguientes:

* Seleccionar el verbo GET.
* Escribir la url del recurso, en la imagen es <http://localhost:3000/users>
* Hacer click en Enviar.

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-a6ffb8bda0fbc83aa8e0d7ff5b0e1ca57b62f51c%2Fpostman-get.png?alt=media)

### Cómo enviar datos en una petición con Postman

Cuando hacemos una petición POST y queremos enviar datos tenemos que:

* Seleccionar el verbo, casi siempre va a ser **POST** (el verbo GET no permite enviar datos en el body).
* Escribir la url del recurso, en la imagen es <http://localhost:3000/new-user>.
* Entrar en la pestaña **Body**.
* Seleccionar la opción **raw**.
* Seleccionar el formato **JSON**.
* Escribir correctamente en formato JSON los datos que queremos enviar. El formato JSON requiere los nombres de las propiedades estén entre comillas dobles `"` (en la imagen `"userName"`).
* Hacer click en Enviar.

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-f421668c5a1fda4717b3f63a231c950b450a1dfd%2Fpostman-body.png?alt=media)

### Ejercicios

#### 1. Usa Postman

1. Descarga, instala y arranca este [ejercicio](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/node-express-postman).
2. Abre la página <http://localhost:3000>.
   1. Abre Devtools > Network y mira qué peticiones se hacen cuando pulsamos en los botones de la página.
3. Realiza las mismas peticiones desde Postman y comprueba que la respuesta que muestra Postman es la misma que muestra la pestaña de Devtools > Network.
