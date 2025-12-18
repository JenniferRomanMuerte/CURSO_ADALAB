# 4.9.2 Variables de entorno y Node JS

### ¿Qué son las Variables de Entorno?

En programación, las variables de entorno son un aspecto crucial. Antes de profundizar en ellas, primero definamos el "entorno".

#### ¿Qué es el Entorno?

Según la Real Academia Española (RAE), entorno se define como:

1. Ambiente, lo que rodea.
2. En informática, es el conjunto de características que definen el lugar y la forma de ejecución de una aplicación.

En el contexto de programación, el entorno es el lugar donde se ejecuta un programa. En nuestro caso, el entorno es donde se ejecuta el código de nuestro servidor.

#### Tipos de Entornos

Generalmente, ejecutamos nuestro servidor en al menos dos entornos:

* Entorno Local o de Desarrollo: Nuestro propio ordenador.
* Entorno de Producción: El servidor donde se despliega el código para acceso público a través de Internet.

#### Ejemplo de Entorno de Producción

Un ejemplo conocido es GitHub Pages. Otro servicio a considerar es Render, especialmente porque GitHub Pages no es compatible con Node.js.

#### Más Entornos

Podemos tener múltiples entornos según las necesidades del proyecto, como:

* Entorno de Prueba (QA, Testing): Para probar funcionalidades antes de su lanzamiento.
* Entorno de Release: Donde se agrupan funcionalidades listas para producción.
* Entornos de Desarrollo Especiales: Para pruebas que no son posibles en el entorno local.

### Variables de entorno

Las variables de entorno son configuraciones que el entorno pasa a nuestra aplicación web o servidor. Estas nos informan dónde se está ejecutando nuestro código.

#### Uso de las Variables de Entorno

A lo mejor te estás preguntando **para qué quiero yo saber en qué entorno se está ejecutando mi código**, si este tiene que funcionar exactamente igual tanto si se ejecuta en mi ordenador como si se ejecuta en el servidor de producción.

Pues bien, tu código **no siempre se va a ejecutar exactamente igual en un entorno que en otro**. Veamos un ejemplo:

Imaginemos que tienes dos proyectos, uno de back y otro de front, que tienen que comunicarse entre ellos. Imaginemos que el proyecto de back lo estás ejecutando en el puerto 3000. Por ello cuando quieres hacer un fetch desde el front al back harás algo como `fetch('http://localhost:3000/ruta-de-mi-endpoint')`.

A continuación imaginemos que subes tu código a un servidor de producción en el dominio `https://misuperweb.com`. Cuando una usuaria entre en esta página, la web hará peticiones fetch a `fetch('http://localhost:3000/ruta-de-mi-endpoint')` pero como `localhost:3000` solo existe dentro de tu ordenador, tu página fallará.

Tú lo que quieres es que cuando tu código esté en el servidor de desarrollo, los fetch sean `fetch('http://localhost:3000/ruta-de-mi-endpoint')` y cuando estés en el entorno de producción, sean `fetch('http://misuperweb.com/ruta-de-mi-endpoint')`

**La solución es que Node JS te avise de en qué entorno se está ejecutando tu código** y con esa información tú ya puedes hacer los fetch a `localhost:3000` o a `http://misuperweb.com`, por ejemplo con un `if`.

### Variables de entorno en Node JS

Node JS tiene una variable global llamada `process` que guarda información sobre el servidor. Dentro tenemos la variable `process.env` que contiene diferente información del **environment** (o entorno). Cada entorno decide qué información meter en `process.env`, por ello tenemos que consultar este objeto para saber en qué entorno estamos.

#### Variables de entorno en Node JS + React

Cuando ejecutamos React (que se está ejecutando sobre Node JS), nos mete un dato en `process.env.NODE_ENV`.

Prueba lo siguiente en cualquier proyecto de React:

1. Mete la línea `console.log('Entorno:', process.env.NODE_ENV)` en el fichero del componente principal de tu app de React.
   1. Arráncala con `npm start`.
   2. Verás que en consola aparece `Entorno: development`.
2. Crea el código de producción con `npm run build`.
   1. Sube tu código a GitHub Pages y pruébalo.
   2. Verás que en consola aparece `Entorno: production`.

Por ello en nuestro proyecto de React podemos poner algo como:

```js
const serverUrl = process.env.NODE_ENV === 'production' ? 'https://misuperweb.com' : 'http://localhost:3000';

const getDataFromApi = () => {
  fetch(`${serverUrl}/ruta-de-mi-endpoint`)
   .then(response => response.json())
   .then(...)
};
```

> **Nota:** debes hacer este cambio en tus proyectos front antes de subirlos a un servidor que funcione con Node JS.

### Utilizando dotenv con Express

dotenv es una biblioteca en Node.js que facilita la gestión de variables de entorno. Su uso con Express es sencillo:

1. Instala dotenv ejecutando npm install dotenv.
2. Al inicio de tu archivo principal de Express (usualmente app.js o index.js), agrega require('dotenv').config();.
3. Ahora puedes acceder a las variables de entorno definidas en un archivo .env utilizando process.env.NOMBRE\_VARIABLE.

Con dotenv, puedes mantener tus configuraciones sensibles como URLs de bases de datos, claves API, etc., de forma segura y separada del código fuente.

### Truco

Siempre que quieras saber qué variables de entorno te están pasando, haz lo siguiente:

1. Añade a tu código la línea `console.log('Entorno:', process.env)`.
   1. Ejecútalo en local (entorno de desarrollo) y mira la consola.
2. Súbelo a tu servidor de producción.
   1. Ejecútalo y mira la consola.

Seguro que dentro del objeto `process.env` encontrarás diferencias que te indiquen en qué entorno estás.

### Conclusiones

Las variables de entorno en Node.js se encuentran en process.env. Añade console.log('Entorno:', process.env) a tu código para explorarlas. dotenv es una herramienta valiosa para manejar estas variables en proyectos Express, mejorando la seguridad y la flexibilidad en diferentes entornos de desarrollo y producción.
