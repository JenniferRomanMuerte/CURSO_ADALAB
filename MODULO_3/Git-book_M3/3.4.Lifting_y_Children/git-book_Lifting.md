# 3.4 Lifting y children

En capítulos anteriores de React... aprendimos a crear componentes y pasar datos de arriba hacia abajo.

Hoy aprenderás:

* A pasar información desde abajo hacia arriba con **lifting**.
* A trabajar con varios niveles de componentes.
* Fragments
* Props children


# 3.4.1 Lifting

### Lifting en React

En estas mini lecciones aprenderemos a pasar datos desde componentes hijas a componentes madres.

### Las props van de arriba a abajo (siempre)

En la lección de props aprendimos que:

* La comunicación entre componentes se hace con props.
* **La comunicación es siempre de arriba a abajo**.
* Es el componente madre el que decide qué datos pasa a sus hijas a través de las props.

Si te das cuenta, los componentes que hemos creado hasta ahora o **no reciben props o sí las reciben y lo único que hacen con ellas es usarlas** en el HTML.

### ¿Cuándo necesitamos pasar datos desde las hijas a las madres?

**Pues muy sencillo: cuando la hija tiene datos que la madre no tiene y necesita.** ¿En qué situaciones pasa esto? **Cuando los componentes hijas escuchan eventos de la usuaria** con los que reciben datos o acciones de esta.

Veamos un ejemplo: tenemos una aplicación en la que debemos obtener el email de la usuaria a través de un formulario y pintarlo en un contenedor para previsualizarlo.

Como queremos dividir nuestro código en pequeños componentes, creamos estos tres: `App`, `Form` y `Preview`.

La usuaria debe introducir los datos en el componente `Form` y estos deben pintarse en el componente `Preview`.

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-1eb4ac6437713316e4580d9beb9607e5415e1f03%2Freact_lifting_1.png?alt=media)

La jerarquía de componentes es:

* Un componente madre y principal llamado `<App />`.
* `<App />` tiene dos hijas: `<Form />` y `<Preview />`.

Lo más sencillo sería que `Form` se los pasase a `Preview`, pero **en React dos componentes hermanas no se pueden comunicar directamente**.

**La solución es comunicarlos a través de la madre.** `Form` le tiene que pasar los datos de la usuaria a `App` y `App` se los tiene que pasar a `Preview` para que los pinte. En el diagrama anterior esta comunicación son las líneas moradas.

No nos gusta ser pesadas, peeeeeeeero… repetimos que la comunicación entre dos componentes siempre es de arriba a abajo, desde la madre a la hija. Entonces, ¿cómo podemos hacer que la hija `<Form />` le pase datos a la madre `<App />`? Con lifting.

### ¿Qué es el lifting en React?

