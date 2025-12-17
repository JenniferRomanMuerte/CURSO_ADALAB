# 4.3.1 Diagramas de entidad relación (E-R)

Un diagrama entidad-relación, también conocido como modelo entidad relación (ERD) o modelo relacional, es un tipo de diagrama representa cómo las "entidades", como personas, objetos o conceptos, se relacionan entre sí dentro de un sistema. Estos modelos permiten visualizar de forma gráfica y sencilla un modelo de datos.

Estos modelos se realizan en las primeras fases del desarrollo, normalmente en la fase de análisis, porque es el momento para definir la estructura de la base de datos.

![Modelo Entidad Relación MySQL Workbench](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-54a05389c3900f31bc612012a2215395b850890d%2Fmer.gif?alt=media)

Lo normal es tener **muchas tablas dentro de una base de datos** porque queremos guardar muchos tipos de información.

Por ejemplo, en una tienda virtual vamos a tener una base de datos con **una tabla para cada tipo de información**:

* Una tabla para las usuarias registradas
* Una tabla para los productos
* Una tabla para los pedidos
* Una tabla para las direcciones de entrega de los pedidos

Para cada tipo de información creamos una tabla diferente con sus diferentes campos o atributos.

**Estos tipos de información son nuestras entidades o entities.** Una tabla guarda entidades del mismo tipo, por ejemplo usuarias. Y **cada columna define las características o atributos de una entidad**, como el nombre, email o contraseña de la usuaria.

### Componentes

Los diagramas ER se componen de entidades, relaciones y atributos. También representan la cardinalidad, que define las relaciones en términos de números.

#### 1. Entidad

Una entidad es algo que se puede definir, como una persona, objeto, concepto o evento y que se pueden diferenciar fácilmente entre sí, que puede tener datos almacenados acerca de este. Piensa en las entidades como si fueran sustantivos. Por ejemplo: un cliente, estudiante, coche, producto. Por lo general se muestran como un rectángulo.

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-04b516003c1e87ffede7975baf0360ebb3870ca7%2Fentidades.png?alt=media)

#### 2. Atributo

Un atributo es una propiedad o característica de una entidad. En la bases de datos hacen referencia a las columnas de una tabla, estos deben tener un tipo de datos, por ejemplo en una entidad persona algunos atributos pueden ser: nombre, apellido, DNI, CP, etc

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-7a6a53217633ce4abae5a9a99028d65b527ee910%2Fatributos.png?alt=media)

#### 3. Relación

Una vez se definen las entidades es necesario definir la interacción entre ellas y esto son las relaciones. Una relación es cómo las entidades interactúan o se asocian entre sí. Piensa en las relaciones como si fueran verbos. Por ejemplo, el estudiante mencionado podría inscribirse en un curso. Las dos entidades serían el estudiante y el curso, y la relación representada es el acto de inscribirse, que conecta ambas entidades de ese modo. Si las especificaciones de requisitos reflejan estas relaciones es porque son importantes para el proyecto y, por lo tanto, se deben reflejar en el modelo entidad relación. Una vez que se identifica las relaciones, hay que determinar la cardinalidad de cada una de ellas.

* **Relaciones 1:1:** Un elemento de la entidad A solamente puede estar relacionado con elemento de la entidad B, y ese elemento de la entidad B no puede estar relacionado con otros de la entidad A. Por ejemplo, un empleado puede tener sólo una cesta de navidad asignada, y la cesta de navidad solo pertenece a un empleado.

**Las relaciones 1 a 1 relaciona un registro de una tabla con un único registro de otra tabla**

* **Relaciones 1:N:** Un elemento de entidad A se puede relacionar con uno o muchos elementos de la entidad B, y los elementos de la entidad B solo pueden estar relacionados con un elemento de la entidad A. Por ejemplo, un cliente puede tener muchas facturas de compras, pero cada factura solo puede estar asociada a un cliente.

**Las relaciones 1 a N son las que relacionan un registro de una tabla con varios registros de otra tabla**

* **Relaciones N:M:** Cuando uno de los elementos de la entidad A puede estar relacionado con uno o muchos de la entidad B, y cada elemento de la entidad B puede estar relacionado con uno o muchos elementos de la entidad A. Por ejemplo, una persona puede tener varias profesiones y una profesión puede estar asignada a mas de una persona. Este tipo de relaciones son muy usadas, y cuando exista se deberá crear una nueva entidad que se conecte con las otras dos. Esta entidad se suelen llamar entidad de unión o intersección.

