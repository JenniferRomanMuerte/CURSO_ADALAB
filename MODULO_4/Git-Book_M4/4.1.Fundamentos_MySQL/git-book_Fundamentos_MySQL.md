# 4.1.1 Intro a bases de datos

Una base de datos es **el programa** donde vamos a almacenar **todos los datos de nuestra aplicación y de nuestras usuarias**. Por ejemplo:

* Email, contraseña, nombre, etc. de nuestras usuarias registradas
* Tweets de Twitter
* Comentarios en los vídeos de Youtube
* Artículos de un blog
* Eventos de Google Calendar
* Configuración interna de nuestra web

En resumen, todos los datos que no tenemos a la hora de programar.

### ¿Dónde se ejecutan las bases de datos?

La base de datos de una aplicación **se está ejecutando en todo momento en nuestro servidor**, ya sea nuestro servidor local de desarrollo (que es un programa que instalamos en nuestro ordenador) o el servidor de producción donde subiremos nuestro código.

Cuando reiniciamos nuestro ordenador, si volvemos a arrancar una aplicación de **Node JS, esta se ejecuta como si fuera la primera vez**. Es decir, no guarda nada de una ejecución a otra.

Pero cuando trabajamos con una base de datos, los cambios que hacemos sobre ella **se guardan en ficheros especiales**. Por ello, si reiniciamos el ordenador y volvemos a abrir la base de datos, esta mantiene los datos que tenía la última vez que se ejecutó. Así, **las bases de datos nos permiten guardar datos de forma permanente.**

### ¿Cómo accedemos a una base de datos?

Desde nuestro código de Node JS vamos a leer y escribir datos en nuestra base de datos **usando una determinada sintaxis**. También podemos hacer lo mismo desde cualquier otro lenguaje de programación de back end usando la misma sintaxis o muy parecida.

Es decir, que lo que vamos a aprender sobre bases de datos nos vale para cuando estemos programando en cualquier lenguaje de back end.

### ¿Qué vamos a aprender en Adalab?

![Diagrama de conceptos](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-112cc81acc117db6bc2fa69337bb116b92c096dd%2Fsql-diagrama-de-conceptos.jpeg?alt=media)

El mundo de las bases de datos es inmenso, así que nosotras vamos a aprender solo una parte. Te recomendamos que cada vez que hablemos de un concepto nuevo, revises este diagrama para entender de qué estamos hablando.

### ¿Qué tipos de bases de datos hay?

Hay muchísimos tipos de bases de datos. Cada tipo está orientado a una cosa, por ejemplo:

* Bases de datos que guardan datos importantes, como las de los bancos, que almacenan todos nuestros movimientos bancarios. Están pensadas para ser muy seguras y no perder información bajo ningún concepto.
* Otras están pensadas para guardar información efímera, por lo que son más pequeñas y las búsquedas que se hacen sobre ellas muy rápidas. Un ejemplo son las que guardan las notificaciones emergentes de WhatsApp de tu móvil. Cuando una amiga te envía un WhatsApp, se añade la notificación a una base de datos. Horas después, tú enciendes el móvil, WhatsApp comprueba que en su base de datos tienes notificaciones pendientes y te las envía. Por último el servidor de WhatsApp borra la notificación de su base de datos para siempre jamás.

A nosotras nos interesa saber los tipos de bases de datos que existen **en función de cómo estructuran los datos**.

#### Bases de datos de tipo tabla o SQL

Supongamos que queremos guardar los datos de las alumnas de Adalab en una tabla. Podría tener esta pinta:

| id | email               | password     | name  | pc    | pcNumber | pcBrand |
| -- | ------------------- | ------------ | ----- | ----- | -------- | ------- |
| 1  | <maria@gmail.com>   | 987widJYVxyh | María | false |          |         |
| 2  | <lucia@hotmail.com> | qwertyui     | Lucía | false |          |         |
| 3  | <sofia@yahoo.com>   | mnbvcdfgu    | Sofía | true  | 54       | Lenovo  |

Como veis esto es muy parecido a guardar los datos en un documento de Excel.

#### Principales características de las bases de datos de tipo tabla o SQL

