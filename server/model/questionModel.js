const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

let overflowSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    content: String,
    votesUp: [],
    votesDown: [],
    answerId: [{
        type: ObjectId,
        ref: "Answer"
    }],
    userId: {
        type: ObjectId,
        ref: "User_overflow"
    }
}, {
    timestamps: true
});





const Overflow = mongoose.model("questions", overflowSchema);

module.exports = Overflow;