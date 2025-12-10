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