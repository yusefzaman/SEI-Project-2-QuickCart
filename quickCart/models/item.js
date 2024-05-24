const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ItemSchema = new Schema(
  {
    ItemName: String,
    itemImg: String,
    itemPrice: Number,
    itemDescription: String,
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("item", ItemSchema)