* Los datos se guardan en **tablas, es decir, en filas y columnas**.
* **Todas las filas o registros de una tabla deben tener los mismos campos**, aunque algunos puedan estar vacíos.
* Si queremos añadir un dato más a una fila, tenemos que añadir una columna más, y por ello todas las filas tendrán ese campo, aunque esté vacío. Dicho de otra forma, **o todas las usuarias tienen una columna o no la tiene ninguna**.
* **La estructura de datos es fija.**
* Por eso **las búsquedas son más rápidas**, ya que la base de datos sabe qué datos hay y cómo buscarlos.
* Al ser una estructura fija **se pueden configurar muchas cosas**. Por ejemplo, esta tabla se podría configurar para que si la columna `pc` es `true`, las columnas `pcNumber` y `pcBrand` deban estar rellenas, pero si es `false` deban estar vacías.
* **Las columnas tienen un tipo de dato**. Por ejemplo, `id` y `pcNumber` son números, `pc` es un booleano y el resto son `strings`.
* **Una base de datos puede estar compuesta de muchas tablas**: una para alumnas, otra para promociones, otra para profes, otra para las empresas de la bolsa de empleo...

A estas bases de datos se les llama relacionales y el lenguaje que se utiliza es **SQL** (Structured Query Language). Son de las que hablaremos a continuación

Las bases de datos que usan SQL son las que vamos a aprender a continuación y debemos hacer énfasis en dos cosas importante:

* Son las más fáciles de aprender.
* Son las más usadas.

> - Nota: en la **sección de MongoDB** hablaremos de las bases de dato NoSQL de forma detallada.


# 4.1.2 MySQL y Workbench

En esta lección os vamos a enseñar a trabajar con bases de datos de **tipo tabla**. Dentro de este tipo, hay muchas bases de datos. La más famosa y usada por más empresas es **SQL** (Structured Query Language).

Dentro de SQL a su vez existen muchas versiones o familias de bases de datos, porque en programación cada cual coge algo que ya existe, lo cambia un poquito, dice que ha reinventado la rueda y pide dinero a cambio ;).

Por ejemplo, dentro de **SQL** están MySQL, Microsoft SQL, SQLite...

Lo bueno es que si aprendemos a usar una de estas familias, ya sabremos usar el resto de familias, pues de una a otra cambian muy pocas cosas.

En Adalab vamos a trabajar con **MySQL**, ya que está muy bien para aprender y su uso está muy extendido. **MySQL Server**, conocido popularmente por **MySQL**, es un sistema de administración de bases de datos que nos va a permitir crear, leer, actualizar y borrar datos.

### Sistema de Gestión de bases de datos (SGBD)

Para acceder de forma fácil y cómoda a los datos de una base de datos, poder editarlos, añadir nuevos datos o eliminarlos en caso de que sea necesario, vamos a necesitar un sistema de gestión de base de datos (o DataBase Management System - DBMS por sus siglas en inglés). Estas herramientas o clientes gráficos nos permiten interactuar con las bases de datos, ayudando a que dicha interacción sea más sencilla y, por lo tanto, más rápida. Algunas herramientas que existen para SQL son por ejemlo:

* PHPMyAdmin
* MySQL Workbench

En Adalab vamos a utilizar la herramienta **MySQL Workbench**, que permite escribir código en **SQL** así como también crear modelado de datos, es decir hacer el diseño de la base de datos de forma gráfica.

### **MySQL Server** y **MySQL Workbench**

Para poder trabajar con **MySQL Server** y **MySQL Workbench** lo primero que debemos hacer es preparar el entorno de trabajo, instalar y configurar los programas que vamos a necesitar:

* **MySQL Server:** vamos instalar el servidor de MySQL que contendrá los datos de los sistemas y para poder configurar y trabajar con este servidor, lo debemos hacer a traves de la terminal. Para acceder a dichos datos alguien debe solicitarlos: ese alguien es el o los clientes. El cliente lanza una petición al servidor de la base de datos solicitando aquellos datos que desea obtener, siguiendo así el modelo de cliente-servidor.
* **MySQL Workbench**: es es un sistema de gestión de bases de datos que funciona como cliente de MySQL y va a funcionar con un entorno gráfico que nos permite trabajar cómodamente, sin necesidad de hacerlo a través de la terminal.

### Instalaciones y configuraciones

