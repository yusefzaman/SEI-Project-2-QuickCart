const Category = require('../models/category')
const Item = require('../models/item')

async function index(req, res) {
  const categories = await Category.find({})
  res.render('categories/index', { title: 'All categories', categories })
}

async function show(req, res) {
  const paramId = req.params.id
  const categories = await Category.findById(paramId)
  const items = await Item.find({ itemType: categories.categoryName })
  res.render('categories/show', {
    title: 'The Category',
    categories,
    items
  })
}

module.exports = {
  index,
  show
}
