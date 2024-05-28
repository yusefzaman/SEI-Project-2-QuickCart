const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: String,
    googleId: {
      type: String,
      required: true
    },
    email: String,
    phoneNumber: String,
    avatar: String,
    basket: { type: Schema.Types.ObjectId, ref: "Basket" },
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', userSchema)