Vamos a comenzar con las instalaciones y configuraciones para dejar nuestro entorno de trabajo listo para usar bases de datos. En las siguientes guías verás los pasos necesarios para instalar el servidor de **MySQL** y [MySQL Workbench](https://dev.mysql.com/downloads/workbench/).

* [Instalación de MySQL Server y Mysql Workbench en MAC](https://books.adalab.es/materiales-del-curso-pw-ft/modulo-4-express-js-y-bases-de-datos/node-js-express-js-y-mysql/4.1-fundamentos-de-mysql/_sql_mysql/mysql_workbench_mac)
* [Instalación de MySQL Server y Mysql Workbench en Windows](https://books.adalab.es/materiales-del-curso-pw-ft/modulo-4-express-js-y-bases-de-datos/node-js-express-js-y-mysql/4.1-fundamentos-de-mysql/_sql_mysql/mysql_workbench_windows)
* [Instalación de MySQL Server y Mysql Workbench en Ubuntu](https://books.adalab.es/materiales-del-curso-pw-ft/modulo-4-express-js-y-bases-de-datos/node-js-express-js-y-mysql/4.1-fundamentos-de-mysql/_sql_mysql/mysql_workbench_ubuntu)

### Configurar Mysql Workbench

Finalmente para saber que ha ido todo bien, abre **Mysql Workbench**, y conéctate tal como te lo indicamos, en el password que solicita pon la contraseña que definiste durante la instalación.

1. Establece una conexión a tu cuenta

   Cuando la instalación del programa esté lista, abre el programa de MySQL Workbench. Verás una página de bienvenida con información general sobre el programa y enlaces a varios recursos.

   Necesitarás añadir una nueva conexión, que puede hacerse haciendo clic en el botón + al lado de la línea MySQL Connections.
2. Esto abrirá una nueva ventana llamada Setup New Connection donde tendrás que rellenar la información correspondiente a tu cuenta:

   * Connection Name: indica el nombre de la conexión deseada;
   * Connection Method: deja la opción por defecto – Standard (TCP/IP);
   * Hostname: aquí coloca `localhost` o `127.0.0.1`
   * Port: deja el que viene por defecto: 3306;
   * Username: tu usuario( por defecto debe ser `root`)
   * Default Schema: déjalo en blanco.

   Puedes utilizar el botón de Test Connection para probar si los ajustes utilizados son correctos.
3. Al probar la conexión se te pedirá una contraseña. Proporciona la contraseña y haz clic en el botón OK para confirmar.
4. Si la conexión se establece con éxito, verás una notificación al respecto.
5. Guarda la conexión haciendo clic en el botón OK. Después, en la ventana principal del programa MySQL Workbench verás una conexión en la línea MySQL Connections. Haz doble clic en ella para establecer la conexión a tu MySQl Server y empezar a administrar tus bases de datos.

Puedes ver los pasos resumidos aquí :) ⬇️

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-3b5ef153240d777ba40ea2d56401db40e5aa4ddf%2Fconexion-workbench.gif?alt=media)


# 4.1.3 Bases de datos, tablas y columnas

{% hint style="info" %}
**Nota:** Esta mini lección es **muy** importante.
{% endhint %}

### Diferencias entre bases de datos, tablas y registros

Las bases de datos están compuesta por un conjunto de tablas, que a su vez contienes columnas.

* **Una base de datos es un conjunto de tablas**, lo que sería **un documento de Excel** que contiene varias hojas. Una aplicación de tamaño normal solo tiene una base de datos.
  * Si la aplicación es muy grande puede tener varias bases de datos.
  * Si la aplicación es todavía más grande puede combinar bases de datos de diferentes tipos.
* **Una tabla es un conjunto de columnas y registros**, lo que sería **una hoja de Excel**. Son una especie de contenedor y vamos a tener una tabla por cada elemento que se quiera guardar. Por ejemplo, en una tienda online tendremos una tabla para usuarias, otra tabla para productos, otra para pedidos, otra para las facturas, etc.
* **Un registro es cada una de las filas de una tabla**, lo que sería **una fila** de una hoja de un documento de Excel. Cada registro guarda una de nuestras usuarias, uno de nuestros productos, uno de nuestros pedidos, etc. En cada columna guardamos un dato asociado a un registro. En la tabla de usuarias se guardará el email, contraseña,nombre, apellido. cada unno de estos datos será una columna del registro.
* **Un campo o columna es cada dato de un registro**, lo que sería **una celda** de una fila de una hoja de un documento de Excel. Es necesario configurar qué tipo de dato guarda cada campo o columna: texto, número entero, número con decimales, booleano, etc.

Cada vez que hacemos una **consulta** a la base de datos para leer o escribir utilizamos el término en inglés: **hacer una query**. Cuando penséis y habléis de bases de datos debéis usar las palabras adecuadas en cada caso.

### Crear una nueva base de datos

Para crear una bases de datos usaremos la siguiente sintaxis:

```sql
-- El nombre de la base de datos debe ser único
CREATE DATABASE nombre_base_datos;
```

```sql
-- se especifica  el nombre de la base de datos sobre la cual se desea trabajar.
USE nombre_base_datos;
```

Ahora vamos a crear nuestra primera bases de datos de ejemplo:

1. Abre la conexión que configuraste de MySQLWorkbench anteriormente y dentro de la ventana en la pestaña `Query 1` que te aparece puedes escribir todo el código que veremos a continuación.

   ![Querys en MySQLWorkbench](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-aefff157aab7711af9511fcedaad22df938c645c%2Fworkbench_querys.png?alt=media)
2. Crea la base de datos y seleccionarla con la siguiente sintaxis. Al ser dos sentencias SQL distintas es importante que cada una de ellas finalice en **`;`**

   ```sql
   -- estamos creando y seleccionando una base de datos con nombre  People
   CREATE DATABASE People;
   USE People;
   ```
3. Listo, ya hemos creado la primera bases de datos :)

### Crear una nueva tabla en la base de datos

La sentencia `CREATE TABLE` permite definir la estructura de cualquier tabla dentro de la base de datos, en ella se especifican las columnas con su tipo de dato, restricciones, valores por defecto, relaciones, y un largo etc.

La sintaxis de forma genérica es la siguiente;

```sql
-- Es importante que cada columna se indique el tipo de dato
CREATE TABLE nombre_tabla(
    columna1 tipo_dato1 otras_caracteristicas,
    columna2 tipo_dato2 otras_caracteristicas,
    )
```

Para crear una tabla **person** podemos usar la siguiente sintaxis, hazlo en tu MySQLWorkbench.

```sql
-- Es importante que cada columna se indique el tipo de dato
CREATE TABLE person (
    id_person INT auto_increment primary key,
    name VARCHAR(30) not null,
    lastname VARCHAR(30) not null,
    birthday date
    );
```

Tal y como observamos en el código la sentencia `CREATE TABLE` necesita el nombre de la tabla que se desea crear, el listado de columnas con sus tipo de datos y de forma opcional un conjunto de restricciones que deben cumplir los datos. Cada columna debe ir separado por comas.

La tabla creada contiene las siguientes características:

* `id_person`: Columna de tipo de datos número entero y entre sus característica o restricciones encontramos que es clave primaria de la tabla y auto incrementable.
* `name`: Columna de tipo de datos cadena de caracteres variables de máximo tamaño 30 y con una restricción de que debe ser obligatoria, es decir nunca puede tener un valor **NULL**
* `lastname`: Columna de tipo de dato cadena de caracteres variables de máximo tamaño 30y con una restricción de que debe ser obligatoria, es decir nunca puede tener un valor **NULL**
* `birthday`: Columna de tipo de dato fecha y no tiene restricciones.

Si insertamos datos en esta tabla y queremos visualizar su información quedaría de esta manera,

> \*No es necesario que en ese punto sepas como llenar de datos de la tabla

| id\_person | name  | lastname | birthday   |
| ---------- | ----- | -------- | ---------- |
| 1          | maria | sánchez  | 1980-01-05 |
| 2          | lucia | rojas    | 2000-08-08 |
| 3          | sofia | diaz     | 1988-07-08 |

En el siguiente vídeo encontrarás todo lo que hemos visto en esta lección:

{% embed url="<https://youtu.be/pReMHn3f6zE>" %}

### Ejercicio

#### 1. Base de datos de una librería

* Crea una base de datos llamada **libreria** (es **importante que esté en minúsculas** y es preferible que no tenga espacios ni tildes).
* Crea una tabla para guardar los libros de venta en una librería, y que permita guardar los siguientes datos:
  1. `idLibro` clave primaria de tipo de dato int, auto incremental, no nula.
  2. `titulo` cadena de caracteres de longitud máxima de 60 caracteres, obligatoria.
  3. `fecha_publi` fecha de publicación del libro, obligatoria.
  4. `genero` cadena de caracteres de longitud máxima de 45 caracteres, obligatoria.
  5. `precio` un numero con decimales, y es obligatorio.
  6. `autor` cadena de caracteres de longitud máxima de 45 caracteres, obligatoria.
  7. `pais_autor` cadena de caracteres de longitud máxima de 45 caracteres, hay ocasiones donde no se tiene información sobre el país de origen del autor.
  8. `num_paginas` cantidad de paginas que tiene el libro, este campo no es obligatorio.
  9. `stock` cantidad de libros que hay disponible.
  10. `tipo` puede ser un libro digital o físico.


# 4.1.3 Bases de datos, tablas y columnas

{% hint style="info" %}
**Nota:** Esta mini lección es **muy** importante.
{% endhint %}

### Diferencias entre bases de datos, tablas y registros

Las bases de datos están compuesta por un conjunto de tablas, que a su vez contienes columnas.

* **Una base de datos es un conjunto de tablas**, lo que sería **un documento de Excel** que contiene varias hojas. Una aplicación de tamaño normal solo tiene una base de datos.
  * Si la aplicación es muy grande puede tener varias bases de datos.
  * Si la aplicación es todavía más grande puede combinar bases de datos de diferentes tipos.
* **Una tabla es un conjunto de columnas y registros**, lo que sería **una hoja de Excel**. Son una especie de contenedor y vamos a tener una tabla por cada elemento que se quiera guardar. Por ejemplo, en una tienda online tendremos una tabla para usuarias, otra tabla para productos, otra para pedidos, otra para las facturas, etc.
* **Un registro es cada una de las filas de una tabla**, lo que sería **una fila** de una hoja de un documento de Excel. Cada registro guarda una de nuestras usuarias, uno de nuestros productos, uno de nuestros pedidos, etc. En cada columna guardamos un dato asociado a un registro. En la tabla de usuarias se guardará el email, contraseña,nombre, apellido. cada unno de estos datos será una columna del registro.
* **Un campo o columna es cada dato de un registro**, lo que sería **una celda** de una fila de una hoja de un documento de Excel. Es necesario configurar qué tipo de dato guarda cada campo o columna: texto, número entero, número con decimales, booleano, etc.

Cada vez que hacemos una **consulta** a la base de datos para leer o escribir utilizamos el término en inglés: **hacer una query**. Cuando penséis y habléis de bases de datos debéis usar las palabras adecuadas en cada caso.

### Crear una nueva base de datos

Para crear una bases de datos usaremos la siguiente sintaxis:

```sql
-- El nombre de la base de datos debe ser único
CREATE DATABASE nombre_base_datos;
```

```sql
-- se especifica  el nombre de la base de datos sobre la cual se desea trabajar.
USE nombre_base_datos;
```

Ahora vamos a crear nuestra primera bases de datos de ejemplo:

1. Abre la conexión que configuraste de MySQLWorkbench anteriormente y dentro de la ventana en la pestaña `Query 1` que te aparece puedes escribir todo el código que veremos a continuación.

   ![Querys en MySQLWorkbench](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-aefff157aab7711af9511fcedaad22df938c645c%2Fworkbench_querys.png?alt=media)
2. Crea la base de datos y seleccionarla con la siguiente sintaxis. Al ser dos sentencias SQL distintas es importante que cada una de ellas finalice en **`;`**

   ```sql
   -- estamos creando y seleccionando una base de datos con nombre  People
   CREATE DATABASE People;
   USE People;
   ```
3. Listo, ya hemos creado la primera bases de datos :)

