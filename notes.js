// do not do force = true (IGNORE THE SHIT OUT OF THIS)

//TO DO THIS PORTION OF THE PROJECT, I WILL NEED TO USE EXPRESS AND NODE!!!!!!

//  the below notes are from = https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes


// set up routes so we can get the alcohol and combine with book

// ROUTES NOTES
// Express Code that uses an HTTP verb (GET, POST, PUT, DELETE, etc...) -
// Several ways to create a route, however this is how we'll do it 1.) express.Router middleware

// HOW IT WORKS
// ** routes are housed in a module **
// 1.) Imports the Express app object
// 2.) Uses the object to get a Router object
// 5.) Add a few routes uusing the get() method
// 4.) Module expores the Router object

// ********** PAGE 1 - Google Route Module (google.js) **********
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

  res.send('Home page');

});

router.get('/about', function (req, res) {

  res.send('About this page');

});

module.exports = router;

// To use this module in our main app file, we must require() the route module (google.js)
// We then call use() ont eh Express app to add the Router to the middleware handling path
// We must specify an URL path of "google"

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

  res.send('Home page');

});

router.get('/about', function (req, res) {

  res.send('About this page');

});

module.exports = router;
});

// instead of res.send(), we could do res.json() to send a JSON response, or a res.sendFile() to send a file
// mostly though, we'll use res.render() which will create and return HTML files

// HTTP VERBS
// router.get() methods can be used to respond to HTTP GET requesets
// the router also provides routes methods for all other HTTP verbs : post(), put(), delete(), options(), trace(), copy(), etc...
// see webpage for example of a POST Request

// ROUTE PATHS
// Define the endpoints at which requests can be made ---