Las props pasan de madres a hijas, de arriba a abajo por el árbol de componentes. Lifting significa alzar, elevar, ascender... **En** [**React el lifting**](https://es.reactjs.org/docs/lifting-state-up.html) **consiste en subir datos desde un componente hija a una madre por el árbol de componentes**. Para ello usamos funciones.

### Pasando funciones por props

Hasta ahora en los ejemplos hemos pasado datos (string, numbers, booleans...) por props a las hijas.

Pero si además de pasar datos a las hijas, pasamos **funciones sin ejecutar, las hijas las podrán ejecutar cuando quieran**, normalmente cuando la usuaria de la página haga algo como pulsar un botón o escribir en un formulario. Si una hija quiere pasar datos a su madre, puede ejecutar una función de su madre con argumentos.

**El lifting se hace pasando una función sin ejecutar por props a un componente hija, para que la hija la ejecute con o sin argumentos, cuando la usuaria lance un evento.**

Un ejemplo que ha funcionado bien en clase para explicar el lifting es el siguiente: una madre lleva a su hija al campamento de verano, y la madre le dice "Hija, toma este teléfono móvil y si tienes alguna urgencia me escribes un whatsapp. Si no tienes ninguna urgencia pues nada. Venga te veo en dos semanas, pórtate bien y no te subas a los árboles".

Tres días después la hija, que es una pieza de cuidado, se sube a un árbol, se cae y se hace un chichón. La niña le escribe un whatsapp a su madre con el texto "🌲➡️👨‍🚒➡️😭➡️🚑➡️👩🏼‍🔬➡️🤕🤕🤕➡️😇🥰"

En esta bonita historia:

* **El teléfono móvil es la función sin ejecutar.** Es decir, la madre le da una herramienta a la hija para que se comunique con ella si es necesario.
* La hija decide si usar el teléfono o no para comunicarse con su madre, cuándo usarlo, qué whatsapp escribir... La hija decide cuándo ejecutar la función de la madre.
* **El mensaje de whatsapp** es la información que la hija quiere transmitir a la madre, es decir, **los argumentos con los que ejecuta la función**.
* **El hecho de que la niña se haga un chichón sería el evento que lanza la usuaria de nuestra aplicación.**

Cuando una madre le pasa datos (string, numbers, booleans...) a su hija, está haciendo eso, pasarle datos. Pero cuando una madre le pasa una función a su hija, no le pasa un dato, le pasa una **acción o una futura acción**. En programación **las funciones son acciones que se pueden realizar o ejecutar**.

Esta forma de trabajar mantiene la premisa de que la comunicación es de arriba a abajo. Es la madre quien le da una función a la hija. **El lifting se produce cuando la hija ejecuta la función, que es cuando la información viaja desde la hija a la madre, desde abajo a arriba.**

### ¿Cómo aplicamos el lifting?

Hagamos el ejercicio del formulario y preview de un email:

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-a1899797f918d90c06e160c2476db864091d8f6f%2Freact_ejercicio_generador_de_email.jpg?alt=media)

El ejercicio resuelto en un solo componente sería así:

```jsx
// Fichero src/components/App.jsx
import { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };

  return (
    <div>
      <h1>Generador de emails:</h1>
      <form>
        <label>
          Escribe un email:
          <input type="email" name="name" onChange={handleEmail} />
        </label>
      </form>
      <div className="preview">
        <p>Tu email es: {email}.</p>
        <p>
          Pulsa en <a href={`mailto:${email}`}>{email}</a> para enviar un email.
        </p>
      </div>
    </div>
  );
};

export default App;
```

El mismo ejercicio dividido en los componentes `App`, `Preview` y `Form` lo puedes visualizar en [este CodeSandbox](https://ln.run/sAhZu).

Como vemos en estos ficheros el flujo de acciones y datos de este ejercicio es:

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-6d473b402f2f61c8a43a5bd7f808d0a28e385542%2Freact_lifting_2.png?alt=media)

1. El componente `App` le pasa por pros a `Form` la función `udpateEmail`:

   * Esto lo hace con la línea `<Form updateEmail={updateEmail} />`.
   * Pasar una prop a una hija se escribe de la misma manera, independientemente de si es de tipo string o number o función.
   * El componente `Form` recibe por props un **objeto**, que dentro tiene una propiedad `updateEmail`, que es una función arrow:

   ```js
   {
       updateEmail: (email) => { ... }; // esto es una función
   }
   ```

   * Dicho de otra forma, el componente `Form` puede ejecutar la función con el código `props.updateEmail()`.
2. Esperamos a que la usuaria cambie el input del email y cuando esto sucede:
   1. En el componente `Form` se ejecuta la función `handleEmail()`.
   2. En la función `handleEmail` ejecutamos la función que recibimos por `props.updateEmail()`.
   3. Ejecutamos esta función con los argumentos que queremos. En este caso el valor del input de email: `props.updateEmail(ev.target.value)`.
   4. Es en este momento cuando **sucede el lifting**.
