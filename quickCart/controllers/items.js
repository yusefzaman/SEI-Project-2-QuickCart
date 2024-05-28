const Category = require("../models/category")
const Item = require("../models/item")
const basket = require("../models/basket")

async function show(req, res) {
  const item = await Item.findById(req.params.id).populate("review")
  res.render("categories/items/show", {
    title: "Item Details",
    item,
  })
}

async function addToCart(req, res) {
  let basketItems = []
  const clickedItem = req.query.id
  basketItems.push(clickedItem)
  console.log("array" + basketItems)
  res.render("categories/items/show", { clickedItem })
}

module.exports = {
  show,
  addToCart,
}
