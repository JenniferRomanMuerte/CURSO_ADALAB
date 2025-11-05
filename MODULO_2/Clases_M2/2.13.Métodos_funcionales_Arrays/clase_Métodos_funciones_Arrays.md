# MÉTODOS FUNCIONALES DE ARRAYS

Todos estos métodos se aplican sobre un array.

Para crearlos es como crear una función:

VariableDondeGuardamosResultado = ArrayOriginal.filter((nombreQueQueremamosParaCadaElementoDelArray) => CondiciónQueQueramosQueSeCumpla));


## filter()

Nos filtra los resultados de un array con la condición que le pongamos, nos devuelve otro array con los objetos que hemos obtenido.


## find() findIndex()

findIndex() NOs devuelve el índice del 1º elemento del array que cumpla la condición que le pongamos.
Si busco algo que no existe en el array nos devuelve -1.

find() Lo mismo pero en vez del índice nos devuelve el elemento entero.
Si busco algo que no existe en el array nos devuelve undefined.


## map()

Nos transforma un array, nos devuelve sólo lo que estamos transformando,, si es un objeto y modificamos una proiedad de todos ellos, sólo nos devolverá un array con las propiedades modificadas.