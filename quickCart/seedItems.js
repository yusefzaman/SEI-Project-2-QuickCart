require("dotenv").config()
require("./config/database")

const Item = require("./models/item")
const createItem = async () => {
  try {
    const doc = await Item.create({
      itemName: "T-Shirt",
      itemImg: "String",
      itemPrice: 15,
      itemDescription: "String",
      review: [{ type: Schema.Types.ObjectId, ref: "review" }],
    })

    console.log("Done creating item", doc)
  } catch (err) {
    console.error(err)
  }
}

createItem()
