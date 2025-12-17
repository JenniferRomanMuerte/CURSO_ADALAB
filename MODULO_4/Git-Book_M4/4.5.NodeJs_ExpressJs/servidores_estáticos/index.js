
// Importar los modulos de npm que necesito
const express = require('express');
const cors = require('cors');
const path = require('path');


// Crear el servidor
const server = express();


// Configurar el servidor
server.use(cors());
server.use(express.json({limit:'25mb'}));

// Arrancarmos el servidor en un puerto
const serverPort = 4000;
server.listen(serverPort,()=>{
  console.log(`Server listening at htpp://localhost:${serverPort}`);
})


//ENDPOINT
server.get("/users", (req,res)=>{
  // req: objetro que tiene toda la informacion de la peticion
  // res: objeto para responder la peticion

  const response = {
    users: [{name: "Sofia"}, {name: "Maria"}]
  }
  res.json(response);
})


//SERVIDOREWS ESTÁTICOS

// Indicamos la ruta realtiva donde están los ficheros que necesitamos cargar
const staticServerPath = './public';
server.use(express.static(staticServerPath));

/*
Para controlar las rutas que no existen en nuestro proyecto
creamos este endpoint que debe ir seimrpe al final
*/
server.get("*", (rep,res)=>{
  // Esta ruta nos vale en dev
  const notFoundFileRelativePath = 'Larutaalapaginaquehayamosdiseñado.html';
  // Par poder usarla en produccion
  const notFoundFileAbsolutePath = path.join(__dirname, notFoundFileRelativePath);

  // Ahora le indicamos que si la respuesta es un 404 no devuelva ese ficehro
  res.status(404).sendFile(notFoundFileAbsolutePath);
});