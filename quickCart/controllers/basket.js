const Basket = require('../models/basket')
const Item = require('../models/item')

const addToCart = async (req, res) => {
  try {
    // Item id
    // const paramId = req.params.id
    // const item = await Item.findById(paramId)
    // TODO Get category for this item
    // const category =
    const items = JSON.parse(req.body.items)
    //  const items = await Item.find({ itemType: category.categoryName })

    const basketId = req.user.basket
    const basket = await Basket.findById(basketId)
    // Only add items that were selected
    basket.items.push(req.params.id)
    await basket.save()
    console.log(`items typeof ${typeof items}`)
    console.log(`items ${items}`)
    res.render('categories/show', {
      title: 'Items For This Category',
      items
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = { addToCart }
