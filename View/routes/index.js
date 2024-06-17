var express = require('express');
var router = express.Router();
var postController = require('../controllers/blogController');

/* GET home page. */
router.get('/', postController.getAllPosts);

module.exports = router;
