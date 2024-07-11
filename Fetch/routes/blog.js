const express = require('express');
const router = express.Router();
const postController = require('../controllers/blogController');
const apiUrl = 'http://localhost:3000/api/blog/';

async function handleAPICalls(url, method, body) {
  try {
    console.log("URL: " + url);
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: body ? JSON.stringify(body) : null
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Route: GET /
router.route('/')
  .get(async (req, res) => {
    try {
      const json = await handleAPICalls(apiUrl, 'GET', null);
      res.render('list', { blogposts: json.data });
    } catch (err) {
      res.status(500).send(err.message);
    }
  })
  .post(async (req, res) => {
    try {
      const json = await handleAPICalls(apiUrl, 'POST', req.body);
      res.status(201).render('post', { post: json.post });
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

// Route: GET /newPost
router.get('/newPost', (req,res) => {
  res.render('newPost', postController.renderNewPost(undefined));
});

// Route: GET /:id
// WARNING 25.06.2024: THIS ROUTE MUST BE THE LAST ROUTE IN THIS FILE
// BECAUSE IT COULD OVERWRITE OTHER ROUTES DOWN THE LINE
router.route('/:id')
  .get(async (req, res) => {
    try {
      const json = await handleAPICalls(apiUrl + req.params.id, 'GET', null);
      var components = { ...postController.renderNewPost(json.post), post: json.post };
      res.render('post', components);
    } catch (err) {
      res.status(500).send(err.message);
    }
  })

module.exports = router;
