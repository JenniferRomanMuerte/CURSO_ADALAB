# 4.2.1 Insertar datos

Para trabajar con una base de datos podemos hacer 4 operaciones básicas:

* Añadir un nuevo registro, que es la que vamos a aprender en esta lección
* Borrar un registro existente
* Modificar un registro existente
* Leer uno o varios registros

A estas operaciones se les llama **CRUD**: create, read, update and delete.

#### Consideraciones sobre las operaciones de una base de datos

* **La operación de lectura no modifica la base de datos.** El resto de operaciones sí.
* **Todas estas operaciones se realizan sobre una única tabla.** Por ahora, si queremos hacer operaciones sobre varias tablas tenemos que hacer varias consultas o queries por separado.
* Existen operaciones más complejas, pero siempre son combinaciones de estas 4 operaciones básicas.
* Cada vez que accedemos a una base de datos decimos que hacemos una **query o consulta a la base de datos**.

### Sintaxis de INSERT INTO en MySQL

`INSERT INTO` nos permite **añadir un registro a una tabla** de la base de datos a través de una query. Así como leer registros de una tabla no modifica la base de datos, añadir un registro sí que la modifica.

La instrucción `insert` permite añadir un nuevo registro a una tabla de la base de datos, por ejemplo, cada vez que te registras en una web se está haciendo un `insert`con tus datos, estos se guardan en una tabla especifica.

La sintaxis de un `INSERT INTO` es:

```sql
INSERT INTO nombre_de_la_tabla (nombre_de_una_columna, nombre_de_otra_columna)
VALUES (valor_de_una_columna, valor_de_otra_columna)
```

Supongamos que es necesario insertar en la tabla llamada `users` los siguientes datos:

| id | email               | password     | name  |
| -- | ------------------- | ------------ | ----- |
| 1  | <maria@gmail.com>   | 987widJYVxyh | María |
| 2  | <lucia@hotmail.com> | qwertyui     | Lucía |
| 3  | <sofia@yahoo.com>   | mnbvcdfgu    | Sofía |

El código para insertar cada uno de los valores en la bases de datos seria asi:

```sql
-- Añadir varios registros indicando algunas columnas y el valor de cada columna
INSERT INTO users (email, password, name)
VALUES ('maria@gmail.com', '987widJYVxyh', 'María'),
       ('lucia@hotmail.com', 'qwertyui', 'Lucía'),
       ('sofia@yahoo.com', 'mnbvcdfgu', 'Sofía');
```

#### INSERT INTO indicando solo algunas columnas

Si se necesita solo insertar algunos valores se puede hacer una query solo especificando las columnas que nos interesan, por ejemplo:

```sql
-- Añadir un nuevo registro indicando algunas columnas y el valor de cada columna
INSERT INTO users (email, password)
VALUES ('celia@gmail.com', 'fas09fn32');
```

Como no hemos añadido la columna `name` en la query, la usuaria 4 no tiene nombre y la tabla quedará así:

| id | email                 | password      | name  |
| -- | --------------------- | ------------- | ----- |
| 1  | <maria@gmail.com>     | 987widJYVxyh  | María |
| 2  | <lucia@hotmail.com>   | qwertyui      | Lucía |
| 3  | <sofia@yahoo.com>     | mnbvcdfgu     | Sofía |
| 4  | **<celia@gmail.com>** | **fas09fn32** |       |

#### INSERT INTO indicando todas las columnas

Si a continuación añadimos otro registro con la query especificando todas las columnas quedaría así:

```sql
-- Añadir un nuevo registro indicando todas columnas y el valor de cada columna
INSERT INTO users (email, password, name)
VALUES ('tania@gmail.com', '09df34D43', 'Tania');
```

| id | email                 | password      | name  |
| -- | --------------------- | ------------- | ----- |
| 1  | <maria@gmail.com>     | 987widJYVxyh  | María |
| 2  | <lucia@hotmail.com>   | qwertyui      | Lucía |
| 3  | <sofia@yahoo.com>     | mnbvcdfgu     | Sofía |
| 4  | <celia@gmail.com>     | fas09fn32     |       |
| 5  | **<tania@gmail.com>** | **09df34D43** | Tania |

#### Orden de las columnas

Al hacer estas queries tenemos que preocuparnos de que el orden de las columnas coincida con el orden de los valores. Sin embargo, no es necesario que las columnas estén en el mismo orden que en la tabla. Esta consulta:

