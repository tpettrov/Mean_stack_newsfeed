const encryption = require('../tools/encryption');
const mongoUtil = require('../database/database');
const USERS_COLLECTION = 'users';

module.exports = {

  signup: (req, res) => {
    let newUser = req.body;
    // Add validations!
    let db = mongoUtil.getDb();
    let salt = encryption.generateSalt();
    let hashedPassword = encryption.generateHashedPassword(salt, newUser.password);

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
  },

};
