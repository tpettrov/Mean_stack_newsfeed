const NEWS_COLLECTION = "news";
const mongoUtil = require('../database/database');

module.exports = {
  getArticles: (req, res) => {
    mongoUtil.getDb().collection(NEWS_COLLECTION).find({}).toArray(function (err, docs) {
      if (err) {
        handleError(res, err.message, "Failed to get news.");
      } else {
        res.status(200).json(docs);
      }
    });
  }
}
