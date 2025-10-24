# Qué es una función

Es una parte de codigo reutilizable. Donde le indicamos la acción que debe realizar.


- Se declara:

  - forma clásica
  ```bash
    function nombre(){
      // código
    }
  ```


  - función arrow
    deben definirse antes de la llamada obligatoriamente
  ```bash
    const nombre = () =>{}
  ```


- Puede recibir parámetros(éstos irán entre parentesis y separados por comas) y realizar acciones con ellos:

 ```bash
  function nombre(a,b){
    suma = a +b;
  }

  const nombre = (a,b) =>{
    suma = a +b;
  }
 ```

 ## Llamada a la función

 Cuando aparece un nombre seguido de paréntesis estamos llamando a una función.
 Pueden ser funciones nuestrasn o ya predefinidas por el lenguaje que estemos usando.

```bash
 nombre();
 ```


  ## Parámetros

