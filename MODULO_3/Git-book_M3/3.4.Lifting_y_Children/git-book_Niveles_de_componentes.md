# 3.4.2 Varios niveles de componentes

### Props y lifting de tres o más niveles

Desde la lección en la que aprendimos a trabajar con varios componentes solo hemos creado dos niveles en la jerarquía de componentes:

* App: primer nivel de la jerarquía.
* Sus hijas directas: segundo nivel.

En esta mini lección aprenderemos cómo se trabaja con más niveles: con las nietas, bisnietas, tataranietas, etc. de App.

Atención, spoiler: que haya varios niveles de componentes solo implica un mínimo cambio en las props y en el lifting.

> **Nota:** esta mini lección es importante pero no urgente. Puedes esperar a dominar las props antes de dominar esta.

### Jerarquía de tres o más niveles

Como ya sabemos, **en React creamos componentes para organizar el código** de nuestra aplicación, pero también para **separar la funcionalidad y la estética** en partes que tienen una identidad propia. También creamos componentes para **reutilizarlos**. En definitiva, los creamos por varios motivos.

Se podría decir que **el diseño y la funcionalidad de la aplicación nos indica qué y cuántos componentes debemos crear**. No lo podemos decidir nosotras alegremente.

Por ello cada aplicación tendrá bastantes componentes, y lo normal es que tengamos muchos niveles en la jerarquía de componentes.

Cada uno de estos componentes es independiente entre sí: no sabe quiénes son sus hermanas, ni madre ni su abuela, lo único que sabe cada uno es quiénes son sus hijas directas. **Los componentes tampoco saben en qué nivel están, y además les da igual.**

El único aspecto que nos debe preocupar a la hora de tener varios niveles es la comunicación entre componentes, es decir, las props y el lifting.

### Props en componentes de dos niveles

Antes de continuar analicemos un par de cosas de una aplicación en la que solo hay dos niveles.

Hemos creado una tienda de camisetas:

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-8994df280e44c81bc50b969cd08ac649056b3a26%2Freact_ejercicio_tienda_camisetas_2_niveles.png?alt=media)

