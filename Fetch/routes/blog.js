const express = require('express');
const router = express.Router();
const postController = require('../controllers/blogController');
const url = 'http://localhost:3000/api/blog/';

async function handleAPICalls(url, method, body) {
  var response = await fetch(url,{  
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  return response.then(response => response.json())
  
}

// Route: GET /
router.route('/')
  .get((req,res) => {
    handleAPICalls(url, 'GET', null)
      .then(json => {
        res.render('list', {blogposts: json.data });
      })
      .catch(err => {
        res.send(err);
      });
  })
  .post(async (req,res) => {
    handleAPICalls(url, 'POST', req.body)
      .then(json => {
        res.status(201).render('viewpost', { post: json.post});
      })
      .catch(err => {
        res.send(err);
      });
  });


// Route: GET /newPost
router.get('/newPost', postController.renderNewPost);

// Route: GET /:id
// WARNING 25.06.2024: THIS ROUTE MUST BE THE LAST ROUTE IN THIS FILE
// BECAUSE IT COULD OVERWRITE OTHER ROUTES DOWN THE LINE
router.route('/:id')
  .get((req,res) => {
    handleAPICalls(url + req.params.id, 'GET', null)
      .then(json => {
        res.render('viewpost', { post: json.post});
      })
      .catch(err => {
        res.send(err);
      });
  });



module.exports = router;