### Crear una nueva tabla en la base de datos

La sentencia `CREATE TABLE` permite definir la estructura de cualquier tabla dentro de la base de datos, en ella se especifican las columnas con su tipo de dato, restricciones, valores por defecto, relaciones, y un largo etc.

La sintaxis de forma genérica es la siguiente;

```sql
-- Es importante que cada columna se indique el tipo de dato
CREATE TABLE nombre_tabla(
    columna1 tipo_dato1 otras_caracteristicas,
    columna2 tipo_dato2 otras_caracteristicas,
    )
```

Para crear una tabla **person** podemos usar la siguiente sintaxis, hazlo en tu MySQLWorkbench.

```sql
-- Es importante que cada columna se indique el tipo de dato
CREATE TABLE person (
    id_person INT auto_increment primary key,
    name VARCHAR(30) not null,
    lastname VARCHAR(30) not null,
    birthday date
    );
```

Tal y como observamos en el código la sentencia `CREATE TABLE` necesita el nombre de la tabla que se desea crear, el listado de columnas con sus tipo de datos y de forma opcional un conjunto de restricciones que deben cumplir los datos. Cada columna debe ir separado por comas.

La tabla creada contiene las siguientes características:

* `id_person`: Columna de tipo de datos número entero y entre sus característica o restricciones encontramos que es clave primaria de la tabla y auto incrementable.
* `name`: Columna de tipo de datos cadena de caracteres variables de máximo tamaño 30 y con una restricción de que debe ser obligatoria, es decir nunca puede tener un valor **NULL**
* `lastname`: Columna de tipo de dato cadena de caracteres variables de máximo tamaño 30y con una restricción de que debe ser obligatoria, es decir nunca puede tener un valor **NULL**
* `birthday`: Columna de tipo de dato fecha y no tiene restricciones.

