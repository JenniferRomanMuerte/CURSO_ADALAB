# 4.4.1 Funciones Agregadas

### 1. Introducción:

En esta lección de SQL, aprenderás a utilizar funciones agregadas para resumir datos, a organizar resultados con GROUP BY, a aplicar filtros a grupos mediante HAVING y a realizar transformaciones condicionales con CASE.

### 2. Funciones Agregadas:

Estas funciones, como `MIN`, `MAX`, `SUM`, `AVG` y `COUNT`, te permitirán obtener estadísticas esenciales y patrones clave de nuestros datos. Con `MIN` y `MAX`, encontraremos los valores mínimo y máximo en una columna. Con `SUM`, obtendrás la suma de valores numéricos. `AVG` te permitirá calcular el promedio, y `COUNT` contará el número de registros en un conjunto. Estas funciones te ayudarán a comprender mejor la distribución y las características centrales de nuestros datos.

#### 2.1 `MIN`, `MAX`:

Estas funciones te devuelven el valor máximo o mínimo en una columna numérica.

Sintaxis:

```sql
SELECT MIN(columna)
FROM tabla
```

**Ejemplo:**

| id\_alumna | nombre | apellido | email             | telefono  | direccion      | ciudad    | pais    |
| ---------- | ------ | -------- | ----------------- | --------- | -------------- | --------- | ------- |
| 1          | Ana    | González | <ana@adalab.es>   | 654785214 | Calle Alumna 1 | Madrid    | España  |
| 2          | Maria  | López    | <maria@adalab.es> | 689656322 | Calle Alumna 2 | Barcelona | España  |
| 3          | Lucía  | Ramos    | <lucia@adalab.es> | 674459123 | Calle Alumna 3 | Valencia  | España  |
| 4          | Elena  | Bueno    | <elena@adalab.es> | 628546577 | Calle Alumna 4 | Bilbao    | España  |
| 5          | Rocío  | García   | <rocio@adalab.es> | 616365624 | Calle Alumna 5 | Paris     | Francia |

```sql
SELECT MIN(id_alumna) AS IDMenor
FROM alumnas;
```

| IDMenor |
| ------- |
| 1       |

Estas funciones también se pueden usar con atributos y datos alfanuméricos. En ese caso el operador `MIN` se quedará con el resultado que fuese el primero si ordenásemos los registros por orden alfabético (de la A a la Z). Si usarás `MAX` sería similar pero quedándose con el último resultado.

#### 2.2 `SUM`:

Devuelve la suma de todos los valores en una columna numérica. Es ideal para calcular totales o agregados numéricos, como el total de ventas.

Sintaxis:

```sql
SELECT SUM(columna)
FROM tabla
```

**Ejemplo:**

Usando la tabla empleadas que contiene una columna `Salario` para cada una de las empleadas, `SUM()` resultaría útil para conocer datos como la cantidad de dinero que una empresa está gastando en los salarios de sus empleadas:

| id\_empleada | salario | nombre | apellido | pais    |
| ------------ | ------- | ------ | -------- | ------- |
| 1            | 2500    | Ana    | González | España  |
| 2            | 4000    | Maria  | López    | España  |
| 3            | 3000    | Lucía  | Ramos    | España  |
| 4            | 5000    | Elena  | Bueno    | España  |
| 5            | 1500    | Rocío  | García   | Francia |

```sql
SELECT SUM(salario) AS TotalSalarios
FROM empleadas;
```

El resultado obtenido de la consulta anterior será el siguiente:

| TotalSalarios |
| ------------- |
| 16000         |

#### 2.3 `AVG`:

La sentencia `AVG()` sirve para calcular el valor medio (*average*) del atributo o columna especificado. Volviendo al ejemplo anterior, nos serviría para conocer el salario medio de las empleadas de la empresa:

```sql
SELECT AVG(salario) AS SalarioMedio
FROM empleadas;
```

El resultado de la consulta anterior será el siguiente:

