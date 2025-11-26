# Arrays y Objetos

## Destructuring

Se puede usar tanto en Arrays como en Objetos.
Consiste en sacar las propiedades a variables reales.

### Destructuring de objetos

Nombramos entre llaves las variables que queremos obtener (deben llamarse igual que las propiedades del objeto),
y le decimos que son igual al objeto.
const {title, author, genre } = book;

Tambien podemois hacer esto:
const {title, author, genre, ...resto } = book;
Este resto guaradará las variables del objeto restantes en otro objeto.

### Structuring

Si tengo un monton de variables que quiero asociar a un objeto, las puedo asociar directamente:

```bash
const nombre = 'Jennifer';
const edad = 43;
const promo = 58;

const persona = {
  nombre, edad, promo
};
```

### Destructuring de arrays

Podemos sacar elementos del array, siempre nos sacará en orden, y el resto sólo podemos ponerlo al final.

```bash
const [firstBook, SecondBook, ...restOfBooks] = books;
console.log(firstBook);
console.log(SecondBook);
console.log(restOfBooks);
```

## Spread

 ### Spread en Objetos

Se puede usar tanto en Arrays como en Objetos.

- Podemos meter las propiedades de un objeto dentro de otro:

```bash
// Objeto que contiene propiedades comunas de las alumnas
const pantillaAlumna = {
  promo:58,
  tutora: 'Ivanico',
  evaluacion:{
    modulo1: "Vuelta al cole ",
    modulo2: "Tienda de productos"
  }
}

// Objeto de una persona con propiedades particulares y añadimos a este objeto las propiedades comunas de la plantilla
const JenniferData = {
  nombre: "Jennifer",
  edad: 43,
  ...pantillaAlumna,
}

console.log(JenniferData);
```

- Tambien podemos declarar en la plantilla las propiedades del otro objeto, y luego machacarlas, para eso el spread en el 2º objeto debemos hacerlo al principo:

```bash
// Objeto que contiene propiedades comunas de las alumnas
const pantillaAlumna = {
  nombre: "Sin definir",
  edad: "Sin definir"
  promo:58,
  tutora: 'Ivanico',
  evaluacion:{
    modulo1: "Vuelta al cole ",
    modulo2: "Tienda de productos"
  }
}

// Objeto de una persona con propiedades particulares y añadimos a este objeto las propiedades comunas de la plantilla
const JenniferData = {
...pantillaAlumna,
  nombre: "Jennifer",
  edad: 43,
}
console.log(JenniferData);
```

- Podemos colnar un objeto, de esta manera, tenemos en un array nuevo el array original y poder modificar sólo 1 de ellos.

```bash
const JenniferDataBis = [...JenniferData];
```


### Spread en Arrays


Con esto podemos crear un array nuevo a partir de otro ya ñadirle nuevos elementos sin modificar el original.

```bash
const nombres = ['Maria', 'Jennifer', 'Puri', 'Ivan'];

const nombresBis = [...nombres, 'Angel'];

console.log(nombres);
console.log(nombresBis);
```