Si insertamos datos en esta tabla y queremos visualizar su información quedaría de esta manera,

> \*No es necesario que en ese punto sepas como llenar de datos de la tabla

| id\_person | name  | lastname | birthday   |
| ---------- | ----- | -------- | ---------- |
| 1          | maria | sánchez  | 1980-01-05 |
| 2          | lucia | rojas    | 2000-08-08 |
| 3          | sofia | diaz     | 1988-07-08 |

En el siguiente vídeo encontrarás todo lo que hemos visto en esta lección:

{% embed url="<https://youtu.be/pReMHn3f6zE>" %}

### Ejercicio

#### 1. Base de datos de una librería

* Crea una base de datos llamada **libreria** (es **importante que esté en minúsculas** y es preferible que no tenga espacios ni tildes).
* Crea una tabla para guardar los libros de venta en una librería, y que permita guardar los siguientes datos:
  1. `idLibro` clave primaria de tipo de dato int, auto incremental, no nula.
  2. `titulo` cadena de caracteres de longitud máxima de 60 caracteres, obligatoria.
  3. `fecha_publi` fecha de publicación del libro, obligatoria.
  4. `genero` cadena de caracteres de longitud máxima de 45 caracteres, obligatoria.
  5. `precio` un numero con decimales, y es obligatorio.
  6. `autor` cadena de caracteres de longitud máxima de 45 caracteres, obligatoria.
  7. `pais_autor` cadena de caracteres de longitud máxima de 45 caracteres, hay ocasiones donde no se tiene información sobre el país de origen del autor.
  8. `num_paginas` cantidad de paginas que tiene el libro, este campo no es obligatorio.
  9. `stock` cantidad de libros que hay disponible.
  10. `tipo` puede ser un libro digital o físico.


