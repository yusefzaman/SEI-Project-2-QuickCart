var express = require('express')
var router = express.Router()
const basketController = require('../controllers/basket')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.post('/:id/baskets', ensureLoggedIn, basketController.addToCart)

module.exports = router