3. El componente `Form` ha ejecutado la función `updateEmail()` de `App`, a continuación.
   1. La función `updateEmail` recibe por parámetros el email de la usuaria.
   2. La función `updateEmail` ejecuta `setEmail(email)` y actualiza así el estado de React.
4. React se da cuenta de que el estado del componente `App` ha cambiado, y entonces:
   1. React renderiza el componente `App` porque su estado ha cambiado.
   2. El componente `App` le pasa nuevas props al componente `Preview` con la línea `<Preview email={email} />`.
   3. El componente `Preview` se renderiza porque tiene nuevas props y pinta el email actualizado.

#### Argumentos de la función de lifting

La función de lifting es una función normal y corriente. Al ejecutarla lo podemos hacer con 0, 1 o muchos parámetros.

**Cuando la ejecutamos sin parámetros el componente hija avisa a la madre de que ha pasado algo**, por ejemplo, la usuaria ha pulsado en el botón Enviar, quiere resetear un formulario o quiere cerrar un menú.

**Cuando la ejecutamos con parámetros el componente hija avisa a la madre de que ha ocurrido algo y además con qué datos ha ocurrido**. Por ejemplo, la usuaria ha cambiado el valor del email y el nuevo valor es <tal@pascual.com>.

#### Los datos deben viajar limpios

Los datos que subimos desde el componente hija a la madre tienen que estar limpios, porque somos programadoras limpias, elegantes y exquisitas.

Supongamos que en fichero `Form` ejecutamos el lifting así:

```js
// Fragmento del fichero src/components/Form.jsx

const handleEmail = (ev) => {
  props.updateEmail(ev); // Subo el evento entero
};
```

Y en `App` declaramos la función `updateEmail` así:

```js
// Fragmento del fichero src/components/App.jsx

const updateEmail = (ev) => {
  // Recibo el evento entero
  setEmail(ev.target.value);
};
```

Aquí, el dato que está viajando desde la hija a la madre es el evento entero (`ev`). **Muchísima información cuando lo único que quiero enviar hacia arriba es el email.**

Si en un futuro la diseñadora de la empresa nos pide que cambiemos el aspecto del formulario y nos dice que la usuaria ya no va a escribir su email, sino que lo va a seleccionar de una lista pulsando en un botón... pues [la hemos liado pollito](https://www.youtube.com/watch?v=W1lz7Njq2BQ). El evento que usábamos antes en `App` ya no vale. Al final tendremos que cambiar el fichero `Form.jsx` y también el `App.jsx`.

Sin embargo, si el componente `Form.jsx` solo sube por lifting los datos que necesita `App.jx`, todo es mucho más limpio. **Puedo refactorizar el fichero `Form` sin que `App` se entere.**

Para dejar el ejemplo anterior limpio escribiríamos el siguiente código:

```js
// Fragmento del fichero src/components/Form.jsx

const handleEmail = (ev) => {
  props.updateEmail(ev.target.value); // No subo el evento entero, solo el valor del input
};
```

Y en `App` declaramos la función `updateEmail` así:

```js
// Fragmento del fichero src/components/App.jsx

const updateEmail = (value) => {
  // No recibo el evento entero, solo el valor del input, que es lo que me interesa
  setEmail(value);
};
```

#### Cuerpo de la función de lifting

La función de lifting es una función normal y corriente. En el cuerpo de esta función podemos hacer todo lo que queramos. Normalmente dentro de esta función vamos a modificar uno o varios estados de React.

#### Retorno de la función de lifting

La función de lifting es una función normal y corriente. La función puede devolver lo que queramos, pero **al hacer lifting nunca nos interesa retornar nada**. No es una buena práctica hacerlo.

#### Múltiples lifting

En realidad, no has aprendido una sintaxis nueva, ni una herramienta nueva de React. Lo único que has aprendido es una nueva forma de trabajar. Así lo tienes que ver.

Ahora piensa que lo puedes combinar como quieras:

* Puedes crear una función de lifting en App y pasársela a varios componentes hijas.
* Puedes crear dos funciones de lifting en App y pasárselas a una sola hija, porque quieres que avise a su madre de dos cosas diferentes.

En resumen, puedes combinarlo como quieras.

### Depurando el lifting

Como ya hemos dicho, **la función sin ejecutar** que pasamos por props a un componente hija **es una prop como cualquier otra**. Por ello también la podemos ver en la [extensión de React para DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es)

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-d65fc40bbbf368d6ffd2c86ec9d3546a81fa94f0%2Freact_lifting_devtools.png?alt=media)

