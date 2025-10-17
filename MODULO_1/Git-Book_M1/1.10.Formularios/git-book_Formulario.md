# 1.10 Formularios

### 1.10 Formularios

Durante esta sesión vamos a ver cómo trabajar con formularios en HTML para poder enviar información a través de una página web. Nadie se mete a programador web porque su sueño sea hacer formularios, pero son una parte fundamental de la web y al final es la forma en la que enviamos información; sin ellos no seríamos capaces de enviar información por Internet más allá de navegar entre páginas.

Los primeros años de la web, estos formularios solo permitían introducir algunos campos de texto y poco más, todo ello de forma trivial. Hoy en día podemos enviar archivos, seleccionar colores o incluso validar los formularios antes de enviarlos.

### ¿En qué casos se utilizan?

Cualquier página que no sirva simplemente para mostrar información es muy probable que tenga como mínimo un formulario. Los ejemplos más típicos de usos de formularios son:

* Como campo de búsqueda. La barra de búsqueda que hay en la página de Google, por ejemplo.
* Para iniciar sesión o registrarse en una web. Los formularios de inicio de sesión de Facebook o Twitter.
* Para chats. Como el campo de enviar mensaje de la versión de WhatsApp para web.
* Los procesos de compra. Todos los formularios para introducir tu dirección, el número de tarjeta, etc.


# 1.10.1 Formularios

Como hemos comentado, los formularios sirven para enviar información al servidor, ya sea para actualizar datos de alguna cuenta, realizar una búsqueda en algún sitio web o cambiar los datos de nuestro perfil... Cualquier gestión de este tipo se hace a través de formularios y prácticamente cualquier web que no sea de consulta contiene como mínimo uno.

### ¿Cómo funcionan?

Los formularios funcionan de la siguiente manera:

1. La usuaria rellena la información y pulsa el botón para enviar esa información al servidor, que será el que se encargue de procesarla. Esta se envía de la misma manera que se envía una petición para ver una página, pero en este caso junto con la petición se mandan todos los datos que la usuaria ha introducido.
2. El servidor procesa la información recibida usando el código encargado de procesarlo (este código ha sido programado en el back-end). Lo normal es que en ese código se validen que los campos son correctos y se procesen los datos (se guarda información de la usuaria en la base de datos, se comprueba si los datos de acceso son correctos, se guarda una imagen en el servidor, etc.)
3. El servidor devuelve una respuesta a la usuaria. Esta respuesta suele ser una página web nueva, adonde se redirige a la usuaria y en la que es normal poner un mensaje del estilo "tu información se ha guardado correctamente" o "ha habido un error".

Hoy en día todo este proceso de comunicarse con el servidor y enviar la información de un formulario se puede hacer usando JavaScript. Más adelante veremos cómo hacerlo y cómo utilizar este lenguaje para validar que la información es correcta y mandarla al servidor sin tener que recargar ni cambiar la página y de manera casi instantánea.

### Nuestro primer formulario en HTML

Ahora que ya sabemos qué son y para qué sirven los formularios vamos a ver cómo escribir el HTML necesario para generarlos.

En HTML, por norma general (aunque no es estrictamente necesario), antes de escribir un campo de formulario se escribe previamente la etiqueta `<form>`, que será la que utilicemos para envolver los campos. Esta etiqueta suele ir siempre acompañada de dos atributos, `method` y `action` y es invisible, no muestra nada en la pantalla. Se escribe de la siguiente forma:

```html
<form action="/signup" method="post">
  <!-- Aquí iría el contenido del formulario -->
</form>
```

El atributo `method` sirve para especificar el método que utilizaremos para enviar nuestra información. No vamos a profundizar mucho en este tema, pero es importante que sepáis que hay dos métodos distintos para enviar información a través de un formulario: POST y GET.

Como norma general utilizaremos el valor `post` para enviar datos sensibles (contraseñas, DNI, cuentas bancarias, número de tarjeta, etc.) y `get` para el resto de casos.

El atributo `action` se usa para indicar la dirección del servidor donde se envían los datos del formulario. Es, por tanto, el puente de comunicación de nuestro front-end con el back-end donde se reciben y manipulan los datos de la usuaria.

