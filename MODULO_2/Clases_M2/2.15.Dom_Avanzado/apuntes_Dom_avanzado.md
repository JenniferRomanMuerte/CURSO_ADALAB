## Manejo avanzado del DOM

### Acceder a elemntos (capturarlos)

- parentsElement:
  Acceder al padre del elemento en cuestión:
  const elementoPadre = elemento.parentsElement(elemento);

- childNode:
  Acceder a los hijos del elemento en cuestión:
  const elementosHijos = elemento.childNode(elemento);


### Crear elemento

- createElement:
  const button = document.createElement('button');


### Añadir texto al elemento que hemos creado

No hace falta usar string Template para poner valores de variables, ponemos las variables directamente.
1º creamos el nodo con el texto
- createTextNode:
const text = document.createTextNode('Soy un butón, Click');

2º Lo añadimos al emento donde queremos mostar ese texto:
- appenChild:
button.appenChild('text')


También podemos añadirlo directamente al elemento sin crear la variable para el texto:
button.appenChild(document.createTextNode('Soy un butón, Click'))

### Para añadir un atributo

- setAtrribute:
button.setAtrribute('atributo a añadir', valor del atributo);
button.setAtrribute('title', 'Soy un botón');


### Para eliminar un elemento

- removeChild:
  Para borrar un elemento hijo en particular
  elementoPadre.removeChild('elemento a borrar');

- remove:
  Para borrar el elemento
  elemento.remove();

### Para vaciar un elemento sin borrarlo
  Seguimos usando innerHTML
  main.innerHTML = '';



## Atributos y dataList

A un elemento le podemos añadir un atributo data, para meterle la info que queramos y luego acceder a ese elemento a través de data.
- Añadir un atributo data:
  elemento.dataset.name = valor

  Esto añade al elemento:
  data-name = 'valor'
  <li data-name = 'valor'>

  Obtendríamos ese valor (Imagenemos un nombre(Jennifer))
  Si esto está en un array y queremos acceder a él podemos usar FindIndex();