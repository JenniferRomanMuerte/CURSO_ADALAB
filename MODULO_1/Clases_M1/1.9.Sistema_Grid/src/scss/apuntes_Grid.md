# EXTRAS

Podemos usar Grid en toda la página para por ejemplo posicionar los elementos principales header, main, footer.
Ejemplo:
Le asiganamos 3 Filas:
  1º Header = 200px;
  2º Main = espacio restante;
  3º Footer = 60px;

  ´´´
  html

  grid-template-colums: 200px 1fr 60px;

  ´´´

* Con fr le decimos que ocupe 1 fraccion, osea que ocupara todo el espacio disponivle entre el header y el footer ya que este espacio no se reparte con nada más.

## Grid areas:

Propiedad que le asigna al padre, donde especificamos 1º se especifica el nº de filas y columnas que va a tener la rejilla:
 grid-template-column: 1fr 2fr 1fr; (Asignamos 3 columnas con sus medidas)
 grid-template-rows: auto auto auto; (Asignamos 3 filas sin medidas para que se acoplen automaticamente)

 Después en la propiedad grid-template-areas le damos nombre a cada una de las rejillas, ejemplo:

 grid-template-areas:
  "header header header"
  "content  content publi"
  "footer footer footer"

De esta manera al elemento que le asignemos el nombre de header ocupará las 3 rejillas de arriba
En el medio el elemento del contenido ocupará 2 rejillas y 1 rejilla el elemento que le asignemos publi
En la última fila ocupará las 3 columnas el elemento quew ler asignemos footer

En los elementos hijos para asignarles su posición usamos la propiedad grid-area:
grid-area: "header"
grid-area: "content"
.....

