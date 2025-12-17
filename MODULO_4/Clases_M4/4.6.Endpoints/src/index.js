// Importar la biblioteca de Express
const express = require("express"); // import express from 'express';

// Importar cors
const cors = require("cors");

// Importar path
const path = require("node:path");

// Importar mysql
const mySql = require("mysql2/promise");

// Creamos una variable con todo lo que puede hacer el servidor:
const app = express(); // const server = express();

// Configuramos el server para aceptar peticiones de otras peticiones
app.use(cors());

// Configuramos el servidor para poder recibir y enviar datos en formato Json
app.use(express.json({ limit: "25Mb" }));

// Servimos el front
app.use(express.static(path.join(__dirname, "..", "web")));

// Arrancamos el servidor en el puerto 3000:
const port = 3000;
app.listen(port, () => {
  console.log(`Uh! El servidor ya está arrancado: <http://localhost:${port}/>`);
});

/*******************
 * GESTIONAR CONTRASEÑAS
 ******************/
// Las declaramos en un archivo .env
// Instalamos la biblioteca dotenv y la importamos
requiere('dotenv').config();

/*******************
 * ESTABLECER CONEXION CON MYSQL
 ******************/

// Los datos para la conexion
const dataConecction = {
  host: process.env.MYSQL_HOST,
  port:process.env.MYSQL_PORT,
  database: "animes",
  user:process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
};

// Funcion para crear la conexion (es una funcion async)
const createConexion = async () => {
  // Creamos la conexion con nuestros datos y esperamos al OK con el await
  const connection = await mySql.createConnection(dataConecction);
  // Esperamos a que se conecte
  await connection.connect();
  // Devolvemos la conexion pñara poder usarla en oras funciones
  return connection;
};


// Endpoint para pedir datos a la BBDD (es async)
app.get("/api/personajes", async (req, res) => {
  // Creamos la query
  const queryPersonage = "select * from personajes";
  // Obtenemos la conexion
  const connection = createConexion();
  // Lanzamos la query (esperamos que nos llegue con el await)
  //  y la desectructuramos para guardar los resultados
  const [result] = await connection.query(queryPersonage);
  // Cerramos la conexion
  await connection.end();
  // Devolvemos losm resultados
  res.json(result);
});
