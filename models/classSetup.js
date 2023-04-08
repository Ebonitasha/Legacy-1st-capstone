const mongoose = require('mongoose')
const Schema = mongoose.Schema

const classSetupSchema = new Schema({
  Url: String,
  completed: {
    type: Boolean,
    default: false
  },
  Title: {
    type: String,
    required: true
  },
  Description: {
    type: String
  },
  Type: { 
    type: Number,
    required: true
  },
  Price: {
    type: Number,
  }
  // User:{
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true
  // }
  
})

module.exports = mongoose.model("ClassSetup", classSetupSchema)