# 4.1.4 Tipos de campos

MySQL es una base de datos que impone una estructura estricta, permitiendo un control riguroso sobre los datos almacenados en las tablas. Al crear las tablas, es crucial seleccionar el tipo de dato adecuado para cada columna.

### Tipos de datos en MySQL

A continuación, se presentan los tipos de datos disponibles en MySQL:

* Tipos de datos de texto:
  * CHAR: Almacena caracteres individuales (e.g., a, Z, @).
  * VARCHAR: Guarda textos de longitud variable, con un límite máximo definido.
  * TINYTEXT: Textos de hasta 255 caracteres.
  * TEXT: Textos de hasta 65535 caracteres.
  * MEDIUMTEXT: Textos de hasta 16777215 caracteres.
  * LONGTEXT: Textos de hasta 4294967295 caracteres.
  * SET: Permite guardar elementos de un conjunto predefinido (e.g., user, admin, customer).
* Tipos de datos numéricos:
  * BOOL: Guarda 0 o 1, útil para representar valores booleanos.
  * TINYINT: Enteros entre 0 y 255.
  * SMALLINT: Enteros entre 0 y 65535.
  * MEDIUMINT: Enteros entre 0 y 16777215.INTEGER: Enteros entre 0 y 4294967295.
  * BIGINT: Enteros entre 0 y 9223372036854775807.
  * FLOAT: Números con decimales.
* Tipos de datos de fechas:
  * **DATE:** Fechas en formato YYYY-MM-DD.
  * **DATETIME:** Fechas en formato YYYY-MM-DD hh:mm:ss.
  * **TIMESTAMP:** Milisegundos desde el 1 de enero de 1970, útil para manejar husos horarios.

Estos son solo algunos ejemplos; existen muchos más tipos de datos en MySQL.

MySQL es estricta con los tipos de datos: si se intenta guardar un dato en una columna de un tipo no compatible, se generará un error. Esto ayuda a mantener la integridad y coherencia de los datos.

### Importancia de elegir correctamente los tipos de datos

Al crear una tabla, es crucial pensar detenidamente en el tipo de dato para cada columna. Usar un tipo de dato inapropiado puede complicar cambios futuros y provocar la pérdida de datos. Para configurar el tipo de dato de cada columna, se edita la tabla como se muestra a continuación:

![Tipos de columnas en MySQL](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-b03f4bdba591159e1abe8354c2f26827e353aef8%2Fmysql-tipos.gif?alt=media)

### Beneficios de configurar bien los tipos de datos

#### Tamaño de las bases de datos

Como hemos visto, en MySQL cada dato tiene un tamaño máximo. **Eso significa que la base de datos reserva espacio en el disco duro del ordenador para cada dato.**

Cuando trabajamos con una **base de datos MySQL** y queremos guardar la edad de nuestras usuarias. Debemos utilizar el tipo de dato **TINYINT**, porque queremos guardar una edad que es un número entero entre 0 y 255. No creo que nadie llegue a los 255 años de edad, pero no tenemos un tipo de datos más pequeño que **TINYINT**.

