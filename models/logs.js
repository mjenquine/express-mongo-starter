const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
  title: String,
  readerName: String,
  pagesRead: String,
  characterName: String,
  isHappy: Boolean,
  isSad: Boolean,
  isMad: Boolean,
  questionOne: String,
  questionTwo: String,
  questionThree: String,
  questionFour: String,
})

const Log = mongoose.model('Log', logSchema)

module.exports = Log
