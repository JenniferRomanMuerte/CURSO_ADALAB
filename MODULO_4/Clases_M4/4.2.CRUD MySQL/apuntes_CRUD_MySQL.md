## Exportar BBDD

podemos exportar una bbdd entera sólo la estructura o la estructura con los datos, esto es hacer dump.

Se usa delete para borrar registros, tablas, etc...

Si quisieramos borrar una columna no es Delete, seria modificar la estructura de una tabla y se usa ALTER TABLE

## Para añadir datos INSERT INTO

Se usa INSERT INTO:

INSERT INTO <tabla>
(<nombre de las columnas que vamos a añadir datos>)
VALUES (<valores que vamos a insertar>);

INSERT INTO personas
(name, lastname, age, job, birthday)
VALUES ('Jennifer', 'Román', 42, 'programadora','1982-12-21');

La fecha va entre comillas igual que los string, y el formato es año-mes-dia.

## Actualizar una tabla UPDATE

UPDATE <tabla>
SET <columnaA> = <valorA>
WHERE <condicion>;

Importante ponerle una condicion si no nos cambia todos los valores.

// Actualiza la tabla person cambiando la edad a 43 en la columna donde name es Jennifer
UPDATE person
SET age = 43
WHERE name = 'Jennifer';

## Para borrar registros, tablas, etc... DELETE

DELETE FROM <tabla>
WHERE <condicion>
LIMIT 1;

DELETE FROM person
WHERE id = 2
LIMIT 1;

### Para borrar todos los campos de una tabla

En este caso usamos mejor el TRUNCATE <table>

## Para obtener registros de una tabla

SELECT <columna>
FROM <tabla>
WHERE <condicion>
ORDER BY <columna>;

Podemos buscar como un filtro, por ejemplo, que empiece con a
SELECT *
FROM person
WHERE name LIKE 'a%';


### Tambien podemos poner condiciones multiples a la hora de buscar

Usando los operadores AND y OR

SELECT *
FROM name = 'Jennifer' AND age = 43;


SELECT *
FROM name = 'Cristina' OR age <= 43;

## Ordenacion

Sirve para ordenar por orden ascendente o descendente:

// Esto me las ordena alfabéticamente por el nombre
SELECT *
FROM person
ORDER BY name;


// Esto me las ordena númericamente por la edad
SELECT *
FROM person
ORDER BY age;


// Esto me las ordena númericamente por la edad y si tienen la misma edad por nombre
SELECT *
FROM person
ORDER BY age, name;



// Si queremos que lo ordene en orden descente hay que ponerle DESC
SELECT *
FROM person
ORDER BY age DESC, name;


## Paginación
Nos sirve para limitar el nº de resultados que se ven en la página
Usamos el LIMIT para indicarle la cantidad de registros que queremos

SELECT *
FROM person
LIMIT 5;

Si queremos que siga a partir de ahí usamos OFFSET
SELECT *
FROM person
LIMIT 5 OFFSET 5;
