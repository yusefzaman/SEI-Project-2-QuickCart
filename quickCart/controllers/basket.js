const Basket = require("../models/basket")
const Item = require("../models/item")

const addToCart = async (req, res) => {
  try {
    const basketId = req.user.basket
    const basket = await Basket.findById(basketId)
    basket.items.push(req.body.ItemId)
    await basket.save()
    res.redirect(`/categories/items/${req.body.ItemId}`)
  } catch (error) {
    console.log(error)
    // res.redirect("/planets")
  }
}

module.exports = { addToCart }
