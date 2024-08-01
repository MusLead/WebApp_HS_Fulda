# View

## EJS Tags

- `<%`'Scriptlet' tag, for control-flow, no output
- `<%_` ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
- `<%=` Outputs the value into the template (HTML escaped)
- `<%-` Outputs the unescaped value into the template
- `<%#` Comment tag, no execution, no output
- `<%%` Outputs a literal `<%`
- `%>` Plain ending tag
- `-%>` Trim-mode ('newline slurp') tag, trims following newline
- `_%>` ‘Whitespace Slurping’ ending tag, removes all whitespace after it

## Uebung

### Liste aller Posts

Within the [list.ejs](/View/views/list.ejs) you can see that every blog post will be shown with this HTML&EJS logic:

```html
<% blogposts.forEach(function(post) { %>
    <a href="blog/<%= post.id %>" class="list-group-item list-group-item-action">
        <h2 class="list-group-item-heading"><%= post.title %></h2>
        <p class="mb-1"><strong>Posted by:</strong> <%= post.username %></p>
        <p class="mb-1"><strong>Date:</strong> <%= post.date %></p>
        <p class="mb-1"><%= post.text.substring(0,50) %></p>
    </a>
<% }); %>
```

in [blogController.js](/View/controllers/blogController.js) and [blog.js](/View/routes/blog.js) responsible to show all the blogpost

```js
const getAllPosts = (req, res) => { 
    res.render('list', {blogposts: database.posts}); // res.render(name of ejs, objects); 
}
```

```js
var postController = require('../controllers/blogController');
router.route('/')
  .get(postController.getAllPosts)
```

### Einzelner Post

Every list of posts has `href` that shows which PATH does each post reffers to. Below are the codes that responsible to show the choosen post.

[blog.js](/View/routes/blog.js)

```js
router.route('/:id')
  .get(postController.readPost);
```

[blogController.js](/View/controllers/blogController.js)

```js
const readPost = (req, res) => {
    const post = database.posts.find(p => p.id == req.params.id);
    if (post) {
        res.render('viewpost', { post: post});
    } else {
        res.status(404).send('Post not found');
    }
}
```

After the data of the choosen post has been found by the controller, it will be passed into the view 

[viewpost.ejs](/View/views/viewpost.ejs)

```html
<div class="container">
        <h1 class="my-4"><%= post.title %></h1>
        <p><strong>Posted by:</strong> <%= post.username %></p>
        <p><strong>Date:</strong> <%= post.date %></p>
        <p><%= post.text %></p>
        <% if (post.photo) { %>
            <img src="/<%= post.photo %>" class="img-fluid" alt="<%= post.photo %>">
        <% } %>
        <a href="/" class="btn btn-primary mt-4 mb-4">Back to List</a>
    </div>
    
```

### Dynamisches Formular

First we list all the necessary attributes of the form. and then passed them into the respected ejs file.

[blog.js](/View/routes/blog.js)

```js
// Route: GET /newPost
router.route('/newPost')
  .get(postController.renderNewPost); 
```

[blogController.js](/View/controllers/blogController.js)

```js
const renderNewPost = (req, res) => {
    formSubmit = {action: "/blog", method: "post", enctype: "multipart/form-data", submitValue: "Senden", class: "mt-4"}
    formInputs = [
      {label: "titel", type: "text", name: "title", for: "title", id: "title", required: "required"},
      {label: "username", type: "text", name: "username", for: "username", id: "username", required: "required"},
      {label: "date", type: "date", name: "date", for: "date", id: "date", required: "required"},
      {label: "text", type: "text", name: "text", for: "text", id: "text", required: "required"},
      {label: "photo", type: "file", name: "photo", for: "photo", id: "photo", required: ""}
    ]
    res.render('form', {formSubmit, formInputs}) 
  }
```

[form.ejs](/View/views/form.ejs)

```html
<div class="container">
        <h1 class="mt-5">Neuen Blogpost erstellen</h1>
        <form action="<%= formSubmit.action%>" method="<%= formSubmit.method %>" class="<%= formSubmit.class %>" enctype="<%= formSubmit.enctype  %>">
            <% formInputs.forEach( input => { %>
                <div class="form-group">
                    <label for="<%= input.for %>"><%= input.label %></label>
                    <input type="<%= input.type %>" class="form-control" id=<%= input.id %> name="<%= input.name%>" <%= input.required  %>>
                </div>
            <% }); %>
            <button type="submit" class="btn btn-primary mt-4">Absenden</button>
        </form>
    </div>
```
