const Category = require('../models/category')
const Item = require('../models/item')

async function show(req, res) {
  const item = await Item.findById(req.params.id).populate('review')
  res.render('categories/items/show', {
    title: 'Item Details',
    item
  })
}

module.exports = {
  show
}
