const mongoClient = require("mongodb").MongoClient;
const dbConnectionString = process.env.MONGODB_URI || "mongodb://development:development@ds133465.mlab.com:33465/meanstacknewsfeedtest";
let db;

module.exports = {

  connectToDatabase: function(callback) {
    mongoClient.connect(dbConnectionString, function(err, database){
      db = database;
      console.log('MongoDB ready!');
      return callback(err);
    });
  },

  getDb: function(){
    return db;
  }

}