Bien, ya tenemos el envoltorio para nuestro formulario. Ahora es el momento de introducir los campos que queremos que rellene la persona que va a visitar nuestra página web. Para ello, tenemos distintos tipos de campos, aunque el más común es el de texto. Empezaremos con ese.

Para crear un campo de texto, utilizaremos la etiqueta `<input>` de HTML. Esta etiqueta tiene un atributo especial llamado `type` con el cual definiremos qué tipo de campo será (texto, e-mail, contraseña, etc.). En este caso usaremos `type="text"` para que cree un campo de texto donde podamos introducir texto normal, como nuestro nombre, apellidos, etc.

Junto con el atributo `type`, tenemos otro atributo especial llamado `name` que se utiliza en los formularios para definir cuál será el nombre del campo. De esta forma cuando la usuaria pulse el botón de enviar del formulario, llegará la información que ha introducido en este campo asociado al nombre que hayamos establecido. Por ejemplo, si tenemos un input con el atributo `name="lastName"`. Al servidor le llegará un dato llamado *lastName* que contendrá la información que la usuaria haya introducido en ese campo. Podemos usar cualquier valor para `name` pero debemos coordinarnos con la gente de back-end ya que debemos usar el mismo nombre para que luego no haya problemas. Si usamos un nombre distinto en back-end y front-end fácilmente podemos hacer que el formulario deje de funcionar: creeremos que un campo no se ha rellenado, cuando en realidad es que hemos usado otro nombre.

```html
<form action="/signup" method="post">
  <input type="text" name="firstName" />
  <input type="text" name="lastName" />
</form>
```

> **Nota:** la etiqueta input es una etiqueta sin contenido, por lo que no es necesario escribir la etiqueta de cierre. Otro detalle que podemos apreciar es que los campos se muestran en línea ya que por defecto los navegadores lo muestran con `display: inline-block;`. Podemos asignarles `display: block` para hacer que se apilen en vertical, uno debajo de otro.

Ya tenemos nuestro formulario con los dos campos necesarios para que funcione, pero nos falta lo más importante: poder enviar el formulario. Para esto vamos a usar también una etiqueta input, pero en este caso va a ser del tipo `submit` (`type="submit"`). Si introducimos esta etiqueta en nuestro formulario se mostrará un botón que, al ser pulsado, enviará el formulario. Para establecer qué texto queremos que vaya dentro del botón, usaremos el atributo `value`. Otra cosa que debemos destacar es que el botón tiene una serie de estilos CSS aplicados por defecto pero que podemos modificar añadiéndole unos nuevos que sobrescriban a los anteriores.

```html
<form action="/signup" method="post">
  <input type="text" name="firstName" />
  <input type="text" name="lastName" />
  <input type="submit" value="Enviar info" />
</form>
```

![Ejemplo de formulario con botón de enviar](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-b08386b5e8ba004d64b46bcb83dca457dfec4cde%2Fsubmit.png?alt=media)

Hay dos cosas que nos faltan aquí, y que son bastante importantes de cara a la experiencia de la usuaria. Como se puede ver, no sabemos qué debemos meter en cada campo y no tenemos un ejemplo del texto que podemos introducir, lo que hace muy difícil saber qué se nos está pidiendo. Para solucionar este problema tenemos la etiqueta `<label>` y el atributo `placeholder`.

### Label

La etiqueta `<label>` se utiliza para mostrar el título del campo, para describir qué información debemos introducir en él. La manera más indicada de utilizar una etiqueta `<label>` es incluirla justo antes del `<input>` al que acompaña. Una de las cualidades de esta etiqueta es que al pulsar sobre ella nos coloca en el campo al que acompaña.

Para decirle al navegador que nuestra etiqueta `<label>` está relacionada con un determinado `<input>` debemos hacer dos cosas: asignar un atributo `id` al input para identificarla de manera unívoca y añadir el atributo `for` a `<label>` con el id que hemos puesto al input. Como resultado queda el código que mostramos a continuación:

```html
<form action="/signup" method="post">
  <label for="firstName">Nombre</label>
  <input id="firstName" type="text" name="firstName" />
  <label for="lastName">Apellido</label>
  <input id="lastName" type="text" name="lastName" />
  <input type="submit" value="Enviar info" />
</form>
```

![Ejemplo de cómo se muestran los labels](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-b3a260a4b3dd95700de6a6b3c846ff365ada5bfa%2Flabels.png?alt=media)

