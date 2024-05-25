const Review = require("../models/item")

async function create(req, res) {
  try {
    const category = await Review.findById(req.params.id)
    category.review.push(req.body)
    const addinfo = await category.save()
    // res.redirect(`/categories/${addinfo._id}`)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
}

module.exports = {
  create,
}
