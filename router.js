// ROUTER

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

  res.send('Home page');

});

router.get('/about', function (req, res) {

  res.send('About this page');

});

module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

  res.send('Home page');

});

router.get('/about', function (req, res) {

  res.send('About this page');

});

module.exports = router;
