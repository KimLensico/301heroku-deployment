'use strict';

// an npm dependency/package that we installed via "npm i express"
// the reference to this dependency lives in our package.json file
const express = require('express');

// pulls in the express object so we  can use its methods
const app = express();

// the port to accept traffic on
const PORT = 3000;

// use this. don't worry about it just yet
app.use(express.static('./public'));

// this is our homepage --> it will serve up a simple html file
app.get('/', (request, response) => {
  response.sendFile('./public/index.html');
});

// this is an "API" route - it is meant to serve up data --> json
app.get('/user-data', (request, response) => {
  response.json({ username: 'kllensi', pw: '12345', location: 'seattle' });
  // go to a db
  // find the user in the db
  // get the user from the db
  // hand off the user to the user interface
});

// sets up my server to accept incoming traffic at a specific PORT
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
}); 