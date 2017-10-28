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

app.post("/api/news", function(req, res) {
  var newNew = req.body;

  if (!req.body.name) {
    handleError(res, "Invalid user input", "Must provide a name.", 400);
  }

  db.collection(NEWS_COLLECTION).insertOne(newNew, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new new :D.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});


app.get("/api/news/:id", function(req, res) {
  db.collection(NEWS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get this new");
    } else {
      res.status(200).json(doc);
    }
  });
});



