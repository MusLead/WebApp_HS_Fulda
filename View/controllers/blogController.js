/**
 * FOR THIS FORMAT (AGHA'S VERSION JUN. 2024), YOU NEED THESE COMPONENTS:
 * (req, res) must be included, otherwise, json file might not be found!
 */

const fs = require('fs'); 

var database= {
    posts: require('../public/blog.json'),
    setPosts: function(data){
        this.posts=data;
    }
}

const getAllPosts = (req, res) => { 
    res.render('list', {blogposts: database.posts}); // res.render(name of ejs, objects); 
}

const createPost = async (req, res) => {
    const { title, username, date, text } = req.body;
    const newPost = {
      id: database.posts.length + 1, // Einfache ID-Zuweisung
      title,
      username,
      date,
      text
    };
    database.posts.push(newPost);
    let postsJSON = JSON.stringify(database.posts);
    fs.writeFileSync('public/blog.json', postsJSON);
    res.status(201).send(newPost);
}

const readPost = (req, res) => {
    const post = database.posts.find(p => p.id == req.params.id);
    if (post) {
        res.render('viewpost', { post: post});
    } else {
        res.status(404).send('Post not found');
    }
}

const renderNewPost = (req, res) => {
    formSubmit = {action: "/", method: "post", enctype: "multipart/form-data", submitValue: "Senden", class: "mt-4"}
    formInputs = [
      {label: "Titel", type: "text", name: "Title", for: "title", id: "title"},
      {label: "Username", type: "text", name: "Username", for: "username", id: "username"},
      {label: "Date", type: "date", name: "Date", for: "date", id: "date"},
      {label: "Text", type: "text", name: "Text", for: "text", id: "text"}
    ]
    res.render('form', {formSubmit, formInputs}) // res.render(<Name of ejs file (View)>, {<objects>})
  }

module.exports = {
    getAllPosts,
    createPost,
    readPost,
    renderNewPost
}