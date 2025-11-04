# 2.12 Peticiones al servidor 2

En esta sesión vamos a tratar varios temas diferentes: 1) las APIs, concepto que ya conocemos, pero vamos a entender un poco mejor cómo funcionan; 2) el localStorage, un sistema de almacenamiento de datos en el navegador y 3) el linter, una herramienta que nos ayuda a mejorar nuestro código JavaScript.

*API* viene de *Application Programming Interface*, es decir, es una interfaz que está pensada para ser accedida desde una aplicación de código. Dicho de otra forma, el servidor define una forma de pedirle datos, pensada para que sea una aplicación (un programa) quien los pida y él sepa enviárselos. Hay otras interfaces, como una página web, que están pensadas para ser usadas por personas. Pero las APIs están pensadas para ser usadas desde la programación, en nuestro caso desde nuestro programa JavaScript. Durante esta sesión vamos a ver varios ejemplos de APIs.

Un *linter* es una herramienta que nos sirve para prevenir errores y nos ayuda a mantener un estilo homogéneo en nuestro código. Veremos cómo usar un linter para JavaScript llamado *ESLint* y cómo integrar los mensajes que nos manda en nuestro editor de código, en este caso Code. También veremos otra herramienta integrada con el linter, *Prettier*, que nos permite corregir los errores de formato del código automágicamente al guardar fichero: ¡¡nunca más una indentación mal hecha!!

## ¿Para qué sirve lo que vamos a ver en esta sesión?

Entender mejor el concepto de API y ver ejemplos nos ayudarán a entender mejor cómo trabajar con ellas. Además, entenderemos mejor cómo están construidas y cómo se espera que las usemos gracias a conocer mejor el protocolo HTTP que es el usado en Internet.

Usar un linter en nuestro proyecto nos sirve para que mientras desarrollamos un código JavaScript mantengamos una coherencia de estilos con el resto del equipo. También nos sirve para poder detectar errores típicos al escribir código, por ejemplo, si tengo variables no usadas o estoy usando variables antes de declararlas.

## ¿En qué casos se utiliza?

Las APIs van a estar presentes en prácticamente cualquier desarrollo web que hagamos porque, al final de todo, es casi seguro que tengamos que enviar y recibir datos de un servidor. Si se ha diseñado bien, en la interfaz de comunicación de ambos (frontend y backend) debería haber un API.

Utilizaremos un linter en un entorno de trabajo donde una o varias personas estamos trabajando sobre una base de código y/o queramos mantener unas reglas de estilo concretas (cuando trabajamos en solitario sigue teniendo sentido usarlo). Por ejemplo, qué indentación de código usar o el uso de los punto y coma.


# 2.12.1 API

### El mundo de las API

Como ya hemos dicho, las API son la forma en que desde un programa (en nuestro caso, un código JavaScript en el frontend) podemos acceder a datos en un servidor web, que están en un backend (un servidor, es decir, un ordenador conectado a Internet). En el backend normalmente tendremos un programa ejecutándose, que podría estar escrito en distintos lenguajes de programación (PHP, python, ruby, Node...), y que tiene acceso a una base de datos (una base de datos es un tipo especial de programa que sirve para almacenar datos y poder consultarlos). Pero a nosotros nos da igual el lenguaje de programación en que esté escrito el backend, lo que nos importa es que **podemos interactuar con él a través de una URL**.

Como vimos en la sesión anterior, haciendo una petición con `fetch` a una URL del servidor conseguíamos obtener datos, desde fotos de perros hasta los repos de una organización en GitHub. Por tanto el servidor de una aplicación web (página web que maneja datos dinámicos) tiene establecida una API, es decir, un conjunto de URLs especiales con las que podemos interactuar desde nuestro programa para consultar y almacenar datos. Estas URLs no están escogidas al azar sino que siguen una serie de convenciones a la hora de crearse. La convención más usada para la creación de APIs se llama REST (*REpresentational State Transfer*) por eso muchas veces oiremos hablar de **APIs REST**. La convención que define REST está basada en HTTP, el protocolo de comunicación entre los ordenadores de la web (la World Wide Web - WWW). Estos dos acrónimos seguro que nos suenan mucho porque los escribimos millones de veces al escribir un URL en nuestro navegador web.

#### Un poquito de HTTP

