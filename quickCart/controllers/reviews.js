const Item = require('../models/item')

async function create(req, res) {
  const item = await Item.findById(req.params.id)
  item.review.push(req.body)
  try {
    await review.save()
  } catch (err) {
    console.log(err)
  }
  res.redirect(`categories/items/show/${item._id}`)
}

module.exports = {
  create
}
