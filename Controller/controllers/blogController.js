const fs = require('fs'); 

var database= {
    posts: require('../public/blog.json'),
    setPosts: function(data){
        this.posts=data;
    }
}

const getAllPosts = (req, res) => { 
    // (req, res) must be included, otherwise, json file might not be found!
    res.json(database.posts);
}

const createPost = async (req, res) => {
    const { title, username, date, text } = req.body;

    let photoName = '';
    if (req.files && req.files.photo) {
        const file = req.files.photo;
        photoName = file.name;
        file.mv('./public/uploads/' + file.name);
        console.log('File uploaded: \n' + file.name);
    }

    const newPost = {
      id: database.posts.length + 1, // Einfache ID-Zuweisung
      title,
      username,
      date,
      text,
      photo: photoName
    };
    // database.posts.push(newPost);
    // another way to update (see Lecture Slides from Model)
    database.setPosts([...database.posts, newPost]);
    let postsJSON = JSON.stringify(database.posts);
    fs.writeFileSync('public/blog.json', postsJSON);

    res.status(201).send(newPost);
}

const readPost = (req, res) => {
    const post = database.posts.find(p => p.id == req.params.id);
    if (post) {
        res.send(post);
    } else {
        res.status(404).send({ error: 'Post not found' });
    }
}

module.exports = {
    getAllPosts,
    createPost,
    readPost
}