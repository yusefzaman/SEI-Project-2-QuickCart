const mongoose = require('mongoose')
const Schema = mongoose.Schema
const reviewSchema = new Schema(
  {
    reviewContent: String,
    reviewRating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('review', reviewSchema)