```sql
INSERT INTO users (email, password, name)
VALUES ('tania@gmail.com', '09df34D43', 'Tania');
```

Es igual que esta:

```sql
INSERT INTO users (name, password, email)
VALUES ('Tania', '09df34D43', 'tania@gmail.com');
```

Ha cambiado el orden de las columnas y el de los valores también, haciéndolos coincidir y el resultado es el mismo.

#### Valor de la columna id

La columna `id` es una columna especial que no rellenamos nosotras si no que va a ser rellenada por SQL. Al crear una base de datos debemos activar la opción `AI` **auto increment** para la columna `id`. Para que esto tenga sentido el tipo de dato debe ser un número, asi como también debe estar marcada la propiedad `PK`. De esta manera, cada vez que añadimos un nuevo registro, SQL calcula automáticamente el valor que debe tener el `id`.

Lo importante es que **nunca debemos indicar el valor de la columna `id`**.

#### Cómo añadir varios registros

Si necesitas añadir varios registros seguimos usando `insert` y podemos hacerlo todos en la misma sentencia, en lugar de ir uno a uno. Para hacerlo se debe separar por una coma cada grupo de valores o registro, recordad estos deben seguir estando en el mismo orden definido al inicio de la sentencia.

```sql
INSERT INTO users (email, password, name) VALUES
('tania@gmail.com', '09df34D43', 'Tania'),
('anacleta@gmail.com', '66df34D66', 'Anacleta');
```

Vamos a ver todo lo que hemos explicado hasta ahora en este vídeo:

{% embed url="<https://youtu.be/TA7GwBXHrEw>" %}

### Conclusiones

1. `INSERT INTO` nos permite añadir un registro a una tabla.
2. La sintaxis de `INSERT INTO` es:

   ```sql
   INSERT INTO nombre_de_la_tabla (nombre_de_una_columna, nombre_de_otra_columna)
   VALUES (valor_de_una_columna, valor_de_otra_columna)
   ```
3. Para insertar más de un registro la sintaxis es:

   ```sql
   INSERT INTO nombre_de_la_tabla (nombre_de_una_columna, nombre_de_otra_columna)
   VALUES (valor_de_una_columna, valor_de_otra_columna),
   (valor_de_una_columna, valor_de_otra_columna),
   (valor_de_una_columna, valor_de_otra_columna),
   (valor_de_una_columna, valor_de_otra_columna),
   (valor_de_una_columna, valor_de_otra_columna)
   ```

### Ejercicios

Haciendo uso de la base de datos librería previamente creada, agrega los siguientes datos:

1. Tres nuevos libros, de los cuales se desconoce el país de origen del autor.
2. Dos libros de los que se conoce todos datos de la tabla.
3. Tres libros cuya fecha de publicación esté entre el año 2000 y 2020.

# 4.2.2 Consulta Select

Cada vez que necesites extraer datos de una base de datos es necesario usar `select`, esta sentencia puede llegar a ser muy compleja porque se puede sacar datos de más de una tabla a la vez, de momento vamos a centrarnos en la estructura básica y algunas de las posibilidades para obtener datos de la base de datos.

### Sintaxis de SELECT en SQL

`SELECT` nos permite **seleccionar o leer uno o varios registros de una o más tablas** de la base de datos.

La sintaxis básica es:

```sql

SELECT columna
FROM tabla
WHERE (condición) -- esta sección es totalmente opcional
```

Supongamos que tenemos esta tabla llamada `users`:

| id | email               | password     | name  |
| -- | ------------------- | ------------ | ----- |
| 1  | <maria@gmail.com>   | 987widJYVxyh | María |
| 2  | <lucia@hotmail.com> | qwertyui     | Lucía |
| 3  | <sofia@yahoo.com>   | mnbvcdfgu    | Sofía |

#### SELECT

Con `SELECT` seleccionamos las columnas que queremos leer y con `FROM` elegimos el nombre de la tabla de donde queremos leer. Por ello:

```sql
-- Seleccionar solo el id y el email de todas las usuarias
SELECT id, email
FROM users
```

```sql
-- Seleccionar todas las columnas o datos de todas las usuarias
SELECT *
FROM users
-- El símbolo * indica que queremos seleccionar todas las columnas de una tabla.
```

