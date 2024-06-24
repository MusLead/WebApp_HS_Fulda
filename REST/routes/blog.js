const express = require('express');
const router = express.Router();
var postController = require('../controllers/blogController');

// Route: GET /
router.route('/')
  .get(postController.getAllPosts)
  .post(postController.createPost);

// Route: GET /newPost
router.route('/newPost')
  .get(postController.renderNewPost); 

// Route: GET /:id
router.route('/:id')
  .get(postController.readPost);

module.exports = router;
