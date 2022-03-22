'use strict';

// a framework for handling HTTP requests.
const express = require('express'); //path does not need to be specified because it is in the node_modules folder

const app = express(); // Creates our first 'singleton'
// singleton means we can only run this once 
// this is basically the id of the app or server. If you create more you will create a new separate server

app.get('/data' , (request, response, next) => {
  response.send('Hello World');
});

module.exports = app;