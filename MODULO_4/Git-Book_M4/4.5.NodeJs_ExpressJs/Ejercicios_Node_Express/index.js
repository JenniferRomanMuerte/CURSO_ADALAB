
// Importar los modulos de npm que necesito
const express = require('express');
const cors = require('cors');


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



/*const math = require("./math.js");

console.log(math.resta(4,2));
console.log(math.suma(4,2));*/