var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Projects', function (req, res, next) {
  res.render('Projects', { title: 'Projects' });
});

router.get('/AboutMe', function (req, res, next) {
  res.render('AboutMe', { title: 'About Me' });
});

router.get('/Services', function (req, res, next) {
  res.render('Services', { title: 'Services' });
});

router.get('/ContactMe', function (req, res, next) {
  res.render('ContactMe', { title: 'Contact ME' });
});

module.exports = router;
