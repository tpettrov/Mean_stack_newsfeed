const encryption = require('../tools/encryption');
const db = require('../database/database');

module.exports = {

  signup: (req, res) => {
    var newUser = req.body;
    // Add validations!

    let salt = encryption.generateSalt();
    let hashedPassword = encryption.generateHashedPassword(salt, newUser.password);


    console.log(newUser);

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
