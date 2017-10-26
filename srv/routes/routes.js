const controllers = require('../../srv/controllers');


module.exports = (app) => {

  app.post('/auth/signup', controllers.users.signup);

  app.all('*', (req, res) => {
    res.status(404)
    res.send('Go play somewhere else!');
    res.end()
  })
}


