const Basket = require('../models/basket')
const Item = require('../models/item')

const addToCart = async (req, res) => {
  try {
    const items = JSON.parse(req.body.items)
    const basketId = req.user.basket
    const basket = await Basket.findById(basketId)
    basket.items.push(req.params.id)
    await basket.save()
    res.render('categories/show', {
      title: 'Items For This Category',
      items
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = { addToCart }
