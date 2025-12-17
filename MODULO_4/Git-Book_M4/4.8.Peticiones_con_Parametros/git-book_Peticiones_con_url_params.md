# 4.8.3 Peticiones con url params

En esta lección vamos a explicar cómo enviar datos a través de URL params. Es exactamente lo mismo que enviar datos con query params o body params, pero por otro sitio.

Imagina que estás construyendo un sitio web para una tienda en línea que vende productos. En lugar de tener una página separada para cada producto, puedes usar URL params para crear rutas dinámicas y mostrar información específica de cada producto en una sola plantilla de página.

Por ejemplo, supongamos que tienes la siguiente URL base:

```jsx
https://www.ejemplo.com/producto/
```

Para crear una ruta dinámica que muestre detalles de un producto en particular, puedes agregar un parámetro de URL para identificar ese producto. Por ejemplo:

```jsx
https://www.ejemplo.com/producto/123
```

En este caso, "123" podría ser el identificador único de un producto en tu base de datos. Al acceder a esta URL, el servidor web puede interpretar el parámetro "123" y cargar la información correspondiente a ese producto específico.

Luego, en el lado del servidor, puedes utilizar ese parámetro de URL para buscar en la base de datos el producto con el ID "123" y generar dinámicamente la página de detalles de ese producto. Esto permite que cada producto tenga su propia URL y que los usuarios accedan directamente a la información relevante.

Además de la ID del producto, puedes utilizar otros parámetros de URL para personalizar aún más las rutas dinámicas. Por ejemplo, podrías tener parámetros para filtrar por categoría, ordenar los resultados, aplicar descuentos, etc.

Para acceder a los parámetros en la url, como por ejemplo un `id`, es necesario definir el parámetro utilizando el símbolo `:` seguido del nombre del parámetro, el cual podrá obtenido mediando `req.params`

Por ejemplo, para obtener un artículo específico a través de su id.

```jsx
app.get('/articles/:id', (req, res) => {
  const articleId = req.params.id;

  getArticleFromId(articleId, (error, user) => {
    if (error) return res.status(500).send(error);
    res.status(200).send(user);
  });
});
```

En este [ejercicio](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/node-express-request-url-params) hay un ejemplo de un servidor realizado con Express que devuelve los datos de una promo dado el identificador de la misma. Puedes descargarlo y probarlo en tu ordenador.

{% embed url="<https://youtu.be/Yqa8eoZfxt0>" %}

> [Ejercicio del vídeo](https://github.com/Adalab/ejercicios-de-los-materiales/tree/main/node-express-request-url-params)

### Múltiples URL params

¿Crees que un endpoint puede tener varios URL params? Claro que sí, guapa.

Si deseamos por ejemplo extraer todos los comentarios realizados por un usuario en un articulo, podemos usar múltiples parámetros.

```jsx
app.get('/articles/:articleId/comentarios/:userId', (req, res) => {
  const articleId = req.params.articleId;
  const userId = req.params.userId;

  leerComentarios(articleId, userId, (error, comments) => {
    if (error) return res.status(500).send(error);
    res.status(200).send(comments);
  });
});
```

Otro ejemplo si creáramos una tienda online, lo normal sería crear los siguientes endpoints:

* <http://localhost:3000/users/123>: que devolvería un **objeto con la información de la usuaria** que tenga el id **123**.
* <http://localhost:3000/users/123/orders>: que devolvería un **array con los pedidos de la usuaria** que tenga el id **123**.
* <http://localhost:3000/users/123/orders/456>: que devolvería un **objeto con la información del pedido** que tenga el id **456** de la usuaria con el id **123**.
* Y lo mismo para otros endpoints que devuelvan el listado de direcciones postales, el listado de métodos de pago, etc.

Pues bien, si en el servidor creamos un endpoint que sea:

* <http://localhost:3000/users/:userId/orders/:orderId>

En `req.params` Express JS nos metería el objeto:

```js
{
  userId: 123,
  orderId: 456
}
```

### Conclusiones

Para trabajar con URL params debemos saber que:

* Desde el navegador:
  * Como van en la URL y todas las peticiones tienen URL, se pueden utilizar con cualquier verbo (GET, POST, PUT, PATCH...).
  * Se pueden usar para hacer peticiones desde la barra de direcciones del navegador o a través de un `fetch`.
* En el servidor:
  * Recibimos los datos en `req.params`.
  * Todos los datos enviados por URL param se reciben en el servidor como **string**.

### Ejercicios

#### 1. Endpoint para devolver un pedido

Vamos a hacer un servidor que, cuando se le haga una petición a la URL <http://localhost:3000/users/123/orders/456>, la gestione y devuelva algo. ¿Qué tiene que devolver? Da igual, porque aquí nos interesa la parte de la petición, no la de la respuesta.

1. Crea un nuevo proyecto con un servidor de Express JS.
2. En `src/index.js` crea un endpoint de tipo GET que sea capaz de atender la petición <http://localhost:3000/users/123/orders/456> y consolear en la terminal los parámetros de la URL.

> **Nota:** Usa Postman y así no perderás tiempo en montar una web.

#### 2. Troceando a Rick y Morty

Vamos a crear una API que devuelva los datos de Rick y Morty que ya conocemos, pero separados en varios endpoints diferentes.

Cuando hicimos el proyecto de Rick y Morty usamos [un único endpoint que devuelve 10 personajes](https://rickandmortyapi.com/documentation/#get-all-characters). Partiendo de esta información, queremos crear varios endpoints y que cada uno devuelva la información de un único personaje, como por ejemplo:

* <https://rickandmortyapi.com/api/character/1> devuelve solo los datos de Rick Sánchez.
* <https://rickandmortyapi.com/api/character/2> devuelve solo los datos de Morty Smith.

En los endpoints anteriores, ¿sabrías decir cuáles son los URL params?

Sigue los siguientes pasos para conseguirlo:

1. Crea un nuevo proyecto con un servidor de Express JS.
2. Haz una bases de datos que contenga los datos de Rick y Morty que se pueden ver [aquí](https://github.com/Adalab/curso-intensivo-fullstack-recursos/blob/main/apis/rick-and-morty-v1/characters.json).
3. Crea un endpoint para recuperar los datos de un personaje:

   * El endpoint debe ser GET, con la ruta `http://localhost:3000/users/1/` y tiene que devolver:

   ```json
   {
       "id": 1,
       "name": "Rick Sanchez",
       "status": "Alive"
       ...
   }
   ```

   > Recuerda que los datos que vienen dentro de `req.params` siembre son string, pero el `"id": 1` es un número. ¿Sabes qué tienes que hacer para compararlos?
4. Crea otro endpoint para obtener el listado de episodios de un personaje:
   * También debe ser de tipo GET, con la URL `http://localhost:3000/users/1/episodes` y tiene que devolver:

     ```json
     [
       "https://rickandmortyapi.com/api/episode/1",
       "https://rickandmortyapi.com/api/episode/2",
       "https://rickandmortyapi.com/api/episode/3",
       ...
     ]
     ```

> **Nota:** Usa Postman y así no perderás tiempo en montar una web.

Si vemos la [documentación de la API de Rick y Morty](https://rickandmortyapi.com/) nos podemos imaginar cómo están programados cada uno de los endpoints:

* [Obtener un personaje](https://rickandmortyapi.com/documentation/#get-a-single-character)
* [Obtener un episodio](https://rickandmortyapi.com/documentation/#get-a-single-episode)
* [Obtener una localización](https://rickandmortyapi.com/documentation/#get-a-single-location)