Si pensamos en una tienda virtual la relación entre productos y pedidos es la siguiente:

* ¿Un producto puede estar en varios pedidos? Sí, muchas personas pueden comprar el mismo producto. Esto es una relación 1 a N.
* ¿Un pedido puede tener varios productos? Sí, una persona en un solo pedido puede comprar varios productos. Esto es otra relación 1 a N.

**Como los pedidos y los productos están relacionados por dos relaciones 1 a N, significa que su relación es N a N.**

### Cómo generar el Diagrama Entidad Relación

Podemos crear diagramas de entidad relaciones desde múltiples herramientas. En este curso usaremos la herramienta MySQL Workbench. En el siguiente video os contamos como comenzar a crear nuestro primer modelo entidad relación.

Puedes ver en el siguiente vídeo todo lo que os hemos contado :)

{% embed url="<https://youtu.be/3CKaB8jS06A>" %}

### Ejercicio

Dado el enunciado a continuación crear el modelo relacional en **MySQL Workbench**.

**Se quiere realizar una BD para una empresa dedicada a la comercialización de ascensores**

La empresa desea realizar un control de sus ventas y montajes, para lo cual se tiene en cuenta lo siguiente:

1. De cada modelo de ascensor nos interesa el número de referencia del modelo y el nombre.
2. De un montador nos interesa su NIF, nombre, dirección,teléfono de contacto y el número de ascensores que ha montado.
3. Cada modelo ascensor, lo debe montar al menos dos montadores, y el mismo montador puede montar varios modelos, porque no se especializan en ninguno en concreto.
4. De un cliente nos interesa su NIF, nombre, dirección y teléfono.
5. Cada modelo de ascensor pueden comprarlo uno o varios clientes, y el mismo cliente puede comprar varios modelos de ascensores. Proponga los campos que considere necesarios en cada una de las entidades.


# 4.3.2 Claves Foráneas

Después que ya tienes el modelo de tu base de datos creado, es el momento de llevarlo a código SQL, ya sabes crear una tabla pero de ahora en adelante tendrás que crear muchas con sus respectivas relaciones y éstas de definen mediante el uso de atributos o columnas denominadas claves foráneas.

#### Claves Foráneas

También llamadas **foreign key FK**, son columnas que se definen en un tabla y hacen referencia obligatoriamente a claves primarias de otra tabla. Una de las diferencias entre las llaves primarias y foráneas es que, en las claves primarias es imprescindible ser not null sin embargo, en las claves foráneas puede ser null o not null. Se usa para indicar restricciones de seguridad y conseguir que los datos guardados tengan sentido y consistencia.

Siguiendo las buenas prácticas a las claves foráneas se suele definir en el nombre prefijo FK, y el nombre de la columna nos quedaría **FK\_nombre\_columna**.

Vamos a ver un ejemplo para demostrar la importancia que tienen y cuándo tiene sentido definirlas. Partiendo de este modelo: ![Modelo Entidad Relación MySQL Workbench](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-835c78cf65492e72ad8e2694901b2948354e3ce1%2Fer_foreign_key.png?alt=media)

La vista de nuestras tablas quedaría de la siguiente forma. Primero vamos a observar la tabla `category`

| idCategory | name       |
| ---------- | ---------- |
| 1          | anillos    |
| 2          | pendientes |
| 3          | pulseras   |

A continuación observa la tabla `products`

| idProducto | name               | price | description                        | fkCategory |
| ---------- | ------------------ | ----- | ---------------------------------- | ---------- |
| 1          | pendientes pequeño | 30    | plata con diamantes                | 2          |
| 2          | pulsera niña       | 80    | pulsera en oro                     | 3          |
| 3          | pendientes aro     | 120   | doble aro de combinado oro y plata | 2          |
| 4          | anillo corazón     | 170   | en oro con rubí                    | 1          |
| 5          | anillo serpiente   | 85    | anillo ajustable                   | 1          |

