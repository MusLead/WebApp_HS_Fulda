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
        json: { "success": true, data: newPost}
    };
}

const readPost = req => {
    const post = database.posts.find(p => p.id == req.params.id);
    // console.log(post);
    if (post) {
        return {
            status: 200,
            json: { "success": true, data: post}
        }
    } else {
        return {
            status: 404,
            json: { "success": false, "message" : "Post not found"}
        }
        
    }
}

const renderNewPost = res => {
    formSubmit = {action: "/blog", method: "post", enctype: "multipart/form-data", submitValue: "Senden", class: "mt-4"}
    console.log(res)
    formInputs = res != undefined ? [
      {label: "", type: "hidden", name: "id", for: "id", id: "id", required: "required", value: res.id},
      {label: "titel", type: "text", name: "title", for: "title", id: "title", required: "required", value: res.title},
      {label: "username", type: "text", name: "username", for: "username", id: "username", required: "required", value: res.username},
      {label: "date", type: "date", name: "date", for: "date", id: "date", required: "required", value: res.date},
      {label: "text", type: "textarea", name: "text", for: "text", id: "text", required: "required", value: res.text},
      {label: "photo", type: "file", name: "photo", for: "photo", id: "photo", required: "", value: res.photo}
    ] : [
        {label: "titel", type: "text", name: "title", for: "title", id: "title", required: "required", value: ""},
        {label: "username", type: "text", name: "username", for: "username", id: "username", required: "required", value: ""},
        {label: "date", type: "date", name: "date", for: "date", id: "date", required: "required", value: ""},
        {label: "text", type: "textarea", name: "text", for: "text", id: "text", required: "required", value: ""},
        {label: "photo", type: "file", name: "photo", for: "photo", id: "photo", required: "", value: ""}
    ]
    // console.log(formInputs)
    return {formSubmit, formInputs}
    // res.render('post', {formSubmit, formInputs}) // res.render(<Name of ejs file (View)>, {<objects>})
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
            json: { "success": true, data: post}
        }
    } else {
        // to make sure the update is idempotent, we create a new post if the post is not found
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
            status: 404,
            json: { "success": false, "message" : "Post not found"}
        }
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