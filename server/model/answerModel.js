const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const answerSchema = new Schema({
    content: String,
    votesUp:[],
    votesDown:[],
    questionId: {
        type: ObjectId,
        ref: "questions"
    },
    userId: {
        type: ObjectId,
        ref: "User_overflow"
    }
},{timestamps:true})

const Answer = mongoose.model("Answer",answerSchema)

module.exports = Answer