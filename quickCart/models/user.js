const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: String,
    email: String,
    phoneNumber: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', userSchema)
