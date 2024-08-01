# Problem 
## Bootstrap problem

> The path is /blog/newPost the bootstrap is not being rendered.

Solved! the path within the blogpost.ejs should be renamed such as
`http://localhost:3000/stylesheets/css/bootstrap.min.css `
not only 
` /stylesheets/css/bootstrap.min.css `

If you do not know what happen, you could open the console see if the path that the browser is being used is coorect!

# Routing

## Differences Between GET and POST
ROUTEN WERDEN IN DER `APP.JS` EINGETRAGEN

```js
// OTHER IMPORTANT DEFINITIONS
...

// ROUTERN DEFINIEREN
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var blogRouter = require('./routes/blog'); 

var app = express();

// Some other functional log logic
...

// HIER WERDEN DIE ROUTERN EINBINDET
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/blog', blogRouter); // add blogRouter to the app

// catch 404 and forward to error handler
...

// error handler
...

module.exports = app;

```

### GET Method
- **Purpose**: The GET method is used to request data from a specified resource.
- **Characteristics**:
  - **Idempotent**: Multiple identical requests should have the same effect as a single request.
  - **Safe**: Intended only for retrieving data and should not have any other effect on the server.
  - **Data Transmission**: Data is sent via URL parameters (query string).
  - **Usage**: Generally used for fetching data without causing side effects.
- **req.query**: Contains the query parameters in the URL.
  - Example URL: `http://example.com/search?name=John&age=30`
  - Accessing Parameters: `req.query.name` and `req.query.age`

### POST Method
- **Purpose**: The POST method is used to submit data to be processed to a specified resource.
- **Characteristics**:
  - **Non-idempotent**: Multiple identical requests may have different effects.
  - **Data Transmission**: Data is sent in the body of the request.
  - **Usage**: Typically used for creating new resources or submitting forms.
- **req.body**: Contains data sent by the client in the request body.
  - Example Form Data: `{ "name": "John", "age": 30 }`
  - Accessing Data: `req.body.name` and `req.body.age`

### Route Parameters with `req.params`

Route parameters are named URL segments used to capture the values specified at their position in the URL. They are denoted by a colon (`:`) followed by the name of the parameter.

#### Example Route
```javascript
app.get('/users/:name', function(req, res) {
  res.send('User: ' + req.params.name);
});
```
- **URL**: `http://example.com/users/John`
- **Accessing Route Parameter**: `req.params.name` will give you the value `John`.

### Practical Example

### GET Route
```javascript
app.get('/search', function(req, res) {
  const name = req.query.name;
  const age = req.query.age;
  res.send(`Search Results for Name: ${name}, Age: ${age}`);
});
```
- **URL**: `http://example.com/search?name=John&age=30`
- **Output**: `Search Results for Name: John, Age: 30`

#### POST Route
```javascript
app.post('/submit', function(req, res) {
  const name = req.body.name;
  const age = req.body.age;
  res.send(`Form Submitted with Name: ${name}, Age: ${age}`);
});
```
- **Form Data**: `{ "name": "John", "age": 30 }`
- **Output**: `Form Submitted with Name: John, Age: 30`