En la que hay dos niveles de componentes: `App` y `Product`. Veamos el código de [este ejemplo](https://ln.run/iILNN).

> **Nota:** en el código estamos mostrando un `<ul>` con un solo `<li>` para simplificar. En un ejemplo real podríamos tener varios productos.

No tiene mucho misterio, ¿verdad?. `App` importa y usa `Product` y le pasa props. `Product` recibe estos datos por props y los pinta.

La conclusión es que, al haber dos niveles, **el nivel superior es el que pasa los datos** y **el nivel inferior es el que los recibe**. Lo podríamos ver como una cadena de dos eslabones.

### Props en componentes de tres niveles

¿Qué pasará entonces cuando tengamos tres niveles? Mira [este código](https://ln.run/qMkvi) en el que hemos metido un componente llamado `ProductList` entre `App` y `Product`.

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-f60f39004c8e15adf48da94a80a40ad57c2c48e9%2Freact_ejercicio_tienda_camisetas_3_niveles.png?alt=media)

Lo importante de este ejemplo es que el componente que está en el medio, es decir, `ProductList`, lo único que hace es transmitir props desde su componente madre a su componente hija. Es decir, **en una cadena de tres eslabones, el eslabón del medio es un simple eslabón, un puente, un intermediario entre los eslabones de los extremos.**

Con el código de `ProductList`:

```jsx
// Parte del fichero src/component/ProductList.js

<Product
  imgSrc={props.imgSrc}
  name={props.name}
  description={props.description}
/>
```

Vemos que desde `<App />` recibimos `props.imgSrc`. Aquí se la pasamos a `<Product />` con `imgSrc={props.imgSrc}`. Y lo mismo para las props `name` y `description`.

El componente `<ProductList />` es un mensajero de información, no sabe si `imgSrc`, `name` y `description` son string, number, funciones...

Cuando programes varios niveles de componentes tu preocupación debe ser:

* Pensar en cada momento qué componente estás programando.
* Pensar qué debe recibir cada componente por props.
* Pensar qué debe pasar a sus hijas cada componente a través de las props.
* Usar la extensión de Chrome React DevTools > Componentes para saber si lo estás haciendo bien.

### Props en componentes de más de tres niveles

Como te podrás imaginar, en una jerarquía de 4 o más niveles, para pasar props desde el primer nivel al último tendremos:

* El componente del primer nivel (App): es el que envía las props hacia abajo.
* Los componentes intermedios: reciben las props de su madre y se las pasan a sus hijas. Son intermediarios.
* El componente del último nivel: es el que recibe las props y las usa, las pinta.

Ya está.

### Lifting en componentes de tres o más niveles

Como hemos explicado, hacer **lifting es pasar a un componente hija una prop que en vez de ser un dato es una función sin ejecutar**. Así que todo lo que hemos aprendido para pasar props por varios niveles se aplica exactamente igual al lifting.

Veamos [este ejemplo](https://ln.run/5v4qP) en el que desde `App` estamos pasando la función `addToCart` hacia abajo.

Cuando la usuaria pulsa en **Añadir a la cesta** se ejecuta la línea `props.addToCart(props.productId);` que viaja hacia arriba desde `Product` a `ProductList` a `App`, y acaba consoleando el `productId` del producto pulsado.

### Conclusiones

Para crear varios niveles de componentes tenemos:

* El nivel superior, que es quien pasa las props o lifting hacia sus hijas:

  ```jsx
  <ProductList
    productId="349"
    imgSrc="//beta.adalab.es/ejercicios-extra/api/eshop/assets/images/react.jpg"
    name="Camiseta React JS"
    description="Camiseta para mujer de cuello ancho"
    addToCart={addToCart}
  />
  ```
* Los niveles intermedios solo transmiten información:

  ```jsx
  <Product
    productId={props.productId}
    imgSrc={props.imgSrc}
    name={props.name}
    description={props.description}
    addToCart={props.addToCart}
  />
  ```
* El último nivel usa y pinta la información recibida por props.

### Ejercicios

#### 1. Tres niveles en el carro de la compra

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-b65273381e581a77287e48b7a1f52765ebf0e261%2Freact_ejercicio_cesta_de_la_compra.png?alt=media)

Vamos a continuar con el carro de la compra porque queremos seguir limpiando nuestro código y dividiéndolo en componentes más pequeños.

> **Nota:** quizás te parecerá exagerada nuestra obsesión por hacer componentes pequeños. Si todavía no lo entiendes, cuando trabajes en un proyecto de tamaño medio en el que hay varias decenas de miles de líneas de código agradecerás que todo esté limpio, organizado y que los ficheros no tengan más de 250 líneas.
>
> Cuando hagas una prueba técnica para un proceso de selección es muy, muy importante que limpies y organices tu código lo máximo posible. Esta es una faceta muy valorada por las empresas.

Continuaremos el ejercicio del carro de la compra. Si no terminaste todos los ejercicios de ayer, no te preocupes, solo necesitamos que además de `App` hayas creado al menos un componente que haga lifting, como por ejemplo `InputGroupText`.

Suponiendo que solo tengas creado el componente `InputGroupText`, tu código debería ser algo parecido a:

```jsx
// Fragmentos del fichero src/components/App.jsx
import { useState } from "react";
import InputGroupText from "./InputGroupText";

const App = () => {
  // Estados del componente...

  // Eventos...

  return (
    <div>
      <form className="form" onSubmit={handleForm}>
        <h2>Rellena tus datos para finalizar la compra:</h2>
        <div className="form">
          <InputGroupText
            labelText="Escribe un nombre:"
            inputName="name"
            inputId="name"
            inputPlaceholder="María García"
            inputValue={name}
            onChange={handleName}
          />

          {/* Resto de componentes o código HTML... */}
        </div>
      </form>
    </div>
  );
};

export default App;
```

Queremos crear el componente `Form` para que la jerarquía de componentes sea:

* `App` (primer nivel)
  * `Form` (segundo nivel)
    * `InputGroupText`: para el nombre (tercer nivel).
    * `InputGroupText`: para el email (tercer nivel).
    * `InputGroupSelect`: para la región (tercer nivel).
    * `InputGroupRadio`: para el pago con tarjeta de crédito (tercer nivel).
    * `InputGroupRadio`: para el pago con efectivo (tercer nivel).
    * `InputGroupRadio`: para el pago contra reembolso (tercer nivel).
    * `InputGroupCheck`: para los términos legales (tercer nivel).
    * `Button`: para el botón de Enviar (tercer nivel).
    * `Button`: para el botón de Limpiar el formulario (tercer nivel).
  * `Preview` (segundo nivel)

Para ello:

1. Crea el componente `Form`.
2. Mueve todo el código que está dentro de la etiqueta `<form className="form" onSubmit={handleForm}>` a este nuevo componente.
3. El componente `Form` está usando el componente `InputGroupText`. Ahora el componente `Form` debe recibir por props los datos que debe pasar el componente `InputGroupText`. El componente `Form` debe hacer de intermediario entre `App` e `InputGroupText`.

Ahora que estás trabajando con tres niveles cobra mucha más importancia el uso de DevTools > Components, el `debugger` y leer y entender muy bien los errores que React nos muestra, ya que son de gran ayuda.

#### 2. Evitando el evento submit

Atención pregunta: ¿qué componente tiene la responsabilidad de prevenir el envío del formulario en el ejercicio anterior? ¿Es responsabilidad de `App`, quizás es de `Form` o de otro componente?

La responsabilidad de hacer el `ev.preventDefault()` del evento `submit` de un formulario es del componente que tiene la etiqueta `form`. Dicho de otra forma, si yo soy la encargada de crear un formulario, también lo soy de que dicho formulario funcione bien.

Otra pregunta: ¿quién necesita saber que la usuaria ha pulsado en Enviar y quiere que sus datos se envíen al servidor? Pues el componente `App`, ya que es el más listo y quien lo controla todo.

Por estos dos motivos debemos poner un poco de funcionalidad en el componente `Form` y otro poco de funcionalidad en `App`. Sigue los siguientes pasos:

1. En la función `handleForm` de `App`:
   1. Borra `ev.preventDefault();`, ya que no es su responsabilidad.
   2. Puesto que esta función ya no usa el parámetro `ev`, bórralo también.
2. En el retorno de `App`:
   1. Pasa a `Form` una prop llamada `handleFormSubmit`. El valor de esta prop debe ser la función `handleForm` de `App`. Todo esto lo hacemos para poder hacer lifting, para que `Form` avise a `App` de que la usuaria quiere enviar el formulario.
3. En el componente `Form`:
   1. Crea una función manejadora llamada `handleForm`.
   2. Asocia esta función al `onSubmit` del formulario.
   3. En esta función haz el `ev.preventDefault();` ya que sí es su responsabilidad.
   4. Ejecuta `props.handleFormSubmit` para hacer el lifting.

En realidad al programar un componente debemos preguntarnos siempre: **¿cuáles son las responsabilidades de este componente y cuáles no lo son?**
