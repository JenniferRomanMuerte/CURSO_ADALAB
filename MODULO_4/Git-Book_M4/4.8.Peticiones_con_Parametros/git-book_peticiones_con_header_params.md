# 4.8.4 Peticiones con header params

{% hint style="info" %}

> **Nota:** esta mini lección es la menos importante de hoy, pero también es importante.
> {% endhint %}

La cuarta y última forma de enviar datos al servidor desde nuestro navegador es con **header params**. Si has llegado hasta aquí ya te podrás imaginar que es muy parecido a enviar query, body o URL params.

### Características de los header params

* Desde el navegador:

  * Se pueden enviar en todos los tipos de peticiones (GET, POST, PUT, PATCH...).
  * Al igual que los body params, se tienen que enviar **siempre desde un `fetch`**, no los podemos indicar en la barra de direcciones del navegador como los query o URL params.
  * Se envían añadiendo un objeto `headers` al fetch, como se puede ver en el siguiente código:

  ```js
  fetch('http://localhost:3000/ruta-del-endpoint', {
      method: 'POST', // o GET, PUT, PATCH...
      headers: {
        unParametroEnLaCabecera: 'Hola mundo',
        'otro-parametro-de-la-cabecera': 123,
        otroParametroMas: 'Soy un dato'
      }
    })
    .then(response => response.json())
    .then(data => {...});
  ```
* En el servidor:
  * Recibimos los datos en `req.headers`, que es un objeto.
  * También podemos acceder a un header param a través del método `req.header('nombre-de-header-param')` que nos devuelve el valor de un header param.
  * Todos los datos enviados por header param se reciben en el servidor como **string**, aunque desde el `fetch` los hayamos enviado como número u otro tipo de dato.
  * Todos los nombres de propiedades del objeto `req.headers` nos llegan al servidor en minúsculas.

### Los headers params llegan en minúsculas

Una curiosidad de los headers params es que **sus nombres llegan al servidor en minúsculas**. Insistimos en esto porque es algo poco usual. Vamos, que es algo rarito.

Si desde el front enviamos:

```js
fetch('http://localhost:3000/ruta-del-endpoint', {
  method: 'POST', // o GET, PUT, PATCH...
  headers: {
    PARAMETRO_EN_MAYUSCULAS: '1',
    parametro_en_minusculas: '2',
    parametroEnCamelCase: '3',
    'Parametro-Separado-Con-Guiones': '4',
  },
});
```

En el objeto `req.headers` del servidor recibiremos todos los nombres de propiedad en minúsculas:

```js
{
  parametro_en_mayusculas: '1',
  parametro_en_minusculas: '2',
  parametroencamelcase: '3',
  'parametro-separado-con-guiones': '4'
}
```

### Header params del navegador

Cuando enviamos una petición desde el navegador al servidor, ya sea desde un `fetch` o desde la barra de direcciones del navegador, **el navegador siempre envía sus propios headers params**.

El navegador necesita enviar su propia información al servidor para decirle cosas como:

* Qué tipo, versión, modelo... de navegador es.
* Qué idiomas (español, inglés, etc.) entiende la usuaria: los idiomas configurados en su navegador u ordenador.
* Qué tipos de formato de datos entiende (texto, JSON, datos binarios, etc.)
* Cuál es la URL actual del navegador.
* Temas de caché: durante cuánto tiempo va el navegador a almacenar la respuesta del servidor, etc.

#### User agent

Por todo esto, cuando nosotras enviamos header params al servidor, en el objeto `req.headers` hay muchos más datos.

Uno de los parámetros más importantes que envía el navegador es el **`user-agent`**, en el que especifica el modelo de navegador (Chrome, Safari, Firefox, Internet Explorer, Edge...). En el servidor se utiliza este parámetro para:

* Recoger estadísticas de las usuarias.
* Adaptar la respuesta que debe devolver al navegador.

