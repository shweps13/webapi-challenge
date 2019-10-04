const express = require('express');
const helmet = require('helmet');

const server = express();

const projectDB = require('./data/helpers/projectModel');
const actionDB = require('./data/helpers/actionModel.js');

// Test request
server.get('/', (req, res) => {
    res.send(`
      <h2>Heorhii Sprint API</h>
      <p>Welcome to the Heorhii API</p>
    `);
});

const port = 5000

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
