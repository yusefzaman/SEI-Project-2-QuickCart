const express = require('express')
const router = express.Router()
const categoriesCtrl = require('../controllers/categories')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', categoriesCtrl.index)
router.get('/about', categoriesCtrl.about)
router.get('/basket', ensureLoggedIn, categoriesCtrl.showBasket)
router.get('/:id', categoriesCtrl.show)
router.delete('/basket/:id', ensureLoggedIn, categoriesCtrl.deleteItem)

module.exports = router
