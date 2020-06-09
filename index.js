const express = require('express');
const cors = require('cors');
const shortid = require('shortid')

const server = express();

server.use(express.json());
server.use(cors());


server.listen(5000)