`SELECT` y `FROM` son palabras propias del lenguaje **SQL** y para hacer la query de lectura son obligatorias. Estas palabras da igual si las escribimos en mayúsculas o en minúsculas pero por buenas prácticas vamos a escribirlas en mayúsculas para diferenciarlas del resto.

#### WHERE

La mayoría de las veces no quieres extraer todos los registros de una tabla, piensa en una tabla que tenga miles de filas, esto seria ineficiente es por ello que podemos filtrar los registros haciendo uso de `WHERE`.

Con `WHERE` indicamos la o las condiciones que debe cumplir el registro (o fila) para poder seleccionarlo. Sería como hacer `filter` o un `if` de JavaScript: queremos leer una fila **si** cumple la **condición** indicada:

```sql
-- Seleccionar todas las columnas de todas las usuarias cuyo id sea mayor o igual que 2
SELECT *
FROM users
WHERE id >= 2
-- Esto nos devolverá 0, 1 o varios registros
```

```sql
-- Seleccionar todas las columnas de la usuaria cuyo id sea igual a 2, esto nos devolverá solo un registro
SELECT *
FROM users
WHERE id = 2
-- Esto nos devolverá 0 o 1 registros en función de si en la tabla existe el id
```

```sql
-- Seleccionar todas las columnas de la usuaria cuyo email sea lucia@hotmail.com
SELECT *
FROM users
WHERE email = 'lucia@hotmail.com'
```

```sql
-- Seleccionar todas las columnas de la usuaria cuyo email sea lucia@hotmail.com y el password sea qwertyui
SELECT *
FROM users
WHERE email = 'lucia@hotmail.com' AND password = 'qwertyui'
```

`WHERE` no es obligatorio al hacer una query de lectura, pero casi siempre lo usamos. Si una consulta no tiene `WHERE` nos devolverá todos los registros de una tabla.

Las condiciones que se pueden poner en el `WHERE` no tienen por qué estar relacionadas solamente con las columnas que estamos seleccionando, sino que puede estar relacionada con cualquier otro campo de la tabla.

> **Nota:** WHERE también es muy usado en operaciones de modificación y borrado de registros en tablas. Lo veremos más adelante.

**Operadores lógicos**

Se pueden establecer más de una condición de filtrado en `select` tal como se muestra en la última query, para ello es necesario usar operadores lógicos:

* `AND` con este operador indicamos en SQL que sólo muestre los registro que cumplan con todas las condiciones indicadas.

```sql
-- Seleccionar  las usuaria cuyo email sea lucia@hotmail.com y el password sea qwertyui
SELECT *
FROM users
WHERE email = 'lucia@hotmail.com' AND password = 'qwertyui'
```

* `OR` por otro lado hay ocasiones donde nos interesa especificar varias condiciones y si se cumple alguna de ellas bastará para que muestre ese registro, ese es el caso perfecto para usar el `OR`

```sql
-- Seleccionar  las usuaria cuyo email sea lucia@hotmail.com o el name sea María
SELECT *
FROM users
WHERE email = 'lucia@hotmail.com' OR name = 'maria'
```

* `NOT` por último, podríamos seleccionar los registros que **no** cumplen cierta condición. Para ello utilizaremos el operador NOT, que negará la condición que venga después del mismo.

```sql
-- Seleccionar  las usuaria cuyo nombre NO sea Sofía
SELECT *
FROM users
WHERE NOT name = 'Sofía'
-- Se descartará a las usuaria  que su nombre sea Sofía
```

**Operadores de comparación**

Hasta este punto solamente hemos visto rápidamente algún operador de comparación y de forma intuitiva sabes a que hace referencia. A continuación, se indica los operadores que se pueden utilizar en SQL:

* **`=`** columna sea igual a un valor.
* **`<>`** columna sea distinta a un valor.
* **`<`** columna sea menor a un valor.
* **`>`** columna sea mayor a un valor.
* **`<=`** columna sea menor o igual a un valor.
* **`>=`** columna sea mayor o igual a un valor.

#### ORDER BY

`ORDER BY` es un operador adicional que se incluye después del `WHERE` y podemos indicar el orden en el que queremos leer los registros, se indica la o las columnas por las que queremos que se ordene el resultado final que vamos a visualizar

```sql
-- Seleccionar todas las columnas de todas las usuarias y las ordena por nombre de forma ascendente: A-Z
SELECT *
FROM users
ORDER BY name ASC
```

