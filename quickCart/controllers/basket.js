const Basket = require("../models/basket")
const item = require("../models/item")
const Item = require("../models/item")

async function createCart(req, res) {
  try {
    let basket = await Basket.findById(req.params.id)
    basket.items.push(req.body.itemId)
    await basket.save()
    res.redirect(`/items/${req.body.itemId}`)
  } catch (err) {
    console.error(err)
    res.status(500).send("Error adding item to the basket")
  }
}

module.exports = { createCart }
