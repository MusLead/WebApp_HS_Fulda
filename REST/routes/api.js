const express = require('express');
const router = express.Router();
var postController = require('../controllers/blogController');

// Route: GET /
router.route('/blog/')
  .get((req,res) => {
    const result = postController.getAllPosts;
    res.status(result.status).json(result.json);
  })
  .post(async (req,res) => {
    const result = postController.createPost(req);
    res.status(result.status).json(result.json);
  });

// Route: GET /:id
router.route('/blog/:id')
  .get((req,res) => {
    const result =  postController.readPost(req);
    res.status(result.status).send(result.json);
  })
  .put((req,res) => {
    const result = postController.updateData(req);
    res.status(result.status).send(result.json);
  })
  .delete((req,res) => {
    const result = postController.deleteData(req);
    res.status(result.status).send(result.json);
  });

module.exports = router;