Si en vez de configurar nuestra columna con un **TINYINT** la configuramos con un **BIGINT (enteros entre 0 y 9223372036854775807)** la base de datos estará reservando mucho espacio en el disco duro de nuestro ordenador, por si intentamos guardar la edad 9223372036854775807, cosa que, con toda seguridad, no va a pasar nunca.

Pensemos que las aplicaciones que haréis cuando trabajéis en una empresa pueden tener varios miles de usuarios, lo que equivale a varios GigaBytes de espacio. La base de datos de GitHub o Twitter puede tener muchos TeraBytes. Como no optimicemos bien el espacio lo estaremos desperdiciando. **Por cierto, los discos duros cuestan dinero.** Si optimizamos bien la base de datos le estaremos ahorrando a la empresa varios cientos de euros al mes.

#### Tiempo de búsquedas

Cada vez que leemos o escribimos en una base de datos, ésta tiene que buscar entre todos los registros cuál es el registro que queremos leer o modificar. Pensemos que al abrir un email de Gmail los servidores de Google estarán haciendo entre 20 y 50 accesos a sus bases de datos. **Si no optimizamos** las bases de datos, las aplicaciones **tienen un cuello de botella** en el acceso a sus datos.

#### Tipos de datos nulos

Supongamos que estamos programando el registro de usuarias en nuestra web. Podemos pensar que es importante no permitir que ninguna usuaria se registre sin indicar su email o contraseña. MySQL nos da una solución para hacerlo.

MySQL tiene una opción para indicar que una columna debe contener siempre datos, es decir, **ningún registro de esta tabla puede tener vacío el campo de esa columna**:

![MySQL Not null](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-f70e7e2a4b40ef3d50d68b797e419b9e8184b9ff%2Fmysql-not-null.jpg?alt=media)

Si activamos esta opción en las columnas email y password, cuando se añade un registro o se modifica y no se indica el valor del email o el del password, MySQL lanza un error y no ejecuta la query.

También se debe programar y valida que en el servidor y la aplicación esto no suceda, pero si a la vez lo activamos en MySQL estamos duplicando la seguridad.

### Columna especial id

En todos los ejemplos que hemos visto hasta ahora siempre hemos configurado la primera columna como `idAlgo`.

Esta columna funciona como un identificador único, como el DNI de cada registro. De esta forma nos aseguramos de que, aunque cualquier otro campo cambie, este nunca va a cambiar.

No es obligatorio tener una columna `idAlgo` en una tabla, **pero es muy muy recomendable**. Así que siempre que creamos una nueva tabla le vamos a poner como primera columna el `id`.

Esta columna puede llamarse como quieras por ejemplo `id`, `userId`, `user_id`, `emailId`, `tweetId` lo decides tu al momento de crear la columna.

También te habrás fijado en que en la columna `idAlgo` activamos siempre las opciones `PK`, `AI` y `U`. **Debemos activar estas tres opciones en todas las columnas `id` de todas nuestras tablas.** A continuación explicaremos que significa cada una de ellas.

![MySQL Primary key](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-7bc4d8425310603ba122d619701430cfa6144fc1%2Fmysql-pk-nn.png?alt=media)

### Primary key (PK)

Activando en la columna `id` la **primary key** le estamos indicando a la base de datos que esta es nuestra columna principal, la que contiene el identificador único. Gracias a esto podemos relacionar unas tablas con otras y automatizar tareas.

Supongamos que tenemos **dos tablas** en una base de datos de una tienda online:

* `users`, que tiene la `PK` activada en la columna `idusers`.
* `orders`, que guarda los pedidos de las usuarias y que tiene una columna llamada `userId` en la que indicamos que un pedido pertenece a una usuaria en concreto.

Gracias a primary key de `users` y a un poco de configuración podríamos automatizar tareas, como por ejemplo que si borramos una usuaria de la tabla `users`, automáticamente la base de datos borrará todos los pedidos de esa usuaria en la tabla `orders`. De esta forma no habría nunca pedidos "huérfanos".

### Autoincrement (AI)

Cuando aprendamos a añadir registros a una tabla verás que nunca indicamos el `id` de ese registro. Eso es porque MySQL lo añade automáticamente por nosotras.

Y ¿cómo sabe qué `id` debe asignar al nuevo registro? Pues porque le hemos dicho que es auto incremental. La primera vez que añadimos un registro, ya sea desde MySQL o desde Node JS, le asigna el `id = 1`. La segunda vez el `id = 2`, y así sucesivamente.

De esta forma cada registro tiene un `id` único que no se repite.

### Unique (U)

Como hemos dicho, el `id` debe ser único. Pues si configuramos el `id` como `unique` nunca podrá haber en una tabla dos registros con el mismo `id`.

