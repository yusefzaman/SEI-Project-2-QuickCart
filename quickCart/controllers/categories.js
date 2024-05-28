const Category = require("../models/category")
const Item = require("../models/item")
const mongodb = require("mongodb")
const Basket = require("../models/basket")
const User = require("../models/user")

async function index(req, res) {
  const categories = await Category.find({})
  res.render("categories/index", { title: "All categories", categories })
}

async function show(req, res) {
  const paramId = req.params.id
  const categories = await Category.findById(paramId)
  const item = await Item.find({ itemType: categories.categoryName })
  const user = await User.findById(req.user.id).populate("basket")
  const basketId = user.basket._id
  const basket = await Basket.findById(basketId)
  res.render("categories/show", {
    title: "The Category",
    categories,
    item,
    basket,
  })
}

async function about(req, res) {
  res.render("categories/about", { title: "About" })
}

module.exports = {
  index,
  show,
  about,
}
