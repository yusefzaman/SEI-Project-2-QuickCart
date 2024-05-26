<<<<<<< HEAD
const Category = require('../models/category')
const Item = require('../models/item')

async function show(req, res) {
  const item = await Item.findById(req.params.id)
  res.render('categories/items/show', {
    title: 'Item Details',
    item
=======
const Category = require("../models/category")
const Item = require("../models/item")

async function show(req, res) {
  const item = await Item.findById(req.params.id)
  res.render("categories/items/show", {
    title: "Item Details",
    item,
>>>>>>> origin/hawraa
  })
}

module.exports = {
<<<<<<< HEAD
  show
=======
  show,
>>>>>>> origin/hawraa
}
