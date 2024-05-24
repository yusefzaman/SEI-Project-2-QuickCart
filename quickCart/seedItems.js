require("dotenv").config()
require("./config/database")

const Item = require("./models/item")

const createItem = async () => {
  try {
    const doc = await Item.create(
      {
        itemName: "T-Shirt",
        itemImg: "String",
        itemPrice: 15,
        itemDescription: "String",
        itemType: "Clothes",
      },
      {
        itemName: "sjkdhsh",
        itemImg: "String",
        itemPrice: 15,
        itemDescription: "String",
        itemType: "Furniture",
      }
    )

    console.log("Done creating item", doc)
  } catch (err) {
    console.error(err)
  }
}

createItem()
