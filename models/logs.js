const mongoose = require('mongoose')

const logSchema = new mongoose.Schema(
  {
  title: String,
  readerName: String,
  pagesRead: String,
  characterName: String,
  isHappy: Boolean,
  isSad: Boolean,
  isMad: Boolean,
  isFunny: Boolean,
  isLove: Boolean,
  isSuprise: Boolean,
  questionOne: String,
  questionTwo: String,
  questionThree: String,
  questionFour: String,
  picture: String,
  },
  { timestamps: true }
)

const Log = mongoose.model('Log', logSchema)

module.exports = Log
