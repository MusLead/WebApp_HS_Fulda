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
    res.status(200).json({ "success": true, data: database.posts}); // res.render(name of ejs, objects); 
}

const createPost = async (req, res) => {
    const { title, username, date, text } = req.body;
    // console.log(req.body);

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
    database.posts.push(newPost);
    let postsJSON = JSON.stringify(database.posts);
    fs.writeFileSync('public/blog.json', postsJSON);

    res.status(201).json({ "success": true, post: newPost});
}

const readPost = (req, res) => {
    const post = database.posts.find(p => p.id == req.params.id);
    if (post) {
        res.status(200).json({ "success": true, post: post});
    } else {
        res.status(404).json({ "success": false, "message" : "Post not found"});
    }
}

const renderNewPost = (req, res) => {
    formSubmit = {action: "/blog", method: "post", enctype: "multipart/form-data", submitValue: "Senden", class: "mt-4"}
    formInputs = [
      {label: "titel", type: "text", name: "title", for: "title", id: "title", required: "required"},
      {label: "username", type: "text", name: "username", for: "username", id: "username", required: "required"},
      {label: "date", type: "date", name: "date", for: "date", id: "date", required: "required"},
      {label: "text", type: "text", name: "text", for: "text", id: "text", required: "required"},
      {label: "photo", type: "file", name: "photo", for: "photo", id: "photo", required: ""}
    ]
    res.render('form', {formSubmit, formInputs}) // res.render(<Name of ejs file (View)>, {<objects>})
  }

const updateData = (req,)

const deleteData = ()

module.exports = {
    getAllPosts,
    createPost,
    readPost,
    renderNewPost
}