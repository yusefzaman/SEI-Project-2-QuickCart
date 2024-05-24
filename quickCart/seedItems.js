require("dotenv").config()
require("./config/database")

const Item = require("./models/item")
const createItem = async () => {
  try {
    const doc = await Item.create({
      itemName: "T-Shirt",
      itemImg: "String",
      itemPrice: 5,
      itemDescription: "String",
    })

    console.log("Done creating item", doc)
  } catch (err) {
    console.error(err)
  }
}

createItem()
