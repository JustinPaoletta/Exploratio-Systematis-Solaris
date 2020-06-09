const express = require('express');
const bodyParser = require('body-parser');

const host = '159.89.83.120';
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
