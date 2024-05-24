const Category = require("../models/category")

async function index(req, res) {
  const category = await Category.find({})
  res.render("categories/index", { title: "All categories", category })
}

module.exports = {
  index,
}
