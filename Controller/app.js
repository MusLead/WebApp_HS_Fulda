var createError = require('http-errors');
var express = require('express');
const fs = require('fs');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const blogController = require('./controllers/blogController');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = require('./routes/index');
var blogRouter = require('./routes/blog'); // Import the blogRouter

app.use('/', indexRouter);
app.use('/blog', blogRouter); // add blogRouter to the app

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var fileUpload = require('express-fileupload');
app.use(fileUpload({
  createParentPath: true
}));
app.use(express.static('public/uploads'));

//TODO: ask what does this do exactly???
// Create a write stream (in append mode) for logging
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// Setup the logger
app.use(logger('combined', { stream: accessLogStream }));

// Define routes
app.get('/blog', blogController.getAllPosts);
app.post('/blog/newPost', blogController.createPost);
app.get('/blog/:id', blogController.readPost);


module.exports = app;