| SalarioMedio |
| ------------ |
| 3200         |

#### 2.4 `COUNT`:

Nos ofrece el número de filas en una columna o conjunto. Esto es útil para contar registros y determinar la cantidad de ocurrencias en una categoría.

Sintaxis:

```sql
SELECT COUNT(columna)
FROM tabla;
```

**Ejemplo:**

```sql
SELECT COUNT(salario) AS SalariosAltos
FROM empleadas
WHERE salario >= 3000;
```

El resultado de la consulta anterior será:

| SalariosAltos |
| ------------- |
| 3             |

En el ejemplo anterior, la función `COUNT()` ha resultado útil para conocer cuántas empleadas de la empresa tienen un salario mayor a 3000€ (gracias a la condición establecida con `WHERE`).

**NOTA:**

Cuando usas funciones agregadas como `MIN`, `MAX`, `SUM`, `AVG` y `COUNT`, estamos realizando cálculos sobre una columna específica en una tabla. Los resultados de estas funciones proporcionan información resumida sobre los valores dentro de esa columna. Sin embargo, es esencial recordar que estas funciones se aplican a todo el conjunto de datos y generan un único valor que representa una característica particular de esos datos.

## Ejercicios:

En este ejercicio vamos a usar una tabla llamada `customers` (clientes/as) que debes crear y añadirle datos, esta tabla debe ir dentro de una base de datos `shop`.

La tabla customers tiene las siguientes columnas:

* `customer_number`: el número identificativo de las clientas/es. Es un número entero y sirve de clave primaria.
* `customer_name`: el nombre de las empresas en las que trabajan las/los clientas/es. Es una cadena de texto.
* `contact_last_name`: El apellido de la persona de contacto en la empresa cliente. Es una cadena de texto.
* `contact_first_name`: El nombre de la persona de contacto en la empresa cliente. Es una cadena de texto.
* `phone`: El teléfono de la persona de contacto en la empresa cliente. Es una cadena de texto (ya que hay espacios).
* `address_line1`: La dirección (calle, número, etc.) de la empresa cliente. Es una cadena de texto.
* `address_line2`: La dirección de la empresa cliente (si se necesita mas espacio). Es una cadena de texto. Muchas veces está vacía.
* `city`: La ciudad de la empresa cliente. Es una cadena de texto.
* `state`: El estado en el que se encuentra la empresa cliente. Válido para los Estados Unidos. Es una cadena de texto.
* `postal_code`: El código postal. Es una cadena de texto (ya que puede haber espacios).
* `country`: El país de la empresa cliente. Es una cadena de texto.
* `sales_rep_employee_number`: El número identificador de la empleada o empleado que lleva a esa empresa cliente. Es un número entero.
* `credit_limit`: El límite de crédito que tiene la empresa cliente. Es un número decimal.

Una vez tengas la tabla creada con datos vamos a hacer las siguientes queries:

1. Realiza una consulta `SELECT` que obtenga el número identificativo de cliente más bajo de la base de datos.
2. Selecciona el limite de crédito medio para los clientes de España.
3. Selecciona el número de clientes en Francia.
4. Selecciona el máximo de crédito que tiene cualquiera de los clientes del empleado con número 1323.
5. ¿Cuál es el número máximo de empleado de la tabla customers?


# 4.4.2 GROUP BY - HAVING

### 1. GROUP BY:

La sentencia `GROUP BY` te permite ir más allá de la simple obtención de resultados individuales. Al utilizar `GROUP BY`, podemos agrupar filas en función de valores comunes en una columna y luego realizar cálculos y análisis dentro de esos grupos individuales. Esta segmentación nos permite comprender cómo se distribuyen los datos en función de ciertas características.

Puede ayudarte a responder preguntas como "¿Cuál es la categoría más rentable?", "¿Cómo se distribuyen las edades de nuestros clientes?" o "¿En qué meses tenemos más nuevos registros?". Esta herramienta esencial nos permite explorar tendencias, identificar patrones y descubrir información dentro de subconjuntos de datos específicos.

