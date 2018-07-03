const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let overflowSchema = new Schema({
  title: {
    type: String
  },
  content: {
    type: String
  }
}, {
  timestamps: true
});





const Overflow = mongoose.model("questions", overflowSchema);

module.exports = Overflow;