### NUMBER

## match ramdom()

Nos da un nº aleatorio con decimales entre 0 y 1;

  - Si queremos que sea entre 0 y un nº que qeramos multiplicamos match.random() por el nº que queremos:
  **match.ramdom() * 6**

Esto nos daría un nº entre 0 y 6 con decimales.

## match round(nº decimal)

 Nos redondea el nº decimal al nº integer más cercano.
 match.round(3.14); => Esto será 3.
 match.round(3.74); => Esto será 4.

## combinación de ambos

Para generar un nº aleatorio sin decimales:
**match round(match.ramdom() *6 )** Esto no dará un nº entre 0 y 6 sin decimales


## Convertir string a nº

 - **parseInt()**
  Nos convierte el string a nº entero (sin decimales)

  ``` bash
  const stringNumber = "3.14"
  const number = parseInt(stringNumber);

  Esto no dará 3.
  ```

 - **parseFloat()**
  Nos convierte el string a nº con decimales

  ``` bash
  const stringNumber = "3.14"
  const number = parseInt(stringNumber);

  Esto no dará 3.14.
  ```

   - **Number()**
  Nos devuelve entero o decimal dependiendo de lo que haya en el string, es como una combinación de ambos.



## Para las operaciones matematicas tener en cuenta que:

  - Siempre se hacen 1º las multiplicaciones o divisiones


### STRING

Para mostrar variables en los textos que queremos mostrar existen 2 opciones:

  - Mostrar el texto entre comillas, cerrarlas después un simbolo + y la variable que queremos mostrar sin comillas.

  ``` bash

  const name = 'Jennifer';
  const text = "Hola mi nombre es " + name;

  ```
  - Mostrar las variables con interpolación, para ello metemos todo el texto entre comillas invertidas, y dentro de esto cada vez que queramos meter una variable está irá entr **${}**

  ```bash

  const name = 'Jennifer';
  const text = `Hola mi nombre es ${name}`;

  ```

### EXTRAS (trucos)

Para visualizar mejor los console.log en la consola cuando ese console.log sólo trae variables podemos meter todo entre llaves:
console.log ({name, surname, age});

## Visualización en consola

  - Los nº salen en azul
  - Los string color negro