Sintaxis básica de una consulta que utiliza `GROUP BY`:

```sql
SELECT columna_agrupada, función_agregación(columna_calculo)
FROM tabla
GROUP BY columna_agrupada;
```

* `columna_agrupada`: Es la columna por la cual deseas agrupar tus datos.
* `función_agregación`: Es una función de agregación como SUM, AVG, MIN, MAX o COUNT que aplicarás a una columna para obtener un resultado agregado.
* `columna_calculo`: Es la columna a la cual aplicarás la función de agregación.

### 2. HAVING:

Mientras que `WHERE` nos permite filtrar filas individuales, `HAVING` nos brinda la capacidad de filtrar grupos generados por la cláusula `GROUP BY`.

La sentencia `HAVING` funciona como un filtro de grupo, lo que significa que tendremos que usarla con un `GROUP BY`. Esto nos permite aplicar condiciones a grupos específicos en función de los resultados de las funciones agregadas, como `SUM`, `AVG`, `COUNT`, `MIN` y `MAX`.

Sintaxis:

```sql
SELECT columna1, función_agragada(columna2)
FROM tabla
GROUP BY columna3
HAVING condición;
```

**Ejemplo:**

En el caso de la tabla empleadas, podríamos preguntarnos por el salario medio de las empleadas para cada país, pero solo para los países que tengan al menos 3 empleadas:

```sql
SELECT AVG(salario) AS SalariosMediosPais, pais
FROM empleadas
GROUP BY pais
HAVING COUNT(*) >= 3;
```

El resultado de la consulta anterior sería el siguiente:

| SalariosMediosPais | pais   |
| ------------------ | ------ |
| 3625               | España |

Puedes ver que nos ha devuelto el salario medio sólo para España, que es el único que tiene un COUNT mayor o igual que 3.

### Ejercicios

En este ejercicio seguimos usando la tabla `customers` , realiza las siguientes queries:

**\_No es necesario hacerlos todo, realiza alguno usando groupby y otros donde uses having \_**

**Group by**

1. Selecciona el número de clientes en cada país.
2. Total de crédito otorgado por empleado de ventas
3. Promedio de límite de crédito por país
4. Total de crédito otorgado por ciudad

**Having**

1. Clientes con límite de crédito superior a 50000 (puedes sustituir 50000 por un valor que tengas en tu tabla)
2. Empleados de ventas con más de 10 clientes asignados
3. Países con más de 5 clientes
4. Ciudades donde el total de crédito otorgado supere los 100000 (puedes sustituir 100000 por un valor que tengas en tu tabla)

# 4.4.3 CASE

> **Nota:** Esta lección es un BONUS. Si no te da tiempo la miras después de terminar el bootcamp

### 1.CASE:

La expresión `CASE` nos permite aplicar lógica condicional dentro de nuestras consultas SQL. Puedes establecer condiciones y definir valores o expresiones a utilizar en función de si esas condiciones se cumplen (sería similar al `if` de Javascript que ya conocemos). Esto te permite realizar transformaciones de datos y cálculos personalizados en nuestros resultados. Con esta expresión vamos a crear temporalmente (nunca existirá en la tabla de la BBDD) una nueva columna basada en las condiciones que hayamos establecido.

**Ejemplo:**

```sql
SELECT salario,
CASE
    WHEN salario < 2000 THEN "Bajo"
    WHEN salario > 3000 THEN "Alto"
    ELSE "Medio"
    END AS RangoSalario
FROM empleadas;
```

En esta nueva consulta se han determinado 2 umbrales diferentes para el salario, 2000 y 3000 euros, para dividir a las empleadas en tres categorías: 'Bajo', 'Medio' y 'Alto'. Se ha finalizado el `CASE` añadiendo el operador `END` y un alias para el mismo (`RangoSalario`). También hemos añadido a los resultados seleccionados la columna salario.