> **Nota:** es importante apreciar que dentro del input el atributo `name` y el `id` pueden ser distintos, pero el `for` del label siempre debe coincidir con el `id` del input.

### Placeholder

El atributo `placeholder` se puede asignar a un input y sirve para establecer el texto que se mostrará dentro del campo cuando este esté vacío. El navegador mostrará el texto del `placeholder` dentro del `input` pero de un color gris claro para que la usuaria no lo confunda con texto que ya ha escrito en el campo.

Es una buena práctica usarlo como pista para que la persona que está rellenando el formulario sepa qué información debe introducir. Por ejemplo, podemos darle instrucciones sobre cómo debe escribir los datos:

```html
<form action="/signup" method="post">
  <label for="firstName">Nombre</label>
  <input
    placeholder="Escribe aquí tu nombre de pila..."
    id="firstName"
    type="text"
    name="firstName"
  />
  <label for="lastName">Apellido</label>
  <input
    placeholder="Escribe aquí tus apellidos..."
    id="lastName"
    type="text"
    name="lastName"
  />
  <input type="submit" value="Enviar info" />
</form>
```

![Ejemplo de placeholder para un campo de texto](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-4fe16f6712b26578006b02208ec9264b98c174fb%2Fplaceholder.png?alt=media)

Cuando la usuaria empiece a escribir, el texto del `placeholder` desaparecerá y solo se mostrarán los caracteres que ha tecleado. Esos caracteres los añade automáticamente el navegador al atributo `value`. Cuando se envíe el formulario, se enviará lo que contengan todos los `value` de cada `input` del formulario (nunca el `placeholder`, aunque no se haya escrito nada).

> **Nota:** `placeholder` es una ayuda visual para la usuaria de la página y `value` es el valor que contiene el `input`.

### type="email"

Bien, continuemos introduciendo campos. Este ejemplo se empieza a parecer a un formulario de registro, así que vamos a continuar como si se tratase de uno. En un formulario de este tipo, lo normal después del nombre es escribir el e-mail. Para esto utilizaremos también la etiqueta `<input>` pero esta vez usaremos `type="email"` para definir el campo como una dirección de correo.

```html
<form action="/signup" method="post">
  <label for="fullName">Nombre completo</label>
  <input type="text" id="fullName" name="fullName" />
  <label for="emailAddress">Correo electrónico</label>
  <input type="email" id="emailAddress" name="emailAddress" />
  <input type="submit" value="Enviar" />
</form>
```

A simple vista, parece que no hay diferencia entre los tipos `email` y `text`, pero sí que la hay, lo que pasa es que es difícilmente perceptible. La diferencia entre ambos es que cuando usamos el tipo `email`, al pulsar el botón de enviar en el formulario, se comprobará primero que el e-mail introducido es una dirección de correo válida; si es así, se enviará, y si no es correcta se mostrará un mensaje como el que aparece en la imagen que se muestra a continuación.

![Validación de e-mail](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-c2420f5b808c0d1d51a2cc50439e0a01e70d0ca1%2Fform-email-validation.png?alt=media)

Otra diferencia entre el tipo `email` y el tipo `text` es que si abrimos la página web del formulario desde un móvil, al pulsar sobre el campo del tipo `email` se abrirá un teclado diferente al que se muestra cuando pulsamos en el campo del tipo `text`. Este teclado es especial para escribir direcciones de correo electrónico y, por ejemplo, facilita escribir el símbolo `@`.

![Teclado que se muestra en móvil para los campos del tipo "email"](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-0bf266734a028e7b74f4f26e3dd502461d7bca4d%2Fform-email-keyboard.jpg?alt=media)

### type="tel"

Bien, tenemos el nombre y el e-mail, vamos con el teléfono. Para el campo del teléfono sucede lo mismo que para el del e-mail. En vez de usar `type="text"` utilizaremos `type="tel"`. En este caso no validará el teléfono antes de enviarlo porque hay teléfonos muy raros y en muchos casos también van acompañados de guiones o puntos y es complejo de gestionar. Aún así si utilizamos `type="tel"`, sí que mostrará un teclado numérico en el teléfono para facilitarnos el trabajo a la hora de escribir la información, como se puede ver en la captura de pantalla.

```html
<form action="/signup" method="post">
  <label for="telephone">Teléfono</label>
  <input type="tel" id="telephone" name="telephone" />
  <input type="submit" value="Enviar" />
</form>
```

