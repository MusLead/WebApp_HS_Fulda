const express = require('express');
const router = express.Router();
const fs = require('fs');

// Array zur Speicherung der Posts
let posts = [];
const rawdata = fs.readFileSync('public/blog.json');
posts = JSON.parse(rawdata);

// Route: GET /
router.route('/')
  .get((req, res) => {
    res.json(posts);
  })
  .post((req, res) => {
    const { title, username, date, text } = req.body;

    let photoName = '';
    if (req.files && req.files.photo) {
        const file = req.files.photo;
        photoName = file.name;
        file.mv('./public/uploads/' + file.name);
        console.log('File uploaded: \n' + file.name);
    }

    const newPost = {
      id: posts.length + 1, // Einfache ID-Zuweisung
      title,
      username,
      date,
      text,
      photo: photoName
    };
    posts.push(newPost);
    let postsJSON = JSON.stringify(posts);
    fs.writeFileSync('public/blog.json', postsJSON);

    res.status(201).send(newPost);
  });

// Route: GET /newPost
router.route('/newPost')
  .get((req, res) => {
    res.render('blogpost');
  });

// Route: GET /:id
router.route('/:id')
  .get((req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    if (post) {
      res.send(post);
    } else {
      res.status(404).send({ error: 'Post not found' });
    }
  });

module.exports = router;
