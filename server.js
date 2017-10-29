var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');
var app = express();
app.use(bodyParser.json());
app.use(cors());
require('./srv/routes/routes')(app);
var mongoUtil = require('./srv/database/database');

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

mongoUtil.connectToDatabase(function(err){
    const server = app.listen(process.env.PORT || 8080, function () {
    const port = server.address().port;
    console.log("App now running on port", port);
});
});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}