![Captura de pantalla del teclado que se muestra en un campo del tipo teléfono](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-7322aaa365f5e75d976d4ed44519098e11df7068%2Fform-telephone-keyboard.jpg?alt=media)

### type="password"

Tenemos prácticamente todo, pero nos quedaría algo bastante importante, la contraseña. Para crear un campo para nuestra contraseña continuamos con el mismo procedimiento que en los anteriores campos, esta vez usando `type="password"` como atributo para definir el tipo de campo. Los campos tipo password tienen una diferencia frente al resto, y es que sustituyen el texto que contienen por puntos negros (●) para aumentar la seguridad y que la contraseña no sea visible.

Otra peculiaridad de los campos del tipo `password` es que su contenido se borra si se recarga la página, mientras que en un campo de texto normal el contenido se mantiene tras la recarga.

```html
<form action="/signup" method="post">
  <label for="password">Contraseña</label>
  <input type="password" id="password" name="password" />
  <input type="submit" value="Enviar" />
</form>
```

![El contenido de los campos del tipo contraseña se sustituye por puntos](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-4941f939ac8e648881a69c3d7bed5c0718d47266%2Fpassword.png?alt=media)

### Ejercicio

> **Nota:** este ejercicio es importante, intenta hacerlo mientras leas la lección.

Vamos a practicar con nuestro primer formulario. En primer lugar, maquetar una página web con un formulario con los siguientes campos (de distintos tipos, para practicarlos todos):

* Nombre
* Apellido
* Correo electrónico
* Calle
* Ciudad
* Provincia
* País
* DNI
* Teléfono
* Contraseña
* Confirmar contraseña
* Botón de enviar

Ahora, es importante que en el atributo `action` de la etiqueta `<form>` pongas la dirección `https://dev.adalab.es/api/form`, para que se envíen los datos del formulario a un servidor que hemos preparado en Adalab que mostrará lo que envía el navegador al pulsar en el botón `submit`. Puedes probar a alternar los valores `GET` y `POST` para el atributo `method` del formulario e investigar la diferencia:

```html
<form action="https://dev.adalab.es/api/form" method="GET">...</form>
```

Fíjate que con el valor `GET` en `method`, toda la información que recopila el formulario se ve en la dirección de la página después de pulsar el botón de enviar. En cambio, con `POST` no va nada ahí.

> **Nota:** en los ejercicios largos como este, recordad cambiar quién está a los mandos en el pair programming a mitad del ejercicio.


# 1.10.3 Checkbox, Radio buttons y Select

En la actualidad, disponemos de múltiples formas de introducir información mediante formularios con opciones predefinidas. A diferencia de los campos de texto (los `<input>` que hemos visto hasta ahora), las etiquetas de opciones nos permitirán elegir entre ninguna, una o más opciones y según el carácter de los datos que queremos obtener usaremos un tipo determinado u otro.

### Checkbox

Los checkbox nos permiten elegir entre una serie de opciones que no son mutuamente excluyentes, es decir, que podemos seleccionar más de una.

```html
<h3>Suplementos del vuelo:</h3>
<div>
  <label for="flightoption1">
    <input
      id="flightoption1"
      type="checkbox"
      value="chooseseat"
      name="flightoptions"
    />
    Selección de asiento
  </label>
</div>
<div>
  <label for="flightoption2">
    <input
      id="flightoption2"
      type="checkbox"
      value="assurance"
      name="flightoptions"
    />
    Seguro
  </label>
</div>
<div>
  <label for="flightoption3">
    <input
      id="flightoption3"
      type="checkbox"
      value="rentcar"
      name="flightoptions"
    />
    Coche de alquiler
  </label>
</div>
```

> Todas tienen el mismo `name` y diferentes `id`.

![Ejemplo de checkbox](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-d2b5659f99686d63e15ecddfc5824dd19f5cadfa%2Fcheckbox.png?alt=media)

### Radio

Los input del tipo `radio` nos permiten crear selecciones que se excluyan entre sí. Un ejemplo muy claro es cuando seleccionamos el tipo de pago en una lista de posibles tipos, donde no nos dejará seleccionar más que uno.

