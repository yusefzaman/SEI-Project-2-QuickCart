const Category = require('../models/category')
const Item = require('../models/item')

async function show(req, res) {
  const paramId = req.params.id
  const basket = await Basket.findById(paramId)
  const items = await Item.find({ itemType: basket.itemName })
  res.render('basket/index', {
    title: 'The Basket',
    basket,
    items
  })
}


module.exports = {
  show
}