Estos datos me indican que cada producto está relacionado a una categoría de la tienda, es por ello que no tendría sentido que un producto se le asocie una categoría que no está definida en la tabla de `category`, o que se borre dicha categoría. Esto significa , que las claves foráneas permiten mantener la integridad y consistencia al momento de modificar los datos de una tabla (insert, delete, update).

Este control también es posible hacerlo a través de programación, sin embargo es 100% recomendable hacerlo a nivel de bases de datos.

Hay que resaltar que es posible que la clave foránea haga referencia a otros registros de la misma tabla. A su vez, ***una tabla puede tener múltiples claves foráneas***, cada una pudiendo hacer referencia a una tabla distinta.

#### SQL Claves Foráneas

Ahora vamos a crear en lenguaje SQL el modelo indicado de productos y categoría.

Creamos al inicio las tablas que no tienen claves foráneas o tablas ***madre***, es decir no tienen ninguna dependencia, por ello comenzamos creando la tabla `category`.

```sql
CREATE TABLE category (
   idCategory INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(100)
);
```

A continuación se crea la tabla `products` porque tiene una columna llamada `fkCategory`, cuyo valor hace referencia a un registro de la tabla `category`. Por lo tanto se puede concluir que las claves foráneas se definen en las tablas ***hijas***

```sql
CREATE TABLE products (
   idProduct INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(100),
   price FLOAT,
   description INT,
   fkCategory INT,
   FOREIGN KEY (fkCategory) REFERENCES category (idCategory)
);
```

La sintaxis `FOREIGN KEY (nombre_columna) REFERENCES nombre_tabla (PK_tabla_Referenciada)` se desglosa a continuación:

* `nombre_columna`: Hace referencia a la columna previamente definida donde se guardará la información y ésta puede tener el prefijo FK, , en este caso llamada `fkCategory`
* `nombre_tabla`: Hace referencia a la tabla de donde van a venir los datos de la clave foránea en este caso es `category`
* `PK_tabla_Referenciada`: Hace referencia a la clave primaria de la tabla referenciada y para este caso es `idCategory`

Puedes ver en el siguiente vídeo todo lo que os hemos contado :)

{% embed url="<https://youtu.be/6rLX6lL18po>" %}

### Ejercicios

Partiendo del siguiente modelo:

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-e988eda319b8cd0889e8a19c7376e34fe39f39cd%2Fexercice_fk.png?alt=media)

1. Crea todas las tablas con sus respectivas claves foráneas.
2. Analiza que otra tabla pudiera ser interesante y añádela con sus respectivas relaciones.


# 4.3.3 Consultas Producto Cartesiano

Generalmente una base de datos siempre tendrá muchas tablas, y hasta el momento solo hemos hecho búsquedas en una única tabla, sin embargo en la vida real la mayoría de las veces tendrás que buscar información para crear reportes o datos de valor que están almacenado en diferentes tablas, y esto lo vas a hacer uniendo o relacionando datos de más de una tabla, lo cual permite mostrar columnas de varias tablas como si se tratase de una sola.

Para hacer estas consultas combinando columnas de diferentes tablas, vamos a usar las claves foráneas.

#### Producto cartesiano

Supongamos que tenemos las siguientes tablas

Tenemos la tabla llamada `departments`:

| idDepartment | name                 | location |
| ------------ | -------------------- | -------- |
| 1            | accounting           | Sevilla  |
| 2            | software development | Vigo     |
| 3            | marketing            | Bilbao   |

Tenemos la tabla llamada `employees` que contiene una clave foránea del departamento al que se encuentra asignada cada empleada:

| idEmployee | email                | name     | lastname | fk\_deparment |
| ---------- | -------------------- | -------- | -------- | ------------- |
| 1          | <maria@gmail.com>    | María    | Ruiz     | 1             |
| 2          | <lucia@hotmail.com>  | Lucía    | Ramírez  | 2             |
| 3          | <sofia@yahoo.com>    | Sofia    | Gomes    | 3             |
| 4          | <ana@yahoo.com>      | Ana      | Sánchez  | 3             |
| 5          | <victoria@yahoo.com> | Victoria | Roldan   | 2             |

Vamos a suponer que cada empleada tiene asignado un departamento en el cual trabaja, y por otro lado un departamento puede estar asociado a más de una empleada.