### Conclusiones

Vamos a dividir nuestra aplicación en componentes. Algunos componentes hijas escuchan eventos de la usuaria. Si queremos subir una acción o dato desde las hijas hasta la madre App, tenemos que hacer **lifting**.

* En el componente madre tenemos que:
  * Declarar una función, por ejemplo `const updateSomething = () => {}`.
  * Pasar por props esa función a la hija con `<Hija updateSomething={updateSomething} />`.
* En el componente hija:
  * Debemos ejecutar esta función en una función manejadora de eventos con

    ```js
    const handleEvent = (ev) => {
      props.updateSomething(ev.target.value);
    };
    ```
  * Esta función debe ejecutarse pasando hacia arriba los datos limpios, solo los datos que la madre necesita.

### Ejercicios

Imagina que tienes una aplicación que simula el carro de la compra.

![](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-b65273381e581a77287e48b7a1f52765ebf0e261%2Freact_ejercicio_cesta_de_la_compra.png?alt=media)

Que tiene el siguiente código en un único componente \`App\`\`:

```jsx
// Fichero src/components/App.jsx
import { useState } from "react";

const App = () => {
  // Estados del componente
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("España peninsular"); // Iniciamos el componente con la primera opción del select
  const [paymentType, setPaymentType] = useState("");
  const [legalTerms, setLegalTerms] = useState(false);

  // Eventos
  const handleName = (ev) => {
    setName(ev.target.value);
  };

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };

  const handleRegion = (ev) => {
    setRegion(ev.target.value);
  };

  const handlePaymentType = (ev) => {
    setPaymentType(ev.target.value);
  };

  const handleLegalTerms = (ev) => {
    // Como lo que nos interesa es si está activo o no, guardamos el checked
    setLegalTerms(ev.target.checked);
  };

  const handleResetButton = () => {
    // Ponemos los mismos valores que hemos usado arriba en los useState
    setName("");
    setEmail("");
    setRegion("España peninsular");
    setPaymentType("");
    setLegalTerms(false);
  };

  const handleForm = (ev) => {
    ev.preventDefault();
    console.log("Enviando datos al servidor...");
  };

  // Funciones que nos ayudan a renderizar
  const renderPaymentTypeText = () => {
    if (paymentType === "creditCard") {
      return "Tarjeta de crédito";
    } else if (paymentType === "cash") {
      return "Efectivo";
    } else if (paymentType === "cashOnDelivery") {
      return "Contra reembolso";
    }
  };

  const isValidForm = () => {
    // El formulario solo es válido cuando los inputs de tipo texto no estén vacíos, cuando se haya marcado un tipo de pago y cuando los términos legales sean true
    // También podríamos comprobar que el email tiene el formato correcto, pero no queremos complicar este ejemplo
    if (
      name !== "" &&
      email !== "" &&
      paymentType !== "" &&
      legalTerms === true
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleForm}>
        <h2>Rellena tus datos para finalizar la compra:</h2>
        <div className="form">
          {/* name */}
          <div className="input-group-text">
            <label className="label-text" htmlFor="name">
              Escribe un nombre:
            </label>
            <input
              className="input-text"
              type="text"
              name="name"
              id="name"
              placeholder="María García"
              value={name}
              onChange={handleName}
            />
          </div>

          {/* email */}
          <div className="input-group-text">
            <label className="label-text" htmlFor="email">
              Escribe un email:
            </label>
            <input
              className="input-text"
              type="email"
              name="email"
              id="email"
              placeholder="mariagarcia@gmail.com"
              value={email}
              onChange={handleEmail}
            />
          </div>

          {/* region */}
          <div className="input-group-select">
            <label className="label-text" htmlFor="region">
              Indica tu región:
            </label>
            <select
              className="input-select"
              name="region"
              id="region"
              value={region}
              onChange={handleRegion}
            >
              <option>España peninsular</option>
              <option>Islas Canarias</option>
              <option>Islas Baleares</option>
              <option>Ceuta</option>
              <option>Melilla</option>
            </select>
          </div>

          {/* payment type */}
          <label className="label-text">Indica tu método de pago:</label>

          <div className="input-group-radio">
            <label className="label-radio" htmlFor="creditCard">
              Tarjeta de crédito
            </label>
            {/* Este radio solo debe aparecer activo cuando paymentType sea creditCard */}
            <input
              type="radio"
              name="paymentType"
              id="creditCard"
              value="creditCard"
              checked={paymentType === "creditCard"}
              onChange={handlePaymentType}
            />
          </div>

          <div className="input-group-radio">
            <label className="label-radio" htmlFor="cash">
              Efectivo
            </label>
            {/* Este radio solo debe aparecer activo cuando paymentType sea cash */}
            <input
              type="radio"
              name="paymentType"
              id="cash"
              value="cash"
              checked={paymentType === "cash"}
              onChange={handlePaymentType}
            />
          </div>

          <div className="input-group-radio">
            <label className="label-radio" htmlFor="cashOnDelivery">
              Contra reembolso
            </label>
            {/* Este radio solo debe aparecer activo cuando paymentType sea cashOnDelivery */}
            <input
              type="radio"
              name="paymentType"
              id="cashOnDelivery"
              value="cashOnDelivery"
              checked={paymentType === "cashOnDelivery"}
              onChange={handlePaymentType}
            />
          </div>

          {/* legal terms */}
          <div className="input-group-checkbox">
            <label className="label-check" htmlFor="legalTerms">
              Debes aceptar nuestros términos legales para completar la compra:
            </label>
            {/* Este radio solo debe aparecer activo cuando legalTerms sea true */}
            <input
              type="checkbox"
              name="legalTerms"
              id="legalTerms"
              checked={legalTerms}
              onChange={handleLegalTerms}
            />
          </div>
        </div>

        <div className="preview">
          <h2>Tus datos son:</h2>
          <ul>
            <li>Nombre: {name}</li>
            <li>Email: {email}</li>
            <li>Región: {region}</li>
            <li>Método de pago: {renderPaymentTypeText()}</li>
            <li>
              Has aceptado nuestros términos legales:{" "}
              {legalTerms === true ? "Sí" : "No"}
            </li>
          </ul>
        </div>

        {/* reset */}
        {/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}
        <input
          className="button"
          type="submit"
          value="Enviar"
          disabled={isValidForm() === false}
        />

        {/* send */}
        <button className="button reset" onClick={handleResetButton}>
          Limpiar el formulario
        </button>
      </form>
    </div>
  );
};

