const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let articleSchema = new Schema({
  title: {
    type: String
  },
  article: {
    type: String
  }
}, {
  timestamps: true
});





const Article = mongoose.model("Articles", articleSchema);

module.exports = Article;