El resultado de la consulta anterior sería el siguiente:

| RangoSalario | salario |
| ------------ | ------- |
| Medio        | 2500    |
| Alto         | 4000    |
| Medio        | 3000    |
| Alto         | 5000    |
| Bajo         | 1500    |

Se pueden introducir condiciones con `CASE` dentro de otras sentencias `CASE`, creando subcasos dentro de casos (sería como un `if` dentro de otro `if`):

```sql
SELECT
CASE
    WHEN salario < 2000 THEN "Bajo"
    ELSE
        CASE WHEN salario > 3000 THEN "Alto"
        ELSE "Medio"
        END
    END RangoSalario
FROM empleadas;
```

Esta última consulta tiene el mismo objetivo que la anterior (dividir los salarios de las empleadas en tres rangos/categorías diferentes), aunque en este caso hace uso de `CASE` anidados. El primer `CASE` comprueba una condición para el salario y si no se cumple (indicamos ese resto de casos con `ELSE`) abrimos otra sentencia `CASE` en la que comprobamos otra condición, que tiene su `ELSE` también por si no se cumple.

El resultado de la consulta anterior sería el siguiente:

| RangoSalario | salario |
| ------------ | ------- |
| Medio        | 2500    |
| Alto         | 4000    |
| Medio        | 3000    |
| Alto         | 5000    |
| Bajo         | 1500    |

El resultado, como podemos observar, es idéntico al caso en el que habríamos utilizado un único CASE con dos umbrales (WHEN). No obstante, es importante notar que el factor distintivo al emplear múltiples bloques CASE separados por el operador ELSE radica en que, si la primera declaración CASE se cumple, las condiciones subsiguientes dentro del bloque ELSE no se evaluarán. En el primer ejemplo, ambos umbrales se encontraban dentro del mismo bloque CASE (sin separarlos mediante ELSE), lo que conlleva a que todas las condiciones siempre se evalúen.

**NOTA:** Cada `CASE` debe tener su `END` asociado (y de manera opcional su alias). Es importante también añadir los operadores `ELSE` para que el SQL sepa como continuar o actuar cuando no se cumpla ninguna de las condiciones consideradas en los `CASE`.

Podemos usar `CASE` dentro del operador `WHERE`. De esta manera, los valores que tomarán de argumento estas cláusulas pueden ser diferentes según se den ciertas condiciones que se comprueban con `CASE`.

Un ejemplo del uso de `CASE` dentro del `WHERE` sería la siguiente consulta SQL:

```sql
SELECT nombre, apellido
FROM empleadas
WHERE salario >
    (SELECT CASE
        WHEN pais = "España" THEN 1000
        WHEN pais = "Francia" THEN 2000
        ELSE 1500
        END);
```

En ella estamos seleccionando el nombre y apellidos únicamente de aquellas empleadas cuyo salario sea mayor que 1000 euros en el caso de que sean de España, mayor que 2000 cuando sean de Francia y de 1500 euros en el resto de casos. Es importante ver que aunque el `CASE` esté en el `WHERE`, el `ELSE`, y el `END` también se incluyen.

El resultado de la consulta anterior sería el siguiente:

| nombre | apellido |
| ------ | -------- |
| Ana    | González |
| Maria  | López    |
| Lucía  | Ramos    |
| Elena  | Bueno    |

### Ejercicios

En este ejercicio seguimos usando la tabla `customers` , realiza las siguientes queries:

1. Identificación de clientes con nombres largos o cortos (si tienen mas de 10 caracteres es Largo) **busca la función length**
2. Categorización de clientes según su país de origen (España-> nacional, otro--> internacional)
3. Clasificación de clientes según el nombre de la ciudad (Madrid-> ciudad grande, Barcelona -> ciudad grande, Cuenca -> ciudad pequeña, Vigo -> ciudad pequeña)

***Ejercicios en databe shop, script ***