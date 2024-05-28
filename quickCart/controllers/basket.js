const Basket = require("../models/basket")
const Item = require("../models/item")

const addToCart = async (req, res) => {
  try {
    const basketId = req.user.basket
    const basket = await Basket.findById(basketId)
    basket.items.push(req.body.ItemId)
    await basket.save()
    res.render("categories/show", {
      title: "The Category",
      categories,
      item,
      basket: basketData,
      successMessage: "Item added to basket successfully",
    })
  } catch (error) {
    console.log(error)
    // res.redirect("/planets")
  }
}

module.exports = { addToCart }
