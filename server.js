

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(__dirname + "./public"));
	app.use(express.static("public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var htmlRoutes = require("./routes/html-routes");

app.use("/", htmlRoutes);


// listen on port 3000
var port = process.env.PORT || 3000;

  app.listen(port);



  // // *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
// var express = require("express");
// var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
// var app = express();
// var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
// var db = require("./models");

// Sets up the Express app to handle data parsing
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
// app.use(express.static("public"));

// Routes
// =============================================================
// require("./routes/post-api-routes.js")(app);
// require("./routes/author-api-routes.js")(app);
// require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({ force: true }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });
 ///