export default App;
```

El objetivo de los siguientes ejercicios es agarrar el siguiente código, que está en un solo componente `App`, y despiezarlo en componentes más pequeños y reutilizables, pasándoles props y haciendo lifting.

Si al finalizar cada uno de los ejercicios la web sigue funcionando igual, es que lo has hecho todo bien.

Te recomendamos usar mucho la herramienta DevTools > Components para saber qué datos le estás pasando a los nuevos componentes. También te recomendamos poner un `debugger` en las funciones `handleLoQueSea` del componente `App` para saber qué estás recibiendo por el lifting.

#### 1. Creando el componente Preview

Lo primero que te pedimos es que copies el código anterior en un proyecto de React y lo arranques para ver cómo funciona.

A continuación empezaremos por la pieza más sencilla, la única que solo tiene props y no tiene lifting: el preview.

1. Crea un componente `Preview`.
2. Mueve la etiqueta `<div className="preview">` desde `App` a `Preview`.
3. Desde `App` debes pasar las props que `Preview` necesita.

Lo único que quizás te cueste un poco es saber cómo pasar la prop del método de pago. Para ello:

1. Pasa al componente `Preview` la prop `paymentType`.
2. Mueve la función `const renderPaymentTypeText = () => { ... }` desde el componente `App` a `Preview`.
3. Cambia un poco la función `renderPaymentTypeText` para que use la `prop.paymentType` en vez de la constante `paymentType`.

#### 2. Creando el componente InputGroupText (guarrete)

Ahora lo vamos a complicar un poquito. Vamos a crear el componente `InputGroupText` que tiene que recibir props y además hacer lifting.

En este ejercicio queremos:

1. Crear el componente `InputGroupText`.
2. Pasarle los datos que necesita por props.
3. Que haga un lifting guarrete. En el siguiente ejercicio haremos que el lifting sea limpio y elegante.

Para ello:

1. Crea el componente `InputGroupText`.
2. En el código de `App` hay dos etiquetas `<div className="input-group-text">`. Mueve la primera, la que recubre el input y el label del nombre al componente `InputGroupText`.
3. El código que acabas de mover está "acoplado" al nombre de la usuaria porque contiene cosas como "Escribe un nombre", es decir, no es un componente reutilizable. Vamos a hacerlo rVamos a hacerlo reutilizable: pasaremos desde `App` a `InputGroupText` todas las props que necesita para convertirse en un componente genérico. Estas props son:
   * `labelText`: el texto que va dentro del label.
   * `inputName`: el atributo `name` del input.
   * `inputId`: el atributo `id` del input y el `for` del label.
   * `inputPlaceholder`: el atributo `placeholder` del input.
   * `inputValue`: el valor del input.
4. El componente `InputGroupText` también necesita la función para hacer lifting. Pásale desde `App` a `InputGroupText` la prop:
   * `handleChange`: cuyo valor debe ser la función `handleName`.
5. Ahora que el `InputGroupText` ya está recibiendo todas las props que necesita; úsalas dentro del código del retorno del componente.

> **Nota:** seguramente te saldrán muchos errores en consola hasta que termines de hacer todos los pasos de este ejercicio. Lee cada uno de ellos detenidamente, entiéndelos para poder solucionarlos.

#### 3. Creando el componente InputGroupText (inmaculado)

En el ejercicio anterior hemos creado el componente `InputGroupText`, le hemos pasado props para personalizarlo y le hemos pasado la función `handleName` a través de la prop `handleChange`.

La web está funcionando, pero no de la forma más limpia posible. Vuelve a leer el apartado de esta lección llamado **Los datos tienen que viajar limpios** para dejar este componente fetén.

Lo que está pasando ahora mismo es que cuando la usuaria cambia su nombre, el componente `InputGroupText` hace lifting hacia arriba subiendo todo el evento. El componente `App` recibe en la función `handleName` todo el evento con demasiada información, y para encontrar lo que quiere debe hacer `ev.target.value`.

Para ser una programadora exquisita:

1. Pon un `debugger` en la primera línea de la función `handleName` de `App.js`:
   1. En la web cambia el nombre de la usuaria.
   2. Mira qué información está recibiendo por parámetros esta función.
   3. Si quieres ya puedes quitar el `debugger`.
2. En el componente `InputGroupText`:
   1. Crea una función manejadora llamada por ejemplo `handleInputChange`.
   2. Asigna esta función manejadora al evento `onChange` del input.
   3. Dentro de la función manejadora vamos a ejecutar la función `handleChange` que estamos recibiendo por props.
   4. La función `handleChange` la debemos ejecutar pasando como argumento el `ev.target.value`.
   5. De esta forma desde el componente `InputGroupText` solo envía hacia arriba el valor del input y no todo el evento.
3. En el componente `App`:
   1. Ya no estamos recibiendo por parámetro el evento entero, sino el valor del input. Por ello, cambia el nombre del parámetro de `ev` a `value`.
   2. Guarda en el estado de React el `value` con la función `setName`.
4. Vuelve a poner el `debugger` en la primera línea de la función `handleName` de `App.js`:
   * Vuelve a mirar qué recibes por parámetro en esta función.
   * ¿Te acuerdas lo que recibías al inicio de este ejercicio?
   * ¿Te parece que la información que estás recibiendo ahora está más limpia?

#### 4. Reutilizando el componente InputGroupText

Ahora que ya tienes el componente `InputGroupText` con un código exquisito vamos a reutilizarlo. Queremos sustituir en `App` el código

```jsx
<div className="input-group-text">
  <label className="label-text" htmlFor="email">
    Escribe un email:
  </label>
  <input
    className="input-text"
    type="email"
    name="email"
    id="email"
    placeholder="mariagarcia@gmail.com"
    value={email}
    onChange={handleEmail}
  />
