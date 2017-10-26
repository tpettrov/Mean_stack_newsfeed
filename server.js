var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var cors = require('cors');
var ObjectID = mongodb.ObjectID;
var NEWS_COLLECTION = "news";
var USERS_COLLECTION = 'users';

var app = express();
app.use(bodyParser.json());
app.use(cors());


var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

var dbConnectionString = process.env.MONGODB_URI || "mongodb://development:development@ds133465.mlab.com:33465/meanstacknewsfeedtest";
// Connect to the database before starting the application server.
mongodb.MongoClient.connect(dbConnectionString, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});


// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

// api

app.get("/api/news", function(req, res) {
  db.collection(NEWS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get news.");
    } else {
      res.status(200).json(docs);
    }
  });
});

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

//auth

app.post("/auth/signup", function(req, res) {
  var newUser = req.body;

  if (!req.body.name || !req.body.email || !req.body.password) {
    handleError(res, "Invalid user input", "Must provide a name, email, password", 400);
  }

  db.collection(USERS_COLLECTION).insertOne(newUser, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new User :D.");
    } else {
      res.status(201).json({success: true});
    }
  });
});
