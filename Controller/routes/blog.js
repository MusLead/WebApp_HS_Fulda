const express = require('express');
const router = express.Router();
const fs = require('fs');
var postController = require('../controllers/blogController');

// Route: GET /
router.route('/')
  .get(postController.getAllPosts)
  .post(postController.createPost);

// Route: GET /newPost
router.route('/newPost')
  .get((req, res) => {res.render('blogpost');});

// Route: GET /:id
router.route('/:id')
  .get(postController.readPost);

module.exports = router;
