const Category = require('../models/category')

async function index(req, res) {
  const categories = await Category.find({})
  res.render('categories/index', { title: 'All categories', categories })
}

module.exports = {
  index
}
