const Item = require('../models/item')

async function showItemDetails(req, res) {
  const item = await Item.findById(req.params.id)
  res.render('categories/items/show', {
    title: 'Item Details',
    item
  })
}

module.exports = {
  showItemDetails
}