Hacer un producto cartesiano de dos tablas significa que se combinan todos los registros de una tabla con los de la segunda tabla, por si sólo el producto cartesiano no nos valdrá para mucho, por ello es necesario hacer uso de las claves foráneas, de esta forma se generan datos de valor, visualmente se debería quedar algo como lo que se muestra a continuación:

| id | Empleado | Departamento         | Ubicación |
| -- | -------- | -------------------- | --------- |
| 1  | María    | accounting           | Sevilla   |
| 2  | Lucía    | software development | Vigo      |
| 3  | Sofía    | marketing            | Bilbao    |
| 4  | Ana      | marketing            | Bilbao    |
| 5  | Victoria | software development | Vigo      |

En el resultado anterior se puede observar que la tabla `employees` se ha combinado con la tabla `departments` mediante la clave foránea, es por ello que obtenemos datos de ambas tablas como si fuese solo una.

Esto en código SQL se escribe como se muestra a continuación:

1. Se crea las tablas de la base de datos, con sus respectivas claves foráneas

   ```sql
   CREATE TABLE departments (
       idDeparment INT auto_increment PRIMARY key,
       name VARCHAR(50),
       location VARCHAR(50)
   );
   CREATE TABLE employees (
       idEmployee INT AUTO_INCREMENT primary key,
       name VARCHAR(20),
       lastname VARCHAR(20),
       email VARCHAR(50),
       fkDepartment INT,
       FOREIGN KEY (fkDepartment) REFERENCES departments (idDeparment)
       );
   ```
2. Una vez que crees las tablas es el momento de insertar datos en ellas, a continuación te dejo los registros necesarios

   > **Nota:** No se está especificando la **Clave primaria** de las tablas por tener la restricción **AUTO\_INCREMENT**.

   En primer lugar insertamos los en la tabla `departments` porque no tiene ninguna dependencia.

   ```sql
   insert into  departments (name,location)
   values ("Accounting","Sevilla"),.
          ("Software development","Vigo"),
          ("Marketing","Bilbao");
   ```

   A continuación se insertan los datos en la tabla `employees`y si observamos con atención en la columna **fkDepartment** vamos a guardar el **idDeparment** correspondiente al departamento donde ella trabaja, por eso es un campo numérico, es importante resaltar que si el **idDeparment** al que estás haciendo referencia no existe en la tabla `departments`, te dará un error, porque no cumple con la restricciones de clave foráneas previamente indicadas.

   ```sql
   insert into  employees (name,lastname,email,fkDepartment)
   values ("María","Ruiz","maria@gmail.com",1),
          ("Lucía","Ramírez","lucia@hotmail.com",2),
          ("Sofia","Gomes","sofia@yahoo.com",3),
          ("Ana","Sánchez","ana@yahoo.com",3),
          ("Victoria","Roldan","victoria@yahoo.com",2);
   ```
3. Una vez que tenemos la base de datos preparada, se realiza la consulta, donde vamos a obtener la unión de las dos tablas y nos quedar de la siguiente forma:

   ```sql
   SELECT employees.idEmployee, employees.name, departments.name, departments.location
   FROM employees, departments
   WHERE employees.fkDepartment = departments.idDeparment
   ```

Analicemos lo que está escrito alli.

* `SELECT` especifica las columnas que quieres visualizar, al tener más de una tabla, se hace referencia a la tabla de donde necesitas obtener la información, porque pudiera ocurrir que hay columnas con el mismo nombre, como es el caso de ***employees.name*** y ***departments.name*** y ocurrirá un error de ambigüedad.
* `FROM` se indica todas las tablas (separadas con ,) de donde se obtendrá la información. De esta manera estamos haciendo saber al intérprete de SQL que queremos realizar la consulta sobre el producto cartesiano de ambas tablas, es decir combinar todos los registros de la primera tabla con todos los registros de la segunda.
* `WHERE` esta sección es importante porque es donde se restringe los datos relacionados, por lo tanto la clave foránea siempre deberá ser igual a la clave primaria. Una vez hecho el producto cartesiano solo nos quedamos con los registros que cumplen con la igualdad, es decir retiramos los registros que no tienen sentido para nosotras.

Esta query para que se nos muestre exactamente igual que en el ejemplo, es necesario definir un alias a las columnas, y nos quedaría de la siguiente forma:

