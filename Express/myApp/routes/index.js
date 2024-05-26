var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Web-App', name: 'Agha' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me', name: 'Agha'});
});


module.exports = router;
