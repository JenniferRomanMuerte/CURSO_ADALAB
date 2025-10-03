## FLEXBOX
- Nos ayuda a colocar elementos en la página.
- Tenemos que asignar display: flex al contenedor padre donde queremos que los     elementos se coloquen.

## flex-direction
Con esta propiedad podemos indicarle la dirección en la que van a ir las cajas. Por defecto las coloca en fila.
- Horizontal (en fila): row
- Horizontal al revés: row- reverse
- Vertical (en columna): column
- Vertical al revés: column- reverse

Si le ponemos disposicion columna, las propiedades align-items y justify content se cambian:
- justify-content pasa a dar valores a lo vertical
- align-items pasa a dar valores a lo horizontal

## justify-content < - >
Coloca los elementos horizontalmente. Tiene varios valores.
- center: Centra las cajas en el centro.
- flex-start: Coloca las cajas al principio
- flex-end: Coloca las cajas al final.
- space-arround: Reparte el espacio entre las cajas y 1 de los espacios que sobra lo reparte entre el lado izquierdo y el lado derecho
- space-between: Reparte todo el espacio entre las cajas
- space- evenly: Deja un espacio a la izquierda y a la derecha y el resto lo reparte entre las cajas.


## align-items ^
Coloca los elementos verticalmente. Tiene varios valores.
- center: Centra las cajas en el centro.
- flex-start: Coloca las cajas al principio
- flex-end: Coloca las cajas al final.
- strech: Hace que ocupe todo el espacio disponible verticalmente

## flex-wrap
Por defecto display: flex cuando la pantalla decrece las aplasta y cambia de tamaño, si no queremos que eso suceda existe flex-wrap: wrap, y con eso indicamos que si no caben pasan a otra línea.

## gap
Es el espacio que queremos darle entre los hijos del contenedor que tiene el flex. Tanto vertical como horizontal
También podemos darle:
- sólo espacio vertical : column-gap
- sólo espacio horizontal: row-gap

## order
Para colocar los elementos en distinto orden del que estaán declarados.
A tener en cuenta todos tienen order= 0, si no les asignamos valor todos tendrán ese valor.
EJEMPLO:
Si queremos asignar 1 elemento antes que los demás que tienen order 0, le pondremos order= -1

