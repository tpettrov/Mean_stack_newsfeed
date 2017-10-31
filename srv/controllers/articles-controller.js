const ARTICLES_COLLECTION = "news";
const mongoUtil = require('../database/database');
let ObjectID = require('mongodb').ObjectID;


module.exports = {
  getArticles: (req, res) => {
    mongoUtil.getDb().collection(ARTICLES_COLLECTION).find({}).sort({_id:-1}).limit(5).toArray(function (err, docs) {
      if (err) {
        handleError(res, err.message, "Failed to get news.");
      } else {
        res.status(200).json({articles: docs, success:true});
      }
    });
  },

  getArticle: (req, res) => {
    const articleId = req.params.articleId
    mongoUtil.getDb().collection(ARTICLES_COLLECTION).findOne({_id: new ObjectID(articleId)}, function (err, docs) {
      if (err) {
        handleError(res, err.message, "Failed to get news.");
      } else {
        res.status(200).json(docs);
      }
    });
  },

  createArticle: (req, res) => {

    let newArticle = req.body;
    if (newArticle.content.length > 100) {
      return res.status(200).json({success: false, msg: 'Article too long'});
    } else {
      newArticle.comments = new Array();

      mongoUtil.getDb().collection(ARTICLES_COLLECTION).insertOne(newArticle, function (err, docs) {
        if (err) {
          handleError(res, err.message, "Failed to get news.");
        } else {
          res.status(200).json(docs);
        }
      });
    }
  },
  addComment: (req, res) => {
      const articleId = req.params.articleId;
      let comment = {};
        comment.content = req.body.content;
      comment.author = req.user.name;
      console.log(comment);

      mongoUtil.getDb().collection(ARTICLES_COLLECTION).updateOne({_id: new ObjectID(articleId)},
        {$push: { "comments" : comment }}, function (err,doc){
      if (err) {
        console.log('Грешка');
      } else {
        res.status(200).json({success: true});
      }
      })
  }
}
