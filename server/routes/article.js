var express = require('express');
var router = express.Router();

const {
  newArticle,
  getArticle,
  deleteArticle,
  getOneArticle
} = require("../controllers/articleController");


var {
  logincheck
} = require("../helpers/auth");
/* GET articlelisting. */
router.post('/',logincheck, newArticle).get('/articles', getArticle)
  .delete('/articles/delete/:id', deleteArticle).get('/articles/:id', getOneArticle)

module.exports = router;