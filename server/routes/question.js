var express = require('express');
var router = express.Router();

const {
  newOverflow,
  getOverflow,
  deleteOverflow,
  getOneOverflow,
  editOverflow,
  editUpOneQuestion,
  editDownOneQuestion
} = require("../controllers/questionController");


var {
  logincheck
} = require("../helpers/auth");
/* GET articlelisting. */
router.post('/', logincheck, newOverflow)
  .get('/questions', getOverflow)
  .delete('/questions/:id', logincheck, deleteOverflow)
  .get('/questions/:id', getOneOverflow)
  .put('/questions/:id', logincheck, editOverflow)
  .put('/questions/up/:id', editUpOneQuestion)
  .put('/questions/down/:id', editDownOneQuestion)

module.exports = router;