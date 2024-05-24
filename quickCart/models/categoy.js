const mongoose = require("mongoose")
const Schema = mongoose.Schema
const categoySchema = new Schema(
  {
    categoyName: String,
    categoyImg: String,
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("categoy", userSchema)