```html
<h3>Método de pago:</h3>
<div>
  <label for="paymentmethod1">
    <input
      id="paymentmethod1"
      type="radio"
      value="debitcard"
      name="paymentmethods"
    />
    Tarjeta de débito
  </label>
</div>
<div>
  <label for="paymentmethod2">
    <input
      id="paymentmethod2"
      type="radio"
      value="creditcard"
      name="paymentmethods"
    />
    Tarjeta de crédito
  </label>
</div>
<div>
  <label for="paymentmethod3">
    <input
      id="paymentmethod3"
      type="radio"
      value="paypal"
      name="paymentmethods"
    />
    Paypal
  </label>
</div>
```

> Todas tienen el mismo `name` y diferentes `id`.

![Ejemplo de radio](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-b4300ac9067641220f1459e7fc0641885c06a52c%2Fradio.png?alt=media)

### Select

Las etiquetas `select` nos permiten crear selecciones que se excluyan entre sí y que permitan elegir entre un número de opciones considerable.

Un ejemplo muy claro es el caso de la selección de una talla para zapatos. En ese caso concreto podríamos utilizar también un `input` del tipo `radio`, el problema es que en el rango de tallas de zapatos puede haber perfectamente más de 10 tallas y mostrar 10 elementos del tipo radio ocuparía mucho espacio de la página. Debido a esto utilizaremos para ese tipo de casos el `select` ya que abre un desplegable y ocupa mucho menos espacio que el input `radio`. También permite navegar mejor entre los valores porque, por ejemplo, se puede teclear un número y que nos lleve a la primera opción con ese número.

```html
<label for="size">Talla de zapato:</label>
<select id="size" name="size">
  <option value="36">36</option>
  <option value="37">37</option>
  <option value="38">38</option>
  <option value="39">39</option>
  <option value="40">40</option>
  <option value="41">41</option>
  <option value="42">42</option>
  <option value="43">43</option>
  <option value="44">44</option>
  <!-- ... continuación de la serie -->
</select>
```

![Ejemplo de select](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-bf6d479e50ee625708fe97125b0d3d7c061a0ed1%2Fselect.png?alt=media)


# 1.10.4 Otros campos

### Área de texto

Para crear un área de texto utilizaremos la etiqueta `textarea`. Esta etiqueta tiene dos atributos específicos:

* `rows`: Nos permitirá definir el número de filas (altura) que tendrá por defecto la etiqueta.
* `columns`: Nos permitirá definir el número de columnas (anchura) que tendrá por defecto la etiqueta.

Ejemplo de uso:

```html
<label for="comments">Comentarios:</label>
<textarea id="comments" name="comments" rows="8" cols="80"></textarea>
```

![Ejemplo de Textarea](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-3b7c50df9ee4640fc0785507f6a5072f05de1cea%2Ftextarea.png?alt=media)

### Número

Para introducir un campo para un número, utilizaremos la etiqueta HTML de `input` con el atributo `type="number"`. Esta etiqueta sirve para campos en los que solo queramos que se introduzcan números (códigos postales, cantidad de productos, números de domicilio, etc.). Algunos de los atributos que acepta:

* `min="0"` sirve para indicar el mínimo valor posible que podemos introducir en el campo.
* `max="10"` sirve para indicar el número máximo que podemos introducir en el campo.
* `step="2"` sirve para definir cómo será el incremento de los campos.

Ejemplo de uso:

```html
<label for="age">Edad:</label> <input type="number" id="age" name="age" />
```

### Campos ocultos

En determinados casos es necesario incluir en nuestro formulario un campo oculto para enviar información al servidor que en vez de escribir la usuaria, rellenaremos usando JavaScript. Por ejemplo, algunos servicios de soporte de aplicaciones web recogen información de nuestro sistema operativo (Windows, Linux, Mac, etc.), nuestro navegador (Firefox, Chrome, Safari, etc.) y nuestro tipo de dispositivo (ordenador, móvil, tablet, etc.) y lo envían mediante el uso de etiquetas ocultas en el formulario.

Por defecto las etiquetas ocultas contienen el atributo `display: none;` y por tanto no son visibles para la usuaria. Dada su función esto es totalmente lógico.

```html
<input type="hidden" id="productid" name="productid" value="xm234jq" />
```

### BONUS: Más atributos y etiquetas

