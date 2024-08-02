const { create } = require('domain');
const fs = require('fs'); 

var database= {
    posts: require('../public/blog.json'),
    setPosts: function(data){
        this.posts=data;
    }
}

var lastID = database.posts[database.posts.length-1].id;

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
      id: lastID++, // Einfache ID-Zuweisung
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
        // to make sure the code is idempotent, we create the post if it does not exist
        return createPost(req);   
             
        // return {
        //     status: 404,
        //     json: { "success": false, "message" : "Post not found"}
        // }
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
            status: 200,
            json: { "success": true, "message" : "Post has been deleted"}
        };
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