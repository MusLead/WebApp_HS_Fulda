const express = require('express');
const router = express.Router();
var postController = require('../controllers/blogController');

// Route: GET /
router.route('/')
  .get((req,res) => {
    const result = postController.getAllPosts;
    res.render('list', {blogposts: result.json.data});
  })
  .post(async (req,res) => {
    const result = postController.createPost(req);
    res.status(result.status).render('viewpost', { post: result.json.post});
  });


// Route: GET /newPost
router.get('/newPost', postController.renderNewPost);

// Route: GET /:id
// WARNING 25.06.2024: THIS ROUTE MUST BE THE LAST ROUTE IN THIS FILE
// BECAUSE IT COULD OVERWRITE OTHER ROUTES DOWN THE LINE
router.route('/:id')
  .get((req,res) => {
    const result  =  postController.readPost(req);
    res.render('viewpost', { post: result.json.post});
});



module.exports = router;
