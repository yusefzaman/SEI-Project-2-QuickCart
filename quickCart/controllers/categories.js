const Category = require('../models/category')
const Item = require('../models/item')

async function index(req, res) {
  const categories = await Category.find({})
  res.render('categories/index', { title: 'All categories', categories })
}

async function show(req, res) {
  const paramId = req.params.id
  const categories = await Category.findById(paramId)
  console.log(paramId)
  console.log(categories)
  const items = await Item.find({})
  res.render('categories/show', {
    title: 'The Category',
    categories,
    items
  })
}

async function showItemDetails(req, res) {
  console.log('id', req.params.id)
  const item = await Item.findById(req.params.id)
  res.render('categories/items/show', {
    title: 'Item Details',
    item
  })
}

module.exports = {
  index,
  show,
  showItemDetails
}
