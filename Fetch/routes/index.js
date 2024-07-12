var express = require('express');
var router = express.Router();
var postController = require('../controllers/blogController');
var apiCall = require('../controllers/apiCall');

/* GET home page. */
router.get('/', async (req,res) => {
  try {
    const json = await apiCall.handleAPICalls('', 'GET', null);
    res.render('list', { blogposts: json });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Route: GET /newPost
router.get('/newPost', postController.renderNewPost);

module.exports = router;