```sql
SELECT employees.idEmployee as id, employees.name as Empleado,
departments.name as Departamento, departments.location as Ubicación
FROM employees, departments
WHERE employees.fkDepartment = departments.idDeparment

```

Es importante saber, que estas consultas se pueden combinar con todas las operaciones de `select` tales como **ORDER BY, LIMIT y OFFSET, AS**

> **Nota:** Se pueden hacer consultas usando el producto cartesiano de más de 2 tablas. Un caso seria que además de tener las tablas `employees` y `departments`, se tiene una tabla `projects`.

Puedes ver en el siguiente vídeo todo lo que os hemos contado :)

{% embed url="<https://youtu.be/AXyhUWXC98Q>" %}

### Ejercicios

1. Crea un nueva tabla `projects` y define la relación con la tabla `employees`, con la información detallada de cada proyecto: idProject, name, description. Tomando en cuenta que en un proyecto puede trabajar más de una empleada y una empleada a su vez puede trabajar en muchos proyecto.
2. Inserta datos en las tablas creadas.
3. Muestra todos los proyectos en los que ha trabajado **Sofía**.
4. Muestra el departamento en que trabaja Lucía, y cuáles son los proyecto en los que ha participado


# 4.3.3 Consultas Producto Cartesiano

Generalmente una base de datos siempre tendrá muchas tablas, y hasta el momento solo hemos hecho búsquedas en una única tabla, sin embargo en la vida real la mayoría de las veces tendrás que buscar información para crear reportes o datos de valor que están almacenado en diferentes tablas, y esto lo vas a hacer uniendo o relacionando datos de más de una tabla, lo cual permite mostrar columnas de varias tablas como si se tratase de una sola.

Para hacer estas consultas combinando columnas de diferentes tablas, vamos a usar las claves foráneas.

#### Producto cartesiano

Supongamos que tenemos las siguientes tablas

Tenemos la tabla llamada `departments`:

| idDepartment | name                 | location |
| ------------ | -------------------- | -------- |
| 1            | accounting           | Sevilla  |
| 2            | software development | Vigo     |
| 3            | marketing            | Bilbao   |

Tenemos la tabla llamada `employees` que contiene una clave foránea del departamento al que se encuentra asignada cada empleada:

| idEmployee | email                | name     | lastname | fk\_deparment |
| ---------- | -------------------- | -------- | -------- | ------------- |
| 1          | <maria@gmail.com>    | María    | Ruiz     | 1             |
| 2          | <lucia@hotmail.com>  | Lucía    | Ramírez  | 2             |
| 3          | <sofia@yahoo.com>    | Sofia    | Gomes    | 3             |
| 4          | <ana@yahoo.com>      | Ana      | Sánchez  | 3             |
| 5          | <victoria@yahoo.com> | Victoria | Roldan   | 2             |

Vamos a suponer que cada empleada tiene asignado un departamento en el cual trabaja, y por otro lado un departamento puede estar asociado a más de una empleada.

Hacer un producto cartesiano de dos tablas significa que se combinan todos los registros de una tabla con los de la segunda tabla, por si sólo el producto cartesiano no nos valdrá para mucho, por ello es necesario hacer uso de las claves foráneas, de esta forma se generan datos de valor, visualmente se debería quedar algo como lo que se muestra a continuación:

| id | Empleado | Departamento         | Ubicación |
| -- | -------- | -------------------- | --------- |
| 1  | María    | accounting           | Sevilla   |
| 2  | Lucía    | software development | Vigo      |
| 3  | Sofía    | marketing            | Bilbao    |
| 4  | Ana      | marketing            | Bilbao    |
| 5  | Victoria | software development | Vigo      |

En el resultado anterior se puede observar que la tabla `employees` se ha combinado con la tabla `departments` mediante la clave foránea, es por ello que obtenemos datos de ambas tablas como si fuese solo una.

Esto en código SQL se escribe como se muestra a continuación:

1. Se crea las tablas de la base de datos, con sus respectivas claves foráneas

   ```sql
   CREATE TABLE departments (
       idDeparment INT auto_increment PRIMARY key,
       name VARCHAR(50),
       location VARCHAR(50)
   );
   CREATE TABLE employees (
       idEmployee INT AUTO_INCREMENT primary key,
       name VARCHAR(20),
       lastname VARCHAR(20),
       email VARCHAR(50),
       fkDepartment INT,
       FOREIGN KEY (fkDepartment) REFERENCES departments (idDeparment)
       );
   ```
