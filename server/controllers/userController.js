const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
let saltRounds = 10;

// ============= tambahan npm install --save express-validator =========

const {
  check,
  validationResult
} = require("express-validator/check");
var jwt = require("jsonwebtoken");

// ============= tambahan npm install --save express-validator =========

function signUpUser(req, res) {
  // ============ add validations ============
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array()
    });
  }
  // ============ add validations ============

  let objUser = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  };

  User.create(objUser)
    .then(users => {
      res.status(200).json({
        message: "Signup success",
        users
      });
    })
    .catch(error => {
      res.status(400).json({
        message: "Signup error",
        error
      });
    });
}

function loginUser(req, res) {

  let pass = req.body.password;

  User.findOne({
      email: req.body.email
    })
    .then(user => {
      // console.log('=============',user);


      let compare = bcrypt.compareSync(pass, user.password);

      const userInfo = {
        username: user.username,
        email: user.email
      };

      if (compare) {
        jwt.sign({
            id: user._id,
            email: user.email
          },
          process.env.SECRET_KEY,
          (err, token) => {
            console.log(token);

            res.status(200).json({
              message: 'Logged In Successfully',
              token
            });
          }
        );
      }
    })
    .catch(error => {
      res.status(400).json({
        message: "Wrong username/password",
        error
      });
    });
}



function getUser(req, res) {
  var decoded = jwt.verify(req.headers.token,process.env.SECRET_KEY)
  User.findOne({_id:decoded.id})
    .then(users => {
      res.status(200).json({
        message: 'get One user',
        users
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'failed',
        err
      })
    })
}


// ====================== tambahan yang ini coy ===========================

function loginUserByFb(req, res) {
  let emailUser = req.body.email;
  let pass = req.body.password;
  let salt = bcrypt.genSaltSync(saltRounds);
  let hash = bcrypt.hashSync(pass, salt);
  //   console.log('=============>',pass);

  User.findOne({
      email: emailUser
    })
    .then(Users => {
      // console.log(Users);
      if (!Users) {

        console.log('==========', 'masuks');
        let objUser = {

          username: req.body.username,
          email: req.body.email,
          password: req.body.password

        };
        User.create(objUser)
          .then(Users => {
            jwt.sign({
                id: Users._id,
                email: Users.email
              },
              process.env.SECRET_KEY,
              (err, token) => {
                res.status(200).json({
                  message: "login successfully",
                  token
                });
                // console.log(token);
              }
            )
          })
          .catch(err => {
            res.status(400).json({
              err
            });
          });
      } else {
        let compare = bcrypt.compareSync(pass, Users.password);
        if (compare) {
          jwt.sign({
              id: Users._id,
              email: Users.email
            },
            process.env.SECRET_KEY,
            (err, token) => {
              res.status(200).json({
                message: "login successfully",
                token
              });
              // console.log(token);
            }
          );
        }
      }

    })
    .catch(err => {
      res.status(400).json({
        message: "wrong password/email "
      });
    });
}
// ====================== tambahan yang ini coy ===========================

module.exports = {
  signUpUser,
  loginUser,
  getUser,
  loginUserByFb
  // verifyToken
};