Si intentamos modificar el `id` de un registro y ya existe otro con el mismo `id` MySQL nos lanzará un error y no ejecutará la query.

Esto también es útil para otras columnas como el `email` o el `username`. Si consideramos que no puede haber dos usuarias en nuestra web con el mismo email, podemos marcar la opción `U` en la columna email. Si la misma usuaria intenta registrarse dos veces con el mismo email MySQL lanzará un error y no lo permitirá.


# 4.1.5 Modificar tablas

{% hint style="info" %}
**Nota:** Esta mini lección es un bonus.
{% endhint %}

**ALTER TABLE** de MySQL se utiliza para modificar la estructura de las tablas y sus columnas de una base de datos. Por ejemplo, agrega o elimina columnas, crea o elimina índices, modifica el tipo de columnas existentes o renombra columnas o la propia tabla. También modifica las características tales como el tipo de almacenamiento utilizado para las tablas.

### Sintaxis de ALTER TABLE en MySQL

Veamos la sintaxis de esta sentencia con su estructura básica:

```sql
ALTER TABLE nombre_tabla [acción_específica];
```

Esta es la sintaxis de algunas de las acciones que puede implementar ALTER TABLE:

* Agregar una columna

  ```sql
  ALTER TABLE nombre_tabla ADD COLUMN nombre_columna tipo_columna;
  ```
* Eliminar una columna

  ```sql
  ALTER TABLE nombre_tabla DROP COLUMN nombre_columna;
  ```
* Cambiar el tipo de una columna

  ```sql
  ALTER TABLE nombre_tabla MODIFY COLUMN nombre_columna nuevo_tipo;
  ```
* Renombrar una columna

  ```sql
  ALTER TABLE nombre_tabla CHANGE COLUMN nombre_actual nuevo_nombre tipo_columna;
  ```
* Renombrar la tabla

  ```sql
  ALTER TABLE nombre_tabla RENAME TO nuevo_nombre;
  ```
* Agregar clave primaria

  ```sql
  ALTER TABLE nombre_tabla ADD PRIMARY KEY (columna);
  ```
* Agregar clave foránea

  ```sql
  ALTER TABLE nombre_tabla
  ADD CONSTRAINT nombre_constraint FOREIGN KEY (columna)
  REFERENCES tabla_referenciada (columna_referenciada);
  ```

Aquí tienes más [ejemplos](https://docs.aws.amazon.com/es_es/redshift/latest/dg/r_ALTER_TABLE_examples_basic.html).

### Ejemplos prácticos de ALTER TABLE

* Renombrar y/o cambiar el nombre la tabla:

  ```sql
  ALTER TABLE nombre_tabla RENAME nombre_nuevo_tabla;
  ```
* Eliminar una columna de la tabla:

  ```sql
  ALTER TABLE nombre_tabla DROP COLUMN nombre_columna;
  ```
* Eliminar varias columnas de la tabla

  ```sql
  ALTER TABLE nombre_tabla DROP COLUMN nombre_columna, DROP COLUMN nombre_columna2;
  ```
* Eliminar una clave primaria y clave externa (FOREING KEY y PRIMARY KEY):

  ```sql
  #Eliminar clave primaria
  ALTER TABLE nombre_tabla DROP PRIMARY KEY;
  #Eliminar clave externa
  ALTER TABLE nombre_tabla DROP FOREIGN KEY nombre_columna;
  ```
* Insertar una nueva columna al final de la tabla

  ```sql
  ALTER TABLE nombre_tabla ADD fecha_nacimiento date;
  ```
* Añadir una nueva columna después de otra:

  ```sql
  ALTER TABLE nombre_tabla ADD nombre_columna VARCHAR(5) AFTER nombre_columna_anterior;
  ```
* Añadir una nueva columna en la primera posición de la tabla:

  ```sql
  ALTER TABLE nombre_tabla ADD nombre_columna VARCHAR(5) INT FIRST;
  ```
* Asignar como clave primaria a una columna:

  ```sql
  ALTER TABLE nombre_Tabla ADD PRIMARY KEY(nombre_columna);
  ```
* Cambiar el nombre o renombrar una columna:

  ```sql
  ALTER TABLE nombre_tabla CHANGE nombre_viejo_columna nombre_nuevo_columna;
  ```
* Cambiar el nombre y tipo de dato de una columna:

  ```sql
  ALTER TABLE nombre_tabla CHANGE nombre_viejo_columna nombre_nuevo_columna VARCHAR(20);

  ```
* Solamente cambiar el tipo de dato de una columna:

  ```sql
  ALTER TABLE nombre_tabla MODIFY nombre_columna DATE NOT NULL;
  ```