```sql
-- ASC es el orden por defecto, así que lo podemos omitir. Esta query es igual que la anterior
SELECT *
FROM users
ORDER BY name
```

```sql
-- Seleccionar todas las columnas de todas las usuarias y las ordena por nombre de forma descendente: Z-A
SELECT *
FROM users
ORDER BY name DESC
```

```sql
-- Seleccionar todas las columnas de todas las usuarias y las ordena por nombre de forma descendente y a continuación por email de forma descendente
SELECT *
FROM users
ORDER BY name ASC, email DESC
```

`ORDER BY` no es obligatorio al hacer una query de lectura.

Normalmente la columna que se usa como criterio de ordenación también se incluye entre las seleccionadas en el `SELECT`, pero no es obligatorio que sea así. Podríamos ordenar los registros por cualquier columna definida en la tabla.

#### LIMIT y OFFSET

Con `LIMIT` indicamos el **número máximo de registros** que queremos leer:

```sql
-- Seleccionar todas las columnas hasta un máximo de 2 usuarias
SELECT *
FROM users
LIMIT 2
-- Esta query nos devuelve como máximo 2 registros aunque la tabla tenga más
```

Con `OFFSET` indicamos el primer registro a partir del cual queremos leer:

```sql
-- Seleccionar todas las columnas hasta un máximo de 2 usuarias empezando en la posición 5
SELECT *
FROM users
LIMIT 2
OFFSET 5
-- Esta consulta nos devolverá los registros 6º y 7º
```

Ni `LIMIT` ni `OFFSET` son obligatorios al hacer una query de lectura.

`LIMIT` y `OFFSET` son muy útiles cuando tenemos muchos registros en una tabla. Por ejemplo, cuando entramos en nuestro Twitter, la web solo nos muestra los primeros 50 tweets. Si bajamos hasta el final de la web nos muestra los siguientes 50 tweets. Esto se haría con las siguientes consultas:

```sql
-- Query de los primeros 50 tweets: seleccionar todos los tweets hasta un máximo de 50 tweets
SELECT *
FROM tweets
ORDER BY id
LIMIT 50
-- Esta consulta nos devolverá los registros desde el id 1 hasta el id 49
```

```sql
-- Query de los siguientes 50 tweets: seleccionar todos los tweets hasta un máximo de 50 tweets empezando por el número 50
SELECT *
FROM tweets
ORDER BY id
LIMIT 50
OFFSET 50
-- Esta consulta nos devolverá los registros desde el id 50 hasta el id 99
```

### DISTINCT

El operador `DISTINCT` nos ayudará a listar en el resultado final únicamente los valores diferentes que toma un atributo en la tabla. De esta manera se eliminarán del resultado los valores duplicados.

```sql
SELECT DISTINCT name
FROM users;
```

En el caso anterior la consulta seleccionaría en primer lugar el atributo **name** de todos los registros de la tabla users. Después, gracias al operador `DISTINCT` se seleccionarán los valores diferentes que toma el atributo **name**. El resultado será que trae solo las usuarias con nombres diferentes, si hay mas de una usuaria que se llame **María** solo lo mostrará una vez.

`DISTINCT` puede usarse también cuando elegimos más de una columna con SELECT:

```sql
SELECT DISTINCT name, email
FROM users;
```

En el ejemplo anterior la consulta selecciona las columnas **email** y **name** para todos los registros de la tabla users . A continuación `DISTINCT` afectará a todas las columnas del SELECT. Si hubiese en la tabla una usuaria con el mismo **email** y **name**, solo se mostraría una vez en el resultado final.

### BETWEEN

`BETWEEN` es equivalente a hacer una búsqueda con los operadores de comparación **<= y >=** es decir, buscar valores que se encuentre en un rango dado. Los valores pueden ser números, texto o fechas. Este operador es inclusivo, se incluyen los valores inicial y final.

```sql
--  Selecciona las usuarias cuyo id se encuentre entre 5 y 10 (ambos incluidos)
SELECT name, email
FROM users
WHERE id BETWEEN 5 and 10
```

### IN

Este operador es bastante útil y consiste en seleccionar los registros cuyo valor de una columna se encuentra entre en un listado dado. El operador `IN` es una forma abreviada de hacer múltiples condiciones con `OR` en un `WHERE`.

