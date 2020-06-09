// create and export an express application
// with its middleware + handlers + endpoints

const express = require('express');
const cors = require('cors');
const shortid = require('shortid')
const server = express();

const api = 'http://localhost:5000';

server.use(express.json());
server.use(cors());



module.exports = server;