Las máquinas que están conectadas a Internet para entenderse entre ellas utilizan un protocolo, es decir, una forma estándar de enviarse información para poder entenderse. HTTP viene de *Hyper Text Transfer Protocol*, en español protocolo para transferencia de hiper-texto, es decir, para que las máquinas intercambien información entre ellas más allá del simple texto (texto, imágenes, videos, etc).

La forma de funcionar de HTTP es mediante **petición y respuesta**. Un ordenador hace una petición (el que llamamos cliente, en nuestro caso desde navegador) y otro ordenador (el que llamamos servidor) recibe esa petición, la procesa (hace cosas) y envía de vuelta una respuesta.

La **petición**, como hemos visto en los ejemplos de la sesión anterior, siempre lleva asociada una URL que indica dónde está el servidor y el tipo de datos que le pedimos. Por ejemplo, la URL <https://api.rand.fun/text/password?length=20> de una petición a RandAPI nos muestra que:

* el servidor del API está en `https://api.rand.fun/` (se le llama normalmente *URL base*)
* el servicio (tipo de datos que pedimos) al que accedemos es `text/password` y, en este caso, nos da una cadena aleatoria como contraseña
* los parámetros `?length=20` (también llamado *querystring*) indican que la longitud de la cadena que pedimos es 20

**Métodos HTTP**

Cada petición HTTP tiene asociada un *método* que indica la *intención* con la que hacemos la petición. Estos son los métodos principales:

* **GET**:
  * **Intención**: Consultar o recuperar información del servidor.
  * **Ejemplo**: Una petición `GET` a `/users` devuelve un listado de usuarios.
* **POST**:
  * **Intención**: Enviar datos al servidor para que los procese o almacene.
  * **Ejemplo**: Una petición `POST` a `/users` con los datos de un nuevo usuario crea un registro nuevo.
* **PUT**:
  * **Intención**: Actualizar completamente un recurso existente en el servidor.
  * **Ejemplo**: Una petición `PUT` a `/users/1` con datos actualizados modifica el usuario con id 1.
* **DELETE**:
  * **Intención**: Eliminar un recurso en el servidor.
  * **Ejemplo**: Una petición `DELETE` a `/users/1` borra el usuario con id 1.

El método HTTP junto con la URL define la acción que queremos realizar en el servidor según las convenciones de REST. Esto significa que, dependiendo del método que utilicemos (GET, POST, PUT o DELETE) y la URL a la que hagamos la petición, el servidor sabrá si debe devolver datos, crear un recurso nuevo, actualizar uno existente o eliminarlo.

**Paginación**

En un API REST, cuando solicitamos un listado de recursos (por ejemplo, un listado de usuarios), es común que, si hay una gran cantidad de datos, el servidor no nos devuelva todo el listado completo en una sola petición. En su lugar, nos enviará únicamente los primeros resultados (por ejemplo, los primeros 10 registros). Esto se llama paginación.

Para obtener el resto de resultados, debemos hacer peticiones adicionales, indicando qué página queremos. Esto se logra agregando un parámetro a la querystring, por ejemplo, `/users?page=2`.

**Acceso a APIs públicas y autenticación**

Puede que te preguntes: "¿Significa esto que puedo acceder libremente a los datos de cualquier aplicación web que tenga un API, como Twitter o GMail?" La respuesta es no. Aunque muchas aplicaciones ofrecen APIs que permiten interactuar con sus servicios, la mayoría de ellas requieren algún tipo de autenticación.

La autenticación asegura que solo las personas autorizadas puedan realizar ciertas acciones. Por ejemplo, en el API de GitHub podemos consultar información pública sobre repositorios sin autenticarnos, pero si quisiéramos crear un repositorio nuevo, necesitaríamos identificarnos primero, demostrando que tenemos los permisos necesarios.

En este curso trabajaremos con APIs abiertas, es decir, APIs que no requieren autenticación y que, por lo general, solo permiten consultar datos, pero no modificarlos. Esto simplificará el aprendizaje y te permitirá centrarte en cómo hacer peticiones y procesar las respuestas.

**Códigos de estado**

La **respuesta** HTTP que viene del servidor tiene más información además de los datos que le hemos pedido. Uno de ellos es el código del estado de la respuesta, en inglés *HTTP status code*. Existe un estándar definido para saber qué indica este código, y los principales son:

