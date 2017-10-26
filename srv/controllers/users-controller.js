const encryption = require('../tools/encryption')
const User = require('mongoose').model('User')

module.exports = {

  signup: (req, res) => {
    let reqUser = req.body;
    // Add validations!

    let salt = encryption.generateSalt();
    let hashedPassword = encryption.generateHashedPassword(salt, reqUser.password);

    User.create({
      name: reqUser.name,
      email: reqUser.email,
      salt: salt,
      hashedPass: hashedPassword
    }).then(user => {
      req.logIn(user, (err, user) => {
        if (err) {
          res.locals.globalError = err;
          res.render('users/register', user)
        }

        res.status(201).json({success: true});
      })
    })
  },

};
