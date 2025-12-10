# Testing

Para comenzar a usar Jest:

1º instalamos Jest y 2 dependencias:

2º Creamos el fichero jest.confug

3º Creamos en package.json el script para poder lanzar los test


Para crear el archivo debemos importar las funciones o componentes necesarios

Si vamos a realizar varias pruebas con distintos valores de mete dentro describe:
```bash
describe('texto explicativo',() = >{

test('texto', () =>{
// Preparacion
Declaramos a las constantes que nos hacen falta
const numberA = 4;
const numberA = 5;

// Actuacion
Llamamos a la función o código que queremos que se ejecute y los guardamos en una variable
const resultado = suma(numberA, numberB);

// Asercion
Hacemos la comprobación, diciendole lo que en principio nos tiene que devolver
expect (resultado).toBe(9)

});
});

```

Si sale coincide nos saldrá que ha pasado el test
Para ejecutar los test: npm test

## Testing library

Sólo con Jest no podemos hacer comprobaciones de componentes de React, por eso necesitramos instalar esta dependencia:
*****

A los archivos de test que vayan a probar componentes les pondremos la extensión jsx

```bash

test("check if target is _blank", () => {
  // Preparacion (renderizar la página pasandole las props que queramos)
  render(<MenuItem text="Blog" href="https://adalab.es/blog" openInNewTab />); // Tenemos que renderizar el componente que queremos

  // Actuación (Declaramos las variables necesarias)
  // Aqui estamos recogiendo los elementos del DOM
  const elements = screen.getAllByText(/blog/i); // Estamos buscando con un regex
  const target = elements.getAttribute("target");

 // Aserción (Lo que esperamos que pase cuandop las variables sean las que estamos comprobando)
  expect(target).toBe("_blank"); // Esperamos que el atributo target sea _blank
});

```
