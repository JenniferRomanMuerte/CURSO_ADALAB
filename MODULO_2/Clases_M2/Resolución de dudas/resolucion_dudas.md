# Resolución de dudas

## ev.target y ev.currentTarget

Se usan dentro de un evento y sirve para identificar el elemento sobre el que ha saltado el evento.

Diferencias entre ellos:
- ev.target:
  coge el elemento donde se hace click

- ev.currentTarget:
  coge el elemento donde he puesto el evento


Imaginemos que tenemos muchos checkbox dentro de una sección.
Capturamos la sección, le añadimos un evento, y llamamos a una función (función manehadora)
En esta otra función podemos acceder al elemento clicado a través ev.target y a ese elemento en particular ya podemos añadirle un evento.

```bash
// Capturamos toda la sección donde están los elementos
const sectionElement = document.querySelector('.section-btn');

/*
Función para aadir un evento al elemento clicado,
accedemos a él a través de ev.target
*/
const clickButton = (ev) => {
  ev.target.addEventListener('click',(ev)=>{
    console.log('Has clicado en botón', ev.target)
  })
};

/*
Creamos en evento en toda la sección,
llamamos a la función que asigna el evento al elemento clicado
*/
sectionElement.addEventListener('click', (clickButton));

```


## diferencias entre bucles for

- for clásico:

  Sirve para repetir líneas de código.
  ```bash
  for(let i=0; i < 10; i++){
    console.log(`Hola soy el nº ${i+1}`)
  }
  ```

- for of:

  Se usa para recorre Arrays y obtener datos de éste.
  ```bash
  const nombresGatos = ['Nala', 'Atreyu', 'Fuyur', 'Miku'];
  for(const gato of nombresGatos){
    console.log(gato);
  }

- forEach:

  Es exactamente igual que el for of pero escrito de otra manera:

  ```bash
  nombresGatos.forEach(gato =>{
    console.log(gato);
  });
  ```

- for in:

  Se usa para recorre objetos.
  ```bash
  const persona = {
    nombre: 'Jennifer';
    edad: 42;
    ciudad: 'Madrid';
  }

  for (const propiedad in persona){

    console.log(propiedad); // Esto nos saca un listado de las propiedades
    console.log(persona[propiedad]); // Esto nos saca el valor de las propiedades

  }

  ```

  ## querySelectorAll

  