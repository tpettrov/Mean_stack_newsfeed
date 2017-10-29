const ARTICLES_COLLECTION = "news";
const mongoUtil = require('../database/database');

module.exports = {
  getArticles: (req, res) => {
    mongoUtil.getDb().collection(ARTICLES_COLLECTION).find({}).sort({_id:-1}).limit(5).toArray(function (err, docs) {
      if (err) {
        handleError(res, err.message, "Failed to get news.");
      } else {
        res.status(200).json(docs);
      }
    });
  },
  createArticle: (req, res) => {

    let newArticle = req.body;

    mongoUtil.getDb().collection(ARTICLES_COLLECTION).insertOne(newArticle, function (err, docs) {
      if (err) {
        handleError(res, err.message, "Failed to get news.");
      } else {
        res.status(200).json(docs);
      }
    });
  },
  addComment: (req, res) => {
      const articleId = req.params.articleId;
      const comment = req.body.content;

      mongoUtil.getDb().collection(ARTICLES_COLLECTION).updateOne({_id: articleId},
        comment, function (err,doc){
      if (err) {
        console.log(err);
      } else {
        console.log(doc);
      }
      })
  }
}