Existen muchos otros tipos de etiquetas para formularios y atributos, pero en este caso solo hemos querido mostrar los principales, ya que no daría tiempo a ver todos. Por ejemplo, podemos usar una [barra de progreso](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress), [enlazar un fichero de nuestro ordenador](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file) o [recoger una fecha](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date). El resto tiene muchas cosas en común y puede consultarse en las guías de MDN.

* [Guía de formularios de MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms)

### Ejercicio

En este ejercicio vamos a crear el formulario de Instagram para registrarse en la red social. Para crearlo utilizaremos lo que hemos visto hasta ahora de formularios. El formulario en sí será el que se muestra en la imagen inferior. El objetivo es crear solo el HTML, pero si te atreves puedes probar también a realizar un CSS similar.

![Formulario de Instagram](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-8ed441d340bcb5ace602774b18d820ec9ba9b8c4%2Finstagram-form.png?alt=media)

Además de lo que se ve, añade los siguientes campos:

* Un campo oculto que muestre el navegador que estamos usando (pondremos el valor directamente en el HTML usando el atributo `value`).
* Un campo numérico donde podamos introducir nuestra altura en centímetros y que tenga como máximo 250 cm, como mínimo 50 cm y por defecto 150 cm.
* Un área de texto donde escribir un comentario para tu perfil.
* Un tipo de campo que se pueda activar y desactivar y en el que la usuaria indique que ha aceptado los términos y condiciones de Instagram.


# 1.10.5 Agrupación

A veces los formularios poseen gran cantidad de campos para rellenar y resulta difícil seguir la pista de cuáles son los datos que se nos piden o dónde está colocado cada uno. Como solución a este problema, HTML nos brinda las etiquetas `fieldset` y `legend`, que nos permiten agrupar elementos de un formulario como deseemos.

### Fieldset

Utilizaremos esta etiqueta para crear secciones dentro de nuestro formulario.

```html
<fieldset>
  <label for="name">Nombre</label>
  <input type="text" id="name" name="name" />
  <label for="surnames">Apellidos</label>
  <input type="text" id="surnames" name="surnames" />
  <label for="phone">Teléfono</label>
  <input type="tel" id="phone" name="phone" />
  <label for="postalcode">Código postal</label>
  <input type="number" id="postalcode" name="postalcode" />
</fieldset>
```

### Legend

Esta etiqueta nos permite asignar el nombre de una sección de nuestro formulario creada con `fieldset`. Se colocará siempre dentro del `fieldset` para indicar el nombre o el tipo de contenido que se agrupa.

Como convención, la etiqueta `legend` se suele colocar la primera dentro del contenido del `fieldset`. Esta, la coloquemos donde la coloquemos, siempre se mostrará en la parte superior izquierda del `fieldset` pisando el recuadro que dibuja este, pero podemos modificar su posición utilizando CSS.

```html
<fieldset>
  <legend>Datos personales:</legend>

  <label for="name">Nombre</label>
  <input type="text" id="name" name="name" />
  <label for="surnames">Apellidos</label>
  <input type="text" id="surnames" name="surnames" />
  <label for="phone">Teléfono</label>
  <input type="tel" id="phone" name="phone" />
  <label for="postalcode">Código postal</label>
  <input type="number" id="postalcode" name="postalcode" />
</fieldset>
```

### Restaurar el formulario a los valores por defecto

Muchas veces habrás visto que en algunos formularios existe un botón que restablece todos los campos a su valor por defecto, o dicho de otra forma, que borra la información que hemos introducido y la deja como estaba al cargar la página.

Para crear un botón en nuestro formulario que realice esta acción utilizaremos un `<input>` del tipo reset:

```html
<input type="reset" value="Restaurar valores por defecto" />
```

Este botón borrará toda la información de los campos que haya dentro de la etiqueta `<form>` que lo contenga.

### Ejercicio

En el formulario de Instagram de la mini lección anterior, añade un botón para borrar la información.

# 1.10.6 Estilos CSS

Los estilos de los formularios varían mucho entre navegadores porque todos aplican estilos por defecto. A algunos elementos de formularios no se les puede aplicar estilos, como a los `<option>`, por lo que en muchas empresas el equipo de desarrollo crea, utilizando otras etiquetas, sus propios campos personalizados para adaptar los estilos a sus necesidades. Nosotras vamos a ceñirnos a los estilos por defecto, pero en el futuro veremos cómo crear un componente de formulario personalizado usando HTML, CSS y JavaScript.

