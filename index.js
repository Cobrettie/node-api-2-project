// create a server and start it listening
const express = require('express');
const welcomeRouter = require('./routers/welcome-router');
const postsRouter = require('./routers/posts-router');
// const cors = require('cors');
// server.use(cors());

const server = express();
const PORT = 5000;

server.use(express.json());
server.use(welcomeRouter);
server.use(postsRouter);

server.listen(PORT, () => {
  console.log(`\n*** Server running on http://localhost:${PORT} ***\n`);
});