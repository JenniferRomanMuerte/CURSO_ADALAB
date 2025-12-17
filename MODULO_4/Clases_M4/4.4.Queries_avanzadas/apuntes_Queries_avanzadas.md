## JOIN

select <lo que queramos obtener>
  from <tabla de donde queremos onbetener los datos>
  join <2ºtabla de la que queremos obtener los datos>
  on <compramos la clave foranea de la 1º tabla con la 1ºkey de la 2º>;


// ESTO NOS SACA TODA LA INFO DSE LAS 2 TABLAS
  select *
    from valoraciones join obras
    on(obras_id = obras.id);

// PARA ONTENER TODO DE UNA TABLA Y SOLO 1 CAMPO DE OTRA

select valoraciones.*, obras.titulo
from valoraciones
join obras on (obras_id = obras.id);

// Puede haber casos en los que la 2º tabla no tenga registros relacionados con algun dato de la 1º, para que aun asi nos salgan todos los datos de la 1º tabla independientemente de si tiene datos en la 2º tabla usamos LEFT JOIN

select valoraciones.*, obras.titulo
from valoraciones
left join obras on (obras_id = obras.id);


// para obtener datos de 2 tablas que tienen una tabla intermedia para relacionarse
debemos hacer 2 join:
- 1º tabla con la tabla intermedia
- 2º tabla con la tabla intermedia

select * from
from personajes p
join per_in_obra rel on (p.id = rel.personajes_id)
join obras o on (rel.obras_id= o.id);



## Funciones agregacion

- MAX (obtiene el valor maximo)
- MIN (obtiene el valor minimo)
- SUM (la suma de todos los registros de una columna, debe ser una columna numerica)
- AVG (la media de todos los registros de una columna, debe ser numerica)
- COUNT (cuenta la cantidad de registros que hay en una tabla)

## group by

Hace grupos dentro de una columna para no tener registros repetidos.


select <columna>
from <tabla>
group by <columna>


Dame los generos de la tabla obras y me los agrupas por genero:

select genero
from obras
group by genero

 Podemos hacer funcionaes de agregacion en la columna del select sobre otra columnba de la tabla que estemos seleccionando:

select genero, AVG(precio)
from obras
group by genero

- También se puede usar con un Join


