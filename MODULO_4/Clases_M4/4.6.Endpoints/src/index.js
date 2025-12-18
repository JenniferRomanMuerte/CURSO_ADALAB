// Importar la biblioteca de Express

const express = require("express");

// Importar la biblioteca de CORS

const cors = require("cors");

const path = require("node:path");

// Importar la biblioteca de MySQL

const mysql = require("mysql2/promise");

// Importamos la biblioteca de variables de entorno

require("dotenv").config();

// Crear una variable con todo lo que puede hacer el servidor:

const app = express();

// Configuramos server para que funcione bien como API

app.use(cors());
app.use(express.json({ limit: "25Mb" }));

// Configuración de MySQL

const getConnection = async () => {
  const datosConexion = {
    host: process.env.MYSQL_HOST || "localhost",
    port: process.env.MYSQL_PORT || 3306,
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "pass",
    database: process.env.MYSQL_SCHEMA || "animes",
  };

  const conn = await mysql.createConnection(datosConexion); // Crear la cajita de la conexión en el Workbench
  await conn.connect(); // Hacer click en la cajita de la conex del Workbench

  return conn;
};

// Arrancar el servidor en el puerto 3000:

const port = 3000;
app.listen(port, () => {
  console.log(`Uh! El servidor ya está arrancado: <http://localhost:${port}/>`);
});

// ENDPOINTS PARA LA API

// GET  /api/animes

app.get("/api/animes", async (req, res) => {
  const conn = await getConnection();

  let result;

  if (req.query.creadora) {
    const [rows] = await conn.query(
      "SELECT * FROM obras WHERE obras.creadora = ?;",
      [req.query.creadora]
    );
    result = rows;
  } else {
    const [rows] = await conn.query("SELECT * FROM obras;");
    result = rows;
  }

  await conn.end();

  res.json({
    success: true,
    result,
  });
});

// POST /api/animes

app.post("/api/animes", async (req, res) => {
  console.log("POST /api/animes. Body:", req.body);

  // 1. Conectarse a la base de datos.

  const conn = await getConnection();

  // 2. Preparar sentencia SQL (insert).

  // req.body.titulo = "'); DELETE FROM obras; -- ";  --> SQL injection

  //const insertAnime = `
  //  INSERT INTO obras (titulo, descripcion)
  //    VALUES ('${req.body.titulo}', '${req.body.descripcion}');`;

  const insertAnime = `
    INSERT INTO obras (titulo, descripcion)
      VALUES (?, ?);`;

  // 3. Lanzar la sentencia SQL y obtener los resultados.

  const [result] = await conn.query(insertAnime, [
    req.body.titulo,
    req.body.descripcion,
  ]);

  // result = {
  //   "fieldCount": 0,
  //   "affectedRows": 1,
  //   "insertId": 16,
  //   "info": "",
  //   "serverStatus": 2,
  //   "warningStatus": 0,
  //   "changedRows": 0
  // }

  // 4. Cerrar la conexión con la base de datos.

  await conn.end();

  // 5. Devolver la información.

  res.json({
    success: true,
    id: result.insertId,
  });
});

// SERVIDOR DE ESTÁTICOS PARA REACT

app.use(express.static(path.join(__dirname, "..", "frontend_static")));
