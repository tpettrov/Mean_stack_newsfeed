const controllers = require('../../srv/controllers');
const auth = require('./routes')

module.exports = (app) => {

  app.post('/auth/signup', controllers.users.signup);

  app.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found!')
    res.end()
  })
}


