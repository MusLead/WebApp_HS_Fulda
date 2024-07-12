const express = require('express');
const router = express.Router();
const postController = require('../controllers/blogController');
const apiCall = require('../controllers/apiCall');

// Route: GET /
router.route('/')
  .get(async (req, res) => {
    try {
      const json = await apiCall.handleAPICalls('', 'GET', null);
      res.render('list', { blogposts: json });
    } catch (err) {
      res.status(500).send(err.message);
    }
  })
  .post(async (req, res) => {
    try {
      // additional task: add a joke to the post
      const joke = await apiCall.handleAPICalls('https://api.chucknorris.io/jokes/random', 'GET', null);
      req.body.text += "\n\nAdditional joke for this post:\n" + joke.value;
      // console.log(req.body.text);
      const json = await handleAPICalls('', 'POST', req.body);
      res.status(201).render('post', { post: json });
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

// Route: GET /newPost
router.get('/newPost', (req,res) => res.render('newPost', postController.renderNewPost(undefined)));

// Route: GET /:id
/**
 * WARNING 25.06.2024: THIS ROUTE MUST BE THE LAST ROUTE IN THIS FILE
 * BECAUSE IT COULD OVERWRITE OTHER ROUTES DOWN THE LINE
 */
router.route('/:id')
  .get(async (req, res) => {
    try {
      const json = await apiCall.handleAPICalls(req.params.id, 'GET', null);
      var components = { ...postController.renderNewPost(json), post: json};
      res.render('post', components);
    } catch (err) {
      res.status(500).send(err.message);
    }
  })

module.exports = router;
