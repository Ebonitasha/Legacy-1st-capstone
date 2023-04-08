const mongoose = require('mongoose')
const Schema = mongoose.Schema

const addcommentSchema = new Schema({

  comment: {
    type: String,
    required: false
  },
  upvote: {
    type: Number,
    default: 0
  },
  downvote: {
    type: Number,
    default: 0
  }, 
  votedUsers:[ {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
 

})
module.exports = mongoose.model("Addcomment", addcommentSchema)