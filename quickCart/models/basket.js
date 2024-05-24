const mongoose = require("mongoose")
const Schema = mongoose.Schema
const basketSchema = new Schema(
  {
    item: [{ type: Schema.Types.ObjectId, ref: "item" }],
    quantity: Number,
    totalPrice: Number,
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("basket", basketSchema)
