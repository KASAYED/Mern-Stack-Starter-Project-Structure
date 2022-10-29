const mongoose = require('mongoose')
const DataSchema = mongoose.Schema(
  {
    Name: { type: String },
    Roll: { type: String },
    Class: { type: String },
  },
  { versionKey: false }
)
const StudentsModel = mongoose.model('student', DataSchema)
module.exports = StudentsModel
