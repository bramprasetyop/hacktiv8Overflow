var express = require('express');
var router = express.Router();

const {
  signUpUser,
  loginUser,
  getUser
} = require("../controllers/userController");

var {
  signUpVal,
} = require("../helpers/signupValidation");



const checkUserDuplication = require('./../helpers/checkUserDuplication');

/* GET home page. */
router.post('/', signUpVal, checkUserDuplication, signUpUser)
  .post('/login', loginUser).get('/home/users', getUser)

module.exports = router;