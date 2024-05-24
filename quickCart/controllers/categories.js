const Category = require("../models/category")

async function index(req, res) {
  const categories = await Category.find({})
  res.render("categories/index", { title: "All categories", categories })
}

// async function create(req, res) {
//   try {
//     await Category.create(req.body)
//     res.redirect("/categories")
//   } catch (err) {
//     console.log(err)
//     res.render("/categories", { errorMsg: err.message })
//   }
// }
module.exports = {
  index,
  // create,
}
