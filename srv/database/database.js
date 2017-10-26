var mongodb = require("mongodb");

const dbConnectionString = process.env.MONGODB_URI || "mongodb://development:development@ds133465.mlab.com:33465/meanstacknewsfeedtest";
// Connect to the database before starting the application server.
  const database = mongodb.MongoClient.connect(dbConnectionString, function (err, database) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log('MongoDB ready!')
    return database;


  });

module.exports = database;
