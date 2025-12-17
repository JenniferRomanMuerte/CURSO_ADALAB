# Pasos para crear un servidor Express

## Instalación

1. Crear una carpeta donde irá el proyecto.
2. Abrir la carpeta
3. Crear la carpeta `src` y, luego, crear el fichero `src/index.js`.
4. Lanzar el comando `npm init` y contestar a sus preguntas (sobre todo al "package name" y "author") para crear el `package.json`.
   - En entrypoint vamos a poner `src/index.js`
5. Instalar la biblioteca de Express:

   ```bash
   npm i express
   ```

6. Creamos el `.gitignore` con una línea con `node_modules`.
7. Añadimos los scripts al `package.json`:

   ```json
   "scripts": {
      "start": "node src/index.js",
      "dev": "node --watch src/index.js",
      "test": "echo \"Error: no test specified\" && exit 1"
    },
   ```

## Endpoints

Para crear endpoints tipo GET (para APIS y ficheros):

```js
app.get('/ruta', (req, res) => {
  // Código que atiende a la petición GET http://localhost:3000/ruta

  res.send('¿Qué tal estás?');
});
```

Para crear endpoints tipo POST (normalmente para APIS):

```js
app.post('/api/products', (req, res) => {
  // Código que atiende a la petición POST http://localhost:3000/api/products

  res.send('[{},{}]');
});
```

Para un endpoint de "Error no encontrado":

```js
app.get(/.*/, (req, res) => {
  // Código que atiende a la petición GET http://localhost:3000/*

  res.status(404).send('Página no encontrada.');
});
```

## Para configurar el servidor de ficheros estáticos

Para configurar la ruta a partir de la raíz del proyecto:

```js
app.use(express.static('./FRONTEND'));
```

Para configurar la ruta **bien bien**, a partir de la carpeta donde está el fichero `index.js`:

```js
app.use(express.static(path.join(__dirname, '..', 'FRONTEND')));
```

> NOTA: Recuerda importar la biblioteca `path` de node al principio del fichero:
>
> ```js
> const path = require('node:path');
> ```