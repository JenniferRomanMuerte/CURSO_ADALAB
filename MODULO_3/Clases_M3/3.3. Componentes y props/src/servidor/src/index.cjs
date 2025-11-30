const fs = require('node:fs');
const path = require('node:path');
const express = require('express');
const cors = require('cors');

// Config

const BOOKS_FILENAME = 'bookList.json';

// Creamos una vari con el servidor
const server = express();

// SECCIÓN DE CONFIGURACIÓN DE SERVER

// Configuramos server para que funcione bien como API
server.use( cors() );
server.use( express.json({limit: '25Mb'}) );

// Arrancamos el servidor en el puerto 4000
const port = 4000;
server.listen( port, () => {
  console.log(`Servidor iniciado <http://localhost:${port}>`);
});

// LOAD DATA

const books = {
  data: [],
  create: function(contact) {
    this.data.push(contact);
  },
  read: function() {
    return this.data;
  },
  load: function() {
    const contactsFullFilename = path.join(path.dirname(__dirname), BOOKS_FILENAME);

    const fileContents = fs.readFileSync(contactsFullFilename, {encoding: 'utf-8'});

    const loadedContents = JSON.parse(fileContents);

    loadedContents.forEach((it) => this.create(it));
  }
}

books.load();

// SECCIÓN DE SERVIDOR DE APIS

server.get('/api/books', (req, res) => {
  res.json(books.read());
});

server.post('/api/books', (req, res) => {
  console.log(req.body);

  if( !req.body.title ) {
    return res.json({success:false, error: 'The title field is expected.'});
  }
  if( !req.body.author ) {
    return res.json({success:false, error: 'The author name is expected.'});
  }
  if( !req.body.genre ) {
    return res.json({success:false, error: 'The genre field is expected.'});
  }
  if( !req.body.image ) {
    req.body.image = 'https://placehold.co/200x300/1a1a2e/eee?text=Nuevo';
  }

  books.create(req.body);
  res.json({success:true, data: req.body});
});