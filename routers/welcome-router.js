const express = require('express');
const router = express.Router();

const server = express();

server.get('/', (req, res) => {
  res.status(200).json({ message: 'success brolly, server running' })
})

module.exports = router;