const express = require('express');
const cors = require('cors');
const films = require('./films-data.json');
const directors = require('./directors-data.json');

// create app server
const app = express();

// set express middlewares
app.use(express.json());
app.use(cors());

// set template engine middlewares
app.set('view engine', 'ejs');

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// endpoints

app.get('/es/film/:filmId.html', (req, res) => {
  // get film data
  const filmData = films.find(film => film.id === req.params.filmId);
  console.log('film data', filmData);

  // response with rendered template
  if (filmData) {
    res.render('pages/film', filmData);
  } else {
    res.render('pages/film-not-found');
  }
});


app.get('/es/directora/:directorName.html', (req, res) => {
  // get director data
  const directorsData = directors.find(director => director.name === req.params.directorName);

  // response with rendered template
  if (directorsData) {
     directorsData.birthYear = directorsData.birthYear || '';
    res.render('pages/director', directorsData);
  } else {
    res.render('pages/director-not-found');
  }
});