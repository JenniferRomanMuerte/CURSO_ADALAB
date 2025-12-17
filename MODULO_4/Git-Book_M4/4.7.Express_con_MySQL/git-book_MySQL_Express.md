# 4.7.2 MySQL y ExpressJS

En lecciones anteriores hemos visto como crear bases de datos y trabajar con ellas en MySqlWorkbench. En la lección de hoy vamos a concentrarnos en como conectarnos a una bases de datos desde Express JS y trabajar con las tablas, realizar consultas, insertar datos y modificar desde Nodejs.

### Crear una bases de datos Mysql

El primer paso para poder conectar nuestro servidor con la bases de datos, es crearla, esto lo puedes hacer sobre MySqlWorkbench.

### Instala node-mysql

En [NPM](https://www.npmjs.com/) hay muchos módulos para acceder a todo tipo bases de datos. En Adalab vamos a utilizar el paquete node-mysql, y lo puedes instalar utilizando el gestor de paquetes `npm`

```bash
npm install mysql2
```

Tras instalar `node-mysql2` se añadirá esta dependencia a nuestro `package.json` y podrás conectarte a la base de datos mediante Node JS

### Establece la conexión a MySQL

Dentro de nuestro `index.js` que es donde estamos creando el servidor, vamos a establecer la conexión con la bases de datos. Para trabajar sobre un ejemplo, imagina que tienes una bases de datos con una la tabla empleados.

Crea una función para realizar conexión para conectarte con la base de datos MySQL.

```jsx
const mysql = require('mysql2/promise');

async function getConnection() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    database: 'empleados',
    user: 'root',
    password: 'tuPassword',
  });
  await connection.connect();

  console.log(
    `Conexión establecida con la base de datos (identificador=${connection.threadId})`
  );

  return connection;
}
```

> NOTA: Recuerda hacer el `npm install mysql2` en la carpeta del proyecto con Express. Recuerda, también, cambiar `tuPassword` por la contraseña de tu base de datos. Para trabajar con este código reemplaza el nombre de la base de datos que quieras utilizar.

### Consultas dentro de un endpoint

Normalmente usaremos la base de datos para recuperar de ésta los datos que queremos devolver con nuestro servidor cuando nos llamen a una ruta determinada. Para esto, tendremos que lanzar una query (una sentencia `SELECT`) a la base de datos desde dentro de la función que resuelve un endpoint.

Para ello creamos un endpoint, por ejemplo con la ruta `\user` con el código para lanzar la sentencia `select`, en el ejemplo que estamos trabajando añade al final del fichero `index.js` el siguiente código:

```js
app.get('/user', async (req, res) => {
  console.log('Pidiendo a la base de datos información de los empleados.');
  let sql = 'SELECT * FROM empleados';

  const connection = await getConnection();
  const [results, fields] = await connection.query(sql);
  res.json(results);
  connection.end();
});
}
```

Vamos a ver como trabajar con MySQL y Express JS dentro de un endpoint para crear nuestra primera conexión y devolver información de la bases de datos.

{% embed url="<https://youtu.be/jAKidPOoyE4>" %}

### Consulta con parámetros

Si quisieras hacer una consulta con parámetros, por ejemplo obtener el empleado de un id especifico, sería asi:

```jsx

 let sql = 'SELECT * FROM empleados  WHERE id= ?';

  const connection = await getConnection();
  const [results, fields] = await connection.query(sql, , [id]);
  res.json(results);
  connection.end();
```

Los parámetros en una función se los pasamos como segundo parámetro de la query entre corchetes \[], ya sea en una función `select`, `insert`, `update` o `delete`.

### La sintaxis de MySQL es muy amplia

En este curso te enseñamos la sintaxis de SQL más usada y más importante, pero SQL tiene muchísimas opciones. Cada vez que estés programando en Node JS, tengas que hacer una query y no sepas cómo, tienes dos opciones:

* Pedir muchos datos a la base de datos y luego buscar y / o filtrar en Node JS. Esto no es recomendable ya que:
  * Estás haciendo tú algo en Node JS que SQL sabe hacer bien, y para lo cual ha sido diseñado.
  * Estás manejando una cantidad de datos grande cuando no es necesario.
  * Requiere más líneas de código.
  * Siempre va a ser un proceso más lento.
* O también puedes buscar la solución en Internet. Seguramente SQL disponga de opciones para hacer lo que quieres. Usarlas nos permite:
  * Hacer queries más rápidas, que ya SQL está pensado para ello.
  * Aprender una cosa nueva sobre SQL.
  * Reducir el código de Node JS de nuestro servidor.

#### Búsquedas en Internet

Como hemos comentado, cuando tengas alguna duda sobre cómo realizar una query de cualquier tipo, busca en Internet. Te recomendamos que al buscar escribas MYSQL y lo que estés buscando, por ejemplo:

* MYSQL WHERE with AND
* MYSQL filtrar por id
* MYSQL obtener los primeros 10 registros ...

### Conclusiones

Para usar MySQL dentro de un servidor de Node JS debemos:

1. Crear una bases de datos Mysql
2. Instala node-mysql con `npm install mysql2`
3. Establece la conexión a MySQL
4. Hacer una consulta

### Ejercicios

#### 1. La tienda online: tabla de libros

Ahora vamos a suponer que tenemos que crear una base de datos para una tienda online de libros:

1. Crea una nueva tabla para guardar la siguiente información:
   1. Nombre del libro
   2. Autora del libro
   3. Resumen del libro
   4. Precio del libro
   5. Stock del libro
   6. ¿Es un libro descargable como un ebook o es un libro físico que debemos enviar por mensajería?
2. Crea 5 libros.
3. Crea una API en Node JS que devuelva la siguiente información en diferentes endpoints:
   1. Un array con todos los libros ordenados de menor a mayor precio
   2. Un array con los libros con precio superior a 5 €
   3. Un array con los libros en stock
   4. Un array con los libros físicos y en stock
   5. Un objeto con el libro con `id = 1`
   6. Un array con los 3 primeros libros ordenados alfabéticamente por nombre
   7. Un array con los 3 siguientes libros ordenados alfabéticamente por nombre

Todos los endpoints que hagas deben ser con el método `GET`.

Revisa que la ruta de los endpoints sea coherente con lo que hacen.

> **Nota:** puedes acceder a tu API directamente desde Postman.
