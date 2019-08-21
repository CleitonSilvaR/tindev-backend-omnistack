const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const connections = require('../credentials/connections.json');

const server = express();

mongoose.connect(connections.connectionMongoDB, { useNewUrlParser: true });

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
