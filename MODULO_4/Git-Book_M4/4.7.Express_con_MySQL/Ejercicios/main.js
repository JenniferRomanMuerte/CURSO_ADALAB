"use strict";

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');


const app = express();


app.use(cors());
app.use(express.json());
const serverPort = 3500;

app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});


async function getConnection() {
  const connection = await mysql.createConnection({
    host: '127.0.0.1',
    port: 3307,
    database: 'animes',
    user: 'jennifer',
    password: 'Simba&Nala82',
  });
  await connection.connect();

  console.log(
    `Conexión establecida con la base de datos (identificador=${connection.threadId})`
  );

  return connection;
}

 getConnection();

 console.log("Registrando ruta /user");

 app.get('/obras', async (req, res) => {
  console.log('Pidiendo a la base animes datos de la tabla obras.');
  let sql = 'SELECT * FROM obras';

  const connection = await getConnection();
  const [results, fields] = await connection.query(sql);
  res.json(results);
  connection.end();
});
