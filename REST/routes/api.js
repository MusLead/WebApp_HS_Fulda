const express = require('express');
const router = express.Router();
var postController = require('../controllers/blogController');
var userController = require('../controllers/userController');

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

router.route('/signInUser')
  .get((req,res) => {
    const result = userController.signInUser(req);
    res.status(result.status).json(result.json);
  })

router.route('/users') // DO NOT FORGET THE / AT THE BEGINNING!
  .get((req,res) => {
    const result = userController.getAllUsers;
    res.status(result.status).json(result.json);
  })
  .post((req,res) => {
    const result = userController.createUser(req);
    res.status(result.status).json(result.json);
  });

  // WARNING! THE ROUTE WITH ID MUST BE THE LAST ROUTE, ALWAYS!
router.route('/user/:id')
  .get((req,res) => {
    const result = userController.readUser(req);
    res.status(result.status).send(result.json);
  })
  .put((req,res) => {
    const result = userController.updateUser(req);
    res.status(result.status).send(result.json);
  })
  .delete((req,res) => {
    const result = userController.deleteUser(req);
    res.status(result.status).send(result.json);
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