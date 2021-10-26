const express = require('express');
const routes = require('./Movies/index.js');


const server = express();
server.name = 'API';
server.use('/', routes);

module.exports = server;