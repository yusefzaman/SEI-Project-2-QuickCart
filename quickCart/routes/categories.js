const express = require('express')
const router = express.Router()
const categoriesCtrl = require('../controllers/categories')

router.get('/', categoriesCtrl.index)
router.get('/about', categoriesCtrl.about)
router.get('/:id', categoriesCtrl.show)

module.exports = router
