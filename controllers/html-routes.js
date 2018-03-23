// Our Burger controller
// =====================
// This file uses Sequelize to manage data manipulation
// for all apropos http requests.
// NOTE: This is the same file from last week's homework,
// but with each route gutted and replaced with sequelize queries
// where references to our outmoded ORM file once sat.
var express = require("express");

var router = express.Router();

// get route -> index
router.get("/", function(req, res) {
  // send us to the next get function instead.
  res.render('index');
});

router.get("/results", function(req, res) {
  // send us to the next get function instead.
  res.render('results');
});

module.exports = router;
// make a new route that will query from the search page it will be a get. and will render a new search or routes.handlebars.