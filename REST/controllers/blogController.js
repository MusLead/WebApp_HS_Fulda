/**
 * FOR THIS FORMAT (AGHA'S VERSION JUN. 2024), YOU NEED THESE COMPONENTS:
 * (req, res) must be included, otherwise, json file might not be found!
 */

const fs = require('fs'); 

var database= {
    posts: require('../public/blog.json'),
    users: require('../public/users.json'),
    setPosts: function(data){
        this.posts=data;
    },
    setUsers: function(data){
        this.users=data;
    }
}

const getAllPosts = { 
    status: 200,
    json: {
        "success": true, 
        data: database.posts
    }
}

const createPost = req => {
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
    return {
        status: 201,
        json: { "success": true, post: newPost}
    };
}

const readPost = req => {
    const post = database.posts.find(p => p.id == req.params.id);
    if (post) {
        return {
            status: 200,
            json: { "success": true, post: post}
        }
    } else {
        return {
            status: 404,
            json: { "success": false, "message" : "Post not found"}
        }
        
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
    console.log("this is renderNewPost function in blogController.js");
    res.render('form', {formSubmit, formInputs}) // res.render(<Name of ejs file (View)>, {<objects>})
  }

const updateData = req => {
    const post = database.posts.find(p => p.id == req.params.id);
    if (post) {
        const { title, username, date, text } = req.body;
        // change the requested post
        post.title = title;
        post.username = username;
        post.date = date;
        post.text = text;
        let postsJSON = JSON.stringify(database.posts);
        fs.writeFileSync('public/blog.json', postsJSON);
        return {
            status: 200,
            json: { "success": true, post: post}
        }
    } else {
        return {
            status: 404,
            json: { "success": false, "message" : "Post not found"}
        }
    }
}

const deleteData = req => {
    const post = database.posts.find(p => p.id == req.params.id);
    if (post) {
        const index = database.posts.indexOf(post);
        database.posts.splice(index, 1); // deelete the post splice(starting index, number of elements to remove)
        let postsJSON = JSON.stringify(database.posts);
        fs.writeFileSync('public/blog.json', postsJSON);
        return {
            status: 200,
            json: { "success": true, "message" : "Post deleted"}
        }
    } else {
        return {
            status: 404,
            json: { "success": false, "message" : "Post not found"}
        }
    }
}

const createUser = (req, res) => {
    const { username, password, email } = req.body;
    const newUser = {
        id: database.users.length + 1,
        username,
        password,
        email
    };
    database.users.push(newUser);
    let usersJSON = JSON.stringify(database.users);
    fs.writeFileSync('public/users.json', usersJSON);
    res.status(201).json({ "success": true, user: newUser});
}

const signInUser = (req, res) => {
    const { username, password } = req.body;
    const user = database.users.find(u => u.username == username && u.password == password);
    if (user) {
        res.status(200).json({ "success": true, user: user});
    } else {
        res.status(404).json({ "success": false, "message" : "User not found"});
    }
}

module.exports = {
    getAllPosts,
    createPost,
    readPost,
    renderNewPost,
    updateData,
    deleteData
}