Una cosa que sí debemos tener en cuenta es que en móvil por defecto se aplican una serie de estilos a nuestros botones e inputs que modifican bastante su apariencia, aplicando bordes redondeados y un fondo con degradado. Esto es un problema que viene de los comienzos de la *era mobile*, cuando las webs no se adaptaban a dispositivos móviles y era difícil visualizarlas correctamente. En ese momento se decidió aplicar un estilo por defecto a los campos y botones para que fuesen más intuitivos. Hoy en día esto, más que ser útil, resulta molesto, pero tiene solución. Para que estos estilos no se apliquen a nuestros campos debemos hacer añadirles el atributo `appearance: none;` de la siguiente forma:

```css
input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
```

> **Nota:** el prefijo `-webkit-` y `-moz-` es específico para los navegadores Safari y Chrome, y Mozilla Firefox respectivamente.

### Expresiones regulares (aka regex o regexp)

En la vida en general hay muchas cosas que cumplen patrones y en particular en programación resulta muy útil identificarlos. Hay millones de ejemplos de patrones que se pueden identificar con expresiones regulares:

* E-mail: `nombre` + `@` + `dominio` + `.` + `extensión de dominio`. Si un e-mail no tiene alguno de estos campos en este orden, no es un e-mail válido.
* Matrícula de los coches: `4 números` + `3 letras`.
* DNI: `de 1 a 7 números` + `1 letra`.
* CSS: `.` + `nombre de la clase` + `{` + `nombre de la propiedad` + `:` + `valor de la propiedad` + `;` + `}`. Para saber si nuestro código está bien escrito, VSCode, el servidor, Chrome, etc. utilizan muchas regex.
* Colores RGB: `#` + `6 números o letras de la A a F`.
* La terminal: cuando escribimos `cp -r /carpetaA /carpetaB` la terminal sabe que `-r` es una opción (y no una carpeta) porque tiene un guión delante.
* Idiomas: un programa puede deducir si un texto está en español si contiene letras como ñ, acentos... y no contiene otras letras como 你.
* Nombres y apellidos: solo pueden tener letras, espacios y guiones.
* Precio de un producto: `número entero` + `,` + `número decimal` + `€`. Si tiene letras u otros símbolos no es un precio válido.

> Los inputs de HTML también pueden evaluar si el texto que la usuaria ha introducido cumple con un patrón o no.

> JavaScript tiene formas de evaluar diferentes textos con expresiones regulares y de esta manera saber si el texto cumple o no con el patrón de la expresión regular.

Las expresiones regulares tienen la siguiente pinta: `^[0-9]{4}[a-zA-Z]{3}$`. Si evaluamos la matrícula *1234CDC* con esta regex nos dirá que sí cumple el patrón. Vamos a analizar lo que espera esta regex:

* ^: el acento circunflejo ^ indica el inicio de la expresión regular.
* \[0-9]: la regex espera caracteres del 0 al 9, es decir, números.
* {4}: la regex espera 4 caracteres de los anteriores, es decir, 4 números.
* \[a-zA-Z]: a continuación de los 4 números, porque el orden es importante, la regex espera caracteres de la *a* a la *z* (en minúsculas) y/o de la *A* a la *Z* en mayúsculas.
* {3}: cuántas letras de las anteriores espera, pues 3.
* $: aquí debe acabar la regex, es decir si hubiese más caracteres después de las 3 letras, entonces no sería una matrícula.

> A lo largo de vuestra vida como programadoras a veces odiaréis las regexp, hasta que un día os solucionen de forma simple un problema complejo y entonces... **I ♥ RegExp**.

### Ejercicio

Crea un formulario similar al de la imagen, que es el de registro de Gmail.

![Formulario de Gmail](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-d0a50198285b30de423ba1a1b24694ba83b85aaa%2Fgmail-signup-form.png?alt=media)

Modifica el formulario anterior para que se hagan las siguientes validaciones:

* La dirección de correo actual debe ser una dirección de correo válida.
* Agrega un `input` para el teléfono que debe ser un número de teléfono válido en España (**PISTA**: busca cómo usar el atributo `pattern`).
* Agrega un `input` para el día, mes y año de la fecha de nacimiento; día y año deben ser numéricos.