* 200: las respuestas con código 2xx (doscientos y lo que sea) indican que la petición ha ido bien (OK)
* 400: las respuestas con código 4xx (cuatrocientos y pico) indican que ha sucedido un error en la petición; por ejemplo, que el usuario no ha enviado todos los datos que el servidor necesita, o que no está autorizado a acceder a a ese servicio
* 500: las respuestas con código 5xx (quinientos y pico) indican que el servidor ha tenido un error (¿os suena la ballena de Twitter? 😜)

Si queréis profundizar en los código de respuesta HTTP, [qué mejor que hacerlo con gatitos](https://http.cat/).

> Recurso Externos: [Listado de APIs pública](https://github.com/toddmotto/public-apis)

#### Herramientas para trabajar con APIs

No todas las APIs tienen una web como la del SWAPI para poder probar las peticiones. Con la herramienta [Postman](https://www.getpostman.com/) podemos hacer eso mismo nosotras: realizar peticiones a un servicio cambiando la URL, el método HTTP, los datos, las cabeceras, etc.

Otra herramienta fundamental son las propias DevTools del navegador en la pestaña *Network*.

![Devtools Network](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-c4d23d62ec7067ff1083ff43496b5b8fcafc61b2%2Fdevtools-network.png?alt=media)

### Ejercicios

**1. Explorar el API Star Wars**

Vamos a explorar [un API abierto de información sobre el mundo Star Wars](https://swapi.py4e.com/documentation). En esta página tenemos la documentación completa del API y un formulario que nos permite hacer peticiones a la URL que indiquemos. Identifica la siguiente información sobre SWAPI:

* la URL base del API
* si necesita autenticación
* método HTTP que deben usar las peticiones a este API
* URL para acceder a la info del personaje "Luke Skywalker"
* URL para acceder a la info de la película "A New Hope"
* a qué otros recursos puedo acceder desde el API además de personajes y pelis
* URL para acceder al listado de personajes, ¿está paginada?
* cómo puedo buscar personajes mediante la URL
* cómo puedo hacer que el JSON de una petición se me devuelva traducido a Wookiee

**2. Buscar un personaje de Star Wars**

Ahora que conocemos mejor el API de Star Wars vamos a hacer una sencilla web usándolo. En la web aparece una caja de texto donde escribimos el nombre de un personaje (o parte del nombre) y un botón, al hacer click, nuestra web muestra debajo un listado con los personajes que coinciden con la búsqueda indicando su nombre y género.

**3. Usando el DevTools**

En la página de SWAPI o en la que habéis creado en el ejercicio 2 inspecciona las peticiones que has hecho al servidor. Al abrir la pestaña Network aparece vacía así que comienza a hacer peticiones con la pestaña abierta. Con la información que obtienes de esta pestaña averigua:

* dónde está el método de petición
* el código de la respuesta (recuerda que 200 es OK)
* en las cabeceras de la petición busca una llamada `user-agent`, ¿qué puedes decir de su contenido?
* la respuesta del servidor en JSON
* al recargar la página aparecen un montón de peticiones en la pestaña Network, ¿sabrías filtrar solo las que son de AJAX? Pista: antes de `fetch` las peticiones se hacían con el objeto `XMLHttpRequest` (XHR)


# 2.12.2 POST

En la lección anterior, vimos cómo realizar una [petición al servidor para obtener datos con `fetch` y el método GET](https://github.com/Adalab/pw-materiales-del-curso/blob/master/modulo_2/modulo_2/2_11_1_fetch.md). Cuando hacemos una petición GET al servidor, solo estamos solicitando información, y el servidor nos responde con los datos que tiene. Sin embargo, cuando necesitamos enviar información al servidor (como crear un nuevo recurso o enviar un formulario), usamos el **método POST**. A diferencia de una petición GET, una petición POST debe incluir los datos que queremos enviar y, por lo tanto, el uso de `fetch` cambia ligeramente.

Con POST, debemos proporcionar información adicional al servidor mediante un objeto de configuración que incluye el método, los datos a enviar y las cabeceras HTTP que describen el tipo de contenido enviado.

## Pasos para hacer un POST con `fetch`

1. **Especificar el método**: Al hacer una petición POST, debemos indicar explícitamente el método mediante `method: 'POST'` en el objeto de configuración.
2. **Incluir los datos a enviar**: Los datos que enviamos al servidor se colocan en el campo `body`. Estos datos generalmente se envían en formato JSON, por lo que debemos convertirlos a una cadena de texto usando `JSON.stringify()`.
3. **Añadir cabeceras HTTP**: Es importante incluir una cabecera que indique el formato de los datos enviados. Por ejemplo, si enviamos los datos en formato JSON, usamos `Content-Type: 'application/json'`.

En el siguiente ejemplo, estamos enviando la información de una nueva usuaria para que el servidor la almacene.

```javascript
// Datos a enviar al servidor
const data = {
  name: "Laura Aguilar",
  profession: "developer",
  email: "laura@gmail.com",
};

// Hacer la petición POST con fetch
fetch("https://api.example.com/users", {
  method: "POST", // Especificamos el método POST
  body: JSON.stringify(data), // Convertimos el objeto a JSON y lo incluimos en el cuerpo
  headers: {
    "Content-Type": "application/json", // Indicamos que enviamos datos en formato JSON
  },
}).then((data) => {
  console.log("Respuesta del servidor:", data);
});
```

Puedes leer más detalles de `fetch` en [el tutorial de uso de `fetch` en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).


# 2.12.3 Local Storage

### LocalStorage

Una característica muy interesante a la que podemos acceder con JavaScript es la posibilidad de guardar datos en el propio navegador. Esto se hace mediante el llamado **LocalStorage** o **SessionStorage**. El primero que permite almacenamiento permanente de datos, y el segundo solo para una sesión. Es decir, si cerramos la página se borrarán. En el curso solo vamos a explicar localStorage pero sessionStorage tiene un uso similar.

Hasta ahora, la única fuente de datos que hemos usado es un API en el servidor, pero con localStorage podemos almacenar también datos en local, es decir, en el propio navegador del usuario. De esta forma, vamos a poder guardar algunos datos interesantes solo para este usuario y que mejore su experiencia en nuestra página. Algo habitual es *cachear* datos del servidor, es decir, guardar algunos datos que obtenemos del servidor de forma que la próxima vez que lo necesitemos no tengamos que hacer una petición sino recogerlo directamente del almacenamiento local. Por ejemplo, en mi web de perros tengo un listado de las razas que obtengo del servidor y lo guardo en local porque es algo que nunca va a cambiar. De esta forma, la próxima vez que entre en la página voy a comprobar si tengo guardada información en local y si la hay así me evito una petición al servidor y la página va más rápido.

Usar el localStorage es bastante sencillo: solo necesitamos un nombre (clave) y unos datos (valor).

### localStorage.setItem

Para guardar datos es tan sencillo como usar `setItem` cuyo primer parámetro es el nombre que le ponemos a los datos y luego los datos que queremos guardar, que pueden ser de cualquier tipo primitivo (cadena, número, booleano). Por ejemplo:

```js
localStorage.setItem('name', 'Ana');
```

### localStorage.getItem

Para recuperar los datos es tan sencillo como usar `getItem` y pasar el nombre que le dimos a los datos. Por ejemplo:

```js
const name = localStorage.getItem('name');
console.log(name); //Ana
```

### localStorage.removeItem

Para borrar los datos es tan sencillo como usar `removeItem` y pasar el nombre que le dimos a los datos. Por ejemplo:

```js
localStorage.removeItem('name');
```

Podemos ver los datos guardados usando las devTools en la pestaña "Application":

![DevTools localStorage](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-27002bc0558fe3fd2f96873596bfccdfb6cb53b0%2Fdevtools-localstorage.png?alt=media)

### Guardando arrays y objetos

En localStorage solo podemos guardar datos de tipo primitivo (número, cadena, booleano). ¿Qué pasa si queremos guardar un array o un objeto? Pues necesitamos convertirlo a una cadena para poder guardarlo.

Para eso existe una función en JavaScript `JSON.stringify` que convierte un objeto literal o un array en una cadena. Para realizar la acción contraria, es decir, pasar de una cadena que tiene la información de un objeto a un objeto JavaScript usamos `JSON.parse`. Vamos a ver un ejemplo:

```js
const tasks = [
  {name: 'Recoger setas en el campo', completed: true},
  {name: 'Comprar pilas', completed: true},
  {name: 'Poner una lavadora de blancos', completed: true},
  {
    name: 'Aprender cómo funcionan los objetos de JavaScript',
    completed: false,
  },
];

localStorage.setItem('tasks', JSON.stringify(tasks));

const savedTasks = JSON.parse(localStorage.getItem('tasks'));
console.log(savedTasks.length); //4
```

> 📂 Recursos Externos: [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

### Ejercicios

**1. Conociendo Local Storage**

Escribir datos en formularios es muy tedioso para los usuarios. ¡Vamos a cachearlos para facilitarles la vida!

* Prepara un `input` de texto para el nombre, un `input` de texto para los apellidos y un párrafo vacío
* Cada vez que la usuaria escriba su nombre y apellidos (`keyUp`) tenemos que pintar el valor en el párrafo y guardarlo en `localStorage`.
* Al recargar la página tenemos que consultar `localStorage` y, si hay algún nombre guardado, rellenar el input y el párrafo.
* Mejora la forma de guardar los datos, queremos tener nuestros datos agrupaditos. El reto es guardar y recoger del localStorage un objeto con dos propiedades, nombre y apellido.

**2. Mi tema preferido**

Vamos a preparar una página sencilla, con un título, un par de párrafos y un selector de tema. Para hacer el selector:

* Añadiremos dos `radio buttons` para poder elegir entre claro y oscuro.
* Prepararemos dos clases de css: una pondrá el fondo claro y el texto oscuro, y la otra pondrá el fondo oscuro y el texto claro.
* Aplicaremos a nuestra página una clase u otra según la selección de la usuaria, apoyándonos en el `value` del input seleccionado.
* Paralelamente cada vez que la usuaria elija un tema, guardaremos esta información en `localStorage`.
* Al cargar la página buscaremos en `localStorage` el tema seleccionado en la última visita y lo aplicaremos sin que la usuaria tenga que realizar ninguna acción.

**3. Cachear la búsqueda**

Sobre el **ejercicio 2. Buscar un personaje de Star Wars** de la mini lección anterior *cachea* las búsquedas al servidor. De forma que cuando a busquemos una cadena a través del campo de búsqueda, primero busque en localStorage si ya tenemos un resultado en local para esa cadena:

* Si no lo hay se pide al servidor y luego se guarda en `localStorage` usando como clave el texto de la búsqueda;
* si al buscarlo en `localStorage` lo encontramos pues le enseñamos el resultado directamente al usuario y nos evitamos una petición al servidor.

**Ejercicio Extra. Buenas prácticas trabajando con LS**

{% hint style="info" %}
**Nota:** Descansa primero y si te queda tiempo haz este ejercicio.
{% endhint %}

Partiendo del primer ejercicio de esta mini lección vamos a visitar la página y borraremos el valor del `localStorage` a través de las DevTools. Con el `localStorage` limpito, recargaremos la página para simular la primera visita de la usuaria, dónde aun no habría información sobre el nombre y apellidos guardada (`cacheada`).

Si al realizar esta acción nos encontramos algún error tenemos que arreglarlo. Siempre que recojas un dato del localStorage, debes comprobar que existe antes de empezar a trabajar con el, y **realizar una limpieza del localStorage** manual para comprobar que todo funciona como esperas, haya o no datos cacheados.


# 2.12.4 Linter, Prettier y Errores

> **Nota:** esta lección es un bonus

### Linter

Un linter es una herramienta que nos ayuda a prevenir errores y tener un formato homogéneo en nuestro código. Existen linters para varios lenguajes de programación, pero aquí veremos ESLint que es un linter para JavaScript.

En un linter definimos una serie de reglas en un fichero de configuración que son las que queremos comprobar en el código. Luego el programador que usa un linter ejecutará esas reglas, normalmente el propio editor (Code) lo hace por ti, y si no se cumplen te mostrará un error o un warning (aviso).

Hemos creado una configuración específica de linter para vosotras, Adalabers, porque queremos que os ayude a detectar algunos errores y a escribir código con un estilo correcto. Algunas de estas reglas son:

* da error si no se pone `;` al final de una sentencia
* da error si no se usa indentación correcta
* da warning si dejáis `console.log()` en el código
* da warning si dejáis una función vacía

Para usarlo en un proyecto, tenéis que

* descargar el fichero de configuración `.eslintrc.json` de [este repositorio](https://github.com/Adalab/linter-adalab)
* instalar [ESLint](https://eslint.org/) de forma global mediante `npm install -g eslint`
* en el editor Code instalar el plugin `ESLint`.
* una vez configurado, al abrir un fichero JS nos aparecen los errores y warnings.
* En Code, si abrimos la paleta de comando (Ctrl + Shift + p) y escribimos `> ESLint`, nos aparecerán las opciones disponibles, una de ellas nos permite arreglar todos los errores solucionables.

A veces nos resultará molesto tener algunos errores o warnings en el editor porque, por ejemplo, queremos usar un `console.log` para algo. Podemos deshabilitar el uso del linter en una línea concreta usando [las instrucciones de configuración](https://eslint.org/docs/user-guide/configuring).

### Prettier

[*Prettier*](https://prettier.io/) es un formateador de código, es decir, de los errores que puede detectar un linter como ESLint, soluciona los realcionados con el formato del código. Por ejemplo, podemos definir:

* ancho máximo de una línea
* si queremos usar siempre comillas simples o dobles
* si queremos ; al final de cada línea (en JS son opcionales en la mayoría de los casos)

La configuración la ponemos en un fichero `.prettierrc` en la raíz de nuestro proyecto. Os recomendamos usar esta configuración, que podéis entender en la [guía de configuración de Prettier](https://prettier.io/docs/en/options.html).

```
printWidth: 80
singleQuote: true
trailingComma: es5
bracketSpacing: true
semi: true
useTabs: false
tabWidth: 2
```

> **NOTA**: Prettier también puede tomar la [configuración del fichero `.editorconfig`](https://editorconfig.org/) que tengamos en el proyecto, por ejemplo, en el Adalab Web Starter Kit.

Para usarlo en VSCode instalamos la extensión `prettier-vscode`. Con esto podremos formatear el código de un fichero desde la paleta de comandos. Si queremos configurar que el código se formatee al guardar, podemos seguir esta [guía para modificar la opción de `formatOnSave`](https://github.com/prettier/prettier-vscode#format-on-save).

> 📂 Recursos Externos: [Why aren’t you using Prettier?](https://engineering.hexacta.com/why-arent-you-using-prettier-4fe0a77713e8)

### Cazar errores del servidor

En la lección anterior vimos como gestionar errores con promesas, por otro lado en esta hemos visto las diferentes tipos de respuestas HTTP que nos puede devolver una llamada a un API. Veamos como combinar estos dos conceptos.

Cuando se resuelve la promesa de un fetch en esta nos llega información, uno de los datos es la propiedad `ok`. Esta es `true` si el código de respuesta es de tipo 200, en caso contrario es `false`. Una práctica extendida es cuando el valor de `ok` es falso generar una *excepción* con `throw`, ya que cuando hacemos esto dentro de un `then()` en lugar de ejecutarse el siguiente `then()` se ejecuta `catch()`.

El API de Github nos devuelve un error cuando intentamos [pedir repositorios públicos](https://developer.github.com/v3/repos/#list-all-public-repositories) con un un valor no válido en el `queryParam` *since*. Veamos el ejemplo:

```js
fetch('https://api.github.com/repositories?since=asdf')
  .then((response) => {
    if (!response.ok) {
      throw response;
    }
    return response.json();
  })
  .then((data) => console.log('success', data))
  .catch((err) => console.log('error', err));
```

Puedes *trastear* este código:

* si arreglas el parámetro `since` de la url verás como se ejecuta el segundo `then()`
* si eliminas la excepción se ejecutará el segundo `then()` aunque el estado de la respuesta no sea de tipo 200.

### Ejercicios

**1. Dame gifs de gatetes**

Hay una api genial [thecatapi.com](https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t) de imágenes de gatetes, como estos seres son muy particulares y no se juntan con cualquiera tenemos que autenticarnos siempre que hacemos una petición. Pero es una autenticación sencilla, solo tenemos que registrarnos en la web, y nos mandarán al email un *token* que nos identifica, y que tendremos que añadir en todas las peticiones que hagamos.

En Adalab ya nos hemos registrado y tenemos nuestro *token*. Te dejamos [un ejemplo](https://codepen.io/adalab/pen/YJVZGJ), a partir del cual hay que:

* Registrarse en la web y generar un token personal para sustituirlo por el de Adalab, que eso de impersonar a otros no es bonito.
* Pintar la imagen aleatoria del gato que nos devuelve la petición.
* ¡Espera! ¿Esto no iba de gifs? Vamos a ver si podemos hacer que la imagen que nos devuelve sea un gif.

> **Nota**: esta api es muy chachi, y una vez que nos autenticamos nos permite hacer cosas interesantes como guardar nuestras propias imágenes de gatetes, añadir a favoritos, eliminar nuestras imágenes... etc. Os animamos a leer la documentación y hacer diferentes pruebas con ella.
