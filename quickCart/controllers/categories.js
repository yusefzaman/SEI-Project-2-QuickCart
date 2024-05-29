const Category = require('../models/category')
const Item = require('../models/item')
const Basket = require('../models/basket')
const User = require('../models/user')

async function index(req, res) {
  const categories = await Category.find({})
  res.render('categories/index', { title: 'All categories', categories })
}

async function show(req, res) {
  const paramId = req.params.id
  const categories = await Category.findById(paramId)
  const items = await Item.find({ itemType: categories.categoryName })
  res.render('categories/show', {
    title: 'Items For This Category',
    items
  })
}

async function about(req, res) {
  res.render('categories/about', { title: 'About' })
}

const showBasket = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('basket')
    const basket = user.basket
    const basketItems = await Promise.all(
      basket.items.map(async (itemId) => {
        const item = await Item.findById(itemId)
        return item
      })
    )
    let totalPrice = 0
    for (const item of basketItems) {
      const price = item.itemPrice
      totalPrice += item.itemPrice
    }
    res.render('categories/basket', {
      title: 'My Basket:',
      basketItems,
      totalPrice
    })
  } catch (error) {
    console.error('Error fetching basket:', error)
    res.status(500).send('Error fetching basket')
  }
}

async function deleteItem(req, res) {
  try {
    const itemId = req.body.itemId
    const user = await User.findById(req.user.id).populate('basket')
    user.basket.items = user.basket.items.filter(
      (item) => item.toString() !== itemId
    )
    await user.basket.save()
    res.redirect(`/categories/basket/`)
  } catch (err) {
    console.log(err)
  }
}
module.exports = {
  deleteItem,
  showBasket,
  index,
  show,
  about
}
