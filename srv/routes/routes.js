const controllers = require('../../srv/controllers');
const authTest = require('../tools/auth-test');

module.exports = (app) => {

  app.post('/auth/signup', controllers.users.signup);
  app.post('/auth/login', controllers.users.login);

  app.get('/api/articles',  controllers.articles.getArticles);
  app.post('/api/articles', authTest, controllers.articles.createArticle);
  app.get('/api/articles/:articleId', controllers.articles.getArticle);
  app.post('/api/articles/:articleId/addComment', authTest, controllers.articles.addComment);

  /*app.all('*', (req, res) => {
    res.status(404)
    res.send('Go play somewhere else!');
    res.end()
  })*/
}


