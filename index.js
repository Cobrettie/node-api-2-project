// create a server and start it listening
const express = require('express');
const postsRouter = require('./routers/posts-router');
// const cors = require('cors');
// server.use(cors());

const api = 'http://localhost:5000';

const server = express();
const PORT = 5000;

server.use(express.json());
server.use(postsRouter);

server.listen(PORT, () => {
  console.log(`\n*** Server running on http://localhost:${PORT} ***\n`);
});