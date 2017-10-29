const encryption = require('../tools/encryption');
const mongoUtil = require('../database/database');
const jwt = require('jsonwebtoken');
const USERS_COLLECTION = 'users';

module.exports = {

  signup: (req, res) => {
    let newUser = req.body;
    // Add validations!
    let db = mongoUtil.getDb();
    let salt = encryption.generateSalt();
    let hashedPassword = encryption.generateHashedPassword(salt, newUser.password);

    if (!req.body.name || !req.body.email || !req.body.password) {
      res.status(500).json({success: false, msg: 'No name, email or password!'});
    }

    newUser.salt = salt;
    newUser.password = hashedPassword;

    db.collection(USERS_COLLECTION).findOne({email: newUser.email}, function (err, doc) {

      if (err) {
        res.status(500).json({success: false, msg: 'Try again later!'});
      } else if (doc) {
        res.status(200).json({success: false, msg: 'User already registered!'});
      } else {
        db.collection(USERS_COLLECTION).insertOne(newUser, function (err, doc) {
          if (err) {
            res.status(500).json({success: false, msg: 'Unsuccessfull registration!'});
          } else {
            res.status(201).json({success: true});
          }
        });

      }

    })

  },

  login: (req, res) => {

    let wannaBeUser = req.body;
    // Add validations!

    if (!req.body.email || !req.body.password) {
      handleError(res, "Invalid user input", "Must provide email, password", 400);
    }
    let db = mongoUtil.getDb();

    db.collection(USERS_COLLECTION).findOne({email: wannaBeUser.email}, function (err, doc) {
      if (doc === null) {
        res.status(401).json({success: false, msg: 'Unvalid credentials!'});
      } else {
        if (encryption.generateHashedPassword(doc.salt, wannaBeUser.password) === doc.password) {
          const token = jwt.sign({sub: doc._id}, 'extremelY private String Unreadable by third party or dummy guys1');
          res.status(200).json({
            success: true,
            msg: 'Successful authentication on server!',
            token: token,
            user: doc.name
          });
        } else {
          res.status(401).json({success: false, msg: 'Unvalid credentials!'});
        }
      }
    });
  }

};