2. Una vez que crees las tablas es el momento de insertar datos en ellas, a continuación te dejo los registros necesarios

   > **Nota:** No se está especificando la **Clave primaria** de las tablas por tener la restricción **AUTO\_INCREMENT**.

   En primer lugar insertamos los en la tabla `departments` porque no tiene ninguna dependencia.

   ```sql
   insert into  departments (name,location)
   values ("Accounting","Sevilla"),.
          ("Software development","Vigo"),
          ("Marketing","Bilbao");
   ```

   A continuación se insertan los datos en la tabla `employees`y si observamos con atención en la columna **fkDepartment** vamos a guardar el **idDeparment** correspondiente al departamento donde ella trabaja, por eso es un campo numérico, es importante resaltar que si el **idDeparment** al que estás haciendo referencia no existe en la tabla `departments`, te dará un error, porque no cumple con la restricciones de clave foráneas previamente indicadas.

   ```sql
   insert into  employees (name,lastname,email,fkDepartment)
   values ("María","Ruiz","maria@gmail.com",1),
          ("Lucía","Ramírez","lucia@hotmail.com",2),
          ("Sofia","Gomes","sofia@yahoo.com",3),
          ("Ana","Sánchez","ana@yahoo.com",3),
          ("Victoria","Roldan","victoria@yahoo.com",2);
   ```
3. Una vez que tenemos la base de datos preparada, se realiza la consulta, donde vamos a obtener la unión de las dos tablas y nos quedar de la siguiente forma:

   ```sql
   SELECT employees.idEmployee, employees.name, departments.name, departments.location
   FROM employees, departments
   WHERE employees.fkDepartment = departments.idDeparment
   ```

Analicemos lo que está escrito alli.

* `SELECT` especifica las columnas que quieres visualizar, al tener más de una tabla, se hace referencia a la tabla de donde necesitas obtener la información, porque pudiera ocurrir que hay columnas con el mismo nombre, como es el caso de ***employees.name*** y ***departments.name*** y ocurrirá un error de ambigüedad.
* `FROM` se indica todas las tablas (separadas con ,) de donde se obtendrá la información. De esta manera estamos haciendo saber al intérprete de SQL que queremos realizar la consulta sobre el producto cartesiano de ambas tablas, es decir combinar todos los registros de la primera tabla con todos los registros de la segunda.
* `WHERE` esta sección es importante porque es donde se restringe los datos relacionados, por lo tanto la clave foránea siempre deberá ser igual a la clave primaria. Una vez hecho el producto cartesiano solo nos quedamos con los registros que cumplen con la igualdad, es decir retiramos los registros que no tienen sentido para nosotras.

Esta query para que se nos muestre exactamente igual que en el ejemplo, es necesario definir un alias a las columnas, y nos quedaría de la siguiente forma:

```sql
SELECT employees.idEmployee as id, employees.name as Empleado,
departments.name as Departamento, departments.location as Ubicación
FROM employees, departments
WHERE employees.fkDepartment = departments.idDeparment

```

Es importante saber, que estas consultas se pueden combinar con todas las operaciones de `select` tales como **ORDER BY, LIMIT y OFFSET, AS**

> **Nota:** Se pueden hacer consultas usando el producto cartesiano de más de 2 tablas. Un caso seria que además de tener las tablas `employees` y `departments`, se tiene una tabla `projects`.

Puedes ver en el siguiente vídeo todo lo que os hemos contado :)

{% embed url="<https://youtu.be/AXyhUWXC98Q>" %}

### Ejercicios

1. Crea un nueva tabla `projects` y define la relación con la tabla `employees`, con la información detallada de cada proyecto: idProject, name, description. Tomando en cuenta que en un proyecto puede trabajar más de una empleada y una empleada a su vez puede trabajar en muchos proyecto.
2. Inserta datos en las tablas creadas.
3. Muestra todos los proyectos en los que ha trabajado **Sofía**.
4. Muestra el departamento en que trabaja Lucía, y cuáles son los proyecto en los que ha participado