</div>
```

por el componente `InputGroupText`

1. Sustituye el código anterior por `<InputGroupText />`.
2. Añade al código `<InputGroupText />` todas las props que necesita.
3. Añade también la función `setEmail` para poder hacer lifting.
4. Refactoriza la función `setEmail` porque ahora esta recibe el valor del input y no el evento.

#### 5. Crear el componente InputGroupSelect

> **Nota:** este y los siguientes ejercicios son más de lo mismo, mover código desde `App` a nuevos componentes, pasarles props y hacer lifting. En React todo es sota, caballo y rey, siempre lo mismo.
>
> Si quieres, deja estos ejercicios para otro día.

En este nuevo ejercicio lo que queremos es crear el componente `InputGroupSelect` y mover el selector de región desde `App` a este nuevo componente.

También queremos que `InputGroupSelect` sea un componente limpito, así que solo debe enviar hacia arriba por lifting el valor del select, por lo que también hay que cambiar mínimamente la función `handleRegion` de `App`.

#### 6. Crear el componente InputGroupRadio

Crea este componente y mueve el código de la tarjeta de crédito. Queremos que este componente sea reutilizable para poder utilizarlo también con las opciones de Efectivo y Contra reembolso. Y cómo no, también queremos que sea limpio. Por ello sube por lifting el valor del input, no todo el evento.

#### 7. Crear el componente InputGroupCheck

Seguimos para bingo y tenemos que hacer más de lo mismo, esta vez con el checkbox de los términos legales. Ya sabes, crea un componente nuevo, mueve el código, pásale props, pásale la función de lifting, refactoriza un poco la función `handleLegalTerms` de `App`...

#### 8. Crear más componentes

Aún quedarían un par de componentes más por crear, como son el botón de Enviar y el de Limpiar el formulario. Crea los correspondientes componentes para estos botones.

Aunque uno sea un input de tipo `submit` y el otro un `button`, si quieres puedes usar un único componente para ambos:

1. Crea el componente `Button`.
2. Mueve el código del botón "Limpiar el formulario" dentro de este componente.
3. Pásale las props y la función para hacer lifting.
4. Reutilízalo para el botón de Enviar.
   * No pasa nada porque a partir de ahora el botón de Enviar no sea un input de tipo submit y sea un button, siempre y cuando la página siga funcionando igual.

Si has llegado hasta aquí solo podemos decirte: Enhorabuena, eres una gran programadora y ya dominas la *componentización* en React con sus props y sus liftings. Nunca más vas a tener problemas a la hora de trabajar con componentes de React.


