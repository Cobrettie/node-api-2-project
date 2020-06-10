// router object for all /api/posts handlers/middleware/endpoints

const express = require('express');
const Posts = require('../data/db');
const router = express.Router();

router.post('/api/posts', (req, res) => {
  if (!req.body.title || !req.body.contents) {
    return res.status(400).json({ 
      errorMessage: "Please provide title and contents for the post."
    })
  }

  Posts.insert(req.body)
    .then(post => {
      res.status(201).json(post)
    })
    .catch(err => {
      res.status(500).json({ error: "There was an error while saving the post to the database" })
    })
})

router.post('/api/posts/:id/comments', (req, res) => {
  if (req) {}
})

module.exports = router;