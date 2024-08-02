# REST

## WARNING! 

TODO: My code is not fully integrated with the HTTP Rule! please be carefult when making my code as a reference

## Definition

REST (REPRESENTATIONAL STATE TRANSFER)

DIE REST-ARCHITEKTUR NUTZT DAS HTTP-PROTOKOLL VOLLSTÄNDIG (IM GEGENSATZ ZU ANDEREN WEBSERVICES)

## HTTP STATUS CODES

1. DIE ANTWORT EINES RESTFUL WEBSERVICES BEINHALTET EINEN HTTP- STATUSCODE UND GGF. DIE ANGEFORDERTE RESSOURCE.

2. WERDEN IN FÜNF KLASSEN EINGETEILT
    - 100er Gruppe – Informative Antworten
    - 200er Gruppe – Erfolgreiche Antworten
    - 300er Gruppe – Umleitungen
    - 400er Gruppe – Client-Fehler
    - 500er Gruppe – Server-Fehler

## Uebung

## About `find` Index

in this chapter, there is another additional route comman:
`put` and `delete`. See [blogController.js](/REST/controllers/blogController.js) to see the whole codes

- The `put` logic is not that diefferent than the post logic. combine the findPost logic with the post logic.
- The `delete` we use `splice`. Below is the Logic behind `delete` if the post is found. First we need the index of the object that has been found before (see the general logic below) and then using splize we delete the object from the array. Rewrite the JSON database and send the array of objects into REST API.

    ```js
    const index = database.posts.indexOf(post);
    database.posts.splice(index, 1); // deelete the post splice(starting index, number of elements to remove)
    let postsJSON = JSON.stringify(database.posts);
    fs.writeFileSync('public/blog.json', postsJSON);
    return {
        status: 200,
        json: { "success": true, "message" : "Post deleted"}
    }
    ```

Here is the general logic about finding index

```js
var database= {
    posts: require('../public/blog.json'),
    setPosts: function(data){
        this.posts=data;
    }
}

const generalFindLogic = req => {
    const post = database.posts.find(p => p.id == req.params.id);
    if (post) {
        /* logic if found */
    } else {
        /* logic if not found */
    }
}
```

## General Rule about REST API

Every time the API is called, the `someFunction` below is responsible for getting, changing, or adding values to the Model (database). Below is the general rule for using the REST API. The `res.json()` method is responsible for returning the result of each API call, while the `res.status()` method is responsible for setting the status code to indicate whether the intended call was successful.

[api.js](/REST/routes/api.js)

```js
var postController = require('../controllers/blogController');

router.route('PATH')
  .HTTP_METHOD((req, res) => {
    const result = postController.someFunction(req);
    res.status(result.status).json(result.json);
  });
```

The code below is an example of how the `result.json` provides the result to the API:

[blogController.js](/View/controllers/blogController.js)

```js
{
    status: 200,
    json: { "success": true, post: post }
}
```

---

Key points:

1. Replace `HTTP_METHODE` with the appropriate HTTP method (e.g., GET, POST, PUT, DELETE).
2. Ensure that `someFunction` is properly invoked with parentheses `()`.
3. Verify the `PATH` in `router.route('PATH')` is correct.
