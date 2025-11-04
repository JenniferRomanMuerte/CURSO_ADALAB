# Métodos de arrays

## .push()  .pop()

AÑADIR:

  - push(nombre):
  Añade elementos al final del array;

  - unshift(nombre):
  Nos añade elementos al principio el array;

Se pueden añadir uno o varios elementos a la vez.

QUITAR:

  - pop():
  Nos quita el último elemento del array;

  - shift():
  Nos quita el primer elemento del array;


## .slice()

Para obtener ciertos elementos de un array desde la posición que le indiquemos.
No modifica el array original.
Debe tener 2 párametros:
- El índice donde queremos que empiece
- El índice donde queremos que termine (Éste no se incluye)
slice(2,3); Nos sacaria 1 elemento de la posición 2


## .concat()

Para juntar varios arrays.
Array que queremos juntar.concat(Array o arrays que juntaremos)
No modifica el array original, tenemos que guardar en una variable el resultado:

```bash
const highSchoolContacts = ["Enid","Bianca","Eugine"];
const villageContacts = ["Dr. Valerie"];

const newArray = highSchoolContacts.concat(villageContacts);
```


## .indexOf()

Para obtener el indice de un elemento en un array:
const elemento = array.indexOf(elemento que queremos buscar);

Si el elemento que buscamos no está en el array nos devuelve -1.



## .splice()

Modifica el array original.
splice(índice donde queremos empezar, cantidad de elementos que queremos quitar);
splice(2,4); Sería desde la posición 2 y borro  4 elementos.

Podemos guardar los elementos que hemos borrado en otro array:
const arrayRemove = arryOrigin.splice(3,7); Obtenemos los 7 elementos posteriores al indice 3 éste incluido.

Tamién nos sirve para sustituir elementos por otros:
splice(2,4,'Limon'); Nos sustituye los 4 elementos desde la posición por Limón