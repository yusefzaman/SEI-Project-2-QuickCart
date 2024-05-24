const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ItemSchema = new Schema(
  {
    itemName: String,
    itemImg: String,
    itemPrice: Number,
    itemDescription: String,
    review: [{ type: Schema.Types.ObjectId, ref: 'review' }]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('item', ItemSchema)