Por ejemplo, si una usuaria entra a una página web desde Internet Explorer 6 (un navegador del que solo han oído hablar las más viejas del lugar), algún servidor devolverá un HTML con un mensaje del tipo "Nuestra página es muy moderna y no está preparada para navegadores tan viejunos. Por favor, actualícese".

Por cierto: en algunas entrevistas técnicas se suele preguntar qué es el User Agent.

#### Identificación de la usuaria

Te preguntarás para qué se usan los header params. Ahora vamos a explicar un uso bastante común en proyectos reales, que seguramente te tocará programar cuando estés trabajando en una aplicación de una empresa.

Normalmente cuando una usuaria se registra o identifica en una página **las programadoras intercambiamos información entre navegador y servidor mediante los siguientes pasos**:

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-32b2dca139a0e5f6c9f3996e598aa1e1176ff404%2Fexpress-id-de-la-usuaria-en-header-params.png?alt=media)

1. La usuaria rellena el formulario de login. Desde el navegador enviamos una petición al servidor con:
   * El email y la contraseña (por body params)
   * El verbo POST
   * El endpoint (suele ser `/login`)
2. En el servidor escuchamos y atendemos esta petición, buscamos en la base de datos a la usuaria con ese email y esa contraseña.
3. Respondemos al navegador con un JSON que contiene **el id de la usuaria**.
4. Con el JS del navegador recibimos la respuesta y **almacenamos en el local storage el id de la usuaria**.
5. Un rato después, cuando la usuaria navega y entra, por ejemplo, en su página de pedidos, desde el navegador hacemos un fetch para traernos estos datos de la usuaria. Para ello lo primero que hacemos es recuperar el **id de la usuaria** desde el local storage.
6. A continuación enviamos una nueva petición al servidor para recuperar los pedidos de la usuaria con:
   * El verbo GET
   * El endpoint `/orders`
   * **El id de la usuaria en el header.**
   * Otros datos en query params o URL params, como el orden en el que queremos obtener los pedidos.
7. En el servidor atendemos esta nueva petición sabiendo qué petición es, qué datos recibe y **el id de la usuaria** que está haciendo la petición. Con este id podemos obtener sus pedidos desde la base de datos.
8. Una vez obtenidos los pedidos de la usuaria en el servidor los devolvemos al navegador para que este los pinte.

Resumen: **al enviar el id de la usuaria por header params, en el servidor sabemos qué usuaria es**.

> Si te preguntas por qué guardamos el **id de la usuaria en el local storage**, es porque queremos seguir teniendo identificada a la usuaria en el navegador, aunque ella lo cierre y lo vuelva a abrir.

### Conclusiones

Para trabajar con header params debemos saber que:

* Desde el navegador:
  * Se pueden enviar en todos los tipos de peticiones (GET, POST, PUT, PATCH...).
  * Se tienen que enviar siempre desde un `fetch`.
  * Se envían añadiendo un objeto `headers` al fetch.
* En el servidor:
  * Recibimos los datos en el objeto `req.headers` o a través del método `req.header('nombre-de-header-param')`.
  * Todos los datos enviados por header param se reciben en el servidor como **string**.
  * Todos los nombres de propiedades del objeto `req.headers` nos llegan al servidor en **minúsculas**.

### Ejercicios

#### 1. Investiga cómo recibir header params

1. Descarga, instala y arranca este [ejercicio](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/node-express-request-header-params).
2. Entra en <http://localhost:3000> y pulsa en el botón.
3. Comprueba qué datos estás recibiendo en el servidor.
4. Abre el fichero `public/js/main.js` y mira qué datos se están enviando en la cabecera.
   1. Cambia los datos que se están enviando para enviar otro tipo de datos, como números enteros, decimales, booleanos, objetos...

#### 2. User Agent

1. Partiendo del ejercicio anterior, ¿puedes averiguar el modelo de tu navegador?
2. Haz una nueva petición al servidor utilizando Postman y mira qué valor tiene el header param `user-agent`.
