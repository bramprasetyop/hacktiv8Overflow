var express = require('express');
var router = express.Router();

const {
  newAnswer,
  getAnswer,
  deleteAnswer,
  getOneAnswer
} = require("../controllers/answerController");


var {
  logincheck
} = require("../helpers/auth");
/* GET articlelisting. */
router.post('/answers',logincheck, newAnswer).get('/answers', getAnswer)
  .delete('/answers/:id', deleteAnswer).get('/answers/:id', getOneAnswer)

module.exports = router;