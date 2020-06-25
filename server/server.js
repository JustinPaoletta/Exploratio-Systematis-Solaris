const express = require('express');
const bodyParser = require('body-parser');

const host = 'localhost';
const port = process.env.PORT || '6500';

// Server Connection
const server = express();
server.listen(port, (err) => {
  if (err) {
    console.log('Error starting up server');
  } else {
    console.log(`Server now hosted on http://${host}:${port}`);
  }
});

server.use(express.static('./client/dist'));
