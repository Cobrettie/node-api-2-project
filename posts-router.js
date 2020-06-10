// router object for all /api/posts handlers/middleware/endpoints

const express = require('express');
const Posts = require('./data/db');
const router = express.Router();

router.post('/api/posts', (req, res) => {
  const post = req.body;

  if (!post.title || !post.contents) {
    return res.status(400).json({ 
      errorMessage: "Please provide title and contents for the post."
    })
  }

  Posts.insert(post)
  return res.status(201).json(post)
})