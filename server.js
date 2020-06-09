// create and export an express application
// with its middleware + handlers + endpoints

const express = require('express');
const cors = require('cors');
const shortid = require('shortid')
const server = express();

const api = 'http://localhost:5000';

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  console.log(req.params)
  res.status(200).json({ message: 'success brolly, server running' })
})



module.exports = server;