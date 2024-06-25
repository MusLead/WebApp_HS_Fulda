var express = require('express');
var router = express.Router();
var postController = require('../controllers/blogController');

/* GET home page. */
router.get('/', (req,res) => {
  const result = postController.getAllPosts;
  res.render('list', {blogposts: result.json.data});
});

// Route: GET /newPost
router.get('/newPost', postController.renderNewPost);

module.exports = router;
