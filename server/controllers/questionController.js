const Overflow = require('../model/questionModel')
const jwt = require('jsonwebtoken')
function newOverflow(req, res) {
  var decoded = jwt.verify(req.headers.token, process.env.SECRET_KEY)

  let addOverflow = {
    title: req.body.title,
    content: req.body.content,
    votes: [],
    OverflowId: [],
    userId: decoded.id
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
  Overflow.find({})
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
  Overflow.findOne({ _id: req.params.id })
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

function editOverflow(req, res) {
  let id = {
    _id: req.params.id
  }

  let obj = {
    title: req.body.title,
    content: req.body.content
  }

  Overflow.findOneAndUpdate(id, obj)
    .then(Overflow => {
      console.log(Overflow)

      res.status(200).json({
        message: 'edit one Overflow success',
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

function editUpOneQuestion(req, res) {
  if (!req.headers.hasOwnProperty('token')) {
    res.json({
      message: 'no authorization'
    })
  } else {
    var decoded = jwt.verify(req.headers.token, process.env.SECRET_KEY)

    Overflow.findById(req.params.id)
      .then(Overflow => {
        Overflow.votesUp.push(decoded.id)
        Overflow.save()
        res.status(200).json({
          message: 'update Up vote',
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
}

function editDownOneQuestion(req, res) {
  if (!req.headers.hasOwnProperty('token')) {
    res.json({
      message: 'no authorization'
    })
  } else {
    var decoded = jwt.verify(req.headers.token, process.env.SECRET_KEY)

    Overflow.findById(req.params.id)
      .then(Overflow => {
        Overflow.votesDown.push(decoded.id)
        Overflow.save()
        res.status(200).json({
          message: 'update Down vote',
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
}

module.exports = {
  newOverflow,
  getOverflow,
  deleteOverflow,
  getOneOverflow,
  editOverflow,
  editUpOneQuestion,
  editDownOneQuestion
}
