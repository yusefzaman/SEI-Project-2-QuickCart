const Item = require('../models/item')
const Review = require('../models/review')

async function create(req, res) {
  try {
    const item = await Item.findById(req.params.id)

    // Add the user-centric info to req.body (the new review)
    req.body.user = req.user._id
    req.body.userName = req.user.name
    req.body.userAvatar = req.user.avatar

    const review = await Review.create(req.body)
    item.review.push(review._id)
    await item.save()
    res.redirect(`/categories/items/show/${item._id}`)
  } catch (err) {
    console.log(err)
  }
}

async function deleteReview(req, res) {
  try {
    const itemId = req.body.itemId
    const userId = req.user._id
    const review = await Review.findByIdAndDelete(req.params.id, { userId })
    res.redirect(`/categories/items/show/${itemId}`)
  } catch (err) {
    console.log(err)
  }
}

async function updateReview(req, res) {
  try {
    const itemId = req.body.itemId
    const updatedReview = await Review.findByIdAndUpdate(req.params.id, {
      reviewContent: req.body.reviewContent
    })
    res.redirect(`/categories/items/show/${itemId}`)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  create,
  delete: deleteReview,
  update: updateReview
}
