const express = require('express');
const bodyParser = require('body-parser');
const dbfile = require('../database/dbconfig.js');

const connection = dbfile.pool.connect();

connection
  .then(() => console.log('Connection To Database Successful!'))
  .catch((e) => console.log(e, 'Sorry We Could Not Connect You To The Database'));

const host = '127.0.0.1';
const port = '6500';

// Server Connection
const server = express();
server.listen(port, (err) => {
  if (err) {
    console.log('Error starting up server');
  } else {
    console.log(`Server now hosted on http://${host}:${port}`);
  }
});

server.use(express.static('../client/dist'));
server.use(express.urlencoded());
server.use(bodyParser.json());

server.get('/api/data', (req, res) => {
  let queryString = 'SELECT * FROM bodies';
  dbfile.pool.query(queryString)
    .then((results) => {
      res.status(201).send(results)
    });
});
