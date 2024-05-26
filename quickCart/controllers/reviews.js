const Item = require('../models/item')
const Review = require('../models/review')

async function create(req, res) {
  try {
    const item = await Item.findById(req.params.id)
    // Create a review
    const review = await Review.create(req.body)
    // Push id of newly created review
    item.review.push(review._id)

    await item.save()
    res.redirect(`/categories/items/show/${item._id}`)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  create
}
