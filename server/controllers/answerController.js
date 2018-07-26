const Answer = require("../model/answerModel");
const jwt = require("jsonwebtoken")


function newAnswer(req, res) {

  var decoded = jwt.verify(req.headers.token,process.env.SECRET_KEY)

  let addAnswer = {

    content: req.body.content,
    votes:[],
    userId:decoded.id,
    questionId: req.body.questionId
    
    
  }

  Answer.create(addAnswer)
    .then(Answer => {
      res.status(200).json({
        message: 'new Answer added',
        Answer
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'failed',
        err
      })
    })
}

function getAnswer(req, res) {
  Answer.find()
    .then(Answer => {
      res.status(200).json({
        message: 'get Answer',
        Answer
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'failed',
        err
      })
    })
}

function deleteAnswer(req, res) {
  Answer.findByIdAndRemove(req.params.id)
    .then(Answer => {
      res.status(200).json({
        message: 'delete Answer',
        Answer
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'failed',
        err
      })
    })
}
function getOneAnswer(req, res) {
  Answer.find({questionId:req.params.id})
    .then(Answer => {
      res.status(200).json({
        message: 'get one Answer',
        Answer
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
  newAnswer,
  getAnswer,
  deleteAnswer,
  getOneAnswer
};