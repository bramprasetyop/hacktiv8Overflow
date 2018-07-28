var express = require('express');
var router = express.Router();

const {
  newOverflow,
  getOverflow,
  deleteOverflow,
  getOneOverflow,editOverflow
} = require("../controllers/questionController");


var {
  logincheck
} = require("../helpers/auth");
/* GET articlelisting. */
router.post('/', logincheck, newOverflow)
  .get('/questions', getOverflow)
  .delete('/questions/:id',logincheck, deleteOverflow)
  .get('/questions/:id', getOneOverflow).put('/questions/:id', logincheck,editOverflow)

module.exports = router;