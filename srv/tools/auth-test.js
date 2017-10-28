const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).end()
  }

  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1]

  // decode the token using a secret key-phrase
  return jwt.verify(token, 'extremelY private String Unreadable by third party or dummy guys1', (err, decoded) => {
    // the 401 code is for unauthorized status
    if (err) {
      return res.status(401).end()
    }

    const userId = decoded.sub

    //skip user check at this stage

    /*const user = usersData.findById(userId)
    if (!user) {
      return res.status(401).end()
    }

    req.user = user*/


    console.log(userId);
    return next()
  })
}
