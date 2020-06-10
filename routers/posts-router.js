// router object for all /api/posts handlers/middleware/endpoints

const express = require('express');
const posts = require('../data/db');

// creates a new standalone express router
const router = express.Router();

router.get('/api/posts', (req, res) => {
  posts.find(req.body)
    .then(posts => res.status(200).json(posts))
    .catch(err => {
      res.status(500).json({ error: "The posts information could not be retrieved." })
    })
})

router.post('/api/posts', (req, res) => {
  if (!req.body.title || !req.body.contents) {
    return res.status(400).json({ 
      errorMessage: "Please provide title and contents for the post."
    })
  }

  posts.insert(req.body)
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