```sql
--  Selecciona las usuarias cuyo name sea María o Lucía
SELECT name AS Nombre, email as Usuario
FROM users
WHERE name IN ('María', 'Lucía');
```

### AS

El `AS` es un comando que se usa para cambiar el nombre de una columna o tabla con un alias. Es importante destacar que estos alias son temporales y solo existe mientras dura la consulta. Es decir no afecta los nombre originales de la tabla o la columna

```sql
SELECT name AS Nombre, email AS Usuaria
FROM users
WHERE name IN ('María', 'Lucía');
```

El resultado que se obtiene con los alias es el siguiente:

| Nombre              | Usuario      |
| ------------------- | ------------ |
| <maria@gmail.com>   | 987widJYVxyh |
| <lucia@hotmail.com> | qwertyui     |
| <sofia@yahoo.com>   | mnbvcdfgu    |

En el ejemplo anterior hemos creado dos alias para las columnas del resultado final. Decidimos cambiar los nombres de las columnas que visualizábamos originalmente, por sus traducciones en castellano, pero cualquier otro cambio es posible. No es necesario hacerlo para todos a la vez, podría cambiarse solo el nombre de la tabla o de una de las columnas.

En el siguiente video os contamos todo lo anterior:

{% embed url="<https://youtu.be/UxHSjGIlikY>" %}

### Otras opciones para hacer un SELECT

Las opciones para leer datos de SQL son infinitas. Por ejemplo:

```sql
-- Seleccionar todas las columnas de todas las usuarias que tengan un id diferente de 2
SELECT * FROM users WHERE id <> 2
```

```sql
-- Seleccionar todas las columnas de la usuaria que tenga un id = 2 o un email = lucia@hotmail.com
SELECT * FROM users WHERE id = 1 OR email = 'lucia@hotmail.com'
```

```sql
-- Seleccionar todas las columnas de todas las usuarias cuyo email contenga la palabra: gmail
SELECT * FROM users WHERE email LIKE '%gmail%'
-- LIKE es muy usado para hacer búsquedas por palabras en una base de datos
```

### La sintaxis de SQL es muy amplia

En este curso te enseñamos la sintaxis de SQL más usada y más importante, pero SQL tiene muchísimas opciones. Cada vez que estés programando y tengas que hacer una query y no sepas cómo, siempre debes:

* **puedes buscar la solución en Internet**. Seguramente SQL disponga de opciones para hacer lo que quieres. Usarlas nos permite:
  * Hacer queries más rápidas, que ya SQL está pensado para ello.
  * Aprender una cosa nueva sobre SQL.
* Te recomendamos que al buscar escribas **MySQL** y lo que estés buscando, por ejemplo:
  * MySQL WHERE with AND
  * MySQL filtrar por id
  * MySQL obtener los primeros 10 registros
  * ...

### Conclusiones

1. `SELECT` nos permite seleccionar o leer uno o varios registros de una tabla.Nuestro trabajo cuando leemos datos de una tabla es combinar `SELECT`, `FROM`, `WHERE`, `ORDER BY`, `OFFSET` y `LIMIT` para obtener los datos que queremos.
2. La sintaxis de `SELECT` es:
   * `SELECT` seguido de asterisco para seleccionar todas las columnas o el nombre de las columnas separadas por comas
   * `FROM` seguido del nombre de la tabla
   * `WHERE` seguido de la condición o condiciones que deben cumplir los datos
   * `ORDER BY` seguido del nombre de la columna por la que queremos ordenar, seguido de `ASC` o `DESC` que indica si la ordenación es ascendente o descendente
   * `LIMIT` seguido del número máximo de registros que queremos seleccionar
   * `OFFSET BY` seguido del número del primer elemento que queremos seleccionar
3. **Mayúsculas vs. minúsculas:** normalmente escribimos en **mayúsculas** las palabras `SELECT`, `FROM`, `WHERE`, `ORDER BY`, `LIMIT` y otras que aprenderemos en próximas lecciones **porque son palabras del lenguaje SQL**. Y escribimos en **minúsculas o camelCase las columnas y los nombres de las tablas**. Esta forma no es obligatoria pero facilita la lectura de las queries.
4. **Comentarios:** todos los lenguajes de programación tienen caracteres para indicar comentarios. En JS ponemos `// mi comentario` o `/* mi comentario */`. En SQL los comentarios se ponen con dos guiones `--` al principio de la query.

