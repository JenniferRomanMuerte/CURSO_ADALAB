const express = require('express');
const cors = require('cors');

// create server
const server = express();

// set express middleware
server.use(express.json());
server.use(cors());

// init express aplication
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = './public';
server.use(express.static(staticServerPath));


// users
const users = []; // fake users data base

// api endpoints

server.post('/user', (req, res) => {

  // add new user to dababase
  users.push({
    name: req.body.userName,
    email: req.body.userEmail
  });

  res.json({
    result: 'User created'
  });
});

server.get('/users', (req, res) => {
  const filtername = req.query.name;
  const filterEmail = req.query.email;

  const result =
  users.filter((user) => user.name.toLowerCase().includes(filtername.toLowerCase()));

  const userFilter =
  result.filter((userResult) => userResult.email.toLowerCase().includes(filterEmail.toLowerCase()));

  res.json({
    result: userFilter
  });
});


// URL PARAMS

server.get('/users/:userId/orders/:orderId', (req, res) => {
  const userId = req.params.userId;
  const orderId = req.params.orderId;

  console.log('RequestParams:', req.params);
  console.log('userId:', req.params.userId);
  console.log('orderId:', req.params.orderId);

  result (userId, orderId, (error, comments) =>{
    if(error) return res.status(500).send(error);
     res.status(200).send(comments);
  });





  res.json({
    result: userFilter
  });
});