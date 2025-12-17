# 4.7.3 Arquitectura de un servidor

### Arquitectura de un servidor

{% hint style="info" %}
Esta mini lección es importante, pero es normal si en este momento del módulo no entiendes todos los conceptos. Confía en el proceso :)
{% endhint %}

La arquitectura de una aplicación de servidor es muy importante para conocer como están estructurados nuestros ficheros en el proyecto.

MVC es una propuesta de arquitectura del software utilizada para separar el código por sus distintas responsabilidades, manteniendo distintas capas que se encargan de hacer una tarea muy concreta.

![Modelo Vista Controlador. Fte: Wikipedia](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-be014af638bee2db3c3eabcd1a065c18097e2c60%2Fmvc.png?alt=media)

MVC se usa inicialmente en sistemas donde se requiere el uso de interfaces de usuario, aunque en la práctica el mismo patrón de arquitectura se puede utilizar para distintos tipos de aplicaciones. Surge de la necesidad de crear software más robusto con un ciclo de vida más adecuado, donde se potencie la facilidad de mantenimiento, reutilización del código y la separación de conceptos.

Su fundamento es la separación del código en tres capas diferentes, acotadas por su responsabilidad, en lo que se llaman Modelos, Vistas y Controladores.

* Los modelos se encarga de los datos, generalmente (pero no obligatoriamente) consultando la base de datos: realizan actualizaciones, consultas, búsquedas, etc. todo eso va aquí, en el modelo.
* Los controladores se encargan de... controlar, recibe peticiones y se encarga de solicitar los datos al modelo y de comunicárselos a la vista.
* Las vistas son la representación visual de los datos, todo lo que tenga que ver con la interfaz gráfica va aquí. Ni el modelo ni el controlador se preocupan de cómo se verán los datos, esa responsabilidad es únicamente de la vista.

### MVC en Express JS

¿Cómo podemos aplicar un modelo vista controlador un proyecto de Express JS?

Para entenderlo vamos a basarnos a suponer que necesitamos un API para gestionar usuarios. Vamos a analizar como utilizar una estructura MVC en el backend de esta aplicación.

```
proyecto-express-js-api/src
├── node_modules/
├── controllers
│   ├── userController.js
│   └── style.css
├── models
│   └── userModel.js
├── views
│   └── userView.ejs
├── helpers
│   └── utils.js
├── scripts
│   └── post-install.js
├── swagger.json
├── index.js
├── LICENSE
├── README.md
├── .gitignore
├── .dockerignore
├── package-lock.json
└── package.json
```

En el esquema anterior se representa la estructura de un proyecto backend genérico, vamos a analizar las partes más importantes de esta representación.

#### Modelos

En la carpeta `models` se escriben las funcionalidades y la lógica relacionadas con la base de datos, como insertar, recuperar, actualizar y eliminar consultas. Incluso toma la solicitud de consulta del controlador y envía la respuesta al controlador. Puedes crear un modelo en la aplicación `proyecto-express-js-api` a través de los siguientes pasos:

* Crea una carpeta de modelos en la aplicación `proyecto-express-js-api`.
* Crea un archivo `userModel.js` en los modelos.
* Define alguna funcionalidad en `userModel.js` por ejemplo con el siguiente código para insertar un usuario:

  ```jsx
  //Crea la conexión a la bases de datos
  const connectDB = require("./db");

  //Función para insertar un nuevo usuario en la BD
  const insertUser = async (data) => {
    const insert = "INSERT INTO users SET ?";

    const db = await connectDB();
    const uuid = utils.getUuid();
    const dataToInsert = { id: uuid, ...data };

    const [insertResultSet] = await db.query(insert, dataToInsert);

    return { changes: insertResultSet.affectedRows, uuid };
  };
  ```
* Ahora incluye el archivo de modelo `userModel.js` en el archivo de controlador `userController.js` mediante el siguiente script.

  ```jsx
  const userModel = require("../models/userModel");
  ```

#### Controladores

En la carpeta `controller` se crean las funcionalidades y la lógica para desarrollar aplicaciones web dinámicas. Incluso toma la solicitud de datos de las vistas y la envía al modelo y envía la respuesta a las vistas. Puedes crear un controlador en la aplicación `proyecto-express-js-api` a través de los siguientes pasos:

* Crea una carpeta de controladores en la aplicación `proyecto-express-js-api`.
* Crea un archivo `userController.js` en los controladores.
* Define alguna funcionalidad en `userController.js` como el siguiente script:

```jsx
exports.createUser = async function (req, res) {
  const user = req.body;
    try {

    //Utilizo el modelo creado para insertar en la BD
      const insertResult = await userModel.insertUser(user);

    //Envío una respuesta especificando que el usuario se ha creado
        res.json({
          success: true,
          useURL: `https://${req.headers.host}/user/${user.uuid}`,
        });

    } catch (error) {
      console.error(error);
      res.json({
        success: false,
        error: `Database error: ${error.code}`,
      });
    }
  }
};
```

#### Vistas

En la carpeta `views` se puede escribir código HTML para mostrar una página web en el navegador web. Incluso puede enviar los datos desde el controlador paramostrar datos de forma dinámica.

En nuestro caso utilizaremos el motor de plantillas `ejs` que daremos más adelante y lo utilizaremos para mostrar una página con los datos de un usuario. Puedes crear una vista en la aplicación `proyecto-express-js-api` a través de los siguientes pasos:

* Crea una carpeta de views en la aplicación `proyecto-express-js-api`.
* Crea un archivo `userView.ejs` dentro de esta carpeta.
* Define el `html` en formato `ejs` que se mostrará en la vista, por ejemplo:

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>User Info</title>
      <link rel="stylesheet" href="/stylesheets/style.css" />
    </head>
    <body>
      <h1>User Info</h1>
      <h3>This is View Page</h3>
      <h4>Create Data</h4>
    </body>
  </html>
  ```
* Ahora se puede cargar la vista `userView.ejs` en el archivo de controlador `userController.js` de la carpeta de controladores usando el siguiente script.

  ```jsx
  res.render("crud-operation");
  ```

#### Resumen

Ahora hagamos un resumen de lo anterior con esquemitas :)

![Modelo Vista Controlador en Express JS. Fte: Adalab](https://2908775143-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFeL5m4e6ES4PMjY0BYJw%2Fuploads%2Fgit-blob-e26512531a9875af9f802e2c18374903c137b57b%2Fexpress_arquitectura_server.png?alt=media)