### Ejercicios

#### 1. El blog: tabla de artículos

Haciendo uso de la base de datos librería crea una tabla una para almacenar los artículos escritos por la autora:

1. Crea una tabla llamada articles con las siguientes columnas:
   1. Título del artículo
   2. Cuerpo del artículo
   3. URL de la imagen principal
   4. Fecha de publicación
   5. Borrador o publicado
   6. Autor
   7. Cualquier otro campo que te parezca bien
2. Antes de continuar:
   1. Revisa qué tipos de datos y restricciones le has puesto a cada columna.
   2. ¿Has puesto alguna columna para identificar cada artículo?
3. Crea 4 artículos rellenando todas las columnas (**haz un insert**).
   1. Haz que dos de ellos contengan las palabras **bases de datos** en el título.
   2. Haz que dos de ellos tú seas la autora.
4. Ejecuta las siguientes queries:
   1. Selecciona todos los artículos.
   2. Selecciona el artículo que tiene el `id = 2`.
   3. Selecciona todos los artículos que tengan en el título la palabra **datos**. Te ayudará buscar en Internet [SQL- like](https://www.google.com/search?q=sql+like\&oq=sql+like\&aqs=chrome.0.69i59j0l9.3481j0j7\&sourceid=chrome\&ie=UTF-8).
   4. Selecciona los artículos que la fecha de publicación sea antes de 2020.
   5. Selecciona sólo los artículos donde tú seas la autora, ordenado de forma ascendente por titulo del artículo.

Después de cada consulta comprueba que los resultados que muestra MySQL tienen sentido.


# 4.2.2 Consulta Update

`UPDATE` nos permite **modificar uno o varios registros de una tabla** de la base de datos a través de una query. Es importante resaltar que esta sentencia se usa para modificar datos que ya existan en la tabla. Caso de uso reales: cuando por ejemplo quieres modificar una contraseña, o necesitas modificar tu dirección en tu perfil de usuario.

Así como leer registros de una tabla no modifica la base de datos, actualizar uno o varios registros sí que la modifica.

### Sintaxis de UPDATE en SQL

La sintaxis de un `UPDATE` es:

```sql
UPDATE nombre_tabla
SET nombre_columna1 = valor_columna1, nombre_columna2 = valor_columna2
WHERE condiciones_que_cumplen_los_registros_a_modificar
```

Para esta sentencia aunque el `WHERE` **no** es obligatorio, es conveniente ponerlo siempre, porque sino se modificaran todos los registros de la tabla.

Supongamos que tenemos esta tabla llamada `users`:

| id | email               | password     | name  |
| -- | ------------------- | ------------ | ----- |
| 1  | <maria@gmail.com>   | 987widJYVxyh | María |
| 2  | <lucia@hotmail.com> | qwertyui     | Lucía |
| 3  | <sofia@yahoo.com>   | mnbvcdfgu    | Sofía |

Con la query:

```sql
-- Actualizar el email de la usuaria que tiene el id = 3
UPDATE users SET email = 'sofia.garcia@yahoo.com' WHERE id = 3
```

La tabla quedará así:

| id | email                        | password     | name  |
| -- | ---------------------------- | ------------ | ----- |
| 1  | <maria@gmail.com>            | 987widJYVxyh | María |
| 2  | <lucia@hotmail.com>          | qwertyui     | Lucía |
| 3  | **<sofia.garcia@yahoo.com>** | mnbvcdfgu    | Sofía |

Por otro lado, con la query:

```sql
-- Actualizar el email y la contraseña de la usuaria que tiene el id = 3
UPDATE users SET email = 'sofia.garcia@yahoo.com', password = 'abcdefgh'
WHERE id = 3
```

La tabla quedará así:

| id | email                        | password     | name  |
| -- | ---------------------------- | ------------ | ----- |
| 1  | <maria@gmail.com>            | 987widJYVxyh | María |
| 2  | <lucia@hotmail.com>          | qwertyui     | Lucía |
| 3  | **<sofia.garcia@yahoo.com>** | **abcdefgh** | Sofía |

#### ¡¡¡UPDATE sin WHERE es igual a muerte, destrucción y caos!!!

Si hacemos una query para modificar registros de una tabla y no indicamos la condición `WHERE`, **se modificarán todos los registros de la tabla**. ¡¡¡Todos!!! Esto es porque todos los registros cumplen la condición vacía.

La condición `WHERE` no es obligatoria, pero pocas veces vamos a querer cambiar todos los registros de una tabla. Así que cuando hagas un `UPDATE` piensa dos veces si debes o no poner `WHERE`.

Con `UPDATE` y `WHERE` podemos actualizar uno o varios registros en una sola query. Todo depende de la condición que pongamos en el `WHERE`.

#### No debemos modificar el campo id

Anteriormente hemos comentado que el campo `id` es como el DNI del registro. Por ello, aunque se puede, no debemos modificarlo, pues nos puede dar muchos problemas.

Vamos a ver todo lo que hemos explicado hasta ahora en este vídeo:

{% embed url="<https://youtu.be/RhZsH1UdAmw>" %}

### Conclusiones

1. `UPDATE` nos permite modificar uno o varios registros de una tabla.
2. La sintaxis de `UPDATE` es:

   ```sql
   UPDATE nombre_tabla
   SET nombre_columna1 = valor__columna1, nombre_columna2 = valor_columna2
   WHERE condiciones_que_cumplen_los_registros_a_modificar
   ```

### Ejercicios:

#### 1. Actualizando libros

Partiendo del ejercicio de la lección de **SQL INSERT**

* Modifica el título de la tabla **article** con las siguientes condiciones:
  * `id` igual a 2.
* Modifica la cantidad de stock de todos los registros de la tabla libros incrementando 10 unidades.
* Modifica el precio, incrementando un 10% de los libros que son de tipo físicos. Piensa que hay libros digitales


# 4.2.3 Consulta Delete

`DELETE` es muy similar al `update` y nos permite **borrar uno o varios registros de una tabla** de la base de datos a través de una query.

Así como leer registros de una tabla no modifica la base de datos, borrar uno o varios registros sí que la modifica.

### Sintaxis de DELETE en SQL

La sintaxis de un `DELETE` es:

```sql
DELETE FROM nombre_tabla WHERE condiciones_que_cumplen_los_registros_a_borrar
```

Supongamos que tenemos esta tabla llamada `users`:

| id | email               | password     | name  |
| -- | ------------------- | ------------ | ----- |
| 1  | <maria@gmail.com>   | 987widJYVxyh | María |
| 2  | <lucia@hotmail.com> | qwertyui     | Lucía |
| 3  | <sofia@yahoo.com>   | mnbvcdfgu    | Sofía |

Con la query:

```sql
-- Borrar un registro indicando el id del registro a borrar
DELETE FROM users WHERE id = 2;
```

La tabla quedará así:

| id | email             | password     | name  |
| -- | ----------------- | ------------ | ----- |
| 1  | <maria@gmail.com> | 987widJYVxyh | María |
| 3  | <sofia@yahoo.com> | mnbvcdfgu    | Sofía |

#### ¡¡¡DELETE sin WHERE es igual a muerte, destrucción y caos!!!

Si hacemos una query para borrar registros de una tabla y no indicamos la condición `WHERE` **se borrarán todos los registros de la tabla**. ¡¡¡Todos!!! Esto es porque todos los registros cumplen la condición vacía.

La condición `WHERE` no es obligatoria, pero no se nos debe olvidar nunca a no ser que queramos vaciar una tabla.

Con `DELETE` y `WHERE` podemos borrar uno o varios registros en una sola query. Todo depende de la condición que pongamos en el `WHERE`.

**Y para que no se nos olvide** [**hemos compuesto esta canción**](https://www.youtube.com/watch?v=i_cVJgIz_Cs)

Vamos a ver todo lo que hemos explicado hasta ahora en este vídeo:

{% embed url="<https://youtu.be/uD5htOD5anQ>" %}

### Conclusiones

1. `DELETE` nos permite eliminar uno o varios registros de una tabla.
2. La sintaxis de `DELETE` es:

   ```sql
   DELETE FROM nombre_tabla WHERE condiciones_que_cumplen_los_registros_a_borrar
   ```

### Ejercicios

#### 1. Borrando libros

Partiendo del ejercicio 1 de la lección `SQL INSERT`:

* Crea una query `DELETE` que borre el libro cuyo `id` es igual a 2
* Crea una query `DELETE` que borre todos los libros que sean físicos y no tengan stock.
