// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

// NAME OF PAGE NEEDS TO BE ADDED (made this one upj)
  app.get("/homebase", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/homebase.html"));
  });

// NAME OF PAGE NEEDS TO BE ADDED (just made this one up)
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/bookBase.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/reserve.html"));
  });
};
