var express = require('express');
var router = express.Router();

const {
  newOverflow,
  getOverflow,
  deleteOverflow,
  getOneOverflow
} = require("../controllers/questionController");


var {
  logincheck
} = require("../helpers/auth");
/* GET articlelisting. */
router.post('/',logincheck, newOverflow).get('/questions', getOverflow)
  .delete('/questions/:id', deleteOverflow).get('/questions/:id', getOneOverflow)

module.exports = router;