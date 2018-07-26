const Overflow = require("../model/questionModel");
const jwt = require("jsonwebtoken")
function newOverflow(req, res) {

  var decoded = jwt.verify(req.headers.token,process.env.SECRET_KEY)

  let addOverflow = {
    title:req.body.title,
    content: req.body.content,
    votes:[],
    answerId:[],
    userId:decoded.id
    
  }

  Overflow.create(addOverflow)
    .then(Overflow => {
      res.status(200).json({
        message: 'new Overflow added',
        Overflow
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'failed',
        err
      })
    })
}

function getOverflow(req, res) {
  Overflow.find()
    .then(Overflow => {
      res.status(200).json({
        message: 'get Overflow',
        Overflow
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'failed',
        err
      })
    })
}

function deleteOverflow(req, res) {
  Overflow.findByIdAndRemove(req.params.id)
    .then(Overflow => {
      res.status(200).json({
        message: 'delete Overflow',
        Overflow
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'failed',
        err
      })
    })
}
function getOneOverflow(req, res) {
  Overflow.findOne({_id:req.params.id})
    .then(Overflow => {
      res.status(200).json({
        message: 'get one Overflow',
        Overflow
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'failed',
        err
      })
    })
}





module.exports = {
  newOverflow,
  getOverflow,
  deleteOverflow,
  getOneOverflow
};